import VIcon from './VIcon.vue'
import type { App } from 'vue'

VIcon.install = (app: App) => {
  app.component('VIcon', VIcon)
}

export default VIcon
