<script>
	import { useSessionStore } from '@/stores/session';
	import * as Auth from '@/utils/auth.js';
	import * as Api from '@/utils/apis.js';
	
	export default {
		data() {
			return {
				username: '',
				password: '',

				sessionStore: useSessionStore(),

				nome: '',
				cognome: '',
				email: '',
				citta: '',
				eta: 0,
				sesso: 0,

				saluto: '',

				mostraNewPassword: false,

				vecchiaPassword: '',			maxCharPSWD: 32,
				nuovaPassword: '',
				confermaPassword: '',
			}
		},

		methods: {

			getUser() {
				this.username = this.sessionStore.getUser();
			},

			async logout () {
				await Auth.logout();
				this.sessionStore.setUser(null);
				this.$router.push('/');
			},

			async getDatiUtente() {
				let data = (await Api.getUtenteByUsername(this.username))[0];
				
				[ this.password, this.nome, this.cognome, this.email, this.citta, this.eta, this.sesso ] =
				[ data.password, data.nome, data.cognome, data.email, data.citta, data.eta, data.sesso ];

				if(this.sesso == 1) {
					this.saluto = 'Benvenuto';
				} else {
					this.saluto = 'Benvenuta';
				}
			},

			async aggiornaPassword() {
				
				if(this.password != this.vecchiaPassword) {
					alert('La password attuale è errata.');
					return;
				}

				if(this.nuovaPassword != this.confermaPassword) {
					alert('Le due password non corrispondono.');
					return;
				}

				if(this.password == this.nuovaPassword) {
					alert('La nuova password non può essere uguale alla vecchia.');
					return;
				}

				const data = await Api.aggiornaPassword(this.username, this.nuovaPassword);

				if(data) {
					alert('Password modificata con successo.');
					this.$router.push('/');
				} else {
					console.log(data);
					alert('Errore');
				}
			},
			
			toggleNewPassword() {
				this.mostraNewPassword = true;
			},

			checkInput(input) {

				switch(input) {
					case 'vecchiaPassword':
						if(this.vecchiaPassword.length > this.maxCharPSWD)
							this.vecchiaPassword = this.vecchiaPassword.substring(0, this.maxCharPSWD);
					break;

					case 'nuovaPassword':
						if(this.nuovaPassword.length > this.maxCharPSWD)
							this.nuovaPassword = this.nuovaPassword.substring(0, this.maxCharPSWD);
					break;

					case 'confermaPassword':
						if(this.confermaPassword.length > this.maxCharPSWD)
							this.confermaPassword = this.confermaPassword.substring(0, this.maxCharPSWD);
					break;

					default:
						console.log('Errore');
					break;
				}

			}
		},

		mounted() {
			this.getUser();
			this.getDatiUtente();
		}
	}
</script>


<template>
	
	<aside class="col-3" id="a">a</aside>

	<article class="col-6">
		<h1>Il tuo profilo</h1>
		<p>{{ saluto }} {{  nome  }} {{ cognome }}</p>

		<p>Nome utente: {{ username }}</p>
		<p>Indirizzo email: {{ email }}</p>
		<p>Città: {{ citta }}</p>
		<p>Età: {{ eta }} anni</p>

		<button v-show="!mostraNewPassword" class="button" id="toggle-psw" @click.stop.prevent="toggleNewPassword()">Cambio password</button>

		<form v-show="mostraNewPassword" id="formCambioPassword" action="utenti">
			<label for="vecchia-password">Vecchia password</label><br>
			<input type="password" name="vecchia-password" id="vecchia-password" v-model="vecchiaPassword" @input="checkInput('vecchiaPassword')">
			<p id="caratteri-vecchiaPassword">Caratteri: {{ vecchiaPassword.length }}/{{ maxCharPSWD }}</p><br>

			<label for="nuova-password">Nuova password</label><br>
			<input type="password" name="nuova-password" id="nuova-password" v-model="nuovaPassword" @input="checkInput('nuovaPassword')">
			<p id="caratteri-nuovaPassword">Caratteri: {{ nuovaPassword.length }}/{{ maxCharPSWD }}</p><br>


			<label for="conferma-password">Conferma password</label><br>
			<input type="password" name="conferma-password" id="conferma-password" v-model="confermaPassword" @input="checkInput('confermaPassword')">
			<p id="caratteri-confermaPassword">Caratteri: {{ confermaPassword.length }}/{{ maxCharPSWD }}</p><br>

			<input type="submit" class="button" value="Conferma" @click.stop.prevent="aggiornaPassword()">

		</form>


		<button class="button" @click.stop.prevent="logout()">Disconnetti</button>
	</article>

	<aside class="col-3" id="c">c</aside>

	
</template>


<style scoped>

	#toggle-psw {
		margin-right: 20px;
	}

	#formCambioPassword {
		font-family: sans-serif;
		text-align: center;
	}

</style>