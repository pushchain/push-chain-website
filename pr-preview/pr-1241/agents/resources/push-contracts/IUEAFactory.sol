// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Source: https://github.com/pushchain/push-chain-core-contracts/blob/main/src/Interfaces/IUEAFactory.sol
// Network: Push Chain Donut Testnet
// Address: 0x00000000000000000000000000000000000000eA (precompile — always present)

/// @notice Identifies the origin chain and owner wallet of a Universal Executor Account (UEA)
struct UniversalAccountId {
    string chainNamespace; // "eip155" for EVM chains, "solana" for Solana
    string chainId;        // e.g. "11155111" for Ethereum Sepolia, "97" for BNB Testnet
    bytes  owner;          // wallet address in bytes — use abi.encodePacked(addr) for EVM;
                           // for Solana, owner is the base58-decoded pubkey as bytes
}

interface IUEAFactory {
    /// @notice Returns the origin chain identity for a given address, and whether it is a UEA
    /// @param addr The address to query (could be a UEA or a native Push Chain EOA)
    /// @return account The UniversalAccountId describing the origin wallet
    /// @return isUEA   True if addr is a UEA smart account; false if it is a native Push Chain EOA
    function getOriginForUEA(address addr)
        external
        view
        returns (UniversalAccountId memory account, bool isUEA);

    /// @notice Returns the deterministic UEA address for a given external wallet
    /// @dev The UEA address is deterministic from the UniversalAccountId even before deployment
    /// @param _id The UniversalAccountId of the external wallet
    /// @return uea        The deterministic UEA address on Push Chain
    /// @return isDeployed True if the UEA smart contract has already been deployed
    function getUEAForOrigin(UniversalAccountId memory _id)
        external
        view
        returns (address uea, bool isDeployed);
}

// ─── Usage example ────────────────────────────────────────────────────────────

contract UEAFactoryConsumer {
    address constant UEA_FACTORY = 0x00000000000000000000000000000000000000eA;

    /// @notice Check whether msg.sender is an external-chain UEA or a native Push Chain EOA
    function identifyCaller()
        external
        view
        returns (UniversalAccountId memory account, bool isUEA)
    {
        return IUEAFactory(UEA_FACTORY).getOriginForUEA(msg.sender);
    }

    /// @notice Get the UEA address for an Ethereum Sepolia wallet
    function deriveUEA(address evmWallet)
        external
        view
        returns (address uea, bool isDeployed)
    {
        return IUEAFactory(UEA_FACTORY).getUEAForOrigin(
            UniversalAccountId({
                chainNamespace: "eip155",
                chainId: "11155111",
                owner: abi.encodePacked(evmWallet)
            })
        );
    }
}
