"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[19794],{

/***/ 659131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_05_agentic_wallets_01_agentic_wallets_mdx_ae9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-05-agentic-wallets-01-agentic-wallets-mdx-ae9.json
const site_docs_chain_03_build_05_agentic_wallets_01_agentic_wallets_mdx_ae9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/agentic-wallets/docs-chain-build-agentic-wallets","title":"Agentic Wallets","description":"Agentic Wallets | Build | Push Chain Docs","source":"@site/docs/chain/03-build/05-agentic-wallets/01-agentic-wallets.mdx","sourceDirName":"chain/03-build/05-agentic-wallets","slug":"/chain/build/agentic-wallets","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-wallets","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/05-agentic-wallets/01-agentic-wallets.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-build-agentic-wallets","title":"Agentic Wallets","hide_title":false,"slug":"/chain/build/agentic-wallets","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_build--agentic_wallets.png"},"sidebar":"pushChainSidebar","previous":{"title":"Track Universal Read","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/track-universal-read"},"next":{"title":"Connect and Manage Wallets","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/build/agentic-wallet-management"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/03-build/05-agentic-wallets/01-agentic-wallets.mdx


const frontMatter = {
	id: 'docs-chain-build-agentic-wallets',
	title: 'Agentic Wallets',
	hide_title: false,
	slug: '/chain/build/agentic-wallets',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_build--agentic_wallets.png'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Agentic Wallets | Build | Push Chain Docs"
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
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Agentic Wallets (AGWs) separate ownership from delegated execution on Push Donut. The owner creates the wallet and grants or removes permissions. The agent signs calls within those permissions and cannot be the owner."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An external signer's Universal Executor Account (UEA) is its Push identity. The AGW is a separate contract holding its own Push assets and PC. A destination Chain Executor Account (CEA) holds assets and executes calls on that destination. Use the agent's Push address in a rule, including its UEA when it signs from another chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Funding an AGW is separate from creating it. Review asset addresses, raw-unit caps, expiry and PC requirements before transferring funds. Permission does not imply a sufficient balance."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Read ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/agentic-wallet-management/",
        children: "Connect and manage wallets"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/agentic-rules/",
        children: "Rules"
      }), ", ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/agentic-presets/",
        children: "Presets"
      }), ", then ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/agentic-execution/",
        children: "Execution and recovery"
      }), ". Reuse ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/initialize-push-chain-client/",
        children: "client initialization"
      }), " for signer setup."]
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