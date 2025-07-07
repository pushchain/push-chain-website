interface IQuickstartItem {
  title: string;
  codeblock: string;
}

export interface ITechDocItem {
  title: string;
  description: string;
  codeblock?: string;
  srcref?: string;
  alt?: string;
  link?: string;
  target?: string;
}

interface ISdkListItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
}

export const QuickstartItems: IQuickstartItem[] = [
  {
    title: 'Core SDK Quickstart',
    codeblock: `// Import Push Chain SDK
import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';

// Generate wallet
const wallet = ethers.Wallet.createRandom();

// Create Signer, change JsonRpcProvider to attach different chain's account
const provider = new ethers.JsonRpcProvider('https://evm.rpc-testnet-donut-node1.push.org/');
const signer = wallet.connect(provider);

// Convert to Universal Signer
const universalSigner = await PushChain.utils.signer.toUniversal(signer);

// Initialize Push Chain Client
const pushChainClient = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});

// Send a universal transaction (from any chain to Push Chain)
const txHash = await pushChainClient.universal.sendTransaction({
  to: '0xD0DE00000447492307108Bdc7Ff6BaB33Ff37Dacc479', // To address on Push Chain
  value: BigInt(0), // $PC Value to send
});
`,
  },
  {
    title: 'UI-Kit Quickstart',
    codeblock: `// Import Push UI Kit
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  usePushWalletContext,
  usePushChainClient,
  PushUI
} from '@pushchain/ui-kit';

function App() {
  // create wallet config to pass to Provider
  const walletConfig = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
  };

return (
  <PushUniversalWalletProvider
    config={walletConfig}
  >
    // Abstracts Core SDK
    // Access from usePushChainClient()
    <PushUniversalAccountButton />
  </PushUniversalWalletProvider>
 );
}
`,
  },
];

export const TechDocItems: ITechDocItem[] = [
  {
    title: 'Push Chain',
    srcref: 'pushchain',
    alt: 'Logo representing Push Chain - Push Protocol',
    link: '/docs/chain',
    target: '_self',
    description:
      'Explore Push Chain and learn how to integrate it for building universal Apps.',
    codeblock: `// Convert to Universal Signer
const universalSigner = await PushChain.utils.signer.toUniversal(signer);

// Initialize Push Chain Client
const pushChainClient = await PushChain.initialize(universalSigner, {
  network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
});

// Send a universal transaction (from any chain to Push Chain)
const txHash = await pushChainClient.universal.sendTransaction({
  to: '0xD0DE00000447492307108Bdc7Ff6BaB33Ff37Dacc479', // To address on Push Chain
  value: BigInt(0), // $PC Value to send
});
);`,
  },
  {
    title: 'Examples',
    srcref: 'star',
    alt: 'Logo representing examples repo - Push Chain',
    link: 'https://github.com/pushchain/push-chain-examples/tree/main/examples',
    target: '_blank',
    description:
      'Examples to show how to use Push Chain and instantly 10x your userbase.',
  },
  {
    title: 'Push Reward Points',
    srcref: 'rewards',
    alt: 'Logo representing reward points of Push Protocol',
    link: '/docs/rewards',
    target: '_self',
    description:
      'Reward Program for contributors. Complete activities and earn points.',
  },
  // {
  //   title: 'Push Notification & Chat Protocol',
  //   srcref: 'showrunners',
  //   alt: 'Logo representing reward points of Push Protocol',
  //   link: 'https://comms.push.org/docs',
  //   target: '_blank',
  //   description:
  //     'Looking for Push Notification or Chat protocol? they have a new home over here.',
  // },
];

export const SdkItemsList: ISdkListItem[] = [
  {
    title: 'Core SDK',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://github.com/pushchain/push-chain-sdk/tree/main/packages/core',
  },
  // {
  //   title: 'REST API',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/restapi',
  // },
  // {
  //   title: 'React Native',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/react-native-sdk',
  // },
  // {
  //   title: 'Socket',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/socket',
  // },
  // {
  //   title: 'UIWeb',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/uiweb',
  // },
  {
    title: 'UI Kit',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://github.com/pushchain/push-chain-sdk/tree/main/packages/ui-kit',
  },
];

export const accordionItems = [
  { title: 'What is Push?', content: 'Content for Section 1' },
  {
    title: 'How do I contact customer support?',
    content:
      'You can try telekinesis, but we recommend using our contact form instead.',
  },
  { title: 'What is Push trying to solve?', content: 'Content for Section 3' },
  {
    title: 'How can I use Push as an end-user?',
    content: 'Content for Section 3',
  },
  {
    title: 'What are the web3 communication products launched by Push?',
    content: 'Content for Section 3',
  },
  {
    title: 'Do I have to pay to send notifications?',
    content: 'Content for Section 3',
  },
];

export const ToolingItems = [
  {
    title: 'Wallet Setup',
    href: '/docs/chain/setup/tooling/wallet-setup/',
    content:
      'Add Push Chain as custom network to your wallet before building your app.',
  },
  {
    title: 'Faucet',
    href: '/docs/chain/setup/tooling/faucet',
    content:
      'A drip of testnet $PC to play with, deploy your smart contracts, and test your app.',
  },
  {
    title: 'Chain Explorer',
    href: '/docs/chain/setup/tooling/block-explorer/',
    content:
      'Explore Push Chain transactions, blocks, and accounts in real time.',
  },
];

export const TutorialDocumentationItems = [
  {
    title: 'Simple Counter App',
    href: '/docs/chain/tutorials/tutorial-simple-counter/',
    content:
      'The process of building a simple smart contract like a counter is exactly similar to any other EVM Chain.',
  },
  {
    title: 'Universal Counter App',
    href: '/docs/chain/tutorials/tutorial-universal-counter/',
    content:
      'GM vs GM is a simple example to show how to create a Universal App on Push...',
  },
];

export const GridTopItems = [
  {
    bgColor: '#dd6fff',
    title: 'What is Push Chain?',
    href: '/docs/chain/',
    description:
      'Push Chain provides a unified toolkit to build truly universal apps.',
    image: require(`@site/static/assets/website/docshub/WhitePushLogo.png`)
      .default,
    image2x: require(`@site/static/assets/website/docshub/WhitePushLogo@2x.png`)
      .default,
    image3x: require(`@site/static/assets/website/docshub/WhitePushLogo@3x.png`)
      .default,
    customWidth: '70px',
    gridBG: require(`@site/static/assets/website/docshub/BG.png`).default,
  },
  {
    bgColor: '#4277F7',
    title: `Let's build!`,
    href: '/docs/chain/build/',
    description:
      'Everything you need with Push Chain SDK to create your universal app.',
    link: null,
    image: require(`@site/static/assets/website/docshub/Build.png`).default,
    image2x: require(`@site/static/assets/website/docshub/Build@2x.png`)
      .default,
    image3x: require(`@site/static/assets/website/docshub/Build@3x.png`)
      .default,
    customWidth: '110px',
    gridBG: require(`@site/static/assets/website/docshub/BlueBG.png`).default,
  },
  {
    bgColor: '#4277F7',
    title: 'UI Kit',
    href: '/docs/chain/ui-kit/',
    description: 'Integrate any React based app in less than 5 minutes.',
    image: require(`@site/static/assets/website/docshub/UIKit.png`).default,
    image2x: require(`@site/static/assets/website/docshub/UIKit@2x.png`)
      .default,
    image3x: require(`@site/static/assets/website/docshub/UIKit@3x.png`)
      .default,
    customWidth: '95px',
    gridBG: require(`@site/static/assets/website/docshub/BlueBG.png`).default,
  },
];
