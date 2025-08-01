"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[86526],{

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

/***/ 103216:
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
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(313554);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);


const frontMatter = {
	slug: 'another-l1',
	title: 'Is Push Chain Another L1?',
	authors: [
		'harsh',
		'sid'
	],
	image: './cover-image.webp',
	description: 'Learn why Push Chain is built different',
	text: 'The move towards Push Chain was driven by the realisation that we had to do our bit to move the needle on interoperability, not in order to create our own fragmented ecosystem.',
	tags: [
		'Push Chain',
		'Insights',
		'Vision',
		'Shared State Blockchain',
		'Universal Execution Layer'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/another-l1",
  "source": "@site/blog/2025-02-11-another-l1/index.md",
  "title": "Is Push Chain Another L1?",
  "description": "Learn why Push Chain is built different",
  "date": "2025-02-11T00:00:00.000Z",
  "formattedDate": "February 11, 2025",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chain"
    },
    {
      "label": "Insights",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/insights"
    },
    {
      "label": "Vision",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/vision"
    },
    {
      "label": "Shared State Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/shared-state-blockchain"
    },
    {
      "label": "Universal Execution Layer",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/universal-execution-layer"
    }
  ],
  "readingTime": 4.55,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Harsh Rajat",
      "title": "Co-Founder",
      "url": "https://twitter.com/harshrajat",
      "page": true,
      "imageURL": "/assets/blog/authors/authorharsh.png",
      "key": "harsh"
    },
    {
      "name": "Sidharth",
      "title": "Degen Marketer",
      "page": true,
      "imageURL": "/assets/blog/authors/authorsid.png",
      "key": "sid"
    }
  ],
  "frontMatter": {
    "slug": "another-l1",
    "title": "Is Push Chain Another L1?",
    "authors": [
      "harsh",
      "sid"
    ],
    "image": "./cover-image.webp",
    "description": "Learn why Push Chain is built different",
    "text": "The move towards Push Chain was driven by the realisation that we had to do our bit to move the needle on interoperability, not in order to create our own fragmented ecosystem.",
    "tags": [
      "Push Chain",
      "Insights",
      "Vision",
      "Shared State Blockchain",
      "Universal Execution Layer"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Chain Joins Forces With Diamante",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-joins-forces-with-diamante"
  },
  "nextItem": {
    "title": "Push Chain Joins Forces With Fuse",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-joins-forces-with-fuse"
  }
};
const assets = {
"image": (__webpack_require__(164050)/* ["default"] */ .A),
"authorsImageUrls": [undefined, undefined],
};




const toc = [{
  "value": "Don&#39;t we have enough L1s, L2s already?",
  "id": "dont-we-have-enough-l1s-l2s-already",
  "level": 2
}, {
  "value": "Is Push Chain just about cross-chain apps? Aren&#39;t there already many cross-chain protocols?",
  "id": "is-push-chain-just-about-cross-chain-apps-arent-there-already-many-cross-chain-protocols",
  "level": 2
}, {
  "value": "Is Push Chain EVM compatible? SVM compatible? Or Move compatible?",
  "id": "is-push-chain-evm-compatible-svm-compatible-or-move-compatible",
  "level": 2
}, {
  "value": "How is Push Chain different from existing interoperability solutions?",
  "id": "how-is-push-chain-different-from-existing-interoperability-solutions",
  "level": 2
}, {
  "value": "Why build on Push Chain?",
  "id": "why-build-on-push-chain",
  "level": 2
}, {
  "value": "1. Expand user base &amp; Drive app sustainability",
  "id": "1-expand-user-base--drive-app-sustainability",
  "level": 3
}, {
  "value": "2. No extra smart contract audits required",
  "id": "2-no-extra-smart-contract-audits-required",
  "level": 3
}, {
  "value": "3. It&#39;s Alright if users don&#39;t have a wallet\\",
  "id": "3-its-alright-if-users-dont-have-a-wallet",
  "level": 3
}, {
  "value": "4. It&#39;s alright if users don&#39;t have native chain tokens for gas**",
  "id": "4-its-alright-if-users-dont-have-native-chain-tokens-for-gas",
  "level": 3
}, {
  "value": "5. Unfragment User Experience, liquidity, and user retention",
  "id": "5-unfragment-user-experience-liquidity-and-user-retention",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Is Push Chain Another L1?",
        src: (__webpack_require__(192723)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Another L1?.... Ahh, sh*t, here we go again."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["\"", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Aren't there too many blockchains already? Adding more only makes it harder for apps and protocols to work across them."
      }), "\""]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is one of the most common questions we get asked during conferences."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If that's what you're thinking, you're not wrong - Yes, Push Chain is another L1 - except it's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NOT JUST"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "'another L1'"
      }), " !!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let's find out how.."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "dont-we-have-enough-l1s-l2s-already",
      children: "Don't we have enough L1s, L2s already?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Yes, crypto has tens of layer 1s, hundreds of layer 2s, and - who knows - maybe thousands of layer 3s in the near future!", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "But what it didn't have was a means to unify all of these amazing chains together - and that's exactly what Push chain does."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push is not just another silo"
      }), " - it's a universal chain that unites every existing and forthcoming chain together (under one roof). It is a shared-state L1 blockchain designed to function as a universal settlement layer for users across any chain, wallet, and app."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Combining this with its innovation of shared state, universal smart contracts, generalized programmable solver, and complete user abstraction, what you get is a blockchain able to read any other chain and… is accessible by users from any chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Chain's vision is not to compete and replace any blockchain, but unite every chain together to maximize UX, freedom of movement, and revenue scaling opportunities for apps."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "is-push-chain-just-about-cross-chain-apps-arent-there-already-many-cross-chain-protocols",
      children: "Is Push Chain just about cross-chain apps? Aren't there already many cross-chain protocols?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "No – cross-chain apps still require deployment of separate contracts on separate supported chains. Such apps typically rely on bridges and manual relayers to move tokens and messages between chains, leading to separate liquidity formation and additional development overhead."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain introduces Universal Apps that can:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Be accessed by users of any chain"
          }), "– Devs can write and deploy a single contract on Push Chain that interacts with multiple blockchains without deploying separate contracts on each chain."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["This is the magic of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Shared Execution Layer."
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Read and sync live states from multiple chains"
          }), ", including token balances, contract data, and user activity."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cross-chain apps move assets. Universal apps built on Push Chain move logic and context along with assets"
      }), ". Thus, opening the doors to a wide variety of use cases that once were deemed impossible - discover these cool use cases here - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/blog/apps-only-possible-with-shared-state-v1/",
        children: "Vol. 1"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/blog/apps-only-possible-with-shared-state-v2/",
        children: "Vol. 2"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Simple app vs cross-chain app",
        src: (__webpack_require__(815710)/* ["default"] */ .A) + "",
        width: "1500",
        height: "1200"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Universal app",
        src: (__webpack_require__(127647)/* ["default"] */ .A) + "",
        width: "1500",
        height: "1200"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Want to build a universal app? Or make your existing Dapp universal?"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
        children: ["Check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "/docs",
          children: "Push Chain Docs"
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "is-push-chain-evm-compatible-svm-compatible-or-move-compatible",
      children: "Is Push Chain EVM compatible? SVM compatible? Or Move compatible?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Chain is 100% EVM compatible & at the same time, it's also ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "universally compatible."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Meaning:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Everything that EVM chains support -> Push Chain supports.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nTherefore, EVM devs don't have to endure any new learning curve. At the same time, on deploying your evm contracts on Push Chain, your EVM dapps become automatically compatible to users from any other EVM ecosystems like Solana or BSC."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Everything deployed on Push Chain is automatically compatible with EVM, or non-EVM chains.\nThis means, that any deployed apps on Push Chain is universally compatible and can be accessed by users from any other chain."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Devs can either:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Deploy their existing app to Push Chain"
          }), " (within minutes) and accept user traffic from any other chain."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Build native apps"
          }), " on Push Chain that are universally accessible by users from every chain and VM."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "An Ethereum user and a Solana user can compete, collaborate, or transact within the same app because"
      }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "this is a truly universal Layer 1."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "EVM and non-EVM compatible",
        src: (__webpack_require__(748685)/* ["default"] */ .A) + "",
        width: "1599",
        height: "897"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-is-push-chain-different-from-existing-interoperability-solutions",
      children: "How is Push Chain different from existing interoperability solutions?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Majority of cross-chain apps today rely on interoperability solutions that provide bridges and arbitrary message passing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Bridges move tokens across chains → Effective yet slow, costly, and filled with multiple friction points."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Message protocols (like Axelar, LayerZero) pass arbitrary messages → useful, but they don't give apps a coherent view of user state across chains."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain utilizes a different approach with the help of:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "1. Universal Smart Contracts"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nDevs deploy one contract that is instantly compatible across all chains. It is 100% EVM compatible and required ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "zero on-chain code changes"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "2. Shared State"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nAn innovation by Push Chain where smart contracts can read and use states from other chains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Using shared state, apps on Push Chain can easily query verified state from any supported chain (token balances, contract state, user activity)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "3. Programmable Solvers"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\nProvides paths to execute any multichain action - enabling apps to act across chains without forcing users to bridge or switch networks."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is what we call the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Fullstack universal interop"
      }), " → Universal Wallet + Generalized Programmable Solvers + Shared State + Universal Smart Contracts."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "why-build-on-push-chain",
      children: "Why build on Push Chain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "If you're building on one chain, deploying on Push Chain helps you reach users across all blockchains – without rewriting your app, switching wallets, or begging users to bridge."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Building on Push Chain automatically means you…"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-expand-user-base--drive-app-sustainability",
      children: "1. Expand user base & Drive app sustainability"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["By enabling apps that can host users from any chain, and not just the chain on which the app is primarily based on. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Guaranteeing higher user traction -> higher revenue generation -> and wider distribution"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "And that too with super limited development overhead!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-no-extra-smart-contract-audits-required",
      children: "2. No extra smart contract audits required"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Since Push Chain is fully EVM-compatible, you don't need to rewrite or modify your existing contracts."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This also means you can deploy them without needing an additional audit – saving time and effort. Just plug in your audited EVM contracts, integrate the Push Chain UI wrapper, and you're good to go!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Cherry on the top -> Your App now automatically gains access to Solana, BNB and other EVM users"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Push Chain will soon, also support all other L1 chains (be it Move-based or any other VM)"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-its-alright-if-users-dont-have-a-wallet",
      children: "3. It's Alright if users don't have a wallet\\"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Web2 native users or users with no active wallets can always interact with apps deployed on Push Chain - because of its inbuilt wallet abstraction support."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Any user can :", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "-> Login using their web2 socials (email, google account) OR", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.br, {}), "\n", "-> Existing wallets (Phantom, Metamask, Rabbi etc)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Note"
      }), ": As we unlock support to more Layer 1s - you'll only be required to upgrade the package of the wallet abstraction frontend component. No more complex chain integration nightmares ;)"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-its-alright-if-users-dont-have-native-chain-tokens-for-gas",
      children: "4. It's alright if users don't have native chain tokens for gas**"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With the support of Fee Abstraction -"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "You can use any token that you have - to fund the fees. Similar with Ethereum and other chains."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Push eliminates the need for bridging for fees, manual management of funds on multiple chains and introduction of unnecessary learning for the average user."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "5-unfragment-user-experience-liquidity-and-user-retention",
      children: "5. Unfragment User Experience, liquidity, and user retention"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Rise of Layer 2s and chains solved a lot of pressing challenges but also led us to a series of cascading shortfalls, leading to deterioration in user as well as developer experience."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Building on Push Chain solves these challenges to a greater extent with fast and reliable movement of data and assets between chains (for both apps and users)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The user can remain on the chain where they are and either utilise fee abstraction or universal wallet (most of the time both) to interact with other chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Woes about state fragmentation",
        src: (__webpack_require__(393122)/* ["default"] */ .A) + "",
        width: "1500",
        height: "1200"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Finally, this concludes our trip – from perceiving Push Chain as just another L1, to recognizing it as the Universal Layer 1."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The points covered in this article answer some of the most common questions we get asked, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "TLDR;"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We're enabling Apps that are capable of:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Unifying liquidity"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Unifying cross-chain user bases"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "And most importantly – unifying our shared love for this space!"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you want to make your app truly flexible and accessible from every chain - join our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/pushprotocol",
        children: "Discord"
      }), " today! Or dive straight into the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/docs",
        children: "Developer Docs"
      }), " to get started."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "& finally…"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Yeahhh it's Push Chain… here we go!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_player__WEBPACK_IMPORTED_MODULE_2___default()), {
      controls: true,
      width: "100%",
      url: "https://www.youtube.com/watch?v=vCadcBR95oU"
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

/***/ 127647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image1-2-2c09ffd278cc9e3eea7817d02f844f27.webp");

/***/ }),

/***/ 164050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f4b365f77610bf81ff34771f6320c687.webp");

/***/ }),

/***/ 192723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-f4b365f77610bf81ff34771f6320c687.webp");

/***/ }),

/***/ 393122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image3-e7b74b7eceeb0432997885ec1d9a7336.webp");

/***/ }),

/***/ 748685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image2-c9c7454c52a4f2e4e146fa5b5a591dfd.webp");

/***/ }),

/***/ 815710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image1-1-d49c59d7ee8d2910fd4d28ef1cdc006b.webp");

/***/ })

}]);