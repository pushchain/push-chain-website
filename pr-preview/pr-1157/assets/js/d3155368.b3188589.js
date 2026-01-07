"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[38724],{

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

/***/ 447521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_09_29_zebpay_epns_rockstar_index_md_d31_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_09_29_zebpay_epns_rockstar_index_md_d31_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537749);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'zebpay-epns-rockstar',
	title: 'ZebPay ❤️ EPNS ROCKSTAR',
	description: 'ZebPay ❤️ EPNS ROCKSTAR',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We have awesome news to share! To celebrate $PUSH listing on ZebPay, we are thrilled to announce that this week’s $ROCKSTAR #NFT will be sponsored by none other than ZebPay. This week’s winner goes home with $ROCKSTAR NFT + 2400 $PUSH (~$6,500), and 10 top shortlisted entries win Goodies from ZebPay 🎁',
	tags: [
		'Ethereum',
		'Zebpay',
		'Mème',
		'Contests',
		'Push'
	]
};
const contentTitle = 'ZebPay ❤️ EPNS ROCKSTAR Competitions Rules👇';

const assets = {
"image": (__webpack_require__(461587)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of ZebPay ❤️ EPNS ROCKSTAR",
        src: (__webpack_require__(707794)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hey EPNS fam 🎎!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We have awesome news to share! To celebrate $PUSH listing on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://zebpay.com/",
        children: "ZebPay"
      }), ", we are thrilled to announce that this week’s $ROCKSTAR #NFT will be sponsored by none other than ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "ZebPay"
      }), ". This week’s winner goes home with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "$ROCKSTAR NFT"
      }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "2400 $PUSH"
      }), " (~$6,500), and 10 top shortlisted entries win **Goodies** ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "from ZebPay"
      }), " 🎁"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "So, let creativity invade your thinking and celebrate and share the EPNS x ZebPay collaboration with the world 🎭!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Follow ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://twitter.com/epnsproject",
          children: "EPNS"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://twitter.com/zebpay",
          children: "ZebPay"
        }), " and RT the contest tweet"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Include EPNS and ZebPay elements in your submission."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Get creative!!! create memes, infographics, videos, photos, reviews or anything cool or crazy and submit by replying to the tweet."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Reply to the tweet with **#**PUSH4ZebPay and your creative to qualify for the competition."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Contest ends on Saturday, 9th Oct at 5PM UTC."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Top 4 entries will be shortlisted by ZebPay. Shortlisted entries will be submitted for voting via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4",
          children: "EPNS Governance"
        }), " to select the final winner."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Note that the ZebPay goodies are limited to India area only."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Good luck to everyone!🤞 🎨"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "p.s. Look out for a series of exciting contests coming soon with EPNS X ZebPay!"
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

/***/ 461587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d567ec2c437e25421469e626bdadec2c.webp");

/***/ }),

/***/ 537749:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1157/blog/zebpay-epns-rockstar","source":"@site/blog/2021-09-29-zebpay-epns-rockstar/index.md","title":"ZebPay ❤️ EPNS ROCKSTAR","description":"ZebPay ❤️ EPNS ROCKSTAR","date":"2021-09-29T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/ethereum"},{"inline":true,"label":"Zebpay","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/zebpay"},{"inline":true,"label":"Mème","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/meme"},{"inline":true,"label":"Contests","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/contests"},{"inline":true,"label":"Push","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/push"}],"readingTime":0.77,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1157/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1157/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"zebpay-epns-rockstar","title":"ZebPay ❤️ EPNS ROCKSTAR","description":"ZebPay ❤️ EPNS ROCKSTAR","authors":["push"],"image":"./cover-image.webp","text":"We have awesome news to share! To celebrate $PUSH listing on ZebPay, we are thrilled to announce that this week’s $ROCKSTAR #NFT will be sponsored by none other than ZebPay. This week’s winner goes home with $ROCKSTAR NFT + 2400 $PUSH (~$6,500), and 10 top shortlisted entries win Goodies from ZebPay 🎁","tags":["Ethereum","Zebpay","Mème","Contests","Push"]},"unlisted":false,"prevItem":{"title":"EPNS Push Notifications to Support EasyFi Lending Platform for Digital Assets","permalink":"/push-chain-website/pr-preview/pr-1157/blog/epns-push-notifications-to-support"},"nextItem":{"title":"EPNS Partners With Armor to Enable Push Notifications for its Users","permalink":"/push-chain-website/pr-preview/pr-1157/blog/epns-partners-with-armor"}}');

/***/ }),

/***/ 707794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-d567ec2c437e25421469e626bdadec2c.webp");

/***/ })

}]);