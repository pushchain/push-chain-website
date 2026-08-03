"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[63108],{

/***/ 577303
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_07_16_rwa_scale_across_multiple_chains_index_md_124_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_07_16_rwa_scale_across_multiple_chains_index_md_124_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(683410);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'rwa-scale-across-multiple-chains',
	title: 'What Happens When RWAs Scale Across Multiple Chains?',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Learn how RWA apps can become universally accessible to any user on any chain using Push Chain\'s Universal Execution Layer.',
	text: 'Learn how RWA apps can become universally accessible to any user on any chain using Push Chain\'s Universal Execution Layer.',
	tags: [
		'Key Features',
		'Product'
	],
	twitterId: '2077756092994695420'
};
const contentTitle = 'What Happens When RWAs Scale Across Multiple Chains?';

const assets = {
"image": (__webpack_require__(157873)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Every deployment is a separate product.",
  "id": "every-deployment-is-a-separate-product",
  "level": 2
}, {
  "value": "Does YieldVault need to forgo its $200M Ethereum Liquidity after porting to Push Chain?",
  "id": "does-yieldvault-need-to-forgo-its-200m-ethereum-liquidity-after-porting-to-push-chain",
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
        alt: "Cover Image of What Happens When RWAs Scale Across Multiple Chains",
        src: (__webpack_require__(259956)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Consider you’re building a tokenized treasury fund."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let's call it YieldVault."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "YieldVault launches on Ethereum. It tokenizes short-duration U.S. Treasuries, issues yield-bearing tokens, and reaches $200M in AUM within six months. (Bravo!!!)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Then the requests start coming in."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A DeFi lending protocol on Arbitrum wants YieldVault tokens as collateral."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A payments company on Solana wants to integrate them into stablecoin yield strategies."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "An institutional desk running on Robinhood needs them for cross-border settlement."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This sure sounds like the road to PMF, right?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But do we (as an industry) have the right infra to fulfil all of the above requests? Without practically rewriting and re-deploying your product from the ground up?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "YieldVault now has a choice to make: do you stay on one chain and limit your addressable market, or do you go multi-chain and inherit a coordination problem that gets exponentially harder with every deployment?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let's assume YieldVault deploys on four different chains. Each deployment gets its own liquidity pool, which needs to be bootstrapped because the $200 AUM liquidity was localised to a single chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is where the liquidity fragmentation problem starts to kick in."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Liquidity coordination"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Slippage issues"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Price discrepancies in assets now listed across different chains"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A fund manager running a $500M allocation across tokenized treasuries cannot tolerate a world where the same instrument prices differently depending on which chain they're looking at. That's not a market. That's four separate markets we say are one."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "every-deployment-is-a-separate-product",
      children: "Every deployment is a separate product."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Four chains means four codebases, four audits, four oracle setups, four upgrade paths. When the yield rate updates or redemption logic changes, it has to land on all four.\nThis is where Push Chain does it differently."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chain is a universal Layer 1 blockchain designed from the ground up to solve the exact problem of liquidity fragmentation and siloed execution across all chains, both EVM and non-EVM."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "YieldVault deploys once, on Push Chain and instantly becomes universally accessible to all EVM and Non-EVM chains like Solana."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A wallet on Solana, Arbitrum, or Ethereum interacts with that single deployment directly from their own wallet, paying gas in their own token, in one signature. No wrapping, no bridging, no second deployment."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "And the contract doesn't see a bridge or a relayer as the sender. Push Chain maps every external wallet to a persistent account on Push Chain, so the contract sees a stable address that traces back to the origin wallet controlled by the user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "does-yieldvault-need-to-forgo-its-200m-ethereum-liquidity-after-porting-to-push-chain",
      children: "Does YieldVault need to forgo its $200M Ethereum Liquidity after porting to Push Chain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "No. Not at all."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is where most of you get it wrong. Migrating to the Push Universal Chain does not mean that you need to wind up your current deployments and liquidity strength. Your app or in this case YieldVault can choose to exist on Ethereum with all of its liquidity + coexist on Push Chain with a new universal liquidity pool which can now be accessed by users of Ethereum, Arbitrum, Robinhood, Base and even Non-Evm chains like Solana."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If you’re curious to know more about universal execution and a bridgeless cross-chain usage ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/ecosystem/",
        children: "experience universal apps"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/knowledge/",
        children: "read more about Push Chain"
      }), " here."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Dive straight into the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/docs/",
        children: "docs"
      }), " to know more about a single-deployment universal setup."]
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

/***/ 157873
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1ad6c5d45c91a9d2aa8712ea452947d9.webp");

/***/ },

/***/ 259956
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1ad6c5d45c91a9d2aa8712ea452947d9.webp");

/***/ },

/***/ 683410
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1233/blog/rwa-scale-across-multiple-chains","source":"@site/blog/2026-07-16-rwa-scale-across-multiple-chains/index.md","title":"What Happens When RWAs Scale Across Multiple Chains?","description":"Learn how RWA apps can become universally accessible to any user on any chain using Push Chain\'s Universal Execution Layer.","date":"2026-07-16T00:00:00.000Z","tags":[{"inline":true,"label":"Key Features","permalink":"/push-chain-website/pr-preview/pr-1233/blog/tags/key-features"},{"inline":true,"label":"Product","permalink":"/push-chain-website/pr-preview/pr-1233/blog/tags/product"}],"readingTime":1.94,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1233/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1233/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"rwa-scale-across-multiple-chains","title":"What Happens When RWAs Scale Across Multiple Chains?","authors":["push"],"image":"./cover-image.webp","description":"Learn how RWA apps can become universally accessible to any user on any chain using Push Chain\'s Universal Execution Layer.","text":"Learn how RWA apps can become universally accessible to any user on any chain using Push Chain\'s Universal Execution Layer.","tags":["Key Features","Product"],"twitterId":"2077756092994695420"},"unlisted":false,"prevItem":{"title":"Understanding the Crypto AI Agent Stack (Layer by Layer)","permalink":"/push-chain-website/pr-preview/pr-1233/blog/understanding-the-crypto-ai-agent-stack"},"nextItem":{"title":"Push Chain Completes Hacken Security Audit, $100,000 Bug Bounty Launching Soon","permalink":"/push-chain-website/pr-preview/pr-1233/blog/push-chain-completes-hacken-security-audit"}}');

/***/ }

}]);