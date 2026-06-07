"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[67647],{

/***/ 982872
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_02_setup_02_smart_contract_environment_03_configure_hardhat_mdx_c59_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-02-setup-02-smart-contract-environment-03-configure-hardhat-mdx-c59.json
const site_docs_chain_02_setup_02_smart_contract_environment_03_configure_hardhat_mdx_c59_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/setup/smart-contract-environment/docs-chain-setup-smart-contract-environment-configure-hardhat","title":"Configure Hardhat","description":"Configure Hardhat | Smart Contract Environment | Tooling | Setup | Push Chain Docs","source":"@site/docs/chain/02-setup/02-smart-contract-environment/03-Configure-Hardhat.mdx","sourceDirName":"chain/02-setup/02-smart-contract-environment","slug":"/chain/setup/smart-contract-environment/configure-hardhat","permalink":"/push-chain-website/pr-preview/pr-1227/docs/chain/setup/smart-contract-environment/configure-hardhat","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/02-setup/02-smart-contract-environment/03-Configure-Hardhat.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"docs-chain-setup-smart-contract-environment-configure-hardhat","title":"Configure Hardhat","hide_title":false,"slug":"./configure-hardhat","displayed_sidebar":"pushChainSidebar","sidebar_position":3,"image":"/assets/docs/previews/docs_chain_setup_smart_contract_environment--configure_hardhat.png"},"sidebar":"pushChainSidebar","previous":{"title":"Configure Foundry","permalink":"/push-chain-website/pr-preview/pr-1227/docs/chain/setup/smart-contract-environment/configure-foundry"},"next":{"title":"Chain Configuration","permalink":"/push-chain-website/pr-preview/pr-1227/docs/chain/setup/chain-config"}}');
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
// EXTERNAL MODULE: ./src/components/Static/PushChainSpecs.tsx
var PushChainSpecs = __webpack_require__(162334);
;// ./docs/chain/02-setup/02-smart-contract-environment/03-Configure-Hardhat.mdx


const frontMatter = {
	id: 'docs-chain-setup-smart-contract-environment-configure-hardhat',
	title: 'Configure Hardhat',
	hide_title: false,
	slug: './configure-hardhat',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_chain_setup_smart_contract_environment--configure_hardhat.png'
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "Deploy Smart Contracts with Hardhat",
  "id": "deploy-smart-contracts-with-hardhat",
  "level": 2
}, {
  "value": "1. Install Hardhat",
  "id": "1-install-hardhat",
  "level": 3
}, {
  "value": "2. Create a New Project",
  "id": "2-create-a-new-project",
  "level": 3
}, {
  "value": "3. Configure for Push Chain",
  "id": "3-configure-for-push-chain",
  "level": 3
}, {
  "value": "4. Write a Smart Contract",
  "id": "4-write-a-smart-contract",
  "level": 3
}, {
  "value": "5. Compile the Contract",
  "id": "5-compile-the-contract",
  "level": 3
}, {
  "value": "6. Deploy to Push Chain",
  "id": "6-deploy-to-push-chain",
  "level": 3
}, {
  "value": "6.1. Set up your deployer account",
  "id": "61-set-up-your-deployer-account",
  "level": 4
}, {
  "value": "6.2. Get testnet tokens",
  "id": "62-get-testnet-tokens",
  "level": 4
}, {
  "value": "6.3. Deploy your contract",
  "id": "63-deploy-your-contract",
  "level": 4
}, {
  "value": "7. Verify the Contract",
  "id": "7-verify-the-contract",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
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
    h4: "h4",
    li: "li",
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
        children: "Configure Hardhat | Smart Contract Environment | Tooling | Setup | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hardhat is another popular development environment for Ethereum software, designed for professionals that need a flexible and extensible tool. Code with vibes and dawn your builder hat with Hardhat."
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Push Chain Specs",
      children: (0,jsx_runtime.jsx)(PushChainSpecs/* default */.A, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-smart-contracts-with-hardhat",
      children: "Deploy Smart Contracts with Hardhat"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-install-hardhat",
      children: "1. Install Hardhat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, create a new directory for your project and initialize it:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mkdir myToken\ncd myToken\nnpm init -y\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install Hardhat and required dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install --save-dev \\\n  hardhat \\\n  @nomicfoundation/hardhat-toolbox \\\n  @nomicfoundation/hardhat-verify \\\n  dotenv \\\n  @openzeppelin/contracts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This installs:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardhat core framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardhat toolbox with common plugins"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardhat verify for contract verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dotenv for environment variable management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenZeppelin contracts library"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-create-a-new-project",
      children: "2. Create a New Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initialize a new Hardhat project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat init\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Select \"Create a JavaScript project\" when prompted. This will create a basic project structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "myToken/\n├── contracts/\n├── scripts/\n├── test/\n├── hardhat.config.js\n├── package.json\n└── node_modules/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-configure-for-push-chain",
      children: "3. Configure for Push Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Update your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hardhat.config.js"
      }), " file to include Push Chain testnet configuration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "require('@nomicfoundation/hardhat-toolbox');\nrequire('@nomicfoundation/hardhat-verify');\nrequire('dotenv').config();\n\n/** @type import('hardhat/config').HardhatUserConfig */\nmodule.exports = {\n  solidity: {\n    version: '0.8.22',\n    settings: {\n      optimizer: {\n        enabled: true,\n        runs: 200,\n      },\n    },\n  },\n  networks: {\n    push_testnet: {\n      url: 'https://evm.donut.rpc.push.org/',\n      chainId: 42101,\n      accounts: [process.env.PRIVATE_KEY],\n    },\n  },\n  etherscan: {\n    apiKey: {\n      // Blockscout doesn't require an actual API key, any non-empty string will work\n      push_testnet: 'blockscout',\n    },\n    customChains: [\n      {\n        network: 'push_testnet',\n        chainId: 42101,\n        urls: {\n          apiURL: 'https://donut.push.network/api/v2/verifyContract',\n          browserURL: 'https://donut.push.network/',\n        },\n      },\n    ],\n  },\n  sourcify: {\n    // Disable sourcify for manual verification\n    enabled: false,\n  },\n  paths: {\n    sources: './contracts',\n    tests: './test',\n    cache: './cache',\n    artifacts: './artifacts',\n  },\n  mocha: {\n    timeout: 40000,\n  },\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This configuration includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solidity compiler version and optimization settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push Chain testnet RPC endpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Blockscout integration for contract verification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project structure paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test configuration"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-write-a-smart-contract",
      children: "4. Write a Smart Contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "contracts/MyToken.sol"
      }), " with this ERC20 token implementation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity 0.8.22;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\n/**\n * @title MyToken\n * @dev A simple ERC20 token for demonstration on PUSH CHAIN\n */\ncontract MyToken is ERC20, Ownable {\n  constructor() ERC20(\"MyToken\", \"MT\") Ownable(msg.sender) {\n    _mint(msg.sender, 1000 * 10**18);\n  }\n\n  /**\n    * @dev Returns the number of decimals used to get its user representation.\n    */\n  function decimals() public view virtual override returns (uint8) {\n    return 18;\n  }\n\n  /**\n    * @dev Allows the owner to mint new tokens\n    * @param to The address that will receive the minted tokens.\n    * @param amount The amount of tokens to mint.\n    */\n  function mint(address to, uint256 amount) public onlyOwner {\n    _mint(to, amount);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-compile-the-contract",
      children: "5. Compile the Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compile your contract with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat compile\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If successful, you should see output indicating compilation was successful:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Compiling 12 files with 0.8.22\nSolidity compilation finished successfully\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-deploy-to-push-chain",
      children: "6. Deploy to Push Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-set-up-your-deployer-account",
      children: "6.1. Set up your deployer account"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".env"
      }), " file in your project root to securely store your private key:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then create a deployment script at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scripts/deploy.js"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "const hre = require('hardhat');\n\nasync function main() {\n  console.log('Deploying MyToken to PUSH Chain...');\n\n  const myToken = await hre.ethers.deployContract('MyToken');\n  await myToken.waitForDeployment();\n\n  const address = await myToken.getAddress();\n  console.log(`MyToken deployed to: ${address}`);\n}\n\n// We recommend this pattern to be able to use async/await everywhere\n// and properly handle errors.\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Never commit your .env file to version control.\nAdd .env to your .gitignore file to prevent accidental exposure of private keys.\nNever use accounts with significant funds for test deployments."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-get-testnet-tokens",
      children: "6.2. Get testnet tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ensure you have testnet tokens to pay for deployment gas fees. If you don't have any, visit the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://faucet.push.org/",
        children: "Push Chain Faucet"
      }), " to request test tokens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-deploy-your-contract",
      children: "6.3. Deploy your contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run the deployment script with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat run scripts/deploy.js --network push_testnet\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This command:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runs your deployment script"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connects to Push Chain testnet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses your private key from the .env file"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deploys your contract and waits for confirmation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployment Results"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If successful, you'll see output similar to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Deploying MyToken to PUSH Chain...\nMyToken deployed to: 0x0B86e252B035027028C0d4D3B136d80Da4C98Ec1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Save the contract address for verification and interaction."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-verify-the-contract",
      children: "7. Verify the Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify your contract on the Push Chain BlockScout explorer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npx hardhat verify --network push_testnet 0x0B86e252B035027028C0d4D3B136d80Da4C98Ec1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0x0B86e252B035027028C0d4D3B136d80Da4C98Ec1"
        }), " with your actual deployed contract address."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": If you encounter issues with verification, you can refer to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.blockscout.com/devs/verification/hardhat-verification-plugin",
          children: "Blockscout's Hardhat verification plugin documentation"
        }), " for troubleshooting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When successful, you'll receive a confirmation message with a link to view your verified contract on the Push Chain explorer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That's it! You have successfully deployed and verified your smart contract on Push Chain using Hardhat."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Jump into building and interacting with your smart contract using the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build",
          children: "Push Chain SDK"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check out ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/chain-config/",
          children: "chain configuration"
        }), " or ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-helpers/",
          children: "available helper contracts"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Abstract everything on frontend with ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit/integrate-push-universal-wallet/",
          children: "UI Kit"
        })]
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



/***/ },

/***/ 954537
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(978478);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113490);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474848);
const AddChainToWallet=_ref=>{let _ref$title=_ref.title,title=_ref$title===void 0?'Add to Wallet':_ref$title,config=_ref.config;const addNetwork=async()=>{try{if(typeof window==='undefined'||!window.ethereum){alert('Please install MetaMask first!');return;}const chainIdHex="0x"+config.chainId.toString(16);try{await window.ethereum.request({method:'wallet_switchEthereumChain',params:[{chainId:chainIdHex}]});alert('Network already exists.');return;}catch(switchError){// Step 2: If the error code is 4902, the chain doesn't exist
if(switchError.code===4902){try{await window.ethereum.request({method:'wallet_addEthereumChain',params:[{chainId:chainIdHex,chainName:config.chainName,nativeCurrency:config.nativeCurrency,iconUrls:config.iconUrls,rpcUrls:config.rpcUrls,blockExplorerUrls:config.blockExplorerUrls}]});}catch(addError){console.error('Error adding network:',addError);alert('Failed to add network to MetaMask');}}else{console.error('Error switching network:',switchError);alert('Failed to switch network');}}}catch(error){console.error('Unexpected error:',error);alert('Something went wrong while adding the network');}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{display:'flex',justifyContent:'flex-end',alignItems:'center',margin:'20px 0'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n,{onClick:addNetwork,style:{backgroundColor:'#D548EC',border:'none',padding:'12px 24px',cursor:'pointer',transition:'all 0.2s ease',fontFamily:'DM Sans'},children:title})});};function Wrapper(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{children:()=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AddChainToWallet,Object.assign({},props))});}

/***/ },

/***/ 162334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(328774);
/* harmony import */ var _site_src_components_AddChainToWallet_AddChainToWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(954537);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(444608);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(436026);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77086);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(474848);
const TESTNET_CONFIG={chainId:42101,chainName:'Push Chain Testnet',nativeCurrency:{name:'Push Chain',symbol:'PC',decimals:18},rpcUrls:['https://evm.donut.rpc.push.org/'],iconUrls:[],blockExplorerUrls:['https://donut.push.network']};const PushChainSpecs=()=>{const tabValues=[{value:'testnet_donut',label:'🍩 Donut Testnet',default:true},{value:'mainnet',label:'Mainnet - Coming Soon 🚀'}];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{groupId:"chain-network",values:tabValues,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{value:"testnet_donut",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th",{children:"Field"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th",{children:"Value"})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tbody",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Network Name"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"Push Chain Donut Testnet"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"RPC URL"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://evm.donut.rpc.push.org/"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Chain ID"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"42101"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Currency Symbol"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"PC"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong",{children:"Block Explorer URL"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code",{children:"https://donut.push.network"})})]})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_site_src_components_AddChainToWallet_AddChainToWallet__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{title:"Add to Wallet (Testnet Donut)",config:TESTNET_CONFIG})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{value:"mainnet",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"admonition admonition-info alert alert--info",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{className:"admonition-heading",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{as:"h5",children:"Coming Soon!"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"admonition-content",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p",{children:"Push Chain Mainnet is currently in development. Stay tuned for updates!"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:["Follow us on ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{to:"https://x.com/pushchain",children:"X"})," for announcements"]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li",{children:["Join our",' ',/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{to:"https://discord.com/invite/pushchain",children:"Discord"}),' ',"to be part of the community"]})]})]})]})})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PushChainSpecs);

/***/ }

}]);