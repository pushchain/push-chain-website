"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[36437],{

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

/***/ 290082:
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
	slug: 'push-chain-joins-forces-with-zkpass',
	title: 'Push Chain Joins Forces With zkPass',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Push Chain joins forces with zkPass!',
	text: 'Push chain is pumped to join forces with zkPass to transform user privacy in the new internet world. Discover how this collaboration empowers devs, users and the entire web3 ecosystem! ',
	tags: [
		'Push Chain',
		'Partnerships'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-joins-forces-with-zkpass",
  "source": "@site/blog/2025-01-23-zkpass-joins-forces-with-push-chain/index.md",
  "title": "Push Chain Joins Forces With zkPass",
  "description": "Push Chain joins forces with zkPass!",
  "date": "2025-01-23T00:00:00.000Z",
  "formattedDate": "January 23, 2025",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chain"
    },
    {
      "label": "Partnerships",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/partnerships"
    }
  ],
  "readingTime": 2.54,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Chain",
      "url": "https://x.com/PushChain",
      "page": true,
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    }
  ],
  "frontMatter": {
    "slug": "push-chain-joins-forces-with-zkpass",
    "title": "Push Chain Joins Forces With zkPass",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Push Chain joins forces with zkPass!",
    "text": "Push chain is pumped to join forces with zkPass to transform user privacy in the new internet world. Discover how this collaboration empowers devs, users and the entire web3 ecosystem! ",
    "tags": [
      "Push Chain",
      "Partnerships"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Chain Joins Forces With Morph",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-joins-forces-with-morph"
  },
  "nextItem": {
    "title": "Push Chain Joins Forces With Plume",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-joins-forces-with-plume"
  }
};
const assets = {
"image": (__webpack_require__(327068)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What is zkPass?",
  "id": "what-is-zkpass",
  "level": 2
}, {
  "value": "What is Push Chain?",
  "id": "what-is-push-chain",
  "level": 2
}, {
  "value": "👥 How does this benefit zkPass and Push Chain users?",
  "id": "-how-does-this-benefit-zkpass-and-push-chain-users",
  "level": 2
}, {
  "value": "👷‍♂️How does it benefit builders?",
  "id": "️how-does-it-benefit-builders",
  "level": 2
}, {
  "value": "🔓 What usecases does the collab unlock?",
  "id": "what-usecases-does-the-collab-unlock",
  "level": 2
}, {
  "value": "<strong>🌌</strong> What does this mean for Web3?",
  "id": "what-does-this-mean-for-web3",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Push Chain joins forces with zkPass ",
        src: (__webpack_require__(354851)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push chain is pumped to join forces with zkPass to transform user privacy in the new internet world."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Discover how this collaboration empowers developers and users, unlocks groundbreaking use cases, and drives the web3 ecosystem forward."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-zkpass",
      children: "What is zkPass?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://zkpass.org/",
        children: "zkPass"
      }), " is a privacy-first zkTLS oracle protocol that enables private internet data to be verifiable on-chain without revealing the actual information, using zero-knowledge proofs and innovative TLS architecture to ensure data verifiability, privacy and composability."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With over 4 million ZK Proofs generated, zkPass provides tools and applications for secure, verifiable data sharing with privacy and integrity assurances from any HTTPS website without requiring OAuth APIs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-push-chain",
      children: "What is Push Chain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain is a shared state blockchain for universal apps. It is a Proof of Stake (PoS) chain\nbuilt to allow developers to create universal apps and act as a shared settlement layer for multiple L1s, L2s, and L3s enabling transactions from any chain - any app and any user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org",
        children: "Explore more about Push Chain here"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "-how-does-this-benefit-zkpass-and-push-chain-users",
      children: "👥 How does this benefit zkPass and Push Chain users?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Verify your private data on any app and any chain."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain extends zkPass’s proving capabilities by enabling verification support for any EVM as well as non-EVM chains like Solana, Aptos etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal private identity"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Users can now create a truly private and unified blockchain presence through Push ID - a universal identity system that seamlessly connects all their wallets (EVM and non-EVM) into one profile."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This unified identity gains enhanced privacy through zkPass, enabling ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "users to prove wallet ownership, assets or any other private information across any blockchain"
      }), " without revealing their actual wallet details and enabling selective disclosure of wallets while linking to any application. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "One private KYC that can be instantly validated on all apps and all chains."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "️how-does-it-benefit-builders",
      children: "👷‍♂️How does it benefit builders?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Build Universally accessible privacy-centric DApps"
      }), "\nPush Chain enables developers to build applications that work across any blockchain, while zkPass adds powerful privacy-preservation capabilities to this universal reach. Developers can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/pushchain/push-chain-sdk",
        children: "Push Chain"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://zkpass.gitbook.io/zkpass/developer-guides/extension-js-sdk",
        children: "Transgate"
      }), " SDKs to create apps that verify user credentials, assets, or achievements across chains without managing complex privacy infrastructure or dealing with multiple chain-specific identity systems."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Build privately - verifiable DeFi Protocols"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Build more sophisticated DeFi applications that can access verified user credentials while respecting privacy."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Through Push Chain's shared state and zkPass's verification system, protocols can validate credit scores, collateral, and transaction history across chains without exposing sensitive user data enabling better risk assessment and more efficient capital allocation while maintaining user privacy."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-usecases-does-the-collab-unlock",
      children: "🔓 What usecases does the collab unlock?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In addition to the unified KYC and universal privacy-focused DeFi applications discussed above, the collaboration between Push Chain and zkPass unlocks the following use cases:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal Private RWA Hub"
      }), "\nRWA marketplaces like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://canza.io/",
        children: "Kanza Finance"
      }), " can leverage Push Chain and zkPass to enable instant cross-chain RWA operations with built-in compliance verification, all while keeping sensitive user data private and secure."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Unified AI marketplaces"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["AI & Privacy centric chains like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.polyhedra.network/",
        children: "Polyhedra EXP"
      }), " can host AI data marketplaces for using zkPass, users can privately contribute data to AI models while: Proving data authenticity without exposure and receiving rewards tied to any chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Users can optimise their on-chain data collection process by using Push Chain’s unified shared settlement layer."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal launchpads."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Cross chain launchpads like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.poolz.finance/",
        children: "Pools Finance"
      }), " can leverage Push Chain and zkPass to power - universal DApp launchpads where Developers can utilize Push Chain’s Universal Shared State and Parallel txn processing to deploy dApps once and instantly reach users across all or any specified networks while maintaining privacy preservation, credential verification and compliance through zkPass."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "what-does-this-mean-for-web3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "🌌"
      }), " What does this mean for Web3?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Unifying experiences by bringing users together."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain isn’t here to replace networks or compete with any; instead, it aims to eliminate the fragmented state of Web3 by unifying settlement across all chains under one universal shared state, unlocking a seamless, interconnected Web3 experience."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Follow ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain",
          children: "@PushChain"
        }), " on X to get the latest updates about Push Chain"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Check out the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://whitepaper.push.org/",
          children: "Push Chain Whitepaper"
        }), " for a detailed overview of the vision and the underlying technicalities."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Visit the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://push.org/chain",
          children: "Push Chain Website"
        }), " to find a one-pager explanation of the vision."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://scan.push.org/",
          children: "Push Chain Devnet"
        }), " is running live on Proof-of-Stake network validators, storage and archival nodes. The network already supports consumer transactions as well."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://simulate.push.org/",
          children: "Push Chain Simulate Tx"
        }), " already provides a way for everyone to send tx from any chain using wallet abstraction."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For more questions join ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://discord.com/invite/pushprotocol",
          children: "Push Discord"
        }), ". Our team would be glad to help you!"]
      }), "\n"]
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

/***/ 327068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7d413c2d4f1b806201039c5cee8339b7.webp");

/***/ }),

/***/ 354851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-7d413c2d4f1b806201039c5cee8339b7.webp");

/***/ })

}]);