"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[29770],{

/***/ 396405
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_04_07_architecture_for_cross_chain_defi_apps_index_md_7ad_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_04_07_architecture_for_cross_chain_defi_apps_index_md_7ad_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(948457);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'architecture-for-cross-chain-defi-apps',
	title: 'The Sexiest Architecture for Cross Chain DeFi Apps',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: '“If you’re building any cross-chain defi apps or want to upgrade your current app to cross-chain. This article’s for you."',
	text: '“If you’re building any cross-chain defi apps or want to upgrade your current app to cross-chain. This article’s for you."',
	tags: [
		'Maker Monday',
		'Key Features'
	],
	twitterId: '2041168713467216216'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(581983)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "A very unsexy problem",
  "id": "a-very-unsexy-problem",
  "level": 3
}, {
  "value": "3 non-negotiable rules",
  "id": "3-non-negotiable-rules",
  "level": 3
}, {
  "value": "The architecture that actually works",
  "id": "the-architecture-that-actually-works",
  "level": 3
}, {
  "value": "What This Unlocks for Aggregator Design",
  "id": "what-this-unlocks-for-aggregator-design",
  "level": 3
}, {
  "value": "The Part worth sitting with",
  "id": "the-part-worth-sitting-with",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of The Sexiest Architecture for Cross Chain DeFi Apps",
        src: (__webpack_require__(407522)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If you’re building any cross-chain defi apps or want to upgrade your current app to cross-chain. This article’s for you."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We like to explain things with examples..."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["So let's say you’re building a lending aggregator that can read and route user deposits to the best yield across ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://aave.com/",
        children: "Aave"
      }), " on Ethereum, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://compound.finance/",
        children: "Compound Finance"
      }), " on Base, and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://app.marginfi.com/",
        children: "MarginFi"
      }), " on Solana, or any other protocol on any chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Even though the idea sounds great and it would definitely attract an incredible amount of volume. But one honest fact that can't be ignored is how hectic it would be for devs to handle the cross-chain plumbing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "a-very-unsexy-problem",
      children: "A very unsexy problem"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["AAVE and most mature DeFi protocols let you specify who a deposit is for. There's a parameter called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "onBehalfOf"
      }), ", so the caller and the beneficiary don't have to be the same address."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Sounds like it solves the cross-chain problem, right?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Not quite. Because ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "onBehalfOf"
      }), " just shifts the question, it doesn't answer it.\nWhen a user from Solana, or any other chain, wants to deposit into AAVE on Ethereum: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "what address do you actually put there?"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The user has no persistent Ethereum address. So you end up passing the bridge or relayer contract as the beneficiary. Which means every user's AAVE position lives under the same address, same health factor, same borrowing limit, same liquidation risk across all of them!!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["And for borrowing, it gets worse. AAVE's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "onBehalfOf"
      }), " for borrows requires something called credit delegation. The beneficiary address has to have pre-approved the caller on Ethereum, before any borrowing can happen. A user with no Ethereum history can't do that."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["So the real problem isn't ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "msg.sender"
      }), ".  It's that cross-chain users have no persistent, protocol-recognised address on the destination chain to begin with."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "No consistent address = no isolated position = no real aggregator."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is the identity problem in cross-chain DeFi. And it's what most interop protocols have actually failed to efficiently solve."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The destination chain has no way to distinguish users because EVM only sees who called it last and not the original initiator. Solutions like per-user proxy contracts on the destination chain or smart account patterns (which is essentially what Push Chain's UEA and CEA model does) exist, but they require the dApp to architect around this. And most cross-chain interop layers don't handle it natively."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Digs aside.\nLet’s actually acknowledge it and figure out a viable UNIVERSAL solution."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "3-non-negotiable-rules",
      children: "3 non-negotiable rules"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For a lending aggregator to work correctly across chains, 3 things must hold:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Each user must have an isolated, persistent identity on every target chain."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "That identity must be deterministically derivable."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "And most imp: The user must be able to act from anywhere. Their home chain, a different L1, L2, doesn’t matter!"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Most current approaches solve (3) at the cost of (1).\nYou do get semi-efficient cross-chain execution, but at the cost of identity collapse and extreme development overhead."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "the-architecture-that-actually-works",
      children: "The architecture that actually works"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The pattern that solves this mess cleanly is called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "CEA - Chain Execution Account"
      }), ": A smart contract deployed on each target chain, deterministically derived from the user’s identity on the coordination layer (i.e Push Chain)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Each CEA is derived from the parent UEA plus the target chain ID."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Unified Account Across Chains",
        src: (__webpack_require__(962258)/* ["default"] */ .A) + "",
        width: "1199",
        height: "477"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Same user, different chains - but always the same deterministic address."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If you’re new to the concept of UEA would recommend checking this quick guide on UEAs first. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://push.org/blog/what-are-universal-executor-accounts/",
          children: "What are UEAs?"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The flow for a deposit looks like this:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Deposit Flow",
        src: (__webpack_require__(92979)/* ["default"] */ .A) + "",
        width: "1200",
        height: "880"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Now AAVE sees a consistent, user-specific address every single time. The health factor is isolated. Borrow limits are per-user. Liquidations behave correctly."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "what-this-unlocks-for-aggregator-design",
      children: "What This Unlocks for Aggregator Design"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "With per-user CEAs in place, the aggregator contract on Push Chain can do things that were structurally impossible before."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Cross-chain collateral loops become straightforward:"
      }), "\nDeposit ETH on AAVE via CEA_ETH, borrow USDC against it, route the USDC back to the UEA, redeploy it on Base via CEA_BASE. Each hop preserves identity. No position bleed between users."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Unified health factor monitoring is now coherent:"
      }), "\nBecause each CEA maps 1:1 with a UEA, a smart contract on Push Chain can track CEA_ETH → AAVE position and CEA_ARB → Compound position for the same user and act on either."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A natural extension to this feature would also be:\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Automated liquidation protection:"
      }), " trigger a repayment to CEA_ETH when health drops below threshold"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Withdrawals"
      }), " route CEA → UEA via a funds transfer route, so capital can be swept back to the coordination layer and redeployed elsewhere without needing additional account infrastructure."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "the-part-worth-sitting-with",
      children: "The Part worth sitting with"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Bridges solve asset movement. Relayers solve message passing. But neither solves the question of who is acting on the destination chain. CEAs answer that question cleanly, and once that's answered, the rest of the aggregator design becomes significantly less complicated."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If you're building cross-chain DeFi infrastructure, this is the piece to get right first."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Want to find out more cool things about Push Chain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Check out our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/knowledge/",
        children: "knowledge base"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["And experience the power of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/ecosystem/",
        children: "UNIVERSAL APPS"
      }), " here."]
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

/***/ 581983
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-32e57a0d97f4aef1cf1c2193b856fba9.webp");

/***/ },

/***/ 407522
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-32e57a0d97f4aef1cf1c2193b856fba9.webp");

/***/ },

/***/ 962258
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-0621ab2859dbc5f66411a5c2d97e91aa.webp");

/***/ },

/***/ 92979
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-73d68dbf049f3e989076e60a960567d7.webp");

/***/ },

/***/ 948457
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1213/blog/architecture-for-cross-chain-defi-apps","source":"@site/blog/2026-04-07-architecture-for-cross-chain-defi-apps/index.md","title":"The Sexiest Architecture for Cross Chain DeFi Apps","description":"“If you’re building any cross-chain defi apps or want to upgrade your current app to cross-chain. This article’s for you.\\"","date":"2026-04-07T00:00:00.000Z","tags":[{"inline":true,"label":"Maker Monday","permalink":"/push-chain-website/pr-preview/pr-1213/blog/tags/maker-monday"},{"inline":true,"label":"Key Features","permalink":"/push-chain-website/pr-preview/pr-1213/blog/tags/key-features"}],"readingTime":2.96,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1213/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1213/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"architecture-for-cross-chain-defi-apps","title":"The Sexiest Architecture for Cross Chain DeFi Apps","authors":["push"],"image":"./cover-image.webp","description":"“If you’re building any cross-chain defi apps or want to upgrade your current app to cross-chain. This article’s for you.\\"","text":"“If you’re building any cross-chain defi apps or want to upgrade your current app to cross-chain. This article’s for you.\\"","tags":["Maker Monday","Key Features"],"twitterId":"2041168713467216216"},"unlisted":false,"prevItem":{"title":"Season 3 Early Access is Live!","permalink":"/push-chain-website/pr-preview/pr-1213/blog/season-3-early-access-is-live"},"nextItem":{"title":"Rethinking Wallet Security Beyond Bridges","permalink":"/push-chain-website/pr-preview/pr-1213/blog/rethinking-wallet-security"}}');

/***/ }

}]);