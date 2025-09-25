import { createRouter, createWebHistory } from 'vue-router';
import DocumentList from '../../components/DocumentList.vue';
import Auth from '../../components/Auth.vue';

const routes = [
        {
        path: '/',
        component: Auth,
    },
    {
        path: '/docs',
        component: DocumentList,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
