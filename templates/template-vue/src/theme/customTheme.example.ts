/**
 * Custom Theme Example
 * This file demonstrates how to create custom themes for your application
 */

import { createTheme, createDarkTheme, createColorPalette } from 'dashforge-ui'

// Step 1: Define your brand colors (optional - use createColorPalette for validation)
const brandColors = createColorPalette({
  // Primary - main brand color
  primary: '#ff6b35',
  'on-primary': '#ffffff',
  'primary-container': '#ffd4c4',
  'on-primary-container': '#4a0000',
  
  // Secondary - accent color
  secondary: '#0077b6',
  'on-secondary': '#ffffff',
  'secondary-container': '#b3e5fc',
  'on-secondary-container': '#001f3f',
  
  // Tertiary - additional accent
  tertiary: '#8338ec',
  'on-tertiary': '#ffffff',
  'tertiary-container': '#e0d0ff',
  'on-tertiary-container': '#2b0051',
  
  // Semantic colors
  error: '#dc2626',
  'on-error': '#ffffff',
  'error-container': '#fecaca',
  'on-error-container': '#7f1d1d',
  
  warning: '#f59e0b',
  'on-warning': '#ffffff',
  'warning-container': '#fed7aa',
  'on-warning-container': '#78350f',
  
  success: '#10b981',
  'on-success': '#ffffff',
  'success-container': '#a7f3d0',
  'on-success-container': '#064e3b',
  
  info: '#3b82f6',
  'on-info': '#ffffff',
  'info-container': '#bfdbfe',
  'on-info-container': '#1e3a8a',
  
  // Neutral colors
  neutral: '#6b7280',
  'on-neutral': '#ffffff',
  'neutral-container': '#e5e7eb',
  'on-neutral-container': '#1f2937',
  
  'neutral-variant': '#94a3b8',
  'on-neutral-variant': '#ffffff',
  'neutral-variant-container': '#e2e8f0',
  'on-neutral-variant-container': '#334155',
  
  // Surface colors (light theme)
  background: '#ffffff',
  'on-background': '#1f2937',
  'background-container': '#f9fafb',
  'on-background-container': '#111827',
  
  surface: '#ffffff',
  'on-surface': '#1f2937',
  'surface-container': '#f3f4f6',
  'on-surface-container': '#111827',
  
  'surface-dim': '#f9fafb',
  'on-surface-dim': '#374151',
  'surface-dim-container': '#e5e7eb',
  'on-surface-dim-container': '#1f2937',
  
  'surface-bright': '#ffffff',
  'on-surface-bright': '#111827',
  'surface-bright-container': '#ffffff',
  'on-surface-bright-container': '#000000',
  
  // Text colors
  text: '#1f2937',
  'on-text': '#ffffff',
  'text-container': '#f3f4f6',
  'on-text-container': '#111827',
  
  'text-secondary': '#6b7280',
  'on-text-secondary': '#ffffff',
  'text-secondary-container': '#e5e7eb',
  'on-text-secondary-container': '#374151',
  
  'text-tertiary': '#9ca3af',
  'on-text-tertiary': '#ffffff',
  'text-tertiary-container': '#f3f4f6',
  'on-text-tertiary-container': '#4b5563',
  
  // Outline colors
  outline: '#d1d5db',
  'on-outline': '#6b7280',
  'outline-container': '#e5e7eb',
  'on-outline-container': '#9ca3af',
  
  'outline-variant': '#e5e7eb',
  'on-outline-variant': '#9ca3af',
  'outline-variant-container': '#f3f4f6',
  'on-outline-variant-container': '#d1d5db',
  
  // Utility colors
  white: '#ffffff',
  'on-white': '#000000',
  'white-container': '#f9fafb',
  'on-white-container': '#111827',
  
  black: '#000000',
  'on-black': '#ffffff',
  'black-container': '#1f2937',
  'on-black-container': '#f9fafb',
  
  // Form colors
  input: '#f9fafb',
  'on-input': '#1f2937',
  'input-container': '#ffffff',
  'on-input-container': '#374151',
  
  grey: '#9ca3af',
  'on-grey': '#ffffff',
  'grey-container': '#e5e7eb',
  'on-grey-container': '#4b5563',
  
  disabled: '#d1d5db',
  'on-disabled': '#9ca3af',
  'disabled-container': '#f3f4f6',
  'on-disabled-container': '#6b7280',
})

// Step 2: Create your light theme
export const myLightTheme = createTheme({
  name: 'my-brand-light',
  colors: brandColors
  // spacing, typography, shape, elevation use defaults from materialTokens
})

// Step 3: Create your dark theme
export const myDarkTheme = createDarkTheme({
  name: 'my-brand-dark',
  colors: {
    // Override colors for dark mode
    primary: '#ffa366',
    'on-primary': '#4a0000',
    'primary-container': '#7d2900',
    'on-primary-container': '#ffd4c4',
    
    secondary: '#68b4e0',
    'on-secondary': '#001f3f',
    'secondary-container': '#004d7a',
    'on-secondary-container': '#c4e7ff',
    
    tertiary: '#b794f6',
    'on-tertiary': '#2b0051',
    'tertiary-container': '#4a1976',
    'on-tertiary-container': '#ecd9ff',
    
    background: '#1a1a1a',
    'on-background': '#e5e5e5',
    'background-container': '#0a0a0a',
    'on-background-container': '#f5f5f5',
    
    surface: '#1a1a1a',
    'on-surface': '#e5e5e5',
    'surface-container': '#262626',
    'on-surface-container': '#fafafa',
    
    // ... copy rest from dark theme or customize as needed
  }
})

// Step 4: Advanced - Custom spacing/typography if needed
export const myCustomTheme = createTheme({
  name: 'my-custom',
  colors: brandColors,
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px'
  },
  shape: {
    'border-radius-none': '0px',
    'border-radius-sm': '4px',
    'border-radius-md': '8px',
    'border-radius-lg': '12px',
    'border-radius-xl': '16px',
    'border-radius-2xl': '24px',
    'border-radius-full': '9999px'
  }
})
