import { createRouter, createWebHashHistory} from "vue-router";
import Home from '../components/views/home.vue'
import * as path from "path";

const routes = [
    {
        path: '/html',
        name:'html',
        component: ()=> import('../components/views/html-page.vue')
    },
    {
        path: '/css',
        name:'css',
        component: ()=> import('../components/views/css-page.vue')
    },
    {
        path: '/flex',
        name:'flex',
        component: ()=> import('../components/views/flex-page.vue')
    },
    {
        path: '/vue',
        name:'vue',
        component: ()=> import('../components/views/vue-page.vue'),
        children: [
            {
                path: 'basics01',
                name:'basics01',
                component: ()=> import('../components/views/vue-basics01-page.vue')
            },
            {
                path: 'basics02',
                name:'basics02',
                component: ()=> import('../components/views/vue-basics02-page.vue')
            },
            {
                path: 'router',
                name:'router',
                component: ()=> import('../components/views/vue-router-page.vue'),
                children:[
                    {
                        path: '/home',
                        name:'home',
                        components:{
                            default:()=> import('../components/views/home.vue'),
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
            },
        ]
    },
]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(), // 路由的模式 哈希模式#
    linkActiveClass:'active', // 路由样式
    routes // 路由配置
})

// 使用router.beforeEach 注册一个全局前置首位
router.beforeEach((to, from, next)=>{
    console.log(to) //to.path
    next() // 下一步操作
    // if(to.path !='/home'){
    //     next({path:'/home'})
    // }else {
    //     next()
    // }
})

// 导出
export default router
