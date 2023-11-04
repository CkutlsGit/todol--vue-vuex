import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue'
import TodoPage from "@/components/TodoPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home'},
        { path: '/todo', component: TodoPage, name: 'todol' }
    ]
})