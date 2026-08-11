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
const site_docs_chain_05_deep_dives_01_how_uea_works_mdx_f83_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/deep-dives/docs-deep-dives-how-uea-works","title":"How Universal Executor Account (UEA) Works","description":"How Universal Executor Account (UEA) Works | Deep Dives | Push Chain Docs","source":"@site/docs/chain/05-deep-dives/01-How-UEA-Works.mdx","sourceDirName":"chain/05-deep-dives","slug":"/chain/deep-dives/how-uea-works","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/deep-dives/how-uea-works","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/05-deep-dives/01-How-UEA-Works.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-deep-dives-how-uea-works","title":"How Universal Executor Account (UEA) Works","hide_title":false,"slug":"./how-uea-works","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_deep_dives_how_uea_works--how_universal_executor_account_(uea)_works.png"},"sidebar":"pushChainSidebar","previous":{"title":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/deep-dives"},"next":{"title":"How Chain Executor Account (CEA) Works","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/deep-dives/how-cea-works"}}');
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
        // 1786432398589
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
        // 1786432398593
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
        // 1786432398591
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
        // 1786432420985
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