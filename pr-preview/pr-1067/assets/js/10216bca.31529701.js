"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[53059],{

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

/***/ 30501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d4038b00a8858ea58e8de0bcc4b2a57e.webp");

/***/ }),

/***/ 168814:
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
	slug: 'were-still-pushing-a-deeper-look-into-push-chat',
	title: 'We’re Still Pushing: A Deeper Look Into Push Chat',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Launched in early October, Push Chat is providing secure and instant communication for all by connecting users and dapps across web3.',
	tags: [
		'Web3',
		'Developer',
		'Push Notification',
		'PushChat',
		'Messaging'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/were-still-pushing-a-deeper-look-into-push-chat",
  "source": "@site/blog/2022-12-21-deeper-look-into-push-chat/index.md",
  "title": "We’re Still Pushing: A Deeper Look Into Push Chat",
  "description": "Cover image of We’re Still Pushing: A Deeper Look Into Push Chat",
  "date": "2022-12-21T00:00:00.000Z",
  "formattedDate": "December 21, 2022",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/web-3"
    },
    {
      "label": "Developer",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/developer"
    },
    {
      "label": "Push Notification",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-notification"
    },
    {
      "label": "PushChat",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chat"
    },
    {
      "label": "Messaging",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/messaging"
    }
  ],
  "readingTime": 5.953333333333333,
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
    "slug": "were-still-pushing-a-deeper-look-into-push-chat",
    "title": "We’re Still Pushing: A Deeper Look Into Push Chat",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Launched in early October, Push Chat is providing secure and instant communication for all by connecting users and dapps across web3.",
    "tags": [
      "Web3",
      "Developer",
      "Push Notification",
      "PushChat",
      "Messaging"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Helps Mover — the First Crypto Debit Card, to Power Communication on the Platform",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-helps-mover-the-first-crypto-debit-card-to-power-communication-on-the-platform"
  },
  "nextItem": {
    "title": "Push and Tollan Worlds Partner to Level Up Communication With Gamers",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-and-tollan-worlds-partner-to-level-up-communication-with-gamers"
  }
};
const assets = {
"image": (__webpack_require__(679496)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "What Is Push Chat?",
  "id": "what-is-push-chat",
  "level": 2
}, {
  "value": "Why Push Chat now?",
  "id": "why-push-chat-now",
  "level": 2
}, {
  "value": "How Push Chat works?",
  "id": "how-push-chat-works",
  "level": 2
}, {
  "value": "What are Push Nodes?",
  "id": "what-are-push-nodes",
  "level": 2
}, {
  "value": "Who is currently running Push Nodes?",
  "id": "who-is-currently-running-push-nodes",
  "level": 2
}, {
  "value": "How Does a User Send a Message Using Their Account Address?",
  "id": "how-does-a-user-send-a-message-using-their-account-address",
  "level": 2
}, {
  "value": "Where are messages stored?",
  "id": "where-are-messages-stored",
  "level": 2
}, {
  "value": "Are messages safe, and is the network secure?",
  "id": "are-messages-safe-and-is-the-network-secure",
  "level": 2
}, {
  "value": "Does this apply to notifications? How do notifications fit into all this?",
  "id": "does-this-apply-to-notifications-how-do-notifications-fit-into-all-this",
  "level": 2
}, {
  "value": "Push Working Towards Decentralization",
  "id": "push-working-towards-decentralization",
  "level": 2
}, {
  "value": "1) Content can’t be changed",
  "id": "1-content-cant-be-changed",
  "level": 3
}, {
  "value": "2) Content can’t be censored",
  "id": "2-content-cant-be-censored",
  "level": 3
}, {
  "value": "Push-ing Real Solutions for Web3",
  "id": "push-ing-real-solutions-for-web3",
  "level": 2
}, {
  "value": "We mean it — let’s scale communication",
  "id": "we-mean-it--lets-scale-communication",
  "level": 3
}, {
  "value": "Push your dapp",
  "id": "push-your-dapp",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of We’re Still Pushing: A Deeper Look Into Push Chat",
        src: (__webpack_require__(30501)/* ["default"] */ .A) + "",
        width: "1100",
        height: "578"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Launched in early October, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/#/chat",
        children: "Push Chat"
      }), " is providing secure and instant communication for all by connecting users and dapps across web3."]
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this article, we deep dive into how Push Chat works and its use case."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chat is still in alpha and we’re gradually rolling out early access to all of you. If you want to skip the line and become one of the first builders to try out Push Chat — keep reading 👀"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-push-chat",
      children: "What Is Push Chat?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/#/chat",
        children: "Push Chat"
      }), " is a secure messaging protocol built by Push Protocol. Messages are encrypted, signed, and stored on IPFS and they are sent through Push Nodes."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      children: "Note: The team is continuing to develop the Push Protocol including notification and chat for wallets regardless of any chain in web3 in a multichain, platform-agnostic, and gasless way. Push Chat is the next offering of the protocol after push notifications and is currently available on Ethereum and Polygon with other chain support to follow soon."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "why-push-chat-now",
      children: "Why Push Chat now?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chat and video were imagined by us in 2020 but we knew that before notifications become a reality, doing chat or video will just become a novelty as everything we do in our virtual lives starts out with a notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For example, you don’t chat on WhatsApp as much as you chat via notifications on WhatsApp, the same is the case with Facetime. Owing to this, Push created notifications for web3 first which paved the way for real-time communication mediums to become a possibility."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Protocol’s vision has remained to be the de-facto layer of communication for the entire web3 and Push Chat (with native push notification support) helps in wrapping another milestone to bring the UX of web3 on par with web2."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-push-chat-works",
      children: "How Push Chat works?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chat uses IPFS, encryption, and pinning of the messages on Push Nodes to enable a seamless, no-message drop experience for the user. Each message (and notification) carries a verification proof which the front-end can use to determine that the message content and sender are actually the ones that sent these messages out. You can read about notification verification proofs and the various supported formats here:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/PIPs/tree/main/definitions/Standard/PRC/Notification?source=post_page-----90fdea8d9e8e--------------------------------",
        children: "PIPs/definitions/Standard/PRC/Notification at main · ethereum-push-notification-service/PIPs"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-are-push-nodes",
      children: "What are Push Nodes?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Push Nodes"
        })
      }), " are a network of nodes, where each node can have a different role in the network that is responsible for validating and dispatching each notification and chat message between addresses."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Their main task is to validate that:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "the payload is following the corresponding payload standard,"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "the sender can actually send the message, and signature validation,"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["if the payload is valid, the Push Nodes will store the message on IPFS and then send a notification to the receiver of the message.\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "Note: Push Nodes are in alpha right now and are currently run by the Push Chain team with an alpha version of these nodes scheduled to come out around Q1 / Q2 of 2023."
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "who-is-currently-running-push-nodes",
      children: "Who is currently running Push Nodes?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push team currently runs the Push Nodes for Push Chat. The team is working towards decentralizing the network every day by making progress in establishing the underlying primitives for the Push Protocol. This is only until the team fully bootstraps the Push Protocol and the protocol and Push Chat are production ready."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once the network becomes fully decentralized, Push Nodes will be incentivized to maintain the network, be readily addressable, and provide message content through $PUSH tokens which are native tokens of the protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      children: "Read about Push Economics here:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/tokenomics/deepdive/$push/",
        children: "Push Token Economics"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-does-a-user-send-a-message-using-their-account-address",
      children: "How Does a User Send a Message Using Their Account Address?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A user of Push Chat has two sections: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Chats and Requests."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Users sending a message to another address for the first time will be the first subject to the Request type until the receiving address accepts the message. Then, messages and notifications from that address will appear in the receiving addresses chats section. Eventually, users will be able to block addresses. Receiving addresses aren’t notified about messages in the Request box. This prevents users from receiving messages from any random address that sends them a message and general spam."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If a message is sent to an address that hasn’t been authenticated yet on the Push Protocol, those messages will be in plain text until the receiving address authenticates itself."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push Chat",
        src: (__webpack_require__(853825)/* ["default"] */ .A) + "",
        width: "720",
        height: "720"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: ["Push Chat: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "https://app.push.org/#/chat",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://app.push.org/#/chat",
            children: "https://app.push.org/#/chat"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "where-are-messages-stored",
      children: "Where are messages stored?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Nodes store all messages sent over the network. Any Push Node can expose locally stored messages to the network, which other Push Nodes can connect to and fetch. The nodes can then push these messages to a user’s public address. Each message is stored on IPFS along with its verification proof which allows the frontends to verify that the content of the message indeed originated from the sender and not from anyone else."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "are-messages-safe-and-is-the-network-secure",
      children: "Are messages safe, and is the network secure?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "PGP (Pretty Good Privacy) is an encryption method that provides privacy and authentication for data communication. PGP encryption keys are generated for every address on the network. Learn more about P2P encryption here."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The PGP public key is used to encrypt the content sent using asymmetric encryption. This ensures that the encrypted message payload can only be decrypted by the receiver and no other third party can decrypt or see the content of the message."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Note: The encryption method used here is future-proof, as other methods can encrypt the keys and adapt to newer cryptography."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "does-this-apply-to-notifications-how-do-notifications-fit-into-all-this",
      children: "Does this apply to notifications? How do notifications fit into all this?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Chat while an integral part of any application works best when notifications are integrated into it natively. Most of the time, whenever we are chatting either on Discord, Telegram, WhatsApp, or anywhere else, we usually don’t have the application open. Instead, we reply to a message and then go on doing other activities until the other person replies which we receive as a notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chat uses this exact web2 UX to ensure that the web3 user finally gets the same experience as that of a web2 user by utilizing the native push notifications capabilities of Push Protocol to send a notification out to the wallet address if the wallet address has approved the request of the sender wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-working-towards-decentralization",
      children: "Push Working Towards Decentralization"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Applications need to protect users and their data and remove censorship. The Push team is privileged to tackle a fundamental problem in the new web (such as the poor user experience and a subliminal communication layer)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To achieve decentralization, the Push team has broken that into two phases, one is content can’t be changed and the other one is content can’t be censored."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-content-cant-be-changed",
      children: "1) Content can’t be changed"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With verification proof, the immutability of the content is always ensured (1), read more here:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/PIPs/tree/main/definitions/Standard/PRC/Notification?source=post_page-----90fdea8d9e8e--------------------------------",
        children: "PIPs/definitions/Standard/PRC/Notification at main · ethereum-push-notification-service/PIPs"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-content-cant-be-censored",
      children: "2) Content can’t be censored"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is achieved by developing Push Nodes that enables anyone to run the node in a permissionless way with PoS to incentivize and penalize behavior. Alpha Push Nodes are scheduled to happen somewhere between Q1 / Q2 of 2023."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-ing-real-solutions-for-web3",
      children: "Push-ing Real Solutions for Web3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Yes, the user experience in web3 needs much work, and to be frank, it is likely years out from where it should be. That is why the Push team is focusing on a protocol that tackles the problem from the ground up, a grassroots solution, and a primary reason why web3 is the next iteration of the web — improving how we interact."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "When a sufficient number of dapps and services in web3 implement Push chat, it enables a new wave of use cases and scales coordination because now messaging and notifications are web-wide and not in isolation to dapps and their users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Dapps can use event-driven computation to communicate off-chain or on-chain with one another and enable fully-scaled coordination. Dapps also don’t have to worry about maintaining the underlying infrastructure to push messages which takes the load off developers, and the network guarantees message integrity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "we-mean-it--lets-scale-communication",
      children: "We mean it — let’s scale communication"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We previously described how you could use Push Protocol for various use cases in web3, such as in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/an-introduction-to-push-notification-part-2-2-governance-use-cases-1ea1e0a58ce1",
        children: "governance"
      }), ". While Push allows for these great capabilities, the truth is that many web3 governance systems lack participation. Many DAOs depend on a few contributors and have a central source of truth, and there is still a disconnect between DeFi and the user. User coordination generates high-value sources of truth. We can see this with the effectiveness of crowdfunding, the pooling of knowledge, funds, and resources, novel voting methods, petitions, and even zero-knowledge primitives. An easily adaptable communication stack and an ambitious outlook are a step in the right direction."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Imagine a web-wide poll about a major topic that anyone around the world can participate in. The poll is guaranteed to be censorship-resistant and verifiable, all while properly incentivizing those who participated and curated the poll with their resources. This scratches the surface of the coordination capabilities of a web3-native messaging protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-your-dapp",
      children: "Push your dapp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Your application and the users of web3 deserve robust communication. Push Chat can help. Here is a summary of its key features:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Push Chat is permissionless:"
        }), " the production-ready version will allow any address on any platform to use their account (address) to chat with any other account across web3. Users aren’t required to sign up anywhere."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Push Chat is forward-compatible:"
        }), " Push Chat can adapt to any changes made to existing platforms or new ones that arise, as the messaging functionality will not rely on the underlying platform the messages are sent and received from."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Push Chat is user-friendly:"
        }), " Push Chat is a friendly and familiar-facing user experience that current users appreciate."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Push Chat is developer-friendly:"
        }), " Using the Push chat SDK, developers can add a messaging layer to their application or service. The message type is JSON, making it easy for developers to consume and interpret. Developers can integrate push chat into the development workflow and improve their CI/CD processes. Test and deployment results can be pushed as messages to user wallets."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("center", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: ".  .  ."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Pssssssst 🤫"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Thanks for making it this far."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If you’re interested in exploring how Push Chat can boost user engagement and benefit your project, please:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Share this article"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Join our Discord ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://discord.gg/pushprotocol",
          children: "#push-chat-alpha channel"
        }), ", and tell us what you’re building, we’ve got devs who can help give consultation and we’ll be sharing exclusive Push Chat access to Discord members soon!"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["To get started building right away, head over to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://comms.push.org/docs/chat",
          children: "Push Chat developer docs"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "See you soon on Push Chat!"
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

/***/ 679496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d4038b00a8858ea58e8de0bcc4b2a57e.webp");

/***/ }),

/***/ 853825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-cd504f858e1170338acb7b317a3ad3ce.webp");

/***/ })

}]);