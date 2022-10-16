import { createApp } from 'vue'
import App from './App.vue' // 导入入口组件
import router from "./router/index"; // 导入路由
import {createPinia} from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist' // keep data

const pinia = createPinia()
pinia.use(piniaPluginPersist) // use keep data

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
// createApp(App).use(router).use(pinia).mount('#app')
