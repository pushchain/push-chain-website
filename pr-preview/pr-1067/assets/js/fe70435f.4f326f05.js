"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[13475],{

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

/***/ 509802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_03_payments_and_defi_01_tutorial_universal_payment_gateway_mdx_fe7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-03-payments-and-defi-01-tutorial-universal-payment-gateway-mdx-fe7.json
const site_docs_chain_01_tutorials_03_payments_and_defi_01_tutorial_universal_payment_gateway_mdx_fe7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/payments-and-defi/docs-chain-tutorials-universal-gateway-payment","title":"Build a Universal Payment Gateway","description":"Build a Universal Payment Gateway | Tutorials | Push Chain Docs","source":"@site/docs/chain/01-tutorials/03-payments-and-defi/01-Tutorial-Universal-Payment-Gateway.mdx","sourceDirName":"chain/01-tutorials/03-payments-and-defi","slug":"/chain/tutorials/payments-and-defi/tutorial-universal-payment-gateway","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/payments-and-defi/tutorial-universal-payment-gateway","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/03-payments-and-defi/01-Tutorial-Universal-Payment-Gateway.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"docs-chain-tutorials-universal-gateway-payment","title":"Build a Universal Payment Gateway","hide_title":false,"slug":"./tutorial-universal-payment-gateway","displayed_sidebar":"pushChainSidebar","sidebar_position":4,"image":"/assets/docs/previews/docs_chain_tutorials_universal_gateway_payment--build_a_universal_payment_gateway.png"},"sidebar":"pushChainSidebar","previous":{"title":"Payments and DeFi","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/payments-and-defi"},"next":{"title":"Payments and DeFi","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/integration-and-tooling"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/01-tutorials/03-payments-and-defi/01-Tutorial-Universal-Payment-Gateway.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-universal-gateway-payment',
	title: 'Build a Universal Payment Gateway',
	hide_title: false,
	slug: './tutorial-universal-payment-gateway',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 4,
	image: '/assets/docs/previews/docs_chain_tutorials_universal_gateway_payment--build_a_universal_payment_gateway.png'
};
const contentTitle = undefined;

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
  "value": "1) Create the project",
  "id": "1-create-the-project",
  "level": 2
}, {
  "value": "2) Wrap your app with Push Universal Wallet",
  "id": "2-wrap-your-app-with-push-universal-wallet",
  "level": 2
}, {
  "value": "3) Build the Universal Payment UI",
  "id": "3-build-the-universal-payment-ui",
  "level": 2
}, {
  "value": "3.1) Hooks you&#39;ll use",
  "id": "31-hooks-youll-use",
  "level": 3
}, {
  "value": "3.2) Local state &amp; derived amount",
  "id": "32-local-state--derived-amount",
  "level": 3
}, {
  "value": "3.3) Send transaction",
  "id": "33-send-transaction",
  "level": 3
}, {
  "value": "3.4) Connect Account Button and check connection status",
  "id": "34-connect-account-button-and-check-connection-status",
  "level": 3
}, {
  "value": "3.5) Display Block Explorer URL",
  "id": "35-display-block-explorer-url",
  "level": 3
}, {
  "value": "3.6) Complete code",
  "id": "36-complete-code",
  "level": 3
}, {
  "value": "How this enables “Stripe‑like” payments",
  "id": "how-this-enables-stripelike-payments",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Build a Universal Payment Gateway | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Welcome! In this tutorial you'll build a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Payment Gateway"
      }), " where ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any user can pay you from their preferred chain"
      }), " (e.g. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ethereum"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Solana"
      }), ") ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "to a single Push Chain address"
      }), ". Think of it like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stripe for chains"
      }), "—", (0,jsx_runtime.jsx)(_components.em, {
        children: "Visa or Mastercard"
      }), " doesn't matter; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "everyone can pay"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-push-chain-for-payments",
      children: "Why Push Chain for payments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Most payments in web3 are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not unified"
      }), "—they force users to switch chains, bridge, or hold the “right” gas token. That leads to drop‑offs and lost revenue. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain"
      }), " fixes this by giving you:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single transaction from any chain"
        }), " → Users can execute a transaction ", (0,jsx_runtime.jsx)(_components.em, {
          children: "from their chain"
        }), " to your Push address without custom bridges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wallet abstraction"
        }), " → Connect with MetaMask, Phantom, email, Google, etc., via a single provider."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Universal fee abstraction"
        }), " → Let users pay gas in their ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "native tokens"
        }), " (e.g. ETH/SOL) while your app receives funds on Push Chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Result: You don't exclude users by their wallet or chain, just like Stripe doesn't exclude card networks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-youll-build",
      children: "What you'll build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A minimal React + Vite app where users:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Connect with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Push Universal Wallet"
        }), " (MetaMask, Phantom, email, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pick between ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3 preset amounts"
        }), " (1 PC, 5 PC, or 10 PC) or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "enter a custom amount"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Send"
        }), " to your Push wallet address"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["See the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transaction hash"
        }), " with an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Explorer link"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-create-the-project",
      children: "1) Create the project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, create a new Vite TypeScript React project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm create vite@latest universal-payment-gateway -- --template \"react-ts\"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This will create a new directory called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "universal-payment-gateway"
      }), " with a basic React + TypeScript setup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now install the required Push Chain packages:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @pushchain/ui-kit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-wrap-your-app-with-push-universal-wallet",
      children: "2) Wrap your app with Push Universal Wallet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "main.tsx"
        })
      }), " and wrap your app with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), ". You can also supply per‑chain RPCs (optional)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more detailed information about Push Universal Wallet integration, see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/integrate-push-universal-wallet",
          children: "Integrate Push Universal Wallet"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/main.tsx\"",
        children: "import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App.tsx';\n// Import Push Chain UI Kit\nimport { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';\n\n// Add Wallet Config\nconst walletConfig = {\n  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n};\n\ncreateRoot(document.getElementById('root')!).render(\n  <PushUniversalWalletProvider config={walletConfig}>\n    <StrictMode>\n      <App />\n    </StrictMode>\n  </PushUniversalWalletProvider>\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " You can remove the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "import './index.css'"
        }), " line from the generated ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main.tsx"
        }), " file since we won't be using the default Vite styles for this tutorial."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-build-the-universal-payment-ui",
      children: "3) Build the Universal Payment UI"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-hooks-youll-use",
      children: "3.1) Hooks you'll use"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "usePushWalletContext()"
        }), " → wallet connection state (e.g., connectionStatus)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "usePushChainClient()"
        }), " → the initialized pushChainClient used to send universal transactions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "usePushChain()"
        }), " → PushChain class that has helper methods for parsing units, etc."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "import { usePushWalletContext, usePushChainClient, usePushChain } from '@pushchain/ui-kit';\n\nconst { connectionStatus } = usePushWalletContext();\nconst { pushChainClient } = usePushChainClient();\nconst { PushChain } = usePushChain();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-local-state--derived-amount",
      children: "3.2) Local state & derived amount"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We store the selected preset amount (1 PC, 5 PC, 10 PC, or custom), the recipient, and tx state."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "type PresetAmount = 1 | 5 | 10 | 'custom';\n\nconst [recipient, setRecipient] = useState('');\nconst [preset, setPreset] = useState<Preset>(1);\nconst [custom, setCustom] = useState('');\nconst [sending, setSending] = useState(false);\nconst [hash, setHash] = useState<string | null>(null);\n\nconst amount = preset === 'custom' ? Number(custom) || 0 : preset;\nconst validAddr = /^0x[a-fA-F0-9]{40}$/.test(recipient.trim());\nconst canSend = connected && validAddr && amount > 0 && !sending;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-send-transaction",
      children: "3.3) Send transaction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handleSend"
      }), " function uses client from the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "usePushChainClient"
      }), " hook to send the transaction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "import { usePushChainClient, usePushChain } from '@pushchain/ui-kit';\n\nconst { pushChainClient } = usePushChainClient();\nconst { PushChain } = usePushChain();\n\nasync function send() {\n  if (!pushChainClient || !canSend) return;\n  setSending(true);\n  setHash(null);\n  try {\n    const value = PushChain.utils.helpers.parseUnits(String(amount), 18);\n    const res = await pushChainClient.universal.sendTransaction({\n      to: recipient.trim(),\n      value,\n    });\n    setHash(res.hash);\n  } finally {\n    setSending(false);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-connect-account-button-and-check-connection-status",
      children: "3.4) Connect Account Button and check connection status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushUniversalAccountButton"
      }), " component is used to connect the account."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "connectionStatus"
      }), " is checked to ensure the user is connected before displaying the payment form."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "...\n<PushUniversalAccountButton />\n\n{connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n  <div>\n    {/* Payment form goes here */}\n  </div>\n)}\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-display-block-explorer-url",
      children: "3.5) Display Block Explorer URL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After success, show the tx hash with a link from the client’s explorer helper by using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pushChainClient.explorer.getTransactionUrl"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        metastring: "title=\"src/App.tsx\"",
        children: "...\n{hash && (\n  <div style={{ marginTop: 12, fontSize: 14 }}>\n    Txn: <code>{hash}</code>{' '}\n    <a href={pushChainClient?.explorer.getTransactionUrl(hash)} target=\"_blank\" rel=\"noreferrer noopener\">\n      View\n    </a>\n  </div>\n)}\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-complete-code",
      children: "3.6) Complete code"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "import { useState } from 'react';\nimport { PushUniversalAccountButton, usePushWalletContext, usePushChainClient, PushUI, usePushChain } from '@pushchain/ui-kit';\n\nfunction App() {\n  function PaymentGateway() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n    const { PushChain } = usePushChain();\n\n    const connected = connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED;\n\n    const [recipient, setRecipient] = useState('');\n    const [preset, setPreset] = useState(1);\n    const [custom, setCustom] = useState('');\n    const [sending, setSending] = useState(false);\n    const [hash, setHash] = useState(null);\n\n    const amount = preset === 'custom' ? Number(custom) || 0 : preset;\n    const validAddr = /^0x[a-fA-F0-9]{40}$/.test(recipient.trim());\n    const canSend = connected && validAddr && amount > 0 && !sending;\n\n    async function send() {\n      if (!pushChainClient || !canSend) return;\n      setSending(true);\n      setHash(null);\n      try {\n        const value = PushChain.utils.helpers.parseUnits(String(amount), 18);\n        const res = await pushChainClient.universal.sendTransaction({\n          to: recipient.trim(),\n          value,\n        });\n        setHash(res.hash);\n      } finally {\n        setSending(false);\n      }\n    }\n\n    return (\n      <div style={{ maxWidth: 520, margin: '24px auto', padding: 16, fontFamily: 'system-ui' }}>\n        <div style={{ display: 'flex', justifyContent: 'center' }}>\n          <PushUniversalAccountButton />\n        </div>\n\n        <h2 style={{ marginTop: 16 }}>Universal Payment Gateway</h2>\n        <p style={{ marginTop: 6, color: '#666' }}>\n          Pay a Push address from Ethereum or Solana—no manual network switching.\n        </p>\n\n        <label style={{ display: 'block', fontWeight: 600, marginTop: 16 }}>Recipient (Push EVM address)</label>\n        <input\n          value={recipient}\n          onChange={(e) => setRecipient(e.target.value)}\n          placeholder=\"0x...\"\n          style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #ccc' }}\n        />\n        {!validAddr && recipient.trim() !== '' && (\n          <div style={{ color: '#b00020', fontSize: 12, marginTop: 6 }}>Enter a valid 0x address</div>\n        )}\n\n        <div style={{ fontWeight: 600, marginTop: 16 }}>Amount (PC)</div>\n        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>\n          {[1, 5, 10].map((a) => (\n            <button\n              key={a}\n              onClick={() => setPreset(a)}\n              disabled={sending}\n              style={{\n                padding: '8px 12px',\n                borderRadius: 10,\n                border: '1px solid #111',\n                background: preset === a ? '#111' : 'transparent',\n                color: preset === a ? '#fff' : '#111',\n                cursor: 'pointer',\n              }}\n            >\n              {a} PC\n            </button>\n          ))}\n          <button\n            onClick={() => setPreset('custom')}\n            disabled={sending}\n            style={{\n              padding: '8px 12px',\n              borderRadius: 10,\n              border: '1px solid #111',\n              background: preset === 'custom' ? '#111' : 'transparent',\n              color: preset === 'custom' ? '#fff' : '#111',\n              cursor: 'pointer',\n            }}\n          >\n            Custom\n          </button>\n        </div>\n\n        {preset === 'custom' && (\n          <input\n            type=\"number\"\n            min={0}\n            step={0.000001}\n            placeholder=\"Enter PC amount\"\n            value={custom}\n            onChange={(e) => setCustom(e.target.value)}\n            style={{\n              width: '100%',\n              padding: 10,\n              borderRadius: 10,\n              border: '1px solid #ccc',\n              marginTop: 8,\n            }}\n          />\n        )}\n\n        <button\n          onClick={send}\n          disabled={!canSend}\n          style={{\n            width: '100%',\n            marginTop: 16,\n            padding: '12px 16px',\n            borderRadius: 10,\n            border: '1px solid #111',\n            background: canSend ? '#111' : '#999',\n            color: '#fff',\n            cursor: canSend ? 'pointer' : 'not-allowed',\n          }}\n        >\n          {sending ? 'Sending…' : `Send ${amount || ''} PC`}\n        </button>\n\n        {hash && (\n          <div style={{ marginTop: 12, fontSize: 14 }}>\n            Txn: <code>{hash}</code>{' '}\n            <a href={pushChainClient?.explorer.getTransactionUrl(hash)} target=\"_blank\" rel=\"noreferrer noopener\">\n              View\n            </a>\n          </div>\n        )}\n\n        {!connected && <div style={{ color: '#555', marginTop: 8, fontSize: 12 }}>Connect your wallet to send.</div>}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}>\n      <PaymentGateway />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-this-enables-stripelike-payments",
      children: "How this enables “Stripe‑like” payments"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect with anything"
        }), " (MetaMask, Phantom, email, etc.) using one provider and button."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Users stay on their chain"
        }), " and still pay your ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Push"
        }), " address—no manual bridges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gas in native tokens"
        }), "—your users can pay fees in ETH/SOL while you receive on Push."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes--tips",
      children: "Notes & tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Amounts are in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PC"
        }), " (18 decimals). Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PushChain.utils.helpers.parseUnits(amount, 18)"
        }), " when building the transaction."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The connect modal can be customized (login methods, layouts, app preview, etc.)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["You can supply custom RPCs per chain via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chainConfig.rpcUrls"
        }), " in the provider ", (0,jsx_runtime.jsx)(_components.code, {
          children: "config"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Happy building!"
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