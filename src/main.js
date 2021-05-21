import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router'

import MainPage from './components/MainPage'

const routes = [
    {
        path: '/',
        component: MainPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

import App from './App';

createApp(App).use(router).mount('#app')