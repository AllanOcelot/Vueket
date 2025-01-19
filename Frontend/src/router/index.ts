import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Games from '../views/Games.vue'

// Define your routes with TypeScript types
const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/games', name: 'Games', component: Games },
];

// Create the router instance
// Create and export the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;