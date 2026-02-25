# Utility Classes

Clases auxiliares generadas automáticamente desde `src/theme/tokens.ts`.

## Uso

### Clases de Color

Basadas en los tokens de color definidos. Cada color genera 3 clases:

- `.bg-{color}` - Background color
- `.text-{color}` - Text color
- `.border-{color}` - Border color

**Ejemplos:**
```html
<!-- Primary color -->
<div class="bg-primary">Fondo primario</div>
<p class="text-primary">Texto primario</p>
<button class="border-primary">Botón con borde</button>

<!-- Success (verde) -->
<div class="bg-success">Operación exitosa</div>
<p class="text-success-container">Texto en contenedor de éxito</p>

<!-- Warning -->
<span class="border-warning">Advertencia</span>

<!-- Error -->
<div class="bg-error text-on-error">Error crítico</div>
```

## Colores Disponibles

- `primary`, `on-primary`, `primary-container`, `on-primary-container`
- `secondary`, `on-secondary`, `secondary-container`, `on-secondary-container`
- `success`, `on-success`, `success-container`, `on-success-container`
- `warning`, `on-warning`, `warning-container`, `on-warning-container`
- `error`, `on-error`, `error-container`, `on-error-container`
- `info`, `on-info`, `info-container`, `on-info-container`
- `input`, `on-input`
- `grey`, `on-grey`
- `disabled`, `on-disabled`
- `neutral`, `on-neutral`, `neutral-variant`, `on-neutral-variant`
- `background`, `surface`, `surface-dim`, `surface-bright`, `on-surface`, `on-surface-variant`
- `text`, `text-secondary`, `text-tertiary`
- `outline`, `outline-variant`
- `white`, `black`

## Regenerar Clases

Si modificas colores en `src/theme/tokens.ts`, ejecuta:

```bash
npm run gen:utils
```

Esto regenerará `src/styles/utilities/colors.scss` con los nuevos valores.

## Responsiveness y Dark Mode

Las clases usan variables CSS (`var(--df-color-*)`) que se generan en `src/styles/theme.scss` y ya incluyen:
- ✅ Dark mode automático vía `@media (prefers-color-scheme: dark)`
- ✅ Fallback a valores hardcodeados si no hay variable CSS disponible
- ✅ Soporte para customización en runtime
