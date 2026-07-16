"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[25462],{

/***/ 423221
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_05_understanding_universal_transactions_mdx_2a5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-05-understanding-universal-transactions-mdx-2a5.json
const site_docs_chain_03_build_05_understanding_universal_transactions_mdx_2a5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-understanding-universal-transactions","title":"Understanding Universal Transactions","description":"Understanding Universal Transactions | Build | Push Chain Docs","source":"@site/docs/chain/03-build/05-Understanding-Universal-Transactions.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/understanding-universal-transactions","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/understanding-universal-transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/05-Understanding-Universal-Transactions.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"docs-chain-build-understanding-universal-transactions","title":"Understanding Universal Transactions","hide_title":false,"slug":"./understanding-universal-transactions","displayed_sidebar":"pushChainSidebar","sidebar_position":5,"image":"/assets/docs/previews/docs_chain_build--understanding_universal_transactions.png"},"sidebar":"pushChainSidebar","previous":{"title":"Initialize EVM Client","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/initialize-evm-client"},"next":{"title":"Send Universal Transaction","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/send-universal-transaction"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/03-build/05-Understanding-Universal-Transactions.mdx


const frontMatter = {
	id: 'docs-chain-build-understanding-universal-transactions',
	title: 'Understanding Universal Transactions',
	hide_title: false,
	slug: './understanding-universal-transactions',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 5,
	image: '/assets/docs/previews/docs_chain_build--understanding_universal_transactions.png'
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
  "value": "Key Account Types",
  "id": "key-account-types",
  "level": 2
}, {
  "value": "Universal Origin Account (UOA)",
  "id": "universal-origin-account-uoa",
  "level": 3
}, {
  "value": "Universal Executor Account (UEA)",
  "id": "universal-executor-account-uea",
  "level": 3
}, {
  "value": "Chain Executor Account (CEA)",
  "id": "chain-executor-account-cea",
  "level": 3
}, {
  "value": "Mental Model",
  "id": "mental-model",
  "level": 3
}, {
  "value": "Transaction Routes",
  "id": "transaction-routes",
  "level": 2
}, {
  "value": "Route 1: Any Origin to Push Chain",
  "id": "route-1-any-origin-to-push-chain",
  "level": 3
}, {
  "value": "Route 2: Any Origin to External Chain via CEA",
  "id": "route-2-any-origin-to-external-chain-via-cea",
  "level": 3
}, {
  "value": "Route 3: External CEA Origin to Push Chain",
  "id": "route-3-external-cea-origin-to-push-chain",
  "level": 3
}, {
  "value": "Transaction Lifecycle",
  "id": "transaction-lifecycle",
  "level": 2
}, {
  "value": "Why Universal Transactions Matter",
  "id": "why-universal-transactions-matter",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
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
        children: "Understanding Universal Transactions | Build | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In most blockchain apps today, if a user on Ethereum wants to call a contract on another chain, they need to manually bridge tokens, switch wallets, pay gas on multiple networks, and hope nothing goes wrong between steps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal transactions eliminate all of that."
      }), " You write one transaction. The SDK handles origin detection, gas orchestration, proof replay, and final execution regardless of which chain the user is on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain turns all chains into universal execution environments behind a single transaction interface."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Summary",
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "A universal transaction is a single transaction that executes across chains through Push Chain, without requiring manual bridging, network switching, or multi-step coordination."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-account-types",
      children: "Key Account Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before diving into routes and lifecycle, it helps to understand the three account types that power this system."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal-origin-account-uoa",
      children: "Universal Origin Account (UOA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UOA is the user's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "actual wallet"
      }), ". It can be an Ethereum address, Solana public key, Push address or any chain-native identity. This is where transactions originate and the entity (controller) that authorizes execution. It never changes and requires no setup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal-executor-account-uea",
      children: "Universal Executor Account (UEA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UEA is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "smart contract account on Push Chain"
      }), ", deterministically derived from the UOA. It is the entity that actually executes transactions on Push Chain on behalf of the user."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    UOA[\"<b>UOA</b><br/>User Wallet<br/>Any Chain\"]\n    UEA[\"<b>UEA</b><br/>Smart Contract Account<br/>Push Chain\"]\n\n    UOA -->|\"deterministically derives\"| UEA\n\n    style UOA fill:#627eea,stroke:#fff,stroke-width:2px,color:#fff\n    style UEA fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic"
        }), ": the same UOA always maps to the same UEA address, across all chains"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-custodial"
        }), ": only a valid proof from the UOA can authorize UEA actions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lazy-deployed"
        }), ": the UEA is deployed automatically on first use, no setup required"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chain-executor-account-cea",
      children: "Chain Executor Account (CEA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The CEA is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "executor account deployed on a supported external chain"
      }), " (e.g., Ethereum, BNB Chain). It is deterministically mapped to a user or contract and allows execution on external chains while preserving identity across environments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CEAs are not limited to users with a UEA. They can also exist for native Push Chain EOAs or smart contracts. Depending on the target chain, a CEA may be implemented as an EOA or a smart contract, while remaining logically bound to its originating account."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    O[\"<b>Origin Account</b><br/>UEA / Push EOA / Contract\"]\n    CEA[\"<b>CEA</b><br/>Execution Account<br/>External Chain\"]\n\n    O -->|\"maps to / controls\"| CEA\n\n    style O fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style CEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CEAs are only used when execution must happen on or originate from an external chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mental-model",
      children: "Mental Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UEA executes transactions on Push Chain for users interacting from external chains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CEA executes on external chains"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Together, they form a unified execution layer across all chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transaction-routes",
      children: "Transaction Routes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Universal transactions support three routing modes. The route is determined automatically by the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tx.to"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tx.from"
      }), " fields you supply."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Route"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any Origin → Push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute on Push Chain via UEA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any Origin → External via CEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute on external chain via CEA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External (via CEA) → Push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute on Push Chain with external origin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\n    UOA[\"<b>User Wallet</b><br/>Universal Origin Account\"]\n    PC[\"<b>Push Chain</b><br/>Settlement Layer\"]\n    R1[\"<b>Route 1</b><br/>Execute on Push Chain<br/><i>tx.to = address</i>\"]\n    R2[\"<b>Route 2</b><br/>Execute on External Chain<br/><i>tx.to = { address, chain }</i>\"]\n    R3[\"<b>Route 3</b><br/>CEA-Origin to Push Chain<br/><i>tx.from = { chain }</i>\"]\n\n    UOA -->|\"submits tx via SDK\"| PC\n    PC --> R1\n    PC --> R2\n    PC --> R3\n\n    style UOA fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style R1 fill:#166534,stroke:#4ade80,color:#fff\n    style R2 fill:#1e3a8a,stroke:#60a5fa,color:#fff\n    style R3 fill:#7c2d12,stroke:#fb923c,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "route-1-any-origin-to-push-chain",
      children: "Route 1: Any Origin to Push Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most common route. The user signs from any supported chain and the transaction executes on Push Chain via their UEA."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use"
      }), ": Contract calls, token transfers, multicall batches — anything targeting Push Chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    O[\"Any Origin\\nEthereum / Solana / Push / ...\"]\n    UEA[\"UEA\\nPush Chain\"]\n    T[\"Target\\nContract or EOA\\non Push Chain\"]\n\n    O -->|\"tx.to = address\"| UEA --> T\n\n    style O fill:#1e293b,stroke:#475569,color:#94a3b8\n    style UEA fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style T fill:#166534,stroke:#4ade80,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Route 1: plain address target triggers Push Chain execution\nawait pushChainClient.universal.sendTransaction({\n  to: '0xContractOnPushChain',\n  data: encodedCalldata,\n  value: BigInt(0),\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "route-2-any-origin-to-external-chain-via-cea",
      children: "Route 2: Any Origin to External Chain via CEA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The user signs from any chain, but execution happens on an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "external chain"
      }), " through their CEA. Push Chain acts as the coordination layer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " Calling a contract on Ethereum, BNB Chain, or any supported external chain without the user needing to switch networks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    O[\"Any Origin\"]\n    PC[\"Push Chain\\nCoordination Layer\"]\n    CEA[\"CEA\\nExternal Chain\"]\n    T[\"Target\\nContract on\\nExternal Chain\"]\n\n    O -->|\"tx.to = { address, chain }\"| PC --> CEA --> T\n\n    style O fill:#1e293b,stroke:#475569,color:#94a3b8\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style CEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style T fill:#1e3a8a,stroke:#60a5fa,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Route 2: { address, chain } target routes through CEA on that chain\nawait pushChainClient.universal.sendTransaction({\n  to: {\n    address: '0xContractOnEthereum',\n    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n  },\n  data: encodedCalldata,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "route-3-external-cea-origin-to-push-chain",
      children: "Route 3: External CEA Origin to Push Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The execution ", (0,jsx_runtime.jsx)(_components.em, {
        children: "originates"
      }), " from a CEA on an external chain and targets Push Chain. This route is used when a transaction returns from an external chain and needs to preserve the identity established there."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example, a user can move from Solana to Push Chain via a UEA, interact with Ethereum using a CEA (such as depositing into Aave), and then return to Push Chain. Route 3 ensures the execution reflects their Ethereum identity."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use:"
      }), " When execution on Push Chain must reflect an external chain identity, typically after interacting with contracts on that chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    O[\"Any Origin\"]\n    CEA[\"CEA\\nExternal Chain\\nas origin\"]\n    PC[\"Push Chain\\nExecution\"]\n\n    O -->|\"tx.from = { chain }\"| CEA --> PC\n\n    style O fill:#1e293b,stroke:#475569,color:#94a3b8\n    style CEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Route 3: tx.from forces CEA on specified chain to be the execution origin\nawait pushChainClient.universal.sendTransaction({\n  from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },\n  to: '0xContractOnPushChain',\n  data: encodedCalldata,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transaction-lifecycle",
      children: "Transaction Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every call to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sendTransaction"
      }), " follows the same execution pipeline. These steps are handled automatically by the SDK."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin Detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifies the UOA and source chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gas Estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Estimates total execution cost across chains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UEA Resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolves or deploys the user's UEA on Push Chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User Authorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collects signature or verifies on-chain proof"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gas Funding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Funds the UEA if required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asset Movement"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Moves assets if ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tx.funds"
            }), " is set"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submits the transaction to Push Chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confirmation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns transaction hash and execution receipt"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Asset Movement (step 6) only runs when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tx.funds"
      }), " is set. For plain Push Chain transactions it is skipped entirely."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each step emits a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SEND-TX-*"
      }), " progress event. You can subscribe via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "progressHook"
      }), " at the client level or per-call to show live status in your UI."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-universal-transactions-matter",
      children: "Why Universal Transactions Matter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Universal transactions fundamentally change how apps are built and used across chains."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No per-chain deployments"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Developers deploy once and reach users across all supported chains"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No bridging or network switching"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Users interact from their native chain without managing infrastructure"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Unified user identity"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "The same user can execute across chains while preserving identity"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Composable cross-chain flows"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Complex multi-chain interactions happen within a single transaction"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This enables a new class of applications that are truly chain-agnostic and universal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Send your first universal transaction with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-universal-transaction",
          children: "Send Universal Transaction"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Track and monitor execution with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/track-universal-transaction",
          children: "Track Universal Transaction"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build advanced cross-chain flows with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-multichain-transactions",
          children: "Send Multichain Transactions"
        })]
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