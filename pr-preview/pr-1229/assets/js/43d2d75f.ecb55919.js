"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[24576],{

/***/ 172805
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_99_constants_mdx_43d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-99-constants-mdx-43d.json
const site_docs_chain_03_build_99_constants_mdx_43d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-constants","title":"Constants Reference","description":"Constants Reference | Build | Push Chain Docs","source":"@site/docs/chain/03-build/99-Constants.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/constants","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/constants","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/99-Constants.mdx","tags":[],"version":"current","sidebarPosition":99,"frontMatter":{"id":"docs-chain-build-constants","title":"Constants Reference","hide_title":false,"slug":"./constants","displayed_sidebar":"pushChainSidebar","sidebar_position":99,"image":"/assets/docs/previews/docs_chain_build_constants--constants_reference.png"},"sidebar":"pushChainSidebar","previous":{"title":"Contract Helpers","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/contract-helpers"},"next":{"title":"Advanced","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/advanced"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
var Tabs = __webpack_require__(77086);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
var TabItem = __webpack_require__(436026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
;// ./docs/chain/03-build/99-Constants.mdx


const frontMatter = {
	id: 'docs-chain-build-constants',
	title: 'Constants Reference',
	hide_title: false,
	slug: './constants',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 99,
	image: '/assets/docs/previews/docs_chain_build_constants--constants_reference.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/





const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Push Network",
  "id": "push-network",
  "level": 2
}, {
  "value": "Usage Examples",
  "id": "usage-examples",
  "level": 3
}, {
  "value": "Chain Constants",
  "id": "chain-constants",
  "level": 2
}, {
  "value": "Usage Examples",
  "id": "usage-examples-1",
  "level": 3
}, {
  "value": "Library Constants",
  "id": "library-constants",
  "level": 2
}, {
  "value": "Usage Examples",
  "id": "usage-examples-2",
  "level": 3
}, {
  "value": "Moveable Token Constants",
  "id": "moveable-token-constants",
  "level": 2
}, {
  "value": "Usage Examples",
  "id": "usage-examples-3",
  "level": 3
}, {
  "value": "Payable Token Constants",
  "id": "payable-token-constants",
  "level": 2
}, {
  "value": "Usage Examples",
  "id": "usage-examples-4",
  "level": 3
}, {
  "value": "Common Patterns",
  "id": "common-patterns",
  "level": 2
}, {
  "value": "Chain Selection",
  "id": "chain-selection",
  "level": 3
}, {
  "value": "Network-Specific Initialization",
  "id": "network-specific-initialization",
  "level": 3
}, {
  "value": "Library Detection",
  "id": "library-detection",
  "level": 3
}, {
  "value": "Type Safety",
  "id": "type-safety",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
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
        children: "Constants Reference | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This page provides a comprehensive reference for all constants available in the Push Chain Core SDK (", (0,jsx_runtime.jsx)(_components.code, {
        children: "@pushchain/core"
      }), "). These constants are used throughout the SDK to ensure type safety and consistency when working with chains, networks, libraries, and other configurations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All constants are accessed via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain.CONSTANTS"
      }), " namespace."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "push-network",
      children: "Push Network"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.CONSTANTS.PUSH_NETWORK"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defines the Push Chain network environments available for initialization."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PUSH_NETWORK.MAINNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MAINNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain mainnet environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TESTNET_DONUT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain testnet environment (Donut)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PUSH_NETWORK.TESTNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TESTNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain testnet environment (points to latest testnet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LOCALNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local development environment"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage-examples",
      children: "Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\n\n// Get supported chains for a network\n// Note: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET always points to the latest version of the testnet\nconst chains = PushChain.utils.chains.getSupportedChains(\n  PushChain.CONSTANTS.PUSH_NETWORK.TESTNET\n);\n\n// Initialize client with testnet (Donut)\nconst client = await PushChain.initialize(universalSigner, {\n  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,\n});\n\n// Initialize client with localnet\nconst localClient = await PushChain.initialize(universalSigner, {\n  network: PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET,\n});\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chain-constants",
      children: "Chain Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.CONSTANTS.CHAIN"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defines all supported blockchain chains across the Push Chain ecosystem. These constants are used for chain-specific operations, account conversions, and cross-chain transactions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chain Namespace"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.PUSH_TESTNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:42101"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain testnet, always points to latest version of testnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:42101"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain testnet (Donut)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:9001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain local development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum mainnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:11155111"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia testnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:421614"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia testnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:84532"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base Sepolia testnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.BNB_TESTNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:97"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Chain testnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana mainnet-beta"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana testnet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana devnet"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage-examples-1",
      children: "Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\n\n// Convert address to UniversalAccount\nconst account = PushChain.utils.account.toUniversal(address, {\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n});\n\n// Resolve a CEA back to its controlling origin account (v6 replacement\n// for the removed convertExecutorToOrigin / convertExecutorToOriginAccount).\nconst originInfo = await PushChain.utils.account.resolveControllerAccount(\n  executorAddress,\n  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }\n);\n\n// Get explorer URL for specific chain\nconst explorerUrl = pushChainClient.explorer.getTransactionUrl(txHash, {\n  chain: PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "library-constants",
      children: "Library Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.CONSTANTS.LIBRARY"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defines the supported blockchain libraries for creating Universal Signers from keypairs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "'ethers-v6'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethers.js v6 library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "'viem'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Viem library for Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "'solana-web3js'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana Web3.js library"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage-examples-2",
      children: "Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\nimport { ethers } from 'ethers';\n\n// Create Universal Signer with Ethers v6\nconst wallet = ethers.Wallet.createRandom();\nconst universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(\n  wallet,\n  {\n    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n    library: PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6,\n  }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\nimport { Keypair } from '@solana/web3.js';\n\n// Create Universal Signer with Solana Web3.js\nconst keypair = Keypair.generate();\nconst universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(\n  keypair,\n  {\n    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,\n    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,\n  }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "moveable-token-constants",
      children: "Moveable Token Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.CONSTANTS.MOVEABLE.TOKEN"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defines tokens that can be transferred across chains using Push Chain's universal transaction system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.WETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapped ETH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.stETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Staked ETH (Lido)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.WETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapped ETH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.WETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapped ETH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.BNB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native BNB token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native SOL token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped ETH from Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthArb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped ETH from Arbitrum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthBase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped ETH from Base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pBnb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped BNB from BNB Chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped SOL from Solana"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.eth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDT from Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.arb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDT from Arbitrum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.base"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDT from Base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.bnb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDT from BNB Chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.sol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDT from Solana"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.eth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDC from Ethereum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.arb"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDC from Arbitrum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.base"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDC from Base"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.bsc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push-wrapped USDC from BNB Chain (renamed from ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".bnb"
            }), " in SDK v6.0.1; ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".bnb"
            }), " still resolves but is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@deprecated"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.sol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Testnet Donut"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-wrapped USDC from Solana"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage-examples-3",
      children: "Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\n\n// Move USDT from Ethereum Sepolia to Push Chain\nconst txHash = await pushChainClient.universal.sendTransaction({\n  to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',\n  funds: {\n    amount: PushChain.utils.helpers.parseUnits('100', 6), // 100 USDT\n    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,\n  },\n});\n\n// Move SOL from Solana to Push Chain\nconst solTxHash = await pushChainClient.universal.sendTransaction({\n  to: 'FNDJWigdNWsmxXYGrFV2gCvioLYwXnsVxZ4stL33wFHf',\n  funds: {\n    amount: PushChain.utils.helpers.parseUnits('1', 9), // 1 SOL\n    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL,\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "payable-token-constants",
      children: "Payable Token Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.CONSTANTS.PAYABLE.TOKEN"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Defines tokens that can be used to pay for gas fees on Push Chain transactions."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrapped ETH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.stETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Staked ETH (Lido)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.BNB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native BNB token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.SOL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native SOL token"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tether USD stablecoin"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USD Coin stablecoin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usage-examples-4",
      children: "Usage Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\n\n// Pay gas fees with USDT instead of native token\nconst txHash = await pushChainClient.universal.sendTransaction({\n  to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',\n  value: PushChain.utils.helpers.parseUnits('0.1', 18),\n  payGasWith: {\n    token: PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,\n    slippageBps: 100, // 1% slippage tolerance\n  },\n});\n\n// Pay gas with USDC on Arbitrum\nconst arbTxHash = await pushChainClient.universal.sendTransaction({\n  to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',\n  value: PushChain.utils.helpers.parseUnits('0.05', 18),\n  payGasWith: {\n    token: PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC,\n    slippageBps: 50, // 0.5% slippage tolerance\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-patterns",
      children: "Common Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chain-selection",
      children: "Chain Selection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When working with multiple chains, use the CHAIN constants to ensure consistency:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Define supported chains for your app\nconst SUPPORTED_CHAINS = [\n  PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,\n  PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n  PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA,\n  PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA,\n  PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,\n];\n\n// Get chain-specific configuration\nfunction getChainConfig(chain: string) {\n  switch (chain) {\n    case PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA:\n      return { rpc: 'https://sepolia.gateway.tenderly.co', explorer: 'https://sepolia.etherscan.io' };\n    case PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET:\n      return { rpc: 'https://api.devnet.solana.com', explorer: 'https://explorer.solana.com' };\n    // ... more chains\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-specific-initialization",
      children: "Network-Specific Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Development environment\nif (process.env.NODE_ENV === 'development') {\n  const client = await PushChain.initialize(signer, {\n    network: PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET,\n  });\n}\n\n// Production/Testnet environment\nif (process.env.NODE_ENV === 'production') {\n  const client = await PushChain.initialize(signer, {\n    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "library-detection",
      children: "Library Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { ethers } from 'ethers';\nimport * as viem from 'viem';\n\nfunction detectLibrary(signer: any) {\n  if (signer instanceof ethers.Wallet) {\n    return PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6;\n  } else if (signer.type === 'viem') {\n    return PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM;\n  }\n  // ... more detection logic\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "type-safety",
      children: "Type Safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All constants are strongly typed in TypeScript. When using TypeScript, you'll get autocomplete and type checking:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\n\n// TypeScript will autocomplete available chains\nconst chain: typeof PushChain.CONSTANTS.CHAIN = \n  PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA;\n\n// TypeScript will catch invalid values\nconst invalidChain = PushChain.CONSTANTS.CHAIN.INVALID; // ❌ Type error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Learn how to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/initialize-push-chain-client",
          children: "initialize the Push Chain client"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/utility-functions",
          children: "utility functions"
        }), " that use these constants"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-universal-transaction",
          children: "universal transactions"
        }), " across chains"]
      }), "\n"]
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

/***/ 56325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Details_Details)
});

;// ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(198587);
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
const _excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){let summary=_ref.summary,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);const isBrowser=(0,useIsBrowser/* default */.A)();const detailsRef=(0,react.useRef)(null);const _useCollapsible=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const _useState=(0,react.useState)(props.open),open=_useState[0],setOpen=_useState[1];const summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!==null&&summary!==void 0?summary:'Details'});return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",Object.assign({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,dist_clsx/* default */.A)(styles_module/* default */.A.details,isBrowser&&styles_module/* default */.A.isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.collapsibleContent,children:children})})]})));}
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
const InfimaClasses='alert alert--info';function Details_Details(_ref){let props=Object.assign({},(_objectDestructuringEmpty(_ref),_ref));return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,Object.assign({},props,{className:(0,clsx/* default */.A)(InfimaClasses,Details_styles_module/* default */.A.details,props.className)}));}

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
 */function TabItemPanel(_ref){let children=_ref.children,className=_ref.className,hidden=_ref.hidden;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{role:"tabpanel",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.tabItem,className),hidden,children:children});}function TabItem(_ref2){let children=_ref2.children,className=_ref2.className,value=_ref2.value;const _useTabs=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useTabs */ .uc)(),selectedValue=_useTabs.selectedValue,lazy=_useTabs.lazy;const isSelected=value===selectedValue;// TODO Docusaurus v4: use <Activity> ?
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
 */function TabList(_ref){let className=_ref.className;const _useTabs=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useTabs */ .uc)(),selectedValue=_useTabs.selectedValue,selectValue=_useTabs.selectValue,tabValues=_useTabs.tabValues,block=_useTabs.block;const tabRefs=[];const _useScrollPositionBlo=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useScrollPositionBlocker */ .a_)(),blockElementScrollPositionUntilNextRender=_useScrollPositionBlo.blockElementScrollPositionUntilNextRender;const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let value=_ref2.value,label=_ref2.label,attributes=_ref2.attributes;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li",Object.assign({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:ref=>{tabRefs.push(ref);},onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('tabs__item',_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value}),value);})});}function TabContent(_ref3){let children=_ref3.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"margin-top--md",children:children});}function TabsContainer(_ref4){let className=_ref4.className,children=_ref4.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.tabs.container,// former name kept for backward compatibility
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
function isTabItemWithValueProp(comp){const props=comp.props;return!!props&&typeof props==='object'&&'value'in props;}const elements=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).flatMap(child=>{// Historical case, not sure when it happens, do we really need this?
if(!child){return[];}if(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&isTabItemWithValueProp(child)){return[child];}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
const badChildTypeName=// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name;throw new Error("Docusaurus error: Bad <Tabs> child <"+badChildTypeName+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.\nIf you do not want to pass on a \"value\" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.");});return elements.map(_ref=>{let _ref$props=_ref.props,value=_ref$props.value,label=_ref$props.label,attributes=_ref$props.attributes,isDefault=_ref$props.default;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,_index__WEBPACK_IMPORTED_MODULE_5__/* .duplicates */ .XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(a=>"'"+a.value+"'").join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){const valuesProp=props.values,children=props.children;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let value=_ref2.value,tabValues=_ref2.tabValues;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let defaultValue=_ref3.defaultValue,tabValues=_ref3.tabValues;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(a=>a.value).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){let _ref4$queryString=_ref4.queryString,queryString=_ref4$queryString===void 0?false:_ref4$queryString,groupId=_ref4.groupId;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let _ref5$queryString=_ref5.queryString,queryString=_ref5$queryString===void 0?false:_ref5$queryString,groupId=_ref5.groupId;const history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useQueryStringValue */ .aZ)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let groupId=_ref6.groupId;const key=getStorageKey(groupId);const _useStorageSlot=(0,_index__WEBPACK_IMPORTED_MODULE_4__/* .useStorageSlot */ .Dv)(key),value=_useStorageSlot[0],storageSlot=_useStorageSlot[1];const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabsContextValue(props){var _props$lazy,_props$block;const defaultValue=props.defaultValue,_props$queryString=props.queryString,queryString=_props$queryString===void 0?false:_props$queryString,groupId=props.groupId;const tabValues=useTabValues(props);const _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialStateValue({defaultValue,tabValues})),selectedValue=_useState[0],setSelectedValue=_useState[1];const _useTabQueryString=useTabQueryString({queryString,groupId}),queryStringValue=_useTabQueryString[0],setQueryString=_useTabQueryString[1];const _useTabStorage=useTabStorage({groupId}),storageValue=_useTabStorage[0],setStorageValue=_useTabStorage[1];// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues,lazy:(_props$lazy=props.lazy)!==null&&_props$lazy!==void 0?_props$lazy:false,block:(_props$block=props.block)!==null&&_props$block!==void 0?_props$block:false};}const TabsContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function useTabs(){const contextValue=react__WEBPACK_IMPORTED_MODULE_0__.useContext(TabsContext);if(!contextValue){throw new Error('useTabsContext() must be used within a Tabs component');}return contextValue;}function TabsProvider(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabsContext.Provider,{value:props.value,children:props.children});}

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
        // 1784210600829
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
        // 1784210600825
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
        // 1784210600827
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
        // 1784210615937
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