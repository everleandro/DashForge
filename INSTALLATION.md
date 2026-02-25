# Instalación y Uso de DashForge UI

## Instalación

```bash
npm install dashforge-ui
# o
yarn add dashforge-ui
# o
pnpm add dashforge-ui
```

## Uso Básico

### 1️⃣ Opción Recomendada: Con Plugin (Estilos incluidos automáticamente)

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createDashboardUI } from 'dashforge-ui'

const app = createApp(App)

// ✅ Instala el plugin - automáticamente incluye todos los estilos globales
app.use(createDashboardUI({
  theme: 'light', // 'light' | 'dark' | custom theme object
  generateUtilities: true // opcional: genera clases de utilidad
}))

app.mount('#app')
```

**Esto incluye automáticamente:**
- ✅ Estilos globales
- ✅ Variables CSS del tema
- ✅ Variables de componentes (Button, Icon)
- ✅ Efectos Ripple
- ✅ Estilos de carga

### 2️⃣ Opción Alternativa: Importación Manual de Estilos

Si no usas el plugin, importa los estilos manualmente:

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import 'dashforge-ui/styles'  // Importa todos los estilos globales

const app = createApp(App)
app.mount('#app')
```

Luego importa los componentes como necesites:

```vue
<template>
  <v-button color="primary">Click me</v-button>
  <v-icon size="large">home</v-icon>
</template>

<script setup>
import { VButton, VIcon } from 'dashforge-ui'
</script>
```

## Uso de Componentes

### VButton

```vue
<template>
  <v-button 
    size="large" 
    color="primary"
    @click="handleClick"
  >
    Click me
  </v-button>
</template>

<script setup>
import { VButton } from 'dashforge-ui'

function handleClick() {
  console.log('Clicked!')
}
</script>
```

**Props disponibles:**
- `size`: `'x-small' | 'small' | 'default' | 'large' | 'x-large'`
- `color`: Color del botón (cualquier token de color disponible)
- `variant`: `'filled' | 'outlined' | 'text'`
- `loading`: `boolean` - muestra indicador de carga
- `disabled`: `boolean`
- `block`: `boolean` - ancho completo

### VIcon

```vue
<template>
  <v-icon size="large" color="primary">home</v-icon>
</template>

<script setup>
import { VIcon } from 'dashforge-ui'
</script>
```

**Props disponibles:**
- `size`: `'x-small' | 'small' | 'default' | 'large' | 'x-large'`
- `color`: Color del icono

## Temas

### Usando un Tema Predefinido

```typescript
app.use(createDashboardUI({
  theme: 'dark' // 'light' por defecto
}))
```

### Personalizando Temas

```typescript
import { createDashboardUI, createTheme } from 'dashforge-ui'

const customTheme = createTheme({
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
    // ... más colores
  }
})

app.use(createDashboardUI({
  theme: customTheme
}))
```

## Composables

### useTheme

Accede y modifica el tema en tiempo de ejecución:

```vue
<script setup>
import { useTheme } from 'dashforge-ui'

const { theme, setTheme } = useTheme()

function toggleTheme() {
  setTheme(theme.value.name === 'light' ? 'dark' : 'light')
}
</script>
```

### useDashboardUI

Accede al estado global de DashForge UI:

```vue
<script setup>
import { useDashboardUI } from 'dashforge-ui'

const { theme, generateUtilities } = useDashboardUI()
</script>
```

## Variables CSS Disponibles

### Colores
- `--df-color-primary`, `--df-color-on-primary`
- `--df-color-secondary`, `--df-color-on-secondary`
- `--df-color-success`, `--df-color-error`, `--df-color-warning`, `--df-color-info`
- `--df-color-neutral`, `--df-color-neutral-variant`
- Y muchos más...

### Button
- `--df-btn-height-*`: x-small, small, default, large, x-large
- `--df-btn-font-size-*`
- `--df-btn-border-radius`: 4px
- `--df-btn-shadow`

### Icon
- `--df-icon-font-size-*`: x-small, small, default, large, x-large

Usa estas variables en tus estilos:

```scss
.my-component {
  color: var(--df-color-primary);
  border-radius: var(--df-btn-border-radius);
  font-size: var(--df-btn-font-size-default);
}
```

## TypeScript

Todos los tipos están disponibles para una mejor DX:

```typescript
import type { Theme, Size, ColorKey } from 'dashforge-ui'
```

## Soporte

Para reportar problemas o sugerencias, abre un issue en el repositorio.
