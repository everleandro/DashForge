import { describe, it, expect } from 'vitest'
import { generateCSSVars } from './themeEngine'
import { lightTheme } from './themes'

const sampleTheme = {
  colors: {
    primary: { base: '#111111', 'on-base': '#ffffff' },
    secondary: { base: '#222222' },
    background: '#fafafa',
    surface: '#ffffff',
    text: '#000000'
  },
  tokens: {
    'color-primary': '#111111',
    'color-on-primary': '#ffffff'
  }
}

describe('themeEngine', () => {
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
})
