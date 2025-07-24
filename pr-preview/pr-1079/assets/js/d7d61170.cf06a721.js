"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[58797],{

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

/***/ 80379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-08d5b1b6a299f0cf5d6e7c8c318bc114.jpeg");

/***/ }),

/***/ 444708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-08d5b1b6a299f0cf5d6e7c8c318bc114.jpeg");

/***/ }),

/***/ 687846:
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
	slug: 'vamos-latam-fam',
	title: 'Vamos Latam Fam 🧉',
	authors: [
		'push'
	],
	image: './cover-image.jpeg',
	text: 'We had a blast with our invitees during Friday PUSH #21 in preparation for ETH Latam 🇦🇷 💃. Mariano, Juan David, and CryptoChica joined us to discuss about everything ETH Latam, and the challenges and opportunities for the Latam region.',
	tags: [
		'Web3',
		'Ethereum',
		'Epnsproject',
		'Newsletter',
		'Blockchain'
	]
};
const contentTitle = 'Friday PUSH #21';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/vamos-latam-fam",
  "source": "@site/blog/2022-08-10-vamos-latam-fam/index.md",
  "title": "Vamos Latam Fam 🧉",
  "description": "Cover Image of Vamos Latam Fam 🧉",
  "date": "2022-08-10T00:00:00.000Z",
  "formattedDate": "August 10, 2022",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/web-3"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/ethereum"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/epnsproject"
    },
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/newsletter"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"
    }
  ],
  "readingTime": 2.033333333333333,
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
    "slug": "vamos-latam-fam",
    "title": "Vamos Latam Fam 🧉",
    "authors": [
      "push"
    ],
    "image": "./cover-image.jpeg",
    "text": "We had a blast with our invitees during Friday PUSH #21 in preparation for ETH Latam 🇦🇷 💃. Mariano, Juan David, and CryptoChica joined us to discuss about everything ETH Latam, and the challenges and opportunities for the Latam region.",
    "tags": [
      "Web3",
      "Ethereum",
      "Epnsproject",
      "Newsletter",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Socket Integrates EPNS to Send Users Important Updates Through Push Notifications",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/socket-integrates-epns-to-send-users-important-updates-through-push-notifications"
  },
  "nextItem": {
    "title": "Monthly Blocks",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/monthly-blocks"
  }
};
const assets = {
"image": (__webpack_require__(444708)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Vamos Latam Fam 🧉",
        src: (__webpack_require__(80379)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We had a blast with our invitees during Friday PUSH #21 in preparation for ETH Latam 🇦🇷 💃. Mariano, Juan David, and CryptoChica joined us to discuss about everything ETH Latam, and the challenges and opportunities for the Latam region."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["01:30 — 04.40 | Welcome! ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n04:40 — 14:00| Mariano talks about his travels, living in Argentina, whats coming for ETH Latam, and his opinion on the upcoming Ethereum merge.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n14:00 — 17:50| Juan David talks about his participation in organizing DevCon Bogota and other initiatives.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n17:50 — 30:30 | All three guests discuss about the challenges & opportunities for the Latam region.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n30:30 — 35:50| Technical parenthesis to talk about the Uncle Maker problem: (Time)Stamping Out The Competition in Ethereum", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n36:00 — 46:00 | CryptoChica talks about her journey in the web3 space, and the Quadratic Funding initiative for projects aligned to Public Goods in Argentina.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n46:30 — 1:02:48| All guests talk about what to expect when they come to Argentina and Latin America in general. Focus on meeting people and creating relationships."]
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We were set for a very entertaining conversation from the get-go after all guests started joining and words started to flow in English and Spanish. The Latam Fam was in the house!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_2__/* .VideoContainer */ .bC, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
        width: "100%",
        height: "100%",
        style: {
          borderRadius: "32px"
        },
        src: "https://www.youtube.com/embed/LLiH-yDlqDY",
        title: "Friday #PUSH Call 21 – Vamos LATAM Fam 🧉💃 ft. Mariano Conti, Crypto Chica, and Juan David",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Mariano was first to speak, and shared with everyone a little bit of what has been his life over the past year with all the travels he’s done and all the people he have met 🗺️. We discussed why Argentina became a hub for innovation due to all challenges people face on a daily basis. And we got the Alpha as to what he will be talking about during his talk in ETH Latam (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "don’t miss it!"
        })
      }), "), and his “toy project” that as per Harsh “will change the world in the future!”."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We couldn’t miss the opportunity to get Mariano’s opinion on one of the most anticipated events in crypto — the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Ethereum Merge."
      }), " Looking forward for this moment to come!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Next in line — ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Juan David"
      }), " from the Colombia community 🇨🇴 brought the latino style into the conversation and decided to spanglish things up! He shared with the things he’s been up to for the past year and his participation in organizing DevCon Bogota."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With the ETH Latam communities reunited in this space, the conversation took an interesting shift into discussing the challenges & opportunities for the Latam region and the role Ethereum and the blockchain technologies play."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["And in the blink of an eye we came to our last guest of the Latam Fam CryptoChica 🇦🇷. Given her vast contributions in creating educational content for the Spanish speaking community, we wanted to know “Who is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "CryptoChica"
      }), " and what has been her journey in the web3 space? — “Saludos a DeFi Latam”"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We talked about the Quadratic Funding initiative that just started for projects aligned with Public Goods in Argentina, and soon to start in other countries."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To finalize, all our guests took a minute to talk about what everyone can expect when you come to Argentina and the ETH Latam event 🎉."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It was definitely a very fun time with friends and the Latam Fam in the house, we can’t wait to see you all in the Argentina."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Till next Friday Push!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "— The EPNS team"
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