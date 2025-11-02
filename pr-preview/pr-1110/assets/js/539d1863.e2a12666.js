"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[25266],{

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

/***/ 134649:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1110/blog/july-monthly-recap","source":"@site/blog/2023-08-07-july-monthly-recap/index.md","title":"July Monthly Recap✨","description":"Cover image of July Monthly Recap✨","date":"2023-08-07T00:00:00.000Z","tags":[{"inline":true,"label":"Push Protocol","permalink":"/push-chain-website/pr-preview/pr-1110/blog/tags/push-protocol"},{"inline":true,"label":"Newsletter","permalink":"/push-chain-website/pr-preview/pr-1110/blog/tags/newsletter"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1110/blog/tags/web-3"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1110/blog/tags/blockchain-technology"}],"readingTime":3.32,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1110/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1110/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"july-monthly-recap","title":"July Monthly Recap✨","authors":["push"],"image":"./cover-image.webp","text":"July has been nothing short of extraordinary! We made some groundbreaking developments that have taken Push to new heights. Let’s dive into the major achievements that have shaped our journey this month.","tags":["Push Protocol","Newsletter","Web3","Blockchain Technology"]},"unlisted":false,"prevItem":{"title":"Introducing the Push Ambassador India Program🌸","permalink":"/push-chain-website/pr-preview/pr-1110/blog/introducing-the-push-ambassador-india-program"},"nextItem":{"title":"Staking & Migration Guide for PushV2 Rewards Program📜","permalink":"/push-chain-website/pr-preview/pr-1110/blog/staking-and-migration-guide-for-push-v2-rewards-program"}}');

/***/ }),

/***/ 378936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_08_07_july_monthly_recap_index_md_539_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_08_07_july_monthly_recap_index_md_539_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134649);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'july-monthly-recap',
	title: 'July Monthly Recap✨',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'July has been nothing short of extraordinary! We made some groundbreaking developments that have taken Push to new heights. Let’s dive into the major achievements that have shaped our journey this month.',
	tags: [
		'Push Protocol',
		'Newsletter',
		'Web3',
		'Blockchain Technology'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(700234)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Development⚒️",
  "id": "development️",
  "level": 2
}, {
  "value": "Frens of Push💜",
  "id": "frens-of-push",
  "level": 2
}, {
  "value": "Featured In📰",
  "id": "featured-in",
  "level": 2
}, {
  "value": "Community and Governance🤝",
  "id": "community-and-governance",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover image of July Monthly Recap✨",
        src: (__webpack_require__(831227)/* ["default"] */ .A) + "",
        width: "1400",
        height: "735"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "July has been nothing short of extraordinary! We made some groundbreaking developments that have taken Push to new heights. Let’s dive into the major achievements that have shaped our journey this month."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "development️",
      children: "Development⚒️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Most notably, we’re thrilled to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/push-v2-is-live-new-rewards-utility-functionality-4d591284209d",
        children: "unveil Push V2!"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This update introduces exciting new features including brand ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/new-push-yield-farming-rewards-full-details-4a9ff473226d",
        children: "new yield farming rewards via Push Fee Pool Staking"
      }), ", Incentivized Chat functionality, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push-protocol.medium.com/push-spaces-is-live-decentralized-audio-and-video-streaming-is-here-bc77deed16ca",
        children: "all-new Push Spaces"
      }), " and Customized Profiles. All these features aim at empowering users, rewarding participation, creating a circular economy to democratize web3 communication and expand the horizons of dApp UX possibilities. We’re excited for the future!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Another major highlight of July was the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push-protocol.medium.com/push-is-live-on-polygon-quickswap-b683ef0f71d8",
        children: "launch of $PUSH token on Polygon and Quickswap"
      }), ", providing multi-chain accessibility, usability, and composability. This launch, coupled with the Push v2 launch, unlocks new utility for $PUSH, creating endless possibilities for developers within the Polygon ecosystem."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Following the successful launch of $PUSH on Polygon, we launched the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push-protocol.medium.com/pushing-ahead-in-time-push-x-timeswap-6a94edaffc03",
        children: "$PUSH-USDC lending & borrowing pool on Timeswap"
      }), ", enabling users to borrow $PUSH at a fixed interest rate and lend $PUSH to earn a fixed interest rate. All enriched by Timeswap’s non-liquidatable loans & adjustable APR features."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["There’s more! We continue to elevate the Push experience as we ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://medium.com/push-protocol/push-spaces-is-live-decentralized-audio-and-video-streaming-is-here-bc77deed16ca",
        children: "unveiled Push Spaces"
      }), ", a decentralized, incentivized, community-based streaming solution for the future of online communication. With Push Spaces, we’re continuing to build out the decentralized communication space by providing the web3 with better UX, privacy, and censorship-resistant communication solutions."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "frens-of-push",
      children: "Frens of Push💜"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "July was brimming with exciting partnerships, forging a stronger web3 communication ecosystem for Push and our frens. We’re excited to have new members in the fam:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Our collaboration with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1678455797867585564",
          children: "DataverseOS"
        }), " allows web3 data infrastructure developers to leverage the power of decentralized Push communication tools."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["The partnership with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1678746417018413058",
          children: "Linea"
        }), " enables UX enhancements for builders using their zkEVM rollup."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["We are thrilled to power web3 messaging and notifications on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1679083431022723072",
          children: "ReviseNFT’s LensBird"
        }), ", a decentralized social gaming platform."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["We teamed up with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://twitter.com/identialxyz/status/1674792960632975365?s=20",
          children: "Idential"
        }), " to provide users with real-time notifications to stay updated on new attestations."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["We’re excited to integrate Push Notifications for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1680245839636176897",
          children: "Lif3 Wallet"
        }), " users, delivering real-time alerts based on individual configurations."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "featured-in",
      children: "Featured In📰"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We had the privilege of being featured and participating in various esteemed events and platforms:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1686053348619829256",
          children: "EthCC was incredible"
        }), ". We were delighted to be part of several awesome discussions and events. We always enjoy making new frens and meeting old ones. Here’s what we got up to:"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Our CEO and co-founder, Harsh, took the stage at EthCC with his insights on “", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1681695398191325184",
          children: "How Improving the Crypto UX Can Drive Mass Adoption."
        }), "”"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Harsh also joined in various discussions during EthCC, including topics like “", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1679845888854831105",
          children: "Pushing the Boundaries of Web3 UX"
        }), "” at Infracon hosted by Biconomy, Particle Network, and Transak, and “", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1681240353750253569",
          children: "Unleashing the Crypto AI Nexus”"
        }), " with IOSG Ventures."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Our co-founder, Richa, joined a panel of experts to talk about “", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://x.com/PushChain/status/1680238517006336006",
          children: "The Power of Unstoppable Marketplace and Building a Community with Branded TLDS"
        }), "” hosted by Unstoppable Domains."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: ["We were honored to be featured on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://x.com/PushChain/status/1681988469873168384",
            children: "Polygon’s MerokuStore"
          }), " “dApp-sdk” as their trusted messaging partner with other EthCC partners like Transak, Biconomy, and DappLooker."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: ["Push was featured at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://x.com/PushChain/status/1679181327340273695",
            children: "Encode Club’s Hacker House"
          }), " as a Zero to dApp partner, shedding light on the significance of web3 messaging, notification, and video apps."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
          children: ["Harsh was featured in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://x.com/PushChain/status/1681768659214106627",
            children: "Quickswap’s Mega Twitter Space"
          }), " event, “All Roads Lead to Polygon,” alongside other prominent Polygon frens, discussing the exciting “Wild West of web3 Marketing.”"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "community-and-governance",
      children: "Community and Governance🤝"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Our community continues to thrive with a multitude of exciting engagements."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We hosted two engaging Twitter Spaces. The first session, “", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1681664158582939648",
        children: "The Art of Successful Grant Proposals"
      }), "” featured industry experts sharing invaluable insights on securing grants for web3 projects. Our second session, “", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1680980161137704961",
        children: "How to Create a Sticky web3 Gaming UX,"
      }), "” delved into the realm of web3 gaming, where experts shared their secrets on crafting immersive user experiences in web3 gaming."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["To further empower the next generation of web3 developers, we launched the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1679818451945136128",
        children: "Back2School Push Grant Program"
      }), ". This program is focused on student-led web3 community projects at universities, with the aim to foster learning, collaboration, and education on cutting-edge web3 development."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In addition, we introduced 2 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1680472360313577472",
        children: "brand new Push missions"
      }), ", offering our community members a chance to contribute to the ecosystem while earning $PUSH tokens."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["What’s more? The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1682737259282325511",
        children: "Push India tour"
      }), " is on the horizon, providing a platform for web3 enthusiasts from all across India to connect, engage, and collaborate. We look forward to seeing you all!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Lastly, we congratulate the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://x.com/PushChain/status/1684189869478760448",
        children: "16 incredible winning teams"
      }), " who built using Push at the ETHGlobal Paris Hackathon. Their innovative projects showcased the power and potential of decentralized communication in various domains."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As we bid farewell to July, we are inspired by the progress we’ve made and the extraordinary community support."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Thank you for being a part of the Push journey. Stay tuned for more updates and exciting developments!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 700234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-30f613027163d566e8a68c74b7d155d0.webp");

/***/ }),

/***/ 831227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-30f613027163d566e8a68c74b7d155d0.webp");

/***/ })

}]);