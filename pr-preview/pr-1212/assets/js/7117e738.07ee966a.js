"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[54366],{

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
const site_docs_chain_03_build_09_contract_initiated_multichain_execution_mdx_711_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-contract-initiated-multichain-execution","title":"Contract-Initiated Multichain Execution","description":"Contract-Initiated Multichain Execution | Build | Push Chain Docs","source":"@site/docs/chain/03-build/09-Contract-Initiated-Multichain-Execution.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/contract-initiated-multichain-execution","permalink":"/push-chain-website/pr-preview/pr-1212/docs/chain/build/contract-initiated-multichain-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/09-Contract-Initiated-Multichain-Execution.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"id":"docs-chain-build-contract-initiated-multichain-execution","title":"Contract-Initiated Multichain Execution","hide_title":false,"slug":"./contract-initiated-multichain-execution","displayed_sidebar":"pushChainSidebar","sidebar_position":9,"image":"/assets/docs/previews/docs_chain_build--contract-initiated_multichain_execution.png"},"sidebar":"pushChainSidebar","previous":{"title":"Send Multichain Transactions","permalink":"/push-chain-website/pr-preview/pr-1212/docs/chain/build/send-multichain-transactions"},"next":{"title":"Track Universal Transaction","permalink":"/push-chain-website/pr-preview/pr-1212/docs/chain/build/track-universal-transaction"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 1 modules
var Details = __webpack_require__(989746);
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
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
  "value": "Interfaces and Constants",
  "id": "interfaces-and-constants",
  "level": 2
}, {
  "value": "IUniversalGatewayPC",
  "id": "iuniversalgatewaypc",
  "level": 3
}, {
  "value": "1. Import it directly from the Push Chain Core Repository",
  "id": "1-import-it-directly-from-the-push-chain-core-repository",
  "level": 4
}, {
  "value": "Or 2. Define the interface manually in your Solidity contract",
  "id": "or-2-define-the-interface-manually-in-your-solidity-contract",
  "level": 4
}, {
  "value": "UNIVERSAL_EXECUTOR_MODULE",
  "id": "universal_executor_module",
  "level": 3
}, {
  "value": "executeUniversalTx (Inbound Handler)",
  "id": "executeuniversaltx-inbound-handler",
  "level": 3
}, {
  "value": "Minimal Integration Pattern",
  "id": "minimal-integration-pattern",
  "level": 2
}, {
  "value": "Outbound Flow: Push Chain → External Chain",
  "id": "outbound-flow-push-chain--external-chain",
  "level": 2
}, {
  "value": "Approve and call UGPC",
  "id": "approve-and-call-ugpc",
  "level": 3
}, {
  "value": "TSS network picks up the event",
  "id": "tss-network-picks-up-the-event",
  "level": 3
}, {
  "value": "CEA executes on the external chain",
  "id": "cea-executes-on-the-external-chain",
  "level": 3
}, {
  "value": "Inbound Flow: External Chain → Push Chain",
  "id": "inbound-flow-external-chain--push-chain",
  "level": 2
}, {
  "value": "Security: validate the caller",
  "id": "security-validate-the-caller",
  "level": 3
}, {
  "value": "Replay protection",
  "id": "replay-protection",
  "level": 3
}, {
  "value": "Decoding the payload",
  "id": "decoding-the-payload",
  "level": 3
}, {
  "value": "Execution Lifecycle",
  "id": "execution-lifecycle",
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
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        children: "Contract-Initiated Multichain Execution | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Contract-Initiated Multichain Execution is a distinct capability that lets a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain smart contract trigger execution on an external chain"
      }), " through its CEA, without any live user interaction at call time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This enables Push contracts to autonomously interact with external protocols, call contracts on Ethereum or BNB Chain, and optionally receive inbound payloads back on Push Chain, all driven by on-chain contract code."
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
      }), ". Any call into your Push contract can trigger execution on an external chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples include liquidation triggers, scheduled jobs, governance outcomes, and user actions that fan out across chains."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contract-cea",
      children: "Contract CEA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every Push Chain smart contract has a deterministically derived ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain Executor Account (CEA)"
      }), " on each supported external chain. This is the same concept used in user-initiated transactions, but it is bound to the contract address instead of a user wallet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The contract CEA:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is derived from the Push contract's address, not from any user"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is lazily deployed on first use by the TSS network"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Acts as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " on the external chain when the contract initiates execution there"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Gas is taken in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "$PC"
        }), " on Push Chain and converted to the native token of the external chain"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is scoped to the contract, not to any user"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    PC[\"<b>Push Contract</b><br/>Push Chain\"]\n    UGPC[\"<b>UGPC</b><br/>UniversalGatewayPC<br/>Push Chain\"]\n    CEA[\"<b>Contract CEA</b><br/>External Chain\"]\n    EXT[\"<b>Target Contract</b><br/>External Chain\"]\n\n    PC -->|\"sendUniversalTxOutbound()\"| UGPC -->|\"TSS relay\"| CEA --> EXT\n\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style UGPC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style CEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style EXT fill:#1e3a8a,stroke:#60a5fa,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universalgatewaypc-ugpc",
      children: "UniversalGatewayPC (UGPC)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UGPC is the on-chain gateway contract on Push Chain through which all outbound cross-chain calls are routed. Your contract calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UGPC.sendUniversalTxOutbound()"
      }), ", which relays the payload and, when applicable, burns or locks PRC20 tokens. It then emits the event that the TSS network listens for."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal-executor-module",
      children: "Universal Executor Module"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UNIVERSAL_EXECUTOR_MODULE"
      }), " is the privileged address on Push Chain authorized to deliver inbound cross-chain payloads. When a CEA executes on an external chain and a response needs to come back, the module calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx()"
      }), " on your Push contract. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Only this address should be trusted to deliver inbound payloads"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Always validate inbound in your contract",
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Always validate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " in your inbound handler. Not doing so will result in unauthorized execution."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interfaces-and-constants",
      children: "Interfaces and Constants"
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
      }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "0x00000000000000000000000000000000000000C1"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The on-chain gateway your contract calls to dispatch an outbound cross-chain transaction. UGPC burns or locks the PRC20 tokens, collects the protocol fee from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.value"
      }), ", and emits the event that the TSS network listens for."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Commonly used for"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggering a contract call on an external chain from a Push Chain contract"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bridging PRC20 tokens alongside a cross-chain payload"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dispatching a fire-and-forget outbound with no expected inbound response"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In order to use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IUniversalGatewayPC"
      }), " in your contract, you can either:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-import-it-directly-from-the-push-chain-core-repository",
      children: "1. Import it directly from the Push Chain Core Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "import \"push-chain-core-contracts/src/Interfaces/IUniversalGatewayPC.sol\";\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details/* default */.A, {
      summary: "For Foundry Developers",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Do the additional steps to enable the same in your Foundry:", (0,jsx_runtime.jsx)("br", {})]
      }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Run forge install"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "forge install pushchain/push-chain-core-contracts\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        start: "2",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Add remappings to your ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "foundry.toml"
          }), " file"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-toml",
          children: "remappings = [\"push-chain-core-contracts/=lib/push-chain-core-contracts/\"]\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "or-2-define-the-interface-manually-in-your-solidity-contract",
      children: "Or 2. Define the interface manually in your Solidity contract"
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Use the following interface directly in your contract",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "pragma solidity ^0.8.0;\n\nstruct UniversalOutboundTxRequest {\n    bytes   recipient;        // CEA or target address on the external chain (bytes-encoded)\n    address token;            // PRC20 token address on Push Chain to bridge (address(0) for none)\n    uint256 amount;           // Amount of PRC20 to bridge\n    uint256 gasLimit;         // Gas limit for external-chain execution (0 = default)\n    bytes   payload;          // Calldata for the CEA to execute on the external chain\n    address revertRecipient;  // Address to receive funds if the tx reverts on the external chain\n}\n\ninterface IUniversalGatewayPC {\n    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "/**\n * @notice Dispatches an outbound cross-chain transaction through the Push Chain gateway.\n * @dev msg.value must cover the protocol fee. Approve UGPC for `req.amount` before calling if bridging tokens.\n * @param req The outbound transaction request struct.\n */\nfunction sendUniversalTxOutbound(\n    UniversalOutboundTxRequest calldata req\n) external payable;\n"
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
              children: ["PRC20 token address on Push Chain to bridge. Use ", (0,jsx_runtime.jsx)(_components.code, {
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
              children: ["Amount of PRC20 to bridge. Set to ", (0,jsx_runtime.jsx)(_components.code, {
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
              children: ["Gas limit for external-chain execution. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "0"
              }), " to let UGPC estimate it automatically. Not recommended for advanced scenarios."]
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
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "On-chain usage",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "function dispatchOutbound(\n    address token,\n    uint256 amount,\n    bytes calldata recipient,\n    bytes calldata payload,\n    address revertRecipient\n) external payable {\n    if (amount > 0) {\n        IPRC20(token).approve(ugpc, amount);\n    }\n\n    IUniversalGatewayPC(ugpc).sendUniversalTxOutbound{value: msg.value}(\n        UniversalOutboundTxRequest({\n            recipient:       recipient,\n            token:           token,\n            amount:          amount,\n            gasLimit:        0,\n            payload:         payload,\n            revertRecipient: revertRecipient\n        })\n    );\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal_executor_module",
      children: "UNIVERSAL_EXECUTOR_MODULE"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The trusted executor module on Push Chain that delivers inbound cross-chain payloads to your contract."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployed Address"
      }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "executeuniversaltx-inbound-handler",
      children: "executeUniversalTx (Inbound Handler)"
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
      children: ["The function your Push Chain contract exposes to receive inbound cross-chain payloads. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UNIVERSAL_EXECUTOR_MODULE"
      }), " calls this after the CEA has executed on the external chain and a response needs to be delivered back to Push Chain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Commonly used for"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Receiving staking confirmations, swap results, or any response from external chain execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updating on-chain state based on what the contract's CEA did on another chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triggering further logic on Push Chain after an external event completes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "/**\n * @notice Delivers an inbound cross-chain payload to this contract.\n * @dev Only callable by UNIVERSAL_EXECUTOR_MODULE. Must validate msg.sender and guard against replay via txId.\n * @param sourceChainNamespace CAIP-2 namespace of the originating chain, e.g. \"eip155:97\".\n * @param ceaAddress           CEA address on the source chain, bytes-encoded.\n * @param payload              ABI-encoded action data from the external chain.\n * @param amount               Amount of PRC20 tokens bridged with this inbound tx.\n * @param prc20                PRC20 token address on Push Chain.\n * @param txId                 Unique cross-chain transaction identifier for replay protection.\n */\nfunction executeUniversalTx(\n    string  calldata sourceChainNamespace,\n    bytes   calldata ceaAddress,\n    bytes   calldata payload,\n    uint256          amount,\n    address          prc20,\n    bytes32          txId\n) external payable;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Always validate the caller",
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Only ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNIVERSAL_EXECUTOR_MODULE"
        }), " is authorized to call this function. Always guard it with an ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onlyUniversalExecutor"
        }), " modifier and track executed ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "TxIds"
        }), " to prevent replay attacks."]
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
              children: "Amount of PRC20 tokens bridged with this inbound transaction."
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
              children: "PRC20 token address on Push Chain corresponding to the bridged asset."
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
              children: "Unique cross-chain transaction identifier. Use this to prevent replay attacks."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "On-chain usage",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "mapping(bytes32 => bool) public executedTxIds;\naddress public universalExecutorModule = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;\n\nmodifier onlyUniversalExecutor() {\n    if (msg.sender != universalExecutorModule) revert NotExecutorModule();\n    _;\n}\n\nfunction executeUniversalTx(\n    string  calldata sourceChainNamespace,\n    bytes   calldata ceaAddress,\n    bytes   calldata payload,\n    uint256          amount,\n    address          prc20,\n    bytes32          txId\n) external payable onlyUniversalExecutor {\n    if (executedTxIds[txId]) revert TxAlreadyExecuted();\n    executedTxIds[txId] = true;\n\n    // Decode payload and handle the inbound action\n    (uint8 action, address user,) = abi.decode(payload, (uint8, address, bytes));\n\n    if (action == 0) {\n        stakedBalance[user][prc20] += amount;\n        emit Staked(user, prc20, amount, txId);\n    }\n\n    emit InboundReceived(txId, sourceChainNamespace, ceaAddress, prc20, amount);\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "minimal-integration-pattern",
      children: "Minimal Integration Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The following contract shows the minimum integration surface for contract-initiated multichain execution. It dispatches an outbound call through UGPC, accepts an inbound callback through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx()"
      }), ", validates the trusted executor module, and prevents replay using txId."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Outbound"
        }), ": calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dispatchOutbound()"
        }), " → optionally approves UGPC → calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sendUniversalTxOutbound()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inbound"
        }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UNIVERSAL_EXECUTOR_MODULE"
        }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executeUniversalTx()"
        }), " → contract validates caller → replay protects with txId → decodes payload and applies app logic"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "Minimal Integration Pattern",
      fileName: "MinimalIntegrationPattern.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.26;\n\n/// @notice Minimal outbound request type for UGPC.\nstruct UniversalOutboundTxRequest {\n    bytes recipient;\n    address token;\n    uint256 amount;\n    uint256 gasLimit;\n    bytes payload;\n    address revertRecipient;\n}\n\n/// @notice Minimal UGPC interface.\ninterface IUniversalGatewayPC {\n    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;\n}\n\n/// @notice Minimal PRC20 interface for approvals.\ninterface IPRC20 {\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\ncontract MinimalContractInitiatedExecutor {\n    // -------------------------------------------------------------------------\n    // Constants / Config\n    // -------------------------------------------------------------------------\n\n    address public immutable ugpc;\n    address public immutable universalExecutorModule;\n\n    // -------------------------------------------------------------------------\n    // State\n    // -------------------------------------------------------------------------\n\n    mapping(bytes32 => bool) public executedTxIds;\n    mapping(address => uint256) public creditedAmount;\n\n    // -------------------------------------------------------------------------\n    // Events\n    // -------------------------------------------------------------------------\n\n    event OutboundDispatched(\n        bytes indexed recipient,\n        address indexed token,\n        uint256 amount,\n        bytes payload,\n        address revertRecipient\n    );\n\n    event InboundExecuted(\n        bytes32 indexed txId,\n        string sourceChainNamespace,\n        bytes ceaAddress,\n        address prc20,\n        uint256 amount\n    );\n\n    // -------------------------------------------------------------------------\n    // Errors\n    // -------------------------------------------------------------------------\n\n    error NotUniversalExecutor();\n    error TxAlreadyExecuted();\n    error ZeroAddress();\n    error UnsupportedAction();\n\n    // -------------------------------------------------------------------------\n    // Constructor\n    // -------------------------------------------------------------------------\n\n    constructor(address _ugpc, address _universalExecutorModule) {\n        if (_ugpc == address(0) || _universalExecutorModule == address(0)) {\n            revert ZeroAddress();\n        }\n\n        ugpc = _ugpc;\n        universalExecutorModule = _universalExecutorModule;\n    }\n\n    // -------------------------------------------------------------------------\n    // Modifiers\n    // -------------------------------------------------------------------------\n\n    modifier onlyUniversalExecutor() {\n        if (msg.sender != universalExecutorModule) revert NotUniversalExecutor();\n        _;\n    }\n\n    // -------------------------------------------------------------------------\n    // Outbound: Push Chain -> External Chain\n    // -------------------------------------------------------------------------\n\n    /// @notice Dispatch an outbound cross-chain execution from this contract.\n    /// @dev If bridging PRC20 tokens, approve UGPC before calling.\n    /// @param token PRC20 token on Push Chain. Use address(0) if not bridging tokens.\n    /// @param amount Amount of PRC20 to bridge. Use 0 if not bridging.\n    /// @param recipient Bytes-encoded CEA or target address on the external chain.\n    /// @param gasLimit Gas limit for the external-chain execution. Use 0 for default.\n    /// @param payload ABI-encoded calldata or app payload for the external-chain action.\n    /// @param revertRecipient Address to receive bridged funds if the external tx reverts.\n    function dispatchOutbound(\n        address token,\n        uint256 amount,\n        bytes calldata recipient,\n        uint256 gasLimit,\n        bytes calldata payload,\n        address revertRecipient\n    ) external payable {\n        if (revertRecipient == address(0)) revert ZeroAddress();\n\n        if (amount > 0) {\n            if (token == address(0)) revert ZeroAddress();\n            IPRC20(token).approve(ugpc, amount);\n        }\n\n        IUniversalGatewayPC(ugpc).sendUniversalTxOutbound{value: msg.value}(\n            UniversalOutboundTxRequest({\n                recipient: recipient,\n                token: token,\n                amount: amount,\n                gasLimit: gasLimit,\n                payload: payload,\n                revertRecipient: revertRecipient\n            })\n        );\n\n        emit OutboundDispatched(recipient, token, amount, payload, revertRecipient);\n    }\n\n    // -------------------------------------------------------------------------\n    // Inbound: External Chain -> Push Chain\n    // -------------------------------------------------------------------------\n\n    /// @notice Receive an inbound cross-chain payload.\n    /// @dev Only UNIVERSAL_EXECUTOR_MODULE should be allowed to call this.\n    ///      Replay protect using txId.\n    ///      This example assumes payload is encoded as:\n    ///      abi.encode(uint8 action, address beneficiary)\n    ///\n    ///      Example actions:\n    ///      0 = CREDIT beneficiary with bridged amount\n    function executeUniversalTx(\n        string calldata sourceChainNamespace,\n        bytes calldata ceaAddress,\n        bytes calldata payload,\n        uint256 amount,\n        address prc20,\n        bytes32 txId\n    ) external payable onlyUniversalExecutor {\n        if (executedTxIds[txId]) revert TxAlreadyExecuted();\n        executedTxIds[txId] = true;\n\n        (uint8 action, address beneficiary) = abi.decode(payload, (uint8, address));\n\n        if (action == 0) {\n            creditedAmount[beneficiary] += amount;\n        } else {\n            revert UnsupportedAction();\n        }\n\n        emit InboundExecuted(txId, sourceChainNamespace, ceaAddress, prc20, amount);\n    }\n\n    receive() external payable {}\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "outbound-flow-push-chain--external-chain",
      children: "Outbound Flow: Push Chain → External Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "approve-and-call-ugpc",
      children: "Approve and call UGPC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If bridging tokens, approve UGPC to pull the PRC20 amount before calling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "if (amount > 0) {\n    IPRC20(token).approve(ugpc, amount);\n}\n\nUniversalOutboundTxRequest memory req = UniversalOutboundTxRequest({\n    recipient:       recipient,       // bytes-encoded CEA or target on external chain\n    token:           token,           // PRC20 on Push Chain\n    amount:          amount,\n    gasLimit:        gasLimit,        // 0 = network default\n    payload:         payload,         // ABI-encoded calldata for the CEA to execute\n    revertRecipient: revertRecipient  // fallback address if external tx reverts\n});\n\nIUniversalGatewayPC(ugpc).sendUniversalTxOutbound{value: msg.value}(req);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "msg.value"
      }), " must cover protocol fees. The UGPC burns the PRC20 tokens and emits an event the TSS network listens for."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tss-network-picks-up-the-event",
      children: "TSS network picks up the event"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The TSS validators observe the UGPC event, derive the contract's CEA on the target chain, and submit the transaction. If the CEA has not been deployed yet, the TSS network deploys it on first use."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cea-executes-on-the-external-chain",
      children: "CEA executes on the external chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The CEA runs the encoded ", (0,jsx_runtime.jsx)(_components.code, {
        children: "payload"
      }), " on the target chain. From the external contract's perspective, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), " is the contract's CEA address. It has no awareness that the call originated from Push Chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inbound-flow-external-chain--push-chain",
      children: "Inbound Flow: External Chain → Push Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the CEA on the external chain needs to send a response back to Push Chain, it triggers an inbound call. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UNIVERSAL_EXECUTOR_MODULE"
      }), " delivers this by calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx()"
      }), " on your contract."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-validate-the-caller",
      children: "Security: validate the caller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "modifier onlyUniversalExecutor() {\n    if (msg.sender != universalExecutorModule) {\n        revert NotExecutorModule();\n    }\n    _;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UNIVERSAL_EXECUTOR_MODULE"
      }), " address is authorized to call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx()"
      }), ". Anyone else calling it with fabricated data must be rejected."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "replay-protection",
      children: "Replay protection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each inbound call carries a unique ", (0,jsx_runtime.jsx)(_components.code, {
        children: "txId"
      }), ". Track executed IDs to prevent replay:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "mapping(bytes32 => bool) public executedTxIds;\n\nfunction executeUniversalTx(..., bytes32 txId) external payable onlyUniversalExecutor {\n    if (executedTxIds[txId]) revert TxAlreadyExecuted();\n    executedTxIds[txId] = true;\n\n    _handleInboundPayload(payload, prc20, amount, txId);\n    emit InboundReceived(txId, sourceChainNamespace, ceaAddress, prc20, amount);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decoding-the-payload",
      children: "Decoding the payload"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "payload"
      }), " passed to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx"
      }), " contains ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UniversalPayload.data"
      }), " — an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abi.encode"
      }), "d blob. Your contract defines the encoding. A typical pattern:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// abi.encode(uint8 action, address user, bytes executionPayload)\n\nfunction _handleInboundPayload(\n    bytes calldata data,\n    address prc20,\n    uint256 amount,\n    bytes32 txId\n) internal {\n    (uint8 action, address user,) = abi.decode(data, (uint8, address, bytes));\n\n    if (action == 0) {\n        // e.g. STAKE: credit the user\n        stakedBalance[user][prc20] += amount;\n        emit Staked(user, prc20, amount, txId);\n    } else if (action == 1) {\n        // e.g. UNSTAKE: debit the user\n        if (stakedBalance[user][prc20] < amount) revert InsufficientStake();\n        stakedBalance[user][prc20] -= amount;\n        emit Unstaked(user, prc20, amount);\n    } else {\n        revert UnsupportedAction();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "execution-lifecycle",
      children: "Execution Lifecycle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Contract"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Approves UGPC for PRC20, calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sendUniversalTxOutbound()"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " for fees"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UGPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Burns/locks the PRC20 tokens, emits an outbound event"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TSS Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Picks up the event, constructs a transaction from the contract's CEA on the target chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External Chain"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["CEA executes the encoded payload; target contract sees CEA as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TSS Network (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If the CEA sends a response, TSS relays it back to Push Chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UNIVERSAL_EXECUTOR_MODULE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx()"
            }), " on the originating Push contract"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Contract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decodes payload, updates state, emits events"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Steps 5–7 only occur when the external interaction produces an inbound response. A fire-and-forget outbound has no inbound step."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validate inbound caller"
          }), (0,jsx_runtime.jsx)("br", {}), "\nOnly ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "UNIVERSAL_EXECUTOR_MODULE"
          }), " can legitimately deliver inbound payloads. Always guard ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "executeUniversalTx()"
          }), " with the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "onlyUniversalExecutor"
          }), " modifier. Anyone else calling it with fabricated data must be rejected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Replay protection"
          }), (0,jsx_runtime.jsx)("br", {}), "\nEach inbound call carries a unique ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "txId"
          }), ". Maintain a ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "mapping(bytes32 => bool) executedTxIds"
          }), " and revert on duplicates. Without this, the same result could be applied more than once."]
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
            children: "Inbound execution requires $PC"
          }), (0,jsx_runtime.jsx)("br", {}), "\nThe CEA inbound to Push Chain needs $PC for execution fees. Funding your Push Chain contract with $PC is your responsibility."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No cross-chain atomicity"
          }), (0,jsx_runtime.jsx)("br", {}), "\nThe outbound dispatch and the external execution are not atomic. Push-side state changes commit independently of whether the external call succeeds. Design accordingly. Defer critical state commits to the inbound handler, or use an explicit pending/failed state machine."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Inbound timing is not predictable"
          }), (0,jsx_runtime.jsx)("br", {}), "\nInbound delivery depends on external chain finality and TSS observation. On slower chains this can take some time. Do not design contracts that require an inbound within a specific block window."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Emit an event at dispatch time."
        }), " Include a request ID, target address, and operation type so inbound payloads can be correlated with the original outbound call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use per-dispatch request IDs."
        }), " If multiple outbound calls can be in flight simultaneously, track them by ID to route inbound results unambiguously."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep inbound handlers lean."
        }), " The inbound handler runs as a Push Chain transaction submitted by the module. Decode payload, update state, emit events. Avoid cascading outbound calls inside it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protect inbound handlers with nonReentrant."
        }), " The handler is called by an external module account, so apply re-entrancy guards if it calls other contracts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fund the Push-side contract before dispatching."
        }), " Verify the push-side contract has sufficient $PC to cover inbound execution fees."]
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No cross-chain atomicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A failed external call does not revert Push-side state. Handle partial failure explicitly."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CEA as msg.sender"
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
            children: ["Target chains must be supported by the TSS network. Supported chains are enumerated in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.CHAIN"
            }), "."]
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
        children: ["Understand the routing model and CEA concepts this builds on with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/understanding-universal-transactions",
          children: "Understanding Universal Transactions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare with user-initiated flows in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-universal-transaction",
          children: "Send Universal Transaction"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sequence multi-step cross-chain flows with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-multichain-transactions",
          children: "Send Multichain Transactions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Monitor dispatched transaction status with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/track-universal-transaction",
          children: "Track Universal Transaction"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore Push Chain Solidity utilities and system interfaces in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-helpers",
          children: "Contract Helpers"
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

/***/ 303547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PushAPIReference)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(828652);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
/**
 * PushAPIReference component for rendering API documentation with consistent styling
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */function PushAPIReference(_ref){let{children,showRequiredNotice=true,className=''}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ReferenceContainer,{className:className,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:["These",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"Arguments"}),"are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})([""]);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

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
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 2 modules
var styled_components_browser_esm = __webpack_require__(828652);
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
        // 1776395511377
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
        // 1776395517229
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