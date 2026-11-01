// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// ─── Interfaces (inline — copy-paste ready) ───────────────────────────────────

struct UniversalAccountId {
    string chainNamespace;
    string chainId;
    bytes  owner;
}

interface IUEAFactory {
    function getOriginForUEA(address addr)
        external view returns (UniversalAccountId memory account, bool isUEA);
    function getUEAForOrigin(UniversalAccountId memory _id)
        external view returns (address uea, bool isDeployed);
}

struct UniversalOutboundTxRequest {
    bytes   recipient;       // raw destination address on source chain (bytes for SVM compat)
    address token;
    uint256 amount;
    uint256 gasLimit;
    uint256 gasPrice;        // new in SDK v6 (0 = per-chain default from UniversalCore)
    uint256 maxPCForGas;     // new in SDK v6 (0 = no cap on PC spent on the gas swap)
    bytes   payload;
    address revertRecipient;
}

interface IUniversalGatewayPC {
    function sendUniversalTxOutbound(UniversalOutboundTxRequest calldata req) external payable;
}

// ─── Main contract ────────────────────────────────────────────────────────────

/// @title MyMultichainApp
/// @notice Minimal complete Push Chain multichain contract demonstrating:
///         1. Identifying external chain callers via IUEAFactory
///         2. Dispatching outbound txs to external chains via UGPC
///         3. Receiving inbound callbacks from the external chain execution
contract MyMultichainApp {
    // ── Push Chain Donut Testnet addresses ────────────────────────────────────
    address constant UEA_FACTORY  = 0x00000000000000000000000000000000000000eA;
    address constant UGPC         = 0x00000000000000000000000000000000000000C1;
    address constant UNIVERSAL_EXECUTOR_MODULE = 0x14191Ea54B4c176fCf86f51b0FAc7CB1E71Df7d7;

    // ── State ─────────────────────────────────────────────────────────────────
    mapping(bytes32 => bool) public executedTxIds;
    mapping(address => uint256) public callCount;

    // ── Events ────────────────────────────────────────────────────────────────
    event OutboundDispatched(address indexed target, bytes32 indexed payloadHash);
    event InboundReceived(bytes32 indexed txId, string sourceChain, uint256 amount);

    // ── 1. Identify caller origin ─────────────────────────────────────────────

    /// @notice Returns whether msg.sender is a UEA and which chain/wallet it represents
    function getCallerOrigin()
        external
        view
        returns (UniversalAccountId memory account, bool isUEA)
    {
        return IUEAFactory(UEA_FACTORY).getOriginForUEA(msg.sender);
    }

    // ── 2. Dispatch outbound to external chain ────────────────────────────────

    /// @notice Send a payload to a contract on an external chain
    /// @param target  Target contract address on the external chain
    /// @param payload ABI-encoded calldata for the external contract
    /// @dev  msg.value must cover UGPC protocol fee + estimated gas on external chain
    function dispatch(address target, bytes calldata payload) external payable {
        IUniversalGatewayPC(UGPC).sendUniversalTxOutbound{value: msg.value}(
            UniversalOutboundTxRequest({
                recipient:          abi.encodePacked(target),
                token:           address(0),
                amount:          0,
                gasLimit:        0, // auto-estimate
                gasPrice:        0, // UniversalCore default
                maxPCForGas:     0, // uncapped legacy behavior
                payload:         payload,
                revertRecipient: msg.sender
            })
        );
        emit OutboundDispatched(target, keccak256(payload));
    }

    // ── 3. Receive inbound callback ───────────────────────────────────────────

    /// @notice Called by UNIVERSAL_EXECUTOR_MODULE after the CEA executed on the external chain
    /// @dev    Always guard with UNIVERSAL_EXECUTOR_MODULE check and txId replay protection
    function executeUniversalTx(
        string  calldata sourceChainNamespace, // e.g. "eip155:97"
        bytes   calldata ceaAddress,           // CEA address on source chain (bytes)
        bytes   calldata payload,              // ABI-encoded response from external chain
        uint256          amount,               // PRC20 amount received (0 if no bridge)
        address          prc20,               // PRC20 token address on Push Chain
        bytes32          txId                 // unique ID — use for replay protection
    ) external payable {
        require(msg.sender == UNIVERSAL_EXECUTOR_MODULE, "MyMultichainApp: unauthorized");
        require(!executedTxIds[txId], "MyMultichainApp: replay detected");
        executedTxIds[txId] = true;

        // Track calls per CEA address (bytes → address conversion for EVM CEAs)
        address ceaAddr = address(bytes20(ceaAddress));
        callCount[ceaAddr]++;

        emit InboundReceived(txId, sourceChainNamespace, amount);

        // Decode and handle your response payload here:
        // (uint256 result) = abi.decode(payload, (uint256));
    }
}
