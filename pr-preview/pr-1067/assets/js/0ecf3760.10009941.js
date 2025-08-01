"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[14369],{

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

/***/ 52119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d4de94c63723c0248a825a015a1f2c78.webp");

/***/ }),

/***/ 146064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d4de94c63723c0248a825a015a1f2c78.webp");

/***/ }),

/***/ 354988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image1-dcf506ff105fb00848cfe12015f8b7fe.webp");

/***/ }),

/***/ 722953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image2-73d9ae7fa4d64627d8f040236168c72c.webp");

/***/ }),

/***/ 775686:
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
	slug: 'innovations-by-push-chain',
	title: 'Innovations by Push Chain',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Innovations by Push Chain',
	text: 'Unlike traditional L1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app. This article will help you understand - What Innovations Push Chain brings to Web3! ',
	tags: [
		'Push Chain',
		'Shared App Experience',
		'Any Chain Tx',
		'Universal Smart Contracts',
		'Shared State Blockchain',
		'Consumer Tx',
		'Parallel Validators',
		'Dynamic Sharding'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/innovations-by-push-chain",
  "source": "@site/blog/2024-12-20-innovations-by-push-chain/index.md",
  "title": "Innovations by Push Chain",
  "description": "Innovations by Push Chain",
  "date": "2024-12-20T00:00:00.000Z",
  "formattedDate": "December 20, 2024",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chain"
    },
    {
      "label": "Shared App Experience",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/shared-app-experience"
    },
    {
      "label": "Any Chain Tx",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/any-chain-tx"
    },
    {
      "label": "Universal Smart Contracts",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/universal-smart-contracts"
    },
    {
      "label": "Shared State Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/shared-state-blockchain"
    },
    {
      "label": "Consumer Tx",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/consumer-tx"
    },
    {
      "label": "Parallel Validators",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/parallel-validators"
    },
    {
      "label": "Dynamic Sharding",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/dynamic-sharding"
    }
  ],
  "readingTime": 4.14,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Chain",
      "url": "https://x.com/PushChain",
      "page": true,
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "innovations-by-push-chain",
    "title": "Innovations by Push Chain",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Innovations by Push Chain",
    "text": "Unlike traditional L1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app. This article will help you understand - What Innovations Push Chain brings to Web3! ",
    "tags": [
      "Push Chain",
      "Shared App Experience",
      "Any Chain Tx",
      "Universal Smart Contracts",
      "Shared State Blockchain",
      "Consumer Tx",
      "Parallel Validators",
      "Dynamic Sharding"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Year In Review 2024",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-year-in-review-2024"
  },
  "nextItem": {
    "title": "Evolution of Push",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/evolution-of-push"
  }
};
const assets = {
"image": (__webpack_require__(146064)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "TLDR;",
  "id": "tldr",
  "level": 3
}, {
  "value": "Innovations By Push Chain",
  "id": "innovations-by-push-chain",
  "level": 2
}, {
  "value": "1. Blockchain agnostic wallet addresses",
  "id": "1-blockchain-agnostic-wallet-addresses",
  "level": 3
}, {
  "value": "2. Support Txns from any chain",
  "id": "2-support-txns-from-any-chain",
  "level": 3
}, {
  "value": "3. Universal Fee Abstraction",
  "id": "3-universal-fee-abstraction",
  "level": 3
}, {
  "value": "4. Wallet abstraction",
  "id": "4-wallet-abstraction",
  "level": 3
}, {
  "value": "5. Single Transaction, no matter the chain",
  "id": "5-single-transaction-no-matter-the-chain",
  "level": 3
}, {
  "value": "6. Universal Smart Contracts",
  "id": "6-universal-smart-contracts",
  "level": 3
}, {
  "value": "7. True Identity and Cross-Chain Mapping",
  "id": "7-true-identity-and-cross-chain-mapping",
  "level": 3
}, {
  "value": "8. Shared State and Programmable Solvers (Roadmap)",
  "id": "8-shared-state-and-programmable-solvers-roadmap",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Innovations By Push Chain",
        src: (__webpack_require__(52119)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push recently unveiled its new layer 1 blockchain - Push Chain, a shared state blockchain designed for universal apps - apps that are deployed once and can be used by users from any chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Unlike traditional Layer 1 chains, Push Chain introduces several key innovations and optimized mechanisms to unify any chain, any user, and any app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This article will help you understand:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "What innovations Push Chain brings to web3"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "How Push Chain enables any user to connect to any app from any chain"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "How Push Chain is positioned to onboard the first billion users to web3 (for real!)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "tldr",
      children: "TLDR;"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/chain/",
        children: "Push Chain"
      }), " is a Proof of Stake shared state blockchain designed to support the development of hyper-scalable, consumer-centric, universal web3 applications by unifying settlement from any L1s, L2s and L3s."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "push architecture diagram",
        src: (__webpack_require__(354988)/* ["default"] */ .A) + "",
        width: "1600",
        height: "1629"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Key Innovations and Superpowers of Push Chain include:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ 1. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Blockchain agnostic wallet addresses"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ 2. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Support Txns from any chain"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ 3. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "UniversalFee Abstraction"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ 4. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Wallet Abstraction"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ 5. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Single Transaction, no matter the chain"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ 6. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal Smart Contracts"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ 7. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "True Identity and Cross-Chain Mapping"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ 8. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Shared State and Programmable Solvers (Roadmap)"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let’s take a closer look at each of these innovations and enhancements."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "innovations-by-push-chain",
      children: "Innovations By Push Chain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-blockchain-agnostic-wallet-addresses",
      children: "1. Blockchain agnostic wallet addresses"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For Apps to support users from any chain and achieve ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "universal compatibility"
      }), " - there must be a way to identify, interpret and transact with addresses incoming from various chains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As a shared-state blockchain, Push Chain is designed to parse and handle blockchain addresses alongside the specific chains they originate from."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For instance, Push Chain can identify and support Solana, EVM, Cosmos and any other chain’s addresses.\nTo achieve this, Push Chain fully adopts ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-10.md",
        children: "CAIP-10"
      }), " blockchain-agnostic wallet addresses, enabling it to deduce the chain, network, and address associated with each transaction ensuring universal compatibility across multiple blockchain ecosystems."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-support-txns-from-any-chain",
      children: "2. Support Txns from any chain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In addition to parsing addresses across various chains, Push Chain supports transactions from any wallet, regardless of the originating chain—be it Ethereum, Solana, or any other network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain achieves this by accepting signed payload data and supporting the native signers of individual chains. Validator nodes then verify these signatures → conduct pre-transaction checks (such as fee validation) → and then admit the transactions to the network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To clarify, a user doesn’t have to “bridge” to another chain to use our platform. Instead, the app becomes universal and available to all users of any chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-universal-fee-abstraction",
      children: "3. Universal Fee Abstraction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With web3’s progression towards true interoperability, the necessity to hold native tokens for basic interactions creates unnecessary barriers in what should be a borderless ecosystem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Chain’s Fee Abstraction eliminates these digital borders, ensuring universal accessibility and removing the economic friction of owning native tokens for network fees."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Universal Gateway Contracts"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nFee contracts on every chain convert native tokens to cover fees automatically—no explicit swaps for Push Chain’s tokens are required."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Bulk Fee Payments"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nLock and release fees in bulk, then send them to Push Chain directly in the transaction. This removes the bottleneck of waiting on a specific blockchain’s speed."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Delegated Fees"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nWallets or web3 apps can cover fees, enabling a web2-like UX where the “website” pays for the user."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "These mechanisms bridge web2 paradigms into web3 enabling web2 UX in a web3 world enabling any user of any chain to simply interact with the app and not have to worry about the fees."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-wallet-abstraction",
      children: "4. Wallet abstraction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Wallet abstraction provides a flexible, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "embeddable wallet experience"
      }), ", tailored to individual user journeys enabling any wallet from any chain to connect, interact and transact with Push Chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Degens (aka existing web3 users)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nWell accustomed to the fragmented UX, have app & chain specific preferences for every on-chain activity. These users already are using wallets like Metamask, Phantom, etc and are already in a blockchain ecosystem like Ethereum, Solana, etc."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "For these users, Push Chain provides a seamless onboarding experience by allowing them to use their existing wallets like Metamask, Phantom, etc along with whatever native chain they are on for both sending transactions and funding the fees."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Normies (aka new web3 users)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nNew or casual users unfamiliar with web3 complexities. Ones who are not comfortable with the idea of setting up a wallet."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "For these users, Push Chain offers a seamless onboarding experience by allowing them to use their email or social account to connect to the app and transact with Push Chain."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "5-single-transaction-no-matter-the-chain",
      children: "5. Single Transaction, no matter the chain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "User experience is the most important part of any app. Creating a powerful tech stack is only half the battle. Which is why Push Chain only ever requires a single transaction to be sent by the user, no matter from which chain they choose to interact with the app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is made possible by optimizing the transaction flow to be as simple as possible."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "New wallet of another chain doing a transaction"
          }), " - Transaction hash is bundle with fee locking on universal gateway contracts ensuring single transaction."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Existing (onboarded) wallet of another chain doing a transaction"
          }), " - If the wallet has enough gas, the universal gateway contract is surpassed and the transaction is sent directly to the chain."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "6-universal-smart-contracts",
      children: "6. Universal Smart Contracts"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Chain is a fully EVM compatible chain. Any EVM compatible smart contract can be deployed on Push Chain with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "zero on-chain code changes"
      }), " to instantly become compatible with all L1s (including non-EVM chains)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Just deploy in minutes and instantly 10x your userbase."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "7-true-identity-and-cross-chain-mapping",
      children: "7. True Identity and Cross-Chain Mapping"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Contracts on Push Chain automatically recognize the wallet of the user and the chain they are on. This allows the contracts to know the entire state of the user and the chain they are on enabling developers to create apps that were not possible before."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Imagine multi-chain enabled safes, prediction markets accessible by all users, poker games played between different chains, defi that can tap into liquidity from all chains, and so much more!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "8-shared-state-and-programmable-solvers-roadmap",
      children: "8. Shared State and Programmable Solvers (Roadmap)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "shared state diagram",
        src: (__webpack_require__(722953)/* ["default"] */ .A) + "",
        width: "1600",
        height: "1213"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Shared State"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Shared state allows Push Chain to access data from any supported external chains in the smart contract, further giving power to developers to enquire and act on the state of a wallet or a smart contract from any other chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With shared state, you can read wallet activities like NFTs, DeFi positions, governance participation, and so much more!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Programmable Solvers"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Programmable solvers on the other hand enables developers to give atomic instructions of what they want to execute on other chains from the smart contract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We started from users of any chain able to access app on Push Chain but once Push is done - we will finally see a world where users of any chain are able to interact with apps on any other chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "All while making sure that the developers or users don't pay a price for it - neither in terms of learning curve, multiple deployments, maintaining multiple codebases or complexity of the code."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Let's Build Universal Apps!"
      })
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



/***/ })

}]);