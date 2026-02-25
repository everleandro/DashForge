# Guía de Diseño de Componentes - DashForge

## 📐 Principios de Diseño

### 1. Props Type-Safe con Union Types

❌ **NO USAR** - Props booleanas para variantes:
```typescript
interface BadComponentProps {
  small?: boolean
  medium?: boolean
  large?: boolean
  xLarge?: boolean
}

// Problema: Usuario puede pasar múltiples a la vez
<Component :small="true" :large="true" />  // Conflicto!
```

✅ **SÍ USAR** - Union type global para variantes:
```typescript
import type { Size } from '@/types/common'

interface GoodComponentProps {
  size?: Size  // 'x-small' | 'small' | 'default' | 'large' | 'x-large'
}

// Type-safe, autocompletado, sin conflictos
<Component size="large" />
```

**Ventajas:**
- ✅ Type-safe: Solo un valor a la vez
- ✅ Autocompletado en IDE
- ✅ Más limpio: `size="large"` vs `:large="true"`
- ✅ Alineado con tokens.ts
- ✅ Escalable: Agregar variantes no requiere nuevas props
- ✅ Consistente: Mismo tipo `Size` para todos los componentes

**Nota:** DashForge exporta un tipo `Size` global desde `types/common.ts` que debe usarse en todos los componentes que necesiten una prop de tamaño.

### 2. CSS Variables sobre Hardcoded Values

❌ **NO USAR** - Valores hardcoded:
```scss
.my-component {
  height: 3rem;
  font-size: 0.875rem;
  background-color: #00af67;
}
```

✅ **SÍ USAR** - CSS variables con fallbacks:
```scss
.my-component {
  height: var(--df-btn-height, var(--df-btn-height-default));
  font-size: var(--df-btn-font-size, var(--df-btn-font-size-default));
  background-color: var(--df-btn-bg-color, var(--df-color-primary));
}
```

**Patrón de inyección:**
```typescript
const style = computed(() => {
  const result: Record<string, string> = {}
  const size = props.size || 'default'
  
  // Inyectar variables desde tokens
  result['--df-component-height'] = `var(--df-component-height-${size})`
  result['--df-component-font-size'] = `var(--df-component-font-size-${size})`
  
  if (props.color) {
    result['--df-component-bg-color'] = `var(--df-color-${props.color})`
  }
  
  return result
})
```

### 3. Tokens como Fuente Única de Verdad

Todos los valores de diseño (colores, espaciado, tipografía, tamaños) deben:
1. Definirse en `src/theme/tokens.ts`
2. Generarse automáticamente a SCSS via `npm run gen:utils`
3. Convertirse a CSS variables en `theme.scss`
4. Consumirse en componentes via `var(--df-*)`

**Flujo:**
```
tokens.ts → [script] → _tokens.scss → theme.scss → var(--df-*) → Componentes
```

### 4. Nomenclatura de CSS Variables

**Patrón:** `--df-{component}-{property}-{variant?}`

Ejemplos:
```scss
// Componente
--df-btn-height-default
--df-btn-font-size-large
--df-btn-bg-color

// Sistema global
--df-color-primary
--df-spacing-md
--df-corner-small

// Estados
--df-btn-state-hover
--df-btn-state-focus
```

### 5. Props Comunes Recomendadas

Todas las variantes de un mismo concepto deben estar en una sola prop:

| Concepto | Prop | Type | Valores | Import |
|----------|------|------|---------|--------|
| Tamaño | `size` | `Size` | `'x-small' \| 'small' \| 'default' \| 'large' \| 'x-large'` | `import type { Size } from '@/types/common'` |
| Color | `color` | `string` | Cualquier key de color en tokens (`'primary'`, `'success'`, etc.) | - |
| Variante | `variant` | Union | `'filled' \| 'outlined' \| 'text'` (depende del componente) | Define por componente |
| Forma | `shape` | Union | `'rounded' \| 'pill' \| 'square'` | Define por componente |

**Props booleanas solo para toggles:**
```typescript
import type { Size } from '@/types/common'

interface ComponentProps {
  disabled?: boolean     // ✅ Toggle
  loading?: boolean      // ✅ Toggle
  block?: boolean        // ✅ Toggle
  size?: Size            // ✅ Union type global, no booleans
}
```

## 🎨 Ejemplo: VButton (Patrón de Referencia)

### Props Interface
```typescript
import type { Size } from '@/types/common'

interface ButtonProps {
  // Tamaño - Union type global
  size?: Size  // 'x-small' | 'small' | 'default' | 'large' | 'x-large'
  
  // Color - String abierto (tokens)
  color?: string
  
  // Variantes - Booleans para modificadores
  outlined?: boolean
  text?: boolean
  depressed?: boolean
  fab?: boolean
  
  // Estados - Booleans
  disabled?: boolean
  loading?: boolean
  block?: boolean
  
  // Overrides opcionales
  height?: string | number
  width?: string | number
}
```

### Computed para CSS Variables
```typescript
const style = computed((): Record<string, string> => {
  const result: Record<string, string> = {}
  const size = props.size || 'default'
  
  // Tamaño desde tokens
  result['--df-btn-height'] = `var(--df-btn-height-${size})`
  result['--df-btn-font-size'] = `var(--df-btn-font-size-${size})`
  
  // Color desde tokens
  if (props.color) {
    result['--df-btn-bg-color'] = `var(--df-color-${props.color})`
    result['--df-btn-text-color'] = `var(--df-color-on-${props.color})`
  }
  
  // Overrides (si el usuario necesita custom)
  if (props.height) {
    result['--df-btn-height'] = `${props.height}px`
  }
  
  return result
})
```

### SCSS con CSS Variables
```scss
@use '@/styles/theme/_tokens.scss' as *;
@use "sass:map";

.v-btn {
  // Usar variables con fallbacks
  height: var(--df-btn-height, var(--df-btn-height-default));
  font-size: var(--df-btn-font-size, var(--df-btn-font-size-default));
  background-color: var(--df-btn-bg-color, var(--df-color-primary));
  color: var(--df-btn-text-color, var(--df-color-on-primary));
  
  // Clases por tamaño (generadas en loop)
  @each $size in map.keys($df-sizes) {
    &--size-#{$size} {
      height: var(--df-btn-height, var(--df-btn-height-#{$size}));
      font-size: var(--df-btn-font-size, var(--df-btn-font-size-#{$size}));
    }
  }
}
```

## 🔄 Integración con Componentes Hijos

Si un componente hijo todavía usa props booleanas (legacy), traducir:

```typescript
// Componente padre con size union
const iconSize = computed((): Partial<IconProps> => {
  const size = props.size || 'default'
  return {
    xSmall: size === 'x-small',
    small: size === 'small',
    large: size === 'large',
    xLarge: size === 'x-large',
  }
})
```

```vue
<template>
  <ChildComponent v-bind="iconSize" />
</template>
```

**TODO:** Migrar componentes legacy a usar `size` union type.

## 📦 Estructura de Archivos por Componente

```
VComponentName/
├── VComponentName.vue       ← Lógica + template
├── VComponentName.scss      ← Estilos usando CSS variables
├── VComponentName.spec.ts   ← Tests unitarios
├── index.ts                 ← Export default
└── README.md                ← Documentación (opcional)
```

## 🎯 Checklist para Nuevos Componentes

Al crear un nuevo componente, asegúrate de:

- [ ] Props usan union types para variantes, no props booleanas múltiples
- [ ] Tamaños vienen de `tokens.ts` y se inyectan via CSS variables
- [ ] Colores usan `color?: string` que apunta a keys de tokens
- [ ] SCSS usa `var(--df-*)` con fallbacks, no valores hardcoded
- [ ] Si necesitas nuevos tokens, agrégalos a `tokens.ts` y ejecuta `npm run gen:utils`
- [ ] Exporta types en `src/types/` y en `src/index.ts`
- [ ] Documenta props y ejemplos en un README o comentarios JSDoc
- [ ] Tests básicos para props y slots

## 🚀 Ejemplo Completo: Crear VCard

### 1. Definir tipos
```typescript
// src/types/card.ts
import type { Size } from './common'

export type CardVariant = 'elevated' | 'outlined' | 'flat'

export interface CardProps {
  variant?: CardVariant
  size?: Size
  color?: string
}
```

### 2. Agregar tokens si necesario
```typescript
// src/theme/tokens.ts
export const materialTokens = {
  // ...
  cardPadding: {
    'small': '0.75rem',
    'default': '1rem',
    'large': '1.5rem',
  },
  cardRadius: {
    'small': '4px',
    'default': '8px',
    'large': '12px',
  },
}
```

### 3. Regenerar SCSS
```bash
npm run gen:utils
```

### 4. Crear componente
```vue
<!-- VCard.vue -->
<template>
  <div :class="cardClass" :style="cardStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Size } from '@/types/common'
import type { CardVariant } from '@/types/card'

interface Props {
  variant?: CardVariant
  size?: Size
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'elevated',
  size: 'default'
})

const cardClass = computed(() => [
  'v-card',
  `v-card--${props.variant}`,
  `v-card--size-${props.size}`
])

const cardStyle = computed(() => {
  const result: Record<string, string> = {}
  const size = props.size || 'default'
  
  result['--df-card-padding'] = `var(--df-card-padding-${size})`
  result['--df-card-radius'] = `var(--df-card-radius-${size})`
  
  if (props.color) {
    result['--df-card-bg-color'] = `var(--df-color-${props.color})`
  }
  
  return result
})
</script>

<style lang="scss">
.v-card {
  padding: var(--df-card-padding, 1rem);
  border-radius: var(--df-card-radius, 8px);
  background-color: var(--df-card-bg-color, var(--df-color-surface));
  
  &--elevated {
    box-shadow: var(--df-elevation-2);
  }
  
  &--outlined {
    border: 1px solid var(--df-color-outline);
  }
  
  &--flat {
    box-shadow: none;
  }
}
</style>
```

### 5. Exportar
```typescript
// src/index.ts
export { default as VCard } from './components/VCard'
export type { CardVariant, CardProps } from './types/card'
// Size ya se exporta desde types/common
```

## 📚 Referencias

- **Token Architecture**: [TOKEN-ARCHITECTURE.md](./TOKEN-ARCHITECTURE.md)
- **Color System**: [src/components/VButton/COLOR-SYSTEM.md](./src/components/VButton/COLOR-SYSTEM.md)
- **VButton Source**: [src/components/VButton/VButton.vue](./src/components/VButton/VButton.vue) - Implementación de referencia

---

**Recuerda:** La consistencia es clave. Seguir estos patrones hace que la librería sea predecible, mantenible y fácil de usar.
