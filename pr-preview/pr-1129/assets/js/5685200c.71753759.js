"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[41538],{

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

/***/ 601104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_04_ui_kit_02_examples_05_send_transaction_mdx_568_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-04-ui-kit-02-examples-05-send-transaction-mdx-568.json
const site_docs_chain_04_ui_kit_02_examples_05_send_transaction_mdx_568_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/ui-kit/examples/docs-chain-ui-components-examples-send-transaction","title":"Send Transaction Example","description":"Send Transaction Example | Examples | UI Kit | Push Chain Docs","source":"@site/docs/chain/04-ui-kit/02-examples/05-Send-Transaction.mdx","sourceDirName":"chain/04-ui-kit/02-examples","slug":"/chain/ui-kit/examples/send-transaction-example","permalink":"/push-chain-website/pr-preview/pr-1129/docs/chain/ui-kit/examples/send-transaction-example","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/02-examples/05-Send-Transaction.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"docs-chain-ui-components-examples-send-transaction","title":"Send Transaction Example","hide_title":false,"slug":"./send-transaction-example","displayed_sidebar":"pushChainSidebar","sidebar_position":5,"image":"/assets/docs/previews/docs_chain_ui_components_examples_send_transaction--send_transaction_example.png"},"sidebar":"pushChainSidebar","previous":{"title":"Button Theme Overrides Example","permalink":"/push-chain-website/pr-preview/pr-1129/docs/chain/ui-kit/examples/button-theme-overrides-example"},"next":{"title":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1129/docs/chain/deep-dives"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/04-ui-kit/02-examples/05-Send-Transaction.mdx


const frontMatter = {
	id: 'docs-chain-ui-components-examples-send-transaction',
	title: 'Send Transaction Example',
	hide_title: false,
	slug: './send-transaction-example',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 5,
	image: '/assets/docs/previews/docs_chain_ui_components_examples_send_transaction--send_transaction_example.png'
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
        children: "Send Transaction Example | Examples | UI Kit | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example demonstrates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Basic send transaction functionality using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushChainClient"
        }), " of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "usePushChainClient"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live playground"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\nimport { useState } from 'react';\nimport { PushChain } from '@pushchain/core';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  function Component() {\n    const [txnHash, setTxnHash] = useState<string | null>(null);\n    const [isLoading, setIsLoading] = useState(false);\n\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    const handleSendTransaction = async () => {\n      if (pushChainClient) {\n        setIsLoading(true);\n        try {\n          const res = await pushChainClient.universal.sendTransaction({\n            to: '0xFaE3594C68EDFc2A61b7527164BDAe80bC302108',\n            value: PushChain.utils.helpers.parseUnits('1', 18), // 1 PC in uPC\n          });\n          setTxnHash(res.hash);\n        } catch (err) {\n          console.log(err);\n        } finally {\n          setIsLoading(false);\n        }\n      }\n    };\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n\n        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED &&\n          <button\n            disabled={isLoading}\n            style={{\n                background: 'transparent',\n                border: '1px solid',\n                borderRadius: '10px',\n                padding: '12px 18px',\n                cursor: 'pointer',\n                margin: '8px 0',\n            }}\n            onClick={handleSendTransaction}\n          >\n            Send Transaction\n          </button>\n        }\n        {txnHash && (\n            <>\n                <p>Txn Hash: {txnHash}</p>\n                <a\n                    href={pushChainClient?.explorer.getTransactionUrl(txnHash)}\n                    target=\"_blank\"\n                    rel=\"noopener noreferrer\"\n                >\n                    View in Explorer\n                </a>\n            </>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/node-and-system-tools/",
          children: "Chain Tools"
        }), " to learn more about running validators, localnet or everything in between."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dive deeper into concepts of Push Chain in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/deep-dives",
          children: "Deep Dives"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check out step by step implementation of App in end to end ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials",
          children: "Tutorials"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow or give a shoutout on X to our Intern at ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://x.com/PushChain",
          children: "@PushChain"
        }), "!"]
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



/***/ })

}]);