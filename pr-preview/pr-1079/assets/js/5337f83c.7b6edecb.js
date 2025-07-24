"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[12097],{

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

/***/ 90615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image4-b5596747df8aa54d70281fb91a843ff3.gif");

/***/ }),

/***/ 213762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d1f7d6efc8933f23345a79dabb05eefd.webp");

/***/ }),

/***/ 340107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image6-8cb3c06fad5597712c2e5903ee769b30.webp");

/***/ }),

/***/ 388509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d1f7d6efc8933f23345a79dabb05eefd.webp");

/***/ }),

/***/ 401913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image8-fb63f99e0dde1f5b49996626d2618524.webp");

/***/ }),

/***/ 410982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image1-2600a2bfab9e9abdf59298254150ee02.webp");

/***/ }),

/***/ 453319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image2-abc93e9a518d10c2741d1ed526740859.webp");

/***/ }),

/***/ 839140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image3-57bca9ea6556a16c996e32f0d3721977.webp");

/***/ }),

/***/ 847806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image5-8a5b908cbb1ff616a8577cb9a22a4117.gif");

/***/ }),

/***/ 938824:
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
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'push-year-in-review-2024',
	title: 'Push Year In Review 2024',
	authors: [
		'harsh',
		'richa'
	],
	image: './cover-image.webp',
	description: 'Push Year In Review 2024',
	text: '2024 was a Push-tastic year for Push - We hit 100 million notifications, integrated supercool projects, launched Push Chain and so much more. Time for Push Rewind - 2024!',
	tags: [
		'Push Chain',
		'Updates',
		'Insights',
		'Year In Review',
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
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/push-year-in-review-2024",
  "source": "@site/blog/2024-12-28-year-in-review-24/index.md",
  "title": "Push Year In Review 2024",
  "description": "Push Year In Review 2024",
  "date": "2024-12-28T00:00:00.000Z",
  "formattedDate": "December 28, 2024",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-chain"
    },
    {
      "label": "Updates",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/updates"
    },
    {
      "label": "Insights",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/insights"
    },
    {
      "label": "Year In Review",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/year-in-review"
    },
    {
      "label": "Shared App Experience",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/shared-app-experience"
    },
    {
      "label": "Any Chain Tx",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/any-chain-tx"
    },
    {
      "label": "Universal Smart Contracts",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/universal-smart-contracts"
    },
    {
      "label": "Shared State Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/shared-state-blockchain"
    },
    {
      "label": "Consumer Tx",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/consumer-tx"
    },
    {
      "label": "Parallel Validators",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/parallel-validators"
    },
    {
      "label": "Dynamic Sharding",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/dynamic-sharding"
    }
  ],
  "readingTime": 10.073333333333334,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Harsh Rajat",
      "url": "https://twitter.com/harshrajat",
      "imageURL": "/assets/blog/authors/authorharsh.png",
      "key": "harsh"
    },
    {
      "name": "Richa Joshi",
      "url": "https://twitter.com/Riijo",
      "imageURL": "/assets/blog/authors/authorricha.png",
      "key": "richa"
    }
  ],
  "frontMatter": {
    "slug": "push-year-in-review-2024",
    "title": "Push Year In Review 2024",
    "authors": [
      "harsh",
      "richa"
    ],
    "image": "./cover-image.webp",
    "description": "Push Year In Review 2024",
    "text": "2024 was a Push-tastic year for Push - We hit 100 million notifications, integrated supercool projects, launched Push Chain and so much more. Time for Push Rewind - 2024!",
    "tags": [
      "Push Chain",
      "Updates",
      "Insights",
      "Year In Review",
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
    "title": "Push Chain Joins Forces With Aptos",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/push-chain-joins-forces-with-aptos"
  },
  "nextItem": {
    "title": "Innovations by Push Chain",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/innovations-by-push-chain"
  }
};
const assets = {
"image": (__webpack_require__(213762)/* ["default"] */ .A),
"authorsImageUrls": [undefined, undefined],
};





const toc = [{
  "value": "Push by Numbers",
  "id": "push-by-numbers",
  "level": 2
}, {
  "value": "Highlights",
  "id": "highlights",
  "level": 2
}, {
  "value": "1. Push Points Program ✨",
  "id": "1-push-points-program-",
  "level": 3
}, {
  "value": "2. SDK Support for Ethers V6 and Viem 🛠️",
  "id": "2-sdk-support-for-ethers-v6-and-viem-️",
  "level": 2
}, {
  "value": "3. Introduced Cross Chain Requests 🔗",
  "id": "3-introduced-cross-chain-requests-",
  "level": 2
}, {
  "value": "4. Notification and Channel Categories 🗂️",
  "id": "4-notification-and-channel-categories-️",
  "level": 2
}, {
  "value": "5. Added open Frames, Reaction and Reply to Chat 💬",
  "id": "5-added-open-frames-reaction-and-reply-to-chat-",
  "level": 2
}, {
  "value": "6. Push WEB3 App Gets Better!! ⚡️",
  "id": "6-push-web3-app-gets-better-️",
  "level": 2
}, {
  "value": "User dashboard:",
  "id": "user-dashboard",
  "level": 3
}, {
  "value": "Guest Mode + Remember Me",
  "id": "guest-mode--remember-me",
  "level": 3
}, {
  "value": "Redesigned Channel Dashboard:",
  "id": "redesigned-channel-dashboard",
  "level": 3
}, {
  "value": "7. Push expands into Base, Arbitrum, Fuse, Linea and Cyber Networks 💹",
  "id": "7-push-expands-into-base-arbitrum-fuse-linea-and-cyber-networks-",
  "level": 2
}, {
  "value": "8. Analytics Dashboard (and Website Revamp) 📊",
  "id": "8-analytics-dashboard-and-website-revamp-",
  "level": 2
}, {
  "value": "9. Launched Wallet to Email / Telegram Notifications 📧",
  "id": "9-launched-wallet-to-email--telegram-notifications-",
  "level": 2
}, {
  "value": "10. Push Metmamask Snap V2",
  "id": "10-push-metmamask-snap-v2",
  "level": 2
}, {
  "value": "11. Incredible Integrations! 🤝",
  "id": "11-incredible-integrations-",
  "level": 2
}, {
  "value": "12. Push DAO soaring to new heights 🔝",
  "id": "12-push-dao-soaring-to-new-heights-",
  "level": 2
}, {
  "value": "13. GM Push Chain!👋",
  "id": "13-gm-push-chain",
  "level": 2
}, {
  "value": "Governance",
  "id": "governance",
  "level": 3
}, {
  "value": "Push Chain WhitePaper",
  "id": "push-chain-whitepaper",
  "level": 3
}, {
  "value": "Push Chain LitePaper",
  "id": "push-chain-litepaper",
  "level": 3
}, {
  "value": "14. Launched Push Chain Devnet + Push Scan + Push Chain Website 🌐",
  "id": "14-launched-push-chain-devnet--push-scan--push-chain-website-",
  "level": 2
}, {
  "value": "Push Chain Devnet",
  "id": "push-chain-devnet",
  "level": 3
}, {
  "value": "Push Scan",
  "id": "push-scan",
  "level": 3
}, {
  "value": "Push Website",
  "id": "push-website",
  "level": 3
}, {
  "value": "15. Push Nodes are here!",
  "id": "15-push-nodes-are-here",
  "level": 2
}, {
  "value": "15. Launched Push Wallet + Simulate Tx 👝",
  "id": "15-launched-push-wallet--simulate-tx-",
  "level": 2
}, {
  "value": "Push Wallet",
  "id": "push-wallet",
  "level": 3
}, {
  "value": "Simulate Transactions",
  "id": "simulate-transactions",
  "level": 3
}, {
  "value": "Honorary mentions 🙌",
  "id": "honorary-mentions-",
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Push Year In Review 2024",
        src: (__webpack_require__(388509)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "2024 was a Push-tastic year for Push!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Marked with super ambitious achievements, incredible growth and everlasting community support!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We crossed multiple milestones with Push Notifications Protocol and unveiled the next - most awaited phase of our evolution: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/chain/",
        children: "Push Chain - A shared state blockchain for shared app experiences"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Special thanks to all our Push Communications Protocol users for supporting our journey and making Push the de-facto communication layer for web3!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let’s take a quick look at ‘Push Rewind 2024’\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Don't miss the final reel (We have a major alpha reveal!)"
      })]
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-by-numbers",
      children: "Push by Numbers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We finally achieved one of our most ambitious goals of sending over ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "100M"
      }), " notifications to date!!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As of year-end - Push has sent over ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "138+ Million notifications to its 300k+ subscribers"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["That’s almost ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "3x"
      }), " the number of notifications sent and double the number of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/push-roadmap-recap-2023/",
        children: "subscribers from last year"
      }), " 😱."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "subscribers gained in 2024",
        src: (__webpack_require__(410982)/* ["default"] */ .A) + "",
        width: "1600",
        height: "840"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The Push ecosystem has expanded to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "500 amazing projects"
      }), ", including - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0xf198eBCc8dB86F707bAdDdBa236aB5b619c59D3c",
        children: "QuickSwap"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0xf1A1542Ca902AE861B59bffE77D92E8CD76146f1",
        children: "HyperLiquid"
      }), ",", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0x65bB67c2416186aE3107F7c2C6728b272a579e3d",
        children: "Revoke"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1859145460939628803",
        children: "ethOS"
      }), " and many more."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "highlights",
      children: "Highlights"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-push-points-program-",
      children: "1. Push Points Program ✨"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "push points program",
        src: (__webpack_require__(453319)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We kickstarted Phase 1 of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/points?utm_source=push_blog&utm_medium=referral&utm_campaign=Push+Points&utm_content=blog_post",
        children: "Push Points Program"
      }), " - a gamified reputation system, aimed at giving back to our Push Fam, ecosystem communities and devs who have supported Push every step of the way and helped us reach greater heights."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Within three months of its launch, the program distributed millions of points to thousands of users for completing various activities centred around Push Communications Protocol, its ecosystem, and $PUSH staking."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://app.push.org/points",
      title: "Push Points Program Link",
      children: "Push Points Program S1 concludes soon - Explore Now!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "2-sdk-support-for-ethers-v6-and-viem-️",
      children: "2. SDK Support for Ethers V6 and Viem 🛠️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The builder activity with Push Protocol SDKs continues to reach new ATHs!\nTo better support their journey the Push SDK underwent massive upgrades and optimisations!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We upgraded our Push SDK to support Ethers V6 along with Ethers V5 and viem enabling devs to use our SDK with the latest version of Ethers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://github.com/push-protocol/push-sdk",
      title: "Push Communications Protocol SDK ",
      children: "Checkout our upgraded SDK here"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "3-introduced-cross-chain-requests-",
      children: "3. Introduced Cross Chain Requests 🔗"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "cross chain requests",
        src: (__webpack_require__(839140)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Extending a step towards seamless cross-chain communication and UX, we launched the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cross Chain Requests"
      }), " Feature - Where users can interact with Push Communication Protocol smart contracts on the Ethereum blockchain from any other blockchain network, whether it’s EVM or non-EVM. Which enables users to stay on their preferred blockchain while accessing Push Communication Protocol's services, offering enhanced convenience and flexibility."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://push.org/blog/cross-chain-requests-pre-pip/",
      title: "Cross Chain Requests ",
      children: "Click here to learn how we achieve cross-chain requests"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "4-notification-and-channel-categories-️",
      children: "4. Notification and Channel Categories 🗂️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Exploring over 500+ channels on Push can be a time-consuming adventure.\nWe launched the channel category feature so that you can better track and find the channel of your choice!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://app.push.org/channels?chain=1&category=All",
      title: "Cross Chain Requests ",
      children: "Explore over 500 channels and 13 channel categories today!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "5-added-open-frames-reaction-and-reply-to-chat-",
      children: "5. Added open Frames, Reaction and Reply to Chat 💬"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Addressing the growing adoption of Push Chat we added some extra cool features to make your on-chain wallet-to-wallet and group chatting experience more fun!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Starting with adding support for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Farcaster frames"
      }), "!\nWith the growing adoption of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.farcaster.xyz/",
        children: "Farcaster"
      }), ", a popular web3 social app on Base, we’ve integrated support for Farcaster Frames in Push Chat. These frames unlock unique in-chat experiences, from making payments and subscribing to notifications to playing games or building any functionality developers envision."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In addition to frames, we added two of the most wildly used web2 chat features - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Reactions and Reply to Chat features!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Especially helpful in group and conditionally gated group chats where a user needs to revert to a specific user's conversation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://app.push.org/chat",
      title: "Cross Chain Requests ",
      children: "Start chatting using your wallets today!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "6-push-web3-app-gets-better-️",
      children: "6. Push WEB3 App Gets Better!! ⚡️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Communications DApp, underwent some super cool upgrades to smoothen as well as fasten users' on-chain communication journey even more!\nStarting with:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "user-dashboard",
      children: "User dashboard:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We unveiled a brand-new dashboard for Push Communication Protocol users, designed to provide a quick and intuitive overview of the entire Push Communications ecosystem - all within a single page."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Subscribed Channels:"
      }), " View and manage your channel subscriptions effortlessly."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Trending Notification Channels:"
      }), " Discover the most popular channels right now."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Latest Push Chat Recommendations:"
      }), " Stay updated with chat groups tailored to your interests."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Analytics Overview:"
      }), " Get insights into Push Notifications and Staking Fee Pools at a glance."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The dashboard brings everything you need to explore and engage with Push Protocol, making your experience seamless and efficient! 🚀"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "guest-mode--remember-me",
      children: "Guest Mode + Remember Me"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Ensuring an all-around inclusive, smooth and Privacy-packed user onboarding has always been Push’s top priority, this is why we introduced the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "'Guest' mode"
      }), " feature on our dApp, making it easier than ever to explore Push without connecting your wallet!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Guest mode",
        src: (__webpack_require__(90615)/* ["default"] */ .A) + "",
        width: "800",
        height: "800"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With the ‘", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Remember Me"
      }), "’ feature Checking the option on our PushChat Login keeps you logged in for days, even after closing your browser."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "No more repeated logins and wallet signings - Just a one-click access to your fav chats every time you return!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Remember me",
        src: (__webpack_require__(847806)/* ["default"] */ .A) + "",
        width: "800",
        height: "499"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://app.push.org/",
      title: "Push Communications Protocol",
      children: " Safeguard your on-chain privacy by trying out these features today!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "redesigned-channel-dashboard",
      children: "Redesigned Channel Dashboard:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With the launch of the channel categories feature, we also revamped our Channel Dashboard - organizing over 500+ channels across 13 categories including Defi, media, DAO and many more.\nUsers can now filter and explore channels based on specific networks, such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels?chain=1&category=DeFi",
        children: "DeFi channels on Arbitrum"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels?chain=1&category=Media",
        children: "Media channels on Polygon"
      }), ", and beyond—making channel discovery more intuitive and personalized."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "7-push-expands-into-base-arbitrum-fuse-linea-and-cyber-networks-",
      children: "7. Push expands into Base, Arbitrum, Fuse, Linea and Cyber Networks 💹"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "moving across an open web",
        src: (__webpack_require__(340107)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With our quest of making push Communications Protocol the universal layer of communication, supporting any and every chain, this year, we expanded our reach to more chains including ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Arbitrum, Fuse and Cyber"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push now supports over 9 networks including ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Ethereum, Polygon, Polygon Zkevm, BNB, and Fuse."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/interoperable-communications-moving-across-an-open-web-with-push/",
        children: "Time to move across the open web with Push!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://app.push.org/channels?chain=1&category=All",
      title: "Networks Supported by Push",
      children: " More networks, More new channels → Check them out here"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "8-analytics-dashboard-and-website-revamp-",
      children: "8. Analytics Dashboard (and Website Revamp) 📊"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Want a glance at Protocol’s LIVE numbers?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Meet the Push Analytics Dashboard - A comprehensive source of real-time data, tracking every aspect of Push Protocol’s services - notifications, subscribers, channel performance and many more!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://push.network/dashboard",
      title: "Push Communications Protocol Dashboard",
      children: " Checkout Push Communications Protocol’s Analytics here"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "User activity and footprint on Push’s landing page have been growing immensely, every passing day!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To ensure any unique (new) as well as seasoned web3 user understands the protocol’s mission, features and offerings - we’ve taken our website to the next level! This upgrade spans both Push Communications Protocol and Push Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "If you’ve read so far: a. you’re the best! b. more about Push Chain, in our final section 🏁"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "9-launched-wallet-to-email--telegram-notifications-",
      children: "9. Launched Wallet to Email / Telegram Notifications 📧"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["After tapping into over 300,000 wallets and sending over 100 million notifications we thought - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "how about sending on-chain notifications directly to your email or telegram?"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This helps Push Communications to reach billions of everyday Email and TG users while paving the way for much smoother onboarding for web2 normies and budding web2 users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now, users can receive web3 notifications from over 500 DApps straight to their Telegram or email accounts - no need to connect a wallet or endure various friction points while entering the web3 space. Simply, connect your TG and Email and receive notifs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It's that easy!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://app.push.org/points/activity",
      title: "Push Notifications on Telegram and Email",
      children: " Connect your Tg and Email to receive instant alerts!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "10-push-metmamask-snap-v2",
      children: "10. Push Metmamask Snap V2"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In 2023, we bought Push Notifications to over 30 million Metamask users -by launching the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/?/snap",
        children: "Push Metamask Snap"
      }), ". In 2024, we upgraded the snap to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "support chat and snooze notifications features"
      }), " - to help users manage their notifications at their own pace and other forms of communication as well."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Due to Metamasks limitations for supporting communications across its mobile apps, we introduced in-app chat notifications on Push Mobile App ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://apps.apple.com/us/app/push-epns/id1528614910",
        children: "iOS"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://play.google.com/store/apps/details?id=io.epns.epns&hl=en",
        children: "Android"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://app.push.org/snap",
      title: "Push Metamask Snap",
      children: " Get notified on your Metamask Wallet "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "11-incredible-integrations-",
      children: "11. Incredible Integrations! 🤝"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "2024 was a year filled with incredible integrations. The Push Ecosystem has expanded to 500+ Projects!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Notable mentions include - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1851625233654153716",
        children: "Hyperliquid"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1826957066520383638",
        children: "QuickSwap"
      }), ",", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1844008819954970813",
        children: "Cartesi"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1842198518418612357",
        children: "Revoke"
      }), " and many more."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://push.org/frens/",
      title: "Frens Of Push",
      children: " Explore the Push Ecosystem here "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "12-push-dao-soaring-to-new-heights-",
      children: "12. Push DAO soaring to new heights 🔝"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push DAO witnessed extraordinary exposure and participation in 2024."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With hundreds of new participants, over 50 regular contributors, global exposure, quality grantees, and tremendous support from the Push Fam community, we've made exceptional progress."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In June 2024, we launched Push DAO V2 to advance our journey toward progressive decentralization.\nThis new framework, supported by the DAO Council, streamlines engagement for contributors and builders."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The launch of our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Grants Program V3"
      }), " empowered both, early-stage and established projects building innovative social, gaming, and mobile apps. This initiative has driven impressive results—increasing grant applications tenfold and multiplying our active grantees five times over since the beginning of the year."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Our Push DAO BD SubDAO Program now offers rewards ranging from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "$500–$1500"
      }), " for successful integrations of Push Notifications/Chat with DAOs, DeFi protocols, dApps, and other projects. Through our council and contributors' dedicated efforts, this program has generated over 80 qualified leads for our ecosystem."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Our revamped ambassador programs have reached new heights of influence, establishing a student hub at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Texas Tech University"
      }), " and forming connections with event organizers across more than four continents."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As we prepare to launch Push Chain, our DAO stands ready to make a significant impact on the ecosystem and beyond. Our core team brings together professionals with cross-industry expertise, while our current and prospective grantees span key industry sectors.\nHaving achieved extraordinary growth in less than a year, we're positioned for even greater achievements in 2025."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With our coordinated event and marketing strategy for the launch in place, you can expect to see the DAO everywhere next year, driving the chain's progress."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With hundreds of new contributors, global exposures, quality grantees and a lot of love from the Push Fam community!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To continue our journey of Push DAO towards progressive decentralisation we introduced a new DAO framework, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.push.org/t/push-dao-v2-push-dao-council/1631",
        children: "Push DAO V2"
      }), ". This framework simplifies the process for contributors and builders to engage with the DAO, with the support of the DAO Council."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push Grants Council",
        src: (__webpack_require__(401913)/* ["default"] */ .A) + "",
        width: "2000",
        height: "1127"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://gov.push.org/",
      title: "Push Governance Forum",
      children: " Explore Push Governance Forum "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "And now - time for the special ALPHA!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "13-gm-push-chain",
      children: "13. GM Push Chain!👋"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After years of building one of the first consumer apps in web3, one key takeaway we learnt, was the pressing need for a consumer app-centric chain capable of unifying the entire web3 ecosystem under a shared state."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This realization inspired the creation of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/chain/",
        children: "Push Chain"
      }), " - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "a shared-state Layer 1 blockchain that unifies the settlement of all the incredible L1s, L2s, and L3s, enabling any user from any chain to access any app through one unified shared state."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "governance",
      children: "Governance"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The Push Chain proposal received an overwhelming response at the Push Gov Forum with over 92% acceptance.\nThe proposal then went on to SnapShot for formal voting - and we’re super stoked to announce that the community heavily participated in showing their voice and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://snapshot.box/#/s:pushdao.eth/proposal/0xa4a301c9a346356326d59e425245459d9fbde71b02aabc49a4ce191f0504f66a",
        children: "passing the massive majority!"
      }), " Indicating a positive alignment with the team’s and the community’s vision."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-chain-whitepaper",
      children: "Push Chain WhitePaper"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you're curious about Push Chain's philosophical and technical foundations and want to take a detailed look, dive into the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://whitepaper.push.org/",
        children: "Push Chain Whitepaper"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Whitepaper constitutes everything you need to know about Push Chain’s Vision, Mission and all the underlying technical innovations that solve the current hardships in Web3."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-chain-litepaper",
      children: "Push Chain LitePaper"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Want a quick tour of Push Chain - And learn about the problem it solves, key innovations it brings and the usecases it unlocks - explore the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/litepaper.pdf",
        children: "Push LitePaper"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "14-launched-push-chain-devnet--push-scan--push-chain-website-",
      children: "14. Launched Push Chain Devnet + Push Scan + Push Chain Website 🌐"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-chain-devnet",
      children: "Push Chain Devnet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We launched the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Chain Devnet"
      }), ", offering an exciting sneak peek into transactions confirmed with sub-second finality - all while interacting with the chain in a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "chain-and wallet-agnostic"
      }), " manner. 🫣"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-scan",
      children: "Push Scan"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Also, say hello to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://scan.push.org/home",
        children: "Push Scan"
      }), " 👋 - A comprehensive explorer to view and analyze all transactions on the Push Chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-website",
      children: "Push Website"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Alongside, we unveiled the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/chain/",
        children: "Push Chain Website"
      }), " - your go-to hub for all things Push Chain! Whether you’re looking for insights into its vision, key innovations, ecosystem, or developer tooling, the website acts as your gateway to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universe of Universal Apps."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "15-push-nodes-are-here",
      children: "15. Push Nodes are here!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push fam, we know you were extremely eager for Push Nodes, after its announcement early, this year."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Unlike most of the L1s, Push Chain too is a Proof Of Stake network - but with its own innovative flavour."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain splits the nodes into three types - Validator, Storage and Archival and enables a node governance smart contract that keeps track of all the nodes that are present in the network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Validator nodes"
      }), " - Responsible for validating transactions;"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Storage nodes"
      }), " - Dynamically shard data based on the hash of blockchain-agnostic addresses and store it; and"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Archival nodes"
      }), " - Maintain a full snapshot of all transactions on the network."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Chain also introduced ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Node Registry Smart Contracts"
      }), " a key innovation that : - Registers nodes. - Manage dynamic sharding. - Set replication factors. - Enable parallel validators that scale dynamically with the number of nodes in the network and thus achieve ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "True Scale"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://push.org/blog/innovations-by-push-chain/",
      title: "Push Governance Forum",
      children: " Innovations by Push Chain "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Want a trial run and learn more about Push Nodes?"
      }), "\nCheckout Push Nodes GitHub Repos:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-vnode",
        children: "Run Validator Node"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-snode",
        children: "Run Storage Node"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-anode",
        children: "Run Archival Node"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "15-launched-push-wallet--simulate-tx-",
      children: "15. Launched Push Wallet + Simulate Tx 👝"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Chain incorporates ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Wallet Abstraction to diminish the growing divide in operational level comfort experienced by Existing Web3 users and New users (Web2 normies) by creating a balanced ground for every web3 user persona."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-wallet",
      children: "Push Wallet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We were thrilled to introduce the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://wallet.push.org/",
        children: "Push Wallet"
      }), "—a secure, user-friendly, and interoperable key management solution designed for the Push unified network."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Wallet offers: - A flexible and embeddable wallet experience tailored to individual user journeys. - Web2-style sign-ins. - Seamless connectivity, interaction, and transactions for wallets from any chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://wallet.push.org/",
      title: "Push Governance Forum",
      children: " Try Push Wallet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "simulate-transactions",
      children: "Simulate Transactions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To offer an early glimpse into transacting on Push Chain, we launched the Push Simulate Transactions App. This app showcases:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Consumer (unordered) transactions on Push Devnet."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Key innovations like PoS consensus, parallel validators, dynamic sharding, and wallet abstraction in action."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ABlock */ .b1, {
      href: "https://simulate.push.org/",
      title: "Simulate Push",
      children: " Experience Push Chain with Simulate Transactions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "There's so much more to reveal and even more to ship! 🚀"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Can't wait for Q1 2025."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The entire Push Team is equally proud and excited to bring Push Chain to the public!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain is the future of an all-inclusive web3 - and we’re super humbled and honoured to build it with all of you."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "honorary-mentions-",
      children: "Honorary mentions 🙌"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Hyper Scalable Group Chats"
      }), " - With new architectural upgrades, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/chat",
        children: "Push Chats"
      }), " have become faster and more scalable. Public group limits have skyrocketed from 1500 to an impressive 25,000 members. Similarly, private groups once capped at 50 members, now support up to 5,000 participants. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/benchmarking-push-chat-message/",
        children: "Checkout our Push Chat Benchmarks here"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Group Chats for Guilds"
      }), " - We ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://guild.xyz/explorer",
        children: "Guild"
      }), " gated the group chats. Now, any guild LIVE on Guild.xyz can start a Push-based group chat, bringing us closer to our goal of providing customizable support for all forms of group conversations. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/push-group-chats-for-guilds/",
        children: "Know, how to create your guild gated chat today!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Billion Reasons to Build (BRB) Bootcamp was back with a bang!"
      }), " - This time with a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/billion-reason-to-build-bootcamp-covering-every-dimension-of-the-web3-ecosystem/",
        children: "global online edition"
      }), " with participation from over ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "21"
      }), "countries and prizes worth ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "5,500$"
      }), "!\nThe 6-week boot camp inducted over 80 gem students amongst thousands of competing applications. Spanned over 11 sessions, the BRB boot camp was built to - Equip participants with the skills and knowledge needed to thrive in the evolving landscape of blockchain and web3 technologies, as well as essential skills in marketing, design, and startup development."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The boot camp gained a global outreach with over ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "60,000"
      }), " impressions and unmeasurable love!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "More SDK Upgrades"
      }), " - We further enhanced the Push SDK by optimizing the code to align with the new design system, added support for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "ERC1155 Gated Chat Groups"
      }), ", launched the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push SDK Demo React app"
      }), ", ensured ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "compatibility with the Base chain"
      }), ", and integrated ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "SpaceID’s"
      }), " package to resolve .arb and .bnb domains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Say hello to the Push Alpha Community"
      }), " - We created an exclusive community for long-time Push Supporters and various contest winners - called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/how-to-join-the-push-alpha-community/",
        children: "Push Alpha Community"
      }), " - The Alpha Access NFT holders gain exclusive access to alpha-only events, campaigns, airdrops, and partner surprises."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ Launched exclusive ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/announcing-group-chat-from-push-unstoppable/",
        children: "domain-gated group chats"
      }), " for 3.8M+ Unstoppable Domain users"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "→ Revamped the channel creation process for a more intuitive UX."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ Made tons of improvements to our Developer Docs to make your building journey with Push Protocol truly ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Pushtastic!"
      }), " 🚀"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ A plethora of podcast appearances including ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=zpqP_b-ch1A",
        children: "Hipther Podcast Show"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.charlieshrem.com/pushing-crypto-to-the-edge-redefining-communication-and-security-with-ian-leviness-and-pascal-gauth/",
        children: "Charlie Shrem Podcast"
      }), " and many more."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ Participated in major hackathons, conferences and sponsored bounties around the globe including, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1811046959353880785",
        children: "Eth CC Brussels"
      }), ", Token 2049 Singapore & Dubai, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1857365249239679134",
        children: "ETH Bangkok"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1846597335859540055",
        children: "Eth Safari"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1840669685177557334",
        children: "Invisible Gardens"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1849709744002630131",
        children: "Binance Blockchain Week(Dubai)"
      }), ", India Blockchain Week."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["→ Kickstarted ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1826313152176251142",
        children: "Write for Push"
      }), " initiative - aimed at enabling anyone in the Push community to contribute to the protocol’s blog repository and help shape its voice."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Before looking at what's ahead this coming year, we want to take a moment to thank the entire Push team, all our partners, investors and builders. 2024 was an amazing year for Push and we are excited to share what we have planned for 2025! Stay tuned. With loads of love ❤️ from the Push team!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "That’s a wrap!\nSee you all in 2025 🫡"
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