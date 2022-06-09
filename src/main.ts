import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import elementPlus from './plugins/element-plus'
// 全局样式
import './styles/index.scss'

const app = createApp(App)
app.use(elementPlus)
app.use(createPinia())
app.use(router)
app.mount('#app')
