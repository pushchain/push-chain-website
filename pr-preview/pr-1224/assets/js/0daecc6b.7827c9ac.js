"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[96371],{

/***/ 659891
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_02_setup_01_chain_configuration_mdx_0da_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-02-setup-01-chain-configuration-mdx-0da.json
const site_docs_chain_02_setup_01_chain_configuration_mdx_0da_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/setup/docs-chain-setup-chain-config","title":"Chain Configuration","description":"Chain Configuration | Setup | Push Chain Docs","source":"@site/docs/chain/02-setup/01-Chain-Configuration.mdx","sourceDirName":"chain/02-setup","slug":"/chain/setup/chain-config","permalink":"/push-chain-website/pr-preview/pr-1224/docs/chain/setup/chain-config","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/02-setup/01-Chain-Configuration.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-setup-chain-config","title":"Chain Configuration","hide_title":false,"slug":"./chain-config","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_setup_chain_config--chain_configuration.png"},"sidebar":"pushChainSidebar","previous":{"title":"Configure Hardhat","permalink":"/push-chain-website/pr-preview/pr-1224/docs/chain/setup/smart-contract-environment/configure-hardhat"},"next":{"title":"Smart Contract Address Book","permalink":"/push-chain-website/pr-preview/pr-1224/docs/chain/setup/smart-contract-address-book"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
var Tabs = __webpack_require__(77086);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
var TabItem = __webpack_require__(436026);
// EXTERNAL MODULE: ./src/components/Static/PushChainSpecs.tsx
var PushChainSpecs = __webpack_require__(162334);
;// ./docs/chain/02-setup/01-Chain-Configuration.mdx


const frontMatter = {
	id: 'docs-chain-setup-chain-config',
	title: 'Chain Configuration',
	hide_title: false,
	slug: './chain-config',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_setup_chain_config--chain_configuration.png'
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "Chain Specs",
  "id": "chain-specs",
  "level": 2
}, {
  "value": "Chain Contracts",
  "id": "chain-contracts",
  "level": 2
}, {
  "value": "Universal Gateway Contracts",
  "id": "universal-gateway-contracts",
  "level": 2
}, {
  "value": "Universal Chain Namespace",
  "id": "universal-chain-namespace",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Chain Configuration | Setup | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "List of all the chain configurations, contract addresses and namespaces deployed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chain-specs",
      children: "Chain Specs"
    }), "\n", (0,jsx_runtime.jsx)(PushChainSpecs/* default */.A, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chain-contracts",
      children: "Chain Contracts"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "chain-network",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "testnet_donut",
        label: "🍩 Donut Testnet",
        default: true,
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Contract Name"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Contract Address"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Contract Purpose"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Universal Exector Factory"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "0x00000000000000000000000000000000000000eA"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Factory contract to create Universal Executor Accounts (UEAs) on Push Chain."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Universal Verification Precompile"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "0x00000000000000000000000000000000000000ca"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Precompile module that verifies signature of source-chain wallet (UOAs)"
              })]
            })]
          })]
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "mainnet",
        label: "Mainnet - Coming Soon 🚀",
        children: (0,jsx_runtime.jsxs)(_components.admonition, {
          title: "Coming Soon!",
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "Push Chain Mainnet is currently in development. Stay tuned for updates!"
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Follow us on ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://x.com/pushchain",
                children: "X"
              }), " for announcements!"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Join our ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://discord.com/invite/pushchain",
                children: "Discord"
              }), " to be part of the community"]
            }), "\n"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "universal-gateway-contracts",
      children: "Universal Gateway Contracts"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "chain-network",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "testnet_donut",
        label: "🍩 Donut Testnet",
        default: true,
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Chain"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Contract Address"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Ethereum Sepolia Testnet"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "0x05bD7a3D18324c1F7e216f7fBF2b15985aE5281A"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Solana Devnet"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "CFVSincHYbETh2k7w6u1ENEkjbSLtveRCEBupKidw2VS"
                })
              })]
            })]
          })]
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "mainnet",
        label: "Mainnet - Coming Soon 🚀",
        children: (0,jsx_runtime.jsxs)(_components.admonition, {
          title: "Coming Soon!",
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "Push Chain Mainnet is currently in development. Stay tuned for updates!"
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Follow us on ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://x.com/pushchain",
                children: "X"
              }), " for announcements!"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Join our ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://discord.com/invite/pushchain",
                children: "Discord"
              }), " to be part of the community"]
            }), "\n"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "universal-chain-namespace",
      children: "Universal Chain Namespace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every external chain is represented as a particular string on Push Chain.\nMentioned below are the supported testnet and mainnet chain namespaces on Push Chain."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "chain-network",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "testnet_donut",
        label: "🍩 Donut Testnet",
        default: true,
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Chain"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Namespace"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Assigned Constant"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Push Testnet (Donut)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "eip155:42101"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PUSH_TESTNET_DONUT"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Ethereum Sepolia"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "eip155:11155111"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "ETHEREUM_SEPOLIA"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Arbitrum Sepolia"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "eip155:421614"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "ARBITRUM_SEPOLIA"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Base Sepolia"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "eip155:84532"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "BASE_SEPOLIA"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BNB Testnet"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "eip155:97"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "BNB_TESTNET"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Solana Devnet"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "SOLANA_DEVNET"
                })
              })]
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "mainnet",
        label: "Mainnet - Coming Soon 🚀",
        children: [(0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Chain"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Namespace"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Assigned Constant"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Push Mainnet"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "coming soon"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PUSH_MAINNET"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Ethereum Mainnet"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "eip155:1"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "ETHEREUM_MAINNET"
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Solana Mainnet"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "SOLANA_MAINNET"
                })
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.admonition, {
          title: "Coming Soon!",
          type: "info",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "Push Chain Mainnet is currently in development. Stay tuned for updates!"
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Follow us on ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://x.com/pushchain",
                children: "X"
              }), " for announcements!"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Join our ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://discord.com/invite/pushchain",
                children: "Discord"
              }), " to be part of the community"]
            }), "\n"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create your Universal Signer with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/create-universal-signer",
          children: "Create Universal Signer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Send your first transaction via ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-universal-transaction",
          children: "Send Universal Transaction"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore on-chain helpers in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-helpers",
          children: "Contract Helpers"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Abstract on the frontend with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/integrate-push-universal-wallet",
          children: "UI Kit"
        })]
      }), "\n"]
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
function BrowserOnly(_ref){let children=_ref.children,fallback=_ref.fallback;const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();if(isBrowser){if(typeof children!=='function'&&"production"==='development')// removed by dead control flow
{}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:children===null||children===void 0?void 0:children()});}return fallback!==null&&fallback!==void 0?fallback:null;}

/***/ },

/***/ 436026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TabItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(618215);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(747751);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(699698);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItemPanel(_ref){let children=_ref.children,className=_ref.className,hidden=_ref.hidden;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{role:"tabpanel",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.tabItem,className),hidden,children:children});}function TabItem(_ref2){let children=_ref2.children,className=_ref2.className,value=_ref2.value;const _useTabs=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useTabs */ .uc)(),selectedValue=_useTabs.selectedValue,lazy=_useTabs.lazy;const isSelected=value===selectedValue;// TODO Docusaurus v4: use <Activity> ?
if(!isSelected&&lazy){return null;}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TabItemPanel,{className:className,hidden:!isSelected,children:children});}

/***/ },

/***/ 77086
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(618215);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(117559);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(747751);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(823104);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(992303);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(611478);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let className=_ref.className;const _useTabs=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useTabs */ .uc)(),selectedValue=_useTabs.selectedValue,selectValue=_useTabs.selectValue,tabValues=_useTabs.tabValues,block=_useTabs.block;const tabRefs=[];const _useScrollPositionBlo=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useScrollPositionBlocker */ .a_)(),blockElementScrollPositionUntilNextRender=_useScrollPositionBlo.blockElementScrollPositionUntilNextRender;const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let value=_ref2.value,label=_ref2.label,attributes=_ref2.attributes;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li",Object.assign({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:ref=>{tabRefs.push(ref);},onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('tabs__item',_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value}),value);})});}function TabContent(_ref3){let children=_ref3.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"margin-top--md",children:children});}function TabsContainer(_ref4){let className=_ref4.className,children=_ref4.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.tabs.container,// former name kept for backward compatibility
// see https://github.com/facebook/docusaurus/pull/4086
'tabs-container',_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tabList),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabList// Surprising but historical
// className is applied on TabList, not on TabsContainer
,{className:className}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabContent,{children:children})]});}function Tabs(props){const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();const value=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useTabsContextValue */ .OC)(props);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .TabsProvider */ .O_,{value:value// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabsContainer,{className:props.className,children:(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .sanitizeTabsChildren */ .vT)(props.children)})},String(isBrowser));}

/***/ },

/***/ 747751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OC: () => (/* binding */ useTabsContextValue),
/* harmony export */   O_: () => (/* binding */ TabsProvider),
/* harmony export */   uc: () => (/* binding */ useTabs),
/* harmony export */   vT: () => (/* binding */ sanitizeTabsChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(956347);
/* harmony import */ var _docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(300205);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(757485);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70679);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(231682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(474848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function sanitizeTabsChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(child=>child!=='\n');}function extractChildrenTabValues(children){// ✅ <TabItem value="red"/> => true
// ✅ <CustomTabItem value="red"/> => true
// ❌ <RedTabItem value="tab-value"/> => requires <Tabs values> prop
function isTabItemWithValueProp(comp){const props=comp.props;return!!props&&typeof props==='object'&&'value'in props;}const elements=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).flatMap(child=>{// Historical case, not sure when it happens, do we really need this?
if(!child){return[];}if(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&isTabItemWithValueProp(child)){return[child];}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
const badChildTypeName=// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name;throw new Error("Docusaurus error: Bad <Tabs> child <"+badChildTypeName+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.\nIf you do not want to pass on a \"value\" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.");});return elements.map(_ref=>{let _ref$props=_ref.props,value=_ref$props.value,label=_ref$props.label,attributes=_ref$props.attributes,isDefault=_ref$props.default;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,_index__WEBPACK_IMPORTED_MODULE_5__/* .duplicates */ .XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(a=>"'"+a.value+"'").join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){const valuesProp=props.values,children=props.children;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let value=_ref2.value,tabValues=_ref2.tabValues;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let defaultValue=_ref3.defaultValue,tabValues=_ref3.tabValues;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(a=>a.value).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){let _ref4$queryString=_ref4.queryString,queryString=_ref4$queryString===void 0?false:_ref4$queryString,groupId=_ref4.groupId;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let _ref5$queryString=_ref5.queryString,queryString=_ref5$queryString===void 0?false:_ref5$queryString,groupId=_ref5.groupId;const history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useQueryStringValue */ .aZ)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let groupId=_ref6.groupId;const key=getStorageKey(groupId);const _useStorageSlot=(0,_index__WEBPACK_IMPORTED_MODULE_4__/* .useStorageSlot */ .Dv)(key),value=_useStorageSlot[0],storageSlot=_useStorageSlot[1];const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabsContextValue(props){var _props$lazy,_props$block;const defaultValue=props.defaultValue,_props$queryString=props.queryString,queryString=_props$queryString===void 0?false:_props$queryString,groupId=props.groupId;const tabValues=useTabValues(props);const _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialStateValue({defaultValue,tabValues})),selectedValue=_useState[0],setSelectedValue=_useState[1];const _useTabQueryString=useTabQueryString({queryString,groupId}),queryStringValue=_useTabQueryString[0],setQueryString=_useTabQueryString[1];const _useTabStorage=useTabStorage({groupId}),storageValue=_useTabStorage[0],setStorageValue=_useTabStorage[1];// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues,lazy:(_props$lazy=props.lazy)!==null&&_props$lazy!==void 0?_props$lazy:false,block:(_props$block=props.block)!==null&&_props$block!==void 0?_props$block:false};}const TabsContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function useTabs(){const contextValue=react__WEBPACK_IMPORTED_MODULE_0__.useContext(TabsContext);if(!contextValue){throw new Error('useTabsContext() must be used within a Tabs component');}return contextValue;}function TabsProvider(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabsContext.Provider,{value:props.value,children:props.children});}

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
const AddChainToWallet=_ref=>{let _ref$title=_ref.title,title=_ref$title===void 0?'Add to Wallet':_ref$title,config=_ref.config;const addNetwork=async()=>{try{if(typeof window==='undefined'||!window.ethereum){alert('Please install MetaMask first!');return;}const chainIdHex="0x"+config.chainId.toString(16);try{await window.ethereum.request({method:'wallet_switchEthereumChain',params:[{chainId:chainIdHex}]});alert('Network already exists.');return;}catch(switchError){// Step 2: If the error code is 4902, the chain doesn't exist
if(switchError.code===4902){try{await window.ethereum.request({method:'wallet_addEthereumChain',params:[{chainId:chainIdHex,chainName:config.chainName,nativeCurrency:config.nativeCurrency,iconUrls:config.iconUrls,rpcUrls:config.rpcUrls,blockExplorerUrls:config.blockExplorerUrls}]});}catch(addError){console.error('Error adding network:',addError);alert('Failed to add network to MetaMask');}}else{console.error('Error switching network:',switchError);alert('Failed to switch network');}}}catch(error){console.error('Unexpected error:',error);alert('Something went wrong while adding the network');}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'20px 0'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n,{onClick:addNetwork,style:{backgroundColor:'#D548EC',border:'none',padding:'12px 24px',cursor:'pointer',transition:'all 0.2s ease',fontFamily:'DM Sans'},children:title})});};function Wrapper(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{children:()=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AddChainToWallet,Object.assign({},props))});}

/***/ },

/***/ 162334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(328774);
/* harmony import */ var _site_src_components_AddChainToWallet_AddChainToWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(954537);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(444608);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(436026);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77086);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(474848);
const TESTNET_CONFIG={chainId:42101,chainName:'Push Chain Testnet',nativeCurrency:{name:'Push Chain',symbol:'PC',decimals:18},rpcUrls:['https://evm.donut.rpc.push.org/'],iconUrls:[],blockExplorerUrls:['https://donut.push.network']};const PushChainSpecs=()=>{const tabValues=[{value:'testnet_donut',label:'🍩 Donut Testnet',default:true},{value:'mainnet',label:'Mainnet - Coming Soon 🚀'}];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{groupId:"chain-network",values:tabValues,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{value:"testnet_donut",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th",{children:"Field"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th",{children:"Value"})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Network Name"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"Push Chain Donut Testnet"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"RPC URL"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://evm.donut.rpc.push.org/"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Chain ID"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"42101"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Currency Symbol"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"PC"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Block Explorer URL"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://donut.push.network"})})]})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_site_src_components_AddChainToWallet_AddChainToWallet__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"Add to Wallet (Testnet Donut)",config:TESTNET_CONFIG})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{value:"mainnet",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"admonition admonition-info alert alert--info",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"admonition-heading",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{as:"h5",children:"Coming Soon!"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"admonition-content",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Push Chain Mainnet is currently in development. Stay tuned for updates!"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:["Follow us on ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{to:"https://x.com/pushchain",children:"X"})," for announcements"]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:["Join our",' ',/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{to:"https://discord.com/invite/pushchain",children:"Discord"}),' ',"to be part of the community"]})]})]})]})})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PushChainSpecs);

/***/ },

/***/ 699698
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tabItem":"tabItem_Ymn6"});
    if(true) {
      (function() {
        var localsJsonString = "{\"tabItem\":\"tabItem_Ymn6\"}";
        // 1779287191640
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ },

/***/ 611478
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
    if(true) {
      (function() {
        var localsJsonString = "{\"tabList\":\"tabList__CuJ\",\"tabItem\":\"tabItem_LNqP\"}";
        // 1779287191642
        var cssReload = __webpack_require__(129140)(module.id, {"esModule":true});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }

}]);