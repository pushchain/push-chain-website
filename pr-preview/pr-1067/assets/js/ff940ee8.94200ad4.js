"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[41438],{

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

/***/ 51360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-e9b379d6d266d806f85aa1f4fef626c9.webp");

/***/ }),

/***/ 325246:
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
	slug: 'push-and-wherever-team-up-to-bring-web3-communication-tools-to-dapps',
	title: 'Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'This week, our featured fren is a wallet-first customer communication platform, Wherever 😊 Imagine wallet-to-wallet communication on dapps that protects users’ data and privacy, all the while ensuring they get the best possible experience. That’s Wherever for you. The platform enables web3 dapps to communicate with wallets directly, no matter where they are. Communication wherever, literally!',
	tags: [
		'Frensofpush',
		'Web3',
		'Blockchain',
		'Blockchain Technology',
		'Push Notification'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-and-wherever-team-up-to-bring-web3-communication-tools-to-dapps",
  "source": "@site/blog/2023-02-02-push-and-wherever-team-up/index.md",
  "title": "Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️",
  "description": "Cover image of Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️",
  "date": "2023-02-02T00:00:00.000Z",
  "formattedDate": "February 2, 2023",
  "tags": [
    {
      "label": "Frensofpush",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/frensofpush"
    },
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/web-3"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain-technology"
    },
    {
      "label": "Push Notification",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-notification"
    }
  ],
  "readingTime": 3.07,
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
    "slug": "push-and-wherever-team-up-to-bring-web3-communication-tools-to-dapps",
    "title": "Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "This week, our featured fren is a wallet-first customer communication platform, Wherever 😊 Imagine wallet-to-wallet communication on dapps that protects users’ data and privacy, all the while ensuring they get the best possible experience. That’s Wherever for you. The platform enables web3 dapps to communicate with wallets directly, no matter where they are. Communication wherever, literally!",
    "tags": [
      "Frensofpush",
      "Web3",
      "Blockchain",
      "Blockchain Technology",
      "Push Notification"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "January Monthly Recap❄️",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/january-monthly-recap"
  },
  "nextItem": {
    "title": "Getting Started With Push SDK REST API⚙️",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/getting-started-with-push-sdk-rest-api"
  }
};
const assets = {
"image": (__webpack_require__(51360)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Hi Amos, how did you become involved in building in the blockchain space? What’s your story?",
  "id": "hi-amos-how-did-you-become-involved-in-building-in-the-blockchain-space-whats-your-story",
  "level": 2
}, {
  "value": "Tell us about Wherever — what’s it about, and what problem does Wherever solve?",
  "id": "tell-us-about-wherever--whats-it-about-and-what-problem-does-wherever-solve",
  "level": 3
}, {
  "value": "What’s your 2023 plan for Wherever?",
  "id": "whats-your-2023-plan-for-wherever",
  "level": 3
}, {
  "value": "How is Wherever using Push’s web3 communication layer?",
  "id": "how-is-wherever-using-pushs-web3-communication-layer",
  "level": 3
}, {
  "value": "What cool use cases do you see Push being used for in the future?",
  "id": "what-cool-use-cases-do-you-see-push-being-used-for-in-the-future",
  "level": 3
}, {
  "value": "How would you describe your experience using Push? What benefits have you seen?",
  "id": "how-would-you-describe-your-experience-using-push-what-benefits-have-you-seen",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Push and Wherever Team Up to Bring Web3 Communication Tools to Dapps🛠️",
        src: (__webpack_require__(392343)/* ["default"] */ .A) + "",
        width: "720",
        height: "405"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This week, our featured fren is a wallet-first customer communication platform, Wherever 😊"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Imagine wallet-to-wallet communication on dapps that protects users’ data and privacy, all the while ensuring they get the best possible experience. That’s Wherever for you. The platform enables web3 dapps to communicate with wallets directly, no matter where they are. Communication wherever, literally!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "By way of this collaboration, Push provides Wherever the infrastructure to facilitate wallet communication with an emphasis on personalization, automation, and user experience. Wherever relies on Push’s communication layer to deliver in-app notifications while ensuring a decentralized relay and storage."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this episode of “Frens of Push”, Amos joins us to talk about how the pilot collaboration between Push and Wherever has the potential to disrupt web3 communication."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "hi-amos-how-did-you-become-involved-in-building-in-the-blockchain-space-whats-your-story",
      children: "Hi Amos, how did you become involved in building in the blockchain space? What’s your story?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Amos:"
      }), " Before I started working on Wherever, I founded an airline communication startup, helping the biggest airlines in the world communicate with their passengers during flight disruptions. Working with web2 communication infrastructure at a large scale really showed me how fragmented and antiquated it is. Dominated by either siloed walled gardens or out-of-date messaging protocols, the digital communication space was broken. In search of other alternatives, I came across the potential of web3 to disrupt this huge space and decided that I have to join this revolution. And so together with my two amazing friends and co-founders, Niv Oppenhaim and Ido Goldberg, we started Wherever on a mission to help create an internet where users can communicate with anyone from wherever."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "tell-us-about-wherever--whats-it-about-and-what-problem-does-wherever-solve",
      children: "Tell us about Wherever — what’s it about, and what problem does Wherever solve?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Amos:"
      }), " Wherever is a wallet-first communication platform. We help web3 projects communicate directly with wallets, wherever they are. Today, dapps and communities struggle to rise above the noise on Twitter and Discord, lacking a more personalized channel with their users. On top of the clutter, the web3 identity gap forces projects to “spray and pray” in these web2 platforms, engaging users without understanding their on-chain activity and ownership."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Wherever provides product and community managers with the tools to grow a direct web3 communication channel with their users, and leverage web3 messaging protocols to send messages directly to their wallets. Our platform is comprised of three main components — Subscriber Growth tools, Broadcasting Studio, and Web3 Inbox."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Growth tools are basically APIs, widgets, and Discord bots that help collect web3 subscribers and enable them to connect web2 channels, such as email and Telegram, without compromising their privacy. In the Studio, marketers can broadcast personalized campaigns directly to their users’ wallets based on their digital ownership, and PMs can use our no-code builder to create automated notifications based on the users on-chain activity. Lastly, we enable dapps and Wallet Apps to embed a web3 inbox and empower their users to tap into decentralized and secure messaging."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "whats-your-2023-plan-for-wherever",
      children: "What’s your 2023 plan for Wherever?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Amos:"
      }), " First, we believe that 2023 will be the year of wallet-to-wallet communication! Every project in the space will add web3 native messaging channels to build trust with their users, drive engagement, and foster stronger relationships."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We’ll be focusing this year on helping dapps onboard their users to this next-gen digital communication, and leverage the messaging protocols to send the right message, at the right time, to the right wallet. Furthermore, we will be introducing cool new ways to create wallet-first loyalty & ambassador programs, user research surveys, customer support, airdrops, and more!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-is-wherever-using-pushs-web3-communication-layer",
      children: "How is Wherever using Push’s web3 communication layer?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Amos:"
      }), " Wherever leverages Push’s communication layer to send messages directly to users’ wallets. Push enables us to focus on personalization, automation, and UX while they provide the infrastructure to manage the relay and storage of the messages. Together, we are able to offer any web3 project a communication experience that is on par with web2 but completely decentralized and interoperable. This unlocks a completely new and radically different experience — your inbox, wherever you go!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-cool-use-cases-do-you-see-push-being-used-for-in-the-future",
      children: "What cool use cases do you see Push being used for in the future?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Amos:"
      }), " Interactive Messages! Besides interoperability and this notion of “your inbox, wherever”, interactive messaging could be web3’s killer feature. As Gabby Goldberg coined it, “talking to the protocol”, means that the recipient of the message is the protocol itself. Interactive Messages would enable users to do almost everything through the chat interface — send money to a friend, submit an NFT offer, or vote on a new DAO proposal. This will take web3 from “being on par with web2”, to “kicking web2 in the a**”!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-would-you-describe-your-experience-using-push-what-benefits-have-you-seen",
      children: "How would you describe your experience using Push? What benefits have you seen?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Amos:"
      }), " The experience so far has been great! We look forward to collaborating and helping more web3 projects leverage the Push protocol to engage their users in more delightful ways. Shoutout to Madeline and Richa for being such great partners to us!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Thanks Amos for the awesome conversation. Hope to revolutionize web3 communication together!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "About Wherever\nWherever is a wallet-first customer communication platform, designed to help dapps establish wallet-to-wallet communication with their users without requiring them to compromise their experience or privacy."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Find more about Wherever: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://wherever.to/",
        children: "Website"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/wherever_im",
        children: "Twitter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.wherever.to/main/",
        children: "Docs"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "“Push frens” is our weekly content series to spotlight outstanding projects building with Push. If you want to be featured, reach out to us, and you could be our next Fren in the series."
      })
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

/***/ 392343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-e9b379d6d266d806f85aa1f4fef626c9.webp");

/***/ })

}]);