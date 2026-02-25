/**
 * Elevation Tokens (Shadows)
 * Material Design 3 shadow system
 */

import type { ElevationTokens } from './types'

export const elevation: ElevationTokens = {
  'level-0': 'none',
  'level-1':
    '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
  'level-2':
    '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
  'level-3':
    '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
  'level-4':
    '0px 15px 25px rgba(0, 0, 0, 0.15), 0px 10px 10px rgba(0, 0, 0, 0.05)',
  'level-5': '0px 20px 40px rgba(0, 0, 0, 0.2)',
} as const
