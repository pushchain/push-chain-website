# push.org Docs MCP Server

A read-only [Model Context Protocol](https://modelcontextprotocol.io) server exposing push.org documentation and the Push Chain agent layer to AI agents. All heavy work happens at build time inside a Docusaurus plugin; the runtime is a single stateless serverless function that answers JSON-RPC over the Streamable HTTP transport.

```
docusaurus build
      |
      v
postBuild hook (plugins/docusaurus-plugin-push-mcp)
      |  walks rendered HTML, extracts clean markdown,
      |  builds the search index, copies agent-layer files
      v
build/mcp/
  manifest.json      page list, sections, build hash, timestamps, doc count
  index.json         serialized MiniSearch index
  docs/*.md          one clean markdown file per page, with frontmatter
  agents/*.json      snapshot of the six agent-layer files
  skipped.json       pages excluded from the index, with reasons
      |
      |  bundled into the deployment via vercel.json includeFiles
      v
/api/mcp (api/mcp.ts -> mcp/src/runtime)
  stateless Streamable HTTP endpoint, artifacts loaded once per
  cold start and cached in module scope
```

## Architecture decision record

### Use the existing docusaurus-plugin-mcp-server package, or write our own?

Decision: write a minimal in-house plugin. Stated before any code, per the project brief.

[scalvert/docusaurus-plugin-mcp-server](https://github.com/scalvert/docusaurus-plugin-mcp-server) (v1.0.0, actively maintained) was evaluated first. Its architecture matches this design exactly (postBuild extraction, prebuilt search index, stateless serverless handler), which validated the approach, but it falls short of hard requirements:

1. It exposes only `docs_search` and `docs_fetch`. This server must expose `search_docs`, `get_page`, `list_sections`, and `get_agent_resource`, plus MCP resources.
2. It has no i18n placeholder detection and no `skipped.json`, which is a hard requirement here (a prior GEO audit found raw i18n keys shipping in page output; those pages must never be indexed).
3. Its artifact contract (`docs.json`, `search-index.json`) differs from the required one (`index.json`, `docs/*.md` with frontmatter, `manifest.json`).
4. It has no hook for bundling the agent-layer files that back `get_agent_resource`.

Configuring it would still have meant maintaining a fork of its runtime for the tool surface, so the extraction pattern was borrowed conceptually and the plugin written in-house (about 600 lines including the plugin, extraction, indexing, and artifact writing).

### MiniSearch over FlexSearch

MiniSearch serializes to a single JSON string and loads back with one `MiniSearch.loadJSON` call, has a fully typed API, and scores with a BM25-style relevance model. FlexSearch is faster at very large corpus sizes but its serialization is a multi-part export/import dance and its typings are loose. At 78 documents and a 0.7 MiB index, load simplicity and relevance quality win. Measured cold start artifact load is about 15 ms against a 300 ms budget.

### Sharding: not needed, and here is the escape hatch

The full index is 0.7 MiB and the markdown corpus is well under 1 MiB, far below the roughly 10 MiB threshold where a serverless bundle gets uncomfortable. If the docs grow past that, shard `index.json` by the `section` field (the indexer already records sections per document) and lazy-load shards in `store.ts` keyed by the `section` filter of `search_docs`. `manifest.json` records `indexBytes` per build so growth is observable.

### Hand-rolled JSON-RPC runtime, official SDK as the test client

The runtime does not depend on `@modelcontextprotocol/sdk`. The server needs no sessions, no SSE, and no server-to-client requests, so the full transport machinery of the SDK (built around Node request/response streams and session management) would be adapter weight with no benefit in a stateless function. The protocol surface implemented here was verified against the 2025-11-25 spec pages (transport, lifecycle, tools, resources) rather than from memory.

The official SDK is still the arbiter of correctness: the integration test connects the real `@modelcontextprotocol/sdk` client over a real HTTP socket to this handler, performs the initialize handshake, and exercises every tool and the resources surface. Interop is proven on every test run without shipping the SDK to production.

### HTML to markdown: node-html-parser plus turndown

The site config and plugin chain are CommonJS. The unified/rehype markdown stack is ESM-only, which cannot be required from a CJS Docusaurus plugin without dynamic-import contortions. `node-html-parser` (fast, forgiving) and `turndown` with the GFM plugin (tables, strikethrough) are CJS-compatible and battle tested. Two extraction details worth knowing:

1. `node-html-parser` treats `pre` as a raw text element by default, hiding Prism token markup from selectors; the parser is configured to parse `pre` content so code blocks can be rebuilt exactly.
2. Code blocks are captured from the Prism token lines and re-emitted as fenced markdown through a dedicated turndown rule, so no syntax highlighting markup or copy-button text leaks into the output. Docusaurus tabs degrade to a list of tab labels followed by every panel's content, which keeps all variants (npm and yarn, ethers and viem) visible to agents.

### Two TypeScript versions

The site pins TypeScript 4.9. The MCP SDK's type definitions (dev dependency, tests only) use TS 5 syntax that the 4.9 parser rejects, and `skipLibCheck` cannot skip parse errors. The workspace therefore compiles with an aliased `typescript5` package (`yarn build:mcp-plugin`, `yarn typecheck:mcp`, and ts-jest all use it) while the site's toolchain stays untouched. All MCP code is strict mode with `noUncheckedIndexedAccess`; there is no `any` in the workspace.

### MCP spec version

The current published protocol revision is 2025-11-25 and this server targets it, negotiating down to 2025-06-18 and 2025-03-26. The 2026-07-28 revision is a release candidate at the time of writing (final publication July 28, 2026); it removes the GET stream and protocol-level sessions, both of which this server already does not use, so the migration is expected to be additive (new required headers at most).

### Reconciliation with agents/mcp-candidates.json

`mcp-candidates.json` defines 15 candidate tools. All of them are SDK operation tools (initialize a client, send or track transactions, sign messages, read contract state). None of them map to docs access, so there is no name or schema overlap to reconcile: the four tools here are new, complementary names. The SDK operation candidates remain reference definitions; several are state-changing and are out of scope for this read-only server by mandate. This server must never grow a tool that writes, creates, or modifies anything.

### i18n and versioned docs

Only the default English locale exists in the Docusaurus config and only it is indexed. Pages whose extracted prose contains raw i18n placeholder keys (namespaces `theme`, `global`, `header`, `footer`, `pages`, `components`, `notifications`, or `{{...}}` interpolation) are skipped and logged to `build/mcp/skipped.json`. Detection deliberately ignores code blocks, inline code, link targets, and URLs, so documentation about templating does not false-positive. Docs versioning is not enabled in this repo; `manifest.json` records `docsVersion: "current"` and the plugin should be pointed at the latest stable version if versioning is ever enabled.

### Divergence from spec recommendations, documented

- `get_page` returns the page markdown as its text content block instead of a JSON serialization of `structuredContent` (the spec says structured results SHOULD also serialize to JSON in the text block). Raw markdown is strictly more useful to language models here; the metadata still rides along in `structuredContent`.
- Resource URIs use the canonical `https://push.org/...` page URLs. The spec advises the https scheme when clients can fetch the resource directly from the web, which is true for these pages; the MCP server additionally serves them as clean markdown.
- JSON-RPC batch arrays are rejected with `-32600`. Batching was removed from the protocol in 2025-06-18; the 2025-03-26 negotiation support here covers single-message clients, which in practice is all of them.
- Zod validation failures on tool arguments return JSON-RPC `-32602` (project requirement). The spec would also permit reporting them as tool execution errors; unknown sections and unknown pages do use execution errors (`isError: true`) so models can self-correct.

## Tool surface

| Tool | Input | Output |
| --- | --- | --- |
| `search_docs` | `query` (string), `section?`, `limit?` (default 5, max 20) | Ranked results: title, url, section, snippet (max 300 chars), score |
| `get_page` | exactly one of `url` or `path` | Full page markdown plus title, url, section, lastUpdated, description |
| `list_sections` | `{}` or `section?` | Hierarchical docs tree: sections, page titles, urls |
| `get_agent_resource` | `resource`: one of `capabilities`, `errors`, `contract-addresses`, `supported-chains`, `sdk-capabilities`, `changelog` | Raw JSON of that agent-layer file, snapshotted at build time |

`get_page` rejects anything outside the indexed set: inputs are normalized (URL or path), `..` segments are refused, lookups go through the manifest only, and file reads are additionally constrained to the artifacts directory.

The same content is exposed as MCP resources: `resources/list` returns every docs page (`text/markdown`) and the six agent files (`application/json`); `resources/read` serves them by URI. Unknown URIs return JSON-RPC error `-32002`.

## Protocol behavior

- Single MCP endpoint, `POST /api/mcp`. Requests are answered with a single `application/json` body (permitted by the transport spec in place of an SSE stream). Notifications and client responses get `202` with no body.
- `GET` and `DELETE` return `405` with an `Allow` header: the server opens no server-initiated streams and issues no sessions, both spec-permitted choices. Every request is independent.
- `initialize` echoes a supported `protocolVersion` or answers with `2025-11-25`; capabilities are `tools` and `resources` (no subscribe, no listChanged). `ping` returns `{}`.
- An `MCP-Protocol-Version` header with an unsupported value is a `400`; a missing header is tolerated per the spec's backwards-compatibility rule.
- Errors: `-32700` parse, `-32600` invalid or batch, `-32601` unknown method, `-32602` unknown tool or invalid params (with zod issues in `data`), `-32603` internal, `-32002` resource not found, `-32000` rate limited (HTTP 429 with `Retry-After`).
- CORS: `POST` allowed from any origin, no credentials. The transport spec's Origin validation exists to stop DNS rebinding against localhost servers with ambient authority; this endpoint is public, hosted, unauthenticated, and read-only, so all origins are accepted by policy.
- Rate limiting: in-memory token bucket per client IP (burst 20, refill 30 per minute), explicitly best effort on serverless: each warm instance has its own buckets and cold starts reset them. `MCP_DISABLE_RATE_LIMIT=1` disables it for local work.

## Local development

```bash
# 1. Compile the workspace (plugin + runtime)
yarn build:mcp-plugin

# 2. Generate artifacts from an existing site build (fast path).
#    Run a full `yarn build` instead if you have no build/ directory.
yarn mcp:artifacts

# 3. Serve the endpoint locally
node mcp/scripts/serve-local.mjs        # http://127.0.0.1:3939/api/mcp
```

### Testing with MCP Inspector

```bash
npx @modelcontextprotocol/inspector
```

In the Inspector UI choose transport "Streamable HTTP", URL `http://127.0.0.1:3939/api/mcp`, connect, and you should see the four tools under Tools and the docs pages under Resources. The handshake, `tools/list`, and every tool are also exercised automatically by the integration test, which uses the official SDK client over real HTTP.

### Tests

```bash
yarn test:mcp        # 7 suites: extraction, placeholders, artifacts,
                     # route mapping, tools, protocol handler, SDK integration
yarn typecheck:mcp   # strict TS 5 pass over src, tests, and api/
```

Unit tests build a fixture site (realistic Docusaurus HTML, including Prism code blocks, redirect stubs, and two deliberately broken i18n pages) through the real artifact pipeline in a temp directory, then run every tool and protocol path against it.

## Deployment

The site currently deploys to GitHub Pages, which cannot host serverless functions. The MCP endpoint therefore ships as a Vercel deployment of this same repo:

1. Create a Vercel project pointing at this repository. `vercel.json` already sets `buildCommand: yarn build`, `outputDirectory: build`, and bundles `build/mcp/**` into the function via `includeFiles`.
2. The build produces the artifacts as part of `yarn build` (the `build:mcp-plugin` step compiles the plugin, then the Docusaurus postBuild hook writes `build/mcp/`).
3. The function reads artifacts from `build/mcp` relative to the working directory; override with `MCP_ARTIFACTS_DIR` if the layout ever changes.
4. Wire `push.org/api/mcp` to the deployment (either move the site to Vercel, or route `/api/mcp` at the DNS/proxy layer). `static/.well-known/mcp.json` declares `https://push.org/api/mcp` as the canonical endpoint; do not announce the endpoint in llms.txt (see `LLMS-TXT-CHANGES.md`) until that URL is live.

Full-site builds are heavy (translations, blog). For a lighter artifact-producing build on CI, `BLOG_MODE=lite yarn build` uses the reduced blog set; the docs content that this server indexes is identical.

## File map

```
mcp/
  src/build/       plugin.ts (Docusaurus hook), extract.ts, placeholder.ts,
                   indexer.ts, lastUpdated.ts, artifacts.ts (orchestrator)
  src/runtime/     handler.ts (HTTP + JSON-RPC), protocol.ts, store.ts,
                   rateLimit.ts, cors.ts, resources.ts, tools/
  src/shared/      types.ts, schemas.ts (zod), searchOptions.ts, sections.ts
  scripts/         build-artifacts.mjs (standalone), serve-local.mjs
  test/            unit + integration suites and fixtures
api/mcp.ts         Vercel entry point (re-exports POST/GET/DELETE/OPTIONS)
plugins/docusaurus-plugin-push-mcp/   CJS shim loading the compiled plugin
static/.well-known/mcp.json           discovery document
vercel.json        function config + artifact bundling
```
