import { createApp } from 'vue'
import App from './App.vue' // 导入入口组件
import router from "./router/index"; // 导入路由
import {createPinia} from "pinia";

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
