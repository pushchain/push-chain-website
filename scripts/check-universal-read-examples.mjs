/**
 * Validate the exact Universal Read playgrounds from MDX against core 6.0.26.
 * Default: offline syntax check. --live needs a funded Donut PUSH_PRIVATE_KEY,
 * checks all 11 playgrounds (7 single-read, prepare, 2 batches, resume), funds
 * nine temporary wallets with 0.05 test PC each and returns unused funds.
 */
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';

const require = createRequire(import.meta.url);
assert.equal(require('@pushchain/core/package.json').version, '6.0.26');
const readPages = [
  '04-universal-reads/01-Read-Universal-State.mdx',
  '04-universal-reads/02-Read-Multiple-Universal-States.mdx',
  '04-universal-reads/03-Contract-Initiated-Universal-Read-and-Callback.mdx',
  '04-universal-reads/04-Track-Universal-Read.mdx',
];
const source = readPages
  .map((page) =>
    fs.readFileSync(
      new URL('../docs/chain/03-build/' + page, import.meta.url),
      'utf8'
    )
  )
  .join('\n');
const samples = [...source.matchAll(/\{`([\s\S]*?)`\}/g)].map((match) => {
  assert.ok(
    !match[1].includes('$' + '{'),
    'Playground extraction must contain no interpolation'
  );
  const code = vm.runInNewContext('`' + match[1] + '`');
  return { id: code.match(/customPropGTagEvent=(\S+)/)[1], code };
});
assert.equal(samples.length, 11);
assert.deepEqual(
  samples.map((sample) => sample.id),
  [
    'universal_read_evm_balance',
    'universal_read_erc20_balance',
    'universal_read_contract_call',
    'universal_read_storage_slot',
    'universal_read_sol_balance',
    'universal_read_spl_token',
    'universal_read_web2',
    'universal_read_prepare',
    'universal_read_batch',
    'universal_read_batch_three_sources',
    'universal_read_resume',
  ]
);
for (const sample of samples) {
  assert.match(sample.code, /try\s*\{/);
  assert.match(
    sample.code,
    sample.id === 'universal_read_prepare'
      ? /finally\s*\{[\s\S]*provider\.destroy\(\)/
      : /finally\s*\{[\s\S]*rl\.close\(\)/
  );
  assert.match(sample.code, /process\.exitCode\s*=\s*1/);
}

const inboxFences = [...source.matchAll(/```solidity\n([\s\S]*?)```/g)]
  .map((match) => match[1])
  .filter((body) => body.includes('contract ExternalStateInbox'));
assert.equal(
  inboxFences.length,
  1,
  'Expected exactly one ExternalStateInbox solidity fence'
);
const solidity = inboxFences[0];
assert.match(
  solidity,
  /constructor\(address callbackAddress, address requester_\)/
);
assert.match(solidity, /REQUESTER\s*=\s*requester_/);
assert.match(solidity, /require\(msg\.sender\s*==\s*REQUESTER/);
assert.doesNotMatch(solidity, /owner\s*=\s*msg\.sender/);

const constants = JSON.parse(
  fs.readFileSync(
    new URL('../static/agents/constants.json', import.meta.url),
    'utf8'
  )
);
assert.equal(constants.current_sdk_version, '6.0.26');
assert.equal(constants.CHAIN.WEB2, PushChain.CONSTANTS.CHAIN.WEB2);
assert.equal(constants.READ.WEB2, PushChain.CONSTANTS.READ.WEB2);
assert.equal(
  constants.READ.REGISTRY_CALLBACK_GAS,
  PushChain.CONSTANTS.READ.REGISTRY_CALLBACK_GAS + 'n'
);
assert.equal(
  constants.READ.MAX_CALLBACK_GAS_LIMIT,
  PushChain.CONSTANTS.READ.MAX_CALLBACK_GAS_LIMIT + 'n'
);
assert.deepEqual(
  constants.READ.STATUS,
  Object.fromEntries(
    Object.entries(PushChain.CONSTANTS.READ.STATUS).filter(([key]) =>
      Number.isNaN(Number(key))
    )
  )
);

const addresses = JSON.parse(
  fs.readFileSync(
    new URL('../static/agents/contract-addresses.json', import.meta.url),
    'utf8'
  )
);
const readContracts = addresses.push_chain.core_contracts;
assert.equal(
  (
    readContracts.UniversalCallback.proxy ??
    readContracts.UniversalCallback.address
  ).toLowerCase(),
  PushChain.CONSTANTS.READ.UNIVERSAL_CALLBACK_ADDRESSES.TESTNET_DONUT.toLowerCase()
);

// The registry address is asserted against the Smart Contract Address Book,
// which is the source of truth for agent data, not against the installed SDK.
const addressBook = fs.readFileSync(
  new URL(
    '../docs/chain/02-setup/02-Smart-Contract-Address-Book.mdx',
    import.meta.url
  ),
  'utf8'
);
const addressBookProxy = (name) => {
  const row = addressBook
    .split('\n')
    .find((line) => line.startsWith('| ' + name + ' '));
  assert.ok(row, 'Address book row missing: ' + name);
  return row.match(/\[(0x[0-9a-fA-F]{40})\]/)[1];
};
const registryAddress = addressBookProxy('Universal Read Registry');
assert.equal(
  readContracts.UniversalReadRegistry.proxy.toLowerCase(),
  registryAddress.toLowerCase()
);
assert.equal(
  constants.READ.UNIVERSAL_READ_REGISTRY_ADDRESS.TESTNET_DONUT.toLowerCase(),
  registryAddress.toLowerCase()
);
assert.equal(
  readContracts.UniversalCallback.proxy.toLowerCase(),
  addressBookProxy('Universal Read / Callback').toLowerCase()
);
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
for (const sample of samples) {
  sample.body = sample.code
    .replace(/^\s*import.*$/gm, '')
    .replace(
      'main().catch(error => { console.error(error.message); process.exitCode = 1; });',
      'await main();'
    );
  sample.run = new AsyncFunction(
    'PushChain',
    'ethers',
    'readline',
    'console',
    sample.body
  );
  console.log('Syntax OK:', sample.id);
}
if (!process.argv.includes('--live')) {
  console.log(
    'Offline checks passed; --live requires a funded Donut PUSH_PRIVATE_KEY.'
  );
} else {
  const key = process.env.PUSH_PRIVATE_KEY;
  assert.ok(key, 'PUSH_PRIVATE_KEY is required for live verification');
  const provider = new ethers.JsonRpcProvider(
    'https://evm.donut.rpc.push.org/'
  );
  const funder = new ethers.NonceManager(new ethers.Wallet(key, provider));
  const funderAddress = await funder.getAddress();
  const wallets = [];
  let requestId;
  try {
    for (const sample of samples) {
      let printedValue = false;
      const log = {
        log: (...args) => {
          console.log(...args);
          if (args[0] === 'Save requestId:') requestId = args[1];
          if (
            args[0] ===
            (sample.id === 'universal_read_prepare' ? 'Total fee:' : 'Value:')
          )
            printedValue = true;
        },
        error: (...args) => {
          throw new Error(args.join(' '));
        },
      };
      const sdkEthers = {
        ...ethers,
        Wallet: {
          createRandom() {
            const wallet = ethers.Wallet.createRandom();
            wallets.push(wallet.connect(provider));
            return wallet;
          },
        },
      };
      const readline = {
        createInterface: () => ({
          question: async (question) => {
            if (question.includes('Fund this temporary wallet')) {
              const address = question.match(/0x[0-9a-fA-F]{40}/)?.[0];
              assert.ok(address, 'Funding prompt must include wallet address');
              const tx = await funder.sendTransaction({
                to: address,
                value: ethers.parseEther('0.05'),
              });
              await tx.wait();
              return '';
            }
            if (question.includes('Select what to track')) return '3';
            assert.ok(requestId, 'Registry example must run before resume');
            return requestId;
          },
          close() {},
        }),
      };
      await sample.run(PushChain, sdkEthers, readline, log);
      assert.ok(printedValue, 'Example must confirm a decoded usable value');
      console.log('LIVE PASS:', sample.id);
    }
  } finally {
    for (const wallet of wallets) {
      try {
        const balance = await provider.getBalance(wallet.address);
        const fee = await provider.getFeeData();
        const gas =
          (await provider.estimateGas({
            from: wallet.address,
            to: funderAddress,
            value: 1n,
          })) * 2n;
        const reserve = gas * fee.maxFeePerGas;
        if (balance > reserve) {
          const tx = await wallet.sendTransaction({
            to: funderAddress,
            value: balance - reserve,
            gasLimit: gas,
            maxFeePerGas: fee.maxFeePerGas,
            maxPriorityFeePerGas: fee.maxPriorityFeePerGas,
          });
          await tx.wait();
          console.log('Returned test funds:', wallet.address, tx.hash);
        }
      } catch (error) {
        console.error(
          'Could not return test funds from',
          wallet.address,
          error.message
        );
      }
    }
    provider.destroy();
  }
}
