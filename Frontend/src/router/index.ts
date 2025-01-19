import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home         from  '@/views/Home.vue'
import About        from  '@/views/About.vue'
import Games        from  '@/views/Games.vue'
  import GameSingle from  '@/views/Single/Game.vue'
import Bounties     from  '@/views/Bounties.vue'
import Login        from  '@/views/Login.vue'
import Register     from  '@/views/Register.vue'


// Define your routes with TypeScript types
const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/games', name: 'Games', component: Games },
      { path: '/games/:id', name: 'GameSingle', component: GameSingle },
    { path: '/bounties', name: 'Bounties', component: Bounties },


    { path: '/login', name: 'Login', component: Login},
    { path: '/register', name: 'Register', component: Register}
];

// Create the router instance
// Create and export the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;