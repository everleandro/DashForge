/**
 * Material Design 3 Tokens
 * Source of truth for design system values
 * Generated from Material Design 3 specifications
 */

export const materialTokens = {
  // ============================================================================
  // LIGHT THEME TOKENS
  // ============================================================================
  
  light: {
    // PRIMARY COLOR - Brand color (MD3 default: #6750A4 - Purple)
    primary: '#6750a4',
    'on-primary': '#ffffff',
    'primary-container': '#eaddff',
    'on-primary-container': '#21005e',
    
    // SECONDARY COLOR (MD3 default: #625b71 - Purple Gray)
    secondary: '#625b71',
    'on-secondary': '#ffffff',
    'secondary-container': '#e8def8',
    'on-secondary-container': '#1d192b',
    
    // TERTIARY COLOR (MD3 default: #7d5260 - Pink)
    tertiary: '#7d5260',
    'on-tertiary': '#ffffff',
    'tertiary-container': '#ffd8e4',
    'on-tertiary-container': '#31111d',
    
    // ERROR COLOR (MD3 standard)
    error: '#b3261e',
    'on-error': '#ffffff',
    'error-container': '#f9dedc',
    'on-error-container': '#410e0b',
    
    // NEUTRAL COLORS
    neutral: '#1c1b1f',
    'on-neutral': '#ffffff',
    'neutral-variant': '#49454e',
    'on-neutral-variant': '#ffffff',
    
    // SURFACE COLORS
    background: '#fffbfe',
    surface: '#fffbfe',
    'surface-dim': '#ded8e1',
    'surface-bright': '#fffbfe',
    'on-surface': '#1c1b1f',
    'on-surface-variant': '#49454e',
    
    // TEXT COLORS
    text: '#1c1b1f',
    'text-secondary': '#49454e',
    'text-tertiary': '#79747e',
    
    // OUTLINE
    outline: '#79747e',
    'outline-variant': '#cac7d0'
  },
  
  // ============================================================================
  // DARK THEME TOKENS (OLED-friendly variant)
  // ============================================================================
  
  dark: {
    // PRIMARY
    primary: '#d0bcff',
    'on-primary': '#371e55',
    'primary-container': '#4f378b',
    'on-primary-container': '#eaddff',
    
    // SECONDARY
    secondary: '#ccc7d8',
    'on-secondary': '#312e42',
    'secondary-container': '#4a4458',
    'on-secondary-container': '#e8def8',
    
    // TERTIARY
    tertiary: '#f0b6cd',
    'on-tertiary': '#492532',
    'tertiary-container': '#633b48',
    'on-tertiary-container': '#ffd8e4',
    
    // ERROR
    error: '#f2b8b5',
    'on-error': '#601410',
    'error-container': '#8c1d18',
    'on-error-container': '#f9dedc',
    
    // NEUTRAL
    neutral: '#e6e1e5',
    'on-neutral': '#313033',
    'neutral-variant': '#cac7d0',
    'on-neutral-variant': '#49454e',
    
    // SURFACE
    background: '#1c1b1f',
    surface: '#1c1b1f',
    'surface-dim': '#0f0d13',
    'surface-bright': '#36343b',
    'on-surface': '#e6e1e5',
    'on-surface-variant': '#cac7d0',
    
    // TEXT
    text: '#e6e1e5',
    'text-secondary': '#cac7d0',
    'text-tertiary': '#b0adb8',
    
    // OUTLINE
    outline: '#938f99',
    'outline-variant': '#49454e'
  },
  
  // ============================================================================
  // SPACING SYSTEM (4px base)
  // ============================================================================
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px'
  } as const,
  
  // ============================================================================
  // TYPOGRAPHY SCALE (Material Design 3)
  // ============================================================================
  
  typography: {
    'display-large': {
      fontSize: '57px',
      fontWeight: 400,
      lineHeight: '64px',
      letterSpacing: '0px'
    },
    'display-medium': {
      fontSize: '45px',
      fontWeight: 400,
      lineHeight: '52px',
      letterSpacing: '0px'
    },
    'display-small': {
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: '44px',
      letterSpacing: '0px'
    },
    'headline-large': {
      fontSize: '32px',
      fontWeight: 400,
      lineHeight: '40px',
      letterSpacing: '0px'
    },
    'headline-medium': {
      fontSize: '28px',
      fontWeight: 400,
      lineHeight: '36px',
      letterSpacing: '0px'
    },
    'headline-small': {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '32px',
      letterSpacing: '0px'
    },
    'title-large': {
      fontSize: '22px',
      fontWeight: 500,
      lineHeight: '28px',
      letterSpacing: '0px'
    },
    'title-medium': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0.15px'
    },
    'title-small': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '0.1px'
    },
    'body-large': {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.5px'
    },
    'body-medium': {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.25px'
    },
    'body-small': {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.4px'
    },
    'label-large': {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '0.1px'
    },
    'label-medium': {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '0.5px'
    },
    'label-small': {
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '0.5px'
    }
  } as const,
  
  // ============================================================================
  // SHAPE (Border Radius)
  // ============================================================================
  
  shape: {
    'corner-none': '0px',
    'corner-extra-small': '4px',
    'corner-small': '8px',
    'corner-medium': '12px',
    'corner-large': '16px',
    'corner-extra-large': '28px',
    'corner-full': '9999px'
  } as const,
  
  // ============================================================================
  // ELEVATION (Shadows - Material Design 3)
  // ============================================================================
  
  elevation: {
    'level-0': 'none',
    'level-1': '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
    'level-2': '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    'level-3': '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
    'level-4': '0px 15px 25px rgba(0, 0, 0, 0.15), 0px 10px 10px rgba(0, 0, 0, 0.05)',
    'level-5': '0px 20px 40px rgba(0, 0, 0, 0.2)'
  } as const,
  
  // Font family as per Material Design 3
  fontFamily: {
    body: 'Roboto, ui-sans-serif, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    // Alternative: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'
  }
}

export default materialTokens
