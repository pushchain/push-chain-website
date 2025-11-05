#!/usr/bin/env node

/**
 * Upgrade script to convert existing translatemeta.json to enhanced key-level tracking
 * This script preserves existing data and only generates keys for unchanged chunks
 */

import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import chalk from 'chalk';

// Utility functions
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

async function upgradeTranslateMeta() {
  console.log(chalk.blue('🔄 Starting translatemeta.json upgrade to enhanced key-level tracking...'));
  
  try {
    // Load existing translatemeta.json
    const translateMetaPath = path.join(process.cwd(), 'translatemeta.json');
    const translateMetaContent = await fs.readFile(translateMetaPath, 'utf8');
    const buildMeta = JSON.parse(translateMetaContent);
    
    console.log(chalk.gray('📋 Loaded existing translatemeta.json'));
    
    // Source chunks directory
    const SOURCE_CHUNKS_DIR = path.join(process.cwd(), 'static', 'locales', 'en', '01-translate');
    
    // Discover chunk files
    const chunkFiles = (await fs.readdir(SOURCE_CHUNKS_DIR))
      .filter(file => file.endsWith('.json'))
      .sort();
    
    console.log(chalk.gray(`📁 Found ${chunkFiles.length} chunk files`));
    
    // Calculate current chunk checksums
    const currentChunkChecksums = {};
    for (const chunkFile of chunkFiles) {
      const chunkPath = path.join(SOURCE_CHUNKS_DIR, chunkFile);
      const chunkContent = await fs.readFile(chunkPath, 'utf8');
      currentChunkChecksums[chunkFile] = crypto
        .createHash('md5')
        .update(chunkContent)
        .digest('hex');
    }
    
    // Initialize enhanced structure if not exists
    if (!buildMeta.enChunks) buildMeta.enChunks = {};
    if (!buildMeta.languageChunks) buildMeta.languageChunks = {};
    
    let unchangedCount = 0;
    let changedCount = 0;
    let newCount = 0;
    
    // Process each chunk
    for (const chunkFile of chunkFiles) {
      const chunkPath = path.join(SOURCE_CHUNKS_DIR, chunkFile);
      const chunkContent = JSON.parse(await fs.readFile(chunkPath, 'utf8'));
      
      const currentChecksum = currentChunkChecksums[chunkFile];
      const storedChunk = buildMeta.enChunks[chunkFile];
      const storedChecksum = storedChunk?.checksum;
      
      // Calculate key checksums for this chunk
      const keyChecksums = calculateKeyChecksums(chunkContent);
      
      if (currentChecksum === storedChecksum) {
        // Chunk is unchanged - generate keys without invalidating translations
        console.log(chalk.green(`✅ ${chunkFile} - unchanged, generating keys`));
        
        buildMeta.enChunks[chunkFile] = {
          checksum: currentChecksum,
          lastUpdated: storedChunk?.lastUpdated || new Date().toISOString(),
          keys: keyChecksums
        };
        
        unchangedCount++;
      } else if (storedChunk) {
        // Chunk has changed - generate keys and invalidate translations
        console.log(chalk.yellow(`🔄 ${chunkFile} - changed, invalidating translations`));
        
        buildMeta.enChunks[chunkFile] = {
          checksum: currentChecksum,
          lastUpdated: new Date().toISOString(),
          keys: keyChecksums
        };
        
        // Invalidate all language translations for this chunk
        for (const languageCode of Object.keys(buildMeta.languageChunks || {})) {
          if (buildMeta.languageChunks[languageCode][chunkFile]) {
            buildMeta.languageChunks[languageCode][chunkFile].translated = false;
            buildMeta.languageChunks[languageCode][chunkFile].checksum = null;
            buildMeta.languageChunks[languageCode][chunkFile].lastUpdated = null;
            
            // Initialize key tracking structure
            buildMeta.languageChunks[languageCode][chunkFile].keys = {};
            for (const keyPath of Object.keys(keyChecksums)) {
              buildMeta.languageChunks[languageCode][chunkFile].keys[keyPath] = {
                translated: false,
                checksum: null,
                lastUpdated: null
              };
            }
          }
        }
        
        changedCount++;
      } else {
        // New chunk - generate keys and prepare for translation
        console.log(chalk.blue(`➕ ${chunkFile} - new chunk, preparing for translation`));
        
        buildMeta.enChunks[chunkFile] = {
          checksum: currentChecksum,
          lastUpdated: new Date().toISOString(),
          keys: keyChecksums
        };
        
        newCount++;
      }
    }
    
    // Upgrade existing language chunks to include key tracking
    for (const languageCode of Object.keys(buildMeta.languageChunks || {})) {
      for (const chunkFile of chunkFiles) {
        if (buildMeta.languageChunks[languageCode][chunkFile]) {
          const langChunk = buildMeta.languageChunks[languageCode][chunkFile];
          
          // Add key tracking if not exists and chunk is translated
          if (!langChunk.keys && langChunk.translated) {
            const enKeys = buildMeta.enChunks[chunkFile]?.keys || {};
            langChunk.keys = {};
            
            for (const keyPath of Object.keys(enKeys)) {
              langChunk.keys[keyPath] = {
                translated: true, // Assume existing translations are complete
                checksum: enKeys[keyPath].checksum,
                lastUpdated: langChunk.lastUpdated || new Date().toISOString()
              };
            }
            
            console.log(chalk.gray(`  📝 Added key tracking for ${languageCode}/${chunkFile} (${Object.keys(enKeys).length} keys)`));
          }
        }
      }
    }
    
    // Create backup of original file
    const backupPath = `${translateMetaPath}.backup.${Date.now()}`;
    await fs.writeFile(backupPath, translateMetaContent, 'utf8');
    console.log(chalk.gray(`💾 Created backup: ${path.basename(backupPath)}`));
    
    // Save upgraded translatemeta.json
    await fs.writeFile(translateMetaPath, JSON.stringify(buildMeta, null, 2), 'utf8');
    
    console.log(chalk.green('\n✅ translatemeta.json upgrade completed!'));
    console.log(chalk.cyan('📊 Summary:'));
    console.log(chalk.gray(`  • Unchanged chunks: ${unchangedCount} (keys generated, translations preserved)`));
    console.log(chalk.gray(`  • Changed chunks: ${changedCount} (keys generated, translations invalidated)`));
    console.log(chalk.gray(`  • New chunks: ${newCount} (keys generated, ready for translation)`));
    console.log(chalk.gray(`  • Total chunks processed: ${chunkFiles.length}`));
    
    // Show sample of enhanced structure
    const sampleChunk = Object.keys(buildMeta.enChunks)[0];
    if (sampleChunk && buildMeta.enChunks[sampleChunk].keys) {
      const keyCount = Object.keys(buildMeta.enChunks[sampleChunk].keys).length;
      console.log(chalk.blue(`\n🔍 Sample enhanced structure (${sampleChunk}):`));
      console.log(chalk.gray(`  • Chunk-level checksum: ${buildMeta.enChunks[sampleChunk].checksum.substring(0, 8)}...`));
      console.log(chalk.gray(`  • Individual keys tracked: ${keyCount}`));
      console.log(chalk.gray(`  • Key-level checksums: ✅`));
      console.log(chalk.gray(`  • Timestamps: ✅`));
    }
    
  } catch (error) {
    console.error(chalk.red('❌ Error during upgrade:'), error.message);
    process.exit(1);
  }
}

// Run the upgrade
upgradeTranslateMeta();
