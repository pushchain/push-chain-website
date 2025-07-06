"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[49056],{

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

/***/ 208418:
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
	slug: 'empowering-decentralized-decision-making-push-x-element-dao',
	title: 'Empowering Decentralized Decision-Making: Push x ElementDAO💙💜',
	authors: [
		'push'
	],
	image: './cover-image.gif',
	text: 'We’re thrilled to share that ElementDAO, the governance platform that empowers decision-making at ElementFi, is partnering up with Push to enhance community-driven decision-making.',
	tags: [
		'Push Protocol',
		'Web3',
		'Partnerships',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/empowering-decentralized-decision-making-push-x-element-dao",
  "source": "@site/blog/2023-06-22-partnership-elementdao/index.md",
  "title": "Empowering Decentralized Decision-Making: Push x ElementDAO💙💜",
  "description": "Cover image of Empowering Decentralized Decision-Making: Push x ElementDAO💙💜",
  "date": "2023-06-22T00:00:00.000Z",
  "formattedDate": "June 22, 2023",
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
      "label": "Partnerships",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/partnerships"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain-technology"
    }
  ],
  "readingTime": 1.2433333333333334,
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
    "slug": "empowering-decentralized-decision-making-push-x-element-dao",
    "title": "Empowering Decentralized Decision-Making: Push x ElementDAO💙💜",
    "authors": [
      "push"
    ],
    "image": "./cover-image.gif",
    "text": "We’re thrilled to share that ElementDAO, the governance platform that empowers decision-making at ElementFi, is partnering up with Push to enhance community-driven decision-making.",
    "tags": [
      "Push Protocol",
      "Web3",
      "Partnerships",
      "Blockchain Technology"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Transforming Decentralized Communication With Push & AI🤖",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/transforming-decentralized-communication-with-push-and-ai"
  },
  "nextItem": {
    "title": "$100,000 of Push x ImmuneFi Bug Bounty Program goes Live 🪲",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/100-000-of-push-x-immune-fi-bug-bounty-program-goes-live"
  }
};
const assets = {
"image": (__webpack_require__(402284)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Push X ElementDAO",
  "id": "push-x-elementdao",
  "level": 2
}, {
  "value": "About ElementDAO",
  "id": "about-elementdao",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Empowering Decentralized Decision-Making: Push x ElementDAO💙💜",
        src: (__webpack_require__(804519)/* ["default"] */ .A) + "",
        width: "800",
        height: "450"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We’re thrilled to share that ElementDAO, the governance platform that empowers decision-making at ElementFi, is partnering up with Push to enhance community-driven decision-making."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ElementFi (now expanded into ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.delv.tech/",
        children: "DELV"
      }), "), is a leading protocol that enables users to seek high fixed yield income in the DeFi market."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "ElementDAO, as the governance platform for ElementFi, plays a pivotal role in making important decisions at ElementFi, thereby contributing to the creation of this comprehensive suite of fixed yield income products. With this newfound partnership, ElementDAO is leveraging Push’s communication capabilities to enhance transparency, participation, and efficiency within its governance ecosystem. This partnership marks a significant step towards empowering stakeholders at ElementFi."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For ElementDAO users, you can opt-in to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://app.push.org/channels?channel=0x349da2A6825284E9E181D46D664b95aecE86da56",
        children: "receive notifications👉 here"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-x-elementdao",
      children: "Push X ElementDAO"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Decentralized notifications, powered by Push, establish a direct line of communication between ElementDAO and its ELFI holders. This seamless flow of information ensures that ElementDAO members stay informed, empowered, and ready to actively participate in the decision-making processes that shape the project’s future."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "By leveraging Push, ElementDAO members will receive timely notifications that keep them up to date on crucial developments within the ecosystem such as when:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A new proposal has made it to the voting phase"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "24 hours are left to cast a vote on a proposal"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Voting results are out"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The use cases for notifications extend beyond governance proposals. Users can also expect to receive ad-hoc announcements, updates on new feature launches, maintenance windows, and various other project-related communications in the future."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We’re extremely excited to be collaborating with the ElementDAO team and are looking forward to setting a new standard for DeFi communications. We also look forward to future integrations with other DELV products — Harsh Rajat, CEO & Founder of Push Protocol"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We’re inviting ElementDAO members to embrace this new era of empowerment and actively participate in shaping the future of ElementDAO and the ElementFi. Opt in to the ElementDAO channel and never miss a beat!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "about-elementdao",
      children: "About ElementDAO"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "ElementDAO is a decentralized autonomous organization tasked with the responsibility of running and maintaining Element Finance: an open source protocol for fixed and variable yield markets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To keep up to date with Element: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.element.fi/",
        children: "Element.fi"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/element_dao",
        children: "Twitter"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/pvnUHuAsQ2",
        children: "Discord"
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

/***/ 402284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-caecdb4ef57f5fa37f1839bf6cc14c38.gif");

/***/ }),

/***/ 804519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-caecdb4ef57f5fa37f1839bf6cc14c38.gif");

/***/ })

}]);