export type CSSVarMap = Record<string, string>

export type ColorShades = {
  base: string
  'on-base'?: string
}

export type ButtonTokens = {
  background: string
  color: string
  border?: string
}

export type TypographyStyle = {
  fontSize: string
  fontWeight: number
  lineHeight: string
  letterSpacing: string
}

export interface Theme {
  name?: string
  colors: {
    // Primary color (brand)
    primary: ColorShades
    'on-primary': string
    'primary-container': string
    'on-primary-container': string
    
    // Secondary color
    secondary: ColorShades
    'on-secondary': string
    'secondary-container': string
    'on-secondary-container': string
    
    // Tertiary color
    tertiary: ColorShades
    'on-tertiary': string
    'tertiary-container': string
    'on-tertiary-container': string
    
    // Error color
    error: ColorShades
    'on-error': string
    'error-container': string
    'on-error-container': string
    
    // Neutral colors
    neutral: string
    'on-neutral': string
    'neutral-variant': string
    'on-neutral-variant': string
    
    // Surface colors
    background: string
    surface: string
    'surface-dim'?: string
    'surface-bright'?: string
    'on-surface': string
    'on-surface-variant': string
    
    // Text
    text: string
    'text-secondary': string
    'text-tertiary': string
    
    // Outline
    outline: string
    'outline-variant': string
  }
  spacing?: {
    xs: string  // 4px
    sm: string  // 8px
    md: string  // 16px
    lg: string  // 24px
    xl: string  // 32px
    '2xl': string // 48px
  }
  typography?: {
    'display-large': TypographyStyle
    'display-medium': TypographyStyle
    'display-small': TypographyStyle
    'headline-large': TypographyStyle
    'headline-medium': TypographyStyle
    'headline-small': TypographyStyle
    'title-large': TypographyStyle
    'title-medium': TypographyStyle
    'title-small': TypographyStyle
    'body-large': TypographyStyle
    'body-medium': TypographyStyle
    'body-small': TypographyStyle
    'label-large': TypographyStyle
    'label-medium': TypographyStyle
    'label-small': TypographyStyle
  }
  shape?: {
    'corner-none': string
    'corner-extra-small': string
    'corner-small': string
    'corner-medium': string
    'corner-large': string
    'corner-extra-large': string
    'corner-full': string
  }
  elevation?: {
    'level-0': string
    'level-1': string
    'level-2': string
    'level-3': string
    'level-4': string
    'level-5': string
  }
  components?: {
    button?: Record<string, Partial<ButtonTokens>>
  }
  // raw token map to allow CSS var generation
  tokens?: Record<string, string>
}

export type PartialTheme = Partial<Theme>
