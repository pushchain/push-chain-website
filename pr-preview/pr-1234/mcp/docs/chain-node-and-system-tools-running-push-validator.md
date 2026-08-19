---
title: "Running Push Validator"
url: "https://pushchain.github.io/docs/chain/node-and-system-tools/running-push-validator/"
section: "node-and-system-tools"
lastUpdated: "2026-08-19T11:27:12Z"
description: "Running Push Validators | Deep Dives | Push Chain Docs"
---

# Running Push Validator

**Fast validator setup for Push Chain**

## 🚀 Quick Start

### Step 1: Install & Start

```bash
curl -fsSL https://get.push.network/node/install.sh | bash
```

Automatically installs and starts your validator using snapshot download (no full sync needed).

> **Note:** Restart terminal or run `source ~/.bashrc` to use `push-validator` from anywhere.

### Step 2: Verify Sync

```bash
push-validator status
```

Wait for: `✅ Catching Up: false` (snapshot download takes ~5-20 mins depending on connection, then block sync begins)

### Step 3: Register Validator

```bash
push-validator register-validator
```

**Wallet Setup:** You'll be prompted to either:

1.  **Create new wallet** — Generates a new recovery phrase (save it securely!)
2.  **Import existing wallet** — Use your existing 12/24-word recovery phrase

**Configuration:** You'll also set:

-   **Moniker** — Your validator's display name (must be unique on the network)
-   **Commission Rate** — Fee charged to delegators (5-100%, default: 10%)
-   **Stake Amount** — How much to stake (minimum: 1.5 PC)

**Requirements:** 2+ PC tokens from [faucet](https://faucet.push.org)

**Done! Your validator is running with automatic recovery enabled! 🎉**

## 📊 Dashboard

Monitor your validator in real-time with an interactive dashboard:

```bash
push-validator dashboard
```

**Features:**

-   **Node Status** - Process state, RPC connectivity, resource usage (CPU, memory, disk)
-   **Chain Sync** - Real-time block height, sync progress with ETA, network latency
-   **Validator Metrics** - Bonding status, voting power, commission rate, accumulated rewards
-   **Network Overview** - Connected peers, chain ID, active validators list
-   **Live Logs** - Stream node activity with search and filtering
-   **Auto-Refresh** - Updates every 2 seconds for real-time monitoring

The dashboard provides everything you need to monitor validator health and performance at a glance.

## 📖 Commands

### Core

```bash
push-validator start                # Start node with snapshot sync
push-validator stop                 # Stop node
push-validator status               # Check sync & validator status
push-validator dashboard            # Live interactive monitoring dashboard
push-validator register-validator   # Register as validator (create or import wallet)
push-validator logs                 # View logs
```

### Validator Operations

```bash
push-validator increase-stake       # Increase validator stake and voting power
push-validator unjail               # Restore jailed validator to active status
push-validator withdraw-rewards     # Withdraw validator rewards and commission
push-validator restake-rewards      # Auto-withdraw and restake all rewards to increase validator power
```

### Monitoring

```bash
push-validator sync            # Monitor sync progress
push-validator peers           # Show peer connections (from local RPC)
push-validator doctor          # Run diagnostic checks on validator setup
```

### Management

```bash
push-validator restart         # Restart node
push-validator validators      # List validators (supports --output json)
push-validator balance         # Check balance (defaults to validator key)
push-validator reset           # Reset chain data (keeps address book)
push-validator full-reset      # ⚠️ Complete reset (deletes ALL keys and data)
push-validator backup          # Backup config and validator state
push-validator update          # Update CLI to latest version
```

## ⚡ Features

-   **Snapshot Download**: Fast sync (~5-20 mins, no full blockchain download required)
-   **Interactive Logs**: Real-time log viewer with search and filtering
-   **Smart Detection**: Monitors for sync stalls and network issues
-   **Reliable Snapshots**: Uses trusted RPC nodes for recovery
-   **Multiple Outputs**: JSON, YAML, or text format support

## 🔄 Automatic Upgrades (Cosmovisor)

Your validator uses [Cosmovisor](https://github.com/cosmos/cosmos-sdk/blob/main/tools/cosmovisor/README.md) for seamless, zero-downtime upgrades.

### How It Works

1.  **Governance Proposal** - Network votes on upgrade proposal specifying target block height
2.  **Auto-Download** - When approved, Cosmovisor automatically downloads the new binary
3.  **Checksum Verification** - Binary verified via SHA256 before use
4.  **Seamless Switch** - At upgrade height, node stops, switches binary, and restarts automatically

**No manual intervention required** - your validator stays up-to-date automatically.

### Directory Structure

```text
~/.pchain/cosmovisor/
├── genesis/bin/pchaind     # Initial binary
├── upgrades/               # Upgrade binaries (auto-populated)
│   └── {upgrade-name}/bin/pchaind
└── current -> genesis/     # Symlink to active version
```

### Commands

```bash
push-validator cosmovisor status    # Check versions & pending upgrades
```

## 🔧 Troubleshooting

### Sync Failures / App Mismatch Errors

If you encounter sync failures or app hash mismatch errors, reset and restart:

```bash
push-validator reset
push-validator start
```

This clears the chain data and downloads a fresh snapshot. Snapshot download takes approximately 15-30 minutes depending on your connection, after which block sync will begin automatically.

## 📊 Network

-   **Chain**: `push_42101-1` (Testnet)
-   **Min Stake**: 1.5 PC
-   **Faucet**: [https://faucet.push.org](https://faucet.push.org)
-   **Explorer**: [https://donut.push.network](https://donut.push.network)

## 🔄 Updates

The CLI automatically checks for updates and notifies you:

-   **Dashboard**: Shows notification in header when update available
-   **CLI commands**: Shows notification after command completes

### Manual Update

```bash
push-validator update              # Update to latest version
push-validator update --check      # Check only, don't install
push-validator update --version v1.2.0  # Install specific version
```

Updates download pre-built binaries from GitHub Releases with checksum verification.

## 🔧 Advanced Setup (Optional)

### Setup NGINX with SSL

```bash
bash scripts/setup-nginx.sh yourdomain.com
```

**Creates:**

-   `https://yourdomain.com` - Cosmos RPC endpoint
-   `https://evm.yourdomain.com` - EVM RPC endpoint
-   Automatic SSL certificates via Let's Encrypt
-   Rate limiting and security headers

**Requirements:**

-   Domain pointing to your server IP
-   Ports 80/443 open
-   Ubuntu/Debian system

### Log Rotation

```bash
bash scripts/setup-log-rotation.sh
```

Configures daily rotation with 14-day retention and compression.

### File Locations

-   **Manager**: `~/.local/bin/push-validator`
-   **Chain Binary**: `~/.pchain/cosmovisor/current/bin/pchaind` (managed by Cosmovisor)
-   **Config**: `~/.pchain/config/`
-   **Data**: `~/.pchain/data/`
-   **Logs**: `~/.pchain/logs/pchaind.log`
-   **Backups**: `~/push-node-backups/`
