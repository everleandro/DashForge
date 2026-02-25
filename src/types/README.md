# Types - DashForge

Tipos TypeScript compartidos del framework.

## Exports Públicos

Los siguientes tipos se exportan desde el paquete principal (`dashforge-ui`):

### Global Types (`types/common.ts`)
- **`Size`** - Tamaño estándar para todos los componentes: `'x-small' | 'small' | 'default' | 'large' | 'x-large'`
- **`ColorKey`** - String key de color (para tokens)

### Button Types (`types/button.ts`)
- **`ButtonSize`** - Alias de `Size` (para compatibilidad)
- **`ButtonClassKeys`** - Keys de clases CSS del botón

### Icon Types (`types/icon.ts`)
- **`IconSize`** - Alias de `Size` (para compatibilidad)
- **`IconPath`** - Path SVG con opciones
- **`IconProps`** - Props del componente VIcon

### Theme Types (`types/theme.ts`)
- **`Theme`** - Interface completa del tema
- **`PartialTheme`** - Objeto parcial para merge
- **`CSSVarMap`** - Mapa de variables CSS
- **`ColorShades`** - Definición de color con variantes

## Uso

```typescript
// Importar desde el paquete
import type { Size, ButtonSize, IconSize } from 'dashforge-ui'

// Usar en componentes custom
interface MyComponentProps {
  size?: Size  // ✅ Usa el tipo global
}
```

## Notas Importantes

1. **`Size` es global**: Todos los componentes deben usar el tipo `Size` de `types/common.ts`
2. **`ButtonSize` e `IconSize`** son alias para compatibilidad
3. **Hay dos tipos `Theme`**:
   - `types/common.ts`: String literal `'light' | 'dark' | 'custom'` (interno)
   - `types/theme.ts`: Interface completa del objeto tema (público)
