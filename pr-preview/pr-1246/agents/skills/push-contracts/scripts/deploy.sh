#!/usr/bin/env bash
# deploy.sh — Deploy and verify MyMultichainApp on Push Chain Donut Testnet
# Usage: PRIVATE_KEY=0x... bash deploy.sh
# Requires: Foundry (forge) installed — https://book.getfoundry.sh/getting-started/installation

set -euo pipefail

PUSH_RPC="https://evm.donut.rpc.push.org/"
SRC="src/MyMultichainApp.sol:MyMultichainApp"

if [[ -z "${PRIVATE_KEY:-}" ]]; then
  echo "Error: PRIVATE_KEY env var is required"
  exit 1
fi

echo "→ Building..."
forge build

echo "→ Deploying to Push Chain Donut Testnet..."
DEPLOY_OUTPUT=$(forge create \
  --rpc-url "$PUSH_RPC" \
  --private-key "$PRIVATE_KEY" \
  "$SRC" \
  --json)

CONTRACT_ADDRESS=$(echo "$DEPLOY_OUTPUT" | grep -o '"deployedTo":"[^"]*"' | cut -d'"' -f4)
echo "✅ Deployed: $CONTRACT_ADDRESS"
echo "   Explorer: https://donut.push.network/address/$CONTRACT_ADDRESS"

# ── Deploy to Ethereum Sepolia as well (for the CEA) ─────────────────────────
# Uncomment and adapt if you also need a contract on the external chain:
#
# ETH_SEP_RPC="https://ethereum-sepolia-rpc.publicnode.com"
# forge create \
#   --rpc-url "$ETH_SEP_RPC" \
#   --private-key "$PRIVATE_KEY" \
#   "src/MyExternalContract.sol:MyExternalContract"

echo "Done."
