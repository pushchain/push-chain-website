"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[82327],{

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

/***/ 42578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-106422a36c33aa1ea942a9b199a40b5d.webp");

/***/ }),

/***/ 96464:
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
	slug: 'interop-spectrum',
	title: 'Interop as a Spectrum',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'How Web3 Interop Started and Where its Going',
	text: 'Understand how Push Chain flips the script on the Interop Trilemma but turning it into a Design Choice Spectrum for Universal App developers.',
	tags: [
		'Push Chain',
		'Interop',
		'Intent Solvers',
		'Bridges',
		'Deep dives'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/interop-spectrum",
  "source": "@site/blog/2025-04-11-interop-spectrum/index.md",
  "title": "Interop as a Spectrum",
  "description": "How Web3 Interop Started and Where its Going",
  "date": "2025-04-11T00:00:00.000Z",
  "formattedDate": "April 11, 2025",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-chain"
    },
    {
      "label": "Interop",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/interop"
    },
    {
      "label": "Intent Solvers",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/intent-solvers"
    },
    {
      "label": "Bridges",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/bridges"
    },
    {
      "label": "Deep dives",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/deep-dives"
    }
  ],
  "readingTime": 9.043333333333333,
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
    "slug": "interop-spectrum",
    "title": "Interop as a Spectrum",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "How Web3 Interop Started and Where its Going",
    "text": "Understand how Push Chain flips the script on the Interop Trilemma but turning it into a Design Choice Spectrum for Universal App developers.",
    "tags": [
      "Push Chain",
      "Interop",
      "Intent Solvers",
      "Bridges",
      "Deep dives"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Apps Possible Only with Shared State - Vol.1",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/apps-only-possible-with-shared-state-v1"
  },
  "nextItem": {
    "title": "Introducing Push Chain Devnet Drop Points Program S2",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/introducing-push-chain-devnet-drop-points-program-s2"
  }
};
const assets = {
"image": (__webpack_require__(42578)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Intro",
  "id": "intro",
  "level": 2
}, {
  "value": "The Interop Spectrum",
  "id": "the-interop-spectrum",
  "level": 2
}, {
  "value": "1. The First Interop - Centralized Exchanges",
  "id": "1-the-first-interop---centralized-exchanges",
  "level": 3
}, {
  "value": "2. Atomic Swaps - Hashlock time contracts between compatible chains",
  "id": "2-atomic-swaps---hashlock-time-contracts-between-compatible-chains",
  "level": 3
}, {
  "value": "3. Local Interop and non-custodial solutions",
  "id": "3-local-interop-and-non-custodial-solutions",
  "level": 3
}, {
  "value": "3.1 Local Interop via DEXs",
  "id": "31-local-interop-via-dexs",
  "level": 4
}, {
  "value": "3.2 Multi-Chain Wallets",
  "id": "32-multi-chain-wallets",
  "level": 4
}, {
  "value": "4. Bridging to solve Interop between chains",
  "id": "4-bridging-to-solve-interop-between-chains",
  "level": 3
}, {
  "value": "5. Intent Solvers Networks - Bridging on Steroids",
  "id": "5-intent-solvers-networks---bridging-on-steroids",
  "level": 3
}, {
  "value": "6. Generalized Programmable Solvers - Solvers that are smarter, co-ordinated and generalized",
  "id": "6-generalized-programmable-solvers---solvers-that-are-smarter-co-ordinated-and-generalized",
  "level": 3
}, {
  "value": "7. Full Stack Interop - Push Chain (Universal L1)",
  "id": "7-full-stack-interop---push-chain-universal-l1",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Interop as a Spectrum",
        src: (__webpack_require__(234843)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "intro",
      children: "Intro"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Web3 Interoperability (interop) is often seen as an imaginary creature, a unicorn that will never become real. This is because it's like a path on which the perfect destination is difficult to find, and there are tons of design choices, learning curves as well as UX compromises along the way."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Attempts to 'solve' interop within these constraints has led to a variety of solutions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In this article, we provide a general overview of these approaches and show how they are all interconnected. We also highlight how the meaning of interop has shifted as the web3 industry has matured and expanded, and outline a possible endgame."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Before we get to that, i.e. full stack interoperability, we will discuss how interop started and, more importantly, why it should be viewed as a spectrum rather than a binary ‘0’ or ‘1‘. In reality, interop and the desire to defragment has been with us from the moment Bitcoin on/off-ramp came to existence!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "the-interop-spectrum",
      children: "The Interop Spectrum"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-the-first-interop---centralized-exchanges",
      children: "1. The First Interop - Centralized Exchanges"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The desire for an interoperable and defragmented web3 has been with us ever since the first Bitcoin on/off-ramp took off. No sooner did it come into existence than our desire to make it tradable with traditional finance (TradFi) arose. This need was further deepened with the rise of other layer 1s such as Ethereum, Ripple, Cardano etc."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The user's need was clear: a unified interface which allowed the trading of different crypto assets directly and instantly. Centralised exchanges (CEXs) arose to fulfil this need. They abstracted away the complexity of different chains from the frontend at the cost of introducing trust assumptions and centralisation at the backend."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This era saw the origin of many CEXs, some of which have since disappeared (such as Mt. Gox), and others that have become household crypto names (such as Coinbase and Binance). While this worked for the users who wanted convenience, it also exposed issues with centralizing decentralized assets, giving us the next problem we had to tackle."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Progressive Problem - CEXs, with their centralized custody, opened up new issues for crypto and web3. Most of them arose from the very nature of custodial design which included exchanges getting hacked, users getting locked out or losing time before getting their funds and of course, the rare but not uncommon issue of exchange founders vanishing with keys that custodied the user funds."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This led us, the web3 collective, to work towards solving these issues which resulted in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "next iterative innovation"
      }), " in chasing interop. A solution known as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "atomic swaps"
      }), " - a method by which two chains could perform a trustless exchange."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-atomic-swaps---hashlock-time-contracts-between-compatible-chains",
      children: "2. Atomic Swaps - Hashlock time contracts between compatible chains"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Atomic swaps were so named because they turned a 'swap' into a self-contained unit of operations on smart contracts which would succeed or fail as a bundle. This was done to prevent situations in which one side fulfils its side of the bargain but the other does not. We will later see how this idea of 'atomicity' survives to this day in solver networks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Proposed on a Bitcoin forum in 2013 as 'hash-time locked contracts' (HTLCs), the first iteration of atomic swaps involved two smart contracts (one each on the source and destination chains) operating together to form a digital escrow with a shared secret."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "What makes them historically significant is that they were the first peer-to-peer chain-agnostic interop solution. Initially, they unified the interop design space by showing that trustless cross-chain swaps were possible between all ecosystems. Over time, however, they resulted in a new round of competition between 'HTLC compatible' chains."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "The Progressive Problem"
      }), " - Despite being peer-to-peer, HTLCs were unable to 'solve' the interop problem due to two important limitations: (a) They involved multiple transactions leading to scalability challenges. (b) Different blockchains had their own standards which were not compatible."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["These bottlenecks led to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "next iterative innovations"
      }), ": in the form of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "decentralised exchanges"
      }), " (DEXs) and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "multi-chain wallets"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-local-interop-and-non-custodial-solutions",
      children: "3. Local Interop and non-custodial solutions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "31-local-interop-via-dexs",
      children: "3.1 Local Interop via DEXs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This breakthrough was led by Uniswap, which later pioneered not only decentralized finance (DeFi) but also kicked off the era of web3 apps. Its key innovation was to replace centralised orderbooks with automated market making algorithms (AMMs) and decentralised liquidity pools. This solved a lot of problems for advanced web3 users as they could conduct asset swaps directly from their wallets (yes if you used Metamask back then, you were an advanced user!)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Technically speaking, such systems suffered from two fundamental limitations: (a) They required knowledge of how particular blockchains work (for instance, ERC-20 token function calls of Approve and Transfer was not something an average joe understood). (b) They were limited to their own chains."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "32-multi-chain-wallets",
      children: "3.2 Multi-Chain Wallets"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Around the same time, crypto wallets emerged that offered the convenience of self-custody, i.e., the ability to store tokens outside the ambit of exchanges. Although bulk of the trading still took place on CEXs, the user now had the option of using non-custodial wallets which could be standalone (e.g. Metamask, Electron) or multi-chain (e.g. Exodus, Trust)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "The Progressive Problem"
      }), " - Even with DEXs and multi-chain wallets, problems with swapping between different chains remained. At the same time, EVMs were going through countless innovations and purpose built L2 chains started propping up."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This led to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "next iterative innovation"
      }), ", i.e. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Bridging"
      }), ", which usually followed a ‘Lock and Mint’ solution. A standard on Cosmos also became popular in this time known as IBC(Inter-Blockchain Communication Protocol)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-bridging-to-solve-interop-between-chains",
      children: "4. Bridging to solve Interop between chains"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Bridging was an excellent solution, albeit not without its own set of issues. It aimed to tackle moving funds between chains by first locking them on a smart contract and then using a set of validators, attesting and releasing the funds on other chains."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As is the nature of permissionless technologies, countless innovations emerged in parallel. We will consider the two main ones. First, trusted or semi-trusted bridging, which was how BTC was locked to mint WBTC, with minting being handled by a trusted set of custodians (WBTC DAO)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Second, which became the successor and was largely adopted in the industry was trustless bridging, involving a set of nodes attesting to the asset movement between chains. Some of the popular bridging solutions that we got were:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Wormhole"
        }), ", where you locked your token on one chain and released it on another chain, the caveat being that as a developer, you had to tweak your smart contracts and bridging was usually slow. But this also meant locking all funds on one smart contract on a chain which opened a couple of attack vectors such as smart contract vulnerabilities or oracle manipulations, etc."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "IBC"
        }), ", which required running light clients on both the chains, which handled proof verification before moving funds; though this was limited mainly to Cosmos or required oracles with light node smart contracts on non-Cosmos chains to function leading to adaptation limited to only the Cosmos ecosystem."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "ZK Proofs"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Optimistic Proofs"
        }), " that ensured Ethereum L1 to L2s transfer which were quite fast but at times expensive to compute or required several days of challenge period to escape (revert) back to L1."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "The Progressive Problem"
      }), " - Bridging solved the trustlessness problem to an extent but largely was slow, forcing users to wait between movements or were fragmented or limited to a few eco-systems of chains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This led to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "next iterative innovation"
      }), ", which is known as the intent-solver system. In which an off-chain operator takes the risk (in exchange for a fee) for offering convenience and speed for moving funds across chains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "5-intent-solvers-networks---bridging-on-steroids",
      children: "5. Intent Solvers Networks - Bridging on Steroids"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With intent solver networks, we have entered the current era of interop solutions. They are arguably the biggest improvement we have seen since the days of CEXs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The way they work is quite novel: instead of bridging (that requires trusted validators or decentralized validators to slowly attest and then move funds) they flip the attestation and risk away from the smart contract (used to lock and mint in bridges) and gives it to off-chain specialized actors that almost instantly fill the user’s intent(bridging, trading of assets, etc) using their own liquidity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This feature works in the following way: :"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The user provides their intent such as “swap minimum ETH for USDT on Base” or “Swap SOL for minimum USDT on Ethereum”."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Along with this, the user either deposits assets, plus a small fee for solvers on a smart contract on the source chain or approves the assets to be used off-chain (mostly after they have already called approve on that app-specific smart contract)."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "These instructions are then taken to a solver network, which, in the simplest terms are made of single off-chain actors that at least have the desired asset liquidity on the destination chain."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The network then does an auction of sorts, which can be based on speed or cost. One popular auction mechanism done over is reverse Dutch auction, where the fee starts from the maximum point that will be paid and these off-chain solvers each bid a fee to win the auction. In the end, the lowest fee solver wins the bid and is tasked with fulfilling the intent."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "All of this takes less than a few seconds to be completed, after which the solver fulfils the obligation using its own liquidity on the destination chain, ensuring that the user gets their funds lightning fast."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Later on, the solver submits the proof on the source smart contract, which mostly uses oracles to verify that the solver has done their job and then subsequently releases the funds to them."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This approach improves speed (typically happens within a few seconds), eliminates the attack vector of a single bloated smart contract worth millions of dollars, and is also scalable. But it does not (yet) mean that we have a magic bullet for web3 interop."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "The Progressive Problem"
      }), " - The main problem with such networks is that they require a high degree of specialisation with unclear incentives for participation (e.g. solvers would much rather become liquidity providers and earn more). They may also be app-controlled which can lead to vendor lock-in, or highly function-specific which can result in avoidable coordination costs."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Furthermore, they need a reliable infrastructure on the app side (such as an oracle network) in order to determine the best trade routes. Even the simplest intents require precise and up to date knowledge of prices, a problem which is compounded as more chains get involved. And finally, there's the problem of liquidity pool coordination and rebalancing, which creates additional risk and complexity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["These problems have led us to design a new approach or the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "next iterative innovation"
      }), " keeping with the spirits of this article. We are terming them as '", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "generalised programmable solvers'"
      }), " that can optimise, eliminate added infra and execute any custom routes which might be required by any developers of any app."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "6-generalized-programmable-solvers---solvers-that-are-smarter-co-ordinated-and-generalized",
      children: "6. Generalized Programmable Solvers - Solvers that are smarter, co-ordinated and generalized"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Programmable solvers"
      }), " is a term that we have coined at Push Chain to distinguish the next step in innovation that the solvers require to work at scale."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "At its simplest, it means that developers will have shared state access to other blockchains, i.e. the ability to read, fetch and utilise the state of other chains. This will allow them to create custom pathways for fulfilling intents, all from a single universal EVM smart contract deployed on Push Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Universal Smart Contract Example (Pseudocode)",
        src: (__webpack_require__(876110)/* ["default"] */ .A) + "",
        width: "2048",
        height: "1103"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This approach solves a lot of issues that hamper the adoption of solvers in web3. In particular:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Eliminates the need for having an external oracle or underlying infrastructure"
        }), ": Shared state within Push Chain enables developers to logically code what their solvers need to do given different circumstances."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For example, if someone wants to swap $TRUMP from Solana and they have USDT on BNB, they will be able to read the BNB-USDT value from PancakeSwap, the SOL-USDT value from Raydium, and thus calculate the $TRUMP-USDT value from Raydium; all from a single smart contract deployed on Push Chain!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once you have these values, just provide basic(atomic) solver instructions from your smart contract (still on Push Chain) and then let the solver network do its magic."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Enables anyone to be a solver / solves LP co-ordination:"
        }), " Once the solver network has a basic path, anyone can simply choose to run a basic solver software instead of creating a specialized one as the basic path is already provided. Though this doesn’t stop specialized solvers as they can then optimize the pathway by creating their own custom logic. The Solver network is now for everyone, instead of a few specialized actors."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Allows specialized solvers pooling"
        }), ": Since the path can consist of different atomic steps – in the above example: swapping, bridging, protocol interaction – each one of these can be provided to action-specific specialized solvers, further solving the co-ordination issue."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Enables any app to use solver network and be fully interoperable"
        }), ": Since all the functionalities are driven by a single universal smart contract deployed by the developer on Push Chain, the interop solution is now developer friendly, no matter what apps they are creating. Furthermore, it can be deployed in hours if not minutes!"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "The Progressive Problem"
      }), " - The only problem this solution doesn’t address is the burden it places on the user to come to Push Chain to leverage the solution."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Which, of course, brings us to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "next and final iterative solution - Full Stack Interop"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "7-full-stack-interop---push-chain-universal-l1",
      children: "7. Full Stack Interop - Push Chain (Universal L1)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Image",
        src: (__webpack_require__(755785)/* ["default"] */ .A) + "",
        width: "720",
        height: "546"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Chain which is a universal L1 chain offers full stack interop to enable a synergetic, unified web3, where ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "any apps"
      }), " of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "any chain"
      }), " become accessible by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "any user or wallet"
      }), " of any chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To facilitate seamless functionality for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "developers"
      }), ", it enables ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "programmable solvers, shared state"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "universal smart contracts"
      }), " making it the most seamless Developer Experience (DevEX) crypto has ever seen."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["And to ensure a frictionless, zero-learning and hassle-free environment for users, it employs ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cross-chain fee"
      }), " & ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Wallet Abstraction"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cross-chain fee abstraction"
      }), " enables the user, no matter which chain they are on, to fund the gas for their transaction on Push Chain using native token of the chain they are currently on, eliminating the hassle for the user to bridge gas and allowing them to use the app from any chain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Wallet abstraction"
      }), " provides a flexible, embeddable wallet experience, tailored to individual user journeys while preserving decentralization. This type of abstraction offers a simpler UX to both existing and new web3 users."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Existing Web3 Users:"
        }), " Already using Ethereum, Solana, or another chain? The Push Chain wallet lets you continue using your existing setup -—no extra hoops. Combined with fee abstraction, transactions stay native to the source blockchain, making cross-chain use effortless."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "New Web3 Users (Web2 Normies):"
        }), " Not web3-savvy? No problem. Just log in with an email or social account. Under the hood, the wallet uses sharding and passkeys to stay non-custodial, but feels as simple and intuitive as web2."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "By enabling seamless transactions from any chain, abstracting away gas and wallet complexities, and fostering interoperability across L1s, L2s, and L3s, Push Chain ensures a frictionless web3 experience for users and developers alike."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This results in a terraformed world of universal (fully interoperable) applications for web3. In this paradigm, instead of being a user of \"Uniswap on Ethereum,\" \"Uniswap on Polygon,\" or \"Uniswap on Arbitrum,\" a person simply becomes a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "user of Uniswap"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Interop is the end goal for ensuring that crypto apps arrive to mainstream users, no matter where they are from, or even if they get onboarded from web2."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Seeing interop as a spectrum helps us realize that it’s a problem that we have iteratively solved. Just like how web1 evolved to web2 and then to web3 to fix the problems of its predecessor."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Solving this is within our reach and thus the dream of enabling true interoperability from any app of any chain to any user of any chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let’s build this future together, let’s build a better, more functional web3… and let’s build Universal / Fully Interoperable Apps!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It’s about time anyway 💪"
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

/***/ 234843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-106422a36c33aa1ea942a9b199a40b5d.webp");

/***/ }),

/***/ 755785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-7eec2fece4c0893ad137838f4ea40f9a.webp");

/***/ }),

/***/ 876110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-b2d98b955f86d833d7c1872a9cd5f944.webp");

/***/ })

}]);