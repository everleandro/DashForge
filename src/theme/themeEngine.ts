import { Theme, PartialTheme } from '../types/theme'

// Helper to safely merge nested objects with proper typing
function mergeObjects<T extends Record<string, any>>(
  base: T | undefined,
  partial: Partial<T> | undefined
): T {
  if (!base) return (partial as T) || ({} as T)
  if (!partial) return base
  return { ...base, ...partial } as T
}

export function mergeThemes(base: Theme, partial: PartialTheme): Theme {
  if (!partial) return base
  
  return {
    name: partial.name ?? base.name,
    colors: {
      ...base.colors,
      ...(partial.colors || {})
    } as Theme['colors'],
    spacing: base.spacing && partial.spacing 
      ? { ...base.spacing, ...partial.spacing } 
      : partial.spacing || base.spacing,
    typography: base.typography && partial.typography
      ? { ...base.typography, ...partial.typography }
      : partial.typography || base.typography,
    shape: base.shape && partial.shape
      ? { ...base.shape, ...partial.shape }
      : partial.shape || base.shape,
    elevation: base.elevation && partial.elevation
      ? { ...base.elevation, ...partial.elevation }
      : partial.elevation || base.elevation,
    components: {
      ...base.components,
      ...(partial.components || {})
    },
    tokens: {
      ...base.tokens,
      ...(partial.tokens || {})
    }
  } as Theme
}

export function generateCSSVars(theme: Theme): Record<string, string> {
  const vars: Record<string, string> = {}
  
  // Map all colors
  if (theme.colors) {
    const colors = theme.colors as any
    Object.keys(colors).forEach(key => {
      if (typeof colors[key] === 'string') {
        vars[`--df-color-${key}`] = colors[key]
      } else if (typeof colors[key] === 'object' && colors[key].base) {
        vars[`--df-color-${key}`] = colors[key].base
        if (colors[key]['on-base']) {
          vars[`--df-color-on-${key}`] = colors[key]['on-base']
        }
      }
    })
  }
  
  // Map spacing
  if (theme.spacing) {
    Object.entries(theme.spacing).forEach(([key, value]) => {
      vars[`--df-spacing-${key}`] = value
    })
  }
  
  // Map typography
  if (theme.typography) {
    Object.entries(theme.typography).forEach(([key, style]) => {
      vars[`--df-font-size-${key}`] = style.fontSize
      vars[`--df-font-weight-${key}`] = String(style.fontWeight)
      vars[`--df-line-height-${key}`] = style.lineHeight
      vars[`--df-letter-spacing-${key}`] = style.letterSpacing
    })
  }
  
  // Map shape
  if (theme.shape) {
    Object.entries(theme.shape).forEach(([key, value]) => {
      vars[`--df-${key}`] = value
    })
  }
  
  // Map elevation
  if (theme.elevation) {
    Object.entries(theme.elevation).forEach(([key, value]) => {
      vars[`--df-${key}`] = value
    })
  }
  
  // Raw token map (backward compatibility and custom tokens)
  if (theme.tokens) {
    Object.entries(theme.tokens).forEach(([key, value]) => {
      vars[`--df-${key}`] = value
    })
  }
  
  return vars
}

export function applyTheme(theme: Theme) {
  const vars = generateCSSVars(theme)
  const root = document.documentElement
  for (const k in vars) {
    root.style.setProperty(k, vars[k])
  }
}

