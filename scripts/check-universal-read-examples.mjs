/**
 * Validate the exact Universal Read playgrounds from MDX against core 6.0.25.
 * Default: offline syntax check. --live needs a funded Donut PUSH_PRIVATE_KEY,
 * funds two temporary wallets with 0.05 test PC each and returns unused funds.
 */
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

const require = createRequire(import.meta.url);
assert.equal(require('@pushchain/core/package.json').version, '6.0.25');
const source = fs.readFileSync(new URL('../docs/chain/03-build/13a-Universal-Read.mdx', import.meta.url), 'utf8');
const samples = [...source.matchAll(/\{`([\s\S]*?)`\}/g)].map(match => {
  assert.ok(!match[1].includes('$' + '{'), 'Playground extraction must contain no interpolation');
  const code = vm.runInNewContext('`' + match[1] + '`');
  return { id: code.match(/customPropGTagEvent=(\S+)/)[1], code };
});
assert.equal(samples.length, 3);
for (const sample of samples) {
  assert.match(sample.code, /try\s*\{/);
  assert.match(sample.code, /finally\s*\{[\s\S]*rl\.close\(\)/);
  assert.match(sample.code, /process\.exitCode\s*=\s*1/);
}

const solidity = source.match(/```solidity\n([\s\S]*?)```/)?.[1] ?? '';
assert.match(solidity, /constructor\(address callbackAddress, address requester_\)/);
assert.match(solidity, /REQUESTER\s*=\s*requester_/);
assert.match(solidity, /require\(msg\.sender\s*==\s*REQUESTER/);
assert.doesNotMatch(solidity, /owner\s*=\s*msg\.sender/);

const constants = JSON.parse(fs.readFileSync(new URL('../static/agents/constants.json', import.meta.url), 'utf8'));
assert.equal(constants.current_sdk_version, '6.0.25');
assert.equal(constants.CHAIN.WEB2, PushChain.CONSTANTS.CHAIN.WEB2);
assert.equal(constants.READ.WEB2, PushChain.CONSTANTS.READ.WEB2);
assert.equal(constants.READ.REGISTRY_CALLBACK_GAS, PushChain.CONSTANTS.READ.REGISTRY_CALLBACK_GAS + 'n');
assert.equal(constants.READ.MAX_CALLBACK_GAS_LIMIT, PushChain.CONSTANTS.READ.MAX_CALLBACK_GAS_LIMIT + 'n');
assert.deepEqual(constants.READ.STATUS, Object.fromEntries(Object.entries(PushChain.CONSTANTS.READ.STATUS).filter(([key]) => Number.isNaN(Number(key)))));

const addresses = JSON.parse(fs.readFileSync(new URL('../static/agents/contract-addresses.json', import.meta.url), 'utf8'));
const readContracts = addresses.push_chain.core_contracts;
assert.equal(readContracts.UniversalCallback.address.toLowerCase(), PushChain.CONSTANTS.READ.UNIVERSAL_CALLBACK_ADDRESSES.TESTNET_DONUT.toLowerCase());
// Deployment catalog can precede the SDK release bundled by the playground.
assert.equal(readContracts.UniversalReadRegistry.proxy.toLowerCase(), '0x00000000000000000000000000000000000000b2');
assert.equal(readContracts.UniversalReadRegistry.proxy, constants.READ.UNIVERSAL_READ_REGISTRY_ADDRESS.TESTNET_DONUT);
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
for (const sample of samples) {
  sample.body = sample.code.replace(/^\s*import.*$/gm, '')
    .replace("main().catch(error => { console.error(error.message); process.exitCode = 1; });", 'await main();');
  sample.run = new AsyncFunction('PushChain', 'ethers', 'readline', 'console', sample.body);
  console.log('Syntax OK:', sample.id);
}
if (!process.argv.includes('--live')) {
  console.log('Offline checks passed; --live requires a funded Donut PUSH_PRIVATE_KEY.');
} else {
  const key = process.env.PUSH_PRIVATE_KEY;
  assert.ok(key, 'PUSH_PRIVATE_KEY is required for live verification');
  const provider = new ethers.JsonRpcProvider('https://evm.donut.rpc.push.org/');
  const funder = new ethers.NonceManager(new ethers.Wallet(key, provider));
  const funderAddress = await funder.getAddress();
  const wallets = [];
  let requestId;
  try {
    for (const sample of samples) {
      let printedValue = false;
      const log = { log: (...args) => {
        console.log(...args);
        if (args[0] === 'Save requestId:') requestId = args[1];
        if (args[0] === 'Value:') printedValue = true;
      }, error: (...args) => { throw new Error(args.join(' ')); } };
      const sdkEthers = { ...ethers, Wallet: { createRandom() {
        const wallet = ethers.Wallet.createRandom();
        wallets.push(wallet.connect(provider));
        return wallet;
      } } };
      const readline = { createInterface: () => ({
        question: async question => {
          if (question.startsWith(':::prompt:::')) {
            const address = question.match(/0x[0-9a-fA-F]{40}/)?.[0];
            assert.ok(address, 'Funding prompt must include wallet address');
            const tx = await funder.sendTransaction({ to: address, value: ethers.parseEther('0.05') });
            await tx.wait();
            return '';
          }
          assert.ok(requestId, 'Registry example must run before resume');
          return requestId;
        },
        close() {},
      }) };
      await sample.run(PushChain, sdkEthers, readline, log);
      assert.ok(printedValue, 'Example must confirm a decoded usable value');
      console.log('LIVE PASS:', sample.id);
    }
  } finally {
    for (const wallet of wallets) {
      try {
        const balance = await provider.getBalance(wallet.address);
        const fee = await provider.getFeeData();
        const gas = (await provider.estimateGas({ from: wallet.address, to: funderAddress, value: 1n })) * 2n;
        const reserve = gas * fee.maxFeePerGas;
        if (balance > reserve) {
          const tx = await wallet.sendTransaction({ to: funderAddress, value: balance - reserve, gasLimit: gas, maxFeePerGas: fee.maxFeePerGas, maxPriorityFeePerGas: fee.maxPriorityFeePerGas });
          await tx.wait();
          console.log('Returned test funds:', wallet.address, tx.hash);
        }
      } catch (error) {
        console.error('Could not return test funds from', wallet.address, error.message);
      }
    }
    provider.destroy();
  }
}
