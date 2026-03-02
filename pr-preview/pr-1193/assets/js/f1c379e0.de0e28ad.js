"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[8617],{

/***/ 481105
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_04_ui_kit_01_customizations_05_customizations_use_push_chain_mdx_f1c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-04-ui-kit-01-customizations-05-customizations-use-push-chain-mdx-f1c.json
const site_docs_chain_04_ui_kit_01_customizations_05_customizations_use_push_chain_mdx_f1c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/ui-kit/customizations/docs-chain-ui-kit-customizations-use-push-chain","title":"usePushChain","description":"usePushChain | Customizations | UI Kit | Push Chain Docs","source":"@site/docs/chain/04-ui-kit/01-customizations/05-Customizations-Use-Push-Chain.mdx","sourceDirName":"chain/04-ui-kit/01-customizations","slug":"/chain/ui-kit/customizations/use-push-chain","permalink":"/push-chain-website/pr-preview/pr-1193/docs/chain/ui-kit/customizations/use-push-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/01-customizations/05-Customizations-Use-Push-Chain.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"docs-chain-ui-kit-customizations-use-push-chain","title":"usePushChain","hide_title":false,"slug":"./use-push-chain","displayed_sidebar":"pushChainSidebar","sidebar_position":5,"image":"/assets/docs/previews/docs_chain_ui_kit_customizations_use_push_chain--usepushchain.png"},"sidebar":"pushChainSidebar","previous":{"title":"usePushChainClient","permalink":"/push-chain-website/pr-preview/pr-1193/docs/chain/ui-kit/customizations/use-push-chain-client"},"next":{"title":"Theme Variables","permalink":"/push-chain-website/pr-preview/pr-1193/docs/chain/ui-kit/customizations/theme-variables"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/04-ui-kit/01-customizations/05-Customizations-Use-Push-Chain.mdx


const frontMatter = {
	id: 'docs-chain-ui-kit-customizations-use-push-chain',
	title: 'usePushChain',
	hide_title: false,
	slug: './use-push-chain',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 5,
	image: '/assets/docs/previews/docs_chain_ui_kit_customizations_use_push_chain--usepushchain.png'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Usage",
  "id": "usage",
  "level": 2
}, {
  "value": "Returns",
  "id": "returns",
  "level": 3
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
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
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
        children: "usePushChain | Customizations | UI Kit | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usePushChain"
      }), " hook provides direct access to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain"
      }), " core SDK from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@pushchain/core"
      }), " package. This hook makes it easier to use Push Chain utilities, constants and initialization methods."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It is particularly useful when you want to interact with core functionalities like account utilities, helper fucntions, signer construction, and the PushChain.initialize() method to create your own client."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// customPropHighlightRegexStart=usePushChainClient\\(\n// customPropHighlightRegexEnd=\\);\n// customPropGTagEvent=ui_kit_use_push_chain_hook\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushChainClient,\n  usePushChain,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Create a component that uses the hook inside the provider context\n  const Component = () => {\n    const { PushChain } = usePushChain();\n    const { pushChainClient, isInitialized } = usePushChainClient();\n\n    return (\n        <>\n            {isInitialized && pushChainClient && (\n                <p>Chain Agnostic: {\n                    PushChain.utils.account.toChainAgnostic(\n                        pushChainClient.universal.origin.address,\n                        {\n                            chain: pushChainClient.universal.origin.chain\n                        }\n                    )}\n                </p>  \n            )}\n        </>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider\n      config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}\n    >\n        <PushUniversalAccountButton />\n        <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "returns",
      children: "Returns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your core SDK."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Customize UI Kit look and feel with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/theme-variables/",
          children: "Theme Variables"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore more about PushChain core SDK in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/",
          children: "Build"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check out end to end ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials",
          children: "Tutorials"
        }), " to see step by step implementation of Apps"]
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