"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[8558],{

/***/ 498312
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_04_for_ai_agents_mdx_093_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-04-for-ai-agents-mdx-093.json
const site_docs_chain_04_for_ai_agents_mdx_093_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/docs-chain-for-ai-agents","title":"For AI Agents & LLMs","description":"For AI Agents & LLMs | Push Chain Docs","source":"@site/docs/chain/04-For-AI-Agents.mdx","sourceDirName":"chain","slug":"/chain/for-ai-agents","permalink":"/push-chain-website/pr-preview/pr-1239/docs/chain/for-ai-agents","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/04-For-AI-Agents.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"docs-chain-for-ai-agents","title":"For AI Agents & LLMs","hide_title":false,"slug":"./for-ai-agents","displayed_sidebar":"pushChainSidebar","sidebar_position":4,"image":"/assets/docs/previews/docs_chain_for_ai_agents--for_ai_agents_&_llms.png"},"sidebar":"pushChainSidebar","previous":{"title":"Important Concepts","permalink":"/push-chain-website/pr-preview/pr-1239/docs/chain/important-concepts"},"next":{"title":"Tutorials","permalink":"/push-chain-website/pr-preview/pr-1239/docs/chain/tutorials"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/04-For-AI-Agents.mdx


const frontMatter = {
	id: 'docs-chain-for-ai-agents',
	title: 'For AI Agents & LLMs',
	hide_title: false,
	slug: './for-ai-agents',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 4,
	image: '/assets/docs/previews/docs_chain_for_ai_agents--for_ai_agents_&_llms.png'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Context Files",
  "id": "context-files",
  "level": 2
}, {
  "value": "Add to Your AI Code Editor",
  "id": "add-to-your-ai-code-editor",
  "level": 2
}, {
  "value": "Cursor",
  "id": "cursor",
  "level": 3
}, {
  "value": "Windsurf",
  "id": "windsurf",
  "level": 3
}, {
  "value": "Claude Code",
  "id": "claude-code",
  "level": 3
}, {
  "value": "Zed / Other Editors",
  "id": "zed--other-editors",
  "level": 3
}, {
  "value": "Agent Layer (<code>/agents/</code>)",
  "id": "agent-layer-agents",
  "level": 2
}, {
  "value": "Canonical Workflows",
  "id": "canonical-workflows",
  "level": 2
}, {
  "value": "Integration Paths",
  "id": "integration-paths",
  "level": 2
}, {
  "value": "Human developer",
  "id": "human-developer",
  "level": 3
}, {
  "value": "AI agent / copilot",
  "id": "ai-agent--copilot",
  "level": 3
}, {
  "value": "RAG / retrieval pipeline",
  "id": "rag--retrieval-pipeline",
  "level": 3
}, {
  "value": "Notes",
  "id": "notes",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        children: "For AI Agents & LLMs | Push Chain Docs"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Chain provides structured, machine-readable resources so AI coding assistants, agents, and automation pipelines can understand and execute cross-chain actions with maximum reliability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context-files",
      children: "Context Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AI models have a context window — the amount of text they can process at once. Providing structured documentation upfront helps models give precise answers without hallucinating."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Push Chain offers two context files:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best for"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///llms.txt",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/llms.txt"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact summary with links to every resource. Works with most models (100K+ token context)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///llms-full.txt",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "/llms-full.txt"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full documentation corpus inline. Use when your model has a large context window or you want deep reference without following links."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "add-to-your-ai-code-editor",
      children: "Add to Your AI Code Editor"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cursor",
      children: "Cursor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Open ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor Settings → Features → Docs"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Add new doc"
        }), " and paste one of the following:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://push.org/llms.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://push.org/llms-full.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Docs → Push Chain"
        }), " in the chat to reference Push Chain documentation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "windsurf",
      children: "Windsurf"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add to the Cascade window (", (0,jsx_runtime.jsx)(_components.code, {
        children: "CMD+L"
      }), ") at the start of your conversation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@docs:https://push.org/llms.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@docs:https://push.org/llms-full.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "claude-code",
      children: "Claude Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reference directly in your prompt or CLAUDE.md system context:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://push.org/llms.txt\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For richer integration, use the structured ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/agents/"
      }), " layer below — it provides typed capabilities, execution workflows, and decision trees that go beyond static documentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zed--other-editors",
      children: "Zed / Other Editors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Paste the URL into your AI assistant's context or system prompt. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/llms.txt"
      }), " format is understood by any LLM."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "agent-layer-agents",
      children: ["Agent Layer (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/agents/"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push Chain goes beyond static documentation with a full machine-readable execution layer at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/agents/"
      }), ". This is organized as a layered stack: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "discovery → capabilities → execution → validation"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it contains"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/index.json",
              children: "/agents/index.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discovery map — every file, its purpose, and the recommended traversal order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/capabilities.json",
              children: "/agents/capabilities.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every SDK capability with inputs, outputs, and method signatures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/sdk-capabilities.json",
              children: "/agents/sdk-capabilities.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full SDK namespace map including all methods and advanced arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/supported-chains.json",
              children: "/agents/supported-chains.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verified chain list with CAIP-2 IDs, RPC URLs, explorers, and contract addresses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/contract-addresses.json",
              children: "/agents/contract-addresses.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verified smart contract addresses for Push Chain core contracts, PRC-20 tokens, AMM pools, and all external chain gateways"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/index.json",
              children: "/agents/workflows/index.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Step-by-step execution guides for all common tasks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/schemas/index.json",
              children: "/agents/schemas/index.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JSON schemas for all SDK request/response types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/decision-tree.json",
              children: "/agents/decision-tree.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branching logic to select the right capability from user intent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/task-router.md",
              children: "/agents/task-router.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plain-language routing guide mapping goals to capabilities"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/errors.json",
              children: "/agents/errors.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error catalog with recovery actions for every known failure mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/retrieval-map.json",
              children: "/agents/retrieval-map.json"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maps every capability to its authoritative documentation source (for RAG)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "canonical-workflows",
      children: "Canonical Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ready-to-execute step-by-step guides for the most common Push Chain tasks:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Workflow"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What it does"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/initialize-client.md",
              children: "/agents/workflows/initialize-client.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChainClient"
            }), " from any signer"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/create-universal-signer.md",
              children: "/agents/workflows/create-universal-signer.md"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wrap an EVM or Solana signer into a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UniversalSigner"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/send-universal-transaction.md",
              children: "/agents/workflows/send-universal-transaction.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute a transaction on Push Chain from any origin chain"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/send-multichain-transaction.md",
              children: "/agents/workflows/send-multichain-transaction.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send to an external chain via CEA or cascade pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/track-transaction.md",
              children: "/agents/workflows/track-transaction.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor universal transaction lifecycle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/sign-universal-message.md",
              children: "/agents/workflows/sign-universal-message.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign a message for off-chain verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/read-blockchain-state.md",
              children: "/agents/workflows/read-blockchain-state.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query on-chain state via EVM clients"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/use-contract-helpers.md",
              children: "/agents/workflows/use-contract-helpers.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interact with UEA Factory and other native contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/constants-reference.md",
              children: "/agents/workflows/constants-reference.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All chain IDs, token constants, and SDK enums"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "pathname:///agents/workflows/configure-dev-environment.md",
              children: "/agents/workflows/configure-dev-environment.md"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Install SDK and configure Hardhat / Foundry / Remix"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-paths",
      children: "Integration Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "human-developer",
      children: "Human developer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/quickstart",
          children: "Quickstart"
        }), " to run your first transaction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work through ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/",
          children: "Tutorials"
        }), " for end-to-end flows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/",
          children: "SDK"
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/integrate-push-universal-wallet/",
          children: "UI Kit"
        }), " for production integration"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ai-agent--copilot",
      children: "AI agent / copilot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fetch ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///llms.txt",
          children: "/llms.txt"
        }), " as the entry layer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Load ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/index.json",
          children: "/agents/index.json"
        }), " to discover all capabilities and workflows"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/decision-tree.json",
          children: "/agents/decision-tree.json"
        }), " to map user intent to the right capability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execute using the matching workflow from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/workflows/index.json",
          children: "/agents/workflows/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Validate with schemas from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/schemas/index.json",
          children: "/agents/schemas/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Fetch ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///llms-full.txt",
          children: "/llms-full.txt"
        }), " when full inline context is needed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rag--retrieval-pipeline",
      children: "RAG / retrieval pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Index ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///llms-full.txt",
          children: "/llms-full.txt"
        }), " as your document corpus"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/retrieval-map.json",
          children: "/agents/retrieval-map.json"
        }), " to map queries to authoritative sources"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ground responses with canonical workflows from ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/workflows/",
          children: "/agents/workflows/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Treat ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///llms.txt",
          children: "/llms.txt"
        }), " as the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "entry layer"
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/",
          children: "/agents/"
        }), " as the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "execution layer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefer ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/workflows/",
          children: "/agents/workflows/"
        }), " over raw docs for execution-oriented tasks — workflows are structured for direct SDK use"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/schemas/",
          children: "/agents/schemas/"
        }), " for precise input validation before any transaction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/supported-chains.json",
          children: "/agents/supported-chains.json"
        }), " contains verified RPC URLs, chain IDs, block explorers, and contract addresses — use it instead of guessing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/contract-addresses.json",
          children: "/agents/contract-addresses.json"
        }), " is the authoritative registry for all Push Chain contract addresses — prefer it over the human-readable ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/smart-contract-address-book",
          children: "Smart Contract Address Book"
        }), " for programmatic use"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["All code examples in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "pathname:///agents/examples/",
          children: "/agents/examples/"
        }), " are minimal, self-contained, and ready to execute"]
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



/***/ }

}]);