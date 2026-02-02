"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[14450],{

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ 36113
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_01_tutorials_01_basics_02_tutorial_universal_counter_mdx_af7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-01-tutorials-01-basics-02-tutorial-universal-counter-mdx-af7.json
const site_docs_chain_01_tutorials_01_basics_02_tutorial_universal_counter_mdx_af7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/tutorials/basics/docs-chain-tutorials-universal-counter","title":"Build a Universal Counter App","description":"Build a Universal Counter App | Tutorials | Push Chain Docs","source":"@site/docs/chain/01-tutorials/01-basics/02-Tutorial-Universal-Counter.mdx","sourceDirName":"chain/01-tutorials/01-basics","slug":"/chain/tutorials/basics/tutorial-universal-counter","permalink":"/push-chain-website/pr-preview/pr-1174/docs/chain/tutorials/basics/tutorial-universal-counter","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/01-tutorials/01-basics/02-Tutorial-Universal-Counter.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"docs-chain-tutorials-universal-counter","title":"Build a Universal Counter App","hide_title":false,"slug":"./tutorial-universal-counter","displayed_sidebar":"pushChainSidebar","sidebar_position":2,"image":"/assets/docs/previews/docs_chain_tutorials_universal_counter--build_a_universal_counter_app.png"},"sidebar":"pushChainSidebar","previous":{"title":"Build a Counter App","permalink":"/push-chain-website/pr-preview/pr-1174/docs/chain/tutorials/basics/tutorial-simple-counter"},"next":{"title":"Mint Universal ERC-20 Tokens","permalink":"/push-chain-website/pr-preview/pr-1174/docs/chain/tutorials/basics/tutorial-mint-erc-20-tokens"}}');
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
// EXTERNAL MODULE: ./src/components/TutorialTimer/index.ts + 1 modules
var TutorialTimer = __webpack_require__(546772);
// EXTERNAL MODULE: ./src/components/SolidityCode/index.ts + 1 modules
var SolidityCode = __webpack_require__(531836);
// EXTERNAL MODULE: ./src/components/GitHubRepo/index.ts + 1 modules
var GitHubRepo = __webpack_require__(531855);
;// ./docs/chain/01-tutorials/01-basics/02-Tutorial-Universal-Counter.mdx


const frontMatter = {
	id: 'docs-chain-tutorials-universal-counter',
	title: 'Build a Universal Counter App',
	hide_title: false,
	slug: './tutorial-universal-counter',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 2,
	image: '/assets/docs/previews/docs_chain_tutorials_universal_counter--build_a_universal_counter_app.png'
};
const contentTitle = undefined;

const assets = {

};










const toc = [{
  "value": "What’s Unique About This App?",
  "id": "whats-unique-about-this-app",
  "level": 2
}, {
  "value": "Example",
  "id": "example",
  "level": 3
}, {
  "value": "Write the Contract",
  "id": "write-the-contract",
  "level": 2
}, {
  "value": "Understanding the Contract",
  "id": "understanding-the-contract",
  "level": 2
}, {
  "value": "Understanding UEAFactory Interface",
  "id": "understanding-ueafactory-interface",
  "level": 3
}, {
  "value": "Designing the Increment Function",
  "id": "designing-the-increment-function",
  "level": 3
}, {
  "value": "Interact with Universal Counter",
  "id": "interact-with-universal-counter",
  "level": 2
}, {
  "value": "Live Playground",
  "id": "live-playground",
  "level": 2
}, {
  "value": "Source Code",
  "id": "source-code",
  "level": 2
}, {
  "value": "What we Achieved",
  "id": "what-we-achieved",
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
    em: "em",
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
  }, {Details, Head} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Build a Universal Counter App | Tutorials | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(TutorialTimer/* default */.A, {
      estimatedMinutes: 18
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Extends Counter App",
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["This tutorial builds on the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/tutorials/basics/tutorial-simple-counter",
          children: "Counter"
        }), ". If you haven’t completed it yet, go there first as this tutorial builds directly on top of it."]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the last tutorial, you built a counter that worked across chains with no code changes."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now, let’s take it further: instead of one shared counter, we’ll track ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "counts per chain"
      }), ". This is your first truly ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal App"
      }), ". Let’s dive in 🤿."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this tutorial you’ll be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Build a counter app that tracks transactions from ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "different chains"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Use the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UEAFactory interface"
        }), " to detect a user’s origin."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Work with the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UniversalAccountId struct"
        }), " to fetch chain details."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-unique-about-this-app",
      children: "What’s Unique About This App?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Counter"
      }), ", every increment was added to a single shared value. That worked fine, but it didn’t tell us ", (0,jsx_runtime.jsx)(_components.em, {
        children: "who"
      }), " was incrementing or ", (0,jsx_runtime.jsx)(_components.em, {
        children: "from where"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Counter"
      }), ", we take the next step:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each chain gets its ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "own counter"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "countEth"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "countPC"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "countSol"
        }), ", …)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The contract can ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "natively detect the origin"
        }), " of the caller (", (0,jsx_runtime.jsx)(_components.code, {
          children: "msg.sender"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "increment()"
        }), " function updates ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "only the counter for the caller’s chain"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example",
      children: "Example"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Alice (Ethereum) → calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "increment()"
        }), " → only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "countEth"
        }), " goes up."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bob (Push Chain) → calls ", (0,jsx_runtime.jsx)(_components.code, {
          children: "increment()"
        }), " → only ", (0,jsx_runtime.jsx)(_components.code, {
          children: "countPC"
        }), " goes up."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "🚀 Why this matters"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You’re not just tracking clicks anymore. You’re building logic that’s aware of where your users come from. This is the foundation of truly universal apps, and it’s all ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "natively supported on Push Chain"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "write-the-contract",
      children: "Write the Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below is the Solidity code for the Universal Counter. In the Beginner version, chains are hardcoded for simplicity."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      title: "Beginner vs Pro",
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Beginner:"
          }), " Easier to follow. Great if you’re new to Solidity or Push Chain."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Pro (Dynamic):"
          }), " Slightly more advanced. Switch to the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pro (Dynamic)"
          }), " version once you’re comfortable — it scales to any chain without edits."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      className: "liveplaytab",
      groupId: "universal-counter-solidity",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "universal_counter_hardcoded",
        label: "Universal Counter (Beginner)",
        children: (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
          title: "Universal Counter Contract",
          fileName: "UniversalCounter.sol",
          url: "https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-counter/contracts/src/UniversalCounter.sol",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-solidity",
              children: "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\n// Universal Account ID Struct and IUEAFactory Interface\nstruct UniversalAccountId {\n    string chainNamespace;\n    string chainId;\n    bytes owner;\n}\n\ninterface IUEAFactory {\n    function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);\n}\n\ncontract UniversalCounter {\n    uint256 public countEth;\n    uint256 public countSol;\n    uint256 public countPC;\n\n    event CountIncremented(\n        uint256 newCount,\n        address indexed caller,\n        string chainNamespace,\n        string chainId\n    );\n\n    constructor() {}\n\n    function increment() public {\n        address caller = msg.sender;\n        (UniversalAccountId memory originAccount, bool isUEA) =\n            IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(caller);\n\n        if (!isUEA) {\n            // If it's a native Push Chain EOA (isUEA = false)\n            countPC += 1;\n        } else {\n            bytes32 chainHash = keccak256(abi.encodePacked(originAccount.chainNamespace, originAccount.chainId));\n\n            if (chainHash == keccak256(abi.encodePacked(\"solana\",\"EtWTRABZaYq6iMfeYKouRu166VU2xqa1\"))) {\n                countSol += 1;\n            } else if (chainHash == keccak256(abi.encodePacked(\"eip155\",\"11155111\"))) {\n                countEth += 1;\n            } else {\n                revert(\"Invalid chain\");\n            }\n        }\n\n        emit CountIncremented(getCount(), caller, originAccount.chainNamespace, originAccount.chainId);\n    }\n\n    function getCount() public view returns (uint256) {\n        return countEth + countSol + countPC;\n    }\n}\n"
            })
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "universal_counter_dynamic",
        label: "Universal Counter (Dynamic / Pro)",
        children: (0,jsx_runtime.jsx)(SolidityCode/* SolidityCode */.L, {
          title: "Universal Counter Dynamic Contract",
          fileName: "UniversalCounterDynamic.sol",
          url: "https://github.com/pushchain/push-chain-examples/blob/main/tutorials/universal-counter-dynamic/contracts/src/UniversalCounterDynamic.sol",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-solidity",
              children: "// Note: Unlike the Beginner version, this contract also tracks unique users per chain.\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.22;\n\n// Universal Account ID Struct and IUEAFactory Interface\nstruct UniversalAccountId {\n    string chainNamespace;\n    string chainId;\n    bytes owner;\n}\n\ninterface IUEAFactory {\n    function getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);\n}\n\ncontract UniversalCounter {\n    // Counter mapping to maintain individual chain counts\n    mapping(bytes => uint256) public chainCount;\n    mapping(bytes => uint256) public chainCountUnique;\n\n    // Array of chain IDs to track unique chains\n    bytes[] public chainIds;\n\n    // Array of chain users to track unique counts\n    mapping(address => bool) public chainUsers;\n\n    event CountIncremented(\n        uint256 newCount,\n        uint256 newCountUnique,\n        address indexed caller,\n        string chainNamespace,\n        string chainId\n    );\n\n    constructor() {}\n\n    function increment() public {\n        address caller = msg.sender;\n        (UniversalAccountId memory originAccount, bool isUEA) =\n            IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(caller);\n\n        // Calculate chain hash\n        bytes memory chainHash = abi.encodePacked(originAccount.chainNamespace, \":\", originAccount.chainId);\n\n        if (chainCount[chainHash] == 0) {\n            // Add new chain to chainIds if it doesn't exist\n            chainIds.push(chainHash);\n        }\n\n        if (chainUsers[caller] == false) {\n          // add to chain unique count if user is not already counted\n          chainCountUnique[chainHash] += 1;\n          chainUsers[caller] = true;\n        }\n\n        // Add to chain count\n        chainCount[chainHash] += 1;\n\n        (uint256 totalCount, uint256 totalCountUnique) = getCount();\n        emit CountIncremented(totalCount, totalCountUnique, caller, originAccount.chainNamespace, originAccount.chainId);\n    }\n\n    function getCount() public view returns (uint256 count, uint256 countUnique) {\n      uint256 totalCount = 0;\n      uint256 totalCountUnique = 0;\n\n      for (uint256 i = 0; i < chainIds.length; i++) {\n        totalCount += chainCount[chainIds[i]];\n        totalCountUnique += chainCountUnique[chainIds[i]];\n      }\n\n      return (totalCount, totalCountUnique);\n    }\n}\n"
            })
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-the-contract",
      children: "Understanding the Contract"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This contract can now instantly determine key details about any user ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "(msg.sender)"
      }), " instantly and natively."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In simpler terms, for any given ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "msg.sender"
      }), " address, the contract is able to quickly identify:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "the actual source chain of the caller"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "the chain id of the source chain of the caller."
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "the address of the caller on the source chain."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These details are natively available for any smart contract built on Push Chain.\nThis is enabled via ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/pushchain/push-chain-core-contracts/blob/main/src/Interfaces/IUEAFactory.sol",
          children: "UEAFactory Interface"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "understanding-ueafactory-interface",
      children: "Understanding UEAFactory Interface"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We use UEAFactory interface to decide transaction origin of the user. It stands for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal Execution Account"
      }), " (UEA). Think of a UEA like a passport contract, it proves which chain a user comes from."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "This can either be imported or directly included in your contract."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This interfaces provides you with the function - ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getOriginForUEA()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        children: "/**\n  * @dev Returns the owner key (UOA) for a given UEA address\n  * @param addr Any given address ( msg.sender ) on push chain\n  * @return account The Universal Account information associated with this UEA\n  * @return isUEA True if the address addr is a UEA contract. Else it is a native EOA of PUSH chain (i.e., isUEA = false)\n  */\nfunction getOriginForUEA(address addr) external view returns (UniversalAccountId memory account, bool isUEA);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The function mainly returns 2 crucial values:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UniversalAccountId"
        }), " of the user, and"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A boolean that indicates whether or not this caller is a UEA."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "designing-the-increment-function",
      children: "Designing the Increment Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-solidity",
        metastring: "title=\"UniversalCounter.sol\"",
        children: "...\nfunction increment() public {\n  address caller = msg.sender;\n  // highlight-start\n  (UniversalAccountId memory originAccount, bool isUEA) =\n      IUEAFactory(0x00000000000000000000000000000000000000eA).getOriginForUEA(caller);\n  // highlight-end\n\n  if (!isUEA) {\n      // If it's a native Push Chain EOA (isUEA = false)\n      countPC += 1;\n  } else {\n      bytes32 chainHash = keccak256(abi.encodePacked(originAccount.chainNamespace, originAccount.chainId));\n\n      if (chainHash == keccak256(abi.encodePacked(\"solana\",\"EtWTRABZaYq6iMfeYKouRu166VU2xqa1\"))) {\n          countSol += 1;\n      } else if (chainHash == keccak256(abi.encodePacked(\"eip155\",\"11155111\"))) {\n          countEth += 1;\n      }\n      // ...\n  }\n  // ...\n}\n// ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increment"
      }), " function is the main logic of this contract that updates the count variables based on user’s origin type."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In order to achieve this, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "increment"
      }), " function does the following:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["calls the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getOriginForUEA()"
        }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "msg.sender"
        }), " as argument"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["this provides us with ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "isUEA and UniversalAccountId"
        }), " for the caller."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["then we check if ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "isUEA is false,"
        }), " this means the caller is a native Push User."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["for such users, the function increments ", (0,jsx_runtime.jsx)(_components.code, {
          children: "countPC"
        }), " variable by 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("strong", {
          children: "Why isUEA = false means native Push User and true means other chains?"
        })
      }), (0,jsx_runtime.jsx)("p", {
        children: "1. Every external chain user (ETH, Solana, etc) in Push Chain has a UEA account deployed for them."
      }), (0,jsx_runtime.jsx)("p", {
        children: "2. These UEA accounts represent the external chain users on Push Chain and are directly controlled by their signatures."
      }), (0,jsx_runtime.jsx)("p", {
        children: "3. UEAs allow external users to interact and use Push Chain apps without natively being on Push Chain."
      }), (0,jsx_runtime.jsxs)("p", {
        children: ["4. Therefore, for a given ", (0,jsx_runtime.jsx)("code", {
          children: "msg.sender"
        }), ":"]
      }), (0,jsx_runtime.jsxs)("ul", {
        children: [(0,jsx_runtime.jsxs)("li", {
          children: [(0,jsx_runtime.jsx)("strong", {
            children: "isUEA = false"
          }), " → the caller is a native Push Chain account and not an external chain user."]
        }), (0,jsx_runtime.jsxs)("li", {
          children: [(0,jsx_runtime.jsx)("strong", {
            children: "isUEA = true"
          }), " → the caller is an external chain user interacting via a UEA. For such a user, the ", (0,jsx_runtime.jsx)("code", {
            children: "UniversalAccountId"
          }), " provides all information like ", (0,jsx_runtime.jsx)("em", {
            children: "{ chainName, chainId, ownerAddress }"
          }), "."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interact-with-universal-counter",
      children: "Interact with Universal Counter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The easiest way to interact with the contract is through the Live Playground.\nThe Universal Counter is already deployed on Push Chain Testnet."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UniversalCounter (Beginner) :"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://donut.push.network/address/0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512?tab=contract",
          children: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "UniversalCounter (Dynamic / Pro) :"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://donut.push.network/address/0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9?tab=contract",
          children: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Steps to interact:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Connect your wallet to the Live Playground."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "You can connect a wallet from any supported chain (Push Chain, Ethereum, or Solana)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Increment Counter"
        }), " to increase the counter for your chain."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Refresh Counter Values"
        }), " to see updated counts across chains."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "View in Explorer"
        }), " to open the transaction in Push Chain Explorer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "live-playground",
      children: "Live Playground"
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      className: "liveplaytab",
      groupId: "universal-counter-solidity",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "universal_counter_hardcoded",
        label: "Universal Counter (Beginner)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropMinimized='true'\nimport React, { useState, useEffect } from 'react';\nimport { ethers } from 'ethers';\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction UniversalCounterExample() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  // Define Universal Counter ABI, taking minimal ABI for the demo\n  const UCABI = [\n    {\n      inputs: [],\n      name: 'increment',\n      outputs: [],\n      stateMutability: 'nonpayable',\n      type: 'function',\n    },\n    {\n      inputs: [],\n      name: 'countEth',\n      outputs: [\n        {\n          internalType: 'uint256',\n          name: '',\n          type: 'uint256',\n        },\n      ],\n      stateMutability: 'view',\n      type: 'function',\n    },\n    {\n      inputs: [],\n      name: 'countPC',\n      outputs: [\n        {\n          internalType: 'uint256',\n          name: '',\n          type: 'uint256',\n        },\n      ],\n      stateMutability: 'view',\n      type: 'function',\n    },\n    {\n      inputs: [],\n      name: 'countSol',\n      outputs: [\n        {\n          internalType: 'uint256',\n          name: '',\n          type: 'uint256',\n        },\n      ],\n      stateMutability: 'view',\n      type: 'function',\n    },\n  ];\n\n  // Contract address for Universal Counter\n  const CONTRACT_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';\n\n  function Component() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n\n    // State to store counter values\n    const [countEth, setCountEth] = useState(-1);\n    const [countSol, setCountSol] = useState(-1);\n    const [countPC, setCountPC] = useState(-1);\n    const [isLoading, setIsLoading] = useState(false);\n    const [txHash, setTxHash] = useState('');\n\n    // Function to encode transaction data\n    const getTxData = () => {\n      return PushChain.utils.helpers.encodeTxData({\n        abi: UCABI,\n        functionName: 'increment',\n      });\n    };\n\n    // Function to fetch counter values\n    const fetchCounters = async () => {\n      try {\n        // Create a contract instance for read operations\n        const provider = new ethers.JsonRpcProvider(\n          'https://evm.donut.rpc.push.org/'\n        );\n        const contract = new ethers.Contract(CONTRACT_ADDRESS, UCABI, provider);\n\n        // Fetch counter values\n        const ethCount = await contract.countEth();\n        const solCount = await contract.countSol();\n        const pcCount = await contract.countPC();\n\n        // Update state\n        setCountEth(Number(ethCount));\n        setCountSol(Number(solCount));\n        setCountPC(Number(pcCount));\n      } catch (err) {\n        console.error('Error fetching counter values:', err);\n      }\n    };\n\n    // Fetch counter values on component mount\n    useEffect(() => {\n      fetchCounters();\n    }, []);\n\n    // Handle transaction to increment counter\n    const handleSendTransaction = async () => {\n      if (pushChainClient) {\n        try {\n          setIsLoading(true);\n          const data = getTxData();\n\n          const tx = await pushChainClient.universal.sendTransaction({\n            to: CONTRACT_ADDRESS,\n            value: BigInt(0),\n            data: data,\n          });\n\n          setTxHash(tx.hash);\n\n          // Wait for transaction to be mined\n          await tx.wait();\n\n          // Refresh counter values\n          await fetchCounters();\n          setIsLoading(false);\n        } catch (err) {\n          console.error('Transaction error:', err);\n          setIsLoading(false);\n        }\n      }\n    };\n\n    // Function to determine which chain is winning\n    const getWinningChain = () => {\n      if (countEth === -1 || countSol === -1 || countPC === -1) return null;\n\n      if (countEth > countSol && countEth > countPC) {\n        return `Ethereum is winning with ${countEth} counts`;\n      } else if (countSol > countEth && countSol > countPC) {\n        return `Solana is winning with ${countSol} counts`;\n      } else if (countPC > countEth && countPC > countSol) {\n        return `Push Chain is winning with ${countPC} counts`;\n      } else {\n        // Handle ties\n        if (countEth === countSol && countEth === countPC && countEth > 0) {\n          return `It's a three-way tie with ${countEth} counts each`;\n        } else if (countEth === countSol && countEth > countPC) {\n          return `Ethereum and Solana are tied with ${countEth} counts each`;\n        } else if (countEth === countPC && countEth > countSol) {\n          return `Ethereum and Push Chain are tied with ${countEth} counts each`;\n        } else if (countSol === countPC && countSol > countEth) {\n          return `Solana and Push Chain are tied with ${countSol} counts each`;\n        } else {\n          return null; // No winner yet or all zeros\n        }\n      }\n    };\n\n    const winningMessage = getWinningChain();\n\n    return (\n      <div\n        style={{\n          display: 'flex',\n          flexDirection: 'column',\n          alignItems: 'center',\n          gap: '12px',\n        }}\n      >\n        <h2>Universal Counter Example</h2>\n\n        <PushUniversalAccountButton />\n\n        {connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <p>Please connect your wallet to interact with the counter.</p>\n        )}\n\n        <div\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            alignItems: 'center',\n            gap: '12px',\n            width: '100%',\n            flexWrap: 'nowrap',\n          }}\n        >\n          <h3>\n            Total Universal Count:{' '}\n            {countEth == -1 ? '...' : countEth + countSol + countPC}\n          </h3>\n\n          <div\n            style={{\n              display: 'flex',\n              flexDirection: 'row',\n              alignItems: 'center',\n              justifyContent: 'space-around',\n              gap: '12px',\n              width: '100%',\n            }}\n          >\n            <div className='counter-box'>\n              <h3>ETH Counter: {countEth == -1 ? '...' : countEth}</h3>\n            </div>\n\n            <div className='counter-box'>\n              <h3>Sol Counter: {countSol == -1 ? '...' : countSol}</h3>\n            </div>\n\n            <div className='counter-box'>\n              <h3>PC Counter: {countPC == -1 ? '...' : countPC}</h3>\n            </div>\n          </div>\n        </div>\n\n        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <div className='counter-container' style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>\n            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>\n              <button\n                className='increment-button'\n                onClick={handleSendTransaction}\n                disabled={isLoading}\n                style={{\n                  backgroundColor: '#d946ef',\n                  color: 'white',\n                  border: 'none',\n                  borderRadius: '20px',\n                  padding: '8px 16px',\n                  fontSize: '14px',\n                  cursor: 'pointer',\n                  fontWeight: 'bold'\n                }}\n              >\n                {isLoading ? 'Processing...' : 'Increment Counter'}\n              </button>\n\n              <button\n                className='refresh-button'\n                onClick={fetchCounters}\n                style={{\n                  backgroundColor: '#d946ef',\n                  color: 'white',\n                  border: 'none',\n                  borderRadius: '20px',\n                  padding: '8px 16px',\n                  fontSize: '14px',\n                  cursor: 'pointer',\n                  fontWeight: 'bold'\n                }}\n              >\n                Refresh Counter Values\n              </button>\n            </div>\n\n            {winningMessage && (\n              <div style={{ margin: '10px 0', fontWeight: 'bold', color: '#d946ef' }}>\n                {winningMessage}\n              </div>\n            )}\n\n            {txHash && pushChainClient && (\n              <div className='transaction-info' style={{ textAlign: 'center' }}>\n                <p>\n                  Transaction Hash:{' '}\n                  <a\n                    href={pushChainClient.explorer.getTransactionUrl(txHash)}\n                    target='_blank'\n                    style={{ color: '#d946ef', textDecoration: 'underline' }}\n                  >\n                    {txHash}\n                  </a>\n                </p>\n              </div>\n            )}\n          </div>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "universal_counter_dynamic",
        label: "Universal Counter (Dynamic / Pro)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-jsx",
            metastring: "live",
            live: true,
            children: "// customPropMinimized='true'\nimport React, { useState, useEffect } from 'react';\nimport { ethers } from 'ethers';\nimport {\n  PushUniversalWalletProvider,\n  PushUniversalAccountButton,\n  usePushWalletContext,\n  usePushChainClient,\n  usePushChain,\n  PushUI,\n} from '@pushchain/ui-kit';\n\nfunction UniversalCounterExample() {\n  // Define Wallet Config\n  const walletConfig = {\n    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,\n  };\n\n  // Define Universal Counter ABI, taking minimal ABI for the demo\n  const UCDynamicABI = [\n    { \"inputs\": [], \"stateMutability\": \"nonpayable\", \"type\": \"constructor\" },\n    {\n      \"anonymous\": false,\n      \"inputs\": [\n        {\n          \"indexed\": false,\n          \"internalType\": \"uint256\",\n          \"name\": \"newCount\",\n          \"type\": \"uint256\"\n        },\n        {\n          \"indexed\": false,\n          \"internalType\": \"uint256\",\n          \"name\": \"newCountUnique\",\n          \"type\": \"uint256\"\n        },\n        {\n          \"indexed\": true,\n          \"internalType\": \"address\",\n          \"name\": \"caller\",\n          \"type\": \"address\"\n        },\n        {\n          \"indexed\": false,\n          \"internalType\": \"string\",\n          \"name\": \"chainNamespace\",\n          \"type\": \"string\"\n        },\n        {\n          \"indexed\": false,\n          \"internalType\": \"string\",\n          \"name\": \"chainId\",\n          \"type\": \"string\"\n        }\n      ],\n      \"name\": \"CountIncremented\",\n      \"type\": \"event\"\n    },\n    {\n      \"inputs\": [{ \"internalType\": \"bytes\", \"name\": \"\", \"type\": \"bytes\" }],\n      \"name\": \"chainCount\",\n      \"outputs\": [{ \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" }],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [{ \"internalType\": \"bytes\", \"name\": \"\", \"type\": \"bytes\" }],\n      \"name\": \"chainCountUnique\",\n      \"outputs\": [{ \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" }],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [{ \"internalType\": \"uint256\", \"name\": \"\", \"type\": \"uint256\" }],\n      \"name\": \"chainIds\",\n      \"outputs\": [{ \"internalType\": \"bytes\", \"name\": \"\", \"type\": \"bytes\" }],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [{ \"internalType\": \"address\", \"name\": \"\", \"type\": \"address\" }],\n      \"name\": \"chainUsers\",\n      \"outputs\": [{ \"internalType\": \"bool\", \"name\": \"\", \"type\": \"bool\" }],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"getCount\",\n      \"outputs\": [\n        { \"internalType\": \"uint256\", \"name\": \"count\", \"type\": \"uint256\" },\n        { \"internalType\": \"uint256\", \"name\": \"countUnique\", \"type\": \"uint256\" }\n      ],\n      \"stateMutability\": \"view\",\n      \"type\": \"function\"\n    },\n    {\n      \"inputs\": [],\n      \"name\": \"increment\",\n      \"outputs\": [],\n      \"stateMutability\": \"nonpayable\",\n      \"type\": \"function\"\n    },\n  ];\n\n  // Contract address for Universal Counter\n  const COUNTER_CONTRACT_ADDRESS = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';\n\n  function Component() {\n    const { connectionStatus } = usePushWalletContext();\n    const { pushChainClient } = usePushChainClient();\n    const { PushChain } = usePushChain();\n\n    // State to store counter values\n    const [counter, setCounter] = useState<number>(0);\n    const [chainData, setChainData] = useState<Array<{chainHash: string, count: number, uniqueCount: number}>>([]);\n\n    const [isLoading, setIsLoading] = useState(false);\n    const [txHash, setTxHash] = useState<string>(\"\");\n\n\n    // Function to encode transaction data\n    const getTxData = () => {\n      return PushChain.utils.helpers.encodeTxData({\n        abi: UCDynamicABI,\n        functionName: 'increment',\n      });\n    };\n\n    // Function to fetch counter values\n    const fetchCounter = async () => {\n      try {\n        const provider = new ethers.JsonRpcProvider(\n          'https://evm.donut.rpc.push.org/'\n        );\n\n        const contract = new ethers.Contract(\n          COUNTER_CONTRACT_ADDRESS,\n          UCDynamicABI,\n          provider\n        );\n\n        const [totalCount] = await contract.getCount();\n        setCounter(Number(totalCount));\n\n        // Get all chain data\n        const newChainData: Array<{chainHash: string, count: number, uniqueCount: number}> = [];\n        let chainIndex = 0;\n\n        try {\n          while (true) {\n            const chainHash = await contract.chainIds(chainIndex);\n            const count = await contract.chainCount(chainHash);\n            const uniqueCount = await contract.chainCountUnique(chainHash);\n\n            newChainData.push({\n              chainHash: ethers.hexlify(chainHash),\n              count: Number(count),\n              uniqueCount: Number(uniqueCount)\n            });\n\n            chainIndex++;\n          }\n        } catch (error) {\n          // Expected error when we reach the end of the array\n        }\n        setChainData(newChainData);\n      } catch (err) {\n        console.error(\"Error reading counter:\", err);\n      }\n    };\n\n    // Handle transaction to increment counter\n    const handleSendTransaction = async () => {\n      if (pushChainClient) {\n        try {\n          setIsLoading(true);\n\n          // Send transaction to increment counter\n          const tx = await pushChainClient.universal.sendTransaction({\n            to: COUNTER_CONTRACT_ADDRESS,\n            data: PushChain.utils.helpers.encodeTxData({\n              abi: UCDynamicABI,\n              functionName: \"increment\",\n            }),\n            value: BigInt(0),\n          });\n\n          setTxHash(tx.hash);\n\n          // Wait for transaction to be mined\n          await tx.wait();\n\n          // Refresh counter values\n          await fetchCounter();\n\n          setIsLoading(false);\n        } catch (err) {\n          console.error(\"Transaction error:\", err);\n          setIsLoading(false);\n        }\n      } else {\n        console.log(\"Please connect your wallet first\");\n      }\n    };\n\n    // Read counter value on component mount\n    useEffect(() => {\n      fetchCounter();\n    }, []);\n\n    return (\n      <div\n        style={{\n          display: 'flex',\n          flexDirection: 'column',\n          alignItems: 'center',\n          gap: '12px',\n        }}\n      >\n        <h2>Universal Counter Example</h2>\n\n        <PushUniversalAccountButton />\n\n        {connectionStatus !== PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <p>Please connect your wallet to interact with the counter.</p>\n        )}\n\n        <div\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            alignItems: 'center',\n            gap: '12px',\n            width: '100%',\n            flexWrap: 'nowrap',\n          }}\n        >\n          <h3>\n            Total Universal Count:{' '}\n            {counter == -1 ? '...' : counter}\n          </h3>\n\n          <div\n            style={{\n              display: 'flex',\n              flexDirection: 'row',\n              alignItems: 'center',\n              justifyContent: 'space-around',\n              gap: '12px',\n              width: '100%',\n            }}\n          >\n            {chainData.length > 0 && (\n              <div style={{ marginTop: \"2rem\", maxWidth: \"600px\" }}>\n                <h3 style={{ fontSize: \"1.2rem\", marginBottom: \"1rem\", color: \"#333\" }}>Chain Data</h3>\n                <table style={{\n                  width: \"100%\",\n                  borderCollapse: \"collapse\",\n                  fontSize: \"0.9rem\",\n                  backgroundColor: \"white\",\n                  borderRadius: \"8px\",\n                  overflow: \"hidden\",\n                  boxShadow: \"0 2px 4px rgba(0,0,0,0.1)\"\n                }}>\n                  <thead>\n                    <tr style={{ backgroundColor: \"#f8f9fa\" }}>\n                      <th style={{ padding: \"12px\", textAlign: \"left\", borderBottom: \"1px solid #dee2e6\" }}>Chain Name</th>\n                      <th style={{ padding: \"12px\", textAlign: \"center\", borderBottom: \"1px solid #dee2e6\" }}>Count</th>\n                      <th style={{ padding: \"12px\", textAlign: \"center\", borderBottom: \"1px solid #dee2e6\" }}>Unique Count</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    {chainData.map((chain, index) => (\n                      <tr key={index} style={{ borderBottom: index < chainData.length - 1 ? \"1px solid #dee2e6\" : \"none\" }}>\n                        <td style={{ padding: \"12px\", fontFamily: \"monospace\", fontSize: \"0.8rem\", wordBreak: \"break-all\" }}>\n                          {PushChain.utils.chains.getChainName(ethers.toUtf8String(chain.chainHash))}\n                        </td>\n                        <td style={{ padding: \"12px\", textAlign: \"center\", fontWeight: \"bold\" }}>\n                          {chain.count}\n                        </td>\n                        <td style={{ padding: \"12px\", textAlign: \"center\", fontWeight: \"bold\" }}>\n                          {chain.uniqueCount}\n                        </td>\n                      </tr>\n                    ))}\n                  </tbody>\n                </table>\n              </div>\n            )}\n          </div>\n        </div>\n\n        {connectionStatus === PushUI.CONSTANTS.CONNECTION.STATUS.CONNECTED && (\n          <div className='counter-container' style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>\n            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>\n              <button\n                className='increment-button'\n                onClick={handleSendTransaction}\n                disabled={isLoading}\n                style={{\n                  backgroundColor: '#d946ef',\n                  color: 'white',\n                  border: 'none',\n                  borderRadius: '20px',\n                  padding: '8px 16px',\n                  fontSize: '14px',\n                  cursor: 'pointer',\n                  fontWeight: 'bold'\n                }}\n              >\n                {isLoading ? 'Processing...' : 'Increment Counter'}\n              </button>\n\n              <button\n                className='refresh-button'\n                onClick={fetchCounter}\n                style={{\n                  backgroundColor: '#d946ef',\n                  color: 'white',\n                  border: 'none',\n                  borderRadius: '20px',\n                  padding: '8px 16px',\n                  fontSize: '14px',\n                  cursor: 'pointer',\n                  fontWeight: 'bold'\n                }}\n              >\n                Refresh Counter Values\n              </button>\n            </div>\n\n            {txHash && pushChainClient && (\n              <div className='transaction-info' style={{ textAlign: 'center' }}>\n                <p>\n                  Transaction Hash:{' '}\n                  <a\n                    href={pushChainClient.explorer.getTransactionUrl(txHash)}\n                    target='_blank'\n                    style={{ color: '#d946ef', textDecoration: 'underline' }}\n                  >\n                    {txHash}\n                  </a>\n                </p>\n              </div>\n            )}\n          </div>\n        )}\n      </div>\n    );\n  }\n\n  return (\n    <PushUniversalWalletProvider config={walletConfig}>\n      <Component />\n    </PushUniversalWalletProvider>\n  );\n}\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "source-code",
      children: "Source Code"
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Universal Counter Tutorial",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/tutorials/universal-counter",
      description: "Full source code for the Universal Counter (hard coded chains) smart contract and example frontend."
    }), "\n", (0,jsx_runtime.jsx)(GitHubRepo/* GitHubRepo */.M, {
      title: "Universal Counter (Dynamic) Tutorial",
      repoUrl: "https://github.com/pushchain/push-chain-examples/tree/main/tutorials/universal-counter-dynamic",
      description: "Full source code for the Universal Counter (dynamic chains) smart contract and example frontend."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "what-we-achieved",
      children: "What we Achieved"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With Universal Counter, you can now:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Identify callers natively from ", (0,jsx_runtime.jsx)(_components.em, {
          children: "any"
        }), " chain."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build logic that adapts to the user’s origin chain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simplify the developer experience for multi-chain apps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate reliance on third-party tooling or oracles."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This makes your Counter smart contract ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "truly universal, all in just a few lines of Solidity"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "whats-next",
      children: "What's Next?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The next tutorial introduces ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Universal ERC-20"
      }), " tokens. Your tokens that can be minted by users of any chain."]
    }), "\n", (0,jsx_runtime.jsx)("div", {
      style: {
        textAlign: 'center'
      },
      children: (0,jsx_runtime.jsx)(_components.mermaid, {
        value: "flowchart TD\n    EU[Ethereum User] --> UTOKEN[Universal ERC-20 Contract]\n    SU[Solana User] --> UTOKEN\n    PU[Push Chain User] --> UTOKEN\n\n    UTOKEN --> EC[1000 $UNICORN]\n    UTOKEN --> SC[1000 $UNICORN]\n    UTOKEN --> PC[1000 $UNICORN]\n\n    style EC fill:#627eea,stroke:#fff,stroke-width:2px,color:#fff\n    style SC fill:#16c492,stroke:#fff,stroke-width:2px,color:#fff\n    style PC fill:#dd44b9,stroke:#fff,stroke-width:2px,color:#fff\n    style EU fill:#627eea,color:#fff\n    style SU fill:#16c492,color:#fff\n    style PU fill:#dd44b9,color:#fff"
      })
    }), "\n", (0,jsx_runtime.jsx)("hr", {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the next tutorial, you’ll learn how to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Deploy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ERC-20"
        }), " contract."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Introduce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mint()"
        }), " functionality accessible to any user."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mint from any chain."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["All of these features will be natively supported in the contract with no requirement of\nthird-party oracles, interop providers or packages.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "This is only possible on Push Chain."
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

/***/ 119365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ },

/***/ 411470
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(618215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(117559);
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
return null;}return/*#__PURE__*/(0,react.cloneElement)(selectedTabItem,{className:(0,clsx/* default */.A)('margin-top--md',selectedTabItem.props.className)});}return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"margin-top--md",children:childTabs.map((tabItem,i)=>/*#__PURE__*/(0,react.cloneElement)(tabItem,{key:i,hidden:tabItem.props.value!==selectedValue}))});}function TabsComponent(props){const tabs=useTabs(props);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.tabs.container,// former name kept for backward compatibility
// see https://github.com/facebook/docusaurus/pull/4086
'tabs-container',styles_module.tabList),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TabList,Object.assign({},tabs,props)),/*#__PURE__*/(0,jsx_runtime.jsx)(TabContent,Object.assign({},tabs,props))]});}function Tabs(props){const isBrowser=(0,useIsBrowser/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)(TabsComponent// Remount tabs after hydration
// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
,Object.assign({},props,{children:sanitizeTabsChildren(props.children)}),String(isBrowser));}

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
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(505873);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/SolidityCode/SolidityCode.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
const SolidityCode=_ref=>{let{children,title='Solidity Contract',fileName='Contract.sol',url=null,showRemixButton=true,className=''}=_ref;const getRemixUrl=()=>{let remixUrl='https://remix.ethereum.org/';if(url){// Convert GitHub blob URL to format Remix can understand
if(url.includes('github.com')&&url.includes('/blob/')){// Use GitHub import format for Remix
remixUrl="https://remix.ethereum.org/#url="+url;}else if(url.includes('raw.githubusercontent.com')){// Already a raw URL, use directly
remixUrl="https://remix.ethereum.org/#url="+url;}else{// Fallback to just opening Remix
remixUrl='https://remix.ethereum.org/';}}return remixUrl;};return/*#__PURE__*/(0,jsx_runtime.jsxs)(SolidityCodeContainer,{className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(CodeHeader,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CodeTitle,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TitleText,{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(FileNameText,{children:fileName})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(ButtonGroup,{children:showRemixButton&&/*#__PURE__*/(0,jsx_runtime.jsxs)(ActionButton,{href:getRemixUrl(),target:"_blank",rel:"noopener noreferrer",children:["Open in Remix",/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiExternalLink */.HaR,{size:16})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeBlock,{children:children})]});};// Styled Components
const SolidityCodeContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__SolidityCodeContainer",componentId:"sc-1w77983-0"})(["margin:24px 0;border-radius:var(--ifm-global-radius);overflow:hidden;@media ","{margin:20px 0;}"],globals/* device */.jO.tablet);const CodeHeader=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeHeader",componentId:"sc-1w77983-1"})(["display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:var(--ifm-playground-header-bg);@media ","{padding:10px 12px;flex-direction:row;align-items:flex-start;gap:8px;}"],globals/* device */.jO.tablet);const CodeTitle=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeTitle",componentId:"sc-1w77983-2"})(["display:flex;align-items:center;gap:10px;"]);const FileIcon=styled_components_browser_esm["default"].span.withConfig({displayName:"SolidityCode__FileIcon",componentId:"sc-1w77983-3"})(["font-size:1.125rem;@media ","{font-size:1rem;}"],globals/* device */.jO.tablet);const TitleText=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__TitleText",componentId:"sc-1w77983-4"})(["font-size:0.875rem;font-weight:600;color:var(--ifm-color-content);margin-bottom:2px;@media ","{font-size:0.8125rem;}"],globals/* device */.jO.tablet);const FileNameText=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__FileNameText",componentId:"sc-1w77983-5"})(["font-size:0.75rem;color:var(--ifm-color-content-secondary);font-family:var(--ifm-font-family-monospace);@media ","{font-size:0.6875rem;}"],globals/* device */.jO.tablet);const ButtonGroup=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__ButtonGroup",componentId:"sc-1w77983-6"})(["display:flex;align-items:center;gap:8px;@media ","{justify-content:flex-end;align-self:center;}"],globals/* device */.jO.tablet);const ActionButton=styled_components_browser_esm["default"].a.withConfig({displayName:"SolidityCode__ActionButton",componentId:"sc-1w77983-7"})(["display:flex;align-items:center;gap:6px;padding:6px 12px;background:transparent;border:1px solid var(--ifm-playground-header-tag);border-radius:4px;color:var(--ifm-color-primary-text);font-size:0.75rem;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;font-weight:500;text-decoration:none;&:hover{border:1px solid var(--ifm-color-primary);text-decoration:none;}@media ","{padding:5px 10px;font-size:0.6875rem;}"],globals/* device */.jO.tablet);const CodeBlock=styled_components_browser_esm["default"].div.withConfig({displayName:"SolidityCode__CodeBlock",componentId:"sc-1w77983-8"})(["overflow-x:auto;background:var(--ifm-playground-header-terminalbg);& > div{margin:0px;}"]);/* harmony default export */ const SolidityCode_SolidityCode = ((/* unused pure expression or super */ null && (SolidityCode)));
;// ./src/components/SolidityCode/index.ts


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
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(505873);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/GitHubRepo/GitHubRepo.tsx
/* eslint-disable */// @ts-nocheck
// React + Web3 Essentials
// External Components
// Internal Configs
const GitHubRepo=_ref=>{let{title,repoUrl,description='View complete source code on GitHub',className=''}=_ref;const handleRepoClick=()=>{window.open(repoUrl,'_blank','noopener,noreferrer');};return/*#__PURE__*/(0,jsx_runtime.jsx)(GitHubRepoContainer,{className:className,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(RepoButton,{onClick:handleRepoClick,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(GitHubIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiGithub */.BR8,{size:20})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(RepoContent,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(RepoTitle,{children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(RepoSubtext,{children:description})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(ExternalLinkIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FiExternalLink */.HaR,{size:16})})]})});};// Styled Components
const GitHubRepoContainer=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__GitHubRepoContainer",componentId:"sc-102xx6v-0"})(["margin:24px 0;padding:0;"]);const RepoButton=styled_components_browser_esm["default"].button.withConfig({displayName:"GitHubRepo__RepoButton",componentId:"sc-102xx6v-1"})(["display:flex;align-items:center;gap:12px;width:100%;padding:16px 20px;background:transparent;border:1px solid var(--ifm-color-emphasis-200);border-radius:8px;cursor:pointer;transition:all 0.2s ease;text-align:left;&:hover{border-color:var(--ifm-color-primary-unified);}&:active{transform:translateY(0);}@media ","{padding:14px 16px;gap:10px;}@media ","{padding:12px 14px;gap:8px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const GitHubIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__GitHubIcon",componentId:"sc-102xx6v-2"})(["display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:var(--ifm-color-black);border-radius:6px;color:var(--ifm-color-white);flex-shrink:0;@media ","{width:36px;height:36px;}@media ","{width:32px;height:32px;svg{width:16px;height:16px;}}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const RepoContent=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoContent",componentId:"sc-102xx6v-3"})(["flex:1;min-width:0;"]);const RepoTitle=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoTitle",componentId:"sc-102xx6v-4"})(["font-size:16px;font-weight:600;color:var(--ifm-color-content);margin-bottom:4px;word-break:break-word;@media ","{font-size:15px;}@media ","{font-size:14px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const RepoSubtext=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__RepoSubtext",componentId:"sc-102xx6v-5"})(["font-size:14px;color:var(--ifm-color-content-secondary);font-weight:400;@media ","{font-size:13px;}@media ","{font-size:12px;}"],globals/* device */.jO.tablet,globals/* device */.jO.mobileL);const ExternalLinkIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"GitHubRepo__ExternalLinkIcon",componentId:"sc-102xx6v-6"})(["display:flex;align-items:center;justify-content:center;color:var(--ifm-color-content-secondary);flex-shrink:0;opacity:0.7;transition:opacity 0.2s ease;",":hover &{opacity:1;}@media ","{svg{width:14px;height:14px;}}"],RepoButton,globals/* device */.jO.mobileL);/* harmony default export */ const GitHubRepo_GitHubRepo = ((/* unused pure expression or super */ null && (GitHubRepo)));
;// ./src/components/GitHubRepo/index.ts


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
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(505873);
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
const TutorialTimer=_ref=>{let{estimatedMinutes,label,className}=_ref;const{t}=(0,es/* useTranslation */.Bd)();// Format time display
const formatTime=minutes=>{if(minutes<60){return minutes+" min"+(minutes!==1?'s':'');}const hours=Math.floor(minutes/60);const remainingMinutes=minutes%60;if(remainingMinutes===0){return hours+" hour"+(hours!==1?'s':'');}return hours+"h "+remainingMinutes+"m";};const timeDisplay=formatTime(estimatedMinutes);return/*#__PURE__*/(0,jsx_runtime.jsxs)(TimerContainer,{className:className,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TimerIcon,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* BiTime */.FOv,{size:"16px","aria-hidden":"true"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TimerContent,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(TimerValue,{children:timeDisplay})})]});};// Styled Components
const TimerContainer=(0,styled_components_browser_esm["default"])(SharedStyling/* ItemH */.Oj).withConfig({displayName:"TutorialTimer__TimerContainer",componentId:"sc-oucx4h-0"})(["display:flex;align-items:center;gap:8px;padding:8px 12px 8px 0px;width:fit-content;margin:-30px 0 28px 0 !important;@media ","{padding:6px 10px;gap:6px;}"],globals/* device */.jO.tablet);const TimerIcon=styled_components_browser_esm["default"].div.withConfig({displayName:"TutorialTimer__TimerIcon",componentId:"sc-oucx4h-1"})(["align-items:center;color:var(--ifm-color-primary-unified);flex-shrink:0;display:flex;"]);const TimerContent=styled_components_browser_esm["default"].div.withConfig({displayName:"TutorialTimer__TimerContent",componentId:"sc-oucx4h-2"})(["display:flex;flex-direction:row;gap:8px;align-items:center;"]);const TimerLabel=styled_components_browser_esm["default"].span.withConfig({displayName:"TutorialTimer__TimerLabel",componentId:"sc-oucx4h-3"})(["font-size:12px;font-weight:500;line-height:1.2;@media ","{font-size:11px;}"],globals/* device */.jO.tablet);const TimerValue=styled_components_browser_esm["default"].span.withConfig({displayName:"TutorialTimer__TimerValue",componentId:"sc-oucx4h-4"})(["font-size:1rem;font-weight:600;color:var(--ifm-color-secondary-text);line-height:1.2;@media ","{font-size:12px;}"],globals/* device */.jO.tablet);
;// ./src/components/TutorialTimer/index.ts
/* harmony default export */ const components_TutorialTimer = (TutorialTimer);

/***/ },

/***/ 602999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IFrameModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(474848);
function IFrameModal(_ref){let{url,buttonTitle='Load Interactive Demo',maxHeight='600px'}=_ref;const[isLoading,setIsLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const[isIframeVisible,setIsIframeVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const iframeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);// Use proxy for push explorer URLs to bypass CSP
const getProxiedUrl=originalUrl=>{if(originalUrl.includes('push.network')||originalUrl.includes('donut.push.network')){// Extract the base URL from the original URL to construct the proxy URL
const urlObj=new URL(originalUrl);const baseUrl=urlObj.protocol+"//"+urlObj.host;// Use the push explorer's proxy endpoint if it's publicly accessible
return baseUrl+"/node-api/iframe-proxy?url="+encodeURIComponent(originalUrl);}return originalUrl;};const proxiedUrl=getProxiedUrl(url);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{setIsLoading(true);},[url]);const handleIframeLoad=()=>{setIsLoading(false);};const handleRefresh=()=>{setIsLoading(true);if(iframeRef.current){iframeRef.current.src=proxiedUrl;}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:'flex',flexDirection:'column',width:'100%',height:isIframeVisible?'80vh':'auto',maxHeight,borderRadius:'12px',overflow:'hidden',margin:'20px 0'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n        @keyframes spin {\n          to { transform: rotate(360deg); }\n        }\n        .loading-spinner {\n          width: 40px;\n          height: 40px;\n          border: 4px solid #f3f3f3;\n          border-top: 4px solid #D548EC;\n          border-radius: 50%;\n          animation: spin 1s linear infinite;\n        }\n      "}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:'flex',alignItems:'center',gap:'10px',padding:'10px',backgroundColor:'var(--ifm-playground-header-bg)'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{flex:1,padding:'8px 12px',backgroundColor:'var(--ifm-navbar-search-bg)',borderRadius:'12px',color:'var(--ifm-color-title-text-color)',fontSize:'0.875rem',fontFamily:'Fira Code',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'},children:url}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:handleRefresh,style:{display:'flex',alignItems:'center',justifyContent:'center',width:'32px',height:'32px',padding:'6px',borderRadius:'12px',cursor:'pointer',transition:'all 0.2s ease',border:'var(--ifm-playground-button-border)',backgroundColor:'var(--ifm-table-body-bg)'},onMouseEnter:e=>{e.currentTarget.style.opacity='0.8';},onMouseLeave:e=>{e.currentTarget.style.opacity='1';},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M14 8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c1.8 0 3.4.8 4.5 2h-2.5v1h4V1h-1v2.1C11.9 1.8 10 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7h-1z",fill:"var(--ifm-iframe-icon-color)",opacity:"1"})})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:'relative',flex:1,backgroundColor:'var(--ifm-playground-header-bg)',borderRadius:'0 0 12px 12px'},children:!isIframeVisible?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{display:'flex',alignItems:'center',justifyContent:'center',padding:'40px 20px'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{onClick:()=>setIsIframeVisible(true),style:{padding:'12px 24px',fontSize:'0.875rem',fontWeight:'600',backgroundColor:'#D548EC',color:'#fff',border:'none',borderRadius:'12px',cursor:'pointer',transition:'opacity 0.2s ease',opacity:0.9,fontFamily:'DM Sans'},onMouseEnter:e=>{e.currentTarget.style.opacity='1';},onMouseLeave:e=>{e.currentTarget.style.opacity='0.9';},children:buttonTitle})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[isLoading&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%, -50%)',zIndex:1},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"loading-spinner"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe",{ref:iframeRef,src:proxiedUrl,title:"IFrame Content",onLoad:handleIframeLoad,sandbox:"allow-scripts allow-same-origin allow-forms allow-popups",style:{width:'100%',height:'100%',border:'none'}})]})})]});}

/***/ }

}]);