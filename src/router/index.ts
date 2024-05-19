import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/index/index.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Index }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
