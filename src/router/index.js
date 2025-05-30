import { createRouter, createWebHistory } from 'vue-router';
import SignupPage from '../views/SignupPage.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  { path: '/signup', component: SignupPage },
  { path: '/login', component: LoginPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
