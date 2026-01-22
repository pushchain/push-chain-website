"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[57477],{

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ 139975
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-616dd72913fbed189baf71bceb5bb599.webp");

/***/ },

/***/ 516213
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1168/blog/programmable-money-2-meets-epns","source":"@site/blog/2021-03-23-programmable-money-2-meets-epns/index.md","title":"Programmable Money 2.0 meets EPNS","description":"Programmable Money 2.0 meets EPNS","date":"2021-03-23T00:00:00.000Z","tags":[{"inline":true,"label":"Funding","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/funding"},{"inline":true,"label":"Announcements","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/announcements"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/ethereum"},{"inline":true,"label":"Decentralized","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/decentralized"},{"inline":true,"label":"Community","permalink":"/push-chain-website/pr-preview/pr-1168/blog/tags/community"}],"readingTime":1.6,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1168/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1168/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"programmable-money-2-meets-epns","title":"Programmable Money 2.0 meets EPNS","description":"Programmable Money 2.0 meets EPNS","authors":["push"],"image":"./cover-image.webp","text":"Streaming cashflows is one of the most important use cases of programmable cashflows! While rDai took the very first step in streaming Compound interest in DeFi, programmable cashflows enable many new use cases in other avenues like crypto payrolls, subscriptions or even dispensing weekly rewards at scale!","tags":["Funding","Announcements","Ethereum","Decentralized","Community"]},"unlisted":false,"prevItem":{"title":"EPNS Closes 10x Oversubscribed Extended Seed Round 🌱 🌟","permalink":"/push-chain-website/pr-preview/pr-1168/blog/epns-closes-10x-oversubscribed-extended-seed-round"},"nextItem":{"title":"EPNS Honored to be GnosisDAO’s SafeSnap Launch Partner","permalink":"/push-chain-website/pr-preview/pr-1168/blog/epns-honored-to-be-gnosisdao"}}');

/***/ },

/***/ 549886
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_03_23_programmable_money_2_meets_epns_index_md_652_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2021_03_23_programmable_money_2_meets_epns_index_md_652_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(516213);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'programmable-money-2-meets-epns',
	title: 'Programmable Money 2.0 meets EPNS',
	description: 'Programmable Money 2.0 meets EPNS',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Streaming cashflows is one of the most important use cases of programmable cashflows! While rDai took the very first step in streaming Compound interest in DeFi, programmable cashflows enable many new use cases in other avenues like crypto payrolls, subscriptions or even dispensing weekly rewards at scale!',
	tags: [
		'Funding',
		'Announcements',
		'Ethereum',
		'Decentralized',
		'Community'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(977360)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
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
        alt: "Cover Image of Programmable Money 2.0 meets EPNS",
        src: (__webpack_require__(139975)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Streaming cashflows is one of the most important use cases of programmable cashflows! While rDai took the very first step in streaming Compound interest in DeFi, programmable cashflows enable many new use cases in other avenues like crypto payrolls, subscriptions or even dispensing weekly rewards at scale!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Financial operations like subscriptions, salaries, rewards, and any composable stream of value usually require many repetitive and expensive transactions to be processed on-chain. Enter ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://www.superfluid.finance/",
        children: "Superfluid Protocol"
      }), ", an Ethereum based framework that creates transparency into the flow of any recurring transactions, allowing a clear view into the flow and stream of money. By publishing a single transaction, a user could agree to transfer 10 DAI per month in a constant stream. With every second, a tiny amount of DAI will flow between the two wallets, without any need for gas or any further transactions by either the sender or the receiver."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We’re thrilled to announce our partnership with the Superfluid team to further empower the protocol by adding the communication layer powered by Ethereum Push Notification Protocol. This will enable users to not only receive stream but also decentralized notifications to their wallet addresses informing them about important information about any particular money stream along with several other important communications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Our pilot program with Superfluid will consist of:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Exploring adding automated notification capabilities triggered by the basic functions available in the Superfluid Protocol. Such as: Starting, Editing and Cancelling a stream."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Working with the Superfluid team to enable technical discussion towards building a decentralized communication layer that is scalable and powerful."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Superfluid adds a new building block that is poised to change the game and allow builders to create a whole new generation of DeFi applications. We are honored with this amazing opportunity of working together with the Superfluid team in developing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Real Time Finance"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["“Enabling a direct communication channel between dApps and users is crucial, but has always been a tricky problem due to the reluctance of users to associate their email and ethereum account. EPNS solves this brilliantly, and will allow us to drastically improve our User Experience.” — ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Francesco Renzi, CEO Superfluid"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "About Superfluid"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Superfluid is a new DeFi primitive that automates recurring transactions, the protocol introduces a series of building blocks for web3 developers to enable real-time finance. Superfluid smart contract framework unlocks idle capital by enabling users to move assets on-chain and apply predefined rules called “agreements” to asset transfers. Superfluid only requires one on-chain transaction to open, edit or close a subscription, greatly decreasing the cognitive and administrative efforts that would have been involved for other types of recurring payments. Follow them and read the docs for more!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://www.superfluid.finance",
        children: "Website"
      }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/intent/follow?screen_name=Superfluid_HQ",
        children: "Twitter"
      }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://discord.superfluid.finance/",
        children: "Discord"
      }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/superfluid-blog",
        children: "Blog"
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



/***/ },

/***/ 977360
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-616dd72913fbed189baf71bceb5bb599.webp");

/***/ }

}]);