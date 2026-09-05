"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[55121],{

/***/ 719633
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_02_setup_02_smart_contract_environment_02_configure_foundry_mdx_a1a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-02-setup-02-smart-contract-environment-02-configure-foundry-mdx-a1a.json
const site_docs_chain_02_setup_02_smart_contract_environment_02_configure_foundry_mdx_a1a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/setup/smart-contract-environment/docs-chain-setup-smart-contract-environment-configure-foundry","title":"Configure Foundry","description":"Configure Foundry | Smart Contract Environment | Tooling | Setup | Push Chain Docs","source":"@site/docs/chain/02-setup/02-smart-contract-environment/02-Configure-Foundry.mdx","sourceDirName":"chain/02-setup/02-smart-contract-environment","slug":"/chain/setup/smart-contract-environment/configure-foundry","permalink":"/push-chain-website/pr-preview/pr-1240/docs/chain/setup/smart-contract-environment/configure-foundry","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/02-setup/02-smart-contract-environment/02-Configure-Foundry.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-setup-smart-contract-environment-configure-foundry","title":"Configure Foundry","hide_title":false,"slug":"./configure-foundry","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_setup_smart_contract_environment--configure_foundry.png"},"sidebar":"pushChainSidebar","previous":{"title":"Remix IDE","permalink":"/push-chain-website/pr-preview/pr-1240/docs/chain/setup/smart-contract-environment/configure-remix"},"next":{"title":"Configure Hardhat","permalink":"/push-chain-website/pr-preview/pr-1240/docs/chain/setup/smart-contract-environment/configure-hardhat"}}');
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
;// ./docs/chain/02-setup/02-smart-contract-environment/02-Configure-Foundry.mdx


const frontMatter = {
	id: 'docs-chain-setup-smart-contract-environment-configure-foundry',
	title: 'Configure Foundry',
	hide_title: false,
	slug: './configure-foundry',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_setup_smart_contract_environment--configure_foundry.png'
};
const contentTitle = undefined;

const assets = {

};







const toc = [{
  "value": "Deploy Smart Contracts with Foundry",
  "id": "deploy-smart-contracts-with-foundry",
  "level": 2
}, {
  "value": "1. Install Foundry",
  "id": "1-install-foundry",
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
        children: "Configure Foundry | Smart Contract Environment | Tooling | Setup | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Foundry is a blazing fast, portable, and modular toolkit for Ethereum application development. Get up and running with Foundry on Push Chain testnet."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Recommended Practice",
      type: "info",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Instead of reinventing your workflow, keep developing exactly as you would on Ethereum—then just point Foundry at Push Chain RPCs and explorer."
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Push Chain Specs",
      children: (0,jsx_runtime.jsx)(PushChainSpecs/* default */.A, {})
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deploy-smart-contracts-with-foundry",
      children: "Deploy Smart Contracts with Foundry"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-install-foundry",
      children: "1. Install Foundry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To install Foundry, run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -L https://foundry.paradigm.xyz | bash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once the foundryup script is downloaded, follow the on-screen instructions to complete installation. After installation, restart your terminal and run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "foundryup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This will ensure you have the latest version of Foundry tools (forge, cast, anvil, and chisel) installed."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-create-a-new-project",
      children: "2. Create a New Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Create a new Foundry project:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "forge init myToken\ncd myToken\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install the OpenZeppelin contracts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "forge install OpenZeppelin/openzeppelin-contracts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This should create a new project with the following structure:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "myToken/\n├── foundry.toml\n├── lib/\n├── out/\n├── script/\n├── src/\n├── test/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-configure-for-push-chain",
      children: "3. Configure for Push Chain"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now simply modify your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "foundry.toml"
      }), " file to include Push Chain testnet configuration:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-toml",
        children: "[profile.default]\nsolc_version        = \"0.8.22\"\n\nsrc                 = \"src\"\nout                 = \"out\"\nlibs                = [\"lib\"]\nremappings          = [\"@openzeppelin/=lib/openzeppelin-contracts/\"]\n\n# Push Chain Testnet configuration\n[rpc_endpoints]\npush_testnet        = \"https://evm.donut.rpc.push.org/\"\n\n# This is a placeholder - BlockScout doesn't require an API key but Foundry expects a key field\n[etherscan]\npush_testnet        = { key = \"blockscout\", url = \"https://donut.push.network/api\", chain = 42101 }\n\n# See more config options https://github.com/foundry-rs/foundry/blob/master/crates/config/README.md#all-options\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This configuration includes:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Default project structure settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RPC endpoints for Push Chain Donut testnet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BlockScout explorer configuration for contract verification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-write-a-smart-contract",
      children: "4. Write a Smart Contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a new file at ", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/MyToken.sol"
      }), " with the following ERC20 token implementation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "// SPDX-License-Identifier: MIT\npragma solidity 0.8.22;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\n/**\n * @title MyToken\n * @dev A simple ERC20 token for demonstration on PUSH CHAIN\n */\ncontract MyToken is ERC20, Ownable {\n  constructor() ERC20(\"MyToken\", \"MT\") Ownable(msg.sender) {\n    _mint(msg.sender, 1000 * 10**18);\n  }\n\n  function decimals() public view virtual override returns (uint8) {\n    return 18;\n  }\n\n  function mint(address to, uint256 amount) public onlyOwner {\n    _mint(to, amount);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-compile-the-contract",
      children: "5. Compile the Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compile your contract with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "forge build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If successful, you should see output similar to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[⠢] Compiling...\n[⠔] Compiling 18 files with 0.8.22\n[⠑] Solc 0.8.22 finished in 1.51s\nCompiler run successful!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-deploy-to-push-chain",
      children: "6. Deploy to Push Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-set-up-your-deployer-account",
      children: "6.1. Set up your deployer account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Following best security practices, we'll use Foundry's wallet management system instead of exposing private keys in environment variables:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cast wallet import myKeystore --interactive\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You'll be prompted to enter your private key and create a password to encrypt it. This securely stores your key in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.foundry/keystores"
      }), ".\nRead more about ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://getfoundry.sh/cast/reference/cast-wallet-import/",
        children: "Foundry Wallet Management"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "warning",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Never use accounts with significant funds for test deployments.\nNever store private keys in plain text or in your repository."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "62-get-testnet-tokens",
      children: "6.2. Get testnet tokens"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ensure you have testnet tokens to pay for deployment gas fees. If you don't have any, use the Push Chain ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://faucet.push.org/",
        children: "testnet faucet"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "63-deploy-your-contract",
      children: "6.3. Deploy your contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "forge create src/MyToken.sol:MyToken \\\n  --rpc-url push_testnet \\\n  --chain 42101 \\\n  --account myKeystore \\\n  --broadcast\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This command:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates your MyToken contract"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses the Push Chain testnet RPC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Specifies the correct chain ID (42101)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses your securely stored account"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broadcasts the transaction to the network"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployment Results"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If successful, you'll see output similar to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Deployer: 0xa89523351BE1e2De64937AA9AF61Ae06eAd199C7\nDeployed to: 0xF0f1199A048A39336dFD915F146470de1b5d6dAd\nTransaction hash: 0x255e64bbe86253979f070b48db0868f6f108a47e7b7f94586bc869fbd2d98800\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Save the contract address for verification and interaction later."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-verify-the-contract",
      children: "7. Verify the Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify your contract on the Push Chain BlockScout explorer:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "forge verify-contract \\\n  --chain 42101 \\\n  --verifier blockscout \\\n  0xYourDeployedAddress \\\n  src/MyToken.sol:MyToken\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Replace ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0xYourDeployedAddress"
        }), " with your actual deployed contract address."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If successful, you'll see output similar to:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Start verifying contract `0xF0f1199A048A39336dFD915F146470de1b5d6dAd` deployed on 42101\n\nSubmitting verification for [src/MyToken.sol:MyToken] 0xF0f1199A048A39336dFD915F146470de1b5d6dAd.\nSubmitted contract for verification:\n\tResponse: `OK`\n\tGUID: `f0f1199a048a39336dfd915f146470de1b5d6dad68494bd5`\n\tURL: https://donut.push.network/address/0xf0f1199a048a39336dfd915f146470de1b5d6dad\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Visit the provided URL to view your verified contract on the Push Chain explorer."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That's it! You have successfully deployed and verified your smart contract on Push Chain."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy with scripts using ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/smart-contract-environment/configure-hardhat",
          children: "Hardhat"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Call your contract from code via the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build",
          children: "Push Chain SDK"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check out all the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/chain-config/",
          children: "Chain Configurations"
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