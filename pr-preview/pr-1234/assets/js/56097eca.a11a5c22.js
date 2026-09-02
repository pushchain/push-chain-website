"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[46463],{

/***/ 181763
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_02_setup_03_faucets_mdx_560_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-02-setup-03-faucets-mdx-560.json
const site_docs_chain_02_setup_03_faucets_mdx_560_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/setup/docs-chain-setup-faucets","title":"Faucets","description":"Faucets | Setup | Push Chain Docs","source":"@site/docs/chain/02-setup/03-Faucets.mdx","sourceDirName":"chain/02-setup","slug":"/chain/setup/faucets","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/setup/faucets","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/02-setup/03-Faucets.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"docs-chain-setup-faucets","title":"Faucets","hide_title":false,"slug":"./faucets","displayed_sidebar":"pushChainSidebar","sidebar_position":3,"image":"/assets/docs/previews/docs_chain_setup--faucets.png"},"sidebar":"pushChainSidebar","previous":{"title":"Smart Contract Address Book","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/setup/smart-contract-address-book"},"next":{"title":"Build","permalink":"/push-chain-website/pr-preview/pr-1234/docs/chain/build"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/IFrameModal/IFrameModal.tsx
var IFrameModal = __webpack_require__(602999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 2 modules
var Details = __webpack_require__(56325);
;// ./docs/chain/02-setup/03-Faucets.mdx


const frontMatter = {
	id: 'docs-chain-setup-faucets',
	title: 'Faucets',
	hide_title: false,
	slug: './faucets',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 3,
	image: '/assets/docs/previews/docs_chain_setup--faucets.png'
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "Push Chain Donut Testnet ($PC)",
  "id": "push-chain-donut-testnet-pc",
  "level": 2
}, {
  "value": "Ethereum Sepolia",
  "id": "ethereum-sepolia",
  "level": 2
}, {
  "value": "Solana Devnet",
  "id": "solana-devnet",
  "level": 2
}, {
  "value": "BNB Testnet",
  "id": "bnb-testnet",
  "level": 2
}, {
  "value": "Base Sepolia",
  "id": "base-sepolia",
  "level": 2
}, {
  "value": "Arbitrum Sepolia",
  "id": "arbitrum-sepolia",
  "level": 2
}, {
  "value": "How to use faucet on a block explorer",
  "id": "how-to-use-faucet-on-a-block-explorer",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
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
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
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
        children: "Faucets | Setup | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Push Chain is multi-chain by design, so testing universal transactions end-to-end usually needs funds on more than one network. This page lists the official faucets for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "$PC"
      }), " (Push Chain native) and every external-chain stablecoin or native token supported by the Donut Testnet gateway."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limits and CAPTCHA"
        }), ": Most faucets are rate-limited and CAPTCHA-gated. Do not write agent loops that call these endpoints automatically.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-reference"
        }), ": Token addresses below match the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/smart-contract-address-book",
          children: "Smart Contract Address Book"
        }), ". When in doubt, that page is authoritative."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "push-chain-donut-testnet-pc",
      children: "Push Chain Donut Testnet ($PC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The native gas token for Push Chain Donut Testnet."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Faucet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Limit"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "$PC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://faucet.push.org/",
              children: "faucet.push.org"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 PC per address per 6 hours"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(IFrameModal/* default */.A, {
      url: "https://faucet.push.org/",
      buttonTitle: "Open Push Faucet",
      maxHeight: "500px"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ethereum-sepolia",
      children: "Ethereum Sepolia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Native ETH covers Sepolia gas. USDC, USDT, and WETH on Sepolia mint via the contract's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "faucet()"
      }), " function on the explorer's Write Contract tab. Connect your wallet and call it once per address to receive test tokens."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Get Tokens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Native ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.alchemy.com/faucets/ethereum-sepolia",
              children: "Alchemy Sepolia Faucet"
            }), " or ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://sepolia-faucet.pk910.de/",
              children: "PoW Faucet"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x97F477B7f970D47a87B42869ceeace218106152a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0x97F477B7f970D47a87B42869ceeace218106152a#writeContract#F4",
              children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "faucet()"
              }), " on Sepolia Etherscan"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0xC4230aEaFcF6b8B49a7b4e53886420f00ff71876"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0xC4230aEaFcF6b8B49a7b4e53886420f00ff71876#writeProxyContract#F3",
              children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "faucet()"
              }), " on Sepolia Etherscan"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wrap Sepolia ETH via ", (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14#writeContract",
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "deposit()"
              }), " on Sepolia Etherscan"]
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solana-devnet",
      children: "Solana Devnet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solana uses a different toolchain. Native SOL is obtained via the CLI airdrop or a web faucet. SPL test tokens have their own paths."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Get Tokens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Native SOL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://faucet.solana.com/",
              children: "faucet.solana.com"
            }), ", or CLI: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "solana airdrop 2 <your-pubkey> --url devnet"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://faucet.circle.com/",
              children: "Circle Devnet Faucet"
            }), " (select Solana Devnet)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "USDT"
            }), " (unofficial)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "EiXDnrAg9ea2Q6vEPV7E5TpTU1vh41jcuZqKjU5Dc4ZF"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Community SPL test token. Mint via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "spl-token mint"
            }), " if you control the mint authority, otherwise ask in ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://discord.com/invite/pushchain",
              children: "Discord"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bnb-testnet",
      children: "BNB Testnet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Get Tokens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Native BNB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.bnbchain.org/en/testnet-faucet",
              children: "BNB Smart Chain Faucet"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0xA8802F96cAd0d45343d9bc660B6f7d80050A660b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://testnet.bscscan.com/address/0xA8802F96cAd0d45343d9bc660B6f7d80050A660b#writeProxyContract#F4",
              children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "faucet()"
              }), " on BscScan"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0xE935d9c9C24D02E61186c640cc01d713C876d40F"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://testnet.bscscan.com/address/0xE935d9c9C24D02E61186c640cc01d713C876d40F#writeProxyContract#F3",
              children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "faucet()"
              }), " on BscScan"]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "base-sepolia",
      children: "Base Sepolia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Get Tokens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Native ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.alchemy.com/faucets/base-sepolia",
              children: "Alchemy Base Sepolia Faucet"
            }), " or ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://portal.cdp.coinbase.com/products/faucet",
              children: "Coinbase Faucet"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x5c3504F0E3bA28FDc1F74234fE936518276AaBB8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://sepolia.basescan.org/address/0x5c3504F0E3bA28FDc1F74234fE936518276AaBB8#writeContract#F4",
              children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "faucet()"
              }), " on Basescan"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x4D7646B9eE3D68F4b0F135B5cbc66B00819F6b61"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://sepolia.basescan.org/address/0x4D7646B9eE3D68F4b0F135B5cbc66B00819F6b61#writeProxyContract#F3",
              children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "faucet()"
              }), " on Basescan"]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "arbitrum-sepolia",
      children: "Arbitrum Sepolia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Address"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Get Tokens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Native ETH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.alchemy.com/faucets/arbitrum-sepolia",
              children: "Alchemy Arbitrum Sepolia Faucet"
            }), " or ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://faucet.quicknode.com/arbitrum/sepolia",
              children: "QuickNode Faucet"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x5dd39b0b3610F666F631a6506b7713EF83e1Ac5C"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://sepolia.arbiscan.io/address/0x5dd39b0b3610F666F631a6506b7713EF83e1Ac5C#writeContract#F4",
              children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "faucet()"
              }), " on Arbiscan"]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "USDT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0xE30928528f52CAEeB75fB07837e22d77D47e9c07"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.a, {
              href: "https://sepolia.arbiscan.io/address/0xE30928528f52CAEeB75fB07837e22d77D47e9c07#writeProxyContract#F3",
              children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
                children: "faucet()"
              }), " on Arbiscan"]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-faucet-on-a-block-explorer",
      children: "How to use faucet on a block explorer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click the address link in the table above. It opens the explorer's ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write Contract"
        }), " tab directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect to Web3"
        }), " and approve in your wallet (MetaMask, Rabby, etc.)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "faucet"
        }), " function in the list, expand it, and click ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sign the transaction in your wallet. Once confirmed, the tokens land in your connected address."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "faucet()"
        }), " function is permissionless on these test deployments. Anyone can call it. Most return a fixed amount per call (commonly 500 units). Re-call after a cooldown if you need more."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Faucet function not visible"
        }), ": make sure you're on the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write Contract"
        }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Write Proxy Contract"
        }), ") tab, and that your wallet is connected to the correct testnet network."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insufficient gas to call faucet"
        }), ": fund the wallet with the chain's native testnet token first (see the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Native"
        }), " row in each section)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tokens received but not visible in wallet"
        }), ": import the token by address manually (MetaMask: Import Tokens, then paste the address)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Still stuck"
        }), ": reach out on ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://discord.com/invite/pushchain",
          children: "Discord"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Bridge testnet tokens into Push Chain via the SDK. See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/build/send-universal-transaction",
          children: "Send Universal Transaction"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set up your local environment. See ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/smart-contract-environment",
          children: "Smart Contract Environment"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["View confirmed transactions on the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/chain/setup/tooling/block-explorer",
          children: "Block Explorer"
        }), "."]
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
        // 1788359295260
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
        // 1788359304326
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