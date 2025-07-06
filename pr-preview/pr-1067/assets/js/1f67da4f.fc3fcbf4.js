"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[94792],{

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

/***/ 290401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-12c15cd17db888a1e9d5731c71a22a4c.webp");

/***/ }),

/***/ 476327:
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
	slug: 'epns-monthly-blocks-jun-2021',
	title: 'EPNS Monthly Blocks',
	description: 'EPNS Monthly Blocks',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'With our roadmap released to the public last month and all our ambitious goals for 2021, it’s no surprise this month comes packed with great news and lots of work!.Let’s look into everything EPNS that took place this month!',
	tags: [
		'Announcements',
		'Monthly Report',
		'Notifications',
		'Ethereum',
		'Blockchain'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-monthly-blocks-jun-2021",
  "source": "@site/blog/2021-06-01-epns-monthly-blocks-jun-2021/index.md",
  "title": "EPNS Monthly Blocks",
  "description": "EPNS Monthly Blocks",
  "date": "2021-06-01T00:00:00.000Z",
  "formattedDate": "June 1, 2021",
  "tags": [
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/announcements"
    },
    {
      "label": "Monthly Report",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/monthly-report"
    },
    {
      "label": "Notifications",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/notifications"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    }
  ],
  "readingTime": 2.7933333333333334,
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
    "slug": "epns-monthly-blocks-jun-2021",
    "title": "EPNS Monthly Blocks",
    "description": "EPNS Monthly Blocks",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "With our roadmap released to the public last month and all our ambitious goals for 2021, it’s no surprise this month comes packed with great news and lots of work!.Let’s look into everything EPNS that took place this month!",
    "tags": [
      "Announcements",
      "Monthly Report",
      "Notifications",
      "Ethereum",
      "Blockchain"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Roadmap Q2: Strategic Collabs and what we did so far with them!",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/strategic-collabs"
  },
  "nextItem": {
    "title": "EPNS ライトペーパー",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-ライトペーパー"
  }
};
const assets = {
"image": (__webpack_require__(290401)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "EPNS Liquidity Rewards Program 💎",
  "id": "epns-liquidity-rewards-program-",
  "level": 2
}, {
  "value": "Pilot Program Collaboration Updates",
  "id": "pilot-program-collaboration-updates",
  "level": 2
}, {
  "value": "Collaboration announcements",
  "id": "collaboration-announcements",
  "level": 2
}, {
  "value": "Completing EPNS Protocol v1",
  "id": "completing-epns-protocol-v1",
  "level": 2
}, {
  "value": "Backend SDKs",
  "id": "backend-sdks",
  "level": 2
}, {
  "value": "Browser Extension",
  "id": "browser-extension",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of EPNS Monthly Blocks",
        src: (__webpack_require__(767900)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With our roadmap released to the public last month and all our ambitious goals for 2021, it’s no surprise this month comes packed with great news and lots of work!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let’s look into everything EPNS that took place this month!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "epns-liquidity-rewards-program-",
      children: "EPNS Liquidity Rewards Program 💎"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Our Liquidity Rewards Program has been a great success! It has consistently delivered very attractive yields to participants in both of the pools available. We have observed yields above 210% APR for the Uniswap LP Pool (UNI-V2) through the entire month and above 115% APR for the PUSH Staking pool."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Make sure to take a look at this awesome explainer video from Defi Dad."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .VideoContainer */ .bC, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
        width: "100%",
        height: "100%",
        style: {
          borderRadius: '32px'
        },
        src: "https://www.youtube.com/embed/Maq-KxPv8W4",
        title: "How to Earn 120-210% APR Yield Farming with The Ethereum Push Notification Service",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Additionally, we recently updated the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://incentives.epns.io/",
        children: "Community Incentives website"
      }), " to show more information about your position in a pool and enabled support for Wallet Connect and Ledger. Also, we are adding APR & APY percentages soon."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Talking about community, our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://medium.com/ethereum-push-notification-service/kicking-off-the-epns-nft-community-drops-6a5c49808cf",
        children: "Community #ROCKSTAR NFT"
      }), " drop keeps setting the bar higher and higher. From deep community involvement and contributions to the project, dApps, Infographics, and more. Can’t wait to see where creativity will take our awesome community next month!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "-q2-roadmap-status-update",
      children: "📢 Q2 Roadmap: Status Update"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "First Image",
        src: (__webpack_require__(665268)/* ["default"] */ .A) + "",
        width: "1400",
        height: "467"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "pilot-program-collaboration-updates",
      children: "Pilot Program Collaboration Updates"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We are making steady progress building channels with:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/accelerating-defi-with-epns-f2cbfaa33c91",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Uniswap"
          })
        }), ": to notify users about new governance proposals. The channel has passed an initial validation from the EPNS side, and we will soon be working on adjustments and improvements based on Uniswap’s team feedback."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Second Image",
        src: (__webpack_require__(551867)/* ["default"] */ .A) + "",
        width: "600",
        height: "375"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/advancing-clr-fund-funding-protocol-with-web3notifs-366b61408aa3",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Clr.fund"
          })
        }), ": to notify users regarding events like rounds starting/finalizing, when contributions are received, when funds claimed, and when a tally is published. This channel is currently in development, and we are working closely with the CLR.fund team to speed up the process."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/we-alpha-homora-innovations-in-defi-with-epns-3873f74dc48",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Alpha Homora"
          })
        }), ": to notify users about upcoming liquidations of leveraged positions. We are working against the latest version of the AH contracts, and the channel will be ready for testing soon."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Surprise channel announcement soon 👀"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "collaboration-announcements",
      children: "Collaboration announcements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/advancing-ceramic-networks-decentralized-identity-network-with-epns-264b24a7508f",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Ceramic Network"
          })
        }), " to explore sending notifications through a user’s DID."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/epns-partners-with-bzx-to-deliver-crucial-margin-trading-push-notifications-to-wallets-a2f52e4fcefe",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "bZx"
          })
        }), " to send margin lending and trading notifications directly to bZx user wallets."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/epns-partners-with-unilend-finance-to-deliver-notifications-for-permissionless-money-markets-e647300b68ce",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Unilend"
          })
        }), " to notify users about new tokens listings, status of swap and spot trades, governance proposals, airdrops, and when a Flash Loan goes through."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/advancing-charged-particles-interest-bearing-nfts-with-epns-dc5643325300",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Charged Particles"
          })
        }), " to notify users about NFT deposits, interest earned and more actions in the Charged Particles platform."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/bringing-power-of-web3notif-to-the-awesome-yam-community-95d8a39ed86c",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "YAM Finance"
          })
        }), " to notify users about liquidation risks, and governance actions."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["With ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/epns-partners-with-plotx-to-bring-push-notifications-to-defi-prediction-markets-6b63952d46f6",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "PlotX"
          })
        }), " to send all prediction market trading notifications directly to PlotX user wallets."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "completing-epns-protocol-v1",
      children: "Completing EPNS Protocol v1"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Full protocol test cases coverage is in the code review stage."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Adding capabilities to delegate other wallets to Send Notifications on behalf of a channel."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Ensuring upgradeability capabilities."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "backend-sdks",
      children: "Backend SDKs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is currently a work in progress for our team. We have been taking into consideration not only what we had planned since the start of the year, but also all the feedback and questions received from the community mostly through our Discord server. We are aiming to release an npm package that will allow developers to easily interface with the EPNS protocol to perform its most basic set of functions, starting with Sending Notifications in all its flavors."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "browser-extension",
      children: "Browser Extension"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is also a work in progress. The goal is to release an initial version of a Browser Extension that will allow end-users to easily set up their wallets to receive notifications (through a guided wizard). Once the wallet is configured, users will know when new notifications arrive and will be able to go to the dApp with 1-click."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "other-highlights",
      children: "Other Highlights"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Rockstar of Ethereum"
        }), " latest episodes with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.youtube.com/watch?v=LiPGqggzoZ4",
          children: "Nischal Shetty"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.youtube.com/watch?v=OCL4w7vnFfM&t=3s",
          children: "Anthony Sassano"
        }), " are live!"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Featured by:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://thedefiant.io/defiant-degens-how-to-farm-in-defis-first-protocol-for-push-notifications/",
          children: "The Defiant: $PUSH farming tutorial"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.dapp.com/article/3-utility-dapps-on-ethereum",
          children: "dApp.com"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://cryptorandgroup.com/interview-with-epns/",
          children: "Interview by CryptoRand"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.delphidigital.io/reports/push-vs-pull/",
          children: "Report by Delphi Digital"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/coinmonks/defi-on-web-3-0-creates-more-earnings-opportunities-e8cc676ccc3b",
          children: "Coinmonks"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://hackernoon.com/margin-trading-accounts-how-decentralized-notifications-increase-borrowing-power-e7p34qj",
          children: "Hackernoon"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.dapp.com/article/3-utility-dapps-on-ethereum",
          children: "dapp.com"
        }), " and we are now on Zapper.fi!"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Blog Posts"
        }), ": Make sure to take a look at our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/epns-faqs-21062505f479",
          children: "EPNS FAQ"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "AMA:"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://medium.com/ethereum-push-notification-service/epns-community-ama-recap-60cf5d4e555f",
          children: "EPNS Community AMA"
        }), ", AMA Lovers Club, Crypto Talkz, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://twitter.com/epnsproject/status/1397738325688029188?s=20",
          children: "AMA with PlotX"
        }), ", TheLAO Community AMA."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This month we want to leave you with one of our favorite and most liked tweet of the month: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/epnsproject/status/1395794479764836357?s=20",
        children: "Meet Frens of EPNS 💖💖💖"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It reflects in many ways how lucky and grateful we are to be in this amazing space at the right moment and at the right time."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Cheers!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
      src: "https://cdn.embedly.com/widgets/media.html?type=text%2Fhtml&key=a19fcc184b9711e1b4764040d3dc5c07&schema=twitter&url=https%3A//twitter.com/epnsproject/status/1395794479764836357&image=https%3A//i.embed.ly/1/image%3Furl%3Dhttps%253A%252F%252Fabs.twimg.com%252Ferrors%252Flogo46x38.png%26key%3Da19fcc184b9711e1b4764040d3dc5c07",
      allowfullscreen: "",
      frameborder: "0",
      height: "786",
      width: "1006",
      title: "Ethereum Push Notification Service | EPNS on Twitter: \"1/🎉Let's celebrate! We're grateful to be working with some of the most awesome protocols in the ecosystem. 🤝In this thread, we'll take a dive into each collaboration as we commemorate and remember why we've come together!Here are the #FrensOfEPNS... https://t.co/fz0o9PefnF / Twitter\"",
      class: "eo n ff dy bg",
      scrolling: "no"
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

/***/ 551867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-c09c63bf40b986e8875471ec0f515043.gif");

/***/ }),

/***/ 665268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-9ad5a01e2b07805e7215f3296b4db6d7.webp");

/***/ }),

/***/ 767900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-12c15cd17db888a1e9d5731c71a22a4c.webp");

/***/ })

}]);