"use strict";
(globalThis["webpackChunkpush_chain_website"] = globalThis["webpackChunkpush_chain_website"] || []).push([[39490],{

/***/ 404086
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_04_ui_kit_01_customizations_01_customizations_push_universal_wallet_provider_mdx_23d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-04-ui-kit-01-customizations-01-customizations-push-universal-wallet-provider-mdx-23d.json
const site_docs_chain_04_ui_kit_01_customizations_01_customizations_push_universal_wallet_provider_mdx_23d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/ui-kit/customizations/docs-chain-ui-kit-customizations-push-universal-wallet-provider","title":"Push Universal Wallet Provider","description":"{Push Universal Wallet Provider | Customizations | UI Kit | Push Chain Docs}","source":"@site/docs/chain/04-ui-kit/01-customizations/01-Customizations-Push-Universal-Wallet-Provider.mdx","sourceDirName":"chain/04-ui-kit/01-customizations","slug":"/chain/ui-kit/customizations/push-universal-wallet-provider","permalink":"/push-chain-website/pr-preview/pr-1218/docs/chain/ui-kit/customizations/push-universal-wallet-provider","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-ui-kit/01-customizations/01-Customizations-Push-Universal-Wallet-Provider.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-ui-kit-customizations-push-universal-wallet-provider","title":"Push Universal Wallet Provider","hide_title":false,"slug":"./push-universal-wallet-provider","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_ui_kit_customizations--push_universal_wallet_provider.png"},"sidebar":"pushChainSidebar","previous":{"title":"Customizations","permalink":"/push-chain-website/pr-preview/pr-1218/docs/chain/ui-kit/customizations"},"next":{"title":"Push Universal Account Button","permalink":"/push-chain-website/pr-preview/pr-1218/docs/chain/ui-kit/customizations/push-universal-account-button"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
var Tabs = __webpack_require__(77086);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
var TabItem = __webpack_require__(436026);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 1 modules
var Details = __webpack_require__(989746);
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
;// ./docs/chain/04-ui-kit/01-customizations/01-Customizations-Push-Universal-Wallet-Provider.mdx


const frontMatter = {
	id: 'docs-chain-ui-kit-customizations-push-universal-wallet-provider',
	title: 'Push Universal Wallet Provider',
	hide_title: false,
	slug: './push-universal-wallet-provider',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_ui_kit_customizations--push_universal_wallet_provider.png'
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Usage",
  "id": "usage",
  "level": 2
}, {
  "value": "Props",
  "id": "props",
  "level": 2
}, {
  "value": "<em><code>config</code></em> prop (required)",
  "id": "config-prop-required",
  "level": 3
}, {
  "value": "<code>app</code> prop",
  "id": "app-prop",
  "level": 3
}, {
  "value": "<code>themeOverrides</code> prop",
  "id": "themeoverrides-prop",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
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
        children: `Push Universal Wallet Provider | Customizations | UI Kit | Push Chain Docs`
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), " is the top-level context provider component that initializes wallet functionality across your app, handling:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Login Configuration"
        }), ": What logins and wallets you want to enable in your app (email, OAuth, wallets)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application Metadata"
        }), ": Allows you to display your application metadata such as logo, name, etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Theme Overrides"
        }), ": Customize or override default styles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      className: "codetabs",
      groupId: "quickstart-examples",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "npm",
        attributes: {
          className: "codetab npm"
        },
        default: true,
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "# UI Kit SDK\nnpm install @pushchain/ui-kit\n"
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
            children: "# UI Kit SDK\nyarn add @pushchain/ui-kit\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wrap your application with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), " to make wallet functionality available to all child components."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        metastring: "live",
        live: true,
        children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropGTagEvent=ui_kit_basic_wallet_provider\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  PushUI\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  return (\n    <PushUniversalWalletProvider\n      config={{ network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET }}\n      themeMode={PushUI.CONSTANTS.THEME.DARK}\n    >\n      <PushUniversalAccountButton />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Property"
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
                children: "Object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Used to configure the wallet connection, logins, and modals. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              }), " See ", (0,jsx_runtime.jsx)(_components.code, {
                children: "config"
              }), " prop for more info."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "app"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Used to display your application metadata such as logo, name, etc. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              }), " See ", (0,jsx_runtime.jsx)(_components.code, {
                children: "app"
              }), " prop for more info."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "themeMode"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushUI.CONSTANTS.THEME"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushUI.CONSTANTS.THEME.LIGHT"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Theme mode to apply, you can use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "LIGHT"
              }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "DARK"
              }), " option. ", (0,jsx_runtime.jsxs)(Details/* default */.A, {
                summary: "PushUI.CONSTANTS.THEME",
                className: "alert alert--minimal-api-table",
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.THEME.LIGHT"
                }), " ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.THEME.DARK"
                })]
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "themeOverrides"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Used to override default styles. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              }), " See ", (0,jsx_runtime.jsx)(_components.code, {
                children: "themeOverrides"
              }), " prop for more info."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "config-prop-required",
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "config"
        })
      }), " prop (required)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Customize the behavior of the wallet connection, logins, and modals by using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config"
      }), " prop."]
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Property"
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
                  children: "network"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushUI.CONSTANTS.PUSH_NETWORK"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Push Chain network to connect to. For example: ", (0,jsx_runtime.jsx)(_components.code, {
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
                children: "login"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Login method configuration. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              }), " See ", (0,jsx_runtime.jsx)(_components.code, {
                children: "config.login"
              }), " Options."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "modal"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Global defaults for login and connected modal instances. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              }), " See ", (0,jsx_runtime.jsx)(_components.code, {
                children: "config.modal"
              }), " Options."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uid"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "'default'"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique identifier for this provider. instance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "rpcUrl"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Public endpoints"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Custom JSON-RPC endpoint for supported chains."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "chainConfig"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Custom settings to configure the SDK instance. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "**"
              }), " See ", (0,jsx_runtime.jsx)(_components.code, {
                children: "config.chainConfig"
              }), " Options."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "`config.login` Options",
      className: "alert alert--minimal code",
      children: (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
        showRequiredNotice: false,
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Property"
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
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "email"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enables email sign in when ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "google"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enables google sign in when ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "phone"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enables phone sign in when ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "socials"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Object"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "**"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enables additional social login providers. ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "**"
                }), " See ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "config.login.socials"
                }), " Options."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wallet"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Object"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.em, {
                  children: "**"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["External wallet configuration. ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "**"
                }), " See ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "config.login.wallet"
                }), " Options."]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "appPreview"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "false"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Show app preview in modal"
              })]
            })]
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "`config.login.socials` Options",
      className: "alert alert--minimal code",
      children: (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
        showRequiredNotice: false,
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Property"
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
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "discord"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enables discord sign in when ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "github"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enables github sign in when ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "x"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enables twitter sign in when ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "bluesky"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Enables bluesky sign in when ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })]
              })]
            })]
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "`config.login.wallet` Options",
      className: "alert alert--minimal code",
      children: (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
        showRequiredNotice: false,
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Property"
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
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "enabled"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Allow external wallet connections"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "chains"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.CHAIN[]"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "All supported chains"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["You can choose to enable specific chains by passing them in an array. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.CHAIN"
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "excludedChains"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.CHAIN[]"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "[]"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["You can choose to disable specific chains by passing them in an array. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.CHAIN"
                })]
              })]
            })]
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "`config.modal` Options",
      className: "alert alert--minimal code",
      children: (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
        showRequiredNotice: false,
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Property"
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
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "loginLayout"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.LOGIN.LAYOUT"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.LOGIN.LAYOUT.SIMPLE"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Login modal layout type. ", (0,jsx_runtime.jsxs)(Details/* default */.A, {
                  summary: "PushUI.CONSTANTS.LOGIN.LAYOUT",
                  className: "alert alert--minimal-api-table",
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "PushUI.CONSTANTS.LOGIN.LAYOUT.SIMPLE"
                  }), " ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT"
                  })]
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "appPreview"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "false"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Show app preview in modal"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "bgImage"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "string"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "null"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Background image for the login modal"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "connectedLayout"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.CONNECTED.LAYOUT"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Connected modal layout type. ", (0,jsx_runtime.jsxs)(Details/* default */.A, {
                  summary: "PushUI.CONSTANTS.CONNECTED.LAYOUT",
                  className: "alert alert--minimal-api-table",
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "PushUI.CONSTANTS.CONNECTED.LAYOUT.FULL"
                  }), " ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER"
                  })]
                })]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "connectedInteraction"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.CONNECTED.INTERACTION"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "PushUI.CONSTANTS.CONNECTED.INTERACTION.INTERACTABLE"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Connected modal outside interaction type. ", (0,jsx_runtime.jsxs)(Details/* default */.A, {
                  summary: "PushUI.CONSTANTS.CONNECTED.INTERACTION",
                  className: "alert alert--minimal-api-table",
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "PushUI.CONSTANTS.CONNECTED.INTERACTION.INTERACTABLE"
                  }), " ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "PushUI.CONSTANTS.INTERACTION.BLUR"
                  })]
                })]
              })]
            })]
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "`config.chainConfig` Options",
      className: "alert alert--minimal code",
      children: (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
        showRequiredNotice: false,
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Property"
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
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "rpcUrls"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Partial<Record<CHAIN, string>>"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "{}"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Custom RPC URLs mapped by chain IDs."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "blockExplorers"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Partial<Record<CHAIN, string[]>"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "{[CHAIN.PUSH_TESTNET_DONUT]: ['https://donut.push.network']}"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Custom block explorer URLs mapped by chain IDs."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "printTraces"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "boolean"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "false"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "When true, console logs the internal trace logs for debugging requests to nodes"
              })]
            })]
          })]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Creating basic and advanced config",
      className: "alert alert--live-play alert-top-pad-20",
      children: (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
        className: "liveplaytab",
        groupId: "integrate-push-wallet",
        children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
          value: "basic",
          label: "Basic",
          default: true,
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-jsx",
              metastring: "live",
              live: true,
              children: "// customPropHighlightRegexStart=walletConfig\\s=\n// customPropHighlightRegexEnd=<PushUniversalWalletProvider\n// customPropGTagEvent=ui_kit_custom_network_config\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    uid: 'basic',\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // network to connect to\n  };\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      {/* Your app logic */}\n\n      {/* Push Universal Wallet Button to show the functionality */}\n      <PushUniversalAccountButton uid='basic' />\n    </PushUniversalWalletProvider>\n  );\n}\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
          value: "advanced",
          label: "Advanced",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-jsx",
              metastring: "live",
              live: true,
              children: "// customPropHighlightRegexStart=walletConfig\\s=\n// customPropHighlightRegexEnd=<PushUniversalWalletProvider\n// customPropGTagEvent=ui_kit_advanced_connectors_config\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // network to connect to\n    login: {\n      // login options to choose from\n      email: true,\n      google: false, // disable google login\n      wallet: {\n        enabled: true, // enable external wallet login\n        chains: [\n          PushUI.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n          PushUI.CONSTANTS.CHAIN.SOLANA_DEVNET,\n          PushUI.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,\n        ],\n      },\n      appPreview: true, // enable app preview to be shown inside login modal. Need to provide app metadata as well\n    },\n    modal: {\n      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SIMPLE, // login modal layout type\n      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.FULL, // connected modal layout type\n      appPreview: true, // enable app preview to be shown inside modal. Meed to provide app metadata as well\n    },\n    uid: 'your-uid', // unique identifier, only used if multiple wallet needs to be connected\n    rpcURL: '<INFURA_RPC_URL>', // custom rpc url to connect to\n    chainConfig: {}, // custom chain config to pass to push chain client if needed\n  };\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      {/* Your app logic */}\n\n      {/* Push Universal Wallet Button to show the functionality */}\n      <PushUniversalAccountButton uid='your-uid' />\n    </PushUniversalWalletProvider>\n  );\n}\n"
            })
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "app-prop",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "app"
      }), " prop"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Display your app metadata in login screens and preview panes by using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app"
      }), " prop. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Note"
      }), ": You will also need to enable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "appPreview"
      }), " in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "login"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "modal"
      }), " section of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config"
      }), " props to show them in different sections of the UI."]
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Property"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "logoUrl"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "URL to application logo or icon"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "title"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Application name or title"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "description"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Brief description of the application"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Creating your app metadata",
      className: "alert alert--live-play alert-top-pad-20",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          metastring: "live",
          live: true,
          children: "// customPropHighlightRegexStart=appMetadata\\s=\n// customPropHighlightRegexEnd=<PushUniversalWalletProvider\n// customPropGTagEvent=ui_kit_custom_app_metadata\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    uid: 'custom-app-metadata',\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET, // network to connect to\n    login: { appPreview: true },\n  };\n\n  // Define Your App Preview\n  const appMetadata = {\n    logoUrl: 'https://avatars.githubusercontent.com/u/64157541?v=4',\n    title: 'Test App Title',\n    description: 'Test App Description',\n  };\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig} app={appMetadata}>\n      {/* Your app logic */}\n\n      {/* Push Universal Wallet Button to show the functionality */}\n      <PushUniversalAccountButton uid='custom-app-metadata' />\n    </PushUniversalWalletProvider>\n  );\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "themeoverrides-prop",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "themeOverrides"
      }), " prop"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Override different theme settings by using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "themeOverrides"
      }), " prop. Check out all the supported theme variables in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/ui-kit/customizations/theme-variables/",
        children: "Theme Variables"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Default"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "ThemeOverrides"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{}"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Override the theme settings"
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Customizing your theme",
      className: "alert alert--live-play alert-top-pad-20",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-jsx",
          metastring: "live",
          live: true,
          children: "// customPropHighlightRegexStart=themeOverrides={{\n// customPropHighlightRegexEnd=}}\n// customPropGTagEvent=ui_kit_custom_theme_overrides\n// customPropMinimized='false'\n// Import necessary components from @pushchain/ui-kit\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  // Define Wallet Config\n  const walletConfig = {\n    uid: 'custom-theme',\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  return (\n    <PushUniversalWalletProvider\n      config={walletConfig}\n      themeOverrides={{\n        '--pw-core-bg-primary-color': '#DBE3FF',\n        '--pw-core-bg-secondary-color': '#EDEFFF',\n        '--pw-core-font-family': 'Inter',\n        '--pw-core-text-primary-color': '#1A1A1A',\n        '--pw-core-text-secondary-color': '#4B4B4B',\n      }}\n    >\n      <PushUniversalAccountButton uid='custom-theme' />\n    </PushUniversalWalletProvider>\n  );\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Customize the connect button with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/push-universal-account-button/",
          children: "Push Universal Account Button"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use wallet context hooks via ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/use-push-wallet-context/",
          children: "usePushWalletContext"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Access the Push Chain Client with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/customizations/use-push-chain-client/",
          children: "usePushChainClient"
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

/***/ 989746
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Details_Details)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__(15066);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBrokenLinks.js + 1 modules
var useBrokenLinks = __webpack_require__(163427);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(41422);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
var styles_module = __webpack_require__(633688);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){let{summary,children,...props}=_ref;(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);const isBrowser=(0,useIsBrowser/* default */.A)();const detailsRef=(0,react.useRef)(null);const{collapsed,setCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open});// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const[open,setOpen]=(0,react.useState)(props.open);const summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!==null&&summary!==void 0?summary:'Details'});return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",{...props,ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,dist_clsx/* default */.A)(styles_module/* default */.A.details,isBrowser&&styles_module/* default */.A.isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.collapsibleContent,children:children})})]}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
var Details_styles_module = __webpack_require__(318480);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses='alert alert--info';function Details_Details(_ref){let{...props}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,{...props,className:(0,clsx/* default */.A)(InfimaClasses,Details_styles_module/* default */.A.details,props.className)});}

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
 */function TabItemPanel(_ref){let{children,className,hidden}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{role:"tabpanel",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.tabItem,className),hidden,children:children});}function TabItem(_ref2){let{children,className,value}=_ref2;const{selectedValue,lazy}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_2__/* .useTabs */ .uc)();const isSelected=value===selectedValue;// TODO Docusaurus v4: use <Activity> ?
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
 */function TabList(_ref){let{className}=_ref;const{selectedValue,selectValue,tabValues,block}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useTabs */ .uc)();const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useScrollPositionBlocker */ .a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li",{// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:ref=>{tabRefs.push(ref);},onKeyDown:handleKeydown,onClick:handleTabChange,...attributes,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('tabs__item',_styles_module_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value},value);})});}function TabContent(_ref3){let{children}=_ref3;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"margin-top--md",children:children});}function TabsContainer(_ref4){let{className,children}=_ref4;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_2__/* .ThemeClassNames */ .G.tabs.container,// former name kept for backward compatibility
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
function isTabItemWithValueProp(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}const elements=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).flatMap(child=>{// Historical case, not sure when it happens, do we really need this?
if(!child){return[];}if(/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&isTabItemWithValueProp(child)){return[child];}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
const badChildTypeName=// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name;throw new Error(`Docusaurus error: Bad <Tabs> child <${badChildTypeName}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.
If you do not want to pass on a "value" prop to the direct children of <Tabs>, you can also pass an explicit <Tabs values={...}> prop.`);});return elements.map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,_index__WEBPACK_IMPORTED_MODULE_5__/* .duplicates */ .XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error(`Docusaurus error: Duplicate values "${dup.map(a=>`'${a.value}'`).join(', ')}" found in <Tabs>. Every value needs to be unique.`);}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map(a=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return`docusaurus.tab.${groupId}`;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_1__/* .useHistory */ .W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useQueryStringValue */ .aZ)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace({...history.location,search:searchParams.toString()});},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,_index__WEBPACK_IMPORTED_MODULE_4__/* .useStorageSlot */ .Dv)(key);const setValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabsContextValue(props){var _props$lazy,_props$block;const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,_docusaurus_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error(`Can't select invalid tab value=${newValue}`);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues,lazy:(_props$lazy=props.lazy)!==null&&_props$lazy!==void 0?_props$lazy:false,block:(_props$block=props.block)!==null&&_props$block!==void 0?_props$block:false};}const TabsContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function useTabs(){const contextValue=react__WEBPACK_IMPORTED_MODULE_0__.useContext(TabsContext);if(!contextValue){throw new Error('useTabsContext() must be used within a Tabs component');}return contextValue;}function TabsProvider(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(TabsContext.Provider,{value:props.value,children:props.children});}

/***/ },

/***/ 303547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PushAPIReference)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(309751);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
/**
 * PushAPIReference component for rendering API documentation with consistent styling
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */function PushAPIReference(_ref){let{children,showRequiredNotice=true,className=''}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ReferenceContainer,{className:className,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:["These",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"Arguments"}),"are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})([""]);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

/***/ },

/***/ 318480
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"details":"details_b_Ee"});
    if(true) {
      (function() {
        var localsJsonString = "{\"details\":\"details_b_Ee\"}";
        // 1778153906914
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
        // 1778153906913
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
        // 1778153906909
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

/***/ 633688
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
    if(true) {
      (function() {
        var localsJsonString = "{\"details\":\"details_lb9f\",\"isBrowser\":\"isBrowser_bmU9\",\"collapsibleContent\":\"collapsibleContent_i85q\"}";
        // 1778153914989
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