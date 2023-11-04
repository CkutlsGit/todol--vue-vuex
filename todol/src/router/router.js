import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: homePage, name: 'home'},
        { path: '/todo', component: ToDoPage, name: 'todol' }
    ]
})