import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../../components/Auth.vue'
import UserPanel from '../../components/UserPanel.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Auth
    },
    {
        path: '/user-panel',
        name: 'user-panel',
        component: UserPanel
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
