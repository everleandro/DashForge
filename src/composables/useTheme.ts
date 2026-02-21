import { inject, computed } from 'vue'
import { Theme, PartialTheme } from '../types/theme'
import { applyTheme, mergeThemes } from '../theme/themeEngine'
import { lightTheme, darkTheme } from '../theme/themes'
import { DashboardUIKey } from '../plugin/createDashboardUI'

export function useTheme() {
  const ctx: any = inject(DashboardUIKey, null)

  function setTheme(theme: Theme | PartialTheme | 'light' | 'dark') {
    let resolved: Theme
    if (theme === 'light') resolved = lightTheme
    else if (theme === 'dark') resolved = darkTheme
    else if ((theme as Theme).colors) resolved = mergeThemes(lightTheme, theme as PartialTheme)
    else resolved = mergeThemes(lightTheme, theme as PartialTheme)

    applyTheme(resolved)
    if (ctx) ctx.theme = resolved
    return resolved
  }

  const current = computed<Theme | null>(() => (ctx ? ctx.theme : null))

  return {
    current,
    setTheme
  }
}
