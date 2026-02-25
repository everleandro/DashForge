import { Theme } from '../types/theme'
import { materialTokens } from './tokens/index'

// ============================================================================
// Temas generados directamente desde materialTokens
// Importar directamente sin duplicación de código
// ============================================================================

export const lightTheme: Theme = {
  name: 'light',
  colors: materialTokens.light,
  spacing: materialTokens.spacing,
  typography: materialTokens.typography,
  shape: materialTokens.shape,
  elevation: materialTokens.elevation,
}

export const darkTheme: Theme = {
  name: 'dark',
  colors: materialTokens.dark,
  spacing: materialTokens.spacing,
  typography: materialTokens.typography,
  shape: materialTokens.shape,
  elevation: materialTokens.elevation,
}
