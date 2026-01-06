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
				data_nascita: '',
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
				
				[ this.nome, this.cognome, this.email, this.citta, this.data_nascita, this.sesso ] =
				[ data.nome, data.cognome, data.email, data.citta, Date(data.data_nascita), data.sesso ];
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
	<p>Benvenuto {{  nome  }} {{ cognome }}, nato il {{ data_nascita }}</p>
	<button @click="logout()">Logout</button>
</template>


<style scoped>

</style>