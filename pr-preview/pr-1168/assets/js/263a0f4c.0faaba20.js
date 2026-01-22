"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[19686],{

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

/***/ 119365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){let{children,hidden,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ },

/***/ 162334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(328774);
/* harmony import */ var _site_src_components_AddChainToWallet_AddChainToWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(954537);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(751107);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(119365);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(411470);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(474848);
const TESTNET_CONFIG={chainId:42101,chainName:'Push Chain Testnet',nativeCurrency:{name:'Push Chain',symbol:'PC',decimals:18},rpcUrls:['https://evm.donut.rpc.push.org/'],iconUrls:[],blockExplorerUrls:['https://donut.push.network']};const PushChainSpecs=()=>{const tabValues=[{value:'testnet_donut',label:'🍩 Donut Testnet',default:true},{value:'mainnet',label:'Mainnet - Coming Soon 🚀'}];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{groupId:"chain-network",values:tabValues,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{value:"testnet_donut",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th",{children:"Field"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th",{children:"Value"})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Network Name"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"Push Chain Donut Testnet"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"RPC URL"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://evm.donut.rpc.push.org/"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Chain ID"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"42101"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Currency Symbol"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"PC"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Block Explorer URL"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://donut.push.network"})})]})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_site_src_components_AddChainToWallet_AddChainToWallet__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"Add to Wallet (Testnet Donut)",config:TESTNET_CONFIG})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{value:"mainnet",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"admonition admonition-info alert alert--info",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"admonition-heading",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{as:"h5",children:"Coming Soon!"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"admonition-content",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Push Chain Mainnet is currently in development. Stay tuned for updates!"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:["Follow us on ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{to:"https://x.com/pushchain",children:"X"})," for announcements"]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:["Join our",' ',/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{to:"https://discord.com/invite/pushchain",children:"Discord"}),' ',"to be part of the community"]})]})]})]})})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PushChainSpecs);

/***/ },

/***/ 301747
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_02_setup_02_smart_contract_address_book_mdx_263_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-02-setup-02-smart-contract-address-book-mdx-263.json
const site_docs_chain_02_setup_02_smart_contract_address_book_mdx_263_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/setup/docs-chain-setup-smart-contract-address-book","title":"Smart Contract Address Book","description":"Smart Contract Address Book | Setup | Push Chain Docs","source":"@site/docs/chain/02-setup/02-Smart-Contract-Address-Book.mdx","sourceDirName":"chain/02-setup","slug":"/chain/setup/smart-contract-address-book","permalink":"/push-chain-website/pr-preview/pr-1168/docs/chain/setup/smart-contract-address-book","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/02-setup/02-Smart-Contract-Address-Book.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"docs-chain-setup-smart-contract-address-book","title":"Smart Contract Address Book","hide_title":false,"slug":"./smart-contract-address-book","displayed_sidebar":"pushChainSidebar","sidebar_position":2,"image":"/assets/docs/previews/docs_chain_setup--smart_contract_address_book.png"},"sidebar":"pushChainSidebar","previous":{"title":"Chain Configuration","permalink":"/push-chain-website/pr-preview/pr-1168/docs/chain/setup/chain-config"},"next":{"title":"Build","permalink":"/push-chain-website/pr-preview/pr-1168/docs/chain/build"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(411470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(119365);
// EXTERNAL MODULE: ./src/components/Static/PushChainSpecs.tsx
var PushChainSpecs = __webpack_require__(162334);
;// ./docs/chain/02-setup/02-Smart-Contract-Address-Book.mdx


const frontMatter = {
	id: 'docs-chain-setup-smart-contract-address-book',
	title: 'Smart Contract Address Book',
	hide_title: false,
	slug: './smart-contract-address-book',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_chain_setup--smart_contract_address_book.png'
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "Push Chain Donut Testnet",
  "id": "push-chain-donut-testnet",
  "level": 2
}, {
  "value": "Push Chain Core Functionalities",
  "id": "push-chain-core-functionalities",
  "level": 2
}, {
  "value": "PRC-20 Supported Tokens (on Push Chain)",
  "id": "prc-20-supported-tokens-on-push-chain",
  "level": 3
}, {
  "value": "Core AMM &amp; Helpers",
  "id": "core-amm--helpers",
  "level": 3
}, {
  "value": "AMM Pools",
  "id": "amm-pools",
  "level": 3
}, {
  "value": "External Chain Gateway Contracts",
  "id": "external-chain-gateway-contracts",
  "level": 2
}, {
  "value": "Ethereum Sepolia",
  "id": "ethereum-sepolia",
  "level": 3
}, {
  "value": "Ethereum Sepolia - Gateway Addresses",
  "id": "ethereum-sepolia---gateway-addresses",
  "level": 3
}, {
  "value": "Ethereum Sepolia - Supported Tokens",
  "id": "ethereum-sepolia---supported-tokens",
  "level": 3
}, {
  "value": "Arbitrum Sepolia",
  "id": "arbitrum-sepolia",
  "level": 2
}, {
  "value": "Arbitrum Sepolia - Gateway Addresses",
  "id": "arbitrum-sepolia---gateway-addresses",
  "level": 3
}, {
  "value": "Arbitrum Sepolia - Supported Tokens",
  "id": "arbitrum-sepolia---supported-tokens",
  "level": 3
}, {
  "value": "Base Sepolia",
  "id": "base-sepolia",
  "level": 2
}, {
  "value": "Base Sepolia - Gateway Addresses",
  "id": "base-sepolia---gateway-addresses",
  "level": 3
}, {
  "value": "Base Sepolia - Supported Tokens",
  "id": "base-sepolia---supported-tokens",
  "level": 3
}, {
  "value": "BNB Testnet",
  "id": "bnb-testnet",
  "level": 2
}, {
  "value": "BNB Testnet - Gateway Addresses",
  "id": "bnb-testnet---gateway-addresses",
  "level": 3
}, {
  "value": "BNB Testnet - Supported Tokens",
  "id": "bnb-testnet---supported-tokens",
  "level": 3
}, {
  "value": "Solana Devnet",
  "id": "solana-devnet",
  "level": 2
}, {
  "value": "Solana Devnet - Gateway Addresses",
  "id": "solana-devnet---gateway-addresses",
  "level": 3
}, {
  "value": "Solana Devnet - Supported Tokens",
  "id": "solana-devnet---supported-tokens",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Smart Contract Address Book | Setup | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below are the official addresses of the smart contracts deployed on Push Chain Donut Testnet 🍩 or on other chains by Push."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scope"
        }), ": Addresses may change with redeploys. If something looks off, check the changelog or explorer before using in production code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "push-chain-donut-testnet",
      children: "Push Chain Donut Testnet"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "push-chain-core-functionalities",
      children: "Push Chain Core Functionalities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UEA Factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x00000000000000000000000000000000000000eA?tab=contract",
              children: "0x00000000000000000000000000000000000000eA"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UEA_EVM Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x93a31A8DDdCA2686243f1a701AbF82aBA90Fe2eF?tab=contract",
              children: "0x93a31A8DDdCA2686243f1a701AbF82aBA90Fe2eF"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UEA_SVM Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x3cab28b2d179258ce3246385977aae4b4A4b40C9?tab=contract",
              children: "0x3cab28b2d179258ce3246385977aae4b4A4b40C9"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UniversalCore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x00000000000000000000000000000000000000C0?tab=contract",
              children: "0x00000000000000000000000000000000000000C0"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prc-20-supported-tokens-on-push-chain",
      children: "PRC-20 Supported Tokens (on Push Chain)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source Chain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token Address on Push Chain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pETH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pETH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum_Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2971824Db68229D087931155C2b8bB820B275809?tab=contract",
              children: "0x2971824Db68229D087931155C2b8bB820B275809"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WETH.eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WETH.eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum_Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x0d0dF7E8807430A81104EA84d926139816eC7586?tab=contract",
              children: "0x0d0dF7E8807430A81104EA84d926139816eC7586"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum_Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xCA0C5E6F002A389E1580F0DB7cd06e4549B5F9d3?tab=contract",
              children: "0xCA0C5E6F002A389E1580F0DB7cd06e4549B5F9d3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stETH.eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "stETH.eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum_Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xaf89E805949c628ebde3262e91dc4ab9eA12668E?tab=contract",
              children: "0xaf89E805949c628ebde3262e91dc4ab9eA12668E"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.eth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum_Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x387b9C8Db60E74999aAAC5A2b7825b400F12d68E?tab=contract",
              children: "0x387b9C8Db60E74999aAAC5A2b7825b400F12d68E"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pSOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pSOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana_Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed?tab=contract",
              children: "0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.sol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.sol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana_Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x04B8F634ABC7C879763F623e0f0550a4b5c4426F?tab=contract",
              children: "0x04B8F634ABC7C879763F623e0f0550a4b5c4426F"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.sol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.sol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana_Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x4f1A3D22d170a2F4Bddb37845a962322e24f4e34?tab=contract",
              children: "0x4f1A3D22d170a2F4Bddb37845a962322e24f4e34"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAI.sol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DAI.sol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solana_Devnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x5861f56A556c990358cc9cccd8B5baa3767982A8?tab=contract",
              children: "0x5861f56A556c990358cc9cccd8B5baa3767982A8"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pETH.base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pETH.base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base_Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xc7007af2B24D4eb963fc9633B0c66e1d2D90Fc21?tab=contract",
              children: "0xc7007af2B24D4eb963fc9633B0c66e1d2D90Fc21"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base_Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2C455189D2af6643B924A981a9080CcC63d5a567?tab=contract",
              children: "0x2C455189D2af6643B924A981a9080CcC63d5a567"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base_Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x84B62e44F667F692F7739Ca6040cD17DA02068A8?tab=contract",
              children: "0x84B62e44F667F692F7739Ca6040cD17DA02068A8"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pETH.arb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pETH.arb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum_Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xc0a821a1AfEd1322c5e15f1F4586C0B8cE65400e?tab=contract",
              children: "0xc0a821a1AfEd1322c5e15f1F4586C0B8cE65400e"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.arb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.arb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum_Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xa261A10e94aE4bA88EE8c5845CbE7266bD679DD6?tab=contract",
              children: "0xa261A10e94aE4bA88EE8c5845CbE7266bD679DD6"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.arb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.arb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrum_Sepolia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x76Ad08339dF606BeEDe06f90e3FaF82c5b2fb2E9?tab=contract",
              children: "0x76Ad08339dF606BeEDe06f90e3FaF82c5b2fb2E9"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.bnb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.bnb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB_Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2f98B4235FD2BA0173a2B056D722879360B12E7b?tab=contract",
              children: "0x2f98B4235FD2BA0173a2B056D722879360B12E7b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pBNB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pBNB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BNB_Testnet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x7a9082dA308f3fa005beA7dB0d203b3b86664E36?tab=contract",
              children: "0x7a9082dA308f3fa005beA7dB0d203b3b86664E36"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core-amm--helpers",
      children: "Core AMM & Helpers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Factory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x81b8Bca02580C7d6b636051FDb7baAC436bFb454?tab=contract",
              children: "0x81b8Bca02580C7d6b636051FDb7baAC436bFb454"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Swap Router"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x5D548bB9E305AAe0d6dc6e6fdc3ab419f6aC0037?tab=contract",
              children: "0x5D548bB9E305AAe0d6dc6e6fdc3ab419f6aC0037"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Position Manager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xf9b3ac66aed14A2C7D9AA7696841aB6B27a6231e?tab=contract",
              children: "0xf9b3ac66aed14A2C7D9AA7696841aB6B27a6231e"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "QuoterV2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x83316275f7C2F79BC4E26f089333e88E89093037?tab=contract",
              children: "0x83316275f7C2F79BC4E26f089333e88E89093037"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tick Lens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xb64113Fc16055AfE606f25658812EE245Aa41dDC?tab=contract",
              children: "0xb64113Fc16055AfE606f25658812EE245Aa41dDC"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multicall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xa8c00017955c8654bfFbb6d5179c99f5aB8B7849?tab=contract",
              children: "0xa8c00017955c8654bfFbb6d5179c99f5aB8B7849"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amm-pools",
      children: "AMM Pools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token 0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fee"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pSOL/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x0E5914e3A7e2e6d18330Dd33fA387Ce33Da48b54?tab=contract",
              children: "0x0E5914e3A7e2e6d18330Dd33fA387Ce33Da48b54"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed?tab=contract",
              children: "0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pETH/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x012d5C099f8AE00009f40824317a18c3A342f622?tab=contract",
              children: "0x012d5C099f8AE00009f40824317a18c3A342f622"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2971824Db68229D087931155C2b8bB820B275809?tab=contract",
              children: "0x2971824Db68229D087931155C2b8bB820B275809"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2d46b2b92266f34345934F17039768cd631aB026?tab=contract",
              children: "0x2d46b2b92266f34345934F17039768cd631aB026"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xCA0C5E6F002A389E1580F0DB7cd06e4549B5F9d3?tab=contract",
              children: "0xCA0C5E6F002A389E1580F0DB7cd06e4549B5F9d3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.eth/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x69B21660F49f2B8F60B0177Abc751a08EBEa0Ae3?tab=contract",
              children: "0x69B21660F49f2B8F60B0177Abc751a08EBEa0Ae3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x387b9C8Db60E74999aAAC5A2b7825b400F12d68E?tab=contract",
              children: "0x387b9C8Db60E74999aAAC5A2b7825b400F12d68E"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.base/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x1cE819E742b44f922D2F05fdFFd17b4997f4CD15?tab=contract",
              children: "0x1cE819E742b44f922D2F05fdFFd17b4997f4CD15"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2C455189D2af6643B924A981a9080CcC63d5a567?tab=contract",
              children: "0x2C455189D2af6643B924A981a9080CcC63d5a567"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pETH.base/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xF926707689ad2fE9A81e666E5B888b2f3AD33980?tab=contract",
              children: "0xF926707689ad2fE9A81e666E5B888b2f3AD33980"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xc7007af2B24D4eb963fc9633B0c66e1d2D90Fc21?tab=contract",
              children: "0xc7007af2B24D4eb963fc9633B0c66e1d2D90Fc21"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pETH.arb/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x1354c9A72F447f60F4811FC34b8C2e084FE338A3?tab=contract",
              children: "0x1354c9A72F447f60F4811FC34b8C2e084FE338A3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xc0a821a1AfEd1322c5e15f1F4586C0B8cE65400e?tab=contract",
              children: "0xc0a821a1AfEd1322c5e15f1F4586C0B8cE65400e"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.arb/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xF95B20Cf3f2dE495747EB3d33611D0FFEA29F448?tab=contract",
              children: "0xF95B20Cf3f2dE495747EB3d33611D0FFEA29F448"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x76Ad08339dF606BeEDe06f90e3FaF82c5b2fb2E9?tab=contract",
              children: "0x76Ad08339dF606BeEDe06f90e3FaF82c5b2fb2E9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT.bnb/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x435875db8a76cCAA9cbf73690C6Dc1913BBC9168?tab=contract",
              children: "0x435875db8a76cCAA9cbf73690C6Dc1913BBC9168"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2f98B4235FD2BA0173a2B056D722879360B12E7b?tab=contract",
              children: "0x2f98B4235FD2BA0173a2B056D722879360B12E7b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pBNB/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x826edC20c926653f4ddC01b8d4C7Df31a403e7d6?tab=contract",
              children: "0x826edC20c926653f4ddC01b8d4C7Df31a403e7d6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x7a9082dA308f3fa005beA7dB0d203b3b86664E36?tab=contract",
              children: "0x7a9082dA308f3fa005beA7dB0d203b3b86664E36"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.arb/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xF3578f9dEE1591a45366801CedF91B4935997964?tab=contract",
              children: "0xF3578f9dEE1591a45366801CedF91B4935997964"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xa261A10e94aE4bA88EE8c5845CbE7266bD679DD6?tab=contract",
              children: "0xa261A10e94aE4bA88EE8c5845CbE7266bD679DD6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC.base/WPC Pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x96Ef417eA20114D86C2a60864a63A69344234930?tab=contract",
              children: "0x96Ef417eA20114D86C2a60864a63A69344234930"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x84B62e44F667F692F7739Ca6040cD17DA02068A8?tab=contract",
              children: "0x84B62e44F667F692F7739Ca6040cD17DA02068A8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9?tab=contract",
              children: "0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "external-chain-gateway-contracts",
      children: "External Chain Gateway Contracts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethereum-sepolia",
      children: "Ethereum Sepolia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethereum-sepolia---gateway-addresses",
      children: "Ethereum Sepolia - Gateway Addresses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0xa594c32593eD1E0Fce83fa1b3A56870b4a1b4ec1#code",
              children: "0xa594c32593eD1E0Fce83fa1b3A56870b4a1b4ec1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UniversalGateway Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A#code",
              children: "0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProxyAdmin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0x756C0bEa91F5692384AEe147C10409BB062Bf39b#code",
              children: "0x756C0bEa91F5692384AEe147C10409BB062Bf39b"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ethereum-sepolia---supported-tokens",
      children: "Ethereum Sepolia - Supported Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PRC20 Address (on Push Chain)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0000000000000000000000000000000000000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2971824Db68229D087931155C2b8bB820B275809?tab=contract",
              children: "0x2971824Db68229D087931155C2b8bB820B275809"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238#code",
              children: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x387b9C8Db60E74999aAAC5A2b7825b400F12d68E?tab=contract",
              children: "0x387b9C8Db60E74999aAAC5A2b7825b400F12d68E"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0x7169D38820dfd117C3FA1f22a697dBA58d90BA06#code",
              children: "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xCA0C5E6F002A389E1580F0DB7cd06e4549B5F9d3?tab=contract",
              children: "0xCA0C5E6F002A389E1580F0DB7cd06e4549B5F9d3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WETH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14#code",
              children: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x0d0dF7E8807430A81104EA84d926139816eC7586?tab=contract",
              children: "0x0d0dF7E8807430A81104EA84d926139816eC7586"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stETH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0x3e3FE7dBc6B4C189E7128855dD526361c49b40Af#code",
              children: "0x3e3FE7dBc6B4C189E7128855dD526361c49b40Af"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xaf89E805949c628ebde3262e91dc4ab9eA12668E?tab=contract",
              children: "0xaf89E805949c628ebde3262e91dc4ab9eA12668E"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arbitrum-sepolia",
      children: "Arbitrum Sepolia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arbitrum-sepolia---gateway-addresses",
      children: "Arbitrum Sepolia - Gateway Addresses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.arbiscan.io/address/0xa81a398289D04503Aab64C4276CdB99Ff1594801#code",
              children: "0xa81a398289D04503Aab64C4276CdB99Ff1594801"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UniversalGateway Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.arbiscan.io/address/0x2cd870e0166Ba458dEC615168Fd659AacD795f34#code",
              children: "0x2cd870e0166Ba458dEC615168Fd659AacD795f34"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProxyAdmin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.arbiscan.io/address/0xF838473Ddc2228267023A319c7305564391313f7#code",
              children: "0xF838473Ddc2228267023A319c7305564391313f7"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arbitrum-sepolia---supported-tokens",
      children: "Arbitrum Sepolia - Supported Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PRC20 Address (on Push Chain)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0000000000000000000000000000000000000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xc0a821a1AfEd1322c5e15f1F4586C0B8cE65400e?tab=contract",
              children: "0xc0a821a1AfEd1322c5e15f1F4586C0B8cE65400e"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.arbiscan.io/address/0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d#code",
              children: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xa261A10e94aE4bA88EE8c5845CbE7266bD679DD6?tab=contract",
              children: "0xa261A10e94aE4bA88EE8c5845CbE7266bD679DD6"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.arbiscan.io/address/0x1419d7C74D234fA6B73E06A2ce7822C1d37922f0#code",
              children: "0x1419d7C74D234fA6B73E06A2ce7822C1d37922f0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x76Ad08339dF606BeEDe06f90e3FaF82c5b2fb2E9?tab=contract",
              children: "0x76Ad08339dF606BeEDe06f90e3FaF82c5b2fb2E9"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "base-sepolia",
      children: "Base Sepolia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "base-sepolia---gateway-addresses",
      children: "Base Sepolia - Gateway Addresses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.basescan.org/address/0x9f63e2bCFC19994c664a7d7265dCfAb206634612#code",
              children: "0x9f63e2bCFC19994c664a7d7265dCfAb206634612"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UniversalGateway Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.basescan.org/address/0xFD4fef1F43aFEc8b5bcdEEc47f35a1431479aC16#code",
              children: "0xFD4fef1F43aFEc8b5bcdEEc47f35a1431479aC16"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProxyAdmin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.basescan.org/address/0x0b30F0ECd37B8D44FE1d2b98d5Dc64654d9ac9b3#code",
              children: "0x0b30F0ECd37B8D44FE1d2b98d5Dc64654d9ac9b3"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "base-sepolia---supported-tokens",
      children: "Base Sepolia - Supported Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PRC20 Address (on Push Chain)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0000000000000000000000000000000000000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0xc7007af2B24D4eb963fc9633B0c66e1d2D90Fc21?tab=contract",
              children: "0xc7007af2B24D4eb963fc9633B0c66e1d2D90Fc21"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.basescan.org/address/0x036CbD53842c5426634e7929541eC2318f3dCF7e#code",
              children: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x84B62e44F667F692F7739Ca6040cD17DA02068A8?tab=contract",
              children: "0x84B62e44F667F692F7739Ca6040cD17DA02068A8"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia.basescan.org/address/0x9FF5a186f53F6E6964B00320Da1D2024DE11E0cB#code",
              children: "0x9FF5a186f53F6E6964B00320Da1D2024DE11E0cB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2C455189D2af6643B924A981a9080CcC63d5a567?tab=contract",
              children: "0x2C455189D2af6643B924A981a9080CcC63d5a567"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bnb-testnet",
      children: "BNB Testnet"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bnb-testnet---gateway-addresses",
      children: "BNB Testnet - Gateway Addresses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Contract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://testnet.bscscan.com//address/0x1f5afA0eEDC2F7E2442D8a51E8A892C98517De1E#code",
              children: "0x1f5afA0eEDC2F7E2442D8a51E8A892C98517De1E"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UniversalGateway Proxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://testnet.bscscan.com//address/0x44aFFC61983F4348DdddB886349eb992C061EaC0#code",
              children: "0x44aFFC61983F4348DdddB886349eb992C061EaC0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ProxyAdmin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://testnet.bscscan.com//address/0x5Cef317D8392dF9F8C8E8a696c6893FD4112542C#code",
              children: "0x5Cef317D8392dF9F8C8E8a696c6893FD4112542C"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bnb-testnet---supported-tokens",
      children: "BNB Testnet - Supported Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PRC20 Address (on Push Chain)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native ETH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0000000000000000000000000000000000000000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x7a9082dA308f3fa005beA7dB0d203b3b86664E36?tab=contract",
              children: "0x7a9082dA308f3fa005beA7dB0d203b3b86664E36"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://testnet.bscscan.com//address/0x64544969ed7EBf5f083679233325356EbE738930#code",
              children: "0x64544969ed7EBf5f083679233325356EbE738930"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://testnet.bscscan.com//address/0xBC14F348BC9667be46b35Edc9B68653d86013DC5#code",
              children: "0xBC14F348BC9667be46b35Edc9B68653d86013DC5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x2f98B4235FD2BA0173a2B056D722879360B12E7b?tab=contract",
              children: "0x2f98B4235FD2BA0173a2B056D722879360B12E7b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://testnet.bscscan.com//address/0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867#code",
              children: "0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solana-devnet",
      children: "Solana Devnet"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solana-devnet---gateway-addresses",
      children: "Solana Devnet - Gateway Addresses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Program"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://explorer.solana.com/address/CFVSincHYbETh2k7w6u1ENEkjbSLtveRCEBupKidw2VS?cluster=devnet",
              children: "CFVSincHYbETh2k7w6u1ENEkjbSLtveRCEBupKidw2VS"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solana-devnet---supported-tokens",
      children: "Solana Devnet - Supported Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Source Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PRC20 Address (on Push Chain)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native SOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed?tab=contract",
              children: "0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://explorer.solana.com/address/4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU?cluster=devnet",
              children: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x04B8F634ABC7C879763F623e0f0550a4b5c4426F?tab=contract",
              children: "0x04B8F634ABC7C879763F623e0f0550a4b5c4426F"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USDT (Unofficial)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://explorer.solana.com/address/EiXDnrAg9ea2Q6vEPV7E5TpTU1vh41jcuZqKjU5Dc4ZF?cluster=devnet",
              children: "EiXDnrAg9ea2Q6vEPV7E5TpTU1vh41jcuZqKjU5Dc4ZF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x4f1A3D22d170a2F4Bddb37845a962322e24f4e34?tab=contract",
              children: "0x4f1A3D22d170a2F4Bddb37845a962322e24f4e34"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAI (Unofficial)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://explorer.solana.com/address/G2ZLaRhpohW23KTEX3fBjZXtNTFFwemqCaWWnWVTj4TB?cluster=devnet",
              children: "G2ZLaRhpohW23KTEX3fBjZXtNTFFwemqCaWWnWVTj4TB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://donut.push.network/address/0x5861f56A556c990358cc9cccd8B5baa3767982A8?tab=contract",
              children: "0x5861f56A556c990358cc9cccd8B5baa3767982A8"
            })
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ },

/***/ 411470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(117559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(823104);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(956347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(300205);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(757485);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(231682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(70679);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){var _React$Children$toArr,_React$Children$toArr2;return(_React$Children$toArr=(_React$Children$toArr2=react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");}))===null||_React$Children$toArr2===void 0?void 0:_React$Children$toArr2.filter(Boolean))!==null&&_React$Children$toArr!==void 0?_React$Children$toArr:[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(a=>a.value).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(a=>a.value).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>{tabRefs.push(tabControl);},onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value}),value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:(0,clsx/* default */.A)('margin-top--md',selectedTabItem.props.className)});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.tabs.container,// former name kept for backward compatibility
// see https://github.com/facebook/docusaurus/pull/4086
'tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,Object.assign({},tabs,props)),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,Object.assign({},tabs,props))]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,Object.assign({},props,{children:sanitizeTabsChildren(props.children)}),String(isBrowser));}

/***/ },

/***/ 954537
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(978478);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474848);
const AddChainToWallet=_ref=>{let{title='Add to Wallet',config}=_ref;const addNetwork=async()=>{try{if(typeof window==='undefined'||!window.ethereum){alert('Please install MetaMask first!');return;}const chainIdHex="0x"+config.chainId.toString(16);try{await window.ethereum.request({method:'wallet_switchEthereumChain',params:[{chainId:chainIdHex}]});alert('Network already exists.');return;}catch(switchError){// Step 2: If the error code is 4902, the chain doesn't exist
if(switchError.code===4902){try{await window.ethereum.request({method:'wallet_addEthereumChain',params:[{chainId:chainIdHex,chainName:config.chainName,nativeCurrency:config.nativeCurrency,iconUrls:config.iconUrls,rpcUrls:config.rpcUrls,blockExplorerUrls:config.blockExplorerUrls}]});}catch(addError){console.error('Error adding network:',addError);alert('Failed to add network to MetaMask');}}else{console.error('Error switching network:',switchError);alert('Failed to switch network');}}}catch(error){console.error('Unexpected error:',error);alert('Something went wrong while adding the network');}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'20px 0'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n,{onClick:addNetwork,style:{backgroundColor:'#D548EC',border:'none',padding:'12px 24px',cursor:'pointer',transition:'all 0.2s ease',fontFamily:'DM Sans'},children:title})});};function Wrapper(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{children:()=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AddChainToWallet,Object.assign({},props))});}

/***/ },

/***/ 978478
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BrowserOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(992303);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly(_ref){let{children,fallback}=_ref;const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();if(isBrowser){if(typeof children!=='function'&&"production"==='development')// removed by dead control flow
{}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:children===null||children===void 0?void 0:children()});}return fallback!==null&&fallback!==void 0?fallback:null;}

/***/ }

}]);