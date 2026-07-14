// Jest config for the MCP server workspace. Run with: yarn test:mcp
module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  transform: {
    // The site pins TypeScript 4.9; the MCP SDK's typings need TS 5 syntax,
    // so this workspace compiles with the aliased typescript5 package.
    '^.+\\.ts$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.test.json', compiler: 'typescript5' },
    ],
  },
  // The MCP SDK (integration test only) and the fixture build touch the
  // filesystem; keep workers low so temp dirs never race.
  maxWorkers: 2,
};
