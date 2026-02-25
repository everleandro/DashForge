# Personalización de Temas

DashForge soporta múltiples temas de dos formas:

## 1. Temas Predefinidos (Build-time)

### Crear un tema personalizado predefinido

1. Copia `src/styles/theme/_custom.example.scss`
2. Renómbralo a `_mycustom.scss`
3. Personaliza los mapas de colores
4. Importa en tu `theme.scss`:

```scss
@use './theme/_mycustom.scss' as custom;

@media (prefers-color-scheme: mycustom) {
  :root {
    @each $name, $value in custom.$df-colors {
      --df-color-#{$name}: #{$value};
    }
    // ... repeat for other maps
  }
}
```

## 2. Temas Personalizados (Runtime, sin rebuild)

### Opción A: Clases CSS

Crea un archivo `themes.css` en tu app y agrega:

```css
:root.theme-brand {
  --df-color-primary: #ff6f00;
  --df-color-on-primary: #ffffff;
  --df-color-primary-container: #ffddcc;
  --df-color-on-primary-container: #4e2600;
  /* ... resto de colores ... */
}

:root.theme-corporate {
  --df-color-primary: #1a237e;
  /* ... */
}
```

Luego toglea la clase:

```javascript
document.documentElement.className = 'theme-brand';
```

### Opción B: Composable Vue (recomendado)

```typescript
// useTheme.ts
import { ref } from 'vue'

const currentTheme = ref('light')

const setTheme = (colors: Record<string, string>) => {
  Object.entries(colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--df-color-${key}`, value)
  })
}

export { currentTheme, setTheme }
```

---

Recomendación: **Combina todos** - Light/Dark automático + clases para switcher + Composable para dinámicas.
