import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';

const monoRepoURL = 'https://github.com/pushchain/push-chain-sdk/pull/';

const coreChangeLogMeta = {
  url: 'https://raw.githubusercontent.com/pushchain/push-chain-sdk/refs/heads/main/packages/core/CHANGELOG.md',
  packageName: '@pushchain/core',
  mdxStartMarker:
    '## [@pushchain/core](https://www.npmjs.com/package/@pushchain/core)',
  mdxEndMarker:
    '## [@pushchain/ui-kit](https://www.npmjs.com/package/@pushchain/ui-kit)',
};

// Prep for deployment starts everything
export const prepForDocsChangelog = async () => {
  console.log(chalk.green('Starting Changelog in Docs Prebuild...'));

  // Fetch the changelog content
  const coreChangeLog = await fetchChangeLog(coreChangeLogMeta.url);

  if (coreChangeLog) {
    // Parse the changelog entries
    const entries = parseChangelogEntries(
      coreChangeLog,
      coreChangeLogMeta.packageName
    );

    if (entries.length > 0) {
      // Format the entries for MDX
      const formattedContent = formatEntriesForMDX(
        entries,
        coreChangeLogMeta.packageName
      );

      // Update the Changelog.mdx file
      await updateChangelogFile(formattedContent);
      console.log(chalk.green('Changelog updated successfully!'));
    } else {
      console.log(chalk.yellow('No changelog entries found'));
    }
  } else {
    console.log(chalk.red('Failed to fetch changelog'));
  }
};

/**
 * Fetch the changelog content from the URL
 * @param {string} url - URL to fetch the changelog from
 * @returns {string|null} - The changelog content or null if failed
 */
const fetchChangeLog = async (url) => {
  console.log(chalk.grey(`Fetching Changelog... ${url}`));
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }
    const text = await response.text();
    console.log(chalk.green(`Fetched Successfully`));
    return text;
  } catch (error) {
    console.error(chalk.red(`Error fetching changelog: ${error.message}`));
    return null;
  }
};

/**
 * Parse changelog entries from the raw content
 * @param {string} content - The raw changelog content
 * @param {string} packageName - The package name to filter entries
 * @returns {Array} - Array of parsed changelog entries
 */
const parseChangelogEntries = (content, packageName) => {
  if (!content) return [];

  // Split the content by the separator
  const sections = content.split('---').filter(Boolean);
  const entries = [];

  for (const section of sections) {
    const trimmedSection = section.trim();
    if (!trimmedSection) continue;

    // Check if this section is for the package we're interested in
    if (trimmedSection.includes(packageName)) {
      // Extract version and date
      const versionMatch = trimmedSection.match(
        new RegExp(`${packageName}@([\\d.]+)\\s*\\(([^)]+)\\)`)
      );

      if (versionMatch) {
        const [, version, date] = versionMatch;

        // Extract changes
        const changes = [];
        const lines = trimmedSection.split('\n').slice(1); // Skip the first line with version

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('-')) {
            changes.push(trimmedLine.substring(1).trim());
          }
        }

        entries.push({
          version,
          date,
          changes,
        });
      }
    }
  }

  return entries;
};

/**
 * Format changelog entries for MDX
 * @param {Array} entries - The parsed changelog entries
 * @param {string} packageName - The package name
 * @returns {string} - Formatted content for MDX
 */
const formatEntriesForMDX = (entries, packageName) => {
  let mdxContent = `## [${packageName}](https://www.npmjs.com/package/${packageName})\n\n`;

  for (const entry of entries) {
    mdxContent += `### ${entry.version} (${entry.date})\n\n`;

    if (entry.changes.length > 0) {
      // Categorize changes by type
      const features = [];
      const chores = [];
      const fixes = [];
      const others = [];

      for (const change of entry.changes) {
        if (change.startsWith('feat:')) {
          features.push(formatChange(change, 'feat:'));
        } else if (change.startsWith('chore:')) {
          chores.push(formatChange(change, 'chore:'));
        } else if (change.startsWith('fix:')) {
          fixes.push(formatChange(change, 'fix:'));
        } else {
          others.push(formatChange(change, ''));
        }
      }

      // Add features section if there are any
      if (features.length > 0) {
        mdxContent += `#### Features\n\n`;
        for (const feature of features) {
          mdxContent += `- ${feature}\n`;
        }
        mdxContent += '\n';
      }

      // Add chores section if there are any
      if (chores.length > 0) {
        mdxContent += `#### Chores\n\n`;
        for (const chore of chores) {
          mdxContent += `- ${chore}\n`;
        }
        mdxContent += '\n';
      }

      // Add fixes section if there are any
      if (fixes.length > 0) {
        mdxContent += `#### Fixes\n\n`;
        for (const fix of fixes) {
          mdxContent += `- ${fix}\n`;
        }
        mdxContent += '\n';
      }

      // Add other changes if there are any
      if (others.length > 0) {
        mdxContent += `#### Other Changes\n\n`;
        for (const other of others) {
          mdxContent += `- ${other}\n`;
        }
        mdxContent += '\n';
      }
    }
  }

  return mdxContent;
};

// format individual change
const formatChange = (change, keyword) => {
  const formattedChange = change.replace(keyword, '').trim();

  // check if change has PR number
  const prNumber = formattedChange.match(/\((#\d+)\)/);
  if (prNumber) {
    return `${formattedChange.replace(` (${prNumber[1]})`, '')} [${prNumber[1]}](${monoRepoURL}${prNumber[1].replace('#', '')})`;
  }
  return formattedChange;
};

/**
 * Update the Changelog.mdx file with the formatted content
 * @param {string} newContent - The new content to insert
 */
const updateChangelogFile = async (newContent) => {
  const changelogPath = path.join(
    process.cwd(),
    'docs',
    'chain',
    '999-Changelog.mdx'
  );

  try {
    // Read the current content of the file
    console.log(chalk.grey(`Reading changelog file: ${changelogPath}`));
    const fileContent = await fs.readFile(changelogPath, 'utf8');

    // Find the positions of the start and end markers in the file
    const startMarkerPos = fileContent.indexOf(
      coreChangeLogMeta.mdxStartMarker
    );
    const endMarkerPos = fileContent.indexOf(coreChangeLogMeta.mdxEndMarker);

    if (startMarkerPos === -1 || endMarkerPos === -1) {
      console.log(chalk.red('Could not find markers in the changelog file'));
      return;
    }

    // Create the new file content by replacing the section between markers
    const newFileContent =
      fileContent.substring(0, startMarkerPos) +
      newContent +
      '\n\n' +
      fileContent.substring(endMarkerPos);

    // Write the updated content back to the file
    console.log(chalk.grey('Writing updated changelog to file...'));
    await fs.writeFile(changelogPath, newFileContent, 'utf8');

    console.log(chalk.green('Changelog file updated successfully'));
  } catch (error) {
    console.error(chalk.red(`Error updating changelog file: ${error.message}`));
  }
};
