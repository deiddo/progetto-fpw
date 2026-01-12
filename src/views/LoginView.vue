<script>

	import { useSessionStore } from '@/stores/session';
	import * as Auth from '@/utils/auth.js';
	import * as Api from '@/utils/apis.js';

	export default {
		data() {
			return {

				utenti: [],

				usernameLogin: '',
				passwordLogin: '',

				usernameRegistrazione: '',
				passwordRegistrazione: '',
				nome: '',
				cognome: '',
				email: '',
				citta: '',
				data_nascita: '',
				sesso: '',

				registrazione: false,
				buttonText: '',

				loginText: 'Hai già un account? Accedi',
				registrazioneText: 'Non hai un account? Creane uno',
			}
		},

		methods: {
			async login() {
				const data = await Auth.login(this.usernameLogin, this.passwordLogin);

				if(data.userID) {
					useSessionStore().setUser(data.userID);
					this.$router.push('/');
				} else if (this.usernameGiaPresente(this.usernameLogin)) {
					alert('Password errata.');
				} else {
					alert('Account non esistente.');
				}
			},

			async addUtente() {

				if(this.usernameGiaPresente(this.usernameRegistrazione)) {
					alert('Nome utente già in uso.');
					return;
				}

				const data = await Api.addUtente(this.usernameRegistrazione, this.passwordRegistrazione, this.nome, this.cognome, this.email, this.citta, this.data_nascita, this.sesso);
	
				if(data) {
					alert('Account creato correttamente.');
					this.$router.push('/');
				} else {
					console.log(data);
					alert('Errore');
				}
			},

			async getListaUtenti() {
				const data = await Api.getListaUtenti();
				this.utenti = data;
			},

			usernameGiaPresente(username) {
				for(let utente of this.utenti) {
					if(username == utente.username) {
						return true;
					}
				}

				return false;
			},

			toggleRegistrazione() {

				if(this.registrazione) {
					this.registrazione = false;
					this.buttonText = this.registrazioneText;
				}

				else {
					this.registrazione = true;
					this.buttonText = this.loginText;
				}
			}
		},

		mounted() {
			this.getListaUtenti();
			this.buttonText = this.registrazioneText;
		}
	}

</script>


<template>

	<article class="col-12">

		<button id="toggle" @click="toggleRegistrazione()">{{ buttonText }}</button>

		<div v-show="!registrazione" id="loginContent">

			<form action="login" method="POST" id="loginForm">

				<h1 id="loginTitle">Accedi</h1>
				<b><label for="username">Nome utente</label></b><br>
				<input type="text" name="usernameLogin" id="usernameLogin" v-model="usernameLogin">
				<br><br>

				<b><label for="password">Password</label></b><br>
				<input type="password" name="passwordLogin" id="passwordLogin" v-model="passwordLogin">
				<br><br>

				<input type="submit" value="Accedi" @click.stop.prevent="login()" />
			</form>
		</div>


		<div v-show="registrazione" id="loginContent">

			<form action="login" method="POST" id="loginForm">

				<h1 id="loginTitle">Registrati</h1>
				<b><label for="username">Nome utente</label></b><br>
				<input type="text" name="username" id="username" v-model="usernameRegistrazione">
				<br><br>

				<b><label for="password">Password</label></b><br>
				<input type="password" name="password" id="password" v-model="passwordRegistrazione">
				<br><br>

				<input type="submit" value="Accedi" @click.stop.prevent="login()" />
			</form>
		</div>



	</article>

</template>


<style scoped>

	#loginTitle, #toggle, #loginForm, input[type="text"], input[type="password"] {
		font-family: sans-serif;
	}

	#loginContent {
		text-align: center;
	}

	#toggle {
		position: relative;
		left: 50%;
		transform: translateX(-50%);

		color: black;
	}

	#loginForm {
		text-align: center;
		background: rgba(83, 83, 83, 0.3);
		border-radius: 25px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

		position: relative;
		left: 50%;
		transform: translate(-50%, -50%);

		padding: 20px 70px;
		margin: 0;
	}


	/* Media query per desktop*/
	@media only screen and (min-width: 768px) {

		#loginContent {
			height: 600px;
		}

		#loginForm {
			top: 30%;

			width: 30%;
		}

	}


	/* Media query per smartphone*/
	@media only screen and (max-width: 768px) {

		#loginContent {
			height: 500px;
		}

		#loginForm {
			top: 40%;
		}

		input[type="text"], input[type="password"] {
			width: 80%;
			padding: 5px;
		}
	}

</style>