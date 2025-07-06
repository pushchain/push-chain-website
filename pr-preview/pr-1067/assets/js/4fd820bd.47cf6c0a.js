"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[32917],{

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

/***/ 145043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-3ec16b3e88cece72896f58abc9e5ef9c.webp");

/***/ }),

/***/ 796560:
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
	slug: 'building-web3-on-top-of-web2',
	title: 'Building Web3 on top of Web2.0 with Mask.io',
	description: 'Building Web3 on top of Web2.0 with Mask.io',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Almost 50% of the world’s total population currently uses social media. It has become a powerful tool for communication and coordination not just in Web2, but in Web3 as well. Recently on Twitter, people developed and created PleasrDAO in 2 days with 310 ETH for the sole purpose of buying an NFT.',
	tags: [
		'Announcements',
		'Ethereum',
		'Blockchain',
		'Decentralization'
	]
};
const contentTitle = 'About Ethereum Push Notification Service';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/building-web3-on-top-of-web2",
  "source": "@site/blog/2021-04-08-building-web3-on-top-of-web2/index.md",
  "title": "Building Web3 on top of Web2.0 with Mask.io",
  "description": "Building Web3 on top of Web2.0 with Mask.io",
  "date": "2021-04-08T00:00:00.000Z",
  "formattedDate": "April 8, 2021",
  "tags": [
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/announcements"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Decentralization",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/decentralization"
    }
  ],
  "readingTime": 1.8766666666666667,
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
    "slug": "building-web3-on-top-of-web2",
    "title": "Building Web3 on top of Web2.0 with Mask.io",
    "description": "Building Web3 on top of Web2.0 with Mask.io",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Almost 50% of the world’s total population currently uses social media. It has become a powerful tool for communication and coordination not just in Web2, but in Web3 as well. Recently on Twitter, people developed and created PleasrDAO in 2 days with 310 ETH for the sole purpose of buying an NFT.",
    "tags": [
      "Announcements",
      "Ethereum",
      "Blockchain",
      "Decentralization"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "The First NFT Collection from EPNS!",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/the-first-nft-collection-from-epns"
  },
  "nextItem": {
    "title": "EPNS $PUSH Polkastarter IDO Whitelist Results",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-push-polkastarter-ido-whitelist-results"
  }
};
const assets = {
"image": (__webpack_require__(994786)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Building Web3 on top of Web2.0 with Mask.io",
        src: (__webpack_require__(145043)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Almost 50% of the world’s total population currently uses social media. It has become a powerful tool for communication and coordination not just in Web2, but in Web3 as well. Recently on Twitter, people developed and created PleasrDAO in 2 days with 310 ETH for the sole purpose of buying an NFT."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It is no secret that our Web3 world heavily relies on social media to pass relevant information. The Mask Network is leveraging social media to onboard more people to the crypto ecosystem, including being able to purchase and swap cryptocurrencies without ever having to leave Twitter or Facebook."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In addition to supporting DeFi, the Mask Network team strongly believes in democratizing the internet. With individual data privacy a major concern for social media users, Mask Network offers encrypted messages which only the intended user can decrypt. On this journey of Mask Network to redefine the future of the internet, we are super excited to collaborate with them to run our pilot program."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In February 2021, the Mask Network had released their native governance token, $MASK. While the tool they are building on top of Web2 gives individuals the benefits of Web3, it is a cumbersome process for the team to reach out to their targeted users through the same media. This is where EPNS fits in. As a protocol, we are trying to bridge the gap between users and services by adding a communication layer."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Our focus during this pilot program will be on creating a channel for Mask Network that will allow the team to communicate with their targeted wallet addresses through a decentralized notification service facilitated by EPNS protocol. Notifications can be customized based on requirements and could be used to let users know when a buy/sell/swap order of their cryptocurrencies gets confirmed, when an NFT gets minted, when there is a new governance proposal, and more."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With this new way of adding Web3 features on top of social media, we anticipate few trends that will increase the need for decentralized notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "More exciting projects built on top of a wider range of social media networks would evolve."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "More innovation along various use cases of DeFi tools on top of various internet platforms."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "With massive adoption of these tools over various platforms on the internet, online shopping sites might also lean towards supporting cryptocurrencies."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We believe in providing a strong decentralized communication channel for a seamless privacy-protected experience through EPNS. By closely working with the team of Mask Network, we hope to refine EPNS protocol to meet the expectations of users and services."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS is a decentralized notification protocol that enables users (wallet addresses) to receive notifications. Using the protocol, any dApp, service or smart contract can send notifications to users in a platform agnostic fashion (mobile, tablet, web, user wallets, etc). The DeFi aspect of the protocol ensures that the user receives notifications and also earns from them."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Stay in touch! ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://epns.io/",
        children: "Website"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/epnsproject",
        children: "Twitter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://t.me/epnsproject",
        children: "Telegram"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service",
        children: "Medium"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "about-maskio",
      children: "About Mask.io"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Mask Network is a portal to the new, open internet. With Mask Network, you can send encrypted posts to your friends, participate in cryptocurrency lucky-draws, and share encrypted files on the platforms you are already using."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Stay in touch! ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://mask.io/",
        children: "Website"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/realmaskbook",
        children: "Twitter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://t.me/maskbook_group",
        children: "Telegram"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://masknetwork.medium.com/about",
        children: "Medium"
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

/***/ 994786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-3ec16b3e88cece72896f58abc9e5ef9c.webp");

/***/ })

}]);