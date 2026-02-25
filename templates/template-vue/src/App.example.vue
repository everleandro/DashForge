<template>
  <div class="app">
    <header>
      <h1>DashForge UI - Custom Theme Example</h1>
      
      <div class="theme-switcher">
        <label>Theme:</label>
        <select v-model="currentTheme" @change="switchTheme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="custom">Custom Brand</option>
        </select>
      </div>
    </header>

    <main>
      <section class="demo-section">
        <h2>Buttons</h2>
        <div class="button-group">
          <VButton color="primary">Primary</VButton>
          <VButton color="secondary">Secondary</VButton>
          <VButton color="success">Success</VButton>
          <VButton color="error">Error</VButton>
        </div>
      </section>

      <section class="demo-section">
        <h2>Custom Colors (with generateUtilities)</h2>
        <div class="color-demos">
          <!-- These classes are auto-generated from your custom theme -->
          <div class="bg-brand text-on-brand demo-card">
            <h3>.bg-brand</h3>
            <p>Custom brand color background</p>
          </div>
          
          <div class="demo-card border-brand" style="border: 2px solid;">
            <h3>.border-brand</h3>
            <p>Custom brand color border</p>
          </div>
          
          <div class="demo-card">
            <h3 class="text-brand">.text-brand</h3>
            <p>Custom brand color text</p>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <h2>CSS Variables</h2>
        <pre><code>{{ cssVariablesExample }}</code></pre>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VButton } from 'dashforge-ui'
import { 
  useTheme, 
  applyTheme, 
  createTheme,
  createDarkTheme 
} from 'dashforge-ui'

const { setTheme } = useTheme()
const currentTheme = ref<'light' | 'dark' | 'custom'>('light')

// Define custom theme
const customBrandTheme = createTheme({
  name: 'my-brand',
  colors: {
    primary: '#ff6b35',
    'on-primary': '#ffffff',
    'primary-container': '#ffd4c4',
    'on-primary-container': '#4a0000',
    
    brand: '#8B5CF6',
    'on-brand': '#FFFFFF',
    'brand-container': '#DDD6FE',
    'on-brand-container': '#4C1D95',
  }
})

const customDarkTheme = createDarkTheme({
  name: 'my-dark-brand',
  colors: {
    primary: '#ffa366',
    'on-primary': '#4a0000',
  }
})

function switchTheme() {
  if (currentTheme.value === 'custom') {
    applyTheme(customBrandTheme, { generateUtilities: true })
  } else if (currentTheme.value === 'dark') {
    applyTheme(customDarkTheme, { generateUtilities: true })
  } else {
    setTheme('light')
  }
}

const cssVariablesExample = `/* These CSS variables are auto-generated: */
background: var(--df-color-primary);
color: var(--df-color-on-primary);
padding: var(--df-spacing-md);
border-radius: var(--df-border-radius-md);`
</script>

<style scoped>
.app {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--df-color-outline);
}

.theme-switcher {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.theme-switcher select {
  padding: 0.5rem;
  border: 1px solid var(--df-color-outline);
  border-radius: var(--df-border-radius-sm);
  background: var(--df-color-surface);
  color: var(--df-color-on-surface);
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section h2 {
  color: var(--df-color-primary);
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.color-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.demo-card {
  padding: 1.5rem;
  border-radius: var(--df-border-radius-md);
  background: var(--df-color-surface);
}

pre {
  background: var(--df-color-surface-dim);
  padding: 1rem;
  border-radius: var(--df-border-radius-sm);
  overflow-x: auto;
}

code {
  color: var(--df-color-on-surface);
  font-family: 'Courier New', monospace;
}
</style>
