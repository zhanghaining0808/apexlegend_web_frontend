// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/legends',
        name: 'Legends',
        component: () => import('./pages/Legends.vue'),
        meta: { requiresAuth: true },
        beforeEnter: (to, from, next) => {
            console.log("进入传奇页面的检查")
            next()
        }
    },
    {
        path: '/weapon',
        name: 'Weapon',
        component: () => import('./pages/Weapon.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () => import('./pages/Map.vue'),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('./pages/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    const isLoggedin = localStorage.getItem("userToken")

    if (to.meta.requiresAuth && !isLoggedin) {
        next("/login")
    } else {
        next()
    }
})
export default router