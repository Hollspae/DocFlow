import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../../components/Auth.vue';

const routes = [
        {
        path: '/',
        component: Auth,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
