import { Theme, PartialTheme } from '../types/theme'

// Style element to hold dynamically generated utility classes
let utilityStyleElement: HTMLStyleElement | null = null

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
    Object.entries(theme.colors).forEach(([key, value]) => {
      vars[`--df-color-${key}`] = value
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

/**
 * Generates utility classes dynamically for custom theme colors
 * Creates .bg-*, .text-*, and .border-* classes for each color in the theme
 * 
 * @param theme - Theme object with colors
 * @param options - Configuration options
 * @returns void
 * 
 * @example
 * ```ts
 * const customTheme = createTheme({
 *   colors: { brand: '#ff6b35' }
 * })
 * applyTheme(customTheme) // Automatically generates .bg-brand, .text-brand, etc.
 * ```
 */
export function generateUtilityClasses(theme: Theme, options: { replace?: boolean } = {}) {
  if (typeof document === 'undefined') return

  // Create or get existing style element
  // Check if element is still in DOM (it might have been removed externally)
  const elementInDOM = utilityStyleElement && document.head.contains(utilityStyleElement)
  
  if (!elementInDOM || options.replace) {
    // Remove old element if replacing or if reference is stale
    if (utilityStyleElement && document.head.contains(utilityStyleElement)) {
      utilityStyleElement.remove()
    }

    utilityStyleElement = document.createElement('style')
    utilityStyleElement.setAttribute('data-dashforge-utilities', 'true')
    utilityStyleElement.setAttribute('type', 'text/css')
    document.head.appendChild(utilityStyleElement)
  }

  // Generate CSS rules for each color
  const cssRules: string[] = []
  
  if (theme.colors) {
    Object.entries(theme.colors).forEach(([key, value]) => {
      // Background utilities
      cssRules.push(`.bg-${key}{background-color:var(--df-color-${key},${value})!important}`)
      
      // Text utilities
      cssRules.push(`.text-${key}{color:var(--df-color-${key},${value})!important}`)
      
      // Border utilities
      cssRules.push(`.border-${key}{border-color:var(--df-color-${key},${value})!important}`)
    })
  }

  // Insert rules into style element (guaranteed to exist after checks above)
  if (utilityStyleElement) {
    utilityStyleElement.textContent = cssRules.join('\n')
  }
}

export function applyTheme(theme: Theme, options: { generateUtilities?: boolean } = {}) {
  if (typeof document === 'undefined') return
  
  // Apply CSS variables
  const vars = generateCSSVars(theme)
  const root = document.documentElement
  for (const k in vars) {
    root.style.setProperty(k, vars[k])
  }

  // Generate utility classes for custom colors (opt-in)
  if (options.generateUtilities) {
    generateUtilityClasses(theme, { replace: true })
  }
}

