import {RouteRecordRaw, createWebHashHistory, createRouter} from 'vue-router'
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'login',
        component:()=>import('@/page/login/login.vue')
    },
    {
        path:'/addAcount',
        name:'addAcount',
        component:()=>import('@/page/addAcount/addAcount.vue')
    }
]
const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
})
export default  router