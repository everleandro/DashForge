# DashForge UI - Vue Template

Project template for building applications with DashForge UI.

## Features

- ✅ Vue 3 + TypeScript + Vite
- ✅ DashForge UI components
- ✅ Custom theme support
- ✅ Dynamic utility class generation
- ✅ Hot Module Replacement (HMR)

## Quick Start

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

### 2. Setup Your Main File

See `src/main.example.ts` for a complete setup example:

```typescript
import { createApp } from 'vue'
import { createDashboardUI, createTheme } from 'dashforge-ui'
import 'dashforge-ui/dist/style.css'
import App from './App.vue'

const myTheme = createTheme({
  name: 'my-brand',
  colors: {
    primary: '#ff6b35',
    'on-primary': '#ffffff',
    // ... your brand colors
  }
})

const app = createApp(App)

app.use(createDashboardUI({
  theme: myTheme,
  generateUtilities: true  // Enable for custom color classes
}))

app.mount('#app')
```

### 3. Use Components

```vue
<template>
  <VButton color="primary">Click me</VButton>
  
  <!-- Use generated utility classes -->
  <div class="bg-primary text-on-primary">
    Primary color background
  </div>
</template>

<script setup lang="ts">
import { VButton } from 'dashforge-ui'
</script>
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Creating Custom Themes

### Basic Theme

```typescript
import { createTheme } from 'dashforge-ui'

const myTheme = createTheme({
  name: 'my-brand',
  colors: {
    primary: '#your-color',
    'on-primary': '#text-color',
    // Only override what you need
  }
})
```

### Dark Theme

```typescript
import { createDarkTheme } from 'dashforge-ui'

const myDarkTheme = createDarkTheme({
  name: 'my-dark-brand',
  colors: {
    primary: '#lighter-version',
    // Inherits dark theme defaults
  }
})
```

### With Custom Colors

Add completely new colors and generate utility classes:

```typescript
const myTheme = createTheme({
  colors: {
    // Standard colors
    primary: '#0066cc',
    'on-primary': '#ffffff',
    
    // NEW custom colors
    brand: '#8B5CF6',
    'on-brand': '#FFFFFF',
    'brand-container': '#DDD6FE',
    'on-brand-container': '#4C1D95',
  }
})

// Enable utility generation
app.use(createDashboardUI({
  theme: myTheme,
  generateUtilities: true  // Creates .bg-brand, .text-brand, etc.
}))
```

Then use in templates:

```vue
<div class="bg-brand text-on-brand">
  Custom brand color!
</div>
```

## Runtime Theme Switching

```vue
<script setup lang="ts">
import { useTheme, applyTheme, createTheme } from 'dashforge-ui'

const { setTheme } = useTheme()

// Switch between built-in themes
function toggleTheme() {
  setTheme('dark') // or 'light'
}

// Apply custom theme at runtime
const customTheme = createTheme({ /* ... */ })

function applyCustom() {
  applyTheme(customTheme, { generateUtilities: true })
}
</script>
```

## Examples

- `src/main.example.ts` - Complete setup with custom theme
- `src/App.example.vue` - Component usage and theme switching demo

Copy these files to get started:

```bash
cp src/main.example.ts src/main.ts
cp src/App.example.vue src/App.vue
```

## Available Components

- `VButton` - Button component with multiple variants
- `VIcon` - Icon component
- More components coming soon...

## Documentation

- [Quick Start Guide](../../docs/QUICK-START.md) - Complete installation and usage guide
- [Custom Themes](../../docs/CUSTOM-THEMES.md) - Detailed theme customization
- [Component Guidelines](../../COMPONENT-GUIDELINES.md) - Building components
- [Design System](../../DESIGN-SYSTEM.md) - Token structure

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## TypeScript

This template includes full TypeScript support with type checking:

```bash
npm run typecheck
```

## License

See main project LICENSE.

