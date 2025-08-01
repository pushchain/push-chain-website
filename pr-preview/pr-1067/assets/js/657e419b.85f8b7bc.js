"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[29564],{

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

/***/ 285349:
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
	slug: 'push-chain-joins-forces-with-aptos',
	title: 'Push Chain Joins Forces With Aptos',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Push Chain Joins Forces With Aptos',
	text: 'Push Chain\'s road to testnet has kickstarted in full swing. Learn everything about our collaboration with Aptos - what it means for Push and Aptos users, the use cases it unlocks and more!',
	tags: [
		'Push Chain',
		'Partnerships'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-joins-forces-with-aptos",
  "source": "@site/blog/2025-01-09-aptos-joins-forces-with-push-chain/index.md",
  "title": "Push Chain Joins Forces With Aptos",
  "description": "Push Chain Joins Forces With Aptos",
  "date": "2025-01-09T00:00:00.000Z",
  "formattedDate": "January 9, 2025",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chain"
    },
    {
      "label": "Partnerships",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/partnerships"
    }
  ],
  "readingTime": 3.4066666666666667,
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
    "slug": "push-chain-joins-forces-with-aptos",
    "title": "Push Chain Joins Forces With Aptos",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Push Chain Joins Forces With Aptos",
    "text": "Push Chain's road to testnet has kickstarted in full swing. Learn everything about our collaboration with Aptos - what it means for Push and Aptos users, the use cases it unlocks and more!",
    "tags": [
      "Push Chain",
      "Partnerships"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Chain Joins Forces With zkLink",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-joins-forces-with-zklink"
  },
  "nextItem": {
    "title": "Push Year In Review 2024",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-year-in-review-2024"
  }
};
const assets = {
"image": (__webpack_require__(751831)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What is Aptos?",
  "id": "what-is-aptos",
  "level": 2
}, {
  "value": "What is Push Chain?",
  "id": "what-is-push-chain",
  "level": 2
}, {
  "value": "Bringing Aptos to Push Chain",
  "id": "bringing-aptos-to-push-chain",
  "level": 2
}, {
  "value": "<strong>👥 What does this mean for Aptos and Push Chain Users?</strong>",
  "id": "what-does-this-mean-for-aptos-and-push-chain-users",
  "level": 2
}, {
  "value": "👷‍♂️ What does this mean for builders?",
  "id": "️what-does-this-mean-for-builders",
  "level": 2
}, {
  "value": "🔓 Use case unlock:",
  "id": "use-case-unlock",
  "level": 2
}, {
  "value": "🌌 What does this mean for Web3?",
  "id": "what-does-this-mean-for-web3",
  "level": 2
}, {
  "value": "🔔 Push Notifications and Chat to support the Aptos Ecosystem",
  "id": "-push-notifications-and-chat-to-support-the-aptos-ecosystem",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Push Chain Join Forces With Aptos ",
        src: (__webpack_require__(745622)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain is pumped to join forces with Aptos!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This marks a giant leap in Push Chain’s march towards unifying web3 and enabling a shared universal app experience."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Learn what this announcement means for Aptos and Push Chain users, the use cases it unlocks, and how the collaboration benefits the greater Web3 ecosystem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-aptos",
      children: "What is Aptos?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://aptosfoundation.org/",
        children: "Aptos"
      }), " is a Layer 1 non-EVM blockchain renowned for its ultra-fast execution, parallel transaction processing, incredibly low gas fees, and serving as the foundation for some of the most popular consumer and financial applications."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With over 38.8 Million active addresses - Aptos is home to some of the most popular DeFi, Gaming and Consumer Apps like Stani, Merkle.trade, Cellana Fi, Chingari, Panora, Pancake Swap and many more."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-push-chain",
      children: "What is Push Chain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain is a shared state blockchain for universal apps. It is a Proof of Stake (PoS) chain\nbuilt to allow developers to create universal apps and act as a shared settlement layer for multiple L1s, L2s, and L3s enabling transactions from any chain - any app and any user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org",
        children: "Explore more about Push Chain here"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "bringing-aptos-to-push-chain",
      children: "Bringing Aptos to Push Chain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-does-this-mean-for-aptos-and-push-chain-users",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "👥 What does this mean for Aptos and Push Chain Users?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Interact with any app on any other chain, without leaving Aptos."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain empowers Aptos users to seamlessly interact with DApps, services, and protocols across any chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Thus eliminating the need for complex wallet setups and bridging, delivering a shared universal experience within the Aptos ecosystem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For instance, with Push Chain - An Aptos user can trade ERC tokens on Uniswap, Participate in Polygon-based DAOs, create meme coins on Solana - without needing to leave Apto’s ecosystem comfort and learn new wallet systems."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Enable shared experiences for all EVM and non-EVM Push Chain users on Aptos."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As a universal settlement layer - Push Chain users belong to multiple L1, L2s and L3s - be it EVM or nonEVMs like Aptos and Solana."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With Push Chain’s native Fee and Wallet abstraction support - users from these wide varieties of chains can explore the rich Aptos Ecosystem and send transactions to any Move-based Apps without navigating multiple networks or managing multiple wallets - with zero or minimal learning curve."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "️what-does-this-mean-for-builders",
      children: "👷‍♂️ What does this mean for builders?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
        children: ["Build ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Superfast"
        }), " Universal Apps"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain’s flexible architecture and its ability to allow transactions from any chain with sub-zero finality opens up a plethora of possibilities to build - Consumer, Financial and Mixed Financial Applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Attract Universal Users."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Aptos apps deployed on Push Chain can seamlessly open their doors to users from other EVM, and non-EVM chains and foster true shared experiences with Push Chain’s key innovations like - Shared State and Universal Smart Contracts."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/innovations-by-push-chain/",
        children: "Learn more about Push Chain’s Innovations here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "use-case-unlock",
      children: "🔓 Use case unlock:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "While the possibilities of this collaboration are limitless, here’s a quick list that touches on various use cases across various web3 segments that can be practically executed on Aptos with Push Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal Gaming:"
      }), " - Multiplayer games like roulette, casinos and RPG games on Aptos can utilize Push Chain to bring users across different chains to compete together in a unified manner."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal Prediction Markets:"
      }), " - Where users from Aptos and other chains can collectively speculate on real-life events. Markets can aggregate liquidity from all chains simultaneously bringing more user traction and better yield opportunities."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal AI Trading Agents:"
      }), " AI agents can analyse and execute trades across both Move and EVM ecosystems, accessing liquidity from Aptos alongside other DEXs for optimal arbitrage and trading strategies."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Shared RWAs:"
      }), " - RWA Apps on Aptos like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.propbase.app/",
        children: "Propbase"
      }), " can leverage Push Chain to provide shared state real estate tokenization and achieve unified RWA markets accessible to users from any blockchain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cross Chain - Shared Liquid Staking:"
      }), " Liquid Staking Apps like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://amnis.finance/",
        children: "Amnis Finance"
      }), " can leverage Push Chain to provide cross-chain liquid staking and achieve unified staking positions across Aptos and other blockchain ecosystems. Users from any chain can stake their native tokens and use their liquid staking derivatives across all supported protocols."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Shared Sate DEX:"
      }), " - DEXs like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://cellana.finance/",
        children: "Cellana Finance"
      }), " can leverage Push Chain to provide chain-agnostic Ve(3,3) governance and achieve unified liquidity management across multiple blockchain ecosystems."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Unified Lending & Borrowing Apps:"
      }), " Users from any chain can lend and borrow, addressing fragmented liquidity and enabling applications that act as universal liquidity hubs—taking liquidity from one chain and providing it to another."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cross-Chain Identity System:"
      }), " - Leveraging PushID ( A unified user identity by Push Chain that spans every user wallet, both EVM and non-EVM) to build reputation systems that aggregate user activity across Aptos and other chains, creating unified web3 identities."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-does-this-mean-for-web3",
      children: "🌌 What does this mean for Web3?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Unifying experiences by bringing users together."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain isn’t here to replace networks or compete with any; instead, it aims to eliminate the fragmented state of Web3 by unifying settlement across all chains under one universal shared state, unlocking a seamless, interconnected Web3 experience."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "As we wrap up, the Push Notifications Protocol has some extra special news with Aptos!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "-push-notifications-and-chat-to-support-the-aptos-ecosystem",
      children: "🔔 Push Notifications and Chat to support the Aptos Ecosystem"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With our quest to make Push Communications Protocol the universal layer of communication, supporting any and every chain, we’re excited to expand our reach to Aptos!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Aptos users can soon - be able to communicate with each other using their wallets, form group chats and gated communities on Push Chat!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We’re also extending our notification support to Aptos Ecosystem enabling lightning-fast notifications to Aptos users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Follow ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain",
          children: "@PushChain on X"
        }), " to get the latest updates about Push Chain"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Check out the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://whitepaper.push.org/",
          children: "Push Chain Whitepaper"
        }), "** for a detailed overview of the vision and the underlying technicalities."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Visit the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://push.org/chain",
          children: "Push Chain Website"
        }), " to find a one-pager explanation of the vision."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://scan.push.org/",
          children: "Push Chain Devnet"
        }), " is running live on Proof-of-Stake network validators, storage and archival nodes. The network already supports consumer transactions as well."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://simulate.push.org/",
          children: "Push Chain Simulate Tx"
        }), " already provides a way for everyone to send tx from any chain using wallet abstraction."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For more questions join ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://discord.com/invite/pushprotocol",
          children: "Push Discord"
        }), ". Our team would be glad to help you!"]
      }), "\n"]
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



/***/ }),

/***/ 745622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ff50be818fca9abacf8a87076c592bcd.webp");

/***/ }),

/***/ 751831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ff50be818fca9abacf8a87076c592bcd.webp");

/***/ })

}]);