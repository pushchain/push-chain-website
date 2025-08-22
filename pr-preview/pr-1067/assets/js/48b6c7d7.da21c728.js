"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[99294],{

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

/***/ 323495:
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
	id: 'docs-chain-tutorials-universal-gateway-payment',
	title: 'Build a Universal Gateway Payment with Push Chain',
	hide_title: false,
	slug: './tutorial-universal-gateway-payment',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 5,
	image: '/assets/docs/previews/docs_chain_tutorials_universal_gateway_payment--build_a_universal_gateway_payment_with_push_chain.png'
};
const contentTitle = undefined;
const metadata = {
  "id": "chain/tutorials/docs-chain-tutorials-universal-gateway-payment",
  "title": "Build a Universal Gateway Payment with Push Chain",
  "description": "Build a Universal Gateway Payment with Push Chain | Tutorials | Push Chain Docs",
  "source": "@site/docs/chain/01-tutorials/05-Universal-Gateway-Payment.mdx",
  "sourceDirName": "chain/01-tutorials",
  "slug": "/chain/tutorials/tutorial-universal-gateway-payment",
  "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-gateway-payment",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/05-Universal-Gateway-Payment.mdx",
  "tags": [],
  "version": "current",
  "sidebarPosition": 5,
  "frontMatter": {
    "id": "docs-chain-tutorials-universal-gateway-payment",
    "title": "Build a Universal Gateway Payment with Push Chain",
    "hide_title": false,
    "slug": "./tutorial-universal-gateway-payment",
    "displayed_sidebar": "pushChainSidebar",
    "sidebar_position": 5,
    "image": "/assets/docs/previews/docs_chain_tutorials_universal_gateway_payment--build_a_universal_gateway_payment_with_push_chain.png"
  },
  "sidebar": "pushChainSidebar",
  "previous": {
    "title": "Configure Scaffold ETH 2 for Push Chain: Deploy and Interact with a Contract",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-scaffoldeth2-pushchain-governance"
  },
  "next": {
    "title": "Setup",
    "permalink": "/push-chain-website/pr-preview/pr-1067/docs/chain/setup"
  }
};
const assets = {

};

/*Content Start*/


const toc = [{
  "value": "Why Push Chain for payments",
  "id": "why-push-chain-for-payments",
  "level": 2
}, {
  "value": "What you&#39;ll build",
  "id": "what-youll-build",
  "level": 2
}, {
  "value": "Create the project",
  "id": "create-the-project",
  "level": 2
}, {
  "value": "1) Wrap your app with Push Universal Wallet",
  "id": "1-wrap-your-app-with-push-universal-wallet",
  "level": 2
}, {
  "value": "2) Build the Universal Payment UI",
  "id": "2-build-the-universal-payment-ui",
  "level": 2
}, {
  "value": "2.1) Hooks you&#39;ll use",
  "id": "21-hooks-youll-use",
  "level": 3
}, {
  "value": "2.2) Local state &amp; derived amount",
  "id": "22-local-state--derived-amount",
  "level": 3
}, {
  "value": "2.3) Send transaction",
  "id": "23-send-transaction",
  "level": 3
}, {
  "value": "2.4) Connect Account Button and check connection status",
  "id": "24-connect-account-button-and-check-connection-status",
  "level": 3
}, {
  "value": "2.5) Display Block Explorer URL",
  "id": "25-display-block-explorer-url",
  "level": 3
}, {
  "value": "2.6) Complete code",
  "id": "26-complete-code",
  "level": 3
}, {
  "value": "How this enables “Stripe‑like” payments",
  "id": "how-this-enables-stripelike-payments",
  "level": 3
}, {
  "value": "3) Run it",
  "id": "3-run-it",
  "level": 2
}, {
  "value": "Notes &amp; tips",
  "id": "notes--tips",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: "Build a Universal Gateway Payment with Push Chain | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Welcome! In this tutorial you'll build a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal Payment Gateway"
      }), " where ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "any user can pay you from their preferred chain"
      }), " (e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Ethereum"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Solana"
      }), ") ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "to a single Push Chain address"
      }), ". Think of it like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Stripe for chains"
      }), "—", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Visa or Mastercard"
      }), " doesn't matter; ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "everyone can pay"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "why-push-chain-for-payments",
      children: "Why Push Chain for payments"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Most payments in web3 are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "not unified"
      }), "—they force users to switch chains, bridge, or hold the “right” gas token. That leads to drop‑offs and lost revenue. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Chain"
      }), " fixes this by giving you:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Single transaction from any chain"
        }), " → Users can execute a transaction ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "from their chain"
        }), " to your Push address without custom bridges."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Wallet abstraction"
        }), " → Connect with MetaMask, Phantom, email, Google, etc., via a single provider."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Universal fee abstraction"
        }), " → Let users pay gas in their ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "native tokens"
        }), " (e.g. ETH/SOL) while your app receives funds on Push Chain."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Result: You don't exclude users by their wallet or chain, just like Stripe doesn't exclude card networks."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-youll-build",
      children: "What you'll build"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A minimal React + Vite app where users:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Connect with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Push Universal Wallet"
        }), " (MetaMask, Phantom, email, etc.)"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Pick between ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "3 preset amounts"
        }), " (1 PC, 5 PC, or 10 PC) or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "enter a custom amount"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Send"
        }), " to your Push wallet address"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "transaction hash"
        }), " with an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Explorer link"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "create-the-project",
      children: "Create the project"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "First, create a new Vite TypeScript React project:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npm create vite@latest universal-payment-gateway -- --template \"react-ts\"\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This will create a new directory called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "universal-payment-gateway"
      }), " with a basic React + TypeScript setup."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now install the required Push Chain packages:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @pushchain/ui-kit @pushchain/core\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "1-wrap-your-app-with-push-universal-wallet",
      children: "1) Wrap your app with Push Universal Wallet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Open ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "main.tsx"
        })
      }), " and wrap your app with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), ". You can also supply per‑chain RPCs (optional)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["For more detailed information about Push Universal Wallet integration, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/integrate-push-universal-wallet",
          children: "Integrate Push Universal Wallet"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/main.tsx\"",
        children: "import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App.tsx';\n// Import Push Chain UI Kit\nimport { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';\n\n// Add Wallet Config\nconst walletConfig = {\n  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  chainConfig: {\n    rpcUrls: {\n      [PushUI.CONSTANTS.CHAIN.SOLANA]: [\n        'https://devnet.helius-rpc.com/?api-key=YOUR_HELIUS_API_KEY'\n      ],\n    },\n  },\n};\n\ncreateRoot(document.getElementById('root')!).render(\n  <PushUniversalWalletProvider config={walletConfig}>\n    <StrictMode>\n      <App />\n    </StrictMode>\n  </PushUniversalWalletProvider>\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Note:"
        }), " You can remove the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "import './index.css'"
        }), " line from the generated ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "main.tsx"
        }), " file since we won't be using the default Vite styles for this tutorial."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "2-build-the-universal-payment-ui",
      children: "2) Build the Universal Payment UI"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "21-hooks-youll-use",
      children: "2.1) Hooks you'll use"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "usePushWalletContext()"
        }), " → wallet connection state (e.g., connectionStatus)."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "usePushChainClient()"
        }), " → the initialized pushChainClient used to send universal transactions."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "import { usePushWalletContext, usePushChainClient } from '@pushchain/ui-kit';\n\nconst { connectionStatus } = usePushWalletContext();\nconst { pushChainClient } = usePushChainClient();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "22-local-state--derived-amount",
      children: "2.2) Local state & derived amount"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We store the selected preset amount (1 PC, 5 PC, 10 PC, or custom), the recipient, and tx state."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "type PresetAmount = 1 | 5 | 10 | 'custom';\n\nconst [recipient, setRecipient] = useState('');\nconst [preset, setPreset] = useState<Preset>(1);\nconst [custom, setCustom] = useState('');\nconst [sending, setSending] = useState(false);\nconst [hash, setHash] = useState<string | null>(null);\n\nconst amount = preset === 'custom' ? Number(custom) || 0 : preset;\nconst validAddr = /^0x[a-fA-F0-9]{40}$/.test(recipient.trim());\nconst canSend = connected && validAddr && amount > 0 && !sending;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "23-send-transaction",
      children: "2.3) Send transaction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "handleSend"
      }), " function uses client from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "usePushChainClient"
      }), " hook to send the transaction."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "import { PushChain } from '@pushchain/core';\n\nconst { pushChainClient } = usePushChainClient();\n\nasync function send()   async function send() {\n  if (!pushChainClient || !canSend) return;\n  setSending(true);\n  setHash(null);\n  try {\n    const value = PushChain.utils.helpers.parseUnits(String(amount), 18);\n    const res = await pushChainClient.universal.sendTransaction({\n      to: recipient.trim() as `0x${string}`,\n      value,\n    });\n    setHash(res.hash);\n  } finally {\n    setSending(false);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "24-connect-account-button-and-check-connection-status",
      children: "2.4) Connect Account Button and check connection status"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PushUniversalAccountButton"
      }), " component is used to connect the account."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "connectionStatus"
      }), " is checked to ensure the user is connected before displaying the payment form."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "...\n<PushUniversalAccountButton />\n\n{connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n  <div>\n    {/* Payment form goes here */}\n  </div>\n)}\n...\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "25-display-block-explorer-url",
      children: "2.5) Display Block Explorer URL"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["After success, show the tx hash with a link from the client’s explorer helper by using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pushChainClient.explorer.getTransactionUrl"
      }), " method."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "...\n{hash && (\n  <div style={{ marginTop: 12, fontSize: 14 }}>\n    Txn: <code>{hash}</code>{' '}\n    <a href={pushChainClient?.explorer.getTransactionUrl(hash)} target=\"_blank\" rel=\"noreferrer noopener\">\n      View\n    </a>\n  </div>\n)}\n...\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "26-complete-code",
      children: "2.6) Complete code"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "import { useState } from 'react';\nimport { PushUniversalAccountButton, usePushWalletContext, usePushChainClient, PushUI } from '@pushchain/ui-kit';\nimport { PushChain } from '@pushchain/core';\n\ntype Preset = 1 | 5 | 10 | 'custom';\n\nfunction App() {\n  const { connectionStatus } = usePushWalletContext();\n  const { pushChainClient } = usePushChainClient();\n\n  const connected = connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED;\n\n  const [recipient, setRecipient] = useState('');\n  const [preset, setPreset] = useState<Preset>(1);\n  const [custom, setCustom] = useState('');\n  const [sending, setSending] = useState(false);\n  const [hash, setHash] = useState<string | null>(null);\n\n  const amount = preset === 'custom' ? Number(custom) || 0 : preset;\n  const validAddr = /^0x[a-fA-F0-9]{40}$/.test(recipient.trim());\n  const canSend = connected && validAddr && amount > 0 && !sending;\n\n  async function send() {\n    if (!pushChainClient || !canSend) return;\n    setSending(true);\n    setHash(null);\n    try {\n      const value = PushChain.utils.helpers.parseUnits(String(amount), 18);\n      const res = await pushChainClient.universal.sendTransaction({\n        to: recipient.trim() as `0x${string}`,\n        value,\n      });\n      setHash(res.hash);\n    } finally {\n      setSending(false);\n    }\n  }\n\n  return (\n    <div style={{ maxWidth: 520, margin: '24px auto', padding: 16, fontFamily: 'system-ui' }}>\n      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>\n        <PushUniversalAccountButton />\n      </div>\n\n      <h2 style={{ marginTop: 16 }}>Universal Payment Gateway</h2>\n      <p style={{ marginTop: 6, color: '#666' }}>\n        Pay a Push address from Ethereum or Solana—no manual network switching.\n      </p>\n\n      <label style={{ display: 'block', fontWeight: 600, marginTop: 16 }}>Recipient (Push EVM address)</label>\n      <input\n        value={recipient}\n        onChange={(e) => setRecipient(e.target.value)}\n        placeholder=\"0x...\"\n        style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #ccc' }}\n      />\n      {!validAddr && recipient.trim() !== '' && (\n        <div style={{ color: '#b00020', fontSize: 12, marginTop: 6 }}>Enter a valid 0x address</div>\n      )}\n\n      <div style={{ fontWeight: 600, marginTop: 16 }}>Amount (PC)</div>\n      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>\n        {[1, 5, 10].map((a) => (\n          <button\n            key={a}\n            onClick={() => setPreset(a as Preset)}\n            disabled={sending}\n            style={{\n              padding: '8px 12px',\n              borderRadius: 10,\n              border: '1px solid #111',\n              background: preset === a ? '#111' : 'transparent',\n              color: preset === a ? '#fff' : '#111',\n              cursor: 'pointer',\n            }}\n          >\n            {a} PC\n          </button>\n        ))}\n        <button\n          onClick={() => setPreset('custom')}\n          disabled={sending}\n          style={{\n            padding: '8px 12px',\n            borderRadius: 10,\n            border: '1px solid #111',\n            background: preset === 'custom' ? '#111' : 'transparent',\n            color: preset === 'custom' ? '#fff' : '#111',\n            cursor: 'pointer',\n          }}\n        >\n          Custom\n        </button>\n      </div>\n\n      {preset === 'custom' && (\n        <input\n          type=\"number\"\n          min={0}\n          step={0.000001}\n          placeholder=\"Enter PC amount\"\n          value={custom}\n          onChange={(e) => setCustom(e.target.value)}\n          style={{\n            width: '100%',\n            padding: 10,\n            borderRadius: 10,\n            border: '1px solid #ccc',\n            marginTop: 8,\n          }}\n        />\n      )}\n\n      <button\n        onClick={send}\n        disabled={!canSend}\n        style={{\n          width: '100%',\n          marginTop: 16,\n          padding: '12px 16px',\n          borderRadius: 10,\n          border: '1px solid #111',\n          background: canSend ? '#111' : '#999',\n          color: '#fff',\n          cursor: canSend ? 'pointer' : 'not-allowed',\n        }}\n      >\n        {sending ? 'Sending…' : `Send ${amount || ''} PC`}\n      </button>\n\n      {hash && (\n        <div style={{ marginTop: 12, fontSize: 14 }}>\n          Txn: <code>{hash}</code>{' '}\n          <a href={pushChainClient?.explorer.getTransactionUrl(hash)} target=\"_blank\" rel=\"noreferrer noopener\">\n            View\n          </a>\n        </div>\n      )}\n\n      {!connected && <div style={{ color: '#555', marginTop: 8, fontSize: 12 }}>Connect your wallet to send.</div>}\n    </div>\n  );\n}\n\nexport default App;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-this-enables-stripelike-payments",
      children: "How this enables “Stripe‑like” payments"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Connect with anything"
        }), " (MetaMask, Phantom, email, etc.) using one provider and button."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Users stay on their chain"
        }), " and still pay your ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Push"
        }), " address—no manual bridges."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Gas in native tokens"
        }), "—your users can pay fees in ETH/SOL while you receive on Push."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "3-run-it",
      children: "3) Run it"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install\nnpm run dev\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Open the printed local URL, connect a wallet or email, pick an amount, and hit ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Send"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "notes--tips",
      children: "Notes & tips"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Amounts are in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "PC"
        }), " (18 decimals). Use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "PushChain.utils.helpers.parseUnits(amount, 18)"
        }), " when building the transaction."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The connect modal can be customized (login methods, layouts, app preview, etc.)."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["You can supply custom RPCs per chain via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "chainConfig.rpcUrls"
        }), " in the provider ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "config"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Happy building!"
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