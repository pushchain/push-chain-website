"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[63152],{

/***/ 228529
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_02_24_push_chain_human_tech_index_md_a55_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_02_24_push_chain_human_tech_index_md_a55_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(557084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'push-chain-human-tech',
	title: 'Push Chain × human.tech: Enabling Social Login–Native, Self-Custodial Wallets',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Push Chain × human.tech: Enabling Social Login–Native, Self-Custodial Wallets',
	text: 'Push Chain has integrated human.tech’s Wallet as a Protocol (WaaP) infrastructure to enable social login based, self-custodial wallet access directly within the Push Chain ecosystem',
	tags: [
		'Featured',
		'Partnerships',
		'Product'
	],
	twitterId: '2026296963877269847'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(197203)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Architectural overview",
  "id": "architectural-overview",
  "level": 3
}, {
  "value": "Wallet creation and key generation flow",
  "id": "wallet-creation-and-key-generation-flow",
  "level": 3
}, {
  "value": "Distributed key management and signing model",
  "id": "distributed-key-management-and-signing-model",
  "level": 3
}, {
  "value": "Integration with Push Chain’s wallet and execution pipeline",
  "id": "integration-with-push-chains-wallet-and-execution-pipeline",
  "level": 3
}, {
  "value": "Developer implications",
  "id": "developer-implications",
  "level": 3
}, {
  "value": "Trust model and self-custody guarantees",
  "id": "trust-model-and-self-custody-guarantees",
  "level": 3
}, {
  "value": "Enabling accessible self-custodial infrastructure",
  "id": "enabling-accessible-self-custodial-infrastructure",
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
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Push Chain × human.tech: Enabling Social Login–Native, Self-Custodial Wallets",
        src: (__webpack_require__(694152)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Push Chain has integrated ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://human.tech/",
        children: "human.tech’s"
      }), " Wallet as a Protocol (WaaP) infrastructure to enable social login based, self-custodial wallet access directly within the Push Chain ecosystem."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This integration introduces embedded wallet infrastructure that allows users to authenticate using familiar methods such as email and social login, while retaining full cryptographic ownership of their wallets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "human.tech provides the authentication, key management, and signing layers, while Push Chain continues to manage wallet orchestration, transaction construction, and network execution."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "architectural-overview",
      children: "Architectural overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This integration establishes a clear separation between authentication, signing, and execution responsibilities."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "human.tech provides:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "User authentication via email, social login"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Human Key generation and distributed key management"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Secure key share storage using Trusted Execution Environments (TEE)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "MPC-based transaction authorization and signing"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chain provides:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Wallet orchestration and account lifecycle management"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Transaction construction and formatting"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Transaction submission and execution on Push Chain"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Account state and network interaction"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This separation ensures that human.tech handles identity and cryptographic authorization, while Push Chain remains fully responsible for transaction execution and settlement."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "wallet-creation-and-key-generation-flow",
      children: "Wallet creation and key generation flow"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "With human.tech integrated, wallet provisioning becomes an infrastructure-level process triggered during authentication."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When a user authenticates:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "human.tech verifies the user’s authentication credentials"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A key is generated as the root cryptographic identity"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The private key is split into distributed cryptographic shares"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "One share is secured within human.tech’s TEE-protected infrastructure"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The corresponding public key is used to derive a Push Chain wallet address"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The wallet is registered and becomes immediately usable within Push Chain"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This eliminates the need for seed phrases while preserving self custodial ownership."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "distributed-key-management-and-signing-model",
      children: "Distributed key management and signing model"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "human.tech uses a distributed key architecture based on secure multi-party cryptographic protocols."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Private keys are never reconstructed as a single entity. Instead, signing operations are performed collaboratively using independent key shares."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When a transaction is initiated:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Push Chain constructs the transaction payload"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The unsigned transaction is passed to human.tech for authorization"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "human.tech performs 2PC-based signing using distributed key shares"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "The signed transaction is returned to Push Chain"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Push Chain submits the transaction to the network for execution"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This model ensures:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Private keys are never exposed to applications, users, or external systems"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "human.tech cannot independently control user funds"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Push Chain cannot access or reconstruct user private keys"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Users retain cryptographic ownership of their wallet"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This preserves the non-custodial trust model while enabling embedded wallet infrastructure."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "integration-with-push-chains-wallet-and-execution-pipeline",
      children: "Integration with Push Chain’s wallet and execution pipeline"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "human.tech operates as a cryptographic authorization layer beneath Push Chain’s existing wallet infrastructure."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chain continues to manage wallet state, transaction construction, execution and settlement, and network interaction."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "human.tech exclusively handles authentication, key generation and management, and transaction authorization and signing."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This ensures that Push Chain’s execution model remains unchanged while improving accessibility and onboarding."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "developer-implications",
      children: "Developer implications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For devs building on Push Chain, wallet creation and authentication are now handled at the infrastructure layer."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This enables:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Automatic wallet creation during user authentication"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Removal of seed phrase onboarding requirements"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Embedded self-custodial wallets within applications"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Elimination of external wallet dependencies"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Secure transaction signing without direct key management"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Developers can focus on application logic while wallet infrastructure operates transparently."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "trust-model-and-self-custody-guarantees",
      children: "Trust model and self-custody guarantees"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This integration preserves Push Chain’s self-custodial security model."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Key properties include:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Key shares are distributed across independent secure environments"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Signing requires cryptographic coordination, not unilateral control"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Neither human.tech nor Push Chain can independently control user wallets"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Users retain full cryptographic ownership and control over their assets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "enabling-accessible-self-custodial-infrastructure",
      children: "Enabling accessible self-custodial infrastructure"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "By integrating human.tech’s Wallet-as-a-Protocol infrastructure, Push Chain moves wallet authentication, key management, and signing into the protocol layer."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Users can authenticate using familiar login methods while securely interacting with Push Chain through self custodial wallets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This reduces onboarding friction without compromising security, ownership, or execution integrity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chain continues to expand infrastructure that makes secure, self-custodial access more accessible to both users and developers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Try it out here:"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/ecosystem",
        children: "https://push.org/ecosystem"
      })]
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

/***/ 197203
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1db4a4aa914d7b8fe0830936c4c25e2a.webp");

/***/ },

/***/ 694152
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-1db4a4aa914d7b8fe0830936c4c25e2a.webp");

/***/ },

/***/ 557084
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1227/blog/push-chain-human-tech","source":"@site/blog/2026-02-24-push-chain-human-tech/index.md","title":"Push Chain × human.tech: Enabling Social Login–Native, Self-Custodial Wallets","description":"Push Chain × human.tech: Enabling Social Login–Native, Self-Custodial Wallets","date":"2026-02-24T00:00:00.000Z","tags":[{"inline":true,"label":"Featured","permalink":"/push-chain-website/pr-preview/pr-1227/blog/tags/featured"},{"inline":true,"label":"Partnerships","permalink":"/push-chain-website/pr-preview/pr-1227/blog/tags/partnerships"},{"inline":true,"label":"Product","permalink":"/push-chain-website/pr-preview/pr-1227/blog/tags/product"}],"readingTime":2.26,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1227/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1227/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"push-chain-human-tech","title":"Push Chain × human.tech: Enabling Social Login–Native, Self-Custodial Wallets","authors":["push"],"image":"./cover-image.webp","description":"Push Chain × human.tech: Enabling Social Login–Native, Self-Custodial Wallets","text":"Push Chain has integrated human.tech’s Wallet as a Protocol (WaaP) infrastructure to enable social login based, self-custodial wallet access directly within the Push Chain ecosystem","tags":["Featured","Partnerships","Product"],"twitterId":"2026296963877269847"},"unlisted":false,"prevItem":{"title":"Identity Crisis of a Crypto User in a Cross-Chain World","permalink":"/push-chain-website/pr-preview/pr-1227/blog/identity-crisis-of-crypto-user"},"nextItem":{"title":"Crypto AI Agents Won\'t Scale. Here\'s Why.","permalink":"/push-chain-website/pr-preview/pr-1227/blog/crypto-ai-agents-wont-scale"}}');

/***/ }

}]);