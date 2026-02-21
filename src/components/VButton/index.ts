import VButton from './VButton.vue'
import type { App } from 'vue'

VButton.install = (app: App) => {
  app.component('VButton', VButton)
}

export default VButton
