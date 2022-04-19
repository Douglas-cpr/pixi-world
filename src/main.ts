import { createApp } from 'vue'
import Toast from 'vue-toastification'

import App from '@/App.vue'
import router from '@/router'


import "vue-toastification/dist/index.css"
import 'animate.css'
import '@/assets/styles/variables.css'
import '@/assets/styles/global.css'

createApp(App)
  .use(router)
  .use(Toast)
  .mount('#app')
