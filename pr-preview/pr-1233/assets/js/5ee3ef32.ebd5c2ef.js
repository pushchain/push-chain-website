"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[84531],{

/***/ 359879
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_08_03_how_do_ai_agents_transact_onchain_index_md_5ee_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_08_03_how_do_ai_agents_transact_onchain_index_md_5ee_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476622);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'how-do-ai-agents-transact-onchain',
	title: 'How Do AI Agents Transact Onchain?',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Find out how crypto AI agents transact autonomously and securely.',
	text: 'Find out how crypto AI agents transact autonomously and securely.',
	tags: [
		'Key Features',
		'Deep Dives'
	],
	twitterId: '2084296038744219690'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(760057)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What Is Inside a typical onchain Transaction?",
  "id": "what-is-inside-a-typical-onchain-transaction",
  "level": 2
}, {
  "value": "How Does an AI Agent Sign Transactions?",
  "id": "how-does-an-ai-agent-sign-transactions",
  "level": 2
}, {
  "value": "1. Direct wallet signing",
  "id": "1-direct-wallet-signing",
  "level": 3
}, {
  "value": "2. Smart-account execution",
  "id": "2-smart-account-execution",
  "level": 3
}, {
  "value": "Session Keys for Granular Control",
  "id": "session-keys-for-granular-control",
  "level": 2
}, {
  "value": "How Agents Pay for APIs and Other Agents",
  "id": "how-agents-pay-for-apis-and-other-agents",
  "level": 2
}, {
  "value": "Summary:",
  "id": "summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of How do AI agents transact onchain",
        src: (__webpack_require__(313402)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Today, crypto agents are initiating more than 25% of all onchain trades. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "3X JUMP from the last two years!!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["These agents have already crossed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "$3 billion in market cap"
      }), " and are processing over ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "$100 million"
      }), " in volume every week."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "So how is the infrastructure, which was originally built for manual human actions like browser wallets and manual txn signing is able to reliably support and power autonomous agents operating 24/7 across multiple chains??"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Time to find out how."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Quick TL;DR:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "AI model flow Diagram",
        src: (__webpack_require__(247642)/* ["default"] */ .A) + "",
        width: "1080",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-is-inside-a-typical-onchain-transaction",
      children: "What Is Inside a typical onchain Transaction?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "On an EVM chain, a standard transaction usually contains:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "to"
        }), " → Contract or recipient address"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "value"
        }), " → Native asset being transferred"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "data"
        }), " → Encoded smart-contract function call"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "nonce"
        }), " → Sender’s transaction sequence number"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "gasLimit"
        }), " → Maximum computation allowed"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "maxFee"
        }), " → Maximum gas price the sender will pay"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "chainId"
        }), " → Network on which the transaction is valid"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "signature"
        }), " → Cryptographic authorization"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "On non-EVM chains like Solana, the packaging is different. A transaction contains signatures and a message composed of account addresses, a recent blockhash and one or more program (smart contract)  instructions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Let's walk through an example:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "“Swap 0.4 ETH for USDC with a maximum slippage of 0.5%.”"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The AI model decides that a swap is required. A predefined swap tool then converts that decision into contract-compatible data."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The tool identifies the relevant contract, calculates the minimum acceptable output and encodes the function call. The blockchain never sees the original prompt; it only receives transaction data."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-does-an-ai-agent-sign-transactions",
      children: "How Does an AI Agent Sign Transactions?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "There are two common architectures."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "1-direct-wallet-signing",
      children: "1. Direct wallet signing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The agent controls an externally owned account or a managed wallet. The signing key may be stored in secure infrastructure rather than directly inside the AI model.\nThe model proposes the action; the wallet system performs the cryptographic signing."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "BUT THIS IS A VERY INSECURE METHOD!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "An EOA private key grants unlimited, overarching spending authority.\nIf an AI agent is given a raw private key and suffers a prompt injection attack, software bug, or dependency compromise, the attacker gains full access to drain the wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "EOAs do not natively support spending limits, recipient whitelists, or time delays. To safely deploy agents that handle real value, the spending logic must be enforced at the blockchain level, not just within the application code."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["To give agents secure wallets, developers utilize ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "ERC-4337 Account Abstraction"
      }), ". This standard replaces raw private keys with smart contract accounts."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "2-smart-account-execution",
      children: "2. Smart-account execution"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Over 40 million of these smart accounts have been deployed across Ethereum and Layer 2 networks.\nInstead of broadcasting standard transactions to the mempool, agents generate ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "UserOperations"
      }), ". A UserOperation is a pseudo-transaction object that contains the sender's details, the action to execute (calldata), gas limits, and custom validation fields. This architecture allows the smart account to run programmable verification logic before authorizing the spend."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "session-keys-for-granular-control",
      children: "Session Keys for Granular Control"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["To operate autonomously without requiring a human to sign every micro-transaction, an agent uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Session Keys"
      }), ". A session key authorizes specific transaction types without giving the agent root control of the wallet."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A platform can provision a session key for an agent with strict parameters:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Maximum spend per transaction:"
        }), " e.g., capped at $50."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Approved recipient lists:"
        }), " The agent can only interact with pre-vetted smart contracts (like a specific DEX router or yield protocol)."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Time boundaries:"
        }), " The session key expires after exactly 24 hours."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Total budget:"
        }), " The agent can only spend a cumulative $500 before requiring a human to re-authorize."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-agents-pay-for-apis-and-other-agents",
      children: "How Agents Pay for APIs and Other Agents"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Machine-to-Machine Payments are enabled by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://x402.org/wp-content/uploads/sites/10/2026/06/x402-whitepaper.pdf",
        children: "x402 Protocol"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Agents cannot realistically stop to navigate a checkout flow or input credit card details for every offchain purchases like API credits or online shopping."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The x402 protocol solves this by repurposing the standard HTTP \"402 Payment Required\" status code for machine-to-machine crypto payments."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The transaction flow works like this:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Request:"
        }), " The agent requests a resource from a server."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Payment Required:"
        }), " The server rejects the request with a 402 status, attaching a header that details accepted payment networks, token prices, and destination addresses."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Payment Signature:"
        }), " The agent automatically builds and signs a payment payload matching one of the server's accepted options, then resubmits the request with the payload."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Verification and Settlement:"
        }), " The server (often using automated payment facilitators) verifies the payload, settles the payment on-chain, and delivers the requested data to the agent."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "summary",
      children: "Summary:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "AI agents do not directly “talk” to blockchains."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "They:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Interpret an objective"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "select an approved tool"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "construct a chain-specific transaction"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "validate it against deterministic policies"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "sign it through a wallet or smart account"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "submit it through an RPC or bundler"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "observe the resulting state change"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 760057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-29986801e37704ec3c8662987c9b99af.webp");

/***/ },

/***/ 313402
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-29986801e37704ec3c8662987c9b99af.webp");

/***/ },

/***/ 247642
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-605f092e0b76e47d1dc841db3f02f034.webp");

/***/ },

/***/ 476622
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1233/blog/how-do-ai-agents-transact-onchain","source":"@site/blog/2026-08-03-how-do-ai-agents-transact-onchain/index.md","title":"How Do AI Agents Transact Onchain?","description":"Find out how crypto AI agents transact autonomously and securely.","date":"2026-08-03T00:00:00.000Z","tags":[{"inline":true,"label":"Key Features","permalink":"/push-chain-website/pr-preview/pr-1233/blog/tags/key-features"},{"inline":true,"label":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1233/blog/tags/deep-dives"}],"readingTime":2.72,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1233/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1233/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"how-do-ai-agents-transact-onchain","title":"How Do AI Agents Transact Onchain?","authors":["push"],"image":"./cover-image.webp","description":"Find out how crypto AI agents transact autonomously and securely.","text":"Find out how crypto AI agents transact autonomously and securely.","tags":["Key Features","Deep Dives"],"twitterId":"2084296038744219690"},"unlisted":false,"prevItem":{"title":"Highest Revenue Generating Crypto AI Agent Protocols of 2026","permalink":"/push-chain-website/pr-preview/pr-1233/blog/highest-revenue-generating-crypto-ai-agent-protocols-of-2026"},"nextItem":{"title":"Understanding the Crypto AI Agent Stack (Layer by Layer)","permalink":"/push-chain-website/pr-preview/pr-1233/blog/understanding-the-crypto-ai-agent-stack"}}');

/***/ }

}]);