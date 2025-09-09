"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[40801],{

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


/***/ }),

/***/ 119365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabItem(_ref){let{children,hidden,className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{role:"tabpanel",className:(0,clsx/* default */.A)(styles_module.tabItem,className),hidden,children:children});}

/***/ }),

/***/ 359035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_03_mint_erc_20_tokens_mdx_f8a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-03-mint-erc-20-tokens-mdx-f8a.json
const site_docs_chain_01_tutorials_03_mint_erc_20_tokens_mdx_f8a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/docs-chain-tutorials-mint-erc-20-tokens","title":"Mint Universal ERC-20 Tokens (via Push-Swap)","description":"Mint Universal ERC-20 Tokens (via Push-Swap) | Tutorials | Push Chain Docs","source":"@site/docs/chain/01-tutorials/03-Mint-ERC-20-Tokens.mdx","sourceDirName":"chain/01-tutorials","slug":"/chain/tutorials/tutorial-mint-erc-20-tokens","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-mint-erc-20-tokens","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/03-Mint-ERC-20-Tokens.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"docs-chain-tutorials-mint-erc-20-tokens","title":"Mint Universal ERC-20 Tokens (via Push-Swap)","hide_title":false,"slug":"./tutorial-mint-erc-20-tokens","displayed_sidebar":"pushChainSidebar","sidebar_position":3,"image":"/assets/docs/previews/docs_chain_tutorials_mint_erc_20_tokens--mint_universal_erc-20_tokens_(via_push-swap).png"},"sidebar":"pushChainSidebar","previous":{"title":"Build a Universal Counter App","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-counter"},"next":{"title":"Build a Universal Payment Gateway","permalink":"/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-payment-gateway"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(411470);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(119365);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
// EXTERNAL MODULE: ./src/components/IFrameModal/IFrameModal.tsx
var IFrameModal = __webpack_require__(602999);
;// ./docs/chain/01-tutorials/03-Mint-ERC-20-Tokens.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-mint-erc-20-tokens',
	title: 'Mint Universal ERC-20 Tokens (via Push-Swap)',
	hide_title: false,
	slug: './tutorial-mint-erc-20-tokens',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_chain_tutorials_mint_erc_20_tokens--mint_universal_erc-20_tokens_(via_push-swap).png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/
/*TODO: Update this URL to correct one*/






const toc = [{
  "value": "Tutorial Overview",
  "id": "tutorial-overview",
  "level": 2
}, {
  "value": "Part 1: Deploy ERC-20 Token to Push Chain",
  "id": "part-1-deploy-erc-20-token-to-push-chain",
  "level": 3
}, {
  "value": "Part 2: Mint $WPUSH Tokens",
  "id": "part-2-mint-wpush-tokens",
  "level": 3
}, {
  "value": "Part 3: Create Liquidity Pool",
  "id": "part-3-create-liquidity-pool",
  "level": 3
}, {
  "value": "Part 4: Test Token Swaps",
  "id": "part-4-test-token-swaps",
  "level": 3
}, {
  "value": "Part 5: Build Frontend UI",
  "id": "part-5-build-frontend-ui",
  "level": 3
}, {
  "value": "Part 1: Deploying a standard ERC-20 token to Push Chain’s testnet with Hardhat",
  "id": "part-1-deploying-a-standard-erc-20-token-to-push-chains-testnet-with-hardhat",
  "level": 2
}, {
  "value": "1.1. Setting up Hardhat",
  "id": "11-setting-up-hardhat",
  "level": 3
}, {
  "value": "1.2. Configuring Hardhat (<code>hardhat.config.ts</code>)",
  "id": "12-configuring-hardhat-hardhatconfigts",
  "level": 3
}, {
  "value": "1.4. Create the Airdrop Token Contract",
  "id": "14-create-the-airdrop-token-contract",
  "level": 3
}, {
  "value": "1.5. Compiling the Contract",
  "id": "15-compiling-the-contract",
  "level": 3
}, {
  "value": "1.6. Deploying the Airdrop Token Contract to Push Chain",
  "id": "16-deploying-the-airdrop-token-contract-to-push-chain",
  "level": 3
}, {
  "value": "Part 2: Minting <code>$WPUSH</code> tokens",
  "id": "part-2-minting-wpush-tokens",
  "level": 2
}, {
  "value": "Part 3: Create <code>$AIRDROP/$WPUSH</code> Pool and Add Liquidity",
  "id": "part-3-create-airdropwpush-pool-and-add-liquidity",
  "level": 2
}, {
  "value": "Part 4: Programmatic Swap (<code>$WPUSH</code> → <code>$AIRDROP</code>)",
  "id": "part-4-programmatic-swap-wpush--airdrop",
  "level": 2
}, {
  "value": "Part 5: Building the Frontend UI",
  "id": "part-5-building-the-frontend-ui",
  "level": 2
}, {
  "value": "5.1. Setting up Vite + React + TypeScript frontend",
  "id": "51-setting-up-vite--react--typescript-frontend",
  "level": 3
}, {
  "value": "5.2. Installing <code>@pushchain/ui-kit</code>",
  "id": "52-installing-pushchainui-kit",
  "level": 3
}, {
  "value": "5.3. Setting up the Push Chain Wallet",
  "id": "53-setting-up-the-push-chain-wallet",
  "level": 3
}, {
  "value": "5.4. Add <code>deployed-addresses.json</code> to <code>public/</code>",
  "id": "54-add-deployed-addressesjson-to-public",
  "level": 3
}, {
  "value": "5.5. Creating the Application Component",
  "id": "55-creating-the-application-component",
  "level": 3
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
        children: "Mint Universal ERC-20 Tokens (via Push-Swap) | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This tutorial shows how to let users on any chain mint a universal ERC-20 called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP"
      }), " by leveraging Push Universal Transactions plus a Uniswap v3 pool on Push Chain. Users “mint” by swapping ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WPUSH"
      }), " (Wrapped Push Token) to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP"
      }), " through the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP/$WPUSH"
      }), " pool; the universal wallet abstracts cross-chain execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What you’ll do:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy a standard ERC-20 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$AIRDROP"
        }), " token on Push Chain"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$AIRDROP/$WPUSH"
        }), " pool and add liquidity"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test a swap programmatically"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a frontend UI that lets users mint ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$WPUSH"
        }), " and swap between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$WPUSH"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$AIRDROP"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tutorial-overview",
      children: "Tutorial Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This tutorial is divided into five main parts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-1-deploy-erc-20-token-to-push-chain",
      children: "Part 1: Deploy ERC-20 Token to Push Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set up Hardhat, write and deploy an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP"
      }), " ERC-20 token contract to Push Chain testnet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-2-mint-wpush-tokens",
      children: "Part 2: Mint $WPUSH Tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a script to mint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WPUSH"
      }), " tokens (wrapped Push Chain tokens) needed for liquidity pools."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-3-create-liquidity-pool",
      children: "Part 3: Create Liquidity Pool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Set up a Uniswap V3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP/$WPUSH"
      }), " pool and add initial liquidity for token swapping."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-4-test-token-swaps",
      children: "Part 4: Test Token Swaps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a script to programmatically swap ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WPUSH"
      }), " for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP"
      }), " tokens through the pool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-5-build-frontend-ui",
      children: "Part 5: Build Frontend UI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a React app with Push Universal Wallet integration that allows users to mint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WPUSH"
      }), " by depositing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), " and swap between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WPUSH"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP"
      }), " using the Uniswap v3 router on Push Chain."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-1-deploying-a-standard-erc-20-token-to-push-chains-testnet-with-hardhat",
      children: "Part 1: Deploying a standard ERC-20 token to Push Chain’s testnet with Hardhat"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " For a deeper dive on how to configure Hardhat to Push Chain, please refer to this page ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-chain-website/pr-preview/pr-1067/docs/chain/setup/smart-contract-environment/configure-hardhat",
          children: "Configure Hardhat"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-setting-up-hardhat",
      children: "1.1. Setting up Hardhat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, let’s set up a new Hardhat project."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Create the project directory\nmkdir airdrop-token\ncd airdrop-token\n\n# Initialize a new Node.js project\nnpm init -y\n\n# Install Hardhat and its toolbox\nnpm install --save-dev hardhat@2.26.3 @nomicfoundation/hardhat-toolbox@6.1.0\n\n# Initialize Hardhat (select the options \"Hardhat 2\" then \"Create a TypeScript project\")\nnpx hardhat init\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now, install required dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Install dotenv for environment variable management\nnpm install dotenv\n\n# Install OpenZeppelin contracts library\nnpm install @openzeppelin/contracts\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dotenv"
        }), ": Allows us to load environment variables from a .env file, keeping sensitive information like private keys secure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@openzeppelin/contracts"
        }), ": Provides battle-tested smart contract implementations including ERC-20"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "12-configuring-hardhat-hardhatconfigts",
      children: ["1.2. Configuring Hardhat (", (0,jsx_runtime.jsx)(_components.code, {
        children: "hardhat.config.ts"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Update your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hardhat.config.ts"
      }), " to include network configurations and compiler settings:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { HardhatUserConfig } from 'hardhat/config';\nimport '@nomicfoundation/hardhat-toolbox';\nimport { config as dotenvConfig } from 'dotenv';\n\n// Load environment variables\ndotenvConfig();\n\nconst config: HardhatUserConfig = {\n  solidity: {\n    version: '0.8.22',\n    settings: {\n      optimizer: {\n        enabled: true,\n        runs: 200,\n      },\n      viaIR: true,\n    },\n  },\n  networks: {\n    pushDonut: {\n      url: 'https://evm.rpc-testnet-donut-node1.push.org/',\n      accounts: process.env.PRIVATE_KEY\n        ? [process.env.PRIVATE_KEY.startsWith('0x') ? process.env.PRIVATE_KEY : `0x${process.env.PRIVATE_KEY}`]\n        : [],\n      chainId: 42101,\n    },\n  },\n  paths: {\n    sources: './contracts',\n    tests: './test',\n    cache: './cache',\n    artifacts: './artifacts',\n  },\n};\n\nexport default config;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key configuration details:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solidity Compiler"
        }), ": Version 0.8.22 with optimization enabled (200 runs) and viaIR enabled for better gas efficiency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Networks"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pushDonut"
            }), ": Push Chain Donut Testnet with environment-based private key"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paths"
        }), ": Standard Hardhat directory structure"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-create-the-airdrop-token-contract",
      children: "1.4. Create the Airdrop Token Contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a new file ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contracts/AirdropToken.sol"
      }), " with the following content:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.19;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\n\ncontract AirdropToken is ERC20 {\n    constructor(string memory name, string memory symbol) ERC20(name, symbol) {\n        _mint(msg.sender, 1_000_000 * 10 ** decimals());\n    }\n\n    function mint(address to, uint256 amount) external {\n        _mint(to, amount);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-compiling-the-contract",
      children: "1.5. Compiling the Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compile the contract with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat compile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-deploying-the-airdrop-token-contract-to-push-chain",
      children: "1.6. Deploying the Airdrop Token Contract to Push Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " file in the root directory and add your private key that you will use to deploy the contract to Push Chain.  If you need ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), " tokens to deploy the contract, you can get them from the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://faucet.push.org/",
        children: "Push Chain Faucet"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add the following to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " file:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "PRIVATE_KEY=0xyour_private_key\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then create a deployment script at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/deploy.ts"
      }), " that will also write the deployed address to a file called ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deployed-addresses.json"
      }), " for later use:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { config } from 'dotenv';\nimport { ethers } from 'hardhat';\nimport hre from 'hardhat';\nimport { writeFileSync } from 'fs';\nimport { AirdropToken__factory, AirdropToken } from '../typechain-types';\n\n// Load environment variables\nconfig();\n\nasync function main() {\n  console.log('🚀 Starting deployment...');\n\n  // Debug: Check environment and network\n  console.log('🔍 Checking environment...');\n  console.log('📝 PRIVATE_KEY exists:', !!process.env.PRIVATE_KEY);\n\n  // Get the deployer account\n  const signers = await ethers.getSigners();\n  console.log('👥 Number of signers:', signers.length);\n\n  console.log('Current network:', hre.network.name);\n\n  if (signers.length === 0) {\n    console.log('❌ Current network:', hre.network.name);\n    console.log('❌ Network config:', hre.network.config);\n    throw new Error('No accounts available. Please check your PRIVATE_KEY in .env file and network configuration.');\n  }\n\n  const [deployer] = signers;\n  console.log('📝 Deploying contracts with account:', deployer.address);\n  console.log('💰 Account balance:', ethers.formatEther(await ethers.provider.getBalance(deployer.address)));\n\n  // Deploy AirdropToken (ERC20)\n  console.log('\\n📄 Deploying AirdropToken...');\n  const tokenFactory = new AirdropToken__factory(deployer);\n  const token: AirdropToken = await tokenFactory.deploy('AirdropToken', 'AIRDROP');\n  await token.waitForDeployment();\n  const tokenAddress = await token.getAddress();\n  console.log('✅ AirdropToken deployed to:', tokenAddress);\n\n  // Write deployed address to file for setup-pool.ts to use\n  const deployedData = {\n    AIRDROP_ADDR: tokenAddress,\n    network: hre.network.name,\n  };\n  writeFileSync('./deployed-addresses.json', JSON.stringify(deployedData, null, 2));\n  console.log('📝 Deployed address saved to: ./deployed-addresses.json');\n\n  // Read token details\n  const [name, symbol, decimals] = await Promise.all([token.name(), token.symbol(), token.decimals()]);\n\n  const [totalSupply, deployerBalance] = await Promise.all([token.totalSupply(), token.balanceOf(deployer.address)]);\n\n  console.log(`🔎 Token: ${name} (${symbol}), Decimals: ${decimals}`);\n  console.log(`🏦 Total supply: ${ethers.formatEther(totalSupply)} ${symbol}`);\n  console.log(`👤 Deployer balance: ${ethers.formatEther(deployerBalance)} ${symbol}`);\n\n  console.log('\\n🎉 Deployment completed successfully!');\n  console.log('\\n📋 Summary:');\n  console.log(`   Token Contract: ${tokenAddress}`);\n  console.log(`   Token Name: ${name}`);\n  console.log(`   Token Symbol: ${symbol}`);\n  console.log(`   Total Supply: ${ethers.formatEther(totalSupply)} ${symbol}`);\n}\n\n// Handle errors\nmain().catch((error) => {\n  console.error('❌ Deployment failed:', error);\n  process.exitCode = 1;\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now, deploy the Airdrop Token Contract to Push Chain:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat run scripts/deploy.js --network pushDonut\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "🚀 Starting deployment...\n🔍 Checking environment...\n📝 PRIVATE_KEY exists: true\n👥 Number of signers: 1\nCurrent network: pushDonut\n📝 Deploying contracts with account: 0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9\n💰 Account balance: 9876.865290171749999941\n\n📄 Deploying AirdropToken...\n✅ AirdropToken deployed to: 0x64C91bcb3E45c29BBd75CBC344f2F495c37aDD47\n📝 Deployed address saved to: ./deployed-addresses.json\n🔎 Token: AirdropToken (AIRDROP), Decimals: 18\n🏦 Total supply: 1000000.0 AIRDROP\n👤 Deployer balance: 1000000.0 AIRDROP\n\n🎉 Deployment completed successfully!\n\n📋 Summary:\n   Token Contract: 0x64C91bcb3E45c29BBd75CBC344f2F495c37aDD47\n   Token Name: AirdropToken\n   Token Symbol: AIRDROP\n   Total Supply: 1000000.0 AIRDROP\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "part-2-minting-wpush-tokens",
      children: ["Part 2: Minting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WPUSH"
      }), " tokens"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "WPUSH"
      }), " is the wrapped version of the native Push Chain gas token (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), "). To mint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WPUSH"
      }), " tokens, you deposit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), " into the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WPUSH"
      }), " contract. This section provides a Node.js script to mint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WPUSH"
      }), " tokens programmatically."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/mint-wpush.ts"
      }), " to deposit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$PC"
      }), " into the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WPUSH"
      }), " contract and mint ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WPUSH"
      }), " tokens:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { ethers } from 'ethers';\nimport * as dotenv from 'dotenv';\n\ndotenv.config();\n\n// Contract addresses\nconst CONTRACTS = {\n  wpush: '0x2c7EbF633ffC84ea67eB6C8B232DC5f42970B818',\n} as const;\n\n// WPUSH ABI\nconst WPUSH_ABI = [\n  'function balanceOf(address) view returns (uint256)',\n  'function deposit() payable',\n  'function transfer(address,uint256) returns (bool)',\n] as const;\n\nconst PUSH_RPC_URL = 'https://evm.rpc-testnet-donut-node1.push.org/';\nconst PRIVATE_KEY: string | undefined = process.env.PRIVATE_KEY;\n\n// Configuration - modify these values as needed\nconst AMOUNT_TO_MINT = '5'; // Amount of WPUSH to mint\n\n// Types\ninterface MintResult {\n  targetAddress: string;\n  amount: string;\n  depositTx: string;\n}\n\n// Helper functions\nfunction getSigner(): ethers.Wallet {\n  if (!PRIVATE_KEY) {\n    throw new Error('PRIVATE_KEY is not configured');\n  }\n  const provider = new ethers.JsonRpcProvider(PUSH_RPC_URL);\n  return new ethers.Wallet(PRIVATE_KEY, provider);\n}\n\nfunction getWpushContract(): ethers.Contract {\n  const signer = getSigner();\n  return new ethers.Contract(CONTRACTS.wpush, WPUSH_ABI, signer);\n}\n\n// Main minting function\nasync function mintWpushToAddress(targetAddress: string, amount: string): Promise<MintResult> {\n  // Validate inputs\n  if (!ethers.isAddress(targetAddress)) {\n    throw new Error(`Invalid Ethereum address: ${targetAddress}`);\n  }\n\n  const amountWei = ethers.parseUnits(amount.toString(), 18);\n  const signer = getSigner();\n  const wpushContract = getWpushContract();\n\n  // Check balance\n  const signerBalance = await signer.provider!.getBalance(signer.address);\n  if (signerBalance < amountWei) {\n    throw new Error(\n      `Insufficient PUSH balance. Required: ${ethers.formatUnits(amountWei)}, Available: ${ethers.formatUnits(\n        signerBalance\n      )}`\n    );\n  }\n\n  // Deposit PUSH to get WPUSH\n  const depositTx = await wpushContract.deposit({ value: amountWei });\n  await depositTx.wait();\n\n  return {\n    targetAddress,\n    amount,\n    depositTx: depositTx.hash,\n  };\n}\n\n// Main function\nasync function main(): Promise<void> {\n  const TARGET_ADDRESS = getSigner().address;\n  console.log(`🚀 Minting ${AMOUNT_TO_MINT} WPUSH to ${TARGET_ADDRESS}\\n`);\n\n  try {\n    const result = await mintWpushToAddress(TARGET_ADDRESS, AMOUNT_TO_MINT);\n    console.log(`✅ Successfully minted ${AMOUNT_TO_MINT} WPUSH to ${TARGET_ADDRESS}`);\n    console.log(`📋 Deposit TX: ${result.depositTx}`);\n\n    // Check final WPUSH balance\n    const wpushContract = getWpushContract();\n    const finalBalance = await wpushContract.balanceOf(TARGET_ADDRESS);\n    const formattedBalance = ethers.formatUnits(finalBalance, 18);\n    console.log(`💰 Final WPUSH balance: ${formattedBalance} WPUSH`);\n  } catch (error) {\n    const errorMessage = error instanceof Error ? error.message : String(error);\n    console.error('❌ Error:', errorMessage);\n    process.exit(1);\n  }\n}\n\nmain().catch((error) => {\n  console.error('Unhandled error:', error);\n  process.exit(1);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx ts-node scripts/mint-wpush.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "🚀 Minting 1 WPUSH to 0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9\n\n✅ Successfully minted 1 WPUSH to 0xFd6C2fE69bE13d8bE379CCB6c9306e74193EC1A9\n📋 Deposit TX: 0xd8a62e24f9157950d46b5d99b94b693e09064147078fe7cace95093de4da8e3a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "part-3-create-airdropwpush-pool-and-add-liquidity",
      children: ["Part 3: Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP/$WPUSH"
      }), " Pool and Add Liquidity"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/create-pool.ts"
      }), " to create and initialize the pool and add liquidity via PositionManager."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install ethers bignumber.js\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { config } from 'dotenv';\nimport { ethers, JsonRpcProvider, Contract, Wallet, parseUnits } from 'ethers';\nimport { readFileSync, writeFileSync } from 'fs';\nimport BN from 'bignumber.js';\n\nconfig();\n\n// --- Constants (update if different) ---\nconst RPC = 'https://evm.rpc-testnet-donut-node1.push.org/';\nconst FACTORY = '0xF02DA51d1Ef1c593a95f5C97d7BdFc49fbaBbaA5';\nconst POSITION_MANAGER = '0xf90F08fD301190Cd34CC9eFc5A76351e95051670';\n// Use the deployed WPUSH used by other scripts in this repo\nconst WPUSH = '0x2c7EbF633ffC84ea67eB6C8B232DC5f42970B818';\n\n// Read deployed AIRDROP address from file\nlet AIRDROP: string;\ntry {\n  const deployedData = JSON.parse(readFileSync('./deployed-addresses.json', 'utf8'));\n  AIRDROP = deployedData.AIRDROP_ADDR;\n  console.log('📝 Using AIRDROP address from deployed-addresses.json:', AIRDROP);\n} catch (error) {\n  console.error('❌ Could not read deployed-addresses.json. Please run deploy.ts first.');\n  process.exit(1);\n}\n\n// --- Minimal ABIs ---\nconst ABI = {\n  factory: [\n    'function getPool(address,address,uint24) view returns (address)',\n    'function createPool(address,address,uint24) returns (address)',\n    'event PoolCreated(address indexed token0, address indexed token1, uint24 indexed fee, int24 tickSpacing, address pool)',\n  ],\n  pool: [\n    'function initialize(uint160 sqrtPriceX96)',\n    'function fee() view returns (uint24)',\n    'function token0() view returns (address)',\n    'function token1() view returns (address)',\n    'function slot0() view returns (uint160 sqrtPriceX96, int24 tick, uint16, uint16, uint16, uint8, bool)',\n  ],\n  erc20: [\n    'function symbol() view returns (string)',\n    'function decimals() view returns (uint8)',\n    'function balanceOf(address) view returns (uint256)',\n    'function allowance(address,address) view returns (uint256)',\n    'function approve(address,uint256) returns (bool)',\n  ],\n  wpush: [\n    'function deposit() payable',\n    'function balanceOf(address) view returns (uint256)',\n    'function decimals() view returns (uint8)',\n    'function symbol() view returns (string)',\n  ],\n  positionManager: [\n    'function mint((address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint256 amount0Desired, uint256 amount1Desired, uint256 amount0Min, uint256 amount1Min, address recipient, uint256 deadline)) returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)',\n  ],\n} as const;\n\n// --- Types ---\ninterface MintParams {\n  token0: string;\n  token1: string;\n  fee: number;\n  tickLower: number;\n  tickUpper: number;\n  amount0Desired: bigint;\n  amount1Desired: bigint;\n  amount0Min: bigint;\n  amount1Min: bigint;\n  recipient: string;\n  deadline: number;\n}\n\n// Precise sqrtPriceX96 calculator matching Uniswap encodePriceSqrt\nfunction sqrtPriceX96FromHumanRatio(\n  priceRatio: number | string,\n  token0Decimals: number,\n  token1Decimals: number\n): bigint {\n  BN.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });\n  const ratio = new BN(priceRatio.toString());\n  const baseUnitRatio = ratio.multipliedBy(new BN(10).pow(token1Decimals)).dividedBy(new BN(10).pow(token0Decimals));\n  const sqrtPriceTimesQ96 = baseUnitRatio\n    .sqrt()\n    .multipliedBy(new BN(2).pow(96))\n    .integerValue(BN.ROUND_FLOOR)\n    .toString();\n  return BigInt(sqrtPriceTimesQ96);\n}\n\nfunction sortTokens(a: string, b: string): [string, string] {\n  return a.toLowerCase() < b.toLowerCase() ? [a, b] : [b, a];\n}\n\nasync function safeApprove(token: Contract, spender: string, amount: bigint, owner: string): Promise<void> {\n  const current = await token.allowance(owner, spender);\n  if (current >= amount) return;\n  const tx = await token.approve(spender, ethers.MaxUint256);\n  await tx.wait();\n}\n\nasync function main(): Promise<void> {\n  if (!process.env.PRIVATE_KEY) throw new Error('PRIVATE_KEY missing');\n  if (!AIRDROP) throw new Error('AIRDROP address not found. Please run deploy.ts first.');\n\n  const provider = new JsonRpcProvider(RPC);\n  const wallet = new Wallet(process.env.PRIVATE_KEY!, provider);\n\n  const factory = new Contract(FACTORY, ABI.factory, wallet);\n  const positionManager = new Contract(POSITION_MANAGER, ABI.positionManager, wallet);\n\n  const air = new Contract(AIRDROP!, ABI.erc20, wallet);\n  const wpush = new Contract(WPUSH, ABI.wpush, wallet);\n\n  // 1) Ensure WPUSH balance (wrap 5 $PC)\n  const wrapAmount = parseUnits('5', 18);\n  const bal = await wpush.balanceOf(wallet.address);\n  if (bal < wrapAmount) {\n    console.log('Depositing $PC to get WPUSH...');\n    const needed = wrapAmount - bal;\n    const tx = await wpush.deposit({ value: needed });\n    await tx.wait();\n  }\n\n  // 2) Create or fetch pool: AIRDROP/WPUSH @ 0.3%\n  const fee: number = 3000;\n  const [token0, token1]: [string, string] = sortTokens(AIRDROP!, WPUSH);\n\n  let pool: string = await factory.getPool(token0, token1, fee);\n  if (pool === ethers.ZeroAddress) {\n    console.log('Creating pool...');\n    const tx = await factory.createPool(token0, token1, fee);\n    const receipt = await tx.wait();\n\n    // ethers v6 does not populate `events`; parse logs manually\n    let poolAddr: string | undefined;\n    for (const log of receipt.logs) {\n      if ((log as any).address?.toLowerCase() !== FACTORY.toLowerCase()) continue;\n      try {\n        const parsed = (factory as any).interface.parseLog({\n          data: (log as any).data,\n          topics: [...(log as any).topics],\n        });\n        if (parsed?.name === 'PoolCreated') {\n          poolAddr = parsed.args.pool as string;\n          break;\n        }\n      } catch {}\n    }\n\n    // Fallback: query factory for pool address after tx mined\n    pool = poolAddr ?? (await factory.getPool(token0, token1, fee));\n    if (!pool || pool === ethers.ZeroAddress) throw new Error('Pool not created');\n    console.log('Pool:', pool);\n\n    // Initialize with a target price. Example: 1 AIRDROP = 0.001 PC\n    // Convert to token1/token0 ratio depending on sort order\n    const token0Contract = new Contract(token0, ABI.erc20, wallet);\n    const token1Contract = new Contract(token1, ABI.erc20, wallet);\n\n    const dec0: number = await token0Contract.decimals();\n    const dec1: number = await token1Contract.decimals();\n\n    const inputSymbol0: string = await air.symbol();\n    const inputSymbol1: string = await wpush.symbol();\n\n    const sortedSymbol0: string = await token0Contract.symbol();\n    const sortedSymbol1: string = await token1Contract.symbol();\n\n    const humanRatio: number = 0.001; // 1 AIRDROP = 0.001 PC\n    const actualRatio: number =\n      inputSymbol0 === sortedSymbol1 && inputSymbol1 === sortedSymbol0 ? 1 / humanRatio : humanRatio;\n\n    const sqrtP = sqrtPriceX96FromHumanRatio(actualRatio, dec0, dec1);\n    const poolCtr = new Contract(pool, ABI.pool, wallet);\n    await (await poolCtr.initialize(sqrtP)).wait();\n    console.log('Pool initialized');\n  } else {\n    console.log('Pool exists:', pool);\n  }\n\n  // Persist pool address to deployed-addresses.json\n  try {\n    const path = './deployed-addresses.json';\n    const data = JSON.parse(readFileSync(path, 'utf8'));\n    (data as any).POOL_ADDR = pool;\n    writeFileSync(path, JSON.stringify(data, null, 2));\n    console.log('📝 Updated deployed-addresses.json with POOL_ADDR:', pool);\n  } catch (error) {\n    console.error('❌ Failed to update deployed-addresses.json with POOL_ADDR', error);\n  }\n\n  // 3) Add liquidity (wide range)\n  const poolCtr = new Contract(pool, ABI.pool, wallet);\n  const poolFee: number = Number(await poolCtr.fee());\n\n  const t0: string = await poolCtr.token0();\n  const t1: string = await poolCtr.token1();\n\n  const tok0 = new Contract(t0, ABI.erc20, wallet);\n  const tok1 = new Contract(t1, ABI.erc20, wallet);\n  const dec0: number = await tok0.decimals();\n  const dec1: number = await tok1.decimals();\n\n  // Target: deposit exactly 1 WPUSH and the equivalent AIRDROP by current price\n  // Get current sqrtPriceX96 and derive base-unit ratio: amount1_base / amount0_base\n  const slot0 = await poolCtr.slot0();\n  const sqrtPriceX96BN = new BN(slot0[0].toString());\n  const ratioBase = sqrtPriceX96BN.multipliedBy(sqrtPriceX96BN).dividedBy(new BN(2).pow(192)); // token1_base per token0_base\n\n  // Compute base-unit amounts for exactly 1 WPUSH\n  const isWPUSH0 = t0.toLowerCase() === WPUSH.toLowerCase();\n  const oneWPUSHBase = new BN(10).pow(isWPUSH0 ? dec0 : dec1);\n\n  let a0: bigint; // amount0Desired (base units of token0)\n  let a1: bigint; // amount1Desired (base units of token1)\n\n  if (isWPUSH0) {\n    // token0 is WPUSH: amount0 = 1 WPUSH, amount1 = ratioBase * amount0\n    const amount0Base = oneWPUSHBase;\n    const amount1Base = ratioBase.multipliedBy(amount0Base).integerValue(BN.ROUND_FLOOR);\n    a0 = BigInt(amount0Base.toFixed(0));\n    a1 = BigInt(amount1Base.toFixed(0));\n  } else {\n    // token1 is WPUSH: amount1 = 1 WPUSH, amount0 = amount1 / ratioBase\n    const amount1Base = oneWPUSHBase;\n    const amount0Base = amount1Base.dividedBy(ratioBase).integerValue(BN.ROUND_FLOOR);\n    a0 = BigInt(amount0Base.toFixed(0));\n    a1 = BigInt(amount1Base.toFixed(0));\n  }\n\n  await safeApprove(tok0, POSITION_MANAGER, a0, wallet.address);\n  await safeApprove(tok1, POSITION_MANAGER, a1, wallet.address);\n\n  const poolFeeNum: number = Number(poolFee);\n  const tickSpacing: number = poolFeeNum === 500 ? 10 : poolFeeNum === 3000 ? 60 : 200;\n  const MIN_TICK = -887272;\n  const MAX_TICK = 887272;\n  const tickLower: number = Math.ceil(MIN_TICK / tickSpacing) * tickSpacing;\n  const tickUpper: number = Math.floor(MAX_TICK / tickSpacing) * tickSpacing;\n\n  const params: MintParams = {\n    token0: t0,\n    token1: t1,\n    fee: poolFee,\n    tickLower,\n    tickUpper,\n    amount0Desired: a0,\n    amount1Desired: a1,\n    amount0Min: 0n,\n    amount1Min: 0n,\n    recipient: wallet.address,\n    deadline: Math.floor(Date.now() / 1000) + 600,\n  };\n\n  const mintTx = await positionManager.mint(params);\n  const rc = await mintTx.wait();\n  console.log('Liquidity added. Tx:', rc?.hash);\n}\n\nmain().catch((e) => {\n  console.error(e);\n  process.exit(1);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx ts-node scripts/create-pool.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "📝 Using AIRDROP address from deployed-addresses.json: 0x64C91bcb3E45c29BBd75CBC344f2F495c37aDD47\nCreating pool...\nPool: 0xEB1EA5EC91ad8917Ce33e73224087164CE573833\nPool initialized\nLiquidity added. Tx: 0x944d81a58c4fb12a4eb72a7bcffd3b121a248334bcf3972a5614a91826ffc407\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "part-4-programmatic-swap-wpush--airdrop",
      children: ["Part 4: Programmatic Swap (", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WPUSH"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/swap-airdrop.ts"
      }), " to swap ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WPUSH"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { config as loadEnv } from 'dotenv';\nimport { ethers } from 'ethers';\nimport { readFileSync } from 'fs';\n\nloadEnv();\n\n// --- Constants ---\nconst RPC = 'https://evm.rpc-testnet-donut-node1.push.org/';\nconst FACTORY = '0xF02DA51d1Ef1c593a95f5C97d7BdFc49fbaBbaA5';\nconst SWAP_ROUTER = '0x34B10a283c2331Afa2C7a6bb5FB961E01f218fa0';\n// Read deployed AIRDROP address from file\nlet AIRDROP: string;\ntry {\n  const deployedData = JSON.parse(readFileSync('./deployed-addresses.json', 'utf8'));\n  AIRDROP = deployedData.AIRDROP_ADDR;\n  console.log('📝 Using AIRDROP address from deployed-addresses.json:', AIRDROP);\n} catch (error) {\n  console.error('❌ Could not read deployed-addresses.json. Please run deploy.ts first.');\n  process.exit(1);\n}\n// Use existing WPUSH deployment\nconst WPUSH = '0x2c7EbF633ffC84ea67eB6C8B232DC5f42970B818';\n// Human amount to swap (WPUSH units)\nconst AMOUNT_IN_HUMAN = '1';\n\n// v6/v5 compatibility shims (prefer v6; fallback to v5 if present in workspace)\nconst EthersCompat = {\n  parseUnits: ((ethers as any).parseUnits ?? (ethers as any).utils?.parseUnits).bind(ethers),\n  formatUnits: ((ethers as any).formatUnits ?? (ethers as any).utils?.formatUnits).bind(ethers),\n  ZeroAddress: (ethers as any).ZeroAddress ?? (ethers as any).constants?.AddressZero,\n  MaxUint256: (ethers as any).MaxUint256 ?? (ethers as any).constants?.MaxUint256,\n  JsonRpcProvider: (ethers as any).JsonRpcProvider ?? (ethers as any).providers?.JsonRpcProvider,\n};\n\n// --- Minimal ABIs ---\nconst ABI = {\n  erc20: [\n    'function symbol() view returns (string)',\n    'function decimals() view returns (uint8)',\n    'function balanceOf(address) view returns (uint256)',\n    'function allowance(address,address) view returns (uint256)',\n    'function approve(address,uint256) returns (bool)',\n  ],\n  pool: ['function fee() view returns (uint24)'],\n  swapRouter: [\n    'function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) payable returns (uint256 amountOut)',\n  ],\n  factory: ['function getPool(address,address,uint24) view returns (address)'],\n} as const;\n\nasync function safeApprove(token: any, spender: string, amount: bigint, owner: string): Promise<void> {\n  const current = await token.allowance(owner, spender);\n  if (current >= amount) return;\n  const tx = await token.approve(spender, EthersCompat.MaxUint256);\n  await tx.wait();\n}\n\nfunction sortTokens(a: string, b: string): [string, string] {\n  return a.toLowerCase() < b.toLowerCase() ? [a, b] : [b, a];\n}\n\nasync function findPool(factory: any, tokenA: string, tokenB: string): Promise<{ address: string; fee: number }> {\n  const fees = [3000, 500, 10000];\n  const [t0, t1] = sortTokens(tokenA, tokenB);\n  for (const fee of fees) {\n    const addr: string = await factory.getPool(t0, t1, fee);\n    if (addr && addr !== EthersCompat.ZeroAddress) return { address: addr, fee };\n  }\n  throw new Error('No pool found for given token pair on common fee tiers');\n}\n\nasync function main(): Promise<void> {\n  if (!process.env.PRIVATE_KEY) throw new Error('PRIVATE_KEY missing');\n\n  if (!AIRDROP || AIRDROP === EthersCompat.ZeroAddress) {\n    throw new Error('Set AIRDROP address constant to your deployed token');\n  }\n\n  const provider = new EthersCompat.JsonRpcProvider(RPC);\n  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);\n\n  const tokenInAddress = WPUSH;\n  const tokenOutAddress = AIRDROP;\n\n  const tokenIn = new ethers.Contract(tokenInAddress, ABI.erc20, wallet);\n  const tokenOut = new ethers.Contract(tokenOutAddress, ABI.erc20, wallet);\n  const factory = new ethers.Contract(FACTORY, ABI.factory, wallet);\n\n  // Locate pool and fee automatically\n  const { address: poolAddress, fee } = await findPool(factory, tokenInAddress, tokenOutAddress);\n  const pool = new ethers.Contract(poolAddress, ABI.pool, wallet);\n  const router = new ethers.Contract(SWAP_ROUTER, ABI.swapRouter, wallet);\n\n  const [decIn, decOut, symIn, symOut] = await Promise.all([\n    tokenIn.decimals(),\n    tokenOut.decimals(),\n    tokenIn.symbol(),\n    tokenOut.symbol(),\n  ]);\n\n  const amountIn: bigint = EthersCompat.parseUnits(AMOUNT_IN_HUMAN, decIn);\n\n  const [balInBefore, balOutBefore] = await Promise.all([\n    tokenIn.balanceOf(wallet.address),\n    tokenOut.balanceOf(wallet.address),\n  ]);\n\n  console.log('🔄 PERFORMING SWAP');\n  console.log('='.repeat(50));\n  console.log('Pool       :', poolAddress);\n  console.log('Token In   :', symIn, tokenInAddress);\n  console.log('Token Out  :', symOut, tokenOutAddress);\n  console.log('Amount In  :', AMOUNT_IN_HUMAN, symIn);\n  console.log('Balances BEFORE:');\n  console.log(`  ${symIn}  :`, EthersCompat.formatUnits(balInBefore, decIn), symIn);\n  console.log(`  ${symOut} :`, EthersCompat.formatUnits(balOutBefore, decOut), symOut);\n\n  // Approve router to spend tokenIn if needed (ethers v6: use target or getAddress)\n  const routerAddr: string =\n    (router as any).target ?? (router as any).address ?? (await (router as any).getAddress?.());\n  await safeApprove(tokenIn, routerAddr, amountIn, wallet.address);\n\n  const params = {\n    tokenIn: tokenInAddress,\n    tokenOut: tokenOutAddress,\n    fee, // from located pool\n    recipient: wallet.address,\n    deadline: Math.floor(Date.now() / 1000) + 600,\n    amountIn,\n    amountOutMinimum: 0n, // for simplicity; set slippage protections as needed\n    sqrtPriceLimitX96: 0n,\n  };\n\n  console.log('Executing swap...');\n  const tx = await router.exactInputSingle(params);\n  const rc = await tx.wait();\n  console.log('Tx Hash    :', rc?.hash ?? rc?.transactionHash);\n\n  const [balInAfter, balOutAfter] = await Promise.all([\n    tokenIn.balanceOf(wallet.address),\n    tokenOut.balanceOf(wallet.address),\n  ]);\n\n  const spentIn = balInBefore > balInAfter ? balInBefore - balInAfter : 0n;\n  const recvOut = balOutAfter > balOutBefore ? balOutAfter - balOutBefore : 0n;\n\n  console.log('📊 Results');\n  console.log('Balances AFTER:');\n  console.log(`  ${symIn}  :`, EthersCompat.formatUnits(balInAfter, decIn), symIn);\n  console.log(`  ${symOut} :`, EthersCompat.formatUnits(balOutAfter, decOut), symOut);\n  console.log('Spent In   :', EthersCompat.formatUnits(spentIn, decIn), symIn);\n  console.log('Received Out:', EthersCompat.formatUnits(recvOut, decOut), symOut);\n}\n\nmain().catch((e) => {\n  console.error(e);\n  process.exit(1);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx ts-node scripts/swap-airdrop.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "📝 Using AIRDROP address from deployed-addresses.json: 0x283E86104750B03Ed527Fa049193052778326122\n🔄 PERFORMING SWAP\n==================================================\nPool       : 0xf60F15211FaE940CD5a93d00359838AdD8e4cC54\nToken In   : WPUSH 0x2c7EbF633ffC84ea67eB6C8B232DC5f42970B818\nToken Out  : AIRDROP 0x283E86104750B03Ed527Fa049193052778326122\nAmount In  : 1 WPUSH\nBalances BEFORE:\n  WPUSH  : 6.778933973512498589 WPUSH\n  AIRDROP : 999000.000000000000000001 AIRDROP\nExecuting swap...\nTx Hash    : 0x697c47985a1ada0e4ec6219a1a347a9d5702321dbf16be9973303507077e9880\n📊 Results\nBalances AFTER:\n  WPUSH  : 5.778933973512498589 WPUSH\n  AIRDROP : 999499.248873309964946982 AIRDROP\nSpent In   : 1.0 WPUSH\nReceived Out: 499.248873309964946981 AIRDROP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "part-5-building-the-frontend-ui",
      children: "Part 5: Building the Frontend UI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " To learn more about how to integrate Push Universal Wallet, please refer to the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/integrate-push-universal-wallet",
          children: "Integrate Push Universal Wallet"
        }), " page."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-setting-up-vite--react--typescript-frontend",
      children: "5.1. Setting up Vite + React + TypeScript frontend"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a new directory for the frontend and install the necessary dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm create vite@latest my-react-ts-app -- --template react-ts\ncd my-react-ts-app\nnpm install\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "52-installing-pushchainui-kit",
      children: ["5.2. Installing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@pushchain/ui-kit"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Install ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@pushchain/ui-kit"
      }), " in the frontend directory and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ethers"
      }), " that we'll use to interact with the Push Chain network:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @pushchain/ui-kit ethers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-setting-up-the-push-chain-wallet",
      children: "5.3. Setting up the Push Chain Wallet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To use the Push Universal Wallet in your application, you need to wrap your app with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), " component. This provider makes the wallet functionality available throughout your application."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here's how to set it up in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main.tsx"
      }), " file:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport './index.css';\nimport App from './App.tsx';\nimport { PushUniversalWalletProvider, PushUI } from '@pushchain/ui-kit';\n\nconst walletConfig = {\n  network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n};\n\ncreateRoot(document.getElementById('root')!).render(\n  <StrictMode>\n    <PushUniversalWalletProvider config={walletConfig}>\n      <App />\n    </PushUniversalWalletProvider>\n  </StrictMode>\n);\n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PushUniversalWalletProvider"
      }), " component requires a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "config"
      }), " prop that specifies the network configuration. In this example, we're using the Push Chain testnet."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "54-add-deployed-addressesjson-to-public",
      children: ["5.4. Add ", (0,jsx_runtime.jsx)(_components.code, {
        children: "deployed-addresses.json"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public/"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Place the deployed addresses file in your frontend's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "public"
      }), " folder so the app can read your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$AIRDROP"
      }), " at runtime:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"AIRDROP_ADDR\": \"0xYourAirdropTokenAddress\",\n  \"POOL_ADDR\": \"0xOptionalPrecreatedPoolAddress\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-creating-the-application-component",
      children: "5.5. Creating the Application Component"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open ", (0,jsx_runtime.jsx)(_components.code, {
        children: "App.tsx"
      }), " and replace it with the following implementation. This app:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrates the Push Universal Wallet"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Lets users deposit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$PC"
        }), " and mint ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$WPUSH"
        }), " by calling ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deposit()"
        }), " on the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WPUSH"
        }), " contract"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Swaps between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$WPUSH"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$AIRDROP"
        }), " using the Uniswap v3 router"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Displays balances and transaction hashes with explorer links"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useEffect, useMemo, useState } from 'react';\nimport { ethers } from 'ethers';\nimport { PushUniversalAccountButton, usePushWalletContext, usePushChainClient, PushUI } from '@pushchain/ui-kit';\n\n// Network + Contracts (copied from backend script)\nconst RPC = 'https://evm.rpc-testnet-donut-node1.push.org/';\nconst FACTORY = '0xF02DA51d1Ef1c593a95f5C97d7BdFc49fbaBbaA5';\nconst SWAP_ROUTER = '0x34B10a283c2331Afa2C7a6bb5FB961E01f218fa0';\nconst WPUSH = '0x2c7EbF633ffC84ea67eB6C8B232DC5f42970B818';\n// Airdrop token address will be loaded from /public/deployed-addresses.json at runtime\n\n// Minimal ABIs\nconst ERC20_ABI = [\n  'function symbol() view returns (string)',\n  'function decimals() view returns (uint8)',\n  'function balanceOf(address) view returns (uint256)',\n  'function allowance(address,address) view returns (uint256)',\n  'function approve(address,uint256) returns (bool)',\n];\nconst FACTORY_ABI = ['function getPool(address,address,uint24) view returns (address)'];\nconst ROUTER_ABI = [\n  'function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) payable returns (uint256 amountOut)',\n];\nconst POOL_ABI = ['function fee() view returns (uint24)'];\n\ntype SwapDirection = 'AIRDROP_TO_WPUSH' | 'WPUSH_TO_AIRDROP';\n\nconst provider = new ethers.JsonRpcProvider(RPC);\n\nfunction App() {\n  const { connectionStatus, universalAccount } = usePushWalletContext() as unknown as {\n    connectionStatus: string;\n    universalAccount: { address: string } | null;\n  };\n  const { pushChainClient } = usePushChainClient();\n\n  const [swapDirection, setSwapDirection] = useState<SwapDirection>('WPUSH_TO_AIRDROP');\n  const [amount, setAmount] = useState('');\n  const [isLoading, setIsLoading] = useState(false);\n  const [isPoolLoading, setIsPoolLoading] = useState(false);\n  const [txnHash, setTxnHash] = useState<string | null>(null);\n  const [error, setError] = useState<string | null>(null);\n  const [airdropAddr, setAirdropAddr] = useState<string | null>(null);\n  const [configError, setConfigError] = useState<string | null>(null);\n  // Mint WPUSH state\n  const [mintAmount, setMintAmount] = useState('');\n  const [isMintLoading, setIsMintLoading] = useState(false);\n  const [mintTxnHash, setMintTxnHash] = useState<string | null>(null);\n  const [mintError, setMintError] = useState<string | null>(null);\n\n  const tokenIn = useMemo(\n    () => (airdropAddr ? (swapDirection === 'AIRDROP_TO_WPUSH' ? airdropAddr : WPUSH) : null),\n    [swapDirection, airdropAddr]\n  );\n  const tokenOut = useMemo(\n    () => (airdropAddr ? (swapDirection === 'AIRDROP_TO_WPUSH' ? WPUSH : airdropAddr) : null),\n    [swapDirection, airdropAddr]\n  );\n\n  const connectedAddress = universalAccount?.address ?? null;\n\n  const [decIn, setDecIn] = useState<number>(18);\n  const [decOut, setDecOut] = useState<number>(18);\n  const [symIn, setSymIn] = useState<string>('');\n  const [symOut, setSymOut] = useState<string>('');\n  const [poolFee, setPoolFee] = useState<number | null>(null);\n  const [poolAddr, setPoolAddr] = useState<string | null>(null);\n  const [balAirdrop, setBalAirdrop] = useState<string>('0');\n  const [balWpush, setBalWpush] = useState<string>('0');\n\n  // Pretty print large decimal strings to at most 4 decimals\n  const formatBalance4 = (value: string) => {\n    if (!value) return '0';\n    const [whole, frac = ''] = String(value).split('.');\n    const wholePretty = Number(whole || '0').toLocaleString();\n    const trimmed = frac.slice(0, 4).replace(/0+$/, '');\n    return trimmed ? `${wholePretty}.${trimmed}` : wholePretty;\n  };\n\n  // Inline theme + reusable styles\n  const colors = {\n    text: '#111827',\n    muted: '#6b7280',\n    primary: '#3b82f6',\n    primary700: '#2563eb',\n    border: '#e5e7eb',\n    danger: '#ef4444',\n  } as const;\n\n  const styles = {\n    page: {\n      position: 'fixed',\n      inset: 0,\n      display: 'grid',\n      placeItems: 'center',\n      padding: '2rem',\n      background: '#ffffff',\n    },\n    container: {\n      maxWidth: 560,\n      margin: '0 auto',\n      padding: '1rem',\n      textAlign: 'left' as const,\n      color: colors.text,\n      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',\n      lineHeight: 1.5,\n    },\n    title: { fontSize: '1.6rem', fontWeight: 700, margin: '0 0 0.5rem 0' },\n    stackMd: { display: 'grid', gap: 12 },\n    stackSm: { display: 'grid', gap: 8 },\n    label: { fontSize: 12, color: colors.muted },\n    input: {\n      width: '100%',\n      padding: '10px 12px',\n      boxSizing: 'border-box' as const,\n      borderRadius: 10,\n      border: `1px solid ${colors.border}`,\n      background: '#ffffff',\n      color: colors.text,\n      outline: 'none',\n    },\n    button: {\n      display: 'inline-flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      padding: '10px 16px',\n      borderRadius: 10,\n      border: `1px solid ${colors.border}`,\n      background: '#ffffff',\n      color: colors.text,\n      cursor: 'pointer',\n      transition: 'all 120ms ease-out',\n    },\n    radioRow: { display: 'flex', gap: 12 },\n    segmented: {\n      display: 'inline-flex',\n      gap: 0,\n      borderRadius: 10,\n      border: `1px solid ${colors.border}`,\n      overflow: 'hidden',\n      background: '#f9fafb',\n    },\n    segmentBtn: {\n      padding: '8px 14px',\n      border: 'none',\n      background: 'transparent',\n      color: colors.muted,\n      fontSize: 13,\n      fontWeight: 600,\n      cursor: 'pointer',\n    },\n    muted: { fontSize: 12, color: colors.muted },\n    hashBox: { marginTop: 8, wordBreak: 'break-all' as const },\n    error: { color: colors.danger },\n    mintBox: { border: `1px solid ${colors.border}`, borderRadius: 12, padding: 12, background: 'transparent' },\n  } as const;\n\n  // Load Airdrop address from /public/deployed-addresses.json\n  useEffect(() => {\n    (async () => {\n      try {\n        setConfigError(null);\n        const res = await fetch('/deployed-addresses.json');\n        const json: { AIRDROP_ADDR?: string; POOL_ADDR?: string } = await res.json();\n        const addr = json?.AIRDROP_ADDR;\n        setAirdropAddr(addr && addr.startsWith('0x') ? addr : null);\n        const paddr = json?.POOL_ADDR;\n        setPoolAddr(paddr && paddr.startsWith('0x') ? paddr : null);\n      } catch {\n        setConfigError('Failed to load deployed-addresses.json');\n      }\n    })();\n  }, []);\n\n  useEffect(() => {\n    let mounted = true;\n    async function readTokenMeta(addr: string) {\n      const c = new ethers.Contract(addr, ERC20_ABI, provider);\n      const [dec, sym] = await Promise.all([c.decimals(), c.symbol()]);\n      return { dec: Number(dec), sym: String(sym) };\n    }\n    async function findPool(a: string, b: string) {\n      const [t0, t1] = a.toLowerCase() < b.toLowerCase() ? [a, b] : [b, a];\n      const factory = new ethers.Contract(FACTORY, FACTORY_ABI, provider);\n      const fees = [3000, 500, 10000];\n      for (const fee of fees) {\n        const addr: string = await factory.getPool(t0, t1, fee);\n        if (addr && addr !== ethers.ZeroAddress) return { addr, fee };\n      }\n      return { addr: null, fee: null };\n    }\n    (async () => {\n      try {\n        setError(null);\n        if (!tokenIn || !tokenOut) return;\n        setIsPoolLoading(true);\n        const [metaIn, metaOut] = await Promise.all([readTokenMeta(tokenIn), readTokenMeta(tokenOut)]);\n        let pool: { addr: string | null; fee: number | null } = { addr: null, fee: null };\n        if (poolAddr && poolAddr !== ethers.ZeroAddress) {\n          try {\n            const pc = new ethers.Contract(poolAddr, POOL_ABI, provider);\n            const fee: number = Number(await pc.fee());\n            pool = { addr: poolAddr, fee };\n          } catch {\n            pool = { addr: poolAddr, fee: null };\n          }\n        } else {\n          pool = await findPool(tokenIn, tokenOut);\n        }\n        if (!mounted) return;\n        setDecIn(metaIn.dec);\n        setDecOut(metaOut.dec);\n        setSymIn(metaIn.sym);\n        setSymOut(metaOut.sym);\n        setPoolAddr(pool.addr);\n        setPoolFee(pool.fee);\n        setIsPoolLoading(false);\n      } catch (e: unknown) {\n        if (!mounted) return;\n        const message = e instanceof Error ? e.message : String(e);\n        setError(message || 'Failed to load token data');\n        setIsPoolLoading(false);\n      }\n    })();\n    return () => {\n      mounted = false;\n    };\n  }, [tokenIn, tokenOut, poolAddr]);\n\n  async function handleSwap() {\n    try {\n      setError(null);\n      setTxnHash(null);\n      if (!pushChainClient) throw new Error('Wallet not connected');\n      if (!amount) throw new Error('Enter amount');\n      if (!poolFee || !poolAddr) throw new Error('No pool available for this pair');\n      if (!tokenIn || !tokenOut) throw new Error('Tokens not ready');\n\n      const recipient = pushChainClient.universal.account; // Source chain account that is mapped to the execution account\n      console.log('recipient', recipient);\n\n      if (!recipient) throw new Error('Could not resolve connected address');\n\n      const amountIn = ethers.parseUnits(amount, decIn);\n\n      // Approve router for tokenIn (use MaxUint to minimize subsequent approvals)\n      const approveIface = new ethers.Interface(ERC20_ABI);\n      const approveData = approveIface.encodeFunctionData('approve', [SWAP_ROUTER, ethers.MaxUint256]);\n      const approveTx = await pushChainClient.universal.sendTransaction({\n        to: tokenIn as `0x${string}`,\n        data: approveData as `0x${string}`,\n        value: 0n,\n      });\n      // Optional: wait a moment for sequencing; wallet/provider may not expose wait here\n      console.log('approve tx:', approveTx?.hash);\n\n      // exactInputSingle params\n      const params = {\n        tokenIn,\n        tokenOut,\n        fee: poolFee,\n        recipient,\n        deadline: Math.floor(Date.now() / 1000) + 600,\n        amountIn,\n        amountOutMinimum: 0n,\n        sqrtPriceLimitX96: 0n,\n      };\n\n      const routerIface = new ethers.Interface(ROUTER_ABI);\n      const data = routerIface.encodeFunctionData('exactInputSingle', [params]);\n      const swapTx = await pushChainClient.universal.sendTransaction({\n        to: SWAP_ROUTER,\n        data: data as `0x${string}`,\n        value: 0n,\n      });\n      setTxnHash(swapTx?.hash ?? null);\n    } catch (e: unknown) {\n      const message = e instanceof Error ? e.message : String(e);\n      setError(message || 'Swap failed');\n    } finally {\n      setIsLoading(false);\n    }\n  }\n\n  async function handleMintWpush() {\n    try {\n      setMintError(null);\n      setMintTxnHash(null);\n      if (!pushChainClient) throw new Error('Wallet not connected');\n      if (!mintAmount) throw new Error('Enter amount');\n\n      // We will call WPUSH.deposit() with value in PC (18 decimals)\n      const valueWei = ethers.parseUnits(mintAmount, 18);\n      const wpushIface = new ethers.Interface(['function deposit() payable']);\n      const data = wpushIface.encodeFunctionData('deposit');\n\n      const tx = await pushChainClient.universal.sendTransaction({\n        to: WPUSH,\n        data: data as `0x${string}`,\n        value: valueWei,\n      });\n      setMintTxnHash(tx?.hash ?? null);\n    } catch (e: unknown) {\n      const message = e instanceof Error ? e.message : String(e);\n      setMintError(message || 'Mint failed');\n    } finally {\n      setIsMintLoading(false);\n    }\n  }\n\n  const isConnected = connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED;\n  const canSwap = isConnected && !isLoading && !!amount && !!poolFee && !!connectedAddress && !!tokenIn && !!tokenOut;\n\n  // Balances\n  useEffect(() => {\n    let mounted = true;\n    // const addr = connectedAddress;\n    if (!pushChainClient) return;\n    const addr = pushChainClient.universal.account; // Source chain account that is mapped to the execution account\n    if (!addr) {\n      console.log('No connected address');\n      setBalAirdrop('0');\n      setBalWpush('0');\n      return;\n    }\n    (async () => {\n      try {\n        console.log('Loading balances');\n        if (!airdropAddr) return;\n        console.log('Hello World', addr);\n        console.log('Airdrop address', airdropAddr);\n        const [cAirdrop, cWpush] = [\n          new ethers.Contract(airdropAddr, ERC20_ABI, provider),\n          new ethers.Contract(WPUSH, ERC20_ABI, provider),\n        ];\n        const [rawA, rawW] = await Promise.all([cAirdrop.balanceOf(addr), cWpush.balanceOf(addr)]);\n        console.log('Balances loaded', rawA, rawW);\n        const decA = tokenIn === airdropAddr ? decIn : decOut;\n        const decW = tokenIn === WPUSH ? decIn : decOut;\n        const fA = ethers.formatUnits(rawA, decA);\n        const fW = ethers.formatUnits(rawW, decW);\n        if (!mounted) return;\n        setBalAirdrop(fA);\n        setBalWpush(fW);\n      } catch {\n        // ignore balance load errors\n      }\n    })();\n    return () => {\n      mounted = false;\n    };\n  }, [connectionStatus, connectedAddress, tokenIn, decIn, decOut, txnHash, airdropAddr, mintTxnHash, pushChainClient]);\n\n  return (\n    <div style={styles.page}>\n      <div style={styles.container}>\n        <h2 style={styles.title}>Token Swap</h2>\n        <PushUniversalAccountButton />\n\n        {isConnected && (\n          <div style={{ ...styles.stackMd, marginTop: 12 }}>\n            {configError && <div style={styles.error}>{configError}</div>}\n            {/* Mint WPUSH Section (no background) */}\n            <div style={{ ...styles.stackSm, ...styles.mintBox }}>\n              <div style={{ fontWeight: 600 }}>Mint WPUSH</div>\n              <div style={styles.label}>Amount (PC)</div>\n              <input\n                style={styles.input}\n                type=\"number\"\n                min=\"0\"\n                step=\"any\"\n                value={mintAmount}\n                onChange={(e) => setMintAmount(e.target.value)}\n                placeholder=\"0.0 PC\"\n              />\n              <div>\n                <button\n                  style={{\n                    ...styles.button,\n                    borderColor: colors.primary,\n                    opacity: !isConnected || isMintLoading || !mintAmount ? 0.5 : 1,\n                    cursor: !isConnected || isMintLoading || !mintAmount ? 'not-allowed' : 'pointer',\n                  }}\n                  disabled={!isConnected || isMintLoading || !mintAmount}\n                  onClick={() => {\n                    setIsMintLoading(true);\n                    handleMintWpush();\n                  }}\n                >\n                  {isMintLoading ? 'Minting...' : 'Mint WPUSH'}\n                </button>\n              </div>\n              {mintTxnHash && (\n                <div style={styles.hashBox}>\n                  <div>Mint Txn: {mintTxnHash}</div>\n                  <a\n                    href={pushChainClient?.explorer?.getTransactionUrl?.(mintTxnHash) || '#'}\n                    target=\"_blank\"\n                    rel=\"noopener noreferrer\"\n                  >\n                    View in Explorer\n                  </a>\n                </div>\n              )}\n              {mintError && <div style={styles.error}>{mintError}</div>}\n            </div>\n\n            <div style={styles.segmented} role=\"group\" aria-label=\"Swap direction\">\n              <button\n                type=\"button\"\n                aria-pressed={swapDirection === 'WPUSH_TO_AIRDROP'}\n                onClick={() => setSwapDirection('WPUSH_TO_AIRDROP')}\n                style={{\n                  ...styles.segmentBtn,\n                  background: swapDirection === 'WPUSH_TO_AIRDROP' ? colors.primary : 'transparent',\n                  color: swapDirection === 'WPUSH_TO_AIRDROP' ? '#ffffff' : colors.muted,\n                }}\n              >\n                Swap WPush → Airdrop\n              </button>\n              <button\n                type=\"button\"\n                aria-pressed={swapDirection === 'AIRDROP_TO_WPUSH'}\n                onClick={() => setSwapDirection('AIRDROP_TO_WPUSH')}\n                style={{\n                  ...styles.segmentBtn,\n                  borderLeft: `1px solid ${colors.border}`,\n                  background: swapDirection === 'AIRDROP_TO_WPUSH' ? colors.primary : 'transparent',\n                  color: swapDirection === 'AIRDROP_TO_WPUSH' ? '#ffffff' : colors.muted,\n                }}\n              >\n                Swap Airdrop → WPush\n              </button>\n            </div>\n\n            <div style={styles.stackSm}>\n              <div style={{ ...styles.muted, display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>\n                <span>Balances</span>\n                <span>—</span>\n                <span>Airdrop: {formatBalance4(balAirdrop)}</span>\n                <span>|</span>\n                <span>WPush: {formatBalance4(balWpush)}</span>\n              </div>\n              <div style={styles.label}>Amount ({symIn || 'Token'})</div>\n              <input\n                style={styles.input}\n                type=\"number\"\n                min=\"0\"\n                step=\"any\"\n                value={amount}\n                onChange={(e) => setAmount(e.target.value)}\n                placeholder={`0.0 ${symIn || ''}`}\n              />\n            </div>\n\n            <div style={styles.muted}>\n              {isPoolLoading ? (\n                <>Checking for pool...</>\n              ) : poolFee && poolAddr ? null : tokenIn && tokenOut ? (\n                <>No pool found for this pair on common fee tiers</>\n              ) : null}\n            </div>\n\n            <button\n              style={{\n                ...styles.button,\n                borderColor: colors.primary,\n                opacity: !canSwap ? 0.5 : 1,\n                cursor: !canSwap ? 'not-allowed' : 'pointer',\n              }}\n              disabled={!canSwap}\n              onClick={() => {\n                setIsLoading(true);\n                handleSwap();\n              }}\n            >\n              {isLoading ? 'Swapping...' : `Swap ${symIn || 'Token'} → ${symOut || 'Token'}`}\n            </button>\n\n            {txnHash && (\n              <div style={styles.hashBox}>\n                <div>Txn Hash: {txnHash}</div>\n                <a\n                  href={pushChainClient?.explorer?.getTransactionUrl?.(txnHash) || '#'}\n                  target=\"_blank\"\n                  rel=\"noopener noreferrer\"\n                >\n                  View in Explorer\n                </a>\n              </div>\n            )}\n\n            {error && <div style={styles.error}>{error}</div>}\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Congratulations! 🎉 You've successfully built a universal ERC-20 token system on Push Chain that enables seamless cross-chain token swaps. Now you can use these tokens for airdrop swaps on Push Swap, allowing users to exchange their airdropped tokens across different blockchain networks through Push Chain's universal infrastructure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-airdrop",
          children: "Universal Airdrop Tutorial"
        }), ": Combine this with airdrop functionality for cross-chain token distribution"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/integrate-push-universal-wallet",
          children: "Push Universal Wallet Integration"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://donut.push.network/",
          children: "Push Chain Explorer"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ready to swap those tokens? 🚀"
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

/***/ 411470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(823104);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(956347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(300205);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(757485);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(231682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(70679);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp){const{props}=comp;return!!props&&typeof props==='object'&&'value'in props;}function sanitizeTabsChildren(children){var _React$Children$toArr,_React$Children$toArr2;return(_React$Children$toArr=(_React$Children$toArr2=react.Children.toArray(children).filter(child=>child!=='\n').map(child=>{if(!child||/*#__PURE__*/(0,react.isValidElement)(child)&&isTabItem(child)){return child;}// child.type.name will give non-sensical values in prod because of
// minification, but we assume it won't throw in prod.
throw new Error("Docusaurus error: Bad <Tabs> child <"+(// @ts-expect-error: guarding against unexpected cases
typeof child.type==='string'?child.type:child.type.name)+">: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique \"value\" prop.");}))===null||_React$Children$toArr2===void 0?void 0:_React$Children$toArr2.filter(Boolean))!==null&&_React$Children$toArr!==void 0?_React$Children$toArr:[];}function extractChildrenTabValues(children){return sanitizeTabsChildren(children).map(_ref=>{let{props:{value,label,attributes,default:isDefault}}=_ref;return{value,label,attributes,default:isDefault};});}function ensureNoDuplicateValue(values){const dup=(0,jsUtils/* duplicates */.XI)(values,(a,b)=>a.value===b.value);if(dup.length>0){throw new Error("Docusaurus error: Duplicate values \""+dup.map(a=>a.value).join(', ')+"\" found in <Tabs>. Every value needs to be unique.");}}function useTabValues(props){const{values:valuesProp,children}=props;return (0,react.useMemo)(()=>{const values=valuesProp!==null&&valuesProp!==void 0?valuesProp:extractChildrenTabValues(children);ensureNoDuplicateValue(values);return values;},[valuesProp,children]);}function isValidValue(_ref2){let{value,tabValues}=_ref2;return tabValues.some(a=>a.value===value);}function getInitialStateValue(_ref3){var _tabValues$find;let{defaultValue,tabValues}=_ref3;if(tabValues.length===0){throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');}if(defaultValue){// Warn user about passing incorrect defaultValue as prop.
if(!isValidValue({value:defaultValue,tabValues})){throw new Error("Docusaurus error: The <Tabs> has a defaultValue \""+defaultValue+"\" but none of its children has the corresponding value. Available values are: "+tabValues.map(a=>a.value).join(', ')+". If you intend to show no default tab, use defaultValue={null} instead.");}return defaultValue;}const defaultTabValue=(_tabValues$find=tabValues.find(tabValue=>tabValue.default))!==null&&_tabValues$find!==void 0?_tabValues$find:tabValues[0];if(!defaultTabValue){throw new Error('Unexpected error: 0 tabValues');}return defaultTabValue.value;}function getStorageKey(groupId){if(!groupId){return null;}return"docusaurus.tab."+groupId;}function getQueryStringKey(_ref4){let{queryString=false,groupId}=_ref4;if(typeof queryString==='string'){return queryString;}if(queryString===false){return null;}if(queryString===true&&!groupId){throw new Error("Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString=\"my-search-param\".");}return groupId!==null&&groupId!==void 0?groupId:null;}function useTabQueryString(_ref5){let{queryString=false,groupId}=_ref5;const history=(0,react_router/* useHistory */.W6)();const key=getQueryStringKey({queryString,groupId});const value=(0,historyUtils/* useQueryStringValue */.aZ)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}const searchParams=new URLSearchParams(history.location.search);searchParams.set(key,newValue);history.replace(Object.assign({},history.location,{search:searchParams.toString()}));},[key,history]);return[value,setValue];}function useTabStorage(_ref6){let{groupId}=_ref6;const key=getStorageKey(groupId);const[value,storageSlot]=(0,storageUtils/* useStorageSlot */.Dv)(key);const setValue=(0,react.useCallback)(newValue=>{if(!key){return;// no-op
}storageSlot.set(newValue);},[key,storageSlot]);return[value,setValue];}function useTabs(props){const{defaultValue,queryString=false,groupId}=props;const tabValues=useTabValues(props);const[selectedValue,setSelectedValue]=(0,react.useState)(()=>getInitialStateValue({defaultValue,tabValues}));const[queryStringValue,setQueryString]=useTabQueryString({queryString,groupId});const[storageValue,setStorageValue]=useTabStorage({groupId});// We sync valid querystring/storage value to state on change + hydration
const valueToSync=(()=>{const value=queryStringValue!==null&&queryStringValue!==void 0?queryStringValue:storageValue;if(!isValidValue({value,tabValues})){return null;}return value;})();// Sync in a layout/sync effect is important, for useScrollPositionBlocker
// See https://github.com/facebook/docusaurus/issues/8625
(0,useIsomorphicLayoutEffect/* default */.A)(()=>{if(valueToSync){setSelectedValue(valueToSync);}},[valueToSync]);const selectValue=(0,react.useCallback)(newValue=>{if(!isValidValue({value:newValue,tabValues})){throw new Error("Can't select invalid tab value="+newValue);}setSelectedValue(newValue);setQueryString(newValue);setStorageValue(newValue);},[setQueryString,setStorageValue,tabValues]);return{selectedValue,selectValue,tabValues};}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(992303);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TabList(_ref){let{className,block,selectedValue,selectValue,tabValues}=_ref;const tabRefs=[];const{blockElementScrollPositionUntilNextRender}=(0,scrollUtils/* useScrollPositionBlocker */.a_)();const handleTabChange=event=>{const newTab=event.currentTarget;const newTabIndex=tabRefs.indexOf(newTab);const newTabValue=tabValues[newTabIndex].value;if(newTabValue!==selectedValue){blockElementScrollPositionUntilNextRender(newTab);selectValue(newTabValue);}};const handleKeydown=event=>{var _focusElement;let focusElement=null;switch(event.key){case'Enter':{handleTabChange(event);break;}case'ArrowRight':{var _tabRefs$nextTab;const nextTab=tabRefs.indexOf(event.currentTarget)+1;focusElement=(_tabRefs$nextTab=tabRefs[nextTab])!==null&&_tabRefs$nextTab!==void 0?_tabRefs$nextTab:tabRefs[0];break;}case'ArrowLeft':{var _tabRefs$prevTab;const prevTab=tabRefs.indexOf(event.currentTarget)-1;focusElement=(_tabRefs$prevTab=tabRefs[prevTab])!==null&&_tabRefs$prevTab!==void 0?_tabRefs$prevTab:tabRefs[tabRefs.length-1];break;}default:break;}(_focusElement=focusElement)===null||_focusElement===void 0||_focusElement.focus();};return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,clsx/* default */.A)('tabs',{'tabs--block':block},className),children:tabValues.map(_ref2=>{let{value,label,attributes}=_ref2;return/*#__PURE__*/(0,jsx_runtime.jsx)("li",Object.assign({// TODO extract TabListItem
role:"tab",tabIndex:selectedValue===value?0:-1,"aria-selected":selectedValue===value,ref:tabControl=>{tabRefs.push(tabControl);},onKeyDown:handleKeydown,onClick:handleTabChange},attributes,{className:(0,clsx/* default */.A)('tabs__item',styles_module.tabItem,attributes===null||attributes===void 0?void 0:attributes.className,{'tabs__item--active':selectedValue===value}),children:label!==null&&label!==void 0?label:value}),value);})});}function TabContent(_ref3){let{lazy,children,selectedValue}=_ref3;const childTabs=(Array.isArray(children)?children:[children]).filter(Boolean);if(lazy){const selectedTabItem=childTabs.find(tabItem=>tabItem.props.value===selectedValue);if(!selectedTabItem){// fail-safe or fail-fast? not sure what's best here
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:(0,clsx/* default */.A)('margin-top--md',selectedTabItem.props.className)});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,Object.assign({},tabs,props)),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,Object.assign({},tabs,props))]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,Object.assign({},props,{children:sanitizeTabsChildren(props.children)}),String(isBrowser));}

/***/ }),

/***/ 602999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IFrameModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
function IFrameModal(_ref){let{url,buttonTitle='Load Interactive Demo',maxHeight='600px'}=_ref;const[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const[isIframeVisible,setIsIframeVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const iframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);// Use proxy for push explorer URLs to bypass CSP
const getProxiedUrl=originalUrl=>{if(originalUrl.includes('push.network')||originalUrl.includes('donut.push.network')){// Extract the base URL from the original URL to construct the proxy URL
const urlObj=new URL(originalUrl);const baseUrl=urlObj.protocol+"//"+urlObj.host;// Use the push explorer's proxy endpoint if it's publicly accessible
return baseUrl+"/node-api/iframe-proxy?url="+encodeURIComponent(originalUrl);}return originalUrl;};const proxiedUrl=getProxiedUrl(url);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsLoading(true);},[url]);const handleIframeLoad=()=>{setIsLoading(false);};const handleRefresh=()=>{setIsLoading(true);if(iframeRef.current){iframeRef.current.src=proxiedUrl;}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:'flex',flexDirection:'column',width:'100%',height:isIframeVisible?'80vh':'auto',maxHeight,borderRadius:'12px',overflow:'hidden',margin:'20px 0'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n        @keyframes spin {\n          to { transform: rotate(360deg); }\n        }\n        .loading-spinner {\n          width: 40px;\n          height: 40px;\n          border: 4px solid #f3f3f3;\n          border-top: 4px solid #D548EC;\n          border-radius: 50%;\n          animation: spin 1s linear infinite;\n        }\n      "}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:'flex',alignItems:'center',gap:'10px',padding:'10px',backgroundColor:'var(--ifm-playground-header-bg)'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{flex:1,padding:'8px 12px',backgroundColor:'var(--ifm-navbar-search-bg)',borderRadius:'12px',color:'var(--ifm-color-title-text-color)',fontSize:'0.875rem',fontFamily:'Fira Code',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'},children:url}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:handleRefresh,style:{display:'flex',alignItems:'center',justifyContent:'center',width:'32px',height:'32px',padding:'6px',borderRadius:'12px',cursor:'pointer',transition:'all 0.2s ease',border:'var(--ifm-playground-button-border)',backgroundColor:'var(--ifm-table-body-bg)'},onMouseEnter:e=>{e.currentTarget.style.opacity='0.8';},onMouseLeave:e=>{e.currentTarget.style.opacity='1';},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M14 8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.8 0 3.4.8 4.5 2h-2.5v1h4V1h-1v2.1C11.9 1.8 10 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7h-1z",fill:"var(--ifm-iframe-icon-color)",opacity:"1"})})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:'relative',flex:1,backgroundColor:'var(--ifm-playground-header-bg)',borderRadius:'0 0 12px 12px'},children:!isIframeVisible?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',padding:'40px 20px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>setIsIframeVisible(true),style:{padding:'12px 24px',fontSize:'0.875rem',fontWeight:'600',backgroundColor:'#D548EC',color:'#fff',border:'none',borderRadius:'12px',cursor:'pointer',transition:'opacity 0.2s ease',opacity:0.9,fontFamily:'DM Sans'},onMouseEnter:e=>{e.currentTarget.style.opacity='1';},onMouseLeave:e=>{e.currentTarget.style.opacity='0.9';},children:buttonTitle})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[isLoading&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)',zIndex:1},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"loading-spinner"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{ref:iframeRef,src:proxiedUrl,title:"IFrame Content",onLoad:handleIframeLoad,sandbox:"allow-scripts allow-same-origin allow-forms allow-popups",style:{width:'100%',height:'100%',border:'none'}})]})})]});}

/***/ })

}]);