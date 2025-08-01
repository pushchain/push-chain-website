"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[25962],{

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

/***/ 469378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d36328c503cf7c4cb39188b553d9a3ec.gif");

/***/ }),

/***/ 823761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d36328c503cf7c4cb39188b553d9a3ec.gif");

/***/ }),

/***/ 919780:
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
	slug: 'push-group-chats-for-guilds',
	title: 'Introducing Push Group Chats for Guilds!',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	description: 'Introducing Push Group Chats for Guilds!',
	text: 'We\'re excited to announce that Guild-Gated Group Chats are now available on Push.',
	tags: [
		'Announcements',
		'Updates'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-group-chats-for-guilds",
  "source": "@site/blog/2024-09-23-push-guild-group-chats/index.md",
  "title": "Introducing Push Group Chats for Guilds!",
  "description": "Introducing Push Group Chats for Guilds!",
  "date": "2024-09-23T00:00:00.000Z",
  "formattedDate": "September 23, 2024",
  "tags": [
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/announcements"
    },
    {
      "label": "Updates",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/updates"
    }
  ],
  "readingTime": 0.8666666666666667,
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
    "slug": "push-group-chats-for-guilds",
    "title": "Introducing Push Group Chats for Guilds!",
    "authors": [
      "push"
    ],
    "image": "./cover-image.gif",
    "description": "Introducing Push Group Chats for Guilds!",
    "text": "We're excited to announce that Guild-Gated Group Chats are now available on Push.",
    "tags": [
      "Announcements",
      "Updates"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "What is consumer crypto and why does it matter?",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/what-is-consumer-crypto-and-why-does-it-matter"
  },
  "nextItem": {
    "title": "Push Protocol Monthly Updates: A Look Back at August",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-protocol-monthly-updates-august"
  }
};
const assets = {
"image": (__webpack_require__(469378)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What is Guild.xyz?",
  "id": "what-is-guildxyz",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
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
        alt: "Cover Image of Introducing Push Group Chats for Guilds!",
        src: (__webpack_require__(823761)/* ["default"] */ .A) + "",
        width: "800",
        height: "450"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We're excited to announce that Guild-Gated Group Chats are now available on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/welcome",
        children: "Push"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Previously, Push’s Group Chats could only get gated by tokens or NFTs. Now any ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://guild.xyz/explorer",
        children: "guild"
      }), " that is live on Guild.xyz can start a Push-based group chat. This moves us closer to our vision of ensuring customizable support for all forms of group conversations."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As we’ve always down, we’re not just talking the talk, we’re walking the walk as well, having launched the first guild-gated group chat on Push. Here is a quick step-by-step guide on how to join it:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Visit to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://guild.xyz/push-protocol-463d3f",
          children: "https://guild.xyz/push-protocol-463d3f"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "On this page, connect a wallet you own, like MetaMask."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Complete the tasks mentioned and once you’re done, you will gain the Push Builders’ role for deeper access to our Guild-Gated Group Chat."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Click the dedicated URL that’s now unlocked to join the chat."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Congratulations you just joined the Push Guild Gated Group Chat community. Don’t forget to drop a gm and connect with fellow other group chat members."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-is-guildxyz",
      children: "What is Guild.xyz?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Guild serves as the foundation for platform-agnostic access management to on-chain and off-chain communities. It enables the creation of portable memberships and social structures that encompass both on-chain and off-chain requirements, allowing for the development of distinct user journeys across various applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://comms.push.org/docs/chat/build/conditional-rules-for-group/#guild-gated-group-example",
        children: "Here"
      }), " are some examples of how you can create gated group chats for guilds at guild.xyz using GUILD type-in criteria."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Got any questions? Ping our team on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/pushprotocol",
        children: "discord"
      }), " and we'd be happy to help you."]
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