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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router