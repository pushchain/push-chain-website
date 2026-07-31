"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[73493],{

/***/ 933459
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_02_contract_initiated_examples_03_example_round_trip_auto_back_leg_mdx_384_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-02-contract-initiated-examples-03-example-round-trip-auto-back-leg-mdx-384.json
const site_docs_chain_03_build_02_contract_initiated_examples_03_example_round_trip_auto_back_leg_mdx_384_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/contract-initiated-examples/docs-chain-build-examples-round-trip-auto-back-leg","title":"Round-Trip with Auto Back-Leg","description":"Round-Trip with Auto Back-Leg | Examples | Build | Push Chain Docs","source":"@site/docs/chain/03-build/02-contract-initiated-examples/03-Example-Round-Trip-Auto-Back-Leg.mdx","sourceDirName":"chain/03-build/02-contract-initiated-examples","slug":"/chain/build/contract-initiated-examples/round-trip-auto-back-leg","permalink":"/push-chain-website/pr-preview/pr-1232/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/02-contract-initiated-examples/03-Example-Round-Trip-Auto-Back-Leg.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"docs-chain-build-examples-round-trip-auto-back-leg","title":"Round-Trip with Auto Back-Leg","hide_title":false,"slug":"./round-trip-auto-back-leg","displayed_sidebar":"pushChainSidebar","sidebar_position":3,"image":"/assets/docs/previews/docs_chain_build_examples_round_trip_auto_back_leg--round-trip_with_auto_back-leg.png"},"sidebar":"pushChainSidebar","previous":{"title":"Outbound from Push Chain","permalink":"/push-chain-website/pr-preview/pr-1232/docs/chain/build/contract-initiated-examples/outbound-from-push-chain"},"next":{"title":"Advanced Patterns","permalink":"/push-chain-website/pr-preview/pr-1232/docs/chain/build/contract-initiated-examples/advanced-patterns"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
// EXTERNAL MODULE: ./src/components/GitHubRepo/index.ts + 1 modules
var GitHubRepo = __webpack_require__(531855);
;// ./docs/chain/03-build/02-contract-initiated-examples/03-Example-Round-Trip-Auto-Back-Leg.mdx


const frontMatter = {
	id: 'docs-chain-build-examples-round-trip-auto-back-leg',
	title: 'Round-Trip with Auto Back-Leg',
	hide_title: false,
	slug: './round-trip-auto-back-leg',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_chain_build_examples_round_trip_auto_back_leg--round-trip_with_auto_back-leg.png'
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
  "value": "The wire format",
  "id": "the-wire-format",
  "level": 2
}, {
  "value": "Solidity Code",
  "id": "solidity-code",
  "level": 2
}, {
  "value": "Required configuration",
  "id": "required-configuration",
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
    blockquote: "blockquote",
    code: "code",
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
        children: "Round-Trip with Auto Back-Leg | Examples | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A single Push contract that dispatches an outbound to BNB Testnet and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "automatically receives an inbound callback"
      }), " when the destination chain finishes. One user signature on Push, two coordinated transactions across two chains."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loaded pattern example"
      }), " where the operational knobs that the basics gloss over (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "gasLimit floor"
      }), ", destination ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CEA prefunding"
      }), ", the 6-arg ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "executeUniversalTx dispatch"
      }), " path, refund accumulation) all become concrete here."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For the conceptual background, see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-multichain-execution",
        children: "Contract-Initiated Multichain Execution"
      }), " (especially the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-multichain-execution#round-trip-wire-format",
        children: "Round-Trip Wire Format"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-multichain-execution#operational-knobs",
        children: "Operational Knobs"
      }), " sections)."]
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
            children: "Push -> BNB -> Push, all from one user signature on Push."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["EOA calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kickOff(...)"
            }), ". The contract dispatches outbound; TSS auto-fires the inbound callback when the BNB tx settles."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Wire format"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The destination CEA's outer multicall self-calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sendUniversalTxToUEA"
            }), " on the CEA itself. The CEA wraps the inner payload and submits it through BNB's gateway."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inbound dispatch path"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The 6-arg ", (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx(string, bytes, bytes, uint256, address, bytes32)"
            }), ". For Push-native contracts, TSS dispatches this signature; the 2-arg ", (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx(UniversalPayload, bytes)"
            }), " overload in the codebase is reserved for UEA proxy accounts and is not invoked here."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Verified on"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Donut Testnet. End-to-end run with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "outboundCount"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "callbacks"
            }), " both advancing."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-wire-format",
      children: "The wire format"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the part most newcomers get wrong. The destination CEA's outer multicall must include a step that ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["self-calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sendUniversalTxToUEA"
        }), " on the CEA itself"]
      }), ". The CEA wraps and routes the inner payload through its gateway internally; TSS reads the gateway event and fires the inbound back to Push. The full layered structure:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Layer 4 - Outer multicall (what TSS submits to the destination CEA)\n  ┌────────────────────────────────────────────────────────────────┐\n  │ 0x2cc2842d || abi.encode(Multicall[] {                         │\n  │   { to: destCEA, value: 0, data: <Layer 3> }                   │\n  │ })                                                             │\n  └────────────────────────────────────────────────────────────────┘\n                              │\n                              ▼\nLayer 3 - CEA self-call to sendUniversalTxToUEA\n  ┌────────────────────────────────────────────────────────────────┐\n  │ sendUniversalTxToUEA(token=0, amount=0, <Layer 2>, refundTo)   │\n  └────────────────────────────────────────────────────────────────┘\n                              │\n                              ▼\nLayer 2 - Encoded UniversalPayload (vType = 1, inbound)\n  ┌────────────────────────────────────────────────────────────────┐\n  │ abi.encode(                                                    │\n  │   address(0), uint256(0), <Layer 1>,                           │\n  │   gasLimit, maxFeePerGas, 0, ueaNonce + 1, deadline, vType: 1  │\n  │ )                                                              │\n  └────────────────────────────────────────────────────────────────┘\n                              │\n                              ▼\nLayer 1 - Inner multicall (what the Push UEA executes after the back-leg)\n  ┌────────────────────────────────────────────────────────────────┐\n  │ 0x2cc2842d || abi.encode(Multicall[] { /* no-op or your call */ })│\n  └────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The destination CEA receives Layer 4, executes the multicall step, which invokes Layer 3 (the CEA self-call), which submits Layer 2 to the BNB gateway. TSS picks up the gateway event and delivers Layer 1 to the original Push contract via the 6-arg ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The four-layer encoding looks like a lot. In practice you write it once, encapsulate it in a helper function, and call that helper from every kickoff path. The runner in this example shows the helper."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solidity-code",
      children: "Solidity Code"
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "Round-Trip Dispatcher",
      fileName: "RoundtripDispatcher.sol",
      url: "https://github.com/pushchain/push-chain-examples/blob/main/core-sdk-functions/contract-initiated-roundtrip-execution/src/RoundtripDispatcher.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.26;\n\nstruct UniversalOutboundTxRequest {\n    bytes recipient;\n    address token;\n    uint256 amount;\n    uint256 gasLimit;\n    uint256 gasPrice;        // 0 = per-chain default from UniversalCore (new in SDK v6)\n    uint256 maxPCForGas;     // 0 = no cap on PC the AMM may spend on the gas swap (new in SDK v6)\n    bytes payload;\n    address revertRecipient;\n}\n\ninterface IUniversalGatewayPC {\n    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;\n}\n\ncontract RoundtripDispatcher {\n    address public immutable ugpc;\n    address public immutable universalExecutorModule;\n\n    bytes4 internal constant UEA_MULTICALL_SELECTOR = 0x2cc2842d;\n\n    uint256 public outboundCount;\n    uint256 public callbacks;\n\n    mapping(bytes32 => bool) public seenTxIds;\n    bytes32 public lastTxId;\n\n    event OutboundKicked(uint256 outboundCount, bytes payload);\n    event Callback(uint256 sequence, bytes32 indexed txId, string sourceChainNamespace, bytes ceaAddress, address prc20, uint256 amount);\n\n    error NotUniversalExecutor();\n    error TxAlreadyExecuted();\n    error InsufficientPC(uint256 required, uint256 available);\n\n    struct Multicall { address to; uint256 value; bytes data; }\n\n    constructor(address _ugpc, address _module) {\n        ugpc = _ugpc;\n        universalExecutorModule = _module;\n    }\n\n    function fund() external payable {}\n\n    /// @notice Trigger the round-trip: dispatch outbound to BNB; TSS auto-fires the inbound callback.\n    /// @param destinationCEAAddr This contract's CEA on the destination chain.\n    /// @param tokenForRouting    PRC-20 on Push that selects the destination chain (e.g. pBNB).\n    /// @param protocolFeePc      PC the contract forwards to UGPC for the outbound fee.\n    /// @param ueaNonce           Current Push UEA nonce. 0 for fresh.\n    function kickOff(\n        address destinationCEAAddr,\n        address tokenForRouting,\n        uint256 protocolFeePc,\n        uint256 ueaNonce\n    ) external {\n        if (address(this).balance < protocolFeePc) {\n            revert InsufficientPC(protocolFeePc, address(this).balance);\n        }\n\n        // Layer 1: inner multicall (executes on Push UEA after the back-leg).\n        Multicall[] memory innerCalls = new Multicall[](1);\n        innerCalls[0] = Multicall({to: address(this), value: 0, data: \"\"});\n        bytes memory innerMulticallData = abi.encodePacked(UEA_MULTICALL_SELECTOR, abi.encode(innerCalls));\n\n        // Layer 2: encoded UniversalPayload struct (vType = 1, inbound).\n        bytes memory inboundUniversalPayload = abi.encode(\n            address(0), uint256(0), innerMulticallData,\n            uint256(1e7), uint256(1e10), uint256(0),\n            ueaNonce + 1, uint256(9999999999), uint8(1)\n        );\n\n        // Layer 3: CEA self-call to sendUniversalTxToUEA.\n        bytes memory ceaSelfCallData = abi.encodeWithSelector(\n            bytes4(keccak256(\"sendUniversalTxToUEA(address,uint256,bytes,address)\")),\n            address(0), uint256(0), inboundUniversalPayload, address(this)\n        );\n\n        // Layer 4: outer multicall delivered to the destination CEA.\n        Multicall[] memory outerCalls = new Multicall[](1);\n        outerCalls[0] = Multicall({to: destinationCEAAddr, value: 0, data: ceaSelfCallData});\n        bytes memory outerMulticallData = abi.encodePacked(UEA_MULTICALL_SELECTOR, abi.encode(outerCalls));\n\n        IUniversalGatewayPC(ugpc).sendUniversalTxOutbound{value: protocolFeePc}(\n            UniversalOutboundTxRequest({\n                recipient: abi.encodePacked(destinationCEAAddr),\n                token: tokenForRouting,\n                amount: 0,\n                gasLimit: 2_000_000,        // CRITICAL: see What can go wrong below\n                gasPrice: 0,                // per-chain default from UniversalCore\n                maxPCForGas: 0,             // no cap on PC for the gas swap\n                payload: outerMulticallData,\n                revertRecipient: address(this)\n            })\n        );\n\n        outboundCount += 1;\n        emit OutboundKicked(outboundCount, outerMulticallData);\n    }\n\n    /// @notice Back-leg handler. TSS calls this via UNIVERSAL_EXECUTOR_MODULE\n    /// when the destination CEA finishes its multicall. For Push-native\n    /// contracts, this 6-arg signature is the path TSS dispatches to; the\n    /// 2-arg `executeUniversalTx(UniversalPayload, bytes)` overload in the\n    /// codebase is reserved for UEA proxy accounts and is not invoked here.\n    function executeUniversalTx(\n        string calldata sourceChainNamespace,\n        bytes calldata ceaAddress,\n        bytes calldata, /* payload */\n        uint256 amount,\n        address prc20,\n        bytes32 txId\n    ) external payable {\n        if (msg.sender != universalExecutorModule) revert NotUniversalExecutor();\n        if (seenTxIds[txId]) revert TxAlreadyExecuted();\n        seenTxIds[txId] = true;\n        callbacks += 1;\n        lastTxId = txId;\n        emit Callback(callbacks, txId, sourceChainNamespace, ceaAddress, prc20, amount);\n    }\n\n    receive() external payable {}\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "kickOff"
      }), " is the only entrypoint a caller needs. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeUniversalTx"
      }), " is the back-leg handler TSS invokes when the destination CEA's multicall completes. After running the example end to end on Donut, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "outboundCount"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callbacks"
      }), " both advance to 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "required-configuration",
      children: "Required configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two knobs determine whether the back-leg lands. Wrong values cause TSS to silently drop the relay."
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
                children: "2_000_000"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UGPC's auto-floor for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit = 0"
            }), " is 500k. Below ~1.5M the destination tx runs out of gas during the nested gateway call and TSS does not retry. UGPC charges only for actual gas used and refunds the surplus, so over-provisioning is essentially free."]
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
            }), ", charged to the dispatching contract. UGPC refunds surplus into ", (0,jsx_runtime.jsx)(_components.code, {
              children: "address(this)"
            }), " via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "receive()"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The destination CEA does not need pre-funding. When TSS submits the destination tx it forwards the converted gas value to the CEA as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.value"
      }), ", so the CEA has the native balance it needs for the nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gateway.sendUniversalTxFromCEA(...)"
      }), " call during the duration of that tx."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-code",
      children: "Source Code"
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Contract-Initiated Round-Trip Execution",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-roundtrip-execution",
      description: "A single Push contract that dispatches outbound to BNB and auto-receives the inbound callback via the 6-arg executeUniversalTx, plus a runner that deploys, funds the contract with PC, fires kickOff, and watches outboundCount and callbacks advance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "run",
      children: "Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The runner deploys the contract, funds it with PC if needed, derives the destination CEA, fires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kickOff()"
      }), ", and watches both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "outboundCount"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callbacks"
      }), " advance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone https://github.com/pushchain/push-chain-examples.git\ncd push-chain-examples/core-sdk-functions/contract-initiated-roundtrip-execution\n\nforge build\nnpm install\ncp .env.sample .env\n# Edit .env: set PUSH_PRIVATE_KEY (Push native wallet with at least 12 PC).\nnpm start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Foundry and Node.js v18+."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A Push native wallet on Donut Testnet with at least 12 PC (deploy + 8 PC funded into the contract + protocol fees + headroom). ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://faucet.push.org",
          children: "Push faucet"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The first run deploys ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RoundtripDispatcher"
      }), ", funds it with 8 PC, fires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "kickOff"
      }), ", and watches the cascade unfold. After ~30 to 90 seconds you should see the outbound on BNB and the inbound callback land on Push."]
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
            children: "Push tx succeeds but no BNB tx fires"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit"
            }), " was 0 or under the auto-floor (~500k)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit: 2_000_000"
            }), ". The example hardcodes this; do not lower it."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Both legs land but the back-leg never reaches ", (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The outer multicall is missing the destination CEA's self-call to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sendUniversalTxToUEA"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use the layered encoding above. Plain multicalls without that self-call step do not trigger a back-leg."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inbound callback never lands on ", (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Implementing the 2-arg ", (0,jsx_runtime.jsx)(_components.code, {
              children: "executeUniversalTx(UniversalPayload, bytes)"
            }), " overload as your primary handler"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["TSS dispatches only the 6-arg overload ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(string, bytes, bytes, uint256, address, bytes32)"
            }), " to Push-native contracts. The 2-arg signature is reserved for UEA proxies. Implement only the 6-arg version."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Solana destination outbound reverts with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "STF"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " to UGPC under-sized the on-chain $PC -> pSOL Uniswap V3 swap"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Off-chain compute the right value via the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/docs/chain/build/contract-initiated-multichain-execution#solana-outbound-value-sizing",
              children: "Solana sizing snippet"
            }), " and store it on the contract via a setter. Never use a flat ", (0,jsx_runtime.jsx)(_components.code, {
              children: "balance/2"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EOA wallet drains over many runs even though the contract is funded"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["UGPC routes its surplus refund to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "address(this)"
            }), ", not back to the EOA that called ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kickOff()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Plan a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "withdraw()"
            }), " path or treasury sweep. Refunds accumulate on the contract over time."]
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
          href: "/docs/chain/build/contract-initiated-examples/inbound-to-push-chain",
          children: "Inbound to Push Chain"
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/outbound-from-push-chain",
          children: "Outbound from Push Chain"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/advanced-patterns",
          children: "Advanced Patterns"
        }), " → Harder variants: FIFO state machine, deposit-and-execute, recipient bridge, three-chain cascade."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/deep-dives/how-cea-works",
          children: "How CEA Works"
        }), " → The identity model that makes the round-trip back-leg land on the same Push contract."]
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
        // 1785501098044
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
        // 1785501099111
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