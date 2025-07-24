"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[79844],{

/***/ 8811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/consumerusecases-fb5a802dd9698e5f6eec1feb441e7bb3.webp");

/***/ }),

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

/***/ 106602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-21a999aac2a05aa234e58392f08294d0.webp");

/***/ }),

/***/ 123105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-21a999aac2a05aa234e58392f08294d0.webp");

/***/ }),

/***/ 142887:
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
	slug: 'push-chain-tokenomics',
	title: 'Introducing Push Chain Tokenomics',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Push Chain Tokenomics - Details and Deepdive',
	text: 'A deepdive into the tokenomics of Push Chain, vesting details and how it will power and unify all blockchains!',
	tags: [
		'Push Chain',
		'Tokenomics'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-tokenomics",
  "source": "@site/blog/2025-03-18-introducing-push-chain-tokenomics/index.md",
  "title": "Introducing Push Chain Tokenomics",
  "description": "Push Chain Tokenomics - Details and Deepdive",
  "date": "2025-03-18T00:00:00.000Z",
  "formattedDate": "March 18, 2025",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chain"
    },
    {
      "label": "Tokenomics",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/tokenomics"
    }
  ],
  "readingTime": 4.736666666666666,
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
    "slug": "push-chain-tokenomics",
    "title": "Introducing Push Chain Tokenomics",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Push Chain Tokenomics - Details and Deepdive",
    "text": "A deepdive into the tokenomics of Push Chain, vesting details and how it will power and unify all blockchains!",
    "tags": [
      "Push Chain",
      "Tokenomics"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Introducing Push Chain Devnet Drop Points Program S2",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/introducing-push-chain-devnet-drop-points-program-s2"
  },
  "nextItem": {
    "title": "Push Chain Joins Forces With Gaia Network",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-chain-joins-forces-with-gaia"
  }
};
const assets = {
"image": (__webpack_require__(123105)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "What is the Vision of Push Chain?",
  "id": "what-is-the-vision-of-push-chain",
  "level": 2
}, {
  "value": "Built on innovation to eliminate blockchain isolation!",
  "id": "built-on-innovation-to-eliminate-blockchain-isolation",
  "level": 3
}, {
  "value": "Where does Push Chain fit in?",
  "id": "where-does-push-chain-fit-in",
  "level": 3
}, {
  "value": "What can be built on Push Chain?",
  "id": "what-can-be-built-on-push-chain",
  "level": 3
}, {
  "value": "👋 Push Chain Tokenomics",
  "id": "-push-chain-tokenomics",
  "level": 2
}, {
  "value": "Token Utility and Functionality",
  "id": "token-utility-and-functionality",
  "level": 3
}, {
  "value": "Burn and Deflationary Mechanism",
  "id": "burn-and-deflationary-mechanism",
  "level": 3
}, {
  "value": "Migration Details",
  "id": "migration-details",
  "level": 3
}, {
  "value": "Airdrop Details",
  "id": "airdrop-details",
  "level": 3
}, {
  "value": "Token Distribution Details",
  "id": "token-distribution-details",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
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
        alt: "Cover image of Push Chain Tokenomics",
        src: (__webpack_require__(106602)/* ["default"] */ .A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In late 2024, the Push community voted to approve the launch of Push Chain, a shared state layer 1 blockchain designed to enable the development and scale of universal applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Chain is a purpose-built layer that connects L1s, L2s, and L3s with near-instant finality and true scalability, which solves the fundamental issue with web3 applications: fragmentation. With the successful voting of the governance proposal, the Push Chain mission is now on its way toward building ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "any chain, any user, and any app."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The Push Chain token is not live, nor is any presale live. The Push Chain token is not yet named. The migration from Push Protocol $PUSH to the Push Chain token is not live."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Do not believe anyone offering early access or early migration to the Push Chain token. All communications regarding Push Chain will be announced simultaneously from official Push channels — ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain",
          title: "X handle of Push Chain",
          children: "Twitter / X"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://discord.gg/pushprotocol",
          title: "Discord of Push Chain",
          children: "Discord"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://t.me/epnsproject",
          title: "Telegram of Push Chain",
          children: "Telegram"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://push.org",
          title: "Push Website",
          children: "Website"
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: " "
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "what-is-the-vision-of-push-chain",
      children: "What is the Vision of Push Chain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "All blockchains have proven particularly useful for specific apps and use cases. Bitcoin enabled smart money. Ethereum enabled innovations for DeFi. Solana enabled fast apps and meme culture. Several L2s and new L1s are targeting other areas of concern."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["However, a blockchain that is purpose-built to enable chain abstraction and seamless interoperability in the space is still required. This chain would enable transactions from any chain (ETH, SOL, EVM or non-EVM) to power apps that can be used by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "any user —"
      }), " no matter their chain or wallet. This is the chain of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Universal Apps"
      }), ". This is Push Chain!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "built-on-innovation-to-eliminate-blockchain-isolation",
      children: "Built on innovation to eliminate blockchain isolation!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain is revolutionary for both users and developers as it creates an environment for any developer to deploy their universal app in hours via a single universal smart contract deployment."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It also enables users to transact from the comfort, convenience, and choice of their ecosystem, no matter where the app resides."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Under the hood, this is achieved by:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Ability to do ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "transactions from any chain"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Fee & Wallet Abstraction"
        }), " (universal wallet + guest wallet)"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Shared State"
        }), " (read data from other blockchain) 👀"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Generalised Programmable Solve"
        }), "r (enables acting on the data read from other chains)"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Universal Smart Contract"
        }), " (enables devs to deploy universal interop apps in hours)"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Shared App Experience"
        }), " (any user from any chain can access any app of any chain)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Full Stack Interop (Universal Apps)"
        }), " = Universal Wallet + Generalized Programmable Solvers + Shared State + Universal Smart Contracts"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "where-does-push-chain-fit-in",
      children: "Where does Push Chain fit in?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push chain fits ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "every project…"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "on every chain!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["- ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "It allows developers"
      }), " from any chain to create seamless full interop apps that can be used from any chain, via any wallet.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n- ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "It allows users"
      }), " the freedom to interact with the wallet of their choice or have a seamless signless experience via Push Universal Wallet with social login.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n- ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "It allows shared app experiences"
      }), " where users of all chains can come together and engage with Omni DeFi, Omni gaming, Omni NFT, Omni Governance, etc.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-can-be-built-on-push-chain",
      children: "What can be built on Push Chain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain brings seamless interoperability and unifies all L1s, L2s, & L3s and therefore is poised to become the playground of innovation and interop. You can build existing web3 use cases such as:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Primary use cases of Push Chain",
        src: (__webpack_require__(662526)/* ["default"] */ .A) + "",
        width: "1600",
        height: "888"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Or you can better web3 and create innovations:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Consumer use cases of Push Chain",
        src: (__webpack_require__(8811)/* ["default"] */ .A) + "",
        width: "1600",
        height: "888"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Or you can see some popular app examples and to take inspiration from:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Universal app use cases of Push Chain",
        src: (__webpack_require__(731106)/* ["default"] */ .A) + "",
        width: "1600",
        height: "881"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "-push-chain-tokenomics",
      children: "👋 Push Chain Tokenomics"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push Chain Tokenomics",
        src: (__webpack_require__(152514)/* ["default"] */ .A) + "",
        width: "1600",
        height: "866"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "token-utility-and-functionality",
      children: "Token Utility and Functionality"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the proposal, the Push Chain token is designed with multiple utilities that support the network's operation and growth."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Network Security"
        }), ": The token powers Push Chain’s Proof-of-Stake consensus mechanism through staking and slashing, ensuring the security and reliability of the network."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Transaction Fees"
        }), ": The token serves as the primary method for network fees for transactions and app usage."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Governance"
        }), ": Token holders gain voting rights to propose and decide on protocol changes, actively contributing to the chain’s future."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Fee Abstraction"
        }), ": Push’s Fee+Solver contract is used to enable users of any chain (whether ETH, SOL), etc to pay for gas via native token. A portion of the fee collected will be swapped and burned for Push Chain native token."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Incentives"
        }), ": The token supports an ecosystem of rewards for validators, users, and community members through fee sharing and a reward system."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain adopts a dynamic supply model, which is used among popular chains (like Ethereum and Solana). Post mainnet, new tokens for the chain would be mined solely for node rewards, relayer rewards, and other participants that are required for ensuring chain security, functionality, and decentralization needs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "burn-and-deflationary-mechanism",
      children: "Burn and Deflationary Mechanism"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain has a couple of burn mechanisms owing to it being a Universal Blockchain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Native Chain Burn"
        }), ": A part of the fees is always burned when native transactions are done on Push Chain."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Cross Chain Burn"
        }), ": Using Fee Abstractions, a part of the fee collected on other blockchain’s native token (ETH, SOL) is swapped for Push Chain native token and burned."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This ensures a deflationary blockchain design that burns tokens as the network and the transactions that happen on it grow. This allows the chain to achieve deflationary tokenomics design while still awarding the validators and other actors. This design enables the creation of an incentivized, sustainable long-term future for Push Chain and all its participants."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "migration-details",
      children: "Migration Details"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Chain is the result of years of learning from building the leading notification and communication protocol of web3, which was one of the first consumer apps for crypto."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Owing to this, apart from the airdrop allocated (see details below) to Push Chain users, creators, developers and ecosystem partners, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "there is also a migration drop reserved for the $PUSH holders"
      }), " (which was the native token of Push Protocol)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "For existing $PUSH token holders"
      }), ", the Push Chain tokenomics proposal allocates 15% of the total Push Chain token supply specifically for migration. The migration will occur at a ratio of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "1:15"
      }), "—meaning for each Push Protocol ($PUSH) token you hold, you'll receive 15 Push Chain tokens. For example, if you currently hold 40 $PUSH tokens, you'll receive 600 Push Chain tokens after migration."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The launch of Push Chain is designed to reward and incentivize prior Push Protocol ($PUSH) holders for their loyalty and contribution. The migration process for existing $PUSH token holders will work as follows:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Tokens will migrate at a 1:15 ratio (1 Push Protocol token = 15 Push Chain tokens)."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Participants in the Push Chain migration will see 50% of their migrated tokens unlocked immediately, and an additional 50% unlocked after 3 months."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Token migrators will also benefit from a dedicated yield farming pool reserved for them. These rewards will be distributed to token migrators if they stake their migrated Push Chain tokens, to reward them for long-term contribution to the ecosystem."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "For example, if you have 100 Push Protocol $PUSH tokens, you’ll receive 750 Push Chain tokens when you migrate and 750 Push Chain tokens after 3 months — for a total of 1,500 Push Chain tokens. You can choose to stake these tokens to get additional rewards from the Push Chain yield farming pool, distributed periodically."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Chain token migration will be open for 12 months after launch, after which any remaining tokens will go to the community and ecosystem reserve."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "airdrop-details",
      children: "Airdrop Details"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Additionally, the tokenomics proposal allocates 10% of the total Push Chain token supply for airdrops to past and present Push Protocol application users (notifications, messaging, chat). Along with new users, creators, developers, and ecosystem partners of Push Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "token-distribution-details",
      children: "Token Distribution Details"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The total supply of Push Chain tokens is proposed at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "10 billion"
      }), ", distributed as follows:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push Chain Tokenomics",
        src: (__webpack_require__(152514)/* ["default"] */ .A) + "",
        width: "1600",
        height: "866"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push Chain Tokenomics Vesting Details",
        src: (__webpack_require__(786010)/* ["default"] */ .A) + "",
        width: "1600",
        height: "877"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Push Protocol $PUSH migrators have 50% of migrated tokens unlocked at TGE, followed by the remaining 50% after 3 months."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Airdrop distributions begin at TGE, but will happen over the course of multiple seasons."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Core Contributors have a 12-month delay, followed by 24-month vesting."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Push Labs Treasury has a 36-month vesting."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Investors have 24-month linear vesting."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Community and Ecosystem Reserves has a 13.5% unlock at TGE, followed by 36-month vesting."
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

/***/ 152514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vestingpc-060f57f17be4b64981eaa404fabe5572.webp");

/***/ }),

/***/ 662526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/usecasesmain-7bf3f161414466d0fcb388aebc850a92.webp");

/***/ }),

/***/ 731106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/appusecases-9fe86d3d9cad2e692b490a8d75c340da.webp");

/***/ }),

/***/ 786010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/vestingdetailspc-0db680646d1f04029a57322e8dfc830d.webp");

/***/ })

}]);