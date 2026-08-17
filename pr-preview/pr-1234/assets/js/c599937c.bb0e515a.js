"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[48111],{

/***/ 982884
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_02_power_features_03_tutorial_derive_chain_executor_account_mdx_c59_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-02-power-features-03-tutorial-derive-chain-executor-account-mdx-c59.json
const site_docs_chain_01_tutorials_02_power_features_03_tutorial_derive_chain_executor_account_mdx_c59_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/power-features/docs-chain-tutorials-derive-chain-executor-account","title":"Derive Chain Executor Accounts (CEAs)","description":"Derive Chain Executor Accounts | Tutorials | Push Chain Docs","source":"@site/docs/chain/01-tutorials/02-power-features/03-Tutorial-Derive-Chain-Executor-Account.mdx","sourceDirName":"chain/01-tutorials/02-power-features","slug":"/chain/tutorials/power-features/tutorial-derive-chain-executor-account","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/02-power-features/03-Tutorial-Derive-Chain-Executor-Account.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"docs-chain-tutorials-derive-chain-executor-account","title":"Derive Chain Executor Accounts (CEAs)","hide_title":false,"slug":"./tutorial-derive-chain-executor-account","displayed_sidebar":"pushChainSidebar","sidebar_position":3,"image":"/assets/docs/previews/docs_chain_tutorials_derive_chain_executor_account--derive_chain_executor_accounts_(ceas).png"},"sidebar":"pushChainSidebar","previous":{"title":"Derive Universal Executor Accounts (UEAs)","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account"},"next":{"title":"Build Universal Cross-Chain Counters","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/power-features/tutorial-universal-cross-chain-counters"}}');
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
// EXTERNAL MODULE: ./src/components/TutorialTimer/index.ts + 1 modules
var TutorialTimer = __webpack_require__(546772);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
// EXTERNAL MODULE: ./src/components/GitHubRepo/index.ts + 1 modules
var GitHubRepo = __webpack_require__(531855);
;// ./docs/chain/01-tutorials/02-power-features/03-Tutorial-Derive-Chain-Executor-Account.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-derive-chain-executor-account',
	title: 'Derive Chain Executor Accounts (CEAs)',
	hide_title: false,
	slug: './tutorial-derive-chain-executor-account',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_chain_tutorials_derive_chain_executor_account--derive_chain_executor_accounts_(ceas).png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/








const toc = [{
  "value": "Understanding Chain Executor Accounts (CEAs)",
  "id": "understanding-chain-executor-accounts-ceas",
  "level": 2
}, {
  "value": "CEAs vs UEAs",
  "id": "ceas-vs-ueas",
  "level": 3
}, {
  "value": "CEAs are deterministic",
  "id": "ceas-are-deterministic",
  "level": 3
}, {
  "value": "Why CEAs matter",
  "id": "why-ceas-matter",
  "level": 3
}, {
  "value": "Deriving CEAs with the SDK",
  "id": "deriving-ceas-with-the-sdk",
  "level": 2
}, {
  "value": "Basic CEA Derivation",
  "id": "basic-cea-derivation",
  "level": 4
}, {
  "value": "Deriving from non-Push origins",
  "id": "deriving-from-non-push-origins",
  "level": 4
}, {
  "value": "Supported destination chains",
  "id": "supported-destination-chains",
  "level": 4
}, {
  "value": "Deriving CEAs in Smart Contracts",
  "id": "deriving-ceas-in-smart-contracts",
  "level": 2
}, {
  "value": "ICEAFactory Interface",
  "id": "iceafactory-interface",
  "level": 4
}, {
  "value": "Example: pre-compute and authorize a Push contract&#39;s CEA",
  "id": "example-pre-compute-and-authorize-a-push-contracts-cea",
  "level": 4
}, {
  "value": "Example: gate destination-chain calls to a known agent&#39;s CEA",
  "id": "example-gate-destination-chain-calls-to-a-known-agents-cea",
  "level": 4
}, {
  "value": "What CEAs Unlock",
  "id": "what-ceas-unlock",
  "level": 2
}, {
  "value": "True Self-Custody on Every Chain",
  "id": "true-self-custody-on-every-chain",
  "level": 4
}, {
  "value": "Deterministic Cross-Chain Identity",
  "id": "deterministic-cross-chain-identity",
  "level": 4
}, {
  "value": "Programmable Reach Without Bots",
  "id": "programmable-reach-without-bots",
  "level": 4
}, {
  "value": "Native <code>msg.sender</code> on Every Destination",
  "id": "native-msgsender-on-every-destination",
  "level": 4
}, {
  "value": "What You Can Build",
  "id": "what-you-can-build",
  "level": 2
}, {
  "value": "Universal Self-Custody",
  "id": "universal-self-custody",
  "level": 3
}, {
  "value": "Cross-Chain DeFi",
  "id": "cross-chain-defi",
  "level": 3
}, {
  "value": "Cross-Chain AI Agents",
  "id": "cross-chain-ai-agents",
  "level": 3
}, {
  "value": "Cross-Chain Keepers and Liquidators",
  "id": "cross-chain-keepers-and-liquidators",
  "level": 3
}, {
  "value": "Multi-Chain Treasury and Payroll",
  "id": "multi-chain-treasury-and-payroll",
  "level": 3
}, {
  "value": "Live Playground",
  "id": "live-playground",
  "level": 2
}, {
  "value": "Source code",
  "id": "source-code",
  "level": 2
}, {
  "value": "What we achieved",
  "id": "what-we-achieved",
  "level": 2
}, {
  "value": "Key takeaways",
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
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    mermaid: "mermaid",
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
        children: "Derive Chain Executor Accounts | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(TutorialTimer/* default */.A, {
      estimatedMinutes: 10
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this tutorial, you'll learn how to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "derive Chain Executor Accounts (CEAs)"
      }), ". A CEA is the destination-chain identity a Push Chain account uses when it executes on an external chain. This tutorial pairs with the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account",
        children: "Derive UEA tutorial"
      }), ". UEAs are how external wallets execute on Push Chain; CEAs work in the opposite direction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this tutorial, you'll be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Understand how CEAs map Push Chain accounts to addresses on every external chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Derive CEA addresses from any Push Chain account using the SDK"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Derive CEAs on-chain from an external EVM contract via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ICEAFactory"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Use CEA derivation to fund and pre-authorize cross-chain flows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-chain-executor-accounts-ceas",
      children: "Understanding Chain Executor Accounts (CEAs)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain Executor Account (CEA)"
      }), " is a deterministic smart account on an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "external chain"
      }), " (Ethereum, Solana, BSC, and others), derived from a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain account"
      }), " (a UEA, a Push-native EOA, or a Push Chain contract). It is the execution surface a Push-side account uses when it dispatches an outbound. Every outbound goes through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UniversalGatewayPC"
      }), ", which is Push's cross-chain gateway contract."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ceas-vs-ueas",
      children: "CEAs vs UEAs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {}), (0,jsx_runtime.jsx)(_components.th, {
            children: "UEA"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CEA"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lives on"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External chain (one per chain)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derived from"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An external-chain wallet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Push Chain account (UEA, EOA, or contract)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Acts as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            }), " for"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain transactions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External-chain transactions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bound to"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A user wallet"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A user ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "or"
            }), " a contract"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployed by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UEAFactory on Push Chain (lazy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEAFactory on the destination chain (lazy, by TSS)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ceas-are-deterministic",
      children: "CEAs are deterministic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every Push Chain account has a unique, deterministic CEA on every supported external chain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same Push-side account always produces the same CEA on the same destination chain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A different destination chain produces a different CEA (CEA addresses are scoped per chain)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Push Chain Account: 0xABC...123 (UEA, EOA, or contract)\n    ↓ (deterministic derivation, per destination chain)\nCEA on Ethereum Sepolia: 0x111...222\nCEA on BNB Testnet:      0x333...444\nCEA on Base Sepolia:     0x555...666\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-ceas-matter",
      children: "Why CEAs matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Self-Custody"
          }), (0,jsx_runtime.jsx)("br", {}), "\nCEAs are self-custodial. They can only be controlled by the Push-side account, so your funds and actions always remain under your control."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Identity portability"
          }), (0,jsx_runtime.jsx)("br", {}), "\nYour account identity follows you across all chains without any bridging or wrapping."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Contract-initiated execution"
          }), (0,jsx_runtime.jsx)("br", {}), "\nWhen a Push Chain contract dispatches outbound, its CEA acts as ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            })
          }), " on the destination chain. The CEA ensures your identity and actions are preserved across chains."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TB\n    A[UEA on Push Chain] --> D[CEA on Ethereum]\n    A --> E[CEA on BNB Chain]\n    B[Push Contract] --> F[CEA on Ethereum]\n    B --> G[CEA on Base]\n\n    D --> H[\"Execute on Ethereum<br/>(msg.sender = CEA)\"]\n    F --> I[\"Dispatch from Push contract<br/>(msg.sender = contract's CEA)\"]\n\n    style A fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style B fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style D fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style E fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style F fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style G fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deriving-ceas-with-the-sdk",
      children: "Deriving CEAs with the SDK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Push Chain SDK derives CEAs from any Push Chain account using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deriveExecutorAccount"
      }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "chain"
      }), " option that selects the destination chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "basic-cea-derivation",
      children: "Basic CEA Derivation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\n\n// Step 1: wrap the Push-side account in a UniversalAccount.\nconst pushAccount = PushChain.utils.account.toUniversal(\n  '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5',\n  { chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET }\n);\n\n// Step 2: derive the CEA on the destination chain.\nconst ceaResult = await PushChain.utils.account.deriveExecutorAccount(\n  pushAccount,\n  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }\n);\n\nconsole.log('CEA on BNB Testnet:', ceaResult.address);\nconsole.log('Deployed:',           ceaResult.deployed);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deriving-from-non-push-origins",
      children: "Deriving from non-Push origins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "deriveExecutorAccount"
      }), " accepts any ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UniversalAccount"
      }), ". When the input is a UOA (an origin wallet on an external chain), the SDK first resolves its UEA and then derives the CEA on the target chain. You can answer \"where will this user act on chain X?\" with a single call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const solanaAccount = PushChain.utils.account.toUniversal(\n  'EUYcfSUScdFgKMbB3rRdgRZwXmcxY7QCRQa2JwrchP1Q',\n  { chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET }\n);\n\nconst ceaSolanaUserOnBnb = await PushChain.utils.account.deriveExecutorAccount(\n  solanaAccount,\n  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "skipNetworkCheck: true"
      }), " returns the deterministic address without making an RPC call. Use this when you need the address but do not need to know whether the CEA has been deployed yet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const result = await PushChain.utils.account.deriveExecutorAccount(\n  pushAccount,\n  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET, skipNetworkCheck: true }\n);\n// result.address is set; result.deployed is omitted.\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the full SDK reference (arguments, return shape, and a live playground), see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/utility-functions/#derive-executor-account",
        children: "deriveExecutorAccount in Utility Functions"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "supported-destination-chains",
      children: "Supported destination chains"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain.CONSTANTS.CHAIN"
      }), " values for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "chain"
      }), " option. The supported set matches the chains documented in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/setup/smart-contract-address-book",
        children: "Smart Contract Address Book"
      }), " (Ethereum Sepolia, Base Sepolia, Arbitrum Sepolia, BNB Testnet, Solana Devnet, ...)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deriving-ceas-in-smart-contracts",
      children: "Deriving CEAs in Smart Contracts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ICEAFactory"
      }), " is deployed on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "each external chain"
      }), " (not on Push Chain) and exposes the on-chain mapping between a Push-side account and its CEA on that chain. From an external EVM chain, you can look up or pre-compute any CEA without making a call back to Push Chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "iceafactory-interface",
      children: "ICEAFactory Interface"
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "ICEAFactory Interface",
      fileName: "ICEAFactory.sol",
      url: "https://github.com/pushchain/push-chain-gateway-contracts/blob/main/contracts/evm-gateway/src/interfaces/ICEAFactory.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity 0.8.26;\n\ninterface ICEAFactory {\n    /// @notice Returns the CEA address and deployment status for a given Push Chain account.\n    /// @dev    If the CEA has not been deployed, returns (predictedAddress, false).\n    /// @param  _pushAccount  Address of the Push Chain account (UEA, EOA, or contract).\n    /// @return cea           CEA address (deployed or predicted via CREATE2).\n    /// @return isDeployed    True if the CEA has code at that address.\n    function getCEAForPushAccount(address _pushAccount)\n        external view returns (address cea, bool isDeployed);\n\n    /// @notice Returns true if `_cea` was deployed by this factory.\n    function isCEA(address _cea) external view returns (bool);\n\n    /// @notice Reverse lookup: returns the Push Chain account mapped to this CEA.\n    function getPushAccountForCEA(address _cea)\n        external view returns (address pushAccount);\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "CEAFactory address",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The CEAFactory is deployed on each external chain. Find the per-chain address in the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/smart-contract-address-book",
          children: "Smart Contract Address Book"
        }), ". Unlike ", (0,jsx_runtime.jsx)(_components.code, {
          children: "IUEAFactory"
        }), ", there is no precompile address for the CEAFactory; it is a regular contract."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-pre-compute-and-authorize-a-push-contracts-cea",
      children: "Example: pre-compute and authorize a Push contract's CEA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A common pattern is to whitelist a Push Chain contract's CEA on a destination-chain protocol before the Push contract has dispatched anything. Compute the CEA on-chain via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getCEAForPushAccount"
      }), ", then authorize it."]
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "CEA Lookup on Destination Chain",
      fileName: "CEALookup.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.26;\n\ninterface ICEAFactory {\n    function getCEAForPushAccount(address _pushAccount)\n        external view returns (address cea, bool isDeployed);\n\n    function getPushAccountForCEA(address _cea)\n        external view returns (address pushAccount);\n}\n\ncontract CEALookup {\n    ICEAFactory public immutable FACTORY;\n    address public immutable OWNER;\n    mapping(address => bool) public allowedCEAs;\n\n    error NotOwner();\n\n    modifier onlyOwner() {\n        if (msg.sender != OWNER) revert NotOwner();\n        _;\n    }\n\n    constructor(address ceaFactory) {\n        FACTORY = ICEAFactory(ceaFactory);\n        OWNER = msg.sender;\n    }\n\n    /// @notice Look up the CEA on this chain for a given Push-side account.\n    function ceaFor(address pushAccount)\n        external view returns (address cea, bool isDeployed)\n    {\n        return FACTORY.getCEAForPushAccount(pushAccount);\n    }\n\n    /// @notice Pre-authorize a Push-side account's CEA before it has been deployed.\n    ///         Useful for whitelists that need to allow contract-initiated cross-chain\n    ///         calls on day zero.\n    /// @dev    Owner-gated. Without this guard, any caller could whitelist an\n    ///         arbitrary Push account's CEA and grant themselves permission.\n    function preAuthorize(address pushAccount) external onlyOwner {\n        (address cea, ) = FACTORY.getCEAForPushAccount(pushAccount);\n        allowedCEAs[cea] = true;\n    }\n\n    /// @notice Reverse: given a CEA, find which Push-side account owns it.\n    function pushAccountFor(address cea) external view returns (address) {\n        return FACTORY.getPushAccountForCEA(cea);\n    }\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-gate-destination-chain-calls-to-a-known-agents-cea",
      children: "Example: gate destination-chain calls to a known agent's CEA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A second common pattern: a destination-chain vault that only accepts calls coming from an authorized Push-side agent's CEA. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getPushAccountForCEA(msg.sender)"
      }), " to resolve ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), " back to the Push-side account, then check it against an allowlist. Anyone calling from an unauthorized address (or from a non-CEA address) reverts."]
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "CEA-Gated Destination Vault",
      fileName: "AgentGatedVault.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.26;\n\ninterface ICEAFactory {\n    function getCEAForPushAccount(address _pushAccount)\n        external view returns (address cea, bool isDeployed);\n\n    function getPushAccountForCEA(address _cea)\n        external view returns (address pushAccount);\n}\n\ncontract AgentGatedVault {\n    ICEAFactory public immutable FACTORY;\n    address public owner;\n\n    /// @dev Push-side agent address => authorized.\n    mapping(address => bool) public authorizedAgents;\n\n    event AgentAuthorized(address indexed agentPushAccount, address indexed cea);\n    error UnknownAgent();\n    error NotOwner();\n\n    modifier onlyOwner() {\n        if (msg.sender != owner) revert NotOwner();\n        _;\n    }\n\n    constructor(address ceaFactory) {\n        FACTORY = ICEAFactory(ceaFactory);\n        owner = msg.sender;\n    }\n\n    /// @notice Authorize a known AI agent (or any Push-side contract / account)\n    ///         to call this vault. The CEA address is logged for auditability.\n    function authorizeAgent(address agentPushAccount) external onlyOwner {\n        (address cea, ) = FACTORY.getCEAForPushAccount(agentPushAccount);\n        authorizedAgents[agentPushAccount] = true;\n        emit AgentAuthorized(agentPushAccount, cea);\n    }\n\n    /// @notice Resolve msg.sender's CEA back to its Push-side owner and check\n    ///         that the owner is authorized. Calls from unknown CEAs or from\n    ///         non-CEA addresses revert.\n    function execute(bytes calldata data) external {\n        address agentPushAccount = FACTORY.getPushAccountForCEA(msg.sender);\n        if (!authorizedAgents[agentPushAccount]) revert UnknownAgent();\n        _execute(data);\n    }\n\n    function _execute(bytes calldata /* data */) internal {\n        // Vault-specific logic goes here.\n    }\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the pattern most multi-agent or multi-tenant cross-chain protocols want: every authorized Push-side actor maps to exactly one CEA on this chain, and the protocol enforces that mapping at the destination layer without trusting any off-chain signal."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Push Chain has no on-chain CEA derivation",
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["There is no precompile on Push Chain for deriving CEAs. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ICEAFactory"
        }), " only exists on external chains. From a Push Chain contract, derive the CEA off-chain via the SDK and pass it in as a constructor argument or an authorized configuration update."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-ceas-unlock",
      children: "What CEAs Unlock"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CEAs make a Push Chain account a first-class citizen on every external chain. One key, one identity, real on-chain authority everywhere."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "true-self-custody-on-every-chain",
      children: "True Self-Custody on Every Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assets in a CEA belong to exactly one person: the Push-side account that owns it. No bridge operator, no relayer, no protocol admin can move them. Acting on a CEA requires the original wallet's signature, whether that signer lives on Ethereum, Solana, or any other supported chain. The custody chain runs unbroken from origin wallet to destination-chain action."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "deterministic-cross-chain-identity",
      children: "Deterministic Cross-Chain Identity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every Push-side account has a pre-computable, stable address on every external chain. You can whitelist it, fund it, or pre-authorize it on a destination protocol on day zero, before a single cross-chain transaction has happened. When the first one does, the TSS network deploys the CEA contract at exactly the address you computed months earlier."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "programmable-reach-without-bots",
      children: "Programmable Reach Without Bots"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push Chain ", (0,jsx_runtime.jsx)(_components.em, {
        children: "contracts"
      }), ", not just users, get their own CEAs. A single contract on Push can act on Ethereum, BNB, Base, and Arbitrum through a stable on-chain identity per chain. No off-chain bots, no per-chain hot keys, no relayer infrastructure to maintain. Cross-chain orchestration becomes ordinary on-chain logic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "native-msgsender-on-every-destination",
      children: ["Native ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), " on Every Destination"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CEA looks like an ordinary address on its destination chain. Destination protocols need zero Push-specific awareness; they whitelist or fund the CEA, and Push Chain enforces who can speak for it. Universal execution is invisible at the destination layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-you-can-build",
      children: "What You Can Build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CEAs are the primitive. Here are the product verticals they unlock:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal-self-custody",
      children: "Universal Self-Custody"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One key, every chain's assets. ETH on Ethereum, NFTs on Base, LP positions on Arbitrum, staked tokens on BSC, all sitting in CEAs controlled by a single Solana or Ethereum signer on Push Chain. No wrapped tokens, no bridges, no custodian."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-chain-defi",
      children: "Cross-Chain DeFi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lending with isolated risk per CEA, yield strategies that route to the deepest liquidity on whichever chain has it, perp trading that settles on the destination chain natively. Each user's CEA is a self-contained position; collateral, debt, and health factor can never bleed across users."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-chain-ai-agents",
      children: "Cross-Chain AI Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AI agents and autonomous bots deployed as Push Chain contracts that interact with Aave on Ethereum, perp DEXes on Arbitrum, and vaults on Base, all under one verifiable identity. ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-8004",
        children: "EIP-8004"
      }), " cross-chain native from day one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-chain-keepers-and-liquidators",
      children: "Cross-Chain Keepers and Liquidators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Liquidation engines, oracle pokes, vault rebalancers, scheduled jobs. The Push contract watches conditions and dispatches the destination call through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UniversalGatewayPC"
      }), "; destination protocols see a stable, attributable Push-side actor. No race-the-other-bot infrastructure required."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-chain-treasury-and-payroll",
      children: "Multi-Chain Treasury and Payroll"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A DAO whose treasury is conceptually on Push but physically lives on whichever chain has the deepest liquidity, the cheapest gas, or the contributor's preferred wallet. Pay contributors in the chain they want, deploy idle funds where they earn most, repatriate when needed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live Playground"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Connect a Push wallet and watch its deterministic CEA appear on every supported external chain at once. CEAs derive from your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UEA on Push Chain"
      }), ", so it doesn't matter whether you log in via MetaMask, Phantom, email, or social; the same Push account always produces the same CEAs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// customPropMinimized='true'\nimport {\n  PushUniversalAccountButton,\n  usePushChain,\n  usePushChainClient,\n  usePushWalletContext,\n  PushUniversalWalletProvider,\n  PushUI,\n} from \"@pushchain/ui-kit\";\nimport { useEffect, useMemo, useState } from \"react\";\n\nfunction DeriveCEAExample() {\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  function Component() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n    const { PushChain } = usePushChain();\n\n    const [rows, setRows] = useState([]);\n    const [loading, setLoading] = useState(false);\n    const [error, setError] = useState(\"\");\n\n    const ueaAddress = useMemo(\n      () => (pushChainClient ? pushChainClient.universal.account : null),\n      [pushChainClient]\n    );\n\n    useEffect(() => {\n      if (!ueaAddress || !PushChain) {\n        setRows([]);\n        return;\n      }\n      let cancelled = false;\n      (async () => {\n        setLoading(true);\n        setError(\"\");\n        try {\n          // Step 1: wrap the UEA into a UniversalAccount on Push Chain.\n          const pushAccount = PushChain.utils.account.toUniversal(ueaAddress, {\n            chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET,\n          });\n\n          // Step 2: list every chain supported on the current network.\n          const { chains } = PushChain.utils.chains.getSupportedChains(\n            PushChain.CONSTANTS.PUSH_NETWORK.TESTNET\n          );\n\n          // Step 3: derive the CEA on each external chain via the\n          // documented PushChain.utils.account.deriveExecutorAccount(account, { chain }) call.\n          // The `chain` option flips the call from \"UEA on Push\" to \"CEA on chain\".\n          const out = [];\n          for (const chain of chains) {\n            if (chain === PushChain.CONSTANTS.CHAIN.PUSH_TESTNET) continue;\n            const chainName = PushChain.utils.chains.getChainName(chain) ?? chain;\n            try {\n              const cea = await PushChain.utils.account.deriveExecutorAccount(\n                pushAccount,\n                { chain }\n              );\n              out.push({\n                chainNamespace: chain,\n                chainName,\n                ceaAddress: cea.address,\n                isDeployed: cea.deployed === true,\n              });\n            } catch (err) {\n              out.push({\n                chainNamespace: chain,\n                chainName,\n                ceaAddress: \"\",\n                isDeployed: false,\n                error: err instanceof Error ? err.message : String(err),\n              });\n            }\n          }\n\n          if (!cancelled) setRows(out);\n        } catch (err) {\n          if (!cancelled) setError(err instanceof Error ? err.message : String(err));\n        } finally {\n          if (!cancelled) setLoading(false);\n        }\n      })();\n      return () => {\n        cancelled = true;\n      };\n    }, [ueaAddress, PushChain]);\n\n    return (\n      <div style={{ maxWidth: \"640px\", margin: \"0 auto\", padding: \"20px\", fontFamily: \"system-ui\" }}>\n        <h2 style={{ textAlign: \"center\", marginBottom: \"10px\" }}>Derive Chain Executor Accounts</h2>\n        <p style={{ textAlign: \"center\", color: \"#666\", fontSize: \"14px\", marginBottom: \"30px\" }}>\n          Connect a Push wallet and see its deterministic CEA on every supported external chain\n        </p>\n\n        <div style={{ marginBottom: \"30px\", display: \"flex\", justifyContent: \"center\" }}>\n          <PushUniversalAccountButton />\n        </div>\n\n        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && pushChainClient && (\n          <div style={{ marginBottom: \"30px\", padding: \"20px\", backgroundColor: \"#f0f7ff\", borderRadius: \"12px\", border: \"1px solid #d0e7ff\" }}>\n            <h3 style={{ fontSize: \"16px\", marginBottom: \"16px\", color: \"#0066cc\", fontWeight: \"bold\" }}>\n              🔑 Your Push Chain Account\n            </h3>\n\n            <div style={{ marginBottom: \"12px\", padding: \"12px\", backgroundColor: \"white\", borderRadius: \"8px\" }}>\n              <p style={{ fontSize: \"12px\", color: \"#666\", marginBottom: \"4px\", fontWeight: \"bold\" }}>Origin Wallet:</p>\n              <p style={{ fontSize: \"14px\", fontFamily: \"monospace\", wordBreak: \"break-all\", margin: 0 }}>\n                {pushChainClient.universal.origin.address}\n              </p>\n              <p style={{ fontSize: \"12px\", color: \"#666\", marginTop: \"4px\" }}>\n                Chain: {PushChain.utils.chains.getChainName(pushChainClient.universal.origin.chain) ?? pushChainClient.universal.origin.chain}\n              </p>\n            </div>\n\n            <div style={{ padding: \"12px\", backgroundColor: \"white\", borderRadius: \"8px\", border: \"2px solid #d946ef\" }}>\n              <p style={{ fontSize: \"12px\", color: \"#666\", marginBottom: \"4px\", fontWeight: \"bold\" }}>UEA on Push Chain:</p>\n              <p style={{ fontSize: \"14px\", fontFamily: \"monospace\", wordBreak: \"break-all\", margin: 0, color: \"#d946ef\", fontWeight: \"bold\" }}>\n                {pushChainClient.universal.account}\n              </p>\n            </div>\n          </div>\n        )}\n\n        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && pushChainClient && (\n          <div style={{ padding: \"20px\", backgroundColor: \"#f9f9f9\", borderRadius: \"12px\", border: \"1px solid #ddd\" }}>\n            <h3 style={{ fontSize: \"16px\", marginBottom: \"16px\", fontWeight: \"bold\", color: \"#d946ef\" }}>\n              🛰️ CEAs Across External Chains\n            </h3>\n\n            {loading && (\n              <p style={{ fontSize: \"14px\", color: \"#666\", margin: 0 }}>\n                Deriving CEAs across supported chains…\n              </p>\n            )}\n            {error && (\n              <p style={{ fontSize: \"14px\", color: \"#c62828\", margin: 0 }}>\n                Failed to load CEAs: {error}\n              </p>\n            )}\n\n            {!loading && rows.map((row) => (\n              <div key={row.chainNamespace} style={{ marginBottom: \"12px\", padding: \"12px\", backgroundColor: \"white\", borderRadius: \"8px\", border: \"1px solid #eee\" }}>\n                <div style={{ display: \"flex\", justifyContent: \"space-between\", alignItems: \"center\", marginBottom: \"6px\" }}>\n                  <span style={{ fontSize: \"13px\", fontWeight: \"bold\", color: \"#333\" }}>{row.chainName}</span>\n                  <span style={{ fontSize: \"11px\", color: \"#999\", fontFamily: \"monospace\" }}>{row.chainNamespace}</span>\n                </div>\n\n                {row.error ? (\n                  <p style={{ fontSize: \"13px\", color: \"#c62828\", margin: 0 }}>— {row.error}</p>\n                ) : (\n                  <p style={{ fontSize: \"13px\", fontFamily: \"monospace\", wordBreak: \"break-all\", margin: \"4px 0\" }}>\n                    {row.ceaAddress}\n                  </p>\n                )}\n\n                <div style={{ marginTop: \"6px\" }}>\n                  <span\n                    style={{\n                      fontSize: \"11px\",\n                      padding: \"3px 8px\",\n                      borderRadius: \"4px\",\n                      fontWeight: \"bold\",\n                      backgroundColor: row.isDeployed ? \"#e8f5e9\" : \"#fff3e0\",\n                      color: row.isDeployed ? \"#2e7d32\" : \"#e65100\",\n                    }}\n                  >\n                    {row.isDeployed ? \"Deployed\" : \"Not deployed\"}\n                  </span>\n                </div>\n              </div>\n            ))}\n\n            <div style={{ marginTop: \"16px\", padding: \"12px\", backgroundColor: \"#fff3e0\", borderRadius: \"8px\", border: \"1px solid #ffe0b2\" }}>\n              <h4 style={{ fontSize: \"13px\", marginBottom: \"6px\", color: \"#e65100\", fontWeight: \"bold\" }}>\n                💡 How CEAs Activate\n              </h4>\n              <p style={{ fontSize: \"13px\", color: \"#666\", lineHeight: \"1.5\", margin: 0 }}>\n                CEAs start undeployed. They activate the first time you target their chain via a contract-initiated outbound or a user-initiated cross-chain transaction. Once deployed, the CEA can also originate transactions back to Push Chain.\n              </p>\n            </div>\n          </div>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-code",
      children: "Source code"
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Derive Chain Executor Account Tutorial",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/tutorials/derive-chain-executor-account",
      description: "Full frontend source for discovering a Push wallet's CEAs across every supported external chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-we-achieved",
      children: "What we achieved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this tutorial, we explored Chain Executor Accounts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Understood CEAs"
        }), ": how Push Chain accounts map to addresses on every external chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived CEAs with the SDK"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deriveExecutorAccount"
        }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chain"
        }), " option"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Derived CEAs on-chain"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ICEAFactory.getCEAForPushAccount"
        }), " from an external EVM chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Practical applications"
        }), ": lending, self-custody, omnichain yield, perpetuals, and AI agent identity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. One Push account, one CEA per chain"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same Push-side account always derives the same CEA on the same destination chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Different destination chains have different CEAs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mappings are deterministic and persistent"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. CEAs are bound to the Push-side address"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For users: bound to their UEA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For contracts: bound to the contract's Push Chain address"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A new contract deployment at a different address has a different CEA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Powerful primitives"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pre-compute CEAs off-chain via SDK or on the destination chain via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ICEAFactory"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Whitelist them before any cross-chain activity has happened"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reverse-lookup to credit the right Push-side user for inbound flows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-next",
      children: "What's Next?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can derive a Push contract's CEA on every destination. Now wire one Push contract to drive state on three chains at once."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The next tutorial fans out a single click on Push Chain into simultaneous ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increment()"
      }), " calls on Ethereum Sepolia, BNB Testnet, and Arbitrum Sepolia, all signed by the orchestrator's deterministic CEA on each."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        textAlign: 'center'
      },
      children: (0,jsx_runtime.jsx)(_components.mermaid, {
        value: "flowchart LR\n    A[Push contract] --> B[CEA on Ethereum]\n    A --> C[CEA on BNB]\n    A --> D[CEA on Arbitrum]\n    B --> E[ExternalCounter]\n    C --> F[ExternalCounter]\n    D --> G[ExternalCounter]\n\n    style A fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style B fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style C fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style D fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff"
      })
    }), "\n", (0,jsx_runtime.jsx)("hr", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check out the next tutorial to learn how to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/power-features/tutorial-universal-cross-chain-counters/",
        children: "build universal cross-chain counters"
      }), ": one Push contract, many destination chains, one transaction."]
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
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/GitHubRepo/GitHubRepo.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
const GitHubRepo=_ref=>{let title=_ref.title,repoUrl=_ref.repoUrl,_ref$description=_ref.description,description=_ref$description===void 0?'View complete source code on GitHub':_ref$description,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;const handleRepoClick=()=>{window.open(repoUrl,'_blank','noopener,noreferrer');};return/*#__PURE__*/(0,jsx_runtime.jsx)(GitHubRepoContainer,{className:className,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(RepoButton,{onClick:handleRepoClick,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GitHubIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiGithub */.BR8,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(RepoContent,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(RepoTitle,{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(RepoSubtext,{children:description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLinkIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiExternalLink */.HaR,{size:16})})]})});};// Styled Components
const GitHubRepoContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__GitHubRepoContainer",componentId:"sc-102xx6v-0"})(["margin:24px 0;padding:0;"]);const RepoButton=styled_components_browser_esm["default"].button.withConfig({displayName:"GitHubRepo__RepoButton",componentId:"sc-102xx6v-1"})(["display:flex;align-items:center;gap:12px;width:100%;padding:16px 20px;background:var(--ifm-background-color);border:1px solid var(--ifm-color-emphasis-200);border-radius:8px;cursor:pointer;transition:all 0.2s ease;text-align:left;&:hover{border-color:var(--ifm-color-primary-unified);}&:active{transform:translateY(0);}@media ","{padding:14px 16px;gap:10px;}@media ","{padding:12px 14px;gap:8px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const GitHubIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__GitHubIcon",componentId:"sc-102xx6v-2"})(["display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:var(--ifm-color-black);border-radius:6px;color:var(--ifm-color-white);flex-shrink:0;@media ","{width:36px;height:36px;}@media ","{width:32px;height:32px;svg{width:16px;height:16px;}}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const RepoContent=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoContent",componentId:"sc-102xx6v-3"})(["flex:1;min-width:0;"]);const RepoTitle=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoTitle",componentId:"sc-102xx6v-4"})(["font-size:16px;font-weight:600;color:var(--ifm-color-content);margin-bottom:4px;word-break:break-word;@media ","{font-size:15px;}@media ","{font-size:14px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const RepoSubtext=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoSubtext",componentId:"sc-102xx6v-5"})(["font-size:14px;color:var(--ifm-color-content-secondary);font-weight:400;@media ","{font-size:13px;}@media ","{font-size:12px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const ExternalLinkIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__ExternalLinkIcon",componentId:"sc-102xx6v-6"})(["display:flex;align-items:center;justify-content:center;color:var(--ifm-color-content-secondary);flex-shrink:0;opacity:0.7;transition:opacity 0.2s ease;",":hover &{opacity:1;}@media ","{svg{width:14px;height:14px;}}"],RepoButton,globals/* device */.jO.mobileL);/* harmony default export */ const GitHubRepo_GitHubRepo = ((/* unused pure expression or super */ null && (GitHubRepo)));
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
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/SolidityCode/SolidityCode.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
const SolidityCode=_ref=>{let children=_ref.children,_ref$title=_ref.title,title=_ref$title===void 0?'Solidity Contract':_ref$title,_ref$fileName=_ref.fileName,fileName=_ref$fileName===void 0?'Contract.sol':_ref$fileName,_ref$url=_ref.url,url=_ref$url===void 0?null:_ref$url,_ref$showRemixButton=_ref.showRemixButton,showRemixButton=_ref$showRemixButton===void 0?true:_ref$showRemixButton,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;const getRemixUrl=()=>{let remixUrl='https://remix.ethereum.org/';if(url){// Convert GitHub blob URL to format Remix can understand
if(url.includes('github.com')&&url.includes('/blob/')){// Use GitHub import format for Remix
remixUrl="https://remix.ethereum.org/#url="+url;}else if(url.includes('raw.githubusercontent.com')){// Already a raw URL, use directly
remixUrl="https://remix.ethereum.org/#url="+url;}else{// Fallback to just opening Remix
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
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
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
const TutorialTimer=_ref=>{let estimatedMinutes=_ref.estimatedMinutes,label=_ref.label,className=_ref.className;const _useTranslation=(0,es/* useTranslation */.Bd)(),t=_useTranslation.t;// Format time display
const formatTime=minutes=>{if(minutes<60){return minutes+" min"+(minutes!==1?'s':'');}const hours=Math.floor(minutes/60);const remainingMinutes=minutes%60;if(remainingMinutes===0){return hours+" hour"+(hours!==1?'s':'');}return hours+"h "+remainingMinutes+"m";};const timeDisplay=formatTime(estimatedMinutes);return/*#__PURE__*/(0,jsx_runtime.jsxs)(TimerContainer,{className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TimerIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* BiTime */.FOv,{size:"16px","aria-hidden":"true"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TimerContent,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TimerValue,{children:timeDisplay})})]});};// Styled Components
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
        // 1786998197274
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
        // 1786998196380
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
        // 1786998196378
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
        // 1786998204988
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