"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[4570],{

/***/ 905684
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_05_deep_dives_01_how_uea_works_mdx_f83_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-05-deep-dives-01-how-uea-works-mdx-f83.json
const site_docs_chain_05_deep_dives_01_how_uea_works_mdx_f83_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/deep-dives/docs-deep-dives-how-uea-works","title":"How Universal Executor Account (UEA) Works","description":"How Universal Executor Account (UEA) Works | Deep Dives | Push Chain Docs","source":"@site/docs/chain/05-deep-dives/01-How-UEA-Works.mdx","sourceDirName":"chain/05-deep-dives","slug":"/chain/deep-dives/how-uea-works","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/deep-dives/how-uea-works","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/05-deep-dives/01-How-UEA-Works.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-deep-dives-how-uea-works","title":"How Universal Executor Account (UEA) Works","hide_title":false,"slug":"./how-uea-works","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_deep_dives_how_uea_works--how_universal_executor_account_(uea)_works.png"},"sidebar":"pushChainSidebar","previous":{"title":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/deep-dives"},"next":{"title":"How Chain Executor Account (CEA) Works","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/deep-dives/how-cea-works"}}');
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
;// ./docs/chain/05-deep-dives/01-How-UEA-Works.mdx


const frontMatter = {
	id: 'docs-deep-dives-how-uea-works',
	title: 'How Universal Executor Account (UEA) Works',
	hide_title: false,
	slug: './how-uea-works',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_deep_dives_how_uea_works--how_universal_executor_account_(uea)_works.png'
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "What Is a Universal Executor Account (UEA)?",
  "id": "what-is-a-universal-executor-account-uea",
  "level": 2
}, {
  "value": "The UEA Architecture",
  "id": "the-uea-architecture",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 2
}, {
  "value": "Transaction Routing Optimizations",
  "id": "transaction-routing-optimizations",
  "level": 3
}, {
  "value": "Fast Mode vs Standard Mode",
  "id": "fast-mode-vs-standard-mode",
  "level": 3
}, {
  "value": "How is the Identity Preserved and Linked?",
  "id": "how-is-the-identity-preserved-and-linked",
  "level": 2
}, {
  "value": "Comparison — EOAs vs Smart Accounts vs UEAs",
  "id": "comparison--eoas-vs-smart-accounts-vs-ueas",
  "level": 2
}, {
  "value": "Why the UEA Matters",
  "id": "why-the-uea-matters",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
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
        children: "How Universal Executor Account (UEA) Works | Deep Dives | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Executor Account (UEA)"
      }), " is one of the key innovations behind ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain’s Universal Execution Layer"
      }), ". A system that lets any user, from ", (0,jsx_runtime.jsx)(_components.em, {
        children: "any origin chain"
      }), ", execute transactions natively on Push Chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this deep dive, we’ll explore:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 What a UEA is"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚙️ How transactions execute under the hood"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🔗 How it links identity across chains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧩 How it differs from EOAs and Smart Accounts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-is-a-universal-executor-account-uea",
      children: "What Is a Universal Executor Account (UEA)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Executor Account"
      }), " (UEA) is an ", (0,jsx_runtime.jsx)(_components.em, {
        children: "interoperable execution identity"
      }), " that lives on Push Chain but can be ", (0,jsx_runtime.jsx)(_components.em, {
        children: "controlled from any origin chain"
      }), " (such as Ethereum, Solana, Base, Polygon, etc.)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It acts as your ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "on-chain agent"
      }), " on Push Chain:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It holds balances and maintains on-chain state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It executes transactions, including batched multicalls."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It validates cross-chain signatures from other networks."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It ensures your ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "source-chain wallet remains in control"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["It supports ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "universal fee abstraction"
        }), ", meaning you don’t need $PC to transact."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Think of the UEA as your universal smart account that can be signed from anywhere."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-uea-architecture",
      children: "The UEA Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["At a system level, every UEA transaction flows through ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Routing → Verification → Execution"
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
              children: "Universal Gateway"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles inbound and outbound routing between origin chains and Push Chain. Locks user fees and relays payloads."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Universal Validators"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification / Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Form consensus on the validity of cross-chain transactions before relaying to Push Chain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Universal Verification Layer (UVL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifies signatures from multiple chain types (EVM, Solana, etc.) via pluggable verifiers."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Universal Executor Account (UEA)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes encoded transactions and manages account state on Push Chain."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "sequenceDiagram\n    participant Origin as Origin Wallet\n    participant Gateway as Universal Gateway\n    participant UValidators as Universal Validators\n    participant UEA as UEA Contract\n    participant UVL as UVL (Verification Layer)\n\n    Origin->>Gateway: locks Fees +<br />send Tx(payload + signature)\n    Gateway->>UValidators: verifies transaction +<br />origin proof\n    UValidators-->>UEA: valid\n    UValidators->>UEA: relay(payload + signature)\n    UEA->>UVL: verify signature\n    UVL-->>UEA: valid\n\n    UEA-->>UEA: execute(payload)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a user signs and submits a transaction from another chain, Push Chain routes and executes it through five stages:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Routing (Universal Gateway)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nThe Universal Gateway locks the required fee on the origin chain and emits the transaction payload to Push Chain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Transaction Verification (Universal Validators)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nUniversal Validators form consensus on the validity of the transaction. Once verified, the payload is relayed to the user’s corresponding UEA (deterministically derived from their origin wallet)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Payload Reception (UEA)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nThe UEA receives the payload and signature bundle from the validators, which it passes to the Universal Verification Layer for validation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Signature Verification (UVL)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nThe UVL verifies the origin signature according to that chain’s ruleset — for example, using ECDSA for EVM chains or Ed25519 for Solana."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Execution (UEA)"
      }), (0,jsx_runtime.jsx)("br", {}), "\nUpon successful verification, the UEA executes the payload on Push Chain — performing single or multiple contract calls atomically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This design guarantees that every cross-chain transaction is validated, deterministic, and secure before execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transaction-routing-optimizations",
      children: "Transaction Routing Optimizations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Not all cross-chain transactions require full routing through the Universal Gateway.\nThe SDK dynamically detects whether the user’s UEA already holds sufficient fees for execution."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If fees exist on the UEA:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The transaction bypasses both the Gateway and Validators."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It’s sent directly to the UEA for immediate execution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This removes source-chain confirmation latency, giving users a near-instant experience after their first funded transaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subsequent transactions feel instant because the UEA can self-fund execution once fees are already available."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fast-mode-vs-standard-mode",
      children: "Fast Mode vs Standard Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When It Activates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When native asset value ≤ $10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relays the transaction to the UEA after a single confirmation on the source chain. Ideal for UX-critical low-value operations."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Standard Mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Waits for multiple block confirmations (based on re-org probability) before relaying to Push Chain for execution."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-is-the-identity-preserved-and-linked",
      children: "How is the Identity Preserved and Linked?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Each UEA is deterministically linked to the user’s origin wallet address.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "This linkage is achieved by using the origin wallet as the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "seed for UEA address generation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Whenever a new user performs their first transaction, a UEA is automatically deployed (always gasless) and a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mapping"
      }), " is created between:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The origin wallet address, and"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The derived UEA address on Push Chain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This mapping is stored on the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/contract-helpers/#ueafactory-interface",
        children: "UEAFactory contract"
      }), " and can be queried either ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "on-chain"
      }), " or through the SDK. This ensures every user’s identity remains consistent across chains, and their UEA always maps back to the same origin wallet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This deterministic linkage also enables advanced cross-chain use cases such as —"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tracking activity per chain or per identity,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linking multi-chain accounts for the same user, and"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enabling “chain-vs-chain” gameplay or logic."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Examples —"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🕹 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://ballsy.push.org",
          children: "Ballsy App"
        }), " — demonstrates chain-based PvP logic through deterministic UEAs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔁 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/basics/tutorial-universal-counter/#live-playground",
          children: "Universal Counter Tutorial"
        }), " — showcases UEA persistence across origin chains."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison--eoas-vs-smart-accounts-vs-ueas",
      children: "Comparison — EOAs vs Smart Accounts vs UEAs"
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
              children: "Universal Executor Account (UEA)"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-chain (universal)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Private key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smart contract logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Origin-chain wallet signature"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local to chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local to chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routed through Gateway + Validators"
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
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fee Token"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Native gas token"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configurable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any token / sponsored / external"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bridging Required"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
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
            children: "Deterministically mapped across chains"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Verification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECDSA only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom or EIP-1271"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-chain via UVL (EVM, Solana, etc.)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In short: UEAs extend smart account logic beyond a single ecosystem,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "combining programmable control with cross-chain identity and atomic execution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-the-uea-matters",
      children: "Why the UEA Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The UEA fundamentally redefines what a blockchain account can be:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A single ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "execution identity"
        }), " across chains."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Backed by ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "universal verification"
        }), " instead of chain-specific keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Capable of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "multi-call atomic execution"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compatible with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "fee abstraction"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "sponsorship models"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Together, these properties make Push Chain the first blockchain where external users can ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "act natively"
      }), ". Not through bridges or wrapped assets, but through their own universal accounts."]
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