"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[91919],{

/***/ 238241
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_05_agentic_wallets_05_agentic_execution_mdx_beb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-05-agentic-wallets-05-agentic-execution-mdx-beb.json
const site_docs_chain_03_build_05_agentic_wallets_05_agentic_execution_mdx_beb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/agentic-wallets/docs-chain-build-agentic-execution","title":"Execution and Recovery","description":"Execution and Recovery | Build | Push Chain Docs","source":"@site/docs/chain/03-build/05-agentic-wallets/05-agentic-execution.mdx","sourceDirName":"chain/03-build/05-agentic-wallets","slug":"/chain/build/agentic-execution","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/05-agentic-wallets/05-agentic-execution.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"docs-chain-build-agentic-execution","title":"Execution and Recovery","hide_title":false,"slug":"/chain/build/agentic-execution","displayed_sidebar":"pushChainSidebar","sidebar_position":5,"image":"/assets/docs/previews/docs_chain_build_agentic_execution--execution_and_recovery.png"},"sidebar":"pushChainSidebar","previous":{"title":"Uniswap and Aave Presets","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-presets"},"next":{"title":"Agentic Marketplace","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-marketplace"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/03-build/05-agentic-wallets/05-agentic-execution.mdx


const frontMatter = {
	id: 'docs-chain-build-agentic-execution',
	title: 'Execution and Recovery',
	hide_title: false,
	slug: '/chain/build/agentic-execution',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 5,
	image: '/assets/docs/previews/docs_chain_build_agentic_execution--execution_and_recovery.png'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Execute as the agent",
  "id": "execute-as-the-agent",
  "level": 2
}, {
  "value": "Spend, checkpoints and execution",
  "id": "spend-checkpoints-and-execution",
  "level": 2
}, {
  "value": "Displaying errors in the UI",
  "id": "displaying-errors-in-the-ui",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Execution and Recovery | Build | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "SDK version",
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["These examples use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@pushchain/core@6.0.27-alpha.9"
        }), " with AGW v6 on Push Donut. They do not execute automatically."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "execute-as-the-agent",
      children: "Execute as the agent"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Initialize a second client with the agent signer and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agenticWallet: address"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "agentClient.universal.sendTransaction"
      }), " with the permitted target and encoded call. The wallet must already hold the assets and PC required by the transaction. Preserve the returned transaction hash before waiting; inspect destination execution as well as the Push receipt. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/send-universal-transaction/",
        children: "Universal Transactions"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "spend-checkpoints-and-execution",
      children: "Spend, checkpoints and execution"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "rules.get/list"
      }), " return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spent"
      }), ". Universal spend contains one entry per asset in stored order. A single native call has scalar value/amount/call counters. Several native calls return ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spent.actions"
      }), ", with each entry identified by target and selector; unrelated token amounts are not summed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Connect with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain.initialize(signer, { agenticWallet: address })"
      }), " to send from the wallet. Signer identity determines the owner or agent door. Native agent arrays are atomic and every call passes policy checks. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "from"
      }), " cannot be overridden. Responses identify the wallet as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "from"
      }), " and signer as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "origin"
      }), ", including wait/replay results."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Updates assert existing spend, delete the old rule and grant its replacement atomically. Native updates assert each action separately: a rule with N native actions records N+4 checkpoints on current v6. Agent execution records no owner checkpoint. Direct ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setLabel"
      }), " records none."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "displaying-errors-in-the-ui",
      children: "Displaying errors in the UI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "userMessage"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AgenticError"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AgenticRevertError"
      }), ". Keep ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "message"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hint"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "details"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "decodedError"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cause"
      }), " for diagnostics or application-specific translations. Unknown exceptions should get a neutral fallback instead of raw RPC/ABI text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "import { AgenticError, AgenticRevertError } from '@pushchain/core';\nfunction walletErrorText(error: unknown): string {\n  if (error instanceof AgenticError || error instanceof AgenticRevertError) {\n    return error.userMessage;\n  }\n  return 'The request could not be completed. Check wallet activity before trying again.';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Creation and rule-preparation errors include a zero-based ", (0,jsx_runtime.jsx)(_components.code, {
        children: "details.ruleIndex"
      }), " when a rule can be identified, with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assetIndex"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callIndex"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "field"
      }), " where available. The UI message uses a one-based rule number. Use these details to show the error on the relevant rule instead of only in a footer. Read/receipt failures preserve their causes and transaction hashes; do not automatically retry a submitted transaction whose outcome is unknown."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "TOKEN_ROUTE_UNAVAILABLE"
      }), " means an asset cannot be resolved for transfers from Push. Choose a token with a supported route on this network, or wait for a verified PRC20 route for that exact token address. Changing a symbol does not create a route. Display ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error.userMessage"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A DEX condition-limit failure reports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "details.reason = 'RULE_CONSTRAINT_LIMIT'"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "actual"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callCount"
      }), ". Conditions here are generated input checks (for example token, recipient and amount checks), rather than the number of visible function names. A stock DEX preset contains eight allowed-call entries and twenty-one conditions. Appending the same call list again makes forty-two conditions. The SDK rejects this; it does not deduplicate, remove conditions or split authority automatically. Preserve per-chain rules and regenerate after edits rather than appending generated calls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the review screen, show the actual network (including testnet name), selected token addresses and limits. Label maxGasPerCall as a maximum PC gas budget, not a guaranteed fee or execution gas-unit count. maxTotal meters cumulative Push outbounds, including outbounds whose destination execution later fails; it is not a lifetime destination-spend limit. Destination pins and maxValue limit each call separately."
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