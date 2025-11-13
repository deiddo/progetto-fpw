import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ElencoView from '@/views/ElencoView.vue'
import InserimentoView from '@/views/InserimentoView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		}, 
		{
			path: '/elenco',
			name: 'elenco',
			component: ElencoView
		}, 
		{
			path: '/inserimento',
			name: 'inserimento',
			component: InserimentoView
		}, 
		{
			path: '/about',
			name: 'about',
			component: AboutView
		}, 
		{
			path: '/login',
			name: 'login',
			component: LoginView
		}		
  ],
})

export default router
