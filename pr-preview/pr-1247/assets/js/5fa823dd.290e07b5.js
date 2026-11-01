"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[75416],{

/***/ 636099
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_04_ui_kit_01_integrate_push_universal_wallet_mdx_5fa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-04-ui-kit-01-integrate-push-universal-wallet-mdx-5fa.json
const site_docs_chain_04_ui_kit_01_integrate_push_universal_wallet_mdx_5fa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/ui-kit/docs-chain-ui-components-integrate-push-universal-wallet","title":"Integrate Push Universal Wallet","description":"{Integrate Push Universal Wallet | Customizations | UI Kit | Push Chain Docs}","source":"@site/docs/chain/04-ui-kit/01-Integrate-Push-Universal-Wallet.mdx","sourceDirName":"chain/04-ui-kit","slug":"/chain/ui-kit/integrate-push-universal-wallet","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/ui-kit/integrate-push-universal-wallet","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/01-Integrate-Push-Universal-Wallet.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-ui-components-integrate-push-universal-wallet","title":"Integrate Push Universal Wallet","hide_title":false,"slug":"./integrate-push-universal-wallet","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_ui_components--integrate_push_universal_wallet.png"},"sidebar":"pushChainSidebar","previous":{"title":"UI Kit","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/ui-kit"},"next":{"title":"Customizations","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/ui-kit/customizations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
var Tabs = __webpack_require__(77086);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
var TabItem = __webpack_require__(436026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
;// ./docs/chain/04-ui-kit/01-Integrate-Push-Universal-Wallet.mdx


const frontMatter = {
	id: 'docs-chain-ui-components-integrate-push-universal-wallet',
	title: 'Integrate Push Universal Wallet',
	hide_title: false,
	slug: './integrate-push-universal-wallet',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_ui_components--integrate_push_universal_wallet.png'
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 2
}, {
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Quickstart",
  "id": "quickstart",
  "level": 2
}, {
  "value": "Customization Parameters",
  "id": "customization-parameters",
  "level": 2
}, {
  "value": "PushUniversalWalletProvider",
  "id": "pushuniversalwalletprovider",
  "level": 3
}, {
  "value": "PushUniversalAccountButton",
  "id": "pushuniversalaccountbutton",
  "level": 3
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
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        children: `Integrate Push Universal Wallet | Customizations | UI Kit | Push Chain Docs`
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Universal Wallet gives your app:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Seamless cross-chain"
        }), " wallet integration (EVM, Solana, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provider/consumer"
        }), " hook API for global state"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Built-in ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UI components"
        }), " for connect buttons and modals"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminates the need"
        }), " to manage complex blockchain connections, authentication states, and cross-chain interactions manually"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Push Universal Wallet operates on a simple provider-consumer pattern:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Provider Setup"
        }), ": Wrap your application with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PushUniversalWalletProvider"
        }), " to initialize wallet functionality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Button Integration"
        }), ": Add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PushUniversalAccountButton"
        }), " components where users should connect"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State Management"
        }), ": Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "usePushWalletContext"
        }), " hook to access wallet state and methods throughout your app"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Push Universal Wallet provides a unified interface for connecting to multiple blockchains, automatically handling authentication and cross-chain interactions without complex blockchain-specific implementations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      className: "codetabs",
      groupId: "frontend-installation",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        attributes: {
          className: "codetab npm"
        },
        default: true,
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "npm install @pushchain/ui-kit\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "yarn",
        attributes: {
          className: "codetab yarn"
        },
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "yarn add @pushchain/ui-kit\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "Note",
      type: "info",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you are using ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Vite with Plug'n'Play (PnP)"
        }), " or encounter a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "buffer error"
        }), ", simply install ", (0,jsx_runtime.jsx)(_components.code, {
          children: "buffer"
        }), " as a dependency."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The UI-kit already includes the necessary polyfills, so no extra configuration is required."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quickstart",
      children: "Quickstart"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      className: "liveplaytab",
      groupId: "integrate-push-wallet",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "basic",
        label: "Quickstart",
        default: true,
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\\s\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropGTagEvent=ui_kit_basic_integration\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <PushUniversalAccountButton />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "with_hooks",
        label: "With Hooks",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\\s\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropGTagEvent=ui_kit_hooks_integration\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  function WalletUI() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <p>\n            LFG! Push Chain Executor Account (UEA): $\n            {pushChainClient?.universal.account}\n          </p>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <WalletUI />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "with_customizations",
        label: "With Customizations",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\\s\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropGTagEvent=ui_kit_customizations_integration\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n    login: {\n      email: true,\n      google: true,\n      wallet: {\n        enabled: true,\n      },\n      appPreview: true,\n    },\n    modal: {\n      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,\n      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,\n      appPreview: true,\n    },\n  };\n\n  // Define Your App Preview\n  const appMetadata = {\n    logoUrl:\n      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  function WalletUI() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <p>\n            LFG! Push Chain Executor Account (UEA): $\n            {pushChainClient?.universal.account}\n          </p>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>\n      <WalletUI />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "with_pushchainclient_interaction",
        label: "With pushChainClient Interaction",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\\s\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropGTagEvent=ui_kit_send_transaction\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport { PushChain } from '@pushchain/core';\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\nimport { useState } from 'react';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n    login: {\n      email: true,\n      google: true,\n      wallet: {\n        enabled: true,\n      },\n      appPreview: true,\n    },\n    modal: {\n      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,\n      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,\n      appPreview: true,\n    },\n  };\n\n  // Define Your App Preview\n  const appMetadata = {\n    logoUrl:\n      'https://plus.unsplash.com/premium_photo-1746731481770-08b2f71661d0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  function WalletUI() {\n    const [txnHash, setTxnHash] = useState(null);\n    const [isLoading, setIsLoading] = useState(false);\n\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    const handleSendTransaction = async () => {\n      if (pushChainClient) {\n        setIsLoading(true);\n        try {\n          const res = await pushChainClient.universal.sendTransaction({\n            to: '0x0000000000000000000000000000000000042101',\n            value: PushChain.utils.helpers.parseUnits('0.01', 18), // 0.01 PC\n          });\n          setTxnHash(res.hash);\n        } catch (err) {\n          console.log(err);\n        } finally {\n          setIsLoading(false);\n        }\n      }\n    };\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n        {connectionStatus == PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <button\n            disabled={isLoading}\n            style={{\n              background: 'transparent',\n              border: '1px solid',\n              borderRadius: '10px',\n              padding: '12px 18px',\n              cursor: 'pointer',\n              marginTop: '8px',\n            }}\n            onClick={handleSendTransaction}\n          >\n            Send Transaction\n          </button>\n        )}\n        {txnHash && (\n          <>\n            <p>Txn Hash: {txnHash}</p>\n            <a\n              href={pushChainClient?.explorer.getTransactionUrl(txnHash)}\n              target='_blank'\n              rel='noopener noreferrer'\n            >\n              View in Explorer\n            </a>\n          </>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>\n      <WalletUI />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can quickly scaffold a new Push Chain dapp with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UI-Kit"
        }), " already configured using our CLI."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx create-universal-dapp my-app\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customization-parameters",
      children: "Customization Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Customize the parameters as per your need and the wallet functionality being used."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pushuniversalwalletprovider",
      children: "PushUniversalWalletProvider"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Below is a list of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "minimum parameters"
      }), " required to customize the Push Universal Wallet Provider. Check out ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/ui-kit/customizations/push-universal-wallet-provider/",
        children: "PushUniversalWalletProvider"
      }), " for more information on how to use and customize the Push Universal Wallet Provider."]
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Arguments"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Default"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "config"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushUniversalWalletProviderConfig"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Core configuration object for wallet connections."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "config.network"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushUI.CONSTANTS.PUSH_NETWORK.TESTNET"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Push Chain network to conenct to. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushUI.CONSTANTS.PUSH_NETWORK.TESTNET"
              }), " ", (0,jsx_runtime.jsxs)(Details/* default */.A, {
                summary: "PushUI.CONSTANTS.PUSH_NETWORK",
                className: "alert alert--minimal-api-table",
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.PUSH_NETWORK.TESTNET"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.PUSH_NETWORK.LOCALNET"
                })]
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "config.app"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ title, description, logoUrl }"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "(Optional) app metadata for login/preview in the modal."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "config.login"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ email, google, wallet, appPreview }"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Toggle login methods."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "config.modal"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ loginLayout, connectedLayout, connectedInteraction, appPreview }"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Customize the modal layout and interaction."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "themeMode"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "'light'"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'dark'"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "light"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Force a particular theme."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "themeOverrides"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Record<string,string> & { light, dark }"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Override CSS vars globally or per theme."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pushuniversalaccountbutton",
      children: "PushUniversalAccountButton"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check out ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/ui-kit/customizations/push-universal-account-button/",
        children: "PushUniversalAccountButton"
      }), " for more information on how to use and customize the Push Universal Account Button."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Customize the provider in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/push-universal-wallet-provider/",
          children: "PushUniversalWalletProvider"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Style your connect button in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/push-universal-account-button/",
          children: "PushUniversalAccountButton"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Master hooks with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/use-push-wallet-context/",
          children: "usePushWalletContext"
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

/***/ 303547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PushAPIReference)
/* harmony export */ });
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(486025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(309751);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474848);
const BRANCH_MARKER='↳';// the arrow that opens a branch header row
const CHILD_MARKER=' ';// rows indented with &nbsp; (U+00A0) belong to the branch above
const SECTION_MARKER='::';// full-width section label row, or a thin end row when empty
const COLLAPSED_MARKER='[collapsed]';// trailing marker on a branch or section header: start collapsed
const ROW_ATTR='data-api-row';// set on every row once enhanced: branch | child | section | end | sectionChild | plain
const BRANCH_CLASS='api-branch-row';const CHILD_CLASS='api-branch-child';const COLLAPSED_CLASS='api-branch-collapsed';const SECTION_CLASS='api-section-row';const SECTION_END_CLASS='api-section-end';const SECTION_CHILD_CLASS='api-section-child';// indented row outside a branch: padding only
const SECTION_TOGGLE_CLASS='api-section-collapsible';// :: label row with indented rows below it: toggles them
const TOGGLE_HINT_CLASS='api-toggle-hint';// span appended to a group header's first cell: label + chevron
/** The toggle hint span this component appended to `cell`, if any. */function findToggleHint(cell){return cell.querySelector(":scope > span."+TOGGLE_HINT_CLASS);}/** The authored text of a cell, without the appended toggle hint label. */function cellText(cell){var _cell$textContent,_hint$textContent;if(!cell)return'';const text=(_cell$textContent=cell.textContent)!==null&&_cell$textContent!==void 0?_cell$textContent:'';const hint=findToggleHint(cell);const hintText=(_hint$textContent=hint===null||hint===void 0?void 0:hint.textContent)!==null&&_hint$textContent!==void 0?_hint$textContent:'';return hint&&hintText&&text.endsWith(hintText)?text.slice(0,text.length-hintText.length):text;}function firstCellText(row){return cellText(row.cells[0]);}/** Writes 'Collapse' or 'Expand' to the header's hint; skips the write when it already matches. */function updateToggleHint(header,open){const cell=header.cells[0];const hint=cell?findToggleHint(cell):null;const label=open?'Collapse':'Expand';if(hint&&hint.textContent!==label)hint.textContent=label;}/**
 * Appends the toggle hint span at the end of the header's first cell, once
 * (never moving React-owned nodes), then syncs its label to aria-expanded.
 */function ensureToggleHint(header){const cell=header.cells[0];if(!cell)return;if(!findToggleHint(cell)){const hint=document.createElement('span');hint.className=TOGGLE_HINT_CLASS;hint.setAttribute('aria-hidden','true');cell.appendChild(hint);}updateToggleHint(header,header.getAttribute('aria-expanded')!=='false');}/**
 * Removes `marker` from the first text node inside `cell` that contains it
 * (the last one when `fromEnd` is set), along with the whitespace next to it.
 * Safe to call repeatedly: it does nothing once the marker is gone.
 */function stripMarker(cell,marker,fromEnd){if(fromEnd===void 0){fromEnd=false;}const walker=document.createTreeWalker(cell,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);if(fromEnd)nodes.reverse();for(const node of nodes){const idx=fromEnd?node.data.lastIndexOf(marker):node.data.indexOf(marker);if(idx!==-1){const before=node.data.slice(0,idx);const after=node.data.slice(idx+marker.length);node.data=fromEnd?before.replace(/\s+$/,'')+after:before+after.replace(/^\s+/,'');return;}}}function isChildRow(row){return row instanceof HTMLTableRowElement&&firstCellText(row).startsWith(CHILD_MARKER);}/**
 * The rows a group header (a branch header or a collapsible section label) controls:
 * the indented rows directly below it, up to the next non-indented row.
 * Read from the live DOM every time.
 */function getGroupChildren(header){const children=[];let next=header.nextElementSibling;while(next&&isChildRow(next)){children.push(next);next=next.nextElementSibling;}return children;}/** True for raw `:: Label` text (a section label), false for the bare `::` end row. */function isSectionLabelText(text){const trimmed=text.trim();return trimmed.startsWith(SECTION_MARKER)&&trimmed.slice(SECTION_MARKER.length).trim()!=='';}/**
 * A tbody row is a group header if it was enhanced as one, or still carries the raw markup
 * for one: the arrow (branch header), or a `:: Label` with indented rows below it.
 */function isGroupHeader(row){var _row$parentElement;if(((_row$parentElement=row.parentElement)===null||_row$parentElement===void 0?void 0:_row$parentElement.tagName)!=='TBODY')return false;if(row.classList.contains(BRANCH_CLASS)||row.classList.contains(SECTION_TOGGLE_CLASS))return true;const text=firstCellText(row).trim();if(text.startsWith(BRANCH_MARKER))return true;return isSectionLabelText(text)&&getGroupChildren(row).length>0;}function isGroupOpen(header,children){const expanded=header.getAttribute('aria-expanded');if(expanded!==null)return expanded!=='false';return!children.some(child=>child.hidden||child.classList.contains(COLLAPSED_CLASS));}/** Writes the open state to the header and its children; skips nodes already in that state. */function setGroupOpen(header,open){const value=String(open);if(header.getAttribute('aria-expanded')!==value)header.setAttribute('aria-expanded',value);updateToggleHint(header,open);getGroupChildren(header).forEach(child=>{if(child.hidden!==!open)child.hidden=!open;if(child.classList.contains(COLLAPSED_CLASS)!==!open)child.classList.toggle(COLLAPSED_CLASS,!open);});}function toggleGroup(header){setGroupOpen(header,!isGroupOpen(header,getGroupChildren(header)));}/**
 * Makes `row` an interactive group header (role, focus, aria-expanded, toggle hint).
 * On the first pass the open state comes from the [collapsed] marker; later passes keep it.
 */function initGroupHeader(row,firstPass,startCollapsed){if(row.getAttribute('role')!=='button')row.setAttribute('role','button');if(row.tabIndex!==0)row.tabIndex=0;if(firstPass){row.setAttribute('aria-expanded',String(!startCollapsed));}else if(!row.hasAttribute('aria-expanded')){row.setAttribute('aria-expanded','true');}ensureToggleHint(row);}/** Resolves an event target to the group header row (branch or section) it belongs to, or null. */function groupHeaderFromTarget(target,container){if(!(target instanceof Element))return null;// Links inside the header keep working without toggling.
if(target.closest('a'))return null;const row=target.closest('tr');if(!row||!container.contains(row))return null;return isGroupHeader(row)?row:null;}/**
 * Cosmetic enhancement of the markdown tables inside `root`.
 *
 * Authoring convention (plain GFM rows):
 * - Section label row: first cell starts with `::` followed by the label, other cells empty.
 *   A bare `::` renders a thin end bar that closes a conditional block. When indented rows
 *   follow the label, it becomes a collapsible header for them (caret, no arrow), and
 *   ending the label with ` [collapsed]` starts it collapsed.
 * - Branch header row: first cell starts with the arrow followed by the condition text,
 *   other cells empty. Ending the first cell with ` [collapsed]` starts the group collapsed.
 * - Child rows: first cell starts with &nbsp; before the argument name.
 *   A child row belongs to the nearest preceding branch header or section label row, which
 *   hides and shows it.
 * - Any other row ends the group.
 *
 * Only attributes, classes, colSpan and marker text are touched, plus one toggle hint span
 * appended at the end of each group header's first cell; React-owned nodes are never moved
 * (the chevron is a CSS pseudo-element on the hint). Every step is
 * idempotent, so this can re-run after any re-render; rows already enhanced carry ROW_ATTR.
 * Toggling itself does not depend on this function (see the delegated handlers).
 */function enhanceTables(root){root.querySelectorAll('table').forEach(table=>{const headerRow=table.querySelector('thead tr');const columnCount=headerRow?headerRow.children.length:1;// Let the first cell span the full row and hide the empty sibling cells
// (hidden, not removed, because React owns these nodes).
const spanFullRow=(row,cell)=>{if(cell.colSpan!==columnCount)cell.colSpan=columnCount;Array.from(row.cells).slice(1).forEach(sibling=>{if(!sibling.hidden)sibling.hidden=true;});};let inGroup=false;table.querySelectorAll('tbody tr').forEach(row=>{const cell=row.cells[0];if(!cell){inGroup=false;return;}const done=row.getAttribute(ROW_ATTR);const raw=cellText(cell);const text=raw.trim();if(done==='branch'||!done&&text.startsWith(BRANCH_MARKER)){inGroup=true;const startCollapsed=!done&&text.endsWith(COLLAPSED_MARKER);if(text.startsWith(BRANCH_MARKER))stripMarker(cell,BRANCH_MARKER);if(text.endsWith(COLLAPSED_MARKER))stripMarker(cell,COLLAPSED_MARKER,true);row.classList.add(BRANCH_CLASS);initGroupHeader(row,!done,startCollapsed);spanFullRow(row,cell);if(!done)row.setAttribute(ROW_ATTR,'branch');return;}if(done==='section'||done==='end'||!done&&text.startsWith(SECTION_MARKER)){inGroup=false;const kind=done!==null&&done!==void 0?done:text.slice(SECTION_MARKER.length).trim()?'section':'end';if(text.startsWith(SECTION_MARKER))stripMarker(cell,SECTION_MARKER);row.classList.add(kind==='section'?SECTION_CLASS:SECTION_END_CLASS);if(kind==='end'&&row.getAttribute('aria-hidden')!=='true')row.setAttribute('aria-hidden','true');spanFullRow(row,cell);if(!done)row.setAttribute(ROW_ATTR,kind);if(kind==='section'){const startCollapsed=!done&&text.endsWith(COLLAPSED_MARKER);if(text.endsWith(COLLAPSED_MARKER))stripMarker(cell,COLLAPSED_MARKER,true);if(getGroupChildren(row).length>0){row.classList.add(SECTION_TOGGLE_CLASS);initGroupHeader(row,!done,startCollapsed);}else if(row.classList.contains(SECTION_TOGGLE_CLASS)){var _findToggleHint;row.classList.remove(SECTION_TOGGLE_CLASS);row.removeAttribute('role');row.removeAttribute('tabindex');row.removeAttribute('aria-expanded');(_findToggleHint=findToggleHint(cell))===null||_findToggleHint===void 0||_findToggleHint.remove();}}return;}if(done==='child'||!done&&inGroup&&raw.startsWith(CHILD_MARKER)){row.classList.add(CHILD_CLASS);if(!done)row.setAttribute(ROW_ATTR,'child');return;}if(done==='sectionChild'||!done&&raw.startsWith(CHILD_MARKER)){row.classList.add(SECTION_CHILD_CLASS);if(!done)row.setAttribute(ROW_ATTR,'sectionChild');return;}inGroup=false;if(!done)row.setAttribute(ROW_ATTR,'plain');});// Re-apply each header's state to its children, so rows React re-rendered
// (which lose `hidden` and our classes) come back in the right state.
table.querySelectorAll("tbody tr."+BRANCH_CLASS+", tbody tr."+SECTION_TOGGLE_CLASS).forEach(header=>{setGroupOpen(header,header.getAttribute('aria-expanded')!=='false');});});}/**
 * PushAPIReference component for rendering API documentation with consistent styling.
 * Tables inside it support collapsible branch and section rows (see enhanceTables).
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */function PushAPIReference(_ref){let children=_ref.children,_ref$showRequiredNoti=_ref.showRequiredNotice,showRequiredNotice=_ref$showRequiredNoti===void 0?true:_ref$showRequiredNoti,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;const containerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);// Static assets are served from the site root at runtime, so resolve the caret
// through useBaseUrl instead of a source-relative path (styled-components CSS
// is not processed by the webpack css loader).
const caretUrl=(0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('/assets/website/header/newCaretDown.svg');// Cosmetics: run once after mount, then again (debounced to one frame) whenever
// React or a theme component changes the subtree, e.g. after hydration or HMR.
(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const root=containerRef.current;if(!root)return undefined;enhanceTables(root);let frame=0;const observer=new MutationObserver(()=>{if(frame)return;frame=window.requestAnimationFrame(()=>{frame=0;enhanceTables(root);});});observer.observe(root,{childList:true,subtree:true,characterData:true});return()=>{observer.disconnect();if(frame)window.cancelAnimationFrame(frame);};},[]);// Behavior: one delegated handler on the container for both branch (arrow) and
// section (::) headers. The header and its children are
// resolved from the live DOM at event time, so nothing is lost if rows re-render.
const handleClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event=>{const header=groupHeaderFromTarget(event.target,event.currentTarget);if(header)toggleGroup(header);},[]);const handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event=>{if(event.key!=='Enter'&&event.key!==' ')return;const header=groupHeaderFromTarget(event.target,event.currentTarget);if(!header)return;event.preventDefault();toggleGroup(header);},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ReferenceContainer,{ref:containerRef,className:className,$caretUrl:caretUrl,onClick:handleClick,onKeyDown:handleKeyDown,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{children:["These\xA0",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"Arguments"}),"\xA0are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})(["table tbody tr[hidden],table tbody tr.api-branch-collapsed,table tbody td[hidden]{display:none !important;}table tbody tr.api-branch-row > td,table tbody tr.api-section-collapsible > td{cursor:pointer;user-select:none;}table tbody tr.api-branch-row > td{background:var(--ifm-table-header-bg);color:var(--ifm-table-header-textcolor);font-weight:600;}table tbody tr > td > .api-toggle-hint{display:inline-flex;align-items:center;gap:4px;margin-left:10px;margin-top:-3px;margin-bottom:-3px;padding:2px 6px 2px 10px;border-radius:999px;background-color:#f0f0f0;color:#17181b;font-size:0.7rem;font-weight:600;line-height:1;letter-spacing:0.04em;text-transform:uppercase;vertical-align:middle;}table tbody tr > td > .api-toggle-hint::after{content:'';display:inline-block;flex:none;width:14px;height:14px;background-image:url('","');background-size:12px 12px;background-position:center;background-repeat:no-repeat;transform-origin:center center;transition:transform 0.3s ease;}table tbody tr[aria-expanded='true'] > td > .api-toggle-hint::after{transform:rotate(90deg);}table tbody tr.api-branch-row:focus-visible,table tbody tr.api-section-collapsible:focus-visible{outline:2px solid var(--ifm-color-primary);outline-offset:-2px;}table tbody tr.api-section-row > td{background:var(--ifm-table-header-bg);border-top:1px solid var(--ifm-table-section-bar);color:var(--ifm-table-header-textcolor);font-size:0.75rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;line-height:1.4;padding-top:6px;padding-bottom:6px;}table tbody tr.api-section-end > td{background:var(--ifm-table-section-bar);height:2px;padding:0;font-size:0;line-height:0;}table tbody tr.api-branch-child > td:first-child,table tbody tr.api-section-child > td:first-child{padding-left:1.5rem;white-space:nowrap;}"],props=>props.$caretUrl);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

/***/ }

}]);