import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router) // ⭐ INI YANG PENTING
app.mount('#app')

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
  offset: 100
})
