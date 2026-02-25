# Dashforge UI — Framework Skeleton

This repository contains a production-ready skeleton for a Vue 3 UI framework focused on dashboard applications. It provides:

- Plugin-based core (`createDashboardUI`)
- Theme engine with Light & Dark themes and runtime switching
- SCSS design tokens and CSS variable generation
- A typed `useTheme` composable and TypeScript theme types
- One initial component: `VButton`
- Vite library build configuration and playground app
- Vitest test setup

See `playground` for a demo app. Build the library with `npm run build:lib` and run the playground with `npm run play`.

Scalability notes: keep components small, rely on token-driven styling, expose plugin hooks, use per-component entry points for tree-shaking.

## Public exports

The package exposes the following API from `src/index.ts`:

- `createDashboardUI(options?)`: Plugin factory to install the framework into a Vue app. Accepts `DashboardUIOptions` (see types).
- `DashboardUIKey`: Symbol used for provide/inject to access the dashboard UI context.
- `useDashboardUI()`: Composable to access the plugin state after installing `createDashboardUI`.
- `useTheme()`: Composable to read/change the active theme at runtime.
- Theme types: exported TypeScript types are available from the root (e.g. `Theme`, `PartialTheme`).
- `VButton`: Example component (default export) with an install method for global registration.

Example usage:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { createDashboardUI, useTheme, VButton } from 'dashforge-ui'

const app = createApp(App)
app.use(createDashboardUI({ theme: 'light' }))
app.component('VButton', VButton)
app.mount('#app')

// inside components
// const theme = useTheme()
// theme.setTheme('dark')
```

## 🎨 Theme Customization

Create custom themes using TypeScript helpers:

```ts
import { createTheme, createDarkTheme, applyTheme } from 'dashforge-ui'

// Create a custom light theme
const myTheme = createTheme({
  name: 'my-brand',
  colors: {
    primary: '#ff6b35',
    'on-primary': '#ffffff',
    'primary-container': '#ffd4c4',
    'on-primary-container': '#4a0000',
    // ... more colors
  }
})

// Create a custom dark theme
const myDarkTheme = createDarkTheme({
  name: 'my-dark-brand',
  colors: {
    primary: '#ffa366',
    // ... dark mode colors
  }
})

// Apply theme at runtime
applyTheme(myTheme)

// With dynamic utility classes for new colors
applyTheme(myTheme, { generateUtilities: true })
// Now .bg-*, .text-*, .border-* classes work with your custom colors
```

### Utility Classes

Pre-built utility classes use CSS variables and automatically adapt to theme changes:
- `.bg-primary`, `.text-primary`, `.border-primary`
- Works for all base token colors

For **new custom colors**, enable dynamic generation:
```ts
app.use(createDashboardUI({ 
  theme: myTheme,
  generateUtilities: true  // Creates utilities for ALL colors
}))
```

See **[CUSTOM-THEMES.md](./docs/CUSTOM-THEMES.md)** for complete guide and examples.

## 📚 Documentation

### Getting Started
- **[QUICK-START.md](./docs/QUICK-START.md)** - Complete guide: install, create themes, generate utility classes

### Architecture & Patterns
- **[TOKEN-ARCHITECTURE.md](./TOKEN-ARCHITECTURE.md)** - Sistema de tokens y arquitectura de temas
- **[COMPONENT-GUIDELINES.md](./COMPONENT-GUIDELINES.md)** - Guía de diseño de componentes (union types, CSS variables, mejores prácticas)
- **[DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)** - Token structure and design system overview
- **[CUSTOM-THEMES.md](./docs/CUSTOM-THEMES.md)** - Create and customize themes with TypeScript

### Components
- **[VButton Color System](./src/components/VButton/COLOR-SYSTEM.md)** - Sistema de colores dinámicos con CSS variables

### Scripts
- `npm run gen:utils` - Regenera archivos SCSS desde `tokens.ts` (ejecutar después de modificar tokens)
- `npm run typecheck` - Validación TypeScript
- `npm run test` - Tests con Vitest
- `npm run build:lib` - Build de la librería
- `npm run play` - Playground de desarrollo

## 🎨 Design Principles

1. **Single Source of Truth**: Todos los valores de diseño en `src/theme/tokens.ts`
2. **CSS Variables**: Runtime customization sin recompilar
3. **Type-Safe Props**: Union types sobre props booleanas múltiples
4. **Token-Driven**: Componentes consumen valores desde tokens via CSS variables
5. **Dark Mode**: Automático via `@media (prefers-color-scheme: dark)`

## 🚀 Creating New Components

Sigue la guía en [COMPONENT-GUIDELINES.md](./COMPONENT-GUIDELINES.md):

1. Define props con union types (`size?: 'small' | 'default' | 'large'`)
2. Agrega tokens necesarios a `tokens.ts` y ejecuta `npm run gen:utils`
3. Inyecta CSS variables en `computed style()`
4. Usa `var(--df-*)` en SCSS con fallbacks
5. Exporta types en `src/types/` y component en `src/index.ts`

**Ejemplo de referencia:** [VButton](./src/components/VButton/VButton.vue)
