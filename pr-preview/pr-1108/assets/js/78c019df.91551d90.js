"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[22883],{

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

/***/ 337364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-one-fdcec686e144631b211477c2ce9520e7.webp");

/***/ }),

/***/ 456098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_11_09_push_ethglobal_istanbul_index_md_78c_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_11_09_push_ethglobal_istanbul_index_md_78c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661372);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-ethglobal-istanbul',
	title: 'Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties 🧿',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties',
	text: 'Hackers of ETHGlobal Istanbul, get ready, we’re coming! With Istanbul becoming the epicenter of web3 and blockchain innovation this November, we couldn\'t be more excited to be a part of it. ',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technology',
		'EthGlobal'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(585212)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Enhance your dApp w/ web3-native Notifications and Chat and win $10k in Push Bounties 💰",
  "id": "enhance-your-dapp-w-web3-native-notifications-and-chat-and-win-10k-in-push-bounties-",
  "level": 3
}, {
  "value": "1. 🏆 Merhaba Push Protocol ⸺ $1,500",
  "id": "1--merhaba-push-protocol--1500",
  "level": 4
}, {
  "value": "2. 🏆 Turkish Ice Cream - Creative Bounty ⸺ $2,000",
  "id": "2--turkish-ice-cream---creative-bounty--2000",
  "level": 4
}, {
  "value": "3. 🏆 Push Chat Conditional Gating Integration for DApps ⸺ $1,500",
  "id": "3--push-chat-conditional-gating-integration-for-dapps--1500",
  "level": 4
}, {
  "value": "4. 🏆 Cappadocia Hot Air Balloon ⸺ $5,000",
  "id": "4--cappadocia-hot-air-balloon--5000",
  "level": 4
}, {
  "value": "Everything You Need – Covered in the Push Workshop 🛠️",
  "id": "everything-you-need--covered-in-the-push-workshop-️",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties",
        src: (__webpack_require__(586375)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "TLDR;"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Push is sponsoring the ETHGlobal Istanbul hackathon"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "There are 4 prizes for 13 winners available. Total of $10k."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "We’re hosting a workshop on Friday, Nov. 17 to do a live demo"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["All bounty details are included here in this article as well as here on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://ethglobal.com/events/istanbul/prizes/push-protocol",
          children: "ETHGlobal page"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hackers of ETHGlobal Istanbul, get ready, we’re coming!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "With Istanbul becoming the epicenter of web3 and blockchain innovation this November, we couldn't be more excited to be a part of it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Bounties, dev support, free swag, workshops, and a chance to meet the Push team IRL – for builders at the ETHGlobal Istanbul Hackathon, we can’t wait to meet and see what you create."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here’s everything you need to know with regards to ETHGlobal Istanbul x Push."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "enhance-your-dapp-w-web3-native-notifications-and-chat-and-win-10k-in-push-bounties-",
      children: "Enhance your dApp w/ web3-native Notifications and Chat and win $10k in Push Bounties 💰"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We are happy to be sponsoring the ETHGlobal Istanbul hackathon with $10k bounties across 4 different prizes for a total of 13 winners."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Each prize is different with regards to both the type of Push Communication tools you need to build with, as well as the type of dApp you’re building."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here's the breakdown:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "1--merhaba-push-protocol--1500",
      children: "1. 🏆 Merhaba Push Protocol ⸺ $1,500"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We started with “GM GM!” and we’re here with “Merhaba!”."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This bounty is dedicated to the best use of Push Protocol in social-based dApps. It's about leveraging Push Notifications for important alerts and/or using our all-new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/introducing-notification-settings/",
        children: "Notification Settings"
      }), " to customize notifications. We also want to highlight the potential integration of conditional gating (messaging that can only be accessible by holding a specific NFT, token, or activity history)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here are a few ideas"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "SocialImpactHub"
        }), ": A DApp dedicated to social activists, where users can receive notifications about upcoming rallies or events."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "EcoAlert"
        }), ": An environmental initiative platform where users can chat about sustainable practices"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "CommunityCare"
        }), ": A local community DApp where neighbors can communicate in real time, set up events, and receive notifications about local emergencies or activities."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "PushForChange"
        }), ": A fundraising platform that sends out notifications about new charitable campaigns. Users can chat with charity organizers and use conditional gating to access exclusive fundraising events based on their donation history."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "\"Merhaba Push Protocol\" seeks to acknowledge the innovative spirit of developers who merge social initiatives with technology, making a meaningful impact in the world using Push Protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "2--turkish-ice-cream---creative-bounty--2000",
      children: "2. 🏆 Turkish Ice Cream - Creative Bounty ⸺ $2,000"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Just as getting a Turkish ice cream can bring a few surprises, with this bounty we’re looking for the most ingenious solutions built using the Push Protocol. Challenge the norms and serve up your most creative implementations."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Simply build with Push Notifications, Chat, or Video in any capacity. Best and most creative use case all around wins."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "3--push-chat-conditional-gating-integration-for-dapps--1500",
      children: "3. 🏆 Push Chat Conditional Gating Integration for DApps ⸺ $1,500"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Showcase the potential of Push by integrating its Conditional Gating feature into your dApps. This feature allows you to create dynamic and sophisticated permissions for your user community by setting unique conditions for joining or communicating in specific group chats."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Your task? Integrate the Push Chat conditional gating feature in your dApp, utilizing at least two of the following use cases:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Token-gated group"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "NFT-gated group"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Multi-chain conditions"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Sending message conditions"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Non-web3 conditions using Guild"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Game theories by combining multiple conditions"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Ensure smooth UX/UI and seamless user verification based on the set rules"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For more information regarding Conditional Gating and Rules for Group Chats, checkout our documentation here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/chat/build/conditional-rules-for-group/",
        children: "https://comms.push.org/docs/chat/build/conditional-rules-for-group/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "4--cappadocia-hot-air-balloon--5000",
      children: "4. 🏆 Cappadocia Hot Air Balloon ⸺ $5,000"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is a Pool Bounty prize which will be given to top 10 implementations, priority will be given to those who integrate the following Push Notification/Chat features:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://comms.push.org/docs/notifications/build/create-channel-settings/",
          children: "Channel settings"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://comms.push.org/docs/chat/build/conditional-rules-for-group/",
          children: "Conditional gating"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://comms.push.org/docs/notifications/build/stream-notifications/",
          children: "Stream notifications"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "everything-you-need--covered-in-the-push-workshop-️",
      children: "Everything You Need – Covered in the Push Workshop 🛠️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We're hosting a workshop at ETH Global Istanbul open to all developers to learn how to build using Push’s communication tools titled: How to build native Web3 Messaging & Notifications Apps with Push Protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["📅Friday, November 17 – 3:40pm ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n🗺️Workshop Room 1"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This will be a great chance for you to see a live demo of how to build with Push tools and also a great chance to meet our devs and ask for advice on your project."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "With that, we look forward to meeting all of you and can’t wait to see what you build. Be sure to swing by our booth as well to grab your exclusive Push merch. Let’s turn Istanbul pink! 🩷"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px'
      },
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
          alt: "Push Hoodie Merch",
          src: (__webpack_require__(337364)/* ["default"] */ .A) + "",
          width: "1200",
          height: "1200"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
          alt: "Push Merch",
          src: (__webpack_require__(928694)/* ["default"] */ .A) + "",
          width: "1200",
          height: "1200"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["You can always check out this information and other resource links directly on the ETH Global Istanbul page here 👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://ethglobal.com/events/istanbul/prizes#push-protocol",
        children: "https://ethglobal.com/events/istanbul/prizes#push-protocol"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Your Push documentation hub for building is here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/docs/",
        children: "https://push.org/docs/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["And of course 24/7 dev support can always be found here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushchain",
        children: "https://discord.com/invite/pushchain"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let us know if you have any issues, questions, or need help building. We’re always here to help!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Happy hacking!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 585212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8485332aa8d3f031e142a1180c71b341.webp");

/***/ }),

/***/ 586375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8485332aa8d3f031e142a1180c71b341.webp");

/***/ }),

/***/ 661372:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1108/blog/push-ethglobal-istanbul","source":"@site/blog/2023-11-09-push-ethglobal-istanbul/index.md","title":"Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties 🧿","description":"Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties","date":"2023-11-09T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1108/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1108/blog/tags/web-3"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1108/blog/tags/blockchain-technology"},{"inline":true,"label":"EthGlobal","permalink":"/push-chain-website/pr-preview/pr-1108/blog/tags/eth-global"}],"readingTime":2.98,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1108/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1108/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-ethglobal-istanbul","title":"Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties 🧿","authors":["push"],"image":"./cover-image.webp","description":"Push x ETHGlobal Istanbul - Enhance Your UX and Win $10k in Bounties","text":"Hackers of ETHGlobal Istanbul, get ready, we’re coming! With Istanbul becoming the epicenter of web3 and blockchain innovation this November, we couldn\'t be more excited to be a part of it. ","tags":["Push Protocol","Web3","Blockchain Technology","EthGlobal"]},"unlisted":false,"prevItem":{"title":"Pushing Boundaries in Innovation at ETHGlobal Istanbul with Push Protocol 🔔","permalink":"/push-chain-website/pr-preview/pr-1108/blog/push-ethglobal-istanbul-winner"},"nextItem":{"title":"Introducing Notification Settings: Customize Your Web3 Notifications🔔⚙️","permalink":"/push-chain-website/pr-preview/pr-1108/blog/introducing-notification-settings"}}');

/***/ }),

/***/ 928694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-two-17a86cb72d2f9f87a224d96aa04e0f38.webp");

/***/ })

}]);