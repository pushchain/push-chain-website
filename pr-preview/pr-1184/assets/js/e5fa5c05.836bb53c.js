"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[5087],{

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


/***/ },

/***/ 669357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_04_ui_kit_02_examples_02_multiple_wallets_example_mdx_e5f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-04-ui-kit-02-examples-02-multiple-wallets-example-mdx-e5f.json
const site_docs_chain_04_ui_kit_02_examples_02_multiple_wallets_example_mdx_e5f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/ui-kit/examples/docs-chain-ui-components-examples-multiple-wallet","title":"Multiple Wallet Example","description":"Multiple Wallets Example | Examples | UI Kit | Push Chain Docs","source":"@site/docs/chain/04-ui-kit/02-examples/02-Multiple-Wallets-Example.mdx","sourceDirName":"chain/04-ui-kit/02-examples","slug":"/chain/ui-kit/examples/multiple-wallet-example","permalink":"/push-chain-website/pr-preview/pr-1184/docs/chain/ui-kit/examples/multiple-wallet-example","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/02-examples/02-Multiple-Wallets-Example.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"docs-chain-ui-components-examples-multiple-wallet","title":"Multiple Wallet Example","hide_title":false,"slug":"./multiple-wallet-example","displayed_sidebar":"pushChainSidebar","sidebar_position":2,"image":"/assets/docs/previews/docs_chain_ui_components_examples_multiple_wallet--multiple_wallet_example.png"},"sidebar":"pushChainSidebar","previous":{"title":"Single Wallet Example","permalink":"/push-chain-website/pr-preview/pr-1184/docs/chain/ui-kit/examples/single-wallet-example"},"next":{"title":"Theme Overrides Example","permalink":"/push-chain-website/pr-preview/pr-1184/docs/chain/ui-kit/examples/theme-overrides-example"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/04-ui-kit/02-examples/02-Multiple-Wallets-Example.mdx


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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Multiple Wallets Example | Examples | UI Kit | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example demonstrates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How to connect multiple wallets to your app."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using multiple chains wallets simultaneously for same app / user."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live playground"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// customPropMinimized='true'\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  const walletConfig = {\n    uid: 'wallet1',\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n    login: {\n      email: true,\n      google: true,\n      wallet: {\n        enabled: true,\n      },\n      appPreview: false,\n    },\n    modal: {\n      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,\n      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,\n      appPreview: true,\n    },\n  };\n\n  const secondWalletConfig = {\n    uid: 'wallet2',\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n    login: {\n      email: false,\n      google: false,\n      wallet: {\n        enabled: true,\n      },\n      appPreview: true,\n    },\n  };\n\n  const appMetadata = {\n    logoUrl:\n      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  const secondAppMetadata = {\n    logoUrl:\n      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  function WalletUI() {\n    return (\n      <div\n        style={{\n          display: 'flex',\n          flexDirection: 'row',\n          alignItems: 'center',\n          justifyContent: 'center',\n          gap: '2rem',\n        }}\n      >\n        <PushUniversalAccountButton connectButtonText='Connect Wallet 1' uid='wallet1' />\n        <PushUniversalAccountButton connectButtonText='Connect Wallet 2' uid='wallet2' />\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>\n      <PushUniversalWalletProvider\n        config={secondWalletConfig}\n        app={secondAppMetadata}\n      >\n        <WalletUI />\n      </PushUniversalWalletProvider>\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Up your app vibe with themizing UI Kit from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/examples/theme-overrides-example",
          children: "Theme Overrides Example"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ensure consistent styling of wallet connect button with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/examples/button-theme-overrides-example",
          children: "Button Theme Overrides Example"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check out step by step implementation of App in end to end ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials",
          children: "Tutorials"
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



/***/ }

}]);