# Component CSS Variables Documentation

## Overview

All component CSS variables are defined in `:root` and are globally available throughout the application. These variables are auto-generated from `tokens.ts` and follow the naming convention `--df-{component}-{property}-{variant}`.

## Available Component Variables

### Button Component (`--df-btn-*`)

Located in: [`src/styles/components/_btn-variables.scss`](../components/_btn-variables.scss)

#### States
- `--df-btn-state-focus`: 0.12
- `--df-btn-state-hover`: 0.08
- `--df-btn-state-active`: 0.12

#### Sizes & Heights
- `--df-btn-font-size-x-small`, `--df-btn-font-size-small`, `--df-btn-font-size-default`, `--df-btn-font-size-large`, `--df-btn-font-size-x-large`
- `--df-btn-height-x-small`, `--df-btn-height-small`, `--df-btn-height-default`, `--df-btn-height-large`, `--df-btn-height-x-large`

#### FAB & Stacked
- `--df-fab-font-size-*`: Font sizes for FAB buttons
- `--df-fab-height-*`: Height values for FAB buttons
- `--df-stacked-height-*`: Height values for stacked buttons

#### Styles
- `--df-btn-border-radius`: 4px
- `--df-btn-rounded-border-radius`: 28px
- `--df-btn-border-style`: solid
- `--df-btn-border-width`: 1px
- `--df-btn-font-weight`: 500
- `--df-btn-letter-spacing`: 0.1em
- `--df-btn-text-transform`: uppercase
- `--df-btn-transition-duration`: 0.28s
- `--df-btn-shadow`: Shadow values
- `--df-btn-icon-spacing`: 0.5rem

### Icon Component (`--df-icon-*`)

Located in: [`src/styles/components/_icon-variables.scss`](../components/_icon-variables.scss)

#### Sizes
- `--df-icon-font-size-x-small`: 1rem
- `--df-icon-font-size-small`: 1.125rem
- `--df-icon-font-size-default`: 1.5rem
- `--df-icon-font-size-large`: 2rem
- `--df-icon-font-size-x-large`: 3rem

## Usage

### In SCSS/CSS

```scss
// Variables are automatically available globally in :root
.my-component {
  font-size: var(--df-btn-font-size-default);
  border-radius: var(--df-btn-border-radius);
}
```

### Direct Import (if needed for module structure)

```scss
@use 'src/styles/components';
// Now all component variables are available
```

## Auto-Generation

⚠️ **Important**: These files are auto-generated from `tokens.ts`. Do not edit them manually.

Generation script: [`scripts/generate-utility-classes.mjs`](../../scripts/generate-utility-classes.mjs)

Last generated: 2026-02-25T00:51:56.025Z

## Module Structure

```
src/styles/
├── index.scss              (main entry point - forwards component exports)
├── components/
│   ├── index.scss          (centralizes component exports)
│   ├── _btn-variables.scss (button CSS variables)
│   └── _icon-variables.scss (icon CSS variables)
```

All component variables are properly exported through `@forward` declarations, ensuring:
- ✅ Global availability in CSS (:root)
- ✅ Proper SCSS module structure
- ✅ Clear dependency tracking
- ✅ Easy discovery for developers
