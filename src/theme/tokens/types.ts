/**
 * Tipos compartidos para los tokens del design system
 */

/**
 * Color Palette - Estructura flexible y tipada
 * 
 * Todos los colores tienen la misma estructura simples valores hex.
 * Para cada color base, debe haber:
 * - colorName: string
 * - on-colorName: string
 * - colorName-container: string 
 * - on-colorName-container: string
 * 
 * Ejemplo:
 * {
 *   primary: '#00af67',
 *   'on-primary': '#ffffff',
 *   'primary-container': '#b1f5db',
 *   'on-primary-container': '#00291b',
 * }
 * 
 * El usuario puede definir colores personalizados sin limitarse a nombres predefinidos
 */
export type ColorPalette = Record<string, string>

/**
 * Helper function para crear y validar paletas de color
 * Asegura la estructura correcta sin restringir nombres de colores
 */
export function createColorPalette<T extends ColorPalette>(palette: T): T {
  // En tiempo de desarrollo, verificar estructura
  // Busca colores base: nombres sin prefijo 'on-' y sin sufijo '-container'
  const baseColors = Object.keys(palette).filter(
    (key) => !key.startsWith('on-') && !key.includes('-container')
  )

  for (const colorName of baseColors) {
    const hasOnColor = `on-${colorName}` in palette
    const hasContainer = `${colorName}-container` in palette
    const hasOnContainer = `on-${colorName}-container` in palette

    if (!hasOnColor) {
      console.warn(`ColorPalette: Color "${colorName}" falta "on-${colorName}"`)
    }
    if (!hasContainer) {
      console.warn(`ColorPalette: Color "${colorName}" falta "${colorName}-container"`)
    }
    if (!hasOnContainer) {
      console.warn(`ColorPalette: Color "${colorName}" falta "on-${colorName}-container"`)
    }
  }

  return palette
}

export type SpacingTokens = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export type TypographyToken = {
  fontSize: string
  fontWeight: number
  lineHeight: string
  letterSpacing: string
}

export type TypographyTokens = Record<
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small',
  TypographyToken
>

export type ShapeTokens = Record<
  | 'corner-none'
  | 'corner-extra-small'
  | 'corner-small'
  | 'corner-medium'
  | 'corner-large'
  | 'corner-extra-large'
  | 'corner-full',
  string
>

export type ElevationTokens = Record<
  'level-0' | 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5',
  string
>

export type ButtonStates = {
  focus: number
  hover: number
  active: number
}

export type ButtonFontSizes = Record<
  'x-small' | 'small' | 'default' | 'large' | 'x-large',
  string
>

export type ButtonHeights = Record<
  'x-small' | 'small' | 'default' | 'large' | 'x-large',
  string
>

export type ButtonTokens = {
  states: ButtonStates
  fontSizes: ButtonFontSizes
  height: ButtonHeights
  borderRadius: string
  roundedBorderRadius: string
  borderStyle: string
  borderWidth: string
  fontWeight: number
  letterSpacing: string
  textTransform: string
  transitionDuration: string
}

export type IconFontSizes = Record<
  'x-small' | 'small' | 'default' | 'large' | 'x-large',
  string
>

export type IconTokens = {
  class: string
  prefix: string
  fontSizes: IconFontSizes
}
