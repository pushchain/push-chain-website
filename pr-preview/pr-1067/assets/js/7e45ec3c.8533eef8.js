"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[61892],{

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

/***/ 496439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-730c17b90203c951db1c0312959d6350.gif");

/***/ }),

/***/ 607331:
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
	slug: 'push-protocol-launches-on-bnb-chain',
	title: 'Push Protocol Launches on BNB Chain!💛',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	text: 'Today, we’re excited to announce that Push Protocol is launching on the BNB Chain mainnets! This means the largest web3 communication platform is now available to BNB’s ecosystem of thousands of dapps and hundreds of thousands of daily users. ',
	tags: [
		'BNB',
		'BNBChain',
		'Blockchain',
		'Blockchain Technology'
	]
};
const contentTitle = 'We’re continuing to build out web3 communication for the entire blockchain ecosystem.';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-protocol-launches-on-bnb-chain",
  "source": "@site/blog/2023-02-15-push-protocol-launches-on-bnb-chain/index.md",
  "title": "Push Protocol Launches on BNB Chain!💛",
  "description": "Cover image of Push Protocol Launches on BNB Chain!💛",
  "date": "2023-02-15T00:00:00.000Z",
  "formattedDate": "February 15, 2023",
  "tags": [
    {
      "label": "BNB",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/bnb"
    },
    {
      "label": "BNBChain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/bnb-chain"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain-technology"
    }
  ],
  "readingTime": 1.8733333333333333,
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
    "slug": "push-protocol-launches-on-bnb-chain",
    "title": "Push Protocol Launches on BNB Chain!💛",
    "authors": [
      "push"
    ],
    "image": "./cover-image.gif",
    "text": "Today, we’re excited to announce that Push Protocol is launching on the BNB Chain mainnets! This means the largest web3 communication platform is now available to BNB’s ecosystem of thousands of dapps and hundreds of thousands of daily users. ",
    "tags": [
      "BNB",
      "BNBChain",
      "Blockchain",
      "Blockchain Technology"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Building a Better UX in BNB With Our 8 Launch Collaborators🚀",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/building-a-better-ux-in-bnb-with-our-8-launch-collaborators"
  },
  "nextItem": {
    "title": "Push and Phuture Finance Team Up to Enhance User Engagement🐋",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-and-phuture-finance-team-up-to-enhance-user-engagement"
  }
};
const assets = {
"image": (__webpack_require__(496439)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Push Notifications on BNB Chain",
  "id": "push-notifications-on-bnb-chain",
  "level": 3
}, {
  "value": "Push Chat on BNB Chain",
  "id": "push-chat-on-bnb-chain",
  "level": 3
}, {
  "value": "Existing Push Ethereum &amp; Polygon Users",
  "id": "existing-push-ethereum--polygon-users",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Push Protocol Launches on BNB Chain!💛",
        src: (__webpack_require__(717306)/* ["default"] */ .A) + "",
        width: "600",
        height: "338"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Today, we’re excited to announce that ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Push Protocol is launching on the BNB Chain mainnet"
      }), "! This means the largest web3 communication platform is now available to BNB’s ecosystem of thousands of dapps and hundreds of thousands of daily users."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Back in September 2022, Push launched on Polygon’s mainnet, signaling our first step into becoming ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "the"
      }), " multi-chain communication protocol for all of web3. Staying true to our commitment of an interoperable future, the next chain to support Push Protocol is BNB Chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The launch of Push Protocol on BNB Chain will enable ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "Push Notifications"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "Push Chat"
      }), ". Read on to learn more."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-notifications-on-bnb-chain",
      children: "Push Notifications on BNB Chain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To date, Push Protocol has powered over 25 million notifications to +70,000 subscribers across the Ethereum and Polygon networks. The BNB Chain launch will allow existing BNB dapps and developers to launch and create their own channels and offer customized notifications in response to on- and off-chain events."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Any application or individual can launch a notification channel starting today. At launch, 1inch, Sushi, Thena, and Apeswap channels will be live for mainnet notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["BNB Chain will be implementing Push Smart Contracts v1.5, the newest upgrade to the Push Protocol. Push v1.5 upgrades provide imperative features including ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "channel creation with PUSH token, enabling notifications using Subgraph, inclusion of EIP-1271, etc."
      }), " Additionally, it also enables extra customization, including time-bound channels and editable channel details. The Protocol Fee Pool in v1.5 will deduct 10 PUSH from the original staked amount (minimum 50 PUSH to create a channel) for any critical transaction (like creation, reactivation, or detail modification). As part of the upcoming v2 release, the Protocol Fee Pool will have more functionality — including allowing protocol users to claim rewards and distributing funds to wallets that integrate Push Protocol. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/introducing-push-protocol-v1-5-80eb39b55424",
        children: "Learn more about Push v1.5!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["All of these features will be enabled for BNB Chain notifications starting today. The BNB notification ecosystem will be available through the primary Push Protocol app: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://app.push.org/",
        children: "app.push.org"
      }), ". In order to create and enable your channel for the BNB Chain, you can follow ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/notifications/tutorials/create-your-channel/",
        children: "this guide"
      }), " to ensure the complete setup is done adequately."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-chat-on-bnb-chain",
      children: "Push Chat on BNB Chain"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In October, Push Protocol announced our alpha for Push Chat — p2p web3 native chat between on-chain addresses. Push Chat is enabled for Ethereum and Polygon addresses, and with the BNB Chain launch, whitelisted addresses can now chat through BNB Chain as well. We’ll have more information about the continued rollout of Push Chat, so stay tuned on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain",
        children: "Push Protocol Twitter."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "existing-push-ethereum--polygon-users",
      children: "Existing Push Ethereum & Polygon Users"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To existing Push Protocol users on Ethereum and Polygon — say hello to the BNB Chain communities! And get ready for more mainnet announcements down the road. With today’s BNB announcement, no action is needed by Ethereum and Polygon users. All notifications and channels will remain functional, as will PUSH staking and rewards."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Back in September with the Push Protocol rebrand, we made a promise to build out the multi-chain communication protocol for all of web3. With the Polygon and Push Chat launches, we started our journey. With today’s BNB Chain launch, we’re continuing that promise to the Push community and to web3 at large."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let’s #PUSH for web3 communication!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "#PoweredbyPush"
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

/***/ 717306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-730c17b90203c951db1c0312959d6350.gif");

/***/ })

}]);