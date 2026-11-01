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
const site_docs_chain_05_deep_dives_02_how_cea_works_mdx_f0f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/deep-dives/docs-deep-dives-how-cea-works","title":"How Chain Executor Account (CEA) Works","description":"How Chain Executor Account (CEA) Works | Deep Dives | Push Chain Docs","source":"@site/docs/chain/05-deep-dives/02-How-CEA-Works.mdx","sourceDirName":"chain/05-deep-dives","slug":"/chain/deep-dives/how-cea-works","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/deep-dives/how-cea-works","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/05-deep-dives/02-How-CEA-Works.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"docs-deep-dives-how-cea-works","title":"How Chain Executor Account (CEA) Works","hide_title":false,"slug":"./how-cea-works","displayed_sidebar":"pushChainSidebar","sidebar_position":2,"image":"/assets/docs/previews/docs_deep_dives_how_cea_works--how_chain_executor_account_(cea)_works.png"},"sidebar":"pushChainSidebar","previous":{"title":"How Universal Executor Account (UEA) Works","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/deep-dives/how-uea-works"},"next":{"title":"System & Node Tools","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/node-and-system-tools"}}');
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



/***/ }

}]);