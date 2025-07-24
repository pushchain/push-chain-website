"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[6173],{

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

/***/ 73021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-6-7e85564cf58113d1d5892ba66b6af2f9.webp");

/***/ }),

/***/ 281513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-e636b0c2d2e38ef580d5a4ddc34b3fc6.webp");

/***/ }),

/***/ 315747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-01fbf9b13ffd530ca616e917283d681b.webp");

/***/ }),

/***/ 355955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-4-e8a243b470e36afdfc10986d15a7ffef.webp");

/***/ }),

/***/ 360844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-e3682ce78fc7e7e3e72acdeac0c60ab4.webp");

/***/ }),

/***/ 442414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-13516c7df773f42da08f7d685b56a96d.webp");

/***/ }),

/***/ 730192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-5-48b511f626359221448f3318697630f8.webp");

/***/ }),

/***/ 785316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-01fbf9b13ffd530ca616e917283d681b.webp");

/***/ }),

/***/ 863609:
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
	slug: 'apps-only-possible-with-shared-state-v2',
	title: 'Apps Possible Only with Shared State - Vol.2',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Apps Possible Only with Shared State - Vol.2',
	text: 'Welcome to the 2nd Volume of  - Apps that are only possible with Push Chain’s shared state architecture!',
	tags: [
		'Push Chain',
		'Deep dives',
		'Shared App Experience',
		'Shared State Blockchain',
		'Universal Smart Contracts'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/apps-only-possible-with-shared-state-v2",
  "source": "@site/blog/2025-05-14-apps-only-possible-with-shared-state-vol2/index.md",
  "title": "Apps Possible Only with Shared State - Vol.2",
  "description": "Apps Possible Only with Shared State - Vol.2",
  "date": "2025-05-14T00:00:00.000Z",
  "formattedDate": "May 14, 2025",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-chain"
    },
    {
      "label": "Deep dives",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/deep-dives"
    },
    {
      "label": "Shared App Experience",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/shared-app-experience"
    },
    {
      "label": "Shared State Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/shared-state-blockchain"
    },
    {
      "label": "Universal Smart Contracts",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/universal-smart-contracts"
    }
  ],
  "readingTime": 6.033333333333333,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Protocol",
      "url": "https://x.com/PushChain",
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "apps-only-possible-with-shared-state-v2",
    "title": "Apps Possible Only with Shared State - Vol.2",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Apps Possible Only with Shared State - Vol.2",
    "text": "Welcome to the 2nd Volume of  - Apps that are only possible with Push Chain’s shared state architecture!",
    "tags": [
      "Push Chain",
      "Deep dives",
      "Shared App Experience",
      "Shared State Blockchain",
      "Universal Smart Contracts"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Donut Testnet Closed Beta is Now Live!",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/donut-testnet-closed-beta-is-now-live"
  },
  "nextItem": {
    "title": "Apps Possible Only with Shared State - Vol.1",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/apps-only-possible-with-shared-state-v1"
  }
};
const assets = {
"image": (__webpack_require__(315747)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What is Push Chain? - Super Quick Recap:",
  "id": "what-is-push-chain---super-quick-recap",
  "level": 2
}, {
  "value": "What is a &#39;shared state&#39; blockchain?",
  "id": "what-is-a-shared-state-blockchain",
  "level": 2
}, {
  "value": "Apps that are only possible with Shared States:",
  "id": "apps-that-are-only-possible-with-shared-states",
  "level": 2
}, {
  "value": "1) Competitive Cross Chain Gaming",
  "id": "1-competitive-cross-chain-gaming",
  "level": 3
}, {
  "value": "🌌What this enables:",
  "id": "what-this-enables",
  "level": 4
}, {
  "value": "🤔Why it needs shared state:",
  "id": "why-it-needs-shared-state",
  "level": 4
}, {
  "value": "2) Multichain DAOs",
  "id": "2-multichain-daos",
  "level": 3
}, {
  "value": "🌌 What this enables:",
  "id": "-what-this-enables",
  "level": 4
}, {
  "value": "🤔Why it needs shared-state:",
  "id": "why-it-needs-shared-state-1",
  "level": 4
}, {
  "value": "3) Universal AI Agents:",
  "id": "3-universal-ai-agents",
  "level": 3
}, {
  "value": "🌌What this enables:",
  "id": "what-this-enables-1",
  "level": 4
}, {
  "value": "🤔Why it needs shared-state:",
  "id": "why-it-needs-shared-state-2",
  "level": 4
}, {
  "value": "4) Universal (Multi-chain) Safes",
  "id": "4-universal-multi-chain-safes",
  "level": 3
}, {
  "value": "🌌 What it enables:",
  "id": "-what-it-enables",
  "level": 4
}, {
  "value": "Unified Asset Management",
  "id": "unified-asset-management",
  "level": 5
}, {
  "value": "Conditional Cross-Chain Spending",
  "id": "conditional-cross-chain-spending",
  "level": 5
}, {
  "value": "Shared Ownership Without Bridging",
  "id": "shared-ownership-without-bridging",
  "level": 5
}, {
  "value": "Cross-Chain Inheritance &amp; Recovery",
  "id": "cross-chain-inheritance--recovery",
  "level": 5
}, {
  "value": "Why it needs shared-state:",
  "id": "why-it-needs-shared-state-3",
  "level": 4
}, {
  "value": "Real-Time Portfolio Tracking",
  "id": "real-time-portfolio-tracking",
  "level": 5
}, {
  "value": "Cross-Chain Transaction Execution",
  "id": "cross-chain-transaction-execution",
  "level": 5
}, {
  "value": "Dynamic Rule Enforcement",
  "id": "dynamic-rule-enforcement",
  "level": 5
}, {
  "value": "5) Embeddable Prediction Markets",
  "id": "5-embeddable-prediction-markets",
  "level": 3
}, {
  "value": "🌌What this enables:",
  "id": "what-this-enables-2",
  "level": 4
}, {
  "value": "App-based prediction widgets: developers can create internal markets that can be attached to any cross-chain app, game, or events:",
  "id": "app-based-prediction-widgets-developers-can-create-internal-markets-that-can-be-attached-to-any-cross-chain-app-game-or-events",
  "level": 5
}, {
  "value": "Event-driven derivatives: time-sensitive markets that spin up whenever certain conditions are met:",
  "id": "event-driven-derivatives-time-sensitive-markets-that-spin-up-whenever-certain-conditions-are-met",
  "level": 5
}, {
  "value": "Deeper community engagement: Local prediction markets embedded in apps = high engagement attraction.",
  "id": "deeper-community-engagement-local-prediction-markets-embedded-in-apps--high-engagement-attraction",
  "level": 5
}, {
  "value": "End Game",
  "id": "end-game",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Apps Possible Only with Shared State - Vol.2",
        src: (__webpack_require__(785316)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Welcome to the 2nd Volume of  - Apps that are only possible with Push Chain’s shared state architecture!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/apps-only-possible-with-shared-state-v1/",
        children: "previous edition"
      }), ", we covered use cases spanning Defi, cross chain yields, universal airdrops and NFTs that can only be possible using capabilities that chains like Push Chain provide."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "🚨SPOILER ALERT - You might be able to see some of them in Testnet V1!Stay tuned!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this iteration, we will amp up the utility scale and explore few of the most popular areas - loved by both - devs & users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Before we begin, if you’re new to the concept of Shared Sates and Push Chain, here’s a quick recap:\nFeel free to skip down to the use cases section if you’re already aware of these concepts."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-push-chain---super-quick-recap",
      children: "What is Push Chain? - Super Quick Recap:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain is an all-purpose universal chain that unites every existing and forthcoming chain together (under one roof)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "It is a shared-state L1 blockchain designed to function as a universal app layer for users across any chain, any wallet and any app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Combining this with the innovation of cross-chain fees and wallet abstraction, what you get is a blockchain able to read any other chain and… is accessible by users from any chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "First Image of Apps Possible Only with Shared State - Vol.2",
        src: (__webpack_require__(360844)/* ["default"] */ .A) + "",
        width: "1394",
        height: "1156"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-a-shared-state-blockchain",
      children: "What is a 'shared state' blockchain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Second Image of Apps Possible Only with Shared State - Vol.2",
        src: (__webpack_require__(281513)/* ["default"] */ .A) + "",
        width: "1178",
        height: "526"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["At its core, a blockchain maintains a database tracking the state of all wallets and smart contracts (token balances, data, code, etc.). But these states are siloed within their respective chains, even ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "within the same ecosystem."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For example, a wallet's ETH balance on Ethereum differs from its ETH balance on Base because each of these chains maintains its own state."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For building universal apps we need to:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Read"
        }), " states from other chains (e.g., balances, smart contract data)."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Write"
        }), " to all chains, and"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Support wallets"
        }), " across all networks."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The first of these innovations -- i.e. the ability of developers on Push Chain ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "to read and utilise the state of other chains via smart contracts"
      }), " -- is what we mean by a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "shared-state blockchain."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "apps-that-are-only-possible-with-shared-states",
      children: "Apps that are only possible with Shared States:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-competitive-cross-chain-gaming",
      children: "1) Competitive Cross Chain Gaming"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Shared-state makes ‘chain wars’ real!"
      }), "\nIt allows players from any blockchain ecosystem to come together and play their favourite games with (or against) each other by leveraging Push Chain as a shared settlement layer."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Think ‘", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://chess.push.org",
        children: "Universal Chess"
      }), "’ tournaments between Ethereum and Solana tribes, with a cross-chain betting widget for viewers and game NFTs for players. The perfect degen chess experience!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "But it doesn’t stop there. Think Poker, Blackjack, Monopoly, RPGs and more, available to and accessible by users of all chains!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["By removing the biggest barriers to on-chain game adoption, i.e. UX and asset fragmentation, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Push Chain allows gamers to bring their chain-specific identities to chain-neutral playgrounds."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Third Image of Apps Possible Only with Shared State - Vol.2",
        src: (__webpack_require__(442414)/* ["default"] */ .A) + "",
        width: "1920",
        height: "800"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "what-this-enables",
      children: "🌌What this enables:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Game developers can design experiences for the entire web3 userbase."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Chain agnostic user onboarding - users can join from any chain they already use."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Unified cross-chain identities"
        }), ": Users can pause/save a game on one chain, and continue from the same checkpoint on another chain.\ne.g., Player 2 moves to Arbitrum but keeps their character's skills and assets intact."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Multiplayer games can allow users to join from any chain, or switch in the middle without losing access to their points and/or in-game assets."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "why-it-needs-shared-state",
      children: "🤔Why it needs shared state:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Chain-neutral playgrounds require seamless state synchronizations, player state to be unified in one trusted environment - in order to track individual as well as relational game data (points, damage, skills, assets etc.)."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Without shared-state, cross-chain games would need ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "custom bridges"
        }), " and complex game synchronization measures per game, which would be expensive and damaging for the UX."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-multichain-daos",
      children: "2) Multichain DAOs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Protocol tokens are increasingly becoming available cross-chain. For example, Uniswap’s UNI exists on Ethereum, Polygon and Base among others. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "With shared-state, apps can aggregate a member’s voting power across chains by reading and bundling his tokens."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "-what-this-enables",
      children: "🌌 What this enables:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["DAOs can launch tokens ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "across multiple chains"
        }), " without fracturing governance."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The community can participate in decentralized decision-making through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "cross-chain coordination"
        }), " (e.g. delegated votes, comments on proposals, commitment pools, temperature checks etc.)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "why-it-needs-shared-state-1",
      children: "🤔Why it needs shared-state:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "‘Voting power’ is a combined function of a protocol’s real and synthetic assets held across chains."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-universal-ai-agents",
      children: "3) Universal AI Agents:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Shared state capabilities of Push Chain act as the missing coordination layer for enabling universal AI agents to operate across multiple independent chains autonomously, reliably, and with a unified memory."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "what-this-enables-1",
      children: "🌌What this enables:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Build ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "chain-agnostic AI agents"
      }), " that can:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Read user states, assets, activities, and preferences across all chains."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Act on behalf of users without needing users to bridge, switch wallets, or manually interact with dApps."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Maintains a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "persistent universal context"
        }), " across chains, apps, and experiences."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "Ex: Personal Finance Assistant Agent:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Fourth Image of Apps Possible Only with Shared State - Vol.2",
        src: (__webpack_require__(355955)/* ["default"] */ .A) + "",
        width: "1600",
        height: "1551"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Reads the user's balances across Ethereum, Arbitrum, Optimism, and Solana."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Notices idle assets on Base and recommends moving them into a higher-yield protocol on Polygon."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Automatically constructs and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "executes a cross-chain investment action"
        }), " via Push Chain's programmable solvers."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "why-it-needs-shared-state-2",
      children: "🤔Why it needs shared-state:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Unified State Access: AI agents need real-time visibility into user balances, transactions, and positions ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "across all chains."
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-universal-multi-chain-safes",
      children: "4) Universal (Multi-chain) Safes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Today, managing assets across multiple chains is a logistical nightmare."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Users must juggle separate wallets, track balances individually, and manually bridge funds — a process that’s both error-prone and inefficient. While ‘safes’ are a reliable way for groups to pool and manage assets (e.g. for DAOs, investment clubs, or even families), they face additional challenges due to multisig barriers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Shared-state solves this by enabling ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "safes with multi-chain signers"
      }), ", i.e. chain-agnostic vaults that can natively pool, manage and utilise assets across all chains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This turns the chaos of fragmented assets into a streamlined, interoperable system — for individuals, DAOs, and institutions. With shared-state, Push Chain makes cross-chain asset-management as simple as using a single shared wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "-what-it-enables",
      children: "🌌 What it enables:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "unified-asset-management",
      children: "Unified Asset Management"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Users can deposit assets from any chain (e.g., ETH on Ethereum, SOL on Solana, GNO on Gnosis) into a single safe, with real-time visibility of their total portfolio."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Groups (DAOs, hedge funds, guilds) can collectively manage cross-chain treasuries without requiring manual bridging or chain-specific multisigs."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "conditional-cross-chain-spending",
      children: "Conditional Cross-Chain Spending"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Define rules like: \"Allow withdrawals only if 3/5 signers approve, and only up to 10% of the safe's TVA (Total Value Across chains).\""
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Automate cross-chain rebalancing (e.g., \"If $CLANKER on Base drops below 20% of the safe's TVA, sell $TRUMP on Solana to equalize\")."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "shared-ownership-without-bridging",
      children: "Shared Ownership Without Bridging"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A DAO can hold ETH on Ethereum, stSOL on Solana, and USDC on Base — all in the same safe, governed by the same rules."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Families or investment clubs can pool assets across chains while maintaining granular permissions (e.g., \"Kids can only spend from the Optimism portion\")."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "cross-chain-inheritance--recovery",
      children: "Cross-Chain Inheritance & Recovery"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Set up programmable inheritance (e.g., \"If inactive for 12 months, transfer all assets — regardless of chain — to this backup wallet\")."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Social recovery mechanisms can pull verification from multiple chains (e.g., \"Recover safe if 5/7 friends from Ethereum, Solana, and Polygon sign\")."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Fifth Image of Apps Possible Only with Shared State - Vol.2",
        src: (__webpack_require__(730192)/* ["default"] */ .A) + "",
        width: "1474",
        height: "626"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "why-it-needs-shared-state-3",
      children: "Why it needs shared-state:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "real-time-portfolio-tracking",
      children: "Real-Time Portfolio Tracking"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A safe’s TVA (Total Value Across chains) can only be calculated if the contract can read balances from all connected chains."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Without shared-state, we’d need to manually bridge assets to a single chain—defeating the purpose of a true ‘multi-chain’ safe."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "cross-chain-transaction-execution",
      children: "Cross-Chain Transaction Execution"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Spending from a multi-chain safe requires verifying ownership and permissions across chains (e.g., \"Does this wallet have approval on Ethereum to trigger a withdrawal on Solana?\")."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Shared-state enables this via atomic cross-chain actions (e.g., selling ETH on Arbitrum to buy SOL on Solana in one transaction)."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "dynamic-rule-enforcement",
      children: "Dynamic Rule Enforcement"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Conditions like \"Only spend if the safe’s total stablecoin holdings exceed $1M\" require aggregating balances from multiple chains."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Recovery mechanisms need to verify on-chain activity (e.g., \"Check last transaction timestamps on all chains before triggering inheritance\")."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "5-embeddable-prediction-markets",
      children: "5) Embeddable Prediction Markets"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Prediction markets are great tools for building alignment, coordination and conviction within groups. They can unlock a bunch of utility when combined with other on-chain activities such as DeFi, voting, gaming and content creation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Today, however, they operate as isolated betting shops which are limited to specific chains, acceptable tokens and capacity to verify events (off or on-chain)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "Shared-state changes all of this."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Chain enables ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "universally embeddable prediction markets"
      }), " that can be attached to any cross-chain app, game, or event and can be used by users from any chain and any token."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Seamless routing liquidity across chains, without bridging."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Thus, turning fragmented cross-chain activities into a unified playground for probabilistic thinking."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "what-this-enables-2",
      children: "🌌What this enables:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "app-based-prediction-widgets-developers-can-create-internal-markets-that-can-be-attached-to-any-cross-chain-app-game-or-events",
      children: "App-based prediction widgets: developers can create internal markets that can be attached to any cross-chain app, game, or events:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "e.g.: during a board/card game on one chain, a widget allows viewers from any chain to create ‘internal bets’:\na. on the outcome of the game,\nb. on specific moves/cards,"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "event-driven-derivatives-time-sensitive-markets-that-spin-up-whenever-certain-conditions-are-met",
      children: "Event-driven derivatives: time-sensitive markets that spin up whenever certain conditions are met:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "e.g. for the duration of Trump’s golf game, will the price of $Trump rise or fall? (Such a market can be programmed to spin up automatically on credible news of Trump playing golf, and disappear when the game ends)."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
      id: "deeper-community-engagement-local-prediction-markets-embedded-in-apps--high-engagement-attraction",
      children: "Deeper community engagement: Local prediction markets embedded in apps = high engagement attraction."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Sixth Image of Apps Possible Only with Shared State - Vol.2",
        src: (__webpack_require__(73021)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "🤔Why it needs shared-state:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Markets must read real-time data from multiple chains (DEX volumes, social data, oracles)."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Cross-chain settlement proofs"
        }), " are required to resolve outcomes trustlessly."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Dynamic odds calculation requires unified liquidity across all prediction pools."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "end-game",
      children: "End Game"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Chain’s shared-state architecture finally delivers ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "the universal blockchain trifecta"
      }), " — unifying user needs, developer needs, and cross-chain data unification – all in a single layer."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For users, it leads to seamless cross-chain interactions: no more juggling bridges, fragmented balances or chain-locked assets. Your entire on-chain identity — DeFi positions, NFTs, agentic memories, game assets etc. — becomes portable and composable across all networks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For developers, shared-state unlocks an entirely new paradigm: read and unify fragmented assets without worrying about latency, cost, security or interoperability."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Seriously.. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nWhy build for one chain ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nWhen you could build for them all? ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
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