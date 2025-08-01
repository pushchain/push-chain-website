"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[78948],{

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

/***/ 52566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-53230251c56197ef10f6fdd8d7ded1ec.webp");

/***/ }),

/***/ 160642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-5-e6be34321db022fcac0381fac4b99964.webp");

/***/ }),

/***/ 185581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,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");

/***/ }),

/***/ 256543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-d9a447994f1c7312dfd4624670366c84.webp");

/***/ }),

/***/ 260963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-6-6e0ec7f7c1989847eb1014ce8af37ef4.webp");

/***/ }),

/***/ 386779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-53230251c56197ef10f6fdd8d7ded1ec.webp");

/***/ }),

/***/ 428604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-d237f9e37ac52eef2b39a272e6638377.webp");

/***/ }),

/***/ 455505:
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
	slug: 'epns-push-notifications-are-never-boring',
	title: 'EPNS push notifications are never boring',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We are back, sharing our ETHGlobal Hack Money hackathon story. Can’t believe it’s already week -3!! It’s been an amazing learning experience so far. A big shout out to the ETHGlobal Team for always being there to help and organizing the best AMAs and office hours sessions. Getting feedback and ideas from the devs at Aavesome Compound, etc has made this learning process about DeFi landscape and tech amazingly fun.',
	tags: [
		'Ethereum',
		'Blockchain',
		'Ethglobal',
		'Blog',
		'Notifications'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-push-notifications-are-never-boring",
  "source": "@site/blog/2020-05-13-epns-push-notifications-are-never-boring/index.md",
  "title": "EPNS push notifications are never boring",
  "description": "Cover Image of EPNS push notifications are never boring",
  "date": "2020-05-13T00:00:00.000Z",
  "formattedDate": "May 13, 2020",
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
      "label": "Ethglobal",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethglobal"
    },
    {
      "label": "Blog",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blog"
    },
    {
      "label": "Notifications",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/notifications"
    }
  ],
  "readingTime": 3.236666666666667,
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
    "slug": "epns-push-notifications-are-never-boring",
    "title": "EPNS push notifications are never boring",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "We are back, sharing our ETHGlobal Hack Money hackathon story. Can’t believe it’s already week -3!! It’s been an amazing learning experience so far. A big shout out to the ETHGlobal Team for always being there to help and organizing the best AMAs and office hours sessions. Getting feedback and ideas from the devs at Aavesome Compound, etc has made this learning process about DeFi landscape and tech amazingly fun.",
    "tags": [
      "Ethereum",
      "Blockchain",
      "Ethglobal",
      "Blog",
      "Notifications"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS Update : Gitcoin Kernel Week-1",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-update-gitcoin-kernel-week-1"
  },
  "nextItem": {
    "title": "Hello World: BUIDLing a working EPNS Mobile app",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/hello-world-buid-ling-a-working-epns-mobile-app"
  }
};
const assets = {
"image": (__webpack_require__(386779)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Groups and secrets…and secret groups?!",
  "id": "groups-and-secretsand-secret-groups",
  "level": 3
}, {
  "value": "Group Messages",
  "id": "group-messages",
  "level": 4
}, {
  "value": "Secret Messages",
  "id": "secret-messages",
  "level": 4
}, {
  "value": "Message attributes",
  "id": "message-attributes",
  "level": 3
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of EPNS push notifications are never boring",
        src: (__webpack_require__(52566)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We are back, sharing our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/u/3d1733b8e86a?source=post_page-----f5f5a1a2c477--------------------------------",
        children: "ETHGlobal"
      }), " Hack Money hackathon story. Can’t believe it’s already week -3!! It’s been an amazing learning experience so far. A big shout out to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/u/8687f4bcbbed?source=post_page-----f5f5a1a2c477--------------------------------",
        children: "ETHGlobal Team"
      }), " for always being there to help and organizing the best AMAs and office hours sessions. Getting feedback and ideas from the devs at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/u/13bfa9f22920?source=post_page-----f5f5a1a2c477--------------------------------",
        children: "Aavesome"
      }), ", Compound, etc has made this learning process about DeFi landscape and tech amazingly fun."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To begin with, we never wanted to deliver plain notifications to the users. We mean they are cool but there are so many things you can do when you make notifications behave like your twitter feed. This led us to think a lot about the payloads, analogies and the way we want to present notifications… and that’s how we came up with… drumbeats… notification feed and different formats of notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "groups-and-secretsand-secret-groups",
      children: "Groups and secrets…and secret groups?!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let’s talk about the recipients of notifications first. Yes, there are two different target recipients: Groups and Secrets. Simply put, a channel owner or smart contract can send a broadcast to all recipients of their channel or can send encrypted messages (known as secret) to an individual person."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "group-messages",
      children: "Group Messages"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Group messages serve the purpose of communicating a piece of information to a subscribed channel. For example, Gitcoin can alert the developer community about the recently added 1000USD bounty task to its pool (that would be exciting!!)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "But wait, there’s more… we went a step further…while group messages are a great way to send out notifications to a group of users, we thought the ability to send encrypted messages from channel owners to a specific user would really add so much value to push notifications in a variety of different ways."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "secret-messages",
      children: "Secret Messages"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "So how does the secret message work? Well, blockchain and specifically cryptocurrency has crypto in it for a reason, more on the specific details later as we think it needs an article on its own."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Though in brief terms, the way we achieve this is by encrypting few parts of the message payload with a secret that is further encrypted by the user’s public key."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For example, Aavesome can send its customer a message once the loan liquidation is complete."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "message-attributes",
      children: "Message attributes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let’s talk message attributes aka how rich we can present user’s with the information."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Messages are more useful (and more fun) when they are clickable, when you can interact with them and when they contain a number of great contexts. This was the approach we used to form different attributes for the message."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The idea is to give the channel owners enough flexibility so that they can play with permutations and combinations of message types and come up with intuitive messages for their users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There are 4 message attributes."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Subject"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Message text"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Call To Action (CTA)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Image"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Messages get delivered to users as feeds on their ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/@epnsdapp/hello-world-buidling-a-working-epns-mobile-app-e9dcb8f5ed66",
        children: "EPNS mobile app"
      }), ", just like your Twitter feed, with flexible opt-in/opt-out capability to give users full control over the notifications they want to receive."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The cool thing about epns push notifications is that there are multiple ways of building messages to cater to different types of web3 users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "An epns general message is composed using a subject and message text together. Here we tried to make the message more interesting by introducing rich text format. Supporting text styles, bold, italics, colors, links, etc can be sent for enhanced user readability. This is a classic format of push notification to share key updates with the subscribed user group."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For example, it would be awesome to get notified when Uniswap V2 platform is launched this Q2 through a simple notification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We took a stab at generating a few examples for the purpose of demonstrating how epns push notifications look in real life."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Uniswap V2 launch party Notification Image",
        src: (__webpack_require__(944606)/* ["default"] */ .A) + "",
        width: "362",
        height: "154"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ImageText */ .Lv, {
        children: "Looks like we are invited to the party!!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "ENS Notification Image",
        src: (__webpack_require__(256543)/* ["default"] */ .A) + "",
        width: "369",
        height: "800"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ImageText */ .Lv, {
        children: "General Message Type"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Taking it further, epns messages lets the user tap on a link embedded in the notification. This type of message includes a Call to Action(CTA) wrapped in a group message explained above. This CTA+group message type is meant for a group of users to guide them to a dedicated web page of an event, news, sign-up form, etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For example, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/u/8687f4bcbbed?source=post_page-----f5f5a1a2c477--------------------------------",
        children: "ETHGlobal Team"
      }), " can send out a notification to all hackers for 2021 Virtual Hackathon registration, the user has to simply click on the link in the feed to find the registration form."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Ethglobal notification Image",
        src: (__webpack_require__(428604)/* ["default"] */ .A) + "",
        width: "369",
        height: "800"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now, these messages get more interesting when integrated with secret messages (meant for a single user). These targeted or smart CTAs can help enhance user experience as they securely deliver the right message to the right user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For example, Binance DEX can send user notifications once their trade order is fulfilled."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "EPNS Notification Image",
        src: (__webpack_require__(185581)/* ["default"] */ .A) + "",
        width: "362",
        height: "154"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Binance Notification Image",
        src: (__webpack_require__(160642)/* ["default"] */ .A) + "",
        width: "369",
        height: "800"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "But wait!! EPNS notifications can support images as well. A secret message with images can do so many cool things for a user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For example, if a user's ENS domain name is in grace period and about to expire, the ENS team can send out encrypted QR image-based notification to its users. The user can then simply scan the QR image on their ENS domain page to complete the renewal and payment process."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "App Bot Notification Image",
        src: (__webpack_require__(260963)/* ["default"] */ .A) + "",
        width: "369",
        height: "800"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ImageText */ .Lv, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Encrypted Image Message"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We think there are multiple ways in which epns push notifications can add value to the decentralized finance ecosystem. The possibilities and use cases with epns notifications are endless and we are just getting started :)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
      children: ["TLDR; try out the (almost complete) ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "https://github.com/ethereum-push-notification-system/epns-mobile-app",
        children: "react native"
      }), " app."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Next up, the dApp and the smart contract…Please feel free to share your support and amazing feedback."
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

/***/ 944606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-92da753614c7f6dc87c4c4c5dac0c482.webp");

/***/ })

}]);