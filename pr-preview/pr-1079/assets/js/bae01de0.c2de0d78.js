"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[10387],{

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

/***/ 502268:
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
	slug: 'epns-x-polychain-monsters-decentralized-communication-for-the-digital-collectible-ecosystem',
	title: 'EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem',
	authors: [
		'push'
	],
	image: './cover-image.png',
	text: 'Polychain Monsters, the cross-chain digital collectible and gaming ecosystem, and EPNS team up in a pilot collaboration to bring decentralized push notifications for users. As such, Polychain Monsters will now be able to seamlessly interact with its users and keep them updated about the status of their various activities in the rapidly expanding “Polyverse”.',
	tags: [
		'Nft',
		'Ethereum',
		'Epnsproject',
		'Nft Collectibles',
		'Blockchain'
	]
};
const contentTitle = 'EPNS and Polychain Monsters join forces to enable direct communication for users through decentralized push notifications.';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-x-polychain-monsters-decentralized-communication-for-the-digital-collectible-ecosystem",
  "source": "@site/blog/2022-07-21-epns-x-polychain-monsters-decentralized/index.md",
  "title": "EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem",
  "description": "Cover Image of EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem",
  "date": "2022-07-21T00:00:00.000Z",
  "formattedDate": "July 21, 2022",
  "tags": [
    {
      "label": "Nft",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/nft"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/epnsproject"
    },
    {
      "label": "Nft Collectibles",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/nft-collectibles"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"
    }
  ],
  "readingTime": 1.6466666666666667,
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
    "slug": "epns-x-polychain-monsters-decentralized-communication-for-the-digital-collectible-ecosystem",
    "title": "EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem",
    "authors": [
      "push"
    ],
    "image": "./cover-image.png",
    "text": "Polychain Monsters, the cross-chain digital collectible and gaming ecosystem, and EPNS team up in a pilot collaboration to bring decentralized push notifications for users. As such, Polychain Monsters will now be able to seamlessly interact with its users and keep them updated about the status of their various activities in the rapidly expanding “Polyverse”.",
    "tags": [
      "Nft",
      "Ethereum",
      "Epnsproject",
      "Nft Collectibles",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Roadmap 2022 — Q2 Wrap Up",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/roadmap-2022-q2-wrap-up"
  },
  "nextItem": {
    "title": "Friday PUSH #19",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/friday-push-19"
  }
};
const assets = {
"image": (__webpack_require__(806037)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Polychain Monsters: The Cross-Chain Collectible Ecosystem",
  "id": "polychain-monsters-the-cross-chain-collectible-ecosystem",
  "level": 2
}, {
  "value": "What Does the Collaboration Entail?",
  "id": "what-does-the-collaboration-entail",
  "level": 2
}, {
  "value": "About Polychain Monsters",
  "id": "about-polychain-monsters",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
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
        alt: "Cover Image of EPNS x Polychain Monsters: Decentralized Communication for the Digital Collectible Ecosystem",
        src: (__webpack_require__(557304)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Polychain Monsters, the cross-chain digital collectible and gaming ecosystem, and EPNS team up in a pilot collaboration to bring decentralized push notifications for users. As such, Polychain Monsters will now be able to seamlessly interact with its users and keep them updated about the status of their various activities in the rapidly expanding “Polyverse”."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "polychain-monsters-the-cross-chain-collectible-ecosystem",
      children: "Polychain Monsters: The Cross-Chain Collectible Ecosystem"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Polychain Monsters is an NFT project that aims to build a cross-chain digital collectible and gaming experience. At the very core of this project are Polymon, intricately designed and animated NFTs which can be unpacked in digital booster packs using $PMON tokens. These booster packs are available on the Ethereum, Binance Smart Chain, and Polygon networks, in addition to a one-off 10k Solana drop featuring Polychain Monsters’ latest expansion — Exomon. Each booster pack includes three Polymon, which come in a variety of traits that define their rarity. Some combinations of traits are extremely rare and valuable, and have sold on secondaries for over $100,000."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Polymon holders can earn weekly rewards by staking their NFTs or participating in yield farming using $PMON tokens. These Polymon will eventually play a crucial part in multiple play-and-earn games that are currently being developed within the Polychain ecosystem. As such, this project can significantly benefit from a decentralized communication channel that updates its users every time a new booster pack is available or when their rewards are deployed. This is where the alliance with EPNS comes into play."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-does-the-collaboration-entail",
      children: "What Does the Collaboration Entail?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The main aim of our collaboration with Polychain Monsters is the creation of a decentralized communication channel that enables direct communication between users and the platform. This channel will be housed on EPNS and users of Polychain Monsters can subscribe to it to become beneficiaries of decentralized notifications. They can expect to receive notifications whenever:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Their rewards are sent"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "They pulled a rare Polymon"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Other incoming features to be revealed\nThis saves users from manually checking for updates, making the platform easy to use. EPNS has a Chrome extension, a dApp, and a mobile application to ensure that users do not miss out on notifications on any device."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We’re excited to strike this alliance with Polychain Monsters and hope to become an integral part of their operations."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "about-polychain-monsters",
      children: "About Polychain Monsters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Polychain Monsters are beautifully animated cross-chain NFTs with varying scarcity, waiting to be discovered in digital booster packs. These NFTs will play an integral part in upcoming off- and on-chain games. In addition, Polychain Monsters offers DeFi features such as ERC-20 & BEP-20 PMON, as well as NFT staking."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Stay in touch! ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://polychainmonsters.com/",
        children: "Web"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/polychainmonsters",
        children: "Discord"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://twitter.com/polychainmon",
        children: "Twitter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://reddit.com/r/polychainmonsters",
        children: "Reddit"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://t.me/polychainmonsters",
        children: "Telegram"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://opensea.io/assets/polychainmonsters",
        children: "OpenSea (ETH / Polygon)"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tofunft.com/collection/polychain-monsters/items",
        children: "tofuNFT (BNB Smart Chain / Polygon)"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://magiceden.io/marketplace/exomon",
        children: "Magic Eden (Solana)"
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



/***/ }),

/***/ 557304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8beb90af2da95dbbba46b77438e3d471.png");

/***/ }),

/***/ 806037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8beb90af2da95dbbba46b77438e3d471.png");

/***/ })

}]);