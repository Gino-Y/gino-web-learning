import { createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name:'helloworld',
        component: ()=> import('../components/HelloWorld.vue')
    },
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
                path: 'component',
                name:'component',
                component: ()=> import('../components/views/vue-component-page.vue')
            },
            {
                path: 'axios',
                name:'axios',
                component: ()=> import('../components/views/vue-axios-page.vue')
            },
            {
                path: 'router',
                name:'router',
                component: ()=> import('../components/views/vue-router-page.vue'),
                children:[
                    {
                        path: 'home',
                        name:'home',
                        components:{
                            default:()=> import('../components/routers/home.vue'),
                            axios:()=> import('../components/vue/vueadv-axios.vue'),
                            computed:()=> import('../components/vue/vueadv-computed.vue'),
                        }
                    },
                    {
                        path: 'manage',
                        name:'manage',
                        component: ()=> import('../components/routers/manage.vue')
                    },
                    {
                        path: 'list/:id', // 变量
                        name:'list',
                        component: ()=> import('../components/routers/list.vue')
                    },
                    {
                        path: 'guard',
                        name:'guard',
                        component: ()=> import('../components/routers/guard.vue'),
                        beforeEnter:(to, from, next)=>{
                            if(sessionStorage.getItem('sign')){
                                next()
                            }else {
                                alert('请签到')
                                // next() // 提示后允许进入，添加next()，不允许则不需要添加
                            }
                        }
                    },
                    {
                        path: 'user',
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
            {
                path: 'pinia',
                name:'pinia',
                component: ()=> import('../components/views/vue-pinia-page.vue')
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
