"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[63416],{

/***/ 828146
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_04_13_enable_social_login_for_your_apps_index_md_ec1_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_04_13_enable_social_login_for_your_apps_index_md_ec1_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179135);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'enable-social-logins-for-your-app',
	title: 'Enable social login for your app in 4 steps',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: '“Most apps lose on users before they’ve ever interacted with the product."',
	text: '“Most apps lose on users before they’ve ever interacted with the product."',
	tags: [
		'Maker Monday'
	],
	twitterId: '2043693637217980509'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(209068)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Authentication becomes identity provisioning",
  "id": "authentication-becomes-identity-provisioning",
  "level": 3
}, {
  "value": "Step 1: Install Push Wallet Kit",
  "id": "step-1-install-push-wallet-kit",
  "level": 3
}, {
  "value": "Step 2: Configure social login methods",
  "id": "step-2-configure-social-login-methods",
  "level": 3
}, {
  "value": "Step 3: Initialize the Universal Wallet Provider",
  "id": "step-3-initialize-the-universal-wallet-provider",
  "level": 3
}, {
  "value": "Step 4: Enable additional social login providers",
  "id": "step-4-enable-additional-social-login-providers",
  "level": 3
}, {
  "value": "What Universal Wallet enables",
  "id": "what-universal-wallet-enables",
  "level": 3
}, {
  "value": "What you unlock as a builder",
  "id": "what-you-unlock-as-a-builder",
  "level": 3
}, {
  "value": "Takeaway:",
  "id": "takeaway",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of The Season 3 Early Access",
        src: (__webpack_require__(683407)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Most apps lose on users before they’ve ever interacted with the product."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Not because the product feels complex to use.\nBecause wallet creation is considered as a separate onboarding step."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Wallet Kit removes this separation.\nBy provisioning a real wallet the moment a user signs up."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here’s how to enable it in your app in just 4 steps:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "authentication-becomes-identity-provisioning",
      children: "Authentication becomes identity provisioning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Usually onboarding requires two independent systems:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["1️⃣ Authentication based (Google, email, socials) ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n2️⃣ Wallet creation and connection ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It creates friction because users must create/import wallets before interacting with your app."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Chain combines these into a single identity layer.\nWhen a user logs in, Push provisions a wallet automatically.\nThis wallet becomes the user’s persistent onchain identity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Your app can now interact with the user immediately, without requiring manual wallet setup."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-1-install-push-wallet-kit",
      children: "Step 1: Install Push Wallet Kit"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "npm install @pushprotocol/ui-kit"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This will give your app access to authentication, wallet provisioning, and wallet access through one interface."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-2-configure-social-login-methods",
      children: "Step 2: Configure social login methods"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Define which login methods your app should support:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "configure social login methods",
        src: (__webpack_require__(815291)/* ["default"] */ .A) + "",
        width: "593",
        height: "261"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This configuration enables authentication via Google and email."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When users authenticate using these methods, Universal Wallet automatically provisions a wallet for them."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-3-initialize-the-universal-wallet-provider",
      children: "Step 3: Initialize the Universal Wallet Provider"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Wrap your app with the Universal Wallet Provider:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "initialize the universal wallet provider",
        src: (__webpack_require__(328673)/* ["default"] */ .A) + "",
        width: "725",
        height: "274"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This activates the Universal Wallet layer. It handles:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["• Authentication ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• Wallet provisioning ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• Secure key management ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• Session persistence ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• Wallet availability across your app ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Your app now has an identity and wallet layer ready to onboard users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-4-enable-additional-social-login-providers",
      children: "Step 4: Enable additional social login providers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Wallet Kit also supports additional identity providers beyond Google and email."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You can enable providers listed below:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "social login providers",
        src: (__webpack_require__(299941)/* ["default"] */ .A) + "",
        width: "988",
        height: "507"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Each authentication method provisions the same Universal Wallet identity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This means users can log in using familiar platforms, while your app still interacts with a consistent wallet layer."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "what-universal-wallet-enables",
      children: "What Universal Wallet enables"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Once authenticated, the user immediately has a usable wallet. This wallet:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["• Persists across sessions ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• Can sign transactions ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• Can interact with smart contracts ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "\n• Is accessible programmatically inside your app ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "No extensions/manual wallet setup required."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "what-you-unlock-as-a-builder",
      children: "What you unlock as a builder"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Users can log in and start using your app immediately.\nThey can sign transactions, interact with contracts, and participate onchain, without creating or connecting a wallet manually."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Universal Wallet ensures wallet identity exists from the first interaction."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "takeaway",
      children: "Takeaway:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Push Wallet Kit unifies authentication and wallet provisioning into a single layer."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Authentication creates identity → Identity provisions the wallet → Wallet enables execution"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Sounds game-changing, right? Explore ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/docs/chain/ui-kit/customizations/push-universal-wallet-provider/",
        children: "here"
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

/***/ 209068
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-56322c86bd3a6de02f7761ab871bb626.webp");

/***/ },

/***/ 683407
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-56322c86bd3a6de02f7761ab871bb626.webp");

/***/ },

/***/ 815291
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,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");

/***/ },

/***/ 328673
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-e3d0ec78f975079de3878d380d4b1c9b.png");

/***/ },

/***/ 299941
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-9ab3e94e6106981714c25e92de7ce860.webp");

/***/ },

/***/ 179135
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1218/blog/enable-social-logins-for-your-app","source":"@site/blog/2026-04-13-enable-social-login-for-your-apps/index.md","title":"Enable social login for your app in 4 steps","description":"“Most apps lose on users before they’ve ever interacted with the product.\\"","date":"2026-04-13T00:00:00.000Z","tags":[{"inline":true,"label":"Maker Monday","permalink":"/push-chain-website/pr-preview/pr-1218/blog/tags/maker-monday"}],"readingTime":1.55,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1218/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1218/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"enable-social-logins-for-your-app","title":"Enable social login for your app in 4 steps","authors":["push"],"image":"./cover-image.webp","description":"“Most apps lose on users before they’ve ever interacted with the product.\\"","text":"“Most apps lose on users before they’ve ever interacted with the product.\\"","tags":["Maker Monday"],"twitterId":"2043693637217980509"},"unlisted":false,"prevItem":{"title":"WTF Happened to Chain Abstraction?","permalink":"/push-chain-website/pr-preview/pr-1218/blog/wtf-happened-to-chain-abstraction"},"nextItem":{"title":"Season 3 Early Access is Live!","permalink":"/push-chain-website/pr-preview/pr-1218/blog/season-3-early-access-is-live"}}');

/***/ }

}]);