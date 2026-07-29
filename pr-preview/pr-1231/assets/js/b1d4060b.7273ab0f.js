(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[98536],{

/***/ 735906
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
  metadata: () => (/* reexport */ site_docs_chain_03_build_08_send_multichain_transactions_mdx_b1d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-08-send-multichain-transactions-mdx-b1d.json
const site_docs_chain_03_build_08_send_multichain_transactions_mdx_b1d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-send-multichain-transactions","title":"Send Multichain Transactions","description":"Send Multichain Transactions | Build | Push Chain Docs","source":"@site/docs/chain/03-build/08-Send-Multichain-Transactions.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/send-multichain-transactions","permalink":"/push-chain-website/pr-preview/pr-1231/docs/chain/build/send-multichain-transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/08-Send-Multichain-Transactions.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"docs-chain-build-send-multichain-transactions","title":"Send Multichain Transactions","hide_title":false,"slug":"./send-multichain-transactions","displayed_sidebar":"pushChainSidebar","sidebar_position":8,"image":"/assets/docs/previews/docs_chain_build--send_multichain_transactions.png"},"sidebar":"pushChainSidebar","previous":{"title":"Universal Transaction Scenarios","permalink":"/push-chain-website/pr-preview/pr-1231/docs/chain/build/universal-transaction-scenarios"},"next":{"title":"Contract-Initiated Multichain Execution","permalink":"/push-chain-website/pr-preview/pr-1231/docs/chain/build/contract-initiated-multichain-execution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
// EXTERNAL MODULE: ./src/components/ConstantsDropdown/ConstantsDropdown.tsx
var ConstantsDropdown = __webpack_require__(510103);
// EXTERNAL MODULE: ./src/components/NodeJSVirtualIDE/NodeJSVirtualIDE.tsx
var NodeJSVirtualIDE = __webpack_require__(891517);
;// ./docs/chain/03-build/08-Send-Multichain-Transactions.mdx


const frontMatter = {
	id: 'docs-chain-build-send-multichain-transactions',
	title: 'Send Multichain Transactions',
	hide_title: false,
	slug: './send-multichain-transactions',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 8,
	image: '/assets/docs/previews/docs_chain_build--send_multichain_transactions.png'
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
  "value": "Mental Model",
  "id": "mental-model",
  "level": 3
}, {
  "value": "Prepare Transaction",
  "id": "prepare-transaction",
  "level": 2
}, {
  "value": "Execute Transactions",
  "id": "execute-transactions",
  "level": 2
}, {
  "value": "More Examples",
  "id": "more-examples",
  "level": 2
}, {
  "value": "Batch Contract Calls: Push Chain + BNB + Solana in One Signature",
  "id": "batch-contract-calls-push-chain--bnb--solana-in-one-signature",
  "level": 3
}, {
  "value": "Cross-Chain AMM Swap: ETH → pSOL via Push Chain AMM",
  "id": "cross-chain-amm-swap-eth--psol-via-push-chain-amm",
  "level": 3
}, {
  "value": "Key Considerations",
  "id": "key-considerations",
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
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
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
        children: "Send Multichain Transactions | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multichain transactions let you compose multiple universal transactions into a single ordered flow across different routes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This allows you to submit a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single user-signed transaction"
      }), " to Push Chain that coordinates execution across Push Chain, external chains, or both."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisite:"
      }), " Familiarize yourself with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/send-universal-transaction",
        children: "Send Universal Transaction"
      }), " before reading this page."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mental-model",
      children: "Mental Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prepare"
        }), " each transaction step with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prepareTransaction"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute"
        }), " all steps together with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executeTransactions"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prepare-transaction",
      children: "Prepare Transaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pushChainClient.universal.prepareTransaction({tx}): Promise<PreparedUniversalTx>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prepares a transaction without executing it. Returns a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PreparedUniversalTx"
      }), " object that you pass to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "executeTransactions"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const preparedTx = await pushChainClient.universal.prepareTransaction({\n  to: '0xContractAddress',\n  value: BigInt(0),\n  data: PushChain.utils.helpers.encodeTxData({\n    abi: MyABI,\n    functionName: 'myFunction',\n    args: [arg1, arg2],\n  }),\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PreparedUniversalTx"
        }), " is an intermediate object that you pass to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executeTransactions"
        }), ". Most apps do not need to manually inspect or modify its fields."]
      })]
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
              children: ["Target address on Push Chain (plain string), or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "{ address, chain }"
              }), " for an external chain via CEA. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.from"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ chain: CHAIN }"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional. When set, originates from the CEA on that chain."
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
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Native value to send in the smallest unit of the execution context."
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
              }), ". ", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "Use ", (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/chain/build/utility-functions#encode-transaction-data",
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "encodeTxData"
                })
              }), " to produce the correct bytes for EVM (ABI) or Solana (Anchor IDL) targets."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "tx.funds"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{ amount: bigint; token?: MoveableToken }"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Move tokens from origin chain atomically with the call. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.MOVEABLE.TOKEN.<CHAIN>.<TOKEN>"
              }), "."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "prepareTransaction"
        }), " accepts the same transaction arguments as ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-universal-transaction",
          children: "Send Universal Transaction"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `PreparedUniversalTx` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Property"
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
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "route"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "'UOA_TO_PUSH'"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'UOA_TO_CEA'"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'CEA_TO_PUSH'"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'CEA_TO_CEA'"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Detected routing mode for this transaction."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "estimatedGas"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bigint"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Estimated gas units for execution."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "nonce"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bigint"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Nonce to use for submission."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "deadline"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bigint"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Signature expiry deadline."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "payload"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Encoded payload ready for submission."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "gatewayRequest"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "object"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Gateway request object (inbound or outbound)."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Inspect PreparedUniversalTx",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/send-universal-transaction"
        },
        children: `
// customPropHighlightRegexStart=prepareTransaction
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=prepare_transaction

  // Inspect PreparedUniversalTx before sending
  import { PushChain } from '@pushchain/core';
  import { ethers } from 'ethers';

  const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';

  const COUNTER_ABI = [
    { inputs: [], name: 'increment', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  ];
  const COUNTER_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

  async function main() {
    const wallet = ethers.Wallet.createRandom();
    const provider = new ethers.JsonRpcProvider(RPC_SEPOLIA);
    const signer = wallet.connect(provider);
    console.log('🔑 Sepolia account:', wallet.address);

    const universalSigner = await PushChain.utils.signer.toUniversal(signer);
    const client = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    // Route 1: prepare a Push Chain transaction without sending it
    const prepared = await client.universal.prepareTransaction({
      to: COUNTER_ADDRESS,
      value: BigInt(0),
      data: PushChain.utils.helpers.encodeTxData({
        abi: COUNTER_ABI,
        functionName: 'increment',
      }),
    });

    console.log('📋 route:', prepared.route);
    console.log('⛽ estimatedGas:', prepared.estimatedGas.toString());
    console.log('🔢 nonce:', prepared.nonce.toString());
    console.log('⏱️  deadline:', prepared.deadline.toString());
    console.log('📦 Returned PreparedUniversalTx:', JSON.stringify(prepared));

    // Route 2: prepare a cross-chain transaction
    const preparedCrossChain = await client.universal.prepareTransaction({
      to: { address: COUNTER_ADDRESS, chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
      value: BigInt(0),
      data: PushChain.utils.helpers.encodeTxData({
        abi: COUNTER_ABI,
        functionName: 'increment',
      }),
    });

    console.log('📋 cross-chain route:', preparedCrossChain.route);
    console.log('⛽ estimatedGas:', preparedCrossChain.estimatedGas.toString());

    console.log('📦 Returned PreparedUniversalTx:', JSON.stringify(preparedCrossChain));
  }

  await main().catch(console.error);
`
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "execute-transactions",
      children: "Execute Transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pushChainClient.universal.executeTransactions(txs: PreparedUniversalTx[], options?: { progressHook? }): Promise<CascadedTxResponse>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Executes an ordered array of prepared transactions as a multichain flow. This is submitted and handled as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "single transaction"
      }), ". You sign once, and the SDK coordinates execution across Push Chain and supported external chains automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each prepared transaction becomes one ordered step in the multichain flow."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const step1 = await pushChainClient.universal.prepareTransaction({...}); // Push Chain\nconst step2 = await pushChainClient.universal.prepareTransaction({...}); // BNB\n\n// Live progress for pre-flight, broadcast, and cascade tracking.\nconst result = await pushChainClient.universal.executeTransactions([step1, step2], {\n  progressHook: (event) => {\n    console.log('[' + event.id + '] ' + event.level + ' - ' + event.title);\n  },\n});\n"
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
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "txs"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PreparedUniversalTx[]"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Ordered array of prepared transactions from ", (0,jsx_runtime.jsx)(_components.code, {
                children: "prepareTransaction"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.progressHook"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "(event: ProgressEvent) => void"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Optional per-call progress callback. Progress hook follows the same structure as ", (0,jsx_runtime.jsx)(_components.a, {
                href: "/docs/chain/build/send-universal-transaction#progress-hook-type-and-response",
                children: "Send Universal Transaction - Progress Hook"
              }), "."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the API response, each executed step is reported as a hop."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details/* default */.A, {
      summary: "Returns `CascadedTxResponse` <object>",
      className: "alert alert--fn-args",
      children: [(0,jsx_runtime.jsxs)(_components.table, {
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
                children: "initialTxHash"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hash of the user-signed Push Chain transaction that kicked off the cascade."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "initialTxResponse"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "UniversalTxResponse"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Full response object for the initial Push Chain transaction."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hops"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CascadeHopInfo[]"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Ordered list of all hops with routing and status information."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hopCount"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total number of hops in the cascade."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "finalTxHash"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "(optional)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Final tx hash resolved by ", (0,jsx_runtime.jsx)(_components.code, {
                children: "waitForAll()"
              }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                children: "wait()"
              }), ", when available. Populated after cascade tracking completes."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "wait(opts?)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Promise<CascadeCompletionResult>"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Alias for ", (0,jsx_runtime.jsx)(_components.code, {
                children: "waitForAll"
              }), ". Waits for all hops to complete."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "waitForAll(opts?)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Promise<CascadeCompletionResult>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Waits for all hops to complete across all chains."
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CascadeHopInfo"
        }), " fields:"]
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
                children: "hopIndex"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Position in the cascade (0-indexed)."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "route"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "TransactionRouteType"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Routing mode for this hop: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "UOA_TO_PUSH"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "UOA_TO_CEA"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CEA_TO_PUSH"
              }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CEA_TO_CEA"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "executionChain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Chain where this hop executes."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "expectedSubTxId"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "(optional)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Expected ", (0,jsx_runtime.jsx)(_components.code, {
                children: "universalSubTxId"
              }), " for this hop, computed deterministically from the parent. Available before the hop's tx hash resolves."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "status"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "'pending'"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'submitted'"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'confirmed'"
              }), " | ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'failed'"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Current hop status."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "txHash"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "(optional)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Resolved transaction hash once available."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "outboundDetails"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "OutboundTxDetails"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "(optional, outbound hops only)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["External chain tx details. Fields: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "externalTxHash"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "destinationChain"
              }), " (CHAIN), ", (0,jsx_runtime.jsx)(_components.code, {
                children: "explorerUrl"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "recipient"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "amount"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "assetAddr"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "address(0)"
              }), " for native)."]
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CascadeCompletionResult"
        }), " fields:"]
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
                children: "success"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Whether all hops completed successfully."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "hops"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CascadeHopInfo[]"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Final state of all hops."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "finalTxHash"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "(optional)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Final tx hash for the last confirmed hop, when available."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "finalTxResponse"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "CascadedTxResponse"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "(optional)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Original cascaded response object for consumers that need the full context."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "failedAt"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              }), " ", (0,jsx_runtime.jsx)(_components.em, {
                children: "(optional)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Index of first failed hop, if any."
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "waitForAll"
        }), " options (", (0,jsx_runtime.jsx)(_components.code, {
          children: "CascadeTrackOptions"
        }), "):"]
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Option"
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
                children: "pollingIntervalMs"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "3000"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Polling interval in milliseconds."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "timeout"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "300000"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total timeout in milliseconds (5 min)."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "progressHook"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "(event: CascadeProgressEvent) => void"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Per-hop progress callback. Reports ", (0,jsx_runtime.jsx)(_components.code, {
                children: "hopIndex"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "route"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "chain"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "status"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "txHash"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "elapsed"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "eventHook"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "(event: ProgressEvent) => void"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Unified ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ProgressEvent"
              }), " stream for the cascade marker set (", (0,jsx_runtime.jsx)(_components.code, {
                children: "001"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "002-xx"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "003-xx"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "203-xx"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "204-xx"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "209-xx"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "299-01"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "999-xx"
              }), ", plus per-route awaiting/polling/success/failed/timeout hooks). Cascade markers also fan out to the init-time ", (0,jsx_runtime.jsx)(_components.code, {
                children: "progressHook"
              }), " set on ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.initialize"
              }), ", so UI Kit consumers that wired progress at init receive the cascade stream automatically. When both ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eventHook"
              }), " and the init-time ", (0,jsx_runtime.jsx)(_components.code, {
                children: "progressHook"
              }), " are wired, events are delivered to both with dedup. To opt out of cascade markers on the init-time channel, filter inside that handler."]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Execute Multiple Transactions in One Flow",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/send-universal-transaction"
        },
        children: `
// customPropHighlightRegexStart=executeTransactions
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=execute_transactions_fund_and_call

  // 3-hop cascade from a Sepolia UOA:
  //   Hop 0 (Route 1): send extra gas for UEA for Hop 2
  //   Hop 1 (Route 1): increment counter on Push Chain
  //   Hop 2 (Route 2): increment counter on BNB Testnet via CEA
  import { PushChain } from '@pushchain/core';
  import { ethers } from 'ethers';
  import * as readline from 'node:readline/promises';

  const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
  const RPC_PUSH    = 'https://evm.donut.rpc.push.org/';
  const RPC_BNB     = 'https://bsc-testnet-rpc.publicnode.com';
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const COUNTER_ABI = [
    { inputs: [], name: 'increment', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { inputs: [], name: 'count',   outputs: [{ name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'countPC', outputs: [{ name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  ];
  const COUNTER_PUSH = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Push Chain Testnet (Donut)
  const COUNTER_BNB  = '0x7f0936bb90e7dcf3edb47199c2005e7184e44cf8'; // BNB Testnet

  async function main() {
    const wallet = ethers.Wallet.createRandom();
    const provider = new ethers.JsonRpcProvider(RPC_SEPOLIA);
    const signer = wallet.connect(provider);
    console.log('🔑 Sepolia wallet (UOA):', wallet.address);

    const universalSigner = await PushChain.utils.signer.toUniversal(signer);
    const client = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    console.log('UEA on Push Chain:', client.universal.account);
    await rl.question(':::prompt:::Fund the account, then press Enter:\\\\n  • UOA ' + wallet.address + ' on Sepolia (at least 0.005 ETH, to be used for gas for BNB).\\\\nSepolia faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia');

    // Read counters BEFORE
    const pushProvider = new ethers.JsonRpcProvider(RPC_PUSH);
    const bnbProvider  = new ethers.JsonRpcProvider(RPC_BNB);
    const pushCounter  = new ethers.Contract(COUNTER_PUSH, COUNTER_ABI, pushProvider);
    const bnbCounter   = new ethers.Contract(COUNTER_BNB,  COUNTER_ABI, bnbProvider);
    console.log('📊 Push Chain counter BEFORE:', (await pushCounter.countPC()).toString());
    console.log('📊 BNB counter BEFORE:',        (await bnbCounter.count()).toString());

    // ── Hop 0 (UEA_TO_PUSH) ─ Bridge Gas from Sepolia EOA
    // value        → 5 PC at the destination; SDK fee-locks ETH on Sepolia
    //                to mint this PC into the UEA, covering gas for BNB hop.
    const hop0 = await client.universal.prepareTransaction({
      from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
      to: client.universal.account,
      value: PushChain.utils.helpers.parseUnits('5', 18),
    });
    console.log('✅ hop0 prepared (Fund 5 PC as Gas) - route:', hop0.route);

    const calldata = PushChain.utils.helpers.encodeTxData({ abi: COUNTER_ABI, functionName: 'increment' });

    // Hop 1 (Route 1): increment counter on Push Chain
    const hop1 = await client.universal.prepareTransaction({
      to: COUNTER_PUSH,
      data: calldata,
    });
    console.log('✅ hop1 prepared - route:', hop1.route);

    // Hop 2 (Route 2): increment counter on BNB Testnet via CEA
    const hop2 = await client.universal.prepareTransaction({
      to: { address: COUNTER_BNB, chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET },
      data: calldata,
    });
    console.log('✅ hop2 prepared - route:', hop2.route);

    // executeTransactions's progressHook streams ProgressEvent across every
    // phase (pre-flight, broadcast, cascade tracking). Each event has id,
    // title, message, and level — combine them for a full status line.
    const cascade = await client.universal.executeTransactions([hop0, hop1, hop2], {
      progressHook: (event) => {
        const icon = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌' }[event.level] || '•';
        console.log(icon + ' [' + event.id + '] ' + event.title + ' - ' + event.message);
      },
    });
    console.log('🚀 Cascade submitted - initialTxHash:', cascade.initialTxHash);
    console.log('📦 hopCount:', cascade.hopCount);

    // executeTransactions's progressHook above already streams per-hop tracking
    // events (SEND-TX-309-* and SEND-TX-399-*), so cascade.wait() doesn't need
    // its own progressHook — just await for completion.
    const result = await cascade.wait();
    console.log('🏁 All hops complete. Success:', result.success);

    if (result.success) {
      console.log('📊 Push Chain counter AFTER:', (await pushCounter.countPC()).toString());
      console.log('📊 BNB counter AFTER:',        (await bnbCounter.count()).toString());
    }
  }

  await main().catch(console.error);
`
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "more-examples",
      children: "More Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-contract-calls-push-chain--bnb--solana-in-one-signature",
      children: "Batch Contract Calls: Push Chain + BNB + Solana in One Signature"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Increment counters on Push Chain and BNB Testnet, then trigger a call on Solana Devnet. Three independent contract interactions across three chains, all composed into a single user signature."
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Cross-Chain Contract Calls",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/send-universal-transaction"
        },
        children: `
// customPropHighlightRegexStart=executeTransactions
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=execute_transactions_batch

  // Batch 3 contract calls across 3 chains - one user signature.
  import { PushChain } from '@pushchain/core';
  import { ethers } from 'ethers';
  import * as readline from 'node:readline/promises';

  const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
  const RPC_PUSH    = 'https://evm.donut.rpc.push.org/';
  const RPC_BNB     = 'https://bsc-testnet-rpc.publicnode.com';
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const COUNTER_ABI = [
    { inputs: [], name: 'increment', outputs: [], stateMutability: 'nonpayable', type: 'function' },
    { inputs: [], name: 'count',   outputs: [{ name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
    { inputs: [], name: 'countPC', outputs: [{ name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
  ];
  const COUNTER_PUSH = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Push Chain Testnet (Donut)
  const COUNTER_BNB  = '0x7f0936bb90e7dcf3edb47199c2005e7184e44cf8'; // BNB Testnet
  const SOL_TEST_PROGRAM = '8yNqjrMnFiFbVTVQcKij8tNWWTMdFkrDf9abCGgc2sgx'; // Solana Devnet, base58

  // Anchor IDL for the Solana target — trimmed to just the receive_sol
  // instruction we call below. In a real app this comes from your Anchor
  // program's target/idl/*.json.
  const testCounterIdl = {
    address: SOL_TEST_PROGRAM,
    metadata: { name: 'test_counter', version: '0.1.0', spec: '0.1.0' },
    instructions: [
      {
        name: 'receive_sol',
        discriminator: [121, 244, 250, 3, 8, 229, 225, 1],
        accounts: [
          { name: 'counter', writable: true, pda: { seeds: [{ kind: 'const', value: [99, 111, 117, 110, 116, 101, 114] }] } }, // 'counter'
          { name: 'recipient', writable: true, address: '89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi' },
          { name: 'cea_authority', writable: true }, // auto-populated with sender's CEA
          { name: 'system_program', address: '11111111111111111111111111111111' },
        ],
        args: [{ name: 'amount', type: 'u64' }],
      },
    ],
  };

  async function main() {
    const wallet = ethers.Wallet.createRandom();
    const provider = new ethers.JsonRpcProvider(RPC_SEPOLIA);
    const signer = wallet.connect(provider);
    console.log('🔑 Sepolia wallet (UOA):', wallet.address);

    const universalSigner = await PushChain.utils.signer.toUniversal(signer);
    const client = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    console.log('UEA on Push Chain:', client.universal.account);
    await rl.question(':::prompt:::Fund the account, then press Enter:\\\\n  • UOA ' + wallet.address + ' on Sepolia (at least 0.008 ETH for gas).\\\\nSepolia faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia');

    // Read counters BEFORE
    const pushProvider = new ethers.JsonRpcProvider(RPC_PUSH);
    const bnbProvider  = new ethers.JsonRpcProvider(RPC_BNB);
    const pushCounter  = new ethers.Contract(COUNTER_PUSH, COUNTER_ABI, pushProvider);
    const bnbCounter   = new ethers.Contract(COUNTER_BNB,  COUNTER_ABI, bnbProvider);
    console.log('📊 Push Chain counter BEFORE:', (await pushCounter.countPC()).toString());
    console.log('📊 BNB counter BEFORE:',        (await bnbCounter.count()).toString());

    // ── Hop 0 (UEA_TO_PUSH) ─ Bridge Gas from Sepolia EOA
    // value        → 10 PC at the destination; SDK fee-locks ETH on Sepolia
    //                to mint this PC into the UEA, covering gas for BNB hop, Solana hop.
    const hop0 = await client.universal.prepareTransaction({
      from: { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA },
      to: client.universal.account,
      value: PushChain.utils.helpers.parseUnits('10', 18),
    });
    console.log('✅ hop0 prepared (Fund 10 PC as Gas) - route:', hop0.route);
    
    const calldata = PushChain.utils.helpers.encodeTxData({ abi: COUNTER_ABI, functionName: 'increment' });

    // Hop 1 (Route 1): increment counter on Push Chain
    const hop1 = await client.universal.prepareTransaction({
      to: COUNTER_PUSH,
      data: calldata,
    });
    console.log('✅ hop1 prepared - route:', hop1.route);

    // Hop 2 (Route 2): increment counter on BNB Testnet via CEA
    const hop2 = await client.universal.prepareTransaction({
      to: { address: COUNTER_BNB, chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET },
      data: calldata,
    });
    console.log('✅ hop2 prepared - route:', hop2.route);

    // Hop 3 (Route 2): call test_counter on Solana Devnet via CEA
    // Same shape as EVM (to, value, data). Accounts, PDAs and CEA come from the IDL.
    const solCalldata = PushChain.utils.helpers.encodeTxData({
      idl: testCounterIdl,
      functionName: 'receive_sol',
      args: [BigInt(0)],
    });

    const hop3 = await client.universal.prepareTransaction({
      to: {
        address: SOL_TEST_PROGRAM,
        chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      },
      data: solCalldata,
    });
    console.log('✅ hop3 prepared - route:', hop3.route);

    // executeTransactions's progressHook streams ProgressEvent across every
    // phase (pre-flight, broadcast, cascade tracking). Each event has id,
    // title, message, and level — combine them for a full status line.
    const cascade = await client.universal.executeTransactions([hop0, hop1, hop2, hop3], {
      progressHook: (event) => {
        const icon = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌' }[event.level] || '•';
        console.log(icon + ' [' + event.id + '] ' + event.title + ' - ' + event.message);
      },
    });
    console.log('🚀 Cascade submitted - initialTxHash:', cascade.initialTxHash);
    console.log('📦 hopCount:', cascade.hopCount);

    // executeTransactions's progressHook above already streams per-hop tracking
    // events (SEND-TX-309-* and SEND-TX-399-*), so cascade.wait() doesn't need
    // its own progressHook — just await for completion.
    const result = await cascade.wait();
    console.log('🏁 All hops complete. Success:', result.success);

    if (result.success) {
      console.log('📊 Push Chain counter AFTER:', (await pushCounter.countPC()).toString());
      console.log('📊 BNB counter AFTER:',        (await bnbCounter.count()).toString());

      // Solana state isn't read via a public RPC contract call here —
      // surface the on-chain Solana hop's tx hash + explorer URL from
      // result.hops[].outboundDetails so devs can inspect it manually.
      const solanaHop = result.hops.find((h) => h.executionChain === PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET);
      if (solanaHop && solanaHop.outboundDetails) {
        console.log('🌞 Solana hop tx:', solanaHop.outboundDetails.externalTxHash);
        console.log('🔗 Solana explorer:', solanaHop.outboundDetails.explorerUrl);
      }
    }
  }

  await main().catch(console.error);
`
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-chain-amm-swap-eth--psol-via-push-chain-amm",
      children: "Cross-Chain AMM Swap: ETH → pSOL via Push Chain AMM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Swap ETH on Sepolia for pSOL on Solana Devnet in a single user signature. The user funds ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only"
      }), " their Sepolia UOA, the SDK fee-locks just enough Sepolia ETH to seat the UEA's PC budget on first run, and the cascade reuses that PC for all downstream hops."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hop 0 bridges 0.001 ETH from the Sepolia UOA into 0.001 pETH on the UEA. SDK fee-locking handles the UEA's PC top-up automatically (no manual UEA funding step)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hops 1 and 2 approve the SwapRouter for pETH and WPC."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hops 3 and 4 swap pETH → WPC → pSOL via two ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exactInputSingle"
        }), " calls on the Push Chain AMM (no direct pETH/pSOL pool, so WPC is the intermediate)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hop 5 bridges the pSOL out to the user's Solana Devnet CEA."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: ETH → pETH → WPC → pSOL → Solana",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/send-universal-transaction"
        },
        children: `
// customPropHighlightRegexStart=executeTransactions
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=execute_transactions

  // 7-hop cross-chain cascade from a fresh Sepolia UOA:
  //   Hop 0     (UOA_TO_PUSH) - value=30 PC seats UEA's PC budget via SDK fee-lock;
  //                             funds attaches 0.001 ETH on the gateway tx.
  //   hopBridge (UOA_TO_PUSH) - dedicated funds-only deposit hop that moves
  //                             0.001 ETH from Sepolia UOA → 0.001 pETH on UEA
  //                             before the swap hops fire.
  //   Hop 1     (UOA_TO_PUSH) - Approve SwapRouter to spend pETH
  //   Hop 2     (UOA_TO_PUSH) - Approve SwapRouter to spend WPC
  //   Hop 3     (UOA_TO_PUSH) - Swap pETH → WPC on Push Chain AMM (Uniswap V3)
  //   Hop 4     (UOA_TO_PUSH) - Swap WPC  → pSOL on Push Chain AMM
  //   Hop 5     (UOA_TO_CEA)  - Bridge pSOL from UEA → Solana Devnet CEA
  import { PushChain } from '@pushchain/core';
  import { ethers } from 'ethers';
  import bs58 from 'bs58';
  import * as readline from 'node:readline/promises';

  const RPC_SEPOLIA = 'https://ethereum-sepolia-rpc.publicnode.com';
  const RPC_PUSH    = 'https://evm.donut.rpc.push.org/';
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  // Push Chain AMM (Uniswap V3) on Donut Testnet
  const SWAP_ROUTER_ADDRESS = '0x5D548bB9E305AAe0d6dc6e6fdc3ab419f6aC0037';
  const QUOTER_V2_ADDRESS   = '0x83316275f7C2F79BC4E26f089333e88E89093037';
  const WPC_ADDRESS         = '0xE17DD2E0509f99E9ee9469Cf6634048Ec5a3ADe9'; // wrapped PC, AMM intermediate
  const pETH_ADDRESS        = '0x2971824Db68229D087931155C2b8bB820B275809';
  const pSOL_ADDRESS        = '0x5D525Df2bD99a6e7ec58b76aF2fd95F39874EBed';
  const pSOL_DECIMALS       = 9; // pSOL mirrors native SOL's 9-decimal precision
  const POOL_FEE = 500; // 0.05% fee tier of both pETH/WPC and pSOL/WPC pools on Donut
  const AMOUNT_IN = PushChain.utils.helpers.parseUnits('0.001', 18);
  const MAX_UINT256 = ethers.MaxUint256;
  // Each swap call carries a 10-minute deadline. Refresh just before submit
  // so the cascade has a healthy timestamp window when it lands on Push.
  const swapDeadline = () => BigInt(Math.floor(Date.now() / 1000)) + BigInt(600);

  const ERC20_APPROVE_ABI = [
    { inputs: [{ name: 'spender', type: 'address' }, { name: 'amount', type: 'uint256' }],
      name: 'approve', outputs: [{ type: 'bool' }], stateMutability: 'nonpayable', type: 'function' },
  ];

  // Push Chain's deployed SwapRouter takes an 8-field ExactInputSingleParams
  // tuple that includes 'deadline' between 'recipient' and 'amountIn' (Uniswap
  // V3 SwapRouter V1 shape, NOT the 7-field SwapRouter02 shape).
  const SWAP_ROUTER_ABI = [
    { inputs: [{
        components: [
          { name: 'tokenIn', type: 'address' },
          { name: 'tokenOut', type: 'address' },
          { name: 'fee', type: 'uint24' },
          { name: 'recipient', type: 'address' },
          { name: 'deadline', type: 'uint256' },
          { name: 'amountIn', type: 'uint256' },
          { name: 'amountOutMinimum', type: 'uint256' },
          { name: 'sqrtPriceLimitX96', type: 'uint160' },
        ], name: 'params', type: 'tuple' }],
      name: 'exactInputSingle',
      outputs: [{ name: 'amountOut', type: 'uint256' }],
      stateMutability: 'payable', type: 'function' },
  ];

  const QUOTER_ABI = [
    { inputs: [{
        components: [
          { name: 'tokenIn', type: 'address' },
          { name: 'tokenOut', type: 'address' },
          { name: 'amountIn', type: 'uint256' },
          { name: 'fee', type: 'uint24' },
          { name: 'sqrtPriceLimitX96', type: 'uint160' },
        ], name: 'params', type: 'tuple' }],
      name: 'quoteExactInputSingle',
      outputs: [
        { name: 'amountOut', type: 'uint256' },
        { name: 'sqrtPriceX96After', type: 'uint160' },
        { name: 'initializedTicksCrossed', type: 'uint32' },
        { name: 'gasEstimate', type: 'uint256' },
      ],
      stateMutability: 'nonpayable', type: 'function' },
  ];

  async function main() {
    const wallet = ethers.Wallet.createRandom();
    const provider = new ethers.JsonRpcProvider(RPC_SEPOLIA);
    const signer = wallet.connect(provider);
    console.log('🔑 Sepolia wallet (UOA):', wallet.address);

    const universalSigner = await PushChain.utils.signer.toUniversal(signer);
    const client = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });
    console.log('🏠 UEA on Push Chain:', client.universal.account);

    // Derive the Solana CEA destination for Hop 5.
    // deriveExecutorAccount returns the CEA as 32-byte hex (0x…) — that's
    // the canonical wire format the SDK accepts in tx.to.address for SVM
    // targets. Solana wallets and explorers expect base58, so we keep the
    // hex form for the cascade call and only base58-encode for display.
    const uoa = PushChain.utils.account.toUniversal(wallet.address, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    });
    const solanaCEA = await PushChain.utils.account.deriveExecutorAccount(uoa, {
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      skipNetworkCheck: true,
    });
    const solanaCEABase58 = bs58.encode(Buffer.from(solanaCEA.address.slice(2), 'hex'));
    console.log('📍 Solana CEA (Hop 5 destination):', solanaCEABase58);

    // Single funding ask. Hop 0 carries value=30 PC, so the SDK fee-
    // locks Sepolia ETH worth ~30 PC into the UEA on first run and that
    // PC covers hops 1-5 plus the SVM outbound gas-swap (no manual UEA
    // top-up needed).
    await rl.question(':::prompt:::Send at least 0.1 Sepolia ETH to ' + wallet.address + ', then press Enter.\\\\n(0.001 ETH bridges as pETH on Hop 0; the rest covers Sepolia signing gas + the SDK fee-lock that seats your UEA with ~30 PC.)\\\\nSepolia faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia');

    // Quote both swap legs so we can size Hop 4 amountIn and Hop 5 bridge amount.
    // QuoterV2 is non-view, so call via staticCall to read return values.
    const pushProvider = new ethers.JsonRpcProvider(RPC_PUSH);
    const quoter = new ethers.Contract(QUOTER_V2_ADDRESS, QUOTER_ABI, pushProvider);
    const wpcQuote = await quoter.quoteExactInputSingle.staticCall({
      tokenIn: pETH_ADDRESS, tokenOut: WPC_ADDRESS,
      amountIn: AMOUNT_IN, fee: POOL_FEE, sqrtPriceLimitX96: BigInt(0),
    });
    const wpcAmount = (wpcQuote.amountOut * BigInt(99)) / BigInt(100); // 1% slippage buffer
    const pSolQuote = await quoter.quoteExactInputSingle.staticCall({
      tokenIn: WPC_ADDRESS, tokenOut: pSOL_ADDRESS,
      amountIn: wpcAmount, fee: POOL_FEE, sqrtPriceLimitX96: BigInt(0),
    });
    const pSolAmount = (pSolQuote.amountOut * BigInt(99)) / BigInt(100); // 1% slippage buffer
    console.log('💱 ' + ethers.formatUnits(AMOUNT_IN, 18) + ' pETH → ' + ethers.formatUnits(wpcQuote.amountOut, 18) + ' WPC → ' + ethers.formatUnits(pSolQuote.amountOut, pSOL_DECIMALS) + ' pSOL');

    // ── Hop 0 (UOA_TO_PUSH) ─ Deposit ETH from UOA → pETH on UEA ─────────
    // No 'from' field means Route 1 (UOA initiates). funds.amount attaches
    // 0.001 ETH as msg.value on the source-chain gateway tx, which mints
    // 0.001 pETH on the UEA. value=30 PC tells the SDK to fee-lock enough
    // Sepolia ETH from the same UOA tx to mint ~30 PC into the UEA — the
    // PC budget that hops 1-5 (2 approves, 2 swaps, 1 outbound) draw on.
    const hop0 = await client.universal.prepareTransaction({
      to: client.universal.account,
      value: PushChain.utils.helpers.parseUnits('30', 18),
      funds: {
        amount: AMOUNT_IN,
        token: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH,
      },
    });
    console.log('✅ hop0 prepared (deposit ETH→pETH + 30 PC) - route:', hop0.route);

    // ── Hop 1 (UOA_TO_PUSH) ─ Approve SwapRouter for pETH ────────────────
    const hop1 = await client.universal.prepareTransaction({
      to: pETH_ADDRESS,
      data: PushChain.utils.helpers.encodeTxData({
        abi: ERC20_APPROVE_ABI, functionName: 'approve',
        args: [SWAP_ROUTER_ADDRESS, MAX_UINT256],
      }),
    });
    console.log('✅ hop1 prepared (approve pETH) - route:', hop1.route);

    // ── Hop 2 (UOA_TO_PUSH) ─ Approve SwapRouter for WPC ─────────────────
    const hop2 = await client.universal.prepareTransaction({
      to: WPC_ADDRESS,
      data: PushChain.utils.helpers.encodeTxData({
        abi: ERC20_APPROVE_ABI, functionName: 'approve',
        args: [SWAP_ROUTER_ADDRESS, MAX_UINT256],
      }),
    });
    console.log('✅ hop2 prepared (approve WPC) - route:', hop2.route);

    // ── Hop 3 (UOA_TO_PUSH) ─ Swap pETH → WPC on Push Chain AMM ──────────
    // Each call uses the 8-field SWAP_ROUTER_ABI defined above (the V1
    // tuple shape with deadline between recipient and amountIn).
    // viem encodes tuple components by NAME, so every numeric key has to
    // be present AND be a BigInt - otherwise the encoder calls
    // BigInt(undefined) and throws "Cannot convert undefined to a BigInt".
    const hop3 = await client.universal.prepareTransaction({
      to: SWAP_ROUTER_ADDRESS,
      data: PushChain.utils.helpers.encodeTxData({
        abi: SWAP_ROUTER_ABI, functionName: 'exactInputSingle',
        args: [{
          tokenIn: pETH_ADDRESS,
          tokenOut: WPC_ADDRESS,
          fee: BigInt(POOL_FEE),
          recipient: client.universal.account,
          deadline: swapDeadline(),
          amountIn: BigInt(AMOUNT_IN),
          amountOutMinimum: BigInt(0),
          sqrtPriceLimitX96: BigInt(0),
        }],
      }),
    });
    console.log('✅ hop3 prepared (pETH → WPC) - route:', hop3.route);

    // ── Hop 4 (UOA_TO_PUSH) ─ Swap WPC → pSOL on Push Chain AMM ──────────
    const hop4 = await client.universal.prepareTransaction({
      to: SWAP_ROUTER_ADDRESS,
      data: PushChain.utils.helpers.encodeTxData({
        abi: SWAP_ROUTER_ABI, functionName: 'exactInputSingle',
        args: [{
          tokenIn: WPC_ADDRESS,
          tokenOut: pSOL_ADDRESS,
          fee: BigInt(POOL_FEE),
          recipient: client.universal.account,
          deadline: swapDeadline(),
          amountIn: BigInt(wpcAmount),
          amountOutMinimum: BigInt(0),
          sqrtPriceLimitX96: BigInt(0),
        }],
      }),
    });
    console.log('✅ hop4 prepared (WPC → pSOL) - route:', hop4.route);

    // ── Hop 5 (UOA_TO_CEA) ─ Bridge pSOL out to Solana Devnet CEA ────────
    const hop5 = await client.universal.prepareTransaction({
      to: { address: solanaCEA.address, chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET },
      funds: {
        amount: pSolAmount,
        token: PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol,
      },
    });
    console.log('✅ hop5 prepared (pSOL → Solana CEA) - route:', hop5.route);

    // ── Execute all 6 hops as one user-signed transaction ────────────────
    // executeTransactions's progressHook streams ProgressEvent across every
    // phase (pre-flight, broadcast, cascade tracking). Each event has id,
    // title, message, and level — combine them for a full status line.
    const cascade = await client.universal.executeTransactions([hop0, hop1, hop2, hop3, hop4, hop5], {
      progressHook: (event) => {
        const icon = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌' }[event.level] || '•';
        console.log(icon + ' [' + event.id + '] ' + event.title + ' - ' + event.message);
      },
    });
    console.log('🚀 Cascade submitted - initialTxHash:', cascade.initialTxHash);
    console.log('📦 hopCount:', cascade.hopCount);

    // executeTransactions's progressHook above already streams per-hop tracking
    // events (SEND-TX-309-* and SEND-TX-399-*), so cascade.wait() doesn't need
    // its own progressHook — just await for completion.
    const result = await cascade.wait();
    console.log('🏁 All hops complete. Success:', result.success);

    // Solana outbound details from the cascade hops registry.
    const solanaHop = result.hops.find((h) => h.executionChain === PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET);
    if (solanaHop && solanaHop.outboundDetails) {
      console.log('🌞 Solana hop tx:', solanaHop.outboundDetails.externalTxHash);
      console.log('🔗 Solana explorer:', solanaHop.outboundDetails.explorerUrl);
    }
  }

  await main().catch(console.error);
`
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-considerations",
      children: "Key Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single signature"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "executeTransactions"
        }), " submits one transaction to Push Chain. You sign once, and the SDK coordinates the full multichain execution automatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No atomicity guarantee"
        }), ": If a downstream hop fails, earlier hops are already on-chain. Design contracts to handle partial execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gas per hop"
        }), ": Each hop has its own estimated gas. Ensure gas is properly funded."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tracking"
        }), ": Progress channel work side-by-side and can be wired too keep track of the execution flow:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "executeTransactions(txs, { progressHook })"
            }), " streams every ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ProgressEvent"
            }), " (rich marker ids like ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SEND-TX-101"
            }), ", severity, structured payload) across pre-flight, broadcast, and cascade phases. Best for UI step indicators and granular telemetry."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/track-universal-transaction",
          children: "Track Universal Transaction"
        }), " to monitor individual transaction confirmation status"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-initiated-multichain-execution",
          children: "Contract Initiated Multichain Execution"
        }), " to trigger multichain flows from on-chain contracts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/sign-universal-message",
          children: "Sign Universal Message"
        }), " to sign typed messages across chains with a universal signer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/utility-functions",
          children: "Utility Functions"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "encodeTxData"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "parseUnits"
        }), ", and other helpers used in this page"]
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
        // 1785317340282
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
        // 1785317360982
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
        // 1785317358187
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