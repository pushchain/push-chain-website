"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[42779],{

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

/***/ 355898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-11a88855c626a05105f623410738af92.webp");

/***/ }),

/***/ 765972:
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
	slug: 'introducing-push-nft-chat-chats-and-comms-tied-to-your-nf-ts-done-right',
	title: 'Introducing Push NFT Chat — Chats and Comms Tied to Your NFTs… Done Right ✅',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'We are thrilled to announce the highly anticipated release of Push NFT Chat, the next leap in web3 messaging. For the 1.5 Million+ NFT wallets and NFT collections like Azuki, BAYC, CryptoPunks, a universe of new potential utility is now here for your collections 🌎 ',
	tags: [
		'Web3',
		'NFT',
		'Push Protocol',
		'NFT Utility'
	]
};
const contentTitle = 'Instantly integrate Push NFT Chat for pure NFT-to-NFT chat';
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/introducing-push-nft-chat-chats-and-comms-tied-to-your-nf-ts-done-right",
  "source": "@site/blog/2023-06-07-push-nft-chat/index.md",
  "title": "Introducing Push NFT Chat — Chats and Comms Tied to Your NFTs… Done Right ✅",
  "description": "Cover image of Introducing Push NFT Chat — Chats and Comms Tied to Your NFTs… Done Right ✅",
  "date": "2023-06-07T00:00:00.000Z",
  "formattedDate": "June 7, 2023",
  "tags": [
    {
      "label": "Web3",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/web-3"
    },
    {
      "label": "NFT",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/nft"
    },
    {
      "label": "Push Protocol",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/push-protocol"
    },
    {
      "label": "NFT Utility",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/nft-utility"
    }
  ],
  "readingTime": 3.9266666666666667,
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
    "slug": "introducing-push-nft-chat-chats-and-comms-tied-to-your-nf-ts-done-right",
    "title": "Introducing Push NFT Chat — Chats and Comms Tied to Your NFTs… Done Right ✅",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "text": "We are thrilled to announce the highly anticipated release of Push NFT Chat, the next leap in web3 messaging. For the 1.5 Million+ NFT wallets and NFT collections like Azuki, BAYC, CryptoPunks, a universe of new potential utility is now here for your collections 🌎 ",
    "tags": [
      "Web3",
      "NFT",
      "Push Protocol",
      "NFT Utility"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Unleashing a New Era of Social Networking | Push x SOCLLY🌿",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/unleashing-a-new-era-of-social-networking-push-x-soclly"
  },
  "nextItem": {
    "title": "Enhancing Blockchain Based Games UX Through In-Game Chat + Notifications🎮",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/enhancing-blockchain-based-games-ux-through-in-game-chat-notifications"
  }
};
const assets = {
"image": (__webpack_require__(873374)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "Introducing Push NFT Chat",
  "id": "introducing-push-nft-chat",
  "level": 2
}, {
  "value": "How does Push NFT Chat work?",
  "id": "how-does-push-nft-chat-work",
  "level": 2
}, {
  "value": "Encryption",
  "id": "encryption",
  "level": 3
}, {
  "value": "Address Format",
  "id": "address-format",
  "level": 2
}, {
  "value": "Transferring the NFT",
  "id": "transferring-the-nft",
  "level": 2
}, {
  "value": "Guide for Getting Started With Push NFT Chat",
  "id": "guide-for-getting-started-with-push-nft-chat",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover image of Introducing Push NFT Chat — Chats and Comms Tied to Your NFTs… Done Right ✅",
        src: (__webpack_require__(355898)/* ["default"] */ .A) + "",
        width: "1400",
        height: "788"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We are thrilled to announce the highly anticipated release of Push NFT Chat, the next leap in web3 messaging. For the 1.5 Million+ NFT wallets and NFT collections like Azuki, BAYC, CryptoPunks, a universe of new potential utility is now here for your collections 🌎"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As the team behind Push Protocol, we’ve been committed to pushing the boundaries of what is possible in web3 through decentralized communication. With our previous product, Push Chat, we successfully introduced native web3 instant chats using wallet addresses. Push Chat boasts a number of user-centric features like spam control, inbuilt notification modules, video and audio calls and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://push-protocol.medium.com/launching-the-future-of-web3-messaging-with-push-chat-push-group-chat-de4cb7a65231",
        children: "much more"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Today, we’re taking Push Chat innovation to an entirely new level with the launch of Push NFT Chat. Built as an extension of Push Chat, Push NFT Chat benefits from all the intuitive, user-centric features that Push Chat has while revolutionizing the way NFT holders interact. By introducing web3 native NFT-to-NFT and dApp-to-NFT instant communication, we’ll be adding to the suite of enhancements that the recently launched ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-6551",
        children: "ERC-6551"
      }), " is also bringing to NFTs in web3."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "How does Push NFT Chat specifically differ from Push Chat on a functional and security level? Read on to find out."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "introducing-push-nft-chat",
      children: "Introducing Push NFT Chat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push NFT Chat enables chats to be tied to a specific NFT owned by you, instead of a chat owned by a wallet address. It operates just the way Push chat operates for wallets and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "includes all features you can find in Push chat"
      }), " but with three main differences:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "It uses triple encryption to ensure your chats are truly tied to an NFT and not a wallet alias."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["The address format for Push NFT Chat is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "nft:eip155:${nftChainId}:${nftContractAddress}:${nftTokenId}"
          }), " instead of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "eip155:${walletaddress}"
          })]
        }), " (used in wallet to wallet communication)"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Your communication moves with your NFT but only if you want them to"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push NFT Chat Image",
        src: (__webpack_require__(890105)/* ["default"] */ .A) + "",
        width: "1400",
        height: "622"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("blockquote", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "Developer Hint"
        }), ": Push NFT Chat is already out:"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.npmjs.com/package/@pushprotocol/restapi#for-chat",
          children: "https://www.npmjs.com/package/@pushprotocol/restapi#for-chat"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "Developer Hint"
        }), ": This example repo covers all functionalities that can be implemented from the SDK:"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/push-protocol/push-sdk/tree/main/packages/examples/sdk-backend-node",
          children: "https://github.com/push-protocol/push-sdk/tree/main/packages/examples/sdk-backend-node"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-does-push-nft-chat-work",
      children: "How does Push NFT Chat work?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The message abilities and features of Push NFT Chat are still based on PGP keys that power wallet-to-wallet Push Chat and are encrypted and stored on Push Network to enable an E2EE universal inbox. However, there are different features that enable Push NFT Chat, tie communication to the NFT, and validate it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "encryption",
      children: "Encryption"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Push NFT Chat uses a different encryption mechanism to encrypt the PGP key. This is what makes it secure yet versatile to support NFT chats. Push NFT Chat uses three pass encryption and is done in the following way for a new user:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A secret key is randomly created for the user on client side, this is automated by SDK and invisible to the user though their are options available for a user to choose the secret key if they want."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This secret key is then used to encrypt the PGP key generated locally on the client side."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "This secret key is then encrypted by the wallet of the user and the encrypted version of it and the encrypted PGP key is stored on the Push nodes."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This approach still results in the default behavior of signing once to unlock Push Profiles and start messaging, though it is now also capable of supporting chat and connections transfers when and if you move your NFT to another wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is enabled because of the three pass encryption which means your PGP keys can be decrypted and re-encrypted by a user if they have access to the secret key. Since the key itself is encrypted by the current wallet which holds that NFT, the decryption process doesn’t require manually entering the secret key as wallet signing is used to derive the decrypted secret key."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This creates an intuitive UX where user is not hassled by the experience while still gaining the crucial feature of truly connecting their chats and connections with the NFT."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "address-format",
      children: "Address Format"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Apart from the way encryption is handled, the NFT chat uses a different address format for communication owing to them having access to various NFTs from the same wallet. The address format is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "nft:eip155:${nftChainId}:${nftContractAddress}:${nftTokenId}"
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
          children: "For example:"
        }), "Lens NFT Chat will result in the address format as nft:eip155:137:0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d:44433"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Each address format representing identifiers as follows:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "nft"
          })
        }), " -> To segregate whether chat profile is for wallet or nft"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "eip155"
          })
        }), " -> Identifier for all EVM chains as per CAIP10, in the future other blockchain identifiers (non-Ethereum ones) will also be supported"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "${'nftChainId'}"
          })
        }), " -> Chain id on which the NFT is present, in case of Lens, it’s on Polygon whose chain id is 137"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "${'nftContractAddress'}"
          })
        }), " -> The contract address of the NFT, in case of Lens, it’s contract address for NFT is 0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "${'nftTokenId'}"
          })
        }), " -> The token id of the particular NFT held by the wallet of the user, in this example, we have taken that as 44433"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "transferring-the-nft",
      children: "Transferring the NFT"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The key pair is encrypted by a secret key selected by the NFT holder. When the NFT holder decides to transfer the NFT to another user, two possible scenarios can occur:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "In the first scenario, the original owner can choose to send the new owner the secret key. This allows the new owner to decrypt all the chat messages associated with the NFT. This option ensures the continuity of the chat messages within the NFT."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The original owner doesn’t have to remember or even decide this secret on creation as that can handled by the frontend or the SDK including encrypting it with your wallet (though the user is free to override it)."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "In the second scenario, the new owner doesn’t have a secret key at which point the NFT profile is created afresh. However, this means that the new owner will not have access to any previous chat messages linked to that NFT. This option prioritizes the security of the chat messages and ensures that no one else has access to them."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "These two options enable pure, native NFT chat that is truly tied to a user NFT without sacrificing the security or the ability of transferring communication and connections. Instead, giving the control back to the user to decide what they want to do with their communications that they did with their NFT."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "guide-for-getting-started-with-push-nft-chat",
      children: "Guide for Getting Started With Push NFT Chat"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To integrate with Push NFT Chat, you can start by watching the live demo below."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .VideoContainer */ .bC, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", {
        width: "100%",
        height: "100%",
        style: {
          borderRadius: "32px",
          aspectRatio: '56.25%'
        },
        src: "https://www.youtube.com/embed/Im_5RRQyQP4",
        title: "Introducing Push NFT Chat | Live Demo",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowfullscreen: true
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Begin Building 👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.npmjs.com/package/@pushpr",
        children: "https://www.npmjs.com/package/@pushpr"
      }), "..."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Push SDK Repo 👉 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/ethereum-push-noti",
        children: "https://github.com/ethereum-push-noti"
      }), "..."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you need any help or support with integration, give us a shout out or tag us on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/Ar8HkYNs",
        children: "Discord"
      }), "."]
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

/***/ 873374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-11a88855c626a05105f623410738af92.webp");

/***/ }),

/***/ 890105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-b51c2b691eec8589a4a0767ef89900da.webp");

/***/ })

}]);