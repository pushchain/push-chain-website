"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[87797],{

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

/***/ 94350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cc72de1f1ec0eb6feaeeb4d0bce09d00.webp");

/***/ }),

/***/ 185327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cc72de1f1ec0eb6feaeeb4d0bce09d00.webp");

/***/ }),

/***/ 928829:
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
	slug: 'what-is-decentralized-social-media',
	title: 'What is Decentralized Social Media and Why Does it Matter?',
	authors: [
		'sixty'
	],
	image: './cover-image.webp',
	description: 'What is Decentralized Social Media and Why Does it Matter?',
	text: 'A crucial difference between centralized and decentralized social media is their approach to data ownership. On traditional platforms like Facebook, Instagram, or X (formerly Twitter), users relinquish control of their data from the moment they sign up.',
	tags: [
		'Consumer Crypto',
		'Insights'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/what-is-decentralized-social-media",
  "source": "@site/blog/2024-10-25-what-is-decentralized-social-media/index.md",
  "title": "What is Decentralized Social Media and Why Does it Matter?",
  "description": "What is Decentralized Social Media and Why Does it Matter?",
  "date": "2024-10-25T00:00:00.000Z",
  "formattedDate": "October 25, 2024",
  "tags": [
    {
      "label": "Consumer Crypto",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/consumer-crypto"
    },
    {
      "label": "Insights",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/insights"
    }
  ],
  "readingTime": 4.663333333333333,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "SixtyKeys",
      "title": "Guest Contributor",
      "url": "https://x.com/sixty_keys",
      "page": true,
      "imageURL": "/assets/blog/authors/authorsixty.png",
      "key": "sixty"
    }
  ],
  "frontMatter": {
    "slug": "what-is-decentralized-social-media",
    "title": "What is Decentralized Social Media and Why Does it Matter?",
    "authors": [
      "sixty"
    ],
    "image": "./cover-image.webp",
    "description": "What is Decentralized Social Media and Why Does it Matter?",
    "text": "A crucial difference between centralized and decentralized social media is their approach to data ownership. On traditional platforms like Facebook, Instagram, or X (formerly Twitter), users relinquish control of their data from the moment they sign up.",
    "tags": [
      "Consumer Crypto",
      "Insights"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "How Push Chat is Different from Traditional Chat Platforms ",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-chat-is-different-from-traditional-chat-platforms"
  },
  "nextItem": {
    "title": "Why Do On-Chain Push Notifications Matter?",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/why-onchain-push-notifications-matter"
  }
};
const assets = {
"image": (__webpack_require__(185327)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "<strong>Verifiable Data Ownership and Better Privacy</strong>",
  "id": "verifiable-data-ownership-and-better-privacy",
  "level": 2
}, {
  "value": "<strong>Composable &amp; Decentralized Social Graphs: Lens Protocol</strong>",
  "id": "composable--decentralized-social-graphs-lens-protocol",
  "level": 2
}, {
  "value": "<strong>Dynamic Social Engagement: Farcaster Frames</strong>",
  "id": "dynamic-social-engagement-farcaster-frames",
  "level": 2
}, {
  "value": "<strong>An Improved, Streamlined User Experience: Cyber</strong>",
  "id": "an-improved-streamlined-user-experience-cyber",
  "level": 2
}, {
  "value": "<strong>Decentralized Cross-Chain Communication: Push</strong>",
  "id": "decentralized-cross-chain-communication-push",
  "level": 2
}, {
  "value": "<strong>The Future of Social Media is Coming</strong>",
  "id": "the-future-of-social-media-is-coming",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of What is Decentralized Social Media and Why Does it Matter?",
        src: (__webpack_require__(94350)/* ["default"] */ .A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In today's world, social media is one of the most important ways we connect, share, and express ourselves. Centralized platforms like Facebook, Twitter, and Instagram have, to date, dominated the landscape. However, they come with significant drawbacks: they control user data, moderate content arbitrarily, and are driven by algorithms that prioritize selective monetization over genuine interaction."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Decentralized social media marks a pivotal shift in how we engage in our favorite spaces online. It's not just a fleeting trend—it's a movement poised to redefine online interactions, ownership, and privacy. By offering an alternative to the status quo, decentralized social media empowers users with unprecedented control over their data, social connections, and digital identities. This article will explore what decentralized social media is, its significance, and how innovative platforms such as Farcaster, Lens Protocol, Cyber, and Push Protocol are spearheading this transformation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "verifiable-data-ownership-and-better-privacy",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Verifiable Data Ownership and Better Privacy"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A crucial difference between centralized and decentralized social media is their approach to data ownership. On traditional platforms like Facebook, Instagram, or X (formerly Twitter), users relinquish control of their data from the moment they sign up. Every post, comment, like, and share is stored on company-owned servers and used to serve ads or fine-tune engagement algorithms. Users have little to no say in how their data is used, sold, or manipulated."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "At its core, decentralized social media empowers users by giving them back control over their data. By utilizing blockchain technology, decentralized social platforms ensure that users retain control over their personal information and interactions. No single entity has the power to censor, delete, or exploit this data without the user's consent. This shift from platform-owned to user-owned data is a crucial step toward building a more open, transparent, and privacy-respecting social media landscape. This shift is already underway, as evidenced by the examples we'll explore below."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "composable--decentralized-social-graphs-lens-protocol",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Composable & Decentralized Social Graphs: Lens Protocol"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A key innovation of decentralized social media is the concept of composable social graphs. On traditional platforms, a user's social graph (their collection of connections, followers, and interactions) is locked away by the provider. If said user wants to switch to a new platform, they lose access to all of the relationships they’ve built and the content they may have curated or created. On decentralized platforms, your social graph—your relationships, posts, and interactions—can be seamlessly transferred across any app supporting the same protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Lens Protocol is a prime example of how decentralized social media can empower users to take full ownership of their online identity and social graph. Built on Polygon, Lens offers users composable profiles that can interact with a variety of social dApps supported by its foundational network. No matter what dApp they use to choose, Lens users truly own their social graph as an NFT. This means that it is always possible to move between different dApps (decentralized applications) without having to rebuild their audience or connections. This level of portability is made possible through blockchain technology, fostering a more interoperable and user-friendly decentralized social ecosystem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "dynamic-social-engagement-farcaster-frames",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Dynamic Social Engagement: Farcaster Frames"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Farcaster via its primary client, Warpcast, illustrates how decentralized social media can be more engaging and empowering for users. They not only allow users to own their social graph and content but also introduce a novel feature called \"Frames,” which we’re integrating ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.push.org/t/bringing-frames-interactive-mini-apps-to-push-network/1659",
        children: "into the Push Protocol ecosystem"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Frames are interactive, modular spaces within posts (known as \"Casts\" on Farcaster via Warpcast) where users can embed dynamic content such as polls, live updates, or even full-scale applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The launch of Frames has already enabled entirely new forms of interaction and engagement that go beyond what was possible before. Web-based content goes from its current, fairly static state to the equivalent of an application in and of itself. What about literal instant check-out for orders? Imagine being able to vote on a DAO proposal, stream a podcast, trade crypto or NFTs, and subscribe to a creator or channel—all within the same post. That’s a kind of composability that centralized platforms simply can’t match. By allowing users to organize and showcase the content they find most meaningful, Frames create a more personalized and context-driven experience. Though it’s early, Frames are already a key cog in the machine that represents the future of all social media."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "an-improved-streamlined-user-experience-cyber",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "An Improved, Streamlined User Experience: Cyber"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Cyber, a Layer 2 solution built on Optimism's Superchain and hyper-optimized for web3 social interactions aims to a user experience on par with apps that are already household names on the legacy web. It achieves this by addressing key usability challenges and boosting the scalability and performance of decentralized platforms."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Traditional blockchain platforms can also be clunky for users unfamiliar with managing private keys, wallets, and on-chain transactions. Cyber addresses this by incorporating built-in account abstraction and seedless wallets, delivering a frictionless user experience. Account abstraction simplifies wallet management by abstracting the complexities of managing multiple accounts and private keys away from the user. Seedless wallets, on the other hand, eliminate the need for cumbersome recovery phrases. Together, these features allow users to interact with decentralized apps and platforms as easily as they would with centralized services—without compromising security or ownership."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As social interactions become more complex and require faster processing times, Layer 2 solutions like Cyber will become increasingly important for both developers and users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "decentralized-cross-chain-communication-push",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Decentralized Cross-Chain Communication: Push"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Platforms like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Protocol"
      }), ", with its ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Chat"
      }), " feature, add a layer of utility by offering decentralized messaging systems. Unlike traditional messaging platforms, Push Chat enables encrypted, peer-to-peer communication, where users retain complete control over their conversations. The integration of notifications is another major win—decentralized push notifications ensure users stay updated on critical events, such as governance proposals, NFT drops, or community votes, all without relying on centralized servers."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Soon to be ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.notion.so/Abstracting-away-Chains-for-a-better-UX-5fc5796918aa47ed8619a72d3bd01af9?pvs=21",
        children: "cross-chain"
      }), ", Push Chat will allow users to communicate across multiple blockchain networks, making it a powerful tool for decentralized communication and breaking down the silos between separate ecosystems. By enabling cross-chain communication, Push Chat opens up seamless interaction for users in decentralized communities, governance, and beyond."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Whether it's notifying users of governance proposals, sending updates on decentralized projects, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/hyper-scalable-group-chats/",
        children: "facilitating hyper-scalable group chats"
      }), ", or supporting the future of comms, social, gaming, and generally innovative apps through its grants program, Push is setting a new standard for decentralized communication tools and applications."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As Push Chat and Push Protocol itself continue to evolve, they will become even more important for decentralized social networks, since together, they allow users to communicate seamlessly across different dApps and ecosystems.  Cross-chain functionality is a game-changer for both social interaction and decentralized governance, as it breaks down the barriers between blockchain networks. Push’s commitment to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/cross-chain-requests-pre-pip/",
        children: "enabling Cross-Chain Requests"
      }), " demonstrates the team’s commitment to being a forerunner in that respect."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "the-future-of-social-media-is-coming",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "The Future of Social Media is Coming"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Decentralized social media offers a transformative approach to how we interact online, empowering users with ownership of their data, social graphs, and communication channels. Ultimately, decentralized social media is about more than just freedom from centralized control—it’s about creating a fairer, more user-centric web. By embracing decentralized platforms, we can take back control of our online identities and interactions. We will also be able to explore new models of engagement that are transparent, innovative, and built for the benefit of the user, not the platform."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This shift is not just inevitable; it’s necessary."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As we become more aware of the limitations and risks of centralized social networks, the move toward decentralized alternatives will accelerate. More users, developers, and creators will flock to platforms like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Farcaster"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Lens"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cyber"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push Protocol"
      }), ". We’ll begin to see a new era of online interaction—one that puts users at the center of everything and further connects our nascent industry, building a better, more equitable internet for all."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "All of the frameworks, networks, and projects mentioned here are key partners of Push Protocol and its DAO. Inside Push DAO, we believe that together with these groups and all of Push’s partners, we’ll build a truly impactful future for online communication and the internet at large."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Together, we'll make web3 the prevailing reality."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://gov.push.org/",
        children: "Reach out to the DAO"
      }), " and we’ll get you plugged in with the ecosystem’s grants program, which is now undergoing an exciting evolution in preparation for 2025. We only succeed in building forward towards a fairer, decentralized web, as one."]
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