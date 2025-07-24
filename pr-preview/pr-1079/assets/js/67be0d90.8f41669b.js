"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[91022],{

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

/***/ 650126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d05c249e4918679308431e57bcc9057b.webp");

/***/ }),

/***/ 697237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d05c249e4918679308431e57bcc9057b.webp");

/***/ }),

/***/ 731587:
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
	slug: 'beincrypto-collaborates-with-push-to-bring-industry-news-and-high-quality-content-directly-to',
	title: 'BeInCrypto Collaborates With Push to Bring Industry News and High-Quality Content Directly to Readers’ Wallets',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'BeInCrypto, one of the most popular cryptocurrency news websites, strikes a strategic alliance with Push to deliver the daily dose of news directly to readers’ wallets. This alliance will end the readers’ reliance on centralized platforms for information and enables decentralized communication between the platform and readers.',
	tags: [
		'Web3',
		'Announcements',
		'Push Notification',
		'Ethereum',
		'Polygon'
	]
};
const contentTitle = 'Push and BeInCrypto join forces to bring decentralized communication to the platform.';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/beincrypto-collaborates-with-push-to-bring-industry-news-and-high-quality-content-directly-to",
  "source": "@site/blog/2022-10-13-beincrypto-push/index.md",
  "title": "BeInCrypto Collaborates With Push to Bring Industry News and High-Quality Content Directly to Readers’ Wallets",
  "description": "Cover image of BeInCrypto Collaborates With Push to Bring Industry News and High-Quality Content Directly to Readers’ Wallets",
  "date": "2022-10-13T00:00:00.000Z",
  "formattedDate": "October 13, 2022",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/web-3"
    },
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/announcements"
    },
    {
      "label": "Push Notification",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-notification"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    },
    {
      "label": "Polygon",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/polygon"
    }
  ],
  "readingTime": 1.4066666666666667,
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
    "slug": "beincrypto-collaborates-with-push-to-bring-industry-news-and-high-quality-content-directly-to",
    "title": "BeInCrypto Collaborates With Push to Bring Industry News and High-Quality Content Directly to Readers’ Wallets",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "BeInCrypto, one of the most popular cryptocurrency news websites, strikes a strategic alliance with Push to deliver the daily dose of news directly to readers’ wallets. This alliance will end the readers’ reliance on centralized platforms for information and enables decentralized communication between the platform and readers.",
    "tags": [
      "Web3",
      "Announcements",
      "Push Notification",
      "Ethereum",
      "Polygon"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "‘Enjoy Your NFT, Stay Tuned for Next Steps!’",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/enjoy-your-nft-stay-tuned-for-next-steps"
  },
  "nextItem": {
    "title": "Announcing the Push Chat Alpha Launch",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/announcing-the-push-chat-alpha-launch"
  }
};
const assets = {
"image": (__webpack_require__(697237)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Bringing Transparency to the Information Industry",
  "id": "bringing-transparency-to-the-information-industry",
  "level": 2
}, {
  "value": "Push Connects Beincrypto Directly to Its Hundreds of Thousands of Readers",
  "id": "push-connects-beincrypto-directly-to-its-hundreds-of-thousands-of-readers",
  "level": 2
}, {
  "value": "About BeInCrypto",
  "id": "about-beincrypto",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of BeInCrypto Collaborates With Push to Bring Industry News and High-Quality Content Directly to Readers’ Wallets",
        src: (__webpack_require__(650126)/* ["default"] */ .A) + "",
        width: "1100",
        height: "619"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://beincrypto.com/",
        children: "BeInCrypto"
      }), ", one of the most popular cryptocurrency news websites, strikes a strategic alliance with Push to deliver the daily dose of news directly to readers’ wallets. This alliance will end the readers’ reliance on centralized platforms for information and enables decentralized communication between the platform and readers."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "bringing-transparency-to-the-information-industry",
      children: "Bringing Transparency to the Information Industry"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Founded in 2018, BeInCrypto is a cryptocurrency and blockchain-focused news website that aims to spread awareness and education and bring transparency to the emerging industry. The website covers all related topics, from daily crypto updates to crypto technology and fintech."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It is the perfect platform for crypto enthusiasts, entrepreneurs, researchers, and investors to learn, research, and stay on top of the industry. In an emerging industry that is prone to false information, unlabelled sponsored posts, and paid news, BeInCrypto aims to deliver data-backed and objective pieces of information to its readers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The platform curates, analyses, and delivers industry updates to its readers in an easily digestible manner. However, the platform currently relies on centralized communication and aims to establish decentralized communication with its readers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is where Push Protocol comes into play."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-connects-beincrypto-directly-to-its-hundreds-of-thousands-of-readers",
      children: "Push Connects Beincrypto Directly to Its Hundreds of Thousands of Readers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The strategic collaboration between Push and BeInCyrpto will allow the news website to deliver news and updates directly to readers’ web3 wallets in a decentralized fashion. Readers who subscribe to the BeInCrypto channel will receive that news right in their inboxes. This saves them the hassle of manually checking the website and also ends their dependency on centralized platforms."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As BeInCrypto continues to provide readers with only the highest-quality content about the world of blockchain and cryptocurrencies, we’re very excited to collaborate with them on this journey. We hope to incorporate more use cases in the near future and become an integral part of the platform’s operations. Stay tuned for more announcements in the coming week!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("center", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: ".  .  ."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "about-beincrypto",
      children: "About BeInCrypto"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://beincrypto.com/",
        children: "BeInCrypto"
      }), " is a news website founded in August 2018 that specializes in cryptographic technology, privacy, fintech, and the Internet — among other related topics. The primary goal of the website is to inject transparency into an industry rife with disingenuous reporting, unlabeled sponsored articles, and paid news masquerading as honest journalism."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Since founding the website, the team has grown significantly to incorporate some of the brightest technology-media professionals."
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