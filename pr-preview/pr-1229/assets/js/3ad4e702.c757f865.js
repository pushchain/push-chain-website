"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[27745],{

/***/ 201431
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_02_power_features_04_tutorial_universal_cross_chain_counter_mdx_3ad_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-02-power-features-04-tutorial-universal-cross-chain-counter-mdx-3ad.json
const site_docs_chain_01_tutorials_02_power_features_04_tutorial_universal_cross_chain_counter_mdx_3ad_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/power-features/docs-chain-tutorials-universal-cross-chain-counters","title":"Build Universal Cross-Chain Counters","description":"Build Universal Cross-Chain Counters | Tutorials | Push Chain Docs","source":"@site/docs/chain/01-tutorials/02-power-features/04-Tutorial-Universal-Cross-Chain-Counter.mdx","sourceDirName":"chain/01-tutorials/02-power-features","slug":"/chain/tutorials/power-features/tutorial-universal-cross-chain-counters","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/tutorials/power-features/tutorial-universal-cross-chain-counters","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/02-power-features/04-Tutorial-Universal-Cross-Chain-Counter.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"docs-chain-tutorials-universal-cross-chain-counters","title":"Build Universal Cross-Chain Counters","hide_title":false,"slug":"./tutorial-universal-cross-chain-counters","displayed_sidebar":"pushChainSidebar","sidebar_position":4,"image":"/assets/docs/previews/docs_chain_tutorials_universal_cross_chain_counters--build_universal_cross-chain_counters.png"},"sidebar":"pushChainSidebar","previous":{"title":"Derive Chain Executor Accounts (CEAs)","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account"},"next":{"title":"Token Systems","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/tutorials/token-systems"}}');
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
;// ./docs/chain/01-tutorials/02-power-features/04-Tutorial-Universal-Cross-Chain-Counter.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-universal-cross-chain-counters',
	title: 'Build Universal Cross-Chain Counters',
	hide_title: false,
	slug: './tutorial-universal-cross-chain-counters',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 4,
	image: '/assets/docs/previews/docs_chain_tutorials_universal_cross_chain_counters--build_universal_cross-chain_counters.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/








const toc = [{
  "value": "Understanding the Pattern",
  "id": "understanding-the-pattern",
  "level": 2
}, {
  "value": "Write the Contracts",
  "id": "write-the-contracts",
  "level": 2
}, {
  "value": "Per Destination Chain → ExternalCounter.sol",
  "id": "per-destination-chain--externalcountersol",
  "level": 3
}, {
  "value": "On Push Chain → MultiChainCounter.sol",
  "id": "on-push-chain--multichaincountersol",
  "level": 3
}, {
  "value": "Wire It Up",
  "id": "wire-it-up",
  "level": 2
}, {
  "value": "Deploy the contracts",
  "id": "deploy-the-contracts",
  "level": 3
}, {
  "value": "Register each destination",
  "id": "register-each-destination",
  "level": 3
}, {
  "value": "Tick every counter",
  "id": "tick-every-counter",
  "level": 3
}, {
  "value": "Understanding msg.sender on the Destination",
  "id": "understanding-msgsender-on-the-destination",
  "level": 2
}, {
  "value": "Production hardening → gate <em>increment()</em> to the CEA",
  "id": "production-hardening-gate-increment-to-the-cea",
  "level": 2
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
        children: "Build Universal Cross-Chain Counters | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(TutorialTimer/* default */.A, {
      estimatedMinutes: 20
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/basics/tutorial-simple-counter/",
        children: "Counter"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/basics/tutorial-universal-counter/",
        children: "Universal Counter"
      }), " tutorials every increment landed on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one"
      }), " Push Chain contract. Here we flip the model. A single click on a Push Chain contract increments separate counters on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethereum Sepolia, BNB Testnet, and Arbitrum Sepolia"
      }), " at once. One contract orchestrates many."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this tutorial you'll be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Deploy a Push Chain contract that fans out to multiple destination chains in one call"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IUniversalGatewayPC"
        }), " (UGPC) to dispatch outbound transactions"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Compute a contract's destination-chain CEA before any cross-chain activity has happened"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ See and verify ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " on the destination chain resolve to the deterministic CEA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ (Optional) Harden the destination by gating ", (0,jsx_runtime.jsx)(_components.code, {
          children: "increment()"
        }), " to the CEA so only your Push contract can drive it"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Builds on Derive CEA",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This tutorial puts the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account/",
          children: "Derive Chain Executor Account (CEA)"
        }), " primitive to work. If you haven't read that one yet, skim it first. We'll be deriving CEAs and authorising them on destination chains."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-the-pattern",
      children: "Understanding the Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In order to create ticks across multiple chains, we need to design two contracts."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MultiChainCounter"
        }), ": This contract runs on Push Chain and is responsible for orchestrating the cross-chain increments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ExternalCounter"
        }), ": This contract runs on each destination chain and is responsible for incrementing the counter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The transaction from users from any chain lands on Push Chain, where the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiChainCounter"
      }), " contract is deployed. It then uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "IUniversalGatewayPC"
      }), " (UGPC) to dispatch outbound transactions to each of the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ExternalCounter"
      }), " contracts on the destination chains."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    Click([User clicks tickAll on Push])\n    Push[MultiChainCounter<br/>Push Chain]\n    UGPC[UniversalGatewayPC<br/>0x...C1]\n    CEAEth[CEA on Ethereum]\n    CEABnb[CEA on BNB]\n    CEAArb[CEA on Arbitrum]\n    CntEth[ExternalCounter<br/>Ethereum Sepolia]\n    CntBnb[ExternalCounter<br/>BNB Testnet]\n    CntArb[ExternalCounter<br/>Arbitrum Sepolia]\n\n    Click --> Push --> UGPC\n    UGPC -->|TSS relay| CEAEth --> CntEth\n    UGPC -->|TSS relay| CEABnb --> CntBnb\n    UGPC -->|TSS relay| CEAArb --> CntArb\n\n    style Push fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style UGPC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style CEAEth fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style CEABnb fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style CEAArb fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "🚀 Why this matters"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "No off-chain bots. No relayer keys. No per-chain hot wallets. The orchestrator lives entirely on Push Chain and reaches every external chain through a deterministic identity (its CEA) that destination protocols can pre-authorise from day zero."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "write-the-contracts",
      children: "Write the Contracts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "per-destination-chain--externalcountersol",
      children: "Per Destination Chain → ExternalCounter.sol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This contract lives on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "each destination chain"
      }), ". It stores a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count"
      }), " and records ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lastCaller"
      }), " on every increment so you can observe the orchestrator's CEA showing up after each tick."]
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "External Counter (one per destination chain)",
      fileName: "ExternalCounter.sol",
      url: "https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-cross-chain-counters/contracts/src/ExternalCounter.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\ncontract ExternalCounter {\n    uint256 public count;\n\n    /// The address that most recently incremented. After a tickAll this will\n    /// be the orchestrator's deterministic CEA on this chain.\n    address public lastCaller;\n\n    event CountIncremented(uint256 indexed newCount, address indexed caller);\n\n    function increment() external {\n        unchecked { count += 1; }\n        lastCaller = msg.sender;\n        emit CountIncremented(count, msg.sender);\n    }\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the orchestrator dispatches via UGPC, the TSS network signs the destination tx ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "as the orchestrator's CEA on this chain"
      }), ", so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lastCaller"
      }), " ends up being that deterministic CEA address."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From the destination contract's perspective the CEA is just a regular address, but Push Chain guarantees only one Push-side contract can produce calls from it. Visible proof of identity, with no mandatory destination-side auth."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.mdxAdmonitionTitle, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ExternalCounter.increment()"
        }), " open?"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["We deliberately keep ", (0,jsx_runtime.jsx)(_components.code, {
          children: "increment()"
        }), " callable by anyone in this tutorial so you can run the live playground below without a per-chain redeploy. ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {})]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enforce"
        }), " that only the orchestrator's CEA can drive it, see the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#production-hardening-gate-increment-to-the-cea",
          children: "production hardening snippet at the bottom of this tutorial"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "on-push-chain--multichaincountersol",
      children: "On Push Chain → MultiChainCounter.sol"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This contract lives on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain"
      }), ". It holds the list of destinations and fans out a single payload (the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increment()"
      }), " calldata) to each one through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UGPC"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "Push-Chain Orchestrator",
      fileName: "MultiChainCounter.sol",
      url: "https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-cross-chain-counters/contracts/src/MultiChainCounter.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.26;\n\n/// @notice UGPC outbound request shape. Mirrors the production type so this\n/// tutorial doesn't need a hard dependency on push-chain-gateway-contracts.\nstruct UniversalOutboundTxRequest {\n    bytes recipient;         // bytes-packed ExternalCounter address on the destination chain\n    address token;           // address(0) — we are not bridging funds, just executing a payload\n    uint256 amount;          // 0 because we are not bridging funds\n    uint256 gasLimit;        // gas the destination CEA gets to run `increment()`\n    uint256 gasPrice;        // 0 → per-chain default from UniversalCore (new in SDK v6)\n    uint256 maxPCForGas;     // 0 → no cap on PC the AMM may spend on the gas swap (new in SDK v6)\n    bytes payload;           // ABI-encoded calldata for the destination contract\n    address revertRecipient; // refunded if the outbound cannot finalise\n}\n\ninterface IUniversalGatewayPC {\n    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;\n}\n\ninterface IExternalCounter {\n    function increment() external;\n}\n\ncontract MultiChainCounter {\n    /// @notice Predeploy address of UniversalGatewayPC on every Push Chain network.\n    IUniversalGatewayPC public constant UGPC =\n        IUniversalGatewayPC(0x00000000000000000000000000000000000000C1);\n\n    struct Destination {\n        bytes target;        // bytes-packed ExternalCounter address\n        uint256 gasLimit;    // destination-chain gas budget for the CEA's call\n    }\n\n    Destination[] public destinations;\n    address public immutable OWNER;\n\n    event DestinationAdded(uint256 indexed index, bytes target);\n    event DestinationGasLimitUpdated(uint256 indexed index, uint256 oldGasLimit, uint256 newGasLimit);\n    event Ticked(uint256 nDestinations, uint256 totalValue);\n\n    error NotOwner();\n    error LengthMismatch();\n    error InsufficientValue();\n    error InvalidIndex();\n    error ZeroGasLimit();\n\n    modifier onlyOwner() {\n        if (msg.sender != OWNER) revert NotOwner();\n        _;\n    }\n\n    constructor() {\n        OWNER = msg.sender;\n    }\n\n    /// @notice Register an `ExternalCounter` on a destination chain.\n    function addDestination(bytes calldata target, uint256 gasLimit) external onlyOwner {\n        if (gasLimit == 0) revert ZeroGasLimit();\n        destinations.push(Destination({ target: target, gasLimit: gasLimit }));\n        emit DestinationAdded(destinations.length - 1, target);\n    }\n\n    /// @notice Update the gas budget granted to a registered destination's CEA\n    /// without redeploying.\n    function setDestinationGasLimit(uint256 index, uint256 newGasLimit) external onlyOwner {\n        if (index >= destinations.length) revert InvalidIndex();\n        if (newGasLimit == 0) revert ZeroGasLimit();\n        uint256 oldGasLimit = destinations[index].gasLimit;\n        destinations[index].gasLimit = newGasLimit;\n        emit DestinationGasLimitUpdated(index, oldGasLimit, newGasLimit);\n    }\n\n    /// @notice Tick every registered destination's counter.\n    /// @param  perCallFee  protocolFee + gasFee for each destination, quoted via\n    ///                     `UniversalCore.getOutboundTxGasAndFees(...)`.\n    /// @param  revertRecipient Push-side address credited if any outbound reverts.\n    function tickAll(uint256[] calldata perCallFee, address revertRecipient) external payable {\n        uint256 n = destinations.length;\n        if (perCallFee.length != n) revert LengthMismatch();\n\n        // Checks-Effects-Interactions: sum and validate msg.value BEFORE\n        // dispatching any UGPC outbound, so an under-funded call reverts\n        // immediately without burning gas on outbounds the contract would\n        // have to back-fund from its own balance.\n        uint256 total;\n        for (uint256 i = 0; i < n; i++) {\n            total += perCallFee[i];\n        }\n        if (msg.value < total) revert InsufficientValue();\n\n        bytes memory payload = abi.encodeCall(IExternalCounter.increment, ());\n\n        for (uint256 i = 0; i < n; i++) {\n            Destination memory d = destinations[i];\n\n            UGPC.sendUniversalTxOutbound{value: perCallFee[i]}(\n                UniversalOutboundTxRequest({\n                    recipient: d.target,\n                    token: address(0),\n                    amount: 0,\n                    gasLimit: d.gasLimit,\n                    gasPrice: 0,            // per-chain default from UniversalCore\n                    maxPCForGas: 0,         // no cap on PC for the gas swap\n                    payload: payload,\n                    revertRecipient: revertRecipient\n                })\n            );\n        }\n\n        emit Ticked(n, msg.value);\n    }\n\n    /// @notice View helper. Returns the number of registered destinations.\n    function destinationCount() external view returns (uint256) {\n        return destinations.length;\n    }\n\n    /// @notice Receive UniversalCore refunds and any incoming PC.\n    receive() external payable {}\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A few things to note about the outbound shape:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "token"
          }), " is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "address(0)"
          }), "."]
        }), " We're executing a payload, not bridging funds. UGPC infers ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TX_TYPE = GAS_AND_PAYLOAD"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "token == address(0) && payload.length > 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "recipient"
          }), " is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bytes"
          }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
            children: "address"
          }), "."]
        }), " UGPC supports non-EVM destinations too, so addresses are bytes-packed (", (0,jsx_runtime.jsx)(_components.code, {
          children: "abi.encodePacked(externalCounterAddress)"
        }), " for EVM destinations)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "payload"
          }), " is the raw single-call calldata."]
        }), " No multicall marker prefix — that's only required for multi-step destination payloads."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Per-call fees, not flat."
        }), " Each destination has its own protocolFee + gasFee depending on its current gas price and configured ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gasLimit"
        }), ". Quote each one separately off-chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wire-it-up",
      children: "Wire It Up"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three things to wire up, then we tick."
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    A[1. Deploy] --> B[2. Register destinations]\n    B --> C[3. tickAll]\n\n    style A fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style C fill:#22c55e,stroke:#fff,stroke-width:2px,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deploy-the-contracts",
      children: "Deploy the contracts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Deploy ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiChainCounter"
      }), " on Push Chain and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExternalCounter"
      }), " on each destination — Foundry, Hardhat, or Remix all work. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/setup/smart-contract-environment/",
        children: "smart contract deployment"
      }), " for setup."]
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Foundry one-liner per chain",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "# Push Chain Donut Testnet (orchestrator)\nforge create src/MultiChainCounter.sol:MultiChainCounter \\\n  --rpc-url $PUSH_TESTNET_RPC --private-key $DEPLOYER_KEY\n\n# Each destination — same command, different RPC + key\nforge create src/ExternalCounter.sol:ExternalCounter \\\n  --rpc-url $DEST_RPC --private-key $DEST_KEY\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "register-each-destination",
      children: "Register each destination"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { PushChain } from '@pushchain/core';\nimport { encodePacked } from 'viem';\n\nconst DESTINATIONS = [\n  { counter: '0xCounterEth...', gasLimit: 1_000_000n },\n  { counter: '0xCounterBnb...', gasLimit: 1_000_000n },\n  { counter: '0xCounterArb...', gasLimit: 1_000_000n },\n];\n\nfor (const d of DESTINATIONS) {\n  await pushChainClient.universal.sendTransaction({\n    to: MULTICHAIN_COUNTER_ADDRESS,\n    data: PushChain.utils.helpers.encodeTxData({\n      abi: MULTICHAIN_COUNTER_ABI,\n      functionName: 'addDestination',\n      args: [encodePacked(['address'], [d.counter]), d.gasLimit],\n    }),\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tick-every-counter",
      children: "Tick every counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const PER_CALL_FEE = 5n * 10n ** 18n; // 5 PC per destination — comfortable testnet headroom\nconst fees = DESTINATIONS.map(() => PER_CALL_FEE);\nconst total = fees.reduce((a, b) => a + b, 0n);\n\nawait pushChainClient.universal.sendTransaction({\n  to:    MULTICHAIN_COUNTER_ADDRESS,\n  value: total,\n  data:  PushChain.utils.helpers.encodeTxData({\n    abi: MULTICHAIN_COUNTER_ABI,\n    functionName: 'tickAll',\n    args: [fees, REVERT_RECIPIENT_ADDRESS],\n  }),\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A few seconds later, once the TSS network has relayed each outbound. You will see every ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExternalCounter"
      }), " will have ticked exactly once. Verify with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lastCaller()"
      }), " reads on each destination chain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,jsx_runtime.jsxs)(_components.mdxAdmonitionTitle, {
        children: ["Use a roomy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gasLimit"
        }), " (>= 1_000_000)"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The destination's CEA has to execute the Vault wrapper, decode the payload, and call your target, which requires more gas than the bare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "increment()"
        }), " itself.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "Tight budgets revert with selector ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0xff633a38"
        }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Default to 1_000_000 per destination"
        }), ", bump higher for complex payloads, and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setDestinationGasLimit(index, newGasLimit)"
        }), " to fix a too-low budget without redeploying."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-msgsender-on-the-destination",
      children: "Understanding msg.sender on the Destination"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExternalCounter.increment()"
      }), " runs on Ethereum from a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tickAll"
      }), ", what does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), " resolve to?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender == lastCaller\n           == CEAFactory.getCEAForPushAccount(MULTICHAIN_COUNTER_ADDRESS)\n           == ceaOnEth.address\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the unique guarantee CEAs provide:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The Ethereum contract sees a normal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " address. No exotic format, no special handling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["That address can only be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "controlled"
        }), " by exactly one Push Chain contract (", (0,jsx_runtime.jsx)(_components.code, {
          children: "MultiChainCounter"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The relationship is enforced by the destination chain's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CEAFactory"
        }), ", not by anything off-chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this base example anyone ", (0,jsx_runtime.jsx)(_components.em, {
        children: "can"
      }), " still call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increment()"
      }), ", but only the orchestrator's CEA will appear as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lastCaller"
      }), " when the call comes through UGPC. To enforce that only the CEA can drive the counter, see the next section."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "production-hardening-gate-increment-to-the-cea",
      children: ["Production hardening → gate ", (0,jsx_runtime.jsx)(_components.em, {
        children: "increment()"
      }), " to the CEA"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you're ready to make the counter authoritative, where destination state can only advance through the orchestrator, swap ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExternalCounter"
      }), " for the auth-gated variant. The diff is small:"]
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "ExternalCounter (production-hardened)",
      fileName: "ExternalCounter.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\ncontract ExternalCounter {\n    uint256 public count;\n    address public immutable AUTHORIZED_CEA;\n\n    event CountIncremented(uint256 indexed newCount, address indexed caller);\n    error NotAuthorizedCEA();\n\n    constructor(address authorizedCEA) {\n        AUTHORIZED_CEA = authorizedCEA;\n    }\n\n    function increment() external {\n        if (msg.sender != AUTHORIZED_CEA) revert NotAuthorizedCEA();\n        unchecked { count += 1; }\n        emit CountIncremented(count, msg.sender);\n    }\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pass the orchestrator's per-chain CEA (from step 2 above) as the constructor argument. Now ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increment()"
      }), " reverts for anyone except the orchestrator's CEA. The destination chain's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CEAFactory"
      }), " enforces that the CEA can only be controlled by your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MultiChainCounter"
      }), " on Push, so the gating is end-to-end without any off-chain trust."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can also pre-authorise the CEA on third-party destination protocols this way (whitelists, vault gating, etc.) before any cross-chain activity has happened. That's the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account#example-pre-compute-and-authorize-a-push-contracts-cea",
        children: "pre-authorise pattern from the Derive CEA tutorial"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live Playground"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Connect a wallet and click ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tick all destinations"
      }), ". One Push transaction fans out three outbounds; when each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lastCaller"
      }), " matches the derived CEA, you've watched the identity round-trip end to end. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lifecycle events"
      }), " panel below the buttons surfaces every step from the SDK's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tx.progressHook(callback)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wired to a reference deployment:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MultiChainCounter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Donut Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x7dd80f17C593F73292b3c4B785C4dD0100C4fBDd",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "0x7dd8...fBDd"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalCounter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0xCf5DB8F40F7dAA8Aa8Cb36C880F7207a65e2Ee92",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "0xCf5D...Ee92"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalCounter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://testnet.bscscan.com/address/0xfEe777Fbd341AC02d105037022fc03D3CcD757D5",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "0xfEe7...57D5"
              })
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExternalCounter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.arbiscan.io/address/0xb3fB98A3C6EEA643532198CF22cc50BC48026E79",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "0xb3fB...6E79"
              })
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To drive your own deployments, edit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ORCHESTRATOR"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DEMO_DESTINATIONS"
      }), " at the top of the playground source."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// customPropMinimized='true'\nimport {\n  PushUniversalAccountButton,\n  usePushChain,\n  usePushChainClient,\n  usePushWalletContext,\n  PushUniversalWalletProvider,\n  PushUI,\n} from \"@pushchain/ui-kit\";\nimport { useEffect, useState } from \"react\";\n\nfunction CrossChainCounterExample() {\n  // Pre-deployed demo addresses. Replace with your own deploys to drive your own counters.\n  const ORCHESTRATOR = \"0x7dd80f17C593F73292b3c4B785C4dD0100C4fBDd\";\n  const PER_CALL_FEE_PC_WEI = 5n * 10n ** 18n; // 5 PC per destination, comfortable testnet headroom\n\n  const DEMO_DESTINATIONS = [\n    {\n      label: \"Ethereum Sepolia\",\n      chainKey: \"ETHEREUM_SEPOLIA\",\n      counterAddress: \"0xCf5DB8F40F7dAA8Aa8Cb36C880F7207a65e2Ee92\",\n      rpc: \"https://ethereum-sepolia-rpc.publicnode.com\",\n    },\n    {\n      label: \"BNB Testnet\",\n      chainKey: \"BNB_TESTNET\",\n      counterAddress: \"0xfEe777Fbd341AC02d105037022fc03D3CcD757D5\",\n      rpc: \"https://bsc-testnet-rpc.publicnode.com\",\n    },\n    {\n      label: \"Arbitrum Sepolia\",\n      chainKey: \"ARBITRUM_SEPOLIA\",\n      counterAddress: \"0xb3fB98A3C6EEA643532198CF22cc50BC48026E79\",\n      rpc: \"https://sepolia-rollup.arbitrum.io/rpc\",\n    },\n  ];\n\n  const MULTICHAIN_ABI = [\n    {\n      inputs: [\n        { name: 'perCallFee', type: 'uint256[]' },\n        { name: 'revertRecipient', type: 'address' },\n      ],\n      name: 'tickAll',\n      outputs: [],\n      stateMutability: 'payable',\n      type: 'function',\n    },\n  ];\n\n  const walletConfig = { network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET };\n\n  function Component() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n    const { PushChain } = usePushChain();\n\n    const [ceaAddrs, setCeaAddrs] = useState({});\n    const [counts, setCounts] = useState({});\n    const [lastCallers, setLastCallers] = useState({});\n    const [loading, setLoading] = useState(false);\n    const [tickLoading, setTickLoading] = useState(false);\n    const [txHash, setTxHash] = useState(\"\");\n    const [error, setError] = useState(\"\");\n    const [progressEvents, setProgressEvents] = useState([]);\n\n    useEffect(() => {\n      if (!PushChain) return;\n      (async () => {\n        const orchestratorOnPush = PushChain.utils.account.toUniversal(ORCHESTRATOR, {\n          chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET,\n        });\n        const next = {};\n        for (const d of DEMO_DESTINATIONS) {\n          try {\n            const cea = await PushChain.utils.account.deriveExecutorAccount(orchestratorOnPush, {\n              chain: PushChain.CONSTANTS.CHAIN[d.chainKey],\n              skipNetworkCheck: true,\n            });\n            next[d.label] = cea.address;\n          } catch (e) {\n            // Skip destinations the SDK can't derive on this network.\n          }\n        }\n        setCeaAddrs(next);\n      })();\n    }, [PushChain]);\n\n    const refresh = async () => {\n      setLoading(true);\n      const c = {};\n      const lc = {};\n      await Promise.all(\n        DEMO_DESTINATIONS.map(async (d) => {\n          try {\n            const res = await fetch(d.rpc, {\n              method: \"POST\",\n              headers: { \"Content-Type\": \"application/json\" },\n              body: JSON.stringify({\n                jsonrpc: \"2.0\",\n                method: \"eth_call\",\n                params: [{ to: d.counterAddress, data: \"0x06661abd\" }, \"latest\"],\n                id: 1,\n              }),\n            }).then((r) => r.json());\n            c[d.label] = BigInt(res.result || \"0x0\");\n            const res2 = await fetch(d.rpc, {\n              method: \"POST\",\n              headers: { \"Content-Type\": \"application/json\" },\n              body: JSON.stringify({\n                jsonrpc: \"2.0\",\n                method: \"eth_call\",\n                params: [{ to: d.counterAddress, data: \"0x6c428e98\" }, \"latest\"],\n                id: 2,\n              }),\n            }).then((r) => r.json());\n            lc[d.label] = \"0x\" + (res2.result || \"\").slice(-40);\n          } catch (e) {\n            // Skip RPC errors silently.\n          }\n        })\n      );\n      setCounts(c);\n      setLastCallers(lc);\n      setLoading(false);\n    };\n\n    useEffect(() => {\n      refresh();\n    }, []);\n\n    const tickAll = async () => {\n      if (!pushChainClient || !PushChain) return;\n      setTickLoading(true);\n      setError(\"\");\n      setTxHash(\"\");\n      setProgressEvents([]);\n      try {\n        const fees = DEMO_DESTINATIONS.map(() => PER_CALL_FEE_PC_WEI);\n        const total = fees.reduce((a, b) => a + b, 0n);\n        const data = PushChain.utils.helpers.encodeTxData({\n          abi: MULTICHAIN_ABI,\n          functionName: \"tickAll\",\n          args: [fees, ORCHESTRATOR],\n        });\n        const tx = await pushChainClient.universal.sendTransaction({\n          to: ORCHESTRATOR,\n          value: total,\n          data,\n        });\n        setTxHash(tx.hash);\n        // Subscribe to per-step lifecycle events the SDK fires for this tx.\n        // Each event has { id, title, message, level, response, timestamp }.\n        tx.progressHook((event) => {\n          setProgressEvents((prev) => [...prev, event]);\n        });\n        await tx.wait();\n        for (let i = 0; i < 6; i++) {\n          await new Promise((r) => setTimeout(r, 15000));\n          await refresh();\n        }\n      } catch (e) {\n        setError(e instanceof Error ? e.message : String(e));\n      } finally {\n        setTickLoading(false);\n      }\n    };\n\n    return (\n      <div style={{ maxWidth: \"720px\", margin: \"0 auto\", padding: \"20px\", fontFamily: \"system-ui\" }}>\n        <h2 style={{ textAlign: \"center\", marginBottom: \"10px\" }}>Universal Cross-Chain Counters</h2>\n        <p style={{ textAlign: \"center\", color: \"#666\", fontSize: \"14px\", marginBottom: \"20px\" }}>\n          One Push tx, three destination chains tick at once\n        </p>\n\n        <div style={{ display: \"flex\", justifyContent: \"center\", marginBottom: \"20px\" }}>\n          <PushUniversalAccountButton />\n        </div>\n\n        <table style={{ width: \"100%\", borderCollapse: \"collapse\", fontSize: \"13px\", marginBottom: \"16px\" }}>\n          <thead>\n            <tr style={{ textAlign: \"left\", color: \"#666\" }}>\n              <th style={{ padding: \"8px 10px\", borderBottom: \"1px solid #ddd\" }}>Chain</th>\n              <th style={{ padding: \"8px 10px\", borderBottom: \"1px solid #ddd\" }}>CEA</th>\n              <th style={{ padding: \"8px 10px\", borderBottom: \"1px solid #ddd\" }}>count</th>\n              <th style={{ padding: \"8px 10px\", borderBottom: \"1px solid #ddd\" }}>lastCaller</th>\n            </tr>\n          </thead>\n          <tbody>\n            {DEMO_DESTINATIONS.map((d) => {\n              const cea = ceaAddrs[d.label];\n              const lc = lastCallers[d.label];\n              const match = cea && lc && cea.toLowerCase() === lc.toLowerCase();\n              const short = (a) => (a && a.length >= 12 ? `${a.slice(0, 6)}...${a.slice(-4)}` : \"-\");\n              return (\n                <tr key={d.label}>\n                  <td style={{ padding: \"8px 10px\", borderBottom: \"1px solid #eee\", fontWeight: 600 }}>{d.label}</td>\n                  <td style={{ padding: \"8px 10px\", borderBottom: \"1px solid #eee\", fontFamily: \"monospace\", fontSize: \"12px\" }}>{short(cea)}</td>\n                  <td style={{ padding: \"8px 10px\", borderBottom: \"1px solid #eee\" }}>\n                    {counts[d.label] !== undefined ? counts[d.label].toString() : \"-\"}\n                  </td>\n                  <td style={{ padding: \"8px 10px\", borderBottom: \"1px solid #eee\", fontFamily: \"monospace\", fontSize: \"12px\" }}>\n                    {short(lc)}\n                    {match && <span style={{ marginLeft: \"6px\", color: \"#15803d\", fontWeight: 600 }}>✓ CEA</span>}\n                  </td>\n                </tr>\n              );\n            })}\n          </tbody>\n        </table>\n\n        <div style={{ display: \"flex\", gap: \"10px\", justifyContent: \"center\", marginBottom: \"12px\" }}>\n          <button onClick={refresh} disabled={loading} style={{ padding: \"8px 14px\", borderRadius: \"8px\", border: \"1px solid #ddd\", background: loading ? \"#eee\" : \"#f3f4f6\", cursor: loading ? \"not-allowed\" : \"pointer\" }}>\n            {loading ? \"Reading...\" : \"Refresh\"}\n          </button>\n          {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n            <button onClick={tickAll} disabled={tickLoading} style={{ padding: \"8px 14px\", borderRadius: \"8px\", border: \"none\", background: tickLoading ? \"#ccc\" : \"#d548ec\", color: \"white\", fontWeight: 600, cursor: tickLoading ? \"not-allowed\" : \"pointer\" }}>\n              {tickLoading ? \"Ticking...\" : \"Tick all destinations\"}\n            </button>\n          )}\n        </div>\n\n        {error && (\n          <div style={{ color: \"#b91c1c\", fontSize: \"13px\", textAlign: \"center\", marginBottom: \"8px\" }}>{error}</div>\n        )}\n\n        {progressEvents.length > 0 && (\n          <div\n            style={{\n              marginTop: \"12px\",\n              padding: \"12px 14px\",\n              backgroundColor: \"#fafafa\",\n              border: \"1px solid #e5e5e5\",\n              borderRadius: \"10px\",\n              fontSize: \"12px\",\n            }}\n          >\n            <div style={{ display: \"flex\", justifyContent: \"space-between\", alignItems: \"baseline\", marginBottom: \"6px\" }}>\n              <strong style={{ fontSize: \"13px\", color: \"#444\" }}>Lifecycle events</strong>\n              <span style={{ color: \"#999\", fontSize: \"10px\" }}>\n                from <code>tx.progressHook(...)</code>\n              </span>\n            </div>\n            <ul style={{ listStyle: \"none\", padding: 0, margin: 0 }}>\n              {progressEvents.map((p, i) => {\n                const dot = p.level === \"SUCCESS\" ? \"#16a34a\" : p.level === \"ERROR\" ? \"#b91c1c\" : \"#6b7280\";\n                return (\n                  <li\n                    key={`${p.id}-${i}`}\n                    style={{\n                      display: \"flex\",\n                      alignItems: \"flex-start\",\n                      gap: \"10px\",\n                      padding: \"5px 0\",\n                      borderBottom: i < progressEvents.length - 1 ? \"1px solid #eee\" : \"none\",\n                    }}\n                  >\n                    <span\n                      style={{\n                        width: \"8px\",\n                        height: \"8px\",\n                        borderRadius: \"50%\",\n                        backgroundColor: dot,\n                        marginTop: \"5px\",\n                        flexShrink: 0,\n                      }}\n                    />\n                    <div style={{ flex: 1, minWidth: 0 }}>\n                      <div style={{ display: \"flex\", gap: \"8px\", alignItems: \"baseline\" }}>\n                        <code style={{ fontSize: \"10px\", color: \"#666\" }}>{p.id}</code>\n                        <strong style={{ fontSize: \"12px\", color: \"#222\" }}>{p.title}</strong>\n                      </div>\n                      {p.message && (\n                        <div style={{ fontSize: \"11px\", color: \"#555\", marginTop: \"2px\", wordBreak: \"break-word\" }}>\n                          {p.message}\n                        </div>\n                      )}\n                    </div>\n                  </li>\n                );\n              })}\n            </ul>\n          </div>\n        )}\n\n        {txHash && pushChainClient && (\n          <div style={{ textAlign: \"center\", fontSize: \"13px\", color: \"#555\", marginTop: \"12px\" }}>\n            <a\n              href={pushChainClient.explorer.getTransactionUrl(txHash)}\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              style={{ color: \"#d548ec\", textDecoration: \"none\" }}\n            >\n              View Push tx on explorer →\n            </a>\n          </div>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-code",
      children: "Source code"
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Universal Cross-Chain Counters Tutorial",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/tutorials/universal-cross-chain-counters",
      description: "Two contracts (Push-side orchestrator, destination-side counter) plus a React app that derives CEAs, polls counts across chains, and triggers tickAll."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-we-achieved",
      children: "What we achieved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this tutorial, we built a true cross-chain orchestrator:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One Push contract, many destinations."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MultiChainCounter"
        }), " fans out to Ethereum, BNB, and Arbitrum in a single Push transaction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic identity."
        }), " Each destination's CEA is computable from the orchestrator's address alone, before any deployment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visible identity proof."
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ExternalCounter.lastCaller()"
        }), " records exactly the deterministic CEA after each tick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional production gating."
        }), " Drop in the auth-gated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ExternalCounter"
        }), " and only the orchestrator's CEA can drive destination state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-shot UX."
        }), " Users (or other contracts) call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tickAll()"
        }), " once on Push, and three chains' state updates as a result."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. CEAs are computed before they exist"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getCEAForPushAccount"
        }), " (or the SDK's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deriveExecutorAccount"
        }), ") returns a deterministic address."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "That address can be authorised on destination protocols on day zero."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The TSS network deploys the actual contract on first use."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. The Push-side address is the identity anchor"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A different ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MultiChainCounter"
        }), " deployment has a different CEA on every chain."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Re-deploying the orchestrator means re-authorising on every destination."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For upgradeable systems, use a proxy. The CEA stays bound to the proxy address."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Destination protocols don't need any Push Chain awareness"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ExternalCounter"
        }), " is plain Solidity. No Push-specific imports, no signatures to verify, no gateway calls."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The CEA looks like a normal EOA from the destination's perspective."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal execution is invisible at the destination layer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-next",
      children: "What's Next?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You've fanned ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one Push contract out to many chains"
      }), ". Now flip the direction. Let users on every chain claim from a single Push Chain contract. The Universal Airdrop tutorial uses Merkle proofs and UEAs to distribute tokens to recipients on Ethereum, Solana, BNB, and beyond, all from one contract on Push."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        textAlign: 'center'
      },
      children: (0,jsx_runtime.jsx)(_components.mermaid, {
        value: "flowchart LR\n    A[Ethereum claimer] --> D[Universal Airdrop on Push]\n    B[Solana claimer] --> D\n    C[BNB claimer] --> D\n    D --> E[Tokens claimed]\n\n    style A fill:#627eea,color:#fff\n    style B fill:#16c492,color:#fff\n    style C fill:#f0b90b,color:#000\n    style D fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style E fill:#22c55e,stroke:#fff,stroke-width:2px,color:#fff"
      })
    }), "\n", (0,jsx_runtime.jsx)("hr", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check out the next tutorial to learn how to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/token-systems/tutorial-universal-airdrop/",
        children: "build a Universal Airdrop"
      }), ": one contract, every chain, no bridging."]
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