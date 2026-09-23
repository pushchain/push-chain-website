"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[22184],{

/***/ 660250
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_04_universal_reads_03_contract_initiated_universal_read_and_callback_mdx_3d5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-04-universal-reads-03-contract-initiated-universal-read-and-callback-mdx-3d5.json
const site_docs_chain_03_build_04_universal_reads_03_contract_initiated_universal_read_and_callback_mdx_3d5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/universal-reads/docs-chain-build-contract-initiated-universal-read","title":"Contract-Initiated Universal Read and Callback","description":"Contract-Initiated Universal Read and Callback | Build | Push Chain Docs","source":"@site/docs/chain/03-build/04-universal-reads/03-Contract-Initiated-Universal-Read-and-Callback.mdx","sourceDirName":"chain/03-build/04-universal-reads","slug":"/chain/build/contract-initiated-universal-read-and-callback","permalink":"/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-initiated-universal-read-and-callback","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/04-universal-reads/03-Contract-Initiated-Universal-Read-and-Callback.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"docs-chain-build-contract-initiated-universal-read","title":"Contract-Initiated Universal Read and Callback","hide_title":false,"slug":"/chain/build/contract-initiated-universal-read-and-callback","displayed_sidebar":"pushChainSidebar","sidebar_position":3,"image":"/assets/docs/previews/docs_chain_build_contract_initiated_universal_read--contract-initiated_universal_read_and_callback.png"},"sidebar":"pushChainSidebar","previous":{"title":"Read Multiple Universal States","permalink":"/push-chain-website/pr-preview/pr-1244/docs/chain/build/read-multiple-universal-states"},"next":{"title":"Track Universal Read","permalink":"/push-chain-website/pr-preview/pr-1244/docs/chain/build/track-universal-read"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
;// ./docs/chain/03-build/04-universal-reads/03-Contract-Initiated-Universal-Read-and-Callback.mdx


const frontMatter = {
	id: 'docs-chain-build-contract-initiated-universal-read',
	title: 'Contract-Initiated Universal Read and Callback',
	hide_title: false,
	slug: '/chain/build/contract-initiated-universal-read-and-callback',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_chain_build_contract_initiated_universal_read--contract-initiated_universal_read_and_callback.png'
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
  "value": "How This Differs from Universal Read",
  "id": "how-this-differs-from-universal-read",
  "level": 2
}, {
  "value": "Key Concepts",
  "id": "key-concepts",
  "level": 2
}, {
  "value": "Universal Callback",
  "id": "universal-callback",
  "level": 3
}, {
  "value": "UniversalReadClient",
  "id": "universalreadclient",
  "level": 3
}, {
  "value": "ReadSpec",
  "id": "readspec",
  "level": 3
}, {
  "value": "Mental Model",
  "id": "mental-model",
  "level": 3
}, {
  "value": "Deploy a Receiver",
  "id": "deploy-a-receiver",
  "level": 2
}, {
  "value": "Request a Read",
  "id": "request-a-read",
  "level": 2
}, {
  "value": "Through the SDK",
  "id": "through-the-sdk",
  "level": 3
}, {
  "value": "From Within Your Contract",
  "id": "from-within-your-contract",
  "level": 3
}, {
  "value": "Read the Result On-Chain",
  "id": "read-the-result-on-chain",
  "level": 2
}, {
  "value": "Verify From Off-Chain",
  "id": "verify-from-off-chain",
  "level": 2
}, {
  "value": "Fees and Refunds",
  "id": "fees-and-refunds",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "When to Use This",
  "id": "when-to-use-this",
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
    h2: "h2",
    h3: "h3",
    li: "li",
    mermaid: "mermaid",
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
        children: "Contract-Initiated Universal Read and Callback | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Contract-Initiated Universal Read and Callback lets ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "your own Push Chain contract receive the result of a universal read and act on it"
      }), ". Validators read state from an external chain or a Web2 endpoint, agree on the bytes, and Universal Callback delivers them into a function on your contract."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The read is paid and asynchronous. Your contract funds it at request time, the result arrives in a later block, and the callback runs inside a gas bound you choose, up to 1,000,000 gas."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If only your app or backend needs the value, you do not need a contract. Omit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callback"
      }), " and the Universal Read Registry stores the result for you. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/universal-read/",
        children: "Read Universal State"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": The base contract's full surface, with read-only playgrounds against the deployed registry, is in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-helpers/#universal-read-client",
          children: "Contract Helpers"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-this-differs-from-universal-read",
      children: "How This Differs from Universal Read"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Universal Read is consumed by an app through the SDK. Contract-initiated read and callback is consumed by a Push Chain contract. Both use the same validators and the same Universal Callback, but the result lands in a different place."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Dimension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Universal Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Contract-Initiated Universal Read and Callback"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Who receives the result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The Universal Read Registry."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Your contract, in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_onReadResult"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Where the result lives"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Registry storage, exposed by the SDK as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            }), "."]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your storage, in whatever shape you write."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Who requests"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The SDK, through ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read"
            }), "."]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The SDK through ", (0,jsx_runtime.jsx)(_components.code, {
              children: "read"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "callback"
            }), ", or your contract on its own."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Who pays"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The requesting wallet."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " on your request entrypoint. The SDK quotes it; a contract sends it."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refunds"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back to the requesting account."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["To ", (0,jsx_runtime.jsx)(_components.code, {
              children: "revertRecipient"
            }), ", which defaults to your contract."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SDK involvement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional. A contract can build the request itself."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key distinction is that the result becomes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "contract state in the same transaction that delivers it"
      }), ". Settling a position, unlocking a pending action, gating a payout on external state, all of it runs inside your callback without an off-chain relayer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universal-callback",
      children: "Universal Callback"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Universal Callback is the predeploy on Push Chain that accepts read requests, holds the callback budget, delivers results and settles refunds. It is deployed at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/setup/smart-contract-address-book/#push-chain-core-functionalities",
        children: "0x00000000000000000000000000000000000000c2"
      }), " on Push Chain Donut Testnet, listed as Universal Read / Callback in the address book."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single entry"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requestExternalReadSelf(spec, callbackSelector, callbackGasLimit)"
        }), " is the only way in. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UniversalReadClient"
        }), " calls it for you."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single delivery"
        }), ": only Universal Callback may call your contract with a result. The base contract enforces this."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gas bound"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "callbackGasLimit"
        }), " caps what your callback may consume. The hard cap is 1,000,000 gas; the registry uses 500,000."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lifecycle"
        }), ": a request moves through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PENDING"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EXECUTED"
        }), " (callback ran) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SETTLED"
        }), " (gas reported, refund sent), or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EXPIRED"
        }), ". ", (0,jsx_runtime.jsx)(_components.code, {
          children: "statusOf(requestId)"
        }), " returns the current state; an unknown ID reads as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NONE"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "universalreadclient",
      children: "UniversalReadClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UniversalReadClient"
      }), " is the abstract base contract you inherit. It stores the Universal Callback address, submits requests with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_requestRead"
      }), ", receives deliveries in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onUniversalData"
      }), ", and hands them to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_onReadResult"
      }), " you implement."]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    APP[\"<b>Requester</b><br/>SDK read() or a contract\"]\n    RC[\"<b>Your Receiver</b><br/>inherits UniversalReadClient\"]\n    CB[\"<b>Universal Callback</b><br/>0x...c2\"]\n    VAL[\"<b>Validators</b><br/>read source + vote\"]\n    SRC[\"<b>Source</b><br/>External chain / Web2\"]\n\n    APP -->|\"request()\"| RC -->|\"_requestRead()\"| CB --> VAL --> SRC\n    VAL -->|\"agreed result\"| CB -->|\"onUniversalData()\"| RC\n\n    style RC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style CB fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style VAL fill:#b45309,stroke:#fbbf24,stroke-width:2px,color:#fff\n    style SRC fill:#1e3a8a,stroke:#60a5fa,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "You write two functions"
        }), ": a payable request entrypoint that calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_requestRead"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_onReadResult"
        }), ", which receives the bytes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Local state travels with the request"
        }), ": the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "localState"
        }), " bytes you pass to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_requestRead"
        }), " come back with the result, so your callback knows what it asked for."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refunds default to the contract"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_requestRead"
        }), " sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "revertRecipient"
        }), " to your contract when you leave it empty, so your contract needs a payable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "receive()"
        }), " or the refund is not delivered."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "readspec",
      children: "ReadSpec"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ReadSpec"
      }), " is the request struct Universal Callback validates and validators execute. The SDK builds it in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prepareRead"
      }), "; a contract can build it by hand."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "struct ReadSpec {\n    UniversalAccountId account;      // { chainNamespace, chainId, owner }: where to read\n    bytes   query;                   // Encoded query envelope for that chain family\n    uint16  minConfirmations;        // At least 1\n    uint64  blockNumber;             // Pinned source block, at most the oracle height\n    uint64  expiryPushChainHeight;   // Push Chain block after which the request expires\n    uint256 maxFee;                  // Upper bound on msg.value the request accepts\n    address revertRecipient;         // Receives the unused callback budget\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "account.chainNamespace"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Bare namespace: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eip155"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "solana"
              }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "web2"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "account.chainId"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Chain ID within the namespace, for example ", (0,jsx_runtime.jsx)(_components.code, {
                children: "11155111"
              }), " for Ethereum Sepolia."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "account.owner"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The account being read on Solana (32 bytes). For EVM reads validators do not use it; any non-empty bytes are accepted."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "query"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The chain family's query envelope. For EVM: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "abi.encode"
              }), " of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "(uint8 queryType, (uint8 refType, uint64 blockNumber) blockRef, bytes payload)"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "minConfirmations"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint16"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Confirmations the source block must have before validators read it. Minimum ", (0,jsx_runtime.jsx)(_components.code, {
                children: "1"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockNumber"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint64"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Source block to read at. Must be non-zero and at most the height Universal Core has observed for that chain. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "0"
              }), " for Web2."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "expiryPushChainHeight"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint64"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Must be greater than the current Push Chain block. The SDK uses the current block plus 300."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "maxFee"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint256"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The request reverts when ", (0,jsx_runtime.jsx)(_components.code, {
                children: "msg.value"
              }), " exceeds it. Set it to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "msg.value"
              }), " when you have no separate cap."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "revertRecipient"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Receives the unused callback budget on settlement and the full budget on expiry. Must accept native transfers."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mental-model",
      children: "Mental Model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your contract asks Universal Callback for a read and pays up front."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators fetch and agree; Universal Callback calls your contract with the bytes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Your contract decodes the bytes and updates its own state."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-a-receiver",
      children: "Deploy a Receiver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The receiver is your contract. It exposes one payable request entrypoint and overrides ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_onReadResult"
      }), ". The example below stores raw result bytes per request and accepts requests from one account."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity 0.8.26;\n\nimport {UniversalReadClient} from \"push-chain-core-contracts/src/UniversalReadClient.sol\";\nimport {ReadSpec} from \"push-chain-core-contracts/src/libraries/ReadTypes.sol\";\n\n/**\n * @title ExternalStateInbox\n * @notice Requests universal reads and stores each delivered result by request ID.\n */\ncontract ExternalStateInbox is UniversalReadClient {\n    /// @notice The only Push Chain account allowed to submit requests\n    address public immutable REQUESTER;\n\n    /// @notice Raw result bytes, keyed by the numeric request ID\n    mapping(uint256 => bytes) public results;\n\n    /**\n     * @param callbackAddress The Universal Callback contract that delivers results\n     * @param requester_ The Push Chain account that will submit requests\n     */\n    constructor(address callbackAddress, address requester_)\n        UniversalReadClient(callbackAddress)\n    {\n        require(requester_ != address(0), \"zero requester\");\n        REQUESTER = requester_;\n    }\n\n    /**\n     * @notice Payable request entrypoint the SDK calls\n     * @param spec The prepared read, supplied by the SDK\n     * @param gasLimit Gas reserved for _onReadResult\n     * @return The numeric request ID\n     */\n    function request(ReadSpec calldata spec, uint64 gasLimit)\n        external payable returns (uint256)\n    {\n        require(msg.sender == REQUESTER, \"only requester\");\n        return _requestRead(spec, abi.encode(msg.sender), gasLimit);\n    }\n\n    /**\n     * @dev Called by the base contract when Universal Callback delivers a result.\n     *      Empty resultData means the source returned an error.\n     */\n    function _onReadResult(uint256 requestId, bytes calldata resultData, bytes memory)\n        internal override\n    {\n        if (resultData.length == 0) return;\n        results[requestId] = resultData;\n    }\n\n    /// @dev Receives the unused callback budget\n    receive() external payable {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constructor arguments on Donut:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Argument"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "callbackAddress"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0x00000000000000000000000000000000000000c2"
            }), ", the ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/docs/chain/setup/smart-contract-address-book/#push-chain-core-functionalities",
              children: "Universal Read / Callback"
            }), " contract."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "requester_"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The address that will submit requests. For an SDK caller, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pushChainClient.universal.account"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Be careful which address you authorize",
      type: "warning",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
          children: "requester_"
        }), " must match the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "msg.sender"
        }), " your receiver sees when a read is requested. For a caller using the SDK that is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushChainClient.universal.account"
        }), " on the client that will call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read"
        }), ", which is not always the wallet that deployed the contract."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "request-a-read",
      children: "Request a Read"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can request a read in two ways: through the SDK, which builds the request and pays for it from the calling wallet, or from within your contract, which builds the request itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "through-the-sdk",
      children: "Through the SDK"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Point ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read"
      }), " at your receiver by passing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callback"
      }), ". The SDK prepares the read, calls your payable entrypoint with the prepared ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReadSpec"
      }), " and the callback gas, and waits for the result. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callback"
      }), " fields are documented in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/universal-read/#callback-arguments",
        children: "Callback Arguments"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const result = await pushChainClient.universal.read(holder, {\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n  callback: {\n    target: receiverAddress,\n    gasLimit: 200_000n,       // gas for _onReadResult, up to 1_000_000n\n    abi: receiverAbi,\n    functionName: 'request',  // your payable request entrypoint\n  },\n});\n\nconsole.log(result.callbackDelivered); // true once _onReadResult ran\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "from-within-your-contract",
      children: "From Within Your Contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A contract that requests on its own builds the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReadSpec"
      }), " itself. The example below reads the Ethereum Sepolia ETH balance of an address and stores it by holder. It is the on-chain equivalent of the native balance read on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/universal-read/#evm-reads",
        children: "Read Universal State"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity 0.8.26;\n\nimport {UniversalReadClient} from \"push-chain-core-contracts/src/UniversalReadClient.sol\";\nimport {ReadSpec} from \"push-chain-core-contracts/src/libraries/ReadTypes.sol\";\nimport {UniversalAccountId} from \"push-chain-core-contracts/src/libraries/Types.sol\";\n\ninterface IUniversalCore {\n    function chainHeightByChainNamespace(string calldata caip2) external view returns (uint256);\n}\n\n/**\n * @title BalanceWatcher\n * @notice Requests the Ethereum Sepolia ETH balance of an address with no SDK in the loop.\n */\ncontract BalanceWatcher is UniversalReadClient {\n    /// @dev EVM query envelope. abi.encode of this struct is what validators decode.\n    struct BlockRef { uint8 refType; uint64 blockNumber; }\n    struct EvmQuery { uint8 queryType; BlockRef blockRef; bytes payload; }\n\n    address public constant UNIVERSAL_CORE = 0x00000000000000000000000000000000000000C0;\n    uint8 public constant QUERY_ACCOUNT_BALANCE = 0;\n\n    /// @notice Latest delivered balance per holder, in wei\n    mapping(address => uint256) public balances;\n\n    constructor(address callbackAddress) UniversalReadClient(callbackAddress) {}\n\n    /**\n     * @notice Request the Sepolia ETH balance of `holder`\n     * @dev msg.value must cover the protocol fee quoted by Universal Callback's estimateFee.\n     *      The excess is the callback budget; what the callback does not use comes back.\n     */\n    function requestBalance(address holder) external payable returns (uint256) {\n        uint64 height = uint64(IUniversalCore(UNIVERSAL_CORE).chainHeightByChainNamespace(\"eip155:11155111\"));\n\n        bytes memory query = abi.encode(EvmQuery({\n            queryType: QUERY_ACCOUNT_BALANCE,\n            blockRef: BlockRef({ refType: 0, blockNumber: height }),\n            payload: abi.encode(holder)\n        }));\n\n        ReadSpec memory spec = ReadSpec({\n            account: UniversalAccountId({ chainNamespace: \"eip155\", chainId: \"11155111\", owner: abi.encodePacked(holder) }),\n            query: query,\n            minConfirmations: 1,\n            blockNumber: height,\n            expiryPushChainHeight: uint64(block.number + 300),\n            maxFee: msg.value,\n            revertRecipient: address(this)\n        });\n\n        return _requestRead(spec, abi.encode(holder), 200_000);\n    }\n\n    /// @dev Empty resultData means the source returned an error; nothing is stored.\n    function _onReadResult(uint256, bytes calldata resultData, bytes memory localState)\n        internal override\n    {\n        if (resultData.length == 0) return;\n        address holder = abi.decode(localState, (address));\n        balances[holder] = abi.decode(resultData, (uint256));\n    }\n\n    /// @dev Receives the unused callback budget\n    receive() external payable {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The query envelope is rigid. Validators decode ", (0,jsx_runtime.jsx)(_components.code, {
        children: "query"
      }), " as one ABI-encoded tuple, so build it with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abi.encode"
      }), " of a struct as above, never as three separate parameters. The EVM payloads are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Query"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "queryType"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "payload"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "resultData"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Native balance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "abi.encode(address holder)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "abi.encode(uint256)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Contract call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "abi.encode(address target, bytes callData)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw return bytes of the call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "abi.encode(address target, bytes32 slot)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The 32-byte word"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Solana and Web2 envelopes carry more fields. Build those with the SDK's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prepareRead"
        }), " and pass ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prepared.specTuple"
        }), " to your entrypoint, as described in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/read-multiple-universal-states/",
          children: "Read Multiple Universal States"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "read-the-result-on-chain",
      children: "Read the Result On-Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "_onReadResult"
      }), " receives the validator-agreed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resultData"
      }), " and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "localState"
      }), " you passed to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_requestRead"
      }), ". Decode both with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abi.decode"
      }), " into the types your read returns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "uint256 balance = abi.decode(resultData, (uint256));   // balance, token balance, lamports\naddress holder = abi.decode(localState, (address));    // whatever you stored at request time\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Empty ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resultData"
      }), " means the source returned an error: the target had no code at that block, the call reverted, or the endpoint failed. Return early rather than decoding, as both examples do. An expired request never reaches your callback at all."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verify-from-off-chain",
      children: "Verify From Off-Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To confirm your contract received the result, track the read and then read your contract's storage with a normal view call."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const done = await pushChainClient.universal.trackRead({ requestId: result.requestId }).then((read) => read.wait());\nif (done.callbackDelivered !== true) throw new Error('Receiver did not run');\n\nconst inbox = new ethers.Contract(receiverAddress, receiverAbi, provider);\nconst stored = await inbox.results(result.requestIdUint);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "callbackDelivered"
      }), " is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), " when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_onReadResult"
      }), " reverted or ran out of gas. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "results"
      }), " is keyed by the numeric request ID, which the SDK exposes as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requestIdUint"
      }), " next to the hex ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requestId"
      }), ". See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/track-universal-read/",
        children: "Track Universal Read"
      }), " for resuming by request ID or transaction hash."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fees-and-refunds",
      children: "Fees and Refunds"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocol fee"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Quoted by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "estimateFee(chainNamespace, chainId)"
            }), " on Universal Callback. Taken from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " at request time and not refunded."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Callback budget"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Everything in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " above the protocol fee. After the callback runs, the gas it consumed is burned from the budget and the rest is sent to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "revertRecipient"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expiry"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["A request that is not executed by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "expiryPushChainHeight"
            }), " expires and the full callback budget is refunded. The protocol fee is not."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Refund delivery"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Refunds are pushed to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "revertRecipient"
            }), ". A contract without a payable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "receive()"
            }), " rejects the push and the refund is not delivered."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The SDK quotes all of this as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prepared.fees"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prepared.value"
      }), ". A contract that requests on its own reads ", (0,jsx_runtime.jsx)(_components.code, {
        children: "estimateFee"
      }), " and sends more than it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Only Universal Callback can deliver"
          }), (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
            children: "onUniversalData"
          }), " on the base contract rejects every caller except Universal Callback. Do not override it; put your logic in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_onReadResult"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gate the request entrypoint"
          }), (0,jsx_runtime.jsx)("br", {}), "\nA payable entrypoint that anyone can call lets anyone write into your request bookkeeping. Restrict it to the accounts you expect, as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "REQUESTER"
          }), " does, or make the entrypoint deliberately public and treat each result as untrusted input."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The result is only as good as the request"
          }), (0,jsx_runtime.jsx)("br", {}), "\nCallback arrival proves validators agreed on the bytes for the spec that was submitted, not that the spec was the one you wanted. When the SDK builds the spec, record what you expect (a query key or a target address) in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "localState"
          }), " and check it in the callback before acting."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Empty bytes are an error, not a zero"
          }), (0,jsx_runtime.jsx)("br", {}), "\nDecoding empty ", (0,jsx_runtime.jsx)(_components.code, {
            children: "resultData"
          }), " as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "uint256"
          }), " reverts, which burns your callback budget and marks the callback as failed. Check the length first."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "No reads from inside a callback"
          }), (0,jsx_runtime.jsx)("br", {}), "\nStarting a new ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_requestRead"
          }), " inside ", (0,jsx_runtime.jsx)(_components.code, {
            children: "_onReadResult"
          }), " is not supported. Record what you need and start follow-up reads in a separate transaction."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constraint"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No synchronous result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The request and the delivery are separate transactions. There is no in-call return value."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Callback gas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most 1,000,000 gas per callback. Larger work must be split across transactions."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "One request per prepared read"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["On the SDK path the entrypoint must call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_requestRead"
            }), " exactly once per prepared read."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Query envelopes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EVM envelopes are simple enough to build in Solidity. Solana and Web2 envelopes should come from the SDK."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Supported sources"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ethereum Sepolia, Arbitrum Sepolia, Base Sepolia, BNB Testnet, Solana Devnet and HTTPS endpoints on Donut."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Likely cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "callbackDelivered"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_onReadResult"
            }), " reverted or ran out of gas"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Raise ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gasLimit"
            }), ", up to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1_000_000n"
            }), ", and make sure the callback cannot revert on empty ", (0,jsx_runtime.jsx)(_components.code, {
              children: "resultData"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Entrypoint reverts with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "only requester"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The caller is not the account you authorized"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pushChainClient.universal.account"
            }), " as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "requester_"
            }), ", not the deploying EOA. See ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#deploy-a-receiver",
              children: "Deploy a Receiver"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Request reverts with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "InvalidBlockNumber"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "blockNumber"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), " or above the height Universal Core has observed"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read ", (0,jsx_runtime.jsx)(_components.code, {
              children: "chainHeightByChainNamespace"
            }), " with the full CAIP-2 key, for example ", (0,jsx_runtime.jsx)(_components.code, {
              children: "eip155:11155111"
            }), ", and pin at or below it."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Request reverts with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "InvalidExpiryHeight"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "expiryPushChainHeight"
            }), " is not above the current block"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "block.number + 300"
            }), " or another future height."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Request reverts with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "InsufficientFee"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ExcessiveFee"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " is below ", (0,jsx_runtime.jsx)(_components.code, {
              children: "estimateFee"
            }), " or above ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spec.maxFee"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Quote ", (0,jsx_runtime.jsx)(_components.code, {
              children: "estimateFee"
            }), " before sending and set ", (0,jsx_runtime.jsx)(_components.code, {
              children: "maxFee"
            }), " to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.value"
            }), " when you have no separate cap."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["SDK rejects the transaction over ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ReadRequested"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Your entrypoint called ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_requestRead"
            }), " more or fewer than once"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Keep one ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_requestRead"
            }), " per prepared read."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Refund never arrives"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "revertRecipient"
            }), " is a contract without a payable ", (0,jsx_runtime.jsx)(_components.code, {
              children: "receive()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "receive() external payable {}"
            }), " or point ", (0,jsx_runtime.jsx)(_components.code, {
              children: "revertRecipient"
            }), " at an EOA."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Callback ran but stored nothing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The source returned an error and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "resultData"
            }), " was empty"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check the target, ABI and pinned block. The SDK shows the reason as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "raw.errorCode"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "when-to-use-this",
      children: "When to Use This"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use this pattern when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A Push Chain contract must react to state on another chain or a Web2 endpoint: settle, unlock, pay out, rebalance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The read is part of automation with no user online: keepers, governance outcomes, scheduled checks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You want the verdict and the action in one place, with no off-chain relayer between them."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do not use it when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Only your app or backend needs the value. Omit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "callback"
        }), " and read ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value"
        }), " from the SDK."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The result must be available in the same transaction. Reads are asynchronous."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Learn the query grammar and read types in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/universal-read/",
          children: "Read Universal State"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Batch several reads through your receiver with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/read-multiple-universal-states/",
          children: "Read Multiple Universal States"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resume a read from a saved request ID or transaction hash with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/track-universal-read/",
          children: "Track Universal Read"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UniversalReadClient"
        }), " base contract in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-helpers/#universal-read-client",
          children: "Contract Helpers"
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
        // 1790174610784
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
        // 1790174631562
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