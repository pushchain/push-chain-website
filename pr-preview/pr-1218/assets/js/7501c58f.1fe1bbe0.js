"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[71020],{

/***/ 622562
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_04_28_wtf_happened_to_chain_abstraction_index_md_750_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_04_28_wtf_happened_to_chain_abstraction_index_md_750_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893568);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(281981);


const frontMatter = {
	slug: 'wtf-happened-to-chain-abstraction',
	title: 'WTF Happened to Chain Abstraction?',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'In Web3, the narrative always ships before the product. The product ships after the community leaves.',
	text: 'In Web3, the narrative always ships before the product. The product ships after the community leaves.',
	tags: [
		'Featured',
		'Thought Leadership'
	],
	twitterId: '2049140764924616775'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(511108)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "The Promise of Chain Abstraction",
  "id": "the-promise-of-chain-abstraction",
  "level": 2
}, {
  "value": "Why Abstraction Is So Hard to Build",
  "id": "why-abstraction-is-so-hard-to-build",
  "level": 2
}, {
  "value": "The Intent Architecture Problem",
  "id": "the-intent-architecture-problem",
  "level": 2
}, {
  "value": "The UX Illusion",
  "id": "the-ux-illusion",
  "level": 2
}, {
  "value": "The Identity Problem: Omnichain Networks",
  "id": "the-identity-problem-omnichain-networks",
  "level": 2
}, {
  "value": "The Messaging Layer Problem: LayerZero",
  "id": "the-messaging-layer-problem-layerzero",
  "level": 2
}, {
  "value": "The Hope That Remains",
  "id": "the-hope-that-remains",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    hr: "hr",
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
        alt: "Cover Image of WTF Happened to Chain Abstraction?",
        src: (__webpack_require__(788455)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "In Web3, the narrative always ships before the product. The product ships after the community leaves."
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["No matter the bear or bull market over the last decade, one sentiment in crypto has always remained true: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "crypto is really hard to use."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      id: "1985438645130838068"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is the kind of feedback we still get today from the earliest degens and builders. Imagine the tyranny that hopeful newcomers and retail users had to face!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The sentiment wasn't always terrible.. There was an almost euphoric time when the entire industry thought that crypto was finally fixed."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "(Note the extra emphasis on \"almost\")"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-promise-of-chain-abstraction",
      children: "The Promise of Chain Abstraction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Sometime back in 2022, a new term was born — ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "\"Chain Abstraction\""
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The promise was simple: users would interact with apps in a way where they never even had to know they were using Web3 tech. The UX would be invisible. The chain would be invisible. Users would simply use crypto apps just like they use regular apps."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This framing was used everywhere: pitch decks, blog posts, conference keynotes, and even token launch announcements."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The idea felt so intuitive, so relatable, felt as if the dream of \"onboarding a billion users\" was finally turning into reality!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hundreds of millions in funding. Super competitive landscape. Everything was looking ideal."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "But today, over 90% of these projects are dead."
      }), " (Quite literally)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Chain abstraction graveyard",
        src: (__webpack_require__(246499)/* ["default"] */ .A) + "",
        width: "1950",
        height: "1090"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "What the fuck exactly happened to chain abstraction?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Who pulled the plug? Was the dream of uniting all chains just a hoax? Did VCs get rickrolled?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "\"In Web3, the narrative always ships before the product. The product ships after the community leaves.\""
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Chain abstraction was no different."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The idea was real. The problem was real. The money was very, very real. What wasn't real (at least not yet) was the part where any of it actually worked for the person on the other end of the screen."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Chain abstraction meme",
        src: (__webpack_require__(238850)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-abstraction-is-so-hard-to-build",
      children: "Why Abstraction Is So Hard to Build"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Because the underlying networks are financially incentivized to fight it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the early 2020s, the multi-chain world was sold as a feature. More chains meant more choice, more specialisation, more innovation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "What wasn't said loudly was that every new chain also meant a new token, a new ecosystem fund, and a new set of VCs with a financial interest in making sure they 10x their pot — regardless of whether anyone used the product."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hundreds of L1s and L2s. Each one with its own liquidity, its own gas token, its own community convinced that theirs was the true one."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "The industry is not fragmented by accident: it's fragmented because fragmentation is profitable."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-intent-architecture-problem",
      children: "The Intent Architecture Problem"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Most modern chain abstraction runs on something called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "intent-based architecture"
      }), ". The user says what they want (\"swap this token on Ethereum for that token on Solana\") and a third party called a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Solver"
      }), " figures out how to make it happen."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "What could be better than completely disappearing complexity from the user's screen, right? But the truth is, the complexity does not disappear — it simply moves a few steps away from the user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "To execute a cross-chain intent instantly, a solver must front their own capital on the destination chain and take on immense inventory risk."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Now tell me, who has the capital to maintain deep liquidity across 50 different, incompatible Layer 2s? Definitely not decentralized retail users. Only massive, institutional market makers (Wintermute, Jane Street, etc.)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Does this mean we just abstract away a decentralised bridge and replace it with a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "centralized cartel?"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When market volatility spikes, these centralized solvers widen their spreads to protect themselves, or they simply stop filling intents altogether. The user's so-called \"seamless\" abstracted transaction either fails silently or gets hit with massive slippage!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-ux-illusion",
      children: "The UX Illusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "From a psychological standpoint, hiding the network name doesn't solve the core anxiety of Web3."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "To achieve chain abstraction, the industry added multiple layers of middleware (Application → Permission/Intent → Solver → Settlement). This architectural bloat increases latency."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If an abstracted transaction takes 45 seconds to clear because a Solver is routing it through a complex cross-chain message protocol like LayerZero, the user still experiences the cognitive friction of waiting, wondering if their funds are lost in the ether."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Did we just paint over the rust instead of replacing the pipe?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-identity-problem-omnichain-networks",
      children: "The Identity Problem: Omnichain Networks"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Omnichain networks promise a seamless multi-chain world, but their architecture fundamentally breaks Web3's most critical component: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "persistent user identity."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Because they rely on proxy signers (like Threshold Signature Schemes) to execute cross-chain actions, the destination EVM never sees who actually initiated the transaction. It only sees \"who called it last\" — which is the bridge's proxy address."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["To understand why this is a major security vulnerability and a hindrance to adoption, imagine building a lending aggregator. If a user on Solana wants to route a deposit into Aave on Ethereum, they don't have a persistent Ethereum address. Even using Aave's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onBehalfOf"
      }), " parameter just shifts the problem, forcing the protocol to use the relayer/gateway contract as the beneficiary."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Now every single cross-chain user's Aave position risks getting pooled under the same proxy address!!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "There is no isolated health factor."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "There is no individual borrowing limit."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "One user's bad cross-chain trade could trigger liquidations for everyone sharing that proxy."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Which, by the way, is a big honeypot for attackers to ignore."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      id: "2048854107633631356"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For borrowing, it gets worse. A user with no Ethereum history cannot pre-approve credit delegation for the proxy. Because ZetaChain doesn't natively solve this, developers are forced to build incredibly complex, per-user proxy architectures just to patch the bleeding."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-messaging-layer-problem-layerzero",
      children: "The Messaging Layer Problem: LayerZero"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Protocols like LayerZero position their product as a universal messaging layer, allowing developers to build \"Omnichain Applications\" (OApps) that can seamlessly pass data and tokens across any network."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But behind the scenes, LayerZero's architecture heavily relies on off-chain Decentralized Verifier Networks (DVNs) and Executors. While marketed as modular and trust-minimized, the reality is that the underlying security is only as strong as the off-chain entities verifying the messages."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If a specific DVN configuration is compromised or colludes, the \"immutable endpoint\" on-chain is useless."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "The Contagion Risk:"
      }), " LayerZero connects everything to everything. If a catastrophic vulnerability is found in a low-tier connected chain, or in the messaging standard itself, the blast radius is instantly transmitted across the entire ecosystem."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      id: "2046567321494565365"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The official docs of LayerZero say \"LayerZero is an omnichain interoperability protocol.\""
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When your interop is message-based, every chain needs its own:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Contract deployment"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "DVN configuration"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Audit cycle"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["LayerZero's own docs pitch ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "lzSend()"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "lzReceive()"
      }), " functions as \"one framework, every chain.\" But \"one framework\" still means deploying and maintaining that framework N times across N chains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For a protocol promising omnichain composability, the developer experience scales ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "linearly"
      }), " with every chain you add. Which, to me, does not sound like chain abstraction — but more like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "managed fragmentation."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "the-hope-that-remains",
      children: "The Hope That Remains"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Even though things aren't looking great for chain abstraction, the hope is still not lost."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The kind of hope that's not just coming from the users but also from devs — and most importantly from projects who're fighting all the odds to build tech that abstracts every user experience and unites every chain. No strings attached."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "All we need is one final Push."
      })
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

/***/ 511108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-fafa80a0d84eef3cb451f2a06ad99215.webp");

/***/ },

/***/ 788455
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-fafa80a0d84eef3cb451f2a06ad99215.webp");

/***/ },

/***/ 246499
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-e7f5ba6b4bbc3e4351b2dd08f95d31d6.webp");

/***/ },

/***/ 238850
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-b9154179c7bb50a1dffb5cf762060f76.webp");

/***/ },

/***/ 893568
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1218/blog/wtf-happened-to-chain-abstraction","source":"@site/blog/2026-04-28-wtf-happened-to-chain-abstraction/index.md","title":"WTF Happened to Chain Abstraction?","description":"In Web3, the narrative always ships before the product. The product ships after the community leaves.","date":"2026-04-28T00:00:00.000Z","tags":[{"inline":true,"label":"Featured","permalink":"/push-chain-website/pr-preview/pr-1218/blog/tags/featured"},{"inline":true,"label":"Thought Leadership","permalink":"/push-chain-website/pr-preview/pr-1218/blog/tags/thought-leadership"}],"readingTime":4.14,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1218/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1218/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"wtf-happened-to-chain-abstraction","title":"WTF Happened to Chain Abstraction?","authors":["push"],"image":"./cover-image.webp","description":"In Web3, the narrative always ships before the product. The product ships after the community leaves.","text":"In Web3, the narrative always ships before the product. The product ships after the community leaves.","tags":["Featured","Thought Leadership"],"twitterId":"2049140764924616775"},"unlisted":false,"prevItem":{"title":"Introducing Chain Executor Accounts (CEAs)","permalink":"/push-chain-website/pr-preview/pr-1218/blog/introducing-chain-executor-account"},"nextItem":{"title":"Enable social login for your app in 4 steps","permalink":"/push-chain-website/pr-preview/pr-1218/blog/enable-social-logins-for-your-app"}}');

/***/ }

}]);