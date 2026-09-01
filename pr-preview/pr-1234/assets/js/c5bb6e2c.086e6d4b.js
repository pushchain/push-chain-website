"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[4345],{

/***/ 443615
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_08_17_ai_agent_identities_in_crypto_index_md_c5b_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_08_17_ai_agent_identities_in_crypto_index_md_c5b_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92125);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);


const frontMatter = {
	slug: 'ai-agent-identities-in-crypto',
	title: 'AI Agent Identities in Crypto - Everything You Need To Know',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Learn what ERC8004 is and what makes it a revolutionary standard for defining, identifying and tracking the reputation of onchain AI agents',
	text: 'Learn what ERC8004 is and what makes it a revolutionary standard for defining, identifying and tracking the reputation of onchain AI agents',
	tags: [
		'Key Features',
		'Deep Dives'
	],
	twitterId: '2089372640834417130'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(142537)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "What is ERC-8004?",
  "id": "what-is-erc-8004",
  "level": 2
}, {
  "value": "Decoding ERC-8004 Registries",
  "id": "decoding-erc-8004-registries",
  "level": 2
}, {
  "value": "Identity Registry",
  "id": "identity-registry",
  "level": 3
}, {
  "value": "Reputation Registry",
  "id": "reputation-registry",
  "level": 3
}, {
  "value": "Validation Registry",
  "id": "validation-registry",
  "level": 3
}, {
  "value": "How does ERC-8004 work?",
  "id": "how-does-erc-8004-work",
  "level": 2
}, {
  "value": "Step 1: Register the agent",
  "id": "step-1-register-the-agent",
  "level": 3
}, {
  "value": "Step 2: Use the agent",
  "id": "step-2-use-the-agent",
  "level": 3
}, {
  "value": "Step 3: Add reputation",
  "id": "step-3-add-reputation",
  "level": 3
}, {
  "value": "Step 4: Validate important work",
  "id": "step-4-validate-important-work",
  "level": 3
}, {
  "value": "What ERC-8004 does not do",
  "id": "what-erc-8004-does-not-do",
  "level": 2
}, {
  "value": "Why does it matter?",
  "id": "why-does-it-matter",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of AI Agent Identities in Crypto",
        src: (__webpack_require__(670898)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Consider an open marketplace of thousands of AI agents. Where one agent can employ other agents to coordinate given tasks."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Let's say agent A is looking for an agent that provides smart contract auditing services."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Another agent, say agent B, says ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "\"I can analyze this smart contract for $5.\""
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Now on what basis would Agent 'A' decide whether Agent 'B' is the best choice for the job?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Can't just assume word for word, right !?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Agent 'A' still needs answers to questions like:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Is this the correct agent?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Has anyone used it before?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Did previous tasks succeed?"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Can another system verify its work?"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["It all boils down to one empirical question: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "How should we (humans) and agents find and trust other agents?"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is exactly what ERC-8004 solves."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-is-erc-8004",
      children: "What is ERC-8004?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-8004",
        children: "ERC-8004"
      }), " is an Ethereum standard for discovering agents and creating trust signals about them."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It gives AI agents a common on-chain system for identity, reputation, and validation. Its goal is to let agents work across different organizations without pre-existing trust."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "ERC-8004 consists of three main components (or registries):"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Identity Registry"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Reputation Registry"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Validation Registry"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Caveat:"
      }), " ERC-8004 does not put a complete AI agent onchain. The agent can still run on a server, in a Trusted Execution Environment, or in another computing system."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The blockchain stores the parts that need a common and public source of truth."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "decoding-erc-8004-registries",
      children: "Decoding ERC-8004 Registries"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "identity-registry",
      children: "Identity Registry"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The Identity Registry gives each agent a unique on-chain identity. This identity is minted as an ERC-721 NFT."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Each registered agent gets an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "agentId"
      }), ". The NFT owner controls the agent identity. The owner can also transfer the identity to another owner."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This NFT points to a JSON file, also commonly known as an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Agent Card"
      }), ", which includes all the metadata about the agent, including its name, service endpoints (A2A, MCP), payable address, functionalities and more."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "reputation-registry",
      children: "Reputation Registry"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The Reputation Registry stores feedback about an agent's past performance."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Any client can submit feedback for a registered agentId. The agent owner and approved operators cannot review their own agent."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Feedback can be provided in two ways: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Numerical"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Categorical (tags)"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For numerical, example:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Quality       = 87 / 100\nUptime        = 99.77%\nSuccess Rate  = 89%\nResponse Time = 560 ms\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["And categorical tags could be: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "\"uptime\""
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "\"month\""
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Caveat:"
      }), " ERC-8004 does not define one universal reputation score."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It stores standardized feedback signals. Applications can decide how to filter, weight, and combine them."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "validation-registry",
      children: "Validation Registry"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Provides a standardised mechanism for evaluating and recording the agent's work as an onchain verifiable evidence."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The registry stores independent checks of an agent's work."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The registry does not check the work itself. A separate validator does the check. The registry records: What was checked, who checked it and what the result was."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-does-erc-8004-work",
      children: "How does ERC-8004 work?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Diagram of the ERC-8004 agent trust layer",
        src: (__webpack_require__(347970)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A typical ERC-8004 flow has four stages:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-1-register-the-agent",
      children: "Step 1: Register the agent"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The agent owner registers an agent in the Identity Registry, which then creates an ERC-721 token and assigns an agentId. The owner also provides an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "agentURI"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["You can track and discover ERC-8004 registered agents at: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://8004scan.io",
        children: "8004scan.io"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-2-use-the-agent",
      children: "Step 2: Use the agent"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A client discovers the agent."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The client can then call its MCP endpoint, send an A2A task, use its web service, or interact through another supported method."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-3-add-reputation",
      children: "Step 3: Add reputation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "After the interaction, the client can submit feedback to the Reputation Registry."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As discussed in the article above, the Reputation Registry can accept feedback in both numerical and categorical forms."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-4-validate-important-work",
      children: "Step 4: Validate important work"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Here the agent can ask a validator of its choice to vet its work. Validators can use different verification methods."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For example:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Re-run the computation."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Use stake-secured verification."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Check a zkML proof."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Check a TEE attestation."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The validator returns a value from 0 to 100."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A validator can use 0 for failure and 100 for success. It can also use values between them when the result is not binary."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-erc-8004-does-not-do",
      children: "What ERC-8004 does not do"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "ERC-8004 does not define payments."
        }), " Payment systems such as x402 can work with ERC-8004, but payments remain outside the standard."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "ERC-8004 does not replace MCP or A2A."
        }), " MCP provides access to tools and resources, whereas A2A supports communication and task coordination between agents. ERC-8004 adds discovery and trust around these systems."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "It does not guarantee an agent's safety."
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Fake accounts can also try to create a false reputation."
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-does-it-matter",
      children: "Why does it matter?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The internet has many ways to identify people, websites, and companies."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["AI agents need a similar system. But agents also need something more. They need ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "machine-readable trust"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "An agent cannot read hundreds of human reviews before every transaction. It needs structured data that software can inspect. ERC-8004 provides the foundation for this model."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If you want to dig deeper into the AI x crypto rabbit hole, read about the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/understanding-the-crypto-ai-agent-stack/",
        children: "AI agent stack"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/how-do-ai-agents-transact-onchain/",
        children: "how agents transact onchain"
      }), "."]
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

/***/ 142537
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4929386a6e358f532e23bef72b859d5f.webp");

/***/ },

/***/ 670898
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-4929386a6e358f532e23bef72b859d5f.webp");

/***/ },

/***/ 347970
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-0a19f84b97c63d5ce31d697a6695ad17.webp");

/***/ },

/***/ 92125
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1234/blog/ai-agent-identities-in-crypto","source":"@site/blog/2026-08-17-ai-agent-identities-in-crypto/index.md","title":"AI Agent Identities in Crypto - Everything You Need To Know","description":"Learn what ERC8004 is and what makes it a revolutionary standard for defining, identifying and tracking the reputation of onchain AI agents","date":"2026-08-17T00:00:00.000Z","tags":[{"inline":true,"label":"Key Features","permalink":"/push-chain-website/pr-preview/pr-1234/blog/tags/key-features"},{"inline":true,"label":"Deep Dives","permalink":"/push-chain-website/pr-preview/pr-1234/blog/tags/deep-dives"}],"readingTime":2.9,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1234/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1234/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"ai-agent-identities-in-crypto","title":"AI Agent Identities in Crypto - Everything You Need To Know","authors":["push"],"image":"./cover-image.webp","description":"Learn what ERC8004 is and what makes it a revolutionary standard for defining, identifying and tracking the reputation of onchain AI agents","text":"Learn what ERC8004 is and what makes it a revolutionary standard for defining, identifying and tracking the reputation of onchain AI agents","tags":["Key Features","Deep Dives"],"twitterId":"2089372640834417130"},"unlisted":false,"prevItem":{"title":"What Is ERC-8126? How Does It Work?","permalink":"/push-chain-website/pr-preview/pr-1234/blog/what-is-erc-8126"},"nextItem":{"title":"Highest Revenue Generating Crypto AI Agent Protocols of 2026","permalink":"/push-chain-website/pr-preview/pr-1234/blog/highest-revenue-generating-crypto-ai-agent-protocols-of-2026"}}');

/***/ }

}]);