import type { ColorPalette, SpacingTokens, TypographyTokens, ShapeTokens, ElevationTokens } from '../theme/tokens/types'

export type CSSVarMap = Record<string, string>

export interface Theme {
  name?: string
  colors: ColorPalette
  spacing?: SpacingTokens
  typography?: TypographyTokens
  shape?: ShapeTokens
  elevation?: ElevationTokens
  // raw token map to allow CSS var generation
  tokens?: Record<string, string>
}

export type PartialTheme = Partial<Theme>
