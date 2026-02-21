<template>
  <div style="padding: 2rem">
    <h1>Dashforge UI - Playground</h1>
    <div style="margin: 1rem 0">
      <VButton variant="primary" @click="onClick">Primary</VButton>
      <VButton variant="secondary" size="sm" style="margin-left: .5rem">Secondary</VButton>
      <VButton variant="text" style="margin-left: .5rem">Text</VButton>
    </div>

    <div style="margin-top:1rem">
      <label>Theme:</label>
      <select v-model="theme" @change="onThemeChange">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VButton from '../src/components/VButton'
import { useTheme } from '../src/composables/useTheme'

export default defineComponent({
  name: 'PlaygroundApp',
  components: { VButton },
  setup() {
    const theme = ref<'light'|'dark'>('light')
    const { setTheme } = useTheme()

    function onThemeChange() {
      setTheme(theme.value)
      document.documentElement.setAttribute('data-theme', theme.value)
    }

    function onClick() { alert('clicked') }

    return { theme, onThemeChange, onClick }
  }
})
</script>

<style>
select { margin-left: .5rem }
</style>
