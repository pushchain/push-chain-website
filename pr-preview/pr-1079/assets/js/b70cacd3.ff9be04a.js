"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[39730],{

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

/***/ 206085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-fc6992facde35a74cb3775d2a50ee631.webp");

/***/ }),

/***/ 516520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-fc6992facde35a74cb3775d2a50ee631.webp");

/***/ }),

/***/ 545366:
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
	slug: 'faq—ethereum-push-notification-service',
	title: 'FAQ — Ethereum Push Notification Service (EPNS)',
	description: 'FAQ — Ethereum Push Notification Service (EPNS)',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Ethereum Push Notification Service (EPNS) is a platform-agnostic, decentralized notification protocol for Ethereum-based Web 3.0 applications. It enables users to receive notifications for on-chain or off-chain activity.',
	tags: [
		'FAQ',
		'Ethereum',
		'Blockchain',
		'Announcements'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/faq—ethereum-push-notification-service",
  "source": "@site/blog/2021-05-20-faq—ethereum-push-notification-service/index.md",
  "title": "FAQ — Ethereum Push Notification Service (EPNS)",
  "description": "FAQ — Ethereum Push Notification Service (EPNS)",
  "date": "2021-05-20T00:00:00.000Z",
  "formattedDate": "May 20, 2021",
  "tags": [
    {
      "label": "FAQ",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/faq"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"
    },
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/announcements"
    }
  ],
  "readingTime": 5.183333333333334,
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
    "slug": "faq—ethereum-push-notification-service",
    "title": "FAQ — Ethereum Push Notification Service (EPNS)",
    "description": "FAQ — Ethereum Push Notification Service (EPNS)",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Ethereum Push Notification Service (EPNS) is a platform-agnostic, decentralized notification protocol for Ethereum-based Web 3.0 applications. It enables users to receive notifications for on-chain or off-chain activity.",
    "tags": [
      "FAQ",
      "Ethereum",
      "Blockchain",
      "Announcements"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS Community AMA Recap",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-community-ama-recap"
  },
  "nextItem": {
    "title": "Meet Frens of EPNS 💖💖💖",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/meet-frens-of-epns"
  }
};
const assets = {
"image": (__webpack_require__(516520)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "<strong>Q. What does EPNS do?</strong>",
  "id": "q-what-does-epns-do",
  "level": 2
}, {
  "value": "Q. What are some of the use cases for EPNS?",
  "id": "q-what-are-some-of-the-use-cases-for-epns",
  "level": 2
}, {
  "value": "<strong>Q. Why should I use EPNS?</strong>",
  "id": "q-why-should-i-use-epns",
  "level": 2
}, {
  "value": "<strong>Q. What are the EPNS Products?</strong>",
  "id": "q-what-are-the-epns-products",
  "level": 2
}, {
  "value": "Q. What are the main components of the EPNS Protocol?",
  "id": "q-what-are-the-main-components-of-the-epns-protocol",
  "level": 2
}, {
  "value": "<strong>Q. What are the types of Channels on EPNS?</strong>",
  "id": "q-what-are-the-types-of-channels-on-epns",
  "level": 2
}, {
  "value": "Q. <strong>How does the EPNS communication layer actually works ?</strong>",
  "id": "q-how-does-the-epns-communication-layer-actually-works-",
  "level": 2
}, {
  "value": "<strong>Q. How do Channels send notifications?</strong>",
  "id": "q-how-do-channels-send-notifications",
  "level": 2
}, {
  "value": "<strong>Q. How can I activate or deactivate a Channel?</strong>",
  "id": "q-how-can-i-activate-or-deactivate-a-channel",
  "level": 2
}, {
  "value": "<strong>Q. Can I get spammed on EPNS?</strong>",
  "id": "q-can-i-get-spammed-on-epns",
  "level": 2
}, {
  "value": "<strong>Q. What are $PUSH tokens and how can I use them?</strong>",
  "id": "q-what-are-push-tokens-and-how-can-i-use-them",
  "level": 2
}, {
  "value": "Q. What incentive mechanism are currently available?",
  "id": "q-what-incentive-mechanism-are-currently-available",
  "level": 2
}, {
  "value": "Q. How can I keep up with EPNS?",
  "id": "q-how-can-i-keep-up-with-epns",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of FAQ — Ethereum Push Notification Service (EPNS)",
        src: (__webpack_require__(206085)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-what-does-epns-do",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Q. What does EPNS do?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Ethereum Push Notification Service (EPNS) is a platform-agnostic, decentralized notification protocol for Ethereum-based Web 3.0 applications. It enables users to receive notifications for on-chain or off-chain activity. EPNS allows Web3 actors (users, dapps, service providers) to create notifications that are triggered if and when a smart contract reaches certain conditions. Other Web3 participants can search, browse, and subscribe to specific notifications and more confidently interact with dapps. In doing so, EPNS combines the seamless user experience of Web 2.0 apps with the security and power of Web 3.0."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-what-are-some-of-the-use-cases-for-epns",
      children: "Q. What are some of the use cases for EPNS?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We believe almost any application in the Web3 ecosystem can benefit from notifications. Some of the highest-impact immediate opportunities are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "DEXes"
      }), ": DEX users can be notified when the price of a token falls or rises a certain percentage. Users can also set up notifications for when their trades are executed and completed, rather than having to check back to see if trades were completed (especially during times of high network traffic). Users can also set up notifications for when gas prices go down or up to help them decide when to trade."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "DeFi"
      }), ": Lending protocol users can set up notifications to be informed when they are about to be liquidated, rather than needing to check in regularly to ensure. LP providers can also set up notifications about impermanent loss in case they wish to cut their losses short during a volatile market. If DeFi users are interacting with a particularly young or untested protocol, they could set up notifications to inform them if large amounts of funds are being moved around in ways that could signal instability within that dapp."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NFTs and Gaming:"
      }), " Trading of NFTs or goods on markets or within games can be connected to EPNS to inform users 1) when certain goods go on sale or auction; 2) when auctions go live from crypto-artists; 3) when a bid is accepted or topped; 4) when one’s own NFT (or anyone else’s) sells."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "ENS/Consumer Apps:"
      }), " Apps like the Ethereum Name Service (ENS) and .Crypto can notify users when their subscriptions are about to expire, rather than expecting users to remember or check in regularly to remind themselves of upcoming dates."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-why-should-i-use-epns",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Q. Why should I use EPNS?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Because for so long, as a Web3.0 user, you waited on Twitter or Telegram for important updates and communications from your favorite dApps. Developers suffered while sending necessary information regarding their app or product over social media, hoping for their users to see it. Of course, without certainty. Consequently, users missed out on crucial notifications, alerts, notices, and offers. EPNS solves these, plus incentivizes both senders and receivers with usage rewards."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-what-are-the-epns-products",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Q. What are the EPNS Products?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The EPNS product suite comprises the following elements:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "EPNS Protocol:"
        }), " The main goal of the EPNS Protocol is to make sure all notifications are prepared and sent in compliance with the protocol standards. This will make every notification readily available to be picked up by the PUSH Nodes in charge of dispatching."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "PUSH Nodes:"
        }), " The main goal of the PUSH Nodes is to listen to events in the EPNS protocol smart contracts and dispatch the notifications to the corresponding recipients."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Governance"
        }), ": Governance is crucial for any decentralized protocol, and EPNS is no exception. We already have introduced liquidity mining and staking along with ROCKSTAR of EPNS NFT and PUSH rewards."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Alpha dApp"
        }), ": Using the dApp, Subscribers can receive notifications from web browsers, while Channels can send notifications to decentralized carriers."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Mobile App:"
        }), " The mobile app serves the crucial purpose of sending notifications from decentralized protocols to centralized ecosystems, such as Android, iOS, and so on."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Showrunners"
        }), ": These are channels through which the EPNS Foundation sends notifications for the benefit of the community. Sending notifications about domain expiry, liquidation, and abnormal gas prices are some of the intended purposes of these channels."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Development SDKs and Documentation"
        }), ": For developers looking to easily integrate EPNS with partners, we’ll be releasing the following SDKs — Front-end SDK, Back-end SDK, PUSH Mobile SDK, EPNS Subgraph."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Learn more about the EPNS ecosystem and compliments in our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        children: "EPNS Roadmap 2021"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-what-are-the-main-components-of-the-epns-protocol",
      children: "Q. What are the main components of the EPNS Protocol?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Apart from the technological framework, the EPNS protocol consists of Users, who are further divided into Subscribers and Channels."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Service"
        }), ": Any dApp / smart contract / service / etc. that wishes to send notifications."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Channel"
        }), ": A service who is sending notifications using EPNS. To ensure their skin-in-the-game, Channels need to stake predetermined fees in pools, which are in turn used for incentivizing usage. Developers and Web3 project owners can create channels using the EPNS dApp, JS Library, or custom libraries."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Subscriber:"
        }), " A user who subscribes to channels on EPNS for receiving notifications. EPNS adopts the opt-in model for subscriptions, meaning that channels can send notifications only to voluntary participants. Subscriptions can either be direct or indirect, and you can unsubscribe at any time."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Users"
        }), ": Any user who is present in the protocol registry."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-what-are-the-types-of-channels-on-epns",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Q. What are the types of Channels on EPNS?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Channels on EPNS can be of 3 types (in future can be more)— Open, Closed, and Mutual. An Open Channel is open to all and anyone can join. In Closed Channels, subscribers can join only on invitation by the channel. Combining these two, a Mutual Channel is such that Subscribers can send requests which the channel has to accept. Apart from these three, there are two special, automated, and opt-in channels — EPNS Channel and EPNS Alerter Channel. These send notifications to Subscribers and Channels respectively."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "q-how-does-the-epns-communication-layer-actually-works-",
      children: ["Q. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "How does the EPNS communication layer actually works ?"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The communication layer basically can be categorized in two segments:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["1. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Sending Notifs"
      }), ": This layer comprises of smart contracts (and later p2p nodes) that acts like a middleware through which all notifs / communication from a service to their subscribers needs to flow. Having these on L1 and L2 ensures even smart contracts can send notifs out."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Receiving and dispersing Notifs:"
        }), " This layer listens to our middleware smart contracts and then dispatches them forward."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["These two segments ensures that communication is standardized, authenticated and can be listened to by any crypto wallet, mobile apps or any other infra service. Detailed read of the protocol can be found here: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://whitepaper.epns.io",
        children: "https://whitepaper.epns.io"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-how-do-channels-send-notifications",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Q. How do Channels send notifications?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["EPNS is designed in a way such that Channels send notifications in the form of JSON (JavaScript Object Notation) payloads. This allows for the flexible and streamlined transfer of the notification’s data from a decentralized storage environment. Further, the information is transmitted and recorded on-chain, following due validation. Leveraging EPNS Infra, decentralized protocols can also send notifications to centralized environments. To send notifications, Channels have to bear a fee, payable in ETH or DAI. Apart from directly sending notifications to Subscribers, Channels can also delegate declared wallet addresses to transmit notifications on their behalf. For further details and mathematical expositions, read the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://whitepaper.epns.io/protocol-specs-section/specifications",
        children: "relevant sections from our White Paper"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-how-can-i-activate-or-deactivate-a-channel",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Q. How can I activate or deactivate a Channel?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To activate a Channel, you need to stake 50 DAI or higher, which adds to the staking pool used for distributing token incentives. You can also deactivate the channel by unstaking, but this involves a penalty of 20 DAI — half of it remains in the Stake Pool and the rest goes to the Fee Pool. This mechanism minimizes the risks of bad actors getting onboard."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-can-i-get-spammed-on-epns",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Q. Can I get spammed on EPNS?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In order to avoid spam, a spam score has been set from 0–1. 0 means that the channel has an excellent score while 1 means the channel is unhealthy. The range adjusts based on positive actions such as a higher number of subscribers, with the passing of time while negative actions are higher than usual unsubscribers, higher than usual notifications, etc. This is guided by the protocol and at a certain range, the protocol will start throttling the notifications or even stop them until the score comes back to a healthier range."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-what-are-push-tokens-and-how-can-i-use-them",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Q. What are $PUSH tokens and how can I use them?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["$PUSH is a governance token that also carries usage mining incentives and the ability to split the fee pool in the future whenever the community chooses to enable that, it’s designed to incentivize all actors in the ecosystem to participate and check each other! Keeping this short but a much better version of what all things it does and how it ties to the ecosystem can be found here: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a",
        children: "https://medium.com/ethereum-push-notification-service/push-token-economics-d7f566c29b1a"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-what-incentive-mechanism-are-currently-available",
      children: "Q. What incentive mechanism are currently available?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Incentives for participation both in terms of token rewards and otherwise is importance to ensure strong network effects. We already created the following incentives for governance:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Introduced liquidity mining and staking on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://incentives.epns.io/",
          children: "https://incentives.epns.io"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Introduced $ROCKSTAR of EPNS NFTs and $PUSH rewards to signal gratitude to early community and to reward new community and their participation in the ecosystem. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/the-first-nft-collection-from-epns-677e23173c95",
          children: "Read more about it here"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "q-how-can-i-keep-up-with-epns",
      children: "Q. How can I keep up with EPNS?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Join our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://t.me/epnsproject",
        children: "Telegram"
      }), ", follow us on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/epnsproject",
        children: "Twitter"
      }), ", and sign up for our 5 minute ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://epns.substack.com/",
        children: "weekly product updates"
      }), "."]
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