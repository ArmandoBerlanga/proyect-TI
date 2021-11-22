import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Inicio',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Inicio.vue')
    },
    {
        path: '/login',
        name: 'InicioSesion',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/InicioSesion.vue')
    },
    {
        path: '/clases',
        name: 'Clases',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Clases.vue')
    },
    {
        path: '/maestros',
        name: 'Maestros',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Maestros.vue')
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router