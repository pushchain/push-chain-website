"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[73907],{

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

/***/ 145029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-6a64892f8830d0bd3728eec38fbc4a4c.webp");

/***/ }),

/***/ 906606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-6a64892f8830d0bd3728eec38fbc4a4c.webp");

/***/ }),

/***/ 941564:
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
	slug: 'epns-contract-v2-features',
	title: 'EPNS Contract V2 features',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'EPNS Contract V2 features',
	text: 'As Q1 came to an end, one of the most significant tasks that we had was to plan and initiate the design for the 2nd version of our smart contracts.',
	tags: [
		'Roadmap',
		'Blockchain',
		'Ethereum',
		'Notifications',
		'Newsletter'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-contract-v2-features",
  "source": "@site/blog/2022-04-08-epns-contract-v2-features/index.md",
  "title": "EPNS Contract V2 features",
  "description": "EPNS Contract V2 features",
  "date": "2022-04-08T00:00:00.000Z",
  "formattedDate": "April 8, 2022",
  "tags": [
    {
      "label": "Roadmap",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/roadmap"
    },
    {
      "label": "Blockchain",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/blockchain"
    },
    {
      "label": "Ethereum",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/ethereum"
    },
    {
      "label": "Notifications",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/notifications"
    },
    {
      "label": "Newsletter",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/newsletter"
    }
  ],
  "readingTime": 4.88,
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
    "slug": "epns-contract-v2-features",
    "title": "EPNS Contract V2 features",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "EPNS Contract V2 features",
    "text": "As Q1 came to an end, one of the most significant tasks that we had was to plan and initiate the design for the 2nd version of our smart contracts.",
    "tags": [
      "Roadmap",
      "Blockchain",
      "Ethereum",
      "Notifications",
      "Newsletter"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Push Notifications for the Metaverse: EPNS Partners with Decentraland to Build Its Communication Layer",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/push-notifications-for-the-metaverse"
  },
  "nextItem": {
    "title": "EPNS Collaborates With TokenBrice to Bring Decentralized Push Notifications to Readers",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/epns-collaborates-with-tokenbrice"
  }
};
const assets = {
"image": (__webpack_require__(906606)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "1. Channel Creation with $PUSH Token (instead of DAI)",
  "id": "1-channel-creation-with-push-token-instead-of-dai",
  "level": 3
}, {
  "value": "2. Allowing PUSH Holders to CLAIM their rewards",
  "id": "2-allowing-push-holders-to-claim-their-rewards",
  "level": 3
}, {
  "value": "3. Channel Owners will be able to UPDATE-EDIT their channel details",
  "id": "3-channel-owners-will-be-able-to-update-edit-their-channel-details",
  "level": 3
}, {
  "value": "4. Functionalities for Wallet-To-Wallet Feature",
  "id": "4-functionalities-for-wallet-to-wallet-feature",
  "level": 3
}, {
  "value": "5. On-Chain Governance — a major step towards our Progressive Decentralized Governance",
  "id": "5-on-chain-governance--a-major-step-towards-our-progressive-decentralized-governance",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
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
        alt: "Cover Image of EPNS Contract V2 features",
        src: (__webpack_require__(145029)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As Q1 came to an end, one of the most significant tasks that we had was to plan and initiate the design for the 2nd version of our smart contracts."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "After our successful Mainnet launch, we’ve been working on not only extending the functionality of our protocol but enhancing and improving the pre-existing features."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Although designing and brainstorming on the new ideas for our EPNS smart contracts, internally as well as with our community is an ongoing process, we have decided on some core functionalities for our EPNS Core V2 contracts."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Alright! Let’s dive in and get a brief overview of each of the new features that we are working on."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "1-channel-creation-with-push-token-instead-of-dai",
      children: "1. Channel Creation with $PUSH Token (instead of DAI)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "One of the most crucial modifications in the new version of our smart contracts will be in the channel creation procedure."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As per the current contract design, in order to create a channel, the channel creator must deposit a sum of 50 DAI to the EPNS Core contract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, with the deployment of the new version of the contract, the channel creation procedure will require the user to use the $PUSH token instead of DAI. The users shall now be able to create channels by depositing a minimum amount of 50 $PUSH to the protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The usage of the $PUSH token for channel creation is one of the imperative steps in the direction of having more utility for our $PUSH token. The underlying channel creation mechanism in the smart contract, however, shall remain the same."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "2-allowing-push-holders-to-claim-their-rewards",
      children: "2. Allowing PUSH Holders to CLAIM their rewards"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It can be undoubtedly stated that the functionality for claiming rewards has been one of the most awaited features for our EPNS Core smart contracts, and is probably the star function of our 2nd version of the smart contract.⭐️"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In order to provide some colors to it, the intention of claim functionality is to not just limit our users to receiving notifications but also allow them to earn and claim their rewards in $PUSH tokens for being active users of the protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      children: "Brief glance at the reward mechanisms"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The 2nd version of our EPNS Core contract will come with some imperative modifications in the way rewards are generated and distributed among the participants."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The previous architecture of our EPNS Core contract involved the usage of the AAVE lending protocol for interest generation. As per the current version, whenever a new channel is created, the channel creation fees(DAI) deposited by the channel owner are being lent out to the AAVE’s lending protocol. This ensures that the EPNS Core contract receives the aDAI tokens as interests."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, with the upgrade of the contract, this procedure for interest generation shall be changed. The new version of the contract shall not include any dependencies on AAVE’s lending protocol. Moreover, as previously mentioned, the token used for the channel creation fee shall also be changed to $PUSH instead of DAI."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Unlike the current contract structure, the 2nd version of the contract shall not deposit the channel creation fees to AAVE. Instead, a particular fraction of the $PUSH token that is to be used for channel creation, shall be stored in the fee pool of the contract."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Moreover, while incentives were initially planned to be distributed only among the channel owners as well as subscribers, they shall now be claimable by every $PUSH Token holder. The amount of rewards claimable by a particular user shall rely on the holder weight of that particular user."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
        children: "More details about the reward distribution mechanism of the EPNS Core contract shall be shared soon"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "3-channel-owners-will-be-able-to-update-edit-their-channel-details",
      children: "3. Channel Owners will be able to UPDATE-EDIT their channel details"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The new version of the EPNS core shall include the required function that allows a channel owner to edit his channel’s details."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Before I dive deep into this feature, let’s quickly understand what exactly do I mean by channel details."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Whenever a channel is created from the dApp, the creator is required to pass 4 important parameters, i.e.,"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Channel’s Name"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Channel’s Description"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Channel’s Logo, and"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Channel’s CTA"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Once all these details are passed, they together form the channel’s identity bytes, which are then stored on IPFS."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "However, as per the current implementation of our dApp, a channel cannot edit any of these details once the channel creation is successfully completed. While this leads to an unwanted scenario where any mistake done during channel creation cannot be rectified later, it also stops a channel owner to add or modify their pre-existing channel description, name, or logo"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Hence, after a few internal discussions and taking in some valuable feedback from our community, we decided to resolve this concern and include the relevant functions in the smart contracts, to begin with."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The 2nd version of the EPNS Core contract shall have a function that allows, only the channel owner of a particular channel, to edit any specific detail about his/her channel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
      children: "Wait! There’s a CATCH"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The channel update function in the contract, however, comes with 2 crucial pointers and requirements."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["⚠️ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "he NOTICE Sign"
        }), " ⚠️: Whenever a channel owner modifies any specific detail about his/her channel on the protocol, the channel shall appear with an additional note in the View Channels section of the DAPP UI. This note will inform the rest of the users as well as subscribers about the channel’s old name or description."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["💰 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "Channel Edit Fees"
        }), " 💰: Editing channel detail comes with fees. A channel owner who wishes to update his channel detail later must deposit pre-defined fees in the protocol in order to be able to edit their channel description, name, or logo. Most importantly, this fee shall keep increasing every time the channel owner makes a new edit in his/her channel details."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Rationale Behind…"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In order to understand the above-mentioned details in a better manner, it's best to get some clarity on the reason behind those two procedures."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Ideally, editing and modifying channel details repeatedly is not a behavior that should be encouraged. Editing and modifying channel details give the power to any malicious channel owner to change the name of their channel to a more popular defi or governance channel, in order to gain subscribers and this shall be a wrong practice."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The above-mentioned procedures allow the users and subscribers to get a clear and transparent detail about a channel’s old details, even if the channel owner changes it later."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Moreover, the strict requirement of fees for editing channel details and increasing the fees with every new edit penalizes and discourages the channel owner to edit important channel details time and again."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "4-functionalities-for-wallet-to-wallet-feature",
      children: "4. Functionalities for Wallet-To-Wallet Feature"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Wallet-to-Wallet (W2W) chat feature is one of our major milestones of this year and an incredibly interesting feature for the entire Web3 world."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The new version of our smart contracts shall also include the crucial functions in order to implement this feature adequately in our protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As per the current discussions & plans around this feature, any user shall be able to use the wallet to wallet, chat feature on our protocol, with a particular number of addresses. However, if the user wishes to expand his/her boundaries for W2W interaction, they can choose to activate themselves on our EPNS Smart contracts by depositing a specific sum of $PUSH Tokens. This shall ensure that the user can use the W2W chat feature with any number of wallets throughout the web3 world."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "5-on-chain-governance--a-major-step-towards-our-progressive-decentralized-governance",
      children: "5. On-Chain Governance — a major step towards our Progressive Decentralized Governance"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Since the launch of our EPNS Governance, it can undoubtedly be stated that EPNS wholeheartedly believes in the significance & power of a progressive decentralized governance system."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Considering the current scenario, while the EPNS community is actively participating in different governance frameworks like the Weekly Rockstar NFT, Grants program, etc, we shall have a similar procedure for the further development & upgrades of our smart contracts as well."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As it has already been shared with the community that during the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://epns.io/EPNS-Protocol-Audit2021.pdf",
        children: "last security audit by ChainSafe"
      }), ", the EPNS Governance contracts were also audited and qualified for the entire security audit procedure."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Therefore, one of the most significant plans for this year's roadmap items is to initiate our On-Chain governance procedures. This shall ensure that the EPNS community will be capable of participating in the decision-making process for the inclusion of any new features in the contracts, upgrades of the contract to newer versions as well as the overall growth of the protocol."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Moreover, some of the imperative functionalities of the current EPNS Core contract like blocking a channel permanently, verifying a channel, or revoking a channel’s verification shall also be handled via the on-chain governance procedure itself."
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