# VButton Color System - CSS Variables Based

Después de eliminar la carpeta `overrides`, todo el sistema de colores de VButton se maneja através de **CSS variables dinámicas**.

## Cómo usar

### 1. **Básico - Por prop `color`**

```vue
<template>
  <!-- Botones con color basado en prop -->
  <VButton color="primary">Primary Button</VButton>
  <VButton color="success">Success Button</VButton>
  <VButton color="warning">Warning Button</VButton>
  <VButton color="error">Error Button</VButton>
  <VButton color="info">Info Button</VButton>
</template>
```

VButton automáticamente inyecta las variables CSS:
- `--df-btn-bg-color` → `var(--df-color-{color})`
- `--df-btn-text-color` → `var(--df-color-on-{color})`
- `--df-btn-border-color` → `var(--df-color-{color})`

### 2. **Variantes**

```vue
<!-- Text buttons -->
<VButton color="primary" text>Text Button</VButton>

<!-- Outlined buttons -->
<VButton color="success" outlined>Outlined Button</VButton>

<!-- Icon buttons -->
<VButton color="warning" icon fab>
  <IconComponent />
</VButton>
```

### 3. **Tamaños (size prop)**

```vue
<!-- Tamaños predefinidos desde tokens.ts -->
<VButton color="primary" size="x-small">X-Small</VButton>
<VButton color="primary" size="small">Small</VButton>
<VButton color="primary">Default</VButton>
<VButton color="primary" size="large">Large</VButton>
<VButton color="primary" size="x-large">X-Large</VButton>

<!-- Se integra con otras props -->
<VButton color="success" size="large" outlined>Large Outlined</VButton>
<VButton color="warning" size="small" icon fab>
  <IconComponent />
</VButton>
```

La prop `size` inyecta automáticamente:
- `--df-btn-height` → `var(--df-btn-height-{size})`
- `--df-btn-font-size` → `var(--df-btn-font-size-{size})`

Los valores provienen de `tokens.ts`:
```typescript
btnHeight: {
  'x-small': '2rem',
  'small': '2.25rem',
  'default': '2.5rem',
  'large': '3rem',
  'x-large': '3.5rem',
}
```

### 4. **Personalización en runtime via CSS**

Puedes sobrescribir los colores en CSS sin recompilar:

```css
.mi-clase {
  --df-color-primary: #ff0000;      /* Cambia el color primary */
  --df-color-on-primary: #ffffff;   /* Cambia el texto */
  --df-btn-bg-color: #ff0000;       /* Fuerza bg de botón */
  --df-btn-text-color: #ffffff;     /* Fuerza texto de botón */
}
```

```vue
<div class="mi-clase">
  <VButton color="primary">Rojo ahora!</VButton>
</div>
```

## Variables disponibles

### Variables de Color

| Variable | Default | Uso |
|----------|---------|-----|
| `--df-btn-bg-color` | `var(--df-color-primary)` | Background del botón |
| `--df-btn-text-color` | `var(--df-color-on-primary)` | Color del texto |
| `--df-btn-border-color` | `var(--df-color-primary)` | Color del borde (outlined) |

### Variables de Tamaño (desde tokens.ts)

| Variable | Default | Uso |
|----------|---------|-----|
| `--df-btn-height` | `var(--df-btn-height-default)` | Altura del botón |
| `--df-btn-font-size` | `var(--df-btn-font-size-default)` | Tamaño de fuente |
| `--df-btn-height-x-small` | `2rem` | Altura x-small |
| `--df-btn-height-small` | `2.25rem` | Altura small |
| `--df-btn-height-default` | `2.5rem` | Altura default |
| `--df-btn-height-large` | `3rem` | Altura large |
| `--df-btn-height-x-large` | `3.5rem` | Altura x-large |

## Flujo del sistema

```
Props de VButton (color, size)
    ↓
VButton.vue inyecta CSS variables dinámicas
    ├── --df-btn-bg-color → var(--df-color-{color})
    ├── --df-btn-text-color → var(--df-color-on-{color})
    ├── --df-btn-height → var(--df-btn-height-{size})
    └── --df-btn-font-size → var(--df-btn-font-size-{size})
    ↓
VButton.scss aplica variables CSS
    ↓
theme.scss define valores base desde tokens.ts
    ├── Colores: --df-color-* (light/dark)
    └── Tamaños: --df-btn-height-*, --df-btn-font-size-*
```

## Cambiar colores globales

En `src/theme/tokens.ts`:

```typescript
light: {
  primary: '#00af67',        // Cambia aquí
  secondary: '#625b71',
  success: '#4caf50',
  // ...
}
```

Luego regenera:
```bash
npm run gen:utils
```

Esto actualiza:
- `src/styles/theme/_colors.scss`
- `src/styles/theme/_dark.scss`  
- `src/styles/utilities/colors.scss`

## ¿Qué pasó con `/overrides`?

- ❌ Eliminada carpeta `/src/styles/overrides`
- ❌ Eliminadas clases CSS estáticas como `.v-btn--primary`
- ✅ Toda la lógica de color ahora es dinámica vía CSS variables
- ✅ VButton solo usa props y inyecta variables CSS

Ventajas:
- 🔧 Colores cambiables sin recompilar SCSS
- 📦 Menos tamaño de bundle (sin clases duplicadas)
- 🎨 Verdadera personalización en runtime
- 🎭 Dark mode soportado automáticamente
