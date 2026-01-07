"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[40757],{

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

/***/ 185117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9cb6c5bec5874dd1c49b16dc878f9a6f.webp");

/***/ }),

/***/ 225570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_01_11_the_epns_mainnet_is_here_index_md_8ed_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2022_01_11_the_epns_mainnet_is_here_index_md_8ed_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309309);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(113490);


const frontMatter = {
	slug: 'the-epns-mainnet-is-here',
	title: 'The EPNS Mainnet is Here!',
	description: 'The EPNS Mainnet is Here!',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'As of today, January 11, at 4 PM UTC, the Ethereum Push Notification Service is live on Ethereum’s mainnet!',
	tags: [
		'Mainnet',
		'Live',
		'Ethereum',
		'Notifications',
		'Web3'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(667188)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover image of The EPNS Mainnet is Here!",
        src: (__webpack_require__(185117)/* ["default"] */ .A) + "",
        width: "1400",
        height: "700"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "As of today, January 11, at 4 PM UTC, the Ethereum Push Notification Service is live on Ethereum’s mainnet!"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is an exciting moment for EPNS, and we know you’re itching to get started. So we’ll just spend one sentence saying THANK YOU to the EPNS community for all your support over the last two years. 💖 Ok, let’s dive in:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "EPNS is Live: What This Means & How to Start"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["EPNS can now be accessed through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://app.epns.io",
        children: "app.epns.io"
      }), " on the Ethereum blockchain. The protocol can be used by two broad audiences: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "channels"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "subscribers."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Channels"
      }), " are dapps, users, and businesses that want to send notifications to others. These notifications can be sent manually, or they can be built to respond automatically to on-chain or off-chain information. For example, a media company can push out alerts for breaking news when a story is released. Or, a DeFi project can allow users to automatically receive notifications when their loans are closing in on liquidation."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "How to get started as a channel?"
      }), " Head to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://app.epns.io",
        children: "app.epns.io"
      }), " and ‘Create Your Channel’. Follow the guided steps to set up your channel, create notifications, and publish your channel to mainnet. Then, watch the subscribers roll in. If you need support, head to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.notion.so/epns/How-to-EPNS-853afe64839b4cdd8c63209342a783d0",
        children: "How to EPNS"
      }), " for more information."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Subscribers"
      }), " are those who wish to receive notifications from others. Subscribers can browse the live channels on EPNS through the app, and opt-in to receive notifications from any of them. Notifications are then delivered to the subscriber’s ‘inbox’. Channels are live now on the EPNS app (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://apps.apple.com/app/ethereum-push-service-epns/id1528614910",
        children: "iOS"
      }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://play.google.com/store/apps/details?id=io.epns.epns",
        children: "Android"
      }), "), with more channels to be launched in the days and weeks to come."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "How to get started as a subscriber?"
      }), " Head to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "http://app.epns.io",
        children: "app.epns.io"
      }), " and click on ‘Channels’. You can browse the list of all published channels, each with a description of which notification(s) you’ll receive if you subscribe. You may opt-in to receive notifications from any of them, and opt-out at any time."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["*", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Note: the EPNS protocol has been under development for 1+ year, and completed a"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://epns.io/EPNS-Protocol-Audit2021.pdf",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "ChainSafe audit"
        })
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "in October 2021. However, the mainnet is still a new product milestone. Always DYOR, and anticipate bugs and UI improvements. Learn how to report any bugs in our"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushchain",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Discord"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "What’s Next for EPNS"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Mainnet launch is just the beginning for EPNS. Stay tuned for more channel releases in the days and weeks to come — and ask your favorite dapps to create channels of their own! We’ll post more information about the post-mainnet roadmap for EPNS soon, but expect incentives, governance, multi-chain support, and more!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Follow us to stay up to date: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://twitter.com/epnsproject",
        children: "Twitter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://discord.com/invite/pushchain",
        children: "Discord"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://t.me/epnsproject",
        children: "Telegram"
      }), "."]
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

/***/ 309309:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1157/blog/the-epns-mainnet-is-here","source":"@site/blog/2022-01-11-the-epns-mainnet-is-here/index.md","title":"The EPNS Mainnet is Here!","description":"The EPNS Mainnet is Here!","date":"2022-01-11T00:00:00.000Z","tags":[{"inline":true,"label":"Mainnet","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/mainnet"},{"inline":true,"label":"Live","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/live"},{"inline":true,"label":"Ethereum","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/ethereum"},{"inline":true,"label":"Notifications","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/notifications"},{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1157/blog/tags/web-3"}],"readingTime":1.68,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1157/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1157/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"the-epns-mainnet-is-here","title":"The EPNS Mainnet is Here!","description":"The EPNS Mainnet is Here!","authors":["push"],"image":"./cover-image.webp","text":"As of today, January 11, at 4 PM UTC, the Ethereum Push Notification Service is live on Ethereum’s mainnet!","tags":["Mainnet","Live","Ethereum","Notifications","Web3"]},"unlisted":false,"prevItem":{"title":"EPNS x Huobi Global: Never Miss a Token Listing","permalink":"/push-chain-website/pr-preview/pr-1157/blog/epns-x-huobi"},"nextItem":{"title":"Push Grants Program.. it’s here!","permalink":"/push-chain-website/pr-preview/pr-1157/blog/push-grants-program-here"}}');

/***/ }),

/***/ 667188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-9cb6c5bec5874dd1c49b16dc878f9a6f.webp");

/***/ })

}]);