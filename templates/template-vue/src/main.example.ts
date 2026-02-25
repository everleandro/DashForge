import { createApp } from 'vue'
import { createDashboardUI, createTheme } from 'dashforge-ui'
import 'dashforge-ui/dist/style.css'
import App from './App.vue'

// Option 1: Use built-in themes
// app.use(createDashboardUI({ theme: 'light' }))

// Option 2: Create custom theme
const myTheme = createTheme({
  name: 'my-brand',
  colors: {
    // Override default colors
    primary: '#ff6b35',
    'on-primary': '#ffffff',
    'primary-container': '#ffd4c4',
    'on-primary-container': '#4a0000',
    
    secondary: '#0077b6',
    'on-secondary': '#ffffff',
    'secondary-container': '#b3e5fc',
    'on-secondary-container': '#001f3f',
    
    // Add custom colors (optional)
    brand: '#8B5CF6',
    'on-brand': '#FFFFFF',
    'brand-container': '#DDD6FE',
    'on-brand-container': '#4C1D95',
  }
})

const app = createApp(App)

app.use(createDashboardUI({
  theme: myTheme,
  // Enable if you added custom colors and need utility classes (.bg-brand, etc.)
  generateUtilities: true
}))

app.mount('#app')
