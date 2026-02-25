# Quick Start - Custom Themes & Utility Classes

This guide shows how to create custom themes and generate utility classes after installing DashForge UI.

## Installation

```bash
npm install dashforge-ui
```

## Basic Setup

```typescript
// main.ts
import { createApp } from 'vue'
import { createDashboardUI } from 'dashforge-ui'
import 'dashforge-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(createDashboardUI({
  theme: 'light' // or 'dark'
}))

app.mount('#app')
```

## Creating Custom Themes

### Option 1: Simple Color Override

```typescript
import { createApp } from 'vue'
import { createDashboardUI, createTheme } from 'dashforge-ui'

const myTheme = createTheme({
  name: 'my-brand',
  colors: {
    primary: '#ff6b35',
    'on-primary': '#ffffff',
    'primary-container': '#ffd4c4',
    'on-primary-container': '#4a0000',
    // Only override what you need - rest uses defaults
  }
})

app.use(createDashboardUI({
  theme: myTheme
}))
```

### Option 2: With Dynamic Utility Classes

Enable automatic generation of `.bg-*`, `.text-*`, `.border-*` classes for ALL your colors:

```typescript
import { createDashboardUI, createTheme } from 'dashforge-ui'

const myTheme = createTheme({
  name: 'my-brand',
  colors: {
    // Standard colors
    primary: '#ff6b35',
    'on-primary': '#ffffff',
    
    // NEW custom colors (not in base theme)
    brand: '#8B5CF6',
    'on-brand': '#FFFFFF',
    'brand-container': '#DDD6FE',
    'on-brand-container': '#4C1D95',
    
    'custom-accent': '#10B981',
    'on-custom-accent': '#FFFFFF',
  }
})

app.use(createDashboardUI({
  theme: myTheme,
  generateUtilities: true  // ✅ Generates classes for ALL colors
}))
```

Now you can use in your templates:

```vue
<template>
  <div class="bg-brand text-on-brand">
    Custom brand color!
  </div>
  
  <div class="bg-custom-accent text-on-custom-accent">
    Custom accent color!
  </div>
  
  <button class="border-brand">
    Brand border
  </button>
</template>
```

## Runtime Theme Switching

### Without Dynamic Utilities (Recommended for Production)

If you only override existing colors, CSS variables handle everything automatically:

```vue
<script setup lang="ts">
import { useTheme } from 'dashforge-ui'

const { setTheme } = useTheme()

function toggleTheme() {
  setTheme('dark') // or 'light'
}
</script>

<template>
  <button @click="toggleTheme" class="bg-primary text-on-primary">
    Toggle Theme
  </button>
</template>
```

### With Dynamic Utilities (For Custom Colors)

If you add new colors at runtime:

```vue
<script setup lang="ts">
import { createTheme, applyTheme } from 'dashforge-ui'

const customTheme = createTheme({
  colors: {
    'special-color': '#FF00FF',
    'on-special-color': '#FFFFFF',
  }
})

function applyCustomTheme() {
  // Apply with dynamic utility generation
  applyTheme(customTheme, { generateUtilities: true })
}
</script>

<template>
  <button @click="applyCustomTheme">Apply Custom Theme</button>
  
  <!-- This class works after applyCustomTheme() is called -->
  <div class="bg-special-color text-on-special-color">
    Dynamic utility class!
  </div>
</template>
```

## Dark Theme Creation

```typescript
import { createDarkTheme } from 'dashforge-ui'

const myDarkTheme = createDarkTheme({
  name: 'my-dark-brand',
  colors: {
    primary: '#ffa366', // Lighter version for dark mode
    'on-primary': '#4a0000',
    // Inherits all other dark theme defaults
  }
})

app.use(createDashboardUI({
  theme: myDarkTheme,
  generateUtilities: true
}))
```

## Advanced: Multiple Themes

```typescript
// themes.ts
import { createTheme, createDarkTheme } from 'dashforge-ui'

export const themes = {
  light: createTheme({
    name: 'brand-light',
    colors: { primary: '#ff6b35', /* ... */ }
  }),
  
  dark: createDarkTheme({
    name: 'brand-dark',
    colors: { primary: '#ffa366', /* ... */ }
  }),
  
  highContrast: createTheme({
    name: 'high-contrast',
    colors: { 
      primary: '#000000',
      'on-primary': '#FFFFFF',
      background: '#FFFFFF',
      'on-background': '#000000',
      /* ... */
    }
  })
}
```

```vue
<!-- ThemeSwitcher.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { applyTheme } from 'dashforge-ui'
import { themes } from './themes'

const currentTheme = ref<keyof typeof themes>('light')

function switchTheme(themeName: keyof typeof themes) {
  currentTheme.value = themeName
  applyTheme(themes[themeName], { generateUtilities: true })
}
</script>

<template>
  <select v-model="currentTheme" @change="switchTheme(currentTheme)">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="highContrast">High Contrast</option>
  </select>
</template>
```

## TypeScript Benefits

Full type safety for your custom themes:

```typescript
import type { Theme, PartialTheme } from 'dashforge-ui'

// Validated theme structure
const myTheme: PartialTheme = {
  colors: {
    primary: '#ff0000',
    // TypeScript ensures proper color structure
  }
}

// Color palette validation
import { createColorPalette } from 'dashforge-ui'

const colors = createColorPalette({
  brand: '#8B5CF6',
  'on-brand': '#FFFFFF',
  'brand-container': '#DDD6FE',
  'on-brand-container': '#4C1D95',
})
// Warns if variants are missing in development
```

## Performance Notes

- **Without `generateUtilities`**: Zero runtime overhead, uses pre-built CSS
- **With `generateUtilities`**: Minimal overhead (~1ms), generates one `<style>` tag with minified CSS
- **Recommendation**: Use `generateUtilities: true` only if you add colors not in base tokens

## API Summary

### Theme Creation
- `createTheme(config, baseTheme?)` - Create light theme (extends lightTheme by default)
- `createDarkTheme(config)` - Create dark theme (extends darkTheme)
- `createColorPalette(colors)` - Validate color palette structure

### Theme Application
- `applyTheme(theme, options?)` - Apply theme (CSS variables)
  - `options.generateUtilities: boolean` - Generate utility classes
- `generateUtilityClasses(theme, options?)` - Generate utilities separately
  - `options.replace: boolean` - Replace existing utilities

### Plugin
- `createDashboardUI(options)` - Initialize plugin
  - `options.theme: Theme | 'light' | 'dark'` - Initial theme
  - `options.generateUtilities: boolean` - Auto-generate utilities

### Composables
- `useTheme()` - Access theme in components
  - `setTheme(theme)` - Switch theme
  - `current` - Current theme (computed ref)

## Complete Example

```typescript
// main.ts
import { createApp } from 'vue'
import { createDashboardUI, createTheme, createDarkTheme } from 'dashforge-ui'
import 'dashforge-ui/dist/style.css'
import App from './App.vue'

// Define your brand colors
const brandLight = createTheme({
  name: 'acme-light',
  colors: {
    primary: '#0066cc',
    'on-primary': '#ffffff',
    'primary-container': '#cce5ff',
    'on-primary-container': '#001f3f',
    
    secondary: '#ff6b35',
    'on-secondary': '#ffffff',
    'secondary-container': '#ffd4c4',
    'on-secondary-container': '#4a0000',
    
    // Custom brand color
    'acme-blue': '#0066cc',
    'on-acme-blue': '#ffffff',
  }
})

const brandDark = createDarkTheme({
  name: 'acme-dark',
  colors: {
    primary: '#4d94ff',
    'on-primary': '#001f3f',
    // ... dark variants
  }
})

const app = createApp(App)

app.use(createDashboardUI({
  theme: brandLight,
  generateUtilities: true // Enable for custom colors
}))

app.mount('#app')
```

## Next Steps

- See [CUSTOM-THEMES.md](../docs/CUSTOM-THEMES.md) for complete color requirements
- Check [TOKEN-ARCHITECTURE.md](../TOKEN-ARCHITECTURE.md) for design system structure
- Read [COMPONENT-GUIDELINES.md](../COMPONENT-GUIDELINES.md) for component development
