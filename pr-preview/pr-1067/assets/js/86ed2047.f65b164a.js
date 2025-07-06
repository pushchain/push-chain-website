"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[61331],{

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

/***/ 842794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f3b4ab4dcae269ad617fefec935068df.webp");

/***/ }),

/***/ 896871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f3b4ab4dcae269ad617fefec935068df.webp");

/***/ }),

/***/ 924733:
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
	slug: 'epns-and-coindesk-announce-media-push-notifications',
	title: 'EPNS and CoinDesk Announce Media Push Notifications',
	description: 'EPNS and CoinDesk Announce Media Push Notifications',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Today, we’re excited to announce our collaboration with CoinDesk as our inaugural media partnership to launch on the EPNS protocol.',
	tags: [
		'Ethereum',
		'Blockchain',
		'Newsletter',
		'Media'
	]
};
const contentTitle = 'How Does CoinDesk Benefit from EPNS';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-coindesk-announce-media-push-notifications",
  "source": "@site/blog/2022-04-12-epns-and-coindesk-announce-media/index.md",
  "title": "EPNS and CoinDesk Announce Media Push Notifications",
  "description": "EPNS and CoinDesk Announce Media Push Notifications",
  "date": "2022-04-12T00:00:00.000Z",
  "formattedDate": "April 12, 2022",
  "tags": [
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/newsletter"
    },
    {
      "label": "Media",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/media"
    }
  ],
  "readingTime": 1.2033333333333334,
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
    "slug": "epns-and-coindesk-announce-media-push-notifications",
    "title": "EPNS and CoinDesk Announce Media Push Notifications",
    "description": "EPNS and CoinDesk Announce Media Push Notifications",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Today, we’re excited to announce our collaboration with CoinDesk as our inaugural media partnership to launch on the EPNS protocol.",
    "tags": [
      "Ethereum",
      "Blockchain",
      "Newsletter",
      "Media"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Announcing Our $10.1 Million Series A!",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/announcing-our-series-a"
  },
  "nextItem": {
    "title": "Push Notifications for the Metaverse: EPNS Partners with Decentraland to Build Its Communication Layer",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-notifications-for-the-metaverse"
  }
};
const assets = {
"image": (__webpack_require__(896871)/* ["default"] */ .A),
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
        alt: "Cover image of EPNS and CoinDesk Announce Media Push Notifications",
        src: (__webpack_require__(842794)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Today, we’re excited to announce our collaboration with CoinDesk as our inaugural media partnership to launch on the EPNS protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Founded in 2013, CoinDesk has played a major role in educating millions of people across the globe about digital assets and blockchain. This is why it gives us immense pleasure to announce our collaboration with CoinDesk to facilitate push notifications for its users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "CoinDesk is the world’s leading media company for news and information about digital assets and the future of finance. The company focuses on building a trustworthy platform for users, investors, entrepreneurs, and traders of digital assets to stay updated with the happenings of this emerging industry. It is a gold mine of knowledge and information for anyone seeking to build futuristic financial products and cater to the growing needs of the population."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "What the platform can use more of is a decentralized means of communicating with users and letting them know when new information is available. This is where EPNS push notifications come into play for CoinDesk."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "what-does-the-collaboration-entail",
      children: "What Does the Collaboration Entail"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The collaboration between EPNS and CoinDesk has one aim and that is to create a reliable means of communication for the platform and users. CoinDesk will have an official notification channel that DeFi users can subscribe to. Every time a new article is published on the CoinDesk blog, users will get notified, a fool-proof way of keeping them updated about the industry. This allows them to expand their knowledge base and stay ahead of the market at all times."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As CoinDesk continues to revolutionize the crypto space by spreading knowledge and news, we’re pleased to be working with them and hope to become an integral part of the platform."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "about-coindesk",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "About CoinDesk"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "CoinDesk is the most influential and trusted media platform for a global community engaged in the transformation of the financial system and the emerging crypto economy. It is an integrated platform for news, events, data & research for the next generation of investing and the future of money."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.coindesk.com/",
        children: "Website"
      })
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



/***/ })

}]);