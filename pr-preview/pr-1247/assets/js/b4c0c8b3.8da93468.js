"use strict";
(self["webpackChunkpush_chain_website"] = self["webpackChunkpush_chain_website"] || []).push([[84816],{

/***/ 333396
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_chain_06_node_and_system_tools_01_push_validator_mdx_b4c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-chain-06-node-and-system-tools-01-push-validator-mdx-b4c.json
const site_docs_chain_06_node_and_system_tools_01_push_validator_mdx_b4c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"chain/node-and-system-tools/docs-chain-node-and-system-tools-running-validator","title":"Running Push Validator","description":"Running Push Validators | Deep Dives | Push Chain Docs","source":"@site/docs/chain/06-node-and-system-tools/01-Push-Validator.mdx","sourceDirName":"chain/06-node-and-system-tools","slug":"/chain/node-and-system-tools/running-push-validator","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/node-and-system-tools/running-push-validator","draft":false,"unlisted":false,"editUrl":"https://github.com/pushchain/push-chain-website/blob/main/docs/chain/06-node-and-system-tools/01-Push-Validator.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"docs-chain-node-and-system-tools-running-validator","title":"Running Push Validator","hide_title":false,"slug":"./running-push-validator","displayed_sidebar":"pushChainSidebar","sidebar_position":1,"image":"/assets/docs/previews/docs_chain_node_and_system_tools_running_validator--running_push_validator.png"},"sidebar":"pushChainSidebar","previous":{"title":"System & Node Tools","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/node-and-system-tools"},"next":{"title":"Running Localnet","permalink":"/push-chain-website/pr-preview/pr-1247/docs/chain/node-and-system-tools/localnet"}}');
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
;// ./docs/chain/06-node-and-system-tools/01-Push-Validator.mdx


const frontMatter = {
	id: 'docs-chain-node-and-system-tools-running-validator',
	title: 'Running Push Validator',
	hide_title: false,
	slug: './running-push-validator',
	displayed_sidebar: 'pushChainSidebar',
	sidebar_position: 1,
	image: '/assets/docs/previews/docs_chain_node_and_system_tools_running_validator--running_push_validator.png'
};
const contentTitle = undefined;

const assets = {

};






const toc = [{
  "value": "🚀 Quick Start",
  "id": "-quick-start",
  "level": 2
}, {
  "value": "Step 1: Install &amp; Start",
  "id": "step-1-install--start",
  "level": 3
}, {
  "value": "Step 2: Verify Sync",
  "id": "step-2-verify-sync",
  "level": 3
}, {
  "value": "Step 3: Register Validator",
  "id": "step-3-register-validator",
  "level": 3
}, {
  "value": "📊 Dashboard",
  "id": "-dashboard",
  "level": 2
}, {
  "value": "📖 Commands",
  "id": "-commands",
  "level": 2
}, {
  "value": "Core",
  "id": "core",
  "level": 3
}, {
  "value": "Validator Operations",
  "id": "validator-operations",
  "level": 3
}, {
  "value": "Monitoring",
  "id": "monitoring",
  "level": 3
}, {
  "value": "Management",
  "id": "management",
  "level": 3
}, {
  "value": "⚡ Features",
  "id": "-features",
  "level": 2
}, {
  "value": "🔄 Automatic Upgrades (Cosmovisor)",
  "id": "-automatic-upgrades-cosmovisor",
  "level": 2
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Directory Structure",
  "id": "directory-structure",
  "level": 3
}, {
  "value": "Commands",
  "id": "commands",
  "level": 3
}, {
  "value": "🔧 Troubleshooting",
  "id": "-troubleshooting",
  "level": 2
}, {
  "value": "Sync Failures / App Mismatch Errors",
  "id": "sync-failures--app-mismatch-errors",
  "level": 3
}, {
  "value": "📊 Network",
  "id": "-network",
  "level": 2
}, {
  "value": "🔄 Updates",
  "id": "-updates",
  "level": 2
}, {
  "value": "Manual Update",
  "id": "manual-update",
  "level": 3
}, {
  "value": "🔧 Advanced Setup (Optional)",
  "id": "-advanced-setup-optional",
  "level": 2
}, {
  "value": "Setup NGINX with SSL",
  "id": "setup-nginx-with-ssl",
  "level": 3
}, {
  "value": "Log Rotation",
  "id": "log-rotation",
  "level": 3
}, {
  "value": "File Locations",
  "id": "file-locations",
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
        children: "Running Push Validators | Deep Dives | Push Chain Docs"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fast validator setup for Push Chain"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-quick-start",
      children: "🚀 Quick Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-1-install--start",
      children: "Step 1: Install & Start"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl -fsSL https://get.push.network/node/install.sh | bash\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatically installs and starts your validator using snapshot download (no full sync needed)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Restart terminal or run ", (0,jsx_runtime.jsx)(_components.code, {
          children: "source ~/.bashrc"
        }), " to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push-validator"
        }), " from anywhere."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-2-verify-sync",
      children: "Step 2: Verify Sync"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator status\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wait for: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "✅ Catching Up: false"
      }), " (snapshot download takes ~5-20 mins depending on connection, then block sync begins)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-3-register-validator",
      children: "Step 3: Register Validator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator register-validator\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Wallet Setup:"
      }), " You'll be prompted to either:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Create new wallet"
        }), " — Generates a new recovery phrase (save it securely!)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Import existing wallet"
        }), " — Use your existing 12/24-word recovery phrase"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Configuration:"
      }), " You'll also set:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Moniker"
        }), " — Your validator's display name (must be unique on the network)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Commission Rate"
        }), " — Fee charged to delegators (5-100%, default: 10%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stake Amount"
        }), " — How much to stake (minimum: 1.5 PC)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      }), " 2+ PC tokens from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://faucet.push.org",
        children: "faucet"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Done! Your validator is running with automatic recovery enabled! 🎉"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-dashboard",
      children: "📊 Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitor your validator in real-time with an interactive dashboard:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator dashboard\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Features:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Node Status"
        }), " - Process state, RPC connectivity, resource usage (CPU, memory, disk)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain Sync"
        }), " - Real-time block height, sync progress with ETA, network latency"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validator Metrics"
        }), " - Bonding status, voting power, commission rate, accumulated rewards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Network Overview"
        }), " - Connected peers, chain ID, active validators list"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Live Logs"
        }), " - Stream node activity with search and filtering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-Refresh"
        }), " - Updates every 2 seconds for real-time monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The dashboard provides everything you need to monitor validator health and performance at a glance."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-commands",
      children: "📖 Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "core",
      children: "Core"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator start                # Start node with snapshot sync\npush-validator stop                 # Stop node\npush-validator status               # Check sync & validator status\npush-validator dashboard            # Live interactive monitoring dashboard\npush-validator register-validator   # Register as validator (create or import wallet)\npush-validator logs                 # View logs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "validator-operations",
      children: "Validator Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator increase-stake       # Increase validator stake and voting power\npush-validator unjail               # Restore jailed validator to active status\npush-validator withdraw-rewards     # Withdraw validator rewards and commission\npush-validator restake-rewards      # Auto-withdraw and restake all rewards to increase validator power\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring",
      children: "Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator sync            # Monitor sync progress\npush-validator peers           # Show peer connections (from local RPC)\npush-validator doctor          # Run diagnostic checks on validator setup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "management",
      children: "Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator restart         # Restart node\npush-validator validators      # List validators (supports --output json)\npush-validator balance         # Check balance (defaults to validator key)\npush-validator reset           # Reset chain data (keeps address book)\npush-validator full-reset      # ⚠️ Complete reset (deletes ALL keys and data)\npush-validator backup          # Backup config and validator state\npush-validator update          # Update CLI to latest version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-features",
      children: "⚡ Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snapshot Download"
        }), ": Fast sync (~5-20 mins, no full blockchain download required)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interactive Logs"
        }), ": Real-time log viewer with search and filtering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smart Detection"
        }), ": Monitors for sync stalls and network issues"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reliable Snapshots"
        }), ": Uses trusted RPC nodes for recovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multiple Outputs"
        }), ": JSON, YAML, or text format support"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-automatic-upgrades-cosmovisor",
      children: "🔄 Automatic Upgrades (Cosmovisor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your validator uses ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/cosmos/cosmos-sdk/blob/main/tools/cosmovisor/README.md",
        children: "Cosmovisor"
      }), " for seamless, zero-downtime upgrades."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Governance Proposal"
        }), " - Network votes on upgrade proposal specifying target block height"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auto-Download"
        }), " - When approved, Cosmovisor automatically downloads the new binary"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Checksum Verification"
        }), " - Binary verified via SHA256 before use"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Seamless Switch"
        }), " - At upgrade height, node stops, switches binary, and restarts automatically"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No manual intervention required"
      }), " - your validator stays up-to-date automatically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "directory-structure",
      children: "Directory Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.pchain/cosmovisor/\n├── genesis/bin/pchaind     # Initial binary\n├── upgrades/               # Upgrade binaries (auto-populated)\n│   └── {upgrade-name}/bin/pchaind\n└── current -> genesis/     # Symlink to active version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commands",
      children: "Commands"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator cosmovisor status    # Check versions & pending upgrades\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-troubleshooting",
      children: "🔧 Troubleshooting"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sync-failures--app-mismatch-errors",
      children: "Sync Failures / App Mismatch Errors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you encounter sync failures or app hash mismatch errors, reset and restart:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator reset\npush-validator start\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This clears the chain data and downloads a fresh snapshot. Snapshot download takes approximately 15-30 minutes depending on your connection, after which block sync will begin automatically."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-network",
      children: "📊 Network"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push_42101-1"
        }), " (Testnet)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Min Stake"
        }), ": 1.5 PC"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Faucet"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://faucet.push.org",
          children: "https://faucet.push.org"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Explorer"
        }), ": ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://donut.push.network",
          children: "https://donut.push.network"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-updates",
      children: "🔄 Updates"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CLI automatically checks for updates and notifies you:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dashboard"
        }), ": Shows notification in header when update available"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CLI commands"
        }), ": Shows notification after command completes"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "manual-update",
      children: "Manual Update"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "push-validator update              # Update to latest version\npush-validator update --check      # Check only, don't install\npush-validator update --version v1.2.0  # Install specific version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Updates download pre-built binaries from GitHub Releases with checksum verification."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-advanced-setup-optional",
      children: "🔧 Advanced Setup (Optional)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup-nginx-with-ssl",
      children: "Setup NGINX with SSL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "bash scripts/setup-nginx.sh yourdomain.com\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Creates:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "https://yourdomain.com"
        }), " - Cosmos RPC endpoint"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "https://evm.yourdomain.com"
        }), " - EVM RPC endpoint"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatic SSL certificates via Let's Encrypt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rate limiting and security headers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Requirements:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain pointing to your server IP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ports 80/443 open"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ubuntu/Debian system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "log-rotation",
      children: "Log Rotation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "bash scripts/setup-log-rotation.sh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Configures daily rotation with 14-day retention and compression."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-locations",
      children: "File Locations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manager"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.local/bin/push-validator"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chain Binary"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.pchain/cosmovisor/current/bin/pchaind"
        }), " (managed by Cosmovisor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Config"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.pchain/config/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.pchain/data/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logs"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.pchain/logs/pchaind.log"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backups"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/push-node-backups/"
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



/***/ }

}]);