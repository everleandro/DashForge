# Changelog

## [Unreleased]

### 🎯 Breaking Changes

#### Refactored Size Props to Union Types

**VButton y VIcon ahora usan `size` prop en lugar de props booleanas**

**Antes (❌):**
```vue
<VButton :small="true" />
<VButton :large="true" />
<VIcon :xSmall="true" />
```

**Ahora (✅):**
```vue
<VButton size="small" />
<VButton size="large" />
<VIcon size="x-small" />
```

**Migración:**
- `small` → `size="small"`
- `xSmall` → `size="x-small"`
- `large` → `size="large"`
- `xLarge` → `size="x-large"`
- Sin prop → `size="default"` (automático)

**Razón:** Type-safety, autocompletado, sin conflictos, alineado con tokens.ts

### ✨ Features

- **Global Size Type**: Tipo `Size` global en `types/common.ts` usado por todos los componentes
  - `ButtonSize` e `IconSize` son ahora alias del tipo global
  - Garantiza consistencia en todos los componentes
  - `import type { Size } from 'dashforge-ui'`
- **Component Guidelines**: Nueva guía completa de diseño de componentes ([COMPONENT-GUIDELINES.md](./COMPONENT-GUIDELINES.md))
- **Token System**: Sistema completo de generación automática desde `tokens.ts`
  - Spacing, typography, shape, elevation, button styles
  - Script `npm run gen:utils` genera 4 archivos SCSS automáticamente
  - CSS variables para customización runtime
- **Documentation**: 
  - [TOKEN-ARCHITECTURE.md](./TOKEN-ARCHITECTURE.md) - Arquitectura de tokens y temas
  - [COLOR-SYSTEM.md](./src/components/VButton/COLOR-SYSTEM.md) - Sistema de colores dinámicos
  - README actualizado con enlaces a toda la documentación

### 🔧 Improvements

- **VButton**: 
  - Props `size` type-safe
  - Inyección automática de CSS variables para height/font-size desde tokens
  - Eliminado archivo `_tokens.scss` manual (ahora auto-generado)
- **VIcon**:
  - Props `size` type-safe
  - Simplificado lógica de clases
- **Type Exports**: `ButtonSize` y `IconSize` exportados desde el paquete principal

### 🏗️ Architecture

- **Single Source of Truth**: `src/theme/tokens.ts` es la única fuente para todos los valores de diseño
- **Automated SCSS Generation**: Script genera:
  - `_tokens.scss` - Spacing, typography, button styles
  - `_colors.scss` - Light theme color maps
  - `_dark.scss` - Dark theme overrides
  - `colors.scss` - Utility classes
- **CSS Variables**: Runtime customization sin rebuild
- **Pattern Standardization**: Union types para variantes en todos los componentes

### 📝 Notes

Este release establece los patrones fundamentales para el desarrollo futuro de componentes. Todos los componentes nuevos deben seguir [COMPONENT-GUIDELINES.md](./COMPONENT-GUIDELINES.md).

---

## Initial Release

- Vue 3 + TypeScript setup
- Plugin system (`createDashboardUI`)
- Theme engine with light/dark support
- `useTheme` composable
- VButton component
- VIcon component
- Vite library build
- Vitest testing setup
