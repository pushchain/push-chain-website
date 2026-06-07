"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[98152],{

/***/ 399448
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_03_30_rethinking_wallet_security_index_md_852_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_03_30_rethinking_wallet_security_index_md_852_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15729);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'rethinking-wallet-security',
	title: 'Rethinking Wallet Security Beyond Bridges',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: '“Most people think wallet security is about private keys. Yet, most exploits happen when assets move between chains."',
	text: '“Most people think wallet security is about private keys. Yet, most exploits happen when assets move between chains."',
	tags: [
		'Maker Monday'
	],
	twitterId: '2038627103143522465'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(841282)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Wallet security is really “who can approve a transfer.”",
  "id": "wallet-security-is-really-who-can-approve-a-transfer",
  "level": 3
}, {
  "value": "What “Universal Assets” actually mean",
  "id": "what-universal-assets-actually-mean",
  "level": 3
}, {
  "value": "How assets are moved into Push:",
  "id": "how-assets-are-moved-into-push",
  "level": 3
}, {
  "value": "How assets leave Push Chain:",
  "id": "how-assets-leave-push-chain",
  "level": 3
}, {
  "value": "How does this change failure modes?",
  "id": "how-does-this-change-failure-modes",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of Rethinking Wallet Security Beyond Bridges",
        src: (__webpack_require__(949943)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Most people think wallet security is about private keys.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Yet, most exploits happen when assets move between chains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This Maker Monday explains how Push Chain handles asset movement across chains without bridges, and why that changes the security model completely. Let’s dive in!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Usual problem with bridges"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here’s how a bridge works & where it exploits the assets:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["1️⃣ you lock assets on chain A", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "2️⃣ a small set of signers controls a pool", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "3️⃣ a wrapped version appears on chain B"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If that signer set is compromised, the wrapped assets become useless.\nThat’s not a UX issue,  that’s a design issue."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push doesn’t aim to fix the bridge’s security.\nWe avoid needing them in the first place."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If asset movement depends on a small signer set, security will always be fragile."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "wallet-security-is-really-who-can-approve-a-transfer",
      children: "Wallet security is really “who can approve a transfer.”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["On Push, assets are controlled using MPC (Multi-Party Computation), built with Silence Labs. Read more about the integration ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/push-chain-silence-labs/",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here’s the simplest way to think about it:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "There is no single private key"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The “key” is split across multiple validators"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "No validator can move funds alone"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A minimum number of signers must agree every time"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Nothing gets signed unless the network agrees.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "This isn’t about hiding keys better.\nIt’s about removing unilateral control."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Even if one validator is hacked, nothing moves."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "what-universal-assets-actually-mean",
      children: "What “Universal Assets” actually mean"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Universal Assets let you use assets from other chains directly on Push."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Examples:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "ETH → pETH", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "SOL → pSOL", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "USDC → pUSDC"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["These are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "not wrapped tokens"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "10 ETH locked → 10 pETH minted"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "10 pETH burned → 10 ETH released"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Same amount. Same value. Always 1:1."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["No pools.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "No peg maintenance.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "No oracle tricks."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "There’s no scenario where users hold an unbacked asset."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "how-assets-are-moved-into-push",
      children: "How assets are moved into Push:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let’s say you’re a Solana user with SOL!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here’s what actually happens:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "You sign once on Solana"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Your SOL is locked via a Universal Gateway"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Funds move into an MPC-controlled vault"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Validators verify:"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: ["→ Transaction happened", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "→ Amount is correct", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "→ Funds are secured"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Push mints the same amount of pSOL to your account"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["That’s it.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "No second transaction.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "No bridge UI."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["No extra claiming step.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Assets are secured before they’re usable."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here is a flow diagram showing how a native asset moves from an external chain to the Push Chain and back, without bridges, wrapped tokens, or trusted relayers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Asset Movement Flow Diagram",
        src: (__webpack_require__(385619)/* ["default"] */ .A) + "",
        width: "1600",
        height: "1600"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "how-assets-leave-push-chain",
      children: "How assets leave Push Chain:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Leaving Push is the reverse, and this is where security really shows."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "You burn pSOL on Push"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A burn proof is emitted"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Validators independently verify it"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A threshold of validators co-sign a release"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Your original SOL is sent back to Solana"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Key details:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Validators never “send” funds directly"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "They only produce partial signatures"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The MPC vault releases exactly what was burned"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["You can’t release more than you burned.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "The math won’t allow it."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "There’s no bridge pool to drain ever."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Threshold signing doesn’t run inside the validator itself."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Validators handle consensus and verification"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A separate MPC signer (sidecar) handles cryptography"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Even if validator logic fails, keys remain protected"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This separation limits the blast radius.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Breaking consensus logic doesn’t give you access to funds."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "how-does-this-change-failure-modes",
      children: "How does this change failure modes?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Here’s the real difference compared to bridges:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "If a bridge breaks → wrapped assets break", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "If Push halts → assets stay locked safely"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Burn proofs still exist. Funds don’t disappear.\nThey just wait."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Takeaway:"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Most systems assume bridges are unavoidable.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Push assumes asset movement itself must be constrained."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "That’s the shift:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "from trusting signers"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "to enforce rules at the protocol level"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Wallet security isn’t about better warnings.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "It’s about making bad outcomes impossible."]
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

/***/ 841282
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-27f4a4782a380008e928ba91a296a3f3.webp");

/***/ },

/***/ 949943
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-27f4a4782a380008e928ba91a296a3f3.webp");

/***/ },

/***/ 385619
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-412a5b68bdcb796ed7efde7086e8938e.webp");

/***/ },

/***/ 15729
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1227/blog/rethinking-wallet-security","source":"@site/blog/2026-03-30-rethinking-wallet-security/index.md","title":"Rethinking Wallet Security Beyond Bridges","description":"“Most people think wallet security is about private keys. Yet, most exploits happen when assets move between chains.\\"","date":"2026-03-30T00:00:00.000Z","tags":[{"inline":true,"label":"Maker Monday","permalink":"/push-chain-website/pr-preview/pr-1227/blog/tags/maker-monday"}],"readingTime":2.11,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1227/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1227/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"rethinking-wallet-security","title":"Rethinking Wallet Security Beyond Bridges","authors":["push"],"image":"./cover-image.webp","description":"“Most people think wallet security is about private keys. Yet, most exploits happen when assets move between chains.\\"","text":"“Most people think wallet security is about private keys. Yet, most exploits happen when assets move between chains.\\"","tags":["Maker Monday"],"twitterId":"2038627103143522465"},"unlisted":false,"prevItem":{"title":"The Sexiest Architecture for Cross Chain DeFi Apps","permalink":"/push-chain-website/pr-preview/pr-1227/blog/architecture-for-cross-chain-defi-apps"},"nextItem":{"title":"How Push Chain Centralizes Rules Without Centralizing Risk","permalink":"/push-chain-website/pr-preview/pr-1227/blog/how-push-chain-centralizes-rules-without-centralizing-risk"}}');

/***/ }

}]);