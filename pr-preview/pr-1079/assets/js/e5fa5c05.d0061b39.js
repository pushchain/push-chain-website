"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[95087],{

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

/***/ 410789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'docs-chain-ui-components-examples-multiple-wallet',
	title: 'Multiple Wallet Example',
	hide_title: false,
	slug: './multiple-wallet-example',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_chain_ui_components_examples_multiple_wallet--multiple_wallet_example.png'
};
const contentTitle = undefined;
const metadata = {
  "id": "chain/ui-kit/examples/docs-chain-ui-components-examples-multiple-wallet",
  "title": "Multiple Wallet Example",
  "description": "Multiple Wallets Example | Examples | UI Kit | Push Chain Docs",
  "source": "@site/docs/chain/04-ui-kit/02-examples/02-Multiple-Wallets-Example.mdx",
  "sourceDirName": "chain/04-ui-kit/02-examples",
  "slug": "/chain/ui-kit/examples/multiple-wallet-example",
  "permalink": "/push-chain-website/pr-preview/pr-1079/docs/chain/ui-kit/examples/multiple-wallet-example",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/02-examples/02-Multiple-Wallets-Example.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "id": "docs-chain-ui-components-examples-multiple-wallet",
    "title": "Multiple Wallet Example",
    "hide_title": false,
    "slug": "./multiple-wallet-example",
    "displayed_sidebar": "pushChainSidebar",
    "sidebar_position": 2,
    "image": "/assets/docs/previews/docs_chain_ui_components_examples_multiple_wallet--multiple_wallet_example.png"
  },
  "sidebar": "pushChainSidebar",
  "previous": {
    "title": "Single Wallet Example",
    "permalink": "/push-chain-website/pr-preview/pr-1079/docs/chain/ui-kit/examples/single-wallet-example"
  },
  "next": {
    "title": "Theme Overrides Example",
    "permalink": "/push-chain-website/pr-preview/pr-1079/docs/chain/ui-kit/examples/theme-overrides-example"
  }
};
const assets = {

};



const toc = [{
  "value": "Live playground",
  "id": "live-playground",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: "Multiple Wallets Example | Examples | UI Kit | Push Chain Docs"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This example demonstrates:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "How to connect multiple wallets to your app."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Using multiple chains wallets simultaneously for same app / user."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live playground"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// customPropMinimized='true'\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  const walletConfig = {\n    uid: 'wallet1',\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n    login: {\n      email: true,\n      google: true,\n      wallet: {\n        enabled: true,\n      },\n      appPreview: false,\n    },\n    modal: {\n      loginLayout: PushUI.CONSTANTS.LOGIN.SPLIT,\n      connectedLayout: PushUI.CONSTANTS.CONNECTED.HOVER,\n      appPreview: true,\n    },\n  };\n\n  const secondWalletConfig = {\n    uid: 'wallet2',\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n    login: {\n      email: false,\n      google: false,\n      wallet: {\n        enabled: true,\n      },\n      appPreview: true,\n    },\n  };\n\n  const appMetadata = {\n    logoUrl:\n      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  const secondAppMetadata = {\n    logoUrl:\n      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  function WalletUI() {\n    const { universalAccount } = usePushWalletContext('wallet1');\n    const { universalAccount: secondAccount } = usePushWalletContext('wallet2');\n\n    return (\n      <div\n        style={{\n          display: 'flex',\n          flexDirection: 'row',\n          alignItems: 'center',\n          justifyContent: 'center',\n          gap: '2rem',\n        }}\n      >\n        <PushUniversalAccountButton connectButtonText='Connect Wallet 1' uid='wallet1' />\n        <PushUniversalAccountButton connectButtonText='Connect Wallet 2' uid='wallet2' />\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>\n      <PushUniversalWalletProvider\n        config={secondWalletConfig}\n        app={secondAppMetadata}\n      >\n        <WalletUI />\n      </PushUniversalWalletProvider>\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Up your app vibe with themizing UI Kit from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/examples/theme-overrides-example",
          children: "Theme Overrides Example"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Ensure consistent styling of wallet connect button with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/examples/button-theme-overrides-example",
          children: "Button Theme Overrides Example"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Check out step by step implementation of App in end to end ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chain/tutorials",
          children: "Tutorials"
        })]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ })

}]);