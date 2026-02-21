import { Theme } from '../types/theme'
import { materialTokens } from './tokens'

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    // Primary
    primary: { base: materialTokens.light.primary, 'on-base': materialTokens.light['on-primary'] },
    'on-primary': materialTokens.light['on-primary'],
    'primary-container': materialTokens.light['primary-container'],
    'on-primary-container': materialTokens.light['on-primary-container'],
    
    // Secondary
    secondary: { base: materialTokens.light.secondary, 'on-base': materialTokens.light['on-secondary'] },
    'on-secondary': materialTokens.light['on-secondary'],
    'secondary-container': materialTokens.light['secondary-container'],
    'on-secondary-container': materialTokens.light['on-secondary-container'],
    
    // Tertiary
    tertiary: { base: materialTokens.light.tertiary, 'on-base': materialTokens.light['on-tertiary'] },
    'on-tertiary': materialTokens.light['on-tertiary'],
    'tertiary-container': materialTokens.light['tertiary-container'],
    'on-tertiary-container': materialTokens.light['on-tertiary-container'],
    
    // Error
    error: { base: materialTokens.light.error, 'on-base': materialTokens.light['on-error'] },
    'on-error': materialTokens.light['on-error'],
    'error-container': materialTokens.light['error-container'],
    'on-error-container': materialTokens.light['on-error-container'],
    
    // Neutral
    neutral: materialTokens.light.neutral,
    'on-neutral': materialTokens.light['on-neutral'],
    'neutral-variant': materialTokens.light['neutral-variant'],
    'on-neutral-variant': materialTokens.light['on-neutral-variant'],
    
    // Surface
    background: materialTokens.light.background,
    surface: materialTokens.light.surface,
    'surface-dim': materialTokens.light['surface-dim'],
    'surface-bright': materialTokens.light['surface-bright'],
    'on-surface': materialTokens.light['on-surface'],
    'on-surface-variant': materialTokens.light['on-surface-variant'],
    
    // Text
    text: materialTokens.light.text,
    'text-secondary': materialTokens.light['text-secondary'],
    'text-tertiary': materialTokens.light['text-tertiary'],
    
    // Outline
    outline: materialTokens.light.outline,
    'outline-variant': materialTokens.light['outline-variant']
  },
  spacing: materialTokens.spacing,
  typography: materialTokens.typography,
  shape: materialTokens.shape,
  elevation: materialTokens.elevation,
  components: {
    button: {
      default: { 
        background: 'var(--df-color-primary)', 
        color: 'var(--df-color-on-primary)' 
      }
    }
  },
  tokens: {
    // Colors
    'color-primary': materialTokens.light.primary,
    'color-on-primary': materialTokens.light['on-primary'],
    'color-primary-container': materialTokens.light['primary-container'],
    'color-on-primary-container': materialTokens.light['on-primary-container'],
    
    'color-secondary': materialTokens.light.secondary,
    'color-on-secondary': materialTokens.light['on-secondary'],
    'color-secondary-container': materialTokens.light['secondary-container'],
    'color-on-secondary-container': materialTokens.light['on-secondary-container'],
    
    'color-tertiary': materialTokens.light.tertiary,
    'color-on-tertiary': materialTokens.light['on-tertiary'],
    'color-tertiary-container': materialTokens.light['tertiary-container'],
    'color-on-tertiary-container': materialTokens.light['on-tertiary-container'],
    
    'color-error': materialTokens.light.error,
    'color-on-error': materialTokens.light['on-error'],
    'color-error-container': materialTokens.light['error-container'],
    'color-on-error-container': materialTokens.light['on-error-container'],
    
    'color-neutral': materialTokens.light.neutral,
    'color-on-neutral': materialTokens.light['on-neutral'],
    'color-neutral-variant': materialTokens.light['neutral-variant'],
    'color-on-neutral-variant': materialTokens.light['on-neutral-variant'],
    
    'color-background': materialTokens.light.background,
    'color-surface': materialTokens.light.surface,
    'color-surface-dim': materialTokens.light['surface-dim'],
    'color-surface-bright': materialTokens.light['surface-bright'],
    'color-on-surface': materialTokens.light['on-surface'],
    'color-on-surface-variant': materialTokens.light['on-surface-variant'],
    
    'color-text': materialTokens.light.text,
    'color-text-secondary': materialTokens.light['text-secondary'],
    'color-text-tertiary': materialTokens.light['text-tertiary'],
    
    'color-outline': materialTokens.light.outline,
    'color-outline-variant': materialTokens.light['outline-variant'],
    
    // Spacing
    'spacing-xs': materialTokens.spacing.xs,
    'spacing-sm': materialTokens.spacing.sm,
    'spacing-md': materialTokens.spacing.md,
    'spacing-lg': materialTokens.spacing.lg,
    'spacing-xl': materialTokens.spacing.xl,
    'spacing-2xl': materialTokens.spacing['2xl'],
    
    // Shape
    'corner-none': materialTokens.shape['corner-none'],
    'corner-extra-small': materialTokens.shape['corner-extra-small'],
    'corner-small': materialTokens.shape['corner-small'],
    'corner-medium': materialTokens.shape['corner-medium'],
    'corner-large': materialTokens.shape['corner-large'],
    'corner-extra-large': materialTokens.shape['corner-extra-large'],
    'corner-full': materialTokens.shape['corner-full'],
    
    // Elevation
    'elevation-0': materialTokens.elevation['level-0'],
    'elevation-1': materialTokens.elevation['level-1'],
    'elevation-2': materialTokens.elevation['level-2'],
    'elevation-3': materialTokens.elevation['level-3'],
    'elevation-4': materialTokens.elevation['level-4'],
    'elevation-5': materialTokens.elevation['level-5']
  }
}

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    // Primary
    primary: { base: materialTokens.dark.primary, 'on-base': materialTokens.dark['on-primary'] },
    'on-primary': materialTokens.dark['on-primary'],
    'primary-container': materialTokens.dark['primary-container'],
    'on-primary-container': materialTokens.dark['on-primary-container'],
    
    // Secondary
    secondary: { base: materialTokens.dark.secondary, 'on-base': materialTokens.dark['on-secondary'] },
    'on-secondary': materialTokens.dark['on-secondary'],
    'secondary-container': materialTokens.dark['secondary-container'],
    'on-secondary-container': materialTokens.dark['on-secondary-container'],
    
    // Tertiary
    tertiary: { base: materialTokens.dark.tertiary, 'on-base': materialTokens.dark['on-tertiary'] },
    'on-tertiary': materialTokens.dark['on-tertiary'],
    'tertiary-container': materialTokens.dark['tertiary-container'],
    'on-tertiary-container': materialTokens.dark['on-tertiary-container'],
    
    // Error
    error: { base: materialTokens.dark.error, 'on-base': materialTokens.dark['on-error'] },
    'on-error': materialTokens.dark['on-error'],
    'error-container': materialTokens.dark['error-container'],
    'on-error-container': materialTokens.dark['on-error-container'],
    
    // Neutral
    neutral: materialTokens.dark.neutral,
    'on-neutral': materialTokens.dark['on-neutral'],
    'neutral-variant': materialTokens.dark['neutral-variant'],
    'on-neutral-variant': materialTokens.dark['on-neutral-variant'],
    
    // Surface
    background: materialTokens.dark.background,
    surface: materialTokens.dark.surface,
    'surface-dim': materialTokens.dark['surface-dim'],
    'surface-bright': materialTokens.dark['surface-bright'],
    'on-surface': materialTokens.dark['on-surface'],
    'on-surface-variant': materialTokens.dark['on-surface-variant'],
    
    // Text
    text: materialTokens.dark.text,
    'text-secondary': materialTokens.dark['text-secondary'],
    'text-tertiary': materialTokens.dark['text-tertiary'],
    
    // Outline
    outline: materialTokens.dark.outline,
    'outline-variant': materialTokens.dark['outline-variant']
  },
  spacing: materialTokens.spacing,
  typography: materialTokens.typography,
  shape: materialTokens.shape,
  elevation: materialTokens.elevation,
  components: {
    button: {
      default: { 
        background: 'var(--df-color-primary)', 
        color: 'var(--df-color-on-primary)' 
      }
    }
  },
  tokens: {
    // Colors
    'color-primary': materialTokens.dark.primary,
    'color-on-primary': materialTokens.dark['on-primary'],
    'color-primary-container': materialTokens.dark['primary-container'],
    'color-on-primary-container': materialTokens.dark['on-primary-container'],
    
    'color-secondary': materialTokens.dark.secondary,
    'color-on-secondary': materialTokens.dark['on-secondary'],
    'color-secondary-container': materialTokens.dark['secondary-container'],
    'color-on-secondary-container': materialTokens.dark['on-secondary-container'],
    
    'color-tertiary': materialTokens.dark.tertiary,
    'color-on-tertiary': materialTokens.dark['on-tertiary'],
    'color-tertiary-container': materialTokens.dark['tertiary-container'],
    'color-on-tertiary-container': materialTokens.dark['on-tertiary-container'],
    
    'color-error': materialTokens.dark.error,
    'color-on-error': materialTokens.dark['on-error'],
    'color-error-container': materialTokens.dark['error-container'],
    'color-on-error-container': materialTokens.dark['on-error-container'],
    
    'color-neutral': materialTokens.dark.neutral,
    'color-on-neutral': materialTokens.dark['on-neutral'],
    'color-neutral-variant': materialTokens.dark['neutral-variant'],
    'color-on-neutral-variant': materialTokens.dark['on-neutral-variant'],
    
    'color-background': materialTokens.dark.background,
    'color-surface': materialTokens.dark.surface,
    'color-surface-dim': materialTokens.dark['surface-dim'],
    'color-surface-bright': materialTokens.dark['surface-bright'],
    'color-on-surface': materialTokens.dark['on-surface'],
    'color-on-surface-variant': materialTokens.dark['on-surface-variant'],
    
    'color-text': materialTokens.dark.text,
    'color-text-secondary': materialTokens.dark['text-secondary'],
    'color-text-tertiary': materialTokens.dark['text-tertiary'],
    
    'color-outline': materialTokens.dark.outline,
    'color-outline-variant': materialTokens.dark['outline-variant'],
    
    // Spacing
    'spacing-xs': materialTokens.spacing.xs,
    'spacing-sm': materialTokens.spacing.sm,
    'spacing-md': materialTokens.spacing.md,
    'spacing-lg': materialTokens.spacing.lg,
    'spacing-xl': materialTokens.spacing.xl,
    'spacing-2xl': materialTokens.spacing['2xl'],
    
    // Shape
    'corner-none': materialTokens.shape['corner-none'],
    'corner-extra-small': materialTokens.shape['corner-extra-small'],
    'corner-small': materialTokens.shape['corner-small'],
    'corner-medium': materialTokens.shape['corner-medium'],
    'corner-large': materialTokens.shape['corner-large'],
    'corner-extra-large': materialTokens.shape['corner-extra-large'],
    'corner-full': materialTokens.shape['corner-full'],
    
    // Elevation
    'elevation-0': materialTokens.elevation['level-0'],
    'elevation-1': materialTokens.elevation['level-1'],
    'elevation-2': materialTokens.elevation['level-2'],
    'elevation-3': materialTokens.elevation['level-3'],
    'elevation-4': materialTokens.elevation['level-4'],
    'elevation-5': materialTokens.elevation['level-5']
  }
}
