import {createRouter,RouteRecordRaw,createWebHashHistory} from 'vue-router'
const routes:Array<RouteRecordRaw>=[{
    path:'/'
}]

const router =createRouter({
    history:createWebHashHistory(),
    routes
})
export default router