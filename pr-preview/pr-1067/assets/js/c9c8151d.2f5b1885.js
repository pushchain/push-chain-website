"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[78715],{

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

/***/ 153895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image2-5d9ae0c85a4ebb07d13db37c10eb5910.webp");

/***/ }),

/***/ 250028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image6-860c53b95f95e25190d5deb0a270a422.webp");

/***/ }),

/***/ 305083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-61389f60de2ebdb4d8a889a1ae52954c.webp");

/***/ }),

/***/ 310465:
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
	slug: 'how-wallets-use-push-to-become-a-super-app',
	title: 'Case Study: How Wallets Use Push To Become a Super App?',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'How wallets use Push to become a Super App',
	text: 'Learn how web3 wallets are adopting Push to become a Super App',
	tags: [
		'Push Protocol',
		'Web3',
		'Wallets',
		'Adoption'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-wallets-use-push-to-become-a-super-app",
  "source": "@site/blog/2024-07-01-case-study-how-wallets-use-push-to-become-super-app/index.md",
  "title": "Case Study: How Wallets Use Push To Become a Super App?",
  "description": "How wallets use Push to become a Super App",
  "date": "2024-07-01T00:00:00.000Z",
  "formattedDate": "July 1, 2024",
  "tags": [
    {
      "label": "Push Protocol",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-protocol"
    },
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/web-3"
    },
    {
      "label": "Wallets",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/wallets"
    },
    {
      "label": "Adoption",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/adoption"
    }
  ],
  "readingTime": 4.48,
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
    "slug": "how-wallets-use-push-to-become-a-super-app",
    "title": "Case Study: How Wallets Use Push To Become a Super App?",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "How wallets use Push to become a Super App",
    "text": "Learn how web3 wallets are adopting Push to become a Super App",
    "tags": [
      "Push Protocol",
      "Web3",
      "Wallets",
      "Adoption"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "How to create your community on Push Chat?",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-to-create-your-community-on-push-chat"
  },
  "nextItem": {
    "title": "How to claim Push Alpha Access NFT",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-to-claim-push-alpha-access-nft"
  }
};
const assets = {
"image": (__webpack_require__(305083)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Challenges",
  "id": "challenges",
  "level": 2
}, {
  "value": "Solution",
  "id": "solution",
  "level": 2
}, {
  "value": "Journey from Wallet to a Super App Wallet from our Partners:",
  "id": "journey-from-wallet-to-a-super-app-wallet-from-our-partners",
  "level": 3
}, {
  "value": "1.Unstoppable Domains Lite Wallet",
  "id": "1unstoppable-domains-lite-wallet",
  "level": 3
}, {
  "value": "2.Metamask Snap",
  "id": "2metamask-snap",
  "level": 3
}, {
  "value": "3.ShapeShift Wallet",
  "id": "3shapeshift-wallet",
  "level": 3
}, {
  "value": "4.Verso Wallet:",
  "id": "4verso-wallet",
  "level": 3
}, {
  "value": "Push is the missing piece for building the next Super Wallet App🧩:",
  "id": "push-is-the-missing-piece-for-building-the-next-super-wallet-app",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
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
        alt: "Cover image of Case Study - How Wallets use Push to become a Super App",
        src: (__webpack_require__(478356)/* ["default"] */ .A) + "",
        width: "2000",
        height: "1125"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the ever-evolving landscape of Web3, as protocols become more innovative and mature, the need for web3 wallets to act as a bridge for onboarding typical Internet (web2) users into web3 with minimal friction is advancing rapidly."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Amidst these technical advancements, communication remains a paramount factor in driving this transformation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Today, Push Protocol is at the forefront, enabling wallets to enhance their functionality and better serve their users by becoming a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "'Super App’"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "challenges",
      children: "Challenges"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["According to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://dappradar.com/blog/state-of-the-dapp-industry-q1-2024",
        children: "DApp Radar"
      }), ", Q1 2024 saw a remarkable surge in daily active wallet users (dUAW), reaching an average of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "7 million"
      }), " daily active wallets—a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "77%"
      }), " increase compared to the previous year."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The numbers clearly show that the entry into web3 starts from a wallet. With more than 120 wallet apps, the sheer innovation in onboarding the next Billion users into web3 is surreal."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Although wallets are expanding their utility from simply being a medium of secure storage and a facilitator of transactions to now, becoming a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "‘Super Hub’"
      }), " for NFT, DeFi, and app browsing activities, they still lack the ability to consistently relay updates and alerts between the user and the accessed protocol while maintaining a constant, symbiotic and duplex communication relationship."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In addition, multi-chain wallets serve as a single entry point for users to interact with applications across a variety of supported chains with ease. However, there is no standardized way for these apps to communicate back with users through the same entrance point i.e. your wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "solution",
      children: "Solution"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push helps us solve these challenges."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With the help of an open - decentralized and secure network supported across multiple chains, Push facilitates any wallet, DApp, service or smart contract to tap into the network and fetch notifications with ease."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With the motive of forming a universal communication layer of web3, Push Protocol is expanding its support to multiple chains including ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Ethereum, Polygon, BSC, Arbitrum, Polygon zkEVM, Cyber and Fuse"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To date, Push has sent over ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "80 Million Notifications"
      }), " across ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "230k+ subscribers"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "journey-from-wallet-to-a-super-app-wallet-from-our-partners",
      children: "Journey from Wallet to a Super App Wallet from our Partners:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Lets take a thorough look at how our partner wallets are adopting Push to become a Super App."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push enables interoperable communications",
        src: (__webpack_require__(426973)/* ["default"] */ .A) + "",
        width: "2226",
        height: "1248"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Unstoppable Lite Wallet"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Push Metamask Snap"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Shapeshift Governance Wallet"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Verso Wallet"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1unstoppable-domains-lite-wallet",
      children: "1.Unstoppable Domains Lite Wallet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Unstoppable Domain Wallets are cryptocurrency addresses used to store users’ web3 domains in addition to tokens and digital collectables.\nAn Unstoppable Wallet with a valid domain acts as a web3 social identifier for enabling domain-to-domain in-app messaging!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push x UD: Empowering wallet-to-wallet messaging with ease!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .Image */ ._V, {
      src: (__webpack_require__(591300)/* ["default"] */ .A),
      alt: "Unstoppable Domains Lite Wallet",
      width: "353",
      height: "100%"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push is proud to enable the next frontier of inter-domain communication by powering notifications and messaging support for over ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "3.58 million"
      }), " UD users across more than ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "300 group chats"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "What type of users primarily use Unstoppable Lite Wallet?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The primary user of Unstoppable Lite Wallet are people with domains. The self-custody wallet is designed specifically for domainers, so they can manage and interact with their domains directly from the wallet in addition to traditional crypto tokens. This is a use case that has not been addressed by other wallets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "How does Unstopppable Lite Wallet ensure smooth UX and Communication?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Many of the Unstopppable Lite Wallet users are new to web3, so an intuitive and easy to use experience are essential. Inline education and clear messages help new users understand what can be a difficult learning curve."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "How does Push fit into the overall strategic goals of Unstoppable Lite Wallet?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Messaging is built directly into Unstoppable Lite Wallet. Push Protocol enables token gated group chat. Messaging is built directly into Unstoppable Lite Wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As Push Protocol enables wallet to wallet token gated group chatting, depending on domains and badges, users have access to various conditionally gated group chats where they can engage with others."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Overcoming seed phrase scares using MPC"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The unstoppable lite wallet features advanced multi-party computation (MPC) technology provided by Fireblocks to improve safety for the self-custody wallet. Users are able to manage their wallet using an email address and password, instead of worrying about seed phrases. There is also a way to recover the wallet if the user forgets their password, adding another layer of safety."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2metamask-snap",
      children: "2.Metamask Snap"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "MetaMask Snaps are independent feature plugins developed by third-party developers to enhance wallet experiences in areas such as communication, interoperability, security, account management, and more, for various web3 protocols and applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push MetaMask Snap allows users to receive real-time notification alerts from their favourite Web3 applications directly within their MetaMask wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push X Metamask: Unlocking a Super App experience"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .Image */ ._V, {
      src: (__webpack_require__(153895)/* ["default"] */ .A),
      alt: "Push Metamask Snap",
      width: "353",
      height: "100%"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Metamask being a widely popular wallet and often the first choice for many new web3 users, was crucial to integrate with Push’s capabilities. The launch of the snap functionality provided an opportunity to offer a communication experience akin to web2 applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://snaps.metamask.io/snap/npm/pushprotocol/snap/?utm_source=google&utm_medium=blog&utm_campaign=case_study_supper_app",
        children: "Push Metamask Snap"
      }), " was launched in September 2023 and continues to see steady growth with over ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "1.7k downloads."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push  Snap is positioned at a crucial intersection in a user’s DApp interaction journey through their wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Instead of frequently visiting a DApp to check the status of domain expiry or loan health indexes, Push Snap eliminates these kinds of unproductive user travels."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Using Push Snap, every mission-critical alert is delivered directly to the wallet as a Push Notification, providing an experience similar to a typical Web2 mobile app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3shapeshift-wallet",
      children: "3.ShapeShift Wallet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.shapeshift.com/",
        children: "Shapeshift"
      }), " is an open-source multi-chain platform, offering various DeFi services. The Shapeshift wallet is a community-governed, private, non-custodial wallet that supports multiple chains and assists users in managing their portfolio and DeFi positions."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push x ShapeShift  Wallet : Powering Communication"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .Image */ ._V, {
      src: (__webpack_require__(876629)/* ["default"] */ .A),
      alt: "Shapeshift Wallet",
      width: "353",
      height: "100%"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push powers the communication middleware for enabling Push notifications for product updates, governance updates and token transfers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push powers the necessary middleware and infrastructure for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.wherever.im/",
        children: "Wherever"
      }), ", a third-party communications service to show notifications in wallet and platform frontend as well as share with the user’s telegram and email."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["On a parallel front, As users continue to become mature and conscious about on-chain security, the demand for hardware wallets will be ever-increasing. Push can also be integrated with companion Apps of Hardware Wallets like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.keepkey.com/",
        children: "KeepKay"
      }), ", ensuring user’s with mission critical application updates independent of any wallet type."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ShapeShift has remained the second most subscribed channel for over a year, with a total subscriber count of more than ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "28,000"
      }), " with a growth of more than ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "306%"
      }), " as compared to previous year."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Shapeshift subscriber statistics",
        src: (__webpack_require__(844297)/* ["default"] */ .A) + "",
        width: "1587",
        height: "783"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4verso-wallet",
      children: "4.Verso Wallet:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://get-verso.com/",
        children: "Verso Wallet"
      }), " is a non-custodial multi-chain wallet for gaming, NFT,defi, meme coins and cash backs."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Verso bridges Web2 audiences to Web3 by enabling in-wallet crypto purchases using credit cards or bank transfers. Verso also facilitates the purchase of gift cards with crypto and provides crypto reward cashback."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push x Verso Wallet : Manage all your notifications in one place"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push x Verso integration enables users to search for and opt-into any channel and receive notifications directly into the wallet. Ensuring the fact that the communications across all subscribed channels can be managed and organized easily in one place with ease!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-is-the-missing-piece-for-building-the-next-super-wallet-app",
      children: "Push is the missing piece for building the next Super Wallet App🧩:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push is the missing piece of web3 wallets",
        src: (__webpack_require__(250028)/* ["default"] */ .A) + "",
        width: "1200",
        height: "1200"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As Web3 continues to mature, user experience will be the key differentiator for wallets vying to become the go-to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "\"Super App”"
      }), ". And Push is determined to onboard a Billion Users to web3 by filling in the void between current and expected communication experiences."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/explaining-push-nodes/",
        children: "Push Nodes"
      }), " launching soon, the Protocol will take its biggest leap in its journey to become a completely decentralized communication layer of web3."]
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

/***/ 426973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image1-773c84f6611fb60de497f032b88e6813.webp");

/***/ }),

/***/ 478356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-61389f60de2ebdb4d8a889a1ae52954c.webp");

/***/ }),

/***/ 591300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image3-d7830c6dc6f987f1db382732689dafa6.webp");

/***/ }),

/***/ 844297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image5-eb9e1bf69855bc58ae4f00c2e2b7f59e.webp");

/***/ }),

/***/ 876629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image4-f8a14125752aa82d79fb9a87197d767f.webp");

/***/ })

}]);