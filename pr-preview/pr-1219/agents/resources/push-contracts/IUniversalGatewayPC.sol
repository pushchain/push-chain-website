// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Source: https://github.com/pushchain/push-chain-gateway-contracts/blob/main/contracts/evm-gateway/src/UniversalGatewayPC.sol
// Network: Push Chain Donut Testnet
// Address: 0x00000000000000000000000000000000000000C1 (precompile — always present)

/// @notice Request struct for dispatching a transaction to an external chain
/// @dev TX type is inferred from the token/payload combination:
///      token=address(0) + payload     → GAS_AND_PAYLOAD  (execute calldata on external chain)
///      token!=address(0) + no payload → FUNDS             (bridge tokens only)
///      token!=address(0) + payload    → FUNDS_AND_PAYLOAD (bridge + execute atomically)
///      token=address(0) + no payload  → reverts
struct UniversalOutboundTxRequest {
    bytes   recipient;       // target address on external chain — abi.encodePacked(addr) for EVM
    address token;           // PRC20 token to bridge (address(0) = no bridge, execute only)
    uint256 amount;          // amount of PRC20 to bridge (0 if token == address(0))
    uint256 gasLimit;        // gas limit on external chain (0 = UGPC auto-estimates, recommended)
    bytes   payload;         // ABI-encoded calldata for the external chain contract
    address revertRecipient; // receives bridged funds back if the external tx reverts
}

interface IUniversalGatewayPC {
    /// @notice Dispatch a transaction from Push Chain to an external chain via this contract's CEA
    /// @dev msg.value must cover the UGPC protocol fee + estimated gas cost for the external chain.
    ///      Call getOutboundTxGasAndFees() on UniversalCore to estimate the required value.
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

// ─── Usage example ────────────────────────────────────────────────────────────

contract UGPCDispatcher {
    address constant UGPC                      = 0x00000000000000000000000000000000000000C1;
    address constant UNIVERSAL_EXECUTOR_MODULE = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

    mapping(bytes32 => bool) public executedTxIds;

    event OutboundDispatched(address indexed target, bytes4 indexed selector, bytes payload);
    event InboundReceived(bytes32 indexed txId, uint256 amount);

    // ── Dispatch: Push Chain → external chain ─────────────────────────────────

    /// @notice Dispatch a payload-only call to an EVM contract on an external chain
    function dispatch(address targetOnExternalChain, bytes calldata calldata_) external payable {
        IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
            UniversalOutboundTxRequest({
                recipient:       abi.encodePacked(targetOnExternalChain),
                token:           address(0),
                amount:          0,
                gasLimit:        0,
                payload:         calldata_,
                revertRecipient: msg.sender
            })
        );
        emit OutboundDispatched(targetOnExternalChain, bytes4(calldata_), calldata_);
    }

    /// @notice Dispatch tokens + payload to an EVM contract on an external chain
    function dispatchWithFunds(
        address targetOnExternalChain,
        address prc20Token,
        uint256 amount,
        bytes calldata calldata_
    ) external payable {
        IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
            UniversalOutboundTxRequest({
                recipient:       abi.encodePacked(targetOnExternalChain),
                token:           prc20Token,
                amount:          amount,
                gasLimit:        0,
                payload:         calldata_,
                revertRecipient: msg.sender
            })
        );
        emit OutboundDispatched(targetOnExternalChain, bytes4(calldata_), calldata_);
    }

    // ── Inbound callback: external chain → Push Chain ─────────────────────────

    /// @notice Called by UNIVERSAL_EXECUTOR_MODULE after the CEA has executed on the external chain
    /// @dev MUST guard with msg.sender == UNIVERSAL_EXECUTOR_MODULE and replay protection via txId
    function executeUniversalTx(
        string  calldata sourceChainNamespace, // e.g. "eip155:97" (BNB Testnet)
        bytes   calldata ceaAddress,           // bytes-encoded CEA address on source chain
        bytes   calldata payload,              // ABI-encoded response data from external chain
        uint256          amount,               // amount of PRC20 received (if bridged)
        address          prc20,               // PRC20 token address on Push Chain (if bridged)
        bytes32          txId                 // unique ID for this inbound call — replay protection
    ) external payable {
        require(msg.sender == UNIVERSAL_EXECUTOR_MODULE, "UGPC: unauthorized caller");
        require(!executedTxIds[txId], "UGPC: replay detected");
        executedTxIds[txId] = true;

        // Decode and handle the response payload
        // Example: (uint256 result) = abi.decode(payload, (uint256));
    }
}
