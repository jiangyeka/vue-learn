import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/component/Welcome'
import Login from '@/component/Login'
import Home from '@/component/Home'
const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        redirect: '/welcome',
        children: [
            {
                path: "welcome",
                name: "welcome",
                meta: {
                    title: '欢迎页'
                },
                component: Welcome
            },
            {
                path: "login",
                name: "login",
                meta: {
                    title: '登录页'
                },
                component: Login
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router