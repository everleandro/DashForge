import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    // cast to any because Vitest type definitions may differ between versions
    testTransformMode: ({
      web: [/\.vue$/]
    } as any)
  }
})
