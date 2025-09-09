"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[34866],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 378680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_02_tokens_and_airdrops_02_tutorial_universal_airdrop_mdx_e00_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-02-tokens-and-airdrops-02-tutorial-universal-airdrop-mdx-e00.json
const site_docs_chain_01_tutorials_02_tokens_and_airdrops_02_tutorial_universal_airdrop_mdx_e00_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/tokens-and-airdrops/docs-chain-tutorials-universal-airdrop","title":"Build a Claimable Universal Airdrop","description":"{Build a Universal Airdrop: Generate Merkle Proofs, Deploy Contract, and Add a Claim UI | Tutorials | Push Chain Docs}","source":"@site/docs/chain/01-tutorials/02-tokens-and-airdrops/02-Tutorial-Universal-Airdrop.mdx","sourceDirName":"chain/01-tutorials/02-tokens-and-airdrops","slug":"/chain/tutorials/tokens-and-airdrops/tutorial-universal-airdrop","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tokens-and-airdrops/tutorial-universal-airdrop","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/02-tokens-and-airdrops/02-Tutorial-Universal-Airdrop.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"docs-chain-tutorials-universal-airdrop","title":"Build a Claimable Universal Airdrop","hide_title":false,"slug":"./tutorial-universal-airdrop","displayed_sidebar":"pushChainSidebar","sidebar_position":6,"image":"/assets/docs/previews/docs_chain_tutorials_universal_airdrop--build_a_claimable_universal_airdrop.png"},"sidebar":"pushChainSidebar","previous":{"title":"Mint Universal ERC-20 Tokens","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tokens-and-airdrops/tutorial-mint-erc-20-tokens"},"next":{"title":"Payments and DeFi","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/payments-and-defi"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/01-tutorials/02-tokens-and-airdrops/02-Tutorial-Universal-Airdrop.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-universal-airdrop',
	title: 'Build a Claimable Universal Airdrop',
	hide_title: false,
	slug: './tutorial-universal-airdrop',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 6,
	image: '/assets/docs/previews/docs_chain_tutorials_universal_airdrop--build_a_claimable_universal_airdrop.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/


const toc = [{
  "value": "Why Universal Airdrops?",
  "id": "why-universal-airdrops",
  "level": 2
}, {
  "value": "Part 1: Generate the Merkle proofs",
  "id": "part-1-generate-the-merkle-proofs",
  "level": 2
}, {
  "value": "1.1. Set up the Merkle proof generator",
  "id": "11-set-up-the-merkle-proof-generator",
  "level": 3
}, {
  "value": "Create the main generator script",
  "id": "create-the-main-generator-script",
  "level": 4
}, {
  "value": "1.2. Create the airdrop data file",
  "id": "12-create-the-airdrop-data-file",
  "level": 3
}, {
  "value": "Understanding the airdrop.json structure",
  "id": "understanding-the-airdropjson-structure",
  "level": 4
}, {
  "value": "1.3. Install dependencies and run the generator",
  "id": "13-install-dependencies-and-run-the-generator",
  "level": 3
}, {
  "value": "1.4. Understanding the generated tree.json output",
  "id": "14-understanding-the-generated-treejson-output",
  "level": 3
}, {
  "value": "Key components of the output:",
  "id": "key-components-of-the-output",
  "level": 4
}, {
  "value": "How the Merkle proof works:",
  "id": "how-the-merkle-proof-works",
  "level": 4
}, {
  "value": "Part 2: Deploy the Merkle airdrop contract",
  "id": "part-2-deploy-the-merkle-airdrop-contract",
  "level": 2
}, {
  "value": "2.1. Create a new Hardhat project from scratch",
  "id": "21-create-a-new-hardhat-project-from-scratch",
  "level": 3
}, {
  "value": "2.2. Install required dependencies",
  "id": "22-install-required-dependencies",
  "level": 3
}, {
  "value": "2.3. Configure Hardhat (<code>hardhat.config.ts</code>)",
  "id": "23-configure-hardhat-hardhatconfigts",
  "level": 3
}, {
  "value": "2.4. Create the TestToken contract (<code>TestToken.sol</code>)",
  "id": "24-create-the-testtoken-contract-testtokensol",
  "level": 3
}, {
  "value": "2.5. Create the UEAFactory interface for the contracts (<code>IUEAFactory.sol</code>)",
  "id": "25-create-the-ueafactory-interface-for-the-contracts-iueafactorysol",
  "level": 3
}, {
  "value": "2.6. Create the UniversalAirdrop contract (<code>UniversalAirdrop.sol</code>)",
  "id": "26-create-the-universalairdrop-contract-universalairdropsol",
  "level": 3
}, {
  "value": "2.7. Create the deployment script (<code>scripts/deploy.ts</code>)",
  "id": "27-create-the-deployment-script-scriptsdeployts",
  "level": 3
}, {
  "value": "2.8. Create the .env file",
  "id": "28-create-the-env-file",
  "level": 3
}, {
  "value": "2.9. Run the deployment",
  "id": "29-run-the-deployment",
  "level": 3
}, {
  "value": "Part 3: Build the Claim UI",
  "id": "part-3-build-the-claim-ui",
  "level": 2
}, {
  "value": "3.1. Create a Vite React TypeScript Project",
  "id": "31-create-a-vite-react-typescript-project",
  "level": 3
}, {
  "value": "3.2. Install Push Chain UI Kit SDK",
  "id": "32-install-push-chain-ui-kit-sdk",
  "level": 3
}, {
  "value": "3.3. Use React v18",
  "id": "33-use-react-v18",
  "level": 3
}, {
  "value": "3.3. Wrap your app with PushUniversalWalletProvider",
  "id": "33-wrap-your-app-with-pushuniversalwalletprovider",
  "level": 3
}, {
  "value": "3.4. Expose <code>tree.json</code> to your app",
  "id": "34-expose-treejson-to-your-app",
  "level": 3
}, {
  "value": "3.5. Add a minimal Claim component",
  "id": "35-add-a-minimal-claim-component",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: `Build a Universal Airdrop: Generate Merkle Proofs, Deploy Contract, and Add a Claim UI | Tutorials | Push Chain Docs`
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Welcome! In this tutorial, you'll build a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Airdrop"
      }), " system that revolutionizes cross-chain token distribution. Unlike traditional airdrops that require deploying contracts on every blockchain, this universal approach lets you ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deploy once on Push Chain"
      }), " and enable users from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any blockchain"
      }), " (Ethereum, Solana, Polygon, etc.) to claim their tokens seamlessly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-universal-airdrops",
      children: "Why Universal Airdrops?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The beauty of this system lies in its efficiency and cross-chain compatibility:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single Deployment"
        }), ": Deploy your airdrop contract once on Push Chain instead of managing multiple contracts across different networks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-Chain Claims"
        }), ": Users from Ethereum, Solana, Polygon, and other chains can all claim tokens from the same contract"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No Multi-Chain Token Deployment"
        }), ": Keep your ERC-20 token on one chain while enabling universal claiming"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User Simplicity"
        }), ": Recipients can claim their tokens using their preferred wallet on their own chain, making the process seamless and familiar"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We’ll build the complete flow:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate Merkle proofs with cross-chain recipient data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy a universal Merkle claim contract to Push Chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a UI for recipients to claim their tokens from any chain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-1-generate-the-merkle-proofs",
      children: "Part 1: Generate the Merkle proofs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this part, we'll create a Merkle proof generator that produces cryptographic proofs for a universal airdrop system. This generator will create a Merkle tree from recipient data and generate proofs that can be verified on-chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-set-up-the-merkle-proof-generator",
      children: "1.1. Set up the Merkle proof generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create the project directory and install the required dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mkdir merkle-proof-generator\ncd merkle-proof-generator\nnpm init -y\ntsc --init\nnpm install bs58 merkletreejs viem\nnpm i -D @types/node\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dependencies you'll need:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "merkletreejs"
        }), ": Core library for building Merkle trees with cryptographic hashing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "viem"
        }), ": Ethereum library providing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "keccak256"
        }), " hashing and ABI encoding utilities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "bs58"
        }), ": Base58 encoding/decoding library for Solana addresses"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "create-the-main-generator-script",
      children: "Create the main generator script"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "merkle-proof-generator/index.ts"
      }), " with the following implementation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { keccak256, encodeAbiParameters } from 'viem';\nimport { MerkleTree } from 'merkletreejs';\nimport * as fs from 'fs';\nimport * as path from 'path';\nimport bs58 from 'bs58';\n\ninterface AirdropEntry {\n  recipient: string;\n  chainNamespace: 'eip155' | 'solana' | 'push' | string;\n  chainId: string;\n  amount: string;\n}\n\ninterface TreeEntry extends AirdropEntry {\n  leaf: `0x${string}`;\n  proof: `0x${string}`[];\n}\n\ninterface TreeData {\n  merkleRoot: `0x${string}`;\n  entries: TreeEntry[];\n}\n\n/**\n * Generate a leaf hash matching the Solidity contract\n * leaf = keccak256(abi.encodePacked(recipientOnPush, chainNamespace, chainId, amount))\n */\nfunction generateLeaf(entry: AirdropEntry): `0x${string}` {\n  const { recipient, chainNamespace, chainId, amount } = entry;\n\n  // Normalize recipient address:\n  // - If hex 0x address (length 42), parse as 20-byte address\n  // - Else treat as base58 (e.g., Solana), hash bytes and take last 20 bytes\n  let recipientAddressHex: string;\n  if (recipient.startsWith('0x')) {\n    const addr = recipient.toLowerCase();\n    const addressBytes = addr.slice(2).padStart(40, '0');\n    recipientAddressHex = addressBytes;\n  } else {\n    const raw = Buffer.from(bs58.decode(recipient));\n    const hashed = Buffer.from(\n      keccak256(`0x${raw.toString('hex')}`).slice(2),\n      'hex'\n    );\n    const last20 = hashed.slice(-20);\n    recipientAddressHex = last20.toString('hex');\n  }\n\n  const namespaceBytes = Buffer.from(chainNamespace, 'utf8');\n  const chainIdBytes = Buffer.from(chainId, 'utf8');\n  const amountBytes = Buffer.alloc(32);\n  amountBytes.writeBigUInt64BE(BigInt(amount), 24);\n\n  const packedBytes = Buffer.concat([\n    Buffer.from(recipientAddressHex, 'hex'),\n    namespaceBytes,\n    chainIdBytes,\n    amountBytes,\n  ]);\n\n  return keccak256(`0x${packedBytes.toString('hex')}`);\n}\n\n/**\n * Build Merkle tree from airdrop entries\n */\nfunction buildMerkleTree(entries: AirdropEntry[]): TreeData {\n  // Generate leaves\n  const leaves = entries.map((entry) => generateLeaf(entry));\n\n  // Create Merkle tree with sorted pairs\n  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });\n  const merkleRoot = tree.getHexRoot() as `0x${string}`;\n\n  // Generate proofs for each entry\n  const entriesWithProofs: TreeEntry[] = entries.map((entry, index) => {\n    const leaf = leaves[index];\n    const proof = tree.getHexProof(leaf) as `0x${string}`[];\n\n    return {\n      ...entry,\n      leaf,\n      proof,\n    };\n  });\n\n  return {\n    merkleRoot,\n    entries: entriesWithProofs,\n  };\n}\n\n/**\n * Print summary of the airdrop data\n */\nfunction printSummary(treeData: TreeData): void {\n  const { entries, merkleRoot } = treeData;\n\n  console.log('🌳 Universal Airdrop Merkle Tree Summary');\n  console.log('=====================================');\n  console.log(`📁 Merkle Root: ${merkleRoot}`);\n  console.log(`👥 Total Recipients: ${entries.length}`);\n\n  // Calculate totals per chain namespace\n  const chainStats = entries.reduce(\n    (acc, entry) => {\n      const key = `${entry.chainNamespace}:${entry.chainId}`;\n      if (!acc[key]) {\n        acc[key] = { count: 0, totalAmount: BigInt(0) };\n      }\n      acc[key].count += 1;\n      acc[key].totalAmount += BigInt(entry.amount);\n      return acc;\n    },\n    {} as Record<string, { count: number; totalAmount: bigint }>\n  );\n\n  console.log('\\n📊 Per-Chain Breakdown:');\n  Object.entries(chainStats).forEach(([chain, stats]) => {\n    console.log(\n      `  ${chain}: ${stats.count} recipients, ${stats.totalAmount.toString()} tokens`\n    );\n  });\n\n  // Calculate total amount\n  const totalAmount = entries.reduce(\n    (sum, entry) => sum + BigInt(entry.amount),\n    BigInt(0)\n  );\n  console.log(`\\n💰 Total Airdrop Amount: ${totalAmount.toString()} tokens`);\n}\n\n// Main execution\nasync function main() {\n  const airdropPath = path.join(__dirname, './data/airdrop.json');\n\n  // Check if airdrop file exists\n  if (!fs.existsSync(airdropPath)) {\n    console.error('❌ Airdrop file not found at:', airdropPath);\n    console.log('\\nPlease create data/airdrop.json with the following format:');\n    console.log(\n      JSON.stringify(\n        [\n          {\n            recipient: '0x1234567890123456789012345678901234567890',\n            chainNamespace: 'eip155',\n            chainId: '11155111',\n            amount: '1000000000000000000',\n          },\n          {\n            recipient: '3u1111111111111111111111111111111111111111',\n            chainNamespace: 'solana',\n            chainId: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1',\n            amount: '2000000000000000000',\n          },\n        ],\n        null,\n        2\n      )\n    );\n    process.exit(1);\n  }\n\n  // Read airdrop entries\n  const entries: AirdropEntry[] = JSON.parse(\n    fs.readFileSync(airdropPath, 'utf8')\n  );\n\n  // Validate entries\n  for (const entry of entries) {\n    const isHex =\n      entry.recipient.startsWith('0x') && entry.recipient.length === 42;\n    const isBase58 = !entry.recipient.startsWith('0x');\n    if (!isHex && !isBase58) {\n      throw new Error(\n        `Invalid recipient: ${entry.recipient} (must be 0x-address or base58)`\n      );\n    }\n    if (!entry.chainNamespace || !entry.chainId) {\n      throw new Error(`Missing chain info for ${entry.recipient}`);\n    }\n    if (isNaN(parseInt(entry.amount)) || BigInt(entry.amount) <= 0) {\n      throw new Error(`Invalid amount for ${entry.recipient}: ${entry.amount}`);\n    }\n  }\n\n  console.log(`🔨 Building Merkle tree for ${entries.length} recipients...`);\n\n  // Build Merkle tree\n  const treeData = buildMerkleTree(entries);\n\n  // Create output directory\n  const outputDir = path.join(__dirname, './data');\n  if (!fs.existsSync(outputDir)) {\n    fs.mkdirSync(outputDir, { recursive: true });\n  }\n\n  // Write tree data\n  const treePath = path.join(outputDir, 'tree.json');\n  fs.writeFileSync(treePath, JSON.stringify(treeData, null, 2));\n\n  console.log('✅ Merkle tree built successfully!');\n  console.log(`💾 Tree data saved to: ${treePath}`);\n\n  // Print summary\n  printSummary(treeData);\n}\n\n// Export functions for testing\nexport { generateLeaf, buildMerkleTree, printSummary };\n\n// Run if called directly\nif (require.main === module) {\n  main().catch(console.error);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-create-the-airdrop-data-file",
      children: "1.2. Create the airdrop data file"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create the directory structure and input data file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mkdir -p merkle-proof-generator/data\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "merkle-proof-generator/data/airdrop.json"
      }), " with your recipient list:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "[\n  {\n    \"recipient\": \"0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9\",\n    \"chainNamespace\": \"eip155\",\n    \"chainId\": \"11155111\",\n    \"amount\": \"1000000000000000000\"\n  },\n  {\n    \"recipient\": \"72JBejJFXrRKpQ69Hmaqr7vWJr6pdZXFEL6jt3sadsXU\",\n    \"chainNamespace\": \"solana\",\n    \"chainId\": \"EtWTRABZaYq6iMfeYKouRu166VU2xqa1\",\n    \"amount\": \"1500000000000000000\"\n  },\n  {\n    \"recipient\": \"0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9\",\n    \"chainNamespace\": \"eip155\",\n    \"chainId\": \"42101\",\n    \"amount\": \"750000000000000000\"\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "understanding-the-airdropjson-structure",
      children: "Understanding the airdrop.json structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each entry in the array represents a recipient with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "recipient"
        }), ": Wallet address (format varies by blockchain)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chainNamespace"
        }), ": Blockchain type (\"eip155\", \"solana\", \"push\", etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chainId"
        }), ": Specific chain identifier within that namespace"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "amount"
        }), ": Token amount in smallest units (as string to avoid precision issues)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-install-dependencies-and-run-the-generator",
      children: "1.3. Install dependencies and run the generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd merkle-proof-generator\nnpx tsx index.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "🔨 Building Merkle tree for 3 recipients...\n✅ Merkle tree built successfully!\n💾 Tree data saved to: /Users/fabio/github/push/2-docs-tutorial-merkle-proof/merkle-proof-generator/data/tree.json\n🌳 Universal Airdrop Merkle Tree Summary\n=====================================\n📁 Merkle Root: 0xaae8c300cacf66c1768fb91843e746ddf7f982ed523068ce79b76d8671766051\n👥 Total Recipients: 3\n\n📊 Per-Chain Breakdown:\n  eip155:11155111: 1 recipients, 1000000000000000000 tokens\n  solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1: 1 recipients, 1500000000000000000 tokens\n  eip155:42101: 1 recipients, 750000000000000000 tokens\n\n💰 Total Airdrop Amount: 3250000000000000000 tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The generator will:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read and validate each entry in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "airdrop.json"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate cryptographic leaves using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "keccak256(abi.encodePacked(...))"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a sorted Merkle tree from all leaves"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate inclusion proofs for each recipient"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Save the complete tree data to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tree.json"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-understanding-the-generated-treejson-output",
      children: "1.4. Understanding the generated tree.json output"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After running the generator, you'll get a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "merkle-proof-generator/data/tree.json"
      }), " file with this structure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"merkleRoot\": \"0xaae8c300cacf66c1768fb91843e746ddf7f982ed523068ce79b76d8671766051\",\n  \"entries\": [\n    {\n      \"recipient\": \"0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9\",\n      \"chainNamespace\": \"eip155\",\n      \"chainId\": \"11155111\",\n      \"amount\": \"1000000000000000000\",\n      \"leaf\": \"0xdcd8f25fe90a7f166b91017f854f6df5e8efe98da4eeb1a1eb60194d9743448d\",\n      \"proof\": [\n        \"0x1ca10661d30bcbd9a71cdcd967e5d116a34cee6cbd38a2f8318452ef016fce12\",\n        \"0x634cd82dbbdc7e8a5513e306ccd1dedc988e6121ea2a27ceb4414a3cdc76e634\"\n      ]\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "key-components-of-the-output",
      children: "Key components of the output:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "merkleRoot"
          }), ": The root hash of the entire Merkle tree"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Used when deploying the smart contract"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Acts as a commitment to all airdrop recipients and amounts"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "entries[]"
          }), ": Array containing each recipient's data plus cryptographic proof"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "leaf"
            }), ": The hash of this specific recipient's data"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "proof[]"
            }), ": Array of sibling hashes needed to reconstruct the path from leaf to root", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Used by the smart contract to verify inclusion in the tree"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Length varies based on tree structure (fewer proofs needed for leaves near the root)"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-the-merkle-proof-works",
      children: "How the Merkle proof works:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The proof allows anyone to verify that a specific recipient is included in the airdrop without revealing the entire recipient list. The smart contract can verify the proof by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recalculating the leaf hash from the recipient's data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using the provided proof hashes to reconstruct the path to the root"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Comparing the reconstructed root with the stored ", (0,jsx_runtime.jsx)(_components.code, {
          children: "merkleRoot"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next steps"
        }), ": You'll use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "merkleRoot"
        }), " when deploying the UniversalAirdrop contract, and the frontend will use each recipient's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "proof"
        }), " array to submit claims on-chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-2-deploy-the-merkle-airdrop-contract",
      children: "Part 2: Deploy the Merkle airdrop contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this part, we'll create a new Hardhat project from scratch, set up the necessary configuration, create our smart contracts, and deploy them to Push Chain Donut Testnet. This includes creating an ERC-20 token contract and a universal airdrop contract that verifies Merkle proofs."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-create-a-new-hardhat-project-from-scratch",
      children: "2.1. Create a new Hardhat project from scratch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's start by creating a fresh Hardhat project for our airdrop contracts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create the project directory\nmkdir contract-airdrop\ncd contract-airdrop\n\n# Initialize a new Node.js project\nnpm init -y\n\n# Install Hardhat and its toolbox\nnpm install --save-dev hardhat@2.26.3 @nomicfoundation/hardhat-toolbox@6.1.0\n\n# Initialize Hardhat (select the options \"Hardhat 2\" then \"Create a TypeScript project\")\nnpx hardhat init\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will create a basic Hardhat project structure with TypeScript support, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "hardhat.config.ts"
        }), " - Hardhat configuration file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "contracts/"
        }), " - Directory for Solidity contracts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "scripts/"
        }), " - Directory for deployment scripts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "test/"
        }), " - Directory for tests"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-install-required-dependencies",
      children: "2.2. Install required dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the additional dependencies we'll need:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install dotenv for environment variable management\nnpm install dotenv\n\n# Install OpenZeppelin contracts library\nnpm install @openzeppelin/contracts\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dotenv"
          })
        }), ": Allows us to load environment variables from a ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".env"
        }), " file, keeping sensitive information like private keys secure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@openzeppelin/contracts"
          })
        }), ": Provides battle-tested smart contract implementations including ERC-20, MerkleProof utilities, and access control"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "23-configure-hardhat-hardhatconfigts",
      children: ["2.3. Configure Hardhat (", (0,jsx_runtime.jsx)(_components.code, {
        children: "hardhat.config.ts"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Update your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hardhat.config.ts"
      }), " to include network configurations and compiler settings:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { HardhatUserConfig } from 'hardhat/config';\nimport '@nomicfoundation/hardhat-toolbox';\nimport { config as dotenvConfig } from 'dotenv';\n\n// Load environment variables\ndotenvConfig();\n\nconst config: HardhatUserConfig = {\n  solidity: {\n    version: '0.8.22',\n    settings: {\n      optimizer: {\n        enabled: true,\n        runs: 200,\n      },\n      viaIR: true,\n    },\n  },\n  networks: {\n    pushDonut: {\n      url: 'https://evm.rpc-testnet-donut-node1.push.org/',\n      accounts: process.env.PRIVATE_KEY\n        ? [\n            process.env.PRIVATE_KEY.startsWith('0x')\n              ? process.env.PRIVATE_KEY\n              : `0x${process.env.PRIVATE_KEY}`,\n          ]\n        : [],\n      chainId: 42101,\n    },\n  },\n  paths: {\n    sources: './contracts',\n    tests: './test',\n    cache: './cache',\n    artifacts: './artifacts',\n  },\n};\n\nexport default config;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key configuration details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solidity Compiler"
        }), ": Version 0.8.22 with optimization enabled (200 runs) and viaIR enabled for better gas efficiency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Networks"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pushDonut"
            }), ": Push Chain Donut Testnet with environment-based private key"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paths"
        }), ": Standard Hardhat directory structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "24-create-the-testtoken-contract-testtokensol",
      children: ["2.4. Create the TestToken contract (", (0,jsx_runtime.jsx)(_components.code, {
        children: "TestToken.sol"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contracts/TestToken.sol"
      }), " - a simple ERC-20 token for testing our airdrop:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.19;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\n\ncontract TestToken is ERC20 {\n    constructor(string memory name, string memory symbol) ERC20(name, symbol) {\n        _mint(msg.sender, 1_000_000 * 10 ** decimals());\n    }\n\n    function mint(address to, uint256 amount) external {\n        _mint(to, amount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Understanding the TestToken contract:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inherits from ERC20"
        }), ": Uses OpenZeppelin's battle-tested ERC20 implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constructor"
        }), ": Mints 1 million tokens to the deployer upon creation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mint function"
        }), ": Allows additional tokens to be minted (useful for testing)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Standard ERC20 features"
        }), ": Transfer, balance checking, approvals, etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "25-create-the-ueafactory-interface-for-the-contracts-iueafactorysol",
      children: ["2.5. Create the UEAFactory interface for the contracts (", (0,jsx_runtime.jsx)(_components.code, {
        children: "IUEAFactory.sol"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contracts/interfaces/IUEAFactory.sol"
      }), " - the interface for the UEAFactory contract:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\nstruct UniversalAccountId {\n    string chainNamespace;\n    string chainId;\n    bytes owner;\n}\n\ninterface IUEAFactory {\n    function getOriginForUEA(\n        address addr\n    ) external view returns (UniversalAccountId memory account, bool isUEA);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "26-create-the-universalairdrop-contract-universalairdropsol",
      children: ["2.6. Create the UniversalAirdrop contract (", (0,jsx_runtime.jsx)(_components.code, {
        children: "UniversalAirdrop.sol"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contracts/UniversalAirdrop.sol"
      }), " - the main airdrop contract that matches our Merkle proof generator:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\nimport \"@openzeppelin/contracts/token/ERC20/IERC20.sol\";\nimport \"@openzeppelin/contracts/utils/cryptography/MerkleProof.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/utils/ReentrancyGuard.sol\";\nimport \"./interfaces/IUEAFactory.sol\";\n\n/**\n * @title Universal Airdrop Contract for Push Chain\n * @dev Airdrop contract that supports claims from multiple origin chains using UEA (Universal External Accounts)\n * @notice This contract binds claims to the caller's origin chain to prevent cross-chain spoofing\n */\ncontract UniversalAirdrop is Ownable, ReentrancyGuard {\n    // Push Chain UEAFactory address - hardcoded as per specification\n    address public constant UEA_FACTORY =\n        0x00000000000000000000000000000000000000eA;\n\n    // State variables\n    bytes32 public merkleRoot;\n    mapping(bytes32 => bool) public claimed; // keyed by claimId to prevent double claims per (address, chainNamespace, chainId)\n    IERC20 public immutable token;\n\n    // Push Chain Donut testnet chain ID constant\n    string public constant PUSH_CHAIN_ID = \"push-donut\";\n\n    // Events\n    event Claimed(\n        address indexed recipient,\n        string chainNamespace,\n        string chainId,\n        uint256 amount\n    );\n    event MerkleRootUpdated(bytes32 newRoot);\n\n    /**\n     * @dev Constructor\n     * @param _token The ERC20 token to be airdropped\n     * @param _merkleRoot The initial Merkle root for the airdrop\n     */\n    constructor(IERC20 _token, bytes32 _merkleRoot) Ownable(msg.sender) {\n        token = _token;\n        merkleRoot = _merkleRoot;\n    }\n\n    /**\n     * @dev Claim tokens using a Merkle proof\n     * @param proof The Merkle proof proving inclusion in the airdrop\n     * @param amount The amount of tokens to claim\n     * @param chainNamespace The origin chain namespace (e.g., \"eip155\", \"solana\", \"push\")\n     * @param chainId The origin chain ID (e.g., \"11155111\" for Sepolia, \"push-donut\" for Push)\n     * @notice The claim is bound to the caller's origin chain to prevent cross-chain spoofing\n     */\n    function claim(\n        bytes32[] calldata proof,\n        uint256 amount,\n        string calldata chainNamespace,\n        string calldata chainId\n    ) external nonReentrant {\n        address caller = msg.sender;\n\n        // Get origin chain information from UEAFactory for verification\n        (UniversalAccountId memory account, bool isUEA) = IUEAFactory(\n            UEA_FACTORY\n        ).getOriginForUEA(caller);\n\n        address recipientAddress;\n\n        if (isUEA) {\n            // For UEA accounts, verify the provided chain info matches the origin\n            require(\n                keccak256(abi.encodePacked(chainNamespace)) ==\n                    keccak256(abi.encodePacked(account.chainNamespace)) &&\n                    keccak256(abi.encodePacked(chainId)) ==\n                    keccak256(abi.encodePacked(account.chainId)),\n                \"Provided chain info does not match UEA origin\"\n            );\n            // Convert owner bytes to address for leaf computation\n            // If owner is 20 bytes (EVM), cast directly; otherwise derive address from keccak256(owner)\n            if (account.owner.length == 20) {\n                recipientAddress = address(bytes20(account.owner));\n            } else {\n                recipientAddress = address(\n                    uint160(uint256(keccak256(account.owner)))\n                );\n            }\n        } else {\n            // For non-UEA accounts (could be native Push Chain or direct connections)\n            // Allow claiming from any chain - the Merkle proof will verify eligibility\n            recipientAddress = caller;\n        }\n\n        // Generate claimId to prevent double claims for the same (address, chainNamespace, chainId) tuple\n        bytes32 claimId = keccak256(\n            abi.encodePacked(recipientAddress, chainNamespace, chainId)\n        );\n        require(!claimed[claimId], \"Already claimed for this origin chain\");\n\n        // Compute the leaf as per specification: keccak256(abi.encodePacked(recipientOnPush, chainNamespace, chainId, amount))\n        bytes32 leaf = keccak256(\n            abi.encodePacked(recipientAddress, chainNamespace, chainId, amount)\n        );\n\n        // Verify the Merkle proof\n        require(\n            MerkleProof.verify(proof, merkleRoot, leaf),\n            \"Invalid Merkle proof\"\n        );\n\n        // Mark as claimed and transfer tokens\n        claimed[claimId] = true;\n        require(\n            token.transfer(recipientAddress, amount),\n            \"Token transfer failed\"\n        );\n\n        emit Claimed(recipientAddress, chainNamespace, chainId, amount);\n    }\n\n    /**\n     * @dev Update the Merkle root (only owner)\n     * @param newRoot The new Merkle root\n     * @notice This allows updating the airdrop with new recipients\n     */\n    function setMerkleRoot(bytes32 newRoot) external onlyOwner {\n        merkleRoot = newRoot;\n        emit MerkleRootUpdated(newRoot);\n    }\n\n    /**\n     * @dev Recover ERC20 tokens (only owner)\n     * @param tokenAddress The address of the token to recover\n     * @param amount The amount to recover\n     * @notice Allows the owner to recover mistakenly sent tokens\n     */\n    function recoverERC20(\n        address tokenAddress,\n        uint256 amount\n    ) external onlyOwner {\n        require(tokenAddress != address(token), \"Cannot recover airdrop token\");\n        IERC20(tokenAddress).transfer(owner(), amount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key features of the UniversalAirdrop contract:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merkle Proof Verification"
        }), ": Uses OpenZeppelin's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MerkleProof.verify()"
        }), " to validate inclusion proofs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Universal Support"
        }), ": Accepts any recipient address format (the proof generation handles the conversion)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reentrancy Protection"
        }), ": Uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReentrancyGuard"
        }), " to prevent reentrancy attacks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Claim Tracking"
        }), ": Maps claim IDs (address + origin chain) to prevent double claims per recipient per origin chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Owner Controls"
        }), ": Allows updating the Merkle root for future airdrop rounds"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "27-create-the-deployment-script-scriptsdeployts",
      children: ["2.7. Create the deployment script (", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/deploy.ts"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/deploy.ts"
      }), " - a comprehensive deployment script that handles the entire process:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { config } from 'dotenv';\nimport { ethers } from 'hardhat';\nimport hre from 'hardhat';\nimport * as fs from 'fs';\nimport * as path from 'path';\nimport { buildMerkleTree } from '../../merkle-proof-generator/index';\n\n// Load environment variables\nconfig();\n\ninterface AirdropEntry {\n  recipient: string;\n  chainNamespace: string;\n  chainId: string;\n  amount: string;\n}\n\nasync function main() {\n  console.log('🚀 Starting deployment...');\n\n  // Debug: Check environment and network\n  console.log('🔍 Checking environment...');\n  console.log('📝 PRIVATE_KEY exists:', !!process.env.PRIVATE_KEY);\n\n  // Get the deployer account\n  const signers = await ethers.getSigners();\n  console.log('👥 Number of signers:', signers.length);\n\n  console.log('Current network:', hre.network.name);\n\n  if (signers.length === 0) {\n    console.log('❌ Current network:', hre.network.name);\n    console.log('❌ Network config:', hre.network.config);\n    throw new Error(\n      'No accounts available. Please check your PRIVATE_KEY in .env file and network configuration.'\n    );\n  }\n\n  const [deployer] = signers;\n  console.log('📝 Deploying contracts with account:', deployer.address);\n  console.log(\n    '💰 Account balance:',\n    ethers.formatEther(await ethers.provider.getBalance(deployer.address))\n  );\n\n  // Deploy TestToken\n  console.log('\\n📄 Deploying TestToken...');\n  const TestToken = await ethers.getContractFactory('TestToken');\n  const token = await TestToken.deploy('TestToken1', 'TEST1');\n  await token.waitForDeployment();\n  const tokenAddress = await token.getAddress();\n  console.log('✅ TestToken deployed to:', tokenAddress);\n\n  // Read airdrop entries and generate Merkle tree\n  console.log('\\n🌳 Generating Merkle tree...');\n  const airdropPath = path.join(\n    __dirname,\n    '../../merkle-proof-generator/data/airdrop.json'\n  );\n  const airdropEntries: AirdropEntry[] = JSON.parse(\n    fs.readFileSync(airdropPath, 'utf8')\n  );\n  const treeData = buildMerkleTree(airdropEntries);\n  console.log('📁 Merkle root:', treeData.merkleRoot);\n\n  // Deploy UniversalAirdrop\n  console.log('\\n🎯 Deploying UniversalAirdrop...');\n  const UniversalAirdrop = await ethers.getContractFactory('UniversalAirdrop');\n  const airdrop = await UniversalAirdrop.deploy(\n    tokenAddress,\n    treeData.merkleRoot\n  );\n  await airdrop.waitForDeployment();\n  const airdropAddress = await airdrop.getAddress();\n  console.log('✅ UniversalAirdrop deployed to:', airdropAddress);\n\n  // Calculate total airdrop amount\n  const totalAmount = airdropEntries.reduce((sum, entry) => {\n    return sum + BigInt(entry.amount);\n  }, 0n);\n\n  console.log(\n    `\\n💸 Total airdrop amount: ${ethers.formatEther(totalAmount)} TEST tokens`\n  );\n\n  // Transfer tokens to airdrop contract\n  console.log('🔄 Transferring tokens to airdrop contract...');\n  const transferTx = await token.transfer(airdropAddress, totalAmount);\n  await transferTx.wait();\n  console.log('✅ Tokens transferred successfully');\n\n  // Verify balances\n  const airdropBalance = await token.balanceOf(airdropAddress);\n  const deployerBalance = await token.balanceOf(deployer.address);\n  console.log(\n    `🏦 Airdrop contract balance: ${ethers.formatEther(airdropBalance)} TEST`\n  );\n  console.log(\n    `👤 Deployer balance: ${ethers.formatEther(deployerBalance)} TEST`\n  );\n\n  // Save deployment info\n  const deploymentInfo = {\n    network: await ethers.provider.getNetwork().then((n) => n.name),\n    token: {\n      address: tokenAddress,\n      symbol: 'TEST',\n      name: 'TestToken',\n    },\n    airdrop: {\n      address: airdropAddress,\n      merkleRoot: treeData.merkleRoot,\n    },\n    treeData: treeData,\n    airdropEntries: airdropEntries,\n    totalAmount: ethers.formatEther(totalAmount),\n    deployedAt: new Date().toISOString(),\n  };\n\n  const deploymentPath = path.join(\n    __dirname,\n    '../../merkle-proof-generator/data/deployment.json'\n  );\n  fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));\n  console.log(`\\n💾 Deployment info saved to: ${deploymentPath}`);\n\n  // Save addresses for the frontend\n  const addresses = {\n    tokenAddress,\n    airdropAddress,\n    merkleRoot: treeData.merkleRoot,\n  };\n\n  const addressesPath = path.join(\n    __dirname,\n    '../../merkle-proof-generator/data/addresses.json'\n  );\n  fs.mkdirSync(path.dirname(addressesPath), { recursive: true });\n  fs.writeFileSync(addressesPath, JSON.stringify(addresses, null, 2));\n  console.log(`📄 Contract addresses saved for frontend: ${addressesPath}`);\n\n  console.log('\\n🎉 Deployment completed successfully!');\n  console.log('\\n📋 Summary:');\n  console.log(`   Token Contract: ${tokenAddress}`);\n  console.log(`   Airdrop Contract: ${airdropAddress}`);\n  console.log(`   Merkle Root: ${treeData.merkleRoot}`);\n  console.log(`   Recipients: ${airdropEntries.length}`);\n  console.log(`   Total Amount: ${ethers.formatEther(totalAmount)} TEST`);\n\n  console.log('\\n🚀 Next steps:');\n  console.log('   1. For local testing: npx hardhat node');\n  console.log('   2. Start frontend: npm run dev');\n  console.log(\n    '   3. Copy tree.json and addresses.json to public/ for frontend access'\n  );\n  console.log('   4. Visit http://localhost:5173 to claim tokens');\n}\n\n// Handle errors\nmain().catch((error) => {\n  console.error('❌ Deployment failed:', error);\n  process.exitCode = 1;\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What the deployment script does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment Check"
        }), ": Validates that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PRIVATE_KEY"
        }), " is available"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Token Deployment"
        }), ": Deploys the TestToken contract"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merkle Tree Generation"
        }), ": Reads airdrop data and generates the Merkle tree using our generator"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Airdrop Deployment"
        }), ": Deploys UniversalAirdrop with the token address and Merkle root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Funding"
        }), ": Transfers the total airdrop amount to the airdrop contract"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification"
        }), ": Checks balances to ensure everything is set up correctly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Export"
        }), ": Creates an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "addresses.json"
        }), " file with deployment information that will be used by the UI. This file contains the following structure:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"tokenAddress\": \"0xaBd512A0F64986c319eC38EeCEf49EE0EC2a253a\",\n  \"airdropAddress\": \"0x97449F590D48F76ab472390d5606F0472a9129F7\",\n  \"merkleRoot\": \"0xaae8c300cacf66c1768fb91843e746ddf7f982ed523068ce79b76d8671766051\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tokenAddress"
        }), ": The deployed ERC-20 token contract address"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "airdropAddress"
        }), ": The deployed UniversalAirdrop contract address"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "merkleRoot"
        }), ": The Merkle root hash for verifying airdrop claims"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The UI will use this file to interact with the deployed contracts and validate airdrop claims."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "28-create-the-env-file",
      children: "2.8. Create the .env file"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " file in your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contract-airdrop"
      }), " directory:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# .env\nPRIVATE_KEY=your_private_key\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "29-run-the-deployment",
      children: "2.9. Run the deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now you're ready to deploy to Push Chain Donut Testnet:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Make sure you're in the contract-airdrop directory\ncd contract-airdrop\n\n# Deploy to Push Chain Donut Testnet\nnpx hardhat run scripts/deploy.ts --network pushDonut\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "🚀 Starting deployment...\n🔍 Checking environment...\n📝 PRIVATE_KEY exists: true\n👥 Number of signers: 1\nCurrent network: pushDonut\n📝 Deploying contracts with account: 0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9\n💰 Account balance: 9878.898151033624999941\n\n📄 Deploying TestToken...\n✅ TestToken deployed to: 0xaBd512A0F64986c319eC38EeCEf49EE0EC2a253a\n\n🌳 Generating Merkle tree...\n📁 Merkle root: 0xaae8c300cacf66c1768fb91843e746ddf7f982ed523068ce79b76d8671766051\n\n🎯 Deploying UniversalAirdrop...\n✅ UniversalAirdrop deployed to: 0x97449F590D48F76ab472390d5606F0472a9129F7\n\n💸 Total airdrop amount: 3.25 TEST tokens\n🔄 Transferring tokens to airdrop contract...\n✅ Tokens transferred successfully\n🏦 Airdrop contract balance: 3.25 TEST\n👤 Deployer balance: 999996.75 TEST\n\n💾 Deployment info saved to: .../merkle-proof-generator/data/deployment.json\n📄 Contract addresses saved for frontend: .../merkle-proof-generator/data/addresses.json\n\n🎉 Deployment completed successfully!\n\n📋 Summary:\n   Token Contract: 0xaBd512A0F64986c319eC38EeCEf49EE0EC2a253a\n   Airdrop Contract: 0x97449F590D48F76ab472390d5606F0472a9129F7\n   Merkle Root: 0xaae8c300cacf66c1768fb91843e746ddf7f982ed523068ce79b76d8671766051\n   Recipients: 3\n   Total Amount: 3.25 TEST\n\n🚀 Next steps:\n   1. For local testing: npx hardhat node\n   2. Start frontend: npm run dev\n   3. Copy tree.json and addresses.json to public/ for frontend access\n   4. Visit http://localhost:5173 to claim tokens\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After successful deployment, you'll have:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TestToken contract"
        }), " deployed and funded"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UniversalAirdrop contract"
        }), " deployed with Merkle root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Airdrop contract funded"
        }), " with tokens for distribution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment data saved"
        }), " for frontend integration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-3-build-the-claim-ui",
      children: "Part 3: Build the Claim UI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You'll create a React App that fetches the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tree.json"
      }), " data and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addresses.json"
      }), " file (generated previously) to know which addresses to interact with, locates the connected user's airdrop entry, and submits the claim transaction with the cryptographic proof."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-create-a-vite-react-typescript-project",
      children: "3.1. Create a Vite React TypeScript Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, create a new Vite project with React and TypeScript:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm create vite@latest frontend -- --template react-ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Navigate to the project directory and install dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cd frontend\nnpm install\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-install-push-chain-ui-kit-sdk",
      children: "3.2. Install Push Chain UI Kit SDK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the UI Kit SDK to handle wallet connections and user authentication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @pushchain/ui-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-use-react-v18",
      children: "3.3. Use React v18"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Make sure you're using React v18:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install react@18.2.0 react-dom@18.2.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-wrap-your-app-with-pushuniversalwalletprovider",
      children: "3.3. Wrap your app with PushUniversalWalletProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Update your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main.tsx"
      }), " (or equivalent entry file) to wrap your app with the PushUniversalWalletProvider:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App.tsx';\nimport { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';\n\nconst walletConfig = {\n  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n};\n\ncreateRoot(document.getElementById('root')!).render(\n  <PushUniversalWalletProvider config={walletConfig}>\n    <StrictMode>\n      <App />\n    </StrictMode>\n  </PushUniversalWalletProvider>\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This provider enables wallet connections and user authentication throughout your application."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "34-expose-treejson-to-your-app",
      children: ["3.4. Expose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tree.json"
      }), " to your app"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Copy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "merkle-proof-generator/data/tree.json"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "merkle-proof-generator/data/addresses.json"
      }), " into your web app’s static assets (in our case, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "frontend/public/"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-add-a-minimal-claim-component",
      children: "3.5. Add a minimal Claim component"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useState, useEffect, useCallback } from 'react';\nimport { ethers } from 'ethers';\nimport {\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\nimport { PushChain } from '@pushchain/core';\n\n// Universal Airdrop Contract ABI - Standard format for PushChain encoding\nconst AIRDROP_ABI = [\n  {\n    inputs: [\n      { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },\n      { internalType: 'uint256', name: 'amount', type: 'uint256' },\n      { internalType: 'string', name: 'chainNamespace', type: 'string' },\n      { internalType: 'string', name: 'chainId', type: 'string' },\n    ],\n    name: 'claim',\n    outputs: [],\n    stateMutability: 'nonpayable',\n    type: 'function',\n  },\n];\n\n// Chain options for the UI (now used only for display names)\nconst CHAIN_OPTIONS = [\n  { namespace: 'eip155', id: '11155111', name: 'Ethereum Sepolia' },\n  {\n    namespace: 'solana',\n    id: 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1',\n    name: 'Solana Devnet',\n  },\n  { namespace: 'eip155', id: '42101', name: 'Push Chain Testnet' },\n];\n\n// Helper function to get chain name from namespace and id\nconst getChainName = (namespace: string, id: string): string => {\n  const chain = CHAIN_OPTIONS.find(\n    (chain) => chain.namespace === namespace && chain.id === id\n  );\n  return chain ? chain.name : `${namespace}:${id}`;\n};\n\n// Normalize origin.chain (e.g., 'eip155:42101') to our app's namespace/id scheme\nconst normalizeChainFromOrigin = (\n  originChain: string\n): { namespace: string; id: string; name: string } => {\n  const [ns, chainId] = String(originChain).split(':');\n\n  // No special mapping; tree.json uses 'eip155' with id '42101'\n\n  // Default passthrough (EVM chains, Solana, etc.)\n  return { namespace: ns, id: chainId, name: getChainName(ns, chainId) };\n};\n\nfunction WalletUI() {\n  // Contract addresses will be loaded dynamically\n  const [contractAddresses, setContractAddresses] = useState<any>(null);\n\n  // All hooks must be called before any conditional returns\n  const [isClaiming, setIsClaiming] = useState(false);\n  const [isLoadingProof, setIsLoadingProof] = useState(false);\n  const [hasClaimed, setHasClaimed] = useState(false);\n  const [claimAmount, setClaimAmount] = useState('');\n  const [proof, setProof] = useState<string[]>([]);\n  const [detectedChain, setDetectedChain] = useState<{\n    namespace: string;\n    id: string;\n    name: string;\n  } | null>(null);\n  const [treeData, setTreeData] = useState<any>(null);\n  const [error, setError] = useState('');\n  const [success, setSuccess] = useState('');\n\n  // Push Universal Wallet hooks\n  const { connectionStatus } = usePushWalletContext();\n  const { pushChainClient } = usePushChainClient();\n\n  // Load contract addresses and tree data on mount\n  useEffect(() => {\n    const loadAddresses = async () => {\n      try {\n        const response = await fetch('./addresses.json');\n        const data = await response.json();\n        setContractAddresses(data);\n      } catch (error) {\n        console.error('Failed to load contract addresses:', error);\n      }\n    };\n\n    const loadTreeData = async () => {\n      try {\n        const response = await fetch('./tree.json');\n        const data = await response.json();\n        setTreeData(data);\n      } catch (error) {\n        console.error('Failed to load tree data:', error);\n      }\n    };\n\n    loadAddresses();\n    loadTreeData();\n  }, []);\n\n  // Detect chain when connection status changes\n  useEffect(() => {\n    if (\n      connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED &&\n      pushChainClient\n    ) {\n      // Try to get the origin chain from the Push client\n      try {\n        console.log('Detecting origin chain from Push client...');\n        console.log('Universal object:', pushChainClient.universal);\n\n        if (pushChainClient.universal?.origin) {\n          const origin = pushChainClient.universal.origin;\n          console.log('Origin from universal.origin:', origin);\n\n          const normalized = normalizeChainFromOrigin(String(origin.chain));\n          setDetectedChain(normalized);\n          console.log('Detected chain:', normalized);\n        } else {\n          // Fallback: assume Sepolia if we can't detect\n          console.log('Could not detect origin chain, defaulting to Sepolia');\n          setDetectedChain({\n            namespace: 'eip155',\n            id: '11155111',\n            name: 'Ethereum Sepolia',\n          });\n        }\n      } catch (err) {\n        console.log('Error detecting chain:', err);\n        // Fallback: assume Sepolia\n        setDetectedChain({\n          namespace: 'eip155',\n          id: '11155111',\n          name: 'Ethereum Sepolia',\n        });\n      }\n    } else {\n      setDetectedChain(null);\n    }\n  }, [connectionStatus, pushChainClient]);\n\n  // Check if address has already claimed for the selected chain\n  const checkClaimStatus = useCallback(\n    async (client: any) => {\n      if (!contractAddresses) return;\n\n      try {\n        // For now, we'll use a simple approach - in production you'd use the client's provider\n        // This is a simplified version; you might need to adapt based on pushChainClient API\n        console.log('Checking claim status with Push Chain client');\n        // TODO: Implement claim status check using pushChainClient\n      } catch (err) {\n        console.error('Error checking claim status:', err);\n      }\n    },\n    [contractAddresses]\n  );\n\n  // Load user's proof from tree.json based on connected wallet and selected chain\n  const loadUserProof = useCallback(async () => {\n    if (!treeData || !pushChainClient) {\n      setError('Tree data not loaded or wallet not connected');\n      return;\n    }\n\n    setIsLoadingProof(true);\n    setError('');\n    setSuccess('');\n\n    try {\n      // Ensure entries array exists\n      if (!treeData.entries || !Array.isArray(treeData.entries)) {\n        setError('Invalid tree data structure: entries array not found');\n        return;\n      }\n\n      console.log('treeData', treeData);\n      console.log('pushChainClient.universal', pushChainClient.universal);\n\n      // Use the origin address when available (maps executor to original address)\n      // Fallback to the UEA (executor) address if origin is not available\n      let currentLookupAddress: string;\n\n      const origin = pushChainClient.universal?.origin;\n      if (origin?.address) {\n        currentLookupAddress = origin.address;\n        console.log('Using origin address for lookup:', currentLookupAddress);\n      } else {\n        currentLookupAddress = pushChainClient.universal.account;\n        console.log(\n          'Origin not available, using UEA address for lookup:',\n          currentLookupAddress\n        );\n      }\n\n      if (!currentLookupAddress) {\n        setError('Unable to determine lookup address from Push Chain client');\n        return;\n      }\n\n      console.log('Using lookup address:', currentLookupAddress);\n      console.log('Detected chain:', detectedChain);\n\n      if (!detectedChain) {\n        setError(\n          'Could not detect your origin chain. Please try reconnecting your wallet.'\n        );\n        return;\n      }\n\n      // Find the user's entry based on their address and detected chain\n      const userEntry = treeData.entries.find(\n        (entry: any) =>\n          entry.recipient.toLowerCase() ===\n            currentLookupAddress.toLowerCase() &&\n          entry.chainNamespace === detectedChain.namespace &&\n          entry.chainId === detectedChain.id\n      );\n\n      console.log('userEntry', userEntry);\n\n      if (userEntry) {\n        setProof(userEntry.proof);\n        setClaimAmount(ethers.formatEther(userEntry.amount));\n        setError('');\n        setSuccess(`Found your proof for ${detectedChain.name}!`);\n      } else {\n        // More detailed error message\n        console.log(\n          'Available entries:',\n          treeData.entries.map((entry: any) => ({\n            recipient: entry.recipient,\n            chainNamespace: entry.chainNamespace,\n            chainId: entry.chainId,\n          }))\n        );\n        setError(\n          `No proof found for address ${currentLookupAddress.slice(0, 6)}...${currentLookupAddress.slice(-4)} on ${\n            detectedChain.name\n          }. This might mean you don't have tokens allocated on this chain, or there's an issue with chain detection.`\n        );\n      }\n    } catch (err) {\n      setError('Failed to load proof data');\n      console.error('Error loading proof:', err);\n    } finally {\n      setIsLoadingProof(false);\n    }\n  }, [\n    treeData,\n    pushChainClient,\n    detectedChain,\n    setError,\n    setSuccess,\n    setProof,\n    setClaimAmount,\n    setIsLoadingProof,\n  ]);\n\n  // Check claim status and auto-load proof when detected chain changes\n  useEffect(() => {\n    if (\n      connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED &&\n      pushChainClient &&\n      contractAddresses &&\n      detectedChain &&\n      treeData\n    ) {\n      checkClaimStatus(pushChainClient);\n      // Auto-load proof when wallet is connected, chain is detected, and tree data is loaded\n      loadUserProof();\n    }\n  }, [\n    detectedChain,\n    connectionStatus,\n    pushChainClient,\n    contractAddresses,\n    treeData,\n    checkClaimStatus,\n    loadUserProof,\n  ]);\n\n  // Early return if contract addresses aren't loaded yet\n  if (!contractAddresses) {\n    return <div>Loading contract addresses...</div>;\n  }\n\n  // Claim tokens using Push Universal Transaction\n  const claimTokens = async () => {\n    if (!pushChainClient || !contractAddresses || !detectedChain) return;\n    if (!claimAmount || proof.length === 0) {\n      setError('Please enter claim amount and proof');\n      return;\n    }\n\n    setIsClaiming(true);\n    setError('');\n    setSuccess('');\n\n    try {\n      const amount = ethers.parseEther(claimAmount);\n\n      // Encode the claim function call\n      const claimData = PushChain.utils.helpers.encodeTxData({\n        abi: AIRDROP_ABI,\n        functionName: 'claim',\n        args: [proof, amount, detectedChain.namespace, detectedChain.id],\n      }) as `0x${string}`;\n\n      console.log('proof', proof);\n      console.log('amount', amount);\n      console.log('claimData', claimData);\n\n      // Send universal transaction using Push Chain client\n      const tx = await pushChainClient.universal.sendTransaction({\n        to: contractAddresses.airdropAddress as `0x${string}`,\n        data: claimData,\n        value: BigInt('0'), // No PC value needed for claim\n      });\n      console.log('tx', tx);\n      const receipt = await tx.wait();\n      console.log('receipt', receipt);\n\n      setSuccess(\n        `Tokens claimed successfully from ${detectedChain.name}! Transaction: ${tx.hash}`\n      );\n      setHasClaimed(true);\n\n      // TODO: Update balance using pushChainClient\n    } catch (err: any) {\n      setError(err.message || 'Claim failed');\n      console.error('Claim error:', err);\n    } finally {\n      setIsClaiming(false);\n    }\n  };\n\n  return (\n    <div\n      style={{\n        maxWidth: '500px',\n        margin: '0 auto',\n        padding: '20px',\n        fontFamily: 'system-ui, sans-serif',\n      }}\n    >\n      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>\n        Universal Airdrop\n      </h1>\n      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>\n        Claim tokens using Push Chain's Universal External Accounts\n      </p>\n\n      <div style={{ marginBottom: '30px' }}>\n        <PushUniversalAccountButton />\n      </div>\n\n      {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED ? (\n        <div>\n          <div style={{ marginBottom: '20px', textAlign: 'center' }}>\n            <p style={{ marginBottom: '5px', fontSize: '14px', color: '#666' }}>\n              Connected Account\n            </p>\n            <p style={{ fontFamily: 'monospace', fontSize: '14px' }}>\n              {pushChainClient?.universal?.account?.slice(0, 8)}...\n              {pushChainClient?.universal?.account?.slice(-6)}\n            </p>\n          </div>\n\n          <div style={{ marginBottom: '20px', textAlign: 'center' }}>\n            <p style={{ marginBottom: '5px', fontSize: '14px', color: '#666' }}>\n              Origin Chain\n            </p>\n            <p style={{ fontWeight: 'bold' }}>\n              {detectedChain ? detectedChain.name : 'Detecting...'}\n            </p>\n          </div>\n\n          {hasClaimed ? (\n            <div\n              style={{\n                padding: '16px',\n                backgroundColor: '#4CAF50',\n                color: 'white',\n                borderRadius: '8px',\n                textAlign: 'center',\n              }}\n            >\n              ✅ Tokens claimed successfully!\n            </div>\n          ) : (\n            <div>\n              {isLoadingProof && (\n                <div\n                  style={{\n                    padding: '12px',\n                    backgroundColor: '#2196F3',\n                    color: 'white',\n                    borderRadius: '6px',\n                    marginBottom: '16px',\n                    textAlign: 'center',\n                  }}\n                >\n                  🔍 Loading your airdrop details...\n                </div>\n              )}\n\n              {!isLoadingProof && !claimAmount && (\n                <div\n                  style={{\n                    padding: '16px',\n                    backgroundColor: '#fff3cd',\n                    color: '#856404',\n                    borderRadius: '6px',\n                    marginBottom: '16px',\n                    textAlign: 'center',\n                  }}\n                >\n                  ⚠️ No tokens available to claim on this chain\n                </div>\n              )}\n\n              {claimAmount && (\n                <div style={{ marginBottom: '20px', textAlign: 'center' }}>\n                  <div\n                    style={{\n                      display: 'inline-block',\n                      backgroundColor: '#f0f8ff',\n                      padding: '12px 20px',\n                      borderRadius: '8px',\n                      border: '2px solid #646cff',\n                    }}\n                  >\n                    <p\n                      style={{\n                        margin: '0 0 4px 0',\n                        fontSize: '12px',\n                        color: '#666',\n                        fontWeight: 'bold',\n                      }}\n                    >\n                      CLAIM AMOUNT\n                    </p>\n                    <p\n                      style={{\n                        margin: 0,\n                        fontSize: '24px',\n                        fontWeight: 'bold',\n                        color: '#646cff',\n                      }}\n                    >\n                      {claimAmount}{' '}\n                      <span style={{ fontSize: '16px', color: '#666' }}>\n                        TOKENS\n                      </span>\n                    </p>\n                  </div>\n                </div>\n              )}\n\n              <button\n                onClick={claimTokens}\n                disabled={\n                  isClaiming ||\n                  isLoadingProof ||\n                  !claimAmount ||\n                  proof.length === 0\n                }\n                style={{\n                  width: '100%',\n                  padding: '16px',\n                  fontSize: '18px',\n                  fontWeight: 'bold',\n                  backgroundColor:\n                    isClaiming ||\n                    isLoadingProof ||\n                    !claimAmount ||\n                    proof.length === 0\n                      ? '#ccc'\n                      : '#646cff',\n                  color: 'white',\n                  border: 'none',\n                  borderRadius: '8px',\n                  cursor:\n                    isClaiming ||\n                    isLoadingProof ||\n                    !claimAmount ||\n                    proof.length === 0\n                      ? 'not-allowed'\n                      : 'pointer',\n                  transition: 'all 0.2s ease',\n                  transform:\n                    isClaiming ||\n                    isLoadingProof ||\n                    !claimAmount ||\n                    proof.length === 0\n                      ? 'none'\n                      : 'scale(1)',\n                  boxShadow:\n                    isClaiming ||\n                    isLoadingProof ||\n                    !claimAmount ||\n                    proof.length === 0\n                      ? 'none'\n                      : '0 4px 12px rgba(100, 108, 255, 0.3)',\n                }}\n              >\n                {isLoadingProof\n                  ? '⏳ Loading Your Proof...'\n                  : isClaiming\n                    ? '⏳ Claiming Tokens...'\n                    : `🚀 Claim ${claimAmount || '0'} Tokens`}\n              </button>\n            </div>\n          )}\n        </div>\n      ) : null}\n\n      {error && (\n        <div\n          style={{\n            padding: '12px',\n            backgroundColor: '#ffebee',\n            color: '#c62828',\n            borderRadius: '6px',\n            marginTop: '20px',\n            textAlign: 'center',\n          }}\n        >\n          {error}\n        </div>\n      )}\n\n      {success && (\n        <div\n          style={{\n            padding: '12px',\n            backgroundColor: '#e8f5e8',\n            color: '#2e7d32',\n            borderRadius: '6px',\n            marginTop: '20px',\n            textAlign: 'center',\n          }}\n        >\n          {success}\n        </div>\n      )}\n\n      <div\n        style={{\n          marginTop: '30px',\n          padding: '16px',\n          backgroundColor: '#f8f9fa',\n          borderRadius: '8px',\n        }}\n      >\n        <p\n          style={{\n            fontSize: '14px',\n            color: '#666',\n            margin: 0,\n            textAlign: 'center',\n          }}\n        >\n          Connect your wallet and your airdrop details will be loaded\n          automatically\n        </p>\n      </div>\n    </div>\n  );\n}\n\nexport default WalletUI;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You generated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Merkle proofs"
      }), " from an airdrop list, deployed a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Merkle‑verified airdrop contract"
      }), " to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain Donut Testnet"
      }), ", and added a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "claim UI"
      }), ". With this universal airdrop system, users from different chains can claim their tokens seamlessly using Push Chain's Universal External Accounts (UEA) system."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ })

}]);