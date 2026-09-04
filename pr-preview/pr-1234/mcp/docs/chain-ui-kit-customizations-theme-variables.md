---
title: "Theme Variables"
url: "https://pushchain.github.io/docs/chain/ui-kit/customizations/theme-variables/"
section: "ui-kit"
lastUpdated: "2026-09-04T07:14:57Z"
description: "Theme Variables | Customizations | UI Kit | Push Chain Docs"
---

# Theme Variables

The UI Kit SDK lets you customize its look by overriding CSS variables (aka theme tokens). You can apply **global overrides** (affecting both light & dark) or **theme-specific** overrides via `light` and `dark` sub-objects.

## Usage

-   Pass the `themeOverrides` prop to the **PushUniversalWalletProvider** component to override app wide theme variables.
-   You can further extend this by passing the `themeOverrides` prop to the **PushUniversalAccountButton** for supported variables. These always begins with `--pwauth-`.

-   App Level
-   App Level (Light / Dark)
-   Button Specific

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';

function App() {
  return (
    <PushUniversalWalletProvider
      config={{
        uid: 'applevel',
        network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET
      }}
      themeOverrides={{
        '--pw-core-bg-primary-color': '#FAF3E0', // global override
        '--pw-core-bg-secondary-color': '#FFFDF9',
      }}
    >
      {/* Your App Logic */}
      <PushUniversalAccountButton uid='applevel' />
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <PushUniversalWalletProvider
      config={{
        uid: 'applevel_lightdark',
        network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET
      }}
      themeOverrides={{
        light: {
          '--pw-core-bg-primary-color': '#F1ECF9',
          '--pw-core-bg-secondary-color': '#F9F7FC',
        },
        dark: {
          '--pw-core-bg-primary-color': '#1F1B24',
          '--pw-core-bg-secondary-color': '#2B2235',
        }
      }}
      themeMode={theme === 'dark' ? PushUI.CONSTANTS.THEME.DARK : PushUI.CONSTANTS.THEME.LIGHT}
    >
      <PushUniversalAccountButton uid='applevel_lightdark' />
      <div key={theme} style={{ display: 'flex', gap: '16px', marginTop: '8px'}}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
          />
          Light
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === 'dark'}
            onChange={() => setTheme('dark')}
          />
          Dark
        </label>
      </div>
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

REACT PLAYGROUND

Copy playground link

Copy code

```tsx
import {
  PushUniversalWalletProvider,
  PushUniversalAccountButton,
  PushUI,
} from '@pushchain/ui-kit';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <PushUniversalWalletProvider
      config={{
        uid: 'button_specific',
        network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET
      }}
      themeOverrides={{
        // ... app level overrides
        // NOTE: Button overrides can override app level overrides for supported variables (beginning with `--pwauth-`)
      }}
      themeMode={theme === 'dark' ? PushUI.CONSTANTS.THEME.DARK : PushUI.CONSTANTS.THEME.LIGHT}
    >
      {/* Button-level overrides */}
      <PushUniversalAccountButton
        uid='button_specific'
        themeOverrides={{
          '--pwauth-btn-connect-border-radius': '32px',
          light: { '--pwauth-btn-connect-bg-color': '#3459F0' },
          dark: { '--pwauth-btn-connect-bg-color': '#6684FC' },
        }}
      />
      <div key={theme} style={{ display: 'flex', gap: '16px', marginTop: '8px'}}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
          />
          Light
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === 'dark'}
            onChange={() => setTheme('dark')}
          />
          Dark
        </label>
      </div>
      {/* Your App Logic */}
    </PushUniversalWalletProvider>
  );
}
```

LIVE APP PREVIEW

Override Order

Top‑level properties apply to both themes; then `light` and `dark` objects override those values when the corresponding theme is active.

## List of Supported Theme Variables

### Global Overrides

Use these tokens for settings that should apply regardless of theme:

| Category | Variable | Default |
| --- | --- | --- |
| Typography & Layout | \--pw-core-font-family | `FK Grotesk Neu` |
|  | \--pw-core-text-size | `26px` |
| Spacing & Border | \--pw-core-list-spacing | `12px` |
|  | \--pw-core-modal-border | `2px` |
|  | \--pw-core-modal-border-radius | `24px` |
|  | \--pw-core-modal-width | `376px` |
|  | \--pw-core-modal-padding | `24px` |
|  | \--pw-core-btn-border-radius | `12px` |
|  | \--pwauth-btn-connect-border-radius | `12px` |

### Colors

These tokens have different defaults in light vs. dark themes:

| Variable | Default (Light) | Default (Dark) |
| --- | --- | --- |
| \--pw-core-brand-primary-color | 
`#D548EC`

 | 

`#CF59E2`

 |
| \--pw-core-text-primary-color | 

`#17181B`

 | 

`#F5F6F8`

 |
| \--pw-core-text-secondary-color | 

`#313338`

 | 

`#C4CBD5`

 |
| \--pw-core-text-tertiary-color | 

`#8C93A0`

 | 

`#757D8D`

 |
| \--pw-core-text-link-color | 

`#C742DD`

 | 

`#CF59E2`

 |
| \--pw-core-text-disabled-color | 

`#B0B3B9`

 | 

`#757D8D`

 |
| \--pw-core-bg-primary-color | 

`#F5F6F8`

 | 

`#17181B`

 |
| \--pw-core-bg-secondary-color | 

`#FFFFFF`

 | 

`#202124`

 |
| \--pw-core-bg-tertiary-color | 

`#EAEBF2`

 | 

`#313338`

 |
| \--pw-core-bg-disabled-color | 

`#EAEBF2`

 | 

`#313338`

 |
| \--pw-core-success-primary-color | 

`#00A47F`

 | 

`#51DCBD`

 |
| \--pw-core-error-primary-color | 

`#D43B3B`

 | 

`#FFB1B1`

 |
| \--pw-core-modal-border-color | 

`#CF59E2`

 | 

`#D548EC`

 |
| \--pw-core-btn-primary-bg-color | 

`#D548EC`

 | 

`#D548EC`

 |
| \--pw-core-btn-primary-text-color | 

`#FFFFFF`

 | 

`#FFFFFF`

 |
| \--pwauth-btn-connect-text-color | 

`#FFFFFF`

 | 

`#FFFFFF`

 |
| \--pwauth-btn-connect-bg-color | 

`#D548EC`

 | 

`#D548EC`

 |
| \--pwauth-btn-connected-text-color | 

`#FFFFFF`

 | 

`#FFFFFF`

 |
| \--pwauth-btn-connected-bg-color | 

`#000000`

 | 

`#000000`

 |

## Next Steps

-   Try out [Theme Overrides Example](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/examples/theme-overrides-example/) or [Button Theme Overrides Example](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/examples/button-theme-overrides-example/)
-   Check out various other examples in [Examples section](/push-chain-website/pr-preview/pr-1234/docs/chain/ui-kit/examples/single-wallet-example/)
-   Dive into [end to end tutorials](/push-chain-website/pr-preview/pr-1234/docs/chain/tutorials/) to see step by step implementation of App
