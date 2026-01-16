"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[50070],{

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ 395106
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-b15fc2db1a0a6e52567ccc407829445c.webp");

/***/ },

/***/ 617718
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1164/blog/building-a-leading-web3-communication-layer-what-s-it-take","source":"@site/blog/2023-01-20-building-a-leading-web3-communication/index.md","title":"Building a Leading Web3 Communication Layer: What’s it take?🛠️","description":"Cover image of Building a Leading Web3 Communication Layer: What’s it take?🛠️","date":"2023-01-20T00:00:00.000Z","tags":[{"inline":true,"label":"Web3","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/web-3"},{"inline":true,"label":"Buidl","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/buidl"},{"inline":true,"label":"Blockchain Technology","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/blockchain-technology"},{"inline":true,"label":"Blockchain Development","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/blockchain-development"},{"inline":true,"label":"Developer","permalink":"/push-chain-website/pr-preview/pr-1164/blog/tags/developer"}],"readingTime":2.26,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1164/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1164/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"building-a-leading-web3-communication-layer-what-s-it-take","title":"Building a Leading Web3 Communication Layer: What’s it take?🛠️","authors":["push"],"image":"./cover-image.webp","text":"Decentralized communication is a hot topic in the web3 space as more and more developers are looking to build dapps that can function independently of any single central authority.","tags":["Web3","Buidl","Blockchain Technology","Blockchain Development","Developer"]},"unlisted":false,"prevItem":{"title":"QiDAO Taps Push to Update Users on their Debt Positions🪙","permalink":"/push-chain-website/pr-preview/pr-1164/blog/qi-dao-taps-push-to-update-users-on-their-debt-positions"},"nextItem":{"title":"Push Notifications for Developer DAO to Boost Community Participation🚀","permalink":"/push-chain-website/pr-preview/pr-1164/blog/push-notifications-for-developer-dao-to-boost-community-participation"}}');

/***/ },

/***/ 767488
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_01_20_building_a_leading_web_3_communication_index_md_fb9_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2023_01_20_building_a_leading_web_3_communication_index_md_fb9_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617718);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'building-a-leading-web3-communication-layer-what-s-it-take',
	title: 'Building a Leading Web3 Communication Layer: What’s it take?🛠️',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	text: 'Decentralized communication is a hot topic in the web3 space as more and more developers are looking to build dapps that can function independently of any single central authority.',
	tags: [
		'Web3',
		'Buidl',
		'Blockchain Technology',
		'Blockchain Development',
		'Developer'
	]
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(395106)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What does it take to build a web3 communication layer?",
  "id": "what-does-it-take-to-build-a-web3-communication-layer",
  "level": 2
}, {
  "value": "Are we still Pushing? We’re always Pushing.",
  "id": "are-we-still-pushing-were-always-pushing",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover image of Building a Leading Web3 Communication Layer: What’s it take?🛠️",
        src: (__webpack_require__(853709)/* ["default"] */ .A) + "",
        width: "1400",
        height: "735"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Decentralized communication is a hot topic in the web3 space as more and more developers are looking to build dapps that can function independently of any single central authority."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Though, a key component of building a successful dapp is providing a communication layer that is both decentralized and universal."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A decentralized communication layer does not rely on any central server or authority. Instead, it depends on a distributed network of nodes to handle and route data between users. This ensures communication is resistant to censorship, tampering, and other forms of interference, as well as be able to function even if some nodes go offline."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In this way, a universal communication layer is accessible to all users regardless of their device or platform. This is essential in the web3 space, as users will often have a variety of different devices and platforms that they need to interact with to access and use a dApp."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-does-it-take-to-build-a-web3-communication-layer",
      children: "What does it take to build a web3 communication layer?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In general, to build a decentralized and universal communication layer, several vital components are required, including:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Robust Network Architecture:"
        }), " The network architecture of a decentralized communication layer must be designed to ensure that data can be reliably and efficiently routed between nodes, even in the event of node failures or network congestion."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Data storage:"
        }), " Decentralized communication systems typically rely on distributed data storage to ensure that data is stored redundantly across multiple nodes, making it less vulnerable to data loss or corruption."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Consensus:"
        }), " A consensus mechanism ensures that all nodes in the network agree on the system’s state. This is particularly important in decentralized systems, as there is no central authority to ensure that all nodes are in sync. Network maintainers must verify and finalize message data for a communication layer to function."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Security:"
        }), " Securing a decentralized communication system is a significant concern, as there are a variety of potential attack vectors that could be used to compromise the security of the system. A communication layer must consider encryption and authentication mechanisms to ensure the safety of the users’ data."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Interoperability:"
        }), " A universal communication layer must interact seamlessly with various devices and platforms, so a communication protocol needs to ensure that the system can handle different data formats and protocols."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("b", {
          children: "Composable:"
        }), " A communication layer must be able to adapt to a variety of conditions and improve as required. This includes the incorporation of new technologies and web-based systems."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "With these components, a web3 communication layer can offer censorship-resistant, privacy-preserving, and spam-protected communication while being chain-agnostic, gasless, and scalable"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "are-we-still-pushing-were-always-pushing",
      children: "Are we still Pushing? We’re always Pushing."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Building a decentralized communication layer is a process, not a product, meaning it’s not something that can be fully achieved but rather something that requires consistent development."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The team at ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/",
        children: "Push Protocol"
      }), " is continuously working on improving its architecture by crafting and refining the key components for building a communication layer. With a strong focus on security and performance, Push is working to bring the best decentralized communication tools possible to the web3 space."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As a result, the Push Protocol community continues to rapidly evolve and is getting closer to reaching its goal of enabling millions of users and devices to communicate simultaneously across web3. Push brings novel communication capabilities to the decentralized world with real-time messaging, efficient message dissemination, and interoperability, allowing it to become the communication standard for dApps."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Stay tuned! In upcoming posts, we’ll delve into the technical details with each component, from peer-to-peer networking to message verification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Pssssssst 🤫"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Thanks for making it this far."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If you’re interested in exploring how Push Notifications or Push Chat can boost user engagement and benefit your project, check out:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://discord.com/invite/pushchain",
          children: "Our Discord"
        }), " — we’ve got devs ready to give your project whatever support and consultation you need."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://comms.push.org/docs/",
          children: "Push developer docs"
        }), " to get started on building right away!"]
      }), "\n"]
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



/***/ },

/***/ 853709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-b15fc2db1a0a6e52567ccc407829445c.webp");

/***/ }

}]);