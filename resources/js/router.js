import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';


const routes = [
    { name: 'home', path: '/', component: Home },
    { name: 'login', path: '/login', component: Login },
    { name: 'dashboard', path: '/dashboard', component: Dashboard},
    //{ path: '*', redirect: "/" }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
