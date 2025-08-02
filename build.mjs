import chalk from 'chalk';

import { prepForPreviewDeployment } from './build.preview.mjs';

import { prepForDocsChangelog } from './build.docs.changelog.mjs';

// Prep for deployment starts everything
const prepForDeployment = async (appEnv) => {
  console.log(chalk.green('Starting Custom Deployment Prebuild...'));

  // Do changelog in docs
  await prepForDocsChangelog();

  // Do preview deployment
  await prepForPreviewDeployment(appEnv);
};

var args = process.argv.slice(2);
await prepForDeployment(args[0]);
