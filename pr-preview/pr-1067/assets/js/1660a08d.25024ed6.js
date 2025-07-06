"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[80055],{

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

/***/ 91243:
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
	slug: 'epns-x-stox-enabling-communication-for-the-global-portfolio-tracker',
	title: 'EPNS x Stox: Enabling Communication for the Global Portfolio Tracker',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'EPNS and Stox, the portfolio tracker platform for DeFi, team up in a pilot collaboration to bring push notifications to users. As such, Stox will now be able to seamlessly interact with its users and keep them updated about the status of their portfolio, mainly when their NFTs are sold.',
	tags: [
		'Ethereum',
		'Epnsproject',
		'Stox',
		'Blockchain',
		'Portfolio'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-x-stox-enabling-communication-for-the-global-portfolio-tracker",
  "source": "@site/blog/2022-06-14-epns-x-stox-enabling-communication/index.md",
  "title": "EPNS x Stox: Enabling Communication for the Global Portfolio Tracker",
  "description": "Cover Image of EPNS x Stox: Enabling Communication for the Global Portfolio Tracker",
  "date": "2022-06-14T00:00:00.000Z",
  "formattedDate": "June 14, 2022",
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
      "label": "Stox",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/stox"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Portfolio",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/portfolio"
    }
  ],
  "readingTime": 1.22,
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
    "slug": "epns-x-stox-enabling-communication-for-the-global-portfolio-tracker",
    "title": "EPNS x Stox: Enabling Communication for the Global Portfolio Tracker",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "EPNS and Stox, the portfolio tracker platform for DeFi, team up in a pilot collaboration to bring push notifications to users. As such, Stox will now be able to seamlessly interact with its users and keep them updated about the status of their portfolio, mainly when their NFTs are sold.",
    "tags": [
      "Ethereum",
      "Epnsproject",
      "Stox",
      "Blockchain",
      "Portfolio"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS + Graph Hackathon 2022 Winners Announced!",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-graph-hackathon-2022-winners-announced"
  },
  "nextItem": {
    "title": "Why Engaging with Users Within the NFTVerse Matters",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/why-engaging-with-users-within-the-nft-verse-matters"
  }
};
const assets = {
"image": (__webpack_require__(143421)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Stox: The Portfolio Tracker",
  "id": "stox-the-portfolio-tracker",
  "level": 3
}, {
  "value": "What Does the Collaboration Entail",
  "id": "what-does-the-collaboration-entail",
  "level": 3
}, {
  "value": "About Stox",
  "id": "about-stox",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of EPNS x Stox: Enabling Communication for the Global Portfolio Tracker",
        src: (__webpack_require__(331332)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS and Stox, the portfolio tracker platform for DeFi, team up in a pilot collaboration to bring push notifications to users. As such, Stox will now be able to seamlessly interact with its users and keep them updated about the status of their portfolio, mainly when their NFTs are sold."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "stox-the-portfolio-tracker",
      children: "Stox: The Portfolio Tracker"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Stox is a global, all-asset portfolio tracker that allows users to track their investments in over 25 equity markets, metals, and mutual funds. However, the platform focuses on web3, allowing users to invest in and track their crypto and NFT portfolios. Investors can automatically import their Ethereum and Binance Smart Chain (BSC) trades onto the Stox platform. They can also record any transaction done on the platform."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A platform like this allows users to bring all of their under a single roof, making it easier for them to track, manage, and make adjustments to their portfolio. Stox has a beginner-friendly user interface with widgets and hashtags for quick glances. The best part is that Stox supports NFT investments and allows users to buy and sell NFTs on the platform."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-does-the-collaboration-entail",
      children: "What Does the Collaboration Entail"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The goal of our collaboration with Stox is the creation of a decentralized communication channel that allows direct interaction with its users. This channel will be housed on the EPNS platform and users of Stox can subscribe to it to become beneficiaries of decentralized notifications. They can expect to receive notifications whenever one of their NFTs is sold."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This saves users from having to manually check for all of these updates, which makes the platform easier to use and increases the number of people who use it. EPNS has a Chrome extension, a DAPP, and a mobile application to ensure that users do not miss out on notifications on any device."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We’re excited to strike this alliance with Stox and hope to become an integral part of their operations."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "about-stox",
      children: "About Stox"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Stox is a global all asset investment tracker with a strong focus on web3 and social investing, for the masses"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Stay in touch! ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.stox.app/",
        children: "Website"
      })]
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

/***/ 143421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-63a5b4d06ebfb5614b5ffae8c8da3fee.webp");

/***/ }),

/***/ 331332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-63a5b4d06ebfb5614b5ffae8c8da3fee.webp");

/***/ })

}]);