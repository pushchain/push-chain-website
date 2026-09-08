"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[23568],{

/***/ 506487
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_09_07_erc_8196_giving_ai_agents_permission_without_giving_away_control_index_md_6a1_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_blog_site_blog_2026_09_07_erc_8196_giving_ai_agents_permission_without_giving_away_control_index_md_6a1_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599551);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(281981);


const frontMatter = {
	slug: 'erc-8196-giving-ai-agents-permission-without-giving-away-control',
	title: 'ERC-8196: Giving AI Agents Permission Without Giving Away Control',
	authors: [
		'push'
	],
	image: './cover-image.webp',
	description: 'Learn what ERC-8196 onchain AI agent standard is and how it enforces AI agents to act securely within boundaries defined by its users',
	text: 'Learn what ERC-8196 onchain AI agent standard is and how it enforces AI agents to act securely within boundaries defined by its users',
	tags: [
		'Maker Monday',
		'Key Features'
	],
	twitterId: '2096979711532613872'
};
const contentTitle = undefined;

const assets = {
"image": (__webpack_require__(522705)/* ["default"] */ .A),
"authorsImageUrls": [undefined],
};




const toc = [{
  "value": "What is ERC-8196?",
  "id": "what-is-erc-8196",
  "level": 2
}, {
  "value": "Why does ERC-8196 exist?",
  "id": "why-does-erc-8196-exist",
  "level": 2
}, {
  "value": "<strong>Option 1 - Give agent the private key</strong>",
  "id": "option-1---give-agent-the-private-key",
  "level": 3
}, {
  "value": "<strong>Option 2: Ask the user to approve every action</strong>",
  "id": "option-2-ask-the-user-to-approve-every-action",
  "level": 3
}, {
  "value": "<strong>Option 3: The middle path</strong>",
  "id": "option-3-the-middle-path",
  "level": 3
}, {
  "value": "What does a policy contain?",
  "id": "what-does-a-policy-contain",
  "level": 2
}, {
  "value": "<strong>HOW does ERC-8196 work?</strong>",
  "id": "how-does-erc-8196-work",
  "level": 2
}, {
  "value": "<strong>Step 1: The owner registers a policy</strong>",
  "id": "step-1-the-owner-registers-a-policy",
  "level": 3
}, {
  "value": "<strong>Step 2: The agent requests an action</strong>",
  "id": "step-2-the-agent-requests-an-action",
  "level": 3
}, {
  "value": "<strong>Step 3: Check ERC-8126</strong>",
  "id": "step-3-check-erc-8126",
  "level": 3
}, {
  "value": "<strong>Step 4: Verify actions</strong>",
  "id": "step-4-verify-actions",
  "level": 3
}, {
  "value": "<strong>Step 5: Track the audit trail</strong>",
  "id": "step-5-track-the-audit-trail",
  "level": 3
}, {
  "value": "<strong>Step 6: Entropy commitment</strong>",
  "id": "step-6-entropy-commitment",
  "level": 3
}, {
  "value": "<strong>When should ERC-8196 be used?</strong>",
  "id": "when-should-erc-8196-be-used",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Cover Image of ERC-8196: Giving AI Agents Permission Without Giving Away Control",
        src: (__webpack_require__(569048)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Humanoids and robots are a hot trend these days. Imagine you're the proud owner of one of the finest bots, and one fine day you ask it to mow your lawn while you're out for some weekly grocery refill."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Alas! You come back to find out the robot not only trimmed the lawn but also axed your garden, bonsai plants and even your fence!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Comic strip of a robot asked to mow the lawn that destroys the garden and fence instead",
        src: (__webpack_require__(421352)/* ["default"] */ .A) + "",
        width: "1122",
        height: "1402"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Maybe the agent made a bad decision."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Maybe its host changed its instructions."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Maybe an attacker compromised it."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Maybe it hallucinated."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "But the root cause was the same:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The agent had more authority than it needed."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In the onchain world, ERC-8196 tries to solve this problem."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It lets a user give an AI agent limited and verifiable permission to use a wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "But it must act inside rules that the owner defines first."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Just for context:"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "We're at a conjecture where there's a parabolic spike in usage and demand for crypto ai agents."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      id: "2089742044306837786"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_site_src_components_BlogTweet__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      id: "2094802961977553117"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-is-erc-8196",
      children: "What is ERC-8196?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-8196",
        children: "ERC-8196"
      }), " defines a standard interface for an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "AI Agent Authenticated Wallet"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The wallet does not give the agent unrestricted control."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Instead, the asset owner creates a policy."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The policy defines:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "What the agent can do."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Which contracts it can use."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "How much value it can move."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "When its permission starts."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "When its permission ends."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "What ERC-8126 risk level is acceptable."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The wallet checks this policy before it executes an agent action."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "ERC-8196 therefore answers:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "\"Is this agent allowed to perform this action right now?\""
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is different from agent identity, and it is also different from agent reputation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "ERC-8196 focuses on execution authority."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.strong, {
          children: ["Co-authored by Leigh Cronian from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://x.com/cybercentry",
            children: "@cybercentry"
          }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://x.com/DonJohnsonSays",
            children: "Don Johnson"
          }), " from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://x.com/virtuals_io",
            children: "@virtuals_io"
          })]
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "why-does-erc-8196-exist",
      children: "Why does ERC-8196 exist?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Before we understand the working of this ERC, let's reason why it even exists in the first place."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Most wallets were designed for people."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A person owns a private key, manually signs transactions for the blockchain to execute and settle."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Agents are probabilistic"
      }), " in nature and can make hundreds of decisions without a person approving each one. This creates a delegation problem where you're left with a few options."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "option-1---give-agent-the-private-key",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Option 1 - Give agent the private key"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "EXTREMELY DANGEROUS!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If the agent host is compromised, the attacker can get full control of the wallet."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ERC calls this the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "hosting trust trap"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "option-2-ask-the-user-to-approve-every-action",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Option 2: Ask the user to approve every action"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This is relatively safer. But a total UX nightmare. Plus, the agent is no longer autonomous."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "You (the operator) will always have to be around and in the loop to approve the agent's txn requests."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "option-3-the-middle-path",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Option 3: The middle path"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Give the agent policy-bound access privileges defined by the owner/operator beforehand."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "what-does-a-policy-contain",
      children: "What does a policy contain?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "A policy in ERC-8196 defines the agent's operating boundary."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The specification includes fields such as:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Agent:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Owner:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Allowed Actions:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Allowed Contracts:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Blocked Contracts:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Max value/ transaction:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Max value/day:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Valid from:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Valid until:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "Risk limit:"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The policy therefore converts a vague instruction such as: \"Manage some of my funds\" into machine readable deterministic rules."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-does-erc-8196-work",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "HOW does ERC-8196 work?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Diagram of the ERC-8196 policy-based agent wallet flow, from owner sets policy through to audit log",
        src: (__webpack_require__(13781)/* ["default"] */ .A) + "",
        width: "1600",
        height: "900"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-1-the-owner-registers-a-policy",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Step 1: The owner registers a policy"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The owner calls the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "registerPolicy()"
      }), " function."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The policy connects: Owner + Agent + Rules"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The wallet creates a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "policyHash"
      }), ". This hash gives the policy a fixed cryptographic reference so that the agent cannot silently replace the policy with different rules."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-2-the-agent-requests-an-action",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Step 2: The agent requests an action"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Suppose the agent wants to make a swap. The request contains information such as:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Agent"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Action"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Target contract"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Value"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Transaction data"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Nonce"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Expiry"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: "Policy hash"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The agent signs the action."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["ERC-8196 uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-712",
        children: "EIP-712 typed signatures"
      }), " for this structure. The signature ties the action to a specific policy."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "This is important:"
      }), " The agent cannot take a signature created for Policy A and freely use it under Policy B."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-3-check-erc-8126",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Step 3: Check ERC-8126"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Before the action executes, the wallet must check the agent through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/what-is-erc-8126/",
        children: "ERC-8126"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "ERC-8126 produces a risk score between 0-100."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Lower is better. The ERC-8196 policy defines an acceptable limit. The specification requires the wallet to reject the action when the current ERC-8126 score is above the policy threshold."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Standard"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "Question it answers"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
              children: "ERC-8126"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "\"Should this agent be trusted?\""
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
              children: "ERC-8196"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "\"Can this agent do THIS action?\""
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-4-verify-actions",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Step 4: Verify actions"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "After verification, ERC-8196 checks the action against the set policy. A failure at any important check stops the transaction."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-5-track-the-audit-trail",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Step 5: Track the audit trail"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Autonomous agents can perform many actions. While users need to know what happened."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["ERC-8196 therefore defines a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "hash-chained audit trail"
      }), ". Each audit record links to the previous record."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-text",
        children: "ACTION 1\n│\n▼\nHASH A\n│\n▼\nACTION 2\n│\n▼\nHASH B\n│\n▼\nACTION 3\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If someone changes an old record, the hash chain breaks making the tampering detectable."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "step-6-entropy-commitment",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "Step 6: Entropy commitment"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "AI agents are not always deterministic. The same prompt can sometimes produce different results."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A malicious host could exploit this. For example, the host can run the agent many times:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-text",
        children: "Run 1 → Don't trade\nRun 2 → Don't trade\nRun 3 → Trade\nRun 4 → Don't trade\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The host can then select only the output that benefits it."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["ERC-8196 includes an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "entropy commitment"
      }), " in agent actions to help reduce this type of manipulation. The standard describes a commit-reveal approach for probabilistic agent behaviour."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "when-should-erc-8196-be-used",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "When should ERC-8196 be used?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["ERC-8196 is useful when an AI agent needs ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
        children: "real authority over assets or credentials"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Trading agents -"
        }), " An agent can swap tokens within a fixed daily limit."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Treasury agents -"
        }), " An agent can move funds only between approved contracts."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "DeFi agents -"
        }), " An agent can rebalance positions but cannot transfer funds to arbitrary wallets."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Payment agents -"
        }), " An agent can pay approved services below a transaction limit."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Read the official ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://eips.ethereum.org/EIPS/eip-8196",
        children: "ERC-8196 documentation here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If you want to dig deeper into the AI x crypto rabbit hole, get latest information about the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/understanding-the-crypto-ai-agent-stack/",
        children: "AI agent stack"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/how-do-ai-agents-transact-onchain/",
        children: "how agents transact onchain"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://push.org/blog/complete-guide-to-erc-8183/",
        children: "ERC-8183"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Happy lawn moving!"
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

/***/ 281981
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(395293);
/* harmony import */ var react_tweet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(274609);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(309751);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61530);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(474848);
const BlogTweet=_ref=>{let id=_ref.id;const _useColorMode=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_1__/* .useColorMode */ .G)(),colorMode=_useColorMode.colorMode;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TweetWrapper,{isDark:colorMode==='dark',children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:colorMode,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_tweet__WEBPACK_IMPORTED_MODULE_2__/* .Tweet */ .Y,{id:id})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogTweet);const TweetWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({displayName:"BlogTweet__TweetWrapper",componentId:"sc-19ovpm5-0"})(["border:1px solid var(--ifm-color-tweet-border);border-radius:12px;overflow:hidden;position:relative;min-height:200px;max-width:550px;margin:1.5rem 0;transition:all 0.3s ease;svg{display:inline-block;fill:currentColor;width:1.25em;height:1.25em;vertical-align:text-bottom;}.verified_node_modules-react-tweet-dist-twitter-theme-icons-icons-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.twitterIcon_node_modules-react-tweet-dist-twitter-theme-tweet-header-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.likeIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{fill:var(--ifm-color-tweet-like);width:20px;height:20px;}.replyIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module,.copyIcon_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{fill:var(--ifm-color-tweet-icon);width:20px;height:20px;}.infoIcon_node_modules-react-tweet-dist-twitter-theme-tweet-info-module{fill:var(--ifm-color-tweet-icon);width:16px;height:16px;}.reply_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{display:none;}.info_node_modules-react-tweet-dist-twitter-theme-tweet-info-module{font-size:0.75em;}.actions_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{margin-top:10px;border-top:1px solid #ffffff33;justify-content:end;}.copy_node_modules-react-tweet-dist-twitter-theme-tweet-actions-module{margin-right:0px;}.link_node_modules-react-tweet-dist-twitter-theme-tweet-replies-module{border:1px solid #ffffff33;&:hover{border-color:var(--ifm-link-color);}}&:hover{border-color:var(--ifm-link-color);transform:translateY(-2px);box-shadow:0 8px 25px rgba(170,57,188,0.15);}@media ","{max-width:100%;}"],_site_src_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .device */ .jO.mobileL);

/***/ },

/***/ 522705
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-782f5b7f3ff8d6b925a4b4472f1ee513.webp");

/***/ },

/***/ 569048
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/cover-image-782f5b7f3ff8d6b925a4b4472f1ee513.webp");

/***/ },

/***/ 421352
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-1-1be29196c575b3174788b7878560970c.webp");

/***/ },

/***/ 13781
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/image-2-742f079b57cad812adae224f2e357def.webp");

/***/ },

/***/ 599551
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/push-chain-website/pr-preview/pr-1234/blog/erc-8196-giving-ai-agents-permission-without-giving-away-control","source":"@site/blog/2026-09-07-erc-8196-giving-ai-agents-permission-without-giving-away-control/index.md","title":"ERC-8196: Giving AI Agents Permission Without Giving Away Control","description":"Learn what ERC-8196 onchain AI agent standard is and how it enforces AI agents to act securely within boundaries defined by its users","date":"2026-09-07T00:00:00.000Z","tags":[{"inline":true,"label":"Maker Monday","permalink":"/push-chain-website/pr-preview/pr-1234/blog/tags/maker-monday"},{"inline":true,"label":"Key Features","permalink":"/push-chain-website/pr-preview/pr-1234/blog/tags/key-features"}],"readingTime":3.73,"hasTruncateMarker":true,"authors":[{"name":"Push Chain","url":"https://x.com/PushChain","page":{"permalink":"/push-chain-website/pr-preview/pr-1234/blog/authors/push"},"imageURL":"/push-chain-website/pr-preview/pr-1234/assets/blog/authors/authorpush.png","key":"push"}],"frontMatter":{"slug":"erc-8196-giving-ai-agents-permission-without-giving-away-control","title":"ERC-8196: Giving AI Agents Permission Without Giving Away Control","authors":["push"],"image":"./cover-image.webp","description":"Learn what ERC-8196 onchain AI agent standard is and how it enforces AI agents to act securely within boundaries defined by its users","text":"Learn what ERC-8196 onchain AI agent standard is and how it enforces AI agents to act securely within boundaries defined by its users","tags":["Maker Monday","Key Features"],"twitterId":"2096979711532613872"},"unlisted":false,"nextItem":{"title":"The Complete Guide to ERC-8183","permalink":"/push-chain-website/pr-preview/pr-1234/blog/complete-guide-to-erc-8183"}}');

/***/ }

}]);