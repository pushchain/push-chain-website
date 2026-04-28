# Sign Universal Message

## Purpose

Sign arbitrary messages using the Universal Signer, producing a signature that can be verified on Push Chain or used for off-chain authentication.

## When to Use

- Authenticating users via message signing (Sign-In with Ethereum pattern)
- Creating off-chain signatures for verification
- Signing data for smart contract operations that verify signatures
- Proving ownership of a Universal Account

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Initialized client | `pushChainClient` from `PushChain.initialize()` |
| Signer mode | Client must have `UniversalSigner` (not read-only) |
| Message prepared | String or Uint8Array message to sign |

## Inputs

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `message` | `string` \| `Uint8Array` | Yes | The message to sign |

## Steps

### Sign a String Message

1. **Prepare the message**
   ```typescript
   const message = 'Hello, Push Chain! Timestamp: ' + Date.now();
   ```

2. **Convert string to Uint8Array**
   ```typescript
   const messageBytes = new TextEncoder().encode(message);
   ```

3. **Sign the message**
   ```typescript
   const signature = await pushChainClient.universal.signMessage(messageBytes);
   ```

4. **Handle the signature**
   ```typescript
   console.log('Signature:', signature);
   // signature is Uint8Array
   
   // Convert to hex for transmission
   const signatureHex = '0x' + Array.from(signature)
     .map(b => b.toString(16).padStart(2, '0'))
     .join('');
   console.log('Signature (hex):', signatureHex);
   ```

### Sign with Ethers.js Hash Prefix

For EIP-191 compatible signatures (Sign-In with Ethereum):

```typescript
import { ethers } from 'ethers';

// Create message hash with Ethereum prefix
const message = 'Sign this message to authenticate';
const messageHash = ethers.hashMessage(message);

// Sign the prefixed message
const messageBytes = ethers.getBytes(messageHash);
const signature = await pushChainClient.universal.signMessage(messageBytes);
```

### Verify Signature (Off-chain)

```typescript
import { ethers } from 'ethers';

// Recover signer address from signature
const recoveredAddress = ethers.verifyMessage(message, signatureHex);

// Compare with expected address
const expectedAddress = pushChainClient.universal.origin.address;
const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();

console.log('Signature valid:', isValid);
```

### Sign Typed Data (EIP-712)

For structured data signing:

1. **Define typed data parameters**
   ```typescript
   const domain = {
     name: 'MyApp',
     version: '1',
     chainId: 42101, // Push Chain Testnet
     verifyingContract: '0xContractAddress',
   };
   
   const types = {
     Message: [
       { name: 'content', type: 'string' },
       { name: 'timestamp', type: 'uint256' },
     ],
   };
   
   const value = {
     content: 'Hello, Push Chain!',
     timestamp: BigInt(Date.now()),
   };
   ```

2. **Sign typed data**
   ```typescript
   const signature = await pushChainClient.universal.signTypedData(domain, types, value);
   ```

### Complete Authentication Flow

```typescript
async function authenticateUser(pushChainClient) {
  // 1. Generate challenge
  const challenge = `Sign to authenticate with MyApp\nNonce: ${crypto.randomUUID()}\nTimestamp: ${new Date().toISOString()}`;
  
  // 2. Sign challenge
  const messageBytes = new TextEncoder().encode(challenge);
  const signature = await pushChainClient.universal.signMessage(messageBytes);
  
  // 3. Prepare authentication payload
  const authPayload = {
    message: challenge,
    signature: '0x' + Array.from(signature).map(b => b.toString(16).padStart(2, '0')).join(''),
    address: pushChainClient.universal.origin.address,
    chain: pushChainClient.universal.origin.chain,
  };
  
  // 4. Send to backend for verification
  // const response = await fetch('/api/auth', { method: 'POST', body: JSON.stringify(authPayload) });
  
  return authPayload;
}
```

## Expected Output

### Signature Output

```typescript
// Raw signature (Uint8Array)
Uint8Array(65) [27, 45, 128, ...]

// Hex-encoded signature
'0x1b2d80...' // 65 bytes = 130 hex chars + '0x' prefix
```

### Signature Components (EVM)

For EVM signatures, the 65-byte output contains:
- `r`: bytes 0-31
- `s`: bytes 32-63
- `v`: byte 64 (recovery identifier)

## Common Failures

| Error | Cause | Recovery |
|-------|-------|----------|
| `Restricted call blocked` | Client in read-only mode | Initialize with `UniversalSigner` |
| `User rejected signature` | User declined wallet prompt | Retry; explain why signature is needed |
| `Invalid message format` | Message not Uint8Array | Use `new TextEncoder().encode(string)` |
| `Signature verification failed` | Wrong message or address | Ensure exact message match; check address case |

## Agent Notes

- **Message must be Uint8Array**: Convert strings with `TextEncoder`.
- **Signature is Uint8Array**: Convert to hex for storage/transmission.
- **User sees wallet prompt**: Clear message helps user understand what they're signing.
- **No gas required**: Message signing is off-chain; free operation.
- **Origin address signs**: Signature is from `universal.origin`, not UEA.
- **EIP-712 for structured data**: Use `signTypedData` for complex data with type safety.

## MCP Mapping Candidates

- `sign_message` — Sign arbitrary message bytes
- `sign_typed_data` — Sign EIP-712 structured data
- `verify_signature` — Verify signature matches address
- `create_auth_challenge` — Generate authentication challenge
- `encode_message_to_bytes` — Convert string to Uint8Array