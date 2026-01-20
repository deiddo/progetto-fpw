<script>

	import { useSessionStore } from '@/stores/session';
	import * as Auth from '@/utils/auth.js';
	import * as Api from '@/utils/apis.js';

	export default {
		data() {
			return {

				utenti: [],

				usernameLogin: '',					maxCharUNPW: 32,
				passwordLogin: '',

				usernameRegistrazione: '',
				passwordRegistrazione: '',
				confermaPswRegistrazione: '',
				nome: '',							maxCharNomeCogn: 64,
				cognome: '',
				email: '',							maxCharMailCitta: 128,
				citta: '',
				eta: 0,								minEta: 12,			maxEta: 99,
				sesso: null,

				registrazione: false,
			}
		},

		methods: {
			async login() {
				const data = await Auth.login(this.usernameLogin, this.passwordLogin);

				if(data.userID) {
					useSessionStore().setUser(data.userID);
					this.$router.push('/');
				} else {
					const user = await Api.getUtenteByUsername(this.usernameLogin);

					if(!user[0]) {
						alert('Utente non registrato.');
					} else {
						alert('Password errata.');
					}
				}
			},

			async addUtente() {

				if(this.passwordRegistrazione != this.confermaPswRegistrazione) {
					alert('Le due password non corrispondono.');
					return;
				}

				const data = await Api.addUtente(this.usernameRegistrazione, this.passwordRegistrazione, this.nome, this.cognome, this.email, this.citta, this.eta, this.sesso);
				
				if(data) {
					alert('Account creato correttamente.');
					this.$router.push('/');
				} else {
					console.log(data);
					alert('Errore');
				}
			},

			toggleRegistrazione() {
				if(this.registrazione) {
					this.registrazione = false;
				}

				else {
					this.registrazione = true;
				}
			}
		},
	}

</script>


<template>

	<article class="col-12">

		<div v-show="!registrazione" id="loginContent">

			<form action="login" method="POST" class="form" id="loginForm">

				<h1 class="title">Accedi</h1>
				<p class="toggle" @click.stop.prevent="toggleRegistrazione()"><i>Non hai un account? <b>Creane uno</b></i></p><br>

				<b><label for="username">Nome utente</label></b><br>
				<input type="text" name="usernameLogin" id="usernameLogin" v-model="usernameLogin">
				<br><br>

				<b><label for="password">Password</label></b><br>
				<input type="password" name="passwordLogin" id="passwordLogin" v-model="passwordLogin">
				<br><br>

				<input type="submit" value="Accedi" class="button" @click.stop.prevent="login()" />
			</form>
		</div>


		<div v-show="registrazione" id="registrazioneContent">

			<form action="utenti" method="POST" class="form" id="registrazioneForm">

				<h1 class="title">Registrati</h1>
				<p class="toggle" @click.stop.prevent="toggleRegistrazione()"><i>Hai già un account? <b>Accedi ora</b></i></p><br>

				<b><label for="username">Nome utente ({{ usernameRegistrazione.length }} / {{ maxCharUNPW }})</label></b><br>
				<input type="text" name="username" id="username" v-model="usernameRegistrazione">
				<br><br>

				<b><label for="password">Password ({{ passwordRegistrazione.length }} / {{ maxCharUNPW }})</label></b><br>
				<input type="password" name="password" id="password" v-model="passwordRegistrazione">
				<br><br>

				<b><label for="conferma-password">Conferma password ({{ confermaPswRegistrazione.length }} / {{ maxCharUNPW }})</label></b><br>
				<input type="password" name="conferma-password" id="conferma-password" v-model="confermaPswRegistrazione">
				<br><br>

				<b><label for="nome">Nome ({{ nome.length }} / {{ maxCharNomeCogn }})</label></b><br>
				<input type="text" name="nome" id="nome" v-model="nome">
				<br><br>

				<b><label for="cognome">Cognome ({{ cognome.length }} / {{ maxCharNomeCogn }})</label></b><br>
				<input type="text" name="cognome" id="cognome" v-model="cognome">
				<br><br>

				<b><label for="email">Indirizzo email ({{ email.length }} / {{ maxCharMailCitta }})</label></b><br>
				<input type="email" name="email" id="email" v-model="email">
				<br><br>

				<b><label for="email">Città ({{ citta.length }} / {{ maxCharMailCitta }})</label></b><br>
				<input type="text" name="citta" id="citta" v-model="citta">
				<br><br>

				<b><label for="eta">Età</label></b><br>
				<input type="number" name="eta" id="eta" v-model="eta">
				<br>

				<p><b>Sesso</b></p>
				<label for="uomo">Uomo</label>
				<input type="radio" name="sesso" id="uomo" value="1" v-model="sesso">

				<label for="donna">Donna</label>
				<input type="radio" name="sesso" id="donna" value="2" v-model="sesso">
				<br><br>
				

				<input type="submit" value="Registrati" class="button" @click.stop.prevent="addUtente()" />
			</form>
		</div>



	</article>

</template>


<style scoped>

	.title, .form, #toggle, input {
		font-family: sans-serif;
	}

	#loginContent, #registrazioneContent {
		text-align: center;
	}

	.toggle {
		cursor: pointer;
	}

	.form {
		background: rgba(83, 83, 83, 0.3);
		border-radius: 25px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

		position: relative;
		left: 50%;
		transform: translate(-50%, -50%);

		padding: 10px 70px;
		margin: 0;
	}
	

	input[type="text"], input[type="password"], input[type="email"], input[type="number"] {
		width: 80%;
	}


	/* Media query per desktop */
	@media only screen and (min-width: 768px) {

		#loginContent {
			height: 650px;
		}

		#loginForm {
			top: 45%;
			width: 30%;
		}

		#registrazioneContent {
			height: 850px;
		}

		#registrazioneForm {
			top: 58%;
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

		#registrazioneContent {
			height: 850px;
		}

		#registrazioneForm {
			top: 50%;
		}

		input[type="text"], input[type="password"], input[type="email"], input[type="number"] {
			padding: 5px;
		}
	}

</style>