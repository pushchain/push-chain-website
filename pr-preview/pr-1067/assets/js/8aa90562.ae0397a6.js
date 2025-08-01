"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[9729],{

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

/***/ 55596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8d785541db1f32b09e62e7691e3027d2.webp");

/***/ }),

/***/ 211026:
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
	slug: 'boosting-dao-infrastructure',
	title: 'Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer',
	description: 'Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'EPNS and Genesis Shards collaborate to bring decentralized push notifications to the platform',
	tags: [
		'Defi',
		'Ethereum',
		'Blockchain',
		'Epnsproject'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/boosting-dao-infrastructure",
  "source": "@site/blog/2022-05-18-boosting-dao-infrastructure/index.md",
  "title": "Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer",
  "description": "Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer",
  "date": "2022-05-18T00:00:00.000Z",
  "formattedDate": "May 18, 2022",
  "tags": [
    {
      "label": "Defi",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/defi"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Epnsproject",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/epnsproject"
    }
  ],
  "readingTime": 5.03,
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
    "slug": "boosting-dao-infrastructure",
    "title": "Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer",
    "description": "Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "EPNS and Genesis Shards collaborate to bring decentralized push notifications to the platform",
    "tags": [
      "Defi",
      "Ethereum",
      "Blockchain",
      "Epnsproject"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "EPNS and Hermes DeFi Form An Alliance to Enable Seamless Communication for Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-hermes"
  },
  "nextItem": {
    "title": "EPNS and Genesis Shards Join Forces to Bring Push Notifications to Users",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-and-genesis-shards"
  }
};
const assets = {
"image": (__webpack_require__(55596)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "What is a DAO?",
  "id": "what-is-a-dao",
  "level": 3
}, {
  "value": "Solving Challenges in DAO Ops",
  "id": "solving-challenges-in-dao-ops",
  "level": 3
}, {
  "value": "Contribution Management:",
  "id": "contribution-management",
  "level": 4
}, {
  "value": "Payroll Processing &amp; Compensation:",
  "id": "payroll-processing--compensation",
  "level": 4
}, {
  "value": "Decision Making &amp; Treasury Management:",
  "id": "decision-making--treasury-management",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    h4: "h4",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Boosting DAO Infrastructure and Operations tooling by leveraging EPNS as the Communication Layer",
        src: (__webpack_require__(256067)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "[DAOs (Decentralized Autonomous Organisations)]"
      }), " are one of the fastest-growing verticals in the Web3 space this year. According to a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://kraken.docsend.com/view/kfzxp6qqaqnqyue6",
        children: "report by Kraken"
      }), ", as of February 2022, there are at least 188 DAOs controlling over $12 billion in assets. With such a mammoth amount of funds in DAO treasuries, there is also an overwhelming increase in the importance and management of DAO operations, as proven by the numbers (6.8K Snapshot spaces, 700K+ governance token holders). This opens up a door to build and create value in all the operational wings of this new era of digitally-native internet collective organizations."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Although there is an increase in demand for robust DAO tooling, most of the space is still budding and isn’t as streamlined as one would hope for it to be. EPNS aims to solve one of the significant challenges faced by DAO operations — ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "communication."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The communication layer in web3 is often overlooked by many, even in DAOs. This eventually leads to slower workflows, inefficient processes, etc. among members, and often leads to going back to the reliance on centralized web2 services for communication such as Twitter and Discord."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-is-a-dao",
      children: "What is a DAO?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "A DAO is an internet-native collective that comes together for a common purpose. They have a lower barrier to entry to coordinate assets and ideas compared to traditional organizations and they have no single person or group that controls the decisions of the entity’s operations."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Although there are many types of DAOs out there these days, most of them fall under the following categories: to build products (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://yearn.finance/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "yearn"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://sushi.com/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Sushi"
      }), "), to invest (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://www.thelao.io/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "The LAO"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://metacartel.xyz/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "MetaCartel Ventures"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://www.bitdao.io/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "BitDAO"
      }), "), to collect NFTs (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://flamingodao.xyz/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "FlamingoDAO"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://pleasr.org/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "PleasrDAO"
      }), "), Protocol DAOS (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://makerdao.com/en/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Maker"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://compound.finance/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Compound"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://uniswap.org/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "UniSwap"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://aave.com/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Aave"
      }), " & ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://epns.io/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "EPNS"
      }), " too), DAO Operating Systems( ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://aragon.org/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Aragon"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://daostack.io/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "DAOStack"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://www.orcaprotocol.org/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Orca"
      }), "), Social DAOs (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://radicle.xyz/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Radicle"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://www.seedclub.xyz/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Seed Club"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://www.fwb.help/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "FWB"
      }), ") or to provide services (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://www.raidguild.org/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "RaidGuild"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://www.lexdao.coop/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "LexDAO"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        class: "af no",
        href: "https://www.metafactory.ai/",
        rel: "noopener ugc nofollow",
        target: "_blank",
        children: "Metafactory"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "solving-challenges-in-dao-ops",
      children: "Solving Challenges in DAO Ops"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "No matter the sector these DAOs are focusing on, operations & communication are a mammoth task when you have thousands of members scattered across the globe. EPNS solves some of the major challenges in communications faced by DAOs through its decentralized web3 communication layer. Let us explore some of the possible use cases below."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "contribution-management",
      children: "Contribution Management:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "DAOs have contributors who contribute to the DAO in various degrees. The journey of a contributor is hard to track and navigate. For a new member, this journey would be to navigate through the DAO and find a task they can assign themselves and make their first contribution to the DAO."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Bounties and Quests act as bite-sized tasks that members can tackle to “level up” in the DAO. Yearn has a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://contribute.yearn.rocks/",
        children: "dashboard that aggregates open issues"
      }), " across their repositories, Polygon Ecosystem DAO ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://app.dework.xyz/0xpolygon-ecosystem/overview",
        children: "posts bounties and tasks"
      }), " for members to pick up to help promote the Polygon Ecosystem. These act as great ways to aggregate the tasks at hand, but disseminating that information among members is also equally important."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "For DAOs that measure contributor engagement as a KPI for the value one brings to it, it is important to surface the right information (tasks, bounties, etc.) to the right people at the right time."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The state of communication in DAOs is reliant on platforms like Discord, whenever a new task or bounty is generated, it’s pushed to Discord as a message which could just get lost like a needle in a haystack. This is not an ideal form of communication that could be achieved by DAOs, much more can be done."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS can act as the communication layer that proves to be vital for giving real-time updates and notifications to DAO members when a bounty is added, updated, or completed. This allows members to stay updated on all things DAO-related, and also be able to jump onto tasks that they see fit. This reduces any sort of confusion and helps in matching the right kind of people to the right kind of jobs, hence increasing DAO productivity tenfold."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "payroll-processing--compensation",
      children: "Payroll Processing & Compensation:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once bounties or quests are completed, then comes the need to get paid for one’s efforts. Different DAOs have different payment structures and mechanisms, there may be some bounty completers, some who are kept on recurring salary by the DAO, etc. No matter the payment structure for the members of a DAO, it is important for members to know when their payroll has been processed."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Often we see DAOs processing the payments and having to either individually message each member that it has been processed, or not mention it at all."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With EPNS, DAOs can easily notify contributors about the status of their compensation, and contributors can immediately know when their efforts have been reimbursed. No more emails, or DMs that say “Your compensation has been processed”. Get a notification right at your fingertips that say “Cha-Ching! your DAO has sent you $$$ for your contributions!”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "decision-making--treasury-management",
      children: "Decision Making & Treasury Management:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Another area that is tightly coupled with the above 2 points is DAO decision making & treasury management. A DAO thrives on its treasury — without it, the DAO cannot function. Proposals are created to decide on how the funds in the treasury are used to help the DAO grow and achieve its goals while members debate and vote on them. Tools like Snapshot are used for off-chain signature-based voting, while signaling is usually done on platforms like Discord or Governance Forums."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, there is usually a disparity between the number of active voters and the number of members in the DAO. This, coupled with the challenges of DAO treasury management such as transparency and insights into asset allocation and spending to assess performance and financial health, causes general confusion about the state of the DAO and limits its growth."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It is often hard for members to keep track of active proposals and new proposals that are proposed in the DAO on a regular basis, most DAOs expect their members to be actively involved in the Discord or check their Snapshot page for new proposals. This is not always easy for all members, and hence there needs to be a better way to communicate with members regarding this."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS can send notifications right at the fingertips of DAO members whenever there is a new proposal or there is new activity on an existing proposal. Members can stay updated easily about the state of the DAO and be more actively involved in the decision-making process of it. This reduces voter apathy and increases voter turnout, hence increasing decentralization in terms of governance."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As decisions are made, DAOs need to manage finances in their treasury — allocating funds to initiatives, giving away grants, compensating working groups, etc. However, there are challenges to this as well. There need to be more transparent insights into the overall financial health of the DAO and members of the DAO need to be aware of the actions taken by the treasury each time. Communication regarding treasury inflows, and outflows, and linking it to proposal spending, needs to be communicated well to the members of the DAO so they can make educated decisions when voting on certain crucial proposals. Communication of KPIs of a DAO is crucial for its members to feel safe and important within that community."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "EPNS helps in communicating these insights with members on a timely basis. Giving members a regular bird’s eye view of the state of the DAO at a particular time."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We are still at the dawn of the emergence of DAOs, many are still figuring out best practices, standards, and processes that work for coordinating a decentralized internet-native community all over the world to build, invest, and create amazing things. Just like how DeFi and NFTs entered the mainstream world, DAOs are soon to follow, and the new era of digital collectives will be here to stay."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "DAO operations and communication tooling is getting better each day, and we are glad to have become a fundamental building block for the Web3 space that can help DAOs communicate effectively with their members and grow exponentially, by lowering the barriers and increasing user experience."
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

/***/ 256067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-8d785541db1f32b09e62e7691e3027d2.webp");

/***/ })

}]);