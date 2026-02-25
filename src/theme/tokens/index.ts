/**
 * Material Design 3 Tokens
 * Source of truth for design system values
 * Generated from Material Design 3 specifications
 */

import { lightColors, darkColors } from './colors'
import { spacing } from './spacing'
import { typography } from './typography'
import { shape } from './shape'
import { elevation } from './elevation'
import { btn, icon } from './components/index'

export const materialTokens = {
  light: lightColors,
  dark: darkColors,
  spacing,
  typography,
  shape,
  elevation,
  btn,
  icon,
  fontFamily: {
    body: 'Roboto, ui-sans-serif, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
  } as const,
} as const

export default materialTokens

// Re-export token values (not types to avoid duplication)
export { lightColors, darkColors } from './colors'
export { spacing } from './spacing'
export { typography } from './typography'
export { shape } from './shape'
export { elevation } from './elevation'
export { btn, icon } from './components/index'
