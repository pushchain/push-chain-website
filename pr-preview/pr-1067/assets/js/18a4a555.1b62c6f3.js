"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[39147],{

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

/***/ 153743:
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
	slug: 'epns-showrunners-framework-and-backend-sdk-beta',
	title: 'Roadmap Q2: EPNS Showrunners Framework and Backend SDK Beta v1.0 are Live!',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Roadmap Q2: EPNS Showrunners Framework and Backend SDK Beta v1.0 are Live!',
	text: 'We are thrilled to announce the release of two new open-source EPNS tools to enhance the integration and implementation of EPNS Decentralized Notifications within your dApps and protocols, the EPNS Backend SDK Beta v1.0 and the EPNS Showrunners Framework; two of our most anticipated roadmap milestones for Q2.',
	tags: [
		'Roadmap',
		'Blockchain',
		'Ethereum',
		'Notifications',
		'Newsletter'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-showrunners-framework-and-backend-sdk-beta",
  "source": "@site/blog/2021-06-25-epns-showrunners-framework-and-backend-sdk-beta/index.md",
  "title": "Roadmap Q2: EPNS Showrunners Framework and Backend SDK Beta v1.0 are Live!",
  "description": "Roadmap Q2: EPNS Showrunners Framework and Backend SDK Beta v1.0 are Live!",
  "date": "2021-06-25T00:00:00.000Z",
  "formattedDate": "June 25, 2021",
  "tags": [
    {
      "label": "Roadmap",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/roadmap"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Notifications",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/notifications"
    },
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/newsletter"
    }
  ],
  "readingTime": 1.4333333333333333,
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
    "slug": "epns-showrunners-framework-and-backend-sdk-beta",
    "title": "Roadmap Q2: EPNS Showrunners Framework and Backend SDK Beta v1.0 are Live!",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Roadmap Q2: EPNS Showrunners Framework and Backend SDK Beta v1.0 are Live!",
    "text": "We are thrilled to announce the release of two new open-source EPNS tools to enhance the integration and implementation of EPNS Decentralized Notifications within your dApps and protocols, the EPNS Backend SDK Beta v1.0 and the EPNS Showrunners Framework; two of our most anticipated roadmap milestones for Q2.",
    "tags": [
      "Roadmap",
      "Blockchain",
      "Ethereum",
      "Notifications",
      "Newsletter"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Understanding NFTs and Why We Need Push Notifications on NFT Marketplaces",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/understanding-nfts"
  },
  "nextItem": {
    "title": "EPNS Collaborates with Aave to Bring Push Notifications to Aave Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-collaborates-with-aave-to-bring"
  }
};
const assets = {
"image": (__webpack_require__(838889)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Showrunners Framework in short",
  "id": "showrunners-framework-in-short",
  "level": 3
}, {
  "value": "Back-end SDK in short",
  "id": "back-end-sdk-in-short",
  "level": 3
}, {
  "value": "Do you want to try the EPNS Backend SDK?",
  "id": "do-you-want-to-try-the-epns-backend-sdk",
  "level": 3
}, {
  "value": "Example Apps",
  "id": "example-apps",
  "level": 3
}, {
  "value": "Documentation",
  "id": "documentation",
  "level": 3
}, {
  "value": "Stay Connected",
  "id": "stay-connected",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Roadmap Q2: EPNS Showrunners Framework and Backend SDK Beta v1.0 are Live!",
        src: (__webpack_require__(894490)/* ["default"] */ .A) + "",
        width: "1500",
        height: "750"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We are thrilled to announce the release of two new open-source EPNS tools to enhance the integration and implementation of EPNS Decentralized Notifications within your dApps and protocols, the EPNS Backend SDK Beta v1.0 and the EPNS Showrunners Framework; two of our most anticipated roadmap milestones for Q2."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["More detailed information can be found on our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/epns-roadmap-2021-c4ededc57a12",
        children: "Roadmap 2021 blog post"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "showrunners-framework-in-short",
      children: "Showrunners Framework in short"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Allows developers & protocols to send decentralized notifications with custom logic to EPNS Protocol from backend servers."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Includes a highly customizable scheduling engine that allows for setting up recurrent verifications to trigger notifications."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This framework relies entirely on the EPNS Backend SDK explained below. However, this doesn’t limit developers to use the SDK directly if a full Showrunners framework implementation is not necessary."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["✅ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework-staging",
        children: "Showrunners Framework Github"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "back-end-sdk-in-short",
      children: "Back-end SDK in short"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Allows developers & protocols for easy access to EPNS common functionalities from within their backends. For instance: getSubscribedUsers and sendNotification."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This SDK also comes packed with tooling for easy debugging and testing of notifications through the simulate object."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["npm package available at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.npmjs.com/package/@epnsproject/backend-sdk",
          children: "https://www.npmjs.com/package/@epnsproject/backend-sdk"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["✅ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-backend-sdk-staging",
        children: "EPNS Backend SDK Github"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "do-you-want-to-try-the-epns-backend-sdk",
      children: "Do you want to try the EPNS Backend SDK?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We have several resources for those interested in start experimenting with the Showrunners framework and the Backend SDK or contributing to them"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "example-apps",
      children: "Example Apps"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To help developers get started with the Showrunners Framework and using the new SDK, our public ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-showrunners-framework-staging",
        children: "Showrunners repo"
      }), " includes sample implementations that we have worked for our Pilot Program Collaborations. This repository aims to serve as a reference for a comprehensive Showrunners implementation containing both simple and complex demonstrations of how to integrate EPNS with other popular protocols and services."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://drive.google.com/file/d/1nh-HiVDc-OeNTFbYSdaDMwTmSfGwPAut/view?usp=sharing",
        children: "This video"
      }), " briefly describes the implementation we worked for Uniswap to notify users when a new Governance Proposal is submitted. It also shows how to use Postman to trigger notifications for debugging and testing purposes; and how a full round-trip looks like — from the moment a new proposal is submitted until the user gets the notification in their Mobile App and click on it to view it."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "documentation",
      children: "Documentation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["EPNS Integration Guides Gitbook: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.gitbook.com/@ethereum-push-notification/s/integration-guide/",
          children: "https://app.gitbook.com/@ethereum-push-notification/s/integration-guide/"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "stay-connected",
      children: "Stay Connected"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you are interested in providing feedback and working more closely with our development team to improve EPNS for developers, we invite you to join our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/nYrqZ734nu",
        children: "Discord Community Server"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As usual, this is evergreen documentation that we will keep building, updating, and improving."
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



/***/ }),

/***/ 838889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cd2a957128af42af06f5bcfd7cc44df7.webp");

/***/ }),

/***/ 894490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cd2a957128af42af06f5bcfd7cc44df7.webp");

/***/ })

}]);