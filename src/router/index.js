import { createRouter, createWebHistory } from 'vue-router'
import * as Auth from '@/utils/auth.js';

import HomeView from '@/views/HomeView.vue'
import ElencoView from '@/views/ElencoView.vue'
import InserimentoView from '@/views/InserimentoView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'
import { useSessionStore } from '@/stores/session'

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
			component: InserimentoView,
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
		},
		{
			path: '/profilo',
			name: 'profilo',
			component: ProfileView,
			meta: { requiresAuth: true }
		}		
  ],
})


router.beforeEach(async (to, from, next) => {
	const sessionStore = useSessionStore();

	if(to.matched.some(record => record.meta.requiresAuth)) {
		const userID = sessionStore.getUser();
		const data = await Auth.isLogged();

		if(userID === null || userID !== data.userID) {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		} else {
			next()
		}
	} else {
		next()
	}
})


export default router
