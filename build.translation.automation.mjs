#!/usr/bin/env node

import chalk from 'chalk';
import crypto from 'crypto';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';
import { generateTranslationPrompt } from './build.translation.prompt.mjs';
import {
  createPushChainGlossary,
  validateAndCorrectTranslation,
} from './build.translation.validator.mjs';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const LOCALES_DIR = path.join(__dirname, 'static/locales');
const SOURCE_LANG = 'en';
const TRANSLATION_FILE = 'translation.json';
const BUILD_META_FILE = path.join(__dirname, 'translatemeta.json');
const TEMP_TRANSLATE_DIR = path.join(LOCALES_DIR);
const SOURCE_CHUNKS_DIR = path.join(LOCALES_DIR, SOURCE_LANG, '01-translate');

// Supported languages with their full names
const SUPPORTED_LANGUAGES = {
  ar: 'Arabic',
  de: 'German',
  es: 'Spanish',
  fr: 'French',
  hi: 'Hindi',
  id: 'Indonesian',
  ja: 'Japanese',
  ko: 'Korean',
  pt: 'Portuguese',
  ru: 'Russian',
  tr: 'Turkish',
  vi: 'Vietnamese',
  'zh-CN': 'Chinese (Simplified)',
};

// AI Provider configuration
const AI_PROVIDER = process.env.AI_PROVIDER || 'windsurf';

// Windsurf/Anthropic API configuration
const WINDSURF_CONFIG = {
  apiKey: process.env.WINDSURF_API_KEY,
  baseUrl: 'https://api.anthropic.com',
  model: process.env.CLOUD_AI_MODEL || 'claude-sonnet-4-20250514',
};

// Local AI configuration (OpenWebUI/Ollama)
const LOCAL_AI_CONFIG = {
  apiKey: process.env.LOCAL_AI_API_KEY || '', // Optional for local setups
  baseUrl: process.env.LOCAL_AI_BASE_URL || 'http://localhost:11434',
  model: process.env.LOCAL_AI_MODEL || 'llama3.1',
};

// Get current AI configuration based on provider
function getAIConfig(modelIndex = 0) {
  const provider = process.env.AI_PROVIDER || 'windsurf';
  const timeout = parseInt(process.env.AI_REQUEST_TIMEOUT) || 60000; // Default 60 seconds

  if (provider === 'windsurf') {
    return {
      provider: 'windsurf',
      apiKey: process.env.REACT_APP_WINDSURF_API_KEY,
      baseUrl: 'https://api.anthropic.com',
      model: 'claude-sonnet-4-20250514',
      timeout,
      availableModels: ['claude-sonnet-4-20250514'], // Only one model for windsurf
    };
  } else if (provider === 'local') {
    const modelString = process.env.LOCAL_AI_MODEL || 'llama3.1';
    const availableModels = modelString.split('|').map((m) => m.trim());
    const selectedModel = availableModels[modelIndex] || availableModels[0];
    return {
      provider: 'local',
      apiKey: process.env.LOCAL_AI_API_KEY, // Optional
      baseUrl: process.env.LOCAL_AI_BASE_URL,
      model: selectedModel,
      timeout,
      availableModels,
    };
  } else {
    throw new Error(`Unsupported AI provider: ${provider}`);
  }
}

// Rate limiting configuration - configurable via environment
const RATE_LIMIT = {
  maxCallsPerMinute: parseInt(process.env.AI_RATE_LIMIT_PER_MINUTE) || 5,
  callTimes: [],
};

// Token counting and chunk size validation - configurable via environment
const TOKEN_LIMITS = {
  maxInputTokens: parseInt(process.env.AI_MAX_INPUT_TOKENS) || 100000,
  maxChunkTokens: parseInt(process.env.AI_MAX_CHUNK_TOKENS) || 2000,
  avgCharsPerToken: parseFloat(process.env.AI_CHARS_PER_TOKEN) || 3.5,
};

// Rate limiting helper function
function waitForRateLimit() {
  const now = Date.now();
  const oneMinuteAgo = now - 60000; // 60 seconds ago

  // Remove calls older than 1 minute
  RATE_LIMIT.callTimes = RATE_LIMIT.callTimes.filter(
    (time) => time > oneMinuteAgo
  );

  // If we've made 5 calls in the last minute, wait
  if (RATE_LIMIT.callTimes.length >= RATE_LIMIT.maxCallsPerMinute) {
    const oldestCall = RATE_LIMIT.callTimes[0];
    const waitTime = oldestCall + 60000 - now;
    return Math.max(0, waitTime);
  }

  return 0;
}

// Record API call for rate limiting
function recordApiCall() {
  RATE_LIMIT.callTimes.push(Date.now());
}

/**
 * Estimate token count for text content
 */
function estimateTokens(text) {
  if (!text || typeof text !== 'string') return 0;

  // JSON has more structural overhead (brackets, quotes, commas)
  // Use conservative estimate
  return Math.ceil(text.length / TOKEN_LIMITS.avgCharsPerToken);
}

/**
 * Check if a chunk is too large for translation
 */
function isChunkTooLarge(chunkContent) {
  const jsonString = JSON.stringify(chunkContent, null, 2);
  const estimatedTokens = estimateTokens(jsonString);

  console.log(chalk.gray(`  📊 Estimated tokens: ${estimatedTokens}`));

  return estimatedTokens > TOKEN_LIMITS.maxChunkTokens;
}

/**
 * Recursively split JSON object into smaller chunks (3+ levels deep)
 */
function splitLargeChunk(chunkContent, chunkFileName, maxDepth = 10) {
  console.log(chalk.yellow(`📦 Splitting large chunk: ${chunkFileName}`));

  /**
   * Recursive function to split nested objects
   */
  function splitRecursively(obj, keyPath, depth = 0) {
    const chunks = [];
    const keys = Object.keys(obj);

    for (const key of keys) {
      const currentPath = keyPath ? `${keyPath}-${key}` : key;
      const subChunk = { [key]: obj[key] };
      const subChunkString = JSON.stringify(subChunk, null, 2);
      const subChunkTokens = estimateTokens(subChunkString);

      if (subChunkTokens <= TOKEN_LIMITS.maxChunkTokens) {
        // Chunk is small enough, add it
        chunks.push({
          content: subChunk,
          name: `${chunkFileName}-${currentPath}`,
          tokens: subChunkTokens,
        });
      } else if (
        depth < maxDepth &&
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        // Chunk is too large but we can split deeper
        console.log(
          chalk.blue(
            `  ${'  '.repeat(depth)}🔄 Level ${depth + 1}: Splitting ${currentPath} (${subChunkTokens} tokens)...`
          )
        );

        const deeperChunks = splitRecursively(obj[key], currentPath, depth + 1);

        if (deeperChunks.length > 0) {
          // Successfully split deeper
          chunks.push(...deeperChunks);
        } else {
          // Could not split deeper, include as-is
          console.log(
            chalk.yellow(
              `  ${'  '.repeat(depth)}💡 Cannot split ${currentPath} further, including anyway`
            )
          );
          chunks.push({
            content: subChunk,
            name: `${chunkFileName}-${currentPath}`,
            tokens: subChunkTokens,
          });
        }
      } else {
        // Chunk is too large but cannot split further (max depth reached or not an object)
        const reason =
          depth >= maxDepth ? 'max depth reached' : 'not a splittable object';
        console.log(
          chalk.yellow(
            `  ${'  '.repeat(depth)}⚠️  ${currentPath} too large (${subChunkTokens} tokens), ${reason}`
          )
        );
        chunks.push({
          content: subChunk,
          name: `${chunkFileName}-${currentPath}`,
          tokens: subChunkTokens,
        });
      }
    }

    return chunks;
  }

  // Start recursive splitting from top level
  const result = splitRecursively(chunkContent, '', 0);

  console.log(
    chalk.blue(
      `✂️  Split into ${result.length} sub-chunks (max depth: ${maxDepth})`
    )
  );
  return result;
}

/**
 * Calculate MD5 hash of a file
 */
async function calculateMD5(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return crypto.createHash('md5').update(content).digest('hex');
  } catch (error) {
    console.error(
      chalk.red(`❌ Error calculating MD5 for ${filePath}:`),
      error.message
    );
    throw error;
  }
}

/**
 * Dynamically discover all chunk files from en/01-translate directory
 */
async function discoverChunkFiles() {
  try {
    const files = await fs.readdir(SOURCE_CHUNKS_DIR);
    const chunkFiles = files.filter((file) => file.endsWith('.json')).sort(); // Maintain consistent order

    console.log(
      chalk.gray(
        `📁 Discovered ${chunkFiles.length} chunk files in ${SOURCE_CHUNKS_DIR}`
      )
    );
    return chunkFiles;
  } catch (error) {
    console.error(
      chalk.red('❌ Failed to discover chunk files:'),
      error.message
    );
    throw error;
  }
}

/**
 * Calculate MD5 hash for all chunk files combined
 */
async function calculateChunksMD5(chunkFiles) {
  try {
    let combinedContent = '';

    for (const chunkFile of chunkFiles) {
      const chunkPath = path.join(SOURCE_CHUNKS_DIR, chunkFile);
      const content = await fs.readFile(chunkPath, 'utf8');
      combinedContent += `${chunkFile}:${content}`;
    }

    return crypto.createHash('md5').update(combinedContent).digest('hex');
  } catch (error) {
    console.error(chalk.red('❌ Error calculating chunks MD5:'), error.message);
    throw error;
  }
}

/**
 * Load build metadata with enhanced chunk-level tracking
 */
async function loadBuildMeta() {
  try {
    const content = await fs.readFile(BUILD_META_FILE, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    // File doesn't exist or is invalid, return default
    return {
      translations: {
        generated: {
          ar: false,
          de: false,
          es: false,
          fr: false,
          hi: false,
          id: false,
          ja: false,
          ko: false,
          pt: false,
          ru: false,
          tr: false,
          vi: false,
          'zh-CN': false,
        },
      },
    };
  }
}

/**
 * Save build metadata
 */
async function saveBuildMeta(buildMeta) {
  await fs.writeFile(BUILD_META_FILE, JSON.stringify(buildMeta, null, 2));
}

/**
 * Initialize temp translation directory
 */
async function initTempTranslateDir() {
  try {
    await fs.mkdir(TEMP_TRANSLATE_DIR, { recursive: true });
    console.log(
      chalk.gray(
        `📁 Initialized temp translation directory: ${TEMP_TRANSLATE_DIR}`
      )
    );
  } catch (error) {
    console.error(
      chalk.red('❌ Failed to create temp translation directory:'),
      error.message
    );
    throw error;
  }
}

/**
 * Save translation to final location
 */
async function saveTranslation(languageCode, translatedContent) {
  const targetDir = path.join(LOCALES_DIR, languageCode);
  const targetPath = path.join(targetDir, TRANSLATION_FILE);

  try {
    await fs.mkdir(targetDir, { recursive: true });
    await fs.writeFile(
      targetPath,
      JSON.stringify(translatedContent, null, 2),
      'utf8'
    );
    console.log(chalk.green(`✅ Saved ${languageCode} translation`));
  } catch (error) {
    console.error(
      chalk.red(`❌ Failed to save ${languageCode} translation:`),
      error.message
    );
    throw error;
  }
}

/**
 * Combine all autotranslate files and move to final locations
 */
async function combineAndDeployTranslations(buildMeta, targetLanguages) {
  console.log(chalk.cyan('🔄 Combining and deploying all translations...'));

  // Determine which languages to process
  const languagesToProcess =
    targetLanguages || Object.keys(SUPPORTED_LANGUAGES);

  // Validate target languages if specified
  if (targetLanguages) {
    const invalidLanguages = targetLanguages.filter(
      (lang) => !SUPPORTED_LANGUAGES[lang]
    );
    if (invalidLanguages.length > 0) {
      throw new Error(
        `Unsupported languages: ${invalidLanguages.join(', ')}. Supported: ${Object.keys(SUPPORTED_LANGUAGES).join(', ')}`
      );
    }
    console.log(
      chalk.blue(
        `🎯 Processing specific languages: ${targetLanguages.map((lang) => SUPPORTED_LANGUAGES[lang]).join(', ')}`
      )
    );
  }

  const results = { success: [], failed: [] };

  console.log(
    chalk.gray(
      `Processing ${languagesToProcess.length} languages that need deployment...`
    )
  );

  for (const languageCode of languagesToProcess) {
    const autotranslatePath = path.join(
      LOCALES_DIR,
      languageCode,
      'autotranslate'
    );

    try {
      // Check if autotranslate directory exists
      const autotranslateFiles = await fs.readdir(autotranslatePath);
      const jsonFiles = autotranslateFiles.filter((file) =>
        file.endsWith('.json')
      );

      if (jsonFiles.length === 0) {
        console.warn(
          chalk.yellow(`⚠️  No JSON files found in ${autotranslatePath}`)
        );
        results.failed.push(languageCode);
        continue;
      }

      // Combine all JSON files
      let translatedContent = {};

      for (const jsonFile of jsonFiles) {
        const filePath = path.join(autotranslatePath, jsonFile);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const fileData = JSON.parse(fileContent);

        // Deep merge the content, handling duplicate keys
        translatedContent = deepMerge(translatedContent, fileData);
      }

      console.log(
        chalk.gray(`📄 Combined ${jsonFiles.length} files for ${languageCode}`)
      );

      // Save to final location
      await saveTranslation(languageCode, translatedContent);

      // Mark this language as successfully generated
      buildMeta.translations.generated[languageCode] = true;

      results.success.push(languageCode);
    } catch (error) {
      console.error(
        chalk.red(`❌ Failed to deploy ${languageCode}:`),
        error.message
      );
      results.failed.push(languageCode);
    }
  }

  return results;
}

/**
 * Deep merge objects, handling nested objects and arrays
 */
function deepMerge(target, source) {
  const result = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (
        typeof source[key] === 'object' &&
        source[key] !== null &&
        !Array.isArray(source[key]) &&
        typeof result[key] === 'object' &&
        result[key] !== null &&
        !Array.isArray(result[key])
      ) {
        // Recursively merge nested objects
        result[key] = deepMerge(result[key], source[key]);
      } else {
        // Overwrite with source value (handles primitives, arrays, and null)
        result[key] = source[key];
      }
    }
  }

  return result;
}

/**
 * Validate AI provider API configuration
 */
async function checkAIProvider() {
  const config = getAIConfig();

  console.log(
    chalk.blue(`🤖 Using AI Provider: ${config.provider.toUpperCase()}`)
  );

  if (config.provider === 'windsurf' && !config.apiKey) {
    console.error(
      chalk.red(
        '❌ WINDSURF_API_KEY environment variable is required for Windsurf provider'
      )
    );
    console.log(chalk.yellow('💡 Set your Windsurf API key:'));
    console.log(chalk.gray('   export WINDSURF_API_KEY="your_api_key_here"'));
    console.log(
      chalk.red(
        '\n🛑 Build process halted. Please set the API key and try again.'
      )
    );
    throw new Error('WINDSURF_API_KEY environment variable is required');
  }

  if (config.provider === 'local' && !config.baseUrl) {
    console.error(
      chalk.red(
        '❌ LOCAL_AI_BASE_URL environment variable is required for local provider'
      )
    );
    console.log(chalk.yellow('💡 Set your local AI endpoint:'));
    console.log(
      chalk.gray('   export LOCAL_AI_BASE_URL="http://localhost:11434"')
    );
    console.log(
      chalk.red(
        '\n🛑 Build process halted. Please set the endpoint and try again.'
      )
    );
    throw new Error('LOCAL_AI_BASE_URL environment variable is required');
  }

  try {
    // Check rate limit before making API call
    const waitTime = waitForRateLimit();
    if (waitTime > 0) {
      console.log(
        chalk.yellow(
          `⏳ Rate limit: waiting ${Math.ceil(waitTime / 1000)}s before API validation...`
        )
      );
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }

    // Record this API call
    recordApiCall();

    // Test API connectivity based on provider
    const config = getAIConfig();
    let testResponse;

    if (config.provider === 'windsurf') {
      testResponse = await fetch(`${config.baseUrl}/v1/messages`, {
        method: 'POST',
        headers: {
          'x-api-key': config.apiKey,
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: config.model,
          max_tokens: 4096,
          messages: [
            {
              role: 'user',
              content: 'Test API key validation. Respond with just "OK"',
            },
          ],
        }),
      });
    } else {
      // Local AI (OpenWebUI/Ollama) test
      const baseUrl = config.baseUrl.endsWith('/')
        ? config.baseUrl.slice(0, -1)
        : config.baseUrl;
      testResponse = await fetch(`${baseUrl}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(config.apiKey && { Authorization: `Bearer ${config.apiKey}` }),
        },
        body: JSON.stringify({
          model: config.model,
          prompt: 'Test connection. Respond with just "OK"',
          stream: false,
        }),
      });
    }

    if (testResponse.status === 401) {
      const providerName =
        config.provider === 'windsurf'
          ? 'WINDSURF_API_KEY'
          : 'LOCAL_AI_API_KEY';
      console.error(chalk.red(`❌ Invalid or expired ${providerName}`));
      console.log(chalk.yellow('💡 Please check your API configuration:'));
      console.log(
        chalk.gray(
          '   1. Verify the configuration is correct in your .env file'
        )
      );
      console.log(chalk.gray('   2. Check if the key/endpoint is valid'));
      console.log(chalk.gray('   3. Ensure you have proper API access'));
      console.log(
        chalk.red(
          '\n🛑 Build process halted. Please fix the API configuration and try again.'
        )
      );
      throw new Error(`Invalid ${providerName} - authentication failed`);
    }

    if (!testResponse.ok) {
      throw new Error(
        `${config.provider} API test failed: ${testResponse.status} ${testResponse.statusText}`
      );
    }

    console.log(
      chalk.green(
        `✅ ${config.provider.toUpperCase()} API validated successfully`
      )
    );
    return true;
  } catch (error) {
    if (error.message.includes('authentication failed')) {
      throw error; // Re-throw authentication errors
    }
    console.error(
      chalk.red(`❌ Failed to validate ${config.provider.toUpperCase()} API:`),
      error.message
    );
    throw new Error(
      `${config.provider.toUpperCase()} API validation failed: ${error.message}`
    );
  }
}

/**
 * Translate content using configured AI provider with fallback support
 */
async function translateContent(
  sourceContent,
  targetLanguage,
  languageName,
  correctionPrompt = null
) {
  // Check rate limit before making API call
  const waitTime = waitForRateLimit();
  if (waitTime > 0) {
    console.log(
      chalk.yellow(
        `⏳ Rate limit: waiting ${Math.ceil(
          waitTime / 1000
        )}s before translating to ${languageName}...`
      )
    );
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }

  // Record this API call
  recordApiCall();

  // Try each available model in sequence
  const config = getAIConfig();
  const maxRetries = config.availableModels.length;

  for (let modelIndex = 0; modelIndex < maxRetries; modelIndex++) {
    try {
      const currentConfig = getAIConfig(modelIndex);

      if (modelIndex > 0) {
        console.log(
          chalk.yellow(
            `🔄 Trying fallback model ${currentConfig.model} for ${languageName}...`
          )
        );
      }

      return await attemptTranslation(
        currentConfig,
        sourceContent,
        targetLanguage,
        languageName,
        correctionPrompt
      );
    } catch (error) {
      const isLastAttempt = modelIndex === maxRetries - 1;

      if (isLastAttempt) {
        console.error(
          chalk.red(`❌ All models failed for ${targetLanguage}:`),
          error.message
        );
        throw error;
      } else {
        console.warn(
          chalk.yellow(
            `⚠️ Model ${getAIConfig(modelIndex).model} failed for ${languageName}: ${error.message}`
          )
        );
        // Continue to next model
      }
    }
  }
}

/**
 * Translate content using alternate model (for final retry attempts)
 */
async function translateContentWithAlternateModel(
  sourceContent,
  targetLanguage,
  languageName,
  correctionPrompt = null
) {
  // Check rate limit before making API call
  const waitTime = waitForRateLimit();
  if (waitTime > 0) {
    console.log(
      chalk.yellow(
        `⏳ Rate limit: waiting ${Math.ceil(
          waitTime / 1000
        )}s before translating to ${languageName}...`
      )
    );
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }

  // Record this API call
  recordApiCall();

  // Get available models and start with the second one (alternate model)
  const config = getAIConfig();
  const availableModels = config.availableModels;
  
  if (availableModels.length < 2) {
    // If no alternate model available, fall back to regular translation
    console.log(
      chalk.yellow(
        `⚠️ No alternate model available for ${languageName}, using primary model...`
      )
    );
    return await translateContent(sourceContent, targetLanguage, languageName, correctionPrompt);
  }

  // Try alternate models (starting from index 1, then 0 as fallback)
  const modelOrder = [1, 0]; // Start with second model, then fallback to first
  
  for (let i = 0; i < modelOrder.length; i++) {
    const modelIndex = modelOrder[i];
    
    try {
      const currentConfig = getAIConfig(modelIndex);
      
      console.log(
        chalk.magenta(
          `🔄 Using alternate model ${currentConfig.model} for ${languageName}...`
        )
      );

      return await attemptTranslation(
        currentConfig,
        sourceContent,
        targetLanguage,
        languageName,
        correctionPrompt
      );
    } catch (error) {
      const isLastAttempt = i === modelOrder.length - 1;

      if (isLastAttempt) {
        console.error(
          chalk.red(`❌ All alternate models failed for ${targetLanguage}:`),
          error.message
        );
        throw error;
      } else {
        console.warn(
          chalk.yellow(
            `⚠️ Alternate model ${getAIConfig(modelIndex).model} failed for ${languageName}: ${error.message}`
          )
        );
        // Continue to next model
      }
    }
  }
}

/**
 * Translate content with less sensitive validation and automatic correction
 */
async function translateContentWithValidation(
  sourceContent,
  targetLanguage,
  languageName
) {
  // Create glossary for Push Chain terms
  const glossary = createPushChainGlossary();

  // Simple translation function for the validator
  const translateFunction = async (
    content,
    lang,
    langName,
    correctionPrompt
  ) => {
    return await translateContent(content, lang, langName, correctionPrompt);
  };

  // Initial translation
  const initialTranslation = await translateContent(
    sourceContent,
    targetLanguage,
    languageName
  );

  // Validate and potentially correct the translation (less sensitive mode)
  const result = await validateAndCorrectTranslation(
    sourceContent,
    initialTranslation,
    targetLanguage,
    languageName,
    translateFunction,
    {
      glossary,
      maxRetries: 1,
      showValidationDetails: true,
      strictMode: false, // Less sensitive validation
      checkEnglishLeakage: undefined, // Let validator decide based on language
    }
  );

  return result.content;
}

/**
 * Attempt translation with a specific AI configuration
 */
async function attemptTranslation(
  config,
  sourceContent,
  targetLanguage,
  languageName,
  correctionPrompt = null
) {
  try {
    // Generate prompt using shared function
    let prompt;
    if (correctionPrompt) {
      // For correction attempts, use the correction prompt
      prompt = `${await generateTranslationPrompt(
        sourceContent,
        targetLanguage,
        languageName
      )}\n\nIMPORTANT CORRECTION NEEDED:\n${correctionPrompt}`;
    } else {
      // Normal translation
      prompt = await generateTranslationPrompt(
        sourceContent,
        targetLanguage,
        languageName
      );
    }

    let response;

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeout);

    try {
      if (config.provider === 'windsurf') {
        response = await fetch(`${config.baseUrl}/v1/messages`, {
          method: 'POST',
          headers: {
            'x-api-key': config.apiKey,
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: config.model,
            max_tokens: 4000,
            messages: [
              {
                role: 'user',
                content: prompt,
              },
            ],
          }),
          signal: controller.signal,
        });
      } else {
        // Local AI (OpenWebUI/Ollama)
        const baseUrl = config.baseUrl.endsWith('/')
          ? config.baseUrl.slice(0, -1)
          : config.baseUrl;
        response = await fetch(`${baseUrl}/api/generate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(config.apiKey && { Authorization: `Bearer ${config.apiKey}` }),
          },
          body: JSON.stringify({
            model: config.model,
            prompt: prompt,
            stream: false,
          }),
          signal: controller.signal,
        });
      }
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      throw new Error(
        `${config.provider} API error: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    let translatedContent;

    if (config.provider === 'windsurf') {
      translatedContent = result.content[0].text;
    } else {
      translatedContent = result.response;
    }

    // Parse the JSON response with improved error handling
    const jsonMatch = translatedContent.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No valid JSON found in translation response');
    }

    let jsonString = jsonMatch[0];

    // Try to fix common JSON formatting issues
    try {
      return JSON.parse(jsonString);
    } catch (parseError) {
      console.warn(
        chalk.yellow(
          `⚠️  Initial JSON parse failed for ${targetLanguage}, attempting to fix...`
        )
      );

      // Common fixes for malformed JSON
      // 1. Remove trailing commas
      jsonString = jsonString.replace(/,\s*([}\]])/g, '$1');

      // 2. Fix unescaped quotes in values
      jsonString = jsonString.replace(
        /"([^"]*?)"([^":,}\]]*?)"([^":,}\]]*?)"/g,
        '"$1\\"$2\\"$3"'
      );

      // 3. Remove any text after the final closing brace
      const lastBraceIndex = jsonString.lastIndexOf('}');
      if (lastBraceIndex !== -1) {
        jsonString = jsonString.substring(0, lastBraceIndex + 1);
      }

      try {
        const parsed = JSON.parse(jsonString);
        console.log(
          chalk.green(
            `✅ Successfully fixed and parsed JSON for ${targetLanguage}`
          )
        );
        return parsed;
      } catch (secondError) {
        console.error(
          chalk.red(
            `❌ Failed to parse JSON for ${targetLanguage} even after fixes:`
          )
        );
        console.error(chalk.gray('Original error:'), parseError.message);
        console.error(chalk.gray('Second error:'), secondError.message);
        console.error(
          chalk.gray('JSON snippet:'),
          jsonString.substring(0, 500) + '...'
        );
        throw new Error(`JSON parsing failed: ${parseError.message}`);
      }
    }
  } catch (error) {
    console.error(
      chalk.red(`❌ Translation API error for ${targetLanguage}:`),
      error.message
    );
    throw error;
  }
}

/**
 * Count keys recursively in a nested object
 */
function countKeys(obj, path = '') {
  let count = 0;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const currentPath = path ? `${path}.${key}` : key;

      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        count += countKeys(obj[key], currentPath);
      } else {
        count++;
      }
    }
  }

  return count;
}

/**
 * Validate that translated language has same number of keys as English
 */
function validateTranslationKeys(englishContent, translatedContent, language) {
  const englishKeyCount = countKeys(englishContent);
  const translatedKeyCount = countKeys(translatedContent);

  console.log(
    chalk.blue(`🔍 Key count validation for ${language.toUpperCase()}:`)
  );
  console.log(`   English keys: ${englishKeyCount}`);
  console.log(`   ${language} keys: ${translatedKeyCount}`);

  if (englishKeyCount === translatedKeyCount) {
    console.log(chalk.green(`✅ Key count matches for ${language}`));
    return true;
  } else {
    const difference = Math.abs(englishKeyCount - translatedKeyCount);
    const status = translatedKeyCount > englishKeyCount ? 'extra' : 'missing';
    console.log(
      chalk.red(
        `❌ Key count mismatch for ${language}: ${difference} ${status} keys`
      )
    );
    return false;
  }
}

/**
 * Show verification samples
 */
async function showVerificationSamples(sourceContent, languages) {
  console.log(chalk.cyan('\n🔍 Translation Verification Samples:'));
  console.log(chalk.gray('─'.repeat(80)));

  // Get 20 random keys for verification
  const allKeys = Object.keys(sourceContent);
  const randomKeys = allKeys.sort(() => 0.5 - Math.random()).slice(0, 20);

  // Load Hindi and Spanish translations for comparison
  try {
    const hiPath = path.join(LOCALES_DIR, 'hi', TRANSLATION_FILE);
    const esPath = path.join(LOCALES_DIR, 'es', TRANSLATION_FILE);

    const hiContent = JSON.parse(await fs.readFile(hiPath, 'utf8'));
    const esContent = JSON.parse(await fs.readFile(esPath, 'utf8'));

    console.log(
      chalk.blue('Key'.padEnd(25)) +
        chalk.green('English'.padEnd(25)) +
        chalk.yellow('Hindi'.padEnd(25)) +
        chalk.cyan('Spanish')
    );
    console.log(chalk.gray('─'.repeat(100)));

    // Helper function to extract a sample text value from nested objects
    const extractSampleValue = (obj, maxLength = 22) => {
      if (typeof obj === 'string') {
        return obj.substring(0, maxLength);
      }
      if (typeof obj === 'object' && obj !== null) {
        // Recursively search for the first string value
        for (const value of Object.values(obj)) {
          const sample = extractSampleValue(value, maxLength);
          if (sample && sample !== '[object Object]') {
            return sample;
          }
        }
      }
      return '[no text found]';
    };

    for (const key of randomKeys) {
      // Extract sample text values from nested objects
      const enValue = extractSampleValue(sourceContent[key] || '');
      const hiValue = extractSampleValue(hiContent[key] || '');
      const esValue = extractSampleValue(esContent[key] || '');

      console.log(
        chalk.blue(key.substring(0, 22).padEnd(25)) +
          chalk.green(enValue.padEnd(25)) +
          chalk.yellow(hiValue.padEnd(25)) +
          chalk.cyan(esValue)
      );
    }

    console.log(chalk.gray('─'.repeat(100)));

    // Prompt user to continue
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // turning asking question off for now
    // const answer = await new Promise((resolve) => {
    //   rl.question(
    //     chalk.yellow('Do you want to continue with the build? (y/N): '),
    //     resolve
    //   );
    // });

    // rl.close();

    // if (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'yes') {
    //   console.log(chalk.yellow('⏹️  Build cancelled by user'));
    //   process.exit(0);
    // }
  } catch (error) {
    console.warn(
      chalk.yellow('⚠️  Could not load verification samples:'),
      error.message
    );
  }
}

/**
 * Detect language in text using simple heuristics
 */
function detectLanguage(text, expectedLanguage) {
  if (!text || typeof text !== 'string') return 'unknown';

  // Remove HTML tags, punctuation, numbers, and common symbols for analysis
  const cleanText = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/[.,!?;:()[\]{}"'`\-_+=@#$%^&*|\\~/]/g, ' ')
    .replace(/\d+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  if (!cleanText) return 'unknown';

  // Language detection patterns with improved Japanese detection
  const languagePatterns = {
    ko: /[\uac00-\ud7af]/, // Korean
    ar: /[\u0600-\u06ff]/, // Arabic
    hi: /[\u0900-\u097f]/, // Hindi/Devanagari
    ru: /[\u0400-\u04ff]/, // Cyrillic
    th: /[\u0e00-\u0e7f]/, // Thai
  };

  // Check for non-CJK languages first
  for (const [lang, pattern] of Object.entries(languagePatterns)) {
    if (pattern.test(cleanText)) {
      return lang;
    }
  }

  // Special handling for Japanese vs Chinese (CJK characters)
  const hasHiragana = /[\u3040-\u309f]/.test(cleanText);
  const hasKatakana = /[\u30a0-\u30ff]/.test(cleanText);
  const hasKanji = /[\u4e00-\u9fff]/.test(cleanText);

  // If we have Japanese kana, it's definitely Japanese
  if (hasHiragana || hasKatakana) {
    return 'ja';
  }

  // If we only have Kanji and we're expecting Japanese, assume it's Japanese
  if (hasKanji && expectedLanguage === 'ja') {
    return 'ja';
  }

  // If we only have Kanji and we're expecting Chinese, assume it's Chinese
  if (hasKanji && expectedLanguage === 'zh-CN') {
    return 'zh-CN';
  }

  // If we have Kanji but no expected language context, default to Chinese
  if (hasKanji) {
    return 'zh-CN';
  }

  // For Latin-based languages, use word patterns and common words
  const words = cleanText.split(/\s+/).filter((word) => word.length > 2);

  // Common words for different languages
  const commonWords = {
    es: [
      'que',
      'con',
      'para',
      'por',
      'una',
      'del',
      'las',
      'los',
      'como',
      'más',
      'pero',
      'sus',
      'ser',
      'está',
      'son',
      'desde',
      'hasta',
      'donde',
      'cuando',
      'muy',
      'bien',
      'también',
      'solo',
      'todo',
      'cada',
      'otro',
      'puede',
      'hacer',
      'tiempo',
      'año',
      'día',
      'vida',
      'mundo',
      'casa',
      'trabajo',
      'parte',
      'lugar',
      'forma',
      'manera',
      'ejemplo',
      'información',
      'sistema',
      'servicio',
      'producto',
      'empresa',
      'proyecto',
      'desarrollo',
      'proceso',
      'resultado',
      'problema',
      'solución',
    ],
    fr: [
      'que',
      'avec',
      'pour',
      'par',
      'une',
      'des',
      'les',
      'comme',
      'plus',
      'mais',
      'ses',
      'être',
      'est',
      'sont',
      'depuis',
      'jusqu',
      'très',
      'bien',
      'aussi',
      'seulement',
      'tout',
      'chaque',
      'autre',
      'peut',
      'faire',
      'temps',
      'année',
      'jour',
      'vie',
      'monde',
      'maison',
      'travail',
      'partie',
      'lieu',
      'forme',
      'manière',
      'exemple',
      'information',
      'système',
      'service',
      'produit',
      'entreprise',
      'projet',
      'développement',
      'processus',
      'résultat',
      'problème',
      'solution',
    ],
    de: [
      'dass',
      'mit',
      'für',
      'von',
      'eine',
      'der',
      'die',
      'wie',
      'mehr',
      'aber',
      'sein',
      'ist',
      'sind',
      'seit',
      'bis',
      'sehr',
      'gut',
      'auch',
      'nur',
      'alle',
      'jede',
      'andere',
      'kann',
      'machen',
      'zeit',
      'jahr',
      'tag',
      'leben',
      'welt',
      'haus',
      'arbeit',
      'teil',
      'ort',
      'form',
      'weise',
      'beispiel',
      'information',
      'system',
      'service',
      'produkt',
      'unternehmen',
      'projekt',
      'entwicklung',
      'prozess',
      'ergebnis',
      'problem',
      'lösung',
    ],
    pt: [
      'que',
      'com',
      'para',
      'por',
      'uma',
      'das',
      'los',
      'como',
      'mais',
      'mas',
      'seus',
      'ser',
      'está',
      'são',
      'desde',
      'até',
      'muito',
      'bem',
      'também',
      'apenas',
      'todo',
      'cada',
      'outro',
      'pode',
      'fazer',
      'tempo',
      'ano',
      'dia',
      'vida',
      'mundo',
      'casa',
      'trabalho',
      'parte',
      'lugar',
      'forma',
      'maneira',
      'exemplo',
      'informação',
      'sistema',
      'serviço',
      'produto',
      'empresa',
      'projeto',
      'desenvolvimento',
      'processo',
      'resultado',
      'problema',
      'solução',
    ],
    id: [
      'yang',
      'dengan',
      'untuk',
      'dari',
      'ini',
      'itu',
      'dan',
      'atau',
      'pada',
      'dalam',
      'akan',
      'adalah',
      'ada',
      'tidak',
      'juga',
      'dapat',
      'bisa',
      'hanya',
      'semua',
      'setiap',
      'lain',
      'buat',
      'waktu',
      'tahun',
      'hari',
      'hidup',
      'dunia',
      'rumah',
      'kerja',
      'bagian',
      'tempat',
      'bentuk',
      'cara',
      'contoh',
      'informasi',
      'sistem',
      'layanan',
      'produk',
      'perusahaan',
      'proyek',
      'pengembangan',
      'proses',
      'hasil',
      'masalah',
      'solusi',
    ],
    vi: [
      'mà',
      'với',
      'cho',
      'từ',
      'một',
      'các',
      'như',
      'thêm',
      'nhưng',
      'của',
      'là',
      'có',
      'không',
      'cũng',
      'được',
      'chỉ',
      'tất',
      'mỗi',
      'khác',
      'làm',
      'thời',
      'năm',
      'ngày',
      'cuộc',
      'thế',
      'nhà',
      'việc',
      'phần',
      'nơi',
      'hình',
      'cách',
      'ví',
      'thông',
      'hệ',
      'dịch',
      'sản',
      'công',
      'dự',
      'phát',
      'quá',
      'kết',
      'vấn',
      'giải',
    ],
    tr: [
      'ile',
      'için',
      'bir',
      'olan',
      'daha',
      'ama',
      'onun',
      'olan',
      'var',
      'yok',
      'da',
      'de',
      'bu',
      'şu',
      'her',
      'başka',
      'yapmak',
      'zaman',
      'yıl',
      'gün',
      'hayat',
      'dünya',
      'ev',
      'iş',
      'kısım',
      'yer',
      'şekil',
      'yol',
      'örnek',
      'bilgi',
      'sistem',
      'hizmet',
      'ürün',
      'şirket',
      'proje',
      'geliştirme',
      'süreç',
      'sonuç',
      'sorun',
      'çözüm',
    ],
  };

  // Count matches for expected language
  const expectedWords = commonWords[expectedLanguage] || [];
  const matches = words.filter((word) => expectedWords.includes(word)).length;
  const matchRatio = words.length > 0 ? matches / words.length : 0;

  // If we have a good match ratio (>10%) for expected language, consider it correct
  if (matchRatio > 0.1) {
    return expectedLanguage;
  }

  // Check for English words (common English words)
  const englishWords = [
    'the',
    'and',
    'for',
    'are',
    'but',
    'not',
    'you',
    'all',
    'can',
    'had',
    'her',
    'was',
    'one',
    'our',
    'out',
    'day',
    'get',
    'has',
    'him',
    'his',
    'how',
    'man',
    'new',
    'now',
    'old',
    'see',
    'two',
    'way',
    'who',
    'boy',
    'did',
    'its',
    'let',
    'put',
    'say',
    'she',
    'too',
    'use',
    'with',
    'have',
    'from',
    'they',
    'know',
    'want',
    'been',
    'good',
    'much',
    'some',
    'time',
    'very',
    'when',
    'come',
    'here',
    'just',
    'like',
    'long',
    'make',
    'many',
    'over',
    'such',
    'take',
    'than',
    'them',
    'well',
    'were',
    'what',
    'your',
    'work',
    'life',
    'only',
    'think',
    'also',
    'back',
    'after',
    'first',
    'well',
    'year',
    'work',
    'such',
    'make',
    'even',
    'most',
    'give',
    'many',
    'right',
    'seem',
    'small',
    'those',
    'under',
    'while',
  ];
  const englishMatches = words.filter((word) =>
    englishWords.includes(word)
  ).length;
  const englishRatio = words.length > 0 ? englishMatches / words.length : 0;

  if (englishRatio > 0.15) {
    return 'en';
  }

  // If no clear pattern, return unknown
  return 'unknown';
}

/**
 * Extract HTML tags from text
 */
function extractHtmlTags(text) {
  if (!text || typeof text !== 'string') return [];
  const tagRegex = /<[^>]+>/g;
  const matches = text.match(tagRegex) || [];
  return [...new Set(matches)]; // Remove duplicates
}

/**
 * Check if translation contains only target language or English
 */
function validateLanguagePurity(translation, languageCode, languageName) {
  const issues = [];

  function checkValue(value, keyPath) {
    if (typeof value === 'string' && value.trim()) {
      const detectedLang = detectLanguage(value, languageCode);
      const wordCount = value.trim().split(/\s+/).length;

      // Check for wrong language (not target, English, or unknown)
      if (
        detectedLang !== languageCode &&
        detectedLang !== 'en' &&
        detectedLang !== 'unknown'
      ) {
        issues.push({
          key: keyPath,
          value: value,
          detectedLanguage: detectedLang,
          issue: 'wrong_language',
        });
      }
      
      // Check for English-only translations that should be in target language
      // If no target language is detected AND it's English AND more than 4 words, it's likely untranslated
      else if (
        detectedLang === 'en' &&
        wordCount > 4 &&
        languageCode !== 'en' // Don't flag English translations when target is English
      ) {
        // Double-check: ensure no target language characters are present
        const hasTargetLanguage = detectLanguage(value, languageCode) === languageCode;
        
        if (!hasTargetLanguage) {
          issues.push({
            key: keyPath,
            value: value,
            detectedLanguage: 'en',
            issue: 'untranslated_english',
          });
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      for (const [key, subValue] of Object.entries(value)) {
        checkValue(subValue, keyPath ? `${keyPath}.${key}` : key);
      }
    }
  }

  checkValue(translation, '');
  return issues;
}

/**
 * Check if HTML tags were added that weren't in the original English
 */
function validateHtmlTags(
  translation,
  englishTranslation,
  languageCode,
  languageName
) {
  const issues = [];

  function checkValue(value, englishValue, keyPath) {
    if (typeof value === 'string' && typeof englishValue === 'string') {
      const translatedTags = extractHtmlTags(value);
      const englishTags = extractHtmlTags(englishValue);

      // Check for extra tags in translation
      const extraTags = translatedTags.filter(
        (tag) => !englishTags.includes(tag)
      );

      if (extraTags.length > 0) {
        issues.push({
          key: keyPath,
          value: value,
          englishValue: englishValue,
          extraTags: extraTags,
          issue: 'extra_html_tags',
        });
      }
    } else if (
      typeof value === 'object' &&
      value !== null &&
      typeof englishValue === 'object' &&
      englishValue !== null
    ) {
      for (const [key, subValue] of Object.entries(value)) {
        if (englishValue.hasOwnProperty(key)) {
          checkValue(
            subValue,
            englishValue[key],
            keyPath ? `${keyPath}.${key}` : key
          );
        }
      }
    }
  }

  checkValue(translation, englishTranslation, '');
  return issues;
}

/**
 * Validate translation quality and retry if issues found
 */
async function validateAndRetryTranslations(supportedLanguages) {
  try {
    // Load the English reference translation.json
    const enTranslationPath = path.join(LOCALES_DIR, 'en', 'translation.json');
    let enTranslation;

    try {
      const enContent = await fs.readFile(enTranslationPath, 'utf8');
      enTranslation = JSON.parse(enContent);
    } catch (error) {
      console.log(
        chalk.yellow(
          '⚠️  English translation.json not found, skipping validation'
        )
      );
      return;
    }

    console.log(
      chalk.gray(`📋 Validating translations against English reference`)
    );

    // Check each supported language
    for (const languageCode of supportedLanguages) {
      if (languageCode === 'en') continue; // Skip English itself

      const languageName = SUPPORTED_LANGUAGES[languageCode];
      const langTranslationPath = path.join(
        LOCALES_DIR,
        languageCode,
        'translation.json'
      );

      console.log(
        chalk.blue(`\n🔍 Validating ${languageName} (${languageCode})...`)
      );

      let langTranslation = {};
      try {
        const langContent = await fs.readFile(langTranslationPath, 'utf8');
        langTranslation = JSON.parse(langContent);
      } catch (error) {
        console.log(
          chalk.yellow(
            `⚠️  ${languageCode}/translation.json not found, skipping validation`
          )
        );
        continue;
      }

      // Check language purity
      const languageIssues = validateLanguagePurity(
        langTranslation,
        languageCode,
        languageName
      );

      // Check HTML tag integrity
      const htmlIssues = validateHtmlTags(
        langTranslation,
        enTranslation,
        languageCode,
        languageName
      );

      const totalIssues = languageIssues.length + htmlIssues.length;

      if (totalIssues === 0) {
        console.log(
          chalk.green(`✅ ${languageName}: No validation issues found`)
        );
        continue;
      }

      console.log(
        chalk.yellow(
          `⚠️  ${languageName}: Found ${totalIssues} validation issues`
        )
      );

      // Report language purity issues
      if (languageIssues.length > 0) {
        console.log(
          chalk.red(`   🌐 Language purity issues: ${languageIssues.length}`)
        );
        languageIssues.slice(0, 3).forEach((issue) => {
          if (issue.issue === 'untranslated_english') {
            console.log(
              chalk.red(
                `      • ${issue.key}: Untranslated English text (${issue.value.trim().split(/\s+/).length} words)`
              )
            );
          } else {
            console.log(
              chalk.red(
                `      • ${issue.key}: Contains ${issue.detectedLanguage} text`
              )
            );
          }
        });
        if (languageIssues.length > 3) {
          console.log(
            chalk.red(`      ... and ${languageIssues.length - 3} more`)
          );
        }
      }

      // Report HTML tag issues
      if (htmlIssues.length > 0) {
        console.log(chalk.red(`   🏷️  HTML tag issues: ${htmlIssues.length}`));
        htmlIssues.slice(0, 3).forEach((issue) => {
          console.log(
            chalk.red(
              `      • ${issue.key}: Added tags ${issue.extraTags.join(', ')}`
            )
          );
        });
        if (htmlIssues.length > 3) {
          console.log(chalk.red(`      ... and ${htmlIssues.length - 3} more`));
        }
      }

      // Collect problematic keys for retranslation
      const problematicKeys = [
        ...languageIssues.map((issue) => issue.key),
        ...htmlIssues.map((issue) => issue.key),
      ];

      // Retranslation loop with sanity check
      let retryAttempts = 0;
      const maxRetries = 3; // Maximum number of retranslation attempts
      let currentProblematicKeys = [...problematicKeys];
      
      while (currentProblematicKeys.length > 0 && retryAttempts < maxRetries) {
        retryAttempts++;
        
        // Check if using local AI - if so, process keys one by one
        const isLocalAI = process.env.AI_PROVIDER === 'local';
        const isLastAttempt = retryAttempts === maxRetries;
        
        // On final attempt, try to use alternate model if available
        let useAlternateModel = false;
        if (isLastAttempt) {
          const config = getAIConfig();
          if (config.availableModels.length > 1) {
            useAlternateModel = true;
            console.log(chalk.magenta(`🔄 ${languageName}: Final attempt using alternate model...`));
          }
        }
        
        if (isLocalAI) {
          const attemptLabel = useAlternateModel ? 
            `${currentProblematicKeys.length} problematic keys, retranslating with alternate model... (Final Attempt)` :
            `${currentProblematicKeys.length} problematic keys, retranslating one by one... (Attempt ${retryAttempts}/${maxRetries})`;
          
          console.log(chalk.blue(`🔄 ${languageName}: ${attemptLabel}`));
          
          let successCount = 0;
          let failCount = 0;
          let updatedTranslation = { ...langTranslation }; // Start with existing translation
          
          // Translate each problematic key individually
          for (let i = 0; i < currentProblematicKeys.length; i++) {
            const keyPath = currentProblematicKeys[i];
            const keyProgress = `[${i + 1}/${currentProblematicKeys.length}]`;
            
            console.log(chalk.gray(`   ${keyProgress} 🔄 ${keyPath}`));
            
            try {
              // Get the English value for this specific key
              const englishValue = getValueByPath(enTranslation, keyPath);
              
              // Create a minimal object with just this one key
              const singleKeyObject = {};
              setValueByPath(singleKeyObject, keyPath, englishValue);
              
              // For final attempt with alternate model, use translateContentWithAlternateModel
              let translatedSingle;
              if (useAlternateModel) {
                translatedSingle = await translateContentWithAlternateModel(singleKeyObject, languageCode, languageName);
              } else {
                translatedSingle = await translateContent(singleKeyObject, languageCode);
              }
              
              if (translatedSingle) {
                // Extract the translated value and set it in the updated translation
                const translatedValue = getValueByPath(translatedSingle, keyPath);
                setValueByPath(updatedTranslation, keyPath, translatedValue);
                
                console.log(
                  chalk.green(
                    `   ${keyProgress} ✅ ${keyPath} → "${translatedValue}"`
                  )
                );
                successCount++;
              } else {
                console.log(
                  chalk.red(`   ${keyProgress} ❌ ${keyPath} - Translation failed`)
                );
                failCount++;
              }
            } catch (error) {
              console.log(
                chalk.red(`   ${keyProgress} ❌ ${keyPath} - ${error.message}`)
              );
              failCount++;
            }
          }
          
          // Save the updated translation if we had any successes
          if (successCount > 0) {
            await fs.writeFile(
              langTranslationPath,
              JSON.stringify(updatedTranslation, null, 2),
              'utf8'
            );
            // Update langTranslation for next validation
            langTranslation = updatedTranslation;
          }
          
          // Show summary
          console.log(
            chalk.cyan(
              `📊 ${languageName}: Retranslation summary - ${successCount} success, ${failCount} failed`
            )
          );
          
          if (successCount > 0) {
            console.log(chalk.green(`✅ ${languageName}: Retranslated and updated ${successCount} keys`));
          }
        } else {
          // For non-local AI (Windsurf/Anthropic), use batch processing
          const attemptLabel = useAlternateModel ? 
            `Retranslating ${currentProblematicKeys.length} problematic keys with alternate model... (Final Attempt)` :
            `Retranslating ${currentProblematicKeys.length} problematic keys... (Attempt ${retryAttempts}/${maxRetries})`;
          
          console.log(chalk.blue(`🔄 ${languageName}: ${attemptLabel}`));
          
          // Create object with only problematic keys for retranslation
          const keysToRetranslate = {};
          for (const keyPath of currentProblematicKeys) {
            const englishValue = getValueByPath(enTranslation, keyPath);
            if (englishValue !== undefined) {
              setValueByPath(keysToRetranslate, keyPath, englishValue);
            }
          }
          
          if (Object.keys(keysToRetranslate).length > 0) {
            try {
              // For final attempt with alternate model, use translateContentWithAlternateModel
              let retranslatedContent;
              if (useAlternateModel) {
                retranslatedContent = await translateContentWithAlternateModel(keysToRetranslate, languageCode, languageName);
              } else {
                retranslatedContent = await translateContent(keysToRetranslate, languageCode);
              }
              
              if (retranslatedContent) {
                // Merge retranslated content back into the main translation
                const updatedTranslation = deepMerge(langTranslation, retranslatedContent);
                
                // Save the updated translation
                await fs.writeFile(
                  langTranslationPath,
                  JSON.stringify(updatedTranslation, null, 2),
                  'utf8'
                );
                
                // Update langTranslation for next validation
                langTranslation = updatedTranslation;
                
                console.log(chalk.green(`✅ ${languageName}: Retranslated and updated ${currentProblematicKeys.length} keys`));
              } else {
                console.log(chalk.red(`❌ ${languageName}: Failed to retranslate problematic keys`));
                break; // Exit retry loop if translation completely failed
              }
            } catch (error) {
              console.log(chalk.red(`❌ ${languageName}: Error during retranslation - ${error.message}`));
              break; // Exit retry loop on error
            }
          }
        }
        
        // Post-retranslation sanity check
        if (retryAttempts < maxRetries) {
          console.log(chalk.blue(`🔍 ${languageName}: Performing post-retranslation sanity check...`));
          
          // Re-validate the updated translation
          const postLanguageIssues = validateLanguagePurity(
            langTranslation,
            languageCode,
            languageName
          );
          
          const postHtmlIssues = validateHtmlTags(
            langTranslation,
            enTranslation,
            languageCode,
            languageName
          );
          
          const postTotalIssues = postLanguageIssues.length + postHtmlIssues.length;
          
          if (postTotalIssues === 0) {
            console.log(chalk.green(`✅ ${languageName}: Sanity check passed - all issues resolved`));
            break; // Exit retry loop - all issues resolved
          } else {
            console.log(chalk.yellow(`⚠️  ${languageName}: Sanity check found ${postTotalIssues} remaining issues`));
            
            // Update problematic keys for next retry
            currentProblematicKeys = [
              ...postLanguageIssues.map((issue) => issue.key),
              ...postHtmlIssues.map((issue) => issue.key),
            ];
            
            // Remove duplicates
            currentProblematicKeys = [...new Set(currentProblematicKeys)];
            
            if (retryAttempts < maxRetries) {
              console.log(chalk.yellow(`🔄 ${languageName}: Will retry ${currentProblematicKeys.length} remaining problematic keys...`));
            } else {
              console.log(chalk.red(`❌ ${languageName}: Maximum retries reached. ${currentProblematicKeys.length} issues remain unresolved.`));
              
              // Show remaining issues for debugging
              if (postLanguageIssues.length > 0) {
                console.log(chalk.red(`   🌐 Remaining language issues: ${postLanguageIssues.length}`));
                postLanguageIssues.slice(0, 2).forEach((issue) => {
                  console.log(chalk.red(`      • ${issue.key}: Contains ${issue.detectedLanguage} text`));
                });
              }
              
              if (postHtmlIssues.length > 0) {
                console.log(chalk.red(`   🏷️  Remaining HTML issues: ${postHtmlIssues.length}`));
                postHtmlIssues.slice(0, 2).forEach((issue) => {
                  console.log(chalk.red(`      • ${issue.key}: Added tags ${issue.extraTags.join(', ')}`));
                });
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.error(chalk.red('❌ Validation process failed:'), error.message);
    throw error;
  }
}

/**
 * Compare en translation.json with each language and retry missing keys
 */
async function retryMissingKeys(supportedLanguages) {
  try {
    // Load the English reference translation.json
    const enTranslationPath = path.join(LOCALES_DIR, 'en', 'translation.json');
    let enTranslation;

    try {
      const enContent = await fs.readFile(enTranslationPath, 'utf8');
      enTranslation = JSON.parse(enContent);
    } catch (error) {
      console.log(
        chalk.yellow(
          '⚠️  English translation.json not found, skipping missing key check'
        )
      );
      return;
    }

    const enKeys = getAllKeys(enTranslation);
    console.log(chalk.gray(`📋 English translation has ${enKeys.length} keys`));

    // Check each supported language
    for (const languageCode of supportedLanguages) {
      if (languageCode === 'en') continue; // Skip English itself

      const languageName = SUPPORTED_LANGUAGES[languageCode];
      const langTranslationPath = path.join(
        LOCALES_DIR,
        languageCode,
        'translation.json'
      );

      console.log(
        chalk.blue(`\n🔍 Checking ${languageName} (${languageCode})...`)
      );

      let langTranslation = {};
      try {
        const langContent = await fs.readFile(langTranslationPath, 'utf8');
        langTranslation = JSON.parse(langContent);
      } catch (error) {
        console.log(
          chalk.yellow(
            `⚠️  ${languageCode}/translation.json not found, will create from scratch`
          )
        );
      }

      const langKeys = getAllKeys(langTranslation);
      const missingKeys = enKeys.filter((key) => !langKeys.includes(key));
      const extraKeys = langKeys.filter((key) => !enKeys.includes(key));

      // Remove extra keys that don't exist in English
      if (extraKeys.length > 0) {
        console.log(
          chalk.yellow(
            `🗑️  ${languageName}: Removing ${extraKeys.length} extra keys not in English...`
          )
        );
        const keysToShow = extraKeys.slice(0, 3);
        console.log(
          chalk.gray(
            `   Extra keys: ${keysToShow.join(', ')}${extraKeys.length > 3 ? ` ... and ${extraKeys.length - 3} more` : ''}`
          )
        );

        // Remove extra keys from the translation
        for (const keyPath of extraKeys) {
          deleteValueByPath(langTranslation, keyPath);
        }
      }

      if (missingKeys.length === 0 && extraKeys.length === 0) {
        console.log(
          chalk.green(
            `✅ ${languageName}: All keys synchronized (${enKeys.length}/${enKeys.length})`
          )
        );
        continue;
      }

      let updatedTranslation = langTranslation;

      if (missingKeys.length > 0) {
        console.log(
          chalk.yellow(
            `🔄 ${languageName}: ${missingKeys.length} missing keys, translating one by one...`
          )
        );

        let successCount = 0;
        let failCount = 0;
        updatedTranslation = { ...langTranslation }; // Start with existing translation

        // Translate each missing key individually
        for (let i = 0; i < missingKeys.length; i++) {
          const keyPath = missingKeys[i];
          const keyProgress = `[${i + 1}/${missingKeys.length}]`;

          console.log(chalk.gray(`   ${keyProgress} 🔄 ${keyPath}`));

          try {
            // Get the English value for this specific key
            const englishValue = getValueByPath(enTranslation, keyPath);

            // Create a minimal object with just this one key
            const singleKeyObject = {};
            setValueByPath(singleKeyObject, keyPath, englishValue);

            // Translate this single key
            const translatedSingle = await translateContentWithValidation(
              singleKeyObject,
              languageCode,
              languageName
            );

            // Extract the translated value and set it in the updated translation
            const translatedValue = getValueByPath(translatedSingle, keyPath);
            setValueByPath(updatedTranslation, keyPath, translatedValue);

            console.log(
              chalk.green(
                `   ${keyProgress} ✅ ${keyPath} → "${translatedValue}"`
              )
            );
            successCount++;
          } catch (error) {
            console.log(
              chalk.red(`   ${keyProgress} ❌ ${keyPath} - ${error.message}`)
            );
            failCount++;
          }
        }

        console.log(
          chalk.blue(
            `📊 ${languageName}: Translation summary - ${successCount} success, ${failCount} failed`
          )
        );
      }

      // Save the updated translation (whether we translated missing keys, removed extra keys, or both)
      if (missingKeys.length > 0 || extraKeys.length > 0) {
        await fs.mkdir(path.dirname(langTranslationPath), { recursive: true });
        await fs.writeFile(
          langTranslationPath,
          JSON.stringify(updatedTranslation, null, 2),
          'utf8'
        );

        const finalKeys = getAllKeys(updatedTranslation);
        const actionDescription = [];
        if (missingKeys.length > 0)
          actionDescription.push(`added ${missingKeys.length} missing keys`);
        if (extraKeys.length > 0)
          actionDescription.push(`removed ${extraKeys.length} extra keys`);

        console.log(
          chalk.green(
            `✅ ${languageName}: Updated (${actionDescription.join(', ')}) - ${finalKeys.length}/${enKeys.length} keys`
          )
        );
      }
    }

    console.log(chalk.green('\n✅ Missing key check and retry completed'));
  } catch (error) {
    console.error(
      chalk.red('❌ Error during missing key retry:'),
      error.message
    );
  }
}

/**
 * Get all nested keys from an object as dot-notation paths
 */
function getAllKeys(obj, prefix = '') {
  let keys = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const currentPath = prefix ? `${prefix}.${key}` : key;

      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        keys = keys.concat(getAllKeys(obj[key], currentPath));
      } else {
        keys.push(currentPath);
      }
    }
  }

  return keys;
}

/**
 * Get value from object using dot-notation path
 */
function getValueByPath(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

/**
 * Set value in object using dot-notation path
 */
function setValueByPath(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();

  let current = obj;
  for (const key of keys) {
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }

  current[lastKey] = value;
}

/**
 * Delete value from object using dot-notation path
 */
function deleteValueByPath(obj, path) {
  const keys = path.split('.');
  const lastKey = keys.pop();

  let current = obj;
  for (const key of keys) {
    if (!(key in current) || typeof current[key] !== 'object') {
      return; // Path doesn't exist, nothing to delete
    }
    current = current[key];
  }

  delete current[lastKey];

  // Clean up empty parent objects
  if (Object.keys(current).length === 0 && keys.length > 0) {
    deleteValueByPath(obj, keys.join('.'));
  }
}

/**
 * Ensure autotranslate directory exists for a language
 */
async function ensureAutoTranslateDir(languageCode) {
  const autoTranslateDir = path.join(
    process.cwd(),
    'static',
    'locales',
    languageCode,
    'autotranslate'
  );
  await fs.mkdir(autoTranslateDir, { recursive: true });
  return autoTranslateDir;
}

/**
 * Extract all keys from a nested object with their values and paths
 */
function extractAllKeys(obj, prefix = '') {
  const keys = {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const currentPath = prefix ? `${prefix}.${key}` : key;
      
      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        // Recursively extract keys from nested objects
        Object.assign(keys, extractAllKeys(obj[key], currentPath));
      } else {
        // This is a leaf node (actual translatable value)
        keys[currentPath] = {
          value: obj[key],
          checksum: crypto.createHash('md5').update(String(obj[key])).digest('hex')
        };
      }
    }
  }
  
  return keys;
}

/**
 * Calculate checksums for all individual keys in a chunk
 */
function calculateKeyChecksums(chunkContent) {
  const keys = extractAllKeys(chunkContent);
  const keyChecksums = {};
  
  for (const [keyPath, keyData] of Object.entries(keys)) {
    keyChecksums[keyPath] = {
      checksum: keyData.checksum,
      value: keyData.value,
      lastUpdated: new Date().toISOString()
    };
  }
  
  return keyChecksums;
}

/**
 * Compare key checksums and identify changed keys
 */
function compareKeyChecksums(currentKeys, storedKeys) {
  const changedKeys = [];
  const newKeys = [];
  const deletedKeys = [];
  
  // Check for changed and new keys
  for (const [keyPath, keyData] of Object.entries(currentKeys)) {
    const storedKey = storedKeys[keyPath];
    
    if (!storedKey) {
      newKeys.push(keyPath);
    } else if (storedKey.checksum !== keyData.checksum) {
      changedKeys.push(keyPath);
    }
  }
  
  // Check for deleted keys
  for (const keyPath of Object.keys(storedKeys)) {
    if (!currentKeys[keyPath]) {
      deletedKeys.push(keyPath);
    }
  }
  
  return { changedKeys, newKeys, deletedKeys };
}


/**
 * Main function to automate translations with dynamic chunk-based tracking
 * @param {string[]} targetLanguages - Optional array of specific languages to process
 */
async function automateTranslations(targetLanguages = null) {
  console.log(
    chalk.blue('🌍 Starting smart iterative chunk-based translation...')
  );

  try {
    // Step 1: Discover chunk files dynamically
    const SOURCE_CHUNKS_DIR = path.join(
      process.cwd(),
      'static',
      'locales',
      'en',
      '01-translate'
    );
    const chunkFiles = await discoverChunkFiles(SOURCE_CHUNKS_DIR);
    console.log(
      chalk.gray(
        `📁 Discovered ${chunkFiles.length} chunk files in ${SOURCE_CHUNKS_DIR}`
      )
    );

    // Step 2: Calculate individual chunk checksums
    const currentChunkChecksums = {};
    for (const chunkFile of chunkFiles) {
      const chunkPath = path.join(SOURCE_CHUNKS_DIR, chunkFile);
      const chunkContent = await fs.readFile(chunkPath, 'utf8');
      currentChunkChecksums[chunkFile] = crypto
        .createHash('md5')
        .update(chunkContent)
        .digest('hex');
    }
    console.log(
      chalk.blue(`🧩 Calculated checksums for ${chunkFiles.length} chunks`)
    );

    // Display current configuration
    console.log(chalk.cyan('⚙️  Current Configuration:'));
    console.log(
      chalk.gray(
        `   • Rate Limit: ${RATE_LIMIT.maxCallsPerMinute} calls/minute`
      )
    );
    console.log(
      chalk.gray(
        `   • Max Input Tokens: ${TOKEN_LIMITS.maxInputTokens.toLocaleString()}`
      )
    );
    console.log(
      chalk.gray(
        `   • Max Chunk Tokens: ${TOKEN_LIMITS.maxChunkTokens.toLocaleString()}`
      )
    );
    console.log(
      chalk.gray(`   • Chars per Token: ${TOKEN_LIMITS.avgCharsPerToken}`)
    );
    console.log(
      chalk.gray(
        `   • Request Timeout: ${parseInt(process.env.AI_REQUEST_TIMEOUT) || 60000}ms`
      )
    );

    // Step 3: Load build metadata
    const buildMeta = await loadBuildMeta();
    if (!buildMeta.enChunks) buildMeta.enChunks = {};
    if (!buildMeta.languageChunks) buildMeta.languageChunks = {};

    // Step 4: Initialize languageChunks structure for all languages and chunks
    console.log(chalk.blue('🏗️ Initializing languageChunks structure...'));
    for (const languageCode of Object.keys(SUPPORTED_LANGUAGES)) {
      if (!buildMeta.languageChunks[languageCode]) {
        buildMeta.languageChunks[languageCode] = {};
        console.log(chalk.gray(`  ➕ Created language entry: ${languageCode}`));
      }

      // Ensure all discovered chunks exist for this language
      for (const chunkFile of chunkFiles) {
        if (!buildMeta.languageChunks[languageCode][chunkFile]) {
          buildMeta.languageChunks[languageCode][chunkFile] = {
            translated: false,
            checksum: null,
            lastUpdated: null,
          };
          console.log(
            chalk.gray(`    ➕ Added chunk ${languageCode}/${chunkFile}`)
          );
        }
      }
    }

    // Step 5: Enhanced key-level detection and tracking
    console.log(chalk.blue('🔍 Analyzing individual keys within chunks...'));
    
    const changedChunks = [];
    const chunkKeyChanges = {}; // Track which keys changed in each chunk
    
    for (const chunkFile of chunkFiles) {
      const chunkPath = path.join(SOURCE_CHUNKS_DIR, chunkFile);
      const chunkContent = JSON.parse(await fs.readFile(chunkPath, 'utf8'));
      
      // Calculate current key checksums for this chunk
      const currentKeyChecksums = calculateKeyChecksums(chunkContent);
      
      // Get stored key checksums
      const storedChunk = buildMeta.enChunks[chunkFile];
      const storedKeyChecksums = storedChunk?.keys || {};
      
      // Compare key checksums to detect changes
      const keyChanges = compareKeyChecksums(currentKeyChecksums, storedKeyChecksums);
      const hasKeyChanges = keyChanges.changedKeys.length > 0 || keyChanges.newKeys.length > 0 || keyChanges.deletedKeys.length > 0;
      
      if (hasKeyChanges) {
        changedChunks.push(chunkFile);
        chunkKeyChanges[chunkFile] = keyChanges;
        
        console.log(chalk.yellow(`🔄 Changed chunk detected: ${chunkFile}`));
        if (keyChanges.changedKeys.length > 0) {
          console.log(chalk.gray(`  📝 Changed keys: ${keyChanges.changedKeys.slice(0, 3).join(', ')}${keyChanges.changedKeys.length > 3 ? ` ... and ${keyChanges.changedKeys.length - 3} more` : ''}`));
        }
        if (keyChanges.newKeys.length > 0) {
          console.log(chalk.gray(`  ➕ New keys: ${keyChanges.newKeys.slice(0, 3).join(', ')}${keyChanges.newKeys.length > 3 ? ` ... and ${keyChanges.newKeys.length - 3} more` : ''}`));
        }
        if (keyChanges.deletedKeys.length > 0) {
          console.log(chalk.gray(`  🗑️ Deleted keys: ${keyChanges.deletedKeys.slice(0, 3).join(', ')}${keyChanges.deletedKeys.length > 3 ? ` ... and ${keyChanges.deletedKeys.length - 3} more` : ''}`));
        }
        
        // Update English chunk with new structure
        buildMeta.enChunks[chunkFile] = {
          checksum: currentChunkChecksums[chunkFile], // Overall chunk checksum
          lastUpdated: new Date().toISOString(),
          keys: currentKeyChecksums // Individual key tracking
        };
      } else {
        // No key changes, but ensure we have the enhanced structure
        if (!storedChunk?.keys) {
          console.log(chalk.gray(`📋 Upgrading ${chunkFile} to enhanced key tracking...`));
          buildMeta.enChunks[chunkFile] = {
            checksum: currentChunkChecksums[chunkFile],
            lastUpdated: storedChunk?.lastUpdated || new Date().toISOString(),
            keys: currentKeyChecksums
          };
        }
      }
    }

    if (changedChunks.length === 0) {
      console.log(
        chalk.green(
          '✅ No chunks changed. Checking translation completeness...'
        )
      );
    } else {
      console.log(
        chalk.yellow(
          `🔄 ${changedChunks.length} chunks changed. Will invalidate affected translations...`
        )
      );

      // Step 6: Enhanced key-level invalidation for changed chunks
      for (const chunkFile of changedChunks) {
        const keyChanges = chunkKeyChanges[chunkFile];
        
        for (const languageCode of Object.keys(SUPPORTED_LANGUAGES)) {
          // Initialize key tracking for this language chunk if not exists
          if (!buildMeta.languageChunks[languageCode][chunkFile].keys) {
            buildMeta.languageChunks[languageCode][chunkFile].keys = {};
          }
          
          // Mark specific changed/new keys as needing translation
          const keysToInvalidate = [...keyChanges.changedKeys, ...keyChanges.newKeys];
          
          for (const keyPath of keysToInvalidate) {
            buildMeta.languageChunks[languageCode][chunkFile].keys[keyPath] = {
              translated: false,
              checksum: null,
              lastUpdated: null
            };
          }
          
          // Remove deleted keys from language tracking
          for (const keyPath of keyChanges.deletedKeys) {
            delete buildMeta.languageChunks[languageCode][chunkFile].keys[keyPath];
          }
          
          // Update chunk-level status
          const allKeysTranslated = Object.values(buildMeta.languageChunks[languageCode][chunkFile].keys)
            .every(keyData => keyData.translated);
          
          buildMeta.languageChunks[languageCode][chunkFile].translated = allKeysTranslated;
          buildMeta.languageChunks[languageCode][chunkFile].checksum = allKeysTranslated ? 
            buildMeta.enChunks[chunkFile].checksum : null;
          buildMeta.languageChunks[languageCode][chunkFile].lastUpdated = allKeysTranslated ? 
            new Date().toISOString() : null;

          // Mark language as needing deployment when chunks change
          buildMeta.translations.generated[languageCode] = false;

          console.log(
            chalk.gray(
              `  ↳ Invalidated ${keysToInvalidate.length} keys in ${languageCode}/${chunkFile}`
            )
          );
        }
      }
    }

    // Save translatemeta.json with updated chunk information before AI validation
    if (changedChunks.length > 0) {
      console.log(chalk.blue('💾 Saving updated chunk information...'));
      await saveBuildMeta(buildMeta);
    }

    // Step 6: Validate AI Provider
    await checkAIProvider();

    // Step 7: Process each language with smart chunk-by-chunk translation
    const languagesToProcess =
      targetLanguages || Object.keys(SUPPORTED_LANGUAGES);

    // Validate target languages if specified
    if (targetLanguages) {
      const invalidLanguages = targetLanguages.filter(
        (lang) => !SUPPORTED_LANGUAGES[lang]
      );
      if (invalidLanguages.length > 0) {
        throw new Error(
          `Unsupported languages: ${invalidLanguages.join(', ')}. Supported: ${Object.keys(SUPPORTED_LANGUAGES).join(', ')}`
        );
      }
      console.log(
        chalk.blue(
          `🎯 Processing specific languages: ${targetLanguages.map((lang) => SUPPORTED_LANGUAGES[lang]).join(', ')}`
        )
      );
    }
    const results = { success: [], failed: [], skipped: [] };
    let completed = 0;
    const total = languagesToProcess.length;

    console.log(
      chalk.cyan(
        `\n🚀 Processing ${total} languages with smart chunk detection...`
      )
    );
    console.log(chalk.gray('─'.repeat(50)));

    for (const languageCode of languagesToProcess) {
      const languageName = SUPPORTED_LANGUAGES[languageCode];
      const progress = `[${completed + 1}/${total}]`;

      console.log(
        chalk.blue(`${progress} 🔄 ${languageName} (${languageCode})...`)
      );

      try {
        // NOTE: Don't skip based on buildMeta.translations.generated[languageCode]
        // That flag only controls final deployment, not chunk-level translation
        // We should always check individual chunk status regardless of deployment status

        // Initialize language chunk tracking
        if (!buildMeta.languageChunks[languageCode]) {
          buildMeta.languageChunks[languageCode] = {};
        }

        // Enhanced key-level determination of what needs translation
        const chunksToTranslate = [];
        const chunkKeysToTranslate = {}; // Track specific keys per chunk
        
        for (const chunkFile of chunkFiles) {
          const chunkStatus = buildMeta.languageChunks[languageCode][chunkFile];
          const enChunkKeys = buildMeta.enChunks[chunkFile]?.keys || {};
          
          // Check if chunk needs translation (either not translated or has untranslated keys)
          let needsTranslation = false;
          let keysToTranslate = [];
          
          if (!chunkStatus || !chunkStatus.translated) {
            // Chunk is not translated at all
            needsTranslation = true;
            if (chunkStatus?.keys && Object.keys(enChunkKeys).length > 0) {
              // Use key-level tracking to find specific keys
              for (const keyPath of Object.keys(enChunkKeys)) {
                const keyStatus = chunkStatus.keys[keyPath];
                if (!keyStatus || !keyStatus.translated) {
                  keysToTranslate.push(keyPath);
                }
              }
            } else {
              // No key-level tracking, translate entire chunk
              keysToTranslate = 'all';
            }
          } else if (chunkStatus.keys && Object.keys(enChunkKeys).length > 0) {
            // Chunk is marked as translated, but check individual keys
            for (const keyPath of Object.keys(enChunkKeys)) {
              const keyStatus = chunkStatus.keys[keyPath];
              if (!keyStatus || !keyStatus.translated) {
                keysToTranslate.push(keyPath);
              }
            }
            
            if (keysToTranslate.length > 0) {
              needsTranslation = true;
              console.log(chalk.yellow(`  🔍 ${chunkFile}: chunk marked translated but ${keysToTranslate.length} keys need translation`));
            }
          }
          
          if (needsTranslation) {
            chunksToTranslate.push(chunkFile);
            chunkKeysToTranslate[chunkFile] = keysToTranslate;
            
            if (Array.isArray(keysToTranslate)) {
              console.log(chalk.gray(`  🔑 ${chunkFile}: ${keysToTranslate.length} keys need translation`));
            } else {
              console.log(chalk.gray(`  📦 ${chunkFile}: full chunk needs translation`));
            }
          }
        }

        if (chunksToTranslate.length === 0) {
          console.log(
            chalk.gray(
              `${progress} ⏭️  ${languageName} - all chunks up to date, skipping`
            )
          );
          results.skipped.push(languageCode);
        } else {
          console.log(
            chalk.blue(
              `${progress} 📦 Translating ${chunksToTranslate.length}/${chunkFiles.length} chunks for ${languageCode}...`
            )
          );

          // Ensure autotranslate directory exists for this language
          const autoTranslateDir = await ensureAutoTranslateDir(languageCode);

          let allChunksSuccess = true;

          // Translate each needed chunk individually
          for (let i = 0; i < chunksToTranslate.length; i++) {
            const chunkFile = chunksToTranslate[i];
            const chunkProgress = `    [${i + 1}/${chunksToTranslate.length}]`;

            try {
              console.log(chalk.gray(`${chunkProgress} 🔄 ${chunkFile}...`));

              // Load individual chunk file
              const chunkPath = path.join(SOURCE_CHUNKS_DIR, chunkFile);
              const chunkContent = JSON.parse(
                await fs.readFile(chunkPath, 'utf8')
              );

              // Enhanced key-level translation with tracking
              const keysToTranslate = chunkKeysToTranslate[chunkFile];
              const isLocalAI = process.env.AI_PROVIDER === 'local';
              const useKeyLevelTranslation = keysToTranslate !== 'all' && Array.isArray(keysToTranslate);

              if (useKeyLevelTranslation) {
                console.log(
                  chalk.cyan(
                    `🔑 Processing ${keysToTranslate.length} specific keys in ${chunkFile}...`
                  )
                );

                let combinedTranslation = {};
                let successCount = 0;
                let failCount = 0;

                // Process each specific key that needs translation
                for (let k = 0; k < keysToTranslate.length; k++) {
                  const keyPath = keysToTranslate[k];
                  const keyProgress = `${chunkProgress}[${k + 1}/${keysToTranslate.length}]`;

                  console.log(chalk.gray(`   ${keyProgress} 🔄 ${keyPath}`));

                  try {
                    // Get the English value for this specific key
                    const englishValue = getValueByPath(chunkContent, keyPath);

                    // Create a minimal object with just this one key
                    const singleKeyObject = {};
                    setValueByPath(singleKeyObject, keyPath, englishValue);

                    // Translate this single key
                    const translatedSingle = await translateContentWithValidation(
                      singleKeyObject,
                      languageCode,
                      languageName
                    );

                    // Extract the translated value and set it in the combined translation
                    const translatedValue = getValueByPath(translatedSingle, keyPath);
                    setValueByPath(combinedTranslation, keyPath, translatedValue);

                    // Update key-level tracking
                    const enKeyData = buildMeta.enChunks[chunkFile].keys[keyPath];
                    buildMeta.languageChunks[languageCode][chunkFile].keys[keyPath] = {
                      translated: true,
                      checksum: enKeyData.checksum,
                      lastUpdated: new Date().toISOString()
                    };

                    // Save progress immediately after each successful key translation
                    await fs.writeFile(
                      BUILD_META_FILE,
                      JSON.stringify(buildMeta, null, 2),
                      'utf8'
                    );

                    console.log(
                      chalk.green(
                        `   ${keyProgress} ✅ ${keyPath} → "${translatedValue}" (saved)`
                      )
                    );
                    successCount++;
                  } catch (error) {
                    console.log(
                      chalk.red(
                        `   ${keyProgress} ❌ ${keyPath} - ${error.message}`
                      )
                    );
                    failCount++;
                  }
                }

                console.log(
                  chalk.blue(
                    `   📊 ${chunkFile}: ${successCount} success, ${failCount} failed`
                  )
                );

                // Ensure directory exists and save the translated chunk (partial or complete)
                await ensureAutoTranslateDir(languageCode);
                const translatedChunkPath = path.join(autoTranslateDir, chunkFile);
                await fs.writeFile(
                  translatedChunkPath,
                  JSON.stringify(combinedTranslation, null, 2),
                  'utf8'
                );
                
                // Update chunk-level status based on key completion
                const allKeysTranslated = Object.values(buildMeta.languageChunks[languageCode][chunkFile].keys)
                  .every(keyData => keyData.translated);
                
                buildMeta.languageChunks[languageCode][chunkFile].translated = allKeysTranslated;
                buildMeta.languageChunks[languageCode][chunkFile].checksum = allKeysTranslated ? 
                  buildMeta.enChunks[chunkFile].checksum : null;
                buildMeta.languageChunks[languageCode][chunkFile].lastUpdated = allKeysTranslated ? 
                  new Date().toISOString() : null;
              } else if (isLocalAI) {
                console.log(
                  chalk.cyan(
                    `🔑 Local AI detected - processing all ${chunkFile} keys one by one...`
                  )
                );

                // Get all keys from the chunk
                const allKeys = extractAllKeys(chunkContent);
                const allKeyPaths = Object.keys(allKeys);
                console.log(
                  chalk.gray(`   Found ${allKeyPaths.length} keys to translate`)
                );

                let combinedTranslation = {};
                let successCount = 0;
                let failCount = 0;

                // Initialize key tracking if not exists
                if (!buildMeta.languageChunks[languageCode][chunkFile].keys) {
                  buildMeta.languageChunks[languageCode][chunkFile].keys = {};
                }

                // Process each key individually
                for (let k = 0; k < allKeyPaths.length; k++) {
                  const keyPath = allKeyPaths[k];
                  const keyProgress = `${chunkProgress}[${k + 1}/${allKeyPaths.length}]`;

                  console.log(chalk.gray(`   ${keyProgress} 🔄 ${keyPath}`));

                  try {
                    // Get the English value for this specific key
                    const englishValue = getValueByPath(chunkContent, keyPath);

                    // Create a minimal object with just this one key
                    const singleKeyObject = {};
                    setValueByPath(singleKeyObject, keyPath, englishValue);

                    // Translate this single key
                    const translatedSingle = await translateContentWithValidation(
                      singleKeyObject,
                      languageCode,
                      languageName
                    );

                    // Extract the translated value and set it in the combined translation
                    const translatedValue = getValueByPath(translatedSingle, keyPath);
                    setValueByPath(combinedTranslation, keyPath, translatedValue);

                    // Update key-level tracking
                    const enKeyData = buildMeta.enChunks[chunkFile].keys[keyPath];
                    buildMeta.languageChunks[languageCode][chunkFile].keys[keyPath] = {
                      translated: true,
                      checksum: enKeyData.checksum,
                      lastUpdated: new Date().toISOString()
                    };

                    // Save progress immediately after each successful key translation
                    await fs.writeFile(
                      BUILD_META_FILE,
                      JSON.stringify(buildMeta, null, 2),
                      'utf8'
                    );

                    console.log(
                      chalk.green(
                        `   ${keyProgress} ✅ ${keyPath} → "${translatedValue}" (saved)`
                      )
                    );
                    successCount++;
                  } catch (error) {
                    console.log(
                      chalk.red(
                        `   ${keyProgress} ❌ ${keyPath} - ${error.message}`
                      )
                    );
                    failCount++;
                  }
                }

                console.log(
                  chalk.blue(
                    `   📊 ${chunkFile}: ${successCount} success, ${failCount} failed`
                  )
                );

                // Ensure directory exists and save the translated chunk
                await ensureAutoTranslateDir(languageCode);
                const translatedChunkPath = path.join(autoTranslateDir, chunkFile);
                await fs.writeFile(
                  translatedChunkPath,
                  JSON.stringify(combinedTranslation, null, 2),
                  'utf8'
                );
                
                // Update chunk-level status
                buildMeta.languageChunks[languageCode][chunkFile].translated = true;
                buildMeta.languageChunks[languageCode][chunkFile].checksum = buildMeta.enChunks[chunkFile].checksum;
                buildMeta.languageChunks[languageCode][chunkFile].lastUpdated = new Date().toISOString();
              } else if (isChunkTooLarge(chunkContent)) {
                console.log(
                  chalk.yellow(
                    `📦 Chunk ${chunkFile} is too large, splitting...`
                  )
                );

                // Split large chunk into smaller sub-chunks
                const subChunks = splitLargeChunk(chunkContent, chunkFile);

                // Translate each sub-chunk individually
                let combinedTranslation = {};

                for (let j = 0; j < subChunks.length; j++) {
                  const subChunk = subChunks[j];
                  const subChunkProgress = `${chunkProgress}.${j + 1}`;

                  console.log(
                    chalk.gray(
                      `${subChunkProgress} 🔄 ${subChunk.name} (${subChunk.tokens} tokens)...`
                    )
                  );

                  // Translate this specific sub-chunk
                  const translatedSubChunk =
                    await translateContentWithValidation(
                      subChunk.content,
                      languageCode,
                      languageName
                    );

                  // Merge sub-chunk translation into combined result
                  combinedTranslation = {
                    ...combinedTranslation,
                    ...translatedSubChunk,
                  };

                  console.log(
                    chalk.green(
                      `${subChunkProgress} ✅ ${subChunk.name} completed`
                    )
                  );
                }

                // Ensure directory exists and save combined translated chunk
                await ensureAutoTranslateDir(languageCode);
                const translatedChunkPath = path.join(
                  autoTranslateDir,
                  chunkFile
                );
                await fs.writeFile(
                  translatedChunkPath,
                  JSON.stringify(combinedTranslation, null, 2),
                  'utf8'
                );

                console.log(
                  chalk.blue(
                    `📦 Combined ${subChunks.length} sub-chunks into ${chunkFile}`
                  )
                );
              } else {
                // Translate this specific chunk normally
                const translatedChunk = await translateContentWithValidation(
                  chunkContent,
                  languageCode,
                  languageName
                );

                // Ensure directory exists and save translated chunk to autotranslate directory
                await ensureAutoTranslateDir(languageCode);
                const translatedChunkPath = path.join(
                  autoTranslateDir,
                  chunkFile
                );
                await fs.writeFile(
                  translatedChunkPath,
                  JSON.stringify(translatedChunk, null, 2),
                  'utf8'
                );
              }

              // Mark chunk as translated in buildmeta
              buildMeta.languageChunks[languageCode][chunkFile] = {
                translated: true,
                checksum: currentChunkChecksums[chunkFile],
                lastUpdated: new Date().toISOString(),
              };

              // Mark language as needing deployment since we translated a chunk
              buildMeta.translations.generated[languageCode] = false;

              // CRITICAL: Save translatemeta.json immediately after each chunk
              await saveBuildMeta(buildMeta);

              console.log(
                chalk.green(
                  `${chunkProgress} ✅ ${chunkFile} completed & saved to buildmeta`
                )
              );
            } catch (chunkError) {
              console.error(
                chalk.red(`${chunkProgress} ❌ ${chunkFile} failed:`),
                chunkError.message
              );
              allChunksSuccess = false;
              break;
            }
          }

          if (allChunksSuccess) {
            // Check if ALL chunks for this language are now translated
            const allTranslated = chunkFiles.every(
              (chunkFile) =>
                buildMeta.languageChunks[languageCode][chunkFile]?.translated
            );

            if (allTranslated) {
              // ALL chunks for this language are now translated - generate final translation.json
              console.log(
                chalk.blue(
                  `${progress} 🔗 All chunks complete! Generating translation.json for ${languageCode}...`
                )
              );
              const combinedTranslation = {};

              for (const chunkFile of chunkFiles) {
                const chunkPath = path.join(autoTranslateDir, chunkFile);
                const chunkContent = JSON.parse(
                  await fs.readFile(chunkPath, 'utf8')
                );
                // Use deep merge instead of Object.assign to properly combine nested objects
                const merged = deepMerge(combinedTranslation, chunkContent);
                Object.assign(combinedTranslation, merged);
              }

              // Validate key count before saving
              let keyValidationPassed = true;
              try {
                // Combine English chunks for validation reference
                const englishCombined = {};
                for (const chunkFile of chunkFiles) {
                  const englishChunkPath = path.join(
                    SOURCE_CHUNKS_DIR,
                    chunkFile
                  );
                  const englishChunkContent = JSON.parse(
                    await fs.readFile(englishChunkPath, 'utf8')
                  );
                  const merged = deepMerge(
                    englishCombined,
                    englishChunkContent
                  );
                  Object.assign(englishCombined, merged);
                }

                keyValidationPassed = validateTranslationKeys(
                  englishCombined,
                  combinedTranslation,
                  languageCode
                );
              } catch (englishReadError) {
                console.log(
                  chalk.yellow(
                    `⚠️ Could not validate ${languageCode} keys: English chunks not found`
                  )
                );
              }

              // Save final combined translation to locales directory (required by deploy)
              const finalTranslationPath = path.join(
                LOCALES_DIR,
                languageCode,
                'translation.json'
              );
              await fs.mkdir(path.dirname(finalTranslationPath), {
                recursive: true,
              });
              await fs.writeFile(
                finalTranslationPath,
                JSON.stringify(combinedTranslation, null, 2),
                'utf8'
              );

              console.log(
                chalk.green(
                  `${progress} ✅ ${languageName} - COMPLETE! Generated translation.json (${chunkFiles.length} chunks)`
                )
              );
            } else {
              const completedChunks = chunkFiles.filter(
                (chunkFile) =>
                  buildMeta.languageChunks[languageCode][chunkFile]?.translated
              ).length;
              console.log(
                chalk.yellow(
                  `${progress} ⏳ ${languageName} - progress: ${completedChunks}/${chunkFiles.length} chunks (${chunksToTranslate.length} just translated)`
                )
              );
            }

            results.success.push(languageCode);
          } else {
            results.failed.push(languageCode);
            console.log(
              chalk.red(
                `${progress} ❌ ${languageName} - failed during chunk processing`
              )
            );
          }
        }
      } catch (error) {
        console.error(
          chalk.red(`${progress} ❌ ${languageName} - failed:`),
          error.message
        );
        results.failed.push(languageCode);
      }

      completed++;
    }

    console.log(chalk.gray('─'.repeat(50)));

    // Step 8: Combine and deploy all translations
    const languagesNeedingDeployment = Object.keys(SUPPORTED_LANGUAGES).filter(
      (languageCode) => buildMeta.translations.generated[languageCode] === false
    );

    let deployResults = null;
    if (languagesNeedingDeployment.length > 0) {
      console.log(
        chalk.cyan(
          `\n📦 Deploying ${languagesNeedingDeployment.length} languages that need generation...`
        )
      );
      deployResults = await combineAndDeployTranslations(buildMeta);

      console.log(chalk.cyan('\n📦 Deployment Results:'));
      console.log(
        chalk.green(
          `✅ Successfully deployed: ${deployResults.success.length} languages`
        )
      );
      if (deployResults.failed.length > 0) {
        console.log(
          chalk.red(
            `❌ Failed to deploy: ${deployResults.failed.length} languages`
          )
        );
      }

      // Save updated buildMeta with generation status
      await saveBuildMeta(buildMeta);
    } else {
      console.log(
        chalk.gray('\n📦 All languages already generated, skipping deployment.')
      );
    }

    // Step 9: Show comprehensive results summary
    console.log(chalk.cyan('\n📊 Translation Process Summary:'));

    // Count current status from buildMeta
    const generatedLanguages = Object.keys(SUPPORTED_LANGUAGES).filter(
      (lang) => buildMeta.translations.generated[lang] === true
    );
    const pendingLanguages = Object.keys(SUPPORTED_LANGUAGES).filter(
      (lang) => buildMeta.translations.generated[lang] === false
    );

    console.log(
      chalk.green(
        `✅ Generated & Deployed: ${generatedLanguages.length} languages`
      )
    );
    console.log(
      chalk.yellow(
        `⏳ Pending Generation: ${pendingLanguages.length} languages`
      )
    );

    if (results.success.length > 0) {
      console.log(
        chalk.blue(`🔄 Processed this run: ${results.success.length} languages`)
      );
    }
    if (results.skipped.length > 0) {
      console.log(
        chalk.gray(
          `⏭️  Skipped (up-to-date): ${results.skipped.length} languages`
        )
      );
    }
    if (results.failed.length > 0) {
      console.log(chalk.red(`❌ Failed: ${results.failed.length} languages`));
      console.log(
        chalk.gray(`   Failed languages: ${results.failed.join(', ')}`)
      );
    }

    // Step 10: Show verification samples if any translations were processed or deployed
    const languagesForVerification =
      results.success.length > 0
        ? results.success
        : languagesNeedingDeployment.length > 0 &&
            deployResults?.success?.length > 0
          ? deployResults.success
          : [];

    if (languagesForVerification.length > 0) {
      // Load first chunk as sample for verification
      const sampleChunkPath = path.join(SOURCE_CHUNKS_DIR, chunkFiles[0]);
      const sampleContent = JSON.parse(
        await fs.readFile(sampleChunkPath, 'utf8')
      );
      await showVerificationSamples(sampleContent, languagesForVerification);
    } else if (generatedLanguages.length > 0) {
      console.log(
        chalk.gray(
          `\n🔍 All ${generatedLanguages.length} languages already generated. Use 'yarn translations:help' for verification options.`
        )
      );
    }

    // Step 11: Update build metadata with individual chunk checksums
    console.log(
      chalk.blue('📊 Updating translatemeta.json with chunk checksums...')
    );
    for (const chunkFile of chunkFiles) {
      buildMeta.enChunks[chunkFile] = {
        checksum: currentChunkChecksums[chunkFile],
        lastUpdated: new Date().toISOString(),
      };
      console.log(
        chalk.gray(
          `  ✅ Updated en chunk: ${chunkFile} (${currentChunkChecksums[chunkFile].substring(0, 8)}...)`
        )
      );
    }

    // Save translatemeta.json with updated checksums
    await saveBuildMeta(buildMeta);
    console.log(chalk.green('✅ Updated build metadata with chunk checksums'));

    // Debug: Show current buildmeta structure
    console.log(chalk.gray('🔍 translatemeta.json structure:'));
    console.log(
      chalk.gray(`  enChunks: ${Object.keys(buildMeta.enChunks).length} chunks`)
    );
    console.log(
      chalk.gray(
        `  languageChunks: ${Object.keys(buildMeta.languageChunks).length} languages`
      )
    );

    // Step 12: Cleanup temp directory
    // Files will be overwritten as needed - no cleanup required

    // Step 13: Validate translation quality and retry problematic translations
    console.log(chalk.blue('\n🔍 Step 13: Validating translation quality...'));
    await validateAndRetryTranslations(languagesToProcess);

    // Step 14: Compare with en translation.json and retry missing keys
    console.log(
      chalk.blue('\n📋 Step 14: Checking for missing keys and retrying...')
    );
    await retryMissingKeys(languagesToProcess);

    console.log(
      chalk.green('🎉 Optimized translation process completed successfully!')
    );
  } catch (error) {
    console.error(chalk.red('❌ Translation process failed:'), error.message);

    // Cleanup on error
    // Files will be overwritten as needed - no cleanup required
    throw error;
  }
}

/**
 * Show help information
 */
function showHelp() {
  console.log(chalk.blue('🌍 Push Chain Translation Automation'));
  console.log('');
  console.log(chalk.bold('Usage:'));
  console.log('  node build.translation.automation.mjs [language-codes...]');
  console.log('');
  console.log(chalk.bold('Examples:'));
  console.log(
    '  node build.translation.automation.mjs              # Process all languages'
  );
  console.log(
    '  node build.translation.automation.mjs hi           # Process Hindi only'
  );
  console.log(
    '  node build.translation.automation.mjs es fr de     # Process Spanish, French, German'
  );
  console.log('');
  console.log(chalk.bold('Supported Languages:'));
  Object.entries(SUPPORTED_LANGUAGES).forEach(([code, name]) => {
    console.log(`  ${code.padEnd(6)} - ${name}`);
  });
  console.log('');
}

/**
 * Main execution function
 */
async function main() {
  const args = process.argv.slice(2);

  // Show help if requested
  if (args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }

  console.log(chalk.blue('🌍 Push Chain Translation Automation (Optimized)'));
  console.log(chalk.gray('─'.repeat(60)));

  // Parse target languages from command line arguments
  let targetLanguages = null;
  if (args.length > 0) {
    targetLanguages = args.filter((arg) => !arg.startsWith('-'));
    if (targetLanguages.length === 0) {
      console.error(chalk.red('❌ No valid language codes provided'));
      showHelp();
      process.exit(1);
    }
  }

  // Check if source translation file exists
  const sourceTranslationPath = path.join(
    LOCALES_DIR,
    SOURCE_LANG,
    TRANSLATION_FILE
  );

  if (
    !(await fs
      .access(sourceTranslationPath)
      .then(() => true)
      .catch(() => false))
  ) {
    console.error(
      chalk.red(
        `❌ Source translation file not found: ${sourceTranslationPath}`
      )
    );
    process.exit(1);
  }

  // Start the optimized translation process
  await automateTranslations(targetLanguages);
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(
      chalk.red('❌ Translation automation failed:'),
      error.message
    );
    process.exit(1);
  });
}

export { automateTranslations };
