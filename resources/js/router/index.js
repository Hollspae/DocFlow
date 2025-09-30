import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../../components/Auth.vue'
import UserPanel from '../../components/UserPanel/UserPanel.vue'
import Incoming from '../../components/UserPanel/Incoming.vue'
import Outgoing from '../../components/UserPanel/Outgoing.Vue'
import Setting from '../../components/UserPanel/Setting.vue'
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
    },
    {
        path: '/user-panel/incoming',
        name: 'incoming',
        component: Incoming
    },
    {
        path: '/user-panel/outgoing',
        name: 'Outgoing',
        component: Outgoing
    },
    {
        path: '/user-panel/settings',
        name: 'Setting',
        component: Setting
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
