<template>
  <div style="padding: 2rem">
    <h1>Dashforge UI - Playground</h1>

    <div style="margin: 2rem 0">
      <h3>Colores</h3>
      <div style="display: flex; gap: 1rem; align-items: center">
        <VButton color="primary" ripple loading @click="onClick"
          >Primary</VButton
        >
        <VButton color="secondary" ripple @click="onClick">Secondary</VButton>
        <VButton color="success" disabled>Success</VButton>
        <VButton color="warning" @click="onClick">Warning</VButton>
        <VButton color="error" @click="onClick">Error</VButton>
      </div>
    </div>

    <div style="margin: 2rem 0">
      <h3>Tamaños</h3>
      <div style="display: flex; gap: 1rem; align-items: center">
        <VButton color="primary" size="x-small" @click="onClick"
          >X-Small</VButton
        >
        <VButton size="small" @click="onClick">Small</VButton>
        <VButton @click="onClick">Default</VButton>
        <VButton size="large" @click="onClick">Large</VButton>
        <VButton
          color="primary"
          size="x-large"
          :append-icon="arrowRight"
          @click="onClick"
          >X-Large</VButton
        >
      </div>
    </div>

    <div style="margin: 2rem 0">
      <h3>Variantes</h3>
      <div style="display: flex; gap: 1rem; align-items: center">
        <VButton color="secondary" outlined @click="onClick">Outlined</VButton>
        <VButton color="success" text @click="onClick">Text</VButton>
        <VButton color="warning" depressed @click="onClick">Depressed</VButton>
        <VButton :append-icon="arrowRight">asd</VButton>
      </div>
    </div>

    <div style="margin: 2rem 0">
      <h3>Iconos</h3>
      <div style="display: flex; gap: 1rem; align-items: center">
        <VIcon :icon="arrowLeft" />
        <VIcon :icon="arrowRight" />
        <VIcon :icon="arrowDown" size="large" />
        <VIcon :icon="arrowUp" size="x-large" />
        <VIcon :icon="chevronDown" size="small" />
        <VIcon :icon="clear" color="error" />
      </div>
    </div>

    <div style="margin-top: 1rem">
      <label>Theme:</label>
      <select v-model="theme" @change="onThemeChange">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="custom">Custom Brand (with dynamic utilities)</option>
      </select>
    </div>

    <div v-if="theme === 'custom'" style="margin: 2rem 0; padding: 1rem; background: #f0f0f0; border-radius: 8px;">
      <h3>Dynamic Utility Classes Demo</h3>
      <p>These classes (.bg-brand, .bg-custom-accent) are generated at runtime:</p>
      <div style="display: flex; gap: 1rem; margin-top: 1rem; flex-wrap: wrap;">
        <div class="bg-brand text-on-brand" style="padding: 1rem; border-radius: 4px;">
          .bg-brand + .text-on-brand
        </div>
        <div class="bg-custom-accent text-on-custom-accent" style="padding: 1rem; border-radius: 4px;">
          .bg-custom-accent
        </div>
        <div style="padding: 1rem; border: 2px solid;" class="border-brand">
          .border-brand
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VButton from "../src/components/VButton";
import VIcon from "../src/components/VIcon";
import { iconFactory } from "../src/icons";
import { useTheme } from "../src/composables/useTheme";
import { createTheme, applyTheme } from "../src";

// Custom theme with new colors not in base tokens
const customBrandTheme = createTheme({
  name: 'custom-brand',
  colors: {
    primary: '#ff6b35',
    'on-primary': '#ffffff',
    'primary-container': '#ffd4c4',
    'on-primary-container': '#4a0000',
    
    secondary: '#0077b6',
    'on-secondary': '#ffffff',
    'secondary-container': '#b3e5fc',
    'on-secondary-container': '#001f3f',
    
    // New custom colors - will generate .bg-brand, .text-brand, etc.
    brand: '#8B5CF6',
    'on-brand': '#FFFFFF',
    'brand-container': '#DDD6FE',
    'on-brand-container': '#4C1D95',
    
    'custom-accent': '#10B981',
    'on-custom-accent': '#FFFFFF',
    'custom-accent-container': '#D1FAE5',
    'on-custom-accent-container': '#065F46',
  } as any
})

export default defineComponent({
  name: "PlaygroundApp",
  components: { VButton, VIcon },
  setup() {
    const theme = ref<"light" | "dark" | "custom">("light");
    const { setTheme } = useTheme();

    function onThemeChange() {
      if (theme.value === 'custom') {
        // Apply custom theme with dynamic utility class generation
        applyTheme(customBrandTheme, { generateUtilities: true })
      } else {
        setTheme(theme.value);
      }
      document.documentElement.setAttribute("data-theme", theme.value);
    }

    function onClick() {
      // alert("clicked");
    }

    return {
      theme,
      onThemeChange,
      onClick,
      arrowLeft: iconFactory.arrowLeft,
      arrowRight: iconFactory.arrowRight,
      arrowDown: iconFactory.arrowDown,
      arrowUp: iconFactory.arrowUp,
      chevronDown: iconFactory.chevronDown,
      clear: iconFactory.clear,
    };
  },
});
</script>
