"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[57643],{

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

/***/ 79759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-efd54013a8526607c2293a9e5fc87709.webp");

/***/ }),

/***/ 428336:
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
	slug: 'monthly-updates-june-2024',
	title: 'Push Protocol Monthly Updates: A Look Back at June',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Push Protocol Monthly Updates: A Look Back at June',
	text: 'June has been a monumental month for Push Protocol, marked by significant achievements and advancements that further strengthen our position in the Web3 ecosystem. More than 8.6 Million Notifications were sent with a cumulative 238k subscribers reached ending the month on a high note.',
	tags: [
		'Push Protocol',
		'Web3',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/monthly-updates-june-2024",
  "source": "@site/blog/2024-07-17-monthly-updates-june/index.md",
  "title": "Push Protocol Monthly Updates: A Look Back at June",
  "description": "Push Protocol Monthly Updates: A Look Back at June",
  "date": "2024-07-17T00:00:00.000Z",
  "formattedDate": "July 17, 2024",
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
      "label": "Blockchain Technology",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain-technology"
    }
  ],
  "readingTime": 2.4166666666666665,
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
    "slug": "monthly-updates-june-2024",
    "title": "Push Protocol Monthly Updates: A Look Back at June",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "Push Protocol Monthly Updates: A Look Back at June",
    "text": "June has been a monumental month for Push Protocol, marked by significant achievements and advancements that further strengthen our position in the Web3 ecosystem. More than 8.6 Million Notifications were sent with a cumulative 238k subscribers reached ending the month on a high note.",
    "tags": [
      "Push Protocol",
      "Web3",
      "Blockchain Technology"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Introducing Pre-PIP 3 (Push Improvement Proposal) for Cross-Chain Requests:",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/cross-chain-requests-pre-pip"
  },
  "nextItem": {
    "title": "Interoperable communications: Moving across an open web with Push",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/interoperable-communications-moving-across-an-open-web-with-push"
  }
};
const assets = {
"image": (__webpack_require__(987330)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Product Updates:",
  "id": "product-updates",
  "level": 3
}, {
  "value": "Partnership Updates:",
  "id": "partnership-updates",
  "level": 3
}, {
  "value": "Community Engagement:",
  "id": "community-engagement",
  "level": 3
}, {
  "value": "Ecosystem Highlights:",
  "id": "ecosystem-highlights",
  "level": 3
}, {
  "value": "Push DAO Updates:",
  "id": "push-dao-updates",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of Push Protocol Monthly Updates: A Look Back at June",
        src: (__webpack_require__(79759)/* ["default"] */ .A) + "",
        width: "1600",
        height: "840"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["June has been a monumental month for Push Protocol, marked by significant achievements and advancements that further strengthen our position in the Web3 ecosystem. More than ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "8.6 Million Notifications"
      }), " were sent with a cumulative ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "238k subscribers"
      }), " reached ending the month on a high note. We are excited to share the highlights:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "product-updates",
      children: "Product Updates:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push.org/",
        children: "website"
      }), " has undergone a revamp, featuring:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["New resources and tutorials for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://push.org/bootcamp/",
          children: "BRB Bootcamp"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Performance optimizations and security enhancements"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Improved blog section with new categories and enhanced search capabilities"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/welcome",
        children: "DApp"
      }), " has seen significant upgrades, including:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A new dashboard page"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Updates to the Push Alpha Access NFT Claims page"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The upcoming release of the reward points feature"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Development of a new design system"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Priority bug fixes"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/push-protocol/push-sdk",
        children: "SDK"
      }), " now also supports the base chain growing our support for 7 chains including Ethereum, Polygon, BNB, Arbitrum, Polygon zkEVM, Fuse, and Cuber. The Push SDK now also includes the Space ID package for .arb and .bnb domains, along with priority bug fixes."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Advancing our mobile app, we completed the development and review phase of the new version of the mobile app, currently in the testing phase, after which the new version will be rolled out."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "On the backend, we have:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Launched on Base and Linea chain"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Made Channel Pre cache live till stage from the backend side."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Enabled support for multiple aliases from the backend side"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Made Channel Tags live from push nodes and the SDK"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Migrated Dev and Stage from AWS to GCP"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Are working on SDK for Nodes."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "partnership-updates",
      children: "Partnership Updates:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We're thrilled to announce new partnerships with amazing projects:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We went live on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://push.org/blog/push-protocol-on-arbitrum-blockchain/",
          children: "Arbitrum Blockchain"
        }), " partnering with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xAeF69730D3210B151036C04434c2b1E551e20928",
          children: "Cryptex"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0x67243d6c3c3bDc2F59D2f74ba1949a02973a529d",
          children: "Grant Ships"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0x2A43cB483361FB5b3a09Bd11c24CbEE5cf1BE7Ca",
          children: "Estate Protocol"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xf995b8145F6d17AECf0d0Fb54435Dd4D6B3060e5",
          children: "ANDAO"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xcBEBcCCF0B846C686D68c4D9EDA95fb17a7eedaE",
          children: "Roseon"
        }), " enabling notifications for the users."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We welcomed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0xD79771c38e4AfFCeAc05a61ffEB566d2CAF7Dc6A",
          children: "Vurse"
        }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/channels/0x518a3A3e11f9f86A4509374559Adf0313B687A38",
          children: "MetaCRM"
        }), " integrating Push Notifications."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Further, we partnered with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1806327421664133423",
          children: "RetroBridge"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1804220237929419071",
          children: "Uquid"
        }), " listing the Push DApp on the RetroBridge Dapp Explorer and Uquid DApp Center."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We also partnered with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1804114717222281521",
          children: "Space ID Protocol"
        }), ", integrating their Web3 Name SDK to introduce the usability of .bnb and .arb which can be used on Push dApp & Push Chat."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "community-engagement",
      children: "Community Engagement:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In our continuous effort to keep the community engaged and excited, we’ve rolled out a series of thrilling initiatives including:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "We announced the winners of the #CommunicateWithPUSH Galxe Contest which resulted in 1000+ Push Alpha NFT mints in June."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Further, we opened the gates to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://app.push.org/chat/chatid:37799f9cb3ffd83eff4d2dc18913a3d9607f9c787a4374a7b3259bda28242cd6",
          children: "Push Alpha Community Chat"
        }), " for 573 Push Alpha Access NFT Holders."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "ecosystem-highlights",
      children: "Ecosystem Highlights:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push Protocol’s founder Harsh Rajat joined as a guest on multiple podcasts including:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1801565106783871325",
          children: "The Web3 Gamer"
        }), " Podcast hosted by Matthew"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1805253308501614931",
          children: "Web3 CMO Stories"
        }), " hosted by Joeri Bilast"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1800437383738929643",
          children: "Web3 Thought and Action"
        }), " by Akshat"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1804541946779615403",
          children: "Ethereum Cat Herders"
        }), " Project Demo sharing about his entrepreneurial journey, Push Protocol, and the developments."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Our DAO Lead ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/ExpatCrypto3",
        children: "Ian LeViness"
      }), " joined in for a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1798602250278875235",
        children: "DeFi 101 Space"
      }), " hosted by Rivo to discuss The Impact of Ethereum ETF Approval on the DeFi Ecosystem and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1801201370684436684",
        children: "DAO Spring"
      }), " for an X space on Finding Product/Community Market Fit for your DAO. We also had ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/PushChain_IN/status/1802801933830566022",
        children: "Push India Ambassadors"
      }), " sharing inspiring stories and insights from their participation in the Push Ambassador program."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We were proud to feature ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0x7F41abf7fDb9E4A6373EC3BAB3Df814b5CCceCC3",
        children: "Bancor"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0x361Cb6BE977d0113A33914A8f952Ced95747F793",
        children: "Fabwelt"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0xbc7797319B3eD4246c7078CC4e8B28Ea2C6872D0",
        children: "Dhive"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.push.org/channels/0x48De2669db5C2da4bf36C29ef9CFd62057B4b6C8",
        children: "Price Tracker"
      }), " Channels for the #PushChannelOfTheWeek in June 🔔"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "push-dao-updates",
      children: "Push DAO Updates:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["We launched the most awaited ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://mirror.xyz/0x1fdac7887A701609bcFb9188f5912EC59bDb33BE/-n9pgSJ2FZz75yPoEa-0a5mcg-SsHAiz6R8YdyrsO5I",
          children: "Push Grants Program V3"
        }), " powered by CharmVerse to empower early-stage & established projects building compelling social, gaming, & mobile apps."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Further, we also introduced the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://mirror.xyz/0x1fdac7887A701609bcFb9188f5912EC59bDb33BE/N8ZFxd1xU4pr1EeFR-0BJ9V01oYSUnie-ld21mzahBg",
          children: "Push DAO BD SubDAO Program"
        }), " offering an opportunity to engage in BD activities for Push Protocol and win rewards of $500-$1500 on successfully integrating with DAOs, DeFi protocol, dApps, and other projects with Push Notifications/Chat."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://mirror.xyz/0x1fdac7887A701609bcFb9188f5912EC59bDb33BE/-n9pgSJ2FZz75yPoEa-0a5mcg-SsHAiz6R8YdyrsO5I",
          children: "Push Grants program"
        }), " is now under community control via Push DAO."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Our council members ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://gov.push.org/u/christiandike/summary",
          children: "Christian Dike"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://gov.push.org/u/sixtykeys/summary",
          children: "SixtyKeys"
        }), " represented Push at Lagos Blockchain Week and Zuzalu event in Zanzibar, respectively."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Our Council member Carla secured a partnership with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.ethereumuruguay.org/",
          children: "Ethereum Uruguay"
        }), " for their upcoming buildathon."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "The first grantee Si3 started receiving funding, and DAO ambassadors began contributing to the ecosystem's growth."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Stay tuned for more updates as we continue to push the boundaries of the Web3 ecosystem."
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

/***/ 987330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-efd54013a8526607c2293a9e5fc87709.webp");

/***/ })

}]);