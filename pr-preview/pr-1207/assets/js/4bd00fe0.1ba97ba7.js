"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[53036],{

/***/ 466624
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_02_power_features_02_tutorial_derive_universal_executor_account_mdx_4bd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-02-power-features-02-tutorial-derive-universal-executor-account-mdx-4bd.json
const site_docs_chain_01_tutorials_02_power_features_02_tutorial_derive_universal_executor_account_mdx_4bd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/power-features/docs-chain-tutorials-derive-universal-executor-account","title":"Derive Universal Executor Accounts (UEAs)","description":"Derive Universal Executor Accounts | Tutorials | Push Chain Docs","source":"@site/docs/chain/01-tutorials/02-power-features/02-Tutorial-Derive-Universal-Executor-Account.mdx","sourceDirName":"chain/01-tutorials/02-power-features","slug":"/chain/tutorials/power-features/tutorial-derive-universal-executor-account","permalink":"/push-chain-website/pr-preview/pr-1207/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/02-power-features/02-Tutorial-Derive-Universal-Executor-Account.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"docs-chain-tutorials-derive-universal-executor-account","title":"Derive Universal Executor Accounts (UEAs)","hide_title":false,"slug":"./tutorial-derive-universal-executor-account","displayed_sidebar":"pushChainSidebar","sidebar_position":2,"image":"/assets/docs/previews/docs_chain_tutorials_derive_universal_executor_account--derive_universal_executor_accounts_(ueas).png"},"sidebar":"pushChainSidebar","previous":{"title":"Batch Transactions (Multicall)","permalink":"/push-chain-website/pr-preview/pr-1207/docs/chain/tutorials/power-features/tutorial-batch-transactions"},"next":{"title":"Token Systems","permalink":"/push-chain-website/pr-preview/pr-1207/docs/chain/tutorials/token-systems"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
var Tabs = __webpack_require__(77086);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
var TabItem = __webpack_require__(436026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 1 modules
var Details = __webpack_require__(989746);
// EXTERNAL MODULE: ./src/components/TutorialTimer/index.ts + 1 modules
var TutorialTimer = __webpack_require__(546772);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
// EXTERNAL MODULE: ./src/components/GitHubRepo/index.ts + 1 modules
var GitHubRepo = __webpack_require__(531855);
;// ./docs/chain/01-tutorials/02-power-features/02-Tutorial-Derive-Universal-Executor-Account.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-derive-universal-executor-account',
	title: 'Derive Universal Executor Accounts (UEAs)',
	hide_title: false,
	slug: './tutorial-derive-universal-executor-account',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_chain_tutorials_derive_universal_executor_account--derive_universal_executor_accounts_(ueas).png'
};
const contentTitle = undefined;

const assets = {

};









const toc = [{
  "value": "Understanding Universal Executor Accounts (UEAs)",
  "id": "understanding-universal-executor-accounts-ueas",
  "level": 2
}, {
  "value": "Key Concepts",
  "id": "key-concepts",
  "level": 3
}, {
  "value": "Why UEAs Matter",
  "id": "why-ueas-matter",
  "level": 3
}, {
  "value": "Deriving UEAs with the SDK",
  "id": "deriving-ueas-with-the-sdk",
  "level": 2
}, {
  "value": "Basic UEA Derivation",
  "id": "basic-uea-derivation",
  "level": 3
}, {
  "value": "Understanding the Process",
  "id": "understanding-the-process",
  "level": 3
}, {
  "value": "Supported Chains",
  "id": "supported-chains",
  "level": 3
}, {
  "value": "Deriving UEAs in Smart Contracts",
  "id": "deriving-ueas-in-smart-contracts",
  "level": 2
}, {
  "value": "UEAFactory Contract",
  "id": "ueafactory-contract",
  "level": 3
}, {
  "value": "Interface",
  "id": "interface",
  "level": 3
}, {
  "value": "Example Contract",
  "id": "example-contract",
  "level": 3
}, {
  "value": "Usage Example",
  "id": "usage-example",
  "level": 3
}, {
  "value": "Understanding UEA Derivation",
  "id": "understanding-uea-derivation",
  "level": 2
}, {
  "value": "The Derivation Process",
  "id": "the-derivation-process",
  "level": 3
}, {
  "value": "Key Properties",
  "id": "key-properties",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 2
}, {
  "value": "1. Airdrop Systems",
  "id": "1-airdrop-systems",
  "level": 3
}, {
  "value": "2. Cross-Chain Identity",
  "id": "2-cross-chain-identity",
  "level": 3
}, {
  "value": "3. Universal Allowlists",
  "id": "3-universal-allowlists",
  "level": 3
}, {
  "value": "Live Playground",
  "id": "live-playground",
  "level": 2
}, {
  "value": "Source Code",
  "id": "source-code",
  "level": 2
}, {
  "value": "What We Achieved",
  "id": "what-we-achieved",
  "level": 2
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 2
}, {
  "value": "What&#39;s Next?",
  "id": "whats-next",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    br: "br",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Derive Universal Executor Accounts | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(TutorialTimer/* default */.A, {
      estimatedMinutes: 10
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this tutorial, you'll learn how to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "derive Universal Executor Accounts (UEAs)"
      }), " from any wallet address on any blockchain. This is the foundational concept that enables Push Chain's universal execution model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this tutorial, you'll be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Understand how UEAs map origin wallets to Push Chain addresses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Derive UEA addresses from any wallet (Ethereum, Solana, etc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Query UEAs programmatically using the SDK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Use the UEAFactory contract to derive UEAs on-chain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-universal-executor-accounts-ueas",
      children: "Understanding Universal Executor Accounts (UEAs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Executor Account (UEA)"
      }), " is a deterministic smart account on Push Chain, derived from an origin wallet (chain namespace + chain id + owner), that serves as the execution account for that origin wallet on Push Chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Common Misconceptions",
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "A UEA is not a new wallet on the origin chain"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "No private keys are created or stored on Push Chain"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "UEA addresses are deterministic, but the smart account is deployed lazily on first use"
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Origin Wallet → UEA Mapping"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every wallet on every chain has a unique, deterministic UEA on Push Chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same origin address always produces the same UEA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The UEA is the execution surface for all transactions on Push Chain"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Ethereum Wallet: 0xABC...123\n    ↓ (deterministic derivation)\nPush Chain UEA: 0x456...789\n\nSolana Wallet: 7xKX...ABC\n    ↓ (deterministic derivation)\nPush Chain UEA: 0x789...DEF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-ueas-matter",
      children: "Why UEAs Matter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Traditional Multi-Chain Problem:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users need different wallets for different chains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each chain requires separate gas tokens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No unified identity across chains"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain Solution with UEAs:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One origin wallet → One UEA on Push Chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UEA is controlled by the origin wallet of the user"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The UEA executes transactions on behalf of the origin wallet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users interact from their preferred chain seamlessly"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\n    A[Ethereum Wallet] --> D[UEA on Push Chain]\n    B[Solana Wallet] --> E[UEA on Push Chain]\n    C[Base Wallet] --> F[UEA on Push Chain]\n    \n    D --> G[Execute Transactions]\n    E --> G\n    F --> G\n    \n    G --> H[Smart Contracts on Push Chain]\n    \n    style D fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style E fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style F fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style A fill:#627eea,color:#fff\n    style B fill:#16c492,color:#fff\n    style C fill:#0052ff,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deriving-ueas-with-the-sdk",
      children: "Deriving UEAs with the SDK"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Push Chain SDK provides utilities to derive UEAs from any wallet address."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic-uea-derivation",
      children: "Basic UEA Derivation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\n\n// Convert origin address to Universal Account\nconst account = PushChain.utils.account.toUniversal(\n  '0xYourEthereumAddress', \n  {\n    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA\n  }\n);\n\n// Derive the UEA address\nconst executorAddress = await PushChain.utils.account.convertOriginToExecutor(account);\n\nconsole.log('UEA Address:', executorAddress.address);\n// Output: 0x... (deterministic Push Chain address)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "understanding-the-process",
      children: "Understanding the Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Create Universal Account"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const account = PushChain.utils.account.toUniversal(originAddress, { chain });\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This creates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UniversalAccount"
      }), " object containing:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chainNamespace"
        }), ": e.g., \"eip155\" for EVM chains, \"solana\" for Solana"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chainId"
        }), ": e.g., \"11155111\" for Ethereum Sepolia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "owner"
        }), ": The origin wallet address"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Convert to Executor Address"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const executorAddress = await PushChain.utils.account.convertOriginToExecutor(account);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This performs the deterministic derivation to get the UEA address on Push Chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supported-chains",
      children: "Supported Chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The SDK supports UEA derivation for supported chains:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Chain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Namespace"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Chain ID"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eip155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11155111 (Sepolia)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Solana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "solana"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1 (Devnet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eip155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "84532 (Sepolia)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eip155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "421614 (Sepolia)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eip155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "97 (Testnet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eip155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42101 (Testnet)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To get a list of all supported chains, see the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/utility-functions/#get-supported-chains",
        children: "Get Supported Chains"
      }), " utility function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deriving-ueas-in-smart-contracts",
      children: "Deriving UEAs in Smart Contracts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also derive UEAs directly in your Solidity contracts using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UEAFactory"
      }), " precompile."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ueafactory-contract",
      children: "UEAFactory Contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UEAFactory"
      }), " is deployed at a fixed address on Push Chain:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0x00000000000000000000000000000000000000eA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interface",
      children: "Interface"
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "IUEAFactory Interface",
      fileName: "IUEAFactory.sol",
      url: "https://github.com/pushchain/push-chain-core-contracts/blob/main/src/Interfaces/IUEAFactory.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nstruct UniversalAccountId {\n    string chainNamespace;\n    string chainId;\n    bytes owner;\n}\n\ninterface IUEAFactory {\n    function getUEAForOrigin(\n        UniversalAccountId memory account\n    ) external view returns (address uea, bool isDeployed);\n    \n    function getOriginForUEA(\n        address uea\n    ) external view returns (UniversalAccountId memory, bool);\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-contract",
      children: "Example Contract"
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "UEA Lookup Contract",
      fileName: "UEALookup.sol",
      url: "https://github.com/pushchain/push-chain-examples/blob/main/tutorials/derive-universal-executor-account/contracts/src/UEALookup.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\nimport \"push-chain-core-contracts/src/Interfaces/IUEAFactory.sol\";\n\ncontract UEALookup {\n    IUEAFactory constant FACTORY = \n        IUEAFactory(0x00000000000000000000000000000000000000eA);\n\n    // Get UEA address for any origin wallet\n    function getUEAForUser(\n        string memory chainNamespace,\n        string memory chainId,\n        bytes memory owner\n    ) public view returns (address uea, bool isDeployed) {\n        UniversalAccountId memory account = UniversalAccountId({\n            chainNamespace: chainNamespace,\n            chainId: chainId,\n            owner: owner\n        });\n        \n        return FACTORY.getUEAForOrigin(account);\n    }\n    \n    // Get origin wallet info from UEA address\n    function getOriginForUEA(address ueaAddress) \n        public view returns (\n            string memory chainNamespace,\n            string memory chainId,\n            bytes memory owner,\n            bool exists\n        ) \n    {\n        (UniversalAccountId memory account, bool found) = \n            FACTORY.getOriginForUEA(ueaAddress);\n        \n        return (\n            account.chainNamespace,\n            account.chainId,\n            account.owner,\n            found\n        );\n    }\n    \n    // Check if a UEA is deployed\n    function isUEADeployed(\n        string memory chainNamespace,\n        string memory chainId,\n        bytes memory owner\n    ) public view returns (bool) {\n        UniversalAccountId memory account = UniversalAccountId({\n            chainNamespace: chainNamespace,\n            chainId: chainId,\n            owner: owner\n        });\n        \n        (, bool deployed) = FACTORY.getUEAForOrigin(account);\n        return deployed;\n    }\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Methods:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getUEAForOrigin()"
            })
          }), " - Get the UEA address for any origin wallet"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Returns the UEA address and whether it's been deployed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Works for any chain (Ethereum, Solana, etc.)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getOriginForUEA()"
            })
          }), " - Reverse lookup: get origin wallet from UEA"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Returns the chain namespace, chain ID, and owner address"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Useful for verifying the origin of a transaction"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage-example",
      children: "Usage Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// Get UEA for an Ethereum Sepolia wallet\n(address uea, bool deployed) = getUEAForUser(\n    \"eip155\",\n    \"11155111\",\n    abi.encodePacked(0xYourEthereumAddress)\n);\n\n// Get UEA for a Solana wallet\n(address solanaUEA, bool deployed) = getUEAForUser(\n    \"solana\",\n    \"EtWTRABZaYq6iMfeYKouRu166VU2xqa1\",\n    abi.encodePacked(\"Base58SolanaAddress\")\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Derivation Note",
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "For Solana wallets, owner must be the raw public key bytes (decoded from base58), not the base58 string."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-uea-derivation",
      children: "Understanding UEA Derivation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-derivation-process",
      children: "The Derivation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    A[Origin Address] --> B[Chain Namespace + Chain ID]\n    B --> C[Universal Account]\n    C --> D[Deterministic Hash]\n    D --> E[UEA Address on Push Chain]\n    \n    style E fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-step:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), ": Origin wallet address + chain information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create Universal Account"
        }), ": Combine namespace, chain ID, and owner"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic Derivation"
        }), ": Apply cryptographic hash function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Output"
        }), ": UEA address on Push Chain"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-properties",
      children: "Key Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deterministic"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same input always produces same output"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can be computed off-chain before any transaction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No registration or setup required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unique"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each origin wallet has exactly one UEA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different chains produce different UEAs for the same address"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0xABC"
        }), " on Ethereum ≠ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0xABC"
        }), " on Base"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bidirectional"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can derive UEA from origin wallet"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Can query origin wallet from UEA (using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getOriginForUEA"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-airdrop-systems",
      children: "1. Airdrop Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Derive UEAs for all recipients to create a universal airdrop:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const recipients = [\n  { address: '0xEth...', chain: ETHEREUM_SEPOLIA },\n  { address: '7xSol...', chain: SOLANA_DEVNET },\n];\n\nconst ueas = await Promise.all(\n  recipients.map(async (r) => {\n    const account = PushChain.utils.account.toUniversal(r.address, { chain: r.chain });\n    return await PushChain.utils.account.convertOriginToExecutor(account);\n  })\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-cross-chain-identity",
      children: "2. Cross-Chain Identity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify a user's identity across chains:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "function verifyUser(address uea) public view returns (bool) {\n    (UniversalAccountId memory origin, bool exists) = \n        FACTORY.getOriginForUEA(uea);\n    \n    return exists && isAllowedChain(origin.chainNamespace);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-universal-allowlists",
      children: "3. Universal Allowlists"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create allowlists that work across all chains:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "mapping(address => bool) public allowlist;\n\nfunction addToAllowlist(\n    string memory chainNamespace,\n    string memory chainId,\n    bytes memory owner\n) external onlyOwner {\n    (address uea, ) = FACTORY.getUEAForOrigin(\n        UniversalAccountId(chainNamespace, chainId, owner)\n    );\n    allowlist[uea] = true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live Playground"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Try deriving UEAs from any wallet address in real-time:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// customPropMinimized='true'\nimport {\n  PushUniversalAccountButton,\n  usePushChain,\n  usePushChainClient,\n  usePushWalletContext,\n  PushUniversalWalletProvider,\n  PushUI,\n} from \"@pushchain/ui-kit\";\nimport { useState } from \"react\";\n\nfunction DeriveUEAExample() {\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  function Component() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n    const { PushChain } = usePushChain();\n\n    const [manualLookupAddress, setManualLookupAddress] = useState(\"\");\n    const [manualLookupChain, setManualLookupChain] = useState(\n      PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA\n    );\n    const [manualLookupResult, setManualLookupResult] = useState(\"\");\n    const [isCheckingUEA, setIsCheckingUEA] = useState(false);\n    const [error, setError] = useState(\"\");\n\n    const chains = [\n      { value: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET, label: \"Push Chain\" },\n      { value: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA, label: \"Ethereum Sepolia\" },\n      { value: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET, label: \"Solana Devnet\" },\n      { value: PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA, label: \"Base Sepolia\" },\n      { value: PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA, label: \"Arbitrum Sepolia\" },\n      { value: PushChain.CONSTANTS.CHAIN.BNB_TESTNET, label: \"BNB Testnet\" },\n    ];\n\n    const handleDeriveUEA = async () => {\n      if (!manualLookupAddress.trim()) {\n        setError(\"Please enter an address\");\n        return;\n      }\n\n      setIsCheckingUEA(true);\n      setError(\"\");\n      setManualLookupResult(\"\");\n\n      try {\n        const account = PushChain.utils.account.toUniversal(\n          manualLookupAddress,\n          { chain: manualLookupChain }\n        );\n\n        const executorAddress = await PushChain.utils.account.convertOriginToExecutor(account);\n        setManualLookupResult(executorAddress.address);\n      } catch (err) {\n        console.error(\"Error deriving UEA:\", err);\n        setError(\"Failed to derive Universal Executor Account\");\n      } finally {\n        setIsCheckingUEA(false);\n      }\n    };\n\n    return (\n      <div style={{ maxWidth: \"600px\", margin: \"0 auto\", padding: \"20px\", fontFamily: \"system-ui\" }}>\n        <h2 style={{ textAlign: \"center\", marginBottom: \"10px\" }}>Derive Universal Executor Account</h2>\n        <p style={{ textAlign: \"center\", color: \"#666\", fontSize: \"14px\", marginBottom: \"30px\" }}>\n          Enter any wallet address to derive its deterministic UEA on Push Chain\n        </p>\n\n        <div style={{ marginBottom: \"30px\", display: \"flex\", justifyContent: \"center\" }}>\n          <PushUniversalAccountButton />\n        </div>\n\n        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && pushChainClient && (\n          <div style={{ marginBottom: \"30px\", padding: \"20px\", backgroundColor: \"#f0f7ff\", borderRadius: \"12px\", border: \"1px solid #d0e7ff\" }}>\n            <h3 style={{ fontSize: \"16px\", marginBottom: \"16px\", color: \"#0066cc\", fontWeight: \"bold\" }}>\n              🔑 Your Connected Wallet\n            </h3>\n            \n            <div style={{ marginBottom: \"12px\", padding: \"12px\", backgroundColor: \"white\", borderRadius: \"8px\" }}>\n              <p style={{ fontSize: \"12px\", color: \"#666\", marginBottom: \"4px\", fontWeight: \"bold\" }}>Origin Wallet:</p>\n              <p style={{ fontSize: \"14px\", fontFamily: \"monospace\", wordBreak: \"break-all\", margin: 0 }}>\n                {pushChainClient.universal.origin.address}\n              </p>\n              <p style={{ fontSize: \"12px\", color: \"#666\", marginTop: \"4px\" }}>\n                Chain: {PushChain.utils.chains.getChainName(pushChainClient.universal.origin.chain)}\n              </p>\n            </div>\n            \n            <div style={{ padding: \"12px\", backgroundColor: \"white\", borderRadius: \"8px\", border: \"2px solid #d946ef\" }}>\n              <p style={{ fontSize: \"12px\", color: \"#666\", marginBottom: \"4px\", fontWeight: \"bold\" }}>Universal Executor Account (UEA):</p>\n              <p style={{ fontSize: \"14px\", fontFamily: \"monospace\", wordBreak: \"break-all\", margin: 0, color: \"#d946ef\", fontWeight: \"bold\" }}>\n                {pushChainClient.universal.account}\n              </p>\n            </div>\n          </div>\n        )}\n\n        <div style={{ padding: \"20px\", backgroundColor: \"#f9f9f9\", borderRadius: \"12px\", border: \"1px solid #ddd\" }}>\n          <h3 style={{ fontSize: \"16px\", marginBottom: \"16px\", fontWeight: \"bold\" }}>\n            Derive UEA from Any Wallet\n          </h3>\n          <p style={{ fontSize: \"14px\", color: \"#666\", marginBottom: \"16px\" }}>\n            Enter any wallet address and chain to derive its Universal Executor Account:\n          </p>\n\n          <label style={{ display: \"block\", marginBottom: \"8px\", fontSize: \"14px\", fontWeight: \"bold\" }}>\n            Chain:\n          </label>\n          <select\n            value={manualLookupChain}\n            onChange={(e) => setManualLookupChain(e.target.value)}\n            style={{ width: \"100%\", padding: \"10px\", marginBottom: \"16px\", borderRadius: \"6px\", border: \"1px solid #ddd\", fontSize: \"14px\" }}\n          >\n            {chains.map((chain) => (\n              <option key={chain.value} value={chain.value}>\n                {chain.label}\n              </option>\n            ))}\n          </select>\n\n          <label style={{ display: \"block\", marginBottom: \"8px\", fontSize: \"14px\", fontWeight: \"bold\" }}>\n            Wallet Address:\n          </label>\n          <input\n            type=\"text\"\n            value={manualLookupAddress}\n            onChange={(e) => setManualLookupAddress(e.target.value)}\n            placeholder=\"Enter address (e.g., 0x...)\"\n            style={{ width: \"100%\", padding: \"10px\", marginBottom: \"16px\", borderRadius: \"6px\", border: \"1px solid #ddd\", fontSize: \"14px\", fontFamily: \"monospace\" }}\n          />\n\n          <button\n            onClick={handleDeriveUEA}\n            disabled={isCheckingUEA}\n            style={{\n              width: \"100%\",\n              padding: \"12px\",\n              fontSize: \"16px\",\n              fontWeight: \"bold\",\n              backgroundColor: isCheckingUEA ? \"#999\" : \"#d946ef\",\n              color: \"white\",\n              border: \"none\",\n              borderRadius: \"8px\",\n              cursor: isCheckingUEA ? \"not-allowed\" : \"pointer\",\n            }}\n          >\n            {isCheckingUEA ? \"Deriving...\" : \"Derive UEA\"}\n          </button>\n\n          {error && (\n            <div style={{ marginTop: \"16px\", padding: \"12px\", backgroundColor: \"#ffebee\", color: \"#c62828\", borderRadius: \"6px\", fontSize: \"14px\" }}>\n              {error}\n            </div>\n          )}\n\n          {manualLookupResult && (\n            <div style={{ marginTop: \"16px\", padding: \"16px\", backgroundColor: \"#e8f5e9\", borderRadius: \"8px\", border: \"2px solid #4caf50\" }}>\n              <p style={{ fontSize: \"14px\", fontWeight: \"bold\", color: \"#2e7d32\", marginBottom: \"8px\" }}>\n                ✅ Universal Executor Account (UEA):\n              </p>\n              <p style={{ fontSize: \"14px\", fontFamily: \"monospace\", wordBreak: \"break-all\", margin: 0, color: \"#333\" }}>\n                {manualLookupResult}\n              </p>\n            </div>\n          )}\n        </div>\n\n        <div style={{ marginTop: \"30px\", padding: \"16px\", backgroundColor: \"#fff3e0\", borderRadius: \"8px\", border: \"1px solid #ffe0b2\" }}>\n          <h4 style={{ fontSize: \"14px\", marginBottom: \"8px\", color: \"#e65100\", fontWeight: \"bold\" }}>\n            💡 How It Works\n          </h4>\n          <ul style={{ fontSize: \"14px\", color: \"#666\", lineHeight: \"1.6\", margin: 0, paddingLeft: \"20px\" }}>\n            <li>The same origin address always produces the same UEA</li>\n            <li>UEAs are deterministic and can be computed off-chain</li>\n            <li>No manual deployment needed - UEAs are lazily and gaslessly deployed</li>\n            <li>Works for any blockchain (Ethereum, Solana, etc.)</li>\n          </ul>\n        </div>\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-code",
      children: "Source Code"
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Derive Universal Executor Account Tutorial",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/tutorials/derive-universal-executor-account",
      description: "Full source code for deriving UEAs with SDK and smart contracts."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-we-achieved",
      children: "What We Achieved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this tutorial, we explored Universal Executor Accounts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understood UEAs"
        }), " - How origin wallets map to Push Chain addresses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived UEAs"
        }), " - Used the SDK to compute UEAs from any wallet"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "On-Chain Queries"
        }), " - Used UEAFactory to derive UEAs in smart contracts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Practical Applications"
        }), " - Saw how UEAs enable universal systems"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. One Wallet, One UEA"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every wallet on every chain has a unique UEA on Push Chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The mapping is deterministic and permanent"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No setup or registration required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Universal Identity"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UEAs provide a unified identity across all chains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users interact from their preferred chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Developers build once, reach everyone"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Powerful Primitives"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UEAs enable universal airdrops, allowlists, and more"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On-chain derivation with UEAFactory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Off-chain computation with the SDK"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-next",
      children: "What's Next?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now that you understand how Universal Executor Accounts (UEAs) are derived, you can start building real universal systems on Push Chain."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/chain/tutorials/token-systems/tutorial-universal-airdrop/",
            children: "Build a Universal Airdrop"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Deploy once on Push Chain and let users from any chain claim tokens using their existing wallet."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/docs/chain/build/contract-helpers/",
            children: "Contract Helpers"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Go deeper with advanced UEA patterns, including on-chain derivation, reverse lookups, and contract-level integrations."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n  A[Origin Wallet] --> B[Derive UEA]\n  B --> C[Universal App on Push Chain]\n  C --> D[Universal Airdrop]\n  C --> E[Other Universal Systems]"
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



/***/ },

/***/ 989746
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Details_Details)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__(15066);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js + 1 modules
var useBrokenLinks = __webpack_require__(163427);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(41422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
var styles_module = __webpack_require__(633688);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){let{summary,children,...props}=_ref;(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);const isBrowser=(0,useIsBrowser/* default */.A)();const detailsRef=(0,react.useRef)(null);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open});// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const[open,setOpen]=(0,react.useState)(props.open);const summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!==null&&summary!==void 0?summary:'Details'});return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",{...props,ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,dist_clsx/* default */.A)(styles_module/* default */.A.details,isBrowser&&styles_module/* default */.A.isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.collapsibleContent,children:children})})]}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
var Details_styles_module = __webpack_require__(318480);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses='alert alert--info';function Details_Details(_ref){let{...props}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,{...props,className:(0,clsx/* default */.A)(InfimaClasses,Details_styles_module/* default */.A.details,props.className)});}

/***/ },

/***/ 436026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TabItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(618215);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747751);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(699698);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItemPanel(_ref){let{children,className,hidden}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{role:"tabpanel",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.tabItem,className),hidden,children:children});}function TabItem(_ref2){let{children,className,value}=_ref2;const{selectedValue,lazy}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useTabs */ .uc)();const isSelected=value===selectedValue;// TODO Docusaurus v4: use <Activity> ?
if(!isSelected&&lazy){return null;}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TabItemPanel,{className:className,hidden:!isSelected,children:children});}

/***/ },

/***/ 77086
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(618215);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(117559);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(747751);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(823104);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(992303);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(611478);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className}=_ref;const{selectedValue,selectValue,tabValues,block}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useTabs */ .uc)();const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useScrollPositionBlocker */ .a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:ref=>{tabRefs.push(ref);},onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('tabs__item',_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value},value);})});}function TabContent(_ref3){let{children}=_ref3;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"margin-top--md",children:children});}function TabsContainer(_ref4){let{className,children}=_ref4;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.tabs.container,// former name kept for backward compatibility
// see https://github.com/facebook/docusaurus/pull/4086
'tabs-container',_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tabList),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabList// Surprising but historical
// className is applied on TabList, not on TabsContainer
,{className:className}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabContent,{children:children})]});}function Tabs(props){const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();const value=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useTabsContextValue */ .OC)(props);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .TabsProvider */ .O_,{value:value// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabsContainer,{className:props.className,children:(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .sanitizeTabsChildren */ .vT)(props.children)})},String(isBrowser));}

/***/ },

/***/ 747751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OC: () => (/* binding */ useTabsContextValue),
/* harmony export */   O_: () => (/* binding */ TabsProvider),
/* harmony export */   uc: () => (/* binding */ useTabs),
/* harmony export */   vT: () => (/* binding */ sanitizeTabsChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(956347);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(300205);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(757485);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70679);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(231682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function sanitizeTabsChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(child=>child!=='\n');}function extractChildrenTabValues(children){// ✅ <TabItem value="red"/> => true
// ✅ <CustomTabItem value="red"/> => true
// ❌ <RedTabItem value="tab-value"/> => requires <Tabs values> prop
function isTabItemWithValueProp(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}const elements=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).flatMap(child=>{// Historical case, not sure when it happens, do we really need this?
if(!child){return[];}if(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&isTabItemWithValueProp(child)){return[child];}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
const badChildTypeName=// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name;throw new Error(`Docusaurus error: Bad <Tabs> child <${badChildTypeName}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`);});return elements.map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,_index__WEBPACK_IMPORTED_MODULE_5__/* .duplicates */ .XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>`'${a.value}'`).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useQueryStringValue */ .aZ)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,_index__WEBPACK_IMPORTED_MODULE_4__/* .useStorageSlot */ .Dv)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabsContextValue(props){var _props$lazy,_props$block;const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues,lazy:(_props$lazy=props.lazy)!==null&&_props$lazy!==void 0?_props$lazy:false,block:(_props$block=props.block)!==null&&_props$block!==void 0?_props$block:false};}const TabsContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function useTabs(){const contextValue=react__WEBPACK_IMPORTED_MODULE_0__.useContext(TabsContext);if(!contextValue){throw new Error('useTabsContext() must be used within a Tabs component');}return contextValue;}function TabsProvider(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabsContext.Provider,{value:props.value,children:props.children});}

/***/ },

/***/ 531855
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* reexport */ GitHubRepo)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(242644);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(505873);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/GitHubRepo/GitHubRepo.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
const GitHubRepo=_ref=>{let{title,repoUrl,description='View complete source code on GitHub',className=''}=_ref;const handleRepoClick=()=>{window.open(repoUrl,'_blank','noopener,noreferrer');};return/*#__PURE__*/(0,jsx_runtime.jsx)(GitHubRepoContainer,{className:className,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(RepoButton,{onClick:handleRepoClick,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GitHubIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiGithub */.BR8,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(RepoContent,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(RepoTitle,{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(RepoSubtext,{children:description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLinkIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiExternalLink */.HaR,{size:16})})]})});};// Styled Components
const GitHubRepoContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__GitHubRepoContainer",componentId:"sc-102xx6v-0"})(["margin:24px 0;padding:0;"]);const RepoButton=styled_components_browser_esm["default"].button.withConfig({displayName:"GitHubRepo__RepoButton",componentId:"sc-102xx6v-1"})(["display:flex;align-items:center;gap:12px;width:100%;padding:16px 20px;background:transparent;border:1px solid var(--ifm-color-emphasis-200);border-radius:8px;cursor:pointer;transition:all 0.2s ease;text-align:left;&:hover{border-color:var(--ifm-color-primary-unified);}&:active{transform:translateY(0);}@media ","{padding:14px 16px;gap:10px;}@media ","{padding:12px 14px;gap:8px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const GitHubIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__GitHubIcon",componentId:"sc-102xx6v-2"})(["display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:var(--ifm-color-black);border-radius:6px;color:var(--ifm-color-white);flex-shrink:0;@media ","{width:36px;height:36px;}@media ","{width:32px;height:32px;svg{width:16px;height:16px;}}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const RepoContent=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoContent",componentId:"sc-102xx6v-3"})(["flex:1;min-width:0;"]);const RepoTitle=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoTitle",componentId:"sc-102xx6v-4"})(["font-size:16px;font-weight:600;color:var(--ifm-color-content);margin-bottom:4px;word-break:break-word;@media ","{font-size:15px;}@media ","{font-size:14px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const RepoSubtext=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoSubtext",componentId:"sc-102xx6v-5"})(["font-size:14px;color:var(--ifm-color-content-secondary);font-weight:400;@media ","{font-size:13px;}@media ","{font-size:12px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const ExternalLinkIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__ExternalLinkIcon",componentId:"sc-102xx6v-6"})(["display:flex;align-items:center;justify-content:center;color:var(--ifm-color-content-secondary);flex-shrink:0;opacity:0.7;transition:opacity 0.2s ease;",":hover &{opacity:1;}@media ","{svg{width:14px;height:14px;}}"],RepoButton,globals/* device */.jO.mobileL);/* harmony default export */ const GitHubRepo_GitHubRepo = ((/* unused pure expression or super */ null && (GitHubRepo)));
;// ./src/components/GitHubRepo/index.ts


/***/ },

/***/ 531836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* reexport */ SolidityCode)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(242644);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(505873);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/SolidityCode/SolidityCode.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
const SolidityCode=_ref=>{let{children,title='Solidity Contract',fileName='Contract.sol',url=null,showRemixButton=true,className=''}=_ref;const getRemixUrl=()=>{let remixUrl='https://remix.ethereum.org/';if(url){// Convert GitHub blob URL to format Remix can understand
if(url.includes('github.com')&&url.includes('/blob/')){// Use GitHub import format for Remix
remixUrl=`https://remix.ethereum.org/#url=${url}`;}else if(url.includes('raw.githubusercontent.com')){// Already a raw URL, use directly
remixUrl=`https://remix.ethereum.org/#url=${url}`;}else{// Fallback to just opening Remix
remixUrl='https://remix.ethereum.org/';}}return remixUrl;};return/*#__PURE__*/(0,jsx_runtime.jsxs)(SolidityCodeContainer,{className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(CodeHeader,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CodeTitle,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TitleText,{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(FileNameText,{children:fileName})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(ButtonGroup,{children:showRemixButton&&/*#__PURE__*/(0,jsx_runtime.jsxs)(ActionButton,{href:getRemixUrl(),target:"_blank",rel:"noopener noreferrer",children:["Open in Remix",/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiExternalLink */.HaR,{size:16})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock,{children:children})]});};// Styled Components
const SolidityCodeContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__SolidityCodeContainer",componentId:"sc-1w77983-0"})(["margin:24px 0;border-radius:var(--ifm-global-radius);overflow:hidden;@media ","{margin:20px 0;}"],globals/* device */.jO.tablet);const CodeHeader=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeHeader",componentId:"sc-1w77983-1"})(["display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--ifm-playground-header-bg);@media ","{padding:10px 12px;flex-direction:row;align-items:flex-start;gap:8px;}"],globals/* device */.jO.tablet);const CodeTitle=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeTitle",componentId:"sc-1w77983-2"})(["display:flex;align-items:center;gap:10px;"]);const FileIcon=styled_components_browser_esm["default"].span.withConfig({displayName:"SolidityCode__FileIcon",componentId:"sc-1w77983-3"})(["font-size:1.125rem;@media ","{font-size:1rem;}"],globals/* device */.jO.tablet);const TitleText=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__TitleText",componentId:"sc-1w77983-4"})(["font-size:0.875rem;font-weight:600;color:var(--ifm-color-content);margin-bottom:2px;@media ","{font-size:0.8125rem;}"],globals/* device */.jO.tablet);const FileNameText=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__FileNameText",componentId:"sc-1w77983-5"})(["font-size:0.75rem;color:var(--ifm-color-content-secondary);font-family:var(--ifm-font-family-monospace);@media ","{font-size:0.6875rem;}"],globals/* device */.jO.tablet);const ButtonGroup=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__ButtonGroup",componentId:"sc-1w77983-6"})(["display:flex;align-items:center;gap:8px;@media ","{justify-content:flex-end;align-self:center;}"],globals/* device */.jO.tablet);const ActionButton=styled_components_browser_esm["default"].a.withConfig({displayName:"SolidityCode__ActionButton",componentId:"sc-1w77983-7"})(["display:flex;align-items:center;gap:6px;padding:6px 12px;background:transparent;border:1px solid var(--ifm-playground-header-tag);border-radius:4px;color:var(--ifm-color-primary-text);font-size:0.75rem;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;font-weight:500;text-decoration:none;&:hover{border:1px solid var(--ifm-color-primary);text-decoration:none;}@media ","{padding:5px 10px;font-size:0.6875rem;}"],globals/* device */.jO.tablet);const CodeBlock=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeBlock",componentId:"sc-1w77983-8"})(["overflow-x:auto;background:var(--ifm-playground-header-terminalbg);& > div{margin:0px;}"]);/* harmony default export */ const SolidityCode_SolidityCode = ((/* unused pure expression or super */ null && (SolidityCode)));
;// ./src/components/SolidityCode/index.ts


/***/ },

/***/ 546772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_TutorialTimer)
});

// UNUSED EXPORTS: TutorialTimer

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(777255);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(635504);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(505873);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/TutorialTimer/TutorialTimer.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Components
// Internal Configs
const TutorialTimer=_ref=>{let{estimatedMinutes,label,className}=_ref;const{t}=(0,es/* useTranslation */.Bd)();// Format time display
const formatTime=minutes=>{if(minutes<60){return`${minutes} min${minutes!==1?'s':''}`;}const hours=Math.floor(minutes/60);const remainingMinutes=minutes%60;if(remainingMinutes===0){return`${hours} hour${hours!==1?'s':''}`;}return`${hours}h ${remainingMinutes}m`;};const timeDisplay=formatTime(estimatedMinutes);return/*#__PURE__*/(0,jsx_runtime.jsxs)(TimerContainer,{className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TimerIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* BiTime */.FOv,{size:"16px","aria-hidden":"true"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TimerContent,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TimerValue,{children:timeDisplay})})]});};// Styled Components
const TimerContainer=(0,styled_components_browser_esm["default"])(SharedStyling/* ItemH */.Oj).withConfig({displayName:"TutorialTimer__TimerContainer",componentId:"sc-oucx4h-0"})(["display:flex;align-items:center;gap:8px;padding:8px 12px 8px 0px;width:fit-content;margin:-30px 0 28px 0 !important;@media ","{padding:6px 10px;gap:6px;}"],globals/* device */.jO.tablet);const TimerIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"TutorialTimer__TimerIcon",componentId:"sc-oucx4h-1"})(["align-items:center;color:var(--ifm-color-primary-unified);flex-shrink:0;display:flex;"]);const TimerContent=styled_components_browser_esm["default"].div.withConfig({displayName:"TutorialTimer__TimerContent",componentId:"sc-oucx4h-2"})(["display:flex;flex-direction:row;gap:8px;align-items:center;"]);const TimerLabel=styled_components_browser_esm["default"].span.withConfig({displayName:"TutorialTimer__TimerLabel",componentId:"sc-oucx4h-3"})(["font-size:12px;font-weight:500;line-height:1.2;@media ","{font-size:11px;}"],globals/* device */.jO.tablet);const TimerValue=styled_components_browser_esm["default"].span.withConfig({displayName:"TutorialTimer__TimerValue",componentId:"sc-oucx4h-4"})(["font-size:1rem;font-weight:600;color:var(--ifm-color-secondary-text);line-height:1.2;@media ","{font-size:12px;}"],globals/* device */.jO.tablet);
;// ./src/components/TutorialTimer/index.ts
/* harmony default export */ const components_TutorialTimer = (TutorialTimer);

/***/ },

/***/ 318480
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"details":"details_b_Ee"});
    if(true) {
      (function() {
        var localsJsonString = "{\"details\":\"details_b_Ee\"}";
        // 1775748308499
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 699698
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tabItem":"tabItem_Ymn6"});
    if(true) {
      (function() {
        var localsJsonString = "{\"tabItem\":\"tabItem_Ymn6\"}";
        // 1775748308496
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 611478
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
    if(true) {
      (function() {
        var localsJsonString = "{\"tabList\":\"tabList__CuJ\",\"tabItem\":\"tabItem_LNqP\"}";
        // 1775748308492
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 633688
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
    if(true) {
      (function() {
        var localsJsonString = "{\"details\":\"details_lb9f\",\"isBrowser\":\"isBrowser_bmU9\",\"collapsibleContent\":\"collapsibleContent_i85q\"}";
        // 1775748337158
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }

}]);