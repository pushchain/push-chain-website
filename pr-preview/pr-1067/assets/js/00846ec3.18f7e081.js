"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[21754],{

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

/***/ 495040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-84804c018b130a27d4e9a720ce5b124c.webp");

/***/ }),

/***/ 594059:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-and-flipside-crypto-join-forces',
	title: 'EPNS and Flipside Crypto Join Forces to Facilitate Push Notifications for Users',
	description: 'EPNS and Flipside Crypto Join Forces to Facilitate Push Notifications for Users',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Flipside Crypto, the project enabling communities to share data-driven insights on blockchain projects, joins forces with EPNS to bring decentralized push notifications to its users. As such, users of the platform are poised to receive updates about everything Flipside Crypto right on their devices.',
	tags: [
		'Ethereum',
		'Epnsproject',
		'Newsletter',
		'Blockchain'
	]
};
const contentTitle = 'On-Demand Analytics Through Structured Bounty Programs';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-flipside-crypto-join-forces",
  "source": "@site/blog/2022-03-21-epns-and-flipside-crypto-join-forces/index.md",
  "title": "EPNS and Flipside Crypto Join Forces to Facilitate Push Notifications for Users",
  "description": "EPNS and Flipside Crypto Join Forces to Facilitate Push Notifications for Users",
  "date": "2022-03-21T00:00:00.000Z",
  "formattedDate": "March 21, 2022",
  "tags": [
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/epnsproject"
    },
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/newsletter"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    }
  ],
  "readingTime": 1.92,
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
    "slug": "epns-and-flipside-crypto-join-forces",
    "title": "EPNS and Flipside Crypto Join Forces to Facilitate Push Notifications for Users",
    "description": "EPNS and Flipside Crypto Join Forces to Facilitate Push Notifications for Users",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Flipside Crypto, the project enabling communities to share data-driven insights on blockchain projects, joins forces with EPNS to bring decentralized push notifications to its users. As such, users of the platform are poised to receive updates about everything Flipside Crypto right on their devices.",
    "tags": [
      "Ethereum",
      "Epnsproject",
      "Newsletter",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Avoiding Loan Liquidation: EPNS Integrates With Notional Finance to Deliver Critical Loan Updates",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/avoiding-loan-liquidation"
  },
  "nextItem": {
    "title": "EPNS at ETHDenver 2022: A Throwback",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-at-ethdenver-2022-a-throwback"
  }
};
const assets = {
"image": (__webpack_require__(703045)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of EPNS and Flipside Crypto Join Forces to Facilitate Push Notifications for Users",
        src: (__webpack_require__(495040)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Flipside Crypto, the project enabling communities to share data-driven insights on blockchain projects, joins forces with EPNS to bring decentralized push notifications to its users. As such, users of the platform are poised to receive updates about everything Flipside Crypto right on their devices."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Blockchain technology, as a pivotal part of the next industrial revolution, has been growing from strength to strength in the last decade. Today, this technology is the cornerstone for the crypto, decentralized finance, web3, and NFT-metaverse industries. And just like the internet, user interactions within the blockchain space create a large amount of user data. This data is an invaluable resource to understand consumer behavior within the industry to create user-centric blockchain applications going forward."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, in its current state, the blockchain industry lacks a reliable analytics and query protocol that developers can source their data from. Enter Flipside Crypto. This novel blockchain protocol has been making major strides in the crypto-analytics realm with community-driven, incentivized insights."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Flipside Crypto is a community-driven crypto analytics platform that allows users to create and share data-backed insights for the projects that interest them. In doing so, the platform provides rich pre-modeled blockchain data that anyone can use to build futuristic applications for this emerging industry. On Flipside Crypto, developers can raise queries for the analytics and data they require about a platform and regular users of that platform can answer these queries with their unique insights."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "These on-demand insights are incentivized through the platform’s structured bounty programs based on feedback from the protocol in question and community members. This means that users who take time to learn about their favorite blockchain protocols can get paid to do so and eventually level up to become “SQL Superstars”."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Flipside Crypto has already partnered with blockchain networks and protocols like Solana, ThorChain, and ParaSwap, among others to make their on-chain data easily available for use."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now, given the community-driven nature of the platform, it is vital for Flipside Crypto to have a robust communication mechanism through which it can constantly keep its users in the loop. And this is where the collaboration with EPNS comes into play."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "what-does-the-collaboration-entail",
      children: "What Does the Collaboration Entail?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The collaboration aims to create an official medium of communication between the users and Flipside Crypto to help them communicate on important aspects of the protocol. Flipside Crypto will soon have an official channel on the EPNS platform that can be subscribed to. Users who subscribe to the channel will receive direct notifications from Flipside Crypto about any platform update, as and when it occurs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS has a mobile application, decentralized application, and a chrome extension to ensure that users do not miss out on these notifications no matter what device they’re on."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As Flipside continues to facilitate the growth of the blockchain space through rich data-driven insights on consumer behavior, we’re pleased to collaborate with them on this journey and hope to become an integral part of their operations."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "about-flipside-crypto",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "About Flipside Crypto"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Flipside provides Community Enabled Crypto Analytics, allowing our users to create and share data insights on the crypto projects they care most about. Through dashboard and visualization tools, as well as auto-generated API endpoints, data analysts can easily create queries that answer any question."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Stay in touch! | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://flipsidecrypto.xyz/",
        children: "Website"
      }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://blog.flipsidecrypto.com/",
        children: "Blog"
      }), " |"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 703045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-84804c018b130a27d4e9a720ce5b124c.webp");

/***/ })

}]);