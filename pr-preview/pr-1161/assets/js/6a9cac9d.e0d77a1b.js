"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[71815],{

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

/***/ 910075
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_04_ui_kit_01_customizations_04_customizations_use_push_chain_client_mdx_6a9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-04-ui-kit-01-customizations-04-customizations-use-push-chain-client-mdx-6a9.json
const site_docs_chain_04_ui_kit_01_customizations_04_customizations_use_push_chain_client_mdx_6a9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/ui-kit/customizations/docs-chain-ui-kit-customizations-use-push-chain-client","title":"usePushChainClient","description":"usePushChainClient | Customizations | UI Kit | Push Chain Docs","source":"@site/docs/chain/04-ui-kit/01-customizations/04-Customizations-Use-Push-Chain-Client.mdx","sourceDirName":"chain/04-ui-kit/01-customizations","slug":"/chain/ui-kit/customizations/use-push-chain-client","permalink":"/push-chain-website/pr-preview/pr-1161/docs/chain/ui-kit/customizations/use-push-chain-client","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/01-customizations/04-Customizations-Use-Push-Chain-Client.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"docs-chain-ui-kit-customizations-use-push-chain-client","title":"usePushChainClient","hide_title":false,"slug":"./use-push-chain-client","displayed_sidebar":"pushChainSidebar","sidebar_position":4,"image":"/assets/docs/previews/docs_chain_ui_kit_customizations_use_push_chain_client--usepushchainclient.png"},"sidebar":"pushChainSidebar","previous":{"title":"usePushWalletContext","permalink":"/push-chain-website/pr-preview/pr-1161/docs/chain/ui-kit/customizations/use-push-wallet-context"},"next":{"title":"usePushChain","permalink":"/push-chain-website/pr-preview/pr-1161/docs/chain/ui-kit/customizations/use-push-chain"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/04-ui-kit/01-customizations/04-Customizations-Use-Push-Chain-Client.mdx


const frontMatter = {
	id: 'docs-chain-ui-kit-customizations-use-push-chain-client',
	title: 'usePushChainClient',
	hide_title: false,
	slug: './use-push-chain-client',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 4,
	image: '/assets/docs/previews/docs_chain_ui_kit_customizations_use_push_chain_client--usepushchainclient.png'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Usage",
  "id": "usage",
  "level": 2
}, {
  "value": "Parameters",
  "id": "parameters",
  "level": 3
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
        children: "usePushChainClient | Customizations | UI Kit | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usePushChainClient"
      }), " hook initializes and manages a Push Chain client instance for blockchain interactions. It integrates with your wallet connection and handles network configuration automatically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usePushWalletContext"
      }), ", This hook must also be used within a component that's wrapped by a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// customPropHighlightRegexStart=usePushChainClient\\(\n// customPropHighlightRegexEnd=\\);\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Create a component that uses the hook inside the provider context\n  const ClientComponent = () => {\n    const { pushChainClient, isInitialized, error } = usePushChainClient(); // optional: pass uid parameter for targeting a specific wallet instance\n\n    return (\n      <div>\n        <h3>\n          Chain Client Status:{' '}\n          {isInitialized ? 'Initialized 🎉' : 'Not Initialized'}\n        </h3>\n        {pushChainClient && (\n          <>\n            <p>Executor: {pushChainClient.universal.account}</p>\n            <p>\n              Origin: {pushChainClient.universal.origin.address} | Chain:{' '}\n              {pushChainClient.universal.origin.chain}\n            </p>\n          </>\n        )}\n        {error && <p>Error: {error.message}</p>}\n      </div>\n    );\n  };\n\n  return (\n    <PushUniversalWalletProvider\n      config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}\n    >\n      <PushUniversalAccountButton />\n      <ClientComponent />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parameters",
      children: "Parameters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Arguments"
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
              children: "uid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional ID for targeting a specific wallet instance, must match ", (0,jsx_runtime.jsx)(_components.code, {
              children: "config.uid"
            }), " of specific ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PushUniversalWalletProvider"
            }), " instance.", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)("br", {}), "See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/docs/chain/ui-kit/examples/multiple-wallet-example/",
              children: "multiple wallet example"
            }), " for usage."]
          })]
        })
      })]
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
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pushChainClient"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "PushChainClient"
            }), " | ", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your initialized client (once ready)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isInitialized"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), " while the client is booting up."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "error"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Error"
            }), " | ", (0,jsx_runtime.jsx)(_components.code, {
              children: "null"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure information, if any."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Learn how to use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/use-push-chain/",
          children: "usePushChain"
        }), " in your app"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore utilizing usePushChainClient by sending transactions in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/examples/",
          children: "Examples"
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



/***/ }

}]);