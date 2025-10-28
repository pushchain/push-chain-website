"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[61745],{

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

/***/ 375852:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1106/blog/calling-all-hobbyist-devs-channel-creation-gas-fee-is-now-refundable","source":"@site/blog/2022-07-06-calling-all-hobbyist-devs-channel/index.md","title":"Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable","description":"Cover image of Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable","date":"2022-07-06T00:00:00.000Z","tags":[{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/epnsproject"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/blockchain"},{"inline":true,"label":"Notifications","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/notifications"},{"inline":true,"label":"Governance","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/governance"},{"inline":true,"label":"Gas Fees","permalink":"/push-chain-website/pr-preview/pr-1106/blog/tags/gas-fees"}],"readingTime":1.07,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1106/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1106/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"calling-all-hobbyist-devs-channel-creation-gas-fee-is-now-refundable","title":"Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable","authors":["push"],"image":"./cover-image.webp","text":"The main goal of EPNS is to be the gold standard of notifications in the web3 world. To receive a specific notification a user has to set up a channel by which they can send notifications. ","tags":["Epnsproject","Blockchain","Notifications","Governance","Gas Fees"]},"unlisted":false,"prevItem":{"title":"EPNS and Quest3 Unite in Pilot Collaboration to Bring Notifications for Users","permalink":"/push-chain-website/pr-preview/pr-1106/blog/epns-and-quest3-unite-in-pilot-collaboration-to-bring-notifications-for-users"},"nextItem":{"title":"EPNS and Sturdy Form An Alliance to Enable Direct Communication for Users","permalink":"/push-chain-website/pr-preview/pr-1106/blog/epns-and-sturdy-form-an-alliance-to-enable-direct-communication-for-users"}}');

/***/ }),

/***/ 460507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-eb2958fdad7cedf8de4abfb9cd0c20f0.webp");

/***/ }),

/***/ 497220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-eb2958fdad7cedf8de4abfb9cd0c20f0.webp");

/***/ }),

/***/ 994529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_07_06_calling_all_hobbyist_devs_channel_index_md_7f2_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_07_06_calling_all_hobbyist_devs_channel_index_md_7f2_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(375852);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'calling-all-hobbyist-devs-channel-creation-gas-fee-is-now-refundable',
	title: 'Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'The main goal of EPNS is to be the gold standard of notifications in the web3 world. To receive a specific notification a user has to set up a channel by which they can send notifications. ',
	tags: [
		'Epnsproject',
		'Blockchain',
		'Notifications',
		'Governance',
		'Gas Fees'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(460507)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        alt: "Cover image of Calling all Hobbyist Devs! Channel Creation Gas Fee is now Refundable",
        src: (__webpack_require__(497220)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The main goal of EPNS is to be the gold standard of notifications in the web3 world. To receive a specific notification a user has to set up a channel by which they can send notifications. A full guide on setting up channels can be found ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.epns.io/users/hello-world-channel/sending-notifications",
        children: "here"
      }), ". More information on EPNS DAPP can be seen ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://app.epns.io/#/live_walkthrough",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The community had recently voted on and passed", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: " PIP-06: Reimburse channel-creation gas fees in $PUSH on developer request"
      }), ". The results were immensely in favor of the proposal with 1.6M votes FOR and 2.6K votes AGAINST."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You can now request reimbursement of 80% of your gas fee within 24 hours of the channel creation, and your Gas fee will be reimbursed into your wallet in the form of $PUSH tokens. This removes an obstruction for underfunded or hobbyist developers from opening a notification channel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The process to redeem your gas fees are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Dev creates a channel"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Announces the channel creation on the EPNS discord (use of multiple emojis preferred 😊 )"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Let the world know of your channel and tag EPNS on all of your socials when you post(preferably Twitter)."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Dev shares relevant details in this ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://docs.google.com/forms/d/e/1FAIpQLScNQ2_mACRQgyIPsr47woE69_FOds8aLIGupT20QIEUMfgnQw/viewform?usp=sf_link",
          children: "google form"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The EPNS team will review the form and send devs $PUSH relative to the market price. Note that the", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
        children: " request must be sent within 24 hours of channel creation"
      }), ". This proposal is funded through Push Governance and was voted on in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://snapshot.org/#/epns.eth/proposal/0x1fd82313d4356e5d7963c60649f0376e995cf326ff348269293026e6064e1f38",
        children: "snapshot"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["EPNS also offers grants to promising projects also decided by the community. Here are some of the projects that are being voted on by our community right now - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://gov.epns.io/c/grants/10",
        children: "https://gov.epns.io/c/grants/10"
      }), "."]
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