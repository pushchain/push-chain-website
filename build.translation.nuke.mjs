#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function removeDirectory(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
      return true;
    }
    return false;
  } catch (error) {
    log(`Error removing directory ${dirPath}: ${error.message}`, 'red');
    return false;
  }
}

function removeFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    return false;
  } catch (error) {
    log(`Error removing file ${filePath}: ${error.message}`, 'red');
    return false;
  }
}

function resetTranslateMeta() {
  const translationMetaFile = path.join(__dirname, 'translatemeta.json');
  
  try {
    if (fs.existsSync(translationMetaFile)) {
      const metaContent = JSON.parse(fs.readFileSync(translationMetaFile, 'utf8'));
      
      // Reset language chunks while preserving English chunk structure
      if (metaContent.languageChunks) {
        for (const languageCode of Object.keys(metaContent.languageChunks)) {
          if (languageCode !== 'en') { // Preserve English if it exists
            for (const chunkFile of Object.keys(metaContent.languageChunks[languageCode])) {
              // Reset chunk-level translation status
              metaContent.languageChunks[languageCode][chunkFile].translated = false;
              metaContent.languageChunks[languageCode][chunkFile].checksum = null;
              metaContent.languageChunks[languageCode][chunkFile].lastUpdated = null;
              
              // Reset all key-level translation status if exists
              if (metaContent.languageChunks[languageCode][chunkFile].keys) {
                for (const keyPath of Object.keys(metaContent.languageChunks[languageCode][chunkFile].keys)) {
                  metaContent.languageChunks[languageCode][chunkFile].keys[keyPath].translated = false;
                  metaContent.languageChunks[languageCode][chunkFile].keys[keyPath].checksum = null;
                  metaContent.languageChunks[languageCode][chunkFile].keys[keyPath].lastUpdated = null;
                }
              }
            }
          }
        }
      }
      
      // Reset translation generation status
      if (metaContent.translations && metaContent.translations.generated) {
        for (const languageCode of Object.keys(metaContent.translations.generated)) {
          if (languageCode !== 'en') {
            metaContent.translations.generated[languageCode] = false;
          }
        }
      }
      
      // Save the reset metadata
      fs.writeFileSync(translationMetaFile, JSON.stringify(metaContent, null, 2), 'utf8');
      log('✅ Reset: translatemeta.json (preserved English chunks, reset all translations)', 'green');
      return true;
    } else {
      log('⚠️  Not found: translatemeta.json', 'yellow');
      return false;
    }
  } catch (error) {
    log(`❌ Error resetting translatemeta.json: ${error.message}`, 'red');
    return false;
  }
}

function main() {
  log('🧹 Starting enhanced translation nuke process...', 'cyan');
  log('   Enhanced for key-level tracking support', 'gray');
  log('', 'reset');

  const localesDir = path.join(__dirname, 'static', 'locales');
  
  let removedDirectories = 0;
  let totalDirectories = 0;
  let removedFiles = 0;
  let totalFiles = 0;

  // Remove all autotranslate directories and translation.json files
  if (fs.existsSync(localesDir)) {
    const languageDirs = fs
      .readdirSync(localesDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    for (const langDir of languageDirs) {
      if (langDir === 'en') {
        log(`⏭️  Skipping: ${langDir} (English source preserved)`, 'blue');
        continue;
      }
      
      const langPath = path.join(localesDir, langDir);
      const autotranslateDir = path.join(langPath, 'autotranslate');
      const translationFile = path.join(langPath, 'translation.json');
      
      totalDirectories++;
      totalFiles++;

      // Remove autotranslate directory
      if (removeDirectory(autotranslateDir)) {
        log(`✅ Removed: ${langDir}/autotranslate/`, 'green');
        removedDirectories++;
      } else {
        log(`⚠️  Not found: ${langDir}/autotranslate/`, 'yellow');
      }
      
      // Remove translation.json file
      if (removeFile(translationFile)) {
        log(`✅ Removed: ${langDir}/translation.json`, 'green');
        removedFiles++;
      } else {
        log(`⚠️  Not found: ${langDir}/translation.json`, 'yellow');
      }
    }
  } else {
    log('⚠️  Locales directory not found', 'yellow');
  }

  // Reset translatemeta.json (preserve structure, reset translation status)
  const metaFileReset = resetTranslateMeta();

  log('', 'reset');
  log('📊 Enhanced Nuke Summary:', 'bold');
  log(
    `   • Autotranslate directories removed: ${removedDirectories}/${totalDirectories}`,
    'cyan'
  );
  log(
    `   • Translation.json files removed: ${removedFiles}/${totalFiles}`,
    'cyan'
  );
  log(
    `   • Translation metadata reset: ${metaFileReset ? 'Yes' : 'No'}`,
    'cyan'
  );
  log(
    `   • Key-level tracking preserved: ${metaFileReset ? 'Yes' : 'N/A'}`,
    'cyan'
  );
  log('', 'reset');
  
  if (removedDirectories > 0 || removedFiles > 0 || metaFileReset) {
    log('🎉 Enhanced translation nuke completed successfully!', 'green');
    log('   ✅ All auto-translated content removed', 'green');
    log('   ✅ English (en) source translations preserved', 'green');
    log('   ✅ Enhanced key-level tracking structure preserved', 'green');
    log('   ✅ Translation progress reset for fresh start', 'green');
  } else {
    log('ℹ️  No auto-translated content found to remove.', 'blue');
  }

  log('', 'reset');
  log('💡 Next steps:', 'bold');
  log(
    '   • Run "yarn translations:generate" to start fresh translations',
    'cyan'
  );
  log(
    '   • Enhanced system will only translate changed/new keys',
    'cyan'
  );
  log(
    '   • Or run "yarn translations:generate:force" to nuke and regenerate',
    'cyan'
  );
  log(
    '   • Use "node upgrade-translatemeta.mjs" to upgrade to key-level tracking',
    'cyan'
  );
}

main();
