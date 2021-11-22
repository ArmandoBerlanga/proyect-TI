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
    {
        path: '/politicas_privacidad',
        name: 'Privacidad',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/views-footer/Privacidad.vue')
    },
    {
        path: '/nosotros',
        name: 'AboutUs',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/views-footer/AboutUs.vue')
    },
    {
        path: '/ayuda',
        name: 'Ayuda',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/views-footer/Ayuda.vue')
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router