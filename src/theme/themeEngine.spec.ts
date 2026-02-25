/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { generateCSSVars, generateUtilityClasses, applyTheme } from './themeEngine'
import { lightTheme } from './themes'

const sampleTheme = {
  colors: {
    primary: '#111111',
    'on-primary': '#ffffff',
    'primary-container': '#222222',
    'on-primary-container': '#ffffff',
    background: '#fafafa',
    'on-background': '#111111',
    'background-container': '#fafafa',
    'on-background-container': '#111111',
    surface: '#ffffff',
    'on-surface': '#000000',
    'surface-container': '#ffffff',
    'on-surface-container': '#000000',
    text: '#000000',
    'on-text': '#ffffff',
    'text-container': '#000000',
    'on-text-container': '#ffffff'
  },
  tokens: {
    'color-primary': '#111111',
    'color-on-primary': '#ffffff'
  }
}

describe('themeEngine', () => {
  beforeEach(() => {
    // Clean up any existing utility style elements
    const existingStyles = document.querySelectorAll('[data-dashforge-utilities]')
    existingStyles.forEach(el => el.remove())
    
    // Clear inline styles on root
    document.documentElement.removeAttribute('style')
  })

  afterEach(() => {
    // Clean up after tests
    const existingStyles = document.querySelectorAll('[data-dashforge-utilities]')
    existingStyles.forEach(el => el.remove())
    document.documentElement.removeAttribute('style')
  })

  it('generates CSS vars for basic tokens and colors', () => {
    const vars = generateCSSVars(sampleTheme as any)
    expect(vars['--df-color-primary']).toBe('#111111')
    expect(vars['--df-color-on-primary']).toBe('#ffffff')
    expect(vars['--df-color-background']).toBe('#fafafa')
  })

  it('generates CSS vars from built-in lightTheme', () => {
    const vars = generateCSSVars(lightTheme)
    expect(vars['--df-color-primary']).toBeDefined()
    expect(vars['--df-color-on-primary']).toBeDefined()
    expect(vars['--df-color-background']).toBeDefined()
  })

  it('generates utility classes dynamically', () => {
    const theme = {
      colors: {
        'custom-brand': '#ff6b35',
        'on-custom-brand': '#ffffff',
        primary: '#00af67'
      }
    }

    generateUtilityClasses(theme as any)

    // Check that style element was created
    const styleEl = document.querySelector('[data-dashforge-utilities]')
    expect(styleEl).toBeTruthy()
    expect(styleEl?.tagName).toBe('STYLE')

    // Check that CSS rules were generated
    const content = styleEl?.textContent || ''
    expect(content).toContain('.bg-custom-brand')
    expect(content).toContain('.text-custom-brand')
    expect(content).toContain('.border-custom-brand')
    expect(content).toContain('var(--df-color-custom-brand,#ff6b35)')
  })

  it('replaces existing utility classes when called again', () => {
    const theme1 = {
      colors: {
        color1: '#111111'
      }
    }

    const theme2 = {
      colors: {
        color2: '#222222'
      }
    }

    // First call
    generateUtilityClasses(theme1 as any)
    let styleEl = document.querySelector('[data-dashforge-utilities]')
    expect(styleEl).toBeTruthy()
    const firstContent = styleEl?.textContent || ''
    expect(firstContent).toContain('color1')
    expect(firstContent).not.toContain('color2')

    // Second call with replace option
    generateUtilityClasses(theme2 as any, { replace: true })
    styleEl = document.querySelector('[data-dashforge-utilities]')
    expect(styleEl).toBeTruthy()
    const secondContent = styleEl?.textContent || ''
    expect(secondContent).not.toContain('color1')
    expect(secondContent).toContain('color2')

    // Should only have one style element
    const styleElements = document.querySelectorAll('[data-dashforge-utilities]')
    expect(styleElements.length).toBe(1)
  })

  it('applyTheme sets CSS variables on document root', () => {
    const theme = {
      colors: {
        primary: '#test123'
      }
    }

    applyTheme(theme as any)

    const primaryVar = document.documentElement.style.getPropertyValue('--df-color-primary')
    expect(primaryVar).toBe('#test123')
  })

  it('applyTheme generates utilities when option is enabled', () => {
    const theme = {
      colors: {
        'custom-color': '#abc123'
      }
    }

    applyTheme(theme as any, { generateUtilities: true })

    // Check CSS variables
    const customVar = document.documentElement.style.getPropertyValue('--df-color-custom-color')
    expect(customVar).toBe('#abc123')

    // Check utility classes were generated
    const styleEl = document.querySelector('[data-dashforge-utilities]')
    expect(styleEl).toBeTruthy()
    const content = styleEl?.textContent || ''
    expect(content).toContain('.bg-custom-color')
    expect(content).toContain('.text-custom-color')
  })

  it('applyTheme does not generate utilities by default', () => {
    const theme = {
      colors: {
        primary: '#test'
      }
    }

    applyTheme(theme as any)

    // Should set CSS variables
    const primaryVar = document.documentElement.style.getPropertyValue('--df-color-primary')
    expect(primaryVar).toBe('#test')

    // Should not generate utility classes
    const styleEl = document.querySelector('[data-dashforge-utilities]')
    expect(styleEl).toBeNull()
  })
})

