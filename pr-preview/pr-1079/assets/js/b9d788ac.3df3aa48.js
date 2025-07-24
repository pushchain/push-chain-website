"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[81231],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 144432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7ae9cee9e86ffc29d440eeceebcd417e.webp");

/***/ }),

/***/ 340001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'donut-testnet-closed-beta-is-now-live',
	title: 'Donut Testnet Closed Beta is Now Live!',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Donut Testnet Closed Beta is Now Live!',
	text: 'We’ve been building the foundation for a new era of universal apps.Now, we\'re opening the gates.',
	tags: [
		'Push Chain',
		'Donut',
		'Closed Beta',
		'Early Access',
		'Shared App Experience',
		'Shared State Blockchain',
		'Universal Smart Contracts',
		'Testnet'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/donut-testnet-closed-beta-is-now-live",
  "source": "@site/blog/2025-06-10-donut-testnet-closed-beta-is-now-live/index.md",
  "title": "Donut Testnet Closed Beta is Now Live!",
  "description": "Donut Testnet Closed Beta is Now Live!",
  "date": "2025-06-10T00:00:00.000Z",
  "formattedDate": "June 10, 2025",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chain"
    },
    {
      "label": "Donut",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/donut"
    },
    {
      "label": "Closed Beta",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/closed-beta"
    },
    {
      "label": "Early Access",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/early-access"
    },
    {
      "label": "Shared App Experience",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/shared-app-experience"
    },
    {
      "label": "Shared State Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/shared-state-blockchain"
    },
    {
      "label": "Universal Smart Contracts",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/universal-smart-contracts"
    },
    {
      "label": "Testnet",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/testnet"
    }
  ],
  "readingTime": 0.9733333333333334,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Protocol",
      "url": "https://x.com/PushChain",
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "donut-testnet-closed-beta-is-now-live",
    "title": "Donut Testnet Closed Beta is Now Live!",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Donut Testnet Closed Beta is Now Live!",
    "text": "We’ve been building the foundation for a new era of universal apps.Now, we're opening the gates.",
    "tags": [
      "Push Chain",
      "Donut",
      "Closed Beta",
      "Early Access",
      "Shared App Experience",
      "Shared State Blockchain",
      "Universal Smart Contracts",
      "Testnet"
    ]
  },
  "unlisted": false,
  "nextItem": {
    "title": "Apps Possible Only with Shared State - Vol.2",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/apps-only-possible-with-shared-state-v2"
  }
};
const assets = {
"image": (__webpack_require__(505403)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Donut Testnet Closed Beta is Now Live!",
  "id": "donut-testnet-closed-beta-is-now-live",
  "level": 2
}, {
  "value": "👀 What Early Access Unlocks?",
  "id": "what-early-access-unlocks",
  "level": 2
}, {
  "value": "🔧 <strong>Powerful SDK, UIKit, Tooling and easy to follow Docs</strong>",
  "id": "-powerful-sdk-uikit-tooling-and-easy-to-follow-docs",
  "level": 3
}, {
  "value": "💸 <strong>Rewards for Early Testers</strong>",
  "id": "-rewards-for-early-testers",
  "level": 3
}, {
  "value": "💬 <strong>Private Builder Group</strong>",
  "id": "-private-builder-group",
  "level": 3
}, {
  "value": "🍩 Why Donut?",
  "id": "why-donut",
  "level": 2
}, {
  "value": "🎟️ Claim your Donut Testnet Pass HERE",
  "id": "️claim-your-donut-testnet-pass-here",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Donut Testnet Closed Beta is Now Live",
        src: (__webpack_require__(144432)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "donut-testnet-closed-beta-is-now-live",
      children: "Donut Testnet Closed Beta is Now Live!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "We’ve been building the foundation for a new era of universal apps."
      }), " Now, we're opening the gates. Push Chain's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Closed Beta Pass"
      }), " is here."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is your chance to be the first to preview our Testnet, Donut. Selected developers will get hands-on with our SDK, UIKit, tooling, docs to be the first to deploy their app on Push Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This guide will walk you through how to join and start building on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Donut"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
        children: ["👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://t.me/+dHOCilvxNR9jZjM9",
          children: "Join the Closed Beta"
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-early-access-unlocks",
      children: "👀 What Early Access Unlocks?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "-powerful-sdk-uikit-tooling-and-easy-to-follow-docs",
      children: ["🔧 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Powerful SDK, UIKit, Tooling and easy to follow Docs"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Start exploring and building with our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/?utm_source=blog&utm_medium=content&utm_campaign=devdocs",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "comprehensive documentation"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Use the SDK, 10x your user base, unlock cross-chain liquidity with 100% EVM compatibility. Deploy your app with minimal code changes in minutes."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "-rewards-for-early-testers",
      children: ["💸 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Rewards for Early Testers"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Up to $500 rewards & exclusive unlocks for testing, deploying, and providing quality feedback. Deploying an app on Push Chain Testnet qualifies for extra points (Developer Exclusive Airdrop)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "-private-builder-group",
      children: ["💬 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Private Builder Group"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Direct line to Push Chain Core devs & other cracked devs participating in the closed beta."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Network, team up and learn from the best! Also, unlock special Invites to community meets and private previews."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "why-donut",
      children: "🍩 Why Donut?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The first Layer 1 built for Universal Apps. Build & Deploy once, onboard users from any chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "✅ Deploy once, go cross-chain & 10x your user base."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "✅ Skip bridges. Deploy Universal Smart Contracts with Wallet/Fee Abstraction, Any Chain TX & 100% EVM compatibility."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "✅ Create unique app experiences, by having users of different chains transact with the same app."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "️claim-your-donut-testnet-pass-here",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://t.me/+dHOCilvxNR9jZjM9",
        children: "🎟️ Claim your Donut Testnet Pass HERE"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["PS: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "(Spots are limited, Early access closes soon)"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 505403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7ae9cee9e86ffc29d440eeceebcd417e.webp");

/***/ })

}]);