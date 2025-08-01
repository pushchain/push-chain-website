"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[52338],{

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

/***/ 124365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-77effe29668da141c8d27be8846664b9.webp");

/***/ }),

/***/ 172051:
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
	slug: 'how-developers-can-integrate-cartesi-and-push-protocol',
	title: 'How developers can integrate Cartesi and Push Protocol.',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'How developers can integrate Cartesi and Push Protocol.',
	text: 'We’re thrilled to share that contributors at Cartesi have created an integration template for developers to be able to also leverage web3-native communications for DApp builders on Cartesi.',
	tags: [
		'Announcements'
	]
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/push-chain-website/pr-preview/pr-1067/blog/how-developers-can-integrate-cartesi-and-push-protocol",
  "source": "@site/blog/2024-10-09-push-cartesi-blog/index.md",
  "title": "How developers can integrate Cartesi and Push Protocol.",
  "description": "How developers can integrate Cartesi and Push Protocol.",
  "date": "2024-10-09T00:00:00.000Z",
  "formattedDate": "October 9, 2024",
  "tags": [
    {
      "label": "Announcements",
      "permalink": "/push-chain-website/pr-preview/pr-1067/blog/tags/announcements"
    }
  ],
  "readingTime": 4.056666666666667,
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
    "slug": "how-developers-can-integrate-cartesi-and-push-protocol",
    "title": "How developers can integrate Cartesi and Push Protocol.",
    "authors": [
      "push"
    ],
    "image": "./cover-image.webp",
    "description": "How developers can integrate Cartesi and Push Protocol.",
    "text": "We’re thrilled to share that contributors at Cartesi have created an integration template for developers to be able to also leverage web3-native communications for DApp builders on Cartesi.",
    "tags": [
      "Announcements"
    ]
  },
  "unlisted": false,
  "prevItem": {
    "title": "Token-Gated Group Chats",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/token-gated-group-chats"
  },
  "nextItem": {
    "title": "Introducing the Push Points Program",
    "permalink": "/push-chain-website/pr-preview/pr-1067/blog/introducing-the-push-points-program"
  }
};
const assets = {
"image": (__webpack_require__(124365)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "<strong>What is Cartesi?</strong>",
  "id": "what-is-cartesi",
  "level": 3
}, {
  "value": "How Developers can Integrate Cartesi and Push Protocol:",
  "id": "how-developers-can-integrate-cartesi-and-push-protocol",
  "level": 3
}, {
  "value": "<strong>Technical Deep Dive: The Cartesi Push Notification Server</strong>",
  "id": "technical-deep-dive-the-cartesi-push-notification-server",
  "level": 3
}, {
  "value": "Setting up Notifications for Cartesi DApps:",
  "id": "setting-up-notifications-for-cartesi-dapps",
  "level": 3
}, {
  "value": "Sending Notifications for Cartesi DApps:",
  "id": "sending-notifications-for-cartesi-dapps",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Cover Image of How developers can integrate Cartesi and Push Protocol.",
        src: (__webpack_require__(219170)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We’re thrilled to share that contributors at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://cartesi.io/",
        children: "Cartesi"
      }), " have created an integration template for developers to be able to also leverage web3-native communications for DApp builders on Cartesi."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-is-cartesi",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "What is Cartesi?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Cartesi is an innovative modular blockchain protocol that empowers developers by providing a complete Linux environment along with high-performance rollups. This combination is designed to facilitate the development of advanced next-generation DApps. With it, decentralized applications should be easier, faster, and more scalable than ever before."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Cartesi overcomes the constraints of traditional blockchains by providing developers with a complete Linux operating system and scalable rollups, tailored for real-world applications. This opens up exciting new possibilities for DApps in gaming, DeFi, and other cutting-edge industries, unlocking the future of innovation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Cartesi-built projects have consistently excelled in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://ethglobal.com/",
        children: "ETHGlobal"
      }), " hackathons with innovative projects like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://ethglobal.com/showcase/cartenix-7xxe6",
        children: "Cartenix"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://ethglobal.com/showcase/doom-arena-hmu4j",
        children: "Doom Arena"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://ethglobal.com/showcase/chaingpt-and-accountability-for-ai-agents-doquk",
        children: "ChainGPT"
      }), " gaining considerable traction. These projects not only showcase their commitment to decentralized computation but also highlight Cartesi’s unique ability to unlock new possibilities for scalable, high-performance DApps across various real-world use cases. Other Cartesi Mainnet DApps like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://rives.io/",
        children: "Rives"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://bugbuster.app/",
        children: "Bug Buster"
      }), " also showed new unforeseen possibilities."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-developers-can-integrate-cartesi-and-push-protocol",
      children: "How Developers can Integrate Cartesi and Push Protocol:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Developer advocacy contributors at Cartesi have demonstrated how developers can integrate push notifications into their Cartesi dApps, enabling users to receive updates related to their activities within the Cartesi rollups environment. Developers can deliver finalized on-chain messages or simple in-app notifications that users care about."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This integration enhances the interactivity of Cartesi DApps, so users can receive timely updates—whether for verified outputs or simple messages—without monitoring epoch finalization."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is particularly useful when managing on-chain assets, where users need to execute a voucher once an epoch is finalized. Vouchers serve as transaction instruments on the base layer blockchain, facilitating operations like asset transfers. They enable modifications to the base layer by reflecting the application's state changes. Read ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.cartesi.io/cartesi-rollups/1.5/development/retrieve-outputs/#vouchers-on-chain-actions",
        children: "here"
      }), " to learn more about vouchers. With notifications powered by Push, Cartesi users can also stay informed about unexecuted vouchers, ensuring they don't miss critical updates, like withdrawing assets."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "technical-deep-dive-the-cartesi-push-notification-server",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Technical Deep Dive: The Cartesi Push Notification Server"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/Mugen-Builders/push-cartesi/",
        children: "Cartesi Push Notification Server"
      }), " is a crucial tool that enhances the user experience of Cartesi DApps by providing real-time push notifications. This service is powered by a simple cron job that allows Cartesi DApp creators to notify users of important events, such as those mentioned above, verified outputs, or the availability of vouchers for asset withdrawal, without requiring users to monitor blockchain events like epoch finalization manually."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Addressing the On-Chain Asset Challenge:"
      }), "\nOne key challenge in decentralized applications involving on-chain assets is the need for users to execute a voucher after an epoch has been finalized. Without notifications, users may miss the execution of vouchers, potentially delaying their withdrawal of assets. The Cartesi Push Notification Server directly solves this problem by alerting users when important events—such as unexecuted vouchers—occur, ensuring they remain informed and can act promptly in response to them."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "How It Works: Push Notifications for Cartesi DApps:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The Push Cartesi Notification server operates through a cron job that regularly queries the Graphql server of the Cartesi dApp node to check for new or verified outputs. Here’s how developers can implement it:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Push Notification Architecture:"
        }), "\nThe Push Cartesi Notification Server leverages a cron job that filters for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.cartesi.io/cartesi-rollups/1.5/development/retrieve-outputs/#notices-off-chain-events",
          children: "notices"
        }), " and verified proofs, sending timely notifications to users about these critical outputs. However, vouchers are intentionally excluded from the cron job, as they are deleted after execution. Instead, the system focuses on notifying users when a proof is available—triggering them to take action, such as executing a voucher."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here’s the architecture of how the Push Cartesi Notification Server works:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Push Cartesi Notification Server",
        src: (__webpack_require__(878457)/* ["default"] */ .A) + "",
        width: "1340",
        height: "746"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Creating a Push Notification Channel:"
          }), "\nTo start, developers must set up a Push notification channel using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://comms.push.org/docs/notifications/tutorials/create-your-channel/",
            children: "Push Protocol’s official guide"
          }), ". The rest of the setup process is explained below."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Efficient Notification Management Using Notices:"
          }), "\nDevelopers can include a \"notice\" alongside vouchers to ensure users are properly informed about important, on-chain events. For example, when an NFT is minted, a notice can be generated to notify the user of this event, while the voucher handles the asset’s actual minting process. A notice is a verifiable data statement that confirms off-chain events or conditions, supported by accompanying proof."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Two Types of Notifications: Instant vs. Proofed:"
          }), "\nDevelopers have control over when notifications are sent to users through two types of notices:"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Instant Notifications: These notifications are sent immediately after a notice is created, allowing users to get real-time updates."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Proofed Notifications: These notifications are sent only when a proof is available, i.e., when the epoch finalizes, ensuring that users are alerted once the output is verified and actionable."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Streamlined Asset Withdrawals:"
        }), "\nThe Push/Cartesi notification system is particularly valuable in managing on-chain assets. When users need to withdraw assets, they are alerted when a voucher is ready for execution. By receiving these timely notifications, users can act quickly, avoiding delays or missed withdrawals."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "setting-up-notifications-for-cartesi-dapps",
      children: "Setting up Notifications for Cartesi DApps:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Disclaimer: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "This integration is currently in its alpha stage and relies on certain trust assumptions regarding the Notifications server. Developers are encouraged to use this as an experimental step for integrating push notifications but should not consider it a final, mainnet-ready solution."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "First, make sure you have created a channel for Push. Once you’ve done so, continue with the below steps to build and run the Notifications server with a sample Cartesi dApp on your local machine.:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Replace addresses in the code for the cron-job as follows:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Inside notification.sender.js change the address to the address of your channel"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "pushChannelAdress = \"0x41070EfeD9Ead91380AAE5e164DAC1001F64C991\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Inside graphql/config.js,  update the endpoint with the graphql route of your node."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "endpoint: 'http://localhost:8080/graphql'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Add private key"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Disclaimer: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "This is just for test purposes. Do not try this with any real private key."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Start the process by creating a .env file from the given sample and filling it with the private key of the channel creator or delegated messenger."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cp .env.sample .env"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Now you can start testing and launching the sending function for notifications!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "sending-notifications-for-cartesi-dapps",
      children: "Sending Notifications for Cartesi DApps:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "From inside your cron-job folder, use the following input:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "npm start\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Then, you can start the simple-node DApp inside its directory with the below command:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cartesi build\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To fully initiate testing, follow the above up with the below:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cartesi run\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Send test inputs"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "On another terminal window, type:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cartesi send generic\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Then, send a string encoding as follows:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{“type”:”instant”,”message”:”sample message”,”target”:”*”}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The field marked “type” can be filled with one of two values either ‘instant’ or ‘proof’"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The target field for the destination of the message can be a wallet address or * for broadcasts to everyone who subscribes to the channel."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Once you are ready to deploy you can generate a container with the Dockerfile inside the cron-job folder and deploy it to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://fly.io/docs/launch/deploy/",
        children: "fly.io"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=SO-xhHT85Bk",
        children: "Here’s"
      }), " a demo video showing the ins and outs of how Cartesi DApps can integrate Push Notifications using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/Mugen-Builders/push-cartesi/blob/main/README.md",
        children: "Cartesi Push Notification Server"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This integration is being tested out with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://x.com/Comet_ing/status/1837041254166589535",
        children: "Comet"
      }), " - a Cartesi DApp."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Got any questions? Feel free to drop us a line on our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "http://discord.gg/pushprotocol",
        children: "Discord"
      }), "; our team will help you."]
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

/***/ 219170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-77effe29668da141c8d27be8846664b9.webp");

/***/ }),

/***/ 878457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image1-1a2d7a2eef09d0312d47790fdc03c045.webp");

/***/ })

}]);