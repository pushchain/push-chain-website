"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[7558],{

/***/ 444128
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_02_contract_initiated_examples_01_example_inbound_to_push_chain_mdx_6b9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-02-contract-initiated-examples-01-example-inbound-to-push-chain-mdx-6b9.json
const site_docs_chain_03_build_02_contract_initiated_examples_01_example_inbound_to_push_chain_mdx_6b9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/contract-initiated-examples/docs-chain-build-examples-inbound-to-push-chain","title":"Inbound to Push Chain","description":"Inbound to Push Chain | Contract-Initiated Examples | Build | Push Chain Docs","source":"@site/docs/chain/03-build/02-contract-initiated-examples/01-Example-Inbound-To-Push-Chain.mdx","sourceDirName":"chain/03-build/02-contract-initiated-examples","slug":"/chain/build/contract-initiated-examples/inbound-to-push-chain","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/contract-initiated-examples/inbound-to-push-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/02-contract-initiated-examples/01-Example-Inbound-To-Push-Chain.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-build-examples-inbound-to-push-chain","title":"Inbound to Push Chain","hide_title":false,"slug":"./inbound-to-push-chain","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_build_examples--inbound_to_push_chain.png"},"sidebar":"pushChainSidebar","previous":{"title":"Contract-Initiated Examples","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/contract-initiated-examples"},"next":{"title":"Outbound from Push Chain","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/contract-initiated-examples/outbound-from-push-chain"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
// EXTERNAL MODULE: ./src/components/GitHubRepo/index.ts + 1 modules
var GitHubRepo = __webpack_require__(531855);
;// ./docs/chain/03-build/02-contract-initiated-examples/01-Example-Inbound-To-Push-Chain.mdx


const frontMatter = {
	id: 'docs-chain-build-examples-inbound-to-push-chain',
	title: 'Inbound to Push Chain',
	hide_title: false,
	slug: './inbound-to-push-chain',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_build_examples--inbound_to_push_chain.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/




const toc = [{
  "value": "What this example shows",
  "id": "what-this-example-shows",
  "level": 2
}, {
  "value": "Identity model",
  "id": "identity-model",
  "level": 2
}, {
  "value": "Solidity Code (Sepolia side)",
  "id": "solidity-code-sepolia-side",
  "level": 2
}, {
  "value": "Solidity Code (Push side)",
  "id": "solidity-code-push-side",
  "level": 2
}, {
  "value": "Source Code",
  "id": "source-code",
  "level": 2
}, {
  "value": "Run",
  "id": "run",
  "level": 3
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "What can go wrong",
  "id": "what-can-go-wrong",
  "level": 2
}, {
  "value": "Related",
  "id": "related",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
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
        children: "Inbound to Push Chain | Contract-Initiated Examples | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A pair of contracts that demonstrate the inbound direction: a contract on Sepolia (or any supported external chain) calls the per-chain Universal Gateway, and the TSS network relays the call to a contract on Push Chain. The Push contract sees the dispatching contract's UEA as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "msg.sender"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the conceptual background (UEAs, the Universal Gateway, the wire format), see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-multichain-execution",
        children: "Contract-Initiated Multichain Execution"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-this-example-shows",
      children: "What this example shows"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Details"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External chain (Sepolia) to Push Chain. One-way."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A regular EOA on Sepolia calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "triggerOnPush(...)"
            }), " on the Sepolia dispatcher, paying the gateway fee in ETH."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity on Push"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            }), " on the Push target equals ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UEA(SepoliaDispatcher)"
            }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IUEAFactory.getOriginForUEA"
            }), " to recover the origin chain and the contract's Sepolia address."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Funds movement"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["None. The example dispatches a payload only. The same surface supports bridging native ETH (", (0,jsx_runtime.jsx)(_components.code, {
              children: "token = 0"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount > 0"
            }), "); see the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/docs/chain/build/contract-initiated-examples/advanced-patterns",
              children: "Advanced Patterns"
            }), " for funds variants."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Verified on"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sepolia + Donut Testnet."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "identity-model",
      children: "Identity model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When an external-chain contract calls the per-chain Universal Gateway, the TSS validators relay the call to Push Chain and execute it from the contract's UEA on Push."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The UEA is always deterministic, derived from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(chainNamespace, chainId, contractAddress)"
      }), ". From the Push target's perspective the UEA is a normal address."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    EOA([Sepolia EOA])\n    EXT[<b>Sepolia Contract</b><br/>EthereumInboundDispatcher]\n    UG[<b>UniversalGateway</b><br/>Sepolia]\n    UEA[<b>Caller's UEA</b><br/>Push Chain]\n    PC[<b>PushCounter</b><br/>Push Chain]\n\n    EOA -->|\"triggerOnPush()\"| EXT\n    EXT -->|\"sendUniversalTx{value}()\"| UG\n    UG -->|\"TSS relay\"| UEA\n    UEA -->|\"increment()\"| PC\n\n    style EXT fill:#1e3a8a,stroke:#60a5fa,color:#fff\n    style UG fill:#1e3a8a,stroke:#60a5fa,color:#fff\n    style UEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Sepolia contract's UEA on Push is computable off-chain via ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/utility-functions/#derive-executor-account",
        children: "deriveExecutorAccount"
      }), ", so a Push-side target can pre-authorize that UEA before the first cross-chain call."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solidity-code-sepolia-side",
      children: "Solidity Code (Sepolia side)"
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "Sepolia-side Inbound Dispatcher",
      fileName: "EthereumInboundDispatcher.sol",
      url: "https://github.com/pushchain/push-chain-examples/blob/main/core-sdk-functions/contract-initiated-inbound-execution/src/EthereumInboundDispatcher.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.26;\n\nstruct Multicall {\n    address to;\n    uint256 value;\n    bytes data;\n}\n\nstruct UniversalPayload {\n    address to;\n    uint256 value;\n    bytes data;\n    uint256 gasLimit;\n    uint256 maxFeePerGas;\n    uint256 maxPriorityFeePerGas;\n    uint256 nonce;\n    uint256 deadline;\n    uint8 vType;\n}\n\nstruct UniversalTxRequest {\n    address recipient;\n    address token;\n    uint256 amount;\n    bytes payload;\n    address revertRecipient;\n    bytes signatureData;\n}\n\ninterface IUniversalGateway {\n    function sendUniversalTx(UniversalTxRequest calldata req) external payable;\n}\n\ncontract EthereumInboundDispatcher {\n    /// @notice Per-chain UniversalGateway (Sepolia, BNB Testnet, etc.). Set via constructor.\n    address public immutable gateway;\n\n    /// @notice 4-byte marker the destination UEA looks for to decode multicall.\n    bytes4 internal constant UEA_MULTICALL_SELECTOR = 0x2cc2842d;\n\n    event InboundDispatched(address indexed pushTarget, bytes pushCalldata, uint256 nonce, uint256 fee);\n\n    error ZeroAddress();\n\n    constructor(address _gateway) {\n        if (_gateway == address(0)) revert ZeroAddress();\n        gateway = _gateway;\n    }\n\n    /// @notice Trigger an action on Push Chain. The contract's UEA on Push\n    /// (deterministically derived from this contract's address) becomes the\n    /// `msg.sender` that calls `pushTarget` with `pushCalldata`.\n    function triggerOnPush(\n        address pushTarget,\n        bytes calldata pushCalldata,\n        uint256 nonce,\n        address revertRecipient\n    ) external payable {\n        if (pushTarget == address(0) || revertRecipient == address(0)) revert ZeroAddress();\n\n        // 1) Wrap (target, calldata) into the UEA's multicall format.\n        Multicall[] memory calls = new Multicall[](1);\n        calls[0] = Multicall({to: pushTarget, value: 0, data: pushCalldata});\n        bytes memory multicallData = abi.encodePacked(UEA_MULTICALL_SELECTOR, abi.encode(calls));\n\n        // 2) Wrap the multicall in the UniversalPayload struct the UEA expects.\n        //    Because `data` is multicall-wrapped (starts with UEA_MULTICALL_SELECTOR),\n        //    the UEA branches into _handleMulticall and IGNORES `to`. Conventionally\n        //    set to address(0). If you instead pass raw single-call calldata (no\n        //    selector prefix), the UEA does `to.call(data)` and `to` MUST be the\n        //    real target.\n        bytes memory universalPayload = abi.encode(\n            address(0),         // to: ignored when data is multicall-wrapped (this example)\n            uint256(0),         // value\n            multicallData,      // data\n            uint256(1e7),       // gasLimit (matches SDK default)\n            uint256(1e10),      // maxFeePerGas (10 gwei)\n            uint256(0),         // maxPriorityFeePerGas\n            nonce,              // nonce: UEA nonce on Push\n            uint256(9999999999),// deadline\n            uint8(0)            // vType = universalTxVerification\n        );\n\n        // 3) Build the gateway request and dispatch. recipient is always zero\n        //    on the gateway request; the real Push-side target is inside payload.\n        UniversalTxRequest memory req = UniversalTxRequest({\n            recipient: address(0),\n            token: address(0),\n            amount: 0,\n            payload: universalPayload,\n            revertRecipient: revertRecipient,\n            signatureData: \"\"\n        });\n\n        IUniversalGateway(gateway).sendUniversalTx{value: msg.value}(req);\n\n        emit InboundDispatched(pushTarget, pushCalldata, nonce, msg.value);\n    }\n\n    receive() external payable {}\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The wire format is rigid. The Universal Gateway expects a specific encoding (UniversalPayload with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vType = 0"
      }), ", multicall data prefixed with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x2cc2842d"
      }), " sentinel, gateway request ", (0,jsx_runtime.jsx)(_components.code, {
        children: "recipient"
      }), " always zero). Deviations cause TSS to silently drop the relay."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solidity-code-push-side",
      children: "Solidity Code (Push side)"
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "Push-Side Counter Target",
      fileName: "PushCounter.sol",
      url: "https://github.com/pushchain/push-chain-examples/blob/main/core-sdk-functions/contract-initiated-inbound-execution/src/PushCounter.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.26;\n\ncontract PushCounter {\n    uint256 public count;\n    address public lastCaller;\n\n    event Incremented(address indexed caller, uint256 newCount);\n\n    function increment() external {\n        count += 1;\n        lastCaller = msg.sender;\n        emit Incremented(msg.sender, count);\n    }\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Push-side counter is intentionally trivial. After the inbound lands, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lastCaller"
      }), " will be the Sepolia dispatcher's UEA address, not the Sepolia EOA that started the chain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "Replay protection is handled by the UEA, not by your target",
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["The Sepolia caller's UEA on Push is a smart account with its own internal nonce. The UEA increments that nonce before forwarding the call to your target, so the same ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(payload, nonce)"
        }), " cannot be relayed twice. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Your target contract does NOT need to validate the caller or guard against replay."
        }), " It can be a plain Solidity function like the counter above."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executeUniversalTx"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "txId"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UNIVERSAL_EXECUTOR_MODULE"
        }), " pattern you may have seen elsewhere is for a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "different"
        }), " path: the round-trip back-leg, where TSS delivers an inbound from your own contract's CEA back to your Push contract's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executeUniversalTx"
        }), " callback. That handler is the one that needs guards. See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg",
          children: "Round-Trip with Auto Back-Leg"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-code",
      children: "Source Code"
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Contract-Initiated Inbound Execution",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-inbound-execution",
      description: "A Sepolia dispatcher contract and a Push-side counter target, plus a runner that deploys both, encodes increment() calldata, calls triggerOnPush() on Sepolia, and watches the Push counter advance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "run",
      children: "Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The runner deploys both contracts (Sepolia dispatcher + Push counter), encodes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increment()"
      }), " calldata, calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "triggerOnPush()"
      }), " on Sepolia, and watches the Push counter advance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone https://github.com/pushchain/push-chain-examples.git\ncd push-chain-examples/core-sdk-functions/contract-initiated-inbound-execution\n\nforge build\nnpm install\ncp .env.sample .env\n# Edit .env: set ETH_PRIVATE_KEY (funded Sepolia EOA) and PUSH_PRIVATE_KEY\n# (a Push native wallet for the destination counter deploy).\nnpm start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Foundry and Node.js v18+."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A Sepolia EOA with at least 0.05 ETH (deploy + gateway fee + headroom). ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.alchemy.com/faucets/ethereum-sepolia",
          children: "Sepolia faucet"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A Push native wallet with at least 1 PC for the Push-side counter deploy. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://faucet.push.org",
          children: "Push faucet"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-can-go-wrong",
      children: "What can go wrong"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sepolia tx reverts at the gateway"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wire format mismatch (missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UEA_MULTICALL_SELECTOR"
            }), " prefix, wrong ", (0,jsx_runtime.jsx)(_components.code, {
              children: "vType"
            }), ", non-zero ", (0,jsx_runtime.jsx)(_components.code, {
              children: "recipient"
            }), " on the gateway request)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the encoder in this example as a template. Do not improvise the encoding."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sepolia tx succeeds but Push counter never advances"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " was below the gateway's relay fee"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass enough ETH as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), ". The runner uses 0.001 ETH by default; bump if the relay does not pick up."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "lastCaller"
            }), " on Push is the Sepolia EOA, not the contract's UEA"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The user called Push directly, bypassing the Sepolia dispatcher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "This is expected when you skip the gateway path. To get a UEA-based identity, call from a contract that goes through the gateway."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related",
      children: "Related"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-multichain-execution",
          children: "Contract-Initiated Multichain Execution"
        }), " → The conceptual reference for everything related to contract-initiated execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Other Basic Examples → ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/outbound-from-push-chain",
          children: "Outbound from Push Chain"
        }), " and the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg",
          children: "Round-Trip with Auto Back-Leg"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/advanced-patterns",
          children: "Advanced Patterns"
        }), " → Harder variants: deposit-and-execute, recipient bridge, FIFO state machine, three-chain cascade."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/deep-dives/how-cea-works",
          children: "How CEA Works"
        }), " → The identity model behind UEA ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " attribution on Push."]
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


/***/ }

}]);