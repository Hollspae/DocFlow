import { createRouter, createWebHistory } from 'vue-router';
import DocumentList from '../../components/DocumentList.vue';


const routes = [
    {
        path: '/',
        component: DocumentList,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
