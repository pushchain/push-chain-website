"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[4434],{

/***/ 834504
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_05_07_introducing_chain_executor_account_index_md_f02_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_05_07_introducing_chain_executor_account_index_md_f02_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(281981);


const frontMatter = {
	slug: 'introducing-chain-executor-account',
	title: 'Introducing Chain Executor Accounts (CEAs)',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.',
	text: 'This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.',
	tags: [
		'Technical',
		'Deep Dives'
	],
	twitterId: '2052399062838923372'
};
const contentTitle = 'Why do we need CEAs?';

const assets = {
"image": (__webpack_require__(107738)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Identity Collapse:",
  "id": "identity-collapse",
  "level": 2
}, {
  "value": "Shared custody risk",
  "id": "shared-custody-risk",
  "level": 2
}, {
  "value": "Deterministic Mapping",
  "id": "deterministic-mapping",
  "level": 2
}, {
  "value": "Deterministic derivation",
  "id": "deterministic-derivation",
  "level": 2
}, {
  "value": "Strict access control",
  "id": "strict-access-control",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
        alt: "Cover Image of Introducing Chain Executor Accounts (CEAs)",
        src: (__webpack_require__(378947)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is one of our biggest security upgrades to date. Must read if you're a cross-chain user or a dev."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "CEAs are per-user smart accounts that live on external chains and act on your behalf while keeping your funds and unified crosschain identity separate from everyone else."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Every cross-chain protocol routes your transaction through a shared gateway address.CEAs fix that by giving every user their own isolated smart account on every external chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let's discuss about the darkest cross-chain secrets you’re probably unaware of."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Open any cross-chain protocol today. Bridge some tokens. Execute a swap. Deposit into a lending pool on the destination chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Now check the block explorer. Who made that deposit?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It's not you!\nIt's either a gateway contract or any other intermediary relayer contract that deposits on your behalf."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "And not just you, all the other users are mostly sharing the same gateway address for such actions. Using the same pipeline."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This creates two problems, both serious enough to keep you up at night."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "identity-collapse",
      children: "Identity Collapse:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The target protocol can't distinguish between users. Your lending position, your collateral, and all are attributed to a shared gateway address."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "msg.sender = 0xGateway"
      }), " for everyone."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "shared-custody-risk",
      children: "Shared custody risk"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Every user's funds sit under one contract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A single exploit doesn't drain one user; it would drain everyone who had pooled their funds in the gateway."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "First Image of Introducing Chain Executor Accounts (CEAs)",
        src: (__webpack_require__(493927)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "how-do-ceas-work",
      children: "How do CEAs work?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A Chain Executor Account is an isolated smart account deployed on an external chain, derived deterministically from a user's UEA on Push Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.admonition, {
      title: "note",
      type: "success",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["A ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://push.org/blog/what-are-universal-executor-accounts/",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "Universal Executor Account (UEA)"
          })
        }), " is a deterministic smart account on Push Chain, derived from an origin wallet (chain namespace + chain id + owner), that serves as the execution account for that origin wallet on Push Chain."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.admonition, {
      title: "Common Misconceptions",
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["• A UEA is not a new wallet on the origin chain ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• No private keys are created or stored on Push Chain ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• UEA addresses are deterministic, but the smart account is deployed lazily on first use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In plain English: instead of everyone sharing one gateway address on Ethereum, every user gets their own contract. Bob gets Bob's CEA. Alice gets Alice's CEA. The gateway routes to them without touching the target protocol directly."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Second Image of Introducing Chain Executor Accounts (CEAs)",
        src: (__webpack_require__(646022)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here's how the execution actually flows"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Third Image of Introducing Chain Executor Accounts (CEAs)",
        src: (__webpack_require__(660865)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: ""
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "CEA’s objective is not only to patch the identity problem but make unified onchain identities a first-class architectural primitive."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "how-does-cea-impact-your-security",
      children: "How does CEA impact your security?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Identity is half the story. The other half is what happens when something goes wrong."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Without CEA, the gateway holds every user's funds, approvals, and positions under one address. It's a single point of failure with maximum blast radius. One vulnerability in the gateway contract and every user who ever routed through it loses everything."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "for instance:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      id: "2048854107633631356"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We've seen this movie before. Bridge exploits have drained over $2.5 billion since 2021. The root cause is almost always the same: shared custody."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "CEA breaks the blast radius at the account level."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "deterministic-mapping",
      children: "Deterministic Mapping"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "One UEA, one CEA per chain. The mapping is 1:1 and deterministic. If you have UEAs derived from wallets on Ethereum, Solana, and Base, you get three CEAs, one on each respective external chain. No ambiguity, no collisions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Fund withdrawal. Assets locked in a CEA can always be moved back to the user's UEA on Push Chain. No funds get stuck."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "deterministic-derivation",
      children: "Deterministic derivation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Each CEA is derived from its underlying UEA. One UEA maps to exactly one CEA per external chain. You can't deploy a counterfeit CEA that claims to be Bob's since the derivation is verifiable."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "strict-access-control",
      children: "Strict access control"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "CEA.execute()"
      }), " only accepts calls from the Universal Gateway on that chain. Nobody else can trigger it. Not an EOA, not another contract, not another CEA. The gateway, in turn, only routes to a CEA after resolving which UEA initiated the call. Bob's UEA can only trigger Bob's CEA. The resolution is deterministic and verifiable on-chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "With CEA, a compromised account means one user is affected and not the entire user base."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Token approvals are scoped per-CEA. Fund isolation is structural. There's no shared pool to drain because there's no shared pool!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "One wallet. One signature. Universal identity preservation. Isolated risk."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/docs/chain/build/understanding-universal-transactions/#chain-executor-account-cea",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Refer this integration guide"
        })
      }), " to make your app universally accessible and secure in hours not months."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Got any Questions? Reach out to us via our  ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://t.me/+SFD4qD1JIF1jNTk1",
        children: "Dev Telegram Chat"
      }), " or community ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushchain",
        children: "Discord"
      }), "."]
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

/***/ 281981
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395293);
/* harmony import */ var react_tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71139);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(309751);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61530);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(474848);
const BlogTweet=_ref=>{let id=_ref.id;const _useColorMode=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useColorMode */ .G)(),colorMode=_useColorMode.colorMode;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TweetWrapper,{isDark:colorMode==='dark',children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:colorMode,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tweet__WEBPACK_IMPORTED_MODULE_2__/* .Tweet */ .Y,{id:id})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogTweet);const TweetWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({displayName:"BlogTweet__TweetWrapper",componentId:"sc-19ovpm5-0"})(["border:1px solid var(--ifm-color-tweet-border);border-radius:12px;overflow:hidden;position:relative;min-height:200px;max-width:550px;margin:1.5rem 0;transition:all 0.3s ease;svg{display:inline-block;fill:currentColor;width:1.25em;height:1.25em;vertical-align:text-bottom;}.verified_node_modules-react-tweet-dist-twitter-theme-icons-icons-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.twitterIcon_node_modules-react-tweet-dist-twitter-theme-tweet-header-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.likeIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{fill:var(--ifm-color-tweet-like);width:20px;height:20px;}.replyIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module,.copyIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.infoIcon_node_modules-react-tweet-dist-twitter-theme-tweet-info-module{fill:var(--ifm-color-tweet-icon);width:16px;height:16px;}.reply_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{display:none;}.info_node_modules-react-tweet-dist-twitter-theme-tweet-info-module{font-size:0.75em;}.actions_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{margin-top:10px;border-top:1px solid #ffffff33;justify-content:end;}.copy_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{margin-right:0px;}.link_node_modules-react-tweet-dist-twitter-theme-tweet-replies-module{border:1px solid #ffffff33;&:hover{border-color:var(--ifm-link-color);}}&:hover{border-color:var(--ifm-link-color);transform:translateY(-2px);box-shadow:0 8px 25px rgba(170,57,188,0.15);}@media ","{max-width:100%;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileL);

/***/ },

/***/ 107738
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ab35d52d60c69631162fb1d4ed340828.webp");

/***/ },

/***/ 378947
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-ab35d52d60c69631162fb1d4ed340828.webp");

/***/ },

/***/ 493927
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-2d3e7651901ce9015455b531922c64ac.webp");

/***/ },

/***/ 646022
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-92fa1dfe370d219279764fe51a2c2a83.webp");

/***/ },

/***/ 660865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-b45fbd02987d93c9bb05bb1650be644d.webp");

/***/ },

/***/ 442538
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1223/blog/introducing-chain-executor-account","source":"@site/blog/2026-05-07-introducing-chain-executor-account/index.md","title":"Introducing Chain Executor Accounts (CEAs)","description":"This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.","date":"2026-05-07T00:00:00.000Z","tags":[{"inline":true,"label":"Technical","permalink":"/push-chain-website/pr-preview/pr-1223/blog/tags/technical"},{"inline":true,"label":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1223/blog/tags/deep-dives"}],"readingTime":2.72,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1223/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1223/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"introducing-chain-executor-account","title":"Introducing Chain Executor Accounts (CEAs)","authors":["push"],"image":"./cover-image.webp","description":"This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.","text":"This is one of our biggest security upgrades to date. Must read if you\'re a cross-chain user or a dev.","tags":["Technical","Deep Dives"],"twitterId":"2052399062838923372"},"unlisted":false,"prevItem":{"title":"Introducing Multihop on Push Chain","permalink":"/push-chain-website/pr-preview/pr-1223/blog/introducing-multihop-on-push-chain"},"nextItem":{"title":"WTF Happened to Chain Abstraction?","permalink":"/push-chain-website/pr-preview/pr-1223/blog/wtf-happened-to-chain-abstraction"}}');

/***/ }

}]);