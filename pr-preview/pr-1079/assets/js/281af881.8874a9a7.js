"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[59364],{

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

/***/ 456900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-abc93e9a518d10c2741d1ed526740859.webp");

/***/ }),

/***/ 471941:
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
	slug: 'introducing-the-push-points-program',
	title: 'Introducing the Push Points Program',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Introducing the Push Points Program',
	text: 'Push is excited to announce Phase 1 of Push Points Program aimed at giving back to the community and devs who have supported Push every step of the way and helped us reach greater heights.',
	tags: [
		'Push Points',
		'Rewards',
		'Announcements'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/introducing-the-push-points-program",
  "source": "@site/blog/2024-10-01-push-points-program/index.md",
  "title": "Introducing the Push Points Program",
  "description": "Introducing the Push Points Program",
  "date": "2024-10-01T00:00:00.000Z",
  "formattedDate": "October 1, 2024",
  "tags": [
    {
      "label": "Push Points",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-points"
    },
    {
      "label": "Rewards",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/rewards"
    },
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/announcements"
    }
  ],
  "readingTime": 2.1,
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
    "slug": "introducing-the-push-points-program",
    "title": "Introducing the Push Points Program",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Introducing the Push Points Program",
    "text": "Push is excited to announce Phase 1 of Push Points Program aimed at giving back to the community and devs who have supported Push every step of the way and helped us reach greater heights.",
    "tags": [
      "Push Points",
      "Rewards",
      "Announcements"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "How developers can integrate Cartesi and Push Protocol.",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/how-developers-can-integrate-cartesi-and-push-protocol"
  },
  "nextItem": {
    "title": "What is consumer crypto and why does it matter?",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/what-is-consumer-crypto-and-why-does-it-matter"
  }
};
const assets = {
"image": (__webpack_require__(496647)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Earn Rewards for Activities (On and Offchain)",
  "id": "earn-rewards-for-activities-on-and-offchain",
  "level": 2
}, {
  "value": "How to Earn Points",
  "id": "how-to-earn-points",
  "level": 2
}, {
  "value": "Daily Check-in",
  "id": "daily-check-in",
  "level": 2
}, {
  "value": "Multipliers",
  "id": "multipliers",
  "level": 2
}, {
  "value": "Onboard New Users on Push. Earn Points.",
  "id": "onboard-new-users-on-push-earn-points",
  "level": 2
}, {
  "value": "When will Phase I end?",
  "id": "when-will-phase-i-end",
  "level": 2
}, {
  "value": "Under what circumstances can I lose my points?",
  "id": "under-what-circumstances-can-i-lose-my-points",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Introducing the Push Points Program",
        src: (__webpack_require__(456900)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push is excited to announce Phase 1 of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/points?utm_source=push_blog&utm_medium=referral&utm_campaign=Push+Points&utm_content=blog_post",
        children: "Push Points Program"
      }), " aimed at giving back to the community and devs who have supported Push every step of the way and helped us reach greater heights. Push changed the game with the invention of Notifications and a communication layer for blockchains. Push is set to disrupt the web3 space with an upcoming evolution for the future of consumers on the blockchain. We’re working on something super exciting and want to bring you along for the ride."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "earn-rewards-for-activities-on-and-offchain",
      children: "Earn Rewards for Activities (On and Offchain)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push is committed to building the decentralized communication layer for web3. By participating in the points program, you can directly contribute to our growth and empower our vision."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We have designed the points program from the ground up to incentivize users by rewarding points for a variety of activities done using your favorite protocol, Push. Activities include but are not limited to participating on our socials, performing tasks on Push, staking and much more. Activities are shaped in a way where loyal users who interact with Push will be rewarded and have a fair chance of climbing the leaderboard."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-to-earn-points",
      children: "How to Earn Points"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Note:"
        }), " Please ensure the address you connect for the points program has at-least 1 Tx on ETH. We do this to ensure gaming the system is kept to a minimum among other steps."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Getting started is fairly simple. Follow these steps to start earning today:"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "How to Register (required):"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Connect your X account and Follow ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain",
          children: "@PushChain"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Connect your Discord profile and Join ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "http://discord.gg/pushprotocol",
          children: "Push Discord"
        }), " Server."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Note:"
        }), " We perform multiple checks to ensure your twitter account is legitimate. Verification may take up to 24 hours. If the verification fails, please make sure you are following @PushChain and have at-least 50 followers."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Once the first two steps are done, you have successfully registered for Push Points Program. You can start minting points by completing various activities. Do make sure to keep checking your Points dashboard for a new set of tasks each week. You don’t want to miss out on some of these bonus rewards!"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "daily-check-in",
      children: "Daily Check-in"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Users can also check-in daily ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/points/activity?utm_source=push_blog&utm_medium=referral&utm_campaign=Push+Points&utm_content=blog_post",
        children: "here"
      }), " to claim points. Check-in for 7 days to earn bonus points."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["!", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Daily Check-in",
        src: (__webpack_require__(916743)/* ["default"] */ .A) + "",
        width: "1600",
        height: "546"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "multipliers",
      children: "Multipliers"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Multipliers allow users to boost their Points by performing special activities. For e.g. if you have 100 points, after earning a 2x Multiplier, you will now have 200 Points. Multipliers also apply to any points earned after activating the Multiplier making it a permanent feature. Watch out @PushChain on X for bonus activities to earn Multipliers."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Multipliers are associated with high-impact activities to make sure top contributors to the platform are rewarded accordingly."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Note:"
        }), " Multipliers are additive. A 2X + 2X Multiplier will make the account multiplier 4X. Collect more multipliers to earn mega rewards."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "onboard-new-users-on-push-earn-points",
      children: "Onboard New Users on Push. Earn Points."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Users will notice a special link on their Push Points Dashboard. Share this with your friends and new users to earn +12% of any Points your invites earn, and +2% of any Points your invite’s invites earn."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "when-will-phase-i-end",
      children: "When will Phase I end?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Phase 1 will last for 16 weeks with a big bang announcement following a reveal of rewards for collected points. We’re super excited for the reveal and are sure the community will be thrilled with what they find. The more points you accumulate on the leaderboard, the bigger the rewards!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "under-what-circumstances-can-i-lose-my-points",
      children: "Under what circumstances can I lose my points?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Points may also be forfeited due to farming by unfair means or failure to meet the stated eligibility criteria."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For more questions join ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushprotocol",
        children: "Push Discord"
      }), ". Our team would be glad to help you."]
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

/***/ 496647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-abc93e9a518d10c2741d1ed526740859.webp");

/***/ }),

/***/ 916743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image1-62ea6ba74c9fbdb0e03feaae291bb158.webp");

/***/ })

}]);