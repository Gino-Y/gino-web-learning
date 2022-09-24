import { createRouter, createWebHashHistory} from "vue-router";
import Home from '../components/views/home.vue'
import * as path from "path";

const routes = [
    {
        path: '/home',
        name:'home',
        components:{
            default:()=> Home,
            axios:()=> import('../components/vueadv-axios.vue'),
            computed:()=> import('../components/vueadv-computed.vue'),
        }
    },
    {
        path: '/manage',
        name:'manage',
        component: ()=> import('../components/views/manage.vue')
    },
    {
        path: '/list/:id', // 变量
        name:'list',
        component: ()=> import('../components/views/list.vue')
    },
    {
        path: '/user',
        name:'user',
        component: ()=> import('../components/user/index.vue'),
        children:[
            {
            path: 'userInfo', // 子路由可以直接写url字段，并无需写'/'，会默认会正常继承父路由url字段
            name: 'userInfo',
            component: ()=> import('../components/user/userInfo.vue'),
            },
            {
            path: 'userManage',
            name: 'userManage',
            component: ()=> import('../components/user/userManage.vue'),
            },
        ]
    }
]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(), // 路由的模式 哈希模式#
    linkActiveClass:'active', // 路由样式
    routes // 路由配置
})

// 导出
export default router
