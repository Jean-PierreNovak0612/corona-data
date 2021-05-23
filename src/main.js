import { createApp } from 'vue';
import { createWebHashHistory, createRouter } from 'vue-router'

import App from './App';
import MainPage from './components/MainPage'
import DataList from './components/DataList'
import store from './store'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/status',
        component: DataList
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})



createApp(App).use(store).use(router).mount('#app')