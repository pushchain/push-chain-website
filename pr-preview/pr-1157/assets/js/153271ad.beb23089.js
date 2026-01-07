"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[25473],{

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

/***/ 83010:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1157/blog/epns-collaborates-with-new-order","source":"@site/blog/2022-04-06-epns-collaborates-with-new-order/index.md","title":"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance","description":"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance","date":"2022-04-06T00:00:00.000Z","tags":[{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/ethereum"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/defi"},{"inline":true,"label":"Epnsproject","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/epnsproject"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/newsletter"},{"inline":true,"label":"Blockchain","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/blockchain"}],"readingTime":1.68,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1157/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1157/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"epns-collaborates-with-new-order","title":"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance","description":"EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance","authors":["push"],"image":"./cover-image.webp","text":"EPNS and New Order collaborate to bring governance updates to users","tags":["Ethereum","Defi","Epnsproject","Newsletter","Blockchain"]},"unlisted":false,"prevItem":{"title":"EPNS Collaborates With TokenBrice to Bring Decentralized Push Notifications to Readers","permalink":"/push-chain-website/pr-preview/pr-1157/blog/epns-collaborates-with-tokenbrice"},"nextItem":{"title":"How to Implement Gasless Vote Delegation — A novel feature for Governance","permalink":"/push-chain-website/pr-preview/pr-1157/blog/how-to-implement-gasless-vote"}}');

/***/ }),

/***/ 373462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-49a59d8723daf5dfa00f348cc47d8d10.webp");

/***/ }),

/***/ 580305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_06_epns_collaborates_with_new_order_index_md_153_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_04_06_epns_collaborates_with_new_order_index_md_153_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83010);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-collaborates-with-new-order',
	title: 'EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance',
	description: 'EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'EPNS and New Order collaborate to bring governance updates to users',
	tags: [
		'Ethereum',
		'Defi',
		'Epnsproject',
		'Newsletter',
		'Blockchain'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(902363)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Building the New-Age Financial System",
  "id": "building-the-new-age-financial-system",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
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
        alt: "Cover image of EPNS Collaboration With New Order Will Bring Push Notifications to its Venture DAO Governance",
        src: (__webpack_require__(373462)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "New Order, a community-led Venture DAO built for innovative DeFi projects, joins forces with EPNS to bring governance updates to users. As such, users of New Order are poised to receive decentralized push notifications pertaining to various stages of the platform governance, making it easier for them to keep up with the process."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "building-the-new-age-financial-system",
      children: "Building the New-Age Financial System"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A $200 billion industry, DeFi is home to some of the most innovative financial startups that are changing the course of the global financial system. These startups have the potential to take financial services even to the farthest corners of our world and solve the most pressing financial problems of today. In this regard, New Order is a platform built to uphold innovation and propel the growth of these projects."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As an ecosystem DAO, New Order is built as an incubator & accelerator to foster the most innovative DeFi and web3 financial projects and aptly positions itself at the helm of DeFi to accelerate the growth of the industry. The DAO focuses on early-stage Defi projects aligned with its vision of being blockchain-agnostic and also a plethora of innovative new-age asset classes like data-driven tokens."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "New Order’s overall vision is quite simple: to create an ecosystem of decentralized financial products that are not limited by constraints like interoperability and built to unleash DeFi’s full potential. As such, the DAO encourages its community to participate in important decisions and steer direction of growth. This is where EPNS push notifications are vital to help reduce friction and increase participation.."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "what-does-the-collaboration-entail",
      children: "What Does the Collaboration Entail"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As a result of New Order’s collaboration with EPNS, it will have an official channel on the EPNS platform that acts as a direct communication medium between the platform and its users. Users can subscribe to this channel to stay updated with the various stages of the governance process. They will receive decentralized push notifications on devices of their choice whenever"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A new governance proposal is created and voting begins"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Updates are made to the proposal"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Voting results are declared."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "EPNS has a chrome extension, mobile application, and decentralized application to ensure that users don’t miss out on important updates."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As New Order works towards building the new-age DeFi Ecosystem, we’re pleased to team up with them on their journey and hope to continue this alliance into the future."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "about-new-order",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "About New Order"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "New Order is an Ecosystem DAO that is built to operate as a launchpad for the most innovative Web3 financial products, tools, and applications that contribute to the vision of creating a fully composable financial ecosystem embracing multi-chain DeFi at its core. The DAO will support early-stage projects aligned with its vision of being chain-agnostic, focused on a plethora of innovative new-age asset classes including data-driven tokens."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Stay in touch! ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.neworder.network/",
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



/***/ }),

/***/ 902363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-49a59d8723daf5dfa00f348cc47d8d10.webp");

/***/ })

}]);