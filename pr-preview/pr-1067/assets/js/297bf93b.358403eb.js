"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[39775],{

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

/***/ 136923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-8-4bd08b4e256fd2c439eaded4fa6fe0e4.webp");

/***/ }),

/***/ 198572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-5-f91918ea3d03967ae8814369ce9eb76d.webp");

/***/ }),

/***/ 226864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-297da967ee017cf0166a7075be91e11b.webp");

/***/ }),

/***/ 227581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-297da967ee017cf0166a7075be91e11b.webp");

/***/ }),

/***/ 350159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-4-6c3f09959619e46b9500a53645f73a16.webp");

/***/ }),

/***/ 396814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-7-5889e4b087d9fe03e9dafb9b9af71925.webp");

/***/ }),

/***/ 484850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-3-bff063ca8d55e8edd4abaf0d970f84ae.webp");

/***/ }),

/***/ 536112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-295bb4b6d21cab77e940a7e0317a20c4.webp");

/***/ }),

/***/ 566537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-6-a6a527e35a9ce33eb16cf510e026b2f2.webp");

/***/ }),

/***/ 844765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-718d2767255836be8fa851656d3cc5b4.webp");

/***/ }),

/***/ 940371:
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
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'epns-snapshot-voting',
	title: 'EPNS Snapshot Voting: A step by step guide',
	description: 'EPNS Snapshot Voting: A step by step guide',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We human being is social animal who enjoys communicating and exchanging ideas, each one having unique ideas and opinion that mostly leads to chaos. It’s a bit difficult to come up with a solution, in short, we need a democratized way of voting or a leader to take account of this.',
	tags: [
		'Ethereum',
		'Governance',
		'Voting',
		'Democracy',
		'Epnsproject'
	]
};
const contentTitle = 'EPNS Governance:';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-snapshot-voting",
  "source": "@site/blog/2021-11-10-epns-snapshot-voting/index.md",
  "title": "EPNS Snapshot Voting: A step by step guide",
  "description": "EPNS Snapshot Voting: A step by step guide",
  "date": "2021-11-10T00:00:00.000Z",
  "formattedDate": "November 10, 2021",
  "tags": [
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Governance",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/governance"
    },
    {
      "label": "Voting",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/voting"
    },
    {
      "label": "Democracy",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/democracy"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/epnsproject"
    }
  ],
  "readingTime": 1.38,
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
    "slug": "epns-snapshot-voting",
    "title": "EPNS Snapshot Voting: A step by step guide",
    "description": "EPNS Snapshot Voting: A step by step guide",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "We human being is social animal who enjoys communicating and exchanging ideas, each one having unique ideas and opinion that mostly leads to chaos. It’s a bit difficult to come up with a solution, in short, we need a democratized way of voting or a leader to take account of this.",
    "tags": [
      "Ethereum",
      "Governance",
      "Voting",
      "Democracy",
      "Epnsproject"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS Collaborates With World’s Fastest IoT Blockchain IoTeX",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-collaborates-with-world"
  },
  "nextItem": {
    "title": "EPNS to Add Push Notifications to ENS Decentralized Domain Name Services",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-to-add-push-notifications"
  }
};
const assets = {
"image": (__webpack_require__(227581)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(226864)/* ["default"] */ .A) + "",
        width: "1280",
        height: "640"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .ImageText */ .Lv, {
      children: "EPNS SNAPSHOT VOTING"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We human being is social animal who enjoys communicating and exchanging ideas, each one having unique ideas and opinion that mostly leads to chaos. It’s a bit difficult to come up with a solution, in short, we need a democratized way of voting or a leader to take account of this."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["So, we at EPNS have our own Governance mechanism to put proposals, vote, and be a part of the community. If you wanna learn more about the proposal lifecycle, rules & roles of EPNS Governance, refer to the article ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "here"
        })
      }), ". Also, have a look at the overview of the first EPNS Proposal which got approved on Snapshot ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/epns-governance-goes-live-lets-push-for-progressive-decentralized-governance-7448b58b89b4",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "here"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the first iteration of EPNS Governance, Snapshot voting is the final phase of a proposal in which the community could signal their interests on each proposal using delegated $PUSH votes. If you want to know more about how you can vote on Snapshot, follow the instructions below."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "how-to-vote-on-epns-governance-proposals",
      children: "How to vote on EPNS Governance proposals:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Step 1 — Navigate to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://snapshot.org/#/?q=epns",
        children: "https://snapshot.org/#/?q=epns"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 2 — Click Join on the EPNS space."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "First Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(536112)/* ["default"] */ .A) + "",
        width: "826",
        height: "886"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 3 — Connect with your desired wallet"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Second Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(844765)/* ["default"] */ .A) + "",
        width: "924",
        height: "964"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 4 — Sign with the account you want to vote with."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Third Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(484850)/* ["default"] */ .A) + "",
        width: "718",
        height: "1238"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 5 — Select the active proposal to vote or closed one to view details"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Fourth Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(350159)/* ["default"] */ .A) + "",
        width: "1400",
        height: "735"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 6 — Browse through the proposal and see the options available to cast a vote."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Fifth Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(198572)/* ["default"] */ .A) + "",
        width: "1230",
        height: "758"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 7 — Click on the option you want to opt and agree to terms after going through it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Sixth Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(566537)/* ["default"] */ .A) + "",
        width: "928",
        height: "758"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 8 — Confirm your vote by clicking on it and you can also see your voting power."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Seventh Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(396814)/* ["default"] */ .A) + "",
        width: "928",
        height: "924"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 9 — Just SIgn the transaction with the account to complete the process."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Eight Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(136923)/* ["default"] */ .A) + "",
        width: "928",
        height: "1460"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Step 10 — Hurrahhhh !!! You have successfully voted."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Ninth Image of EPNS Snapshot Voting: A step by step guide",
        src: (__webpack_require__(951576)/* ["default"] */ .A) + "",
        width: "1230",
        height: "126"
      })
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

/***/ 951576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,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");

/***/ })

}]);