"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[76226],{

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

/***/ 196753:
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
	slug: 'why-onchain-push-notifications-matter',
	title: 'Why Do On-Chain Push Notifications Matter?',
	authors: [
		'push',
		'sixty'
	],
	image: './cover-image.webp',
	description: 'Why Do On-Chain Push Notifications Matter?',
	text: 'Discover why on-chain push notifications are a necessity for improving your daily on-chain experience.',
	tags: [
		'Products'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/why-onchain-push-notifications-matter",
  "source": "@site/blog/2024-10-18-why-do-onchain-push-notifications-matter/index.md",
  "title": "Why Do On-Chain Push Notifications Matter?",
  "description": "Why Do On-Chain Push Notifications Matter?",
  "date": "2024-10-18T00:00:00.000Z",
  "formattedDate": "October 18, 2024",
  "tags": [
    {
      "label": "Products",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/products"
    }
  ],
  "readingTime": 3.566666666666667,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Push Chain",
      "url": "https://x.com/PushChain",
      "page": true,
      "imageURL": "/assets/blog/authors/authorpush.png",
      "key": "push"
    },
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
    "slug": "why-onchain-push-notifications-matter",
    "title": "Why Do On-Chain Push Notifications Matter?",
    "authors": [
      "push",
      "sixty"
    ],
    "image": "./cover-image.webp",
    "description": "Why Do On-Chain Push Notifications Matter?",
    "text": "Discover why on-chain push notifications are a necessity for improving your daily on-chain experience.",
    "tags": [
      "Products"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "What is Decentralized Social Media and Why Does it Matter?",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/what-is-decentralized-social-media"
  },
  "nextItem": {
    "title": "Abstracting Away Chains For a Better DApp UX",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/abstracting-chains-for-better-dapp-ux"
  }
};
const assets = {
"image": (__webpack_require__(673323)/* ["default"] */ .A),
"authorsImageUrls": [undefined, undefined],
};



const toc = [{
  "value": "<strong>dApps Lack Native Notifications</strong>",
  "id": "dapps-lack-native-notifications",
  "level": 2
}, {
  "value": "<strong>So Why Do On-Chain Push Notifications Matter?</strong>",
  "id": "so-why-do-on-chain-push-notifications-matter",
  "level": 2
}, {
  "value": "<strong>1. Real-Time Awareness for Time-Sensitive Actions</strong>",
  "id": "1-real-time-awareness-for-time-sensitive-actions",
  "level": 3
}, {
  "value": "<strong>2. Improving UX in Decentralized Applications</strong>",
  "id": "2-improving-ux-in-decentralized-applications",
  "level": 3
}, {
  "value": "<strong>3. Push is Everywhere, For Every Use Case</strong>",
  "id": "3-push-is-everywhere-for-every-use-case",
  "level": 3
}, {
  "value": "<strong>How Can Push Notifications Enhance Your On-Chain Experience?</strong>",
  "id": "how-can-push-notifications-enhance-your-on-chain-experience",
  "level": 2
}, {
  "value": "<strong>Governance and DAOs</strong>",
  "id": "governance-and-daos",
  "level": 3
}, {
  "value": "<strong>DeFi Risk Management</strong>",
  "id": "defi-risk-management",
  "level": 3
}, {
  "value": "<strong>News Publications</strong>",
  "id": "news-publications",
  "level": 3
}, {
  "value": "<strong>Token Performance Notifications</strong>",
  "id": "token-performance-notifications",
  "level": 3
}, {
  "value": "<strong>Web3 Job Listings</strong>",
  "id": "web3-job-listings",
  "level": 3
}, {
  "value": "<strong>Metaverse – NFT and Asset Sales Notifications</strong>",
  "id": "metaverse--nft-and-asset-sales-notifications",
  "level": 3
}, {
  "value": "<strong>What’s the Future of On-Chain Push Notifications?</strong>",
  "id": "whats-the-future-of-on-chain-push-notifications",
  "level": 2
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Why Do On-Chain Push Notifications Matter",
        src: (__webpack_require__(386078)/* ["default"] */ .A) + "",
        width: "1920",
        height: "1080"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In the fast-moving Web3 space, new developments and breakthroughs emerge at breakneck speeds, so staying informed and ahead of the curve is essential. However, most decentralized applications (dApps) lack native notification systems, leaving users in the dark when critical on-chain events occur. This is where push notifications, an on-chain communications primitive developed by Push Protocol, become crucial."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "dapps-lack-native-notifications",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "dApps Lack Native Notifications"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Most Web3 applications operate in a decentralized manner. They often don't include native push notifications like their Web2 counterparts (aka notifications you would receive from apps like WhatsApp or X). In the case of traditional apps, push notifications keep users updated on essential activities—whether it's a message from a friend or a reminder to pay bills. dApps, by contrast, typically require users to manually check their wallets or dashboards for updates, creating a less-than-user-friendly experience."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Without notifications, users can easily miss key events like:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Price movements of their favorite assets"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Governance proposal updates in DAOs"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Liquidation alerts in DeFi platforms"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "The latest publications from their chosen web3 news platform"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This gap is more than a mere inconvenience; it affects user engagement, asset security, and decision-making."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "so-why-do-on-chain-push-notifications-matter",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "So Why Do On-Chain Push Notifications Matter?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let's break it down below:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-real-time-awareness-for-time-sensitive-actions",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "1. Real-Time Awareness for Time-Sensitive Actions"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "On-chain push notifications ensure users never miss important events that require immediate attention. Whether it's an impending liquidation in a DeFi protocol or a time-sensitive governance vote in a DAO, notifications can help users act quickly."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-improving-ux-in-decentralized-applications",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "2. Improving UX in Decentralized Applications"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push notifications are an integral part of modern user experience (UX) design. By integrating on-chain notifications, dApps can bring a more familiar and seamless experience to users. This can reduce the friction typically associated with interacting with decentralized applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-push-is-everywhere-for-every-use-case",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "3. Push is Everywhere, For Every Use Case"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Protocol’s notifications are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "multi-platform"
      }), ", meaning users can receive alerts in their wallets, on their smartphones, and inside of other dApps. To date, Push Protocol has deployments on Android, iOS, and wallets like MetaMask and Unstoppable Domains. This flexibility ensures that users stay updated on anything passed through the channels they subscribe to, no matter where they are or which device they're using."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-can-push-notifications-enhance-your-on-chain-experience",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "How Can Push Notifications Enhance Your On-Chain Experience?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push notifications are a huge unlock for both developers of decentralized applications and their users/communities. Below we will highlight some of the widespread use cases of push notifications, and some more innovative and niche use cases."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "governance-and-daos",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Governance and DAOs"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In decentralized autonomous organizations (DAOs), push notifications can be utilized to update members on proposal submissions, voting deadlines, and vote outcomes, ensuring more informed and timely participation across all areas of the DAOs involved."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Benefits:"
        }), " Increases voter turnout and improves participation in governance activities."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Use Case:"
        }), " DAOs like Push DAO and Shapeshift DAO can use push notifications to inform members about any events and outcomes desired, ensuring that critical decisions receive the maximum level of timely attention."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Highlight Channel:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xfE4A6Fbd27B496855245A1e8047F693f0aDfDb08",
          children: "Push Governance"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0x8Cd0ad5C55498Aacb72b6689E1da5A284C69c0C7",
          children: "MakerDAO"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "defi-risk-management",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "DeFi Risk Management"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push notifications play a crucial role in DeFi, where users need to be informed of volatile market changes and liquidation risks. Alerts allow users to monitor their positions more closely."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Benefits:"
        }), " Helps users mitigate potential risks to their portfolios from getting out of hand by providing real-time updates on collateral levels, interest rates, and other market conditions."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Use Case:"
        }), " DeFi platforms like Aave and Uniswap can notify users when their investment strategies require attention due to market changes or vault updates."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Highlight Channel:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xAA940b3501176af328423d975C350d0d1BaAae50",
          children: "AAVE"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0x97E5271f2987c7A3450e21dD7FFe4D004ddE773E",
          children: "Uniswap V3"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "news-publications",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "News Publications"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "News platforms in web3 can use push notifications to alert subscribers about new content, ensuring that users stay updated on the latest trends, project developments, or breaking news in the crypto world."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Benefits:"
        }), " Provides timely updates on news articles, keeping users informed of the latest developments in the web3 ecosystem."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Use Case:"
        }), " A publication like CoinDesk and Bankless can notify subscribers of new articles about important events like regulatory changes, project updates, or interviews with thought leaders."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Highlight Channel:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xe56f1D3EDFFF1f25855aEF744caFE7991c224FFF",
          children: "CoinDesk"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0x4E15B14B9950A04370E36f2Ec05546ED5867ADeF",
          children: "Bankless"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "token-performance-notifications",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Token Performance Notifications"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Users can subscribe to token-centered channels to receive push notifications that track the performance of specific tokens in their portfolio, helping them make informed decisions about buying, selling, or staking based on real-time price changes."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Benefits:"
        }), " Keeps users informed about market fluctuations, allowing them to react quickly and manage their investments more effectively."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Use Case:"
        }), " Users can be notified when the price of a selected token rises or falls beyond a certain threshold."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Highlight Channel:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0x03EAAAa48ea78d1E66eA3458364d553AD981871E",
          children: "BTC Tracker"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xDBc5936E4daaE94F415C39D284f6a69c4d553F2F",
          children: "ETH Tracker"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "web3-job-listings",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Web3 Job Listings"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For job seekers in the blockchain space, push notifications can alert them when new positions are posted on web3 job boards, ensuring they don’t miss out on exciting opportunities."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Benefits:"
        }), " Keeping job seekers informed in real-time about new listings, increasing their chances of applying early."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Use Case:"
        }), " Platforms like Cryptocurrency Jobs and Crypto Jobs List can notify users when relevant job openings that match their profile are posted, improving their chances of landing a new role."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Highlight Channel:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xde3e447E125FA2391DC9BCbfA0B821424422FEAF",
          children: "Cryptocurrency Jobs"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0x30a1627fDdc0dBB7dD00b881D25A45B443f294bB",
          children: "Crypto Jobs List"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "metaverse--nft-and-asset-sales-notifications",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Metaverse – NFT and Asset Sales Notifications"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In virtual worlds like Decentraland, where users hold digital assets such as virtual real estate and NFTs, push notifications inform users when their assets have been sold or when new opportunities to acquire more property or further parts of a collection open up."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Benefits:"
        }), " Enhances the user experience by providing real-time updates on asset sales, ensuring users are always aware of important developments."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Use Case:"
        }), " Decentraland can notify users whenever one of their virtual land parcels or NFTs is sold, allowing them to manage their assets more efficiently and stay engaged with the marketplace."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
          children: ["Highlight Channel: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://app.push.org/channels/0xBCAc4dafB7e215f2F6cb3312aF6D5e4F9d9E7eDA",
            children: "Decentraland"
          })]
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "whats-the-future-of-on-chain-push-notifications",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "What’s the Future of On-Chain Push Notifications?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As the web3 ecosystem grows, on-chain push notifications will become a true industry standard."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push Protocol's decentralized notification system already sets the standard by offering users real-time updates in a secure, opt-in environment. On-chain notifications will continue to evolve, becoming a critical tool for increasing engagement, security, and decision-making across the decentralized landscape. Using them as a building block, even more robust products will be built Reach out to our team if you have a potential integration in mind, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushprotocol",
        children: "through our Discord"
      }), ", or other social media channels."]
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

/***/ 386078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-75f68f486f9c51c40114b77e1f9c16e7.webp");

/***/ }),

/***/ 673323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-75f68f486f9c51c40114b77e1f9c16e7.webp");

/***/ })

}]);