"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[86682],{

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

/***/ 381300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-821023ae379df1f3bcfe70b5277f820d.webp");

/***/ }),

/***/ 429891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-821023ae379df1f3bcfe70b5277f820d.webp");

/***/ }),

/***/ 509362:
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
	slug: 'announcing-winners-of-billion-reasons',
	title: 'Announcing Winners of Billion Reasons To Build Coding Challenge 🎉🔔',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Announcing Winners of Billion Reasons To Build Coding Challenge 🎉🔔',
	text: 'Phase- 1 winners of the $55,000+ prize pool   ',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technology',
		'Billion Reasons to Build'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/announcing-winners-of-billion-reasons",
  "source": "@site/blog/2024-01-15-announcing-winners-of-billion-reasons/index.md",
  "title": "Announcing Winners of Billion Reasons To Build Coding Challenge 🎉🔔",
  "description": "Announcing Winners of Billion Reasons To Build Coding Challenge 🎉🔔",
  "date": "2024-01-15T00:00:00.000Z",
  "formattedDate": "January 15, 2024",
  "tags": [
    {
      "label": "Push Protocol",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-protocol"
    },
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/web-3"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain-technology"
    },
    {
      "label": "Billion Reasons to Build",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/billion-reasons-to-build"
    }
  ],
  "readingTime": 2.566666666666667,
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
    "slug": "announcing-winners-of-billion-reasons",
    "title": "Announcing Winners of Billion Reasons To Build Coding Challenge 🎉🔔",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Announcing Winners of Billion Reasons To Build Coding Challenge 🎉🔔",
    "text": "Phase- 1 winners of the $55,000+ prize pool   ",
    "tags": [
      "Push Protocol",
      "Web3",
      "Blockchain Technology",
      "Billion Reasons to Build"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Announcing “Group Chat” from Push Protocol and Unstoppable Domains ",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/announcing-group-chat-from-push-unstoppable"
  },
  "nextItem": {
    "title": "Push 2023 Year In Review 🎯",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-roadmap-recap-2023"
  }
};
const assets = {
"image": (__webpack_require__(381300)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Quantum-proofing Ethereum Network – solved by Aditya Bisht",
  "id": "quantum-proofing-ethereum-network--solved-by-aditya-bisht",
  "level": 3
}, {
  "value": "All-new DAO Permissions – solved by Samuel Mens",
  "id": "all-new-dao-permissions--solved-by-samuel-mens",
  "level": 3
}, {
  "value": "Meet the winners on Jan 16th",
  "id": "meet-the-winners-on-jan-16th",
  "level": 3
}, {
  "value": "BRB Goes Online With 9 Challenges Still Available To Solve",
  "id": "brb-goes-online-with-9-challenges-still-available-to-solve",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Announcing Winners of Billion Reasons To Build Coding Challenge 🎉🔔",
        src: (__webpack_require__(429891)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In August last year, we started an exciting journey with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/a-billion-reasons-to-build-finding-india-s-best-web3-developers/",
        children: "launch"
      }), " of our Billion Reasons to Build (BRB) developer tour across India. The mission of the campaign was simple – to provide developers the opportunity to create real-world impact by giving them a hard problem to solve from leading protocols. This of course included rewards."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To create a variety of challenges, we teamed up with 12 of the most prominent protocols in web3 including Ethereum Foundation, ETHGlobal, Polygon, Filecoin, The Graph, Aragon, Timeswap, Alchemy, Shardeum, Flipkart, Biconomy, and Chainsafe to create a running hackathon."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Each partner in the BRB hackathon presented their own unique Coding Challenge – a complex problem with a substantial bounty for the builder who could solve it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Today, we're thrilled to announce that 2 of these Coding Challenges have been solved!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here are the 2 challenges, the importance behind each of them, and the masterminds behind the game-changing solutions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "quantum-proofing-ethereum-network--solved-by-aditya-bisht",
      children: "Quantum-proofing Ethereum Network – solved by Aditya Bisht"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Coding Challenge Owner: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://ethereum.foundation/",
        children: "Ethereum Foundation"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Challenge: Figure out a way to quantum-proof the Ethereum Network, read more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.notion.so/pushprotocol/Ethereum-Foundation-07179dcf7f7e44efb7d2b2c9d2296264?pvs=4",
        children: "here"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Winning Builder: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/bisht__13",
        children: "Aditya Bisht"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Quantum computing is a looming threat to blockchain networks. Its powerful computing capabilities mean it can be used to reverse-engineer secret keys from public keys. To retain security and integrity in the Ethereum Network, the challenge was presented to find a way to quantum-proof the network using account abstraction."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We’d like to congratulate ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Aditya Bisht"
      }), " for successfully solving the challenge and contributing to the security and robustness of the Ethereum Network."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "He shared his excitement with us – “Faced with intriguing complexities and the convergence of overlapping domains, the challenge not only pushed the boundaries but also contributed to advancing the ZK domain. Immense gratitude to the mentors from the Ethereum foundation and the unwavering support from Push. This victory is a testament to the collaborative spirit propelling the Ethereum project forward.” – Aditya"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "all-new-dao-permissions--solved-by-samuel-mens",
      children: "All-new DAO Permissions – solved by Samuel Mens"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Coding Challenge Owner: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://aragon.org/",
        children: "Aragon"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Challenge: Create a permission management protocol for allocating selective permissions to specific individuals and subDAOs, read more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.notion.so/pushprotocol/Aragon-f5467edc3c2a4f8d9d5693a0a6e680de?pvs=4",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Winning Builder: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://@plopmenz",
        children: "Samuel Mens"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "DAOs and organizations rely on being able to give certain permissions, roles, and responsibilities to specific individuals and teams (subDAOs) in order to build more efficiently. But keeping track of which wallets have which permissions can be confusing, not to mention how easy it is to lose track of these permissions across a single DAO. As such, the problem statement required a builder to find a way that enables a DAO to efficiently manage permissions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With that, we’d like to congratulate Samuel Mens who built two plugins and a UI that allow you to manage both subDAOs and NFT-based permissions using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/hatsprotocol",
        children: "@hatsprotocol"
      }), " and Aragon OSx. For all DAOs that are built using Aragon, there is now a whole new level of on-chain governance management tools available."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "\"I've been part of the Aragon community since their launch of OSx and have built several plugins. I had this idea for a pretty ambitious plugin, which alligned very well with the BRB Hackathon bounty. I am very grateful for Push Protocol for providing this opportunity, giving me the motivation to actually built it and go the extra mile.\""
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "– Samuel Mens"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "meet-the-winners-on-jan-16th",
      children: "Meet the winners on Jan 16th"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We’re excited to host a Twitter Space on Jan 16th, 3PM UTC to talk to our partners and winners of the phase-1 and learn more about their journey and experiences. Don’t forget to join us for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/i/spaces/1lPKqbWRgvEGb",
        children: "Twitter Space"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "brb-goes-online-with-9-challenges-still-available-to-solve",
      children: "BRB Goes Online With 9 Challenges Still Available To Solve"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Thanks to the incredible success of the BRB so far, we are excited to announce the extension of the initiative. We’re calling it ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "BRB Online"
      }), ". This online campaign will mean the BRB Coding Challenges will continue to run indefinitely until solved, allowing more developers worldwide to build for and collaborate with leading web3 projects."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Be sure to check out the remaining Coding Challenges here 👉", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/brb/",
        children: "https://push.org/brb/"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Richa Joshi, Co-founder at Push Protocol, shared her excitement:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "“The success of BRB has inspired us to take the initiative online. Developers worldwide can now continually access BRB challenges and collaborate directly with some of web3’s leading projects.”"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We are extremely proud to support the BRB winners and look forward to announcing the winners of all the remaining partner challenges. The journey continues, and we are eager to witness the success and growth of the BRB initiative, shaping a future marked by collaboration, innovation, and possibilities."
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



/***/ })

}]);