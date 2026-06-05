import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import Dashboard from '@/components/pages/Dashboard.vue';
import About from '@/components/pages/About.vue';


import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/SignIn',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/About',
        name: 'About',
        component: About,
    },
    { path: '/:pathMatch(.*)*', redirect: { name: 'Dashboard' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;