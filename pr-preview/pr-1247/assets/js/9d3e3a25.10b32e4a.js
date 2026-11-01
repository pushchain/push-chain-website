"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[99415],{

/***/ 511008
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_06_agentic_marketplace_01_agentic_marketplace_mdx_9d3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-06-agentic-marketplace-01-agentic-marketplace-mdx-9d3.json
const site_docs_chain_03_build_06_agentic_marketplace_01_agentic_marketplace_mdx_9d3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/agentic-marketplace/docs-chain-build-agentic-marketplace","title":"Agentic Marketplace","description":"Agentic Marketplace | Build | Push Chain Docs","source":"@site/docs/chain/03-build/06-agentic-marketplace/01-agentic-marketplace.mdx","sourceDirName":"chain/03-build/06-agentic-marketplace","slug":"/chain/build/agentic-marketplace","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-marketplace","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/06-agentic-marketplace/01-agentic-marketplace.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-build-agentic-marketplace","title":"Agentic Marketplace","hide_title":false,"slug":"/chain/build/agentic-marketplace","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_build--agentic_marketplace.png"},"sidebar":"pushChainSidebar","previous":{"title":"Execution and Recovery","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-execution"},"next":{"title":"AgentCards and JobSpec Templates","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/marketplace-cards"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/03-build/06-agentic-marketplace/01-agentic-marketplace.mdx


const frontMatter = {
	id: 'docs-chain-build-agentic-marketplace',
	title: 'Agentic Marketplace',
	hide_title: false,
	slug: '/chain/build/agentic-marketplace',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_build--agentic_marketplace.png'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Cards and execution limits",
  "id": "cards-and-execution-limits",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Agentic Marketplace | Build | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "SDK checkpoint",
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "These examples target the Marketplace 2.1 SDK APIs in the 6.0.27-alpha.9 release. Confirm your installed package version before using them."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The SDK targets UniversalMarketplace ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2.1.0 on Push Donut"
      }), ", AGW v6 and the timing-free PRE/POST UniversalEvaluator. The kernel uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "eUSD"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x8E1eD40770cd197c80048cB3a86D3c8173cd560D"
      }), ") for provider escrow. PC pays transaction gas, outbound gas and evaluator reads through their respective mechanisms. Principal is a separate routed asset."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "client.market"
      }), " for cards and marketplace jobs, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "client.job"
      }), " for the kernel lifecycle, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain.utils.market"
      }), " for card rules and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain.utils.job"
      }), " for criteria. Constants are under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain.CONSTANTS.AGENTIC"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "utils.job.prePost"
      }), " exposes the same criteria helpers for explicitly configured integrations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The default marketplace is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x940744d96b14Bc030163C6084d602d57CE42ba48"
      }), ". The retired 2.0 marketplace and its job/card identifiers are not accepted as a compatible deployment. Rebuild saved plans and templates for 2.1; never replay old signed intents against the new address."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The client owns and funds the job wallet, the provider executes and submits work, and the configured evaluator checks the criteria. Opening grants permissions without moving principal or escrow. Deposit supplies wallet balances; funding locks the reviewed eUSD fee and prepays evaluator reads."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cards-and-execution-limits",
      children: "Cards and execution limits"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["One provider owns one card. A wallet can have only one active marketplace job; inspect ", (0,jsx_runtime.jsx)(_components.code, {
        children: "client.market.activeJob(wallet)"
      }), " before reusing it. Each card has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "minDuration"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maxDuration"
      }), "; its ordered rules carry their own execution chains. There is no card-level chain, principal range, execution window or settlement window. A job supplies ", (0,jsx_runtime.jsx)(_components.code, {
        children: "principal"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expiredAt"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "params"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cards support up to four distinct external EVM chains, subject to the live ", (0,jsx_runtime.jsx)(_components.code, {
        children: "maxRulesPerCard"
      }), ". Discovery exposes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "chains"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "verified"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "disabled"
      }), " and the cap. Registration and update simulate the contract call; a verified label applies to the current version, not every future revision."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multi-rule execution is gated."
      }), " The current UniversalHook binds only one rules ID, despite the marketplace cap being four. The SDK supports multi-rule authoring, registration and previews but refuses opening, funding and deposits for multi-rule jobs. It never silently chooses the first rule. Existing jobs remain inspectable and owner cancellation handles all recorded permissions. Raising the cap alone does not remove this gate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Exactly one asset across all rules has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PRINCIPAL"
      }), " total. It belongs to its own source chain. Every listed asset must have a compatible PRC20 route; symbols do not establish routing. There is no PUSD redemption or basket conversion. Native Push rules and Solana marketplace rules are outside this contract format."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Read ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/marketplace-cards/",
        children: "Card authoring"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/marketplace-opening/",
        children: "Review and open"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/marketplace-jobs/",
        children: "Funding and lifecycle"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/marketplace-previews/",
        children: "Paid previews"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/marketplace-troubleshooting/",
        children: "Troubleshooting"
      }), "."]
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

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ }

}]);