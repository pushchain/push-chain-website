"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[60638],{

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

/***/ 35328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image5-437f5cb65113d37d7bf641acc25c88d6.webp");

/***/ }),

/***/ 36580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a2b1ee18b9321f0e156cc7243df72278.webp");

/***/ }),

/***/ 234668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image10-458216c30a6b7aca5a5d94ce1534f7dc.webp");

/***/ }),

/***/ 384260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image9-143056c309dffe3ba02d82c7e9993c19.webp");

/***/ }),

/***/ 386255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image11-cce24a51c407e357b324d077a07141b1.webp");

/***/ }),

/***/ 430503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image8-26970ef357a1f818d9447a09899da975.webp");

/***/ }),

/***/ 432910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image12-855142e75f96a5d4b45e38ed9c619f8e.webp");

/***/ }),

/***/ 505767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-a2b1ee18b9321f0e156cc7243df72278.webp");

/***/ }),

/***/ 556668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image1-001d961bb7b8213d6b45e5c533798da9.webp");

/***/ }),

/***/ 572208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image14-6eaaf73ecd74400dc1c897013ae507d0.webp");

/***/ }),

/***/ 573529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image2-904bacab17aabf8d20e05069e125be7f.webp");

/***/ }),

/***/ 589022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image3-8279076011ac694e9a4985be9f60a0a4.webp");

/***/ }),

/***/ 805058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image7-d923789161c8bfa74f1d949737b6ed07.webp");

/***/ }),

/***/ 829997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image6-24b60aad49ba4a18828ebc1877062e25.webp");

/***/ }),

/***/ 905379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image4-34eb923e99adbd0c7c53d1d763102c41.webp");

/***/ }),

/***/ 936122:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'evolution-of-push',
	title: 'Evolution of Push',
	authors: [
		'richa'
	],
	image: './cover-image.webp',
	description: 'Evolution of Push',
	text: 'One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.',
	tags: [
		'Push Chain',
		'Shared App Experience',
		'Shared State Blockchain'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/evolution-of-push",
  "source": "@site/blog/2024-12-16-evolution-of-push/index.md",
  "title": "Evolution of Push",
  "description": "Evolution of Push",
  "date": "2024-12-16T00:00:00.000Z",
  "formattedDate": "December 16, 2024",
  "tags": [
    {
      "label": "Push Chain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-chain"
    },
    {
      "label": "Shared App Experience",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/shared-app-experience"
    },
    {
      "label": "Shared State Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/shared-state-blockchain"
    }
  ],
  "readingTime": 7.593333333333334,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Richa Joshi",
      "url": "https://twitter.com/Riijo",
      "imageURL": "/assets/blog/authors/authorricha.png",
      "key": "richa"
    }
  ],
  "frontMatter": {
    "slug": "evolution-of-push",
    "title": "Evolution of Push",
    "authors": [
      "richa"
    ],
    "image": "./cover-image.webp",
    "description": "Evolution of Push",
    "text": "One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.",
    "tags": [
      "Push Chain",
      "Shared App Experience",
      "Shared State Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Innovations by Push Chain",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/innovations-by-push-chain"
  },
  "nextItem": {
    "title": "Consumer Apps 🫶🏽 Push Chain - Innovations that can be built on Push Chain",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/consumer-apps-that-can-be-built-on-push-chain"
  }
};
const assets = {
"image": (__webpack_require__(36580)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "<strong>Summary</strong>",
  "id": "summary",
  "level": 2
}, {
  "value": "The Beginning",
  "id": "the-beginning",
  "level": 2
}, {
  "value": "Email to Ethereum Foundation",
  "id": "email-to-ethereum-foundation",
  "level": 3
}, {
  "value": "Creating MVP at ETHGlobal HackMoney 2020",
  "id": "creating-mvp-at-ethglobal-hackmoney-2020",
  "level": 3
}, {
  "value": "Getting help, support and mentorship from EF",
  "id": "getting-help-support-and-mentorship-from-ef",
  "level": 3
}, {
  "value": "Making it to Top 3 of Gitcoin Grants (Round 7)",
  "id": "making-it-to-top-3-of-gitcoin-grants-round-7",
  "level": 3
}, {
  "value": "Getting into Kernel Genesis Batch",
  "id": "getting-into-kernel-genesis-batch",
  "level": 3
}, {
  "value": "Making awesome friends along the way!",
  "id": "making-awesome-friends-along-the-way",
  "level": 3
}, {
  "value": "The start of web3 notifications",
  "id": "the-start-of-web3-notifications",
  "level": 2
}, {
  "value": "Piloting with OG protocols",
  "id": "piloting-with-og-protocols",
  "level": 3
}, {
  "value": "Getting backed by people we adore",
  "id": "getting-backed-by-people-we-adore",
  "level": 3
}, {
  "value": "Getting noticed and spreading the word",
  "id": "getting-noticed-and-spreading-the-word",
  "level": 3
}, {
  "value": "Building one of the first consumer app",
  "id": "building-one-of-the-first-consumer-app",
  "level": 2
}, {
  "value": "Building for scalability and speed",
  "id": "building-for-scalability-and-speed",
  "level": 3
}, {
  "value": "Inventing consumer tx by accident!",
  "id": "inventing-consumer-tx-by-accident",
  "level": 3
}, {
  "value": "Building for seamless web3 UX",
  "id": "building-for-seamless-web3-ux",
  "level": 3
}, {
  "value": "Building for unification of web3",
  "id": "building-for-unification-of-web3",
  "level": 3
}, {
  "value": "Rebranding to become the communication protocol of web3",
  "id": "rebranding-to-become-the-communication-protocol-of-web3",
  "level": 3
}, {
  "value": "Becoming the leading notification protocol for web3",
  "id": "becoming-the-leading-notification-protocol-for-web3",
  "level": 3
}, {
  "value": "Enters Push Chain - realization of what we actually built and its impact on web3",
  "id": "enters-push-chain---realization-of-what-we-actually-built-and-its-impact-on-web3",
  "level": 2
}, {
  "value": "Realization of the end game",
  "id": "realization-of-the-end-game",
  "level": 3
}, {
  "value": "Launching Push Chain proposal and Devnet 🚀",
  "id": "launching-push-chain-proposal-and-devnet-",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Evolution of Push",
        src: (__webpack_require__(505767)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "summary",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Summary"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Protocol has come a long way! We’ve delivered over 140M notifications, built a community of 500K aggregate users, powered notifications for 500+ projects, and are known as the de facto leader in notifications and communications for web3.\nWe took the biggest and the most ambitious step in its history last week and have launched governance for its evolution to Push Chain, a shared state blockchain for building universal applications. It is a sharded Proof of Stake (PoS) chain built to allow developers to create user-centric app experiences and act as a shared settlement layer for multiple L1s, L2s, L3s."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The journey often matters more than the destination, and we couldn’t agree more. From our beginnings at ETHGlobal 2020, to becoming an EF alumnus, ranking as a top 5 project in Gitcoin Grants, securing funding from leading VCs and angels, inventing the communication stack for web3, and now launching a consumer-centric L1 to unify web3 - each milestone has shaped our path and brought us here. Buckle up, it's time to reminisce!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "the-beginning",
      children: "The Beginning"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "email-to-ethereum-foundation",
      children: "Email to Ethereum Foundation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We started with an idea for Push Protocol and web3. The thesis was that protocols in web3 only interact with wallet addresses and thus it made sense to build a notification and communication system that can inform these wallets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "So the next time your DeFi loan is about to be liquidated, or a governance proposal comes up or your ENS is about to expire or someone comments on your web3 social, you get notified and can re-engage."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "First Image of Evolution of Push",
        src: (__webpack_require__(234668)/* ["default"] */ .A) + "",
        width: "1412",
        height: "756"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "creating-mvp-at-ethglobal-hackmoney-2020",
      children: "Creating MVP at ETHGlobal HackMoney 2020"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We were guided by EF to go and build the project out first at ETHGlobal, which is what we did and was the best thing that ever happened for us. We have made friends that are mentors, friends that are our investors, friends that helped us connect to relevant projects and friends that geeked out together on tech."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Excuse the video quality, I still hadn’t learned at this point what good quality cams or lighting could do."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .VideoContainer */ .bC, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
        width: "100%",
        height: "100%",
        style: {
          borderRadius: "32px",
          aspectRatio: '56.25%'
        },
        src: "https://www.youtube.com/embed/vvEpB3ddTko",
        title: "#HackMoney Group 1 Judging",
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "getting-help-support-and-mentorship-from-ef",
      children: "Getting help, support and mentorship from EF"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We have always said that Ethereum is where innovation has fostered traditionally and that is due to the community and the folks at Ethereum that go way beyond to help you in your journey."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EF has helped us, like countless other projects in guiding through the tranches of web3, especially when you are just getting started."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Second Image of Evolution of Push",
        src: (__webpack_require__(589022)/* ["default"] */ .A) + "",
        width: "1638",
        height: "1999"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://blog.ethereum.org/2020/08/19/esp-beyond-grants",
          children: "https://blog.ethereum.org/2020/08/19/esp-beyond-grants"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "making-it-to-top-3-of-gitcoin-grants-round-7",
      children: "Making it to Top 3 of Gitcoin Grants (Round 7)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "One of the best feelings we had was when we participated in Gitcoin Grants and the community came together to fund us out. This was in many ways the first check that we saw after we had started building Push (then EPNS)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There’s serenity in making something that gets loved by the people for whom you are building and is the best feeling that any entrepreneur can have. To us, these 214 contributors is what made everything we had done so far worthwhile!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Third Image of Evolution of Push",
        src: (__webpack_require__(430503)/* ["default"] */ .A) + "",
        width: "1999",
        height: "1704"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Of course, the cherry on top was when Vitalik covered GR 7 in his ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://vitalik.eth.limo/general/2020/10/18/round7.html",
        children: "blog"
      }), ", and we among all the other top projects got a place in his blog, if not in his heart 😅."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "getting-into-kernel-genesis-batch",
      children: "Getting into Kernel Genesis Batch"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Making it into Kernel was a dream come true. I still remember the joy I felt when we were selected. In our application form, there was a question: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "What makes you special from any other project?"
      }), " And what we wrote was ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Every project that we have seen is special in its own ways, so nothing makes us special with respective to them but here’s why we feel we should be selected:"
      }), " Technical and gap in communication, ux, etc"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We submitted this but then stressed out on if we were rude or missed the context of the question. Thankfully, Vivek, Sachin and team embraced our web3 vibe wholeheartedly."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Fourth Image of Evolution of Push",
        src: (__webpack_require__(386255)/* ["default"] */ .A) + "",
        width: "1388",
        height: "1573"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/harshrajat/status/1279398824729952257",
          children: "https://x.com/harshrajat/status/1279398824729952257"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This was also the place where we made so many friends that I still reach out to for help now. This was the place where I first dmed Juan Benet, Met Sandeep, Alok (Standard VC), Thomas Klocanas and countless other folks that I look up to."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This in a way completed our journey of getting onboarded to web3 as we were now part of the vibes!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "making-awesome-friends-along-the-way",
      children: "Making awesome friends along the way!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "During this entire journey, we made friends who just wanted to help and the only thing we had to do was ask, or tweet, or dm. This was and still is why Ethereum is always home for us!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Fifth Image of Evolution of Push",
        src: (__webpack_require__(35328)/* ["default"] */ .A) + "",
        width: "1388",
        height: "854"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/owocki/status/1335637426392330241",
          children: "https://x.com/owocki/status/1335637426392330241"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Sixth Image of Evolution of Push",
        src: (__webpack_require__(905379)/* ["default"] */ .A) + "",
        width: "1238",
        height: "706"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/jason_chen998/status/1695082395505172944",
          children: "https://x.com/jason_chen998/status/1695082395505172944"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Seventh Image of Evolution of Push",
        src: (__webpack_require__(805058)/* ["default"] */ .A) + "",
        width: "1238",
        height: "890"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/defiprime/status/1346124418192465928",
          children: "https://x.com/defiprime/status/1346124418192465928"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Protocol is the “Missing piece of Web3” that is required to bring the UX of Web2 to Web3."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "the-start-of-web3-notifications",
      children: "The start of web3 notifications"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "piloting-with-og-protocols",
      children: "Piloting with OG protocols"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The next phase of our journey was to start sending web3 notifications and we had a chicken and egg problem over here. Notifications are useful for wallets to show if popular protocols are sending them but for popular protocols to embrace web3 notifs, wallets need to integrate them 😱."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We took a chance and reached out to some of the best and top protocols in the space back then, hint: they still are the leaders! They were the ones who helped us crack this chicken and egg problem and solidified our conviction on why web3 is the future - it’s because each one of them is trying to expand the boundaries of web3."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Eigth Image of Evolution of Push",
        src: (__webpack_require__(384260)/* ["default"] */ .A) + "",
        width: "1388",
        height: "1062"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/Uniswap/status/1377374973090689030",
          children: "https://x.com/Uniswap/status/1377374973090689030"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "getting-backed-by-people-we-adore",
      children: "Getting backed by people we adore"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The momentum generated by Push till this point helped us get the attention of the best angels and VCs in the space. The success that we got due to the community, builders, web3 OGs coming and helping us together led us to secure our seed (and later series A) with folks that had some of the best mind share and vision for web3."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Ninth Image of Evolution of Push",
        src: (__webpack_require__(432910)/* ["default"] */ .A) + "",
        width: "1999",
        height: "740"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "♥️and shoutout to backers of Push Protocol including BalajiS, Sandeep Nailwal, Scott Moore, A.Capital, ParaFi, Binance Labs, Jump, Sino Global and so many more!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "getting-noticed-and-spreading-the-word",
      children: "Getting noticed and spreading the word"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push started getting noticed by OGs of web3, we were so humbled by people who we view as mentors and thought leaders writing about us. Push has reached the point where it had a chance to terraform web3, one notif at a time"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Tenth Image of Evolution of Push",
        src: (__webpack_require__(556668)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://balajis.com/p/why-india-should-buy-bitcoin",
          children: "Why India Should Buy Bitcoin Article by BalajiS"
        }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/balajis/status/1336367129960931329",
          children: "Excited to fund EPNS Tweet"
        }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://thedefiant.io/news/defi/unstoppable-domains-launches-token-gated-group-chats",
          children: "Unstoppable Domains Launches Gated Groups Article"
        }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.coindesk.com/business/2022/04/14/ethereum-push-notification-service-raises-10m-at-131m-valuation",
          children: "EPNS Raises 10M at 131M Valuation Article"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "building-one-of-the-first-consumer-app",
      children: "Building one of the first consumer app"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We now realize that apart from inventing the communication protocol for web3, we also were building one of the first consumer app for it which was non-financial in nature and was driven by the utility it offered to average user than the 10x other financial apps promised (and thus, user was incentivized to learn web3 broken ux)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This realization helped us in paving forward an app that is useful and frictionless for the web3 user and enabled us to identify the features that we wanted as we moved towards decentralizing our notification nodes."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "building-for-scalability-and-speed",
      children: "Building for scalability and speed"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We realized very quickly that notification unlike traditional transactions needs to be scalable. It needed an infra that can scale up and maintain speed. To enable this, we built out a solution involving dynamic sharding, ensuring that the solution scales up as more notifications and wallets join in."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "inventing-consumer-tx-by-accident",
      children: "Inventing consumer tx by accident!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "While building our notification nodes for write throughput, ie: handling tens of thousands of parallel notifications. We came up with the architecture of having parallel validators, since having order in notifications was not required."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This paved the way for parallel validators where notifications can be sent to any validators which will then form stateless blocks (or unordered blocks). We didn’t know back then but we had unlocked a massive innovation in web3, having txs where ordering is not critical. This later formed the backbone of Push Chain’s speed and linear scalability."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "building-for-seamless-web3-ux",
      children: "Building for seamless web3 UX"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Another thing that we wanted our notification protocol to have was a seamless onboarding process where the user can just sign in once and then, just like web2, they are not required to sign things again and again. Our Chat Protocol and PGP implementation helped us realize and solve for the most seamless web3 UX. Later on, this learning was transformed into wallet and fee abstraction for Push Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "building-for-unification-of-web3",
      children: "Building for unification of web3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "And finally, we wanted this to be the communication protocol of web3, where notifications and chat can come to Push as a universal hub. Where, protocols from Ethereum, Polygon, Solana, Aptos, or any other EVM or non-EVM are able to come together in a seamless interoperable way."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is not bridging, as bridging moves funds or assets from one chain to another. But, instead it’s unification or having a universal hub. A place where users from all chains come together. This feature is what was transformed to Push Chain as being the universal hub for all chains, where transactions from any chain are supported, where shared state of all wallets are available, where all L1s, L2s and L3s can come together and use Push as a shared settlement layer."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "rebranding-to-become-the-communication-protocol-of-web3",
      children: "Rebranding to become the communication protocol of web3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We started building notifications for web3 under the brand of Ethereum Push Notification Service (EPNS) which made sense when we started since Apple also names their notification service as Apple Push Notification Service (APNS)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "But as we dived deep and started building the features for enabling notifications, chat. We quickly became aware that a non-Ethereum developer might be confused by the name EPNS. Thus, we decided to rebrand to Push, we picked this name because:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We were now placed to become the communication protocol of web3, so ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Ethereum"
        }), " had to go from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Ethereum Push Notification Service"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We were not doing just notification, but instead had chat among other communication tools so ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Notification"
        }), " had to go from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Push Notification Service."
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["And lastly, we were not a service but a decentralized protocol of web3, so ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Service"
        }), " had to go from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Push Service"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Leading us to rebrand to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Push"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Eleventh Image of Evolution of Push",
        src: (__webpack_require__(829997)/* ["default"] */ .A) + "",
        width: "1388",
        height: "1782"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1574771582790406144",
          children: "https://x.com/PushChain/status/1574771582790406144"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "becoming-the-leading-notification-protocol-for-web3",
      children: "Becoming the leading notification protocol for web3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push notifications protocol came a long way from its humble beginnings to now. Today, we have powered hundreds of millions of notifications sent to web3 users across the globe."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We have been integrated natively in many wallets and protocols including Unstoppable, Shapeshift, Decentraland, Metamask Snap and so many more and have been powering notifications and communication for awesome protocols such as Cowswap, 1inch, dydx, hyperliquid, lens, polygon and various others."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Twelfth Image of Evolution of Push",
        src: (__webpack_require__(573529)/* ["default"] */ .A) + "",
        width: "1388",
        height: "1706"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/hypurr_co/status/1851645401834959098?s=46&t=iq2iJvugwsC0iZ3dI-wFOw",
          children: "https://x.com/hypurr_co/status/1851645401834959098?s=46&t=iq2iJvugwsC0iZ3dI-wFOw"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "enters-push-chain---realization-of-what-we-actually-built-and-its-impact-on-web3",
      children: "Enters Push Chain - realization of what we actually built and its impact on web3"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "realization-of-the-end-game",
      children: "Realization of the end game"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "During building for our vision of the most perfect consumer app and the decentralized notification protocol and nodes out. We eventually realized that what we have built instead is far more significant and solves for the seamless web3 that we all dream of."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This realization is what turned into our shared state blockchain - Push Chain, which while being an L1, is not just another L1 as it’s built to be used by users of any other chain without them needing to switch or bridge to this chain. It’s the future of web3 built for unification, consumer and universal apps and seamless onboarding."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "launching-push-chain-proposal-and-devnet-",
      children: "Launching Push Chain proposal and Devnet 🚀"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This has led us to launching our proposal of Push Chain, which just to recap is a shared state L1 blockchain for shared app experiences. Push Chain enables txs from any chain (Solana, Eth, EVM, or non-EVM) with fast finality of <1 second and can scale infinitely as nodes increase, supporting tens of thousands of parallel transactions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Push Chain introduces groundbreaking features including:"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Ability to do any chain tx"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Introduces a new tx type - Consumer transaction (order not important)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Provides wallet and fee abstraction for a seamless user experience"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Enables true scale with parallel validators and dynamic sharding"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Able to do <1 second finality"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Utilizes universal smart contracts - capable of accessing the state of a wallet belonging to a different chain"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Thirtheenth Image of Evolution of Push",
        src: (__webpack_require__(572208)/* ["default"] */ .A) + "",
        width: "1128",
        height: "1999"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .ImageText */ .Lv, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1867184458631405607",
          children: "https://x.com/PushChain/status/1867184458631405607"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The evolution and the journey has been thrilling and we would love to have you, our biggest asset, the community with us as we launch Push Chain and invite developers to build universal apps!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As is the norm in web3, let’s end the article with saying in its truest sense for the future of Push - We all are just getting started!!!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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