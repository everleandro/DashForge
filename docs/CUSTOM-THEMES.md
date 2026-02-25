# Custom Theme Creation

DashForge UI provides powerful helpers to create and customize themes using TypeScript.

## Quick Start

### Create a Custom Light Theme

```typescript
import { createTheme, applyTheme } from 'dashforge-ui'

const myTheme = createTheme({
  name: 'my-brand',
  colors: {
    primary: '#ff6b35',
    'on-primary': '#ffffff',
    'primary-container': '#ffd4c4',
    'on-primary-container': '#4a0000',
    secondary: '#0077b6',
    'on-secondary': '#ffffff',
    'secondary-container': '#b3e5fc',
    'on-secondary-container': '#001f3f'
  }
})

// Apply the theme
applyTheme(myTheme)
```

### Create a Custom Dark Theme

```typescript
import { createDarkTheme, applyTheme } from 'dashforge-ui'

const myDarkTheme = createDarkTheme({
  name: 'my-dark-brand',
  colors: {
    primary: '#a0d8ff',
    'on-primary': '#003258',
    'primary-container': '#00497d',
    'on-primary-container': '#cfe5ff'
  }
})

applyTheme(myDarkTheme)
```

## Advanced Customization

### Override All Design Tokens

```typescript
import { createTheme, materialTokens } from 'dashforge-ui'

const fullyCustomTheme = createTheme({
  name: 'enterprise',
  colors: {
    // ... your custom colors
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px'
  },
  shape: {
    'border-radius-none': '0px',
    'border-radius-sm': '2px',
    'border-radius-md': '4px',
    'border-radius-lg': '8px',
    'border-radius-xl': '12px',
    'border-radius-2xl': '16px',
    'border-radius-full': '9999px'
  }
})
```

### Validate Color Palettes

```typescript
import { createColorPalette } from 'dashforge-ui'

// Validates that all required variants exist
const colors = createColorPalette({
  primary: '#ff6b35',
  'on-primary': '#ffffff',
  'primary-container': '#ffd4c4',
  'on-primary-container': '#4a0000',
  // ... add more colors
})
```

The `createColorPalette` helper will warn in development if any color is missing its required variants:
- `on-{color}` - Text/icon color on top of the base color
- `{color}-container` - Container background color
- `on-{color}-container` - Text/icon color on top of container

## Using with Vue Plugin

```typescript
import { createApp } from 'vue'
import { createDashboardUI, createTheme } from 'dashforge-ui'
import App from './App.vue'

const myTheme = createTheme({
  name: 'corporate',
  colors: {
    primary: '#2563eb',
    'on-primary': '#ffffff',
    // ... rest of your colors
  }
})

const app = createApp(App)

app.use(createDashboardUI({
  theme: myTheme,
  // Enable automatic utility class generation for custom colors
  generateUtilities: true
}))

app.mount('#app')
```

## Dynamic Utility Classes

By default, utility classes (`.bg-*`, `.text-*`, `.border-*`) are generated at **build time** from the base tokens. When you create a custom theme with new colors, you have two options:

### Option 1: Use CSS Variables (Recommended)

The pre-built utility classes use CSS variables, so they automatically adapt to theme changes:

```typescript
applyTheme(myCustomTheme)
// .bg-primary now uses the new primary color from myCustomTheme
```

This works for all colors that exist in the base tokens but **won't create classes** for completely new color names.

### Option 2: Generate Utilities Dynamically (For New Colors)

If you add **new colors** that don't exist in base tokens, enable dynamic generation:

```typescript
import { createDashboardUI } from 'dashforge-ui'

app.use(createDashboardUI({
  theme: myTheme,
  generateUtilities: true  // ✅ Creates .bg-*, .text-*, .border-* for ALL colors
}))
```

Or generate them manually at runtime:

```typescript
import { applyTheme, generateUtilityClasses } from 'dashforge-ui'

const customTheme = createTheme({
  colors: {
    brand: '#ff6b35',  // New color not in base tokens
    'on-brand': '#ffffff'
  }
})

// Option A: Generate with applyTheme
applyTheme(customTheme, { generateUtilities: true })

// Option B: Generate separately
applyTheme(customTheme)
generateUtilityClasses(customTheme)

// Now you can use: .bg-brand, .text-brand, .border-brand
```

## Runtime Theme Switching

```vue
<script setup lang="ts">
import { useTheme } from 'dashforge-ui'
import { myLightTheme, myDarkTheme } from './themes'

const { setTheme, currentTheme } = useTheme()

function toggleTheme() {
  const newTheme = currentTheme.value.name === 'light' 
    ? myDarkTheme 
    : myLightTheme
  setTheme(newTheme)
}
</script>

<template>
  <button @click="toggleTheme">
    Toggle Theme
  </button>
</template>
```

## API Reference

### `createTheme(config, baseTheme?)`

Creates a custom theme by merging your configuration with a base theme (defaults to `lightTheme`).

**Parameters:**
- `config: PartialTheme` - Your theme customizations
- `baseTheme?: Theme` - Base theme to extend (default: `lightTheme`)

**Returns:** `Theme`

### `createDarkTheme(config)`

Convenience function to create a theme based on `darkTheme`.

**Parameters:**
- `config: PartialTheme` - Your theme customizations

**Returns:** `Theme`

### `createColorPalette(colors)`

Validates a color palette structure in development mode.

**Parameters:**
- `colors: Record<string, string>` - Color palette object

**Returns:** The same color palette (typed)

### `mergeThemes(base, partial)`

Merges two themes together.

**Parameters:**
- `base: Theme` - Base theme
- `partial: PartialTheme` - Partial theme to merge

**Returns:** `Theme`

### `applyTheme(theme, options?)`

Applies a theme by setting CSS custom properties on the document root.

**Parameters:**
- `theme: Theme` - Theme to apply
- `options?: { generateUtilities?: boolean }` - Configuration options
  - `generateUtilities`: If `true`, generates utility classes for all theme colors

**Returns:** `void`

**Example:**
```typescript
// Apply theme with CSS variables only
applyTheme(myTheme)

// Apply theme and generate utility classes
applyTheme(myTheme, { generateUtilities: true })
```

### `generateUtilityClasses(theme, options?)`

Generates utility classes (`.bg-*`, `.text-*`, `.border-*`) dynamically for all colors in the theme.

**Parameters:**
- `theme: Theme` - Theme object with colors
- `options?: { replace?: boolean }` - Configuration options
  - `replace`: If `true`, replaces existing utility classes

**Returns:** `void`

**Example:**
```typescript
const customTheme = createTheme({
  colors: {
    brand: '#ff6b35',
    'custom-accent': '#a0d8ff'
  }
})

generateUtilityClasses(customTheme)
// Now available: .bg-brand, .text-brand, .bg-custom-accent, etc.
```

## Material Design 3 Compliance

All theme helpers follow Material Design 3 specifications. The color system requires complete variant sets:

```typescript
{
  primary: '#color',              // Base color
  'on-primary': '#color',         // Text/icons on primary
  'primary-container': '#color',  // Container background
  'on-primary-container': '#color' // Text/icons on container
}
```

This pattern applies to: `primary`, `secondary`, `tertiary`, `error`, `warning`, `success`, `info`, and `neutral` color roles.
