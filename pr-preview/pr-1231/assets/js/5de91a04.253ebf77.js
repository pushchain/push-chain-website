"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[97824],{

/***/ 370979
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_03_19_how_pusd_is_minted_index_md_5de_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_03_19_how_pusd_is_minted_index_md_5de_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(724363);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'how-is-pusd-minted',
	title: 'How is pUSD (Universal Stablecoin) minted',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'A universal stablecoin is a dollar you can use on one chain while the actual asset stays on another. Here\'s how it\'s minted',
	text: 'A universal stablecoin is a dollar you can use on one chain while the actual asset stays on another. Here\'s how it\'s minted',
	tags: [
		'Key Features',
		'Product',
		'Technical'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(875685)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What is a Universal Stablecoin?",
  "id": "what-is-a-universal-stablecoin",
  "level": 2
}, {
  "value": "Minting 1 pUSD",
  "id": "minting-1-pusd",
  "level": 2
}, {
  "value": "Why does MPC vault matter here?",
  "id": "why-does-mpc-vault-matter-here",
  "level": 2
}, {
  "value": "How Push Chain verifies minting",
  "id": "how-push-chain-verifies-minting",
  "level": 2
}, {
  "value": "Withdrawing pUSD back to your chain&#39;s native stablecoin",
  "id": "withdrawing-pusd-back-to-your-chains-native-stablecoin",
  "level": 2
}, {
  "value": "What does the user get?",
  "id": "what-does-the-user-get",
  "level": 2
}, {
  "value": "Why pUSD matters to builders",
  "id": "why-pusd-matters-to-builders",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
        alt: "Cover Image of How Push Rethinks Stablecoins",
        src: (__webpack_require__(81108)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-is-a-universal-stablecoin",
      children: "What is a Universal Stablecoin?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A universal stablecoin is a dollar you can use on one chain while the actual asset stays on another."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You don’t bridge it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You don’t wrap it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You don’t move liquidity around."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Instead, the original stablecoin is locked on its source chain, and Push Chain mints a 1:1 representation (pUSD) that you can use immediately."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "From a user’s perspective, it behaves like any other stablecoin.\nFrom the system’s perspective, nothing actually “moves”."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That distinction matters because it’s what lets Push avoid bridges without giving up security."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chain doesn’t move dollars across chains."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It mirrors ownership."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The diagram here shows how a user from any EVM / non-EVM chain, like Solana here, can mint pUSD from USDC in just a couple of clicks:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Seamless cross-chain asset transfer flow",
        src: (__webpack_require__(680476)/* ["default"] */ .A) + "",
        width: "1200",
        height: "1200"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Lock on the source → mint on Push → burn on Push → release on source."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "No wrapping"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "No liquidity hops"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "No extra “claim your token” step"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "minting-1-pusd",
      children: "Minting 1 pUSD"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Example: A user has USDC on Ethereum and wants to use it on an app built on Push."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here, the user just signs one txn on Ethereum."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Under the hood:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The Universal Gateway receives the USDC"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Funds are transferred into an MPC TSS vault"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A lock event is emitted on the source chain"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The asset never left Ethereum."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-does-mpc-vault-matter-here",
      children: "Why does MPC vault matter here?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It isn’t a multisig that anyone controls"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The signing key is split across validators"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "No single party can move funds"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Only threshold consensus can execute the txn"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is what makes the mint secure."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-push-chain-verifies-minting",
      children: "How Push Chain verifies minting"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Universal Validators watch the source chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "They independently verify:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The lock actually happened"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Funds are in the MPC vault"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The user signature is valid"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Amounts match exactly"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Once enough no. of validators agree, Push Chain is told:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "“This lock is real.”"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That’s the only condition for minting."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push mints exactly the locked amount of pUSD."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["It’s credited to the user’s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/what-are-universal-executor-accounts/",
        children: "UEA"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Deterministically derived from their source address"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Same identity, just different execution layer"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "From the user’s POV:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "One signature"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "pUSD usable immediately"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "No follow up txn"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "pUSD supply isn’t market-managed. It’s state-managed."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "withdrawing-pusd-back-to-your-chains-native-stablecoin",
      children: "Withdrawing pUSD back to your chain's native stablecoin"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Nothing is released unless something is burned."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When a user wants to withdraw a required amount:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Exact number of pUSD is burned on Push Chain"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A burn proof is emitted"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Validators verify the burn"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Only after threshold consensus:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Validators generate partial signatures"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "These combine to authorize the MPC vault"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The vault releases exactly the burned amount"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Burn 100 pUSD → release 100 USDC on the source chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-does-the-user-get",
      children: "What does the user get?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The asset lands:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "On the original chain"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "At the original address"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "As the original token"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Simple cross-chain mint and burn flow",
        src: (__webpack_require__(149118)/* ["default"] */ .A) + "",
        width: "1200",
        height: "1200"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-pusd-matters-to-builders",
      children: "Why pUSD matters to builders"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This design quietly removes a lot of complexity:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "No bridge liquidity assumptions"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "No fragmented balances"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "No identity remapping"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You can build apps assuming:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "one user, one balance, one execution surface,"
      }), " even if assets live on external chains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["To know more about pUSD - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/how-push-rethinks-stablecoins/",
        children: "read our quick thesis"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We’re about to launch pUSD very soon. Join our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/how-push-rethinks-stablecoins/",
        children: "Discord"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://t.me/epnsproject",
        children: "Telegram"
      }), " to be the first to know when it’s live!"]
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

/***/ 875685
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5959591de405502deb9f4e40cc3d6119.webp");

/***/ },

/***/ 81108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-5959591de405502deb9f4e40cc3d6119.webp");

/***/ },

/***/ 680476
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-2c55de89fb67bc64842ea78638b3de12.webp");

/***/ },

/***/ 149118
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-3b57412b21623865a206bb329fb2b24f.webp");

/***/ },

/***/ 724363
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1231/blog/how-is-pusd-minted","source":"@site/blog/2026-03-19-how-pusd-is-minted/index.md","title":"How is pUSD (Universal Stablecoin) minted","description":"A universal stablecoin is a dollar you can use on one chain while the actual asset stays on another. Here\'s how it\'s minted","date":"2026-03-19T00:00:00.000Z","tags":[{"inline":true,"label":"Key Features","permalink":"/push-chain-website/pr-preview/pr-1231/blog/tags/key-features"},{"inline":true,"label":"Product","permalink":"/push-chain-website/pr-preview/pr-1231/blog/tags/product"},{"inline":true,"label":"Technical","permalink":"/push-chain-website/pr-preview/pr-1231/blog/tags/technical"}],"readingTime":1.91,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1231/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1231/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"how-is-pusd-minted","title":"How is pUSD (Universal Stablecoin) minted","authors":["push"],"image":"./cover-image.webp","description":"A universal stablecoin is a dollar you can use on one chain while the actual asset stays on another. Here\'s how it\'s minted","text":"A universal stablecoin is a dollar you can use on one chain while the actual asset stays on another. Here\'s how it\'s minted","tags":["Key Features","Product","Technical"]},"unlisted":false,"prevItem":{"title":"Why execution doesn’t decide global state on Push Chain","permalink":"/push-chain-website/pr-preview/pr-1231/blog/why-execution-doesn\'t-decide-global-state"},"nextItem":{"title":"How Push Rethinks Stablecoins","permalink":"/push-chain-website/pr-preview/pr-1231/blog/how-push-rethinks-stablecoins"}}');

/***/ }

}]);