import { createApp } from 'vue'
import App from './App.vue'
import { createDashboardUI } from '../src/plugin/createDashboardUI'
import '../src/styles/index.scss'

const app = createApp(App)
app.use(createDashboardUI({ theme: 'light' }))
app.mount('#app')
