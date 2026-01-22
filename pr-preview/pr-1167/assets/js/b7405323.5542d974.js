"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[70715],{

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

/***/ 152250
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ed990a83f5cd87f9d453eeb2377fe67e.webp");

/***/ },

/***/ 761243
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ed990a83f5cd87f9d453eeb2377fe67e.webp");

/***/ },

/***/ 939385
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2024_04_12_march_recap_blog_index_md_b74_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2024_04_12_march_recap_blog_index_md_b74_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(965872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'monthly-recap-march-2024',
	title: 'Monthly Recap March 🎉',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Monthly Recap March 🎉',
	text: 'March was a productive month for us at the Push Ecosystem. We achieved some significant milestones that we’re excited to share with you.',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(761243)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Partnership Updates",
  "id": "partnership-updates",
  "level": 3
}, {
  "value": "Product Enhancements",
  "id": "product-enhancements",
  "level": 3
}, {
  "value": "Community Engagement",
  "id": "community-engagement",
  "level": 3
}, {
  "value": "Ecosystem Highlights",
  "id": "ecosystem-highlights",
  "level": 3
}, {
  "value": "DAO",
  "id": "dao",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of Monthly Recap March  🎉",
        src: (__webpack_require__(152250)/* ["default"] */ .A) + "",
        width: "1600",
        height: "840"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "March was a productive month for us at the Push Ecosystem. We achieved some significant milestones that we’re excited to share with you."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We sent out over 4 million notifications and reached 174,000 subscribers. But our journey doesn’t stop here. Let’s dive into the exciting updates for March from the Push Ecosystem:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "partnership-updates",
      children: "Partnership Updates"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We’ve seen a surge in clients integrating our notifications and messaging services. Some of our notable partners include ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://get-verso.com/",
        children: "Verso Wallet"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.dexynth.com/",
        children: "DEXYNTH"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://outposts.io/",
        children: "Outposts"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/bitgetglobal",
        children: "Bitget"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://alphax.finance/",
        children: "AlphaX"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://arbitrum.foundation/",
        children: "Arbitrum"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://roseon.world/",
        children: "RoseonX"
      }), ", and many more. They’ve all integrated Push notifications and chat into their platforms."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In addition, we partnered with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://learnweb3.io/",
        children: "LearnWeb3IO"
      }), " hackathon to support future builders."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "product-enhancements",
      children: "Product Enhancements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We introduced the Push ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://app.push.org/?/snap",
        children: "MetaMask Snooze Snap"
      }), ", which allows users to snooze notifications for up to 72 hours. This feature helps users manage their notifications at their own pace.We introduced a 'guest' mode on our dApp, making it easier than ever to explore Push without connecting your wallet"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We also benchmarked our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/benchmarking-push-chat-message/",
        children: "Push Chat Architecture"
      }), " to make Push Chat work more efficiently. We launched the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.notion.so/Push-x-Berachain-Spaces-Creative-Changes-5756710613b74055baa39ba4d534fe33?pvs=21",
        children: "Price Tracker Channel"
      }), " to help users get notified directly when their chosen cryptocurrency hits their desired price target."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "community-engagement",
      children: "Community Engagement"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We’ve been actively engaging with our vibrant community through various initiatives. We hosted a demo session for Push Nodes and awarded Push Alpha access NFT to over 700 users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Our “Decentralize with Push Campaign” led to the acquisition of more than 4,200 new users. We also unveiled ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/push-tokenomics-v2-engine/",
        children: "Tokenomics V2"
      }), " for the $PUSH token."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "To celebrate the listing of the $PUSH token on the Bitget Global exchange, we ran a quest campaign. We also announced the ultra-rare role “Push Chad” for our community."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "ecosystem-highlights",
      children: "Ecosystem Highlights"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In March, we featured ETH Gas Price Tracker, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://cryptojobslist.com/",
        children: "CryptoJobsList"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://aave.com/",
        children: "Aave"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.bankless.com/",
        children: "Bankless"
      }), " as the Push Channel of the Week."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "dao",
      children: "DAO"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We launched the Push Grants V3 initiative to support builders in the Push Ecosystem. We also welcomed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/ExpatCrypto3",
        children: "Ian"
      }), " as our new DAO Relations Lead and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/carlaupgrade",
        children: "Carla"
      }), " as our Community DAO Relations role for push_dao."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We’re excited about the progress we’ve made and look forward to what the future holds for the Push Ecosystem. Stay tuned for more updates!"
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

/***/ 965872
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1167/blog/monthly-recap-march-2024","source":"@site/blog/2024-04-12-march-recap-blog/index.md","title":"Monthly Recap March 🎉","description":"Monthly Recap March 🎉","date":"2024-04-12T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1167/blog/tags/push-protocol"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1167/blog/tags/web-3"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1167/blog/tags/blockchain-technology"}],"readingTime":1.41,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1167/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1167/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"monthly-recap-march-2024","title":"Monthly Recap March 🎉","authors":["push"],"image":"./cover-image.webp","description":"Monthly Recap March 🎉","text":"March was a productive month for us at the Push Ecosystem. We achieved some significant milestones that we’re excited to share with you.","tags":["Push Protocol","Web3","Blockchain Technology"]},"unlisted":false,"prevItem":{"title":"Billion Reasons to Build Bootcamp: Covering Every Dimension of the Web3 Ecosystem","permalink":"/push-chain-website/pr-preview/pr-1167/blog/billion-reason-to-build-bootcamp-covering-every-dimension-of-the-web3-ecosystem"},"nextItem":{"title":"$PUSH Tokenomics V2: Unveiling the New Economic Engine","permalink":"/push-chain-website/pr-preview/pr-1167/blog/push-tokenomics-v2-engine"}}');

/***/ }

}]);