/**
 * Button Component Tokens
 * Button specific design tokens
 */

import type { ButtonTokens } from '../types'

export const btn: ButtonTokens = {
  states: {
    focus: 0.12,
    hover: 0.08,
    active: 0.12,
  },
  fontSizes: {
    'x-small': '0.6875rem',
    small: '0.75rem',
    default: '0.875rem',
    large: '1rem',
    'x-large': '1.125rem',
  },
  height: {
    'x-small': '2rem',
    small: '2.25rem',
    default: '2.5rem',
    large: '3rem',
    'x-large': '3.5rem',
  },
  // Button styles (Border & Shape)
  borderRadius: '4px',
  roundedBorderRadius: '28px',
  borderStyle: 'solid',
  borderWidth: '1px',
  // Typography
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  // Transition
  transitionDuration: '0.28s',
}
