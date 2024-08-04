import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  { //2 - Generar las rutas que se requieran según los ítems ya establecidos en el menú de navegación. 
    //Estas rutas van a cargar los componentes a través de carga controlada o lazy load. (2 Puntos) 
    path: '/products',
    name: 'products',
    component: ProductsView,
    props: (route)=> {
      return {
        nombre: 'Charquicán',
        descripcion: 'Exquisito, ideal para colación, disfrutar con un café o en un recreo.',
        precio:'1390',
        cantidad:'1',
      };
    },
  },
  { //2 - Generar las rutas que se requieran según los ítems ya establecidos en el menú de navegación. 
    //Estas rutas van a cargar los componentes a través de carga controlada o lazy load. (2 Puntos) 
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
