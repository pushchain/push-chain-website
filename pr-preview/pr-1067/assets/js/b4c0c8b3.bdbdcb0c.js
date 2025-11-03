"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[84816],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 119365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){let{children,hidden,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ }),

/***/ 303999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
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
 */function Details(_ref){let{summary,children}=_ref,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);const isBrowser=(0,useIsBrowser/* default */.A)();const detailsRef=(0,react.useRef)(null);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open});// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const[open,setOpen]=(0,react.useState)(props.open);const summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!==null&&summary!==void 0?summary:'Details'});return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",Object.assign({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,dist_clsx/* default */.A)(styles_module.details,isBrowser&&styles_module.isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.collapsibleContent,children:children})})]})));}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_b_Ee"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses='alert alert--info';function Details_Details(_ref){let props=Object.assign({},(_objectDestructuringEmpty(_ref),_ref));return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,Object.assign({},props,{className:(0,clsx/* default */.A)(InfimaClasses,Details_styles_module.details,props.className)}));}

/***/ }),

/***/ 333396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_06_node_and_system_tools_01_push_validator_mdx_b4c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-06-node-and-system-tools-01-push-validator-mdx-b4c.json
const site_docs_chain_06_node_and_system_tools_01_push_validator_mdx_b4c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/node-and-system-tools/docs-chain-node-and-system-tools-running-validator","title":"Running Push Validator","description":"Running Push Validators | Deep Dives | Push Chain Docs","source":"@site/docs/chain/06-node-and-system-tools/01-Push-Validator.mdx","sourceDirName":"chain/06-node-and-system-tools","slug":"/chain/node-and-system-tools/running-push-validator","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/node-and-system-tools/running-push-validator","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/06-node-and-system-tools/01-Push-Validator.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-node-and-system-tools-running-validator","title":"Running Push Validator","hide_title":false,"slug":"./running-push-validator","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_node_and_system_tools_running_validator--running_push_validator.png"},"sidebar":"pushChainSidebar","previous":{"title":"System & Node Tools","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/node-and-system-tools"},"next":{"title":"Running Localnet","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/node-and-system-tools/localnet"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(411470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(119365);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 4 modules
var Details = __webpack_require__(303999);
;// ./docs/chain/06-node-and-system-tools/01-Push-Validator.mdx


const frontMatter = {
	id: 'docs-chain-node-and-system-tools-running-validator',
	title: 'Running Push Validator',
	hide_title: false,
	slug: './running-push-validator',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_node_and_system_tools_running_validator--running_push_validator.png'
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "🚀 Quick Start (1-2 minutes)",
  "id": "-quick-start-1-2-minutes",
  "level": 2
}, {
  "value": "Step 1: Install &amp; Start",
  "id": "step-1-install--start",
  "level": 3
}, {
  "value": "Step 2: Verify Sync",
  "id": "step-2-verify-sync",
  "level": 3
}, {
  "value": "Step 3: Register Validator",
  "id": "step-3-register-validator",
  "level": 3
}, {
  "value": "📊 Dashboard",
  "id": "-dashboard",
  "level": 2
}, {
  "value": "📖 Commands",
  "id": "-commands",
  "level": 2
}, {
  "value": "Core",
  "id": "core",
  "level": 3
}, {
  "value": "Validator Operations",
  "id": "validator-operations",
  "level": 3
}, {
  "value": "Monitoring",
  "id": "monitoring",
  "level": 3
}, {
  "value": "Management",
  "id": "management",
  "level": 3
}, {
  "value": "⚡ Features",
  "id": "-features",
  "level": 2
}, {
  "value": "📊 Network",
  "id": "-network",
  "level": 2
}, {
  "value": "🔧 Advanced Setup (Optional)",
  "id": "-advanced-setup-optional",
  "level": 2
}, {
  "value": "Setup NGINX with SSL",
  "id": "setup-nginx-with-ssl",
  "level": 3
}, {
  "value": "Log Rotation",
  "id": "log-rotation",
  "level": 3
}, {
  "value": "File Locations",
  "id": "file-locations",
  "level": 3
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Running Push Validators | Deep Dives | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fast validator setup for Push Chain"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-start-1-2-minutes",
      children: "🚀 Quick Start (1-2 minutes)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-install--start",
      children: "Step 1: Install & Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -fsSL https://get.push.network/node/install.sh | bash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatically installs and starts your validator using state sync (no full sync needed)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Restart terminal or run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "source ~/.bashrc"
        }), " to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push-validator"
        }), " from anywhere."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-verify-sync",
      children: "Step 2: Verify Sync"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator status\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wait for: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "✅ Catching Up: false"
      }), " (takes ~1-2 minutes with state sync)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-register-validator",
      children: "Step 3: Register Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator register-validator\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      }), " 1.5+ PC tokens from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://faucet.push.org",
        children: "faucet"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Done! Your validator is running with automatic recovery enabled! 🎉"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-dashboard",
      children: "📊 Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitor your validator in real-time with an interactive dashboard:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator dashboard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Node Status"
        }), " - Process state, RPC connectivity, resource usage (CPU, memory, disk)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain Sync"
        }), " - Real-time block height, sync progress with ETA, network latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator Metrics"
        }), " - Bonding status, voting power, commission rate, accumulated rewards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network Overview"
        }), " - Connected peers, chain ID, active validators list"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Live Logs"
        }), " - Stream node activity with search and filtering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-Refresh"
        }), " - Updates every 2 seconds for real-time monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dashboard provides everything you need to monitor validator health and performance at a glance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-commands",
      children: "📖 Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core",
      children: "Core"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator start                # Start with state sync (2-3 min)\npush-validator stop                 # Stop node\npush-validator status               # Check sync & validator status\npush-validator dashboard            # Live interactive monitoring dashboard\npush-validator register-validator   # Register as validator\npush-validator logs                 # View logs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validator-operations",
      children: "Validator Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator increase-stake       # Increase validator stake and voting power\npush-validator unjail               # Restore jailed validator to active status\npush-validator withdraw-rewards     # Withdraw validator rewards and commission\npush-validator restake              # Auto-withdraw and restake all rewards to increase validator power\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring",
      children: "Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator sync            # Monitor sync progress\npush-validator peers           # Show peer connections (from local RPC)\npush-validator doctor          # Run diagnostic checks on validator setup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "management",
      children: "Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator restart         # Restart node\npush-validator validators      # List validators (supports --output json)\npush-validator balance         # Check balance (defaults to validator key)\npush-validator reset           # Reset chain data (keeps address book)\npush-validator full-reset      # ⚠️ Complete reset (deletes ALL keys and data)\npush-validator backup          # Backup config and validator state\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-features",
      children: "⚡ Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State Sync"
        }), ": 1-2 minute setup (no full blockchain download)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interactive Logs"
        }), ": Real-time log viewer with search and filtering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smart Detection"
        }), ": Monitors for sync stalls and network issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliable Snapshots"
        }), ": Uses trusted RPC nodes for recovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Outputs"
        }), ": JSON, YAML, or text format support"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-network",
      children: "📊 Network"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push_42101-1"
        }), " (Testnet)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min Stake"
        }), ": 1.5 PC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Faucet"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://faucet.push.org",
          children: "https://faucet.push.org"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explorer"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://donut.push.network",
          children: "https://donut.push.network"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-advanced-setup-optional",
      children: "🔧 Advanced Setup (Optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup-nginx-with-ssl",
      children: "Setup NGINX with SSL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "bash scripts/setup-nginx.sh yourdomain.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "https://yourdomain.com"
        }), " - Cosmos RPC endpoint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "https://evm.yourdomain.com"
        }), " - EVM RPC endpoint"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic SSL certificates via Let's Encrypt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting and security headers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain pointing to your server IP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ports 80/443 open"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ubuntu/Debian system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log-rotation",
      children: "Log Rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "bash scripts/setup-log-rotation.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configures daily rotation with 14-day retention and compression."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-locations",
      children: "File Locations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manager"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.local/bin/push-validator"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.local/bin/pchaind"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.pchain/config/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.pchain/data/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logs"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.pchain/logs/pchaind.log"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backups"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/push-node-backups/"
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



/***/ }),

/***/ 411470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(117559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(823104);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(956347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(300205);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(757485);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(231682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(70679);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){var _React$Children$toArr,_React$Children$toArr2;return(_React$Children$toArr=(_React$Children$toArr2=react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");}))===null||_React$Children$toArr2===void 0?void 0:_React$Children$toArr2.filter(Boolean))!==null&&_React$Children$toArr!==void 0?_React$Children$toArr:[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(a=>a.value).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(a=>a.value).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>{tabRefs.push(tabControl);},onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value}),value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:(0,clsx/* default */.A)('margin-top--md',selectedTabItem.props.className)});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.tabs.container,// former name kept for backward compatibility
// see https://github.com/facebook/docusaurus/pull/4086
'tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,Object.assign({},tabs,props)),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,Object.assign({},tabs,props))]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,Object.assign({},props,{children:sanitizeTabsChildren(props.children)}),String(isBrowser));}

/***/ })

}]);