"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[27536],{

/***/ 821762
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_05_deep_dives_02_how_cea_works_mdx_f0f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-05-deep-dives-02-how-cea-works-mdx-f0f.json
const site_docs_chain_05_deep_dives_02_how_cea_works_mdx_f0f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/deep-dives/docs-deep-dives-how-cea-works","title":"How Chain Executor Account (CEA) Works","description":"How Chain Executor Account (CEA) Works | Deep Dives | Push Chain Docs","source":"@site/docs/chain/05-deep-dives/02-How-CEA-Works.mdx","sourceDirName":"chain/05-deep-dives","slug":"/chain/deep-dives/how-cea-works","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/deep-dives/how-cea-works","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/05-deep-dives/02-How-CEA-Works.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"docs-deep-dives-how-cea-works","title":"How Chain Executor Account (CEA) Works","hide_title":false,"slug":"./how-cea-works","displayed_sidebar":"pushChainSidebar","sidebar_position":2,"image":"/assets/docs/previews/docs_deep_dives_how_cea_works--how_chain_executor_account_(cea)_works.png"},"sidebar":"pushChainSidebar","previous":{"title":"How Universal Executor Account (UEA) Works","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/deep-dives/how-uea-works"},"next":{"title":"System & Node Tools","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/node-and-system-tools"}}');
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
;// ./docs/chain/05-deep-dives/02-How-CEA-Works.mdx


const frontMatter = {
	id: 'docs-deep-dives-how-cea-works',
	title: 'How Chain Executor Account (CEA) Works',
	hide_title: false,
	slug: './how-cea-works',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_deep_dives_how_cea_works--how_chain_executor_account_(cea)_works.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/





const toc = [{
  "value": "What Is a Chain Executor Account (CEA)?",
  "id": "what-is-a-chain-executor-account-cea",
  "level": 2
}, {
  "value": "The CEA Architecture",
  "id": "the-cea-architecture",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 2
}, {
  "value": "Computing the CEA Address",
  "id": "computing-the-cea-address",
  "level": 3
}, {
  "value": "Lazy Deployment",
  "id": "lazy-deployment",
  "level": 3
}, {
  "value": "Fee Mechanics",
  "id": "fee-mechanics",
  "level": 3
}, {
  "value": "How is the Identity Preserved and Linked?",
  "id": "how-is-the-identity-preserved-and-linked",
  "level": 2
}, {
  "value": "Binding for Contracts",
  "id": "binding-for-contracts",
  "level": 3
}, {
  "value": "Comparison — EOAs vs Smart Accounts vs UEAs vs CEAs",
  "id": "comparison--eoas-vs-smart-accounts-vs-ueas-vs-ceas",
  "level": 2
}, {
  "value": "Why the CEA Matters",
  "id": "why-the-cea-matters",
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
    mermaid: "mermaid",
    p: "p",
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
        children: "How Chain Executor Account (CEA) Works | Deep Dives | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain Executor Account (CEA)"
      }), " is the destination-chain counterpart to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/deep-dives/how-uea-works",
        children: "UEA"
      }), ". Where a UEA is the identity an external-chain wallet uses to act ", (0,jsx_runtime.jsx)(_components.em, {
        children: "on Push Chain"
      }), ", a CEA is the identity a Push Chain account uses to act ", (0,jsx_runtime.jsx)(_components.em, {
        children: "on every other chain"
      }), ". Together they make universal execution ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bidirectional"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this deep dive, we'll explore:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 What a CEA is"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚙️ How transactions flow through it"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔗 How its identity is bound to a Push Chain account"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧩 How it differs from EOAs, Smart Accounts, and UEAs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-is-a-chain-executor-account-cea",
      children: "What Is a Chain Executor Account (CEA)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chain Executor Account"
      }), " (CEA) is a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "deterministic smart account"
      }), " that lives on an ", (0,jsx_runtime.jsx)(_components.em, {
        children: "external chain"
      }), " (such as Ethereum, BNB Chain, Base, Solana, etc.) and is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "controlled by a Push Chain account"
      }), ". The Push-side account can be a UEA, a Push-native EOA, or a Push Chain smart contract."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It acts as your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "on-chain agent on every external chain"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It holds destination-chain native and tokens."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It executes transactions on destination-chain protocols, with itself as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It supports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "atomic multicalls"
        }), " dispatched by the Push-side account."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It can send transactions back to Push Chain through the destination chain's gateway."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Its address is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deterministic"
        }), ", so you can compute it before any cross-chain activity has happened."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Think of the CEA as your wallet or contract's universal executor on every other chain, controlled entirely from Push Chain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-cea-architecture",
      children: "The CEA Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At a system level, every CEA-mediated transaction flows through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dispatch → Relay → Execution → (optional) Return"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UniversalGatewayPC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Push-Chain-side gateway that accepts outbound requests, locks fees in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$PC"
            }), ", and emits the outbound event."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TSS Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relay & Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Observes the outbound event, derives the CEA on the destination chain, deploys it on first use, and submits the transaction from the CEA."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CEA Contract"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Lives on the destination chain. Runs the dispatched payload with itself as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "msg.sender"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CEAFactory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identity Binding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-chain factory that maps Push-side accounts to deterministic CEA addresses."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UniversalGateway (return leg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inbound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination-chain gateway that the CEA calls to send results back to Push Chain."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\n    participant Push as Push Account<br/>(UEA / EOA / Contract)\n    participant UGPC as UniversalGatewayPC<br/>(Push Chain)\n    participant TSS as TSS Network\n    participant CEA as CEA<br/>(External Chain)\n    participant Target as Target Contract<br/>(External Chain)\n    participant ExtGW as UniversalGateway<br/>(External Chain)\n\n    Push->>UGPC: send outbound request\n    UGPC->>UGPC: collect fees, emit event\n    UGPC->>TSS: outbound event\n    TSS->>CEA: deploy if first use, submit tx\n    CEA->>Target: execute payload (msg.sender = CEA)\n    Target-->>CEA: result\n    opt Return Leg\n        CEA->>ExtGW: send return tx\n        ExtGW->>Push: credit Push-side account\n    end"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a Push Chain account dispatches an outbound transaction, Push Chain routes and executes it through five stages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Dispatch (UniversalGatewayPC)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nThe Push-side account calls the gateway with the outbound request. The gateway collects the protocol fee in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), ", swaps part of the value into destination-chain gas, and emits the outbound event the TSS network listens for."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. CEA Resolution (TSS Network)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nThe TSS network observes the event and derives the CEA on the destination chain. If the CEA has not been deployed yet, the TSS deploys it on first use at the same deterministic address that was already known."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. CEA Funding (Vault)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nThe destination-chain Vault forwards the bridged amount (native or ERC20) to the CEA, leaving it ready to pay for the call."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Execution (CEA)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nThe TSS submits the transaction. The CEA runs the dispatched payload (a single call or a multicall) with itself as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.sender"
      }), ". The destination contract has no awareness that the call originated on Push Chain; it just sees a normal address."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Optional Return Leg"
      }), (0,jsx_runtime.jsx)("br", {}), "\nIf the payload calls back into the destination chain's gateway, that gateway emits an inbound event toward Push Chain, and the TSS relays it. Push Chain enforces that the return can only credit the Push-side account that owns the CEA, which is what makes contract-to-contract roundtrips trustless."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This design guarantees that every outbound transaction has a stable identity, a verifiable origin, and a predictable settlement path on the destination chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "computing-the-cea-address",
      children: "Computing the CEA Address"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CEA address is fully deterministic, so applications can compute it any time without waiting for the first transaction. There are two equivalent paths:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Off-chain (SDK)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nThe SDK exposes ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/utility-functions/#derive-executor-account",
        children: "deriveExecutorAccount()"
      }), ", which returns the CEA address for any Push-side account on any supported destination chain, optionally with a deployment-status check. Use this in dApps, scripts, or monitoring tools that don't want to make a destination-chain RPC call. See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account/",
        children: "Derive CEA tutorial"
      }), " for end-to-end examples."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "On-chain (CEAFactory)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nOn every supported external chain, a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CEAFactory"
      }), " contract exposes the same mapping. Calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getCEAForPushAccount(pushAccount)"
      }), " returns the CEA address (deployed or predicted) and a deployment flag. Use this when a destination-chain contract itself needs to whitelist, fund, or attribute calls to a known CEA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Both paths produce the same address. The off-chain path is cheaper and faster for read flows; the on-chain path is the only option from a destination-chain contract."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lazy-deployment",
      children: "Lazy Deployment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CEAs are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "never"
      }), " deployed eagerly. The address is predictable and stable, but no on-chain footprint exists until the first transaction needs it. This means:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You can compute and authorize a CEA before any cross-chain activity (whitelist it, fund it, approve it on a protocol)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deployment gas is paid by the TSS path on first use, calculated and included in the gas limit auto via the SDK."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The deterministic mapping never moves once deployed."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fee-mechanics",
      children: "Fee Mechanics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CEA-mediated outbounds consume fees on both sides of the bridge, but the user pays once on Push Chain in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fee"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Paid In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What It Covers"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Fee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "$PC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain protocol revenue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gas Fee"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "$PC"
            }), " (auto-swapped)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination-chain gas for the CEA's transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return-leg Inbound Fee (roundtrips only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination native"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The CEA's call into the destination chain's gateway to send the inbound back"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The dispatching account quotes the protocol fee plus the gas fee upfront. Surplus ", (0,jsx_runtime.jsx)(_components.code, {
        children: "msg.value"
      }), " is refunded back to the dispatcher on Push Chain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Roundtrips need funding waiting on Push Chain too."
      }), " When the return leg arrives, the Push-side recipient (the originating contract or UEA) must already hold enough ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), " to execute whatever post-arrival logic it runs. Push Chain delivers the payload; the recipient pays for executing it from its own balance. Plan the recipient's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), " balance before initiating the roundtrip, not after."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "EOAs cannot execute roundtrip payloads",
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Roundtrip payload execution lands on Push Chain only when the recipient supports the signature scheme, which means a Push Chain contract that implements the inbound handler, or a UEA. A plain EOA on Push Chain is a valid destination for funds but cannot run executable inbound calls."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-is-the-identity-preserved-and-linked",
      children: "How is the Identity Preserved and Linked?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each CEA is deterministically linked to a single Push Chain account. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CEAFactory"
      }), " on the destination chain stores both directions of this mapping:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getCEAForPushAccount(pushAccount)"
        }), " returns the CEA on this chain (deployed or predicted)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "getPushAccountForCEA(cea)"
        }), " returns the Push-side account that owns this CEA."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This bidirectional mapping is what makes CEAs safe for return legs. When a CEA calls back to the destination chain's gateway with a recipient, the gateway checks that the recipient matches ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getPushAccountForCEA(msg.sender)"
      }), " and rejects any mismatch. A malicious destination-chain contract impersonating a CEA cannot misroute funds, because Push Chain only trusts the on-chain mapping."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "binding-for-contracts",
      children: "Binding for Contracts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For user wallets, the CEA is bound to the user's UEA. The same UEA on Push Chain produces the same CEA on each external chain forever."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For Push Chain ", (0,jsx_runtime.jsx)(_components.em, {
        children: "contracts"
      }), ", the CEA is bound to the contract's Push Chain address. A different deployment, even with identical bytecode, has a different CEA on every chain. For proxy patterns, the CEA is bound to the proxy address, so upgrades do not change it. A new contract address means a new CEA, and previous whitelists or balances on the destination chain do not transfer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison--eoas-vs-smart-accounts-vs-ueas-vs-ceas",
      children: "Comparison — EOAs vs Smart Accounts vs UEAs vs CEAs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EOA"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart Account"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UEA"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CEA"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lives On"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each external chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bound To"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An external-chain wallet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Push Chain account"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Acts as msg.sender For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local-chain tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local-chain tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push Chain tx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destination-chain tx"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Atomic Multicall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deployment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-initiated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy on first use, by Push validators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy on first use, by TSS network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identity Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain-specific"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chain-specific"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same UEA forever per origin wallet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same CEA forever per Push account, per chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Initiated By"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External-chain signature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-Chain-side dispatch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In short: UEAs and CEAs together make Push Chain the first network where execution flows symmetrically across chain boundaries."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-the-cea-matters",
      children: "Why the CEA Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CEA completes the universal execution model:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetric reach."
        }), " A Push Chain account can act on any supported destination chain through a stable, deterministic identity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trustless roundtrips."
        }), " The CEA-to-Push-account mapping is enforced by the destination-chain gateway, so return-leg credits cannot be misrouted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre-authorization."
        }), " CEA addresses are predictable, so destination-chain protocols can whitelist or fund a CEA before it has been deployed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No new mental model."
        }), " Same ", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " semantics, same multicall, same lazy-deployment story as UEAs, applied to the destination chain instead of Push Chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For hands-on usage, see the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-examples/outbound-from-push-chain",
        children: "Outbound from Push Chain"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-examples/inbound-to-push-chain",
        children: "Inbound to Push Chain"
      }), " examples, the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/power-features/tutorial-derive-chain-executor-account/",
        children: "Derive CEA tutorial"
      }), ", and the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-initiated-multichain-execution",
        children: "Contract-Initiated Multichain Execution"
      }), " reference."]
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
        // 1788428301428
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
        // 1788428301426
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
        // 1788428301424
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
        // 1788428310910
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