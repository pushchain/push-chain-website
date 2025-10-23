"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[16512],{

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

/***/ 269739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ce09335d7d177d86ecfa599de999cce9.webp");

/***/ }),

/***/ 344178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_12_06_push_eth_india_push_bounties_index_md_98a_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_12_06_push_eth_india_push_bounties_index_md_98a_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-ethIndia-push-bounties',
	title: 'Push x ETHIndia - $10k Push Bounties + IRL Workshop 🔔',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Push x ETHIndia - $10k Push Bounties + IRL Workshop 🔔',
	text: 'Welcome to last month’s developments and new product releases from the month of November! From groundbreaking developments to new frenships, making notable appearances, and celebrating our community – it\'s been a month of milestones. Read on to know all that we’ve been up to this month: ',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technology',
		'EthGlobal'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(557004)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "ETHIndia Hackers ⸺ Ready, Set, Code! 🛠️",
  "id": "ethindia-hackers--ready-set-code-️",
  "level": 3
}, {
  "value": "1. 🏆 Namaste Push Protocol ⸺ $2,000",
  "id": "1--namaste-push-protocol--2000",
  "level": 3
}, {
  "value": "2. 🏆 Creativity Prize ⸺ $2,500",
  "id": "2--creativity-prize--2500",
  "level": 3
}, {
  "value": "3. 🏆 Push Chat Conditional Gating Integration for DApps ⸺ $2,500",
  "id": "3--push-chat-conditional-gating-integration-for-dapps--2500",
  "level": 3
}, {
  "value": "4. 🏆 Notification/Channel Settings Implementation ⸺ $1,500",
  "id": "4--notificationchannel-settings-implementation--1500",
  "level": 3
}, {
  "value": "5. 🏆 Best Use of Push Protocol ⸺ $1,500",
  "id": "5--best-use-of-push-protocol--1500",
  "level": 3
}, {
  "value": "Learn to build a Web3 Messaging and Notifications dApps IRL 🤝",
  "id": "learn-to-build-a-web3-messaging-and-notifications-dapps-irl-",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
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
        alt: "Cover Image of Push x ETHIndia - $10k Push Bounties + IRL Workshop 🔔",
        src: (__webpack_require__(269739)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hackers, are you ready for Ethereum’s largest hackathon of the year?! We know we are."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Bounties, exclusive merch, IRL team – we’ve brought it all this year to ETH India! 🔔"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We are honored to be sponsoring and partaking in Ethereum’s largest hackathon of the year and couldn’t be more excited to share with you the bounties and workshops we’ve prepared for enhancing your dApp with our web3 native communication tools."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here's everything you need to know."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Quick redirect to our all-in-one✨ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/hackers/",
        children: "Hacker Building Guide for Push Protocol"
      }), "✨"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "ethindia-hackers--ready-set-code-️",
      children: "ETHIndia Hackers ⸺ Ready, Set, Code! 🛠️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We’re going all-in with a whopping $10,000 in bounties for 13 prize winners spread across 4 bounty categories. No matter what you plan on building, we have both a web3-native communication tool and bounty waiting for you."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here’s the breakdown of all the prizes:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "1--namaste-push-protocol--2000",
      children: "1. 🏆 Namaste Push Protocol ⸺ $2,000"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
      children: "Number of winners: 1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Before it was GM GM, this week it’s \"Namaste!\""
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This bounty celebrates the best use of Push Protocol in social-based DApps. From leveraging Push Notifications for vital alerts to exploring Notification settings for customization, and integrating chat functionality with the power of conditional gating – this is your chance to make a meaningful impact by merging social initiatives with technology."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here are a few ideas for inspiration:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "SocialImpactHub"
        }), ": A DApp dedicated to social activists, where users can receive notifications about upcoming rallies or events. Consider using conditional gating to enable activists with specific badges or tokens to access private planning rooms."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "EcoAlert"
        }), ": An environmental initiative platform where users can chat about sustainable practices and get notified about eco-friendly events or sudden environmental crises."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "CommunityCare"
        }), ": A local community dApp where neighbors can communicate in real time, set up events, and receive notifications about local emergencies or activities. With conditional gating, special groups could be set up for neighborhood committees or watch groups."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "PushForChange"
        }), ": A fundraising platform that sends out notifications about new charitable campaigns. Users can chat with charity organizers and use conditional gating to access exclusive fundraising events based on their donation history."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The \"Namaste Push Protocol\" Prize is all about acknowledging the innovative spirit of developers who want to make a meaningful impact in the world using Push Protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["👉Our all-in-one✨ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/hackers/",
        children: "Hacker Building Guide for Push Protocol"
      }), " ✨"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "2--creativity-prize--2500",
      children: "2. 🏆 Creativity Prize ⸺ $2,500"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
      children: "Number of winners: 1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Unleash your innovation! We're seeking the all-around most ingenious solutions built with Push Protocol. Challenge the norm, showcase your creativity, and build with any of Push's communication tools. The best and the most creative solution takes it all!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "🔔Push Notifications\n💬Push Chat + Group Chat\n📹Push Video\n🤖Push ChatAI\n🌌Push Spaces"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["👉Our all-in-one✨ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/hackers/",
        children: "Hacker Building Guide for Push Protocol"
      }), "✨"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "3--push-chat-conditional-gating-integration-for-dapps--2500",
      children: "3. 🏆 Push Chat Conditional Gating Integration for DApps ⸺ $2,500"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
      children: "Number of winners: 1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Showcase the potential of Push by integrating its Conditional Gating feature into your dApps. Conditional Gating is a feature that allows you to create dynamic and sophisticated permissions for your Group Chats. You can set unique conditions for both joining or messaging in the groups such as needing to hold a certain amount of token XYZ or be a holder of XYZ NFT."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For more information regarding Conditional Gating and Rules for Group Chats, checkout our documentation here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/docs/chat/build/conditional-rules-for-group/",
        children: "https://push.org/docs/chat/build/conditional-rules-for-group/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "4--notificationchannel-settings-implementation--1500",
      children: "4. 🏆 Notification/Channel Settings Implementation ⸺ $1,500"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
      children: "Number of winners: 1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Utilize the full potential of Push Notifications by incorporating the Channel/Notification Settings into your dApp."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Channel/Notification Settings allow you to segment notifications into different categories so that end-users can select only the kinds of notifications they want to receive. For example, a web3 news site could have Notification Settings for different news categories and let users select accordingly and hence customize their notifications. You can build as many notification categories as you’d like choosing between Boolean and Slider Settings types."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For more information regarding Channel/Notification Settings, checkout our documentation here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/notifications/build/create-channel-settings/",
        children: "https://comms.push.org/docs/notifications/build/create-channel-settings/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "5--best-use-of-push-protocol--1500",
      children: "5. 🏆 Best Use of Push Protocol ⸺ $1,500"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This bounty recognizes the most exceptional and impactful implementation of the Push Protocol, emphasizing applications that significantly enhance user interaction and experience through effective use of Push features."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Go wild, get crazy, find new and exciting ways to integrate Push that significantly enhance your UX. Think customer support messaging, user-to-user-to-dApp social interactions, creative notification use cases. The list is endless."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["👉Our all-in-one✨ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/hackers/",
        children: "Hacker Building Guide for Push Protocol"
      }), " ✨"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "learn-to-build-a-web3-messaging-and-notifications-dapps-irl-",
      children: "Learn to build a Web3 Messaging and Notifications dApps IRL 🤝"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Not sure how to get started with building? We got you. We’ll be hosting an IRL workshop with our very own co-founder Harsh Rajat diving into everything you need for \"How to Build Web3 Messaging and Notifications Apps.\""
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is your chance to meet the Push team directly, network with us, ask your questions, and learn how to enhance the UX of your dApp."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "📅Friday, December 8 – 3:00 pm IST\n🗺️Workshop Room 2\nETHIndia, we're not just attending; we're bringing the party. Let's code, create, and celebrate the magic of blockchain together."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Find all the details about the ETHIndia event 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://ethindia.co/",
        children: "https://ethindia.co/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Your Push documentation hub for building is here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/hackers/",
        children: "https://comms.push.org/docs/hackers/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["And of course 24/7 dev support can always be found here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushchain",
        children: "https://discord.com/invite/pushchain"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Happy hacking! 🛠️"
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

/***/ 557004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ce09335d7d177d86ecfa599de999cce9.webp");

/***/ }),

/***/ 607875:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1100/blog/push-ethIndia-push-bounties","source":"@site/blog/2023-12-06-push-ethIndia-push-bounties/index.md","title":"Push x ETHIndia - $10k Push Bounties + IRL Workshop 🔔","description":"Push x ETHIndia - $10k Push Bounties + IRL Workshop 🔔","date":"2023-12-06T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/web-3"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/blockchain-technology"},{"inline":true,"label":"EthGlobal","permalink":"/push-chain-website/pr-preview/pr-1100/blog/tags/eth-global"}],"readingTime":3.11,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1100/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1100/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-ethIndia-push-bounties","title":"Push x ETHIndia - $10k Push Bounties + IRL Workshop 🔔","authors":["push"],"image":"./cover-image.webp","description":"Push x ETHIndia - $10k Push Bounties + IRL Workshop 🔔","text":"Welcome to last month’s developments and new product releases from the month of November! From groundbreaking developments to new frenships, making notable appearances, and celebrating our community – it\'s been a month of milestones. Read on to know all that we’ve been up to this month: ","tags":["Push Protocol","Web3","Blockchain Technology","EthGlobal"]},"unlisted":false,"prevItem":{"title":"Hyper Scalable Group Chats 💬 ⚡","permalink":"/push-chain-website/pr-preview/pr-1100/blog/hyper-scalable-group-chats"},"nextItem":{"title":"Monthly Recap November ❄️","permalink":"/push-chain-website/pr-preview/pr-1100/blog/monthly-recap-november"}}');

/***/ })

}]);