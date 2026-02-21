/**
 * Material Design 3 Tokens Documentation
 * DashForge Design System
 */

# DashForge Design Tokens

Complete Material Design 3 implementation for DashForge UI library.

## Color System

### Primary Color
- **Light**: `#6750a4` (Purple)
- **Dark**: `#d0bcff` (Light Purple)
- **Container Light**: `#eaddff`
- **Container Dark**: `#4f378b`

CSS Variables:
```css
--df-color-primary
--df-color-on-primary
--df-color-primary-container
--df-color-on-primary-container
```

### Secondary Color
- **Light**: `#625b71` (Purple Gray)
- **Dark**: `#ccc7d8` (Light Gray)
- **Container Light**: `#e8def8`
- **Container Dark**: `#4a4458`

CSS Variables:
```css
--df-color-secondary
--df-color-on-secondary
--df-color-secondary-container
--df-color-on-secondary-container
```

### Tertiary Color
- **Light**: `#7d5260` (Pink)
- **Dark**: `#f0b6cd` (Light Pink)
- **Container Light**: `#ffd8e4`
- **Container Dark**: `#633b48`

CSS Variables:
```css
--df-color-tertiary
--df-color-on-tertiary
--df-color-tertiary-container
--df-color-on-tertiary-container
```

### Error Color
- **Light**: `#b3261e` (Red)
- **Dark**: `#f2b8b5` (Light Red)
- **Container Light**: `#f9dedc`
- **Container Dark**: `#8c1d18`

CSS Variables:
```css
--df-color-error
--df-color-on-error
--df-color-error-container
--df-color-on-error-container
```

### Neutral Colors
- **Primary**: `#1c1b1f` / `#e6e1e5`
- **Secondary**: `#49454e` / `#cac7d0`

CSS Variables:
```css
--df-color-neutral
--df-color-on-neutral
--df-color-neutral-variant
--df-color-on-neutral-variant
```

### Surface & Background Colors
- **Background Light**: `#fffbfe`
- **Background Dark**: `#1c1b1f`
- **Surface**: `#fffbfe` / `#1c1b1f`
- **Surface Dim**: `#ded8e1` / `#0f0d13`
- **Surface Bright**: `#fffbfe` / `#36343b`

CSS Variables:
```css
--df-color-background
--df-color-surface
--df-color-surface-dim
--df-color-surface-bright
--df-color-on-surface
--df-color-on-surface-variant
--df-color-text
--df-color-text-secondary
--df-color-text-tertiary
```

## Spacing System

Based on 4px unit:

| Token | Value | Usage |
|-------|-------|-------|
| `--df-spacing-xs` | 4px | Extra small gaps, icon spacing |
| `--df-spacing-sm` | 8px | Small gaps, button padding |
| `--df-spacing-md` | 16px | Standard gaps, component margins |
| `--df-spacing-lg` | 24px | Large gaps, section spacing |
| `--df-spacing-xl` | 32px | Extra large gaps |
| `--df-spacing-2xl` | 48px | Maximum gaps, page sections |

## Typography System

### Display Styles (Largest)
- **Display Large**: 57px, 400 weight, 64px line height
- **Display Medium**: 45px, 400 weight, 52px line height
- **Display Small**: 36px, 400 weight, 44px line height

CSS Variable: `--df-font-size-display-{large|medium|small}`

### Headline Styles
- **Headline Large**: 32px, 400 weight, 40px line height
- **Headline Medium**: 28px, 400 weight, 36px line height
- **Headline Small**: 24px, 400 weight, 32px line height

CSS Variables: `--df-font-size-headline-{large|medium|small}`

### Title Styles
- **Title Large**: 22px, 500 weight, 28px line height
- **Title Medium**: 16px, 500 weight, 24px line height
- **Title Small**: 14px, 500 weight, 20px line height

CSS Variables: `--df-font-size-title-{large|medium|small}`

### Body Styles (Regular Text)
- **Body Large**: 16px, 400 weight, 24px line height
- **Body Medium**: 14px, 400 weight, 20px line height (default)
- **Body Small**: 12px, 400 weight, 16px line height

CSS Variables: `--df-font-size-body-{large|medium|small}`

### Label Styles (Buttons, Tags)
- **Label Large**: 14px, 500 weight, 20px line height
- **Label Medium**: 12px, 500 weight, 16px line height
- **Label Small**: 11px, 500 weight, 16px line height

CSS Variables: `--df-font-size-label-{large|medium|small}`

### Font Family
- Default: `Roboto, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial`
- CSS Variable: `--df-font-family`

### Font Weights
- Regular: `--df-font-weight-regular` (400)
- Medium: `--df-font-weight-medium` (500)

## Shape (Border Radius)

| Token | Value | Usage |
|-------|-------|-------|
| `--df-corner-none` | 0px | Sharp corners |
| `--df-corner-extra-small` | 4px | Small components |
| `--df-corner-small` | 8px | Buttons, inputs |
| `--df-corner-medium` | 12px | Cards, dialogs |
| `--df-corner-large` | 16px | Large containers |
| `--df-corner-extra-large` | 28px | Floating elements |
| `--df-corner-full` | 9999px | Fully rounded (chips, badges) |

## Elevation (Shadows)

Material Design 3 shadow system (0-5 levels):

| Level | Usage | Shadow Value |
|-------|-------|--------------|
| 0 | Base surface | none |
| 1 | Raised components, buttons | 0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24) |
| 2 | Floating elements | 0px 3px 6px rgba(0,0,0,0.16), 0px 3px 6px rgba(0,0,0,0.23) |
| 3 | Modals, dialogs (light) | 0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23) |
| 4 | Dropdowns, menus | 0px 15px 25px rgba(0,0,0,0.15), 0px 10px 10px rgba(0,0,0,0.05) |
| 5 | Top-level overlays | 0px 20px 40px rgba(0,0,0,0.2) |

CSS Variables: `--df-elevation-{0|1|2|3|4|5}`

## Transitions

| Token | Duration | Cubic Bezier |
|-------|----------|--------------|
| `--df-transition-short` | 150ms | cubic-bezier(0.4, 0, 0.2, 1) |
| `--df-transition-medium` | 250ms | cubic-bezier(0.4, 0, 0.2, 1) |
| `--df-transition-long` | 350ms | cubic-bezier(0.4, 0, 0.2, 1) |

## Usage Examples

### TypeScript/Vue
```typescript
import { lightTheme, darkTheme } from '@/theme/themes'
import { applyTheme } from '@/theme/themeEngine'

// Apply light theme
applyTheme(lightTheme)

// Apply dark theme
applyTheme(darkTheme)
```

### CSS/SCSS
```css
/* Use color tokens */
.my-component {
  background: var(--df-color-surface);
  color: var(--df-color-text);
}

/* Use spacing */
.my-button {
  padding: var(--df-spacing-sm) var(--df-spacing-md);
  border-radius: var(--df-corner-medium);
}

/* Use typography */
.my-heading {
  font-size: var(--df-font-size-headline-medium);
  font-weight: var(--df-font-weight-medium);
}

/* Use shadows */
.my-card {
  box-shadow: var(--df-elevation-1);
  padding: var(--df-spacing-lg);
}
```

### SCSS Mixins (Future Enhancement)
```scss
@mixin df-elevation($level) {
  box-shadow: var(--df-elevation-#{$level});
}

@mixin df-typography($style) {
  font-size: var(--df-font-size-#{$style});
  font-weight: var(--df-font-weight-#{$style});
}

.my-card {
  @include df-elevation(2);
  
  .title {
    @include df-typography(title-large);
  }
}
```

## Automatic Documentation Generation

The design tokens are stored in structured TypeScript format (`src/theme/tokens.ts`) which allows for automated documentation generation:

1. **Style Dictionary**: Convert tokens to CSS, JSON, SCSS, etc.
2. **Storybook**: Display interactive token samples
3. **Custom Scripts**: Generate Markdown docs from token definitions

### Generate from Tokens
```bash
npm run build:tokens     # Generate CSS from tokens
npm run gen:tokens-from-ts  # TypeScript → JSON → CSS
```

## Customization

To customize the theme, override tokens in `src/theme/tokens.ts` or create a new theme variant:

```typescript
import { lightTheme } from './themes'
import { mergeThemes } from './themeEngine'

const customTheme = mergeThemes(lightTheme, {
  colors: {
    primary: { base: '#FF6B00' }
  },
  spacing: {
    md: '20px'
  }
})

applyTheme(customTheme)
```

## Resources

- [Material Design 3 Official](https://m3.material.io/)
- [Material Design Color System](https://m3.material.io/styles/color/)
- [Material Design Typography](https://m3.material.io/styles/typography/)
