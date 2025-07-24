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


const frontMatter = {
	slug: 'another-l1',
	title: 'Is Push Chain Another L1?',
	authors: [
		'harsh'
	],
	image: './cover-image.webp',
	description: 'Learn why Push Chain is built different',
	text: 'The move towards Push Chain was driven by the realisation that we had to do our bit to move the needle on interoperability, not in order to create our own fragmented ecosystem.',
	tags: [
		'Push',
		'Chain',
		'Insights',
		'Vision'
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
      "label": "Push",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push"
    },
    {
      "label": "Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/chain"
    },
    {
      "label": "Insights",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/insights"
    },
    {
      "label": "Vision",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/vision"
    }
  ],
  "readingTime": 3.756666666666667,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Harsh Rajat",
      "url": "https://twitter.com/harshrajat",
      "imageURL": "/assets/blog/authors/authorharsh.png",
      "key": "harsh"
    }
  ],
  "frontMatter": {
    "slug": "another-l1",
    "title": "Is Push Chain Another L1?",
    "authors": [
      "harsh"
    ],
    "image": "./cover-image.webp",
    "description": "Learn why Push Chain is built different",
    "text": "The move towards Push Chain was driven by the realisation that we had to do our bit to move the needle on interoperability, not in order to create our own fragmented ecosystem.",
    "tags": [
      "Push",
      "Chain",
      "Insights",
      "Vision"
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
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "The Curious",
  "id": "the-curious",
  "level": 3
}, {
  "value": "Ecosystem Abstraction",
  "id": "ecosystem-abstraction",
  "level": 3
}, {
  "value": "Cities &amp; Bridges",
  "id": "cities--bridges",
  "level": 3
}, {
  "value": "Necessity-led invention",
  "id": "necessity-led-invention",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h3: "h3",
    img: "img",
    p: "p",
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "the-curious",
      children: "The Curious"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["At crypto conferences I'm often asked how our approach at Push differs from other L1 projects. And at normie gatherings I'm asked which crypto is best for starters. Until now I used to think of these as two distinct questions coming from two distinct audiences, i.e. technical and non-technical. My responses were conditioned by this assumption. At the former I used to talk about our '", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/innovations-by-push-chain/",
        children: "shared state"
      }), "' approach and how it is distinguishable from interoperability (more on that below and in subsequent articles). And to the normies I used to suggest that starting-points can be subjective because different projects are trying to do different things. Some for instance are building reliable forms of decentralised cash, while others are trying to democratise the financial system. Still others are trying to get social media out of the hands of big tech, and a lot of them are just having fun."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The problem with my approach was that it left out the real audience: the 'web3 curious'. This is a huge category which cannot be ignored, and I'm going to define it rather broadly as those people who have heard of crypto and played around with it a bit ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/why-push-chain/",
        children: "without digging deeper"
      }), ". You could say the real reason why they got into the whole thing was quick money. But in order for that to happen I feel they must ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "at some level believe"
      }), " in the larger crypto project. To put it differently, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "even if"
      }), " they thought they were playing around with 'magic internet money', some part of them must have known that the magic was real (or had the potential of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "becoming"
      }), " real). That's the part of the collective psyche we need to reach."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "ecosystem-abstraction",
      children: "Ecosystem Abstraction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To return to the earlier point, I now feel that both audiences were asking me the same thing in different ways, i.e. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "which ecosystem?"
      }), " It's often said that a few years in crypto equals decades in the real world. To me this was never a throwaway sentiment but a profound ground-truth about our industry. When crypto was just starting out people used to debate whether it had 'inherent value' and whether it could ever become 'money'. Those questions have more or less disappeared today because most people have concluded that it does. Thanks to the SEC, the critical regulatory question today seems to be whether a particular crypto is a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.forbes.com/sites/digital-assets/2023/08/14/how-the-secs-charge-that-cryptos-are-securities-could-face-an-uphill-battle/",
        children: "security"
      }), " or not. But of course it took humanity more than a thousand years to get from money to finance."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The lesson we can draw from this is that the forms of '", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/@adamnite/a-history-of-crypto-tribalism-11f9f9c5cbaf",
        children: "crypto tribalism"
      }), "' we see today are comparable to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.wideopenspaces.com/native-american-totem-animals-origins-totem-poles-meaning/",
        children: "historical tribes"
      }), " who hitched their identity to particular totems and money-objects. We took a giant leap when we adopted the human-first-tribe-later perspective. This allowed us to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "abstract away particular ecosystems"
      }), " and develop a more global outlook. Of course I am not suggesting that our particular cultural attributes disappeared with modernity, but rather that they were preserved within a more ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.notion.so/Is-Push-Chain-another-L1-188188aea7f4801a8e5dc22d0c20e0f3?pvs=21",
        children: "'universal' wrapper"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "cities--bridges",
      children: "Cities & Bridges"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Simply put, ‘ecosystem abstraction’ is my general response to both questions posed above. I see it as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://thenetworkstate.com/",
        children: "an ongoing process"
      }), " that Push aims to accelerate -- comparable perhaps to globalisation which aims to overcome national boundaries -- rather than as a quantifiable end state. What this means in concrete terms is that we are building a non-competitive L1 that does not distinguish between normies and crypto-natives."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Why, you wonder? Because it’s the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/what-is-consumer-crypto-and-why-does-it-matter/",
        children: "final ecosystem barrier"
      }), " standing between us and mass adoption. Moreover, it allows us to approach technical problems with a fresh perspective. Consider interoperability. By and large it means two things in crypto: unifying different chains via bridges and developing common standards. The first is a necessary, but more importantly, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "organic"
      }), " approach because bridges between two parts of a city aren't built unless there is significant traffic between them. The trouble right now is that the two sides are run by different municipal authorities, and every time you have to cross between them you must take fresh authorisation from an agent who operates a toll booth."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now if this were a real city the citizens would petition the Mayor and get things changed. They would most likely ask for a monthly ticket and some sort of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://en.wikipedia.org/wiki/FASTag",
        children: "‘fast tag’"
      }), " on their cars which could automatically calculate and deduct the toll-fees from their wallets. But crypto is decentralised and there is no Mayor to petition. So for us the only solution is to get both municipal authorities to agree on a system for quick and trustworthy communication. Moreover, if both sides have different ticketing systems then they would need to develop a common ticketing standard which is mutually recognised."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "necessity-led-invention",
      children: "Necessity-led invention"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In crypto, the reason why interoperability is an especially difficult problem to crack is because it requires unbroken coordination and synchronicity between different ecosystems. With every new chain that is added to the mix, the patchwork expands and becomes more unwieldy. It is therefore legitimate for people to wonder whether we are ‘another L1’ which is ultimately going to increase this messiness."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The short answer is no: Push is not building its own separate municipality in its own corner of the city. Instead we are building systems (such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://whitepaper.push.org/",
        children: "solver networks and fees quotas"
      }), ") through which bridge-operators can communicate and coordinate. Imagine if a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.notion.so/189188aea7f480faaba5f80052406759?pvs=21",
        children: "tourist"
      }), " was visiting the city and wanted to pass through three different bridges in a single drive. The bridge-operators would need to reach consensus on various things including: (a) does he have enough money for all the tolls? (2) is he a legitimate (non-malicious) actor, and (c) has he received necessary permissions from the respective Mayors of the source and destination cities, etc."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the context of crypto these steps are reducible to verifiable cross-chain communications, and because Push has been working on this problem from its origin, it is uniquely positioned to create such a system. In other words, the move towards Push Chain was driven by the realisation that we had to do our bit to move the needle on interoperability, not in order to create our own fragmented ecosystem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Personally, what is most exciting for me is thinking about the new use-cases that such a cross-chain-communication-grid unlocks. Imagine if an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Aurory"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "Star Atlas"
      }), " player is able to leverage Uniswap or Polymarket through in-game intent solvers, or if an artist is able to launch NFTs of their work simultanously across Opensea, Magic Eden and Jpg.store. Here's how my friend and colleague Zee put it in a recent conversation: \"we're trying to build systems where people can use their favourite apps on their favourite chains without friction or second thought.\""]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Yes it's an ambitious road, but we're determined."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "LFPush!"
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

/***/ })

}]);