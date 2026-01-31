import { createRouter, createWebHistory } from 'vue-router'
import * as Auth from '@/utils/auth.js';


// Importazione componenti per ciascuna View del sito
import HomeView from '@/views/HomeView.vue'
import ElencoView from '@/views/ElencoView.vue'
import InserimentoView from '@/views/InserimentoView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import ProfileView from '@/views/ProfileView.vue'

import { useSessionStore } from '@/stores/session'

// Creazione del router con tutte le route
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		}, 
		{
			path: '/elenco',
			name: 'elenco',
			component: ElencoView,
			meta: { requiresAuth: true },			// La pagina è accessibile solo dopo l'autenticazione
		}, 
		{
			path: '/inserimento',
			name: 'inserimento',
			component: InserimentoView,
			meta: { requiresAuth: true },
		}, 
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		}, 
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/profilo',
			name: 'profilo',
			component: ProfileView,
			meta: { requiresAuth: true },
		}		
  ],
})

// Funzione per rimandare l'utente alla pagina di login se entrasse da non autenticato
// in una delle pagine che lo necessitano
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

			alert('Effettua prima l\'accesso.');
		} else {
			next()
		}
	} else {
		next()
	}
})


export default router
