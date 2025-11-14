"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[77583],{

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

/***/ 61623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5c22e33ed8f1f756f8b4327f75091e9e.gif");

/***/ }),

/***/ 77695:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1141/blog/push-v2-is-live-new-rewards-utility-and-functionality","source":"@site/blog/2023-08-02-push-v2-is-live/index.md","title":"Push V2 is LIVE — New Rewards, Utility & Functionality 🚀","description":"Cover image of Push V2 is LIVE — New Rewards, Utility & Functionality 🚀","date":"2023-08-02T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/web-3"},{"inline":true,"label":"Yield Farming","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/yield-farming"},{"inline":true,"label":"Blockchain Technologies","permalink":"/push-chain-website/pr-preview/pr-1141/blog/tags/blockchain-technologies"}],"readingTime":1.31,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1141/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1141/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-v2-is-live-new-rewards-utility-and-functionality","title":"Push V2 is LIVE — New Rewards, Utility & Functionality 🚀","authors":["push"],"image":"./cover-image.gif","text":"We’re thrilled to announce the launch of Push V2!🎉\\n\\nThis new release is packed with exciting features that collectively delivers an unparalleled experience for our users, provides new tools for builders, and helps us take a huge leap forward in the way of democratizing web3 communication.","tags":["Push Protocol","Web3","Yield Farming","Blockchain Technologies"]},"unlisted":false,"prevItem":{"title":"New Push Yield Farming Rewards: Full Details🪙","permalink":"/push-chain-website/pr-preview/pr-1141/blog/new-push-yield-farming-rewards-full-details"},"nextItem":{"title":"Pushing Ahead in Time: $PUSH x Timeswap ⏳","permalink":"/push-chain-website/pr-preview/pr-1141/blog/pushing-ahead-in-time-push-and-timeswap"}}');

/***/ }),

/***/ 383508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_08_02_push_v_2_is_live_index_md_5dc_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_08_02_push_v_2_is_live_index_md_5dc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77695);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-v2-is-live-new-rewards-utility-and-functionality',
	title: 'Push V2 is LIVE — New Rewards, Utility & Functionality 🚀',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	text: 'We’re thrilled to announce the launch of Push V2!🎉\n\nThis new release is packed with exciting features that collectively delivers an unparalleled experience for our users, provides new tools for builders, and helps us take a huge leap forward in the way of democratizing web3 communication.',
	tags: [
		'Push Protocol',
		'Web3',
		'Yield Farming',
		'Blockchain Technologies'
	]
};
const contentTitle = 'We’re thrilled to announce the launch of Push V2!🎉';

const assets = {
"image": (__webpack_require__(875778)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "New Yield Farming Rewards via Push Fee Pool Staking🌾",
  "id": "new-yield-farming-rewards-via-push-fee-pool-staking",
  "level": 3
}, {
  "value": "Incentivized Chat 💬",
  "id": "incentivized-chat-",
  "level": 3
}, {
  "value": "Push Spaces 🌌",
  "id": "push-spaces-",
  "level": 3
}, {
  "value": "Customized Profile Pictures 🖼️",
  "id": "customized-profile-pictures-️",
  "level": 3
}, {
  "value": "Democratizing web3 communication via a circular economy",
  "id": "democratizing-web3-communication-via-a-circular-economy",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover image of Push V2 is LIVE — New Rewards, Utility &amp; Functionality 🚀",
        src: (__webpack_require__(61623)/* ["default"] */ .A) + "",
        width: "800",
        height: "450"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "2 new liquidity reward pools to earn $PUSH from."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We’re thrilled to announce the launch of Push V2!🎉"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This new release is packed with exciting features that collectively delivers an unparalleled experience for our users, provides new tools for builders, and helps us take a huge leap forward in the way of democratizing web3 communication."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here’s everything included:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "new-yield-farming-rewards-via-push-fee-pool-staking",
      children: "New Yield Farming Rewards via Push Fee Pool Staking🌾"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "With Push V2, we are empowering $PUSH token holders like never before by introducing 2 new staking pools as part of a brand-new Yield Farming Rewards Program."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["One of which is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("i", {
        children: "Push Fee Pool"
      }), " which collects fees for actions across Push Notifications, Channel-related actions, and Chat. By staking your $PUSH liquidity into the pool, you’ll be able to earn a portion of the fees collected from the protocol!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For more detailed information, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",
        children: "check out this article here"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "incentivized-chat-",
      children: "Incentivized Chat 💬"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Introduces the possibility to implement a one-time fee for receiving chat requests. With the introduction of this feature, users will gain enhanced control over incoming chat requests and get to say goodbye to ads and spam."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "push-spaces-",
      children: "Push Spaces 🌌"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Welcome to the web3 version of Twitter Spaces. Engage in real-time, voice-based conversations with like-minded individuals and thought leaders. Create, host, and join Spaces on whatever topics you like natively on web3."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "customized-profile-pictures-️",
      children: "Customized Profile Pictures 🖼️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Personalize your Push dApp profile with unique avatars that best represent your individuality and style. Total customization, total control."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "democratizing-web3-communication-via-a-circular-economy",
      children: "Democratizing web3 communication via a circular economy"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The future of web3 communication is here, and it’s called Push V2."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "All the features we’ve introduced in Push V2 are in the way of empowering users, rewarding participation, and hence creating a circular economy. In this way, we are democratizing web3 communication and giving control of web3’s leading communication layer to its stakeholders."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Additionally, our new features and functionality are expanding the universe of dApp UX enhancement even further. We are extremely excited to explore the possibilities of new integrations and dApps that these new features will enable."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Stay tuned for more updates and announcements on each of these features! ✨"
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

/***/ 875778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5c22e33ed8f1f756f8b4327f75091e9e.gif");

/***/ })

}]);