import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { buildRouteToSourceMap } from '../src/build/lastUpdated';

function writeDoc(root: string, relative: string, frontmatter: string): string {
  const full = path.join(root, relative);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, `---\n${frontmatter}\n---\n\nBody\n`, 'utf8');
  return full;
}

describe('buildRouteToSourceMap', () => {
  let docsDir: string;

  beforeAll(() => {
    docsDir = fs.mkdtempSync(path.join(os.tmpdir(), 'push-mcp-docs-'));
  });

  afterAll(() => {
    fs.rmSync(docsDir, { recursive: true, force: true });
  });

  it('follows the repo conventions: number prefixes, slugs, and index files', () => {
    const constants = writeDoc(
      docsDir,
      'chain/03-build/99-Constants.mdx',
      'title: Constants\nslug: ./constants'
    );
    const intro = writeDoc(docsDir, 'chain/01-Intro-Push-Chain.mdx', 'title: Intro\nslug: /chain/intro');
    const plain = writeDoc(docsDir, 'chain/02-setup/01-wallets.mdx', 'title: Wallets');
    const index = writeDoc(docsDir, 'chain/index.mdx', 'title: Chain Home');

    const map = buildRouteToSourceMap(docsDir, '/docs');
    expect(map.get('/docs/chain/build/constants/')).toBe(constants);
    expect(map.get('/docs/chain/intro/')).toBe(intro);
    expect(map.get('/docs/chain/setup/wallets/')).toBe(plain);
    expect(map.get('/docs/chain/')).toBe(index);
  });
});
