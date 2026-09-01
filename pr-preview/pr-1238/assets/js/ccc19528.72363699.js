"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[96073],{

/***/ 990729
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_03_02_pay_gas_fees_with_any_token_from_any_chain_index_md_ccc_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_03_02_pay_gas_fees_with_any_token_from_any_chain_index_md_ccc_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(688994);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'pay-gas-fees-with-any-token-from-any-chain',
	title: 'How to Pay Gas Fees With Any Token From Any Chain?',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Universal Transactions now support paying gas fees with ANY token on your native chain — one atomic call for funds, logic, and gas.',
	text: 'Universal Transactions just got a huge upgrade. You can now pay gas fees with ANY token on your native chain.',
	tags: [
		'Maker Monday'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(900715)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What makes this upgrade BIG?",
  "id": "what-makes-this-upgrade-big",
  "level": 2
}, {
  "value": "Behind the scenes",
  "id": "behind-the-scenes",
  "level": 2
}, {
  "value": "Fine-grained controls",
  "id": "fine-grained-controls",
  "level": 2
}, {
  "value": "Example",
  "id": "example",
  "level": 2
}, {
  "value": "Universal Transactions keep getting stronger.",
  "id": "universal-transactions-keep-getting-stronger",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
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
        alt: "Cover Image of How to Pay Gas Fees With Any Token From Any Chain",
        src: (__webpack_require__(102642)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Universal Transactions just got a huge upgrade ⚡️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You can now pay gas fees with ANY token on your native chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This means in one transaction, you can:\n→ Send funds\n→ Execute logic\n→ Choose how to pay gas"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "All in one shot!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "payGasWith overview diagram",
        src: (__webpack_require__(458511)/* ["default"] */ .A) + "",
        width: "1200",
        height: "451"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-makes-this-upgrade-big",
      children: "What makes this upgrade BIG?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Universal transactions can originate from ANY chain (EVM & non-EVM).\nNormally, users must hold the native gas token of that origin chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "payGasWith()"
      }), " upgrade, the fee path becomes universal too."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This means:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Devs don't have to rely on users to keep native gas."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Users don't necessarily have to know how their chain's fee system works."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "behind-the-scenes",
      children: "Behind the scenes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chain:\n→ Takes the token you specify (USDT / USDC / anything)\n→ Performs the necessary swap\n→ Secures the gas\n→ Executes + settles the universal txn"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "All packaged inside one atomic call, fully abstracting native gas."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "fine-grained-controls",
      children: "Fine-grained controls"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "slippageBps"
        }), ": max allowed slippage on the ERC-20 → gas swap (100 = 1%)."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "minAmountOut"
        }), ": the minimum acceptable output (in wei). If the swap can't meet this, the transaction reverts."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Perfect for guaranteeing predictable fee execution."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "example",
      children: "Example"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A universal prediction market with users from Base, Ethereum, and BNBChain\ncan all interact with the same liquidity pool."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "✅ Base users → pay fees in Base USDT\n✅ ETH users → pay in DAI\n✅ BNB users → pay in BUSD"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "or through their native gas tokens. All supported in one pipeline."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "universal-transactions-keep-getting-stronger",
      children: "Universal Transactions keep getting stronger."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Gas abstraction + universal fee payment unlocks a truly chain-agnostic experience."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Dive Deeper:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://npmjs.com/package/@pushchain/core?activeTab=readme",
          children: "SDK v3.0.8"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://push.org/docs/chain/build/send-universal-transaction/",
          children: "Docs"
        })
      }), "\n"]
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

/***/ 900715
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7317dba16ba313f54d69a626195595ca.webp");

/***/ },

/***/ 102642
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7317dba16ba313f54d69a626195595ca.webp");

/***/ },

/***/ 458511
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image1-20ab0999d6459708bd16a71c32f3913e.webp");

/***/ },

/***/ 688994
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1238/blog/pay-gas-fees-with-any-token-from-any-chain","source":"@site/blog/2026-03-02-pay-gas-fees-with-any-token-from-any-chain/index.md","title":"How to Pay Gas Fees With Any Token From Any Chain?","description":"Universal Transactions now support paying gas fees with ANY token on your native chain — one atomic call for funds, logic, and gas.","date":"2026-03-02T00:00:00.000Z","tags":[{"inline":true,"label":"Maker Monday","permalink":"/push-chain-website/pr-preview/pr-1238/blog/tags/maker-monday"}],"readingTime":0.93,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1238/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1238/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"pay-gas-fees-with-any-token-from-any-chain","title":"How to Pay Gas Fees With Any Token From Any Chain?","authors":["push"],"image":"./cover-image.webp","description":"Universal Transactions now support paying gas fees with ANY token on your native chain — one atomic call for funds, logic, and gas.","text":"Universal Transactions just got a huge upgrade. You can now pay gas fees with ANY token on your native chain.","tags":["Maker Monday"]},"unlisted":false,"prevItem":{"title":"What is the liquidity wedge trap? How to avoid it?","permalink":"/push-chain-website/pr-preview/pr-1238/blog/what-is-the-liquidity-wedge-trap"},"nextItem":{"title":"Understanding Push Chain’s Validator Stack","permalink":"/push-chain-website/pr-preview/pr-1238/blog/understanding-push-chain-validator-stack"}}');

/***/ }

}]);