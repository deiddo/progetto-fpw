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

				etaStyle: {
					color: 'black'
				},

				registrazione: false,
			}
		},

		watch: {
			eta: {
				handler() {
					this.checkInput('eta');
				}
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
			},

			checkInput(input) {
				switch(input) {
					case 'usernameLogin':
						if(this.usernameLogin.length > this.maxCharUNPW) 
							this.usernameLogin = this.usernameLogin.substring(0, this.maxCharUNPW);
						
						break;

					case 'passwordLogin':
						if(this.passwordLogin.length > this.maxCharUNPW) 
							this.passwordLogin = this.passwordLogin.substring(0, this.maxCharUNPW);	

						break;

					case 'usernameRegistrazione':
						if(this.usernameRegistrazione.length > this.maxCharUNPW) 
							this.usernameRegistrazione = this.usernameRegistrazione.substring(0, this.maxCharUNPW);

						break;

					case 'passwordRegistrazione':
						if(this.passwordRegistrazione.length > this.maxCharUNPW) 
							this.passwordRegistrazione = this.passwordRegistrazione.substring(0, this.maxCharUNPW);

						break;

					case 'confermaPswRegistrazione':
						if(this.confermaPswRegistrazione.length > this.maxCharUNPW) 
							this.confermaPswRegistrazione = this.confermaPswRegistrazione.substring(0, this.maxCharUNPW);

						break;

					case 'nome':
						if(this.nome.length > this.maxCharNomeCogn) 
							this.nome = this.nome.substring(0, this.maxCharNomeCogn);

						break;

					case 'cognome':
						if(this.cognome.length > this.maxCharNomeCogn) 
							this.cognome = this.cognome.substring(0, this.maxCharNomeCogn);

						break;

					case 'email':
						if(this.email.length > this.maxCharMailCitta) 
							this.email = this.email.substring(0, this.maxCharMailCitta);

						break;

					case 'citta':
						if(this.citta.length > this.maxCharMailCitta) 
							this.citta = this.citta.substring(0, this.maxCharMailCitta);

						break;

					case 'eta':
						if(this.eta >= this.minEta && this.eta <= this.maxEta) {
							this.etaStyle.color = 'black';
							return true;
						}

						this.etaStyle.color = 'red'
						return false;

					case 'sesso':
						if(this.sesso)
							return true;

						return false;

					default:
						console.log('Errore');
						break;
				}
			}
		},
	}

</script>


<template>

	<article class="col-12">

		<div v-show="!registrazione" id="loginContent">

			<form action="login" method="POST" id="loginForm">

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

			<form action="utenti" method="POST" id="registrazioneForm">

				<h1 class="title">Registrati</h1>
				<p class="toggle" @click.stop.prevent="toggleRegistrazione()"><i>Hai già un account? <b>Accedi ora</b></i></p><br>

				<div class="input-reg">
					<div class="col-reg">
						<b><label for="username">Nome utente ({{ usernameRegistrazione.length }} / {{ maxCharUNPW }})</label></b><br>
						<input type="text" name="username" id="username" v-model="usernameRegistrazione" @input="checkInput('usernameRegistrazione')">
						<br><br>

						<b><label for="password">Password ({{ passwordRegistrazione.length }} / {{ maxCharUNPW }})</label></b><br>
						<input type="password" name="password" id="password" v-model="passwordRegistrazione" @input="checkInput('passwordRegistrazione')">
						<br><br>

						<b><label for="conferma-password">Conferma password ({{ confermaPswRegistrazione.length }} / {{ maxCharUNPW }})</label></b><br>
						<input type="password" name="conferma-password" id="conferma-password" v-model="confermaPswRegistrazione" @input="checkInput('confermaPswRegistrazione')">
						<br><br>

						<b><label for="nome">Nome ({{ nome.length }} / {{ maxCharNomeCogn }})</label></b><br>
						<input type="text" name="nome" id="nome" v-model="nome" @input="checkInput('nome')">
						<br><br>

						<b><label for="cognome">Cognome ({{ cognome.length }} / {{ maxCharNomeCogn }})</label></b><br>
						<input type="text" name="cognome" id="cognome" v-model="cognome" @input="checkInput('cognome')">
						<br><br>
					</div>

					<div class="col-reg">
						<b><label for="email">Indirizzo email ({{ email.length }} / {{ maxCharMailCitta }})</label></b><br>
						<input type="email" name="email" id="email" v-model="email" @input="checkInput('email')">
						<br><br>

						<b><label for="email">Città ({{ citta.length }} / {{ maxCharMailCitta }})</label></b><br>
						<input type="text" name="citta" id="citta" v-model="citta" @input="checkInput('citta')">
						<br><br>

						<b><label for="eta">Età</label></b><br>
						<input type="number" :style="etaStyle" name="eta" id="eta" :min="minEta" :max="maxEta" v-model="eta">
						<p v-if="!checkInput('eta')">Età consentite: {{ minEta }} - {{ maxEta }}</p>
						<br>

						<p><b>Sesso</b></p>
						<label for="uomo">Uomo</label>
						<input type="radio" name="sesso" id="uomo" value="1" v-model="sesso">

						<label for="donna">Donna</label>
						<input type="radio" name="sesso" id="donna" value="2" v-model="sesso">
						<br><br>

						<input type="submit" value="Registrati" class="button" :disabled="!checkInput('eta') || !checkInput('sesso')" @click.stop.prevent="addUtente()" />
					</div>		
				</div>

				<div class="clear"></div>
			</form>
		</div>



	</article>

</template>


<style scoped>

	.title, #loginForm, #registrazioneForm, #toggle, input {
		font-family: sans-serif;
	}

	#loginContent, #registrazioneContent {
		text-align: center;
	}

	.toggle {
		cursor: pointer;
	}

	#loginForm, #registrazioneForm {
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
		padding: 5px;
	}

	/* Media query per desktop */
	@media only screen and (min-width: 768px) {

		#loginContent {
			height: 650px;
		}

		#loginForm, #registrazioneForm {
			top: 50%;
			width: 40%;
		}

		#registrazioneContent {
			height: 850px;
		}

		.input-reg {
			width: 100%;
		}

		.col-reg {
			float: left;
			width: 50%;
		}

		.clear {
			clear: both;
		}

		input[type="text"], input[type="password"], input[type="email"], input[type="number"] {
			width: 60%;
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
			height: 900px;
		}

		#registrazioneForm {
			top: 50%;
		}
	}

</style>