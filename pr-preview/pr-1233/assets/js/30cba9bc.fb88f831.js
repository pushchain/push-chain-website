(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[16474],{

/***/ 830849
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_03_build_12_utility_functions_mdx_30c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-03-build-12-utility-functions-mdx-30c.json
const site_docs_chain_03_build_12_utility_functions_mdx_30c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/build/docs-chain-build-utility-functions","title":"Utility Functions","description":"Utility Functions | Build | Push Chain Docs","source":"@site/docs/chain/03-build/12-Utility-Functions.mdx","sourceDirName":"chain/03-build","slug":"/chain/build/utility-functions","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/build/utility-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/03-build/12-Utility-Functions.mdx","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"id":"docs-chain-build-utility-functions","title":"Utility Functions","hide_title":false,"slug":"./utility-functions","displayed_sidebar":"pushChainSidebar","sidebar_position":12,"image":"/assets/docs/previews/docs_chain_build--utility_functions.png"},"sidebar":"pushChainSidebar","previous":{"title":"Sign Universal Message","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/build/sign-universal-message"},"next":{"title":"Reading Blockchain State","permalink":"/push-chain-website/pr-preview/pr-1233/docs/chain/build/reading-blockchain-state"}}');
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
// EXTERNAL MODULE: ./src/components/PushAPIReference/PushAPIReference.tsx
var PushAPIReference = __webpack_require__(303547);
// EXTERNAL MODULE: ./src/components/NodeJSVirtualIDE/NodeJSVirtualIDE.tsx
var NodeJSVirtualIDE = __webpack_require__(891517);
// EXTERNAL MODULE: ./src/components/ConstantsDropdown/ConstantsDropdown.tsx
var ConstantsDropdown = __webpack_require__(510103);
;// ./docs/chain/03-build/12-Utility-Functions.mdx


const frontMatter = {
	id: 'docs-chain-build-utility-functions',
	title: 'Utility Functions',
	hide_title: false,
	slug: './utility-functions',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 12,
	image: '/assets/docs/previews/docs_chain_build--utility_functions.png'
};
const contentTitle = undefined;

const assets = {

};

/*Content Start*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Begins*/
/*API Section Ends*/
/*API Section Begins*/
/*API Section Ends*/
/*API Section Begins*/
/*API Section Ends*/
/*API Section Begins*/
/*API Section Ends*/
/*API Section Begins*/
/*API Section Ends*/
/*API Section Begins*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Begins*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*API Section Start*/
/*API Section Ends*/
/*Deprecated Methods — commented out, removed in SDK v6.
`convertOriginToExecutor` -> use `deriveExecutorAccount`.
`convertExecutorToOriginAccount` -> use `resolveControllerAccount`.
The original section bodies (with playgrounds and arg tables) live in
git history; restore from there if you need the full migration prose.*/
/*API Section Begins*/
/*API Section Ends*/
/*Convert Executor Address to Origin Account — removed in SDK v6,
replaced by `resolveControllerAccount`. Section preserved below for
git diff legibility only; not rendered.*/








const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Helper Utilities",
  "id": "helper-utilities",
  "level": 2
}, {
  "value": "Parse Units",
  "id": "parse-units",
  "level": 3
}, {
  "value": "Format Units",
  "id": "format-units",
  "level": 3
}, {
  "value": "Encode Transaction Data",
  "id": "encode-transaction-data",
  "level": 3
}, {
  "value": "Chain Utilities",
  "id": "chain-utilities",
  "level": 2
}, {
  "value": "Get Chain Namespace from Chain Name",
  "id": "get-chain-namespace-from-chain-name",
  "level": 3
}, {
  "value": "Get Chain Name from Chain Namespace",
  "id": "get-chain-name-from-chain-namespace",
  "level": 3
}, {
  "value": "Get Supported Chains By Name",
  "id": "get-supported-chains-by-name",
  "level": 3
}, {
  "value": "Get Supported Chains",
  "id": "get-supported-chains",
  "level": 3
}, {
  "value": "Account Utilities",
  "id": "account-utilities",
  "level": 2
}, {
  "value": "Convert to Universal Account",
  "id": "convert-to-universal-account",
  "level": 3
}, {
  "value": "Convert to Chain-Agnostic Address",
  "id": "convert-to-chain-agnostic-address",
  "level": 3
}, {
  "value": "Convert from Chain-Agnostic to Universal Account",
  "id": "convert-from-chain-agnostic-to-universal-account",
  "level": 3
}, {
  "value": "Derive Executor Account",
  "id": "derive-executor-account",
  "level": 3
}, {
  "value": "Resolve Controller Account",
  "id": "resolve-controller-account",
  "level": 3
}, {
  "value": "Signer Utilities",
  "id": "signer-utilities",
  "level": 2
}, {
  "value": "Create Universal Signer from Keypair",
  "id": "create-universal-signer-from-keypair",
  "level": 3
}, {
  "value": "Token Utilities",
  "id": "token-utilities",
  "level": 2
}, {
  "value": "Get Moveable Tokens",
  "id": "get-moveable-tokens",
  "level": 3
}, {
  "value": "Get Payable Tokens",
  "id": "get-payable-tokens",
  "level": 3
}, {
  "value": "Get PRC-20 Address",
  "id": "get-prc-20-address",
  "level": 3
}, {
  "value": "Get PC-20 Address",
  "id": "get-pc-20-address",
  "level": 3
}, {
  "value": "Conversion Utilities",
  "id": "conversion-utilities",
  "level": 2
}, {
  "value": "Calculate Minimum Amount from Slippage",
  "id": "calculate-minimum-amount-from-slippage",
  "level": 3
}, {
  "value": "Get Conversion Quote",
  "id": "get-conversion-quote",
  "level": 3
}, {
  "value": "Explorer Utilities",
  "id": "explorer-utilities",
  "level": 2
}, {
  "value": "Get Transaction URL",
  "id": "get-transaction-url",
  "level": 3
}, {
  "value": "List Explorer URLs",
  "id": "list-explorer-urls",
  "level": 3
}, {
  "value": "List All Explorer URLs",
  "id": "list-all-explorer-urls",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("title", {
        children: "Utility Functions | Build | Push Chain Docs"
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section covers the most commonly used helpers in the Push Chain Core SDK to simplify common workflows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "helper-utilities",
      children: "Helper Utilities"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parse-units",
      children: "Parse Units"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.helpers.parseUnits(value, exponent): bigint"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Converts a human-readable token amount into its smallest unit representation (bigint). It multiplies the given value by 10^decimals, ensuring amounts are safe for on-chain use."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commonly used when preparing transaction parameters (e.g., converting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1.5"
      }), " into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1500000000000000000"
      }), ", similar to how you convert ETH to wei, PC to uPC, or any other tokens to its smallest denominator)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const result = PushChain.utils.helpers.parseUnits('1.5', { decimals: 18 });\n// variation: const result = PushChain.utils.helpers.parseUnits('1.5', 18);\n\n// Returns: 1500000000000000000n (1.5 PC in uPC)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "value"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The string representation of the number to parse. Can include decimals (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "\"1.5\""
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "\"420\""
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "\"0.1\""
              }), ")."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "exponent"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number | { decimals: number }"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Number of decimal places to scale by. Provide either a number (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "18"
              }), ") or an object with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "decimals"
              }), ". Must be a non-negative integer. Examples: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "18"
              }), " for PC/ETH, ", (0,jsx_runtime.jsx)(_components.code, {
                children: "6"
              }), " for USDC, ", (0,jsx_runtime.jsx)(_components.code, {
                children: "8"
              }), " for BTC."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `value` <bigint>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// bigint - the scaled integer value\n1500000000000000000n\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Parse Units for Common Token Scenarios",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.helpers\.parseUnits
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_parse_units
import { PushChain } from '@pushchain/core';

  function main() {
    console.log('=== Common Token Conversion Examples ===');
    
    // ETH to Wei or PC to uPC (18 decimals)
    const ethToWei = PushChain.utils.helpers.parseUnits('1.5', { decimals: 18 });
    console.log('1.5 ETH to Wei:', ethToWei.toString());
    
    // USDC amount (6 decimals) 
    const usdcAmount = PushChain.utils.helpers.parseUnits('100.50', { decimals: 6 });
    console.log('100.50 USDC to smallest unit:', usdcAmount.toString());
    
    // BTC to Satoshi (8 decimals)
    const btcToSatoshi = PushChain.utils.helpers.parseUnits('0.00000001', { decimals: 8 });
    console.log('0.00000001 BTC to Satoshi:', btcToSatoshi.toString());
    
    console.log('=== Basic Number Parsing ===');
    
    // Integer values
    const integerResult = PushChain.utils.helpers.parseUnits('420', { decimals: 9 });
    console.log('420 with 9 decimal places:', integerResult.toString());
    
    // Decimal values
    const decimalResult = PushChain.utils.helpers.parseUnits('0.1', { decimals: 6 });
    console.log('0.1 with 6 decimal places:', decimalResult.toString());
    
    console.log('=== Variation Examples ===');
    
    // PC token amount (18 decimals)
    const pushAmount = PushChain.utils.helpers.parseUnits('1000.5', 18);
    console.log('1000.5 PC tokens:', pushAmount.toString());
    
    // Precise decimal matching
    const preciseAmount = PushChain.utils.helpers.parseUnits('1.123456', 6);
    console.log('Precise 6-decimal amount:', preciseAmount.toString());
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "format-units",
      children: "Format Units"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.helpers.formatUnits(value, {options}): string"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Converts a raw token amount in smallest units (bigint) into a human-readable decimal string. It divides the given value by 10^decimals, making it easy to display amounts for users."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commonly used in UI or logs (e.g., turning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1500000000000000000"
      }), " into ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1.5"
      }), " or any token from smallest unit to its human-readable value)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const result = PushChain.utils.helpers.formatUnits('1500000000000000000', { decimals: 18 });\n// variation: const result = PushChain.utils.helpers.formatUnits('1500000000000000000', 18);\n\n// Returns: 1.5 (1.5 PC in uPC)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "value"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bigint | string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Raw amount in smallest units (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "'1500000000000000000'"
              }), " for 1.5 assuming ", (0,jsx_runtime.jsx)(_components.code, {
                children: "18"
              }), " decimals)."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "options.decimals"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The number of decimal places to scale by. Must be a non-negative integer. For example, use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "18"
              }), " for PC or ETH, ", (0,jsx_runtime.jsx)(_components.code, {
                children: "6"
              }), " for USDC, ", (0,jsx_runtime.jsx)(_components.code, {
                children: "8"
              }), " for BTC."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.precision"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The number of precision to scale by, will round up the value. Must be a non-negative integer. For example, use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "4"
              }), " for returning 4 digits after the decimal."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `value` <string>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// string - human readable value\n1.5\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Format Units for Common Token Scenarios",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.helpers\.formatUnits
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_format_units
import { PushChain } from '@pushchain/core';

  function main() {
    console.log('=== Common Token Conversion Examples ===');
    
    // Wei to ETH or uPC to PC (18 decimals)
    const ethToWei = PushChain.utils.helpers.formatUnits('1500000000000000000', { decimals: 18 });
    console.log('1500000000000000000 Wei to ETH (1.5):', ethToWei);
    
    // USDC amount (6 decimals) 
    const usdcAmount = PushChain.utils.helpers.formatUnits('100500000', { decimals: 6 });
    console.log('100500000 unit of USDC to human readable USDC (100.5):', usdcAmount);
    
    console.log('=== Basic Number Formatting ===');
    
    // Integer values
    const integerResult = PushChain.utils.helpers.formatUnits('420000000000', { decimals: 9, precision: 2 });
    console.log('420000000000 with 9 decimals and 2 precision (420.00):', integerResult);
    
    // Decimal values
    const decimalResult = PushChain.utils.helpers.formatUnits('123456', { decimals: 5, precision: 4 });
    console.log('123456 with 6 decimal places and 4 precision (1.2346):', decimalResult);
    
    console.log('=== Variation Examples ===');
    
    // PC token amount (18 decimals)
    const pushAmount = PushChain.utils.helpers.formatUnits('1000500000000000000000', 18);
    console.log('1000500000000000000000 uPC tokens to PC tokens (1000.5):', pushAmount);
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "encode-transaction-data",
      children: "Encode Transaction Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.helpers.encodeTxData({abi_or_idl, functionName, args}): string"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
      groupId: "encode-tx-data-example",
      children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "evm",
        label: "EVM (ABI)",
        default: true,
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-typescript",
            children: "const encodedData = PushChain.utils.helpers.encodeTxData({\n  abi: 'smart_contract_abi',\n  functionName: 'functionName',\n  args: []\n});\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
        value: "solana",
        label: "Solana (IDL)",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-typescript",
            children: "const encodedData = PushChain.utils.helpers.encodeTxData({\n  idl: 'smart_contract_idl',\n  functionName: 'receive_sol',\n  args: [BigInt(0)],\n});\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "encodeTxData"
      }), " produces chain-appropriate calldata based on the shape of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "abi"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "idl"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Default"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "abi"
                })
              }), " | ", (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "idl"
                })
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "any[]"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Either an EVM ABI array or an Anchor IDL object. The input shape determines which encoding is produced."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "functionName"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The function (EVM) or instruction (Solana) name to encode. Both ", (0,jsx_runtime.jsx)(_components.code, {
                children: "snake_case"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "camelCase"
              }), " are accepted and matched against the IDL."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "args"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "any[]"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[]"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Positional arguments. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "BigInt"
              }), " for ", (0,jsx_runtime.jsx)(_components.code, {
                children: "u64"
              }), "/", (0,jsx_runtime.jsx)(_components.code, {
                children: "u128"
              }), "; 0x-hex 32-byte strings are auto-converted to Solana ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PublicKey"
              }), " when the IDL declares a ", (0,jsx_runtime.jsx)(_components.code, {
                children: "pubkey"
              }), " arg."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `encodedData` <string>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// encodedData string - the encoded function call data\n'0xd09de08a';\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Encode Transaction Data for Smart Contract Function",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
        className: "liveplaytab",
        groupId: "encode-tx-data-playground",
        children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
          value: "evm",
          label: "EVM (ABI)",
          default: true,
          children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
            repo: {
              title: "Open in Github",
              url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
            },
            children: `
// customPropHighlightRegexStart=PushChain\.utils\.helpers\.encodeTxData
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_encode_tx_data
import { PushChain } from '@pushchain/core';

  function main() {
    // Example ABI for a simple counter contract
    const testAbi = [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'increment',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'countPC',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ];

    // Encode transaction data for the increment function
    const result = PushChain.utils.helpers.encodeTxData({
      abi: testAbi,
      functionName: 'increment'
    });
    
    console.log('Encoded transaction data:', result);
  }

  main();

`
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
          value: "solana",
          label: "Solana (IDL)",
          children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
            repo: {
              title: "Open in Github",
              url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
            },
            children: `
// customPropHighlightRegexStart=PushChain\.utils\.helpers\.encodeTxData
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_encode_tx_data_solana
import { PushChain } from '@pushchain/core';

  function main() {
    // Anchor IDL for the Solana target — trimmed to just the receive_sol
    // instruction we call below. In a real app this comes from your Anchor
    // program's target/idl/*.json.
    const testCounterIdl = {
      address: '8yNqjrMnFiFbVTVQcKij8tNWWTMdFkrDf9abCGgc2sgx', // SOL_TEST_PROGRAM
      metadata: { name: 'test_counter', version: '0.1.0', spec: '0.1.0' },
      instructions: [
        {
          name: 'receive_sol',
          discriminator: [121, 244, 250, 3, 8, 229, 225, 1],
          accounts: [
            { name: 'counter', writable: true, pda: { seeds: [{ kind: 'const', value: [99, 111, 117, 110, 116, 101, 114] }] } }, // 'counter'
            { name: 'recipient', writable: true, address: '89q1AUFb7YREHtjc1aYaPywovPq6tb3GYNPyDUJ3rshi' },
            { name: 'cea_authority', writable: true }, // auto-populated with sender's CEA
            { name: 'system_program', address: '11111111111111111111111111111111' },
          ],
          args: [{ name: 'amount', type: 'u64' }],
        },
      ],
    };

    const result = PushChain.utils.helpers.encodeTxData({
      idl: testCounterIdl,
      functionName: 'receive_sol',
      args: [BigInt(0)]
    });
    
    console.log('Encoded transaction data:', result);
  }

  main();

`
          })
        })]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chain-utilities",
      children: "Chain Utilities"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-chain-namespace-from-chain-name",
      children: "Get Chain Namespace from Chain Name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.chains.getChainNamespace(chainName): string"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every external chain is represented as a particular string on Push Chain. You can see the list of supported chains in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/setup/chain-config#universal-chain-namespace",
        children: "Chain Configuration"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const chainName = PushChain.utils.chains.getChainNamespace('PUSH_TESTNET_DONUT');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "name"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The chain name to convert to chain namespace. Eg: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PUSH_TESTNET_DONUT"
              }), " converts to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eip155:42101"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ETHEREUM_SEPOLIA"
              }), " converts to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eip155:11155111"
              }), "."]
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `chainNamespace` <string>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// chainNamespace string\n'eip155:42101';\n\n// NOTE: returns undefined if chainName is unsupported\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Get Chain Namespace from Chain Name",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.chains\.getChainNamespace
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_get_chain_namespace
import { PushChain } from '@pushchain/core';

  function main() {
    const chainName = PushChain.utils.chains.getChainNamespace('PUSH_TESTNET_DONUT');
    console.log(chainName);
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-chain-name-from-chain-namespace",
      children: "Get Chain Name from Chain Namespace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.chains.getChainName(chainNamespace): string"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every external chain is represented as a particular string on Push Chain. You can see the list of supported chains in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/setup/chain-config#universal-chain-namespace",
        children: "chain configuration"
      }), " section."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const chainName = PushChain.utils.chains.getChainName('eip155:42101');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "namespace"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The chain namespace to convert to chain name. Eg: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eip155:42101"
              }), " converts to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PUSH_TESTNET_DONUT"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eip155:11155111"
              }), " converts to ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ETHEREUM_SEPOLIA"
              }), "."]
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `chainName` <string>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// chainName string\n'PUSH_TESTNET_DONUT';\n\n// NOTE: returns undefined if chainNamespace is unsupported\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Get Chain Name from Chain Namespace",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.chains\.getChainName
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_get_chain_name
import { PushChain } from '@pushchain/core';

  function main() {
    const chainName = PushChain.utils.chains.getChainName('eip155:42101');
    console.log(chainName);
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-supported-chains-by-name",
      children: "Get Supported Chains By Name"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.chains.getSupportedChainsByName(pushNetwork): { chains: [] }"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns the list of supported chain names (human-readable strings) for a given Push Network."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const chains = PushChain.utils.chains.getSupportedChainsByName(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "pushNetwork"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PUSH_NETWORK\t"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Push Chain network to retrieve list of supported chain names from. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PUSH_NETWORK.TESTNET"
              }), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "PUSH_NETWORK"
              })]
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `{ chains }` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// { chains } object - returns human-readable chain names as strings\n{\n  chains: [\n    'PUSH_TESTNET_DONUT',\n    'ETHEREUM_SEPOLIA',\n    'ARBITRUM_SEPOLIA',\n    'BASE_SEPOLIA',\n    'BNB_TESTNET',\n    'SOLANA_DEVNET',\n    // ...\n  ]\n}\n\n// NOTE: returns empty chains array if pushNetwork is unsupported\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Get Supported Chains By Name for a given Push Network",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\\.utils\\.chains\\.getSupportedChainsByName
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_get_supported_chains_by_name
import { PushChain } from '@pushchain/core';

  function main() {
    const chains = PushChain.utils.chains.getSupportedChainsByName(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET);
    console.log(JSON.stringify(chains));
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-supported-chains",
      children: "Get Supported Chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.chains.getSupportedChains(pushNetwork): { chains: [] }"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns the list of chains supported for a given Push Network."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const chains = PushChain.utils.chains.getSupportedChains(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "pushNetwork"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PUSH_NETWORK\t"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Push Chain network to retrieve list of supported chains from. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PUSH_NETWORK.TESTNET"
              }), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "PUSH_NETWORK"
              })]
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `{ chains }` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// { chains } object\n{\n  chains: [\n    PushChain.CONSTANTS.CHAIN.PUSH_TESTNET,\n    PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n    PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA,\n    PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA,\n    PushChain.CONSTANTS.CHAIN.BNB_TESTNET,\n    PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,\n    // ...\n  ]\n}\n\n// NOTE: returns empty chains array if pushNetwork is unsupported\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Get Supported Chains for a given Push Network",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.chains\.getSupportedChains
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_get_supported_chains
import { PushChain } from '@pushchain/core';

  function main() {
    const chains = PushChain.utils.chains.getSupportedChains(PushChain.CONSTANTS.PUSH_NETWORK.TESTNET);
    console.log(JSON.stringify(chains));
  }

  main();

`
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "account-utilities",
      children: "Account Utilities"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "convert-to-universal-account",
      children: "Convert to Universal Account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.account.toUniversal(address, {options}): <UniversalAccount>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const account = PushChain.utils.account.toUniversal(address, {\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "address"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["An address string (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "0xabc..."
              }), ")."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "options.chain"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The target chain for the signer. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT"
              }), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN_FULL"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `UniversalAccount` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// UniversalAccount object\n{\n  chain: 'eip155:11155111',\n  address: '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba'\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Convert Ethereum Sepolia Address to UniversalAccount",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.account\.toUniversal
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_account_to_universal
import { PushChain } from '@pushchain/core';

  function main() {
    const account = PushChain.utils.account.toUniversal(
      '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba', {
        chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      }
    );
    console.log(JSON.stringify(account, null, 2));
  }

  main()

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "convert-to-chain-agnostic-address",
      children: "Convert to Chain-Agnostic Address"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.account.toChainAgnostic(address, {options}): string"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const chainAgnosticAddress = PushChain.utils.account.toChainAgnostic(address, {\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "address"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["An address string (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "0xabc..."
              }), ")."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "options.chain"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The target chain for the signer. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT"
              }), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN_FULL"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `ChainAgnosticAddress` <string>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Chain Agnostic Address\n'eip155:11155111:0xD8d6aF611a17C236b13235B5318508FA61dE3Dba';\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Convert Ethereum Sepolia address to chain agnostic address",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
  // customPropHighlightRegexStart=PushChain\.utils\.account\.toChainAgnostic
  // customPropHighlightRegexEnd=\\);
  // customPropGTagEvent=utility_account_to_chain_agnostic
  import { PushChain } from '@pushchain/core';

  function main() {
    const chainAgnosticAddress = PushChain.utils.account.toChainAgnostic(
      '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba', {
        chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      }
    );
    console.log(JSON.stringify(chainAgnosticAddress, null, 2));
  }

  main()

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "convert-from-chain-agnostic-to-universal-account",
      children: "Convert from Chain-Agnostic to Universal Account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.account.fromChainAgnostic(chainAgnosticAddress): <UniversalAccount>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const account = PushChain.utils.account.fromChainAgnostic(chainAgnosticAddress);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "chainAgnosticAddress"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["A full chain agnostic address string (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eip155:11155111:0x35B84d6848D16415177c64D64504663b998A6ab4"
              }), ")."]
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `UniversalAccount` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// UniversalAccount object: { chain: string, address: string }\n{\n  chain: 'eip155:11155111',\n  address: '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba'\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Convert Ethereum Sepolia chain agnostic address to UniversalAccount",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.account\.fromChainAgnostic
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_account_from_chain_agnostic
import { PushChain } from '@pushchain/core';

  function main() {
    const account = PushChain.utils.account.fromChainAgnostic(
      'eip155:11155111:0xD8d6aF611a17C236b13235B5318508FA61dE3Dba'
      );
      console.log(JSON.stringify(account, null, 2));
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "derive-executor-account",
      children: "Derive Executor Account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.account.deriveExecutorAccount(universalAccount, { options? }): Promise<{ address: string, deployed?: boolean }>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Derives the execution account for a given input account. This function supports multiple derivation flows based on the input and options provided."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UOA → UEA"
        }), ": Derive a Universal Executor Account on Push Chain from a Universal Origin Account"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push account / UOA → CEA"
        }), ": Derive a Chain Executor Account on an external chain from a Push Chain account or UOA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Push-native account"
        }), ": Returns the same account if it's already a Push Chain native account"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Derive UEA from UOA\nconst universalAccount = PushChain.utils.account.toUniversal(\n  '0xD8d6aF611a17C236b13235B5318508FA61dE3Dba',\n  { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }\n);\nconst result = await PushChain.utils.account.deriveExecutorAccount(universalAccount);\n\n// Derive UEA from Solana account\nconst solanaAccount = PushChain.utils.account.toUniversal(\n  'EUYcfSUScdFgKMbB3rRdgRZwXmcxY7QCRQa2JwrchP1Q',\n  { chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET }\n);\nconst ueaResult = await PushChain.utils.account.deriveExecutorAccount(solanaAccount);\n\n// Derive CEA from Push account\nconst pushAccount = PushChain.utils.account.toUniversal(\n  '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5',\n  { chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET }\n);\nconst ceaResult = await PushChain.utils.account.deriveExecutorAccount(\n  pushAccount,\n  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }\n);\n\n// Derive CEA from Solana account that will be there on BNB Testnet\nconst ceaSolanaResult = await PushChain.utils.account.deriveExecutorAccount(\n  solanaAccount,\n  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Default"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "universalAccount"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "UniversalAccount"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["UniversalAccount object created via ", (0,jsx_runtime.jsx)(_components.code, {
                children: "toUniversal()"
              }), ". Represents any blockchain account in a universal format."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.chain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "undefined"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Optional. When provided, derives a Chain Executor Account (CEA) on the specified external chain. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.CHAIN"
              }), " values. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.skipNetworkCheck"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              }), ", performs deterministic derivation only without checking deployment status. When ", (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              }), ", includes deployment/existence check."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `{ address, deployed? }` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Response object\n{\n  address: '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5',\n  deployed: true  // Only included when skipNetworkCheck is false\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Derive Executor Account",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\\.utils\\.account\\.deriveExecutorAccount
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_derive_executor_account
import { PushChain } from '@pushchain/core'

  async function main() {
    // Example 1: Derive UEA from Ethereum account
    const ethAccount = PushChain.utils.account.toUniversal(
      '0xe1ceea8efaf7fb973cb65653caa7dd3d59283f25',
      { chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA }
    );
    const ueaResult = await PushChain.utils.account.deriveExecutorAccount(ethAccount);
    console.log('UEA from Ethereum account:');
    console.log(JSON.stringify(ueaResult, null, 2));

    // Example 2: Derive UEA from Solana account
    const solanaAccount = PushChain.utils.account.toUniversal(
      '5BoLqCmrqbrqv2QwUnpccC62scUxDojpYw2UyM8aGpru',
      { chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET }
    );
    const ueaFromSolana = await PushChain.utils.account.deriveExecutorAccount(solanaAccount);
    console.log('UEA from Solana account:');
    console.log(JSON.stringify(ueaFromSolana, null, 2));

    // Example 3: Derive CEA from Push account
    const pushAccount = PushChain.utils.account.toUniversal(
      '0x3ee31c0C8b9888e267781b2FD73cDA1D7FfA46eE',
      { chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET }
    );
    const ceaResult = await PushChain.utils.account.deriveExecutorAccount(
      pushAccount,
      { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
    );
    console.log('CEA on BNB Testnet:');
    console.log(JSON.stringify(ceaResult, null, 2));

    // Example 4: Skip network check (deterministic only)
    const deterministicResult = await PushChain.utils.account.deriveExecutorAccount(
      ethAccount,
      { skipNetworkCheck: true }
    );
    console.log('Deterministic derivation:');
    console.log(JSON.stringify(deterministicResult, null, 2));
  }

  await main().catch(console.error)

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolve-controller-account",
      children: "Resolve Controller Account"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.account.resolveControllerAccount(account, { options? }): Promise<{ accounts: Array<AccountInfo> }>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resolves the controller identity behind an execution account. This function supports recursive resolution to trace back to the original Universal Origin Account (UOA)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Use Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "UEA → UOA"
        }), ": Resolve the Universal Origin Account from a Universal Executor Account"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CEA → Push account → UOA"
        }), ": Resolve through Chain Executor Account to Push account, then to UOA if applicable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive resolution"
        }), ": Automatically follows the chain of derivation back to the controller identity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Resolve UOA from UEA\nconst result = await PushChain.utils.account.resolveControllerAccount('0xUEA...');\n\n// Resolve from CEA with chain context\nconst ceaResult = await PushChain.utils.account.resolveControllerAccount(\n  '0xCEA...',\n  { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Default"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "account"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Executor account to resolve. Can be a UEA, CEA, or Push Chain account address."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.chain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "undefined"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Required for CEA context. Specifies which chain the CEA is deployed on. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.CHAIN"
              }), " values. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.skipNetworkCheck"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["When ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              }), ", performs deterministic resolution only without checking existence. When ", (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              }), ", includes existence check."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details/* default */.A, {
      summary: "Returns `{ accounts }` <object>",
      className: "alert alert--fn-args",
      children: [(0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Example 1: Resolving CEA that has UEA with UOA controller\n{\n  accounts: [\n    {\n      chain: 'eip155:42101',\n      chainName: 'PUSH_TESTNET_DONUT',\n      address: '0x2Fd904d6f2C0b34d58426C8Ae9c5267E845CE98f',\n      type: 'uea',\n      exists: true\n    },\n    {\n      chain: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',\n      chainName: 'SOLANA_DEVNET',\n      address: '72JBejJFXrRKpQ69Hmaqr7vWJr6pdZXFEL6jt3sadsXU',\n      type: 'uoa',\n      exists: true,\n      role: 'controller'\n    }\n  ]\n}\n\n// Example 2: Resolving CEA from Push Account (EOA) or smart contract\n{\n  accounts: [\n    {\n      chain: 'eip155:42101',\n      chainName: 'PUSH_TESTNET_DONUT',\n      address: '0x2Fd904d6f2C0b34d58426C8Ae9c5267E845CE98f',\n      type: 'uoa',\n      exists: true,\n      role: 'controller'\n    }\n  ]\n}\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Field"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "accounts"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Array"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Array of account objects in the resolution chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "chain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Chain namespace identifier (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "eip155:42101"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "solana:EtWTRABZaYq..."
              }), ")"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "chainName"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Human-readable chain constant name (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PUSH_TESTNET_DONUT"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "SOLANA_DEVNET"
              }), ")"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "address"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Account address on the chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "type"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Account type: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "uea"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "uoa"
              }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cea"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "exists"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Whether the account exists on-chain"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "role"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "controller"
              }), " indicates the controlling account in the resolution chain"]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Resolve Controller Account",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\\.utils\\.account\\.resolveControllerAccount
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_resolve_controller_account
import { PushChain } from '@pushchain/core'

  async function main() {
    // Example 1: Resolve controller from UEA
    const ueaAddress = '0x98cA97d2FB78B3C0597E2F78cd11868cACF423C5';
    const result1 = await PushChain.utils.account.resolveControllerAccount(ueaAddress);
    console.log('Resolution chain from UEA:');
    console.log(JSON.stringify(result1, null, 2));

    // Example 2: Resolve from CEA with chain context
    const ceaAddress = '0x5d71c70571789F0cd3bE84513523a9993740BDf6';
    const result2 = await PushChain.utils.account.resolveControllerAccount(
      ceaAddress,
      { chain: PushChain.CONSTANTS.CHAIN.BNB_TESTNET }
    );
    console.log('Resolution chain from CEA:');
    console.log(JSON.stringify(result2, null, 2));

    // Example 3: Skip network check (deterministic only)
    const result3 = await PushChain.utils.account.resolveControllerAccount(
      ueaAddress,
      { skipNetworkCheck: true }
    );
    console.log('Deterministic resolution:');
    console.log(JSON.stringify(result3, null, 2));
  }

  await main().catch(console.error)

`
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "signer-utilities",
      children: "Signer Utilities"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "create-universal-signer-from-keypair",
      children: "Create Universal Signer from Keypair"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.signer.toUniversalFromKeypair(keypair, {options}): Promise<UniversalSigner>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(\n  keypair,\n  {\n    chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,\n    library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,\n  }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "keypair"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Keypair"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "A keypair object from one of the supported libraries (ethers v5/v6, viem, or a custom UniversalSignerSkeleton)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "options.chain"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The target chain for the signer. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT"
              }), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN_FULL"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "options.library"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "LIBRARY"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The library to use for the signer. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6"
              }), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "LIBRARY"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `UniversalSigner` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// UniversalSigner object\n{\n  account: {\n    address: '0xD173b7f04D539A5794e14030c4E172B2E3df92f3',\n    chain: 'eip155:11155111'\n  },\n  signMessage: [Function: signMessage],\n  signAndSendTransaction: [Function: signAndSendTransaction],\n  signTypedData: [Function: signTypedData]\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Create Universal Signer from Keypair",
      className: "alert alert--live-play alert-top-pad-20",
      children: (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
        className: "liveplaytab",
        groupId: "code-examples",
        children: [(0,jsx_runtime.jsx)(TabItem/* default */.A, {
          value: "ethers_v6",
          label: "Ethers (v6)",
          default: true,
          children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
            repo: {
              title: "Open in Github",
              url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
            },
            children: `
  // customPropHighlightRegexStart=PushChain\.utils\.signer\.toUniversalFromKeypair
  // customPropHighlightRegexEnd=\\);
  // customPropGTagEvent=utility_signer_from_keypair_ethers
  import { PushChain } from '@pushchain/core';
  import { ethers } from 'ethers';

  async function main() {
    const provider = new ethers.JsonRpcProvider('https://sepolia.gateway.tenderly.co');
    const wallet = ethers.Wallet.createRandom(provider);

    const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(wallet, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      library: PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6,
    });

    console.log(JSON.stringify(universalSigner, null, 2));
  }

  await main().catch(console.error);

`
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
          value: "viem",
          label: "Viem",
          children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
            repo: {
              title: "Open in Github",
              url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
            },
            children: `
  // customPropHighlightRegexStart=PushChain\.utils\.signer\.toUniversalFromKeypair
  // customPropHighlightRegexEnd=\\);
  // customPropGTagEvent=utility_signer_from_keypair_viem
  import { PushChain } from '@pushchain/core'
  import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';
  import { createWalletClient, http } from 'viem';
  import { sepolia } from 'viem/chains';

  async function main() {
    const account = privateKeyToAccount(generatePrivateKey());
    const walletClient = createWalletClient({
      account,
      chain: sepolia,
      transport: http(),
    });

    const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(walletClient, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      library: PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM,
    })

    console.log(JSON.stringify(universalSigner, null, 2));
  }

  await main().catch(console.error);

`
          })
        }), (0,jsx_runtime.jsx)(TabItem/* default */.A, {
          value: "solana_web3js",
          label: "Solana (Web3 JS)",
          children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
            repo: {
              title: "Open in Github",
              url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
            },
            children: `
// customPropHighlightRegexStart=PushChain\.utils\.signer\.toUniversalFromKeypair
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_signer_from_keypair_solana
import { PushChain } from '@pushchain/core';
import { Keypair } from '@solana/web3.js';

  async function main() {
    const keypair = Keypair.generate()

    const universalSigner = await PushChain.utils.signer.toUniversalFromKeypair(keypair, {
      chain: PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET,
      library: PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS,
    });

    console.log(JSON.stringify(universalSigner, null, 2));
  }

  await main().catch(console.error);

`
          })
        })]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "token-utilities",
      children: "Token Utilities"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-moveable-tokens",
      children: "Get Moveable Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.tokens.getMoveableTokens(chainOrClient?): { tokens: [] }"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commonly used to get list of supported assets that can be moved across chains. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/send-universal-transaction/#send-a-universal-transaction",
        children: "send universal transaction"
      }), " for more info."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// All supported moveable tokens across chains\nconst { tokens: allMoveable } = PushChain.utils.tokens.getMoveableTokens();\n\n// Filtered for a specific chain\nconst { tokens: sepoliaMoveable } = PushChain.utils.tokens.getMoveableTokens(\n  PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "chainOrClient"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN | PushChain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional. A chain enum or an initialized client to filter tokens for that chain."
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `{ tokens }` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// tokens object { tokens: [] }\n{\n  tokens: [\n    { chain: 'eip155:11155111', symbol: 'ETH', decimals: 18, address: '0x...' },\n    { chain: 'eip155:11155111', symbol: 'USDC', decimals: 6, address: '0x...' },\n    // ...\n  ]\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: List moveable tokens for a specific chain",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.tokens\.getMoveableTokens
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_get_moveable_tokens
import { PushChain } from '@pushchain/core';

  function main() {
    const { tokens: sepolia } = PushChain.utils.tokens.getMoveableTokens(
      PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
    );
    console.log("Sepolia moveable supported tokens:", JSON.stringify(sepolia, null, 2));
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-payable-tokens",
      children: "Get Payable Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.tokens.getPayableTokens(chainOrClient?): { tokens: [] }"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Commonly used to get list of supported assets to pay with (either for gas or token movement) across chains. See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/send-universal-transaction/#send-a-universal-transaction",
        children: "send universal transaction"
      }), " for more info."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// All supported payable tokens across chains\nconst { tokens: allPayable } = PushChain.utils.tokens.getPayableTokens();\n\n// Filtered for a specific chain\nconst { tokens: solanaDevnetPayable } = PushChain.utils.tokens.getPayableTokens(\n  PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "chainOrClient"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN | PushChain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Optional. A chain enum or an initialized client to filter tokens for that chain."
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `{ tokens }` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// tokens object { tokens: [] }\n{\n  tokens: [\n    { chain: 'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1', symbol: 'SOL', decimals: 9, address: 'So11111111111111111111111111111111111111112' },\n    { chain: 'eip155:11155111', symbol: 'USDC', decimals: 6, address: '0x...' },\n    // ...\n  ]\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: List payable tokens for a specific chain",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.tokens\.getPayableTokens
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_get_payable_tokens
import { PushChain } from '@pushchain/core';

  function main() {
    const { tokens: devnet } = PushChain.utils.tokens.getPayableTokens(
      PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET
    );
    console.log("Solana supported payable tokens:", JSON.stringify(devnet, null, 2));
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-prc-20-address",
      children: "Get PRC-20 Address"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.tokens.getPRC20Address(token, options?): { address, chain, symbol, decimals, network }"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resolves the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/important-concepts#token-types-on-push-chain",
        children: "synthetic PRC-20 address"
      }), " for a supported origin-chain token. Accepts either a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#get-moveable-tokens",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "MoveableToken"
        })
      }), " or an object containing the origin ", (0,jsx_runtime.jsx)(_components.code, {
        children: "chain"
      }), " and token ", (0,jsx_runtime.jsx)(_components.code, {
        children: "address"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const { address, chain, symbol, decimals, network } =\n  PushChain.utils.tokens.getPRC20Address(ethMoveableToken);\n\n// Or with explicit chain/address input\nconst prc20Alt = PushChain.utils.tokens.getPRC20Address({\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n  address: \"0x97F477B7f970D47a87B42869ceeace218106152a\",\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "token"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "MoveableToken | { chain: string; address: string }"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Origin token info. Either pass a ", (0,jsx_runtime.jsx)(_components.code, {
                children: "MoveableToken"
              }), " (e.g., from ", (0,jsx_runtime.jsx)(_components.code, {
                children: "getMoveableTokens()"
              }), ") or provide the origin chain plus token address."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.network"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PUSH_NETWORK"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Override the Push network to resolve the PRC-20 on. Defaults to the network the client was initialized with. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PUSH_NETWORK.TESTNET"
              }), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "PUSH_NETWORK"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `PRC20Token` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  address: `0x${string}`; // PRC20 contract address on Push Chain\n  chain: CHAIN;           // Always CHAIN.PUSH_TESTNET_DONUT (or mainnet when live)\n  symbol: string;         // e.g. 'USDC.eth', 'pETH'\n  decimals: number;       // Token decimals on Push Chain\n  network: PUSH_NETWORK;  // The Push network this PRC20 belongs to\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Map origin token to PRC-20 on Push Chain",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\\.utils\\.tokens\\.getPRC20Address
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_get_prc20_address
import { PushChain } from '@pushchain/core';

  async function main() {
    // Using { chain, address }
    const prc20Alt = PushChain.utils.tokens.getPRC20Address({
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,
      address: "0x97F477B7f970D47a87B42869ceeace218106152a",
    });
    console.log('USDC.eth:', JSON.stringify(prc20Alt));


    // Moveable token example (ETH on Sepolia)
    const { tokens: moveable } = PushChain.utils.tokens.getMoveableTokens(
      PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
    );
    const ethMoveable = moveable.find((t) => t.symbol === 'ETH');
    if (!ethMoveable) {
      throw new Error('ETH moveable token not found');
    }

    // Using MoveableToken directly
    const { address: prc20Addr, symbol, decimals, network } =
      PushChain.utils.tokens.getPRC20Address(ethMoveable);
    console.log('pETH address:', prc20Addr, '| symbol:', symbol, '| decimals:', decimals);
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-pc-20-address",
      children: "Get PC-20 Address"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.tokens.getPC20Address(address, options): Promise<PC20AddressResult>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resolves a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/important-concepts#token-types-on-push-chain",
        children: "PC-20"
      }), " token and lists every chain it is deployed on. Pass either the external wrapper or the canonical token on Push Chain, and you always get the canonical one back."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PC-20 mappings live in UniversalCore's on-chain registry rather than a static table, so this call is asynchronous and looks tokens up by address, never by symbol."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Synthetic PRC-20s such as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pETH"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "USDC.eth"
        }), " are not PC-20s. Use ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#get-prc-20-address",
          children: "getPRC20Address()"
        }), " for those."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// From an external wrapper\nconst token = await PushChain.utils.tokens.getPC20Address('0x81E05001A1f3fB574E18c1B0b2596163c68144ae', {\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA,\n  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,\n});\n\ntoken.address; // canonical token on Push Chain\ntoken.registry; // every chain it is deployed on\n\n// chain is optional — the SDK will find it\nconst discovered = await PushChain.utils.tokens.getPC20Address('0x81E05001A1f3fB574E18c1B0b2596163c68144ae', {\n  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "address"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The external wrapper or the canonical token on Push Chain. Checksummed hex on EVM, base58 on Solana."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "options.network"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PUSH_NETWORK"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["The Push network to resolve the PC-20 on. For example: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.PUSH_NETWORK.TESTNET"
              }), " ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "PUSH_NETWORK"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.chain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.CHAIN"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Where the address lives. Omit to let the SDK find it. Throws ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PC20AmbiguousAddressError"
              }), " if more than one chain claims it. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN"
              })]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.rpcUrls"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Partial<Record<CHAIN, string[]>>"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Per-chain RPC overrides for reading the registry. Defaults to the SDK's endpoints."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.strict"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "boolean"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Also verify factory identity against the live gateway. Slower; off by default."
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details/* default */.A, {
      summary: "Returns `PC20AddressResult` <object>",
      className: "alert alert--fn-args",
      children: [(0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "{\n  address: `0x${string}`;  // Canonical PC-20 address on Push Chain\n  name: string;            // Token name\n  symbol: string;          // Token symbol\n  decimals: number;        // Token decimals\n  network: PUSH_NETWORK;   // The Push network this PC-20 belongs to\n  registry: Array<{\n    address: string;       // Checksummed hex on EVM, base58 on Solana\n    chain: CHAIN;          // CAIP-2 chain id, e.g. 'eip155:11155111'\n    chainName: string;     // Human-readable chain key, e.g. 'ETHEREUM_SEPOLIA'\n  }>;\n}\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "registry"
        }), " lists deployments that already exist — wrappers first, the Push Chain entry last. A wrapper address predicted for a first export is not included."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Resolve a PC-20 and list its deployments",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\\.utils\\.tokens\\.getPC20Address
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_get_pc20_address
import { PushChain } from '@pushchain/core';

  // A PC-20 deployed on Donut Testnet
  const PUSH_PC20 = '0x14693f665cE282A451ba9a86F2EC04B43F931145';

  async function main() {
    const token = await PushChain.utils.tokens.getPC20Address(PUSH_PC20, {
      chain: PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT,
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    console.log('Canonical PC-20:', token.address);
    console.log('Metadata:', token.symbol, '| decimals:', token.decimals);

    // Every chain it is deployed on
    for (const entry of token.registry) {
      console.log('  -', entry.chainName, '→', entry.address);
    }

    // chain is optional — the SDK will find it
    const discovered = await PushChain.utils.tokens.getPC20Address(PUSH_PC20, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });
    console.log('Same token via auto-discovery:', discovered.address === token.address);
  }

  main();

`
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conversion-utilities",
      children: "Conversion Utilities"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "calculate-minimum-amount-from-slippage",
      children: "Calculate Minimum Amount from Slippage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "PushChain.utils.conversion.slippageToMinAmount(amount, { slippageBps }): string"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const minOut = PushChain.utils.conversion.slippageToMinAmount('100000000', {\n  slippageBps: 100, // 1%\n});\n// Returns: '99000000'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "amount"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Input amount in smallest units (e.g., '100000000' for 100 USDC as it has 6 decimals)."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "options.slippageBps"
                })
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              }), " (integer)"]
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Slippage in basis points. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "100 = 1%"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "50 = 0.5%"
              }), "."]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `minOut` <string>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// minOut `string` (in smallest units)\n'99000000'\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Calculate minimum amount out from slippage",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
// customPropHighlightRegexStart=PushChain\.utils\.conversion\.slippageToMinAmount
// customPropHighlightRegexEnd=\\);
// customPropGTagEvent=utility_slippage_to_min_amount
import { PushChain } from '@pushchain/core';

  function main() {
    const minOut = PushChain.utils.conversion.slippageToMinAmount('100000000', {
      slippageBps: 100,
    });
    console.log('Min out with 1% slippage:', minOut);
  }

  main();

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-conversion-quote",
      children: "Get Conversion Quote"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pushChainClient.funds.getConversionQuote(amount, {options}): Promise<ConversionQuote>"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This function is available only after initializing the Push Chain client."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The function is used to get conversion quote especially when you want to pay with (from) one token, move as (to) another token. Used in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/chain/build/send-universal-transaction/#send-a-universal-transaction",
        children: "send universal transaction"
      }), " for token movement across chains or to pay gas in other tokens instead of native token of the source chain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Convention:"
        }), " from = the token you pay with (Payable), to = the token you move as (Moveable)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const quote = pushChainClient.funds.getConversionQuote('100000000', {\n  from: PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH,\n  to: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,\n});\n\n// Returns: { \"amountIn\": \"5000000000000000\", \"amountOut\": \"11813463066488417\", \"rate\": 2362692613297.683, \"route\": [ \"WETH\", \"USDT\" ], \"timestamp\": 1758582899267 }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Arguments"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Description"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "amount"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The string representation of the amount to parse. Can include decimals (e.g., \"1.5\", \"420\", \"0.1\")."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.from"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.PAYABLE.TOKEN"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The token you pay with. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
              variant: "PAYABLE_TOKEN"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.to"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "PushChain.CONSTANTS.MOVEABLE.TOKEN"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The token you move as. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
              variant: "MOVEABLE_TOKEN"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Supported chains",
      className: "alert alert--minimal",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "funds.getConversionQuote"
          }), " currently works on Ethereum Mainnet and Sepolia. Other origins will throw an error."]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `ConversionQuote` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Field"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "amountIn"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Input amount in smallest units"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "amountOut"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Output amount in smallest units"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "rate"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Normalized rate: tokenOut per tokenIn"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "route"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string[]"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Optional swap path (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
                children: "[\"WETH\",\"USDT\"]"
              }), ")"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "timestamp"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "number"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unix time (ms)"
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Quote WETH → USDT on Sepolia",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/initialize-push-chain-client"
        },
        children: `
import { PushChain } from '@pushchain/core';
import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';
import { createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';

async function main() {
    // Create a Sepolia wallet client
    const account = privateKeyToAccount(generatePrivateKey());
    const walletClient = createWalletClient({ account, chain: sepolia, transport: http() });

    // Convert to Universal Signer and initialize
    const universalSigner = await PushChain.utils.signer.toUniversal(walletClient);
    const client = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    // Amount: 0.005 WETH (18 decimals)
    const amountIn = PushChain.utils.helpers.parseUnits('0.005', 18);

    // Get quote: pay with WETH → move as USDT
    const quote = await client.funds.getConversionQuote(amountIn, {
      from: PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH,
      to: PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT,
    });

    console.log('Quote:', JSON.stringify(quote, null, 2));
}

await main().catch(console.error);
`
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "explorer-utilities",
      children: "Explorer Utilities"
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-transaction-url",
      children: "Get Transaction URL"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pushChainClient.explorer.getTransactionUrl(txHash, { options? }): string"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This function is available only after initializing the Push Chain client."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returns the explorer URL for a given transaction hash. By default, uses the chain from the initialized ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pushChainClient"
      }), ". When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "options.chain"
      }), " is provided, generates the explorer URL for that specific chain instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Default: Uses client's chain (Push Chain)\nconst url = pushChainClient.explorer.getTransactionUrl(txHash);\n\n// Override: Generate URL for external chain explorer\nconst sepoliaUrl = pushChainClient.explorer.getTransactionUrl(txHash, {\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "txHash"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "string"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The transaction hash to convert to explorer URL."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.chain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Optional. Override the chain for explorer URL generation. When provided, generates the URL for that chain's explorer instead of the client's chain. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.CHAIN"
              }), " values. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN_FULL"
              })]
            })]
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `url` <string>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// Push Chain transaction URL (default)\n'https://donut.push.network/tx/0x828911db033c65de8faab4906cfcb7d13ce225c3cd283534d110414a5b78cf87'\n\n// External chain transaction URL (when options.chain is provided)\n'https://sepolia.etherscan.io/tx/0x828911db033c65de8faab4906cfcb7d13ce225c3cd283534d110414a5b78cf87'\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: Get Explorer URL for a transaction hash",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
  // customPropHighlightRegexStart=pushChainClient\.explorer\.getTransactionUrl
  // customPropHighlightRegexEnd=\\);
  // customPropGTagEvent=utility_explorer_get_transaction_url
  // Using ethers for example - You can use any library
  // ethers, viem, solana web3js, etc
  import { PushChain } from '@pushchain/core';
  import { ethers } from 'ethers';

  async function main() {
    // Create random wallet
    const wallet = ethers.Wallet.createRandom()

    // Set up provider
    const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org')
    const signer = wallet.connect(provider)

    // Convert to Universal Signer
    const universalSigner = await PushChain.utils.signer.toUniversal(signer);

    // Initialize Push Chain Client
    const pushChainClient = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    const txHash = '0x828911db033c65de8faab4906cfcb7d13ce225c3cd283534d110414a5b78cf87';

    // Default: Push Chain explorer URL
    const pushChainUrl = pushChainClient.explorer.getTransactionUrl(txHash);
    console.log("Push Chain URL:", pushChainUrl);

    // Override: Ethereum Sepolia explorer URL
    const sepoliaUrl = pushChainClient.explorer.getTransactionUrl(txHash, {
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
    });
    console.log("Sepolia URL:", sepoliaUrl);
  }

  await main().catch(console.error);

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "list-explorer-urls",
      children: "List Explorer URLs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pushChainClient.explorer.listUrls({ options? }): { explorers: [] }"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This function is available only after initializing the Push Chain client."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returns explorer URLs for a specific chain. By default, uses the chain from the initialized ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pushChainClient"
      }), ". When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "options.chain"
      }), " is provided, returns explorer URLs for that specific chain instead."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Default: Uses client's chain\nconst result = pushChainClient.explorer.listUrls();\n\n// Override: Get explorer URLs for specific chain\nconst sepoliaExplorers = pushChainClient.explorer.listUrls({\n  chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(PushAPIReference/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Arguments"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Type"
              })
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Description"
              })
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "options.chain"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "CHAIN"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Optional. Override the chain to get explorer URLs for. When provided, returns explorer URLs for that specific chain. Use ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PushChain.CONSTANTS.CHAIN"
              }), " values. ", (0,jsx_runtime.jsx)(ConstantsDropdown/* default */.A, {
                variant: "CHAIN"
              })]
            })]
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `{ explorers }` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// explorers object\n{\n  explorers: [\n    {\n      chain: 'eip155:42101',\n      chainName: 'PUSH_TESTNET_DONUT',\n      urls: ['https://donut.push.network', 'https://scan.push.org']\n    }\n  ]\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: List Explorer URLs for a specific chain",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
  // customPropHighlightRegexStart=pushChainClient\.explorer\.listUrls
  // customPropHighlightRegexEnd=\\);
  // customPropGTagEvent=utility_explorer_list_urls
  // Using ethers for example - You can use any library
  // ethers, viem, solana web3js, etc
  import { PushChain } from '@pushchain/core';
  import { ethers } from 'ethers';

  async function main() {
    // Create random wallet
    const wallet = ethers.Wallet.createRandom()

    // Set up provider
    const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org')
    const signer = wallet.connect(provider)

    // Convert to Universal Signer
    const universalSigner = await PushChain.utils.signer.toUniversal(signer);

    // Initialize Push Chain Client
    const pushChainClient = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    // Default: Get explorer URLs for client's chain (Push Chain)
    const pushChainExplorers = pushChainClient.explorer.listUrls();
    console.log('Push Chain explorers:', JSON.stringify(pushChainExplorers, null, 2));

    // Override: Get explorer URLs for Ethereum Sepolia
    const sepoliaExplorers = pushChainClient.explorer.listUrls({
      chain: PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA
    });
    console.log('Sepolia explorers:', JSON.stringify(sepoliaExplorers, null, 2));
  }

  await main().catch(console.error);

`
      })
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "list-all-explorer-urls",
      children: "List All Explorer URLs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "pushChainClient.explorer.listAllUrls(): { explorers: [] }"
          })
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This function is available only after initializing the Push Chain client."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns explorer URLs for all supported chains in the current Push Network."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// ... Initialize Push Chain Client\nconst allExplorers = pushChainClient.explorer.listAllUrls();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Returns `{ explorers }` <object>",
      className: "alert alert--fn-args",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-typescript",
          children: "// explorers object with all supported chains\n{\n  explorers: [\n    {\n      chain: 'eip155:42101',\n      chainName: 'PUSH_TESTNET_DONUT',\n      urls: ['https://donut.push.network', 'https://scan.push.org']\n    },\n    {\n      chain: 'eip155:11155111',\n      chainName: 'ETHEREUM_SEPOLIA',\n      urls: ['https://sepolia.etherscan.io']\n    },\n    {\n      chain: 'eip155:421614',\n      chainName: 'ARBITRUM_SEPOLIA',\n      urls: ['https://sepolia.arbiscan.io']\n    },\n    // ... more chains\n  ]\n}\n"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(Details/* default */.A, {
      summary: "Live Playground: List All Explorer URLs for all supported chains",
      className: "alert alert--live-play",
      children: (0,jsx_runtime.jsx)(NodeJSVirtualIDE/* default */.A, {
        repo: {
          title: "Open in Github",
          url: "https://github.com/pushchain/push-chain-examples/tree/main/core-sdk-functions/utility-functions"
        },
        children: `
  // customPropHighlightRegexStart=pushChainClient\.explorer\.listAllUrls
  // customPropHighlightRegexEnd=\\);
  // customPropGTagEvent=utility_explorer_list_all_urls
  // Using ethers for example - You can use any library
  // ethers, viem, solana web3js, etc
  import { PushChain } from '@pushchain/core';
  import { ethers } from 'ethers';

  async function main() {
    // Create random wallet
    const wallet = ethers.Wallet.createRandom()

    // Set up provider
    const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org')
    const signer = wallet.connect(provider)

    // Convert to Universal Signer
    const universalSigner = await PushChain.utils.signer.toUniversal(signer);

    // Initialize Push Chain Client
    const pushChainClient = await PushChain.initialize(universalSigner, {
      network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
    });

    // Get all explorer URLs for all supported chains
    const allExplorers = pushChainClient.explorer.listAllUrls();
    console.log('All explorers:', JSON.stringify(allExplorers, null, 2));
    console.log('Total chains:', allExplorers.explorers.length);
  }

  await main().catch(console.error);

`
      })
    }), "\n", "\n", "\n", "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dive into ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/reading-blockchain-state",
          children: "reading blockchain state"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Harness our ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/contract-helpers",
          children: "on-chain contract helpers"
        }), " to supercharge your app"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explore and abstract away wallet and any chain-related logic using ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/ui-kit",
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

/***/ 56325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 510103
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ConstantsDropdown)
/* harmony export */ });
/* harmony import */ var _theme_Details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56325);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
const CONSTANTS_MAP={CHAIN:{summary:'PushChain.CONSTANTS.CHAIN',values:['PushChain.CONSTANTS.CHAIN.PUSH_TESTNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT','PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.BNB_TESTNET','PushChain.CONSTANTS.CHAIN.BASE_SEPOLIA','PushChain.CONSTANTS.CHAIN.ARBITRUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET']},CHAIN_FULL:{summary:'PushChain.CONSTANTS.CHAIN',values:['PushChain.CONSTANTS.CHAIN.PUSH_MAINNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET','PushChain.CONSTANTS.CHAIN.PUSH_TESTNET_DONUT','PushChain.CONSTANTS.CHAIN.PUSH_LOCALNET','PushChain.CONSTANTS.CHAIN.ETHEREUM_MAINNET','PushChain.CONSTANTS.CHAIN.ETHEREUM_SEPOLIA','PushChain.CONSTANTS.CHAIN.SOLANA_MAINNET','PushChain.CONSTANTS.CHAIN.SOLANA_TESTNET','PushChain.CONSTANTS.CHAIN.SOLANA_DEVNET']},PUSH_NETWORK:{summary:'PushChain.CONSTANTS.PUSH_NETWORK',values:['PushChain.CONSTANTS.PUSH_NETWORK.TESTNET','PushChain.CONSTANTS.PUSH_NETWORK.LOCALNET']},LIBRARY:{summary:'PushChain.CONSTANTS.LIBRARY',values:['PushChain.CONSTANTS.LIBRARY.ETHEREUM_ETHERSV6','PushChain.CONSTANTS.LIBRARY.ETHEREUM_VIEM','PushChain.CONSTANTS.LIBRARY.SOLANA_WEB3JS']},MOVEABLE_TOKEN:{summary:'PushChain.CONSTANTS.MOVEABLE.TOKEN',values:['PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ETHEREUM_SEPOLIA.stETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.ARBITRUM_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.ETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.BASE_SEPOLIA.WETH','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.BNB','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.BNB_TESTNET.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.SOL','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDT','PushChain.CONSTANTS.MOVEABLE.TOKEN.SOLANA_DEVNET.USDC','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthArb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pEthBase','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pBnb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.pSol','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.eth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.arb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.base','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.bnb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDT.sol','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.eth','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.arb','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.base','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.bsc','PushChain.CONSTANTS.MOVEABLE.TOKEN.PUSH_TESTNET_DONUT.USDC.sol']},PAYABLE_TOKEN:{summary:'PushChain.CONSTANTS.PAYABLE.TOKEN',values:['PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.WETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ETHEREUM_SEPOLIA.stETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.ARBITRUM_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.ETH','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.BASE_SEPOLIA.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.BNB','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.BNB_TESTNET.USDC','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.SOL','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDT','PushChain.CONSTANTS.PAYABLE.TOKEN.SOLANA_DEVNET.USDC']}};function ConstantsDropdown(_ref){let variant=_ref.variant;const _CONSTANTS_MAP$varian=CONSTANTS_MAP[variant],summary=_CONSTANTS_MAP$varian.summary,values=_CONSTANTS_MAP$varian.values;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Details__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{summary:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("summary",{children:summary}),className:"alert alert--minimal-api-table",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{paddingTop:'8px'},children:values.map(v=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:v},v))})});}

/***/ },

/***/ 891517
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ NodeJSVirtualIDE)
/* harmony export */ });
/* harmony import */ var _theme_Playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247991);
/* harmony import */ var _theme_ReactLiveScope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(351433);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function NodeJSVirtualIDE(_ref){let _ref$repo=_ref.repo,repo=_ref$repo===void 0?null:_ref$repo,children=_ref.children;const userPassedCode=children.trim().split('\n').map(line=>line.startsWith(' ')?line.slice(2):line).join('\n');return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Playground__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{showLineNumbers:true// pass everything your snippet needs into the scope
,scope:Object.assign({},_theme_ReactLiveScope__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{Buffer:(__webpack_require__(348287).Buffer),createPortal:(__webpack_require__(440961).createPortal)})// no-op: we already hand it the fully-wrapped code below
,transformCode:code=>code,children:returnPlaygroundCode({userPassedCode,repo})});}// wrap the raw snippet into your full IDE harness
function returnPlaygroundCode(_ref2){let userPassedCode=_ref2.userPassedCode,_ref2$repo=_ref2.repo,repo=_ref2$repo===void 0?null:_ref2$repo;// check if customPropHighlightRegexStart is present
let highlightRegexStart=null;// Look for a line that starts with any whitespace, then //, then customPropHighlightRegexStart=
let lines=userPassedCode.split('\n');const highlightLine=lines.find(line=>{return line.trim().startsWith('// customPropHighlightRegexStart=');});const match=highlightLine===null||highlightLine===void 0?void 0:highlightLine.match(/\/\/\s*customPropHighlightRegexStart=(.+)$/);if(match){// rawValue is everything after the “=” on that comment line
highlightRegexStart=match[1].trim();// remove the line from the code
lines.splice(lines.indexOf(highlightLine),1);userPassedCode=lines.join('\n');}// check if customPropHighlightRegexEnd is present
let highlightRegexEnd=null;// Look for a line that starts with any whitespace, then //, then customPropHighlightRegexEnd=
lines=userPassedCode.split('\n');const highlightLineEnd=lines.find(line=>{return line.trim().startsWith('// customPropHighlightRegexEnd=');});const matchEnd=highlightLineEnd===null||highlightLineEnd===void 0?void 0:highlightLineEnd.match(/\/\/\s*customPropHighlightRegexEnd=(.+)$/);if(matchEnd){// rawValue is everything after the “=” on that comment line
highlightRegexEnd=matchEnd[1].trim();// remove the line from the code
lines.splice(lines.indexOf(highlightLineEnd),1);userPassedCode=lines.join('\n');}// check if customPropGTagEvent is present
let gtagEventLabel='code_execution';lines=userPassedCode.split('\n');const gtagLine=lines.find(line=>{return line.trim().startsWith('// customPropGTagEvent=');});const gtagMatch=gtagLine===null||gtagLine===void 0?void 0:gtagLine.match(/\/\/\s*customPropGTagEvent=(.+)$/);if(gtagMatch){// rawValue is everything after the "=" on that comment line
gtagEventLabel=gtagMatch[1].trim();// remove the line from the code
lines.splice(lines.indexOf(gtagLine),1);userPassedCode=lines.join('\n');}// escape backticks in the snippet
const escaped=userPassedCode.replace(/`/g,'\\`');return("\n  // customPropHidden='true'\n  // customPropNodeJSEnv='true'\nfunction App() {\n  const defaultCode = `"+escaped+"`;\n\n  const [code, setCode] = useState(defaultCode);\n  const [logs, setLogs] = useState<string[]>([]);\n  const [isRunning, setIsRunning] = useState(false);\n\n  // Prompt modal (replaces window.alert for :::prompt::: messages)\n  const [promptModal, setPromptModal] = useState(null);\n  const [copiedAddr, setCopiedAddr] = useState(null);\n  const promptButtonRef = useRef(null);\n\n  // Input modal (replaces window.prompt for un-prefixed rl.question calls)\n  const [inputModal, setInputModal] = useState(null);\n  const [inputModalValue, setInputModalValue] = useState('');\n  const inputModalRef = useRef(null);\n\n  useEffect(() => {\n    window.__pushShowPrompt = (text) => new Promise((resolve, reject) => {\n      setPromptModal({ text: text, resolve: resolve, reject: reject });\n    });\n    window.__pushShowInputPrompt = (text) => new Promise((resolve, reject) => {\n      setInputModalValue('');\n      setInputModal({ text: text, resolve: resolve, reject: reject });\n    });\n  }, []);\n\n  useEffect(() => {\n    if (!promptModal) return;\n    const prevOverflow = document.body.style.overflow;\n    document.body.style.overflow = 'hidden';\n    const handler = (e) => {\n      if (e.key === 'Escape') {\n        if (promptModal.reject) promptModal.reject(new Error('Cancelled by user'));\n        setPromptModal(null);\n      }\n    };\n    window.addEventListener('keydown', handler);\n    if (promptButtonRef.current) promptButtonRef.current.focus();\n    return () => {\n      window.removeEventListener('keydown', handler);\n      document.body.style.overflow = prevOverflow;\n    };\n  }, [promptModal]);\n\n  useEffect(() => {\n    if (!inputModal) return;\n    const prevOverflow = document.body.style.overflow;\n    document.body.style.overflow = 'hidden';\n    const handler = (e) => {\n      if (e.key === 'Escape') {\n        if (inputModal.reject) inputModal.reject(new Error('Cancelled by user'));\n        setInputModal(null);\n        setInputModalValue('');\n      }\n    };\n    window.addEventListener('keydown', handler);\n    if (inputModalRef.current) inputModalRef.current.focus();\n    return () => {\n      window.removeEventListener('keydown', handler);\n      document.body.style.overflow = prevOverflow;\n    };\n  }, [inputModal]);\n\n  const cancelPromptModal = () => {\n    if (promptModal && promptModal.reject) promptModal.reject(new Error('Cancelled by user'));\n    setPromptModal(null);\n  };\n\n  const confirmPromptModal = () => {\n    if (promptModal && promptModal.resolve) promptModal.resolve();\n    setPromptModal(null);\n  };\n\n  const submitInputModal = () => {\n    if (inputModal && inputModal.resolve) inputModal.resolve(inputModalValue);\n    setInputModal(null);\n    setInputModalValue('');\n  };\n\n  const cancelInputModal = () => {\n    if (inputModal && inputModal.reject) inputModal.reject(new Error('Cancelled by user'));\n    setInputModal(null);\n    setInputModalValue('');\n  };\n\n  const parsePromptTokens = (text) => {\n    const re = new RegExp('(0x[a-fA-F0-9]{40})|(https?://[^\\\\s|]+)', 'g');\n    const parts = [];\n    let lastIndex = 0;\n    let m;\n    while ((m = re.exec(text)) !== null) {\n      if (m.index > lastIndex) parts.push({ t: 'text', v: text.slice(lastIndex, m.index) });\n      if (m[1]) parts.push({ t: 'addr', v: m[1] });\n      else if (m[2]) parts.push({ t: 'url', v: m[2] });\n      lastIndex = m.index + m[0].length;\n    }\n    if (lastIndex < text.length) parts.push({ t: 'text', v: text.slice(lastIndex) });\n    return parts;\n  };\n\n  // tiny ASCII spinner\n  function AsciiLoader() {\n    const frames = ['|','/','\u2014', '\\\\'];\n    const [i, setI] = useState(0);\n    useEffect(() => {\n      const t = setInterval(() => setI((n) => (n + 1) % frames.length), 100);\n      return () => clearInterval(t);\n    }, []);\n    return <span style={{ fontFamily: 'Fira Code' }}>{frames[i]}</span>;\n  }\n\n  const consoleContainerRef = useRef<HTMLDivElement>(null);\n\n  // whenever logs change, scroll to bottom\n  useEffect(() => {\n    const c = consoleContainerRef.current;\n    if (c) {\n      c.scrollTop = c.scrollHeight;\n    }\n  }, [logs]);\n\n  // run virtual node code\n  const runCode = async () => {\n    setIsRunning(true);\n    setLogs([]);\n\n    // Track Virtual IDE code execution\n    if (typeof window !== 'undefined' && window.gtag) {\n      window.gtag('event', 'virtual_ide_run', {\n        event_category: 'documentation_core',\n        event_label: '"+gtagEventLabel+"',\n        value: 1,\n      });\n    }\n\n    // let React paint the loader\n    await new Promise((r) => setTimeout(r, 0));\n\n    // clean imports\n    const cleaned = code.replace(/^\\s*import.*$/gm, '');\n\n       // our JSON.stringify shim: BigInts \u2192 strings\n    const jsonShim = `\n      const _orig = JSON.stringify;\n      JSON.stringify = (value, replacer, space) =>\n       _orig(value, (key, val) =>\n           typeof val === 'bigint' ? val.toString() : val\n       , space);\n     `;\n\n    // stub out process.stdin/stdout so readline won't crash, and support process.exit()\n    const processShim = `\n      const process = {\n        stdin: {},\n        stdout: {},\n        exit: (code = 0) => {\n          // you can decide how you want to handle an exit,\n          // e.g. throw so your \u201Cwrapped\u201D async IIFE bails out:\n          throw new Error('Process exited with code ' + code);\n        },\n      };\n    `;\n\n    // a very minimal browser\u2010side readline shim\n    const readlineShim = `;\n      // override Node\u2019s readline to support both callback and Promise\n      const readline = {\n        createInterface: ({ input, output }) => {\n          const iface = {\n            question(questionText, callback) {\n              const isPrompt = typeof questionText === 'string' && questionText.startsWith(':::prompt:::');\n              const text = isPrompt\n                ? questionText.replace(/^:::prompt:::/, '')\n                : questionText;\n\n              // If no callback provided, return a Promise\n              if (typeof callback !== 'function') {\n                if (isPrompt && typeof window.__pushShowPrompt === 'function') {\n                  return window.__pushShowPrompt(text).then(() => '');\n                }\n                if (isPrompt) {\n                  window.alert(text); // fallback if bridge not ready\n                  return Promise.resolve('');\n                }\n                if (typeof window.__pushShowInputPrompt === 'function') {\n                  return window.__pushShowInputPrompt(text);\n                }\n                return Promise.resolve(window.prompt(text));\n              }\n\n              // callback-style\n              if (isPrompt && typeof window.__pushShowPrompt === 'function') {\n                window.__pushShowPrompt(text).then(() => callback(''));\n              } else if (isPrompt) {\n                window.alert(text); // fallback if bridge not ready\n                callback('');\n              } else if (typeof window.__pushShowInputPrompt === 'function') {\n                window.__pushShowInputPrompt(text).then((v) => callback(v));\n              } else {\n                callback(window.prompt(text));\n              }\n            },\n            close() {},\n          };\n          return iface;\n        },\n      };\n    `;\n\n    // shim console\n    const consoleShim = {\n      log: (...args: any[]) => setLogs(prev => [...prev, args.join(' ')]),\n      error: (...args: any[]) => setLogs(prev => [...prev, 'Error: ' + args.join(' ')]),\n    };\n\n    // pass the wrapped code\n      const fnBody = `\n      return (async () => {\n        ${jsonShim}\n        ${processShim}\n        ${readlineShim}\n        ${cleaned}\n      })();\n     `;\n\n      const scope = {\n        ethers,\n        PushChain,\n        http,\n        defineChain,\n        Keypair,\n        PublicKey,\n        parseTransaction,\n        webSocket,\n        TypedData,\n        TypedDataDomain,\n        privateKeyToAccount,\n        generatePrivateKey,\n        sepolia,\n        hexToBytes,\n        bs58,\n        keccak256,\n        StandardMerkleTree,\n        bytesToHex,\n        createWalletClient,\n        createPublicClient,\n        console: consoleShim,\n      }\n\n    try {\n      const executor = new Function(...Object.keys(scope), fnBody);\n      await executor(...Object.values(scope));\n    } catch (e: any) {\n      consoleShim.error(e.message || e.toString());\n    } finally {\n      setIsRunning(false);\n    }\n  };\n\n  const wrapper =  {\n    margin: '0 auto',\n    width: '100%'\n  }\n\n  const highlightRegexStart = {\n    margin: '0 auto',\n    width: 'inherit',\n  }\n\n  const newCodeDiv = {\n    fontFamily: 'Fira Code',\n    fontSize: 16,\n    width: 'inherit',\n  }\n\n  const repoWrapper = {\n    padding: '0px',\n    display: 'flex',\n    flexWrap: 'wrap',\n    flexDirection: 'row',\n    justifyContent: 'flex-end',\n    gap: '12px',\n  }\n\n  const repoUrlDiv = {\n    display: 'flex',\n    flex: 'none',\n    flexDirection: 'row',\n    alignItems: 'center',\n    gap: '12px',\n    padding: '8.5px 13px 8.59px 13px',\n  }\n\n  const buttonDiv = {\n    display: 'flex',\n    flexWrap: 'wrap',\n    gap: '12px',\n    flex: '1',\n    justifyContent: 'flex-end'\n  }\n\n  const terminalDiv = {\n    fontFamily: 'Fira Code',\n    fontSize: 13,\n    borderRadius: 12,\n    overflow: \"hidden\",\n    position: \"relative\",\n    background: \"var(--ifm-playground-header-terminalbg)\",\n    color: \"var(--ifm-playground-header-terminalcolor)\",\n  }\n\n  const headerDiv = {\n    display: \"flex\",\n    alignItems: \"center\",\n    padding: \"12px 16px\",\n    background: \"transparent\",\n  }\n\n  const repoButton = {\n    display: 'flex',\n    alignItems: 'center',\n    gap: '4px',\n    fontSize: '0.875rem',\n    color: 'var(--ifm-playground-buttontext-color)',\n    cursor: 'pointer',\n  }\n\n  const clearButton = {\n    borderRadius: '12px',\n    border: 'var(--ifm-playground-button-border)',\n    display: 'flex',\n    padding: '12.55px 13px 13.04px 13px',\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: 'transparent',\n    fontSize: '0.875rem',\n    fontWeight: '600',\n    color: 'var(--ifm-playground-buttontextcolor)',\n    cursor: 'pointer',\n  }\n\n  const runCodeButton = {\n    borderRadius: '12px',\n    background: '#D548EC',\n    display: 'flex',\n    padding: '13px',\n    justifyContent: 'center',\n    alignItems: 'center',\n    gap: '4px',\n    fontSize: '14px',\n    fontWeight: 600,\n    lineHeight: 'normal',\n    border: 'none',\n    cursor: 'pointer',\n    fontFamily: 'DM Sans',\n    color: '#FFF',\n  }\n\n  const arrowIcon = {\n    color: 'var(--ifm-header-caret-color)',\n    marginTop: '-6px'\n  }\n\n\n  const dotRed = {\n    display: \"inline-block\",\n    width: 12,\n    height: 12,\n    borderRadius: \"50%\",\n    background: \"#f25f58\",\n    marginRight: 6,\n  };\n\n  const dotYellow = {\n    display: \"inline-block\",\n    width: 12,\n    height: 12,\n    borderRadius: \"50%\",\n    background: \"#febe2e\",\n    marginRight: 6,\n  };\n\n  const dotGreen = {\n    display: \"inline-block\",\n    width: 12,\n    height: 12,\n    borderRadius: \"50%\",\n    background: \"#58cb42\",\n  };\n\n  const consoleContainer = {\n    color: \"var(--ifm-playground-header-terminalcolor)\",\n    padding: 12,\n    minHeight: 180,\n    maxHeight: 300,\n    overflowY: \"auto\",\n  }\n\n  const bottomSection = {\n    margin: '0 auto',\n    background: 'var(--ifm-playground-header-bg)',\n    padding: '16px',\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '16px',\n    borderRadius: '0 0 16px 16px',\n    borderTop: 'var(--ifm-playground-button-border)',\n }\n\n  const asciiDiv = {\n    position: 'absolute',\n    bottom: 8,\n    right: 12,\n    padding: '4px 6px',\n    background: '#333',\n    borderRadius: 4,\n    color: '#50fa7b',\n    display: 'flex',\n    alignItems: 'center',\n    gap: '4px',\n  }\n\n  return (\n    <div style={wrapper}>\n      <div\n        style={highlightRegexStart}\n        className=\""+(highlightRegexStart?'push-live-editor push-apply-highlight-in-live-editor':'push-live-editor')+"\"\n        "+(highlightRegexStart?"data-highlight-regex-start=\""+highlightRegexStart+"\"":'')+"\n        "+(highlightRegexEnd?"data-highlight-regex-end=\""+highlightRegexEnd+"\"":'')+"\n      >\n\n        {/* FIX: add empty line at the end of the code to ensure typing is not unfocused first time */}\n        <LiveEditor\n          code={code.replace(/^(?:\\r?\\n)+|(?:\\r?\\n)+$/g, '').concat('\\n                                                                                                                               ')}\n          onChange={(newCode) => {\n            // Remove trailing newlines and spaces before setting the code\n            const cleaned = newCode.replace(/^(?:\\r?\\n)+|(?:\\r?\\n)+$/g, '').replace(/\\n\\s+$/g, '');\n            setCode(cleaned);\n            if (typeof window !== 'undefined') window.__playgroundLiveCode = cleaned;\n          }}\n          style={newCodeDiv}\n        />\n      </div>\n\n      <div style={bottomSection}>\n        <div\n          style={repoWrapper}\n        >\n          {/* Repo button if available */}\n          "+(repo&&repo.url?"\n                <div\n                  style={repoUrlDiv}\n                >\n                  <a\n                    href=\""+repo.url+"\"\n                    target=\"_blank\"\n                    rel=\"noopener noreferrer\"\n                    style={repoButton}\n                    className='btn'\n                  >\n                    "+(repo.title||'View Code')+"\n                  </a>\n\n                  <BsBoxArrowUpRight style={arrowIcon} />\n                </div>\n              ":'')+"\n          <div\n            style={buttonDiv}\n          >\n            <button\n              onClick={() => setLogs([])}\n              title=\"Clear console\"\n              style={clearButton}\n              className='btn'\n            >\n              Clear Console\n            </button>\n\n            <button\n              style={runCodeButton}\n              onClick={runCode}\n              className='btn'\n            >\n              <span style={{ fontSize: '16px', lineHeight: 1, marginTop: '2px' }}>\u25BA</span>\n              <span>Run Code</span>\n            </button>\n          </div>\n\n          {/* Hover & focus styles */}\n          <style>{`\n            .btn:hover {\n                opacity: 0.8;\n            }\n          `}</style>\n        </div>\n\n        {/* Virtual \u201Cterminal\u201D console */}\n        <div\n          style={terminalDiv}\n        >\n          {/* header bar */}\n          <div\n            style={headerDiv}\n          >\n            <span style={dotRed} />\n            <span style={dotYellow} />\n            <span style={dotGreen} />\n          </div>\n\n          {/* log output */}\n          <div\n            ref={consoleContainerRef}\n            style={consoleContainer}\n          >\n            {logs.length === 0 ? (\n              <div style={{ opacity: 0.6 }}>$ Virtual Node Environment with limited capabilities.<br />$ Hit \"Run Code\" to Execute.</div>\n            ) : (\n              logs.map((line, i) => (\n                <div key={i}>\n                  <span style={{ color: \"#6a9955\", marginRight: 4 }}>$</span>\n                  {line}\n                </div>\n              ))\n            )}\n          </div>\n\n          {/* ASCII loader, bottom-right */}\n          {isRunning && (\n            <div\n              style={asciiDiv}\n            >\n              <AsciiLoader /> Running...\n            </div>\n          )}\n        </div>\n      </div>\n\n      {/* Styled prompt modal (replaces window.alert for :::prompt::: messages) */}\n      {promptModal && typeof document !== 'undefined' && createPortal(\n        <div\n          style={{\n            position: 'fixed',\n            top: 0, left: 0, right: 0, bottom: 0,\n            zIndex: 9999,\n            background: 'rgba(0,0,0,0.65)',\n            backdropFilter: 'blur(8px)',\n            WebkitBackdropFilter: 'blur(8px)',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            padding: 20,\n            fontFamily: 'DM Sans, system-ui, sans-serif',\n          }}\n          onClick={(e) => { if (e.target === e.currentTarget) cancelPromptModal(); }}\n        >\n          <div\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\"push-prompt-title\"\n            style={{\n              maxWidth: 580,\n              width: '100%',\n              maxHeight: '90vh',\n              overflowY: 'auto',\n              background: '#131313',\n              color: '#e8e8e8',\n              borderRadius: 16,\n              border: '1px solid #2a2a2a',\n              padding: 28,\n              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',\n            }}\n          >\n            <div style={{\n              display: 'flex',\n              alignItems: 'center',\n              gap: 10,\n              marginBottom: 18,\n              paddingBottom: 16,\n              borderBottom: '1px solid #2a2a2a',\n            }}>\n              <span style={{\n                display: 'inline-block',\n                width: 10, height: 10,\n                borderRadius: '50%',\n                background: '#D548EC',\n                boxShadow: '0 0 12px rgba(213,72,236,0.6)',\n              }} />\n              <h3 id=\"push-prompt-title\" style={{\n                margin: 0, fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em',\n              }}>\n                Action required \u2014 fund the accounts below\n              </h3>\n            </div>\n            <div style={{\n              fontSize: 13.5,\n              lineHeight: 1.7,\n              color: '#d4d4d4',\n              whiteSpace: 'pre-wrap',\n              wordBreak: 'break-word',\n              fontFamily: 'Fira Code, ui-monospace, monospace',\n            }}>\n              {parsePromptTokens(promptModal.text).map((part, i) => {\n                if (part.t === 'addr') return (\n                  <span key={i} style={{\n                    display: 'inline-flex',\n                    alignItems: 'center',\n                    gap: 6,\n                    background: '#1f1f1f',\n                    border: '1px solid #333',\n                    borderRadius: 6,\n                    padding: '2px 8px',\n                    margin: '0 2px',\n                    fontFamily: 'Fira Code, ui-monospace, monospace',\n                    fontSize: 12.5,\n                    color: '#fff',\n                    verticalAlign: 'middle',\n                  }}>\n                    <span title={part.v}>{part.v.slice(0, 6) + '\u2026' + part.v.slice(-4)}</span>\n                    <button\n                      type=\"button\"\n                      onClick={() => {\n                        try {\n                          navigator.clipboard.writeText(part.v);\n                          setCopiedAddr(part.v);\n                          setTimeout(() => setCopiedAddr((c) => c === part.v ? null : c), 1500);\n                        } catch(e){}\n                      }}\n                      title={'Copy ' + part.v}\n                      style={{\n                        background: 'transparent',\n                        border: 'none',\n                        color: copiedAddr === part.v ? '#4ade80' : '#D548EC',\n                        cursor: 'pointer',\n                        fontSize: 11,\n                        padding: 0,\n                        fontFamily: 'DM Sans',\n                        fontWeight: 600,\n                        transition: 'color 120ms ease',\n                      }}\n                    >\n                      {copiedAddr === part.v ? 'copied' : 'copy'}\n                    </button>\n                  </span>\n                );\n                if (part.t === 'url') return (\n                  <a key={i} href={part.v} target=\"_blank\" rel=\"noopener noreferrer\" style={{\n                    color: '#D548EC',\n                    wordBreak: 'break-all',\n                    textUnderlineOffset: 2,\n                  }}>\n                    {part.v}\n                  </a>\n                );\n                return <span key={i}>{part.v}</span>;\n              })}\n            </div>\n            <div style={{\n              display: 'flex',\n              justifyContent: 'flex-end',\n              alignItems: 'center',\n              marginTop: 24,\n              paddingTop: 20,\n              borderTop: '1px solid #2a2a2a',\n              gap: 12,\n            }}>\n              <span style={{ fontSize: 12, color: '#888', marginRight: 'auto' }}>\n                Press Esc to cancel\n              </span>\n              <button\n                ref={promptButtonRef}\n                type=\"button\"\n                className=\"btn\"\n                onClick={confirmPromptModal}\n                style={{\n                  background: '#D548EC',\n                  color: '#fff',\n                  border: 'none',\n                  borderRadius: 12,\n                  padding: '12px 22px',\n                  fontSize: 14,\n                  fontWeight: 600,\n                  cursor: 'pointer',\n                  fontFamily: 'DM Sans',\n                }}\n              >\n                I've funded these \u2014 continue\n              </button>\n            </div>\n          </div>\n        </div>,\n        document.body\n      )}\n\n      {/* Styled input modal (replaces window.prompt for plain rl.question calls) */}\n      {inputModal && typeof document !== 'undefined' && createPortal(\n        <div\n          style={{\n            position: 'fixed',\n            top: 0, left: 0, right: 0, bottom: 0,\n            zIndex: 9999,\n            background: 'rgba(0,0,0,0.65)',\n            backdropFilter: 'blur(8px)',\n            WebkitBackdropFilter: 'blur(8px)',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            padding: 20,\n            fontFamily: 'DM Sans, system-ui, sans-serif',\n          }}\n          onClick={(e) => { if (e.target === e.currentTarget) cancelInputModal(); }}\n        >\n          <div\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\"push-input-title\"\n            style={{\n              maxWidth: 520,\n              width: '100%',\n              maxHeight: '90vh',\n              overflowY: 'auto',\n              background: '#131313',\n              color: '#e8e8e8',\n              borderRadius: 16,\n              border: '1px solid #2a2a2a',\n              padding: 28,\n              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',\n            }}\n          >\n            <div style={{\n              display: 'flex',\n              alignItems: 'center',\n              gap: 10,\n              marginBottom: 18,\n              paddingBottom: 16,\n              borderBottom: '1px solid #2a2a2a',\n            }}>\n              <span style={{\n                display: 'inline-block',\n                width: 10, height: 10,\n                borderRadius: '50%',\n                background: 'rgb(213, 72, 236)',\n                boxShadow: '0 0 12px rgba(213, 72, 236,0.6)',\n              }} />\n              <h3 id=\"push-input-title\" style={{\n                margin: 0, fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em',\n              }}>\n                Input required\n              </h3>\n            </div>\n            <div style={{\n              fontSize: 13.5,\n              lineHeight: 1.7,\n              color: '#d4d4d4',\n              whiteSpace: 'pre-wrap',\n              wordBreak: 'break-word',\n              fontFamily: 'Fira Code, ui-monospace, monospace',\n              marginBottom: 16,\n            }}>\n              {inputModal.text}\n            </div>\n            <input\n              ref={inputModalRef}\n              type=\"text\"\n              value={inputModalValue}\n              onChange={(e) => setInputModalValue(e.target.value)}\n              onKeyDown={(e) => { if (e.key === 'Enter') submitInputModal(); }}\n              autoFocus\n              style={{\n                width: '100%',\n                background: '#1f1f1f',\n                color: '#fff',\n                border: '1px solid #333',\n                borderRadius: 10,\n                padding: '12px 14px',\n                fontSize: 14,\n                fontFamily: 'Fira Code, ui-monospace, monospace',\n                outline: 'none',\n                boxSizing: 'border-box',\n              }}\n              onFocus={(e) => { e.currentTarget.style.borderColor = '#d548ec'; }}\n              onBlur={(e) => { e.currentTarget.style.borderColor = '#333'; }}\n            />\n            <div style={{\n              display: 'flex',\n              justifyContent: 'flex-end',\n              alignItems: 'center',\n              marginTop: 20,\n              paddingTop: 16,\n              borderTop: '1px solid #2a2a2a',\n              gap: 12,\n            }}>\n              <span style={{ fontSize: 12, color: '#888', marginRight: 'auto' }}>\n                Enter to submit \xB7 Esc to cancel\n              </span>\n              <button\n                type=\"button\"\n                onClick={cancelInputModal}\n                style={{\n                  background: 'transparent',\n                  color: '#aaa',\n                  border: '1px solid #333',\n                  borderRadius: 12,\n                  padding: '10px 16px',\n                  fontSize: 13,\n                  fontWeight: 500,\n                  cursor: 'pointer',\n                  fontFamily: 'DM Sans',\n                }}\n              >\n                Cancel\n              </button>\n              <button\n                type=\"button\"\n                className=\"btn\"\n                onClick={submitInputModal}\n                style={{\n                  background: 'rgb(213, 72, 236)',\n                  color: '#fff',\n                  border: 'none',\n                  borderRadius: 12,\n                  padding: '12px 22px',\n                  fontSize: 14,\n                  fontWeight: 600,\n                  cursor: 'pointer',\n                  fontFamily: 'DM Sans',\n                }}\n              >\n                Submit\n              </button>\n            </div>\n          </div>\n        </div>,\n        document.body\n      )}\n      </div>\n    );\n  }\n  ").replace(/^(?:\s*[\r\n])+/,'').trim();}

/***/ },

/***/ 303547
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PushAPIReference)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(309751);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474848);
/**
 * PushAPIReference component for rendering API documentation with consistent styling
 *
 * @param children - The content to display within the API reference section
 * @param showRequiredNotice - Whether to show the required notice (default: true)
 * @param className - Additional CSS classes to apply
 */function PushAPIReference(_ref){let children=_ref.children,_ref$showRequiredNoti=_ref.showRequiredNotice,showRequiredNotice=_ref$showRequiredNoti===void 0?true:_ref$showRequiredNoti,_ref$className=_ref.className,className=_ref$className===void 0?'':_ref$className;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ReferenceContainer,{className:className,children:[showRequiredNotice&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RequiredNotice,{hasNotice:showRequiredNotice,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p",{children:["These\xA0",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:"Arguments"}),"\xA0are mandatory"]})}),children]});}const ReferenceContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__ReferenceContainer",componentId:"sc-1g1yayv-0"})([""]);const RequiredNotice=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"PushAPIReference__RequiredNotice",componentId:"sc-1g1yayv-1"})(["border-radius:var(--ifm-global-radius);margin-bottom:-8px;padding:12px 12px 20px 12px;text-align:end;border-bottom-left-radius:0;border-bottom-right-radius:0px;color:var(--ifm-navbar-dropdown-subtext);font-size:0.875rem;font-weight:400;line-height:188.571%;code{background:transparent;padding:2px 9px;display:inline-block !important;border-radius:12px;border:1px solid var(--ifm-sidebar-activetext-color);color:var(--ifm-color-primary-text);font-family:'Fira Code';font-weight:600;line-height:165%;margin:0px 4px;}"]);

/***/ },

/***/ 495466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ SPINNER_TYPE),
  A: () => (/* binding */ Spinner)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(296540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 7 modules
var styled_components_browser_esm = __webpack_require__(309751);
// EXTERNAL MODULE: ./src/css/SharedStyling.js
var SharedStyling = __webpack_require__(113490);
;// ./static/assets/src/components/reusables/spinners/checkmark.svg
var _path;
const _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgCheckmark = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    fill: "#30CC8B",
    d: "M19.75 0A19.75 19.75 0 1 0 39.5 19.75 19.79 19.79 0 0 0 19.75 0m9.4 16.294L18.022 26.928c-.288.271-.669.42-1.064.418a1.46 1.46 0 0 1-1.044-.418l-5.564-5.317a1.52 1.52 0 1 1 2.089-2.203l4.52 4.311 10.102-9.628a1.52 1.52 0 0 1 2.09 2.203"
  })));
};
/* harmony default export */ const checkmark = (SvgCheckmark);
;// ./static/assets/src/components/reusables/spinners/error.svg
var error_path;
const error_excluded = ["title", "titleId"];
function error_extends() { return error_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, error_extends.apply(null, arguments); }
function error_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = error_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function error_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgError = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = error_objectWithoutProperties(_ref, error_excluded);
  return /*#__PURE__*/react.createElement("svg", error_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, error_path || (error_path = /*#__PURE__*/react.createElement("path", {
    fill: "#E93636",
    d: "M20 .5c-3.9 0-7.6 1.1-10.8 3.3C6 5.9 3.5 9 2 12.5.5 16.1.1 20 .9 23.8s2.6 7.3 5.3 10 6.2 4.6 10 5.3c3.8.8 7.7.4 11.3-1.1s6.6-4 8.8-7.2c2.1-3.2 3.3-7 3.3-10.8 0-5.2-2.1-10.1-5.7-13.8C30.1 2.6 25.2.5 20 .5M18.5 11c0-.4.2-.8.4-1.1.3-.3.7-.4 1.1-.4s.8.2 1.1.4c.3.3.4.7.4 1.1v10.5c0 .4-.2.8-.4 1.1s-.7.4-1.1.4-.8-.2-1.1-.4c-.3-.3-.4-.7-.4-1.1zM20 30.5c-.4 0-.9-.1-1.2-.4s-.7-.6-.8-1c-.2-.4-.2-.9-.1-1.3q.15-.6.6-1.2.45-.45 1.2-.6c.4-.1.9 0 1.3.1.4.2.8.5 1 .8s.4.8.4 1.2c0 .6-.2 1.2-.7 1.6-.5.6-1.1.8-1.7.8"
  })));
};
/* harmony default export */ const error = (SvgError);
;// ./static/assets/src/components/reusables/spinners/spinner.svg
var spinner_path;
const spinner_excluded = ["title", "titleId"];
function spinner_extends() { return spinner_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, spinner_extends.apply(null, arguments); }
function spinner_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = spinner_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function spinner_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgSpinner = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = spinner_objectWithoutProperties(_ref, spinner_excluded);
  return /*#__PURE__*/react.createElement("svg", spinner_extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, spinner_path || (spinner_path = /*#__PURE__*/react.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M20.759 5.19v5.19M31.77 9.747l-3.665 3.665M36.327 20.759h-5.19M31.77 31.77l-3.665-3.665M20.759 36.327v-5.19M9.747 31.77l3.665-3.665M5.19 20.759h5.19M9.747 9.747l3.665 3.665"
  })));
};
/* harmony default export */ const spinner = (SvgSpinner);
;// ./static/assets/src/components/reusables/spinners/warning.svg
var warning_path;
const warning_excluded = ["title", "titleId"];
function warning_extends() { return warning_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, warning_extends.apply(null, arguments); }
function warning_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = warning_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function warning_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgWarning = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = warning_objectWithoutProperties(_ref, warning_excluded);
  return /*#__PURE__*/react.createElement("svg", warning_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, warning_path || (warning_path = /*#__PURE__*/react.createElement("path", {
    fill: "#E2B71D",
    d: "M39.1 31.2 23.7 4.6c-.4-.6-.9-1.2-1.5-1.5-.6-.4-1.4-.6-2.1-.6s-1.5.2-2.1.6-1.2.9-1.5 1.5L1 31.2c-.4.6-.6 1.4-.6 2.1s.2 1.5.6 2.1.9 1.2 1.5 1.5c.6.4 1.4.6 2.1.6h30.8c.7 0 1.5-.2 2.1-.6s1.2-.9 1.5-1.5c.4-.6.6-1.4.6-2.1.1-.7-.1-1.4-.5-2.1M18.7 16.5c0-.4.1-.7.4-1s.6-.4 1-.4.7.1 1 .4.4.6.4 1v7c0 .4-.1.7-.4 1s-.6.4-1 .4-.7-.1-1-.4-.4-.6-.4-1zm1.4 15.4c-.4 0-.8-.1-1.2-.4-.3-.2-.6-.6-.8-.9-.2-.4-.2-.8-.1-1.2s.3-.8.6-1.1.7-.5 1.1-.6.8 0 1.2.1c.4.2.7.4.9.8.2.3.4.8.4 1.2q0 .9-.6 1.5c-.4.4-1 .6-1.5.6"
  })));
};
/* harmony default export */ const warning = (SvgWarning);
;// ./static/assets/src/components/reusables/spinners/whitelist.svg
var _style, _defs, _defs2, _defs3, _defs4, _defs5, _defs6, _defs7, _defs8, _defs9, _defs0, _defs1, _defs10, _defs11, _defs12, _defs13, _defs14, _defs15, _defs16, _defs17, _defs18, _defs19, _defs20, _defs21, _defs22, _defs23, _defs24, _defs25, _defs26, _defs27, _defs28, _defs29, _defs30, _defs31, _defs32, _defs33, _defs34, _defs35, _defs36, _defs37, _defs38, _defs39, _defs40, _defs41, _defs42, _defs43, _defs44, whitelist_path, _path2, _path3, _path4, _path5, _ellipse, _ellipse2;
const whitelist_excluded = ["title", "titleId"];
function whitelist_extends() { return whitelist_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, whitelist_extends.apply(null, arguments); }
function whitelist_objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = whitelist_objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function whitelist_objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }

const SvgWhitelist = _ref => {
  let title = _ref.title,
    titleId = _ref.titleId,
    props = whitelist_objectWithoutProperties(_ref, whitelist_excluded);
  return /*#__PURE__*/react.createElement("svg", whitelist_extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    xmlSpace: "preserve",
    id: "Layer_1",
    x: 0,
    y: 0,
    viewBox: "0 0 40 40",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _style || (_style = /*#__PURE__*/react.createElement("style", null, ".st46{fill:#1d1b2b}.st47{fill:#fff}")), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_1_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000018918372174887251900000015824477832139132297_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_1_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 38.8h40v2.3H0z",
    style: {
      clipPath: "url(#SVGID_00000018918372174887251900000015824477832139132297_)",
      fill: "#fff"
    }
  }), _defs2 || (_defs2 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000061450589948466646510000013504075378911607728_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000055682935648448171650000016603174337301644678_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000061450589948466646510000013504075378911607728_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 37.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000055682935648448171650000016603174337301644678_)",
      fill: "#fff"
    }
  }), _defs3 || (_defs3 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000163034462217135671110000003281837544710597775_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000075864108932851334380000002986285549391122838_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000163034462217135671110000003281837544710597775_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 37h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000075864108932851334380000002986285549391122838_)",
      fill: "#fffeff"
    }
  }), _defs4 || (_defs4 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000006692677491398917330000017482009431168088462_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000003075014919243425030000011766347674950723261_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000006692677491398917330000017482009431168088462_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 36.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000003075014919243425030000011766347674950723261_)",
      fill: "#fffdfe"
    }
  }), _defs5 || (_defs5 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000141442324025079556200000011100813681160334496_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000012438998958180247690000011278953616519101884_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000141442324025079556200000011100813681160334496_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 35.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000012438998958180247690000011278953616519101884_)",
      fill: "#fffcfe"
    }
  }), _defs6 || (_defs6 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000011004148776498408480000017310563633542503075_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000144330688052182505440000016428669231102353283_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000011004148776498408480000017310563633542503075_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 34.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000144330688052182505440000016428669231102353283_)",
      fill: "#fffbfd"
    }
  }), _defs7 || (_defs7 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000155850701760738328060000010413364524085188518_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000048473522845518449670000008113787965347178399_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000155850701760738328060000010413364524085188518_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 33.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000048473522845518449670000008113787965347178399_)",
      fill: "#fffafd"
    }
  }), _defs8 || (_defs8 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000137131541068540407790000016247830109529001619_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000108272877519578440370000001025939932002251165_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000137131541068540407790000016247830109529001619_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 32.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000108272877519578440370000001025939932002251165_)",
      fill: "#fff9fd"
    }
  }), _defs9 || (_defs9 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000109720934535134491310000011648451755277933958_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000162318190728897410240000002855588279128880782_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000109720934535134491310000011648451755277933958_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 31.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000162318190728897410240000002855588279128880782_)",
      fill: "#fff8fc"
    }
  }), _defs0 || (_defs0 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000096747640785436913280000001512168473767242389_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000063592068306203697200000018347425271494145700_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000096747640785436913280000001512168473767242389_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 31h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000063592068306203697200000018347425271494145700_)",
      fill: "#fff7fc"
    }
  }), _defs1 || (_defs1 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000013157299449276695760000003349513374129929912_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160167297034968768660000008956667901020093587_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000013157299449276695760000003349513374129929912_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 30.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160167297034968768660000008956667901020093587_)",
      fill: "#fff6fc"
    }
  }), _defs10 || (_defs10 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000072961236756052102270000006627217966794170288_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000061451857290518586430000006541355441525342346_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000072961236756052102270000006627217966794170288_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 29.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000061451857290518586430000006541355441525342346_)",
      fill: "#fff5fb"
    }
  }), _defs11 || (_defs11 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000120542686423071063450000000505450966208064155_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000133528992170648054940000016960040424049888420_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000120542686423071063450000000505450966208064155_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 28.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000133528992170648054940000016960040424049888420_)",
      fill: "#fff4fb"
    }
  }), _defs12 || (_defs12 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000008119827539101434540000000687617348997178507_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000064331356223243395160000010623984466305916805_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000008119827539101434540000000687617348997178507_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 27.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000064331356223243395160000010623984466305916805_)",
      fill: "#fff3fa"
    }
  }), _defs13 || (_defs13 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000171682524410186990790000005811129307630537647_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000078763078787120445770000007001818294259582600_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000171682524410186990790000005811129307630537647_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 26.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000078763078787120445770000007001818294259582600_)",
      fill: "#fff2fa"
    }
  }), _defs14 || (_defs14 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000065050872124673854550000011491961441940586880_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000057131134804002396060000009557613862229203384_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000065050872124673854550000011491961441940586880_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 25.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000057131134804002396060000009557613862229203384_)",
      fill: "#fff1fa"
    }
  }), _defs15 || (_defs15 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000087385040504023843390000018418788957200632503_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000076563080506624790950000010371028636572745404_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000087385040504023843390000018418788957200632503_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 24.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000076563080506624790950000010371028636572745404_)",
      fill: "#fff0f9"
    }
  }), _defs16 || (_defs16 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000101804543001505160640000015307778896616661144_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000013899847274804831830000000233545883125910147_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000101804543001505160640000015307778896616661144_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 24h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000013899847274804831830000000233545883125910147_)",
      fill: "#ffeff9"
    }
  }), _defs17 || (_defs17 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000117652643455354779510000000732370446844200352_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000155129756036335704530000000175185976145107875_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000117652643455354779510000000732370446844200352_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 23.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000155129756036335704530000000175185976145107875_)",
      fill: "#ffeef9"
    }
  }), _defs18 || (_defs18 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000176745914730401483050000012806336722484400315_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000060733723242332595490000001634423417351642253_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000176745914730401483050000012806336722484400315_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 22.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000060733723242332595490000001634423417351642253_)",
      fill: "#ffedf8"
    }
  }), _defs19 || (_defs19 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000040550745487777584420000000758410058113256618_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000091712846254972437900000013214413499904591794_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000040550745487777584420000000758410058113256618_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 21.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000091712846254972437900000013214413499904591794_)",
      fill: "#ffecf8"
    }
  }), _defs20 || (_defs20 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000050622890411462128450000006918849132186199463_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000134956723128218873730000014747212991663680666_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000050622890411462128450000006918849132186199463_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 20.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000134956723128218873730000014747212991663680666_)",
      fill: "#ffebf7"
    }
  }), _defs21 || (_defs21 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000042013878504789517810000002886984029806200970_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000018227916600075664650000004189574246866099331_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000042013878504789517810000002886984029806200970_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 19.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000018227916600075664650000004189574246866099331_)",
      fill: "#ffeaf7"
    }
  }), _defs22 || (_defs22 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000016072037337204008790000009927608052063207089_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000150807696221521878140000004991997934014485179_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000016072037337204008790000009927608052063207089_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 18.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000150807696221521878140000004991997934014485179_)",
      fill: "#ffe9f7"
    }
  }), _defs23 || (_defs23 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000084514207464486415670000003310696959034258854_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000058578791989943792610000012383172789239653264_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000084514207464486415670000003310696959034258854_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 17.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000058578791989943792610000012383172789239653264_)",
      fill: "#ffe8f6"
    }
  }), _defs24 || (_defs24 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000168111191864700588090000007796528425639013510_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000070078952479914823790000004488696996978778007_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000168111191864700588090000007796528425639013510_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 17.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000070078952479914823790000004488696996978778007_)",
      fill: "#ffe7f6"
    }
  }), _defs25 || (_defs25 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000075130085298569226120000004569212675584808839_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000047766726030502953150000010023485457926448316_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000075130085298569226120000004569212675584808839_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 16.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000047766726030502953150000010023485457926448316_)",
      fill: "#ffe6f5"
    }
  }), _defs26 || (_defs26 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000168116181925040745410000002903075994739185055_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000043452126976694784750000012308186940523659704_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000168116181925040745410000002903075994739185055_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 15.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000043452126976694784750000012308186940523659704_)",
      fill: "#ffe5f5"
    }
  }), _defs27 || (_defs27 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000177448109613987390960000011019027865223704209_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000021812416521141934700000002333976695276009393_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000177448109613987390960000011019027865223704209_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 14.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000021812416521141934700000002333976695276009393_)",
      fill: "#ffe4f5"
    }
  }), _defs28 || (_defs28 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000111151405705220863100000001025211950351930558_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000059989357482531445890000017046315160651017109_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000111151405705220863100000001025211950351930558_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 13.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000059989357482531445890000017046315160651017109_)",
      fill: "#ffe2f4"
    }
  }), _defs29 || (_defs29 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000035520961028888308890000003278063309023780273_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160892813641910849680000011144828949471446192_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000035520961028888308890000003278063309023780273_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 12.7h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160892813641910849680000011144828949471446192_)",
      fill: "#ffe1f4"
    }
  }), _defs30 || (_defs30 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000140728387563177599840000012730772879254337939_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000037688082872228396440000001000391440606982552_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000140728387563177599840000012730772879254337939_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 11.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000037688082872228396440000001000391440606982552_)",
      fill: "#ffe0f4"
    }
  }), _defs31 || (_defs31 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000062902141774892129720000006726931906645007260_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000053539272798156628880000017065418397300399770_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000062902141774892129720000006726931906645007260_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 11h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000053539272798156628880000017065418397300399770_)",
      fill: "#ffdff3"
    }
  }), _defs32 || (_defs32 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000040547372916521375320000005890058930478112652_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000160153280092721671810000004859756486784431748_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000040547372916521375320000005890058930478112652_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 10.1h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000160153280092721671810000004859756486784431748_)",
      fill: "#ffdef3"
    }
  }), _defs33 || (_defs33 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000163059607669502062840000017743019053605817518_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000151511471683653591520000015804692774727439535_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000163059607669502062840000017743019053605817518_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 9.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000151511471683653591520000015804692774727439535_)",
      fill: "#ffddf2"
    }
  }), _defs34 || (_defs34 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000144318015516876581950000010115243927339900334_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000132053964521438257980000004376603876963634310_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000144318015516876581950000010115243927339900334_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 8.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000132053964521438257980000004376603876963634310_)",
      fill: "#ffdcf2"
    }
  }), _defs35 || (_defs35 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000069375009007884915410000012084705223235533990_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000027591519312448932060000002674521480899297195_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000069375009007884915410000012084705223235533990_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 7.5h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000027591519312448932060000002674521480899297195_)",
      fill: "#ffdbf2"
    }
  }), _defs36 || (_defs36 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000097466014070156734330000018119008136695687863_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000083079768499160939580000002773316710753211056_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000097466014070156734330000018119008136695687863_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 6.6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000083079768499160939580000002773316710753211056_)",
      fill: "#ffdaf1"
    }
  }), _defs37 || (_defs37 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000058584356311605613920000016150045757713579408_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000075845908238826625400000012510611160665630597_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000058584356311605613920000016150045757713579408_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 5.8h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000075845908238826625400000012510611160665630597_)",
      fill: "#ffd9f1"
    }
  }), _defs38 || (_defs38 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000047757054525194763150000002456340682455169461_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000051348588743116802470000001633313117524182157_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000047757054525194763150000002456340682455169461_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 4.9h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000051348588743116802470000001633313117524182157_)",
      fill: "#ffd8f0"
    }
  }), _defs39 || (_defs39 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000051382489426439920660000003018019370891297153_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000059293702624119336140000001360157132647433360_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000051382489426439920660000003018019370891297153_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000059293702624119336140000001360157132647433360_)",
      fill: "#ffd7f0"
    }
  }), _defs40 || (_defs40 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000170268887129915914900000010352499974422115500_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000123436790536674588720000012719220988143637644_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000170268887129915914900000010352499974422115500_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 3.2h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000123436790536674588720000012719220988143637644_)",
      fill: "#ffd6f0"
    }
  }), _defs41 || (_defs41 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000003091413043892447630000001266546031989514142_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000103978116915317622890000010407028949154571157_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000003091413043892447630000001266546031989514142_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 2.3h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000103978116915317622890000010407028949154571157_)",
      fill: "#ffd5ef"
    }
  }), _defs42 || (_defs42 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000176737943936596983000000007461901653307844785_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000168110594437402215340000007824184069559080593_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000176737943936596983000000007461901653307844785_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 1.4h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000168110594437402215340000007824184069559080593_)",
      fill: "#ffd4ef"
    }
  }), _defs43 || (_defs43 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000018232783389487562290000008517843368293322889_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000045582657913821574560000008704575164935371400_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000018232783389487562290000008517843368293322889_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 .6h40v.9H0z",
    style: {
      clipPath: "url(#SVGID_00000045582657913821574560000008704575164935371400_)",
      fill: "#ffd3ef"
    }
  }), _defs44 || (_defs44 = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("path", {
    id: "SVGID_00000051377637767468729150000006262176937780331137_",
    d: "M20.1.2c-2.9 0-6.7.6-9.6 2.4C8.4 4 6.6 5.8 5.3 8.1c-.1.1-.2.3-.3.5-1.5 2.9-2.2 6.3-2.2 9.6-.1 3.5 0 6.7-.1 10 0 1.4-.2 3-1.1 4C1 33 0 33.7.2 34.7c.1.6.8 1 1.3 1.2 11.8 5.2 25.3 5.2 37.1-.1.5-.2.9-.5 1.1-1 .3-.8-.4-1.6-.9-2.2-1.9-2.4-1.5-6-1.5-9.2-.1-4.2.1-8.6-1.4-12.6-.9-2.4-2.3-4.6-4.1-6.4C28.6 1.3 23.4.2 20.1.2"
  }))), /*#__PURE__*/react.createElement("clipPath", {
    id: "SVGID_00000178168343591342257400000000584671388335673478_"
  }, /*#__PURE__*/react.createElement("use", {
    xlinkHref: "#SVGID_00000051377637767468729150000006262176937780331137_",
    style: {
      overflow: "visible"
    }
  })), /*#__PURE__*/react.createElement("path", {
    d: "M0 .2h40v.4H0z",
    style: {
      clipPath: "url(#SVGID_00000178168343591342257400000000584671388335673478_)",
      fill: "#ffd2ee"
    }
  }), whitelist_path || (whitelist_path = /*#__PURE__*/react.createElement("path", {
    d: "M20 40c-6.3 0-12.6-1.3-18.5-3.9-.6-.3-1.3-.6-1.4-1.4-.2-.9.4-1.5 1-2.1l.5-.5c.8-1 1-2.5 1-3.9.1-1.8.1-3.6.1-5.5v-4.6c.1-3.7.9-7 2.3-9.7-.1-.1 0-.3.1-.5 1.2-2.2 3-4.1 5.2-5.5C13.8.2 18.3 0 20.1 0c3.4 0 8.6 1.1 11.8 4.4 1.8 1.8 3.3 4.1 4.2 6.5 1.3 3.6 1.4 7.6 1.4 11.4v2.8c0 2.7-.1 5.5 1.5 7.4l.1.2c.5.6 1.1 1.4.8 2.2-.2.6-.7.9-1.2 1.1-5.9 2.7-12.3 4-18.7 4M20.1.4c-1.7 0-6.1.2-9.5 2.4Q7.3 4.9 5.5 8.2c-.1.1-.2.3-.3.5-1.4 2.6-2.1 5.9-2.2 9.5v4.5c0 1.9 0 3.6-.1 5.5-.1 1.5-.2 3.1-1.1 4.2-.1.2-.3.4-.5.5-.5.6-1 1.1-.9 1.7.1.5.7.8 1.2 1.1 11.7 5.2 25.2 5.2 36.9-.1.4-.2.9-.4 1-.8.2-.6-.3-1.3-.8-1.8l-.1-.2C37 30.7 37 27.9 37 25.1v-2.8c0-3.8-.1-7.7-1.4-11.3-.9-2.4-2.3-4.6-4.1-6.3-3-3.2-8.1-4.3-11.4-4.3",
    className: "st46"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M21.9 27c-.1 0-.3-.1-.3-.2 0-.5 0-1.2-.2-1.8s-.7-.9-1.4-.9-1.2.3-1.4.9-.2 1.3-.2 1.8c0 .1-.1.2-.3.2-.1 0-.3-.1-.3-.2 0-.5 0-1.3.2-1.9.3-.8 1-1.2 1.9-1.2s1.6.4 1.9 1.2c.2.6.2 1.4.2 1.9.2.1.1.2-.1.2M14.5 22.4h-2.4c-.7 0-1.3-.6-1.3-1.3v-6.7c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3",
    className: "st46"
  })), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M13.3 22.6c-1.5 0-2.7-1.3-2.7-2.8v-4.1c0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8v4.1c0 1.5-1.2 2.8-2.7 2.8m0-9.3c-1.3 0-2.3 1.1-2.3 2.4v4.1c0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4v-4.1c0-1.3-1-2.4-2.3-2.4M27.6 22.4h-2.4c-.7 0-1.3-.6-1.3-1.3v-6.7c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v6.7c0 .7-.6 1.3-1.3 1.3",
    className: "st46"
  })), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
    d: "M26.4 22.6c-1.5 0-2.7-1.3-2.7-2.8v-4.1c0-1.5 1.2-2.8 2.7-2.8s2.7 1.3 2.7 2.8v4.1c0 1.5-1.2 2.8-2.7 2.8m0-9.3c-1.3 0-2.3 1.1-2.3 2.4v4.1c0 1.3 1 2.4 2.3 2.4s2.3-1.1 2.3-2.4v-4.1c0-1.3-1-2.4-2.3-2.4",
    className: "st46"
  })), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
    d: "M13.7 14.6c-.2 0-.5.1-.7.2-.3.2-.3.6 0 .8l.3.2c.2.2.3.6 0 .8l-.3.3c-.3.2-.2.7.1.8.2.1.4.2.6.2.8 0 1.4-.7 1.4-1.6 0-1-.7-1.7-1.4-1.7M26.7 14.6c-.2 0-.5.1-.7.2-.3.2-.3.6 0 .8l.3.2c.2.2.3.6 0 .8l-.3.3c-.3.2-.2.7.1.8.2.1.4.2.6.2.8 0 1.4-.7 1.4-1.6 0-1-.6-1.7-1.4-1.7",
    className: "st47"
  })), _ellipse || (_ellipse = /*#__PURE__*/react.createElement("ellipse", {
    cx: 14.6,
    cy: 20.5,
    className: "st47",
    rx: 0.4,
    ry: 0.5
  })), _ellipse2 || (_ellipse2 = /*#__PURE__*/react.createElement("ellipse", {
    cx: 27.7,
    cy: 20.5,
    className: "st47",
    rx: 0.4,
    ry: 0.5
  })));
};
/* harmony default export */ const whitelist = (SvgWhitelist);
// EXTERNAL MODULE: ./src/config/globals.js
var globals = __webpack_require__(61530);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
;// ./src/components/reusables/spinners/SpinnerUnit.tsx
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable react/prop-types *//* eslint-disable */// React + Web3 Essentials
// External Packages
// Internal Compoonents
// Import Assets
// Internal Configs
// Interfaces
// Constants
const SPINNER_TYPE={PROCESSING:1,WARNING:2,ERROR:3,COMPLETED:4,WHITELIST:5};// Create Spinner
function Spinner(_ref){let _ref$size=_ref.size,size=_ref$size===void 0?42:_ref$size,_ref$color=_ref.color,color=_ref$color===void 0?globals/* default */.Ay.COLORS.PRIMARY_COLOR:_ref$color,_ref$type=_ref.type,type=_ref$type===void 0?SPINNER_TYPE.PROCESSING:_ref$type;return/*#__PURE__*/(0,jsx_runtime.jsxs)(SpinLoader,{flex:"initial",alignSelf:"center",color:color,width:size+"px",completed:type==SPINNER_TYPE.PROCESSING?false:true,children:[type==SPINNER_TYPE.PROCESSING&&/*#__PURE__*/(0,jsx_runtime.jsx)(spinner,{}),type==SPINNER_TYPE.ERROR&&/*#__PURE__*/(0,jsx_runtime.jsx)(error,{}),type==SPINNER_TYPE.WARNING&&/*#__PURE__*/(0,jsx_runtime.jsx)(warning,{}),type==SPINNER_TYPE.COMPLETED&&/*#__PURE__*/(0,jsx_runtime.jsx)(checkmark,{}),type==SPINNER_TYPE.WHITELIST&&/*#__PURE__*/(0,jsx_runtime.jsx)(whitelist,{})]});}const spinAnimation=(0,styled_components_browser_esm.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);const SpinLoader=(0,styled_components_browser_esm["default"])(SharedStyling/* ItemV */.y8).withConfig({displayName:"SpinnerUnit__SpinLoader",componentId:"sc-red8q7-0"})(["color:",";",""],props=>props.color,props=>!props.completed&&(0,styled_components_browser_esm.css)(["animation-name:",";animation-duration:2500ms;animation-iteration-count:infinite;animation-timing-function:linear;"],spinAnimation));

/***/ },

/***/ 247991
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Playground)
/* harmony export */ });
/* harmony import */ var _home_runner_work_push_chain_website_push_chain_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198587);
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(978478);
/* harmony import */ var _docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(267489);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(721312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(426058);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(662685);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(144586);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(992303);
/* harmony import */ var _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(495466);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61530);
/* harmony import */ var _site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(113490);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(320053);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(296540);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(242644);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(791409);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(204661);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(474848);
const _excluded=["children","transformCode"];const CodingEnvironment={REACT:'React',NODEJS:'NodeJS'};function Header(_ref){let children=_ref.children;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.playgroundHeader),children:children});}function LivePreviewLoader(_ref2){let codeEnv=_ref2.codeEnv;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{style:{padding:codeEnv==CodingEnvironment.NODEJS?'1rem 1rem 0 1rem':'0',display:'flex',justifyContent:'center',alignItems:'center'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{size:42,color:_site_src_config_globals__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.COLORS.PRIMARY_COLOR,type:_site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_8__/* .SPINNER_TYPE */ .N.PROCESSING})});}function Preview(_ref3){let codeEnv=_ref3.codeEnv;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{fallback:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(LivePreviewLoader,{codeEnv:codeEnv}),children:()=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{fallback:params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ErrorBoundaryErrorMessageFallback */ .MN,Object.assign({},params)),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_live__WEBPACK_IMPORTED_MODULE_14__/* .LivePreview */ .pA,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_live__WEBPACK_IMPORTED_MODULE_14__/* .LiveError */ .p1,{})]})});}function ResultWithHeader(_ref4){let title=_ref4.title,codeEnv=_ref4.codeEnv,hidden=_ref4.hidden,code=_ref4.code;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),copied=_useState[0],setCopied=_useState[1];const _useState2=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),shared=_useState2[0],setShared=_useState2[1];const displayTitle=title||/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"LIVE PREVIEW"});const previewClass=_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.playgroundPreview+" preview"+codeEnv;const compressCode=code=>{try{// Use TextEncoder for proper Unicode handling
const encoder=new TextEncoder();const data=encoder.encode(code);const binaryString=String.fromCharCode(...data);return btoa(binaryString);}catch(err){console.error('Compression failed, using plain encoding',err);return encodeURIComponent(code);}};const handleCopy=async()=>{try{const liveEdited=typeof window!=='undefined'?window.__playgroundLiveCode:null;const match=code.match(/const\s+defaultCode\s*=\s*`([\s\S]*?)`;/);const extractedCode=liveEdited!==null&&liveEdited!==void 0?liveEdited:match?match[1]:'';await navigator.clipboard.writeText(extractedCode);setCopied(true);setTimeout(()=>setCopied(false),2000);// reset after 2s
// Track copy event
if(typeof window!=='undefined'&&window.gtag){const pageUrl=window.location.pathname;const codeHash=extractedCode.substring(0,50).replace(/\s+/g,'_');window.gtag('event','code_snippet_copy',{event_category:'code_playground',event_label:pageUrl+"::"+codeHash,page_url:pageUrl,snippet_preview:codeHash,code_env:codeEnv});}}catch(err){console.error('Failed to copy',err);}};const handleShare=async e=>{try{const liveEdited=typeof window!=='undefined'?window.__playgroundLiveCode:null;const match=code.match(/const\s+defaultCode\s*=\s*`([\s\S]*?)`;/);const extractedCode=liveEdited!==null&&liveEdited!==void 0?liveEdited:match?match[1]:code;const compressedCode=compressCode(extractedCode);const ideType=codeEnv===CodingEnvironment.NODEJS?'node':'react';const shareUrl=window.location.origin+"/docs/chain/code-snippet#code="+compressedCode+"&ide="+ideType;await navigator.clipboard.writeText(shareUrl);setShared(true);setTimeout(()=>setShared(false),2000);// reset after 2s
// Track share event
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','code_snippet_share',{event_category:'code_playground',event_label:shareUrl,share_url:shareUrl,code_env:codeEnv,page_url:window.location.pathname});}}catch(err){console.error('Failed to share',err);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Header,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .ItemH */ .Oj,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .ItemV */ .y8,{flex:"1",alignItems:"flex-start",children:displayTitle}),hidden&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltipWrapper,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyButton */ .i8,{onClick:handleShare,style:{marginRight:'8px'},children:shared?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCheck */ .YrT,{color:"var(--ifm-positive-action-color)"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiLink */ .ayE,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip,children:shared?'Copied!':'Copy playground link'})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltipWrapper,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyButton */ .i8,{onClick:handleCopy,children:copied?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCheck */ .YrT,{color:"var(--ifm-positive-action-color)"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCopy */ .nxz,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip,children:copied?'Copied!':'Copy code'})]})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:previewClass,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(Preview,{codeEnv:codeEnv})})]});}function ThemedLiveEditor(_ref5){let code=_ref5.code,className=_ref5.className;const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_live__WEBPACK_IMPORTED_MODULE_14__/* .LiveEditor */ .w,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.playgroundEditor,className),code:code},String(isBrowser));}function EditorWithHeader(_ref6){let minimized=_ref6.minimized,code=_ref6.code,title=_ref6.title,codeEnv=_ref6.codeEnv;const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(minimized),minimizedState=_useState3[0],setMinimizedState=_useState3[1];const _useState4=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),copied=_useState4[0],setCopied=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),shared=_useState5[0],setShared=_useState5[1];const liveEditorClasses="liveEditor"+codeEnv;const displayTitle=title||/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"REACT PLAYGROUND"});const handleCopy=async e=>{e.stopPropagation();try{const currentCode=typeof window!=='undefined'&&window.__playgroundLiveCode?window.__playgroundLiveCode:code;await navigator.clipboard.writeText(currentCode);setCopied(true);setTimeout(()=>setCopied(false),2000);// reset after 2s
// Track copy event
if(typeof window!=='undefined'&&window.gtag){const pageUrl=window.location.pathname;const codeHash=currentCode.substring(0,50).replace(/\s+/g,'_');window.gtag('event','code_snippet_copy',{event_category:'code_playground',event_label:pageUrl+"::"+codeHash,page_url:pageUrl,snippet_preview:codeHash,code_env:codeEnv});}}catch(err){console.error('Failed to copy',err);}};const compressCode=code=>{try{// Use TextEncoder for proper Unicode handling
const encoder=new TextEncoder();const data=encoder.encode(code);const binaryString=String.fromCharCode(...data);return btoa(binaryString);}catch(err){console.error('Compression failed, using plain encoding',err);return encodeURIComponent(code);}};const handleShare=async e=>{e.stopPropagation();try{const currentCode=typeof window!=='undefined'&&window.__playgroundLiveCode?window.__playgroundLiveCode:code;const compressedCode=compressCode(currentCode);const ideType=codeEnv===CodingEnvironment.NODEJS?'node':'react';const shareUrl=window.location.origin+"/docs/chain/code-snippet#code="+compressedCode+"&ide="+ideType;await navigator.clipboard.writeText(shareUrl);setShared(true);setTimeout(()=>setShared(false),2000);// reset after 2s
// Track share event
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','code_snippet_share',{event_category:'code_playground',event_label:shareUrl,share_url:shareUrl,code_env:codeEnv,page_url:window.location.pathname});}}catch(err){console.error('Failed to share',err);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(Header,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .Button */ .$n,{onClick:()=>setMinimizedState(!minimizedState),textTransform:"uppercase",background:"transparent",padding:"0px",display:"flex",hoverBackground:"transparent",borderRadius:"0px",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",zIndex:1}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .ItemH */ .Oj,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .ItemV */ .y8,{flex:"1",alignItems:"flex-start",children:displayTitle}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyContainer */ .lH,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltipWrapper,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyButton */ .i8,{onClick:handleShare,style:{marginRight:'8px'},children:shared?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCheck */ .YrT,{color:"var(--ifm-positive-action-color)"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiLink */ .ayE,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip,children:shared?'Copied!':'Copy playground link'})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltipWrapper,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_site_src_css_SharedStyling__WEBPACK_IMPORTED_MODULE_10__/* .CopyButton */ .i8,{onClick:handleCopy,children:copied?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCheck */ .YrT,{color:"var(--ifm-positive-action-color)"}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiCopy */ .nxz,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.tooltip,children:copied?'Copied!':'Copy code'})]}),minimizedState?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiChevronDown */ .fK4,{}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__/* .FiChevronUp */ .wAb,{})]})]})]}),!minimizedState&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(ThemedLiveEditor,{code:code,className:liveEditorClasses})]});}function changeToExecutableCode(code,isNodeJSEnv){const execCode=!isNodeJSEnv?code.split('\n').reduce((acc,line)=>{// If we're not in an import statement and this line doesn't start an import,
// keep the line
if(!acc.inImport&&!line.trim().startsWith('import')){return{inImport:false,lines:[...acc.lines,line]};}// If this line contains a semicolon, we're done with the import
if(line.includes(';')){return{inImport:false,lines:acc.lines};}// Otherwise we're in an import statement
return{inImport:true,lines:acc.lines};},{inImport:false,lines:[]}).lines.join('\n').replace(/^\n/,'').trimEnd():code;return execCode;}function Playground(_ref7){var _props$metastring$inc,_props$metastring;let rawChildren=_ref7.children,transformCode=_ref7.transformCode,props=(0,_home_runner_work_push_chain_website_push_chain_website_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref7,_excluded);const _useState6=(0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(null),liveScope=_useState6[0],setLiveScope=_useState6[1];const _useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(),themeConfig=_useDocusaurusContext.siteConfig.themeConfig;const playgroundPosition=themeConfig.liveCodeBlock.playgroundPosition;const prismTheme=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .usePrismTheme */ .A)();const noInline=(_props$metastring$inc=(_props$metastring=props.metastring)===null||_props$metastring===void 0?void 0:_props$metastring.includes('noInline'))!==null&&_props$metastring$inc!==void 0?_props$metastring$inc:false;// ——— Custom props from any leading comment lines ———
const lines=rawChildren.split('\n');let idx=0;let minimized=false;let hidden=false;let isNodeJSEnv=false;let highlightRegexStart=null;let highlightRegexEnd=null;let gtagEventLabel='code_execution';// Process all top comment lines
while(idx<lines.length&&lines[idx].trim().startsWith('//')){const line=lines[idx];if(/\/\/\s*customPropMinimized=['"]true['"]/.test(line))minimized=true;if(/\/\/\s*customPropHidden=['"]true['"]/.test(line))hidden=true;if(/\/\/\s*customPropNodeJSEnv=['"]true['"]/.test(line))isNodeJSEnv=true;// Check for start regex
const matchStart=line.match(/\/\/\s*customPropHighlightRegexStart=(.+)$/);if(matchStart){// rawValue is everything after the "=" on that comment line
highlightRegexStart=matchStart[1].trim();}// Check for end regex
const matchEnd=line.match(/\/\/\s*customPropHighlightRegexEnd=(.+)$/);if(matchEnd){highlightRegexEnd=matchEnd[1].trim();}// Check for gtag event label
const matchGtag=line.match(/\/\/\s*customPropGTagEvent=(.+)$/);if(matchGtag){gtagEventLabel=matchGtag[1].trim();}// remove any customProp flags from this line
lines[idx]=lines[idx].replace(/\/\/\s*customPropMinimized=['"](\w+)['"]/,'').replace(/\/\/\s*customPropHidden=['"](\w+)['"]/,'').replace(/\/\/\s*customPropNodeJSEnv=['"](\w+)['"]/,'').replace(/\/\/\s*customPropHighlightRegexStart=.*$/,'').replace(/\/\/\s*customPropHighlightRegexEnd=.*$/,'').replace(/\/\/\s*customPropGTagEvent=.*$/,'');// if line is now just whitespace or comment, drop it
if(lines[idx].trim()==='//'){lines.splice(idx,1);}else{idx++;}}const strippedChildren=lines.join('\n');// ——— remove imports for execution ———
// but only if it's not a nodejs environment
const execCode=changeToExecutableCode(strippedChildren,isNodeJSEnv);// ——— remove empty lines from top and bottom for execution ———
const displayCode=strippedChildren.trim();// decide code environment
const codeEnv=isNodeJSEnv?CodingEnvironment.NODEJS:CodingEnvironment.REACT;(0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(()=>{const attachGlobals=async()=>{if(typeof globalThis.Buffer==='undefined'){const buffer=await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 348287, 19));globalThis.Buffer=buffer.Buffer;}if(typeof globalThis.process==='undefined'){globalThis.process={env:{}};}if(typeof globalThis.global==='undefined'){globalThis.global=globalThis;}setLiveScope({Buffer:globalThis.Buffer,process:globalThis.process,global:globalThis});};attachGlobals();},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A.playgroundContainer,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_live__WEBPACK_IMPORTED_MODULE_14__/* .LiveProvider */ .Q,Object.assign({code:execCode,noInline:noInline,transformCode:code=>{if(!isNodeJSEnv&&typeof window!=='undefined')window.__playgroundLiveCode=code;// Track React Live code execution
if(typeof window!=='undefined'&&window.gtag){window.gtag('event','react_live_run',{event_category:isNodeJSEnv?'documentation_core':'documentation_ui',event_label:gtagEventLabel,value:1});}return changeToExecutableCode(code,isNodeJSEnv)+";";},theme:prismTheme,scope:liveScope},props,{children:playgroundPosition==='top'?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(ResultWithHeader,{title:isNodeJSEnv?'VIRTUAL NODE IDE':'LIVE APP PREVIEW',codeEnv:codeEnv,hidden:hidden,code:execCode}),!hidden&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:highlightRegexStart?'push-live-editor push-apply-highlight-in-live-editor':'push-live-editor',"data-highlight-regex-start":highlightRegexStart,"data-highlight-regex-end":highlightRegexEnd,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(EditorWithHeader,{code:displayCode,minimized:minimized,title:isNodeJSEnv?'VIRTUAL NODE IDE INNER':'REACT PLAYGROUND',codeEnv:codeEnv})})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment,{children:[!hidden&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div",{className:highlightRegexStart?'push-live-editor push-apply-highlight-in-live-editor':'push-live-editor',"data-highlight-regex-start":highlightRegexStart,"data-highlight-regex-end":highlightRegexEnd,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(EditorWithHeader,{code:displayCode,minimized:minimized,title:isNodeJSEnv?'VIRTUAL NODE IDE INNER':'REACT PLAYGROUND',codeEnv:codeEnv})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(ResultWithHeader,{title:isNodeJSEnv?'VIRTUAL NODE IDE':'LIVE APP PREVIEW',codeEnv:codeEnv,hidden:hidden,code:execCode})]})}))});}

/***/ },

/***/ 351433
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(978478);
/* harmony import */ var _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495466);
/* harmony import */ var _site_src_config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61530);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(296540);
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(791409);
// This function returns a promise that resolves to the library,
// ensuring it's only imported on the client side.
function loadClientSideLibraryEthers(constantName){return typeof window!=='undefined'?__webpack_require__(714193)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibrarySolana(constantName){return typeof window!=='undefined'?__webpack_require__(132712)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryViem(constantName){return typeof window!=='undefined'?__webpack_require__(252603)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryViemAccounts(constantName){return typeof window!=='undefined'?__webpack_require__(656940)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryViemChains(constantName){return typeof window!=='undefined'?__webpack_require__(314498)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryViemUtils(constantName){return typeof window!=='undefined'?__webpack_require__(304661)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryBS58(){return typeof window!=='undefined'?(__webpack_require__(698957)["default"])||__webpack_require__(698957):{};// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryOpenZepplinMerkleTree(constantName){if(typeof window==='undefined'){return{};// Return an empty object for SSR
}// StandardMerkleTree is in the main export
if(constantName==='StandardMerkleTree'){return __webpack_require__(782971)[constantName];}// Other utilities are in dist/core.js
return __webpack_require__(946452)[constantName];}function loadClientSideLibraryPushChainUIKit(constantName){return typeof window!=='undefined'?__webpack_require__(527130)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideLibraryPushChainCore(constantName){return typeof window!=='undefined'?__webpack_require__(861282)[constantName]:Promise.resolve({});// Return an empty object or appropriate placeholder for SSR.
}function loadClientSideReactIconsBS(iconName){return typeof window!=='undefined'?__webpack_require__(796710)[iconName]:()=>null;}const ReactLiveScope=Object.assign({React: react__WEBPACK_IMPORTED_MODULE_3__},react__WEBPACK_IMPORTED_MODULE_3__,{LiveEditor: react_live__WEBPACK_IMPORTED_MODULE_4__/* .LiveEditor */ .w,LiveProvider: react_live__WEBPACK_IMPORTED_MODULE_4__/* .LiveProvider */ .Q,LiveError: react_live__WEBPACK_IMPORTED_MODULE_4__/* .LiveError */ .p1,LivePreview: react_live__WEBPACK_IMPORTED_MODULE_4__/* .LivePreview */ .pA,BrowserOnly: _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,Spinner: _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,SPINNER_TYPE: _site_src_components_reusables_spinners_SpinnerUnit__WEBPACK_IMPORTED_MODULE_1__/* .SPINNER_TYPE */ .N,GLOBALS: _site_src_config_globals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay,// Asynchronously import ethers and PushAPI only on the client side
ethers:loadClientSideLibraryEthers('ethers'),Keypair:loadClientSideLibrarySolana('Keypair'),PublicKey:loadClientSideLibrarySolana('PublicKey'),createWalletClient:loadClientSideLibraryViem('createWalletClient'),createPublicClient:loadClientSideLibraryViem('createPublicClient'),http:loadClientSideLibraryViem('http'),parseTransaction:loadClientSideLibraryViem('parseTransaction'),TypedData:loadClientSideLibraryViem('TypedData'),TypedDataDomain:loadClientSideLibraryViem('TypedDataDomain'),defineChain:loadClientSideLibraryViem('defineChain'),webSocket:loadClientSideLibraryViem('webSocket'),keccak256:loadClientSideLibraryViem('keccak256'),privateKeyToAccount:loadClientSideLibraryViemAccounts('privateKeyToAccount'),generatePrivateKey:loadClientSideLibraryViemAccounts('generatePrivateKey'),sepolia:loadClientSideLibraryViemChains('sepolia'),hexToBytes:loadClientSideLibraryViemUtils('hexToBytes'),bytesToHex:loadClientSideLibraryViemUtils('bytesToHex'),bs58:loadClientSideLibraryBS58(),// StandardMerkleTree - Open Zeppelin
StandardMerkleTree:loadClientSideLibraryOpenZepplinMerkleTree('StandardMerkleTree'),PushUniversalWalletProvider:loadClientSideLibraryPushChainUIKit('PushUniversalWalletProvider'),PushUniversalAccountButton:loadClientSideLibraryPushChainUIKit('PushUniversalAccountButton'),usePushWalletContext:loadClientSideLibraryPushChainUIKit('usePushWalletContext'),usePushChainClient:loadClientSideLibraryPushChainUIKit('usePushChainClient'),usePushChain:loadClientSideLibraryPushChainUIKit('usePushChain'),PushUI:loadClientSideLibraryPushChainUIKit('PushUI'),PushChain:loadClientSideLibraryPushChainCore('PushChain'),BsBoxArrowUpRight:loadClientSideReactIconsBS('BsBoxArrowUpRight')});/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactLiveScope);

/***/ },

/***/ 318480
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"details":"details_b_Ee"});
    if(true) {
      (function() {
        var localsJsonString = "{\"details\":\"details_b_Ee\"}";
        // 1788290720703
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tabItem":"tabItem_Ymn6"});
    if(true) {
      (function() {
        var localsJsonString = "{\"tabItem\":\"tabItem_Ymn6\"}";
        // 1788290720706
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
    if(true) {
      (function() {
        var localsJsonString = "{\"tabList\":\"tabList__CuJ\",\"tabItem\":\"tabItem_LNqP\"}";
        // 1788290720700
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
    if(true) {
      (function() {
        var localsJsonString = "{\"details\":\"details_lb9f\",\"isBrowser\":\"isBrowser_bmU9\",\"collapsibleContent\":\"collapsibleContent_i85q\"}";
        // 1788290731261
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

/***/ 204661
(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"playgroundContainer":"playgroundContainer_TGbA","playgroundHeader":"playgroundHeader_qwyd","pulsate":"pulsate_mTgU","playgroundEditor":"playgroundEditor_PvJ1","playgroundPreview":"playgroundPreview_bb8I","tooltipWrapper":"tooltipWrapper_tSrh","tooltip":"tooltip_RfzO"});
    if(true) {
      (function() {
        var localsJsonString = "{\"playgroundContainer\":\"playgroundContainer_TGbA\",\"playgroundHeader\":\"playgroundHeader_qwyd\",\"pulsate\":\"pulsate_mTgU\",\"playgroundEditor\":\"playgroundEditor_PvJ1\",\"playgroundPreview\":\"playgroundPreview_bb8I\",\"tooltipWrapper\":\"tooltipWrapper_tSrh\",\"tooltip\":\"tooltip_RfzO\"}";
        // 1788290735647
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

/***/ 788564
(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 788564;
module.exports = webpackEmptyContext;

/***/ },

/***/ 578982
() {

/* (ignored) */

/***/ },

/***/ 847790
() {

/* (ignored) */

/***/ },

/***/ 73776
() {

/* (ignored) */

/***/ },

/***/ 321638
() {

/* (ignored) */

/***/ },

/***/ 192668
() {

/* (ignored) */

/***/ },

/***/ 277965
() {

/* (ignored) */

/***/ },

/***/ 650477
() {

/* (ignored) */

/***/ },

/***/ 966089
() {

/* (ignored) */

/***/ },

/***/ 479368
() {

/* (ignored) */

/***/ },

/***/ 708460
() {

/* (ignored) */

/***/ },

/***/ 492382
() {

/* (ignored) */

/***/ },

/***/ 957025
() {

/* (ignored) */

/***/ },

/***/ 277667
() {

/* (ignored) */

/***/ },

/***/ 464688
() {

/* (ignored) */

/***/ },

/***/ 751069
() {

/* (ignored) */

/***/ },

/***/ 715340
() {

/* (ignored) */

/***/ },

/***/ 979838
() {

/* (ignored) */

/***/ },

/***/ 271281
() {

/* (ignored) */

/***/ }

}]);