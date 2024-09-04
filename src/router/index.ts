import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tab1'
    },
    {
        path: '/tab1',
        component: () => import('@/views/Tab1Page.vue'),
    },
    {
        path: '/tab1/subpage',
        component: () => import('@/views/Tab1SubPage.vue'),
    },
    {
        path: '/tab2',
        component: () => import('@/views/Tab2Page.vue'),
    },
    {
        path: '/tab2/subpage',
        component: () => import('@/views/Tab2SubPage.vue'),
    },
    {
        path: '/tab3',
        component: () => import('@/views/Tab3Page.vue'),
    },
    {
        path: '/tab3/subpage',
        component: () => import('@/views/Tab3SubPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
