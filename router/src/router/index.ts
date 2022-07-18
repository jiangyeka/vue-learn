import {createRouter,RouteRecordRaw,createWebHashHistory} from 'vue-router'
import Login from '../components/Login.vue'
const routes:Array<RouteRecordRaw>=[{
    path:'/login',
    component:Login
},{
    path:'/home',
    component:import('../components/MyHome.vue')
}]

const router =createRouter({
    history:createWebHashHistory(),
    routes
})
export default router