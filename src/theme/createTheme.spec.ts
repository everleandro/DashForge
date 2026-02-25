/**
 * @vitest-environment node
 */
import { describe, it, expect } from 'vitest'
import { createTheme, createDarkTheme } from './createTheme'
import { lightTheme, darkTheme } from './themes'

describe('createTheme', () => {
  it('should create a theme with custom colors and default tokens', () => {
    const customTheme = createTheme({
      name: 'custom',
      colors: {
        primary: '#ff0000',
        'on-primary': '#ffffff'
      }
    })

    expect(customTheme.name).toBe('custom')
    expect(customTheme.colors.primary).toBe('#ff0000')
    expect(customTheme.colors['on-primary']).toBe('#ffffff')
    // Should keep other colors from base theme
    expect(customTheme.colors.secondary).toBe(lightTheme.colors.secondary)
    // Should use default tokens
    expect(customTheme.spacing).toBe(lightTheme.spacing)
    expect(customTheme.typography).toBe(lightTheme.typography)
    expect(customTheme.shape).toBe(lightTheme.shape)
    expect(customTheme.elevation).toBe(lightTheme.elevation)
  })

  it('should merge colors with base theme', () => {
    const customTheme = createTheme({
      colors: {
        primary: '#custom'
      }
    })

    expect(customTheme.colors.primary).toBe('#custom')
    expect(customTheme.colors.secondary).toBeDefined()
    expect(customTheme.colors.error).toBeDefined()
  })

  it('should allow custom spacing tokens', () => {
    const customTheme = createTheme({
      spacing: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '32px',
        '2xl': '64px'
      }
    })

    expect(customTheme.spacing?.xs).toBe('2px')
    expect(customTheme.spacing?.['2xl']).toBe('64px')
  })

  it('should fallback to base theme name if not provided', () => {
    const customTheme = createTheme({
      colors: {
        primary: '#test'
      }
    })

    expect(customTheme.name).toBe(lightTheme.name)
  })

  it('should allow overriding base theme', () => {
    const customDarkTheme = createTheme(
      {
        name: 'custom-dark',
        colors: {
          primary: '#aabbcc'
        }
      },
      darkTheme
    )

    expect(customDarkTheme.name).toBe('custom-dark')
    expect(customDarkTheme.colors.primary).toBe('#aabbcc')
    expect(customDarkTheme.colors.background).toBe(darkTheme.colors.background)
  })

  it('should merge custom tokens', () => {
    const customTheme = createTheme({
      tokens: {
        'custom-var': '10px'
      }
    })

    expect(customTheme.tokens?.['custom-var']).toBe('10px')
  })
})

describe('createDarkTheme', () => {
  it('should create a theme based on dark theme', () => {
    const customDarkTheme = createDarkTheme({
      name: 'my-dark',
      colors: {
        primary: '#a0d8ff'
      }
    })

    expect(customDarkTheme.name).toBe('my-dark')
    expect(customDarkTheme.colors.primary).toBe('#a0d8ff')
    // Should inherit from dark theme
    expect(customDarkTheme.colors.background).toBe(darkTheme.colors.background)
  })

  it('should use dark theme as base', () => {
    const customDarkTheme = createDarkTheme({
      colors: {
        primary: '#test'
      }
    })

    // Background should match dark theme, not light theme
    expect(customDarkTheme.colors.background).toBe(darkTheme.colors.background)
    expect(customDarkTheme.colors.background).not.toBe(lightTheme.colors.background)
  })
})
