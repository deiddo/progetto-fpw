<script>
	import { useSessionStore } from '@/stores/session';
	import * as Auth from '@/utils/auth.js';
	import * as Api from '@/utils/apis.js';
	
	export default {
		data() {
			return {
				username: '',
				sessionStore: useSessionStore(),

				nome: '',
				cognome: '',
				email: '',
				citta: '',
				eta: 0,
				sesso: 0,
			}
		},
		methods: {
			async logout () {
				await Auth.logout();
				this.sessionStore.setUser(null);
				this.$router.push('/');
			},

			getUser() {
				this.username = this.sessionStore.getUser();
			},

			async getDatiUtente() {
				let data = (await Api.getUtenteByUsername(this.username))[0];
				
				[ this.nome, this.cognome, this.email, this.citta, this.eta, this.sesso ] =
				[ data.nome, data.cognome, data.email, data.citta, data.eta, data.sesso ];

				console.log(data);
			},			
		},
		mounted() {
			this.getUser();
			this.getDatiUtente();
		}
	}
</script>


<template>
	<h1>Profilo</h1>
	<p>Benvenuto {{  nome  }} {{ cognome }}, hai {{ eta }} anni</p>
	<button @click="logout()">Logout</button>
</template>


<style scoped>

</style>