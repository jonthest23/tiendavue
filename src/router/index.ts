import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/IncioSesion.vue')
    },


    {
      path: '/ArticulosView',
      name: 'articulos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArticulosView.vue')
    },
    {
      path: '/CarritoView',
      name: 'carrito',
      component: () => import('../views/CarritoView.vue')
    }, 
    {
      path: '/UsuariosView',
      name: 'usuarios',
      component: () => import('../views/UsuariosView.vue')
    }
  ]
})

export default router
