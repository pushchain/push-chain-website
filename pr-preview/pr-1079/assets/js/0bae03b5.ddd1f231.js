"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[82751],{

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

/***/ 157609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-26765ba30880889b7618592693c7e2c3.webp");

/***/ }),

/***/ 158848:
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
	slug: 'how-push-works-with-other-protocols',
	title: 'Ecosystem Integrations: How Push Works with Other Protocols',
	authors: [
		'sixty'
	],
	image: './cover-image.webp',
	description: 'Ecosystem Integrations: How Push Works with Other Protocols',
	text: 'As the web3 ecosystem expands, seamless communication and timely information flow have become essential for effective user engagement and enhanced user experience.',
	tags: [
		'Technical',
		'Push Tech'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-works-with-other-protocols",
  "source": "@site/blog/2024-11-08-how-push-works-with-other-protocols/index.md",
  "title": "Ecosystem Integrations: How Push Works with Other Protocols",
  "description": "Ecosystem Integrations: How Push Works with Other Protocols",
  "date": "2024-11-08T00:00:00.000Z",
  "formattedDate": "November 8, 2024",
  "tags": [
    {
      "label": "Technical",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/technical"
    },
    {
      "label": "Push Tech",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-tech"
    }
  ],
  "readingTime": 3.81,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "SixtyKeys",
      "title": "Guest Contributor",
      "url": "https://x.com/sixty_keys",
      "imageURL": "/assets/blog/authors/authorsixty.png",
      "key": "sixty"
    }
  ],
  "frontMatter": {
    "slug": "how-push-works-with-other-protocols",
    "title": "Ecosystem Integrations: How Push Works with Other Protocols",
    "authors": [
      "sixty"
    ],
    "image": "./cover-image.webp",
    "description": "Ecosystem Integrations: How Push Works with Other Protocols",
    "text": "As the web3 ecosystem expands, seamless communication and timely information flow have become essential for effective user engagement and enhanced user experience.",
    "tags": [
      "Technical",
      "Push Tech"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Protocol Monthly Updates - October",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/monthly-recap-october-2024"
  },
  "nextItem": {
    "title": "How Push Chat is Different from Traditional Chat Platforms ",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-push-chat-is-different-from-traditional-chat-platforms"
  }
};
const assets = {
"image": (__webpack_require__(293178)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "<strong>Lens Protocol: Real-Time Notifications for Social Engagement</strong>",
  "id": "lens-protocol-real-time-notifications-for-social-engagement",
  "level": 3
}, {
  "value": "<strong>Hats Protocol: Streamlined, Role-Based DAO Communication</strong>",
  "id": "hats-protocol-streamlined-role-based-dao-communication",
  "level": 3
}, {
  "value": "<strong>ENS Domains: Ensuring Domain Retention with Expiration Notifications</strong>",
  "id": "ens-domains-ensuring-domain-retention-with-expiration-notifications",
  "level": 3
}, {
  "value": "<strong>Hyperliquid: Real-Time Notifications for DeFi Risk Management</strong>",
  "id": "hyperliquid-real-time-notifications-for-defi-risk-management",
  "level": 3
}, {
  "value": "<strong>Uniswap: Liquidity Pool Monitoring</strong>",
  "id": "uniswap-liquidity-pool-monitoring",
  "level": 3
}, {
  "value": "<strong>Snapshot: Voting Alerts for DAOs</strong>",
  "id": "snapshot-voting-alerts-for-daos",
  "level": 3
}, {
  "value": "<strong>Push for Gitcoin Grants?</strong>",
  "id": "push-for-gitcoin-grants",
  "level": 3
}, {
  "value": "<strong>Looking Ahead: Real-Time Comms for All</strong>",
  "id": "looking-ahead-real-time-comms-for-all",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Ecosystem Integrations: How Push Works with Other Protocols",
        src: (__webpack_require__(157609)/* ["default"] */ .A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As the web3 ecosystem expands, seamless communication and timely information flow have become essential for effective user engagement and enhanced user experience. Push Protocol leads the way by providing on-chain notifications that integrate with essential DeFi, social, and DAO platforms. By enabling real-time updates, Push empowers users to stay informed, manage assets, and streamline their activities, supporting the decentralized ecosystem like never before.” Here's a look at how Push Protocol works with significant players like Lens Protocol, Hats Protocol, ENS Domains, Hyperliquid, and others to enhance the user experience and bring our decentralized ecosystem into an age of real-time communications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "lens-protocol-real-time-notifications-for-social-engagement",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Lens Protocol: Real-Time Notifications for Social Engagement"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Protocol enhances the user experience for Lens Protocol by delivering real-time notifications, creating a more engaging and interactive social ecosystem. Lens users can now receive notifications for critical events on their profiles, such as new followers, likes, and comments. This functionality ensures that users are always informed about activities related to their presence on the platform, making it easier to respond to interactions and engage with their community."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Through Push, Lens allows users to opt-in to receive these notifications directly in their wallets, creating a seamless Web3 experience that feels native and intuitive.  By keeping users engaged and aware of important updates in real-time, Push helps maintain a lively and responsive social ecosystem within Lens."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As both the official Lens Protocol channel and the Push ecosystem continue to grow, it will be fascinating to see how developers expand upon the existing connections."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Subscribe to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0xef6426D522CfE5B7Ae5dB05623aB0Ef78023dBe0",
        children: "Lens Protocol Channel"
      }), " 🔔"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "hats-protocol-streamlined-role-based-dao-communication",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Hats Protocol: Streamlined, Role-Based DAO Communication"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For DAOs that use Hats Protocol for decentralized role and permission management, Push Protocol offers token-gated group chat integrations. Hats Protocol's unique model of assigning \"hats\" or roles on-chain means that specific members are granted distinct responsibilities within a DAO. Push enhances this framework by enabling private group chats accessible only to members with particular hats, such as \"Treasury Manager\" or \"Governance Lead.\""
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This integration helps streamline communications within DAOs, ensuring that discussions remain relevant and focused by limiting access to members directly involved. By ensuring that only relevant members are part of each conversation, it increases efficiency and reduces noise, allowing DAOs to make faster, more informed decisions. It strengthens confidentiality and relevance in DAO interactions, keeping sensitive conversations secure and organized by the roles that are assigned by Hats Protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With Hats injected into our token-gated group chats and beyond, we couldn’t be more bullish on the future of all communities. This setup not only improves security but also helps foster more collaborative, transparent and organized environments within DAO and beyond."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "ens-domains-ensuring-domain-retention-with-expiration-notifications",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "ENS Domains: Ensuring Domain Retention with Expiration Notifications"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Ethereum Name Service (ENS) is a system that lets users replace long wallet addresses with easy-to-remember names (Domain Name Service - DNS) on the Ethereum blockchain.  It is widely used for decentralized identity, allowing users to replace complex wallet addresses with easily recognizable names. However, managing ENS domains can be challenging, especially with expiration dates that can easily be missed."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the fast paced world, staying on top of your decentralized identity is crucial. ENS Domain represents your identity, and letting them expire could mean losing access to vital services or communities. Push Protocol provides critical notifications for ENS holders when their domains are about to expire, allowing them to take timely action to avoid losing their names."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "These notifications are sent straight to the user’s wallet, so they can quickly take action.  No need to worry about missing emails or alerts elsewhere. This integration with Push enhances the user experience by safeguarding ENS ownership, reducing the risk of accidental lapses, and ensuring that users retain control over their decentralized identities."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Subscribe to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0x983110309620D911731Ac0932219af06091b6744",
        children: "ENS Domains Channel"
      }), " 🔔"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "hyperliquid-real-time-notifications-for-defi-risk-management",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Hyperliquid: Real-Time Notifications for DeFi Risk Management"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the fast-paced world of decentralized finance, Hyperliquid users benefit from Push Protocol's real-time alerts, which enable proactive risk management. For traders on Hyperliquid, staying on top of liquidation risks and position updates is essential. Push provides instant notifications to users' wallets, allowing them to manage risks, optimize trades, and act immediately when market conditions change."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This integration empowers DeFi users to make informed decisions in real-time, react quickly to price movements, and manage positions efficiently. It's a powerful tool for anyone trading in DeFi who wants to maximize their strategy and minimize risk."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Subscribe to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0xf1A1542Ca902AE861B59bffE77D92E8CD76146f1",
        children: "Hyperliquid Channel"
      }), " 🔔"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "uniswap-liquidity-pool-monitoring",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Uniswap: Liquidity Pool Monitoring"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Today, Push is used by many leading decentralized exchanges to notify traders of changes in their positions, changes in prices, and other use cases. Uniswap utilizes its Push channel to  notify liquidity providers of significant changes in pool ratios, impermanent loss, or yield fluctuations. By keeping providers updated on the performance and risk of their assets, Push helps optimize liquidity management for decentralized exchanges. These real-time insights help liquidity providers make smarter decisions, manage risks better, and ultimately boost the liquidity and efficiency of decentralized markets."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Subscribe to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0x97E5271f2987c7A3450e21dD7FFe4D004ddE773E",
        children: "Uniswap V3 Channel"
      }), " 🔔"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "snapshot-voting-alerts-for-daos",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Snapshot: Voting Alerts for DAOs"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Protocol is an excellent addition to governance platforms like Snapshot. Through Snapshot’s existing integration, DAOs and other on-chain communities can inform their community members about upcoming votes, results, and other governance actions. By using real-time notifications to ensure that users never miss an important vote or proposal update, Push is helping to encourage and increase active participation in DAO governance. Over time, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/blog/epns-partners-with-snapshot/",
        children: "as noted in our initial announcement"
      }), ", we expect the integration to be even further expanded to account for the needs of the frequently changing governance landscape."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Subscribe to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0x8C28Cf33d9Fd3D0293f963b1cd27e3FF422B425c",
        children: "Snapshot Channel"
      }), " 🔔"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-for-gitcoin-grants",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Push for Gitcoin Grants?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push does not currently have an integration with Gitcoin; however, Push Protocol could serve as a valuable tool for notifying contributors about campaign updates and new grant opportunities in the Gitcoin ecosystem. Contributors can opt-in to receive alerts for milestones, campaign deadlines, and updates on funded projects they support, keeping them engaged and informed about the causes they care about. In fact, every crypto ecosystem grants program can and will be able to benefit from such an integration."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "looking-ahead-real-time-comms-for-all",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Looking Ahead: Real-Time Comms for All"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With its growing network of integrations, Push is poised to become the backbone of decentralized communication. Push Protocol's integrations with Lens Protocol, Hats Protocol, ENS Domains, Hyperliquid, and hundreds of other web3 projects are advancing decentralized user experiences across multiple areas. From social media and DeFi to DAO operations and digital identity, Push provides the essential infrastructure for real-time communication that keeps users engaged, informed, and in control. This will unlock more possibilities for users, giving them greater control and access to the real-time information that powers decentralized applications. As more protocols integrate Push's notification capabilities, the web3 space moves closer to delivering seamless, responsive, and user-centric experiences."
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

/***/ 293178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-26765ba30880889b7618592693c7e2c3.webp");

/***/ })

}]);