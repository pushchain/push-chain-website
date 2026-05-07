"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[48983],{

/***/ 611123
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_03_12_same_usdc_different_liquidity_index_md_404_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_03_12_same_usdc_different_liquidity_index_md_404_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7319);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'same-usdc-different-liquidity',
	title: 'Same USDC. Different Liquidity',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'You hold USDC. So does our intern.But yours is on Solana. Intern on Ethereum.',
	text: 'You hold USDC. So does our intern.But yours is on Solana. Intern on Ethereum.',
	tags: [
		'Deep Dives'
	],
	twitterId: '2032097112184250612'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(889501)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "How the peg stays intact",
  "id": "how-the-peg-stays-intact",
  "level": 2
}, {
  "value": "Why this matters for apps",
  "id": "why-this-matters-for-apps",
  "level": 2
}, {
  "value": "And for DeFi, the math changes entirely",
  "id": "and-for-defi-the-math-changes-entirely",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of Same USDC. Different Liquidity",
        src: (__webpack_require__(480526)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You hold USDC. So does our intern."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But yours is on Solana. Intern on Ethereum."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Same issuer. Same dollar. Totally different liquidity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Chain fragmentation got all the attention."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But this? This is the real problem 👇"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Today's reality: USDC Sol, USDC ETH, USDC Base, all circle backed, all worth $1."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But they're isolated. Different pool depths. Different slippage. Different borrowing rates."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Defragmenting chains was step one. Defragmenting liquidity is what actually moves the needle."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is what the Liquidity Wedge solves."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Powered by Push Chain's universal settlement layer, it takes stablecoins from all chains and combines them into one basket."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "USDC.Sol + USDC.ETH + USDC.Base → One unified USDC pool."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Not a new stablecoin. Just the ones you trust; unified."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "First Image of Same USDC. Different Liquidity",
        src: (__webpack_require__(619110)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-the-peg-stays-intact",
      children: "How the peg stays intact"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The basket balances based on cross-chain liquidity depth.\nWhen you withdraw, protocol honors your preferred chain. Edge case: you might get USDC from a different chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But as the wedge deepens, that edge case basically disappears."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-this-matters-for-apps",
      children: "Why this matters for apps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "User on Solana? ETH? Base? Doesn't matter."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Apps like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.thehodl.fun/en",
        children: "HodlFun"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.beatbrawls.com/",
        children: "beatbrawls"
      }), " can onboard anyone, same app, same liquidity, no bridging required.\nOne DEEP pool for every chain's users."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "and-for-defi-the-math-changes-entirely",
      children: "And for DeFi, the math changes entirely"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["→ DEX slippage becomes negligible ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n→ Borrowing rates drop hard (3% → 0.3%) ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n→ Capital efficiency goes through the roof ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You're not reinventing any DeFi primitives. You're unifying what already exists."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That's what an efficient financial layer actually looks like."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Chain fragmentation? Solved.\nLiquidity fragmentation? That's the real wedge."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "One settlement layer. One liquidity pool. Every chain's users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That’s DeFi without walls."
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

/***/ 889501
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9704598247b0a6a01fb33e10d234f176.webp");

/***/ },

/***/ 480526
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9704598247b0a6a01fb33e10d234f176.webp");

/***/ },

/***/ 619110
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-173e118494d3ab0065365d90eba90fcf.webp");

/***/ },

/***/ 7319
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1219/blog/same-usdc-different-liquidity","source":"@site/blog/2026-03-12-same-usdc-different-liquidity/index.md","title":"Same USDC. Different Liquidity","description":"You hold USDC. So does our intern.But yours is on Solana. Intern on Ethereum.","date":"2026-03-12T00:00:00.000Z","tags":[{"inline":true,"label":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1219/blog/tags/deep-dives"}],"readingTime":0.95,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1219/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1219/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"same-usdc-different-liquidity","title":"Same USDC. Different Liquidity","authors":["push"],"image":"./cover-image.webp","description":"You hold USDC. So does our intern.But yours is on Solana. Intern on Ethereum.","text":"You hold USDC. So does our intern.But yours is on Solana. Intern on Ethereum.","tags":["Deep Dives"],"twitterId":"2032097112184250612"},"unlisted":false,"prevItem":{"title":"How Push Rethinks Stablecoins","permalink":"/push-chain-website/pr-preview/pr-1219/blog/how-push-rethinks-stablecoins"},"nextItem":{"title":"How to Make Your App Accept ANY Token from ANY Chain?","permalink":"/push-chain-website/pr-preview/pr-1219/blog/accept-any-token-from-any-chain"}}');

/***/ }

}]);