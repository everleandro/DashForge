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
