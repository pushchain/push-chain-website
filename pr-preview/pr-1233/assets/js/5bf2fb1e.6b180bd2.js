(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[38528],{

/***/ 433198
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_06_send_universal_transaction_mdx_5bf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-06-send-universal-transaction-mdx-5bf.json
const site_docs_chain_03_build_06_send_universal_transaction_mdx_5bf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-send-universal-transaction","title":"Send Universal Transaction","description":"Send Universal Transaction | Build | Push Chain Docs","source":"@site/docs/chain/03-build/06-Send-Universal-Transaction.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/send-universal-transaction","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/build/send-universal-transaction","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/06-Send-Universal-Transaction.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"docs-chain-build-send-universal-transaction","title":"Send Universal Transaction","hide_title":false,"slug":"./send-universal-transaction","displayed_sidebar":"pushChainSidebar","sidebar_position":6,"image":"/assets/docs/previews/docs_chain_build--send_universal_transaction.png"},"sidebar":"pushChainSidebar","previous":{"title":"Understanding Universal Transactions","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/build/understanding-universal-transactions"},"next":{"title":"Universal Transaction Scenarios","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/build/universal-transaction-scenarios"}}');
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
// EXTERNAL MODULE: ./src/components/NodeJSVirtualIDE/NodeJSVirtualIDE.tsx
var NodeJSVirtualIDE = __webpack_require__(891517);
// EXTERNAL MODULE: ./src/components/ConstantsDropdown/ConstantsDropdown.tsx
var ConstantsDropdown = __webpack_require__(510103);
;// ./docs/chain/03-build/06-Send-Universal-Transaction.mdx


const frontMatter = {
	id: 'docs-chain-build-send-universal-transaction',
	title: 'Send Universal Transaction',
	hide_title: false,
	slug: './send-universal-transaction',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 6,
	image: '/assets/docs/previews/docs_chain_build--send_universal_transaction.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/








const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "How Routing Works",
  "id": "how-routing-works",
  "level": 3
}, {
  "value": "Send a Universal Transaction",
  "id": "send-a-universal-transaction",
  "level": 2
}, {
  "value": "Send Transaction with Contract Interaction",
  "id": "send-transaction-with-contract-interaction",
  "level": 2
}, {
  "value": "Send Transaction with Asset Movement",
  "id": "send-transaction-with-asset-movement",
  "level": 2
}, {
  "value": "Moving PC20 Tokens",
  "id": "moving-pc20-tokens",
  "level": 3
}, {
  "value": "Route Coverage",
  "id": "route-coverage",
  "level": 4
}, {
  "value": "Behavior Worth Knowing",
  "id": "behavior-worth-knowing",
  "level": 4
}, {
  "value": "Send Batch Transactions (Multicall)",
  "id": "send-batch-transactions-multicall",
  "level": 2
}, {
  "value": "Batch Atomicity for Native Push Chain Wallets",
  "id": "batch-atomicity-for-native-push-chain-wallets",
  "level": 3
}, {
  "value": "Live Playground",
  "id": "live-playground",
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
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
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
        children: "Send Universal Transaction | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Universal transactions let you execute transfers, contract calls, asset movement, and batched transactions across ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "supported external chains"
      }), " through one unified interface."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You do not need separate transactions, wrapping, manual bridging, or extra tooling."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To understand this concept in detail, please see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/understanding-universal-transactions/",
        children: "Understanding Universal Transactions"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-routing-works",
      children: "How Routing Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "sendTransaction"
      }), " automatically selects the execution route based on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "to"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "from"
      }), " fields."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Route"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input Shape"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Executes On"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "to: \"0x...\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default route for Push Chain targets."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "to: { address, chain }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes on the specified external chain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "to: \"0x...\""
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "from: { chain }"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses your CEA on the specified external chain as the execution origin."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "send-a-universal-transaction",
      children: "Send a Universal Transaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pushChainClient.universal.sendTransaction({tx}): Promise<TxResponse>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const txResponse = await pushChainClient.universal.sendTransaction({\n  to: '0xa54E96d3fB93BD9f6cCEf87c2170aEdB1D47E1cF',\n  value: PushChain.utils.helpers.parseUnits('0.1', 18), // 0.1 PC in uPC\n  // value: BigInt('100000000000000000') is equivalent here\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "tx.to"
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "{ address: string; chain: CHAIN }"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Defines the execution target. Passing a plain address triggers Push Chain execution. ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "Passing ", (0,jsx_runtime.jsx)(_components.code, {
                children: "{ address, chain }"
              }), " targets an external chain."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.from"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain: PushChain.CONSTANTS.CHAIN }"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Optional. When set to an external chain, execution uses the Chain Executor Account (CEA) for that chain as the transaction origin.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "This is primarily used for external origin or CEA-based execution flows. ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.value"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Native value to send, expressed in the smallest unit of the execution context.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "On Push Chain this is uPC (the smallest unit, like wei in ETH). ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "On external execution routes, this maps to the native asset amount of that route."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.data"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Array<{ to: string; value: bigint; data: string }>"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Encoded calldata for a single call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              }), " or batched multicall ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Array<{ to, value, data }>"
              }), ". ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "encodeTxData"
              }), " to produce the correct bytes for EVM (ABI) or Solana (Anchor IDL) targets."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.funds"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ amount: BigInt; token?: MoveableToken | { chain: CHAIN; address: string } }"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Moves supported assets as part of the transaction flow.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "Depending on the route, assets may be moved into Push Chain or between Push Chain and a supported external chain.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "If ", (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.data"
              }), " is provided, asset movement and execution happen atomically.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                children: "token"
              }), " accepts either a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "MoveableToken"
                })
              }), " (a supported asset from the static table, e.g. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT"
              }), ") or a ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "PC20 reference"
              }), " — ", (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, address }"
              }), ", resolved against the on-chain registry. See ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#moving-pc20-tokens",
                children: "Moving PC20 Tokens"
              }), ". ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "MOVEABLE_TOKEN"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.progressHook"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "(progress: ProgressHookType) => void"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "A callback function to receive progress updates during transaction lifecycle, especially useful for tracking cross-chain transactions."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)("h2", {
      className: "anchor",
      id: "progress-hook-type-and-response",
      style: {
        height: '0px',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      },
      children: "Progress Hook Type and Response"
    }), "\n", (0,jsx_runtime.jsxs)(Details/* default */.A, {
      summary: "ProgressHook Type and Response",
      className: "alert alert--minimal code",
      children: [(0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Field"
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
                children: "progress"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The progress of the transaction."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "progress.id"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique identifier for the progress event."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "progress.title"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Brief title of the progress event."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "progress.message"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Detailed message describing the event."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "progress.level"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "INFO"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "SUCCESS"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ERROR"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Severity level of the event."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "progress.response"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "object"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Additional data object for the event, or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "null"
              }), " if not applicable."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "progress.timestamp"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["ISO-8601 timestamp when the event occurred (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "2025-06-26T15:04:05.000Z"
              }), ")."]
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Route 1 → Execute on Push Chain"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "ID"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Title"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Message"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Level"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Response"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-101"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Origin Chain Detected"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Origin chain: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " — Address: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<address>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, address }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-102-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Estimating Gas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Estimating and fetching gas limit, gas price for TX"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'estimating-gas' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-103-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resolving Universal Execution Account"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resolving UEA – computing address, checking deployment and balance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'resolving-uea' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-103-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Universal Execution Account Resolved"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["UEA: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<address>"
              }), ", Deployed: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<true/false>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ uea, deployed }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-103-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Calculating Prepaid Deposit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Calculating required prepaid deposit (one-time >$1; refilled only when gas nears exhaustion)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "null"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-103-03-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Adjusting Prepaid Deposit to be >$1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Required deposit below $1 minimum — padding to $1 floor"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ gasRequired, extraDepositPC, totalDepositUSD, chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-103-03-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Prepaid Deposit in range (>=$1 and <$10)"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Required deposit ", (0,jsx_runtime.jsx)(_components.code, {
                children: "${x}"
              }), " within $1–$10 range — depositing as required"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ gasRequired, extraDepositPC, totalDepositUSD, chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-103-03-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Prepaid Deposit Exceeds $10 Cap, splitting Gas and Funds"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Required deposit exceeds $10 cap — splitting: $10 gas leg + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "${overflow}"
              }), " UPC overflow bridged as funds"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ gasRequired, extraDepositPC, totalDepositUSD, chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-103-03-04"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Prepaid Deposit Estimated"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Estimated prepaid deposit: $", (0,jsx_runtime.jsx)(_components.code, {
                children: "<totalDepositUSD>"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "<totalPCDeposit>"
              }), " UPC)"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ totalPCDeposit, totalDepositUSD, chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-104-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting Transaction"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting user transaction on origin chain"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'awaiting-transaction' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-104-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting Signature"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting user signature for universal payload"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'awaiting-signature' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-104-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification Success"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification completed via Transaction or Signature"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'verified' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-104-04"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification Declined / Signature Failed"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Verification declined by user | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<error>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error, isUserDecline }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-105-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gas Funding In Progress"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Gas funding tx sent: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ txHash, originChainTx }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-105-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gas Funding Confirmed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gas funding confirmed on origin chain"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'gas-funded', txHash }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-106-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Preparing Funds Transfer"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Preparing to move ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<amount> <symbol>"
              }), " from origin chain"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ amount, symbol }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-106-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Funds Lock Submitted"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Locking ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<amount> <symbol>"
              }), " — Tx: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ txHash, amount, symbol, originChainTx }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-106-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting Confirmations"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Waiting for ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<required>"
              }), " confirmations"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ current: 0, required }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-106-03-01"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Confirmation ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<current>/<required>"
              }), " Received"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<current>/<required>"
              }), " confirmations received"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ current, required }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-106-03-02"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Confirmation ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<current>/<required>"
              }), " Received"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<current>/<required>"
              }), " confirmations received"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ current, required }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-106-04"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Funds Confirmed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Origin chain lock confirmed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'funds-confirmed', txHash }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-106-05"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Syncing with Push Chain"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Waiting for transaction to appear on Push Chain"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'syncing-push-chain' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-106-06"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Funds Credited on Push Chain"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Funds credited: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<amount> <symbol>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ amount, symbol }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-107"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Broadcasting to Push Chain"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sending tx to Push Chain..."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'broadcasting', destination: 'push-chain' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-199-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Push Chain Tx Success"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Tx confirmed: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ txHash, response, receipt }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-199-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Push Chain Tx Failed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "<error message>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error, decodedError? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-199-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Syncing State with Push Chain Timeout"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Timed out waiting for relay to Push Chain"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error: 'relay timeout', chain, elapsedMs }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-199-99"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Intermediate Push Chain Tx Completed"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Intermediate Push Chain tx confirmed: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              }), ", progressing to next phase"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ txHash }"
              })
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Route 2 → Execute on External Chain"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "ID"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Title"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Message"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Level"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Response"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-201"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Detected"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["External chain: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " — Target address: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<address>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, address }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-202-01"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Estimating ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Chain Gas"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Querying Push Chain gas and UGPC relay fee"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'estimating-gas', chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-202-02"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Chain Gas Estimated"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Push gas: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " UPC + UGPC relay: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " UPC = ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<total>"
              }), " UPC"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ gasEstimate, relayFee, totalCost, currency }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-203-01"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Resolving ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Execution Account"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Resolving UEA on Push Chain and CEA on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'resolving-cea', chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-203-02"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Execution Account Resolved"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["UEA: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<ueaAddr>"
              }), ". CEA: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<ceaAddr>"
              }), " on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), ". Deployed: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<true/false>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ uea, cea, chain, deployed }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-203-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pre-flight Balance Check"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["UEA balance: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC; required: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC; ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<sufficient/INSUFFICIENT>"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "<pathTag>"
              }), ")"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO when sufficient / WARNING when insufficient"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ required, available, sufficient, ueaAddress, pathTag, kind, burnToken, segmentIndex }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-203-04"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Insufficient UEA Balance"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Shortfall ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<pathTag>"
              }), ". Bridge >=", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC to UEA ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<ueaAddr>"
              }), " before retrying."]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["WARNING when ", (0,jsx_runtime.jsx)(_components.code, {
                children: "enforceGasCheck"
              }), " is false / ERROR when ", (0,jsx_runtime.jsx)(_components.code, {
                children: "enforceGasCheck"
              }), " is true."]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ required, available, shortfall, ueaAddress, pathTag, kind, burnToken, segmentIndex }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-203-05"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SVM Native-Value Warn Threshold"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Buffered pool quote ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC exceeds warn threshold ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC for ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<gasToken>"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "<pathTag>"
              }), "). Pool may be skewed."]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ quoted, threshold, gasToken, pathTag }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-204-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting Signature"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting user signature for universal payload"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'awaiting-signature' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-204-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Signature Received"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Universal payload signed — preparing broadcast"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'signed' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-204-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification Success"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification completed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'verified' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-204-04"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification Declined / Signature Failed"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Verification declined by user | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<error>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error, isUserDecline }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-207"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Broadcasting from Push Chain → ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sending tx to Push Chain..."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-209-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting Push Chain Relay"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Waiting for UGPC to relay execution to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, pushTxHash? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-209-02"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Syncing State with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Polling ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " for CEA execution"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, elapsedMs, pushTxHash? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-299-01"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Tx Success"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["CEA executed on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " - tx: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ txHash, ...details }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-299-02"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Tx Failed"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "<errorMessage>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error, chain, pushTxHash?, txHash? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-299-03"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Syncing State with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Timeout"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Timed out waiting for UGPC relay to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error: 'relay timeout', chain, elapsedMs, pushTxHash? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-299-99"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Intermediate ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Tx Completed"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Intermediate ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " tx confirmed: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              }), ", progressing to next phase"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, txHash }"
              })
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Route 3 → Execute on Push Chain from CEA"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "ID"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Title"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Message"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Level"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Response"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-301"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), "'s Executor Account Detected"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Source chain: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " — CEA: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<ceaAddress>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, address }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-302-01"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Estimating ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Gas"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Querying Push Chain gas and UGPC relay fee"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'estimating-gas', chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-302-02"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Gas Estimated"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Push gas: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " UPC + UGPC relay: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " UPC = ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<total>"
              }), " UPC"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ gasEstimate, relayFee, totalCost, currency }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-303-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resolving Execution Accounts on Chains"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Resolving UEA on Push Chain and CEA on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'resolving-cea-uea', chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-303-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Execution Accounts Resolved"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["UEA: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<ueaAddr>"
              }), ". CEA: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<ceaAddr>"
              }), " on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), ". Deployed: true"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ uea, cea, chain, deployed: true }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-303-03-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Adjusting Prepaid Deposit to be >$1"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Required deposit below $1 minimum — padding to $1 floor"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ gasRequired, extraDepositPC, totalDepositUSD, chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-303-03-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Prepaid Deposit in range (>=$1 and <$10)"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Required deposit ", (0,jsx_runtime.jsx)(_components.code, {
                children: "${x}"
              }), " within $1–$10 range — depositing as required"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ gasRequired, extraDepositPC, totalDepositUSD, chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-303-03-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Prepaid Deposit Exceeds $10 Cap, splitting Gas and Funds"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Required deposit exceeds $10 cap — splitting: $10 gas leg + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "${overflow}"
              }), " UPC overflow bridged as funds"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ gasRequired, extraDepositPC, totalDepositUSD, chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-303-04"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Checking Balance Requirements"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["UEA balance: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC; required: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC; ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<sufficient/INSUFFICIENT>"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "<pathTag>"
              }), ")"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["INFO when sufficient / WARNING when insufficient based on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "enforceGasCheck"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ required, available, sufficient, ueaAddress, pathTag, kind, burnToken, segmentIndex, enforceGasCheck, warningOnly, shortfall }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-303-05"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Insufficient UEA Balance"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Shortfall ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<pathTag>"
              }), ". Bridge >=", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC to UEA ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<ueaAddr>"
              }), " before retrying."]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["ERROR (only when ", (0,jsx_runtime.jsx)(_components.code, {
                children: "enforceGasCheck === true"
              }), ")"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ required, available, shortfall, ueaAddress, pathTag, kind, burnToken, segmentIndex }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-303-06"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SVM Native-Value Warn Threshold"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Buffered pool quote ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC exceeds warn threshold ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC for ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<gasToken>"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "<pathTag>"
              }), "). Pool may be skewed."]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ quoted, threshold, gasToken, pathTag }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-304-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting Signature"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Awaiting user signature for universal payload"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'awaiting-signature' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-304-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Signature Received"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Universal payload signed — preparing broadcast"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'signed' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-304-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification Success"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification completed"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ stage: 'verified' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-304-04"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Verification Declined / Signature Failed"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Verification declined by user | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<error>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error, isUserDecline }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-307"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Broadcasting from Push Chain → ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sending tx from Push Chain..."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-309-01"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Awaiting ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Relay"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Waiting for UGPC to relay to CEA on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, pushTxHash? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-309-02"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Syncing State with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Polling ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " for CEA execution"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, elapsedMs, pushTxHash? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-309-03"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Tx Confirmed"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["CEA executed on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), ": ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              }), " — return inbound initiated"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, txHash }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-310-01"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " → Push Chain Inbound Tx Submitted"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["CEA initiated return — waiting for Push Chain inbound from ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-310-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Syncing State with Push Chain for Inbound Tx"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Polling Push Chain for inbound from ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, elapsedMs }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-399-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Push Chain Inbound Tx Success"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Inbound from ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " confirmed · Push tx: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, txHash, receipt }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-399-02"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Tx Failed / Push Chain Tx Failed / Push Chain Inbound Tx Failed"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "<errorMessage>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error, phase, chain, pushTxHash?, txHash? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-399-03"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " Timeout / Push Chain Timeout / Push Chain Inbound Timeout"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Timed out waiting for..."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ error, phase, chain, elapsedMs, pushTxHash? }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-399-99"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Intermediate ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " to Push Tx Completed"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Intermediate ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chain>"
              }), " to Push tx confirmed: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<txHash>"
              }), ", progressing to next phase"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain, txHash }"
              })
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Executing multiple transactions (Send Multichain Transations)"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "ID"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Title"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Message"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Level"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Response"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-001"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multichain Transactions Initiated"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<hopCount>"
              }), "-hop transaction — ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<chains>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ hopCount, chains }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-002-01"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Starting Intermediate Transaction #", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), "/", (0,jsx_runtime.jsx)(_components.code, {
                children: "<total>"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Starting tx ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<total>"
              }), ": ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<fromChain>"
              }), " → ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<toChain>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ n, total, fromChain, toChain }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-002-99-99"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Intermediate Transaction #", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), "/", (0,jsx_runtime.jsx)(_components.code, {
                children: "<total>"
              }), " Complete"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Tx ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<total>"
              }), " confirmed — proceeding to tx ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n+1>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ n, total }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-003-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pre-flight Balance Check (cascade)"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["UEA balance: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC; required: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC; ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<sufficient/INSUFFICIENT>"
              }), " (CASCADE)"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO when sufficient / WARNING when insufficient"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ required, available, sufficient, ueaAddress, pathTag: 'CASCADE', kind, burnToken, segmentIndex }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-003-04"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Insufficient UEA Balance (cascade)"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Shortfall ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC on CASCADE (segment ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<segmentIndex>"
              }), "). Bridge >=", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC to UEA ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<ueaAddr>"
              }), " before retrying."]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["WARNING when ", (0,jsx_runtime.jsx)(_components.code, {
                children: "enforceGasCheck"
              }), " is false / ERROR when ", (0,jsx_runtime.jsx)(_components.code, {
                children: "enforceGasCheck"
              }), " is true."]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ required, available, shortfall, ueaAddress, pathTag: 'CASCADE', kind, burnToken, segmentIndex }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-003-05"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SVM Native-Value Warn Threshold (cascade)"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Buffered pool quote ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC exceeds warn threshold ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<n>"
              }), " PC (CASCADE)"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "INFO"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ quoted, threshold, gasToken, pathTag: 'CASCADE' }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-999-01"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "All Multichain Transactions Successful"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<hopCount>"
              }), "-hop transaction confirmed across all chains"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SUCCESS"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ hopCount }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-999-02"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multichain Transactions Failed"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Cascade failed at hop ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<failedAt>"
              }), " of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<total>"
              }), ": ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<error>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ failedAt, total, error }"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SEND-TX-999-03"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multichain Transactions Timeout"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Cascade timed out at hop ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<failedAt>"
              }), " of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "<total>"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERROR"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ failedAt, total, error: 'cascade timeout' }"
              })
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Advanced Arguments",
      className: "alert alert--minimal code",
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
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.gasLimit"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SDK Estimated"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional override for transaction gas limit. If omitted, the SDK estimates it."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.maxFeePerGas"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SDK Estimated"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional override for max fee per gas. If omitted, the SDK estimates it when applicable."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.maxPriorityFeePerGas"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "SDK Estimated"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional override for priority fee. If omitted, the SDK estimates it when applicable."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.options.enforceGasCheck"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Controls how the SDK reacts when the pre-flight gas / balance check detects a shortfall on the UEA (native PC) or, for ", (0,jsx_runtime.jsx)(_components.code, {
                children: "funds"
              }), " flows, the bridged PRC-20 balance.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              }), " will still emit a ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WARNING"
              }), "-level progress event and proceed. The transaction may still succeed (UEA gas is auto-refilled via fee locking; PRC-20 may settle on a follow-up leg).", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              }), " will emit an ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ERROR"
              }), "-level progress event and throw ", (0,jsx_runtime.jsx)(_components.code, {
                children: "InsufficientUEABalanceError"
              }), " before broadcast, leaving on-chain state untouched. Use this when you want pre-flight guarantees over best-effort retries."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.payGasWith"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ token?: PushChain.CONSTANTS.PAYABLE.TOKEN; slippageBps?: number; minAmountOut?: bigint | string }"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pay universal transaction fees using a supported token (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT"
              }), ").", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)("br", {}), "Optional ", (0,jsx_runtime.jsx)(_components.code, {
                children: "slippageBps"
              }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "100"
              }), " = 1%) and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "minAmountOut"
              }), " (wei) let you control on-chain swap execution. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "PAYABLE_TOKEN"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.deadline"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional execution deadline for the transaction."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)("h2", {
      className: "anchor",
      id: "returns-tx-response",
      style: {
        height: '0px',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      },
      children: "Returns TxResponse"
    }), "\n", (0,jsx_runtime.jsxs)(Details/* default */.A, {
      summary: "Returns `TxResponse` <object>",
      className: "alert alert--fn-args",
      children: [(0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  hash: '0xe2302bd21ab0902f37cb605d491ce5f95ee35ce4083405dddf3657d782acae35',\n  origin: 'eip155:42101:0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',\n  blockNumber: 0n,\n  blockHash: '',\n  transactionIndex: 0,\n  chainId: '42101',\n  from: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',\n  to: '0x35B84d6848D16415177c64D64504663b998A6ab4',\n  nonce: 341,\n  data: '0x',\n  value: 1000n,\n  gasLimit: 21000n,\n  gasPrice: 1325000000n,\n  maxFeePerGas: 1325000000n,\n  maxPriorityFeePerGas: 125000000n,\n  accessList: [],\n  wait: [Function: wait],\n  type: '2',\n  typeVerbose: 'eip1559',\n  atomic: true,\n  signature: {\n    r: '0x556566ba1304bf8e93025fc82daff32eb24b7ee9804a76d0baa0098dfa7237de',\n    s: '0x4495d7811d3dcb1beac16f29261903b542b0b65f51aa5942f65dbaf67e735724',\n    v: 1,\n    yParity: 1\n  },\n  raw: {\n    from: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',\n    to: '0x35B84d6848D16415177c64D64504663b998A6ab4',\n    nonce: 341,\n    data: '0x',\n    value: 1000n\n  }\n}\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "hash"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique transaction hash identifier"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "origin"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Origin identifier in format \"eip155:chainId", ":address", "\" or \"solana:chainId", ":address", "\""]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockNumber"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Block number where transaction was included"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockHash"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hash of the block containing this transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "transactionIndex"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Position/index of transaction within the block"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "chainId"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Chain identifier (e.g. Push Chain = ", (0,jsx_runtime.jsx)(_components.code, {
                children: "42101"
              }), ")"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "from"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "UEA (Universal Executor Account) that executed the transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "to"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Target address the UEA executed against"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "nonce"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Derived nonce for the UEA"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "data"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Perceived calldata (transaction input data)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "value"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Amount of native tokens transferred (in wei)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "gasLimit"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Maximum gas units allocated for transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "gasPrice"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gas price for legacy transactions (in wei)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "maxFeePerGas"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Maximum fee per gas for EIP-1559 transactions"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "maxPriorityFeePerGas"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Maximum priority fee (tip) per gas for EIP-1559"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "accessList"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "array"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "EIP-2930 access list for optimized storage access"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "type"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Transaction type identifier"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "typeVerbose"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Human-readable transaction type"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "atomic"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Whether execution was all-or-nothing. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              }), " for single transactions and atomic batches; ", (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              }), " only when a native-origin multicall fell back to sequential per-call execution"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "signature"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ECDSA signature components"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "signature.r"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "R component of ECDSA signature"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "signature.s"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "S component of ECDSA signature"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "signature.v"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Recovery ID (legacy format)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "signature.yParity"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Y-parity for EIP-1559 (0 or 1)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Original on-chain transaction data"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.from"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual from address that went on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.to"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual to address that went on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.nonce"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual raw nonce used on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.data"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual raw data that went on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.value"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual derived value that went on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "wait"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "function"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Async function that returns a Promise resolving to UniversalTxReceipt"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(Details/* default */.A, {
      summary: "Getting `txReceipt` <object> from `txResponse` <object>",
      children: [(0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Calling the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "wait()"
        }), " function from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "txResponse"
        }), " object will give you a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Promise<UniversalTxReceipt>"
        }), " once the transaction is confirmed on-chain."]
      }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "const txReceipt = await txResponse.wait(1); // number of blocks confirmations to wait for\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  hash: '0xb52706db4116dd6bbea87be5142ac2c69b17fe8ccf8e2b88ac176adb30b90dd6',\n  blockNumber: 3413247n,\n  blockHash: '0x5a7b6e2716f7d4450b6ca08aebfe74cea3d876367a8afe6f603196ba8c346a2d',\n  transactionIndex: 0,\n  from: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',\n  to: '0x35B84d6848D16415177c64D64504663b998A6ab4',\n  contractAddress: null,\n  gasPrice: 1325000000n,\n  gasUsed: 21000n,\n  cumulativeGasUsed: 21000n,\n  logs: [],\n  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: 1,\n  raw: {\n    from: '0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9',\n    to: '0x35B84d6848D16415177c64D64504663b998A6ab4',\n    nonce: 342,\n    data: '0x',\n    value: 1000n\n  }\n}\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "hash"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Transaction hash (same as in transaction response)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockNumber"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Block number where transaction was confirmed"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockHash"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hash of the block containing the transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "transactionIndex"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Position/index of transaction within the block"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "from"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Executor account address (UEA on Push Chain)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "to"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual intended target address of the transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "contractAddress"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "null"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Address of deployed contract (null for regular transfers)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "gasPrice"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gas price used for the transaction (in wei)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "gasUsed"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual gas consumed by the transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cumulativeGasUsed"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total gas used by all transactions in the block up to this one"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "logs"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "array"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Array of log objects emitted by the transaction"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "logsBloom"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Bloom filter for efficient log searching"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "status"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Transaction status (1 = success, 0 = failure)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Raw on-chain transaction data"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.from"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual from address that executed on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.to"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual to address that was called on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.nonce"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual nonce used on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.data"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual calldata sent on chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "raw.value"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Actual value transferred on chain"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "send-transaction-with-contract-interaction",
      children: "Send Transaction with Contract Interaction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When calling a smart contract method via sendTransaction, supply the ABI-encoded function call as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hex string in the data field"
      }), ". You can choose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ethers"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "viem"
      }), " or any of your favorite libraries to encode the function data. Or, use our utility function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushChain.utils.helpers.encodeTxData"
      }), " to encode the function data."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Define the ABI for the ERC20 transfer function\nconst erc20Abi = [\n  'function transfer(address to, uint256 amount) returns (bool)',\n];\n\n// Generate the encoded function data using viem\nconst data = PushChain.utils.helpers.encodeTxData({\n  abi: erc20Abi,\n  functionName: 'transfer',\n  // Transfer 10 tokens, converted to 18 decimal places\n  args: ['0xRecipientAddress', PushChain.utils.helpers.parseUnits('10', 18)],\n});\n\n// Send the transaction using Push Chain SDK\nconst txResponse = await pushChainClient.universal.sendTransaction({\n  to: '0xTokenContractAddress', // The smart contract address on Push Chain\n  value: BigInt('0'), // No $PC being sent, just contract interaction\n  data: data, // The encoded function call\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "send-transaction-with-asset-movement",
      children: "Send Transaction with Asset Movement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can move supported assets (e.g., USDT, USDC, or other tokens) from your origin chain to Push Chain and execute your call in a single transaction."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use the funds field to specify the amount of assets to move, and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "optionally"
      }), " the data field to specify the function call to execute on Push Chain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": funds transactions are only supported from external origin chains.", (0,jsx_runtime.jsx)("br", {}), "\nNative Push Chain users should call ERC-20 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transfer"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transferFrom"
        }), " directly (instead of using funds)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Send 1 USDT to the recipient address\nconst txResponse = await pushChainClient.universal.sendTransaction({\n  to: '0xRecipientAddress', // The recipient address on Push Chain\n  data: data, // pass this if you want to execute a function on Push Chain as well\n  funds: {\n    amount: PushChain.utils.helpers.parseUnits('1', 6), // 1 USDT\n    token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT, // MoveableToken accessor from client\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "moving-pc20-tokens",
      children: "Moving PC20 Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "funds.token"
      }), " also accepts a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PC20 reference"
      }), " — a token identified by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{ chain, address }"
      }), " alone,\nresolved against UniversalCore's on-chain registry instead of the SDK's static token table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const txResponse = await pushChainClient.universal.sendTransaction({\n  to: '0xRecipientAddress',\n  funds: {\n    amount: PushChain.utils.helpers.parseUnits('1', 6),\n    token: {\n      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA, // where the token IS\n      address: '0x81E05001A1f3fB574E18c1B0b2596163c68144ae',\n    },\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The same shape exports a Push-native PC20 outward — name the Push chain in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "funds.token.chain"
      }), " and\nthe destination in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "to.chain"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "warning",
      children: [(0,jsx_runtime.jsxs)(_components.mdxAdmonitionTitle, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chain"
        }), " is where the token is, never where it is going"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "funds.token.chain"
        }), " is the chain the tokens are sitting on right now — the external chain for an\ninbound wrapper, the Push chain for an export. The destination is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "to.chain"
        }), ", a separate field."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Unlike ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/utility-functions/#get-pc20-address",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "getPC20Address"
          })
        }), ", where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chain"
        }), " is\noptional, spending ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "requires"
        }), " it. A send whose ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chain"
        }), " disagrees with where the funds actually are\nis rejected with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PC20TokenChainMismatchError"
        }), " before any approval is signed. Lookup is lenient;\nspending is not."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "danger",
      children: [(0,jsx_runtime.jsxs)(_components.mdxAdmonitionTitle, {
        children: ["Never add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "symbol"
        }), " to a PC20 reference"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A PC20 reference is exactly ", (0,jsx_runtime.jsx)(_components.code, {
          children: "{ chain, address }"
        }), ". The SDK discriminates it from a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MoveableToken"
        }), " by\nthe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "absence"
        }), " of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "symbol"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mechanism"
        }), ", so adding a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "symbol"
        }), " field silently routes the token\ndown the static-table path instead of the registry resolver."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "route-coverage",
      children: "Route Coverage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Route"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Flow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EVM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solana"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External wrapper burn → unlock the canonical token on Push"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push → external export (lock + mint the wrapper)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEA-held wrapper burns back, unlocks to the UEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Route 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CEA → CEA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Route 4 is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not yet supported"
      }), " for PC20."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/universal-transaction-scenarios",
        children: "Universal Transaction Scenarios"
      }), " for a\nrunnable example of each supported route."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "behavior-worth-knowing",
      children: "Behavior Worth Knowing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inbound wrappers are never approved."
        }), " The gateway's PC20Factory burns via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "burnFrom"
        }), ", so no\napproval transaction is sent on the way in. Exports are the opposite: they approve and lock the\ncanonical Push token into VaultPC20, and quote gas through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getPC20ExportGasAndFees"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "First export predicts the wrapper address."
        }), " Exporting a PC20 to a chain that has never seen it\ndeploys the wrapper as part of the flow. On Solana, delivery falls back to the sender's CEA\nassociated token account when the recipient has none — an ATA cannot exist before its mint does."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Funds plus a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "data"
          }), " payload transfer first, then call."]
        }), " Tokens are transferred to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "execute.to"
        }), "\nand the call runs afterwards. No allowance is granted to the target, so calldata that uses\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "transferFrom"
        }), " will revert. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transfer"
        }), "-style calldata, or have the target pull from a\nbalance it already holds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details/* default */.A, {
      summary: "PC20 Errors",
      className: "alert alert--minimal code",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["Every PC20 failure throws a subclass of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PC20Error"
        }), ", exported from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@pushchain/core"
        }), ". Each carries a\nstable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "code"
        }), ", plus ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chain"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "address"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expectedChain"
        }), " (where relevant) and a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hint"
        }), " describing the\nremediation."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "import { PC20Error, PC20TokenChainMismatchError } from '@pushchain/core';\n\ntry {\n  await pushChainClient.universal.sendTransaction({ /* … */ });\n} catch (err) {\n  if (err instanceof PC20TokenChainMismatchError) {\n    console.error(err.code, err.chain, err.expectedChain, err.hint);\n  } else if (err instanceof PC20Error) {\n    console.error(err.code, err.hint);\n  }\n}\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Class"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "code"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Thrown when"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20Error"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "—"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Base class. Catch this to handle every PC20 failure."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "InvalidPC20AddressError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_INVALID_ADDRESS"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The address is malformed for its chain. Thrown before any network call."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20TokenChainMismatchError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_TOKEN_CHAIN_MISMATCH"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "funds.token.chain"
              }), " is not where the funds actually are."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20WrapperNotRegisteredError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_WRAPPER_NOT_REGISTERED"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "UniversalCore has no source mapping for this address on this chain."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20RegistryMismatchError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_REGISTRY_MISMATCH"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Forward and reverse registry lookups disagree. A registry inconsistency — do not retry blindly."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20FactoryMismatchError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_FACTORY_MISMATCH"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The live gateway's ", (0,jsx_runtime.jsx)(_components.code, {
                children: "pc20Factory"
              }), " differs from UniversalCore's. The deployment is misconfigured; report it."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "InvalidPC20MetadataError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_INVALID_METADATA"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The token does not implement ", (0,jsx_runtime.jsx)(_components.code, {
                children: "pc20Metadata()"
              }), ", or the metadata fails validation. This is what a synthetic PRC20 such as ", (0,jsx_runtime.jsx)(_components.code, {
                children: "pETH"
              }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "USDC.eth"
              }), " raises — move those with the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "MoveableToken"
              }), " API instead."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20ExpectedButPRC20Error"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_EXPECTED_BUT_PRC20"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The stricter variant of the above, raised when the token positively identifies itself as a synthetic PRC20 by exposing ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN_NAMESPACE()"
              }), ". Catch ", (0,jsx_runtime.jsx)(_components.code, {
                children: "InvalidPC20MetadataError"
              }), " if you want to cover both."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20AmbiguousAddressError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_AMBIGUOUS_ADDRESS"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The address is registered on several chains with different Push sources and no ", (0,jsx_runtime.jsx)(_components.code, {
                children: "chain"
              }), " was given. Carries ", (0,jsx_runtime.jsx)(_components.code, {
                children: "candidates"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "UnsupportedPC20DestinationError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_UNSUPPORTED_DESTINATION"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No PC20 factory is registered for the destination chain namespace."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "InsufficientPC20BalanceError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_INSUFFICIENT_BALANCE"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The wrapper (inbound) or Push source (export) balance is short. Carries ", (0,jsx_runtime.jsx)(_components.code, {
                children: "required"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "available"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20UnknownChainNamespaceError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_UNKNOWN_CHAIN_NAMESPACE"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "A chain namespace could not be mapped in either direction."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20WrapperPredictionUnavailableError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_WRAPPER_PREDICTION_UNAVAILABLE"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["A first export's destination wrapper address could not be predicted. Thrown ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "before"
              }), " approval, so nothing is locked."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20ExportRevertedError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_EXPORT_REVERTED"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The export reverted after the source token was locked. Carries ", (0,jsx_runtime.jsx)(_components.code, {
                children: "outboundTxId"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "lockedAmount"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "revertRecipient"
              }), "; funds return to the revert recipient on Push Chain."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20UnsafeEmptyPayloadError"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20_UNSAFE_EMPTY_PAYLOAD"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "A wrapper burn was about to be submitted with no Push-side forwarding payload. The SDK fails closed rather than risk locking the canonical token."
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "send-batch-transactions-multicall",
      children: "Send Batch Transactions (Multicall)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can batch multiple calls into a single transaction. This pattern is commonly referred to as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multicall"
      }), " in EVM ecosystems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To do so, instead of passing a single ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data"
      }), " field, supply an array of calls (each with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "to"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "data"
      }), ") to sendTransaction."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Batch transactions now works from any origin including external chains and native Push Chain wallets. see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#batch-atomicity-for-native-push-chain-wallets",
          children: "Batch Atomicity for Native Push Chain Wallets"
        }), " to learn more."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Execute two increment() calls atomically\nconst incrementData = PushChain.utils.helpers.encodeTxData({\n  abi: CounterABI,\n  functionName: 'increment',\n});\n\nawait client.universal.sendTransaction({\n  // Must be '0x0000000000000000000000000000000000000000' for multicall\n  to: '0x0000000000000000000000000000000000000000',\n  data: [\n    { to: '0xCounterContract1', value: 0n, data: incrementData },\n    { to: '0xCounterContract2', value: 0n, data: incrementData },\n  ],\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      title: "Multicall requirements",
      type: "warning",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["For multicall, the outer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "to"
        }), " should always be zero address (", (0,jsx_runtime.jsx)(_components.code, {
          children: "0x0000000000000000000000000000000000000000"
        }), "). The SDK will ", (0,jsx_runtime.jsx)(_components.code, {
          children: "console.warn"
        }), " if you pass any other address.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {})]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The inner entries are the opposite: every entry in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "data"
        }), " array must have a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-zero"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "to"
        }), ". A zero-address entry is rejected with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PushChainExecutionError"
        }), ", because the EIP-7702 executor reinterprets a zero target as the account itself."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-atomicity-for-native-push-chain-wallets",
      children: "Batch Atomicity for Native Push Chain Wallets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the origin is an external chain, the batch always executes atomically through the UEA. When the origin is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "native Push Chain EOA"
      }), ", the SDK executes the whole batch atomically in a single ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-7702",
        children: "EIP-7702"
      }), " type-4 transaction: the EOA signs an authorization delegating to a batch executor contract (deployed on Push Chain Donut Testnet), so all calls succeed or the whole transaction reverts."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The atomic path requires a signer that can sign EIP-7702 authorizations. The SDK wires this automatically for all supported signers. Browser wallets (JSON-RPC accounts like MetaMask) cannot sign raw 7702 authorizations. For those, the SDK logs a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "console.warn"
      }), " and safely falls back to sequential per-call execution, which is non-atomic, ie: series of transactions are sent one by one."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Check the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "atomic"
      }), " field on the returned ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TxResponse"
      }), " to know which path ran: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " for atomic execution, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), " only when a native-origin batch fell back to the sequential loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live Playground"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      className: "liveplaytab",
      groupId: "send-universal-transaction-coding",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "ethers_v6",
        label: "Ethers (v6)",
        children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
          repo: {
            title: "Open in Github",
            url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/send-universal-transaction"
          },
          children: `
// customPropHighlightRegexStart=universal\.sendTransaction
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=send_transaction_ethers_with_prompt
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import \* as readline from 'node:readline/promises';

  // RPC endpoint controls the source chain the universal tx originates from.
  // Swap this URL for any other supported chain's RPC (Push, BNB Testnet, Arbitrum
  // Sepolia, Base Sepolia, etc.) and the UOA + fee-lock + bridge will all
  // flip to that chain — no other code change needed.
  const RPC_PUSH = 'https://evm.donut.rpc.push.org/';
  const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
  const RECIPIENT = '0x0000000000000000000000000000000000042101';

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  async function main() {
    console.log('🚀 Initializing Universal Transaction Example');

    // Route 1 origin can be EITHER an external chain wallet OR a native
    // Push Chain wallet. Pick at runtime so you can see both flows.
    const chain = await returnUserChainSelection();

    const wallet = ethers.Wallet.createRandom();
    const provider = new ethers.JsonRpcProvider(chain.rpc);
    const signer = wallet.connect(provider);
    console.log('🔑 Source wallet on ' + chain.name + ':', wallet.address);

    const universalSigner = await PushChain.utils.signer.toUniversal(signer);
    const pushChainClient = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });
    console.log('📍 UEA on Push Chain:', pushChainClient.universal.account);

    await rl.question(':::prompt:::Send at least ' + chain.fundingAsk + ' to ' + wallet.address + ' on ' + chain.name + ', then press Enter.' + chain.faucetHint);

    console.log('📤 Sending universal transaction to', RECIPIENT);
    try {
      const txResponse = await pushChainClient.universal.sendTransaction({
        to: RECIPIENT,
        value: PushChain.utils.helpers.parseUnits('0.001', 18),
        progressHook: (p) => console.log('[' + p.id + '] ' + p.level + ' — ' + (p.title || '')),
      });
      console.log('✅ Push tx hash:', txResponse.hash);
      await txResponse.wait();
      console.log('🎯 Confirmed on Push Chain');
    } catch (error) {
      console.error('❌ Failed:', error.message);
    }
  }

  async function returnUserChainSelection() {
    const selection = await rl.question('Select the source chain (1 for Push Testnet Donut, 2 for Ethereum Sepolia): ');
    if (selection !== '1' && selection !== '2') {
      console.log('Invalid selection. Please pick 1 or 2.');
      process.exit(0);
    }
    return selection === '1'
      ? { id: '1', name: 'PUSH_TESTNET_DONUT', rpc: RPC_PUSH, fundingAsk: '0.1 PC', faucetHint: '' }
      : { id: '2', name: 'ETHEREUM_SEPOLIA',  rpc: RPC_SEPOLIA, fundingAsk: '0.005 ETH', faucetHint: '\\\\nSepolia faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia' };
  }

  await main().catch(console.error);

`
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "viem",
        label: "Viem",
        children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
          repo: {
            title: "Open in Github",
            url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/send-universal-transaction"
          },
          children: `
// customPropHighlightRegexStart=universal\.sendTransaction
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=send_transaction_viem_basic
import { PushChain } from '@pushchain/core';
import { createWalletClient, defineChain, http } from 'viem';
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import \* as readline from 'node:readline/promises';

  // RPC endpoint controls the source chain the universal tx originates from.
  // Swap this URL for any other supported chain's RPC (Push, BNB Testnet, Arbitrum
  // Sepolia, Base Sepolia, etc.) and the UOA + fee-lock + bridge will all
  // flip to that chain — no other code change needed.
  const RPC_PUSH = 'https://evm.donut.rpc.push.org/';
  const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
  const RECIPIENT = '0x0000000000000000000000000000000000042101';

  // viem's built-in chain registry doesn't ship Push Chain Donut yet,
  // so define it inline with the chain id the SDK uses (42101).
  const pushTestnetDonut = defineChain({
    id: 42101,
    name: 'Push Chain Testnet Donut',
    nativeCurrency: { name: 'Push', symbol: 'PC', decimals: 18 },
    rpcUrls: { default: { http: [RPC_PUSH] } },
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  async function main() {
    console.log('🚀 Initializing Universal Transaction Example');

    // Route 1 origin can be EITHER an external chain wallet OR a native
    // Push Chain wallet. Pick at runtime so you can see both flows.
    const chain = await returnUserChainSelection();

    const privateKey = generatePrivateKey();
    const account = privateKeyToAccount(privateKey);
    console.log('🔑 Source wallet on ' + chain.name + ':', account.address);

    const client = createWalletClient({
      account,
      chain: chain.chain,
      transport: http(chain.rpc),
    });

    const universalSigner = await PushChain.utils.signer.toUniversal(client);
    const pushChainClient = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });
    console.log('📍 UEA on Push Chain:', pushChainClient.universal.account);

    await rl.question(':::prompt:::Send at least ' + chain.fundingAsk + ' to ' + account.address + ' on ' + chain.name + ', then press Enter.' + chain.faucetHint);

    console.log('📤 Sending universal transaction to', RECIPIENT);
    try {
      const txResponse = await pushChainClient.universal.sendTransaction({
        to: RECIPIENT,
        value: PushChain.utils.helpers.parseUnits('0.001', 18),
        progressHook: (p) => console.log('[' + p.id + '] ' + p.level + ' — ' + (p.title || '')),
      });
      console.log('✅ Push tx hash:', txResponse.hash);
      await txResponse.wait();
      console.log('🎯 Confirmed on Push Chain');
    } catch (error) {
      console.error('❌ Failed:', error.message);
    }
  }

  async function returnUserChainSelection() {
    const selection = await rl.question('Select the source chain (1 for Push Testnet Donut, 2 for Ethereum Sepolia): ');
    if (selection !== '1' && selection !== '2') {
      console.log('Invalid selection. Please pick 1 or 2.');
      process.exit(0);
    }
    return selection === '1'
      ? { id: '1', name: 'PUSH_TESTNET_DONUT', chain: pushTestnetDonut, rpc: RPC_PUSH, fundingAsk: '0.1 PC', faucetHint: '' }
      : { id: '2', name: 'ETHEREUM_SEPOLIA',  chain: sepolia,           rpc: RPC_SEPOLIA, fundingAsk: '0.005 ETH', faucetHint: '\\\\nSepolia faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia' };
  }

  await main().catch(console.error);

`
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "solana_web3js",
        label: "Solana (Web3 JS)",
        children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
          repo: {
            title: "Open in Github",
            url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/send-universal-transaction"
          },
          children: `
// customPropHighlightRegexStart=universal\.sendTransaction
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=send_transaction_solana_basic
import { PushChain } from '@pushchain/core';
import { Connection, Keypair } from '@solana/web3.js';
import \* as readline from 'node:readline/promises';

  // ——— CONFIG ———

  // Dummy Address
  const RECIPIENT = '0x0000000000000000000000000000000000042101';

  // Enable User Input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // ⭐️ MAIN FUNCTION ⭐️
  async function main() {
    console.log('🚀 Initializing Universal Transaction Example');

    // 1) Create a keypair
    const keypair = Keypair.generate();
    console.log('🔑 Got keypair: ', keypair.publicKey.toBase58());

    // 2) Convert to Universal Signer from Keypair
    console.log('🔄 Converting to Universal Signer from Keypair...');
    const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
    });

    // 3) Initialize Push Chain Client
    console.log('🔗 Initializing Push Chain Client...');
    const pushChainClient = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET
    });

    // 4) Prepare transaction parameters
    const txParams = {
      to: RECIPIENT,
      value: PushChain.utils.helpers.parseUnits('0.001', 18), // 0.001 PC in uPC
      // data: '0x...', // For contract interactions - hex encoded
    };

    // wait for user to send funds first
    await rl.question(':::prompt:::Send at least 0.02 SOL to: ' + keypair.publicKey.toBase58() + ' on Solana Devnet, then press Enter. Solana devnet faucet: https://faucet.solana.com');

    // 5) Send universal transaction
    console.log('📤 Sending transaction to:', RECIPIENT);

    try {
      // Note: This would fail in playground without funds
      // In production, ensure wallet has funds
      const txResponse = await pushChainClient.universal.sendTransaction({
        ...txParams,
        progressHook: (p) => console.log('🔄 Progress:', p.title || p.id),
      });
      console.log('✅ Transaction sent! Hash:', JSON.stringify(txResponse));
    } catch (error) {
      console.error('❌ Transaction failed:', error.message);
      // In playground, this will fail without funds
      console.log('Note: In playground, this might fail without funds. Ensure your wallet has PC tokens.');
    }
  }

  await main().catch(console.error);

`
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "ui_kit",
        label: "UI Kit",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropHighlightRegexStart=<PushUniversalWalletProvider\n// customPropHighlightRegexEnd=</PushUniversalWalletProvider>\n// customPropGTagEvent=send_transaction_ui_kit\n// customPropMinimized='false'\nimport { useState } from 'react';\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  usePushChain,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction App() {\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  function Component() {\n    const [txnHash, setTxnHash] = useState(null);\n    const [isLoading, setIsLoading] = useState(false);\n\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n    // ui-kit re-exports the core PushChain class through this hook, so\n    // you do NOT need to import @pushchain/core separately.\n    const { PushChain } = usePushChain();\n\n    const handleSendTransaction = async () => {\n      if (!pushChainClient || !PushChain) return;\n      setIsLoading(true);\n      try {\n        const res = await pushChainClient.universal.sendTransaction({\n          to: '0x0000000000000000000000000000000000042101',\n          value: PushChain.utils.helpers.parseUnits('0.001', 18), // 0.001 PC in uPC\n        });\n        setTxnHash(res.hash);\n      } catch (err) {\n        console.log(err);\n      } finally {\n        setIsLoading(false);\n      }\n    };\n\n    return (\n      <div>\n        <PushUniversalAccountButton />\n\n        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <button\n            disabled={isLoading}\n            style={{\n              background: 'transparent',\n              border: '1px solid',\n              borderRadius: '10px',\n              padding: '12px 18px',\n              cursor: 'pointer',\n              margin: '8px 0',\n            }}\n            onClick={handleSendTransaction}\n          >\n            {isLoading ? 'Sending…' : 'Send Transaction'}\n          </button>\n        )}\n\n        {txnHash && (\n          <>\n            <p>Txn Hash: {txnHash}</p>\n            <a\n              href={pushChainClient.explorer.getTransactionUrl(txnHash)}\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n            >\n              View in Explorer\n            </a>\n          </>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore end-to-end examples for each route with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/universal-transaction-scenarios",
          children: "Universal Transaction Scenarios"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Sequence multiple chain transactions in one go with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-multichain-transactions",
          children: "Send Multichain Transactions"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trigger cross-chain execution directly from a smart contract with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-multichain-execution",
          children: "Contract Initiated Multichain Execution"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Integrate transaction flows into your frontend app using the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit",
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

/***/ 56325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Details_Details)
});

;// ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(198587);
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
const _excluded=["summary","children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isInSummary(node){if(!node){return false;}return node.tagName==='SUMMARY'||isInSummary(node.parentElement);}function hasParent(node,parent){if(!node){return false;}return node===parent||hasParent(node.parentElement,parent);}/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */function Details(_ref){let summary=_ref.summary,children=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.A)(_ref,_excluded);(0,useBrokenLinks/* default */.A)().collectAnchor(props.id);const isBrowser=(0,useIsBrowser/* default */.A)();const detailsRef=(0,react.useRef)(null);const _useCollapsible=(0,Collapsible/* useCollapsible */.u)({initialState:!props.open}),collapsed=_useCollapsible.collapsed,setCollapsed=_useCollapsible.setCollapsed;// Use a separate state for the actual details prop, because it must be set
// only after animation completes, otherwise close animations won't work
const _useState=(0,react.useState)(props.open),open=_useState[0],setOpen=_useState[1];const summaryElement=/*#__PURE__*/react.isValidElement(summary)?summary:/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{children:summary!==null&&summary!==void 0?summary:'Details'});return(/*#__PURE__*/// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
(0,jsx_runtime.jsxs)("details",Object.assign({},props,{ref:detailsRef,open:open,"data-collapsed":collapsed,className:(0,dist_clsx/* default */.A)(styles_module/* default */.A.details,isBrowser&&styles_module/* default */.A.isBrowser,props.className),onMouseDown:e=>{const target=e.target;// Prevent a double-click to highlight summary text
if(isInSummary(target)&&e.detail>1){e.preventDefault();}},onClick:e=>{e.stopPropagation();// For isolation of multiple nested details/summary
const target=e.target;const shouldToggle=isInSummary(target)&&hasParent(target,detailsRef.current);if(!shouldToggle){return;}e.preventDefault();if(collapsed){setCollapsed(false);setOpen(true);}else{setCollapsed(true);// Don't do this, it breaks close animation!
// setOpen(false);
}},children:[summaryElement,/*#__PURE__*/(0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N,{lazy:false// Content might matter for SEO in this case
,collapsed:collapsed,onCollapseTransitionEnd:newCollapsed=>{setCollapsed(newCollapsed);setOpen(!newCollapsed);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module/* default */.A.collapsibleContent,children:children})})]})));}
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
const InfimaClasses='alert alert--info';function Details_Details(_ref){let props=Object.assign({},(_objectDestructuringEmpty(_ref),_ref));return/*#__PURE__*/(0,jsx_runtime.jsx)(Details,Object.assign({},props,{className:(0,clsx/* default */.A)(InfimaClasses,Details_styles_module/* default */.A.details,props.className)}));}

/***/ },

/***/ 436026
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 510103
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ConstantsDropdown)
/* harmony export */ });
/* harmony import */ var _theme_Details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56325);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
const CONSTANTS_MAP={CHAIN:{summary:'PushChain.CONSTANTS.CHAIN',values:['PushChain.CONSTANTS.CHAIN.PUSH_TESTNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT','PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.BNB_TESTNET','PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA','PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET']},CHAIN_FULL:{summary:'PushChain.CONSTANTS.CHAIN',values:['PushChain.CONSTANTS.CHAIN.PUSH_MAINNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT','PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET','PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET','PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET','PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET','PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET']},PUSH_NETWORK:{summary:'PushChain.CONSTANTS.PUSH_NETWORK',values:['PushChain.CONSTANTS.PUSH_NETWORK.TESTNET','PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET']},LIBRARY:{summary:'PushChain.CONSTANTS.LIBRARY',values:['PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6','PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM','PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS']},MOVEABLE_TOKEN:{summary:'PushChain.CONSTANTS.MOVEABLE.TOKEN',values:['PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.stETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.BNB','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthArb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthBase','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pBnb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.eth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.arb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.base','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.bnb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.sol','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.eth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.arb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.base','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.bsc','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.sol']},PAYABLE_TOKEN:{summary:'PushChain.CONSTANTS.PAYABLE.TOKEN',values:['PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.stETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.BNB','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.SOL','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDC']}};function ConstantsDropdown(_ref){let variant=_ref.variant;const _CONSTANTS_MAP$varian=CONSTANTS_MAP[variant],summary=_CONSTANTS_MAP$varian.summary,values=_CONSTANTS_MAP$varian.values;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{summary:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("summary",{children:summary}),className:"alert alert--minimal-api-table",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{paddingTop:'8px'},children:values.map(v=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:v},v))})});}

/***/ },

/***/ 891517
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NodeJSVirtualIDE)
/* harmony export */ });
/* harmony import */ var _theme_Playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247991);
/* harmony import */ var _theme_ReactLiveScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(351433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function NodeJSVirtualIDE(_ref){let _ref$repo=_ref.repo,repo=_ref$repo===void 0?null:_ref$repo,children=_ref.children;const userPassedCode=children.trim().split('\n').map(line=>line.startsWith(' ')?line.slice(2):line).join('\n');return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Playground__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{showLineNumbers:true// pass everything your snippet needs into the scope
,scope:Object.assign({},_theme_ReactLiveScope__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{Buffer:(__webpack_require__(348287).Buffer),createPortal:(__webpack_require__(440961).createPortal)})// no-op: we already hand it the fully-wrapped code below
,transformCode:code=>code,children:returnPlaygroundCode({userPassedCode,repo})});}// wrap the raw snippet into your full IDE harness
function returnPlaygroundCode(_ref2){let userPassedCode=_ref2.userPassedCode,_ref2$repo=_ref2.repo,repo=_ref2$repo===void 0?null:_ref2$repo;// check if customPropHighlightRegexStart is present
let highlightRegexStart=null;// Look for a line that starts with any whitespace, then //, then customPropHighlightRegexStart=
let lines=userPassedCode.split('\n');const highlightLine=lines.find(line=>{return line.trim().startsWith('// customPropHighlightRegexStart=');});const match=highlightLine===null||highlightLine===void 0?void 0:highlightLine.match(/\/\/\s*customPropHighlightRegexStart=(.+)$/);if(match){// rawValue is everything after the “=” on that comment line
highlightRegexStart=match[1].trim();// remove the line from the code
lines.splice(lines.indexOf(highlightLine),1);userPassedCode=lines.join('\n');}// check if customPropHighlightRegexEnd is present
let highlightRegexEnd=null;// Look for a line that starts with any whitespace, then //, then customPropHighlightRegexEnd=
lines=userPassedCode.split('\n');const highlightLineEnd=lines.find(line=>{return line.trim().startsWith('// customPropHighlightRegexEnd=');});const matchEnd=highlightLineEnd===null||highlightLineEnd===void 0?void 0:highlightLineEnd.match(/\/\/\s*customPropHighlightRegexEnd=(.+)$/);if(matchEnd){// rawValue is everything after the “=” on that comment line
highlightRegexEnd=matchEnd[1].trim();// remove the line from the code
lines.splice(lines.indexOf(highlightLineEnd),1);userPassedCode=lines.join('\n');}// check if customPropGTagEvent is present
let gtagEventLabel='code_execution';lines=userPassedCode.split('\n');const gtagLine=lines.find(line=>{return line.trim().startsWith('// customPropGTagEvent=');});const gtagMatch=gtagLine===null||gtagLine===void 0?void 0:gtagLine.match(/\/\/\s*customPropGTagEvent=(.+)$/);if(gtagMatch){// rawValue is everything after the "=" on that comment line
gtagEventLabel=gtagMatch[1].trim();// remove the line from the code
lines.splice(lines.indexOf(gtagLine),1);userPassedCode=lines.join('\n');}// escape backticks in the snippet
const escaped=userPassedCode.replace(/`/g,'\\`');return("\n  // customPropHidden='true'\n  // customPropNodeJSEnv='true'\nfunction App() {\n  const defaultCode = `"+escaped+"`;\n\n  const [code, setCode] = useState(defaultCode);\n  const [logs, setLogs] = useState<string[]>([]);\n  const [isRunning, setIsRunning] = useState(false);\n\n  // Prompt modal (replaces window.alert for :::prompt::: messages)\n  const [promptModal, setPromptModal] = useState(null);\n  const [copiedAddr, setCopiedAddr] = useState(null);\n  const promptButtonRef = useRef(null);\n\n  // Input modal (replaces window.prompt for un-prefixed rl.question calls)\n  const [inputModal, setInputModal] = useState(null);\n  const [inputModalValue, setInputModalValue] = useState('');\n  const inputModalRef = useRef(null);\n\n  useEffect(() => {\n    window.__pushShowPrompt = (text) => new Promise((resolve, reject) => {\n      setPromptModal({ text: text, resolve: resolve, reject: reject });\n    });\n    window.__pushShowInputPrompt = (text) => new Promise((resolve, reject) => {\n      setInputModalValue('');\n      setInputModal({ text: text, resolve: resolve, reject: reject });\n    });\n  }, []);\n\n  useEffect(() => {\n    if (!promptModal) return;\n    const prevOverflow = document.body.style.overflow;\n    document.body.style.overflow = 'hidden';\n    const handler = (e) => {\n      if (e.key === 'Escape') {\n        if (promptModal.reject) promptModal.reject(new Error('Cancelled by user'));\n        setPromptModal(null);\n      }\n    };\n    window.addEventListener('keydown', handler);\n    if (promptButtonRef.current) promptButtonRef.current.focus();\n    return () => {\n      window.removeEventListener('keydown', handler);\n      document.body.style.overflow = prevOverflow;\n    };\n  }, [promptModal]);\n\n  useEffect(() => {\n    if (!inputModal) return;\n    const prevOverflow = document.body.style.overflow;\n    document.body.style.overflow = 'hidden';\n    const handler = (e) => {\n      if (e.key === 'Escape') {\n        if (inputModal.reject) inputModal.reject(new Error('Cancelled by user'));\n        setInputModal(null);\n        setInputModalValue('');\n      }\n    };\n    window.addEventListener('keydown', handler);\n    if (inputModalRef.current) inputModalRef.current.focus();\n    return () => {\n      window.removeEventListener('keydown', handler);\n      document.body.style.overflow = prevOverflow;\n    };\n  }, [inputModal]);\n\n  const cancelPromptModal = () => {\n    if (promptModal && promptModal.reject) promptModal.reject(new Error('Cancelled by user'));\n    setPromptModal(null);\n  };\n\n  const confirmPromptModal = () => {\n    if (promptModal && promptModal.resolve) promptModal.resolve();\n    setPromptModal(null);\n  };\n\n  const submitInputModal = () => {\n    if (inputModal && inputModal.resolve) inputModal.resolve(inputModalValue);\n    setInputModal(null);\n    setInputModalValue('');\n  };\n\n  const cancelInputModal = () => {\n    if (inputModal && inputModal.reject) inputModal.reject(new Error('Cancelled by user'));\n    setInputModal(null);\n    setInputModalValue('');\n  };\n\n  const parsePromptTokens = (text) => {\n    const re = new RegExp('(0x[a-fA-F0-9]{40})|(https?://[^\\\\s|]+)', 'g');\n    const parts = [];\n    let lastIndex = 0;\n    let m;\n    while ((m = re.exec(text)) !== null) {\n      if (m.index > lastIndex) parts.push({ t: 'text', v: text.slice(lastIndex, m.index) });\n      if (m[1]) parts.push({ t: 'addr', v: m[1] });\n      else if (m[2]) parts.push({ t: 'url', v: m[2] });\n      lastIndex = m.index + m[0].length;\n    }\n    if (lastIndex < text.length) parts.push({ t: 'text', v: text.slice(lastIndex) });\n    return parts;\n  };\n\n  // tiny ASCII spinner\n  function AsciiLoader() {\n    const frames = ['|','/','\u2014', '\\\\'];\n    const [i, setI] = useState(0);\n    useEffect(() => {\n      const t = setInterval(() => setI((n) => (n + 1) % frames.length), 100);\n      return () => clearInterval(t);\n    }, []);\n    return <span style={{ fontFamily: 'Fira Code' }}>{frames[i]}</span>;\n  }\n\n  const consoleContainerRef = useRef<HTMLDivElement>(null);\n\n  // whenever logs change, scroll to bottom\n  useEffect(() => {\n    const c = consoleContainerRef.current;\n    if (c) {\n      c.scrollTop = c.scrollHeight;\n    }\n  }, [logs]);\n\n  // run virtual node code\n  const runCode = async () => {\n    setIsRunning(true);\n    setLogs([]);\n\n    // Track Virtual IDE code execution\n    if (typeof window !== 'undefined' && window.gtag) {\n      window.gtag('event', 'virtual_ide_run', {\n        event_category: 'documentation_core',\n        event_label: '"+gtagEventLabel+"',\n        value: 1,\n      });\n    }\n\n    // let React paint the loader\n    await new Promise((r) => setTimeout(r, 0));\n\n    // clean imports\n    const cleaned = code.replace(/^\\s*import.*$/gm, '');\n\n       // our JSON.stringify shim: BigInts \u2192 strings\n    const jsonShim = `\n      const _orig = JSON.stringify;\n      JSON.stringify = (value, replacer, space) =>\n       _orig(value, (key, val) =>\n           typeof val === 'bigint' ? val.toString() : val\n       , space);\n     `;\n\n    // stub out process.stdin/stdout so readline won't crash, and support process.exit()\n    const processShim = `\n      const process = {\n        stdin: {},\n        stdout: {},\n        exit: (code = 0) => {\n          // you can decide how you want to handle an exit,\n          // e.g. throw so your \u201Cwrapped\u201D async IIFE bails out:\n          throw new Error('Process exited with code ' + code);\n        },\n      };\n    `;\n\n    // a very minimal browser\u2010side readline shim\n    const readlineShim = `;\n      // override Node\u2019s readline to support both callback and Promise\n      const readline = {\n        createInterface: ({ input, output }) => {\n          const iface = {\n            question(questionText, callback) {\n              const isPrompt = typeof questionText === 'string' && questionText.startsWith(':::prompt:::');\n              const text = isPrompt\n                ? questionText.replace(/^:::prompt:::/, '')\n                : questionText;\n\n              // If no callback provided, return a Promise\n              if (typeof callback !== 'function') {\n                if (isPrompt && typeof window.__pushShowPrompt === 'function') {\n                  return window.__pushShowPrompt(text).then(() => '');\n                }\n                if (isPrompt) {\n                  window.alert(text); // fallback if bridge not ready\n                  return Promise.resolve('');\n                }\n                if (typeof window.__pushShowInputPrompt === 'function') {\n                  return window.__pushShowInputPrompt(text);\n                }\n                return Promise.resolve(window.prompt(text));\n              }\n\n              // callback-style\n              if (isPrompt && typeof window.__pushShowPrompt === 'function') {\n                window.__pushShowPrompt(text).then(() => callback(''));\n              } else if (isPrompt) {\n                window.alert(text); // fallback if bridge not ready\n                callback('');\n              } else if (typeof window.__pushShowInputPrompt === 'function') {\n                window.__pushShowInputPrompt(text).then((v) => callback(v));\n              } else {\n                callback(window.prompt(text));\n              }\n            },\n            close() {},\n          };\n          return iface;\n        },\n      };\n    `;\n\n    // shim console\n    const consoleShim = {\n      log: (...args: any[]) => setLogs(prev => [...prev, args.join(' ')]),\n      error: (...args: any[]) => setLogs(prev => [...prev, 'Error: ' + args.join(' ')]),\n    };\n\n    // pass the wrapped code\n      const fnBody = `\n      return (async () => {\n        ${jsonShim}\n        ${processShim}\n        ${readlineShim}\n        ${cleaned}\n      })();\n     `;\n\n      const scope = {\n        ethers,\n        PushChain,\n        http,\n        defineChain,\n        Keypair,\n        PublicKey,\n        parseTransaction,\n        webSocket,\n        TypedData,\n        TypedDataDomain,\n        privateKeyToAccount,\n        generatePrivateKey,\n        sepolia,\n        hexToBytes,\n        bs58,\n        keccak256,\n        StandardMerkleTree,\n        bytesToHex,\n        createWalletClient,\n        createPublicClient,\n        console: consoleShim,\n      }\n\n    try {\n      const executor = new Function(...Object.keys(scope), fnBody);\n      await executor(...Object.values(scope));\n    } catch (e: any) {\n      consoleShim.error(e.message || e.toString());\n    } finally {\n      setIsRunning(false);\n    }\n  };\n\n  const wrapper =  {\n    margin: '0 auto',\n    width: '100%'\n  }\n\n  const highlightRegexStart = {\n    margin: '0 auto',\n    width: 'inherit',\n  }\n\n  const newCodeDiv = {\n    fontFamily: 'Fira Code',\n    fontSize: 16,\n    width: 'inherit',\n  }\n\n  const repoWrapper = {\n    padding: '0px',\n    display: 'flex',\n    flexWrap: 'wrap',\n    flexDirection: 'row',\n    justifyContent: 'flex-end',\n    gap: '12px',\n  }\n\n  const repoUrlDiv = {\n    display: 'flex',\n    flex: 'none',\n    flexDirection: 'row',\n    alignItems: 'center',\n    gap: '12px',\n    padding: '8.5px 13px 8.59px 13px',\n  }\n\n  const buttonDiv = {\n    display: 'flex',\n    flexWrap: 'wrap',\n    gap: '12px',\n    flex: '1',\n    justifyContent: 'flex-end'\n  }\n\n  const terminalDiv = {\n    fontFamily: 'Fira Code',\n    fontSize: 13,\n    borderRadius: 12,\n    overflow: \"hidden\",\n    position: \"relative\",\n    background: \"var(--ifm-playground-header-terminalbg)\",\n    color: \"var(--ifm-playground-header-terminalcolor)\",\n  }\n\n  const headerDiv = {\n    display: \"flex\",\n    alignItems: \"center\",\n    padding: \"12px 16px\",\n    background: \"transparent\",\n  }\n\n  const repoButton = {\n    display: 'flex',\n    alignItems: 'center',\n    gap: '4px',\n    fontSize: '0.875rem',\n    color: 'var(--ifm-playground-buttontext-color)',\n    cursor: 'pointer',\n  }\n\n  const clearButton = {\n    borderRadius: '12px',\n    border: 'var(--ifm-playground-button-border)',\n    display: 'flex',\n    padding: '12.55px 13px 13.04px 13px',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: 'transparent',\n    fontSize: '0.875rem',\n    fontWeight: '600',\n    color: 'var(--ifm-playground-buttontextcolor)',\n    cursor: 'pointer',\n  }\n\n  const runCodeButton = {\n    borderRadius: '12px',\n    background: '#D548EC',\n    display: 'flex',\n    padding: '13px',\n    justifyContent: 'center',\n    alignItems: 'center',\n    gap: '4px',\n    fontSize: '14px',\n    fontWeight: 600,\n    lineHeight: 'normal',\n    border: 'none',\n    cursor: 'pointer',\n    fontFamily: 'DM Sans',\n    color: '#FFF',\n  }\n\n  const arrowIcon = {\n    color: 'var(--ifm-header-caret-color)',\n    marginTop: '-6px'\n  }\n\n\n  const dotRed = {\n    display: \"inline-block\",\n    width: 12,\n    height: 12,\n    borderRadius: \"50%\",\n    background: \"#f25f58\",\n    marginRight: 6,\n  };\n\n  const dotYellow = {\n    display: \"inline-block\",\n    width: 12,\n    height: 12,\n    borderRadius: \"50%\",\n    background: \"#febe2e\",\n    marginRight: 6,\n  };\n\n  const dotGreen = {\n    display: \"inline-block\",\n    width: 12,\n    height: 12,\n    borderRadius: \"50%\",\n    background: \"#58cb42\",\n  };\n\n  const consoleContainer = {\n    color: \"var(--ifm-playground-header-terminalcolor)\",\n    padding: 12,\n    minHeight: 180,\n    maxHeight: 300,\n    overflowY: \"auto\",\n  }\n\n  const bottomSection = {\n    margin: '0 auto',\n    background: 'var(--ifm-playground-header-bg)',\n    padding: '16px',\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '16px',\n    borderRadius: '0 0 16px 16px',\n    borderTop: 'var(--ifm-playground-button-border)',\n }\n\n  const asciiDiv = {\n    position: 'absolute',\n    bottom: 8,\n    right: 12,\n    padding: '4px 6px',\n    background: '#333',\n    borderRadius: 4,\n    color: '#50fa7b',\n    display: 'flex',\n    alignItems: 'center',\n    gap: '4px',\n  }\n\n  return (\n    <div style={wrapper}>\n      <div\n        style={highlightRegexStart}\n        className=\""+(highlightRegexStart?'push-live-editor push-apply-highlight-in-live-editor':'push-live-editor')+"\"\n        "+(highlightRegexStart?"data-highlight-regex-start=\""+highlightRegexStart+"\"":'')+"\n        "+(highlightRegexEnd?"data-highlight-regex-end=\""+highlightRegexEnd+"\"":'')+"\n      >\n\n        {/* FIX: add empty line at the end of the code to ensure typing is not unfocused first time */}\n        <LiveEditor\n          code={code.replace(/^(?:\\r?\\n)+|(?:\\r?\\n)+$/g, '').concat('\\n                                                                                                                               ')}\n          onChange={(newCode) => {\n            // Remove trailing newlines and spaces before setting the code\n            const cleaned = newCode.replace(/^(?:\\r?\\n)+|(?:\\r?\\n)+$/g, '').replace(/\\n\\s+$/g, '');\n            setCode(cleaned);\n            if (typeof window !== 'undefined') window.__playgroundLiveCode = cleaned;\n          }}\n          style={newCodeDiv}\n        />\n      </div>\n\n      <div style={bottomSection}>\n        <div\n          style={repoWrapper}\n        >\n          {/* Repo button if available */}\n          "+(repo&&repo.url?"\n                <div\n                  style={repoUrlDiv}\n                >\n                  <a\n                    href=\""+repo.url+"\"\n                    target=\"_blank\"\n                    rel=\"noopener noreferrer\"\n                    style={repoButton}\n                    className='btn'\n                  >\n                    "+(repo.title||'View Code')+"\n                  </a>\n\n                  <BsBoxArrowUpRight style={arrowIcon} />\n                </div>\n              ":'')+"\n          <div\n            style={buttonDiv}\n          >\n            <button\n              onClick={() => setLogs([])}\n              title=\"Clear console\"\n              style={clearButton}\n              className='btn'\n            >\n              Clear Console\n            </button>\n\n            <button\n              style={runCodeButton}\n              onClick={runCode}\n              className='btn'\n            >\n              <span style={{ fontSize: '16px', lineHeight: 1, marginTop: '2px' }}>\u25BA</span>\n              <span>Run Code</span>\n            </button>\n          </div>\n\n          {/* Hover & focus styles */}\n          <style>{`\n            .btn:hover {\n                opacity: 0.8;\n            }\n          `}</style>\n        </div>\n\n        {/* Virtual \u201Cterminal\u201D console */}\n        <div\n          style={terminalDiv}\n        >\n          {/* header bar */}\n          <div\n            style={headerDiv}\n          >\n            <span style={dotRed} />\n            <span style={dotYellow} />\n            <span style={dotGreen} />\n          </div>\n\n          {/* log output */}\n          <div\n            ref={consoleContainerRef}\n            style={consoleContainer}\n          >\n            {logs.length === 0 ? (\n              <div style={{ opacity: 0.6 }}>$ Virtual Node Environment with limited capabilities.<br />$ Hit \"Run Code\" to Execute.</div>\n            ) : (\n              logs.map((line, i) => (\n                <div key={i}>\n                  <span style={{ color: \"#6a9955\", marginRight: 4 }}>$</span>\n                  {line}\n                </div>\n              ))\n            )}\n          </div>\n\n          {/* ASCII loader, bottom-right */}\n          {isRunning && (\n            <div\n              style={asciiDiv}\n            >\n              <AsciiLoader /> Running...\n            </div>\n          )}\n        </div>\n      </div>\n\n      {/* Styled prompt modal (replaces window.alert for :::prompt::: messages) */}\n      {promptModal && typeof document !== 'undefined' && createPortal(\n        <div\n          style={{\n            position: 'fixed',\n            top: 0, left: 0, right: 0, bottom: 0,\n            zIndex: 9999,\n            background: 'rgba(0,0,0,0.65)',\n            backdropFilter: 'blur(8px)',\n            WebkitBackdropFilter: 'blur(8px)',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            padding: 20,\n            fontFamily: 'DM Sans, system-ui, sans-serif',\n          }}\n          onClick={(e) => { if (e.target === e.currentTarget) cancelPromptModal(); }}\n        >\n          <div\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\"push-prompt-title\"\n            style={{\n              maxWidth: 580,\n              width: '100%',\n              maxHeight: '90vh',\n              overflowY: 'auto',\n              background: '#131313',\n              color: '#e8e8e8',\n              borderRadius: 16,\n              border: '1px solid #2a2a2a',\n              padding: 28,\n              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',\n            }}\n          >\n            <div style={{\n              display: 'flex',\n              alignItems: 'center',\n              gap: 10,\n              marginBottom: 18,\n              paddingBottom: 16,\n              borderBottom: '1px solid #2a2a2a',\n            }}>\n              <span style={{\n                display: 'inline-block',\n                width: 10, height: 10,\n                borderRadius: '50%',\n                background: '#D548EC',\n                boxShadow: '0 0 12px rgba(213,72,236,0.6)',\n              }} />\n              <h3 id=\"push-prompt-title\" style={{\n                margin: 0, fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em',\n              }}>\n                Action required \u2014 fund the accounts below\n              </h3>\n            </div>\n            <div style={{\n              fontSize: 13.5,\n              lineHeight: 1.7,\n              color: '#d4d4d4',\n              whiteSpace: 'pre-wrap',\n              wordBreak: 'break-word',\n              fontFamily: 'Fira Code, ui-monospace, monospace',\n            }}>\n              {parsePromptTokens(promptModal.text).map((part, i) => {\n                if (part.t === 'addr') return (\n                  <span key={i} style={{\n                    display: 'inline-flex',\n                    alignItems: 'center',\n                    gap: 6,\n                    background: '#1f1f1f',\n                    border: '1px solid #333',\n                    borderRadius: 6,\n                    padding: '2px 8px',\n                    margin: '0 2px',\n                    fontFamily: 'Fira Code, ui-monospace, monospace',\n                    fontSize: 12.5,\n                    color: '#fff',\n                    verticalAlign: 'middle',\n                  }}>\n                    <span title={part.v}>{part.v.slice(0, 6) + '\u2026' + part.v.slice(-4)}</span>\n                    <button\n                      type=\"button\"\n                      onClick={() => {\n                        try {\n                          navigator.clipboard.writeText(part.v);\n                          setCopiedAddr(part.v);\n                          setTimeout(() => setCopiedAddr((c) => c === part.v ? null : c), 1500);\n                        } catch(e){}\n                      }}\n                      title={'Copy ' + part.v}\n                      style={{\n                        background: 'transparent',\n                        border: 'none',\n                        color: copiedAddr === part.v ? '#4ade80' : '#D548EC',\n                        cursor: 'pointer',\n                        fontSize: 11,\n                        padding: 0,\n                        fontFamily: 'DM Sans',\n                        fontWeight: 600,\n                        transition: 'color 120ms ease',\n                      }}\n                    >\n                      {copiedAddr === part.v ? 'copied' : 'copy'}\n                    </button>\n                  </span>\n                );\n                if (part.t === 'url') return (\n                  <a key={i} href={part.v} target=\"_blank\" rel=\"noopener noreferrer\" style={{\n                    color: '#D548EC',\n                    wordBreak: 'break-all',\n                    textUnderlineOffset: 2,\n                  }}>\n                    {part.v}\n                  </a>\n                );\n                return <span key={i}>{part.v}</span>;\n              })}\n            </div>\n            <div style={{\n              display: 'flex',\n              justifyContent: 'flex-end',\n              alignItems: 'center',\n              marginTop: 24,\n              paddingTop: 20,\n              borderTop: '1px solid #2a2a2a',\n              gap: 12,\n            }}>\n              <span style={{ fontSize: 12, color: '#888', marginRight: 'auto' }}>\n                Press Esc to cancel\n              </span>\n              <button\n                ref={promptButtonRef}\n                type=\"button\"\n                className=\"btn\"\n                onClick={confirmPromptModal}\n                style={{\n                  background: '#D548EC',\n                  color: '#fff',\n                  border: 'none',\n                  borderRadius: 12,\n                  padding: '12px 22px',\n                  fontSize: 14,\n                  fontWeight: 600,\n                  cursor: 'pointer',\n                  fontFamily: 'DM Sans',\n                }}\n              >\n                I've funded these \u2014 continue\n              </button>\n            </div>\n          </div>\n        </div>,\n        document.body\n      )}\n\n      {/* Styled input modal (replaces window.prompt for plain rl.question calls) */}\n      {inputModal && typeof document !== 'undefined' && createPortal(\n        <div\n          style={{\n            position: 'fixed',\n            top: 0, left: 0, right: 0, bottom: 0,\n            zIndex: 9999,\n            background: 'rgba(0,0,0,0.65)',\n            backdropFilter: 'blur(8px)',\n            WebkitBackdropFilter: 'blur(8px)',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            padding: 20,\n            fontFamily: 'DM Sans, system-ui, sans-serif',\n          }}\n          onClick={(e) => { if (e.target === e.currentTarget) cancelInputModal(); }}\n        >\n          <div\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\"push-input-title\"\n            style={{\n              maxWidth: 520,\n              width: '100%',\n              maxHeight: '90vh',\n              overflowY: 'auto',\n              background: '#131313',\n              color: '#e8e8e8',\n              borderRadius: 16,\n              border: '1px solid #2a2a2a',\n              padding: 28,\n              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',\n            }}\n          >\n            <div style={{\n              display: 'flex',\n              alignItems: 'center',\n              gap: 10,\n              marginBottom: 18,\n              paddingBottom: 16,\n              borderBottom: '1px solid #2a2a2a',\n            }}>\n              <span style={{\n                display: 'inline-block',\n                width: 10, height: 10,\n                borderRadius: '50%',\n                background: 'rgb(213, 72, 236)',\n                boxShadow: '0 0 12px rgba(213, 72, 236,0.6)',\n              }} />\n              <h3 id=\"push-input-title\" style={{\n                margin: 0, fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em',\n              }}>\n                Input required\n              </h3>\n            </div>\n            <div style={{\n              fontSize: 13.5,\n              lineHeight: 1.7,\n              color: '#d4d4d4',\n              whiteSpace: 'pre-wrap',\n              wordBreak: 'break-word',\n              fontFamily: 'Fira Code, ui-monospace, monospace',\n              marginBottom: 16,\n            }}>\n              {inputModal.text}\n            </div>\n            <input\n              ref={inputModalRef}\n              type=\"text\"\n              value={inputModalValue}\n              onChange={(e) => setInputModalValue(e.target.value)}\n              onKeyDown={(e) => { if (e.key === 'Enter') submitInputModal(); }}\n              autoFocus\n              style={{\n                width: '100%',\n                background: '#1f1f1f',\n                color: '#fff',\n                border: '1px solid #333',\n                borderRadius: 10,\n                padding: '12px 14px',\n                fontSize: 14,\n                fontFamily: 'Fira Code, ui-monospace, monospace',\n                outline: 'none',\n                boxSizing: 'border-box',\n              }}\n              onFocus={(e) => { e.currentTarget.style.borderColor = '#d548ec'; }}\n              onBlur={(e) => { e.currentTarget.style.borderColor = '#333'; }}\n            />\n            <div style={{\n              display: 'flex',\n              justifyContent: 'flex-end',\n              alignItems: 'center',\n              marginTop: 20,\n              paddingTop: 16,\n              borderTop: '1px solid #2a2a2a',\n              gap: 12,\n            }}>\n              <span style={{ fontSize: 12, color: '#888', marginRight: 'auto' }}>\n                Enter to submit \xB7 Esc to cancel\n              </span>\n              <button\n                type=\"button\"\n                onClick={cancelInputModal}\n                style={{\n                  background: 'transparent',\n                  color: '#aaa',\n                  border: '1px solid #333',\n                  borderRadius: 12,\n                  padding: '10px 16px',\n                  fontSize: 13,\n                  fontWeight: 500,\n                  cursor: 'pointer',\n                  fontFamily: 'DM Sans',\n                }}\n              >\n                Cancel\n              </button>\n              <button\n                type=\"button\"\n                className=\"btn\"\n                onClick={submitInputModal}\n                style={{\n                  background: 'rgb(213, 72, 236)',\n                  color: '#fff',\n                  border: 'none',\n                  borderRadius: 12,\n                  padding: '12px 22px',\n                  fontSize: 14,\n                  fontWeight: 600,\n                  cursor: 'pointer',\n                  fontFamily: 'DM Sans',\n                }}\n              >\n                Submit\n              </button>\n            </div>\n          </div>\n        </div>,\n        document.body\n      )}\n      </div>\n    );\n  }\n  ").replace(/^(?:\s*[\r\n])+/,'').trim();}

/***/ },

/***/ 303547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
 */function PushAPIReference(_ref){let children=_ref.children,_ref$showRequiredNoti=_ref.showRequiredNotice,showRequiredNotice=_ref$showRequiredNoti===void 0?true:_ref$showRequiredNoti,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ReferenceContainer,{className:className,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:["These",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"Arguments"}),"are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})([""]);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

/***/ },

/***/ 495466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ SPINNER_TYPE),
  A: () => (/* binding */ Spinner)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
;// ./static/assets/src/components/reusables/spinners/checkmark.svg
var _path;
const _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgCheckmark = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    fill: "#30CC8B",
    d: "M19.75 0A19.75 19.75 0 1 0 39.5 19.75 19.79 19.79 0 0 0 19.75 0m9.4 16.294L18.022 26.928c-.288.271-.669.42-1.064.418a1.46 1.46 0 0 1-1.044-.418l-5.564-5.317a1.52 1.52 0 1 1 2.089-2.203l4.52 4.311 10.102-9.628a1.52 1.52 0 0 1 2.09 2.203"
  })));
};
/* harmony default export */ const checkmark = (SvgCheckmark);
;// ./static/assets/src/components/reusables/spinners/error.svg
var error_path;
const error_excluded = ["title", "titleId"];
function error_extends() { return error_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, error_extends.apply(null, arguments); }
function error_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = error_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function error_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgError = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = error_objectWithoutProperties(_ref, error_excluded);
  return /*#__PURE__*/react.createElement("svg", error_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, error_path || (error_path = /*#__PURE__*/react.createElement("path", {
    fill: "#E93636",
    d: "M20 .5c-3.9 0-7.6 1.1-10.8 3.3C6 5.9 3.5 9 2 12.5.5 16.1.1 20 .9 23.8s2.6 7.3 5.3 10 6.2 4.6 10 5.3c3.8.8 7.7.4 11.3-1.1s6.6-4 8.8-7.2c2.1-3.2 3.3-7 3.3-10.8 0-5.2-2.1-10.1-5.7-13.8C30.1 2.6 25.2.5 20 .5M18.5 11c0-.4.2-.8.4-1.1.3-.3.7-.4 1.1-.4s.8.2 1.1.4c.3.3.4.7.4 1.1v10.5c0 .4-.2.8-.4 1.1s-.7.4-1.1.4-.8-.2-1.1-.4c-.3-.3-.4-.7-.4-1.1zM20 30.5c-.4 0-.9-.1-1.2-.4s-.7-.6-.8-1c-.2-.4-.2-.9-.1-1.3q.15-.6.6-1.2.45-.45 1.2-.6c.4-.1.9 0 1.3.1.4.2.8.5 1 .8s.4.8.4 1.2c0 .6-.2 1.2-.7 1.6-.5.6-1.1.8-1.7.8"
  })));
};
/* harmony default export */ const error = (SvgError);
;// ./static/assets/src/components/reusables/spinners/spinner.svg
var spinner_path;
const spinner_excluded = ["title", "titleId"];
function spinner_extends() { return spinner_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, spinner_extends.apply(null, arguments); }
function spinner_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = spinner_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function spinner_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgSpinner = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = spinner_objectWithoutProperties(_ref, spinner_excluded);
  return /*#__PURE__*/react.createElement("svg", spinner_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, spinner_path || (spinner_path = /*#__PURE__*/react.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.759 5.19v5.19M31.77 9.747l-3.665 3.665M36.327 20.759h-5.19M31.77 31.77l-3.665-3.665M20.759 36.327v-5.19M9.747 31.77l3.665-3.665M5.19 20.759h5.19M9.747 9.747l3.665 3.665"
  })));
};
/* harmony default export */ const spinner = (SvgSpinner);
;// ./static/assets/src/components/reusables/spinners/warning.svg
var warning_path;
const warning_excluded = ["title", "titleId"];
function warning_extends() { return warning_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, warning_extends.apply(null, arguments); }
function warning_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = warning_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function warning_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgWarning = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = warning_objectWithoutProperties(_ref, warning_excluded);
  return /*#__PURE__*/react.createElement("svg", warning_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, warning_path || (warning_path = /*#__PURE__*/react.createElement("path", {
    fill: "#E2B71D",
    d: "M39.1 31.2 23.7 4.6c-.4-.6-.9-1.2-1.5-1.5-.6-.4-1.4-.6-2.1-.6s-1.5.2-2.1.6-1.2.9-1.5 1.5L1 31.2c-.4.6-.6 1.4-.6 2.1s.2 1.5.6 2.1.9 1.2 1.5 1.5c.6.4 1.4.6 2.1.6h30.8c.7 0 1.5-.2 2.1-.6s1.2-.9 1.5-1.5c.4-.6.6-1.4.6-2.1.1-.7-.1-1.4-.5-2.1M18.7 16.5c0-.4.1-.7.4-1s.6-.4 1-.4.7.1 1 .4.4.6.4 1v7c0 .4-.1.7-.4 1s-.6.4-1 .4-.7-.1-1-.4-.4-.6-.4-1zm1.4 15.4c-.4 0-.8-.1-1.2-.4-.3-.2-.6-.6-.8-.9-.2-.4-.2-.8-.1-1.2s.3-.8.6-1.1.7-.5 1.1-.6.8 0 1.2.1c.4.2.7.4.9.8.2.3.4.8.4 1.2q0 .9-.6 1.5c-.4.4-1 .6-1.5.6"
  })));
};
/* harmony default export */ const warning = (SvgWarning);
;// ./static/assets/src/components/reusables/spinners/whitelist.svg
var _style, _defs, _defs2, _defs3, _defs4, _defs5, _defs6, _defs7, _defs8, _defs9, _defs0, _defs1, _defs10, _defs11, _defs12, _defs13, _defs14, _defs15, _defs16, _defs17, _defs18, _defs19, _defs20, _defs21, _defs22, _defs23, _defs24, _defs25, _defs26, _defs27, _defs28, _defs29, _defs30, _defs31, _defs32, _defs33, _defs34, _defs35, _defs36, _defs37, _defs38, _defs39, _defs40, _defs41, _defs42, _defs43, _defs44, whitelist_path, _path2, _path3, _path4, _path5, _ellipse, _ellipse2;
const whitelist_excluded = ["title", "titleId"];
function whitelist_extends() { return whitelist_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, whitelist_extends.apply(null, arguments); }
function whitelist_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = whitelist_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function whitelist_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgWhitelist = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = whitelist_objectWithoutProperties(_ref, whitelist_excluded);
  return /*#__PURE__*/react.createElement("svg", whitelist_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xmlSpace: "preserve",
    id: "Layer_1",
    x: 0,
    y: 0,
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _style || (_style = /*#__PURE__*/react.createElement("style", null, ".st46{fill:#1d1b2b}.st47{fill:#fff}")), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_1_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000018918372174887251900000015824477832139132297_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_1_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 38.8h40v2.3H0z",
    style: {
      clipPath: "url(#SVGID_00000018918372174887251900000015824477832139132297_)",
      fill: "#fff"
    }
  }), _defs2 || (_defs2 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000061450589948466646510000013504075378911607728_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000055682935648448171650000016603174337301644678_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000061450589948466646510000013504075378911607728_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 37.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000055682935648448171650000016603174337301644678_)",
      fill: "#fff"
    }
  }), _defs3 || (_defs3 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000163034462217135671110000003281837544710597775_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000075864108932851334380000002986285549391122838_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000163034462217135671110000003281837544710597775_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 37h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000075864108932851334380000002986285549391122838_)",
      fill: "#fffeff"
    }
  }), _defs4 || (_defs4 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000006692677491398917330000017482009431168088462_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000003075014919243425030000011766347674950723261_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000006692677491398917330000017482009431168088462_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 36.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000003075014919243425030000011766347674950723261_)",
      fill: "#fffdfe"
    }
  }), _defs5 || (_defs5 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000141442324025079556200000011100813681160334496_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000012438998958180247690000011278953616519101884_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000141442324025079556200000011100813681160334496_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 35.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000012438998958180247690000011278953616519101884_)",
      fill: "#fffcfe"
    }
  }), _defs6 || (_defs6 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000011004148776498408480000017310563633542503075_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000144330688052182505440000016428669231102353283_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000011004148776498408480000017310563633542503075_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 34.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000144330688052182505440000016428669231102353283_)",
      fill: "#fffbfd"
    }
  }), _defs7 || (_defs7 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000155850701760738328060000010413364524085188518_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000048473522845518449670000008113787965347178399_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000155850701760738328060000010413364524085188518_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 33.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000048473522845518449670000008113787965347178399_)",
      fill: "#fffafd"
    }
  }), _defs8 || (_defs8 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000137131541068540407790000016247830109529001619_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000108272877519578440370000001025939932002251165_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000137131541068540407790000016247830109529001619_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 32.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000108272877519578440370000001025939932002251165_)",
      fill: "#fff9fd"
    }
  }), _defs9 || (_defs9 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000109720934535134491310000011648451755277933958_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000162318190728897410240000002855588279128880782_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000109720934535134491310000011648451755277933958_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 31.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000162318190728897410240000002855588279128880782_)",
      fill: "#fff8fc"
    }
  }), _defs0 || (_defs0 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000096747640785436913280000001512168473767242389_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000063592068306203697200000018347425271494145700_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000096747640785436913280000001512168473767242389_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 31h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000063592068306203697200000018347425271494145700_)",
      fill: "#fff7fc"
    }
  }), _defs1 || (_defs1 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000013157299449276695760000003349513374129929912_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160167297034968768660000008956667901020093587_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000013157299449276695760000003349513374129929912_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 30.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160167297034968768660000008956667901020093587_)",
      fill: "#fff6fc"
    }
  }), _defs10 || (_defs10 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000072961236756052102270000006627217966794170288_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000061451857290518586430000006541355441525342346_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000072961236756052102270000006627217966794170288_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 29.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000061451857290518586430000006541355441525342346_)",
      fill: "#fff5fb"
    }
  }), _defs11 || (_defs11 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000120542686423071063450000000505450966208064155_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000133528992170648054940000016960040424049888420_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000120542686423071063450000000505450966208064155_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 28.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000133528992170648054940000016960040424049888420_)",
      fill: "#fff4fb"
    }
  }), _defs12 || (_defs12 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000008119827539101434540000000687617348997178507_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000064331356223243395160000010623984466305916805_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000008119827539101434540000000687617348997178507_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 27.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000064331356223243395160000010623984466305916805_)",
      fill: "#fff3fa"
    }
  }), _defs13 || (_defs13 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000171682524410186990790000005811129307630537647_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000078763078787120445770000007001818294259582600_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000171682524410186990790000005811129307630537647_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 26.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000078763078787120445770000007001818294259582600_)",
      fill: "#fff2fa"
    }
  }), _defs14 || (_defs14 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000065050872124673854550000011491961441940586880_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000057131134804002396060000009557613862229203384_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000065050872124673854550000011491961441940586880_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 25.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000057131134804002396060000009557613862229203384_)",
      fill: "#fff1fa"
    }
  }), _defs15 || (_defs15 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000087385040504023843390000018418788957200632503_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000076563080506624790950000010371028636572745404_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000087385040504023843390000018418788957200632503_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 24.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000076563080506624790950000010371028636572745404_)",
      fill: "#fff0f9"
    }
  }), _defs16 || (_defs16 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000101804543001505160640000015307778896616661144_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000013899847274804831830000000233545883125910147_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000101804543001505160640000015307778896616661144_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 24h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000013899847274804831830000000233545883125910147_)",
      fill: "#ffeff9"
    }
  }), _defs17 || (_defs17 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000117652643455354779510000000732370446844200352_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000155129756036335704530000000175185976145107875_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000117652643455354779510000000732370446844200352_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 23.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000155129756036335704530000000175185976145107875_)",
      fill: "#ffeef9"
    }
  }), _defs18 || (_defs18 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000176745914730401483050000012806336722484400315_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000060733723242332595490000001634423417351642253_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000176745914730401483050000012806336722484400315_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 22.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000060733723242332595490000001634423417351642253_)",
      fill: "#ffedf8"
    }
  }), _defs19 || (_defs19 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000040550745487777584420000000758410058113256618_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000091712846254972437900000013214413499904591794_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000040550745487777584420000000758410058113256618_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 21.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000091712846254972437900000013214413499904591794_)",
      fill: "#ffecf8"
    }
  }), _defs20 || (_defs20 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000050622890411462128450000006918849132186199463_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000134956723128218873730000014747212991663680666_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000050622890411462128450000006918849132186199463_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 20.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000134956723128218873730000014747212991663680666_)",
      fill: "#ffebf7"
    }
  }), _defs21 || (_defs21 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000042013878504789517810000002886984029806200970_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000018227916600075664650000004189574246866099331_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000042013878504789517810000002886984029806200970_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 19.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000018227916600075664650000004189574246866099331_)",
      fill: "#ffeaf7"
    }
  }), _defs22 || (_defs22 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000016072037337204008790000009927608052063207089_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000150807696221521878140000004991997934014485179_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000016072037337204008790000009927608052063207089_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 18.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000150807696221521878140000004991997934014485179_)",
      fill: "#ffe9f7"
    }
  }), _defs23 || (_defs23 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000084514207464486415670000003310696959034258854_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000058578791989943792610000012383172789239653264_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000084514207464486415670000003310696959034258854_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 17.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000058578791989943792610000012383172789239653264_)",
      fill: "#ffe8f6"
    }
  }), _defs24 || (_defs24 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000168111191864700588090000007796528425639013510_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000070078952479914823790000004488696996978778007_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000168111191864700588090000007796528425639013510_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 17.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000070078952479914823790000004488696996978778007_)",
      fill: "#ffe7f6"
    }
  }), _defs25 || (_defs25 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000075130085298569226120000004569212675584808839_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000047766726030502953150000010023485457926448316_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000075130085298569226120000004569212675584808839_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 16.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000047766726030502953150000010023485457926448316_)",
      fill: "#ffe6f5"
    }
  }), _defs26 || (_defs26 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000168116181925040745410000002903075994739185055_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000043452126976694784750000012308186940523659704_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000168116181925040745410000002903075994739185055_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 15.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000043452126976694784750000012308186940523659704_)",
      fill: "#ffe5f5"
    }
  }), _defs27 || (_defs27 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000177448109613987390960000011019027865223704209_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000021812416521141934700000002333976695276009393_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000177448109613987390960000011019027865223704209_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 14.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000021812416521141934700000002333976695276009393_)",
      fill: "#ffe4f5"
    }
  }), _defs28 || (_defs28 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000111151405705220863100000001025211950351930558_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000059989357482531445890000017046315160651017109_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000111151405705220863100000001025211950351930558_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 13.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000059989357482531445890000017046315160651017109_)",
      fill: "#ffe2f4"
    }
  }), _defs29 || (_defs29 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000035520961028888308890000003278063309023780273_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160892813641910849680000011144828949471446192_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000035520961028888308890000003278063309023780273_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 12.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160892813641910849680000011144828949471446192_)",
      fill: "#ffe1f4"
    }
  }), _defs30 || (_defs30 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000140728387563177599840000012730772879254337939_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000037688082872228396440000001000391440606982552_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000140728387563177599840000012730772879254337939_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 11.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000037688082872228396440000001000391440606982552_)",
      fill: "#ffe0f4"
    }
  }), _defs31 || (_defs31 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000062902141774892129720000006726931906645007260_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000053539272798156628880000017065418397300399770_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000062902141774892129720000006726931906645007260_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 11h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000053539272798156628880000017065418397300399770_)",
      fill: "#ffdff3"
    }
  }), _defs32 || (_defs32 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000040547372916521375320000005890058930478112652_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160153280092721671810000004859756486784431748_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000040547372916521375320000005890058930478112652_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 10.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160153280092721671810000004859756486784431748_)",
      fill: "#ffdef3"
    }
  }), _defs33 || (_defs33 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000163059607669502062840000017743019053605817518_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000151511471683653591520000015804692774727439535_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000163059607669502062840000017743019053605817518_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 9.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000151511471683653591520000015804692774727439535_)",
      fill: "#ffddf2"
    }
  }), _defs34 || (_defs34 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000144318015516876581950000010115243927339900334_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000132053964521438257980000004376603876963634310_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000144318015516876581950000010115243927339900334_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 8.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000132053964521438257980000004376603876963634310_)",
      fill: "#ffdcf2"
    }
  }), _defs35 || (_defs35 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000069375009007884915410000012084705223235533990_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000027591519312448932060000002674521480899297195_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000069375009007884915410000012084705223235533990_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 7.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000027591519312448932060000002674521480899297195_)",
      fill: "#ffdbf2"
    }
  }), _defs36 || (_defs36 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000097466014070156734330000018119008136695687863_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000083079768499160939580000002773316710753211056_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000097466014070156734330000018119008136695687863_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 6.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000083079768499160939580000002773316710753211056_)",
      fill: "#ffdaf1"
    }
  }), _defs37 || (_defs37 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000058584356311605613920000016150045757713579408_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000075845908238826625400000012510611160665630597_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000058584356311605613920000016150045757713579408_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 5.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000075845908238826625400000012510611160665630597_)",
      fill: "#ffd9f1"
    }
  }), _defs38 || (_defs38 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000047757054525194763150000002456340682455169461_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000051348588743116802470000001633313117524182157_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000047757054525194763150000002456340682455169461_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 4.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000051348588743116802470000001633313117524182157_)",
      fill: "#ffd8f0"
    }
  }), _defs39 || (_defs39 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000051382489426439920660000003018019370891297153_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000059293702624119336140000001360157132647433360_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000051382489426439920660000003018019370891297153_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000059293702624119336140000001360157132647433360_)",
      fill: "#ffd7f0"
    }
  }), _defs40 || (_defs40 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000170268887129915914900000010352499974422115500_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000123436790536674588720000012719220988143637644_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000170268887129915914900000010352499974422115500_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 3.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000123436790536674588720000012719220988143637644_)",
      fill: "#ffd6f0"
    }
  }), _defs41 || (_defs41 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000003091413043892447630000001266546031989514142_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000103978116915317622890000010407028949154571157_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000003091413043892447630000001266546031989514142_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 2.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000103978116915317622890000010407028949154571157_)",
      fill: "#ffd5ef"
    }
  }), _defs42 || (_defs42 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000176737943936596983000000007461901653307844785_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000168110594437402215340000007824184069559080593_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000176737943936596983000000007461901653307844785_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 1.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000168110594437402215340000007824184069559080593_)",
      fill: "#ffd4ef"
    }
  }), _defs43 || (_defs43 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000018232783389487562290000008517843368293322889_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000045582657913821574560000008704575164935371400_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000018232783389487562290000008517843368293322889_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 .6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000045582657913821574560000008704575164935371400_)",
      fill: "#ffd3ef"
    }
  }), _defs44 || (_defs44 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000051377637767468729150000006262176937780331137_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000178168343591342257400000000584671388335673478_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000051377637767468729150000006262176937780331137_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 .2h40v.4H0z",
    style: {
      clipPath: "url(#SVGID_00000178168343591342257400000000584671388335673478_)",
      fill: "#ffd2ee"
    }
  }), whitelist_path || (whitelist_path = /*#__PURE__*/react.createElement("path", {
    d: "M20 40c-6.3 0-12.6-1.3-18.5-3.9-.6-.3-1.3-.6-1.4-1.4-.2-.9.4-1.5 1-2.1l.5-.5c.8-1 1-2.5 1-3.9.1-1.8.1-3.6.1-5.5v-4.6c.1-3.7.9-7 2.3-9.7-.1-.1 0-.3.1-.5 1.2-2.2 3-4.1 5.2-5.5C13.8.2 18.3 0 20.1 0c3.4 0 8.6 1.1 11.8 4.4 1.8 1.8 3.3 4.1 4.2 6.5 1.3 3.6 1.4 7.6 1.4 11.4v2.8c0 2.7-.1 5.5 1.5 7.4l.1.2c.5.6 1.1 1.4.8 2.2-.2.6-.7.9-1.2 1.1-5.9 2.7-12.3 4-18.7 4M20.1.4c-1.7 0-6.1.2-9.5 2.4Q7.3 4.9 5.5 8.2c-.1.1-.2.3-.3.5-1.4 2.6-2.1 5.9-2.2 9.5v4.5c0 1.9 0 3.6-.1 5.5-.1 1.5-.2 3.1-1.1 4.2-.1.2-.3.4-.5.5-.5.6-1 1.1-.9 1.7.1.5.7.8 1.2 1.1 11.7 5.2 25.2 5.2 36.9-.1.4-.2.9-.4 1-.8.2-.6-.3-1.3-.8-1.8l-.1-.2C37 30.7 37 27.9 37 25.1v-2.8c0-3.8-.1-7.7-1.4-11.3-.9-2.4-2.3-4.6-4.1-6.3-3-3.2-8.1-4.3-11.4-4.3",
    className: "st46"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M21.9 27c-.1 0-.3-.1-.3-.2 0-.5 0-1.2-.2-1.8s-.7-.9-1.4-.9-1.2.3-1.4.9-.2 1.3-.2 1.8c0 .1-.1.2-.3.2-.1 0-.3-.1-.3-.2 0-.5 0-1.3.2-1.9.3-.8 1-1.2 1.9-1.2s1.6.4 1.9 1.2c.2.6.2 1.4.2 1.9.2.1.1.2-.1.2M14.5 22.4h-2.4c-.7 0-1.3-.6-1.3-1.3v-6.7c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3",
    className: "st46"
  })), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M13.3 22.6c-1.5 0-2.7-1.3-2.7-2.8v-4.1c0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8v4.1c0 1.5-1.2 2.8-2.7 2.8m0-9.3c-1.3 0-2.3 1.1-2.3 2.4v4.1c0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4v-4.1c0-1.3-1-2.4-2.3-2.4M27.6 22.4h-2.4c-.7 0-1.3-.6-1.3-1.3v-6.7c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3",
    className: "st46"
  })), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
    d: "M26.4 22.6c-1.5 0-2.7-1.3-2.7-2.8v-4.1c0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8v4.1c0 1.5-1.2 2.8-2.7 2.8m0-9.3c-1.3 0-2.3 1.1-2.3 2.4v4.1c0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4v-4.1c0-1.3-1-2.4-2.3-2.4",
    className: "st46"
  })), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
    d: "M13.7 14.6c-.2 0-.5.1-.7.2-.3.2-.3.6 0 .8l.3.2c.2.2.3.6 0 .8l-.3.3c-.3.2-.2.7.1.8.2.1.4.2.6.2.8 0 1.4-.7 1.4-1.6 0-1-.7-1.7-1.4-1.7M26.7 14.6c-.2 0-.5.1-.7.2-.3.2-.3.6 0 .8l.3.2c.2.2.3.6 0 .8l-.3.3c-.3.2-.2.7.1.8.2.1.4.2.6.2.8 0 1.4-.7 1.4-1.6 0-1-.6-1.7-1.4-1.7",
    className: "st47"
  })), _ellipse || (_ellipse = /*#__PURE__*/react.createElement("ellipse", {
    cx: 14.6,
    cy: 20.5,
    className: "st47",
    rx: 0.4,
    ry: 0.5
  })), _ellipse2 || (_ellipse2 = /*#__PURE__*/react.createElement("ellipse", {
    cx: 27.7,
    cy: 20.5,
    className: "st47",
    rx: 0.4,
    ry: 0.5
  })));
};
/* harmony default export */ const whitelist = (SvgWhitelist);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/reusables/spinners/SpinnerUnit.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types *//* eslint-disable */// React + Web3 Essentials
// External Packages
// Internal Compoonents
// Import Assets
// Internal Configs
// Interfaces
// Constants
const SPINNER_TYPE={PROCESSING:1,WARNING:2,ERROR:3,COMPLETED:4,WHITELIST:5};// Create Spinner
function Spinner(_ref){let _ref$size=_ref.size,size=_ref$size===void 0?42:_ref$size,_ref$color=_ref.color,color=_ref$color===void 0?globals/* default */.Ay.COLORS.PRIMARY_COLOR:_ref$color,_ref$type=_ref.type,type=_ref$type===void 0?SPINNER_TYPE.PROCESSING:_ref$type;return/*#__PURE__*/(0,jsx_runtime.jsxs)(SpinLoader,{flex:"initial",alignSelf:"center",color:color,width:size+"px",completed:type==SPINNER_TYPE.PROCESSING?false:true,children:[type==SPINNER_TYPE.PROCESSING&&/*#__PURE__*/(0,jsx_runtime.jsx)(spinner,{}),type==SPINNER_TYPE.ERROR&&/*#__PURE__*/(0,jsx_runtime.jsx)(error,{}),type==SPINNER_TYPE.WARNING&&/*#__PURE__*/(0,jsx_runtime.jsx)(warning,{}),type==SPINNER_TYPE.COMPLETED&&/*#__PURE__*/(0,jsx_runtime.jsx)(checkmark,{}),type==SPINNER_TYPE.WHITELIST&&/*#__PURE__*/(0,jsx_runtime.jsx)(whitelist,{})]});}const spinAnimation=(0,styled_components_browser_esm.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);const SpinLoader=(0,styled_components_browser_esm["default"])(SharedStyling/* ItemV */.y8).withConfig({displayName:"SpinnerUnit__SpinLoader",componentId:"sc-red8q7-0"})(["color:",";",""],props=>props.color,props=>!props.completed&&(0,styled_components_browser_esm.css)(["animation-name:",";animation-duration:2500ms;animation-iteration-count:infinite;animation-timing-function:linear;"],spinAnimation));

/***/ },

/***/ 247991
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var _home_runner_work_push_chain_website_push_chain_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198587);
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(978478);
/* harmony import */ var _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267489);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(721312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426058);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(662685);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(144586);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(992303);
/* harmony import */ var _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(495466);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61530);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(113490);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(320053);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(296540);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(242644);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(791409);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(204661);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(474848);
const _excluded=["children","transformCode"];const CodingEnvironment={REACT:'React',NODEJS:'NodeJS'};function Header(_ref){let children=_ref.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.playgroundHeader),children:children});}function LivePreviewLoader(_ref2){let codeEnv=_ref2.codeEnv;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{style:{padding:codeEnv==CodingEnvironment.NODEJS?'1rem 1rem 0 1rem':'0',display:'flex',justifyContent:'center',alignItems:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{size:42,color:_site_src_config_globals__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.COLORS.PRIMARY_COLOR,type:_site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_8__/* .SPINNER_TYPE */ .N.PROCESSING})});}function Preview(_ref3){let codeEnv=_ref3.codeEnv;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{fallback:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(LivePreviewLoader,{codeEnv:codeEnv}),children:()=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{fallback:params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ErrorBoundaryErrorMessageFallback */ .MN,Object.assign({},params)),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_live__WEBPACK_IMPORTED_MODULE_14__/* .LivePreview */ .pA,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_live__WEBPACK_IMPORTED_MODULE_14__/* .LiveError */ .p1,{})]})});}function ResultWithHeader(_ref4){let title=_ref4.title,codeEnv=_ref4.codeEnv,hidden=_ref4.hidden,code=_ref4.code;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),copied=_useState[0],setCopied=_useState[1];const _useState2=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),shared=_useState2[0],setShared=_useState2[1];const displayTitle=title||/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"LIVE PREVIEW"});const previewClass=_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.playgroundPreview+" preview"+codeEnv;const compressCode=code=>{try{// Use TextEncoder for proper Unicode handling
const encoder=new TextEncoder();const data=encoder.encode(code);const binaryString=String.fromCharCode(...data);return btoa(binaryString);}catch(err){console.error('Compression failed, using plain encoding',err);return encodeURIComponent(code);}};const handleCopy=async()=>{try{const liveEdited=typeof window!=='undefined'?window.__playgroundLiveCode:null;const match=code.match(/const\s+defaultCode\s*=\s*`([\s\S]*?)`;/);const extractedCode=liveEdited!==null&&liveEdited!==void 0?liveEdited:match?match[1]:'';await navigator.clipboard.writeText(extractedCode);setCopied(true);setTimeout(()=>setCopied(false),2000);// reset after 2s
// Track copy event
if(typeof window!=='undefined'&&window.gtag){const pageUrl=window.location.pathname;const codeHash=extractedCode.substring(0,50).replace(/\s+/g,'_');window.gtag('event','code_snippet_copy',{event_category:'code_playground',event_label:pageUrl+"::"+codeHash,page_url:pageUrl,snippet_preview:codeHash,code_env:codeEnv});}}catch(err){console.error('Failed to copy',err);}};const handleShare=async e=>{try{const liveEdited=typeof window!=='undefined'?window.__playgroundLiveCode:null;const match=code.match(/const\s+defaultCode\s*=\s*`([\s\S]*?)`;/);const extractedCode=liveEdited!==null&&liveEdited!==void 0?liveEdited:match?match[1]:code;const compressedCode=compressCode(extractedCode);const ideType=codeEnv===CodingEnvironment.NODEJS?'node':'react';const shareUrl=window.location.origin+"/docs/chain/code-snippet#code="+compressedCode+"&ide="+ideType;await navigator.clipboard.writeText(shareUrl);setShared(true);setTimeout(()=>setShared(false),2000);// reset after 2s
// Track share event
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','code_snippet_share',{event_category:'code_playground',event_label:shareUrl,share_url:shareUrl,code_env:codeEnv,page_url:window.location.pathname});}}catch(err){console.error('Failed to share',err);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Header,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .ItemH */ .Oj,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .ItemV */ .y8,{flex:"1",alignItems:"flex-start",children:displayTitle}),hidden&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltipWrapper,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyButton */ .i8,{onClick:handleShare,style:{marginRight:'8px'},children:shared?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCheck */ .YrT,{color:"var(--ifm-positive-action-color)"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiLink */ .ayE,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip,children:shared?'Copied!':'Copy playground link'})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltipWrapper,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyButton */ .i8,{onClick:handleCopy,children:copied?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCheck */ .YrT,{color:"var(--ifm-positive-action-color)"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCopy */ .nxz,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip,children:copied?'Copied!':'Copy code'})]})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:previewClass,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Preview,{codeEnv:codeEnv})})]});}function ThemedLiveEditor(_ref5){let code=_ref5.code,className=_ref5.className;const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_live__WEBPACK_IMPORTED_MODULE_14__/* .LiveEditor */ .w,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.playgroundEditor,className),code:code},String(isBrowser));}function EditorWithHeader(_ref6){let minimized=_ref6.minimized,code=_ref6.code,title=_ref6.title,codeEnv=_ref6.codeEnv;const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(minimized),minimizedState=_useState3[0],setMinimizedState=_useState3[1];const _useState4=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),copied=_useState4[0],setCopied=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),shared=_useState5[0],setShared=_useState5[1];const liveEditorClasses="liveEditor"+codeEnv;const displayTitle=title||/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"REACT PLAYGROUND"});const handleCopy=async e=>{e.stopPropagation();try{const currentCode=typeof window!=='undefined'&&window.__playgroundLiveCode?window.__playgroundLiveCode:code;await navigator.clipboard.writeText(currentCode);setCopied(true);setTimeout(()=>setCopied(false),2000);// reset after 2s
// Track copy event
if(typeof window!=='undefined'&&window.gtag){const pageUrl=window.location.pathname;const codeHash=currentCode.substring(0,50).replace(/\s+/g,'_');window.gtag('event','code_snippet_copy',{event_category:'code_playground',event_label:pageUrl+"::"+codeHash,page_url:pageUrl,snippet_preview:codeHash,code_env:codeEnv});}}catch(err){console.error('Failed to copy',err);}};const compressCode=code=>{try{// Use TextEncoder for proper Unicode handling
const encoder=new TextEncoder();const data=encoder.encode(code);const binaryString=String.fromCharCode(...data);return btoa(binaryString);}catch(err){console.error('Compression failed, using plain encoding',err);return encodeURIComponent(code);}};const handleShare=async e=>{e.stopPropagation();try{const currentCode=typeof window!=='undefined'&&window.__playgroundLiveCode?window.__playgroundLiveCode:code;const compressedCode=compressCode(currentCode);const ideType=codeEnv===CodingEnvironment.NODEJS?'node':'react';const shareUrl=window.location.origin+"/docs/chain/code-snippet#code="+compressedCode+"&ide="+ideType;await navigator.clipboard.writeText(shareUrl);setShared(true);setTimeout(()=>setShared(false),2000);// reset after 2s
// Track share event
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','code_snippet_share',{event_category:'code_playground',event_label:shareUrl,share_url:shareUrl,code_env:codeEnv,page_url:window.location.pathname});}}catch(err){console.error('Failed to share',err);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(Header,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .$n,{onClick:()=>setMinimizedState(!minimizedState),textTransform:"uppercase",background:"transparent",padding:"0px",display:"flex",hoverBackground:"transparent",borderRadius:"0px",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",zIndex:1}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .ItemH */ .Oj,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .ItemV */ .y8,{flex:"1",alignItems:"flex-start",children:displayTitle}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyContainer */ .lH,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltipWrapper,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyButton */ .i8,{onClick:handleShare,style:{marginRight:'8px'},children:shared?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCheck */ .YrT,{color:"var(--ifm-positive-action-color)"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiLink */ .ayE,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip,children:shared?'Copied!':'Copy playground link'})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltipWrapper,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyButton */ .i8,{onClick:handleCopy,children:copied?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCheck */ .YrT,{color:"var(--ifm-positive-action-color)"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCopy */ .nxz,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip,children:copied?'Copied!':'Copy code'})]}),minimizedState?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiChevronDown */ .fK4,{}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiChevronUp */ .wAb,{})]})]})]}),!minimizedState&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(ThemedLiveEditor,{code:code,className:liveEditorClasses})]});}function changeToExecutableCode(code,isNodeJSEnv){const execCode=!isNodeJSEnv?code.split('\n').reduce((acc,line)=>{// If we're not in an import statement and this line doesn't start an import,
// keep the line
if(!acc.inImport&&!line.trim().startsWith('import')){return{inImport:false,lines:[...acc.lines,line]};}// If this line contains a semicolon, we're done with the import
if(line.includes(';')){return{inImport:false,lines:acc.lines};}// Otherwise we're in an import statement
return{inImport:true,lines:acc.lines};},{inImport:false,lines:[]}).lines.join('\n').replace(/^\n/,'').trimEnd():code;return execCode;}function Playground(_ref7){var _props$metastring$inc,_props$metastring;let rawChildren=_ref7.children,transformCode=_ref7.transformCode,props=(0,_home_runner_work_push_chain_website_push_chain_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref7,_excluded);const _useState6=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null),liveScope=_useState6[0],setLiveScope=_useState6[1];const _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(),themeConfig=_useDocusaurusContext.siteConfig.themeConfig;const playgroundPosition=themeConfig.liveCodeBlock.playgroundPosition;const prismTheme=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .usePrismTheme */ .A)();const noInline=(_props$metastring$inc=(_props$metastring=props.metastring)===null||_props$metastring===void 0?void 0:_props$metastring.includes('noInline'))!==null&&_props$metastring$inc!==void 0?_props$metastring$inc:false;// ——— Custom props from any leading comment lines ———
const lines=rawChildren.split('\n');let idx=0;let minimized=false;let hidden=false;let isNodeJSEnv=false;let highlightRegexStart=null;let highlightRegexEnd=null;let gtagEventLabel='code_execution';// Process all top comment lines
while(idx<lines.length&&lines[idx].trim().startsWith('//')){const line=lines[idx];if(/\/\/\s*customPropMinimized=['"]true['"]/.test(line))minimized=true;if(/\/\/\s*customPropHidden=['"]true['"]/.test(line))hidden=true;if(/\/\/\s*customPropNodeJSEnv=['"]true['"]/.test(line))isNodeJSEnv=true;// Check for start regex
const matchStart=line.match(/\/\/\s*customPropHighlightRegexStart=(.+)$/);if(matchStart){// rawValue is everything after the "=" on that comment line
highlightRegexStart=matchStart[1].trim();}// Check for end regex
const matchEnd=line.match(/\/\/\s*customPropHighlightRegexEnd=(.+)$/);if(matchEnd){highlightRegexEnd=matchEnd[1].trim();}// Check for gtag event label
const matchGtag=line.match(/\/\/\s*customPropGTagEvent=(.+)$/);if(matchGtag){gtagEventLabel=matchGtag[1].trim();}// remove any customProp flags from this line
lines[idx]=lines[idx].replace(/\/\/\s*customPropMinimized=['"](\w+)['"]/,'').replace(/\/\/\s*customPropHidden=['"](\w+)['"]/,'').replace(/\/\/\s*customPropNodeJSEnv=['"](\w+)['"]/,'').replace(/\/\/\s*customPropHighlightRegexStart=.*$/,'').replace(/\/\/\s*customPropHighlightRegexEnd=.*$/,'').replace(/\/\/\s*customPropGTagEvent=.*$/,'');// if line is now just whitespace or comment, drop it
if(lines[idx].trim()==='//'){lines.splice(idx,1);}else{idx++;}}const strippedChildren=lines.join('\n');// ——— remove imports for execution ———
// but only if it's not a nodejs environment
const execCode=changeToExecutableCode(strippedChildren,isNodeJSEnv);// ——— remove empty lines from top and bottom for execution ———
const displayCode=strippedChildren.trim();// decide code environment
const codeEnv=isNodeJSEnv?CodingEnvironment.NODEJS:CodingEnvironment.REACT;(0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{const attachGlobals=async()=>{if(typeof globalThis.Buffer==='undefined'){const buffer=await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 348287, 19));globalThis.Buffer=buffer.Buffer;}if(typeof globalThis.process==='undefined'){globalThis.process={env:{}};}if(typeof globalThis.global==='undefined'){globalThis.global=globalThis;}setLiveScope({Buffer:globalThis.Buffer,process:globalThis.process,global:globalThis});};attachGlobals();},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.playgroundContainer,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_live__WEBPACK_IMPORTED_MODULE_14__/* .LiveProvider */ .Q,Object.assign({code:execCode,noInline:noInline,transformCode:code=>{if(!isNodeJSEnv&&typeof window!=='undefined')window.__playgroundLiveCode=code;// Track React Live code execution
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','react_live_run',{event_category:isNodeJSEnv?'documentation_core':'documentation_ui',event_label:gtagEventLabel,value:1});}return changeToExecutableCode(code,isNodeJSEnv)+";";},theme:prismTheme,scope:liveScope},props,{children:playgroundPosition==='top'?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(ResultWithHeader,{title:isNodeJSEnv?'VIRTUAL NODE IDE':'LIVE APP PREVIEW',codeEnv:codeEnv,hidden:hidden,code:execCode}),!hidden&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:highlightRegexStart?'push-live-editor push-apply-highlight-in-live-editor':'push-live-editor',"data-highlight-regex-start":highlightRegexStart,"data-highlight-regex-end":highlightRegexEnd,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(EditorWithHeader,{code:displayCode,minimized:minimized,title:isNodeJSEnv?'VIRTUAL NODE IDE INNER':'REACT PLAYGROUND',codeEnv:codeEnv})})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[!hidden&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:highlightRegexStart?'push-live-editor push-apply-highlight-in-live-editor':'push-live-editor',"data-highlight-regex-start":highlightRegexStart,"data-highlight-regex-end":highlightRegexEnd,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(EditorWithHeader,{code:displayCode,minimized:minimized,title:isNodeJSEnv?'VIRTUAL NODE IDE INNER':'REACT PLAYGROUND',codeEnv:codeEnv})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(ResultWithHeader,{title:isNodeJSEnv?'VIRTUAL NODE IDE':'LIVE APP PREVIEW',codeEnv:codeEnv,hidden:hidden,code:execCode})]})}))});}

/***/ },

/***/ 351433
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(978478);
/* harmony import */ var _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495466);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61530);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(296540);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(791409);
// This function returns a promise that resolves to the library,
// ensuring it's only imported on the client side.
function loadClientSideLibraryEthers(constantName){return typeof window!=='undefined'?__webpack_require__(714193)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibrarySolana(constantName){return typeof window!=='undefined'?__webpack_require__(132712)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryViem(constantName){return typeof window!=='undefined'?__webpack_require__(252603)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryViemAccounts(constantName){return typeof window!=='undefined'?__webpack_require__(656940)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryViemChains(constantName){return typeof window!=='undefined'?__webpack_require__(314498)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryViemUtils(constantName){return typeof window!=='undefined'?__webpack_require__(304661)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryBS58(){return typeof window!=='undefined'?(__webpack_require__(698957)["default"])||__webpack_require__(698957):{};// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryOpenZepplinMerkleTree(constantName){if(typeof window==='undefined'){return{};// Return an empty object for SSR
}// StandardMerkleTree is in the main export
if(constantName==='StandardMerkleTree'){return __webpack_require__(782971)[constantName];}// Other utilities are in dist/core.js
return __webpack_require__(946452)[constantName];}function loadClientSideLibraryPushChainUIKit(constantName){return typeof window!=='undefined'?__webpack_require__(527130)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryPushChainCore(constantName){return typeof window!=='undefined'?__webpack_require__(861282)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideReactIconsBS(iconName){return typeof window!=='undefined'?__webpack_require__(796710)[iconName]:()=>null;}const ReactLiveScope=Object.assign({React: react__WEBPACK_IMPORTED_MODULE_3__},react__WEBPACK_IMPORTED_MODULE_3__,{LiveEditor: react_live__WEBPACK_IMPORTED_MODULE_4__/* .LiveEditor */ .w,LiveProvider: react_live__WEBPACK_IMPORTED_MODULE_4__/* .LiveProvider */ .Q,LiveError: react_live__WEBPACK_IMPORTED_MODULE_4__/* .LiveError */ .p1,LivePreview: react_live__WEBPACK_IMPORTED_MODULE_4__/* .LivePreview */ .pA,BrowserOnly: _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,Spinner: _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,SPINNER_TYPE: _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__/* .SPINNER_TYPE */ .N,GLOBALS: _site_src_config_globals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay,// Asynchronously import ethers and PushAPI only on the client side
ethers:loadClientSideLibraryEthers('ethers'),Keypair:loadClientSideLibrarySolana('Keypair'),PublicKey:loadClientSideLibrarySolana('PublicKey'),createWalletClient:loadClientSideLibraryViem('createWalletClient'),createPublicClient:loadClientSideLibraryViem('createPublicClient'),http:loadClientSideLibraryViem('http'),parseTransaction:loadClientSideLibraryViem('parseTransaction'),TypedData:loadClientSideLibraryViem('TypedData'),TypedDataDomain:loadClientSideLibraryViem('TypedDataDomain'),defineChain:loadClientSideLibraryViem('defineChain'),webSocket:loadClientSideLibraryViem('webSocket'),keccak256:loadClientSideLibraryViem('keccak256'),privateKeyToAccount:loadClientSideLibraryViemAccounts('privateKeyToAccount'),generatePrivateKey:loadClientSideLibraryViemAccounts('generatePrivateKey'),sepolia:loadClientSideLibraryViemChains('sepolia'),hexToBytes:loadClientSideLibraryViemUtils('hexToBytes'),bytesToHex:loadClientSideLibraryViemUtils('bytesToHex'),bs58:loadClientSideLibraryBS58(),// StandardMerkleTree - Open Zeppelin
StandardMerkleTree:loadClientSideLibraryOpenZepplinMerkleTree('StandardMerkleTree'),PushUniversalWalletProvider:loadClientSideLibraryPushChainUIKit('PushUniversalWalletProvider'),PushUniversalAccountButton:loadClientSideLibraryPushChainUIKit('PushUniversalAccountButton'),usePushWalletContext:loadClientSideLibraryPushChainUIKit('usePushWalletContext'),usePushChainClient:loadClientSideLibraryPushChainUIKit('usePushChainClient'),usePushChain:loadClientSideLibraryPushChainUIKit('usePushChain'),PushUI:loadClientSideLibraryPushChainUIKit('PushUI'),PushChain:loadClientSideLibraryPushChainCore('PushChain'),BsBoxArrowUpRight:loadClientSideReactIconsBS('BsBoxArrowUpRight')});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactLiveScope);

/***/ },

/***/ 318480
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"details":"details_b_Ee"});
    if(true) {
      (function() {
        var localsJsonString = "{\"details\":\"details_b_Ee\"}";
        // 1785760660656
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tabItem":"tabItem_Ymn6"});
    if(true) {
      (function() {
        var localsJsonString = "{\"tabItem\":\"tabItem_Ymn6\"}";
        // 1785760660649
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
    if(true) {
      (function() {
        var localsJsonString = "{\"tabList\":\"tabList__CuJ\",\"tabItem\":\"tabItem_LNqP\"}";
        // 1785760660648
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
    if(true) {
      (function() {
        var localsJsonString = "{\"details\":\"details_lb9f\",\"isBrowser\":\"isBrowser_bmU9\",\"collapsibleContent\":\"collapsibleContent_i85q\"}";
        // 1785760679962
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

/***/ 204661
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"playgroundContainer":"playgroundContainer_TGbA","playgroundHeader":"playgroundHeader_qwyd","pulsate":"pulsate_mTgU","playgroundEditor":"playgroundEditor_PvJ1","playgroundPreview":"playgroundPreview_bb8I","tooltipWrapper":"tooltipWrapper_tSrh","tooltip":"tooltip_RfzO"});
    if(true) {
      (function() {
        var localsJsonString = "{\"playgroundContainer\":\"playgroundContainer_TGbA\",\"playgroundHeader\":\"playgroundHeader_qwyd\",\"pulsate\":\"pulsate_mTgU\",\"playgroundEditor\":\"playgroundEditor_PvJ1\",\"playgroundPreview\":\"playgroundPreview_bb8I\",\"tooltipWrapper\":\"tooltipWrapper_tSrh\",\"tooltip\":\"tooltip_RfzO\"}";
        // 1785760675900
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

/***/ 788564
(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 788564;
module.exports = webpackEmptyContext;

/***/ },

/***/ 578982
() {

/* (ignored) */

/***/ },

/***/ 847790
() {

/* (ignored) */

/***/ },

/***/ 73776
() {

/* (ignored) */

/***/ },

/***/ 321638
() {

/* (ignored) */

/***/ },

/***/ 192668
() {

/* (ignored) */

/***/ },

/***/ 277965
() {

/* (ignored) */

/***/ },

/***/ 650477
() {

/* (ignored) */

/***/ },

/***/ 966089
() {

/* (ignored) */

/***/ },

/***/ 479368
() {

/* (ignored) */

/***/ },

/***/ 708460
() {

/* (ignored) */

/***/ },

/***/ 492382
() {

/* (ignored) */

/***/ },

/***/ 957025
() {

/* (ignored) */

/***/ },

/***/ 277667
() {

/* (ignored) */

/***/ },

/***/ 464688
() {

/* (ignored) */

/***/ },

/***/ 751069
() {

/* (ignored) */

/***/ },

/***/ 715340
() {

/* (ignored) */

/***/ },

/***/ 979838
() {

/* (ignored) */

/***/ },

/***/ 271281
() {

/* (ignored) */

/***/ }

}]);