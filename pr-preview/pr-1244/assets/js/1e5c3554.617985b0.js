(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[71842],{

/***/ 928180
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
  metadata: () => (/* reexport */ site_docs_chain_03_build_13_a_universal_read_mdx_1e5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-13-a-universal-read-mdx-1e5.json
const site_docs_chain_03_build_13_a_universal_read_mdx_1e5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-universal-read","title":"Universal Read","description":"Universal Read | Build | Push Chain Docs","source":"@site/docs/chain/03-build/13a-Universal-Read.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/universal-read","permalink":"/push-chain-website/pr-preview/pr-1244/docs/chain/build/universal-read","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/13a-Universal-Read.mdx","tags":[],"version":"current","sidebarPosition":13.5,"frontMatter":{"id":"docs-chain-build-universal-read","title":"Universal Read","hide_title":false,"slug":"./universal-read","displayed_sidebar":"pushChainSidebar","sidebar_position":13.5,"image":"/assets/docs/previews/docs_chain_build--universal_read.png"},"sidebar":"pushChainSidebar","previous":{"title":"Reading Blockchain State","permalink":"/push-chain-website/pr-preview/pr-1244/docs/chain/build/reading-blockchain-state"},"next":{"title":"Contract Helpers","permalink":"/push-chain-website/pr-preview/pr-1244/docs/chain/build/contract-helpers"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
// EXTERNAL MODULE: ./src/components/NodeJSVirtualIDE/NodeJSVirtualIDE.tsx
var NodeJSVirtualIDE = __webpack_require__(891517);
;// ./docs/chain/03-build/13a-Universal-Read.mdx


const frontMatter = {
	id: 'docs-chain-build-universal-read',
	title: 'Universal Read',
	hide_title: false,
	slug: './universal-read',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 13.5,
	image: '/assets/docs/previews/docs_chain_build--universal_read.png'
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
  "value": "How a read completes",
  "id": "how-a-read-completes",
  "level": 2
}, {
  "value": "First read: the Donut registry",
  "id": "first-read-the-donut-registry",
  "level": 2
}, {
  "value": "Method reference",
  "id": "method-reference",
  "level": 2
}, {
  "value": "Supported queries",
  "id": "supported-queries",
  "level": 3
}, {
  "value": "Solana account decoding (upcoming SDK release)",
  "id": "solana-account-decoding-upcoming-sdk-release",
  "level": 3
}, {
  "value": "Query and lifecycle options",
  "id": "query-and-lifecycle-options",
  "level": 3
}, {
  "value": "Web2 options and quorum",
  "id": "web2-options-and-quorum",
  "level": 3
}, {
  "value": "Integrate your own contract",
  "id": "integrate-your-own-contract",
  "level": 2
}, {
  "value": "Prepare and batch reads",
  "id": "prepare-and-batch-reads",
  "level": 2
}, {
  "value": "Resume a request",
  "id": "resume-a-request",
  "level": 2
}, {
  "value": "Responses and failure handling",
  "id": "responses-and-failure-handling",
  "level": 2
}, {
  "value": "Fees, refunds and timeouts",
  "id": "fees-refunds-and-timeouts",
  "level": 2
}, {
  "value": "Common mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Next steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
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
        children: "Universal Read | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Universal Read lets a Push Chain application request state from an external chain or HTTPS endpoint and receive the validator-agreed result through an on-chain callback. The SDK prepares the query, sizes its payment, submits the request, and tracks the outcome."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Need"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Your frontend or backend needs data directly from an RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/docs/chain/build/reading-blockchain-state/",
              children: "Reading Blockchain State"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Your Push contract needs external state delivered on-chain"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Universal Read with your own ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UniversalReadClient"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "You want an SDK request whose result is stored by a shared receiver"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Read with the default registry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike an RPC view call, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read()"
      }), " broadcasts a transaction and costs Push gas plus the protocol fee and callback budget. Preparing a request and tracking an existing one do not broadcast."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-a-read-completes",
      children: "How a read completes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The SDK encodes the query, selects its reference height where applicable, quotes the protocol fee, and sizes the callback budget."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A transaction calls the registry or your application's request entrypoint. The contract emits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReadRequested"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validators read the destination and vote on the result."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["After quorum, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UniversalCallback"
        }), " calls the receiver. The node reports callback gas and attempts to refund unused budget to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "refundTo"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A transaction can contain several independent reads. Each receives its own ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requestId"
      }), " and settles separately. Request IDs become available after submission; save the transaction hash first."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Check the result, not only the lifecycle status",
      type: "important",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["A successful result requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "status === READ.STATUS.FULFILLED"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raw.status === READ.RESULT_STATUS.SUCCESS"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "callbackDelivered === true"
        }), ". Also inspect ", (0,jsx_runtime.jsx)(_components.code, {
          children: "decodeError"
        }), " before using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value"
        }), ". A callback can revert while the node still reports ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FULFILLED"
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "first-read-the-donut-registry",
      children: "First read: the Donut registry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Omit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callback"
      }), " to use the deployed registry. It stores results and lets you use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read()"
      }), " without deploying an application contract. The default callback gas is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "500_000n"
      }), "; use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callback: { gasLimit: 750_000n }"
      }), " for a larger result, up to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1_000_000n"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The playground creates a temporary Donut wallet. Fund only the displayed testnet address; its key stays in the current browser session. Closing or reloading loses access to that wallet, so use test funds only. It prints the request reference before waiting, allowing read-only recovery later."
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: request a Sepolia balance",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: null,
        children: `
// customPropGTagEvent=universal_read_registry
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

async function main() {
const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const wallet = ethers.Wallet.createRandom().connect(provider);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
try {
  console.log('Temporary Donut wallet:', wallet.address);
  await rl.question(':::prompt:::Fund this temporary wallet with test PC, then press Enter: ' + wallet.address + ' Faucet: https://faucet.push.org/');
  const signer = await PushChain.utils.signer.toUniversal(wallet);
  const pushChainClient = await PushChain.initialize(signer, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });

  const pending = await pushChainClient.universal.read('0x000000000000000000000000000000000000dEaD', {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    waitForCompletion: false,
  });
  console.log('Save requestId:', pending.requestId);
  console.log('Save txHash:', pending.txHash);
  const done = await pending.wait();
  const READ = PushChain.CONSTANTS.READ;
  if (done.status !== READ.STATUS.FULFILLED || done.raw?.status !== READ.RESULT_STATUS.SUCCESS || done.callbackDelivered !== true || done.decodeError) {
    throw new Error('No usable result: ' + JSON.stringify({ status: done.status, raw: done.raw, delivered: done.callbackDelivered, decodeError: done.decodeError }));
  }
  console.log('Value:', JSON.stringify(done.value, (_, value) => typeof value === 'bigint' ? value.toString() : value));
  console.log('Callback delivered:', done.callbackDelivered);
} finally {
  rl.close();
  provider.destroy();
}
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
`
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "method-reference",
      children: "Method reference"
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Method"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Behavior"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "read(subject, options)"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Prepare, submit and wait for one decoded read. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "waitForCompletion: false"
              }), " returns a confirmed request snapshot. Requires a signer."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "prepareRead(subject, options)"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Fetch preflight data and build a ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PreparedRead"
              }), " without broadcasting. Works with a read-only client."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "executeReads(preparedReads, options?)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Submit prepared reads and preserve input order. Uses atomic batching when supported, otherwise sequential transactions. Requires a signer."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "trackRead({ txHash }, options?)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Return an array of current snapshots, one per read requested in that transaction."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "trackRead({ requestId }, options?)"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Return one current snapshot. Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: ".wait()"
              }), " to wait, or ", (0,jsx_runtime.jsx)(_components.code, {
                children: ".refresh()"
              }), " for an updated snapshot."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "supported-queries",
      children: "Supported queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The subject identifies the holder, contract or URL. Query options are mutually exclusive."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const CHAIN = PushChain.CONSTANTS.CHAIN;\n\n// EVM native balance; Solana uses the same form with a base58 holder.\nawait pushChainClient.universal.read(holder, { chain: CHAIN.ETHEREUM_SEPOLIA });\n\n// ERC-20 balanceOf(holder), or the holder's derived SPL token account.\nawait pushChainClient.universal.read(holder, {\n  chain: CHAIN.ETHEREUM_SEPOLIA,\n  token: tokenAddress,\n});\n\n// The ABI encodes the call and decodes its output.\nawait pushChainClient.universal.read(tokenAddress, {\n  chain: CHAIN.ETHEREUM_SEPOLIA,\n  abi: [{ type: 'function', name: 'totalSupply', stateMutability: 'view',\n    inputs: [], outputs: [{ type: 'uint256' }] }] as const,\n  functionName: 'totalSupply',\n});\n\nawait pushChainClient.universal.read(contractAddress, {\n  chain: CHAIN.ETHEREUM_SEPOLIA,\n  storageSlot: 0n,\n});\n\nawait pushChainClient.universal.read(solanaHolder, {\n  chain: CHAIN.SOLANA_DEVNET,\n  token: mintAddress,\n  // SDK detects SPL Token or Token-2022 from the mint owner.\n});\n\nawait pushChainClient.universal.read('https://jsonplaceholder.typicode.com/todos/1', {\n  chain: CHAIN.WEB2,\n  web2: { extract: [\n    { path: '$.id', valueType: 'uint256' },\n    { path: '$.completed', valueType: 'bool' },\n  ] },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["EVM calls require ", (0,jsx_runtime.jsx)(_components.code, {
        children: "view"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "pure"
      }), " functions and correctly typed ABI arguments. One output is unwrapped; multiple outputs form a tuple. Web2 values are always an array in extraction order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Solana reads use finalized state. Public ", (0,jsx_runtime.jsx)(_components.code, {
        children: "blockNumber"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "minConfirmations"
      }), " options are EVM-only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "solana-account-decoding-upcoming-sdk-release",
      children: "Solana account decoding (upcoming SDK release)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The SDK changes below are not included in this site's pinned 6.0.25 playground runtime yet. After upgrading to the release containing them, token reads detect the mint's owning program automatically; remove ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tokenProgram"
      }), " from existing calls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Read an Anchor account's stored state by passing its account address and IDL layout:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const result = await pushChainClient.universal.read(counterAccountAddress, {\n  chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,\n  idl: counterIdl,\n  accountName: 'counter', // exact account name in the IDL\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This reads finalized account bytes; it does not execute a program instruction. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idl"
      }), " is exclusive with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abi"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "token"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "storageSlot"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "web2"
      }), ", and does not accept ", (0,jsx_runtime.jsx)(_components.code, {
        children: "functionName"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "args"
      }), ". The SDK checks the account discriminator and decodes with Anchor: large integers use BN and public keys use PublicKey. A mismatched layout appears as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "decodeError"
      }), ", with no usable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "value"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Preparation and batching retain the decoder. For resumed reads, pass ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resultShape: { kind: 'svmAccount', idl: counterIdl, accountName: 'counter' }"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trackRead"
      }), ". The IDL is not stored on-chain. Raw account results do not attest program ownership; verify the owner separately if your application relies on it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "query-and-lifecycle-options",
      children: "Query and lifecycle options"
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      showRequiredNotice: false,
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Option"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Meaning"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "chain"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Required source destination; ", (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN.WEB2"
              }), " is read-only and is not a transaction destination."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "token"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ERC-20 address or SPL mint. The SDK derives the holder's associated token account for Solana."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "idl / accountName"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Upcoming SDK: Anchor layout for a Solana account-state read. See the release note above."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "abi / functionName / args"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Typed EVM query. These top-level fields describe the external view call."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "storageSlot"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "EVM slot as bigint or a hex word."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockNumber"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "EVM pin. Defaults to oracle-observed height minus confirmations; the oracle may lag the actual head."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "minConfirmations"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["EVM confirmation requirement, default ", (0,jsx_runtime.jsx)(_components.code, {
                children: "1"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "expiryBlocks"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Request lifetime in Push blocks, default ", (0,jsx_runtime.jsx)(_components.code, {
                children: "300n"
              }), "."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "maxFee"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cap on the upfront protocol fee plus callback budget."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "refundTo"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Destination for unused callback budget; defaults to your sending Push account."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "callback"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional receiver/request configuration; see the contract example below."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "waitForCompletion"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              }), " for ", (0,jsx_runtime.jsx)(_components.code, {
                children: "read"
              }), "/", (0,jsx_runtime.jsx)(_components.code, {
                children: "executeReads"
              }), ". Set false to obtain confirmed request references first."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "progressHook"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Receives ", (0,jsx_runtime.jsx)(_components.code, {
                children: "READ-TX-*"
              }), " events and underlying send events."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "advanced.pollingIntervalMs"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Default 2,000 ms; minimum 500 ms."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "advanced.timeout"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Explicit client wait timeout in milliseconds; overrides the default policy."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "advanced.enforceGasCheck"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Default false: warn on insufficient balance; true: fail before broadcasting. Not a tracking option."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "prepareRead"
      }), " accepts query, pinning, refund and callback options, not lifecycle settings. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeReads"
      }), " accepts lifecycle settings. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trackRead"
      }), " accepts polling/timeout options plus ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resultShape"
      }), " for decoding results whose ABI is not recoverable from the on-chain query."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "web2-options-and-quorum",
      children: "Web2 options and quorum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "web2.extract"
      }), " contains 1–16 JSONPath entries. Each has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "path"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "valueType"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "uint256"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int256"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bool"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bytes"
      }), ". Numeric entries may specify ", (0,jsx_runtime.jsx)(_components.code, {
        children: "decimals"
      }), "; values are multiplied by 10 to that power and truncated."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "method"
      }), " defaults to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "GET"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "POST"
      }), " may supply a string or byte-array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "body"
      }), ". A body on GET is rejected. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "timeoutMs"
      }), " defaults to 5,000 and is validator-clamped."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Validators vote on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "identical extracted bytes"
      }), ". A rapidly changing API may not reach quorum. Lower precision can help similar values match, but truncation does not guarantee agreement. Median aggregation is not supported."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Request data is public",
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "URLs, headers and bodies are recorded publicly. Never include API keys, bearer tokens or other secrets. The SDK's sensitive-header warning is advisory."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integrate-your-own-contract",
      children: "Integrate your own contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A custom receiver controls how an on-chain result is stored or used. Inherit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UniversalReadClient"
      }), " from a verified checkout of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push-chain-core-contracts"
      }), ". The example imports assume a Solidity remapping named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push-chain-core-contracts/"
      }), " pointing to that checkout."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This minimal receiver stores raw bytes. It does not treat callback arrival as proof of a successful source read. Before adding business actions, define how your app validates query identity, freshness, error results and caller authorization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity 0.8.26;\n\nimport {UniversalReadClient} from \"push-chain-core-contracts/src/UniversalReadClient.sol\";\nimport {ReadSpec} from \"push-chain-core-contracts/src/libraries/ReadTypes.sol\";\n\ncontract ExternalStateInbox is UniversalReadClient {\n    address public immutable REQUESTER;\n    mapping(uint256 => bytes) public results;\n\n    constructor(address callbackAddress, address requester_)\n        UniversalReadClient(callbackAddress)\n    {\n        require(requester_ != address(0), \"zero requester\");\n        REQUESTER = requester_;\n    }\n\n    function request(ReadSpec calldata spec, uint64 gasLimit)\n        external payable returns (uint256)\n    {\n        require(msg.sender == REQUESTER, \"only requester\");\n        return _requestRead(spec, abi.encode(msg.sender), gasLimit);\n    }\n\n    function _onReadResult(uint256 requestId, bytes calldata resultData, bytes memory)\n        internal override\n    {\n        results[requestId] = resultData;\n    }\n\n    receive() external payable {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On Donut, pass ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x00000000000000000000000000000000000000c2"
      }), " as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callbackAddress"
      }), ". Pass the Push-side account that will submit requests as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "requester_"
      }), ": normally ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pushChainClient.universal.account"
      }), ". For an external-chain signer this is its UEA; for a Push-native signer it is the native Push address. Authorizing the deployment EOA by accident can reject valid UEA calls. The base client restricts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onUniversalData"
      }), " to the callback contract. Do not expose an unprotected replacement callback."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After deploying the receiver, use its ABI:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const result = await pushChainClient.universal.read(holder, {\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n  callback: {\n    target: myReceiverAddress,\n    gasLimit: 200_000n,\n    abi: myReceiverAbi,\n    functionName: 'request',\n    // Optional mapper; default is (spec, gas) => [spec, gas].\n    args: (spec, gas) => [spec, gas],\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "callback.abi/functionName/args"
      }), " describe the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "payable request entrypoint"
      }), " on Push, while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callback.gasLimit"
      }), " controls the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "later result callback"
      }), ". Top-level ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abi/functionName/args"
      }), " describe the external read. The entrypoint must emit exactly one matching request per prepared read."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For application entrypoints you construct separately, prepare with just ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callback: { target, gasLimit }"
      }), ", insert ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prepared.specTuple"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "prepared.value"
      }), " into your transaction, then track its hash. Preparation does not require an entrypoint ABI; executing through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeReads"
      }), " does."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nested reads initiated during a result callback are unsupported. Initiate follow-up reads in a separate transaction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prepare-and-batch-reads",
      children: "Prepare and batch reads"
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: batch EVM, Solana and Web2 reads",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: null,
        children: `
// customPropGTagEvent=universal_read_batch
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

async function main() {
const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
const wallet = ethers.Wallet.createRandom().connect(provider);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
try {
  console.log('Temporary Donut wallet:', wallet.address);
  await rl.question(':::prompt:::Fund this temporary wallet with test PC, then press Enter: ' + wallet.address + ' Faucet: https://faucet.push.org/');
  const signer = await PushChain.utils.signer.toUniversal(wallet);
  const pushChainClient = await PushChain.initialize(signer, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });

  const first = await pushChainClient.universal.prepareRead('0x000000000000000000000000000000000000dEaD', {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
  });
  const second = await pushChainClient.universal.prepareRead('https://jsonplaceholder.typicode.com/todos/1', {
    chain: PushChain.CONSTANTS.CHAIN.WEB2,
    web2: { extract: [{ path: '$.id', valueType: 'uint256' }, { path: '$.completed', valueType: 'bool' }] },
  });
  const tokenAbi = [{ type: 'function', name: 'totalSupply', stateMutability: 'view', inputs: [], outputs: [{ type: 'uint256' }] }];
  const third = await pushChainClient.universal.prepareRead('0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', {
    chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
    abi: tokenAbi,
    functionName: 'totalSupply',
  });
  const fourth = await pushChainClient.universal.prepareRead('11111111111111111111111111111111', {
    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
  });
  const batch = await pushChainClient.universal.executeReads([first, second, third, fourth], { waitForCompletion: false });
  console.log('Submission is atomic:', batch.atomic);
  console.log('Save request IDs:', batch.reads.map(read => read.requestId).join(', '));
  console.log('Save transaction hashes:', (batch.transactionHashes || [batch.txHash]).join(', '));
  const results = await batch.wait();
  for (const done of results) {
    const READ = PushChain.CONSTANTS.READ;
    if (done.status !== READ.STATUS.FULFILLED || done.raw?.status !== READ.RESULT_STATUS.SUCCESS || done.callbackDelivered !== true || done.decodeError) {
      throw new Error('No usable result: ' + JSON.stringify({ status: done.status, raw: done.raw, delivered: done.callbackDelivered, decodeError: done.decodeError }));
    }
    console.log('Value:', JSON.stringify(done.value, (_, value) => typeof value === 'bigint' ? value.toString() : value));
    console.log('Callback delivered:', done.callbackDelivered);
  }
} finally {
  rl.close();
  provider.destroy();
}
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
`
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "executeReads"
      }), " preserves prepared input order. The playground covers an EVM native balance, Web2 extraction, a typed ERC-20 view call, and a finalized Solana balance in one batch. The SDK matches the emitted spec, callback target and gas limit; extra or missing requests cause ", (0,jsx_runtime.jsx)(_components.code, {
        children: "READ_REQUEST_MISMATCH"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "atomic"
      }), " describes request submission, not all-or-nothing validator fulfillment. With sequential fallback, inspect ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionHashes"
      }), ": earlier requests may already exist if a later transaction fails. Errors may include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "transactionHashes"
      }), " for committed calls and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pendingTransactionHash"
      }), " for an uncertain broadcast. Check that receipt before retrying."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resume-a-request",
      children: "Resume a request"
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: resume without a signing key",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: null,
        children: `
// customPropGTagEvent=universal_read_resume
import { PushChain } from '@pushchain/core';
import * as readline from 'node:readline/promises';

async function main() {
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
try {
  const requestId = (await rl.question('Paste a Donut Universal Read request ID (0x-prefixed, 32 bytes):')).trim();
  if (!/^0x[0-9a-fA-F]{64}$/.test(requestId)) throw new Error('Expected a 32-byte request ID');
  const account = PushChain.utils.account.toUniversal('0x000000000000000000000000000000000000dEaD', {
    chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
  });
  const pushChainClient = await PushChain.initialize(account, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });
  const snapshot = await pushChainClient.universal.trackRead({ requestId });
  console.log('Current status:', snapshot.status);
  const done = await snapshot.wait();
  const READ = PushChain.CONSTANTS.READ;
  if (done.status !== READ.STATUS.FULFILLED || done.raw?.status !== READ.RESULT_STATUS.SUCCESS || done.callbackDelivered !== true || done.decodeError) {
    throw new Error('No usable result: ' + JSON.stringify({ status: done.status, raw: done.raw, delivered: done.callbackDelivered, decodeError: done.decodeError }));
  }
  console.log('Value:', JSON.stringify(done.value, (_, value) => typeof value === 'bigint' ? value.toString() : value));
  console.log('Callback delivered:', done.callbackDelivered);
} finally {
  rl.close();
}
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
`
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A request ID is the durable per-read reference. A transaction hash can identify several reads, so its tracking overload returns an array. For a typed EVM call resumed in a new session, supply the ABI through ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resultShape"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const snapshot = await pushChainClient.universal.trackRead(\n  { requestId },\n  { resultShape: { kind: 'evmCall', abi: tokenAbi, functionName: 'totalSupply' } },\n);\nconst done = await snapshot.wait();\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Keep any ABI needed for decoding with your stored request reference. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "resultShape"
      }), " supplies runtime decoding information; it does not automatically infer a TypeScript return type from a transaction hash."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "responses-and-failure-handling",
      children: "Responses and failure handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What to inspect"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "requestId / txHash"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-read identity and the Push request transaction."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "status / isTerminal"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lifecycle: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PENDING"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "VOTING"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FULFILLED"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EXPIRED"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FAILED"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ABORTED"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "raw"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consensus status, bytes and error code; may be null before a result exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "callbackDelivered / callbackFailReason"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whether the application callback ran; failure bytes come from the callback event."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "value / decodeError"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decoded value or an explanation of why decoding failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fees"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "paid"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "protocolFee"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "callbackBudget"
            }), " and observed ", (0,jsx_runtime.jsx)(_components.code, {
              children: "burned/refunded/refundFailed"
            }), ". Unknown accounting stays undefined."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "request"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spec, callback target, original funder, refund recipient, gas, creation height and log index."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pcTx"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Node-reported fulfillment/settlement/expiry execution references."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "wait() / refresh()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for terminal state, or retrieve a new snapshot."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Terminal lifecycle failures resolve as responses; validation, broadcast, RPC, lookup and timeout failures can reject. Catch ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReadTimeoutError"
      }), " by its ", (0,jsx_runtime.jsx)(_components.code, {
        children: "code === 'READ_TIMEOUT'"
      }), " and resume the same reference. Do not submit another paid request just because your client stopped polling."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Callback delivery and settlement information are recovered from contract events, including Cosmos EndBlock events for expiry. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "decodeError"
      }), " is computed by the SDK; these fields are not all direct node-record fields."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fees-refunds-and-timeouts",
      children: "Fees, refunds and timeouts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The upfront payment is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "protocol fee + callback budget"
      }), ". The protocol fee is not refunded. Callback execution burns part of the budget; the remainder is pushed to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "refundTo"
      }), ". On expiry, the unused callback budget is returned if the recipient accepts it. A recipient that rejects native Push transfers can lose the refund to the admin rescue pool."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A warning for a non-UEA contract refund recipient does not prove it lacks ", (0,jsx_runtime.jsx)(_components.code, {
        children: "receive()"
      }), ". Ensure your chosen recipient accepts the native transfer."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Setting"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "web2.timeoutMs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP fetch timeout, default 5 seconds."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expiryBlocks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request lifetime, default 300 Push blocks."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "advanced.timeout"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SDK caller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How long this caller waits; timing out does not cancel the request."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each default ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wait()"
      }), " fetches a fresh Push height and uses:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "min(180_000, max(0, expiryHeight - currentPushHeight) × 1_340 + 10_000) milliseconds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The 10-second observation margin is not a settlement guarantee. Explicit timeouts take precedence, including values above 180 seconds. Failed height lookups reject; stalled height lookups are bounded by the default ceiling."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "FULFILLED"
            }), " but ", (0,jsx_runtime.jsx)(_components.code, {
              children: "value"
            }), " is absent"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inspect ", (0,jsx_runtime.jsx)(_components.code, {
              children: "raw.status"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "callbackDelivered"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "decodeError"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Callback failed for a large result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Submit a new request with more callback gas, up to 1,000,000. The failed request is not automatically retried."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Request timed out at the client"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resume by the saved request ID or transaction hash."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Only some batch calls were submitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recover committed hashes; check the pending hash before resubmitting."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web2 never reaches quorum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose stable extraction fields and appropriate numeric precision."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ReadRegistryUnavailableError"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Donut or provide your deployed application receiver and request ABI."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prepared read fails revalidation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepare a fresh request; old pins, expiry or budgets may no longer be valid."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-helpers/",
          children: "Contract Helpers"
        }), " for other Push contract integrations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/smart-contract-address-book/",
          children: "Smart Contract Address Book"
        }), " for Donut deployments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/constants/#universal-read",
          children: "Constants Reference"
        }), " for Read State limits and defaults."]
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
 */function PushAPIReference(_ref){let children=_ref.children,_ref$showRequiredNoti=_ref.showRequiredNotice,showRequiredNotice=_ref$showRequiredNoti===void 0?true:_ref$showRequiredNoti,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ReferenceContainer,{className:className,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:["These\xA0",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"Arguments"}),"\xA0are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})([""]);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

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
        // 1790080015280
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
        // 1790080027935
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
        // 1790080027389
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