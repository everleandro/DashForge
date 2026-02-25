# Sistema de Tokens y Temas - Arquitectura

## 🏗️ Arquitectura General

DashForge utiliza **`tokens.ts` como fuente única de verdad** para todos los valores de diseño.

```
tokens.ts (TypeScript - Fuente única)
    ├── light: { 47 colors }
    ├── dark: { 47 colors }
    ├── spacing: { xs, sm, md, lg, xl, 2xl }
    ├── typography: { 15 styles (display, headline, title, label, body) }
    ├── shape: { corner-* border radius }
    ├── elevation: { level-0 to level-5 shadows }
    ├── btnStates: { focus, hover, active opacity }
    ├── btnFontSizes: { x-small to x-large }
    ├── btnHeight: { x-small to x-large }
    └── fontFamily: { body }
        ↓
    npm run gen:utils (Script de generación)
        ├── → _tokens.scss (Spacing, typography, shape, elevation, button)
        ├── → _colors.scss (Light color maps)
        ├── → _dark.scss (Dark color maps)
        └── → colors.scss (Utility classes)
            ↓
        theme.scss (Genera CSS variables)
        └── :root { --df-color-*, --df-spacing-*, --df-btn-*, ... }
            ↓
        Componentes Vue + SCSS
        └── Usan var(--df-*) para aplicar estilos
```

## 📂 Estructura de Archivos

```
src/
├── theme/
│   ├── tokens.ts              ← FUENTE ÚNICA DE VERDAD
│   ├── themes.ts              ← Exportación de tipos/valores para JS
│   └── (otros archivos)
│
├── styles/
│   ├── theme.scss             ← Genera variables CSS desde tokens
│   ├── theme/
│   │   ├── _tokens.scss       ← Auto-generado: spacing, typography, button styles
│   │   ├── _colors.scss       ← Auto-generado: light theme color maps
│   │   ├── _dark.scss         ← Auto-generado: dark theme color maps
│   │   └── _custom.example.scss ← Template para custom themes
│   │
│   ├── utilities/
│   │   ├── colors.scss        ← Auto-generado: .bg-*, .text-*, .border-*
│   │   └── README.md          ← Documentación
│   │
│   ├── index.scss             ← Entry point (importa theme + utilities)
│   └── (otros: mixins, ripple, etc.)
│
└── components/
    └── VButton/
        ├── VButton.vue        ← Inyecta variables CSS basadas en props
        ├── VButton.scss       ← Usa --df-btn-* variables
        └── COLOR-SYSTEM.md    ← Documentación específica
```

## 🔄 Flujo de Datos

### 1. Definir valores
```typescript
// src/theme/tokens.ts
export const materialTokens = {
  light: {
    primary: '#00af67',
    'on-primary': '#ffffff',
    'primary-container': '#b1f5db',
    'on-primary-container': '#00291b',
    secondary: '#625b71',
    // ... más colores, spacing, typography
  },
  dark: { /* ... */ },
  spacing: { xs: '4px', sm: '8px', /* ... */ },
  typography: { /* ... */ },
  // ...
}
```

### 2. Generar archivos
```bash
npm run gen:utils
```

Genera desde tokens.ts:
- **_tokens.scss**: Spacing, typography, shape, elevation, button properties (mapas SCSS)
- **_colors.scss**: Mapas SCSS de colores para compilación (light theme)
- **_dark.scss**: Overrides para dark mode
- **colors.scss**: Clases auxiliares `.bg-primary`, `.text-success`, etc.

### 3. Variable CSS en theme.scss
```scss
@each $name, $value in $df-colors {
  --df-color-#{$name}: #{$value};
}
// Genera en :root { --df-color-primary: #00af67; --df-color-secondary: ... }
```

### 4. Consumir en componentes
```vue
<!-- VButton.vue -->
<button 
  :style="style()"  ← Inyecta --df-btn-bg-color, --df-btn-text-color
  :class="btnClass()"
>

<!-- VButton.scss -->
.v-btn {
  background-color: var(--df-btn-bg-color, var(--df-color-primary));
  color: var(--df-btn-text-color, var(--df-color-on-primary));
}
```

### 5. Dark mode automático
```scss
// En theme.scss
:root {
  /* Light mode (default) */
  --df-color-primary: #00af67;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode override */
    --df-color-primary: #7dffad;
  }
}
```

## 🎨 Colores disponibles

Desde `tokens.ts`:

**Roles de color:**
- `primary` + `on-primary` + `primary-container` + `on-primary-container`
- `secondary` + `on-secondary` + `secondary-container` + `on-secondary-container`
- `success`, `warning`, `error`, `info` (+ variantes on- y container)

**Utilidad:**
- `input`, `grey`, `disabled` (+ on- variant)

**Neutros:**
- `neutral`, `surface`, `background`, `text`, `outline`

**Base:**
- `white`, `black`

## 🔧 Personalizar tokens

### Opción 1: Editar tokens.ts (recompila y regenera todo)
```typescript
// src/theme/tokens.ts
light: {
  primary: '#FF0000',  // Cambia colores
},
spacing: {
  md: '20px',  // Cambia espaciado
},
btnHeight: {
  'default': '3.5rem',  // Cambia altura de botones
}
```

Luego: `npm run gen:utils` para regenerar todos los archivos SCSS

### Opción 2: CSS variables en runtime (sin rebuild)
```css
:root {
  --df-color-primary: #FF0000 !important;
  --df-color-on-primary: #ffffff !important;
}
```

### Opción 3: Clases CSS dinámicas
```html
<div class="bg-success text-on-success">
  Usa variables CSS generadas directamente
</div>
```

## 🚀 Scripts útiles

```bash
npm run dev          # Desarrollo (HMR)
npm run build:lib    # Build biblioteca
npm run play         # Playground/demo
npm run typecheck    # TypeScript check
npm run gen:utils    # Regenerar archivos desde tokens.ts
```

## 📋 Checklist para cambios de tokens

Cuando modifiques colores, espaciado, tipografía o propiedades de botones en `tokens.ts`:

- [ ] Edita `src/theme/tokens.ts`
- [ ] Ejecuta `npm run gen:utils`
- [ ] Verifica que `_tokens.scss`, `_colors.scss` y `_dark.scss` se actualizaron
- [ ] Revisa que `colors.scss` tenga las nuevas clases auxiliares (si agregaste colores)
- [ ] Ejecuta `npm run typecheck` para validar tipos
- [ ] Prueba en navegador (verificar dark mode si aplica)

## 🎛️ Variables CSS principales

| Prefijo | Uso | Ejemplo |
|---------|-----|---------|
| `--df-color-*` | Colores del tema | `--df-color-primary: #00af67` |
| `--df-spacing-*` | Sistema de espaciado | `--df-spacing-md: 16px` |
| `--df-font-*` | Tipografía (size, weight, family) | `--df-font-body-large-fontSize` |
| `--df-corner-*` | Bordes redondeados | `--df-corner-medium: 12px` |
| `--df-elevation-*` | Sombras | `--df-elevation-1` |
| `--df-btn-*` | Estilo de botones | `--df-btn-height-default: 3rem` |

**Archivos auto-generados (NO EDITAR MANUALMENTE):**
- `src/styles/theme/_tokens.scss` ← Regenerado desde tokens.ts
- `src/styles/theme/_colors.scss` ← Regenerado desde tokens.ts
- `src/styles/theme/_dark.scss` ← Regenerado desde tokens.ts
- `src/styles/utilities/colors.scss` ← Regenerado desde tokens.ts

## ✨ Ventajas de esta arquitectura

✅ **Single source of truth**: Todos los valores de diseño en `tokens.ts` (colores, spacing, typography, button, shape, elevation)  
✅ **Automatización**: Scripts generan 4 archivos SCSS desde tokens.ts  
✅ **Type-safe**: TypeScript valida tipos de tema  
✅ **Runtime customizable**: CSS variables permiten cambios sin rebuild  
✅ **Dark mode automático**: `@media (prefers-color-scheme: dark)`  
✅ **No duplicación**: Spacing, button styles, typography viven en un solo lugar  
✅ **Bundle efficient**: Variables CSS vs hardcoded valores  
✅ **Escalable**: Fácil agregar nuevos colores, tokens o propiedades  
