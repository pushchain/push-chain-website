"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[54647],{

/***/ 422846
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_02_contract_initiated_examples_02_example_outbound_from_push_chain_mdx_5c5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-02-contract-initiated-examples-02-example-outbound-from-push-chain-mdx-5c5.json
const site_docs_chain_03_build_02_contract_initiated_examples_02_example_outbound_from_push_chain_mdx_5c5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/contract-initiated-examples/docs-chain-build-examples-outbound-from-push-chain","title":"Outbound from Push Chain","description":"Outbound from Push Chain | Contract-Initiated Examples | Build | Push Chain Docs","source":"@site/docs/chain/03-build/02-contract-initiated-examples/02-Example-Outbound-From-Push-Chain.mdx","sourceDirName":"chain/03-build/02-contract-initiated-examples","slug":"/chain/build/contract-initiated-examples/outbound-from-push-chain","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/contract-initiated-examples/outbound-from-push-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/02-contract-initiated-examples/02-Example-Outbound-From-Push-Chain.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"docs-chain-build-examples-outbound-from-push-chain","title":"Outbound from Push Chain","hide_title":false,"slug":"./outbound-from-push-chain","displayed_sidebar":"pushChainSidebar","sidebar_position":2,"image":"/assets/docs/previews/docs_chain_build_examples--outbound_from_push_chain.png"},"sidebar":"pushChainSidebar","previous":{"title":"Inbound to Push Chain","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/contract-initiated-examples/inbound-to-push-chain"},"next":{"title":"Round-Trip with Auto Back-Leg","permalink":"/push-chain-website/pr-preview/pr-1229/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
// EXTERNAL MODULE: ./src/components/GitHubRepo/index.ts + 1 modules
var GitHubRepo = __webpack_require__(531855);
;// ./docs/chain/03-build/02-contract-initiated-examples/02-Example-Outbound-From-Push-Chain.mdx


const frontMatter = {
	id: 'docs-chain-build-examples-outbound-from-push-chain',
	title: 'Outbound from Push Chain',
	hide_title: false,
	slug: './outbound-from-push-chain',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_chain_build_examples--outbound_from_push_chain.png'
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
  "value": "Solidity Code",
  "id": "solidity-code",
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
        children: "Outbound from Push Chain | Contract-Initiated Examples | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A minimal Push Chain contract that demonstrates an outbound cross-chain call. The contract calls ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UniversalGatewayPC (UGPC)"
      }), ", the gateway contract responsible for handling outbound calls, and runs increment on a BNB Testnet counter via the contract's CEA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the smallest contract-initiated outbound that runs end to end on Donut."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), ": For the conceptual background (UGPC, CEAs, fee model), see ", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "Push Chain to BNB Testnet. One-way. No back-leg."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigger"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A regular EOA calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dispatchOutbound(...)"
            }), " on the Push contract."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity on BNB"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The destination contract sees ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            }), " equal to the Push contract's deterministic CEA on BNB."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Funds movement"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["None. The example dispatches a payload only. The same surface supports bridging PRC20 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "token"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "amount"
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
            children: "Donut Testnet."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "identity-model",
      children: "Identity model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a Push Chain contract dispatches through UGPC, the TSS validators relay the call to the destination chain and execute it from the contract's CEA on that chain."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The CEA is always deterministic, derived from the contract's Push Chain address. From the destination contract's perspective the CEA is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "normal address"
      }), ", and there is no Push-specific code at the destination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    EOA([User EOA])\n    PC[<b>Push Contract</b><br/>MinimalContractInitiatedExecutor]\n    UGPC[<b>UGPC</b><br/>0x...C1]\n    CEA[<b>Contract CEA on BNB</b>]\n    BNB[<b>BNB Counter</b>]\n\n    EOA -->|\"dispatchOutbound()\"| PC\n    PC -->|\"sendUniversalTxOutbound{value}()\"| UGPC\n    UGPC -->|\"TSS relay\"| CEA\n    CEA -->|\"increment()\"| BNB\n\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style UGPC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style CEA fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style BNB fill:#1e3a8a,stroke:#60a5fa,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Push contract's CEA on the destination chain is computable off-chain via ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/utility-functions/#derive-executor-account",
        children: "deriveExecutorAccount"
      }), ", so destination protocols can whitelist or pre-fund the CEA before the first cross-chain activity has happened."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solidity-code",
      children: "Solidity Code"
    }), "\n", (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
      title: "Minimal Push-Side Outbound Dispatcher",
      fileName: "MinimalContractInitiatedExecutor.sol",
      url: "https://github.com/pushchain/push-chain-examples/blob/main/core-sdk-functions/contract-initiated-outbound-execution/src/MinimalContractInitiatedExecutor.sol",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-solidity",
          children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.26;\n\n/// @notice Outbound request shape consumed by UGPC.\nstruct UniversalOutboundTxRequest {\n    bytes recipient;        // CEA or target address on the external chain (bytes-encoded)\n    address token;          // PRC20 on Push Chain to bridge (address(0) for none)\n    uint256 amount;         // Amount of PRC20 to bridge\n    uint256 gasLimit;       // Gas limit for external execution\n    uint256 gasPrice;       // 0 = per-chain default from UniversalCore (new in SDK v6)\n    uint256 maxPCForGas;    // 0 = no cap on PC the AMM may spend on the gas swap (new in SDK v6)\n    bytes payload;          // ABI-encoded calldata for the CEA to execute\n    address revertRecipient;// Address to receive bridged funds if external tx reverts\n}\n\ninterface IUniversalGatewayPC {\n    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;\n}\n\ninterface IPRC20 {\n    function approve(address spender, uint256 amount) external returns (bool);\n}\n\ncontract MinimalContractInitiatedExecutor {\n    /// @notice UGPC predeploy on Push Chain Donut Testnet.\n    address public immutable ugpc;\n\n    event OutboundDispatched(\n        bytes indexed recipient,\n        address indexed token,\n        uint256 amount,\n        bytes payload,\n        address revertRecipient\n    );\n\n    error ZeroAddress();\n\n    constructor(address _ugpc) {\n        if (_ugpc == address(0)) revert ZeroAddress();\n        ugpc = _ugpc;\n    }\n\n    /// @notice Dispatch an outbound cross-chain execution from this contract.\n    /// @dev `msg.value` must cover the UGPC protocol fee. If bridging PRC20\n    /// tokens, this function approves UGPC for the amount before calling.\n    function dispatchOutbound(\n        address token,\n        uint256 amount,\n        bytes calldata recipient,\n        uint256 gasLimit,\n        bytes calldata payload,\n        address revertRecipient\n    ) external payable {\n        if (revertRecipient == address(0)) revert ZeroAddress();\n\n        if (amount > 0) {\n            if (token == address(0)) revert ZeroAddress();\n            IPRC20(token).approve(ugpc, amount);\n        }\n\n        IUniversalGatewayPC(ugpc).sendUniversalTxOutbound{value: msg.value}(\n            UniversalOutboundTxRequest({\n                recipient: recipient,\n                token: token,\n                amount: amount,\n                gasLimit: gasLimit,\n                gasPrice: 0,                // per-chain default from UniversalCore\n                maxPCForGas: 0,             // no cap on PC for the gas swap\n                payload: payload,\n                revertRecipient: revertRecipient\n            })\n        );\n\n        emit OutboundDispatched(recipient, token, amount, payload, revertRecipient);\n    }\n\n    receive() external payable {}\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The contract is intentionally tiny. It owns no business logic. It exists to forward an outbound request through UGPC."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Real production contracts wrap ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dispatchOutbound"
      }), " behind their own access control, request-ID tracking, and event correlation; layer those on top."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-code",
      children: "Source Code"
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Contract-Initiated Outbound Execution",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-outbound-execution",
      description: "A minimal Push contract that dispatches an outbound through UGPC, plus a runner that deploys the contract, derives the BNB CEA, encodes increment() for the BNB counter, and prints both Push and BNB explorer URLs after dispatching."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "run",
      children: "Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The runner deploys the contract on first run, derives the BNB CEA address, encodes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increment()"
      }), " for the BNB counter, dispatches with PC value covering the UGPC protocol fee, and prints both Push and BNB explorer URLs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone https://github.com/pushchain/push-chain-examples.git\ncd push-chain-examples/core-sdk-functions/contract-initiated-outbound-execution\n\nforge build\nnpm install\ncp .env.sample .env\n# Edit .env: set PUSH_PRIVATE_KEY (Push native wallet with at least 10 PC).\nnpm start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Foundry and Node.js v18+."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A Push native wallet on Donut Testnet with at least 10 PC (deploy + dispatch + headroom). To get funds, visit the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://faucet.push.org",
          children: "Push faucet"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No funding needed on the BNB CEA. This is a one-way example; the destination tx's gas comes from the UGPC fee paid in PC and converted internally."
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "dispatchOutbound"
            }), " reverts immediately on Push"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " is zero or below the UGPC protocol fee"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass enough PC as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), ". The runner uses 5 PC by default."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Push tx succeeds but no BNB tx fires"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit"
            }), " was 0 or under the auto-floor (~500k) and the destination tx ran out of gas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit: 2_000_000"
            }), " on the outbound. UGPC charges only for actual gas used and refunds the surplus, so over-provisioning is essentially free. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/docs/chain/build/contract-initiated-multichain-execution#operational-knobs",
              children: "Operational Knobs"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BNB tx fires but the destination contract reverts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The destination contract restricts callers (whitelist or EOA-only guard) and does not recognise the CEA"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Whitelist the deterministic CEA address on the destination contract. Derive it off-chain via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.utils.account.deriveExecutorAccount"
            }), "."]
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
        }), " and the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg",
          children: "Round-Trip with Auto Back-Leg"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/advanced-patterns",
          children: "Advanced Patterns"
        }), " → Harder variants: bridging PRC-20 alongside the call, recipient bridge, FIFO state machine, three-chain cascade."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/deep-dives/how-cea-works",
          children: "How CEA Works"
        }), " → The identity model behind deterministic CEA addresses on the destination chain."]
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