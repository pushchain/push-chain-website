import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, 'blog');
const BLOG_LITE_DIR = path.join(__dirname, 'blog-lite');

// Get all blog directories sorted by date (newest first)
const getBlogDirectories = async () => {
  try {
    const items = await fs.readdir(BLOG_DIR, { withFileTypes: true });
    const blogDirs = items
      .filter(
        (item) =>
          item.isDirectory() &&
          !item.name.startsWith('.') &&
          item.name !== 'authors.yml'
      )
      .map((item) => item.name)
      .filter((name) => /^\d{4}-\d{2}-\d{2}-/.test(name)) // Only date-prefixed directories
      .sort((a, b) => b.localeCompare(a)); // Sort newest first

    return blogDirs;
  } catch (error) {
    console.error(chalk.red('Error reading blog directory:'), error.message);
    return [];
  }
};

// Create blog-lite directory with only recent blog posts
const createBlogLiteDirectory = async (keepCount = 10) => {
  console.log(
    chalk.blue('🚀 Creating blog-lite directory with recent posts...')
  );

  try {
    const blogDirs = await getBlogDirectories();

    if (blogDirs.length === 0) {
      console.log(chalk.yellow('📂 No blog posts found'));
      return;
    }

    // Remove existing blog-lite directory
    try {
      await fs.rm(BLOG_LITE_DIR, { recursive: true, force: true });
    } catch (error) {
      // Directory might not exist, which is fine
    }

    // Create fresh blog-lite directory
    await fs.mkdir(BLOG_LITE_DIR, { recursive: true });

    // Get the most recent blog posts to keep
    const blogsToKeep = blogDirs.slice(0, keepCount);
    const actualKeepCount = Math.min(keepCount, blogDirs.length);

    console.log(
      chalk.cyan(
        `📦 Copying ${actualKeepCount} most recent blog posts to blog-lite...`
      )
    );

    for (const blogDir of blogsToKeep) {
      const sourcePath = path.join(BLOG_DIR, blogDir);
      const destPath = path.join(BLOG_LITE_DIR, blogDir);

      try {
        await fs.cp(sourcePath, destPath, { recursive: true });
        console.log(chalk.gray(`   Copied: ${blogDir}`));
      } catch (error) {
        console.error(
          chalk.red(`   Failed to copy ${blogDir}:`),
          error.message
        );
      }
    }

    // Copy authors.yml file if it exists
    const authorsPath = path.join(BLOG_DIR, 'authors.yml');
    const authorsDestPath = path.join(BLOG_LITE_DIR, 'authors.yml');

    try {
      await fs.access(authorsPath);
      await fs.cp(authorsPath, authorsDestPath);
      console.log(chalk.gray('   Copied: authors.yml'));
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.log(
          chalk.yellow('⚠️  Could not copy authors.yml:'),
          error.message
        );
      }
    }

    console.log(
      chalk.green(
        `✅ Created blog-lite directory with ${actualKeepCount} recent posts`
      )
    );
    console.log(
      chalk.blue(
        `📊 Lite mode will use ${actualKeepCount} posts instead of ${blogDirs.length} total posts`
      )
    );
  } catch (error) {
    console.error(
      chalk.red('❌ Error creating blog-lite directory:'),
      error.message
    );
  }
};

// Clean up blog-lite directory
const cleanupBlogLiteDirectory = async () => {
  console.log(chalk.blue('🧹 Cleaning up blog-lite directory...'));

  try {
    // Check if blog-lite directory exists
    try {
      await fs.access(BLOG_LITE_DIR);
    } catch {
      console.log(
        chalk.yellow('📁 No blog-lite directory found, nothing to clean up.')
      );
      return;
    }

    // Remove the blog-lite directory
    await fs.rm(BLOG_LITE_DIR, { recursive: true, force: true });
    console.log(chalk.green('✅ Successfully cleaned up blog-lite directory'));
  } catch (error) {
    console.error(
      chalk.red('❌ Error cleaning up blog-lite directory:'),
      error.message
    );
  }
};

// Main function that handles blog management based on mode
export const prepAndMoveFilesFromTempLocationToActual = async (
  mode = 'full'
) => {
  console.log(chalk.blue(`🚀 Preparing files for ${mode} mode...`));

  if (mode === 'lite') {
    // Create blog-lite directory with recent posts
    await createBlogLiteDirectory(30);
  } else if (mode === 'full') {
    // Clean up blog-lite directory (full mode uses original blog directory)
    await cleanupBlogLiteDirectory();
  } else {
    console.log(chalk.yellow(`⚠️  Unknown mode: ${mode}, defaulting to full`));
    await cleanupBlogLiteDirectory();
  }
};

// If called directly from command line
if (import.meta.url === `file://${process.argv[1]}`) {
  const mode = process.argv[2] || 'full';
  await prepAndMoveFilesFromTempLocationToActual(mode);
}
