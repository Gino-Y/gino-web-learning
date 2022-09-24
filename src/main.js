import { createApp } from 'vue'
import App from './App.vue' // 导入入口组件
import router from "./router/index"; // 导入路由

createApp(App).use(router).mount('#app')
