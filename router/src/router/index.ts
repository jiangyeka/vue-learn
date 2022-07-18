import {createRouter,RouteRecordRaw,createWebHashHistory,createWebHistory,} from 'vue-router'
import Login from '../components/Login.vue'
const routes:Array<RouteRecordRaw>=[{
    path:'/login',
    name:"login",
    component:Login,
    meta:{
        title:"登录页"
    }
},{
    path:'/home',
    name:'home',
    component:import('../components/MyHome.vue')
}]

const router =createRouter({
    history:createWebHistory(),
    scrollBehavior:(to,from,savePosition)=>{
        console.log(savePosition);
        if(savePosition){
            return savePosition
        }else{
            return {
                top:0,
                left:0
            }
        }
    },
    routes
})
export default router