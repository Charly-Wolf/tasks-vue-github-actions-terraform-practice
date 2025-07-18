import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './routes'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).mount('#app')
