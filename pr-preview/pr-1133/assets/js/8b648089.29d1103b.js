"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[22710],{

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

/***/ 169405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2aa54c8535d68ec9dd8d70abf32ab85c.webp");

/***/ }),

/***/ 308811:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1133/blog/birth-of-a-new-pantheon-thena-and-push-protocol-unite","source":"@site/blog/2023-03-15-push-thena/index.md","title":"Birth of a New Pantheon: THENA and Push Protocol Unite💜","description":"Cover image of Birth of a New Pantheon: THENA and Push Protocol Unite💜","date":"2023-03-15T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1133/blog/tags/web-3"},{"inline":true,"label":"Defi","permalink":"/push-chain-website/pr-preview/pr-1133/blog/tags/defi"},{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1133/blog/tags/push-protocol"},{"inline":true,"label":"UX","permalink":"/push-chain-website/pr-preview/pr-1133/blog/tags/ux"}],"readingTime":1.56,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1133/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1133/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"birth-of-a-new-pantheon-thena-and-push-protocol-unite","title":"Birth of a New Pantheon: THENA and Push Protocol Unite💜","authors":["push"],"image":"./cover-image.webp","text":"We are thrilled to announce that Push Protocol is partnering with THENA, a leading liquidity layer and DEX AMM on the BNB Chain!","tags":["Web3","Defi","Push Protocol","UX"]},"unlisted":false,"prevItem":{"title":"How Push & Cross-Chain Communication Will Change Web3🌐","permalink":"/push-chain-website/pr-preview/pr-1133/blog/how-push-and-cross-chain-communication-will-change-web3"},"nextItem":{"title":"Push DAO Extends Liquidity Rewards Program in v2.0","permalink":"/push-chain-website/pr-preview/pr-1133/blog/push-dao-extends-liquidity-rewards-program-in-v2-0"}}');

/***/ }),

/***/ 604291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_03_15_push_thena_index_md_8b6_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_03_15_push_thena_index_md_8b6_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308811);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'birth-of-a-new-pantheon-thena-and-push-protocol-unite',
	title: 'Birth of a New Pantheon: THENA and Push Protocol Unite💜',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We are thrilled to announce that Push Protocol is partnering with THENA, a leading liquidity layer and DEX AMM on the BNB Chain!',
	tags: [
		'Web3',
		'Defi',
		'Push Protocol',
		'UX'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(169405)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Push x THENA🏛️",
  "id": "push-x-thena️",
  "level": 2
}, {
  "value": "About THENA",
  "id": "about-thena",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
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
        alt: "Cover image of Birth of a New Pantheon: THENA and Push Protocol Unite💜",
        src: (__webpack_require__(842212)/* ["default"] */ .A) + "",
        width: "1100",
        height: "619"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We are thrilled to announce that Push Protocol is partnering with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://thena.fi/",
        children: "THENA"
      }), ", a leading liquidity layer and DEX AMM on the BNB Chain!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As a liquidity layer for protocols and web3 users, THENA is a next-gen AMM (Automated Market Maker) with over $124m in TV on BNB Chain. THENA’s aim is to become the dominant automated market maker (AMM) and provide a collaborative strategy for establishing new liquidity management products."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Now working together, Push is helping to enhance the THENA trading UX. Simultaneously, we’re also supporting THENA’s mission of enabling the next generation of BNB Chain projects to succeed through flexible and cost-effective solutions for expanding liquidity on BNB Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let’s dive in more!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "push-x-thena️",
      children: "Push x THENA🏛️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This partnership is a result of a shared commitment to transparency and security. Together, Push and THENA aim to provide users with more direct and secure communication, helping THENA users stay informed about critical events and enabling better governance on the platform. This is all happening through Push’s web3 native notifications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("blockquote", {
      children: "Crypto is all about being ahead of the curve and pushing the boundaries of what’s possible. Push notifications for web3 are the natural evolution of the user experience, and we’re excited to be implementing this game-changing feature on THENA. With this partnership, we’re paving the way for a more accessible and user-friendly DeFi ecosystem, and we can’t wait to see what other innovative solutions we can bring to the table. — 0xApollo, THENA’s CMO"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As a result of this partnership, THENA users can expect to receive real-time notifications about critical events such as:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Liquidation alerts"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Change of vault or strategies"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Reminders to vote on governance proposals"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "By enabling informed decision-making and enhancing governance, we are empowering users to take full control of their investments on THENA while encouraging more active participation in the growth of the platform."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This collaboration is simply the first step in our journey, and we are eager to explore other opportunities that can bring more value to BNBChain DeFi users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For notifications from THENA you can already opt-in to their channel that’s live on Push here👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://app.push.org/#/channels?channel=0xC59c69342eb0bF2635dac683e44cEB2A18a5C38d",
        children: "app.push.org/#/channels?channel=0xC59c69342eb0bF2635dac683e44cEB2A18a5C38d"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "about-thena",
      children: "About THENA"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Thena.fi is the native liquidity layer on BNB that emphasizes community-driven development, transparency, and security in its platform. THENA was designed to onboard the next generation of protocols to the BNB chain by opening up a free market for THE emissions. Its native token is also used for governance and incentivizing liquidity providers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Find out more about THENA: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://thena.fi/",
        children: "Website"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/ThenaFi_",
        children: "Twitter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://t.me/+Lr-8OJpzxBo4Yjg0",
        children: "Telegram"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://discord.com/invite/thena",
        children: "Discord"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/@ThenaFi",
        children: "Medium"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://thena.gitbook.io/thena/",
        children: "Docs"
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

/***/ 842212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-2aa54c8535d68ec9dd8d70abf32ab85c.webp");

/***/ })

}]);