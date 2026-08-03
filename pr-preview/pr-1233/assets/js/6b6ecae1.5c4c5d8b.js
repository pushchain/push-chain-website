"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[15270],{

/***/ 464003
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_05_15_introducing_multihop_on_push_chain_index_md_6b6_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_05_15_introducing_multihop_on_push_chain_index_md_6b6_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428985);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'introducing-multihop-on-push-chain',
	title: 'Introducing Multihop on Push Chain',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Multihop allows you to compose multiple cross-chain operations into a single signed transaction. Ordered and tracked end-to-end.',
	text: 'Multihop allows you to compose multiple cross-chain operations into a single signed transaction. Ordered and tracked end-to-end.',
	tags: [
		'Technical',
		'Deep Dives'
	],
	twitterId: '2055288016013340737'
};
const contentTitle = 'Introducing Multihop on Push Chain';

const assets = {
"image": (__webpack_require__(83317)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "For users:",
  "id": "for-users",
  "level": 2
}, {
  "value": "For developers:",
  "id": "for-developers",
  "level": 2
}, {
  "value": "For users:",
  "id": "for-users-1",
  "level": 2
}, {
  "value": "For devs:",
  "id": "for-devs",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of Introducing Multihop on Push Chain",
        src: (__webpack_require__(357384)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Multihop allows you to compose multiple cross-chain operations into a single signed transaction. Ordered and tracked end-to-end."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "cross-chain-today-is-still-manual-and-bumpy",
      children: "Cross-chain today is still manual and bumpy"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "for-users",
      children: "For users:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Try doing anything non-trivial across chains right now. Swap ETH for a Solana token. Move collateral from BNB to Ethereum and deposit it into a lending protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Every step is a separate transaction. And every transaction needs a separate signature.\nThis means multiple interruptions, multiple clicks and many minutes wasted in preparing a transaction before actually executing it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The question worth asking is: why do users have to heavy lift all these precursor steps? Shouldn’t the underlying tech handle everything on its own!?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Take a cross-chain yield balancing app as an example:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "First Image of Introducing Multihop on Push Chain",
        src: (__webpack_require__(998584)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "for-developers",
      children: "For developers:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Today, building cross-chain apps is 30% business logic and 70% orchestration and plumbing.\nInstead of focusing on app features and logic, devs are forced to integrate multiple SDKs and interop protocols with a bumpy learning curve."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Then comes another headache. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Cross-protocol compatibility and debugging hell"
      }), ".\nWriting complex retry handles, timeout watches and manual rollback scripts"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "What devs often fail to understand is that the cross-chain part of their codebase isn't the true product. It’s just plumbing. Which (again) should be abstracted and handled by the underlying protocol itself."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "what-multihop-changes",
      children: "What multihop changes?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "for-users-1",
      children: "For users:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Multihop lets you compose multiple cross-chain transactions into a single ordered flow."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You simply specify your steps or intent and watch Push Chain execute them all at once, with just one signature."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push handles all the cross chain coordination across multiple chains (be it EVM, Solana, or Push Chain itself)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Second Image of Introducing Multihop on Push Chain",
        src: (__webpack_require__(259685)/* ["default"] */ .A) + "",
        width: "1600",
        height: "1600"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "for-devs",
      children: "For devs:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The API surface is two functions. That's it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "prepareTransaction takes a transaction description, target address, calldata, chain, optional fund movement and returns a  PreparedUniversalTx object. This object contains the resolved route (where does this hop execute?), estimated gas, nonce, deadline, and the encoded payload. You don't need to inspect any of this. You just pass it forward."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["executeTransactions takes an ordered array of prepared transactions and submits them as a single cascade to Push Chain. One signature. The SDK figures out the routing: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "which hops stay on Push Chain, which go outbound to external chains via CEAs, which move funds between chains."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Refer to the docs for more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/docs/chain/build/send-multichain-transactions/",
        children: "detailed insights"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Routing is automatic:"
      }), "\nYou don't think about routes. Pass a plain address in to and the hop stays on Push Chain. Pass ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "{ address, chain }"
      }), " and it goes outbound (from push to ext chain)  via CEA."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Need a hop to originate from an external chain? Set ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "from: { chain }"
      }), " and the SDK handles the rest."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.admonition, {
      title: "CEA TL;DR",
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Chain Executor Accounts are per-user smart accounts that live on external chains and act on your behalf while keeping your funds and unified crosschain identity separate from everyone else."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/blog/introducing-chain-executor-account",
          children: "Read more about CEAs"
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Funds can move with any hop"
      }), "\nAny hop can carry token movement alongside its contract call via the funds parameter. Bridge ETH into Push Chain and call a contract in the same hop. No separate bridging steps needed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Multiple calls can be batched into a single hop"
      }), "\nThe data field accepts either a single calldata or an array of calls. So approve + deposit can be one hop instead of two. Fewer hops, tighter cascades."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "try-it",
      children: "Try It"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Multihop is live on testnet.\nExperience it through our ecosystem apps like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.ramenfi.xyz/",
        children: "RamenFi"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/docs/chain/build/send-multichain-transactions/",
        children: "Multihop docs also include playground environments"
      }), " where you can test directly in your browser, no local setup needed."]
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

/***/ 83317
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5da56dd003c46725ee2031035e4c8359.webp");

/***/ },

/***/ 357384
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5da56dd003c46725ee2031035e4c8359.webp");

/***/ },

/***/ 998584
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-fc9721a048a211c4de9efc1df58f5577.webp");

/***/ },

/***/ 259685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-c9d158d1c1c6ae88dd1418a57f30cb30.webp");

/***/ },

/***/ 428985
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1233/blog/introducing-multihop-on-push-chain","source":"@site/blog/2026-05-15-introducing-multihop-on-push-chain/index.md","title":"Introducing Multihop on Push Chain","description":"Multihop allows you to compose multiple cross-chain operations into a single signed transaction. Ordered and tracked end-to-end.","date":"2026-05-15T00:00:00.000Z","tags":[{"inline":true,"label":"Technical","permalink":"/push-chain-website/pr-preview/pr-1233/blog/tags/technical"},{"inline":true,"label":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1233/blog/tags/deep-dives"}],"readingTime":2.15,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1233/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1233/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"introducing-multihop-on-push-chain","title":"Introducing Multihop on Push Chain","authors":["push"],"image":"./cover-image.webp","description":"Multihop allows you to compose multiple cross-chain operations into a single signed transaction. Ordered and tracked end-to-end.","text":"Multihop allows you to compose multiple cross-chain operations into a single signed transaction. Ordered and tracked end-to-end.","tags":["Technical","Deep Dives"],"twitterId":"2055288016013340737"},"unlisted":false,"prevItem":{"title":"Push Rewards Program goes Public: Universal Network Meets Real Usage","permalink":"/push-chain-website/pr-preview/pr-1233/blog/push-rewards-program"},"nextItem":{"title":"Introducing Chain Executor Accounts (CEAs)","permalink":"/push-chain-website/pr-preview/pr-1233/blog/introducing-chain-executor-account"}}');

/***/ }

}]);