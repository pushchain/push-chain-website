"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[87417],{

/***/ 4134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_04_integration_and_tooling_01_tutorial_scaffold_eth_2_push_chain_mdx_9fe_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-04-integration-and-tooling-01-tutorial-scaffold-eth-2-push-chain-mdx-9fe.json
const site_docs_chain_01_tutorials_04_integration_and_tooling_01_tutorial_scaffold_eth_2_push_chain_mdx_9fe_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/integration-and-tooling/docs-chain-tutorials-scaffoldeth2","title":"Setup Scaffold-ETH for Push","description":"{Configure Scaffold‑ETH 2 for Push Chain: Deploy and Interact with a Contract | Tutorials | Push Chain Docs}","source":"@site/docs/chain/01-tutorials/04-integration-and-tooling/01-Tutorial-Scaffold-ETH-2-PushChain.mdx","sourceDirName":"chain/01-tutorials/04-integration-and-tooling","slug":"/chain/tutorials/integration-and-tooling/tutorial-scaffoldeth2","permalink":"/push-chain-website/pr-preview/pr-1145/docs/chain/tutorials/integration-and-tooling/tutorial-scaffoldeth2","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/04-integration-and-tooling/01-Tutorial-Scaffold-ETH-2-PushChain.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"docs-chain-tutorials-scaffoldeth2","title":"Setup Scaffold-ETH for Push","hide_title":false,"slug":"./tutorial-scaffoldeth2","displayed_sidebar":"pushChainSidebar","sidebar_position":5,"image":"/assets/docs/previews/docs_chain_tutorials_scaffoldeth2--setup_scaffold-eth_for_push.png"},"sidebar":"pushChainSidebar","previous":{"title":"Payments and DeFi","permalink":"/push-chain-website/pr-preview/pr-1145/docs/chain/tutorials/integration-and-tooling"},"next":{"title":"Setup","permalink":"/push-chain-website/pr-preview/pr-1145/docs/chain/setup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/chain/01-tutorials/04-integration-and-tooling/01-Tutorial-Scaffold-ETH-2-PushChain.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-scaffoldeth2',
	title: 'Setup Scaffold-ETH for Push',
	hide_title: false,
	slug: './tutorial-scaffoldeth2',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 5,
	image: '/assets/docs/previews/docs_chain_tutorials_scaffoldeth2--setup_scaffold-eth_for_push.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/


const toc = [{
  "value": "Part 1: Configure Scaffold‑ETH 2 for Push Chain Donut Testnet",
  "id": "part-1-configure-scaffoldeth2-for-push-chain-donut-testnet",
  "level": 2
}, {
  "value": "1.1. Create a new Scaffold‑ETH 2 workspace",
  "id": "11-create-a-new-scaffoldeth2-workspace",
  "level": 3
}, {
  "value": "1.2. Add Push Chain Donut Testnet to <code>scaffold.config.ts</code>",
  "id": "12-add-push-chain-donut-testnet-to-scaffoldconfigts",
  "level": 3
}, {
  "value": "1.3. Configure Hardhat for Push Chain",
  "id": "13-configure-hardhat-for-push-chain",
  "level": 3
}, {
  "value": "1.4. Generate a deployer account and fund it",
  "id": "14-generate-a-deployer-account-and-fund-it",
  "level": 3
}, {
  "value": "Part 2: Add and deploy the governance contract",
  "id": "part-2-add-and-deploy-the-governance-contract",
  "level": 2
}, {
  "value": "2.1. Add <code>Governance.sol</code>",
  "id": "21-add-governancesol",
  "level": 3
}, {
  "value": "What this sample contract does",
  "id": "what-this-sample-contract-does",
  "level": 4
}, {
  "value": "2.2. Create the deploy script",
  "id": "22-create-the-deploy-script",
  "level": 3
}, {
  "value": "2.3. Deploy to Push Chain Donut",
  "id": "23-deploy-to-push-chain-donut",
  "level": 3
}, {
  "value": "Part 3: Interact from the Debug UI",
  "id": "part-3-interact-from-the-debug-ui",
  "level": 2
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
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
        children: `Configure Scaffold‑ETH 2 for Push Chain: Deploy and Interact with a Contract | Tutorials | Push Chain Docs`
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Welcome! In this tutorial, you’ll set up a fresh ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scaffold‑ETH 2"
      }), " project, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deploy a new smart contract to the Push Chain Donut Testnet"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interact with it from the Scaffold‑ETH 2 app"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We’ll cover:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add Push Chain Donut Testnet to Scaffold‑ETH 2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardhat"
        }), " for Push Chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a new example contract (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Governance.sol"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write and run a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deploy script"
        }), " to deploy on Push Chain"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interact with the deployed contract from the Scaffold‑ETH 2 app"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you already use Scaffold‑ETH 2, this will feel familiar—you’ll point the template at a new network, add a contract, and deploy it. Let’s go 🤿."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-1-configure-scaffoldeth2-for-push-chain-donut-testnet",
      children: "Part 1: Configure Scaffold‑ETH 2 for Push Chain Donut Testnet"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-create-a-new-scaffoldeth2-workspace",
      children: "1.1. Create a new Scaffold‑ETH 2 workspace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx create-eth@latest\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When prompted by the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "create-eth"
      }), " wizard, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "select the Hardhat option"
      }), " for your smart contract environment. This ensures your project is set up to deploy contracts to Push Chain using Hardhat."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "12-add-push-chain-donut-testnet-to-scaffoldconfigts",
      children: ["1.2. Add Push Chain Donut Testnet to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scaffold.config.ts"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/nextjs/scaffold.config.ts"
        })
      }), " and add a custom chain entry for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain Donut Testnet"
      }), ", then include it in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "targetNetworks"
      }), " so the app knows about it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=\"packages/nextjs/scaffold.config.ts\"",
        children: "import * as chains from 'viem/chains';\n\nexport type BaseConfig = {\n  targetNetworks: readonly chains.Chain[];\n  pollingInterval: number;\n  alchemyApiKey: string;\n  rpcOverrides?: Record<number, string>;\n  walletConnectProjectId: string;\n  onlyLocalBurnerWallet: boolean;\n};\n\nexport type ScaffoldConfig = BaseConfig;\n\nexport const DEFAULT_ALCHEMY_API_KEY =\n  process.env.NEXT_PUBLIC_ALCHEMY_KEY ?? 'REPLACE_ME';\n\n// highlight-start\n// Push Chain Donut Testnet\nexport const pushDonutChain: chains.Chain = {\n  id: 42101,\n  name: 'Push Chain Donut Testnet',\n  nativeCurrency: { name: 'Push', symbol: 'PC', decimals: 18 },\n  rpcUrls: {\n    default: {\n      http: [\n        'https://evm.donut.rpc.push.org/',\n      ],\n    },\n    public: {\n      http: [\n        'https://evm.donut.rpc.push.org/',\n      ],\n    },\n  },\n  blockExplorers: {\n    default: {\n      name: 'Push Donut Explorer',\n      url: 'https://evm-explorer-testnet.push.org',\n    },\n  },\n};\n// highlight-end\n\nconst scaffoldConfig = {\n  // highlight-start\n  targetNetworks: [chains.hardhat, pushDonutChain],\n  // highlight-end\n  pollingInterval: 30000,\n  alchemyApiKey: DEFAULT_ALCHEMY_API_KEY,\n  rpcOverrides: {},\n  walletConnectProjectId:\n    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ??\n    'YOUR_WALLETCONNECT_ID',\n  onlyLocalBurnerWallet: true,\n} as const satisfies ScaffoldConfig;\n\nexport default scaffoldConfig;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Why this matters"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "targetNetworks"
        }), " drives the chain list in the app and wagmi connectors. Adding ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pushDonutChain"
        }), " makes the UI aware of Push Chain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-configure-hardhat-for-push-chain",
      children: "1.3. Configure Hardhat for Push Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Edit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/hardhat/hardhat.config.ts"
        })
      }), " to add a Push Chain Donut Testnet network."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=\"packages/hardhat/hardhat.config.ts\"",
        children: "import * as dotenv from 'dotenv';\ndotenv.config();\nimport { HardhatUserConfig } from 'hardhat/config';\nimport '@nomicfoundation/hardhat-ethers';\nimport '@nomicfoundation/hardhat-chai-matchers';\nimport '@typechain/hardhat';\nimport 'hardhat-gas-reporter';\nimport 'solidity-coverage';\nimport '@nomicfoundation/hardhat-verify';\nimport 'hardhat-deploy';\nimport 'hardhat-deploy-ethers';\nimport { task } from 'hardhat/config';\nimport generateTsAbis from './scripts/generateTsAbis';\n\nconst providerApiKey =\n  process.env.ALCHEMY_API_KEY;\nconst deployerPrivateKey =\n  process.env.__RUNTIME_DEPLOYER_PRIVATE_KEY\nconst etherscanApiKey =\n  process.env.ETHERSCAN_V2_API_KEY;\n\nconst config: HardhatUserConfig = {\n  solidity: {\n    compilers: [\n      {\n        version: '0.8.20',\n        settings: {\n          optimizer: {\n            enabled: true,\n            runs: 200,\n          },\n        },\n      },\n    ],\n  },\n  defaultNetwork: 'localhost',\n  namedAccounts: {\n    deployer: {\n      default: 0,\n    },\n  },\n  networks: {\n    hardhat: {\n      forking: {\n        url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,\n        enabled: process.env.MAINNET_FORKING_ENABLED === 'true',\n      },\n    },\n    // highlight-start\n    // Push Chain Donut Testnet\n    pushDonut: {\n      url: 'https://evm.donut.rpc.push.org/',\n      chainId: 42101,\n      accounts: [deployerPrivateKey],\n    },\n    // highlight-end\n  },\n  etherscan: {\n    apiKey: etherscanApiKey,\n  },\n  verify: {\n    etherscan: {\n      apiKey: etherscanApiKey,\n    },\n  },\n  sourcify: {\n    enabled: false,\n  },\n};\n\ntask('deploy').setAction(async (args, hre, runSuper) => {\n  await runSuper(args);\n  await generateTsAbis(hre);\n});\n\nexport default config;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-generate-a-deployer-account-and-fund-it",
      children: "1.4. Generate a deployer account and fund it"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You’ll need a funded testnet account to deploy contracts to Push Chain Donut."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate a fresh account using the built‑in script:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# from the repo root\nyarn generate\n# This prints a new Address\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fund the generated address with Push Chain Donut testnet $PC using the Faucet. If you need funds, request them here:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Faucet docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/setup/tooling/faucet/",
          children: "Faucet"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Direct faucet: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://faucet.push.org/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-2-add-and-deploy-the-governance-contract",
      children: "Part 2: Add and deploy the governance contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "21-add-governancesol",
      children: ["2.1. Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Governance.sol"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Place your contract at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/hardhat/contracts/Governance.sol"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "what-this-sample-contract-does",
      children: "What this sample contract does"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a minimal governance example to demonstrate deployment and app wiring:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create proposals"
        }), ": Anyone can call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "createProposal(description, duration)"
        }), " which assigns an incremental id, stores the description, and sets a deadline as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "block.timestamp + duration"
        }), ". Emits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProposalCreated"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vote once per address"
        }), ": Call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vote(id, support)"
        }), " before the deadline to cast a yes/no vote. Each address can vote only once per proposal. Emits ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Voted"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read state"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getProposal(id)"
        }), " to fetch description, deadline, yes/no counts, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasVoted(id, voter)"
        }), " to check if an address has voted."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Purposely simple"
        }), ": No token‑weighting, quorum, execution, or proposal states beyond open/closed. It’s for tutorial/demo purposes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        metastring: "title=\"packages/hardhat/contracts/Governance.sol\"",
        children: "// SPDX-License-Identifier: MIT\npragma solidity >=0.8.0 <0.9.0;\n\ncontract SimpleGovernance {\n    /// @dev Emitted when a new proposal is created.\n    event ProposalCreated(uint256 indexed id, address indexed proposer, string description, uint256 deadline);\n    /// @dev Emitted when someone votes on a proposal.\n    event Voted(uint256 indexed id, address indexed voter, bool support);\n\n    struct Proposal {\n        string description;\n        uint256 deadline;\n        uint256 yesVotes;\n        uint256 noVotes;\n        mapping(address => bool) voted;\n        bool exists;\n    }\n\n    uint256 public proposalCount;\n    mapping(uint256 => Proposal) internal _proposals;\n\n    function createProposal(string calldata description, uint256 duration) external returns (uint256 id) {\n        require(duration > 0, \"duration must be > 0\");\n        id = ++proposalCount;\n        Proposal storage p = _proposals[id];\n        p.description = description;\n        p.deadline = block.timestamp + duration;\n        p.exists = true;\n        emit ProposalCreated(id, msg.sender, description, p.deadline);\n    }\n\n    function vote(uint256 id, bool support) external {\n        Proposal storage p = _getProposal(id);\n        require(block.timestamp < p.deadline, \"voting closed\");\n        require(!p.voted[msg.sender], \"already voted\");\n        p.voted[msg.sender] = true;\n        if (support) p.yesVotes += 1; else p.noVotes += 1;\n        emit Voted(id, msg.sender, support);\n    }\n\n    function getProposal(uint256 id) external view returns (string memory, uint256, uint256, uint256) {\n        Proposal storage p = _getProposal(id);\n        return (p.description, p.deadline, p.yesVotes, p.noVotes);\n    }\n\n    function hasVoted(uint256 id, address voter) external view returns (bool) {\n        return _getProposal(id).voted[voter];\n    }\n\n    function _getProposal(uint256 id) internal view returns (Proposal storage) {\n        require(id > 0 && id <= proposalCount, \"Invalid proposal id\");\n        Proposal storage p = _proposals[id];\n        require(p.exists, \"Proposal does not exist\");\n        return p;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-create-the-deploy-script",
      children: "2.2. Create the deploy script"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "packages/hardhat/deploy/00_deploy_your_contract.ts"
        })
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        metastring: "title=\"packages/hardhat/deploy/00_deploy_your_contract.ts\"",
        children: "import { HardhatRuntimeEnvironment } from 'hardhat/types';\nimport { DeployFunction } from 'hardhat-deploy/types';\nimport { Contract } from 'ethers';\n\nconst deployYourContract: DeployFunction = async function (\n  hre: HardhatRuntimeEnvironment\n) {\n  const { deployer } = await hre.getNamedAccounts();\n  const { deploy } = hre.deployments;\n\n  await deploy('SimpleGovernance', {\n    from: deployer,\n    args: [],\n    log: true,\n    autoMine: true,\n  });\n\n  const yourContract = await hre.ethers.getContract<Contract>(\n    'SimpleGovernance',\n    deployer\n  );\n  console.log('👋 Initial proposal count:', await yourContract.proposalCount());\n};\n\nexport default deployYourContract;\n\ndeployYourContract.tags = ['SimpleGovernance'];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-deploy-to-push-chain-donut",
      children: "2.3. Deploy to Push Chain Donut"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "From the repo root, run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "yarn deploy --network pushDonut\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You should see the contract address and the “Initial proposal count” log."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-3-interact-from-the-debug-ui",
      children: "Part 3: Interact from the Debug UI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After deployment, open your app and go to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/debug"
      }), " page. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Debug Contracts"
      }), " UI will automatically pick up your deployed contracts and expose handy actions. You can:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a proposal using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "createProposal(description, duration)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vote on proposals with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vote(id, true|false)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read current state via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getProposal(id)"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hasVoted(id, address)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This gives you a ready‑made interface to test your contract on Push Chain without building a custom UI first."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You’ve configured ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scaffold‑ETH 2"
      }), " to recognize ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Push Chain Donut Testnet"
      }), ", added a new contract (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SimpleGovernance"
      }), "), wired a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardhat"
      }), " network, and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "deployed"
      }), ". From here, you can keep iterating on contracts and UI as usual—just keep the Push Chain network in your configs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explore universal transactions and cross‑chain UX"
        }), " - Learn about ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-universal-transaction",
          children: "Universal Transactions"
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/sign-universal-message",
          children: "Universal Message Signing"
        }), " for seamless cross-chain interactions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrate Push Universal Wallet"
        }), " - Add wallet abstraction to your app with our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/integrate-push-universal-wallet",
          children: "UI Kit integration guide"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For more about the framework used here, see the official Scaffold‑ETH 2 docs: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://docs.scaffoldeth.io/"
      }), "."]
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



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);