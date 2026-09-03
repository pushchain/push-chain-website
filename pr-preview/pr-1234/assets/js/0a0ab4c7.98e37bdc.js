"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[84743],{

/***/ 387163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_03_token_systems_01_tutorial_universal_airdrop_mdx_0a0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-03-token-systems-01-tutorial-universal-airdrop-mdx-0a0.json
const site_docs_chain_01_tutorials_03_token_systems_01_tutorial_universal_airdrop_mdx_0a0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/token-systems/docs-chain-tutorials-universal-airdrop","title":"Build a Universal Airdrop","description":"Build a Universal Airdrop | Tutorials | Push Chain Docs","source":"@site/docs/chain/01-tutorials/03-token-systems/01-Tutorial-Universal-Airdrop.mdx","sourceDirName":"chain/01-tutorials/03-token-systems","slug":"/chain/tutorials/token-systems/tutorial-universal-airdrop","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/token-systems/tutorial-universal-airdrop","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/03-token-systems/01-Tutorial-Universal-Airdrop.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-tutorials-universal-airdrop","title":"Build a Universal Airdrop","hide_title":false,"slug":"./tutorial-universal-airdrop","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_tutorials_universal_airdrop--build_a_universal_airdrop.png"},"sidebar":"pushChainSidebar","previous":{"title":"Token Systems","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/token-systems"},"next":{"title":"Payments and DeFi","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/integration-and-tooling"}}');
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
// EXTERNAL MODULE: ./src/components/IFrameModal/IFrameModal.tsx
var IFrameModal = __webpack_require__(602999);
// EXTERNAL MODULE: ./src/components/TutorialTimer/index.ts + 1 modules
var TutorialTimer = __webpack_require__(546772);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
// EXTERNAL MODULE: ./src/components/GitHubRepo/index.ts + 1 modules
var GitHubRepo = __webpack_require__(531855);
;// ./docs/chain/01-tutorials/03-token-systems/01-Tutorial-Universal-Airdrop.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-universal-airdrop',
	title: 'Build a Universal Airdrop',
	hide_title: false,
	slug: './tutorial-universal-airdrop',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_tutorials_universal_airdrop--build_a_universal_airdrop.png'
};
const contentTitle = undefined;

const assets = {

};










const toc = [{
  "value": "What Makes This Universal?",
  "id": "what-makes-this-universal",
  "level": 2
}, {
  "value": "Example Flow",
  "id": "example-flow",
  "level": 3
}, {
  "value": "Understanding the Architecture",
  "id": "understanding-the-architecture",
  "level": 2
}, {
  "value": "1. Address Conversion",
  "id": "1-address-conversion",
  "level": 3
}, {
  "value": "2. Merkle Tree Generation",
  "id": "2-merkle-tree-generation",
  "level": 3
}, {
  "value": "3. Smart Contract Deployment",
  "id": "3-smart-contract-deployment",
  "level": 3
}, {
  "value": "4. Claim Interface",
  "id": "4-claim-interface",
  "level": 3
}, {
  "value": "Write the Contracts",
  "id": "write-the-contracts",
  "level": 2
}, {
  "value": "Understanding the Contracts",
  "id": "understanding-the-contracts",
  "level": 2
}, {
  "value": "Key Concepts",
  "id": "key-concepts",
  "level": 3
}, {
  "value": "Live Playground",
  "id": "live-playground",
  "level": 2
}, {
  "value": "Understanding the Code",
  "id": "understanding-the-code",
  "level": 2
}, {
  "value": "Step 1: Address Conversion",
  "id": "step-1-address-conversion",
  "level": 3
}, {
  "value": "Step 2: Merkle Tree Generation",
  "id": "step-2-merkle-tree-generation",
  "level": 3
}, {
  "value": "Step 3: Contract Deployment",
  "id": "step-3-contract-deployment",
  "level": 3
}, {
  "value": "Step 4: Claiming Tokens",
  "id": "step-4-claiming-tokens",
  "level": 3
}, {
  "value": "Source Code",
  "id": "source-code",
  "level": 2
}, {
  "value": "What We Achieved",
  "id": "what-we-achieved",
  "level": 2
}, {
  "value": "Key Takeaways",
  "id": "key-takeaways",
  "level": 2
}, {
  "value": "What&#39;s Next?",
  "id": "whats-next",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Build a Universal Airdrop | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(TutorialTimer/* default */.A, {
      estimatedMinutes: 25
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this tutorial, you'll build a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Claimable Airdrop"
      }), " system on Push Chain. You deploy an airdrop contract ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "once"
      }), " on Push Chain, and users from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any supported chain"
      }), " can claim using their existing wallets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this tutorial you'll be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Convert addresses from any chain to deterministic Push Chain addresses (", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/",
          children: "UEAs"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Generate Merkle trees for efficient airdrop verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Deploy a universal airdrop contract with OpenZeppelin's Merkle proof system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Build a claim UI that works for users on any chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Understand how Universal Executor Accounts enable cross-chain claiming"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-makes-this-universal",
      children: "What Makes This Universal?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional airdrops often require:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploying contracts on multiple chains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Managing separate token supplies per chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forcing users to claim on a specific chain or do extra wallet ops"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Airdrops on Push Chain:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deploy once"
        }), " on Push Chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Users from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "any chain"
        }), " claim with their ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "existing wallet"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No bridging"
        }), " or chain-switching required"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One contract, one token supply, reaching every chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No per chain deployments or per chain token supplies"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-flow",
      children: "Example Flow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Alice (Ethereum wallet ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0xABC..."
        }), ") → Claims directly from Ethereum"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bob (Solana wallet ", (0,jsx_runtime.jsx)(_components.code, {
          children: "7xKX..."
        }), ") → Claims directly from Solana"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Charlie (Base wallet ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0xDEF..."
        }), ") → Claims directly from Base"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All three interact with the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "same contract"
      }), " on Push Chain through their ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/",
        children: "Universal Executor Accounts (UEAs)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "🚀 Why this matters"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "This is the future of token distribution. Deploy once, reach everyone. No multi-chain complexity, no fragmented liquidity, just pure universal access."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-the-architecture",
      children: "Understanding the Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Universal Airdrop system consists of four key components:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-address-conversion",
      children: "1. Address Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For each recipient, we convert their origin address to a deterministic ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/",
          children: "Universal Executor Account (UEA)"
        })
      }), " address on Push Chain:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\n    A[Ethereum: 0xABC...] --> D[UEA: 0x123...]\n    B[Solana: 7xKX...] --> E[UEA: 0x456...]\n    C[Base: 0xDEF...] --> F[UEA: 0x789...]\n\n    D --> G[Universal Airdrop Contract]\n    E --> G\n    F --> G\n\n    style G fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style A fill:#627eea,color:#fff\n    style B fill:#16c492,color:#fff\n    style C fill:#0052ff,color:#fff"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-merkle-tree-generation",
      children: "2. Merkle Tree Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We create a Merkle tree where each leaf contains:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UEA address (converted from origin address)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Token amount"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Note: the demo stores origin address and chain only in the UI for display. They are not part of the Merkle leaf."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-smart-contract-deployment",
      children: "3. Smart Contract Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The airdrop contract:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stores the Merkle root"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verifies proofs on-chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prevents double claiming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distributes tokens to claimants"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-claim-interface",
      children: "4. Claim Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Users connect with their origin wallet and claim tokens through their UEA."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "write-the-contracts",
      children: "Write the Contracts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We'll need two contracts for this tutorial:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ERC-20 Token Contract"
        }), " - The token being airdropped ($UNICORN) - see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/basics/tutorial-mint-erc-20-tokens/",
          children: "Mint Universal ERC-20 Tokens"
        }), " for basics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Universal Airdrop Contract"
        }), " - Handles Merkle proof verification and token distribution"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production note:"
        }), " most real airdrops distribute an existing token. This tutorial deploys a fresh $UNICORN token to keep the demo self-contained. In production, deploy the airdrop against your existing token address and fund it with the distribution supply."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      className: "liveplaytab",
      groupId: "universal-airdrop-contracts",
      children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "erc20_token",
        label: "ERC-20 Token ($UNICORN)",
        children: [(0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
          title: "Universal ERC-20 Token Contract",
          fileName: "Token.sol",
          url: "https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-claimable-airdrop/contracts/src/Token.sol",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-solidity",
              children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\n\ncontract Token is ERC20 {\n    constructor(string memory name, string memory symbol) ERC20(name, symbol) {\n        _mint(msg.sender, 1_000_000 * 10 ** decimals());\n    }\n\n    function mint(address to, uint256 amount) external {\n        _mint(to, amount);\n    }\n}\n"
            })
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Key Features:"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mints 1,000,000 tokens to the deployer"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Has an open ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mint()"
            }), " function for easy testing"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses OpenZeppelin's battle-tested ERC-20 implementation"
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          title: "Demo Only",
          type: "warning",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Token.sol is a demo contract. Do not ship an open ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mint()"
            }), " in production. Gate minting (Ownable/AccessControl) or distribute from a fixed supply."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "airdrop_factory",
        label: "Airdrop Factory",
        children: [(0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
          title: "Universal Airdrop Factory Contract",
          fileName: "UniversalAirdropFactory.sol",
          url: "https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-claimable-airdrop/contracts/src/UniversalAirdropFactory.sol",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-solidity",
              children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\nimport \"./UniversalAirdrop.sol\";\nimport \"./Token.sol\";\n\ncontract UniversalAirdropFactory {\n    event AirdropCreated(\n        address indexed airdrop,\n        address indexed owner,\n        uint256 totalAmount,\n        bytes32 merkleRoot\n    );\n\n    function createAirdrop(\n        uint256 _totalAmount,\n        bytes32 _merkleRoot\n    ) external returns (address) {\n        // Deploy new Token contract\n        Token token = new Token(\"Unicorn Token\", \"UNICORN\");\n\n        // Mint tokens to this factory\n        token.mint(address(this), _totalAmount);\n\n        // Deploy new UniversalAirdrop contract\n        UniversalAirdrop airdrop = new UniversalAirdrop(\n            address(token),\n            _merkleRoot,\n            msg.sender\n        );\n\n        // Transfer tokens to airdrop contract\n        require(\n            token.transfer(address(airdrop), _totalAmount),\n            \"Token transfer failed\"\n        );\n\n        emit AirdropCreated(\n            address(airdrop),\n            msg.sender,\n            _totalAmount,\n            _merkleRoot\n        );\n\n        return address(airdrop);\n    }\n}\n"
            })
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Key Features:"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Deploys both the token and airdrop contracts in one transaction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mints the required tokens automatically"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Transfers tokens to the airdrop contract"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Emits an event with the deployed addresses"
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
        value: "airdrop_contract",
        label: "Universal Airdrop",
        children: [(0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
          title: "Universal Airdrop Contract",
          fileName: "UniversalAirdrop.sol",
          url: "https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-claimable-airdrop/contracts/src/UniversalAirdrop.sol",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-solidity",
              children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\nimport \"@openzeppelin/contracts/token/ERC20/IERC20.sol\";\nimport \"@openzeppelin/contracts/utils/cryptography/MerkleProof.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/utils/ReentrancyGuard.sol\";\n\ncontract UniversalAirdrop is Ownable, ReentrancyGuard {\n    IERC20 public immutable token;\n    bytes32 public merkleRoot;\n\n    mapping(address => bool) public hasClaimed;\n\n    event Claimed(address indexed claimer, uint256 amount);\n    event MerkleRootUpdated(bytes32 newRoot);\n\n    constructor(\n        address _token,\n        bytes32 _merkleRoot,\n        address _owner\n    ) Ownable(_owner) {\n        token = IERC20(_token);\n        merkleRoot = _merkleRoot;\n    }\n\n    function claim(\n        uint256 amount,\n        bytes32[] calldata proof\n    ) external nonReentrant {\n        require(!hasClaimed[msg.sender], \"Already claimed\");\n\n        bytes32 leaf = keccak256(\n            bytes.concat(keccak256(abi.encode(msg.sender, amount)))\n        );\n\n        require(\n            MerkleProof.verify(proof, merkleRoot, leaf),\n            \"Invalid proof\"\n        );\n\n        hasClaimed[msg.sender] = true;\n\n        require(\n            token.transfer(msg.sender, amount),\n            \"Token transfer failed\"\n        );\n\n        emit Claimed(msg.sender, amount);\n    }\n\n    function updateMerkleRoot(bytes32 newRoot) external onlyOwner {\n        merkleRoot = newRoot;\n        emit MerkleRootUpdated(newRoot);\n    }\n\n    function withdrawTokens(address to, uint256 amount) external onlyOwner {\n        require(token.transfer(to, amount), \"Transfer failed\");\n    }\n}\n"
            })
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Key Features:"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses OpenZeppelin's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "MerkleProof.verify()"
            }), " for efficient proof verification"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tracks claims with a mapping to prevent double-claiming"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Includes reentrancy protection"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Allows owner to update Merkle root for future rounds"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides emergency withdrawal function"
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-the-contracts",
      children: "Understanding the Contracts"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Merkle Proof Verification"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The contract uses OpenZeppelin's standard Merkle proof implementation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "bytes32 leaf = keccak256(\n    bytes.concat(keccak256(abi.encode(msg.sender, amount)))\n);\n\nrequire(\n    MerkleProof.verify(proof, merkleRoot, leaf),\n    \"Invalid proof\"\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " the leaf encoding used in the frontend and the leaf hash computed in the contract must match exactly. This tutorial uses OpenZeppelin ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StandardMerkleTree"
      }), " for proofs and OpenZeppelin ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MerkleProof.verify()"
      }), " in the contract so the hashing/ordering stays consistent."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Universal Executor Accounts (UEAs)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When a user from Ethereum, Solana, or any other chain interacts with this contract:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Their wallet signs a transaction on their origin chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push Chain creates/uses their deterministic UEA address"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The UEA executes the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "claim()"
        }), " function"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), " in the contract is the UEA address"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This means the Merkle tree must contain ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "UEA addresses"
      }), ", not origin addresses."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Address Conversion Process"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Convert origin address to UEA\nconst account = PushChain.utils.account.toUniversal(originAddress, {\n  chain: originChain,\n});\n\nconst executorAddress =\n  await PushChain.utils.account.deriveExecutorAccount(account);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This deterministic conversion ensures:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same origin address always maps to same UEA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Works across all supported chains"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No registration or setup required"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live Playground"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now let's build a complete frontend that handles the entire airdrop flow. This example demonstrates all four steps: adding recipients, generating Merkle tree, deploying contracts, and claiming tokens."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The deployed contracts are available on Push Chain Testnet:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Factory Contract:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://donut.push.network/address/0xf5059a5D33d5853360D16C683c16e67980206f36?tab=contract",
          children: "0xf5059a5D33d5853360D16C683c16e67980206f36"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps to interact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Add wallet addresses from different chains to your airdrop list"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Generate Merkle tree and get the root hash"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Deploy the airdrop contract with the Merkle root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Connect with a claimer wallet and claim tokens"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        metastring: "live",
        live: true,
        children: "// customPropMinimized='true'\nimport { StandardMerkleTree } from \"@openzeppelin/merkle-tree\";\nimport {\n  PushUniversalAccountButton,\n  usePushChain,\n  usePushChainClient,\n  usePushWalletContext,\n  PushUniversalWalletProvider,\n  PushUI,\n} from \"@pushchain/ui-kit\";\nimport { ethers } from \"ethers\";\nimport { useEffect, useState } from \"react\";\n\nfunction UniversalAirdropTutorial() {\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  const UniversalAirdropABI = [\n    {\n      inputs: [\n        { internalType: \"uint256\", name: \"amount\", type: \"uint256\" },\n        { internalType: \"bytes32[]\", name: \"proof\", type: \"bytes32[]\" }\n      ],\n      name: \"claim\",\n      outputs: [],\n      stateMutability: \"nonpayable\",\n      type: \"function\"\n    },\n    {\n      inputs: [{ internalType: \"address\", name: \"\", type: \"address\" }],\n      name: \"hasClaimed\",\n      outputs: [{ internalType: \"bool\", name: \"\", type: \"bool\" }],\n      stateMutability: \"view\",\n      type: \"function\"\n    }\n  ];\n\n  const factoryEventABI = [\n    \"event AirdropCreated(address indexed airdrop, address indexed owner, uint256 totalAmount, bytes32 merkleRoot)\"\n  ];\n\n  function Component() {\n    const { PushChain } = usePushChain();\n    const { pushChainClient } = usePushChainClient();\n    const { connectionStatus } = usePushWalletContext();\n\n    const [currentStep, setCurrentStep] = useState(1);\n    const [walletList, setWalletList] = useState([]);\n    const [newWalletAddress, setNewWalletAddress] = useState(\"\");\n    const [selectedChain, setSelectedChain] = useState(PushChain.CONSTANTS.CHAIN.PUSH_TESTNET);\n    const [airdropAmount, setAirdropAmount] = useState(\"100\");\n    const [convertedAddresses, setConvertedAddresses] = useState([]);\n    const [merkleRoot, setMerkleRoot] = useState(\"\");\n    const [merkleTree, setMerkleTree] = useState(null);\n    const [deployedAirdropAddress, setDeployedAirdropAddress] = useState(\"\");\n    const [isDeploying, setIsDeploying] = useState(false);\n    const [isClaiming, setIsClaiming] = useState(false);\n    const [claimerEligibility, setClaimerEligibility] = useState(null);\n    const [error, setError] = useState(\"\");\n\n    const FACTORY_ADDRESS = \"0xf5059a5D33d5853360D16C683c16e67980206f36\";\n\n    const chains = [\n      { value: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET, label: \"Push Chain\" },\n      { value: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA, label: \"Ethereum Sepolia\" },\n      { value: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET, label: \"Solana Devnet\" },\n      { value: PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA, label: \"Base Sepolia\" },\n      { value: PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA, label: \"Arbitrum Sepolia\" },\n      { value: PushChain.CONSTANTS.CHAIN.BNB_TESTNET, label: \"BNB Testnet\" },\n    ];\n\n    const factoryInterface = new ethers.Interface(factoryEventABI);\n\n    useEffect(() => {\n      if (connectionStatus === \"connected\" && pushChainClient?.universal.account && currentStep === 1) {\n        setWalletList((prevList) => {\n          const isAlreadyAdded = prevList.some(\n            (entry) => entry.address.toLowerCase() === pushChainClient.universal.origin.address.toLowerCase()\n          );\n          if (!isAlreadyAdded) {\n            return [{\n              address: pushChainClient.universal.origin.address,\n              chain: pushChainClient.universal.origin.chain,\n              amount: airdropAmount.toString(),\n            }, ...prevList];\n          }\n          return prevList;\n        });\n      }\n    }, [connectionStatus, pushChainClient, currentStep, airdropAmount]);\n\n    const addWalletToList = () => {\n      if (!newWalletAddress.trim()) {\n        setError(\"Please enter a wallet address\");\n        return;\n      }\n      setWalletList([...walletList, {\n        address: newWalletAddress.trim(),\n        chain: selectedChain,\n        amount: airdropAmount,\n      }]);\n      setNewWalletAddress(\"\");\n      setError(\"\");\n    };\n\n    const removeWallet = (index) => {\n      setWalletList(walletList.filter((_, i) => i !== index));\n    };\n\n    const convertToPushChainAddresses = async () => {\n      if (walletList.length === 0) {\n        setError(\"Please add at least one wallet to the list\");\n        return;\n      }\n      try {\n        const addressPromises = walletList.map(async (entry) => {\n          const account = PushChain.utils.account.toUniversal(entry.address, {\n            chain: entry.chain\n          });\n          const executorAddress = await PushChain.utils.account.deriveExecutorAccount(account);\n          return [\n            executorAddress.address,\n            ethers.parseUnits(entry.amount, 18).toString(),\n            entry.address,\n            entry.chain\n          ];\n        });\n        const addresses = await Promise.all(addressPromises);\n        setConvertedAddresses(addresses);\n        setError(\"\");\n        setCurrentStep(2);\n      } catch (err) {\n        console.error(\"Error generating deterministic addresses:\", err);\n        setError(\"Failed to generate deterministic addresses on Push Chain\");\n      }\n    };\n\n    const generateMerkleTree = () => {\n      if (convertedAddresses.length === 0) {\n        setError(\"No converted addresses available\");\n        return;\n      }\n      if (!StandardMerkleTree) {\n        setError(\"Merkle tree library is still loading. Please wait a moment and try again.\");\n        return;\n      }\n      try {\n        const values = convertedAddresses.map(([address, amount]) => [address, amount]);\n        const tree = StandardMerkleTree.of(values, [\"address\", \"uint256\"]);\n        const root = tree.root;\n        setMerkleRoot(root);\n        setMerkleTree({ tree, root });\n        setError(\"\");\n        setCurrentStep(3);\n      } catch (err) {\n        console.error(\"Error generating merkle tree:\", err);\n        setError(\"Failed to generate merkle tree\");\n      }\n    };\n\n    const deployAirdrop = async () => {\n      if (!pushChainClient || !merkleRoot) {\n        setError(\"Wallet not connected or Merkle root not generated\");\n        return;\n      }\n      setIsDeploying(true);\n      setError(\"\");\n      try {\n        const totalAmount = convertedAddresses.reduce(\n          (sum, [, amount]) => sum + BigInt(amount),\n          BigInt(0)\n        );\n        const factoryABI = [{\n          inputs: [\n            { internalType: \"uint256\", name: \"_totalAmount\", type: \"uint256\" },\n            { internalType: \"bytes32\", name: \"_merkleRoot\", type: \"bytes32\" }\n          ],\n          name: \"createAirdrop\",\n          outputs: [{ internalType: \"address\", name: \"\", type: \"address\" }],\n          stateMutability: \"nonpayable\",\n          type: \"function\"\n        }];\n        const txData = PushChain.utils.helpers.encodeTxData({\n          abi: factoryABI,\n          functionName: \"createAirdrop\",\n          args: [totalAmount, merkleRoot]\n        });\n        const tx = await pushChainClient.universal.sendTransaction({\n          to: FACTORY_ADDRESS,\n          data: txData,\n          value: BigInt(0),\n        });\n        const receipt = await tx.wait();\n        if (!receipt.logs || receipt.logs.length === 0) {\n          setError(\"No logs found in transaction receipt\");\n          setIsDeploying(false);\n          return;\n        }\n\n        const factoryLog = receipt.logs.find(\n          (log) => log.address.toLowerCase() === FACTORY_ADDRESS.toLowerCase()\n        );\n\n        if (!factoryLog) {\n          setError(\"Airdrop creation event not found\");\n          setIsDeploying(false);\n          return;\n        }\n\n        let parsed;\n        try {\n          parsed = factoryInterface.parseLog(factoryLog);\n        } catch (e) {\n          setError(\"Failed to decode AirdropCreated event\");\n          setIsDeploying(false);\n          return;\n        }\n\n        const airdropAddress = parsed.args.airdrop;\n        setDeployedAirdropAddress(airdropAddress);\n        setCurrentStep(4);\n        setIsDeploying(false);\n      } catch (err) {\n        console.error(\"Error deploying airdrop:\", err);\n        setError(\"Failed to deploy airdrop contract\");\n        setIsDeploying(false);\n      }\n    };\n\n    useEffect(() => {\n      const checkClaimerEligibility = async () => {\n        if (connectionStatus === \"connected\" && pushChainClient?.universal.account && deployedAirdropAddress) {\n          const claimerAddress = pushChainClient.universal.account;\n          const entry = convertedAddresses.find(\n            ([addr]) => addr.toLowerCase() === claimerAddress.toLowerCase()\n          );\n          if (entry) {\n            const [executorAddr, amount] = entry;\n            let hasClaimed = false;\n            try {\n              const provider = new ethers.JsonRpcProvider(\"https://evm.donut.rpc.push.org/\");\n              const contract = new ethers.Contract(deployedAirdropAddress, UniversalAirdropABI, provider);\n              hasClaimed = await contract.hasClaimed(claimerAddress);\n            } catch (err) {\n              console.error(\"Error checking claim status:\", err);\n            }\n            setClaimerEligibility({\n              isEligible: true,\n              hasClaimed: hasClaimed,\n              amount: amount,\n              executorAddress: executorAddr,\n            });\n          } else {\n            setClaimerEligibility({\n              isEligible: false,\n              hasClaimed: false,\n              amount: \"0\",\n              executorAddress: \"\",\n            });\n          }\n        } else {\n          setClaimerEligibility(null);\n        }\n      };\n      checkClaimerEligibility();\n    }, [connectionStatus, pushChainClient, deployedAirdropAddress, convertedAddresses]);\n\n    const claimAirdrop = async () => {\n      if (!pushChainClient || !deployedAirdropAddress) {\n        setError(\"Wallet not connected or no deployed airdrop contract\");\n        return;\n      }\n      setIsClaiming(true);\n      setError(\"\");\n      try {\n        const claimAddr = pushChainClient.universal.account;\n        const entry = convertedAddresses.find(\n          ([addr]) => addr.toLowerCase() === claimAddr.toLowerCase()\n        );\n        if (!entry) {\n          setError(\"Address not found in airdrop list\");\n          setIsClaiming(false);\n          return;\n        }\n        const [, amount] = entry;\n        const provider = new ethers.JsonRpcProvider(\"https://evm.donut.rpc.push.org/\");\n        const contract = new ethers.Contract(deployedAirdropAddress, UniversalAirdropABI, provider);\n        const hasClaimed = await contract.hasClaimed(claimAddr);\n        if (hasClaimed) {\n          setError(\"This address has already claimed the airdrop\");\n          setIsClaiming(false);\n          setClaimerEligibility({ ...claimerEligibility, hasClaimed: true });\n          return;\n        }\n        if (!merkleTree) {\n          setError(\"Merkle tree not generated\");\n          setIsClaiming(false);\n          return;\n        }\n        let proof = [];\n        for (const [i, v] of merkleTree.tree.entries()) {\n          if (v[0].toLowerCase() === claimAddr.toLowerCase()) {\n            proof = merkleTree.tree.getProof(i);\n            break;\n          }\n        }\n        const txData = PushChain.utils.helpers.encodeTxData({\n          abi: UniversalAirdropABI,\n          functionName: \"claim\",\n          args: [amount, proof]\n        });\n        const tx = await pushChainClient.universal.sendTransaction({\n          to: deployedAirdropAddress,\n          data: txData,\n          value: BigInt(0),\n        });\n        await tx.wait();\n        alert(`Successfully claimed ${ethers.formatEther(amount)} $UNICORN tokens!`);\n        setIsClaiming(false);\n        setClaimerEligibility({ ...claimerEligibility, hasClaimed: true });\n      } catch (err) {\n        console.error(\"Error claiming airdrop:\", err);\n        setError(\"Failed to claim airdrop\");\n        setIsClaiming(false);\n      }\n    };\n\n    return (\n      <div style={{ maxWidth: \"800px\", margin: \"0 auto\", padding: \"20px\", fontFamily: \"system-ui\" }}>\n        <h1 style={{ textAlign: \"center\", marginBottom: \"10px\" }}>Universal Claimable Airdrop</h1>\n        <p style={{ textAlign: \"center\", color: \"#666\", marginBottom: \"30px\" }}>\n          Deploy once on Push Chain. Users from any chain can claim with their existing wallet.\n        </p>\n\n        <div style={{ marginBottom: \"30px\", display: \"flex\", justifyContent: \"center\" }}>\n          <PushUniversalAccountButton />\n        </div>\n\n        {connectionStatus !== \"connected\" && (\n          <p style={{ textAlign: \"center\", color: \"#666\" }}>\n            Please connect your wallet to start the airdrop setup.\n          </p>\n        )}\n\n        <div style={{ display: \"flex\", gap: \"8px\", marginBottom: \"30px\", justifyContent: \"center\" }}>\n          {[1, 2, 3, 4].map((step) => {\n            const locked =\n              (step === 2 && convertedAddresses.length === 0) ||\n              (step === 3 && !merkleRoot) ||\n              (step === 4 && !deployedAirdropAddress);\n\n            return (\n              <button\n                key={step}\n                onClick={() => !locked && setCurrentStep(step)}\n                disabled={locked}\n                style={{\n                  padding: \"8px 16px\",\n                  backgroundColor: currentStep === step ? \"#d946ef\" : \"#e0e0e0\",\n                  color: currentStep === step ? \"white\" : \"#666\",\n                  cursor: locked ? \"not-allowed\" : \"pointer\",\n                  opacity: locked ? 0.5 : 1,\n                  border: \"none\",\n                  borderRadius: \"6px\",\n                  fontWeight: \"bold\",\n                }}\n              >\n                Step {step}\n              </button>\n            );\n          })}\n        </div>\n\n        {connectionStatus === \"connected\" && currentStep === 1 && (\n          <div style={{ border: \"1px solid #ddd\", borderRadius: \"12px\", padding: \"20px\", marginBottom: \"20px\" }}>\n            <h2 style={{ marginTop: 0 }}>Step 1: Add Claimable Wallets</h2>\n            <p style={{ color: \"#666\", fontSize: \"14px\" }}>\n              Add wallet addresses from different chains to create your airdrop list.\n            </p>\n\n            <div style={{ marginBottom: \"16px\" }}>\n              <label style={{ display: \"block\", marginBottom: \"8px\", fontWeight: \"bold\" }}>Chain</label>\n              <select\n                value={selectedChain}\n                onChange={(e) => setSelectedChain(e.target.value)}\n                style={{ width: \"100%\", padding: \"10px\", borderRadius: \"6px\", border: \"1px solid #ddd\" }}\n              >\n                {chains.map((chain) => (\n                  <option key={chain.value} value={chain.value}>{chain.label}</option>\n                ))}\n              </select>\n            </div>\n\n            <div style={{ marginBottom: \"16px\" }}>\n              <label style={{ display: \"block\", marginBottom: \"8px\", fontWeight: \"bold\" }}>Wallet Address</label>\n              <input\n                type=\"text\"\n                value={newWalletAddress}\n                onChange={(e) => setNewWalletAddress(e.target.value)}\n                placeholder=\"0x...\"\n                style={{ width: \"100%\", padding: \"10px\", borderRadius: \"6px\", border: \"1px solid #ddd\" }}\n              />\n            </div>\n\n            <div style={{ marginBottom: \"16px\" }}>\n              <label style={{ display: \"block\", marginBottom: \"8px\", fontWeight: \"bold\" }}>Amount ($UNICORN)</label>\n              <input\n                type=\"number\"\n                value={airdropAmount}\n                onChange={(e) => setAirdropAmount(e.target.value)}\n                placeholder=\"100\"\n                style={{ width: \"100%\", padding: \"10px\", borderRadius: \"6px\", border: \"1px solid #ddd\" }}\n              />\n            </div>\n\n            <button\n              onClick={addWalletToList}\n              style={{\n                width: \"100%\",\n                padding: \"12px\",\n                backgroundColor: \"#2196F3\",\n                color: \"white\",\n                border: \"none\",\n                borderRadius: \"8px\",\n                cursor: \"pointer\",\n                fontWeight: \"bold\",\n                marginBottom: \"20px\",\n              }}\n            >\n              Add to List\n            </button>\n\n            {walletList.length > 0 && (\n              <div>\n                <h3 style={{ fontSize: \"16px\", marginBottom: \"12px\" }}>Wallet List ({walletList.length})</h3>\n                <div style={{ maxHeight: \"300px\", overflowY: \"auto\" }}>\n                  {walletList.map((wallet, index) => (\n                    <div\n                      key={index}\n                      style={{\n                        display: \"flex\",\n                        justifyContent: \"space-between\",\n                        alignItems: \"center\",\n                        padding: \"12px\",\n                        marginBottom: \"8px\",\n                        backgroundColor: \"#f5f5f5\",\n                        borderRadius: \"6px\",\n                        fontSize: \"14px\",\n                      }}\n                    >\n                      <div style={{ flex: 1 }}>\n                        <div style={{ fontWeight: \"bold\", color: \"#d946ef\" }}>\n                          {PushChain.utils.chains.getChainName(wallet.chain)}\n                        </div>\n                        <div style={{ color: \"#666\", fontSize: \"12px\", wordBreak: \"break-all\" }}>\n                          {wallet.address}\n                        </div>\n                        <div style={{ color: \"#333\", marginTop: \"4px\" }}>\n                          Amount: {wallet.amount} tokens\n                        </div>\n                      </div>\n                      <button\n                        onClick={() => removeWallet(index)}\n                        style={{\n                          padding: \"8px 12px\",\n                          backgroundColor: \"#dc3545\",\n                          color: \"white\",\n                          border: \"none\",\n                          borderRadius: \"6px\",\n                          cursor: \"pointer\",\n                        }}\n                      >\n                        Remove\n                      </button>\n                    </div>\n                  ))}\n                </div>\n                <button\n                  onClick={convertToPushChainAddresses}\n                  disabled={walletList.length === 0}\n                  style={{\n                    width: \"100%\",\n                    padding: \"12px\",\n                    marginTop: \"16px\",\n                    fontSize: \"16px\",\n                    fontWeight: \"bold\",\n                    backgroundColor: walletList.length === 0 ? \"#ccc\" : \"#d946ef\",\n                    color: \"white\",\n                    border: \"none\",\n                    borderRadius: \"8px\",\n                    cursor: walletList.length === 0 ? \"not-allowed\" : \"pointer\",\n                  }}\n                >\n                  Convert to Push Chain Addresses\n                </button>\n              </div>\n            )}\n\n            {error && (\n              <div style={{ marginTop: \"16px\", padding: \"12px\", backgroundColor: \"#fee\", color: \"#c62828\", borderRadius: \"6px\" }}>\n                {error}\n              </div>\n            )}\n          </div>\n        )}\n\n        {connectionStatus === \"connected\" && currentStep === 2 && (\n          <div style={{ border: \"1px solid #ddd\", borderRadius: \"12px\", padding: \"20px\", marginBottom: \"20px\" }}>\n            <h2 style={{ marginTop: 0 }}>Step 2: Generate Merkle Tree</h2>\n            <p style={{ color: \"#666\", fontSize: \"14px\" }}>\n              Review the converted addresses and generate the Merkle Tree for the airdrop.\n            </p>\n\n            <div style={{ marginBottom: \"20px\", backgroundColor: \"#f9f9f9\", borderRadius: \"8px\", padding: \"16px\" }}>\n              <h3 style={{ fontSize: \"16px\", marginBottom: \"12px\" }}>\n                Converted Addresses ({convertedAddresses.length})\n              </h3>\n              <div style={{ maxHeight: \"400px\", overflowY: \"auto\", backgroundColor: \"white\", borderRadius: \"6px\", padding: \"12px\" }}>\n                <pre style={{ fontSize: \"12px\", margin: 0, whiteSpace: \"pre-wrap\", wordBreak: \"break-all\" }}>\n                  {convertedAddresses.map(([executorAddr, amount, originalAddr, chain], index) => {\n                    const chainLabel = chains.find(c => c.value === chain)?.label || chain;\n                    return `// Original: ${originalAddr} (${chainLabel})\\n[\\n  \"${executorAddr}\",\\n  \"${amount}\"\\n]${index < convertedAddresses.length - 1 ? ',' : ''}\\n\\n`;\n                  }).join('')}\n                </pre>\n              </div>\n            </div>\n\n            <button\n              onClick={generateMerkleTree}\n              disabled={convertedAddresses.length === 0}\n              style={{\n                width: \"100%\",\n                padding: \"12px\",\n                fontSize: \"16px\",\n                fontWeight: \"bold\",\n                backgroundColor: convertedAddresses.length === 0 ? \"#ccc\" : \"#d946ef\",\n                color: \"white\",\n                border: \"none\",\n                borderRadius: \"8px\",\n                cursor: convertedAddresses.length === 0 ? \"not-allowed\" : \"pointer\",\n              }}\n            >\n              Generate Merkle Tree and Proofs\n            </button>\n\n            {merkleRoot && (\n              <div style={{ marginTop: \"16px\", padding: \"12px\", backgroundColor: \"#e8f5e9\", borderRadius: \"6px\" }}>\n                <p style={{ fontWeight: \"bold\", color: \"#2e7d32\", marginBottom: \"8px\" }}>\n                  Merkle Root Generated!\n                </p>\n                <code style={{ fontSize: \"12px\", wordBreak: \"break-all\", color: \"#333\" }}>\n                  {merkleRoot}\n                </code>\n              </div>\n            )}\n          </div>\n        )}\n\n        {connectionStatus === \"connected\" && currentStep === 3 && (\n          <div style={{ border: \"1px solid #ddd\", borderRadius: \"12px\", padding: \"20px\", marginBottom: \"20px\" }}>\n            <h2 style={{ marginTop: 0 }}>Step 3: Deploy Airdrop Contract</h2>\n            <p style={{ color: \"#666\", fontSize: \"14px\" }}>\n              Deploy the airdrop contract with the Merkle root. The factory will mint $UNICORN tokens automatically.\n            </p>\n\n            <div style={{ marginBottom: \"20px\", backgroundColor: \"#f0f7ff\", borderRadius: \"8px\", padding: \"16px\", border: \"1px solid #d0e7ff\" }}>\n              <h3 style={{ fontSize: \"14px\", marginBottom: \"12px\", color: \"#0066cc\", fontWeight: \"bold\" }}>\n                🔑 Key Concept\n              </h3>\n              <p style={{ fontSize: \"14px\", color: \"#333\", lineHeight: \"1.6\", margin: 0 }}>\n                Users from any chain will interact through their <b>Universal Executor Account (UEA)</b> - the deterministic addresses we generated in Step 1.\n              </p>\n            </div>\n\n            <div style={{ marginBottom: \"20px\", backgroundColor: \"#f9f9f9\", borderRadius: \"8px\", padding: \"16px\" }}>\n              <h3 style={{ fontSize: \"16px\", marginBottom: \"12px\" }}>Deployment Summary</h3>\n              <div style={{ backgroundColor: \"white\", borderRadius: \"6px\", padding: \"12px\" }}>\n                <div style={{ marginBottom: \"8px\" }}>\n                  <span style={{ fontWeight: \"bold\", color: \"#666\" }}>Token:</span> $UNICORN (ERC-20)\n                </div>\n                <div style={{ marginBottom: \"8px\" }}>\n                  <span style={{ fontWeight: \"bold\", color: \"#666\" }}>Total Amount:</span>{\" \"}\n                  {ethers.formatEther(convertedAddresses.reduce((sum, [, amount]) => sum + BigInt(amount), BigInt(0)))} $UNICORN\n                </div>\n                <div style={{ marginBottom: \"8px\" }}>\n                  <span style={{ fontWeight: \"bold\", color: \"#666\" }}>Recipients:</span> {convertedAddresses.length} addresses\n                </div>\n                <div>\n                  <span style={{ fontWeight: \"bold\", color: \"#666\" }}>Merkle Root:</span>\n                  <div style={{ marginTop: \"4px\", padding: \"8px\", backgroundColor: \"#f0f0f0\", borderRadius: \"4px\", wordBreak: \"break-all\", fontSize: \"12px\", fontFamily: \"monospace\" }}>\n                    {merkleRoot}\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <button\n              onClick={deployAirdrop}\n              disabled={isDeploying}\n              style={{\n                width: \"100%\",\n                padding: \"12px\",\n                fontSize: \"16px\",\n                fontWeight: \"bold\",\n                backgroundColor: isDeploying ? \"#999\" : \"#d946ef\",\n                color: \"white\",\n                border: \"none\",\n                borderRadius: \"8px\",\n                cursor: isDeploying ? \"not-allowed\" : \"pointer\",\n              }}\n            >\n              {isDeploying ? \"Deploying...\" : \"Deploy Airdrop Contract\"}\n            </button>\n          </div>\n        )}\n\n        {connectionStatus === \"connected\" && currentStep === 4 && (\n          <div style={{ border: \"1px solid #ddd\", borderRadius: \"12px\", padding: \"20px\", marginBottom: \"20px\" }}>\n            <h2 style={{ marginTop: 0 }}>Step 4: Claim Airdrop</h2>\n            <p style={{ color: \"#666\", fontSize: \"14px\" }}>\n              Your airdrop contract has been deployed! Users can now claim their $UNICORN tokens.\n            </p>\n\n            <div style={{ marginBottom: \"20px\", backgroundColor: \"#f0f7ff\", borderRadius: \"8px\", padding: \"16px\", border: \"1px solid #d0e7ff\" }}>\n              <h3 style={{ fontSize: \"14px\", marginBottom: \"8px\", color: \"#0066cc\", fontWeight: \"bold\" }}>\n                🎉 Deployment Successful!\n              </h3>\n              <div style={{ marginBottom: \"8px\" }}>\n                <label style={{ display: \"block\", fontWeight: \"bold\", color: \"#666\", marginBottom: \"4px\" }}>\n                  Contract Address:\n                </label>\n                <input\n                  type=\"text\"\n                  value={deployedAirdropAddress}\n                  readOnly\n                  style={{ width: \"100%\", padding: \"8px\", backgroundColor: \"white\", border: \"1px solid #ddd\", borderRadius: \"4px\", fontSize: \"12px\", fontFamily: \"monospace\" }}\n                />\n              </div>\n            </div>\n\n            <div style={{ marginBottom: \"20px\", backgroundColor: \"#fff3e0\", borderRadius: \"8px\", padding: \"16px\", border: \"1px solid #ffe0b2\" }}>\n              <h3 style={{ fontSize: \"16px\", marginBottom: \"12px\", color: \"#e65100\", fontWeight: \"bold\" }}>\n                Test Claim\n              </h3>\n              <p style={{ fontSize: \"14px\", color: \"#666\", marginBottom: \"12px\" }}>\n                Use your connected wallet to claim tokens from the airdrop.\n              </p>\n\n              {connectionStatus === \"connected\" && claimerEligibility && (\n                <div style={{ marginTop: \"12px\", padding: \"12px\", backgroundColor: claimerEligibility.isEligible ? \"#e8f5e9\" : \"#ffebee\", borderRadius: \"6px\", border: `1px solid ${claimerEligibility.isEligible ? \"#4caf50\" : \"#f44336\"}` }}>\n                  <p style={{ margin: 0, fontSize: \"14px\", fontWeight: \"bold\", color: \"#333\" }}>\n                    {claimerEligibility.isEligible ? \"✅ Eligible for Airdrop!\" : \"❌ Not Eligible\"}\n                  </p>\n                  {claimerEligibility.isEligible && (\n                    <>\n                      <p style={{ margin: \"8px 0 0 0\", fontSize: \"14px\", color: \"#666\" }}>\n                        Amount: {ethers.formatEther(claimerEligibility.amount)} $UNICORN\n                      </p>\n                      {claimerEligibility.hasClaimed ? (\n                        <p style={{ margin: \"8px 0 0 0\", fontSize: \"14px\", color: \"#666\" }}>\n                          Status: Already Claimed ✓\n                        </p>\n                      ) : (\n                        <button\n                          onClick={claimAirdrop}\n                          disabled={isClaiming}\n                          style={{\n                            marginTop: \"12px\",\n                            width: \"100%\",\n                            padding: \"12px\",\n                            fontSize: \"16px\",\n                            fontWeight: \"bold\",\n                            backgroundColor: isClaiming ? \"#999\" : \"#d946ef\",\n                            color: \"white\",\n                            border: \"none\",\n                            borderRadius: \"8px\",\n                            cursor: isClaiming ? \"not-allowed\" : \"pointer\",\n                          }}\n                        >\n                          {isClaiming ? \"Claiming...\" : \"Claim Airdrop\"}\n                        </button>\n                      )}\n                    </>\n                  )}\n                </div>\n              )}\n            </div>\n          </div>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-the-code",
      children: "Understanding the Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-address-conversion",
      children: "Step 1: Address Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const account = PushChain.utils.account.toUniversal(entry.address, {\n  chain: entry.chain,\n});\n\nconst executorAddress =\n  await PushChain.utils.account.deriveExecutorAccount(account);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This converts each origin address to its deterministic UEA address on Push Chain. The same origin address will always produce the same UEA address."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-merkle-tree-generation",
      children: "Step 2: Merkle Tree Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const values = convertedAddresses.map(([address, amount]) => [address, amount]);\nconst tree = StandardMerkleTree.of(values, ['address', 'uint256']);\nconst root = tree.root;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We use OpenZeppelin's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StandardMerkleTree"
      }), " which implements the same double-hashing pattern as the contract's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MerkleProof.verify()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-contract-deployment",
      children: "Step 3: Contract Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const txData = PushChain.utils.helpers.encodeTxData({\n  abi: factoryABI,\n  functionName: 'createAirdrop',\n  args: [totalAmount, merkleRoot],\n});\n\nconst tx = await pushChainClient.universal.sendTransaction({\n  to: FACTORY_ADDRESS,\n  data: txData,\n  value: BigInt(0),\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The factory deploys both the token and airdrop contracts, mints tokens, and transfers them to the airdrop contract."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-4-claiming-tokens",
      children: "Step 4: Claiming Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Generate proof for the claimer\nlet proof = [];\nfor (const [i, v] of merkleTree.tree.entries()) {\n  if (v[0].toLowerCase() === claimAddr.toLowerCase()) {\n    proof = merkleTree.tree.getProof(i);\n    break;\n  }\n}\n\n// Encode and send claim transaction\nconst txData = PushChain.utils.helpers.encodeTxData({\n  abi: UniversalAirdropABI,\n  functionName: 'claim',\n  args: [amount, proof],\n});\n\nconst tx = await pushChainClient.universal.sendTransaction({\n  to: deployedAirdropAddress,\n  data: txData,\n  value: BigInt(0),\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The claimer's UEA executes the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "claim()"
      }), " function with their proof, and the contract verifies and distributes tokens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-code",
      children: "Source Code"
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Universal Airdrop Tutorial",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/tutorials/universal-claimable-airdrop",
      description: "Full source code for the Universal Airdrop smart contracts and example frontend."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-we-achieved",
      children: "What We Achieved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this tutorial, we built a complete universal airdrop system:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Converted addresses"
        }), " from multiple chains to deterministic UEA addresses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generated Merkle trees"
        }), " for efficient on-chain verification"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployed contracts"
        }), " that mint and distribute tokens automatically"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Built a claim UI"
        }), " that works seamlessly across all chains"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-takeaways",
      children: "Key Takeaways"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. One Deployment, Infinite Reach"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploy your airdrop contract once on Push Chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users from any chain can claim with their existing wallet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No multi-chain deployment complexity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Universal Executor Accounts"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every address on every chain has a deterministic UEA on Push Chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UEAs enable cross-chain interactions without bridges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Same origin address always maps to the same UEA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Standard Merkle Proofs"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses OpenZeppelin's battle-tested implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No custom cryptography or modifications needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Efficient on-chain verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Seamless User Experience"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Users never leave their preferred chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No token bridging or chain-switching required"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "One click to claim from any wallet"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-next",
      children: "What's Next?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now that you've built a universal airdrop system, you can extend this pattern to create more advanced token distribution mechanisms."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Understanding the Foundation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every claim was executed through a ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/power-features/tutorial-derive-universal-executor-account/",
          children: "Universal Executor Account (UEA)"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The same UEA derivation enables all universal interactions on Push Chain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Merkle proofs provide efficient verification for large-scale distributions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Patterns to Explore:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-round airdrops"
        }), " with updatable Merkle roots"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vesting schedules"
        }), " with time-locked claims"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conditional claims"
        }), " based on on-chain activity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-chain governance"
        }), " token distribution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Staking rewards"
        }), " distributed to any chain"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The possibilities are endless when you build universal!"
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

/***/ 531855
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* reexport */ GitHubRepo)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(242644);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/GitHubRepo/GitHubRepo.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
const GitHubRepo=_ref=>{let title=_ref.title,repoUrl=_ref.repoUrl,_ref$description=_ref.description,description=_ref$description===void 0?'View complete source code on GitHub':_ref$description,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;const handleRepoClick=()=>{window.open(repoUrl,'_blank','noopener,noreferrer');};return/*#__PURE__*/(0,jsx_runtime.jsx)(GitHubRepoContainer,{className:className,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(RepoButton,{onClick:handleRepoClick,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GitHubIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiGithub */.BR8,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(RepoContent,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(RepoTitle,{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(RepoSubtext,{children:description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLinkIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiExternalLink */.HaR,{size:16})})]})});};// Styled Components
const GitHubRepoContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__GitHubRepoContainer",componentId:"sc-102xx6v-0"})(["margin:24px 0;padding:0;"]);const RepoButton=styled_components_browser_esm["default"].button.withConfig({displayName:"GitHubRepo__RepoButton",componentId:"sc-102xx6v-1"})(["display:flex;align-items:center;gap:12px;width:100%;padding:16px 20px;background:var(--ifm-background-color);border:1px solid var(--ifm-color-emphasis-200);border-radius:8px;cursor:pointer;transition:all 0.2s ease;text-align:left;&:hover{border-color:var(--ifm-color-primary-unified);}&:active{transform:translateY(0);}@media ","{padding:14px 16px;gap:10px;}@media ","{padding:12px 14px;gap:8px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const GitHubIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__GitHubIcon",componentId:"sc-102xx6v-2"})(["display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:var(--ifm-color-black);border-radius:6px;color:var(--ifm-color-white);flex-shrink:0;@media ","{width:36px;height:36px;}@media ","{width:32px;height:32px;svg{width:16px;height:16px;}}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const RepoContent=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoContent",componentId:"sc-102xx6v-3"})(["flex:1;min-width:0;"]);const RepoTitle=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoTitle",componentId:"sc-102xx6v-4"})(["font-size:16px;font-weight:600;color:var(--ifm-color-content);margin-bottom:4px;word-break:break-word;@media ","{font-size:15px;}@media ","{font-size:14px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const RepoSubtext=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoSubtext",componentId:"sc-102xx6v-5"})(["font-size:14px;color:var(--ifm-color-content-secondary);font-weight:400;@media ","{font-size:13px;}@media ","{font-size:12px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const ExternalLinkIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__ExternalLinkIcon",componentId:"sc-102xx6v-6"})(["display:flex;align-items:center;justify-content:center;color:var(--ifm-color-content-secondary);flex-shrink:0;opacity:0.7;transition:opacity 0.2s ease;",":hover &{opacity:1;}@media ","{svg{width:14px;height:14px;}}"],RepoButton,globals/* device */.jO.mobileL);/* harmony default export */ const GitHubRepo_GitHubRepo = ((/* unused pure expression or super */ null && (GitHubRepo)));
;// ./src/components/GitHubRepo/index.ts


/***/ },

/***/ 602999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IFrameModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
function IFrameModal(_ref){let url=_ref.url,_ref$buttonTitle=_ref.buttonTitle,buttonTitle=_ref$buttonTitle===void 0?'Load Interactive Demo':_ref$buttonTitle,_ref$maxHeight=_ref.maxHeight,maxHeight=_ref$maxHeight===void 0?'600px':_ref$maxHeight;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),isLoading=_useState[0],setIsLoading=_useState[1];const _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),isIframeVisible=_useState2[0],setIsIframeVisible=_useState2[1];const iframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);// Use proxy for push explorer URLs to bypass CSP
const getProxiedUrl=originalUrl=>{if(originalUrl.includes('push.network')||originalUrl.includes('donut.push.network')){// Extract the base URL from the original URL to construct the proxy URL
const urlObj=new URL(originalUrl);const baseUrl=urlObj.protocol+"//"+urlObj.host;// Use the push explorer's proxy endpoint if it's publicly accessible
return baseUrl+"/node-api/iframe-proxy?url="+encodeURIComponent(originalUrl);}return originalUrl;};const proxiedUrl=getProxiedUrl(url);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsLoading(true);},[url]);const handleIframeLoad=()=>{setIsLoading(false);};const handleRefresh=()=>{setIsLoading(true);if(iframeRef.current){iframeRef.current.src=proxiedUrl;}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:'flex',flexDirection:'column',width:'100%',height:isIframeVisible?'80vh':'auto',maxHeight,borderRadius:'12px',overflow:'hidden',margin:'20px 0'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n        @keyframes spin {\n          to { transform: rotate(360deg); }\n        }\n        .loading-spinner {\n          width: 40px;\n          height: 40px;\n          border: 4px solid #f3f3f3;\n          border-top: 4px solid #D548EC;\n          border-radius: 50%;\n          animation: spin 1s linear infinite;\n        }\n      "}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:'flex',alignItems:'center',gap:'10px',padding:'10px',backgroundColor:'var(--ifm-playground-header-bg)'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{flex:1,padding:'8px 12px',backgroundColor:'var(--ifm-navbar-search-bg)',borderRadius:'12px',color:'var(--ifm-color-title-text-color)',fontSize:'0.875rem',fontFamily:'Fira Code',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'},children:url}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:handleRefresh,style:{display:'flex',alignItems:'center',justifyContent:'center',width:'32px',height:'32px',padding:'6px',borderRadius:'12px',cursor:'pointer',transition:'all 0.2s ease',border:'var(--ifm-playground-button-border)',backgroundColor:'var(--ifm-table-body-bg)'},onMouseEnter:e=>{e.currentTarget.style.opacity='0.8';},onMouseLeave:e=>{e.currentTarget.style.opacity='1';},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M14 8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.8 0 3.4.8 4.5 2h-2.5v1h4V1h-1v2.1C11.9 1.8 10 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7h-1z",fill:"var(--ifm-iframe-icon-color)",opacity:"1"})})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:'relative',flex:1,backgroundColor:'var(--ifm-playground-header-bg)',borderRadius:'0 0 12px 12px'},children:!isIframeVisible?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',padding:'40px 20px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>setIsIframeVisible(true),style:{padding:'12px 24px',fontSize:'0.875rem',fontWeight:'600',backgroundColor:'#D548EC',color:'#fff',border:'none',borderRadius:'12px',cursor:'pointer',transition:'opacity 0.2s ease',opacity:0.9,fontFamily:'DM Sans'},onMouseEnter:e=>{e.currentTarget.style.opacity='1';},onMouseLeave:e=>{e.currentTarget.style.opacity='0.9';},children:buttonTitle})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[isLoading&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)',zIndex:1},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"loading-spinner"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{ref:iframeRef,src:proxiedUrl,title:"IFrame Content",onLoad:handleIframeLoad,sandbox:"allow-scripts allow-same-origin allow-forms allow-popups",style:{width:'100%',height:'100%',border:'none'}})]})})]});}

/***/ },

/***/ 531836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: () => (/* reexport */ SolidityCode)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(242644);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/SolidityCode/SolidityCode.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
const SolidityCode=_ref=>{let children=_ref.children,_ref$title=_ref.title,title=_ref$title===void 0?'Solidity Contract':_ref$title,_ref$fileName=_ref.fileName,fileName=_ref$fileName===void 0?'Contract.sol':_ref$fileName,_ref$url=_ref.url,url=_ref$url===void 0?null:_ref$url,_ref$showRemixButton=_ref.showRemixButton,showRemixButton=_ref$showRemixButton===void 0?true:_ref$showRemixButton,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;const getRemixUrl=()=>{let remixUrl='https://remix.ethereum.org/';if(url){// Convert GitHub blob URL to format Remix can understand
if(url.includes('github.com')&&url.includes('/blob/')){// Use GitHub import format for Remix
remixUrl="https://remix.ethereum.org/#url="+url;}else if(url.includes('raw.githubusercontent.com')){// Already a raw URL, use directly
remixUrl="https://remix.ethereum.org/#url="+url;}else{// Fallback to just opening Remix
remixUrl='https://remix.ethereum.org/';}}return remixUrl;};return/*#__PURE__*/(0,jsx_runtime.jsxs)(SolidityCodeContainer,{className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(CodeHeader,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CodeTitle,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TitleText,{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(FileNameText,{children:fileName})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(ButtonGroup,{children:showRemixButton&&/*#__PURE__*/(0,jsx_runtime.jsxs)(ActionButton,{href:getRemixUrl(),target:"_blank",rel:"noopener noreferrer",children:["Open in Remix",/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiExternalLink */.HaR,{size:16})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock,{children:children})]});};// Styled Components
const SolidityCodeContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__SolidityCodeContainer",componentId:"sc-1w77983-0"})(["margin:24px 0;border-radius:var(--ifm-global-radius);overflow:hidden;@media ","{margin:20px 0;}"],globals/* device */.jO.tablet);const CodeHeader=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeHeader",componentId:"sc-1w77983-1"})(["display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--ifm-playground-header-bg);@media ","{padding:10px 12px;flex-direction:row;align-items:flex-start;gap:8px;}"],globals/* device */.jO.tablet);const CodeTitle=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeTitle",componentId:"sc-1w77983-2"})(["display:flex;align-items:center;gap:10px;"]);const FileIcon=styled_components_browser_esm["default"].span.withConfig({displayName:"SolidityCode__FileIcon",componentId:"sc-1w77983-3"})(["font-size:1.125rem;@media ","{font-size:1rem;}"],globals/* device */.jO.tablet);const TitleText=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__TitleText",componentId:"sc-1w77983-4"})(["font-size:0.875rem;font-weight:600;color:var(--ifm-color-content);margin-bottom:2px;@media ","{font-size:0.8125rem;}"],globals/* device */.jO.tablet);const FileNameText=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__FileNameText",componentId:"sc-1w77983-5"})(["font-size:0.75rem;color:var(--ifm-color-content-secondary);font-family:var(--ifm-font-family-monospace);@media ","{font-size:0.6875rem;}"],globals/* device */.jO.tablet);const ButtonGroup=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__ButtonGroup",componentId:"sc-1w77983-6"})(["display:flex;align-items:center;gap:8px;@media ","{justify-content:flex-end;align-self:center;}"],globals/* device */.jO.tablet);const ActionButton=styled_components_browser_esm["default"].a.withConfig({displayName:"SolidityCode__ActionButton",componentId:"sc-1w77983-7"})(["display:flex;align-items:center;gap:6px;padding:6px 12px;background:transparent;border:1px solid var(--ifm-playground-header-tag);border-radius:4px;color:var(--ifm-color-primary-text);font-size:0.75rem;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;font-weight:500;text-decoration:none;&:hover{border:1px solid var(--ifm-color-primary);text-decoration:none;}@media ","{padding:5px 10px;font-size:0.6875rem;}"],globals/* device */.jO.tablet);const CodeBlock=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeBlock",componentId:"sc-1w77983-8"})(["overflow-x:auto;background:var(--ifm-playground-header-terminalbg);& > div{margin:0px;}"]);/* harmony default export */ const SolidityCode_SolidityCode = ((/* unused pure expression or super */ null && (SolidityCode)));
;// ./src/components/SolidityCode/index.ts


/***/ },

/***/ 546772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_TutorialTimer)
});

// UNUSED EXPORTS: TutorialTimer

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(777255);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(635504);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/TutorialTimer/TutorialTimer.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Components
// Internal Configs
const TutorialTimer=_ref=>{let estimatedMinutes=_ref.estimatedMinutes,label=_ref.label,className=_ref.className;const _useTranslation=(0,es/* useTranslation */.Bd)(),t=_useTranslation.t;// Format time display
const formatTime=minutes=>{if(minutes<60){return minutes+" min"+(minutes!==1?'s':'');}const hours=Math.floor(minutes/60);const remainingMinutes=minutes%60;if(remainingMinutes===0){return hours+" hour"+(hours!==1?'s':'');}return hours+"h "+remainingMinutes+"m";};const timeDisplay=formatTime(estimatedMinutes);return/*#__PURE__*/(0,jsx_runtime.jsxs)(TimerContainer,{className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TimerIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* BiTime */.FOv,{size:"16px","aria-hidden":"true"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TimerContent,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TimerValue,{children:timeDisplay})})]});};// Styled Components
const TimerContainer=(0,styled_components_browser_esm["default"])(SharedStyling/* ItemH */.Oj).withConfig({displayName:"TutorialTimer__TimerContainer",componentId:"sc-oucx4h-0"})(["display:flex;align-items:center;gap:8px;padding:8px 12px 8px 0px;width:fit-content;margin:-30px 0 28px 0 !important;@media ","{padding:6px 10px;gap:6px;}"],globals/* device */.jO.tablet);const TimerIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"TutorialTimer__TimerIcon",componentId:"sc-oucx4h-1"})(["align-items:center;color:var(--ifm-color-primary-unified);flex-shrink:0;display:flex;"]);const TimerContent=styled_components_browser_esm["default"].div.withConfig({displayName:"TutorialTimer__TimerContent",componentId:"sc-oucx4h-2"})(["display:flex;flex-direction:row;gap:8px;align-items:center;"]);const TimerLabel=styled_components_browser_esm["default"].span.withConfig({displayName:"TutorialTimer__TimerLabel",componentId:"sc-oucx4h-3"})(["font-size:12px;font-weight:500;line-height:1.2;@media ","{font-size:11px;}"],globals/* device */.jO.tablet);const TimerValue=styled_components_browser_esm["default"].span.withConfig({displayName:"TutorialTimer__TimerValue",componentId:"sc-oucx4h-4"})(["font-size:1rem;font-weight:600;color:var(--ifm-color-secondary-text);line-height:1.2;@media ","{font-size:12px;}"],globals/* device */.jO.tablet);
;// ./src/components/TutorialTimer/index.ts
/* harmony default export */ const components_TutorialTimer = (TutorialTimer);

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
        // 1788479167511
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
        // 1788479167508
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
        // 1788479167510
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
        // 1788479174724
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