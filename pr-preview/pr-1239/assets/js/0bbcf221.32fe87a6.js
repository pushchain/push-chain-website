"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[8963],{

/***/ 354428
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_07_27_understanding_the_crypto_ai_agent_stack_index_md_0bb_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_07_27_understanding_the_crypto_ai_agent_stack_index_md_0bb_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168926);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'understanding-the-crypto-ai-agent-stack',
	title: 'Understanding the Crypto AI Agent Stack (Layer by Layer)',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.',
	text: 'Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.',
	tags: [
		'Key Features',
		'Deep Dives'
	],
	twitterId: '2081756011715875292'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(706398)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What makes this article different?",
  "id": "what-makes-this-article-different",
  "level": 2
}, {
  "value": "Crypto AI Agent Stack Explained Layer-wise",
  "id": "crypto-ai-agent-stack-explained-layer-wise",
  "level": 2
}, {
  "value": "Layer 1: User and application",
  "id": "layer-1-user-and-application",
  "level": 3
}, {
  "value": "Layer 2: Agent runtime",
  "id": "layer-2-agent-runtime",
  "level": 3
}, {
  "value": "Layer 3: AI model and planner",
  "id": "layer-3-ai-model-and-planner",
  "level": 3
}, {
  "value": "Layer 4: Memory and knowledge",
  "id": "layer-4-memory-and-knowledge",
  "level": 3
}, {
  "value": "Layer 5: Data and perception",
  "id": "layer-5-data-and-perception",
  "level": 3
}, {
  "value": "Layer 6: Tools and action adapters",
  "id": "layer-6-tools-and-action-adapters",
  "level": 3
}, {
  "value": "Layer 7: Wallet, identity and policy engine",
  "id": "layer-7-wallet-identity-and-policy-engine",
  "level": 3
}, {
  "value": "Layer 8: Blockchain and smart-contract execution",
  "id": "layer-8-blockchain-and-smart-contract-execution",
  "level": 3
}, {
  "value": "Layer 9 - Agent Economies",
  "id": "layer-9---agent-economies",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of Understanding the crypto ai agent stack",
        src: (__webpack_require__(191341)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["There are more than ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "600,000 active agents"
        }), " currently operating on-chain across various ecosystems"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["In april x402 ecosystem alone recorded: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "480,000+ transacting agents"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "That executed over 165 million+ transactions with over $50 million in payment volume"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We are entering a period of massive opportunity for both developers and users. By building and using onchain AI systems, we can automate complex workflows, improve operational efficiency, and unlock entirely new revenue models."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "To participate in this shift, however, you need at least a high-level understanding of how onchain AI agents work."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "P.S. They are very different from the everyday AI tools and chatbots most of us currently use."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-makes-this-article-different",
      children: "What makes this article different?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A purely educational piece. No project or tool shilling. Strictly NFA"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "A complete overview of the crypto AI agent stack in under 500 words."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Written for both users and builders, regardless of technical background."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "crypto-ai-agent-stack-explained-layer-wise",
      children: "Crypto AI Agent Stack Explained Layer-wise"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Crypto AI Agent Stack Layer-wise Diagram",
        src: (__webpack_require__(30617)/* ["default"] */ .A) + "",
        width: "3778",
        height: "3453"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-1-user-and-application",
      children: "Layer 1: User and application"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is where a human or another application gives the agent a goal.\nEg: “Always balance  my portfolio 60% ETH and 40% USDC.”\n“Pay for a market-data API and prepare a report.”\n“Find the best USDC lending yield on Solana and bridge and deposit the 100 USDC from my Base Metamask Wallet”"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "User specifies intent through an interface like an app frontend or a messaging app, rather than manually executing every step on the blockchain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-2-agent-runtime",
      children: "Layer 2: Agent runtime"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Think of the runtime as the operating system of the AI agent. It orchestrates the entire execution loop:\nReceive goal → Collect context → Ask the model to decide → Select a tool → Execute the tool → Observe the result → Stop or continue"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Frameworks such as elizaOS organize agents around runtimes, plugins, providers, actions and services. Providers give the agent information, while actions let it do something."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Coinbase AgentKit focuses heavily on adding wallets and onchain actions to different agent frameworks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-3-ai-model-and-planner",
      children: "Layer 3: AI model and planner"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is the agent's reasoning engine.\nIt interprets natural language, breaks complex objectives into executable steps, decides which tools to call, and generates a plan.\nModels could include GPT-5, Claude, Gemini, DeepSeek or specialized home trained models.\nEg:  Current ETH allocation: 70% Target ETH allocation: 60% Action required: Sell some ETH for USDC"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "model doesn't execute transactions itself. It simply decides what should happen next. The runtime and tool layer translate those decisions into deterministic blockchain actions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-4-memory-and-knowledge",
      children: "Layer 4: Memory and knowledge"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Memory allows the agent to remain stateful instead of treating every request as a brand-new conversation.\nMost agents maintain three kinds of memory:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Working Memory"
        }), ": temporary context for the current task."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Long-term Memory"
        }), ":  persistent user preferences, transaction history, and learned behaviours."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Knowledge Base"
        }), ": could include external references such as protocol documentation, governance rules, whitepapers, APIs or trading strategies."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Agent frameworks commonly provide persistent conversation, knowledge and state storage so agents can retrieve past context before choosing an action."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-5-data-and-perception",
      children: "Layer 5: Data and perception"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is how the agent observes the world.\nReading raw blockchain history directly is difficult. Indexers organize events into queryable datasets.\nDepending on the task, it continuously consumes both onchain and offchain data:\nlike balances, liquidity, market prices, active positions and news/social sentiments.\nThis is where indexers and oracles come into play.\nThis layer is typically powered by RPCs, indexers like The Graph, oracle price feeds like Chainlink, , external APIs and universal execution layers like Push Chain."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-6-tools-and-action-adapters",
      children: "Layer 6: Tools and action adapters"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If the model is the brain, tools are its hands.\nThe AI never directly interacts with a blockchain. Instead, it invokes predefined tools that safely translate its decisions into deterministic operations.\nAn abstract decision could look like: “Reduce ETH exposure.”\nTool call: swap( token_in = ETH, token_out = USDC, amount = 0.4 ETH, max_slippage = 0.5% )"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Typical crypto tools include: Register an agent, Transfer tokens, Mint an NFT, Bridge assets, Create a limit order\nPush Chain’s TAP, Coinbase AgentKit, for example, exposes wallet operations and onchain actions through action providers and integrates with several agent frameworks"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-7-wallet-identity-and-policy-engine",
      children: "Layer 7: Wallet, identity and policy engine"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A wallet gives an agent the power to"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Hold assets"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Maintain an identity"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Sign Transactions"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Receive payments"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The policy engine sits between the AI and the wallet, enforcing deterministic guardrails such as:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Maximum per transaction: $100\nMaximum per day: $500\nAllowed tokens: ETH, USDC\nAllowed protocols: Uniswap, Aave\nMaximum slippage: 0.5%"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "There are more than 250,000 ai agent agents in crypto, but today NONE OF THEM can easily operate cross-chain because there isn't any way to:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "preserve an agents identity across chains"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "have an aggregated reputation score"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/zaryab2000/create-8004-TAP-agent",
        children: "Trustless Agent Plus (TAP)"
      }), " framework on Push Chain fixes this"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-8-blockchain-and-smart-contract-execution",
      children: "Layer 8: Blockchain and smart-contract execution"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This is the execution and settlement layer.\nThe AI usually thinks ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "offchain"
      }), ", while the blockchain handles:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Asset ownership"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Balances"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Transaction ordering"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Contract execution"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Settlement"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Receipts"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It is very crucial for the agent as well as the projects building such agents to measure their performance to ensure transparency."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Moving forward, as crypto becomes an ai dominated industry, performance benchmarking will be an integral part of the industry. Assisting everyone, from retail to B2B as well as institutions."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "layer-9---agent-economies",
      children: "Layer 9 - Agent Economies"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This layer allows agents to participate in more complex economic activities beyond executing one-off transactions for a single user.\nOnce an agent has a wallet, identity and access to tools, it can:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Pay for APIs, data or compute."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Receive payment for completing tasks."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Hire another specialized agent."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Participate in marketplaces or service networks."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the coming weeks we'll dive deeper into crypto ai agents and understand how they work behind the scenes, what are the untapped building opportunities in this space and how can you make the most of it, both as a dev and a user!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Watch this space."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 706398
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cc41a80bdefc97e7c2686fea58f4d567.webp");

/***/ },

/***/ 191341
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-cc41a80bdefc97e7c2686fea58f4d567.webp");

/***/ },

/***/ 30617
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-771466b7366b0f9218c94053fdbe5bd8.webp");

/***/ },

/***/ 168926
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1239/blog/understanding-the-crypto-ai-agent-stack","source":"@site/blog/2026-07-27-understanding-the-crypto-ai-agent-stack/index.md","title":"Understanding the Crypto AI Agent Stack (Layer by Layer)","description":"Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.","date":"2026-07-27T00:00:00.000Z","tags":[{"inline":true,"label":"Key Features","permalink":"/push-chain-website/pr-preview/pr-1239/blog/tags/key-features"},{"inline":true,"label":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1239/blog/tags/deep-dives"}],"readingTime":3.3,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1239/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1239/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"understanding-the-crypto-ai-agent-stack","title":"Understanding the Crypto AI Agent Stack (Layer by Layer)","authors":["push"],"image":"./cover-image.webp","description":"Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.","text":"Understand what crypto AI agents are composed of and how they work behind the scenes in the simplest way possible.","tags":["Key Features","Deep Dives"],"twitterId":"2081756011715875292"},"unlisted":false,"prevItem":{"title":"How Do AI Agents Transact Onchain?","permalink":"/push-chain-website/pr-preview/pr-1239/blog/how-do-ai-agents-transact-onchain"},"nextItem":{"title":"What Happens When RWAs Scale Across Multiple Chains?","permalink":"/push-chain-website/pr-preview/pr-1239/blog/rwa-scale-across-multiple-chains"}}');

/***/ }

}]);