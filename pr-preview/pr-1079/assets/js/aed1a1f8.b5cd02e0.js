"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[74348],{

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

/***/ 464511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-708ff501307b601c636526fde2f8d2e3.webp");

/***/ }),

/***/ 707098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-708ff501307b601c636526fde2f8d2e3.webp");

/***/ }),

/***/ 794976:
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
	slug: 'poolz-finance-collaborates-with-epns',
	title: 'Poolz Finance Collaborates with EPNS to Bring Push Notifications to Its Users',
	description: 'Poolz Finance Collaborates with EPNS to Bring Push Notifications to Its Users',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'From the get-go, decentralized exchanges (DEXs) have served as a popular way to pool and swap liquidity within the DeFi ecosystem. Projects in DeFi found a substantial way of generating the needed liquidity through yield farming and mining programs. ',
	tags: [
		'Ethereum',
		'Epnsproject',
		'Newsletter',
		'Blockchain',
		'Defi'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/poolz-finance-collaborates-with-epns",
  "source": "@site/blog/2022-02-14-poolz-finance-collaborates-with-epns/index.md",
  "title": "Poolz Finance Collaborates with EPNS to Bring Push Notifications to Its Users",
  "description": "Poolz Finance Collaborates with EPNS to Bring Push Notifications to Its Users",
  "date": "2022-02-14T00:00:00.000Z",
  "formattedDate": "February 14, 2022",
  "tags": [
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/epnsproject"
    },
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/newsletter"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"
    },
    {
      "label": "Defi",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/defi"
    }
  ],
  "readingTime": 1.59,
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
    "slug": "poolz-finance-collaborates-with-epns",
    "title": "Poolz Finance Collaborates with EPNS to Bring Push Notifications to Its Users",
    "description": "Poolz Finance Collaborates with EPNS to Bring Push Notifications to Its Users",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "From the get-go, decentralized exchanges (DEXs) have served as a popular way to pool and swap liquidity within the DeFi ecosystem. Projects in DeFi found a substantial way of generating the needed liquidity through yield farming and mining programs. ",
    "tags": [
      "Ethereum",
      "Epnsproject",
      "Newsletter",
      "Blockchain",
      "Defi"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS x CryptoManga: Decentralized Communication for Decentralized Gaming",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-and-cryptomanga-team-up"
  },
  "nextItem": {
    "title": "Dan Finlay of Metamask — Volume 2 Ep 02 Recap",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/dan-finlay-of-metamask—volume-2"
  }
};
const assets = {
"image": (__webpack_require__(707098)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "How Poolz Finance Can Benefit from EPNS",
  "id": "how-poolz-finance-can-benefit-from-epns",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Poolz Finance Collaborates with EPNS to Bring Push Notifications to Its Users",
        src: (__webpack_require__(464511)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "From the get-go, decentralized exchanges (DEXs) have served as a popular way to pool and swap liquidity within the DeFi ecosystem. Projects in DeFi found a substantial way of generating the needed liquidity through yield farming and mining programs. However, when compared to centralized exchanges, DEXs appear to be quite limited in what they can do. Emergent DeFi startups and projects still find it difficult to pool initial startup funding and market entry liquidity on DEXs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To solve this issue and help DeFi projects raise enough initial liquidity in a decentralized manner, Poolz Finance introduced a robust mechanism for new projects to raise funds through cross-chain liquidity auctions. In this regard, we at EPNS are pleased to announce our pilot collaboration with the protocol to enable direct communication with its users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-poolz-finance-can-benefit-from-epns",
      children: "How Poolz Finance Can Benefit from EPNS"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Poolz Finance is a swapping protocol and IDO launchpad that aims to revolutionize fund-raising in DeFi. It essentially allows startups and new DeFi protocols to auction their tokens on the platform for bootstrapping liquidity. Poolz Finance features highly customizable pool options to cater to a wide range of DeFi projects with varying use cases, and supports multichain integrations. Moreover, the platform also helps nascent startups with pre-listings, bringing them close to early investors."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For investors, Poolz Finance provides a way to invest in the growth of early-stage projects. As such, it is essential for the protocol to constantly stay in touch with its users, keeping them updated about new IDO, pool launches, and whitelisting updates. Through our pilot collaboration with Poolz Finance, we aim to create a medium for direct communication between users and the protocol through push notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "what-does-the-collaboration-entail",
      children: "What Does the Collaboration Entail"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As a result of this strategic collaboration, Poolz Finance will have an official channel on the EPNS platform. Users of Poolz Finance can subscribe to this channel to allow the protocol to directly communicate with them. They can expect to receive updates whenever a new liquidity pool is created on the platform and whenever a new token is available to claim. This alleviates the need for users to manually check the protocol for IDO launches, in turn saving them a lot of time and effort."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As Poolz Finance strives towards fostering innovative startups for DeFi, we’re pleased to partner with them on this ambitious journey. In the near future, we may explore further synergies with Poolz Finance to help keep its users in the loop with everything that happens on the platform."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "about-poolz",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "About Poolz"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Poolz is a decentralized fundraising and cross-chain launchpad. It is a hub for DeFi apps, enabling them to unravel the power of blockchain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Website: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://poolz.finance",
        children: "http://poolz.finance"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Application Form: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://bit.ly/3gqxbKG",
        children: "https://bit.ly/3gqxbKG"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Poolz Ventures: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "https://ventures.poolz.finance/",
        children: ["https://ventures.poolz.finance/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n"]
      }), "Telegram: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://t.me/PoolzOfficialCommunity",
        children: "https://t.me/PoolzOfficialCommunity"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Telegram Announcements: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://t.me/Poolz_Announcements",
        children: "https://t.me/Poolz_Announcements"
      })]
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