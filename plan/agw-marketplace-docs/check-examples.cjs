const fs = require('fs'),
  path = require('path'),
  ts = require('typescript5');
const root = process.cwd();
const version = require('@pushchain/core/package.json').version;
if (version !== '6.0.27-alpha.9')
  throw new Error('Expected published SDK 6.0.27-alpha.9, got ' + version);
console.log('Checking installed @pushchain/core@' + version);
let failed = false;
for (const folder of ['05-agentic-wallets', '06-agentic-marketplace']) {
  const dir = path.join(root, 'docs/chain/03-build', folder);
  for (const name of fs.readdirSync(dir).sort()) {
    const blocks = [
      ...fs
        .readFileSync(path.join(dir, name), 'utf8')
        .matchAll(/```ts\n([\s\S]*?)```/g),
    ].map((m) => m[1]);
    if (!blocks.length) continue;
    const file = path.join(root, 'plan/agw-marketplace-docs', folder + '.ts');
    fs.writeFileSync(file, blocks.join('\n'));
    const p = ts.createProgram([file], {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.CommonJS,
      moduleResolution: ts.ModuleResolutionKind.NodeJs,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
    });
    const ds = ts.getPreEmitDiagnostics(p);
    if (ds.length) {
      failed = true;
      console.log(
        ts.formatDiagnosticsWithColorAndContext(ds, {
          getCanonicalFileName: (f) => f,
          getCurrentDirectory: () => root,
          getNewLine: () => '\n',
        })
      );
    } else console.log(name + ': ' + blocks.length + ' blocks passed');
    fs.unlinkSync(file);
  }
}
process.exitCode = failed ? 1 : 0;
