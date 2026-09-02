"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[32204],{

/***/ 901217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_02_contract_initiated_examples_04_advanced_patterns_mdx_940_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-02-contract-initiated-examples-04-advanced-patterns-mdx-940.json
const site_docs_chain_03_build_02_contract_initiated_examples_04_advanced_patterns_mdx_940_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/contract-initiated-examples/docs-chain-build-examples-advanced-patterns","title":"Advanced Patterns","description":"Advanced Patterns | Contract-Initiated Examples | Build | Push Chain Docs","source":"@site/docs/chain/03-build/02-contract-initiated-examples/04-Advanced-Patterns.mdx","sourceDirName":"chain/03-build/02-contract-initiated-examples","slug":"/chain/build/contract-initiated-examples/advanced-patterns","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/build/contract-initiated-examples/advanced-patterns","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/02-contract-initiated-examples/04-Advanced-Patterns.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"docs-chain-build-examples-advanced-patterns","title":"Advanced Patterns","hide_title":false,"slug":"./advanced-patterns","displayed_sidebar":"pushChainSidebar","sidebar_position":4,"image":"/assets/docs/previews/docs_chain_build_examples--advanced_patterns.png"},"sidebar":"pushChainSidebar","previous":{"title":"Round-Trip with Auto Back-Leg","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg"},"next":{"title":"UI Kit","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
// EXTERNAL MODULE: ./src/components/GitHubRepo/index.ts + 1 modules
var GitHubRepo = __webpack_require__(531855);
;// ./docs/chain/03-build/02-contract-initiated-examples/04-Advanced-Patterns.mdx


const frontMatter = {
	id: 'docs-chain-build-examples-advanced-patterns',
	title: 'Advanced Patterns',
	hide_title: false,
	slug: './advanced-patterns',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 4,
	image: '/assets/docs/previews/docs_chain_build_examples--advanced_patterns.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/




const toc = [{
  "value": "All patterns",
  "id": "all-patterns",
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
    li: "li",
    p: "p",
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
        children: "Advanced Patterns | Contract-Initiated Examples | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The three preceding pages cover the basics: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-examples/inbound-to-push-chain",
        children: "plain inbound"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-examples/outbound-from-push-chain",
        children: "plain outbound"
      }), ", and the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg",
        children: "round-trip with auto back-leg"
      }), ". This page is the full reference for every contract-initiated pattern we have built, including five advanced ones that combine funds bridging, state machines, and multi-chain cascades."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each entry links to a focused, single-purpose example in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/",
        children: "Push Chain Examples Repository"
      }), " under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contract-initiated-*"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each example is self-contained: contract, runner, README, .env.sample, and a verified end-to-end run on Donut Testnet."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "all-patterns",
      children: "All patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it shows"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1. Plain Inbound"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Trigger a state change on Push Chain from a smart contract on an external chain. The Push target sees the dispatching contract's UEA as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            }), ", so on-Push logic can attribute the call to a real external identity. ", (0,jsx_runtime.jsx)(Details/* default */.A, {
              summary: "Tutorial",
              className: "alert alert--minimal-api-table detail-box",
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/chain/build/contract-initiated-examples/inbound-to-push-chain",
                children: "Inbound to Push Chain"
              })
            }), " ", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
              title: "Contract-Initiated Inbound Execution",
              repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-inbound-execution",
              description: "Sepolia dispatcher and Push counter with UEA identity"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2. Plain Outbound"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Run code on an external chain from a Push Chain contract without any live user driving the transaction. The destination sees the contract's CEA as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            }), ", so destination protocols can whitelist or pre-fund that CEA. ", (0,jsx_runtime.jsx)(Details/* default */.A, {
              summary: "Tutorial",
              className: "alert alert--minimal-api-table detail-box",
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/chain/build/contract-initiated-examples/outbound-from-push-chain",
                children: "Outbound from Push Chain"
              })
            }), " ", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
              title: "Contract-Initiated Outbound Execution",
              repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-outbound-execution",
              description: "Push dispatcher calling BNB target via UGPC"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3. Round-Trip with Auto Back-Leg"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dispatch to an external chain and automatically receive the result back on Push from a single user signature. No off-chain orchestration, no separate inbound trigger. ", (0,jsx_runtime.jsx)(Details/* default */.A, {
              summary: "Tutorial",
              className: "alert alert--minimal-api-table detail-box",
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg",
                children: "Round-Trip with Auto Back-Leg"
              })
            }), " ", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
              title: "Contract-Initiated Roundtrip Execution",
              repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-roundtrip-execution",
              description: "Push -> BNB -> Push with auto back-leg via 6-arg executeUniversalTx"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4. Recipient Bridge"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Move native funds from an external chain to a Push wallet straight from contract logic. No payload, no contract call on Push, just a bridged balance bump for the recipient. ", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
              title: "Recipient Bridge",
              repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-recipient-bridge",
              description: "Funds-only inbound bridging ETH to Push recipient"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5. Inbound With Funds"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bridge funds AND run a contract call on Push in the same transaction. The classic deposit-and-act pattern: a vault credits the depositor and runs business logic atomically with the funds arriving. ", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
              title: "Inbound With Funds",
              repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-inbound-with-funds",
              description: "Deposit-and-execute: bridge ETH and call vault in one tx"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6. Outbound With Funds"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Bridge funds AND run a contract call on the destination chain in the same transaction. Symmetric to inbound-with-funds: pay an external protocol and trigger its action in one atomic move. ", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
              title: "Outbound With Funds",
              repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-outbound-with-funds",
              description: "Bridge pBNB and call BNB target in one outbound"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7. Round-Trip with Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Model a round-trip as a request-response on Push. A user opens a request; the destination chain performs the work; the result lands back on Push and resolves the original request. Useful for oracle-style flows where Push waits on external execution. ", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
              title: "Round-Trip with Result",
              repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-roundtrip-with-result",
              description: "Request-fulfill state machine with FIFO queue"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8. Cross-Chain Cascade"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["One Push transaction fans out across multiple external chains in sequence. State changes land on two different external networks from a single user signature, with no off-chain glue between hops. ", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
              title: "Cross-Chain Cascade",
              repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/contract-initiated-roundtrip-between-external-chains",
              description: "Multi-chain cascade: Push -> BNB -> Push -> Solana"
            })]
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
        children: ["Basic Examples → ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/inbound-to-push-chain",
          children: "Inbound to Push Chain"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/outbound-from-push-chain",
          children: "Outbound from Push Chain"
        }), ", and the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-examples/round-trip-auto-back-leg",
          children: "Round-Trip with Auto Back-Leg"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/deep-dives/how-cea-works",
          children: "How CEA Works"
        }), " → The identity model that makes the round-trip guarantees possible."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account",
          children: "Derive Chain Executor Accounts (CEAs)"
        }), " → To pre-compute a contract's destination-chain CEA off-chain or on-chain."]
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
        // 1788341935488
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
        // 1788341944350
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