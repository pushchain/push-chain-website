# Theme Variables — @pushchain/ui-kit

## Purpose

Complete reference for all CSS custom properties (theme tokens) exposed by `@pushchain/ui-kit`. Override these to customize the UI Kit appearance globally or per-theme.

## When to Use

- Customizing modal, button, or background colors
- Setting brand colors across light and dark themes
- Adjusting border radii, modal width, or typography

## Prerequisites

| Requirement | Details |
|---|---|
| Package | `@pushchain/ui-kit` |
| Pass via | `themeOverrides` prop on `PushUniversalWalletProvider` or `PushUniversalAccountButton` |

## Override Scope

- **`PushUniversalWalletProvider.themeOverrides`** — applies to all `--pw-core-*` and `--pwauth-*` variables app-wide
- **`PushUniversalAccountButton.themeOverrides`** — applies only to `--pwauth-*` variables for that specific button instance

Top-level properties in `themeOverrides` apply to both themes; `light` and `dark` sub-objects override only when that theme is active.

```tsx
<PushUniversalWalletProvider
  themeMode={PushUI.CONSTANTS.THEME.DARK}
  themeOverrides={{
    '--pw-core-brand-primary-color': '#3459F0',  // both themes
    light: { '--pw-core-bg-primary-color': '#F1ECF9' },
    dark:  { '--pw-core-bg-primary-color': '#1F1B24' },
  }}
>
```

---

## Global Overrides

Use these tokens for settings that apply regardless of theme (light or dark).

| Category | Variable | Default |
|---|---|---|
| Typography | `--pw-core-font-family` | `FK Grotesk Neu` |
| Typography | `--pw-core-text-size` | `26px` |
| Spacing | `--pw-core-list-spacing` | `12px` |
| Border | `--pw-core-modal-border` | `2px` |
| Border | `--pw-core-modal-border-radius` | `24px` |
| Layout | `--pw-core-modal-width` | `376px` |
| Layout | `--pw-core-modal-padding` | `24px` |
| Border | `--pw-core-btn-border-radius` | `12px` |
| Border | `--pwauth-btn-connect-border-radius` | `12px` |

---

## Color Variables

These tokens have different defaults in light vs. dark themes.

| Variable | Light Default | Dark Default |
|---|---|---|
| `--pw-core-brand-primary-color` | `#D548EC` | `#CF59E2` |
| `--pw-core-text-primary-color` | `#17181B` | `#F5F6F8` |
| `--pw-core-text-secondary-color` | `#313338` | `#C4CBD5` |
| `--pw-core-text-tertiary-color` | `#8C93A0` | `#757D8D` |
| `--pw-core-text-link-color` | `#C742DD` | `#CF59E2` |
| `--pw-core-text-disabled-color` | `#B0B3B9` | `#757D8D` |
| `--pw-core-bg-primary-color` | `#F5F6F8` | `#17181B` |
| `--pw-core-bg-secondary-color` | `#FFFFFF` | `#202124` |
| `--pw-core-bg-tertiary-color` | `#EAEBF2` | `#313338` |
| `--pw-core-bg-disabled-color` | `#EAEBF2` | `#313338` |
| `--pw-core-success-primary-color` | `#00A47F` | `#51DCBD` |
| `--pw-core-error-primary-color` | `#D43B3B` | `#FFB1B1` |
| `--pw-core-modal-border-color` | `#CF59E2` | `#D548EC` |
| `--pw-core-btn-primary-bg-color` | `#D548EC` | `#D548EC` |
| `--pw-core-btn-primary-text-color` | `#FFFFFF` | `#FFFFFF` |
| `--pwauth-btn-connect-text-color` | `#FFFFFF` | `#FFFFFF` |
| `--pwauth-btn-connect-bg-color` | `#D548EC` | `#D548EC` |
| `--pwauth-btn-connected-text-color` | `#FFFFFF` | `#FFFFFF` |
| `--pwauth-btn-connected-bg-color` | `#000000` | `#000000` |

---

## Usage Patterns

### Global (both themes)

```tsx
themeOverrides={{
  '--pw-core-brand-primary-color': '#3459F0',
  '--pw-core-bg-primary-color': '#FAF3E0',
}}
```

### Per-theme

```tsx
themeOverrides={{
  light: {
    '--pw-core-bg-primary-color': '#F1ECF9',
    '--pw-core-bg-secondary-color': '#F9F7FC',
  },
  dark: {
    '--pw-core-bg-primary-color': '#1F1B24',
    '--pw-core-bg-secondary-color': '#2B2235',
  },
}}
```

### Button-specific (`--pwauth-*` only)

```tsx
<PushUniversalAccountButton
  themeOverrides={{
    '--pwauth-btn-connect-border-radius': '32px',
    light: { '--pwauth-btn-connect-bg-color': '#3459F0' },
    dark:  { '--pwauth-btn-connect-bg-color': '#6684FC' },
  }}
/>
```

---

## Advance escape styling with className overrides

When a required style (gradient, animation, box-shadow, pseudo-element) can't be expressed via CSS variables, use `connectButtonClassName` / `connectedButtonClassName` on `PushUniversalAccountButton`:

```tsx
<PushUniversalAccountButton
  connectButtonClassName="my-connect-btn"
  connectedButtonClassName="my-connected-btn"
/>
```

`themeOverrides` (`--pwauth-*`) and `className` can be used together — class styles layer on top via CSS specificity.

---

## Agent Notes

- All `--pw-core-*` variables are app-wide; `--pwauth-*` variables can also be scoped per button
- `themeMode` accepts `PushUI.CONSTANTS.THEME.LIGHT` or `PushUI.CONSTANTS.THEME.DARK`
- Top-level overrides apply to both themes; nested `light` / `dark` objects take precedence when that theme is active

## See Also

- UI components full reference: https://push.org/agents/skills/push-frontend/references/ui-components.md
- Connect wallet workflow: https://push.org/agents/workflows/connect-wallet-ui-kit.md

## Docs

- Theme variables: https://push.org/docs/chain/ui-kit/customizations/theme-variables/
- Theme overrides example: https://push.org/docs/chain/ui-kit/examples/theme-overrides-example/
- Button theme overrides example: https://push.org/docs/chain/ui-kit/examples/button-theme-overrides-example/
