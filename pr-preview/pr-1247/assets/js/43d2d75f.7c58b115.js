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
const site_docs_chain_03_build_99_constants_mdx_43d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-constants","title":"Constants Reference","description":"Constants Reference | Build | Push Chain Docs","source":"@site/docs/chain/03-build/99-Constants.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/constants","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/constants","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/99-Constants.mdx","tags":[],"version":"current","sidebarPosition":99,"frontMatter":{"id":"docs-chain-build-constants","title":"Constants Reference","hide_title":false,"slug":"./constants","displayed_sidebar":"pushChainSidebar","sidebar_position":99,"image":"/assets/docs/previews/docs_chain_build_constants--constants_reference.png"},"sidebar":"pushChainSidebar","previous":{"title":"Contract Helpers","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/contract-helpers"},"next":{"title":"Advanced","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/advanced"}}');
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
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN.WEB2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "web2:https"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Web2 / HTTPS endpoint. A read-only destination for ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/docs/chain/build/universal-read/",
              children: "Read Universal State"
            }), ", not a transaction destination"]
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



/***/ }

}]);