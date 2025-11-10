// React + Web3 Essentials
import Head from '@docusaurus/Head';
import React from 'react';

/**
 * WebsiteMeta Component
 *
 * Provides comprehensive favicon, PWA, and browser UI metadata for the Push Chain website.
 * Includes support for various devices, browsers, and PWA functionality.
 */
export default function WebsiteMeta() {
  return (
    <Head>
      {/* Legacy + auto-discovery - Added via Docusaurus config */}
      {/* <link rel='icon' href='/assets/website/favicon.ico' sizes='any' /> */}

      {/* SVG Icon */}
      <link
        rel='icon'
        type='image/svg+xml'
        href='/assets/website/favicons/favicon.svg'
      ></link>

      {/* Crisp browser tabs */}
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/assets/website/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/assets/website/favicons/favicon-16x16.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/assets/website/favicons/favicon-96x96.png'
      />

      {/* iOS home screen */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/assets/website/favicons/apple-touch-icon.png'
      />

      {/* PWA / Android */}
      <link rel='manifest' href='/assets/website/site.webmanifest' />

      {/* Safari pinned tab */}
      <link
        rel='mask-icon'
        href='/assets/website/favicons/safari-pinned-tab.svg'
        color='var(--ifm-color-theme-purple)'
      />

      {/* Browser UI chrome */}
      <meta name='theme-color' content='rgba(0, 0, 0, 0)' />
      <meta
        name='msapplication-TileColor'
        content='var(--ifm-color-theme-purple)'
      />
    </Head>
  );
}
