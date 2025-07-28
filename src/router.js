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
        component: () => import('./pages/Legends.vue')
    },
    {
        path: '/weapon',
        name: 'Weapon',
        component: () => import('./pages/Weapon.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () => import('./pages/Map.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('./pages/Login.vue')
    },
    {
        path: "/sign_up",
        name: "Sign_up",
        component: () => import('./pages/Sign_up.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router