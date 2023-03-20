import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

router.beforeEach((to) => {
    const main = useMainStore(pinia)
  })

app.mount('#app')
