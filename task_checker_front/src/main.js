import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { Modal } from '@kouts/vue-modal'
import '@kouts/vue-modal/dist/vue-modal.css'
import './assets/main.css'

const app = createApp(App)
app.component('Modal', Modal);
app.use(createPinia())
app.use(router)
app.mount('#app')