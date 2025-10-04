import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../../components/Auth.vue'
import UserPanel from '../../components/UserPanel/UserPanel.vue'
import Incoming from '../../components/UserPanel/UserIncoming.vue'
import Outgoing from '../../components/UserPanel/UserOutgoing.vue'
import Setting from '../../components/UserPanel/UserSetting.vue'
import AdminPanel from '../../components/Admin/AdminPanel.vue'
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
    {
        path: '/admin-panel',
        name: 'admin-panel',
        component: AdminPanel
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
