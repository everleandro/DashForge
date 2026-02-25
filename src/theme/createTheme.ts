/**
 * Theme Creation Helper
 * Simplifies custom theme creation with sensible defaults
 */

import { Theme, PartialTheme } from '../types/theme'
import { materialTokens } from './tokens/index'
import { lightTheme, darkTheme } from './themes'

/**
 * Creates a custom theme with default fallbacks
 * 
 * @example
 * ```ts
 * import { createTheme } from 'dashforge-ui'
 * 
 * const myTheme = createTheme({
 *   name: 'my-brand',
 *   colors: {
 *     primary: '#ff6b35',
 *     'on-primary': '#ffffff',
 *     'primary-container': '#ffd4c4',
 *     'on-primary-container': '#4a0000'
 *   }
 * })
 * ```
 */
export function createTheme(config: PartialTheme, baseTheme: Theme = lightTheme): Theme {
  return {
    name: config.name ?? baseTheme.name,
    colors: {
      ...baseTheme.colors,
      ...(config.colors || {})
    },
    spacing: config.spacing ?? baseTheme.spacing ?? materialTokens.spacing,
    typography: config.typography ?? baseTheme.typography ?? materialTokens.typography,
    shape: config.shape ?? baseTheme.shape ?? materialTokens.shape,
    elevation: config.elevation ?? baseTheme.elevation ?? materialTokens.elevation,
    tokens: {
      ...(baseTheme.tokens || {}),
      ...(config.tokens || {})
    }
  }
}

/**
 * Creates a theme based on dark theme defaults
 * 
 * @example
 * ```ts
 * import { createDarkTheme } from 'dashforge-ui'
 * 
 * const myDarkTheme = createDarkTheme({
 *   name: 'my-dark-brand',
 *   colors: {
 *     primary: '#a0d8ff'
 *   }
 * })
 * ```
 */
export function createDarkTheme(config: PartialTheme): Theme {
  return createTheme(config, darkTheme)
}
