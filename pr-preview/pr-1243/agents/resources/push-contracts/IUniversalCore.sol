// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Source: https://github.com/pushchain/push-chain-core-contracts/blob/audit-main/src/UniversalCore.sol
// Network: Push Chain Donut Testnet
// Address: see https://push.org/docs/chain/setup/smart-contract-address-book/

/// @notice Read-only interface for UniversalCore — the on-chain fee oracle and chain state tracker.
///         Use this to estimate fees before calling UGPC.sendUniversalTxOutbound(), and to read
///         current gas prices and block heights for external chains observed by the TSS network.
interface IUniversalCore {
    /// @notice Estimate the gas fee and protocol fee for dispatching an outbound tx
    /// @param prc20     PRC20 token address associated with the target external chain
    /// @param gasLimit  Gas limit for the external chain tx (0 = use BASE_GAS_LIMIT)
    /// @return gasToken     PRC20 address of the token used to pay gas on that chain
    /// @return gasFee       Estimated gas cost in gasToken units
    /// @return protocolFee  Protocol fee in native PC (must be sent as msg.value to UGPC)
    /// @return gasPrice     Current gas price observed on the external chain
    /// @return chainNamespace  Chain namespace string ("eip155" or "solana")
    function getOutboundTxGasAndFees(address prc20, uint256 gasLimit)
        external
        view
        returns (
            address gasToken,
            uint256 gasFee,
            uint256 protocolFee,
            uint256 gasPrice,
            string  memory chainNamespace
        );

    /// @notice Estimate the gas cost for a rescue-funds operation on the external chain
    function getRescueFundsGasLimit(address prc20)
        external
        view
        returns (
            address gasToken,
            uint256 gasFee,
            uint256 rescueGasLimit,
            uint256 gasPrice,
            string  memory chainNamespace
        );

    // ── Public state — call these as regular view functions ───────────────────

    /// @notice Returns the current gas price (in wei) on the external chain associated with this namespace
    /// @param chainNamespace e.g. "eip155:11155111" for Ethereum Sepolia
    function gasPriceByChainNamespace(string calldata chainNamespace) external view returns (uint256);

    /// @notice Returns the most recently observed block height on the external chain
    function chainHeightByChainNamespace(string calldata chainNamespace) external view returns (uint256);

    /// @notice Returns the Unix timestamp (seconds) when the block height was last observed
    function timestampObservedAtByChainNamespace(string calldata chainNamespace) external view returns (uint256);

    /// @notice Returns the base gas limit used for outbound tx estimation when gasLimit=0
    function BASE_GAS_LIMIT() external view returns (uint256);
}

// ─── Usage example ────────────────────────────────────────────────────────────

contract FeeEstimator {
    // Replace with the actual deployed address from the address book
    address constant UNIVERSAL_CORE = address(0); // TODO: fill from address book

    /// @notice Returns the protocol fee required to send msg.value when calling UGPC
    function estimateProtocolFee(address prc20) external view returns (uint256 protocolFee) {
        (, , protocolFee, ,) = IUniversalCore(UNIVERSAL_CORE).getOutboundTxGasAndFees(prc20, 0);
    }

    /// @notice Returns the current gas price observed for a given chain namespace
    function getGasPrice(string calldata chainNamespace) external view returns (uint256) {
        return IUniversalCore(UNIVERSAL_CORE).gasPriceByChainNamespace(chainNamespace);
    }

    /// @notice Returns the last observed block height for a given chain
    function getChainHeight(string calldata chainNamespace) external view returns (uint256 height, uint256 observedAt) {
        height     = IUniversalCore(UNIVERSAL_CORE).chainHeightByChainNamespace(chainNamespace);
        observedAt = IUniversalCore(UNIVERSAL_CORE).timestampObservedAtByChainNamespace(chainNamespace);
    }
}
