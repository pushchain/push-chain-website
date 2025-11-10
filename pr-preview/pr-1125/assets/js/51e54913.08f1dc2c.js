"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[55918],{

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

/***/ 349935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-021ae143c5adb676e3be7cc5f0da21c0.webp");

/***/ }),

/***/ 496592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-021ae143c5adb676e3be7cc5f0da21c0.webp");

/***/ }),

/***/ 549405:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1125/blog/welcome-on-board-defi-dad","source":"@site/blog/2020-12-05-welcome-on-board-defi-dad/index.md","title":"Welcome on board, DeFi Dad!👁️⚡👁️","description":"Welcome on board, DeFi Dad!👁️⚡👁️","date":"2020-12-05T00:00:00.000Z","tags":[{"inline":true,"label":"Advisor","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/advisor"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/defi"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/ethereum"},{"inline":true,"label":"Crypto","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/crypto"},{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1125/blog/tags/announcements"}],"readingTime":0.97,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1125/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1125/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"welcome-on-board-defi-dad","title":"Welcome on board, DeFi Dad!👁️⚡👁️","description":"Welcome on board, DeFi Dad!👁️⚡👁️","authors":["push"],"image":"./cover-image.webp","text":"Ethereum Push Notification Service is beyond thrilled to announce that DeFi Legend DeFi Dad has joined the EPNS Advisory","tags":["Advisor","Defi","Ethereum","Crypto","Announcements"]},"unlisted":false,"prevItem":{"title":"Welcome on board, Vivek!💖💖💖","permalink":"/push-chain-website/pr-preview/pr-1125/blog/welcome-on-board-vivek"},"nextItem":{"title":"In 2009, Push Notifications Changed Web2.0. In 2020, EPNS is Bringing them to Web3.0","permalink":"/push-chain-website/pr-preview/pr-1125/blog/in-2009-push-notifications-changes-web-2"}}');

/***/ }),

/***/ 928574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2020_12_05_welcome_on_board_defi_dad_index_md_51e_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2020_12_05_welcome_on_board_defi_dad_index_md_51e_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549405);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'welcome-on-board-defi-dad',
	title: 'Welcome on board, DeFi Dad!👁️⚡👁️',
	description: 'Welcome on board, DeFi Dad!👁️⚡👁️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Ethereum Push Notification Service is beyond thrilled to announce that DeFi Legend DeFi Dad has joined the EPNS Advisory',
	tags: [
		'Advisor',
		'Defi',
		'Ethereum',
		'Crypto',
		'Announcements'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(496592)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of Welcome on board, DeFi Dad!👁️⚡👁️",
        src: (__webpack_require__(349935)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We are excited to welcome our new Advisor — DeFi Dad"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://epns.io/",
        children: "Ethereum Push Notification Service"
      }), " is beyond thrilled to announce that DeFi Legend ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/DeFi_Dad",
        children: "DeFi Dad"
      }), " has joined the EPNS Advisory."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["DeFi Dad is the COO of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://zapper.fi/",
        children: "Zapper.fi"
      }), ". He is a DeFi Super User and educator through the hugely popular ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.youtube.com/channel/UCatItl6C7wJp9txFMbXbSTg/",
        children: "DeFi Dad Youtube Channel"
      }), " where he curates and produces free educational content on DeFi and Ethereum."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We first met DeFi Dad at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/u/8eee9c7e6047?source=post_page-----176ceec0371d--------------------------------",
        children: "IDEO CoLab Ventures"
      }), " Product Validation Day, where he shared his insights about DeFi Users Experience as part of product design thinking and interview. As an avid DeFi product and service user, DeFi Dad will bring his subject matter expertise to advise us on product design and strategy, which will reshape communication in blockchain as we know it."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In taking the advisor role, DeFi Dad said:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "EPNS was a oh-shit light bulb moment for me. DeFi and crypto communications are a mess at the moment. The ability to share product updates, notifications related to invested assets (ie real-time CDP liquidation warnings), urgent messages about bugs, new liquidity mining opportunities, or simply engage with your users based on wallets actually holding exposure to the native asset of your protocol… is a huge step forward. We needed EPNS yesterday and that’s why I’m excited to be invested and working with this team."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We love DeFi Dad 💖💖💖 and are honored to welcome him to the EPNS fam."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Stay in touch with Push! ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://x.com/PushChain",
        children: "Twitter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://t.me/epnsproject",
        children: "Telegram"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://epns.substack.com/",
        children: "Newsletter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://epns.io",
        children: "Website"
      })]
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



/***/ })

}]);