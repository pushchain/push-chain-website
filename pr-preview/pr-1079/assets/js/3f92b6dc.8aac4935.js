"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[3358],{

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

/***/ 474488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-99eec863e72b011b43591c747087957a.webp");

/***/ }),

/***/ 609087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-99eec863e72b011b43591c747087957a.webp");

/***/ }),

/***/ 925478:
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
	slug: 'may-monthly-recap',
	title: 'May Monthly Recap ☀️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Welcome to another exciting month at Push! May flew by in the blink of an eye, and we have a whirlwind of exciting updates and achievements to share with you. From groundbreaking developments to valuable partnerships and community activities, the past month has been nothing short of extraordinary.',
	tags: [
		'Push Protocol',
		'NewsLetter',
		'Web3',
		'Blockchain Technology',
		'Blockchain Development'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1079/blog/may-monthly-recap",
  "source": "@site/blog/2023-06-02-may-monthly-recap/index.md",
  "title": "May Monthly Recap ☀️",
  "description": "Cover image of May Monthly Recap ☀️",
  "date": "2023-06-02T00:00:00.000Z",
  "formattedDate": "June 2, 2023",
  "tags": [
    {
      "label": "Push Protocol",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/push-protocol"
    },
    {
      "label": "NewsLetter",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/news-letter"
    },
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/web-3"
    },
    {
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain-technology"
    },
    {
      "label": "Blockchain Development",
      "permalink": "/push-chain-website/pr-preview/pr-1079/blog/tags/blockchain-development"
    }
  ],
  "readingTime": 2.97,
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
    "slug": "may-monthly-recap",
    "title": "May Monthly Recap ☀️",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "Welcome to another exciting month at Push! May flew by in the blink of an eye, and we have a whirlwind of exciting updates and achievements to share with you. From groundbreaking developments to valuable partnerships and community activities, the past month has been nothing short of extraordinary.",
    "tags": [
      "Push Protocol",
      "NewsLetter",
      "Web3",
      "Blockchain Technology",
      "Blockchain Development"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Enhancing Blockchain Based Games UX Through In-Game Chat + Notifications🎮",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/enhancing-blockchain-based-games-ux-through-in-game-chat-notifications"
  },
  "nextItem": {
    "title": "Push DAO Progressive Decentralization — The Next Phase of Push Governance🌐",
    "permalink": "/push-chain-website/pr-preview/pr-1079/blog/push-dao-progressive-decentralization-the-next-phase-of-push-governance"
  }
};
const assets = {
"image": (__webpack_require__(474488)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Development",
  "id": "development",
  "level": 2
}, {
  "value": "Partnerships, Collaborations, &amp; Frens of Push",
  "id": "partnerships-collaborations--frens-of-push",
  "level": 2
}, {
  "value": "In The Media",
  "id": "in-the-media",
  "level": 2
}, {
  "value": "Push DAO and Governance",
  "id": "push-dao-and-governance",
  "level": 2
}, {
  "value": "Community",
  "id": "community",
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
        alt: "Cover image of May Monthly Recap ☀️",
        src: (__webpack_require__(609087)/* ["default"] */ .A) + "",
        width: "1100",
        height: "578"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Welcome to another exciting month at Push!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "May flew by in the blink of an eye, and we have a whirlwind of exciting updates and achievements to share with you. From groundbreaking developments to valuable partnerships and community activities, the past month has been nothing short of extraordinary."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Get ready to dive in!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "development",
      children: "Development"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We have been working hard on the development end to bring your Push experience to the next level. The big news of the month is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1663910676513816578",
        children: "upcoming release of Push Protocol v2"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The successful completion of Chainsafe’s security audit for our smart contracts v2 sets the stage for increased robustness and reliability of our platform. The two main features that comprise the v2 launch are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Push Fee Pool Staking and Incentivized Chat Requests"
      }), ". Together, these enhancements are enhancing the PUSH token’s utility and enabling new incentivization mechanisms for users. We’re excited about all the developments that will follow. Read all about it in more detail ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/push-protocol-v2-fee-pool-incentivized-chats-launching-in-june-959a3eab4966",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In addition to the v2 developments, we have been making progress on other exciting fronts:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Simplifying and standardizing SDK functions."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Launched Push Chat AI, web3’s first chat AI bot."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Added more test cases and simplified functions on the Push SDK."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "UI modifications and optimization of Push Video features for the frontend."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "New Push Video features on the mobile app are in the final stages of QA."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Optimizations and UI enhancements for Push Video on the dApp have begun, further enhancing the video experience."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Push Documentation hub has been updated with comprehensive documentation on Push Video, providing users with the necessary resources to utilize this exciting feature effectively. Documentation was further enhanced with code examples."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "partnerships-collaborations--frens-of-push",
      children: "Partnerships, Collaborations, & Frens of Push"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "May was ablaze with thrilling partnerships and collaborations. Here’s a glimpse into the exciting collaborations that unfolded:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://twitter.com/0xPolygonDevs/status/1651248748452880384?s=20",
          children: "Flipkart x Polygon Builders Hub"
        }), ": Pranshu, our VP of Engineering, delivered an insightful talk on pushing the boundaries of Web3 UX."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["For ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1653383852583448577?s=20",
          children: "Crypto.com"
        }), " users, Target Price Orders/Limit Orders for our $PUSH token have arrived. Get ready to take control of your trading experience like never before."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We are delighted to join forces with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1653383852583448577?s=20",
          children: "Sonet"
        }), " to revolutionize user experiences through real-time Push Notifications."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Web3’s leading streaming platform, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1653383852583448577?s=20",
          children: "Xeenon"
        }), ", now seamlessly integrates with Push Protocol’s direct messaging. A huge shout-out to Graviton for their exceptional work in building this integration."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We are thrilled to announce our partnership with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1661046782422560771?s=20",
          children: "Alchemy"
        }), ", unlocking a treasure trove of resources for building the next-gen web3 dApps."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Push Chat has now gone live on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1661069485594345472?s=20",
          children: "Soclly Mainnet"
        }), ", empowering users to connect and engage with ease."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Ecosystem",
        src: (__webpack_require__(964747)/* ["default"] */ .A) + "",
        width: "828",
        height: "466"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("center", {
      children: "Push Protocol Ecosystem as of May"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "in-the-media",
      children: "In The Media"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Our journey continues to capture the attention of prominent platforms, podcasts, and media outlets. Here’s a glimpse of our recent features and appearances:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We were honored to join an engaging ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1654023778559578113?s=20",
          children: "Twitter Spaces hosted by Polygon Labs"
        }), " to discuss ‘Legacy App stores and the dApp Store Kit’."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1656300746953084928?s=20",
          children: "Cointelegraph"
        }), " featured our founder, Harsh in their latest article ‘How AI will drive users to crypto’."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Harsh captivated listeners in the latest episode of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1657024343279321095?s=20",
          children: "Securrency Finnovators Podcast"
        }), " where he talked about his journey, the need for web3 communication, use cases, and more."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "push-dao-and-governance",
      children: "Push DAO and Governance"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Firstly, a warm welcome to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1653066991928852480?s=20",
        children: "10 new Push Protocol LATAM Ambassadors!"
      }), " These individuals have joined us to champion the vision of decentralized communication in the LATAM region.We couldn’t be more excited to have them."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In addition to our ambassadors, we are thrilled to announce ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/CopperxHQ/status/1656980548852793348?t=X-Fn-Tmg-8wvtYOafpfMlQ&s=19",
        children: "CopperX"
      }), " as our newest Push Grantee. CopperX is using Push Protocol for providing payment notifications to businesses."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To foster community engagement, we have initiated Governance bi-weekly calls to provide a platform for all community members and stakeholders to actively participate in shaping the future of Push Protocol. Stay tuned and be a part of the discussion on our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushprotocol",
        children: "Discord"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "community",
      children: "Community"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Our community has been actively engaging in various activities, discussions, and meetups. Here’s a roundup of the recent items this last month:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["One of the highlights was an engaging ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1653457074657820672?s=20",
          children: "Twitter Spaces"
        }), " session hosted in Spanish by our very own Jaf. Joined by esteemed members from projects including Platzi, Diffie, Shapeshift, and Bankless DAO, the conversation revolved around exploring existing web3 opportunities."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["In the spirit of celebrating our community, we invite you to check out the throwback video of our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1655933488296599553?s=20",
          children: "Aamchi Push Meetup in Mumbai"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The arrival of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1656328277903175685",
          children: "Push Video Chat was a celebration"
        }), ", and we couldn’t wait to share the excitement with our community. We extended an invitation to all Push community members to join us in celebrating this milestone and so they did."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Continuing our conversations, we hosted another Twitter Spaces session, this time exploring the topic of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1659576521919528962?s=20",
          children: "Web3 on Mobile"
        }), ". Developers from Polygon Labs, Zerion, Alchemy, and Purple Pay shared their expertise and insights on the topic."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We got some amazing submissions for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1658119059014025219?s=20",
          children: "Superteam DAO’s bounty competition"
        }), ". Congratulations to all the winners!."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["And get ready to showcase your talents and win some exciting bounties with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1661365701628637186?s=20",
          children: "Push Missions"
        }), " now live."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As we move on to June, we are energized and inspired by all the amazing progress we’ve made together."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Thank you for being a part of the Push journey. Stay tuned for more updates!"
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

/***/ 964747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-24e47abfb9f9320f08c02bacf67eb365.webp");

/***/ })

}]);