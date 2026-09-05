"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[54366],{

/***/ 116150
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_09_contract_initiated_multichain_execution_mdx_711_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-09-contract-initiated-multichain-execution-mdx-711.json
const site_docs_chain_03_build_09_contract_initiated_multichain_execution_mdx_711_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-contract-initiated-multichain-execution","title":"Contract-Initiated Multichain Execution","description":"Contract-Initiated Multichain Execution | Build | Push Chain Docs","source":"@site/docs/chain/03-build/09-Contract-Initiated-Multichain-Execution.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/contract-initiated-multichain-execution","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/build/contract-initiated-multichain-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/09-Contract-Initiated-Multichain-Execution.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"docs-chain-build-contract-initiated-multichain-execution","title":"Contract-Initiated Multichain Execution","hide_title":false,"slug":"./contract-initiated-multichain-execution","displayed_sidebar":"pushChainSidebar","sidebar_position":9,"image":"/assets/docs/previews/docs_chain_build--contract-initiated_multichain_execution.png"},"sidebar":"pushChainSidebar","previous":{"title":"Send Multichain Transactions","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/build/send-multichain-transactions"},"next":{"title":"Track Universal Transaction","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/build/track-universal-transaction"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
// EXTERNAL MODULE: ./src/components/ConstantsDropdown/ConstantsDropdown.tsx
var ConstantsDropdown = __webpack_require__(510103);
;// ./docs/chain/03-build/09-Contract-Initiated-Multichain-Execution.mdx


const frontMatter = {
	id: 'docs-chain-build-contract-initiated-multichain-execution',
	title: 'Contract-Initiated Multichain Execution',
	hide_title: false,
	slug: './contract-initiated-multichain-execution',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 9,
	image: '/assets/docs/previews/docs_chain_build--contract-initiated_multichain_execution.png'
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
  "value": "How This Differs from Universal Transactions",
  "id": "how-this-differs-from-universal-transactions",
  "level": 2
}, {
  "value": "Key Concepts",
  "id": "key-concepts",
  "level": 2
}, {
  "value": "Contract CEA",
  "id": "contract-cea",
  "level": 3
}, {
  "value": "UniversalGatewayPC (UGPC)",
  "id": "universalgatewaypc-ugpc",
  "level": 3
}, {
  "value": "Universal Executor Module",
  "id": "universal-executor-module",
  "level": 3
}, {
  "value": "Three Directions",
  "id": "three-directions",
  "level": 2
}, {
  "value": "Inbound: External Chain → Push Chain",
  "id": "inbound-external-chain--push-chain",
  "level": 3
}, {
  "value": "Outbound: Push Chain → External Chain",
  "id": "outbound-push-chain--external-chain",
  "level": 3
}, {
  "value": "Round-Trip: Push Chain → External Chain → Push Chain",
  "id": "round-trip-push-chain--external-chain--push-chain",
  "level": 3
}, {
  "value": "Inbound Wire Format",
  "id": "inbound-wire-format",
  "level": 2
}, {
  "value": "IUniversalGateway",
  "id": "iuniversalgateway",
  "level": 3
}, {
  "value": "Single-call vs multicall payload",
  "id": "single-call-vs-multicall-payload",
  "level": 3
}, {
  "value": "Target identity and replay protection",
  "id": "target-identity-and-replay-protection",
  "level": 3
}, {
  "value": "Minimal dispatch",
  "id": "minimal-dispatch",
  "level": 3
}, {
  "value": "Outbound Wire Format",
  "id": "outbound-wire-format",
  "level": 2
}, {
  "value": "IUniversalGatewayPC",
  "id": "iuniversalgatewaypc",
  "level": 3
}, {
  "value": "Single-call vs multicall payload",
  "id": "single-call-vs-multicall-payload-1",
  "level": 3
}, {
  "value": "Minimal dispatch",
  "id": "minimal-dispatch-1",
  "level": 3
}, {
  "value": "Round-Trip Wire Format",
  "id": "round-trip-wire-format",
  "level": 2
}, {
  "value": "executeUniversalTx",
  "id": "executeuniversaltx",
  "level": 3
}, {
  "value": "Required guards",
  "id": "required-guards",
  "level": 3
}, {
  "value": "Strict dispatch signature",
  "id": "strict-dispatch-signature",
  "level": 3
}, {
  "value": "Minimal round-trip dispatch",
  "id": "minimal-round-trip-dispatch",
  "level": 3
}, {
  "value": "Operational Knobs",
  "id": "operational-knobs",
  "level": 2
}, {
  "value": "Deterministic CEA Conversion",
  "id": "deterministic-cea-conversion",
  "level": 2
}, {
  "value": "Outbound Value Sizing",
  "id": "outbound-value-sizing",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "When to Use This",
  "id": "when-to-use-this",
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
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
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
        children: "Contract-Initiated Multichain Execution | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Contract-Initiated Multichain Execution lets a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain smart contract trigger execution on an external chain"
      }), ", or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "receive a call originating from an external chain"
      }), ", without any live user interaction at call time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This enables Push contracts to autonomously interact with external protocols, call contracts on Ethereum or BNB Chain, and optionally receive inbound payloads back on Push Chain, all driven by on-chain contract code."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["All directions run through the same primitives (UEAs, CEAs, the gateway pair) but the wire format and the on-chain identity differ. For real examples, see the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/",
          children: "Contract-Initiated Examples"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-this-differs-from-universal-transactions",
      children: "How This Differs from Universal Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Universal transactions are initiated by users. Contract-initiated multichain execution is initiated by Push Chain smart contracts. Both use the same cross-chain infrastructure, but differ in execution model and integration surface."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Universal Transaction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contract-Initiated Multichain Execution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Who initiates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A user wallet (UOA)."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Push Chain smart contract."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When it happens"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At user signature time."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "During contract execution, triggered by any on-chain call."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Authorization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User signature or proof."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract logic, no live user required."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return handling"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["SDK receives ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TxResponse"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inbound ", (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx()"
            }), " call on the originating contract."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity on external chain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User's CEA."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract's CEA (bound to the contract address)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SDK involvement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required on client side."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fully on-chain, no SDK required."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key distinction is that contract-initiated multichain execution is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "programmable and autonomous"
      }), ". Any call into your Push contract can trigger execution on an external chain. Liquidation triggers, scheduled jobs, governance outcomes, and user actions that fan out across chains all fit this model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contract-cea",
      children: "Contract CEA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every Push Chain smart contract has a deterministically derived ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain Executor Account (CEA)"
      }), " on each supported external chain. Same idea as user-initiated CEAs, but bound to the contract address instead of a user wallet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The contract CEA:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is derived from the Push contract's address, not from any user."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is lazily deployed on first use by the TSS network."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Acts as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " on the external chain when the contract initiates execution there."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gas is taken in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "$PC"
        }), " on Push Chain and converted to the native token of the external chain."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is scoped to the contract, not to any user."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universalgatewaypc-ugpc",
      children: "UniversalGatewayPC (UGPC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UGPC is the on-chain gateway contract on Push Chain through which all outbound cross-chain calls are routed. Your contract calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UGPC.sendUniversalTxOutbound()"
      }), ", which relays the payload, optionally burns or locks PRC-20 tokens, and emits the event the TSS network listens for."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UGPC is a predeploy at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x00000000000000000000000000000000000000C1"
      }), " on every Push Chain network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal-executor-module",
      children: "Universal Executor Module"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UNIVERSAL_EXECUTOR_MODULE"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7"
      }), ") is the privileged address authorized to deliver round-trip back-leg payloads to Push-native contracts. When your contract's CEA on an external chain triggers a callback to Push, the module calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx()"
      }), " on your contract."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regular inbound (an external contract calling the Universal Gateway) lands on your Push target via the caller's UEA, not via this module."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,jsx_runtime.jsxs)(_components.mdxAdmonitionTitle, {
        children: ["Always validate inbound in your contract's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executeUniversalTx"
        }), " handler"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("br", {}), "If your contract implements ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executeUniversalTx"
        }), " (the round-trip back-leg handler), validate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender == UNIVERSAL_EXECUTOR_MODULE"
        }), " and replay-protect on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "txId"
        }), ". ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "Without these guards, anyone can call your handler with fabricated data. Regular inbound targets (called via the caller's UEA) do not need either guard."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "three-directions",
      children: "Three Directions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contract-initiated execution flows in three directions. Pick the one that matches your use case."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inbound-external-chain--push-chain",
      children: "Inbound: External Chain → Push Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An external-chain contract calls the per-chain Universal Gateway. The TSS network relays the call to Push Chain, where the dispatching contract's UEA executes the payload on the target Push contract."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    EOA[\"<b>External-chain EOA</b>\"]\n    EXT[\"<b>External Contract</b><br/>(Sepolia / BNB / etc.)\"]\n    UG[\"<b>UniversalGateway</b><br/>External Chain\"]\n    UEA[\"<b>Caller's UEA</b><br/>Push Chain\"]\n    PC[\"<b>Target Contract</b><br/>Push Chain\"]\n\n    EOA --> EXT --> UG -->|\"TSS relay\"| UEA --> PC\n\n    style EXT fill:#1e3a8a,stroke:#60a5fa,color:#fff\n    style UG fill:#1e3a8a,stroke:#60a5fa,color:#fff\n    style UEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use this when"
      }), " an external-chain contract needs to mutate state on Push (e.g. an Ethereum-side staking contract triggers a balance update on Push)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For instance a cross-chain governance proposal lands on Push from a vote on Sepolia, or an external chain bridges a payload with funds that should land in a Push vault."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outbound-push-chain--external-chain",
      children: "Outbound: Push Chain → External Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Push contract dispatches a call that runs on an external chain. The call executes on the destination as the Push contract's CEA on that chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    PC[\"<b>Push Contract</b><br/>Push Chain\"]\n    UGPC[\"<b>UGPC</b><br/>0x...C1\"]\n    CEA[\"<b>Contract CEA</b><br/>External Chain\"]\n    EXT[\"<b>Target Contract</b><br/>External Chain\"]\n\n    PC -->|\"sendUniversalTxOutbound()\"| UGPC -->|\"TSS relay\"| CEA --> EXT\n\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style UGPC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style CEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style EXT fill:#1e3a8a,stroke:#60a5fa,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use this when"
      }), " you require liquidations on external DEXes, scheduled rebalances on Aave, fanning out a single Push tx to multiple destination chains, paying out winners on external networks."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "round-trip-push-chain--external-chain--push-chain",
      children: "Round-Trip: Push Chain → External Chain → Push Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A Push contract dispatches outbound; the destination CEA's multicall nests a gateway call that fires an inbound back to the original Push contract. One user signature, an external action, and an automatic back-leg into the contract's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx"
      }), " handler."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    EOA([\"<b>User EOA</b>\"])\n    PC[\"<b>Push Contract</b><br/>(kickOff + executeUniversalTx)\"]\n    UGPC[\"<b>UGPC</b>\"]\n    CEA[\"<b>Contract CEA</b><br/>External Chain\"]\n    EXT[\"<b>External Target</b>\"]\n\n    EOA --> PC -->|\"sendUniversalTxOutbound()\"| UGPC -->|\"TSS\"| CEA --> EXT\n    CEA -.->|\"back-leg via TSS\"| PC\n\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style UGPC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style CEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style EXT fill:#1e3a8a,stroke:#60a5fa,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Use this when"
      }), " you need cross-chain state machines (request-and-fulfill), oracle-style flows where Push waits on external execution, or multi-chain cascades fired by a single user signature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inbound-wire-format",
      children: "Inbound Wire Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An inbound dispatch is a single call into the per-chain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IUniversalGateway"
      }), " from an external chain. The TSS network relays the call to Push, where the dispatching contract's UEA forwards the payload to your target. Below is the full surface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iuniversalgateway",
      children: "IUniversalGateway"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sendUniversalTx(UniversalTxRequest): void"
          })
        })
      }), " ", (0,jsx_runtime.jsxs)("div", {
        style: {
          textAlign: 'right',
          fontSize: '1rem'
        },
        children: ["is ", (0,jsx_runtime.jsx)("em", {
          children: (0,jsx_runtime.jsx)("code", {
            style: {
              color: 'var(--ifm-sidebar-activetext-color)',
              background: 'transparent'
            },
            children: "external payable"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployed Address"
      }), ": Per supported chain (Sepolia, BNB Testnet, Arbitrum Sepolia, Base Sepolia, Solana Devnet). See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/setup/smart-contract-address-book/#external-chain-gateway-contracts",
        children: "Smart Contract Address Book - External Chain Gateway Contracts"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "struct UniversalPayload {\n    address to;                    // Real target on Push (or address(0) if data is multicall-wrapped)\n    uint256 value;                 // Native value to forward to the target\n    bytes   data;                  // Raw calldata, or 0x2cc2842d-prefixed multicall encoding\n    uint256 gasLimit;\n    uint256 maxFeePerGas;\n    uint256 maxPriorityFeePerGas;\n    uint256 nonce;                 // Caller's UEA nonce on Push\n    uint256 deadline;\n    uint8   vType;                 // 0 = universalTxVerification (inbound to UEA)\n}\n\nstruct UniversalTxRequest {\n    address recipient;             // Always address(0); real target is inside payload\n    address token;                 // address(0) for native; ERC-20 address for bridged token\n    uint256 amount;                // Amount to bridge with this inbound\n    bytes   payload;               // ABI-encoded UniversalPayload\n    address revertRecipient;       // Address to receive bridged funds on revert\n    bytes   signatureData;         // Empty for contract-initiated inbound\n}\n\ninterface IUniversalGateway {\n    function sendUniversalTx(UniversalTxRequest calldata req) external payable;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Arguments"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.recipient"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "address"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Always ", (0,jsx_runtime.jsx)(_components.code, {
                children: "address(0)"
              }), ". The real Push-side target lives inside ", (0,jsx_runtime.jsx)(_components.code, {
                children: "payload"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.token"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "address"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "address(0)"
              }), " for native asset; ERC-20 address when bridging a token alongside the call."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.amount"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint256"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Amount to bridge with this inbound. Set to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "0"
              }), " for payload-only inbounds."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.payload"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["ABI-encoded ", (0,jsx_runtime.jsx)(_components.code, {
                children: "UniversalPayload"
              }), " describing the target call."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.revertRecipient"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Address that receives bridged funds if the Push-side execution reverts."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.signatureData"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Empty for contract-initiated inbound."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "single-call-vs-multicall-payload",
      children: "Single-call vs multicall payload"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The caller's UEA inspects the first 4 bytes of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "payload.data"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If they match the multicall selector ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "0x2cc2842d"
          })
        }), " (= ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bytes4(keccak256(\"UEA_MULTICALL\"))"
        }), ") → the UEA decodes the rest as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Multicall[]"
        }), " and ignores ", (0,jsx_runtime.jsx)(_components.code, {
          children: "payload.to"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Otherwise"
        }), " → it treats ", (0,jsx_runtime.jsx)(_components.code, {
          children: "payload.data"
        }), " as raw calldata and runs it once against ", (0,jsx_runtime.jsx)(_components.code, {
          children: "payload.to"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// Single call: target is `to`, calldata is `data`.\nUniversalPayload memory payload = UniversalPayload({\n    to:                   pushTarget,\n    value:                0,\n    data:                 abi.encodeWithSignature(\"increment()\"),\n    gasLimit:             1e7,\n    maxFeePerGas:         1e10,\n    maxPriorityFeePerGas: 0,\n    nonce:                ueaNonce,\n    deadline:             9999999999,\n    vType:                0\n});\n\n// Multicall: prefix the sentinel, then encode an array of (to, value, data).\n// In multicall mode, payload.to is ignored. Convention is to leave it as address(0).\nMulticall[] memory calls = new Multicall[](1);\ncalls[0] = Multicall({ to: pushTarget, value: 0, data: abi.encodeWithSignature(\"increment()\") });\nbytes memory multicallData = abi.encodePacked(\n    bytes4(keccak256(\"UEA_MULTICALL\")),  // 0x2cc2842d\n    abi.encode(calls)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "target-identity-and-replay-protection",
      children: "Target identity and replay protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the inbound lands on Push, the caller's UEA executes the payload. From your target's perspective, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), " is that UEA, a smart account with its own internal nonce."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The UEA increments its nonce before forwarding, so your target does NOT need replay protection"
      }), " and does NOT need to validate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), " against any module. A plain Solidity function works as-is."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To recover the origin chain and external wallet from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "(string memory chainNamespace, bytes memory externalAddress) =\n    IUEAFactory(UEA_FACTORY).getOriginForUEA(msg.sender);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minimal-dispatch",
      children: "Minimal dispatch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "address constant GATEWAY = 0x...; // Per-chain UG (Sepolia, BNB Testnet, etc.)\nbytes4  constant UEA_MULTICALL_SELECTOR = 0x2cc2842d;\n\nfunction triggerOnPush(\n    address pushTarget,\n    bytes   calldata pushCalldata,\n    uint256 nonce\n) external payable {\n    // Wrap (target, calldata) into the UEA's multicall format.\n    Multicall[] memory calls = new Multicall[](1);\n    calls[0] = Multicall({ to: pushTarget, value: 0, data: pushCalldata });\n    bytes memory multicallData = abi.encodePacked(UEA_MULTICALL_SELECTOR, abi.encode(calls));\n\n    // Wrap multicall data in the UniversalPayload (vType = 0, inbound to UEA).\n    bytes memory payload = abi.encode(\n        address(0), uint256(0), multicallData,\n        uint256(1e7), uint256(1e10), uint256(0),\n        nonce, uint256(9999999999), uint8(0)\n    );\n\n    // Dispatch through the per-chain Universal Gateway.\n    IUniversalGateway(GATEWAY).sendUniversalTx{value: msg.value}(\n        UniversalTxRequest({\n            recipient:       address(0),\n            token:           address(0),\n            amount:          0,\n            payload:         payload,\n            revertRecipient: address(this),\n            signatureData:   \"\"\n        })\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A complete runnable version (Sepolia dispatcher plus Push target) is in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-examples/inbound-to-push-chain",
        children: "Inbound to Push"
      }), " example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "outbound-wire-format",
      children: "Outbound Wire Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The outbound dispatch is a single call into UGPC. Below is the full surface."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iuniversalgatewaypc",
      children: "IUniversalGatewayPC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "sendUniversalTxOutbound(UniversalOutboundTxRequest): void"
          })
        })
      }), " ", (0,jsx_runtime.jsxs)("div", {
        style: {
          textAlign: 'right',
          fontSize: '1rem'
        },
        children: ["is ", (0,jsx_runtime.jsx)("em", {
          children: (0,jsx_runtime.jsx)("code", {
            style: {
              color: 'var(--ifm-sidebar-activetext-color)',
              background: 'transparent'
            },
            children: "external payable"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployed Address"
      }), ": ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/setup/smart-contract-address-book/#push-chain-core-functionalities",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x00000000000000000000000000000000000000C1"
            })
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "struct UniversalOutboundTxRequest {\n    bytes   recipient;        // CEA or target address on the external chain (bytes-encoded)\n    address token;            // PRC20 token on Push Chain to bridge (address(0) for none)\n    uint256 amount;           // Amount of PRC20 to bridge\n    uint256 gasLimit;         // Gas limit for external-chain execution (see Operational Knobs)\n    uint256 gasPrice;         // Gas price override (0 = per-chain default from UniversalCore; new in SDK v6)\n    uint256 maxPCForGas;      // Max native PC the AMM may consume for the gas swap (0 = no cap; new in SDK v6)\n    bytes   payload;          // Calldata for the CEA to execute on the external chain\n    address revertRecipient;  // Address to receive funds if the tx reverts on the external chain\n}\n\ninterface IUniversalGatewayPC {\n    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Arguments"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.recipient"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CEA or target address on the external chain, bytes-encoded."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.token"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "address"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["PRC-20 token address on Push Chain to bridge. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "address(0)"
              }), " if no token is being bridged."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.amount"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint256"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Amount of PRC-20 to bridge. Set to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "0"
              }), " if not bridging."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.gasLimit"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint256"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Gas limit for external-chain execution. Default to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "2_000_000"
              }), " (see ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#operational-knobs",
                children: "Operational Knobs"
              }), "); UGPC charges only for actual gas used and refunds the surplus."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.gasPrice"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint256"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Gas price override for the destination chain. Set to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "0"
              }), " to use the per-chain default quoted by UniversalCore (recommended)."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.maxPCForGas"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint256"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Maximum native ", (0,jsx_runtime.jsx)(_components.code, {
                children: "$PC"
              }), " the on-chain AMM may consume when swapping for destination gas. Set to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "0"
              }), " for no cap (recommended on testnet)."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.payload"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ABI-encoded calldata for the CEA to execute on the external chain."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "req.revertRecipient"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Address to receive bridged funds if the external transaction reverts."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "single-call-vs-multicall-payload-1",
      children: "Single-call vs multicall payload"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The caller's UEA inspects the first 4 bytes of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "payload.data"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If they match the multicall selector ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "0x2cc2842d"
          })
        }), " (= ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bytes4(keccak256(\"UEA_MULTICALL\"))"
        }), ") → the UEA decodes the rest as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Multicall[]"
        }), " and ignores ", (0,jsx_runtime.jsx)(_components.code, {
          children: "payload.to"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Otherwise"
        }), " → it treats ", (0,jsx_runtime.jsx)(_components.code, {
          children: "payload.data"
        }), " as raw calldata and runs it once against ", (0,jsx_runtime.jsx)(_components.code, {
          children: "payload.to"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// Single call (most common): payload is the ABI-encoded calldata for the target.\nbytes memory payload = abi.encodeCall(ICounter.increment, ());\n\n// Multicall: prefix the sentinel, then encode an array of (to, value, data).\nbytes memory multicallData = abi.encodePacked(\n    bytes4(keccak256(\"UEA_MULTICALL\")),\n    abi.encode(callsArray)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The multicall path is what enables ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#round-trip-wire-format",
        children: "round-trip patterns"
      }), " further down."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minimal-dispatch-1",
      children: "Minimal dispatch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "address constant UGPC = 0x00000000000000000000000000000000000000C1;\n\nfunction dispatchToBNB(address bnbCounter, uint256 protocolFeePc) external payable {\n    bytes memory payload = abi.encodeWithSignature(\"increment()\");\n\n    IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: protocolFeePc}(\n        UniversalOutboundTxRequest({\n            recipient:       abi.encodePacked(bnbCounter),\n            token:           address(0),\n            amount:          0,\n            gasLimit:        2_000_000,\n            gasPrice:        0,             // per-chain default from UniversalCore\n            maxPCForGas:     0,             // no cap on PC for the gas swap\n            payload:         payload,\n            revertRecipient: address(this)\n        })\n    );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A complete runnable version is in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-examples/outbound-from-push-chain",
        children: "Plain Outbound"
      }), " example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "round-trip-wire-format",
      children: "Round-Trip Wire Format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A round-trip is a single outbound whose destination-chain payload ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "automatically fires"
      }), " an inbound back to the originating Push contract."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It reuses the outbound surface - ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#iuniversalgatewaypc",
        children: "UniversalGatewayPC"
      }), ", plus a back-leg handler on the dispatching contract - ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#executeuniversaltx",
        children: "executeUniversalTx()"
      }), ". Below is the full surface."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For a visual breakdown of how the four payload layers nest, see the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg#the-wire-format",
          children: "layered diagram in the Round-Trip example"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "executeuniversaltx",
      children: "executeUniversalTx"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "executeUniversalTx(string, bytes, bytes, uint256, address, bytes32): void"
          })
        })
      }), " ", (0,jsx_runtime.jsxs)("div", {
        style: {
          textAlign: 'right',
          fontSize: '1rem'
        },
        children: ["is ", (0,jsx_runtime.jsx)("em", {
          children: (0,jsx_runtime.jsx)("code", {
            style: {
              color: 'var(--ifm-sidebar-activetext-color)',
              background: 'transparent'
            },
            children: "external payable"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Caller"
      }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "UNIVERSAL_EXECUTOR_MODULE"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Deployed Address"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/setup/smart-contract-address-book/#push-chain-core-functionalities",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7"
            })
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "/**\n * @notice Back-leg handler. TSS invokes this on the originating Push contract\n *         when the destination CEA's outer multicall completes.\n * @dev Only callable by UNIVERSAL_EXECUTOR_MODULE. Must validate msg.sender\n *      and guard against replay via txId.\n */\nfunction executeUniversalTx(\n    string  calldata sourceChainNamespace,  // CAIP-2 namespace, e.g. \"eip155:97\"\n    bytes   calldata ceaAddress,             // CEA address on source chain, bytes-encoded\n    bytes   calldata payload,                // ABI-encoded action data\n    uint256          amount,                 // PRC20 amount bridged in\n    address          prc20,                  // PRC20 token address on Push\n    bytes32          txId                    // Unique cross-chain tx id; use for replay protection\n) external payable;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Arguments"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "sourceChainNamespace"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["CAIP-2 chain identifier of the originating chain, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "\"eip155:97\""
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "ceaAddress"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CEA address on the source chain, bytes-encoded."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "payload"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ABI-encoded action data. Decode inside your handler to determine the action."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "amount"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint256"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Amount of PRC-20 tokens bridged with this back-leg."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "prc20"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PRC-20 token address on Push corresponding to the bridged asset."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "txId"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes32"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique cross-chain transaction identifier. Use this to prevent replay."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-guards",
      children: "Required guards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The back-leg handler is privileged. Validate the caller and replay-protect on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "txId"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "mapping(bytes32 => bool) public executedTxIds;\naddress public constant UNIVERSAL_EXECUTOR_MODULE = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;\n\nmodifier onlyUniversalExecutor() {\n    if (msg.sender != UNIVERSAL_EXECUTOR_MODULE) revert NotExecutorModule();\n    _;\n}\n\nfunction executeUniversalTx(\n    string  calldata sourceChainNamespace,\n    bytes   calldata ceaAddress,\n    bytes   calldata payload,\n    uint256          amount,\n    address          prc20,\n    bytes32          txId\n) external payable onlyUniversalExecutor {\n    if (executedTxIds[txId]) revert TxAlreadyExecuted();\n    executedTxIds[txId] = true;\n\n    // Decode payload and apply your application logic.\n    (uint8 action, address user) = abi.decode(payload, (uint8, address));\n    if (action == 0) {\n        stakedBalance[user][prc20] += amount;\n        emit Staked(user, prc20, amount, txId);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strict-dispatch-signature",
      children: "Strict dispatch signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dispatch signature in your push-side contract needs to match exactly the one shown below for the round trip to complete."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Signature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used by"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx(string, bytes, bytes, uint256, address, bytes32)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push-native contracts. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "This is the path TSS dispatches to."
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minimal-round-trip-dispatch",
      children: "Minimal round-trip dispatch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A round-trip dispatch is just a regular UGPC outbound. The only extra thing you do is shape the outbound's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "payload"
      }), " so that, when the destination CEA executes it, ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["one step of the outer multicall is a self-call to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sendUniversalTxToUEA"
        }), " on the CEA"]
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That self-call is what TSS reads as \"fire the inbound back to the originating Push contract.\" Without it, only the outbound leg runs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": You don't deploy or fund the destination CEA. TSS deploys it lazily on first use and forwards the converted gas value to it as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.value"
        }), " when executing the destination tx (see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#operational-knobs",
          children: "Operational Knobs"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// Build the inner UniversalPayload (vType = 1, inbound to Push UEA).\nbytes memory innerMulticallData = abi.encodePacked(\n    UEA_MULTICALL_SELECTOR,                  // 0x2cc2842d\n    abi.encode(/* Multicall[] - what runs on the Push UEA after the back-leg */)\n);\nbytes memory inboundUniversalPayload = abi.encode(\n    address(0), uint256(0), innerMulticallData,\n    uint256(1e7), uint256(1e10), uint256(0),\n    ueaNonce + 1, uint256(9999999999), uint8(1)\n);\n\n// The back-leg trigger: a CEA self-call wrapping the inner payload.\nbytes memory ceaSelfCallData = abi.encodeWithSelector(\n    bytes4(keccak256(\"sendUniversalTxToUEA(address,uint256,bytes,address)\")),\n    address(0), uint256(0), inboundUniversalPayload, address(this)\n);\n\n// Outer multicall delivered to the destination CEA: do the external action, then trigger the back-leg.\nMulticall[] memory outerCalls = new Multicall[](2);\nouterCalls[0] = Multicall({ to: targetOnExternalChain, value: 0, data: actionCalldata });\nouterCalls[1] = Multicall({ to: destinationCEAAddr,    value: 0, data: ceaSelfCallData });\nbytes memory outerMulticallData = abi.encodePacked(UEA_MULTICALL_SELECTOR, abi.encode(outerCalls));\n\n// Dispatch with gasLimit ≥ 2_000_000 (see Operational Knobs).\nUGPC.sendUniversalTxOutbound{value: protocolFeePc}(UniversalOutboundTxRequest({\n    recipient:       abi.encodePacked(destinationCEAAddr),\n    token:           pBNB,\n    amount:          0,\n    gasLimit:        2_000_000,\n    gasPrice:        0,                // per-chain default from UniversalCore\n    maxPCForGas:     0,                // no cap on PC for the gas swap\n    payload:         outerMulticallData,\n    revertRecipient: address(this)\n}));\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A complete runnable version is in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg",
        children: "Round-Trip with Auto Back-Leg"
      }), " example."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "operational-knobs",
      children: "Operational Knobs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two operational settings determine whether a round-trip lands. Verified on Donut Testnet; wrong values cause TSS to silently drop the back-leg."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Knob"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit"
            }), " on the UGPC outbound"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "≥ 2_000_000"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UGPC's auto-floor for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit = 0"
            }), " is 500k. Below ~1.5M, the destination tx runs out of gas during the nested gateway call and TSS does not retry.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "The Push tx still succeeds and UGPC emits its event, but no destination tx fires.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.strong, {
              children: "Note"
            }), ": UGPC charges only for actual gas used and refunds the surplus into the calling contract, so over-provisioning is essentially free."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push contract ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$PC"
            }), " balance"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["covers ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protocolFee + inbound execution fee"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inbound execution on Push pays gas in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$PC"
            }), ", charged to the dispatching contract. UGPC refunds surplus, so refunds ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "accumulate on the contract"
            }), ", not the user EOA.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "Plan a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "withdraw()"
            }), " path or treasury sweep for long-running flows."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Destination CEA is auto funded",
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The destination CEA does not need pre-funding. When TSS submits the destination tx it forwards the converted gas value to the CEA as ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "msg.value"
        }), ", so the CEA has the native balance it needs for nested gateway calls during the duration of that tx."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deterministic-cea-conversion",
      children: "Deterministic CEA Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To convert a contract address on Push to a deterministic CEA on another chain, either to whitelist or pre-fund with other assets, use this off-chain SDK code."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "import { PushChain } from '@pushchain/core';\n\nconst dispatcherAccount = PushChain.utils.account.toUniversal(\n  contractAddressOnPush,\n  { chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET }\n);\nconst destinationCEA = await PushChain.utils.account.deriveExecutorAccount(\n  dispatcherAccount,\n  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET, skipNetworkCheck: true }\n);\nconsole.log('CEA address:', destinationCEA.address);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "outbound-value-sizing",
      children: "Outbound Value Sizing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cross-chain gas is converted from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "$PC"
      }), " to the native token using the internal Universal V3 AMM. Either ensure that proper amount of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "$PC"
      }), " is sent as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.value"
      }), " or over-size the value to account for potential slippage."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since unused gas is refunded, over-sizing is recommended. The ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-roundtrip-between-external-chains",
        children: "Cross-Chain Cascade"
      }), " example implements this end to end."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["Function ", (0,jsx_runtime.jsx)(_components.em, {
              children: "executeUniversalTx"
            }), " must validate the caller and guard against replay"]
          }), (0,jsx_runtime.jsx)("br", {}), "\nIf your contract implements the back-leg handler, gate it on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "msg.sender == UNIVERSAL_EXECUTOR_MODULE"
          }), " and maintain a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mapping(bytes32 => bool) executedTxIds"
          }), " keyed by the incoming ", (0,jsx_runtime.jsx)(_components.code, {
            children: "txId"
          }), "."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Without these guards, anyone can call your handler with fabricated data, and a legitimate callback can be replayed. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Regular inbound targets (called via the caller's UEA) do not need these guards"
          }), " because the UEA's nonce handles replay internally.", (0,jsx_runtime.jsx)("br", {})]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CEA identity is contract-bound"
          }), (0,jsx_runtime.jsx)("br", {}), "\nThe contract's CEA is derived from its Push Chain address. A different deployment, even identical bytecode at a new address, will have a different CEA. If you use a proxy pattern, the CEA is bound to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "proxy"
          }), " address, not the implementation. Upgrades do not change the CEA."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No cross-chain atomicity"
          }), (0,jsx_runtime.jsx)("br", {}), "\nThe outbound dispatch and the external execution are not atomic. Push-side state changes commit independently of whether the external call succeeds. Defer critical state commits to the inbound handler, or use an explicit pending/failed state machine."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inbound timing is not predictable"
          }), (0,jsx_runtime.jsx)("br", {}), "\nInbound delivery depends on external chain finality and TSS observation. Do not design contracts that require an inbound within a specific block window."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Emit an event at dispatch time"
          }), (0,jsx_runtime.jsx)("br", {}), "\nInclude a request ID, target address, and operation type so inbound payloads can be correlated with the original outbound call."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use per-dispatch request IDs, or a FIFO queue"
          }), (0,jsx_runtime.jsx)("br", {}), "\nIf multiple outbound calls can be in flight, you have two options.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "\n(a) Stamp a request ID into your event log and correlate from off-chain.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), " (b) Maintain a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bytes32[] pendingQueue"
          }), " plus ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pendingHead"
          }), " and pop on each callback. TSS preserves outbound-submission order, so the popped ID always matches the just-completed leg. The queue option avoids any payload-byte introspection and is more robust."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Keep inbound handlers lean"
          }), (0,jsx_runtime.jsx)("br", {}), "\nThe handler is called by an external module account; keep it tight and apply re-entrancy guards if it calls other contracts."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fund the Push contract before dispatching"
          }), (0,jsx_runtime.jsx)("br", {}), "\nVerify the contract has sufficient ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$PC"
          }), " to cover inbound execution fees. UGPC refunds surplus into the calling contract via ", (0,jsx_runtime.jsx)(_components.code, {
            children: "receive()"
          }), ", so over-provisioning is safe; refunds ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "accumulate on the contract"
          }), ", not on the EOA. Plan a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "withdraw()"
          }), " path for long-running flows."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No synchronous result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Outbound and inbound are always separate transactions. There is no in-call return value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["CEA as ", (0,jsx_runtime.jsx)(_components.code, {
                children: "msg.sender"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External contracts that restrict callers (whitelists, EOA-only guards) must explicitly whitelist the contract's CEA address."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proxy upgrade safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEA is bound to the proxy address. New deployments at different addresses have different CEAs."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supported chains"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Target chains must be supported by the TSS network. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
              variant: "CHAIN"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common failure modes when wiring contract-initiated flows. Every row links to the section that explains the underlying mechanic."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likely cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push tx succeeds but no destination tx fires"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit"
            }), " was ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), " or under the auto-floor (~500k)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit: 2_000_000"
            }), " on the UGPC outbound. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#operational-knobs",
              children: "Operational Knobs"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Destination tx fires but the target contract reverts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination contract restricts callers (whitelist or EOA-only guard) and does not recognise the CEA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Whitelist the contract's CEA on the destination. Derive it off-chain via ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deterministic-cea-conversion",
              children: "Deterministic CEA Conversion"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Outbound succeeds but the back-leg never reaches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Destination CEA's outer multicall is missing the self-call to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sendUniversalTxToUEA"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Include the self-call step inside the multicall. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#minimal-round-trip-dispatch",
              children: "Minimal round-trip dispatch"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx"
            }), " reverts with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NotExecutorModule"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Caller is not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNIVERSAL_EXECUTOR_MODULE"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Validate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender == UNIVERSAL_EXECUTOR_MODULE"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7"
            }), ") in your handler."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx"
            }), " reverts with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TxAlreadyExecuted"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Replay protection rejected a duplicate ", (0,jsx_runtime.jsx)(_components.code, {
              children: "txId"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected behaviour. The same back-leg was delivered twice; your idempotency guard is working."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Outbound to an external destination reverts with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "STF"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " under-sized the live $PC → routing-token swap inside UGPC"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Over-size ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), ". UGPC refunds the surplus to the calling contract. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#outbound-value-sizing",
              children: "Outbound Value Sizing"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EOA balance drains across many runs even though the contract is funded"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UGPC routes refunds to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "address(this)"
            }), ", not back to the EOA that called the dispatcher"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Plan a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "withdraw()"
            }), " path or treasury sweep on the dispatching contract. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#best-practices",
              children: "Best Practices"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Back-leg lands on Push but reverts with out-of-gas / insufficient ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$PC"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inbound execution on Push pays gas in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$PC"
            }), ", charged to the dispatching contract."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ensure your contract is funded with enough ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$PC"
            }), " for execution."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-use-this",
      children: "When to Use This"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use this pattern when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A Push Chain contract needs to call an external protocol (Aave, Uniswap, a custom contract on Ethereum) without requiring the user to be online at execution time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A governance or automation contract needs to execute an external action after an on-chain condition is met."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your app logic lives on Push Chain but state or liquidity lives on an external chain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You are building a cross-chain keeper, liquidator, or staking coordinator."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do not use it when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The user is online and can sign directly. User-initiated universal transactions are simpler."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your logic requires atomic rollback across both chains. Partial failure must be handled explicitly."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/inbound-to-push-chain",
          children: "Inbound Contract example"
        }), " to see External Chain → Push Chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/outbound-from-push-chain",
          children: "Outbound Contract example"
        }), " to see Push Chain → External Chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg",
          children: "Round-Trip Contract example"
        }), " to see Push Chain → External Chain → Push Chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Checkout ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/advanced-patterns/",
          children: "advanced patterns in Contract-Initiated Examples"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare with user-initiated flows in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-universal-transaction",
          children: "Send Universal Transaction"
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

/***/ 510103
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ConstantsDropdown)
/* harmony export */ });
/* harmony import */ var _theme_Details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56325);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
const CONSTANTS_MAP={CHAIN:{summary:'PushChain.CONSTANTS.CHAIN',values:['PushChain.CONSTANTS.CHAIN.PUSH_TESTNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT','PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.BNB_TESTNET','PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA','PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET']},CHAIN_FULL:{summary:'PushChain.CONSTANTS.CHAIN',values:['PushChain.CONSTANTS.CHAIN.PUSH_MAINNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT','PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET','PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET','PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET','PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET','PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET']},PUSH_NETWORK:{summary:'PushChain.CONSTANTS.PUSH_NETWORK',values:['PushChain.CONSTANTS.PUSH_NETWORK.TESTNET','PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET']},LIBRARY:{summary:'PushChain.CONSTANTS.LIBRARY',values:['PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6','PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM','PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS']},MOVEABLE_TOKEN:{summary:'PushChain.CONSTANTS.MOVEABLE.TOKEN',values:['PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.stETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.BNB','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthArb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthBase','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pBnb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.eth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.arb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.base','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.bnb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.sol','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.eth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.arb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.base','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.bsc','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.sol']},PAYABLE_TOKEN:{summary:'PushChain.CONSTANTS.PAYABLE.TOKEN',values:['PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.stETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.BNB','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.SOL','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDC']}};function ConstantsDropdown(_ref){let variant=_ref.variant;const _CONSTANTS_MAP$varian=CONSTANTS_MAP[variant],summary=_CONSTANTS_MAP$varian.summary,values=_CONSTANTS_MAP$varian.values;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{summary:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("summary",{children:summary}),className:"alert alert--minimal-api-table",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{paddingTop:'8px'},children:values.map(v=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:v},v))})});}

/***/ },

/***/ 303547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PushAPIReference)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(309751);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
/**
 * PushAPIReference component for rendering API documentation with consistent styling
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */function PushAPIReference(_ref){let children=_ref.children,_ref$showRequiredNoti=_ref.showRequiredNotice,showRequiredNotice=_ref$showRequiredNoti===void 0?true:_ref$showRequiredNoti,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ReferenceContainer,{className:className,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:["These\xA0",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"Arguments"}),"\xA0are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})([""]);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

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
        // 1788614848399
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
        // 1788614862069
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