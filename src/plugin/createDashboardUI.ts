import { App, Plugin, reactive, inject, provide } from 'vue'
import { Theme, PartialTheme } from '../types/theme'
import { applyTheme, mergeThemes } from '../theme/themeEngine'
import { lightTheme, darkTheme } from '../theme/themes'

export interface DashboardUIOptions {
  theme?: PartialTheme | 'light' | 'dark'
  /**
   * Automatically generate utility classes (.bg-*, .text-*, .border-*) for custom theme colors
   * @default false
   */
  generateUtilities?: boolean
}

export type DashboardUIState = {
  theme: Theme
  generateUtilities: boolean
}

export const DashboardUIKey = Symbol('DashboardUI')

export function createDashboardUI(options: DashboardUIOptions = {}): Plugin {
  const initialTheme: Theme = typeof options.theme === 'string'
    ? (options.theme === 'dark' ? darkTheme : lightTheme)
    : mergeThemes(lightTheme, options.theme || {})

  const state = reactive<DashboardUIState>({
    theme: initialTheme,
    generateUtilities: options.generateUtilities ?? false
  })

  // Apply initial theme CSS variables and utility classes if enabled
  applyTheme(state.theme, { generateUtilities: state.generateUtilities })

  return {
    install(app: App) {
      provide(DashboardUIKey, state)
      // expose on app.config.globalProperties for convenience
      ;(app.config.globalProperties as any).$dashboardUI = state
    }
  }
}

export function useDashboardUI(): DashboardUIState {
  const ctx = inject<DashboardUIState | undefined>(DashboardUIKey)
  if (!ctx) throw new Error('createDashboardUI plugin is not installed')
  return ctx
}
