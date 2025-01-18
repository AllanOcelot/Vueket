import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '../views/Home.vue';

// Define your routes with TypeScript types
const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: Home },
];

// Create the router instance
// Create and export the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;