"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[15783],{

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

/***/ 90253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-ffb0da585d27d016f520e4d10d86db28.webp");

/***/ }),

/***/ 415422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-4-4dbac4ae013a44edab500e14b338b1ea.webp");

/***/ }),

/***/ 689657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9346cd3d4b217211e481d39076591975.webp");

/***/ }),

/***/ 851011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,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");

/***/ }),

/***/ 863520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-87abd6f88e29e27848451036dfbe8180.webp");

/***/ }),

/***/ 880142:
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
	slug: 'push-grants-program-going-live',
	title: 'Push Grants Program Going Live!',
	description: 'Push Grants Program Going Live!',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'With the overwhelming turnout and support received for PIP-01: Push Grants Program (12% of $PUSH circulating supply taking part in the vote, 3X amount needed for quorum!), PGP is now approved to run for two quarters with a total budget of 1,000,000 $USD. It’s time to share the grant process with the community and let the applications flow!',
	tags: [
		'Epnsproject',
		'Blockchain',
		'Grants Program',
		'Web3'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/push-grants-program-going-live",
  "source": "@site/blog/2022-01-26-push-grants-program-going-live/index.md",
  "title": "Push Grants Program Going Live!",
  "description": "Push Grants Program Going Live!",
  "date": "2022-01-26T00:00:00.000Z",
  "formattedDate": "January 26, 2022",
  "tags": [
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/epnsproject"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain"
    },
    {
      "label": "Grants Program",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/grants-program"
    },
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/web-3"
    }
  ],
  "readingTime": 2.1433333333333335,
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
    "slug": "push-grants-program-going-live",
    "title": "Push Grants Program Going Live!",
    "description": "Push Grants Program Going Live!",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "With the overwhelming turnout and support received for PIP-01: Push Grants Program (12% of $PUSH circulating supply taking part in the vote, 3X amount needed for quorum!), PGP is now approved to run for two quarters with a total budget of 1,000,000 $USD. It’s time to share the grant process with the community and let the applications flow!",
    "tags": [
      "Epnsproject",
      "Blockchain",
      "Grants Program",
      "Web3"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS Allies With Bridge Mutual to Enable Decentralized Notifications for Users",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/epns-collaborates-with-bridge-mutual"
  },
  "nextItem": {
    "title": "Dmitry Buterin — Rockstars of Ethereum Vol 2 #1 Recap",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/dmitry-buterin—rockstars-of-ethereum-vol-2"
  }
};
const assets = {
"image": (__webpack_require__(965456)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "<strong>Where?</strong>",
  "id": "where",
  "level": 2
}, {
  "value": "What’s next for PGP?",
  "id": "whats-next-for-pgp",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        alt: "Cover image of Push Grants Program Going Live!",
        src: (__webpack_require__(689657)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With the overwhelming turnout and support received for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://snapshot.org/#/epns.eth/proposal/0xfdb92444974c9ab607d96e7a4a1ad71299e47a755955951ae5ce8b86aa9a1400",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "PIP-01: Push Grants Program"
        })
      }), " (12% of $PUSH circulating supply taking part in the vote, 3X amount needed for quorum!), PGP is now approved to run for two quarters with a total budget of 1,000,000 $USD. It’s time to share the grant process with the community and let the applications flow!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Below we’ll give an introductory step-by-step overview of how to navigate the Push Grants Program. PGP proposal submission, consideration, and decision to take to formal votes - all happen on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.epns.io/",
        children: "EPNS Governance Forum"
      }), ". All the relevant info you’ll need can be found there too. Specifically, in this post, we’ll explore the highlights of the governance forums, a walkthrough on how to create a new proposal, and the requirements needed along the pathway to a Snapshot vote."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "where",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Where?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["👉gov.epns.io👈 is the overall home of EPNS governance. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.epns.io/c/grants/10",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Push Grants Program(PGP) category"
        })
      }), " is where you’ll find the grants discourse."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "First image of Push Grants Program Going Live!",
        src: (__webpack_require__(90253)/* ["default"] */ .A) + "",
        width: "1400",
        height: "894"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Highlighted page: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.epns.io/c/grants/10",
        children: "https://gov.epns.io/c/grants/10"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The **Start Here** post will give you the steps needed to understand how to post and interact with proposals, as well as details on support requirements needed to be accepted."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Second image of Push Grants Program Going Live!",
        src: (__webpack_require__(863520)/* ["default"] */ .A) + "",
        width: "1400",
        height: "854"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Highlighted page: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.epns.io/t/push-grants-program-pgp-details-start-here/41/4",
        children: "https://gov.epns.io/t/push-grants-program-pgp-details-start-here/41/4"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "⚠️There will be a similar **start here** post pinned at the top of each new category page (Announcements, Proposals, etc.) with directions & information to help understand the content found there."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "how-to-submit-a-grant-proposal",
      children: "How to submit a grant proposal"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Above we saw gov.epns.io and found the PGP page, in there the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.epns.io/c/grants/grants-proposal/19",
        children: "Proposals"
      }), " page is listed. That is where applications for grant funding will be posted and discussed. Here’s how that works."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["On ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.epns.io/",
        children: "gov.epns.io"
      }), " click the “+ New Topic” button."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Third image of Push Grants Program Going Live!",
        src: (__webpack_require__(851011)/* ["default"] */ .A) + "",
        width: "426",
        height: "236"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the new topic window, fill the following 3 fields according to the screenshot below."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Fourth image of Push Grants Program Going Live!",
        src: (__webpack_require__(415422)/* ["default"] */ .A) + "",
        width: "1400",
        height: "616"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Title formatted as pictured (PGP Proposal: *insert title*)"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Below the title, choose the Push Grants Program — Proposals category"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "#tag the two terms pictured in the bottom right field"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Doing those 3 things will outline the proposal structure, for users will need to draft their proposals following the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-grants/blob/main/proposal-template.md",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "proposal template"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "An application is accepted only when it gets approved on Snapshot."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The requirements for proposals to advance to a Snapshot vote, and the process thereof will be:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Proposal lives for at least 7 days on the forum."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Proposal post receives 10 likes and 3 comments (in favor) within those 7 days or more."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A poll will be added within 3 days by the EPNS governance team (EPNSgov) for/against moving to Snapshot vote."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A poll must get at least 10 votes in total and will be moved along with For/Against majority."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "FOR"
        }), ": Proposal gets advanced to Snapshot within 3 days with voting open for another 7 days."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "AGAINST"
        }), ": Proposers are notified and encouraged to reapply after digesting feedback received."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Once the proposal lands on Snapshot, 4% of circulating $PUSH supply participating with a positive result is the passing bar."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "whats-next-for-pgp",
      children: "What’s next for PGP?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The #EPNSgov team has been working hard to deliver this initiative to the EPNS community and Push Governance users. Our part in this process is all about giving the tools over to the users and trying to respond to that feedback. This new grants channel is just the type of avenue we needed to open up in order to spark the type of discourse we’re trying to attract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Moving forward, there are several #EPNSgov projects in the works and we’ll be steadily announcing those across the EPNS network. Come visit us during ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/epnsproject/status/1485250968656781316?s=20",
        children: "office hours"
      }), " on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/discord.gg/YVPB99F9W5",
        children: "EPNS Discord"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://snapshot.org/#/epns.eth/proposal/0x1c928002d6cb8d563ff79dc06f1f28a5963f0ed81460765d937a7ad08a779215",
        children: "PIP-02: Incentives proposal"
      }), " which passed today as well!"]
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

/***/ 965456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9346cd3d4b217211e481d39076591975.webp");

/***/ })

}]);