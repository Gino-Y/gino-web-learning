import { createApp } from 'vue'
import App from './App.vue' // 导入入口组件
import router from "./router/index"; // 导入路由
import {createPinia} from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist' // keep data
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersist) // use keep data
// pinia.use(piniaPluginPersistedstate) // use keep data
createApp(App).use(router).use(pinia).mount('#app')
