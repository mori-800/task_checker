import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue';
import Home from '../components/Home.vue';
import { auth, onAuthStateChanged } from '../firebase.js';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;