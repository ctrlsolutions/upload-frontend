import './assets/main.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiCaretDownFill, FcGoogle, FaCalendarAlt} from 'oh-vue-icons/icons'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

addIcons(BiCaretDownFill, FcGoogle, FaCalendarAlt)

const app = createApp(App)

app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')