<script>

	import { useSessionStore } from '@/stores/session';

	import * as Auth from '@/utils/auth.js';
	import * as Api from '@/utils/apis.js';

	export default {
		data() {
			return {
				// v-model per ogni input dei form		// Valori minimi e/o massimi per ciascun tipo di input
				usernameLogin: '',						maxCharUNPW: 32,
				passwordLogin: '',

				usernameRegistrazione: '',
				passwordRegistrazione: '',
				confermaPswRegistrazione: '',
				nome: '',								maxCharNomeCogn: 64,
				cognome: '',
				email: '',								maxCharMailCitta: 128,
				citta: '',
				eta: 18,								minEta: 18,			maxEta: 99,
				sesso: null,

				// Stile per l'input dell'età da modificare in caso di valore non corretto
				etaStyle: {
					color: 'black'
				},

				// Variabile per la visualizzazione del form di registrazione/login
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

			// Metodo per effettuare il login al sito
			async login() {

				// Richiesta di login al server con i dati forniti
				const data = await Auth.login(this.usernameLogin, this.passwordLogin);

				// Se la richiesta va buon fine, ritorna alla home
				if(data.userID) {
					useSessionStore().setUser(data.userID);
					this.$router.push('/');
				} 
				
				// Altrimenti, mostra un messaggio di errore
				else {
					const user = await Api.getUtenteByUsername(this.usernameLogin);

					// Se il nome utente inserito non è registrato
					if(!user[0]) {
						alert('Utente non registrato.');
					} 
					
					// Se il nome utente è già registrato
					else {
						alert('Password errata.');
					}
				}
			},

			// Metodo per effettuare la registrazione al sito
			async addUtente() {

				// Controllo se le due password inserite sono uguali
				if(this.passwordRegistrazione != this.confermaPswRegistrazione) {
					alert('Le due password non corrispondono.');
					return;
				}

				// Controllo se il nome utente scelto è disponibile
				const user = await Api.getUtenteByUsername(this.usernameRegistrazione)

				// Se sì, richiedi registrazione al server
				if(!user[0]) {
					const data = await Api.addUtente(this.usernameRegistrazione, this.passwordRegistrazione, this.nome, this.cognome, this.email, this.citta, this.eta, this.sesso);
				
					if(data) {
						alert('Account creato correttamente.');
						this.$router.push('/');
					} else {
						console.log(data);
						alert('Errore');
					}	
				}

				// Altrimenti, mostra un messaggio di errore
				else {
					alert('Nome utente non disponibile.');
				}
			},

			// Metodo per scambiare tra il form di registrazione o quello di login cliccando sul pulsante apposito
			toggleRegistrazione() {
				if(this.registrazione) {
					this.registrazione = false;
				}

				else {
					this.registrazione = true;
				}
			},

			// Metodo per il controllo della validità degli input (lunghezza massima per testo, valori soglia per numeri)
			checkInput(input) {
				switch(input) {
					case 'usernameLogin':
						if(this.usernameLogin.length == 0)
							return false;

						if(this.usernameLogin.length > this.maxCharUNPW) 
							this.usernameLogin = this.usernameLogin.substring(0, this.maxCharUNPW);
						
						return true;

					case 'passwordLogin':
						if(this.passwordLogin.length == 0)
							return false;

						if(this.passwordLogin.length > this.maxCharUNPW) 
							this.passwordLogin = this.passwordLogin.substring(0, this.maxCharUNPW);	

						return true;

					case 'allLogin':
						return this.checkInput('usernameLogin') && this.checkInput('passwordLogin');



					case 'usernameRegistrazione':
						if(this.usernameRegistrazione.length == 0)
							return false;
					
						if(this.usernameRegistrazione.length > this.maxCharUNPW) 
							this.usernameRegistrazione = this.usernameRegistrazione.substring(0, this.maxCharUNPW);

						return true;

					case 'passwordRegistrazione':
						if(this.passwordRegistrazione.length == 0)
							return false;

						if(this.passwordRegistrazione.length > this.maxCharUNPW) 
							this.passwordRegistrazione = this.passwordRegistrazione.substring(0, this.maxCharUNPW);

						return true;

					case 'confermaPswRegistrazione':
						if(this.confermaPswRegistrazione.length > this.maxCharUNPW) 
							this.confermaPswRegistrazione = this.confermaPswRegistrazione.substring(0, this.maxCharUNPW);

						break;

					case 'nome':
						if(this.nome.length == 0)
							return false;

						if(this.nome.length > this.maxCharNomeCogn) 
							this.nome = this.nome.substring(0, this.maxCharNomeCogn);

						return true;

					case 'cognome':
						if(this.cognome.length == 0)
							return false;

						if(this.cognome.length > this.maxCharNomeCogn) 
							this.cognome = this.cognome.substring(0, this.maxCharNomeCogn);

						return true;

					case 'email':
						if(this.email.length == 0)
							return false;

						if(this.email.length > this.maxCharMailCitta) 
							this.email = this.email.substring(0, this.maxCharMailCitta);

						return true;

					case 'citta':
						if(this.citta.length == 0)
							return false;

						if(this.citta.length > this.maxCharMailCitta) 
							this.citta = this.citta.substring(0, this.maxCharMailCitta);

						return true;

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

					case 'allRegistrazione':
						return this.checkInput('usernameRegistrazione') && this.checkInput('passwordRegistrazione') && this.checkInput('nome') && this.checkInput('cognome') && this.checkInput('email') && this.checkInput('citta') && this.checkInput('eta') && this.checkInput('sesso');

					default:
						console.log('Errore');
						break;
				}
			}
		},
	}

</script>


<template>

	<article class="col-6">

		<div v-show="!registrazione" id="loginContent">

			<form action="login" method="POST" id="loginForm">

				<h1 class="title">Accedi</h1>
				<p class="toggle" @click.stop.prevent="toggleRegistrazione()"><i>Non hai un account? <b>Creane uno</b></i></p><br>

				<b><label for="username">Nome utente</label></b><br>
				<input type="text" name="usernameLogin" id="usernameLogin" v-model="usernameLogin" @input="checkInput('usernameLogin')">
				<p id="caratteri-usernameLogin">Caratteri: {{ usernameLogin.length }}/{{ maxCharUNPW }}</p>
				<br><br>

				<b><label for="password">Password</label></b><br>
				<input type="password" name="passwordLogin" id="passwordLogin" v-model="passwordLogin" @input="checkInput('passwordLogin')">
				<p id="caratteri-passwordLogin">Caratteri: {{ passwordLogin.length }}/{{ maxCharUNPW }}</p>
				<br><br>

				<input type="submit" value="Conferma" class="button" :disabled="!checkInput('allLogin')" @click.stop.prevent="login()" />
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
						<span v-if="!checkInput('eta')" class="errInput">(Min: {{ minEta }} - Max: {{ maxEta }})</span><br>
						<input type="number" :style="etaStyle" name="eta" id="eta" :min="minEta" :max="maxEta" v-model="eta">

						<p><b>Sesso</b></p>
						<label for="uomo">Uomo</label>
						<input type="radio" name="sesso" id="uomo" value="1" v-model="sesso">

						<label for="donna">Donna</label>
						<input type="radio" name="sesso" id="donna" value="2" v-model="sesso">
						<br><br>

						<input type="submit" value="Conferma" class="button" :disabled="!checkInput('allRegistrazione')" @click.stop.prevent="addUtente()" />
					</div>		
				</div>

				<div class="clear" />
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

		padding: 10px 60px;
		margin: 0;
	}
	

	input[type="text"], input[type="password"], input[type="email"], input[type="number"] {
		padding: 5px;
	}

	/* Media query per desktop */
	@media only screen and (min-width: 768px) {

		#loginContent, #registrazioneContent {
			height: 800px;
		}

		#loginForm, #registrazioneForm {
			width: 70%;
			top: 50%;
		}

		.col-reg {
			float: left;
			width: 50%;
		}

		.clear {
			clear: both;
		}

		input[type="text"], input[type="password"], input[type="email"], input[type="number"] {
			width: 80%;
		}
	}


	/* Media query per smartphone */
	@media only screen and (max-width: 768px) {

		#loginContent {
			height: 500px;
		}

		#loginForm {
			top: 50%;
		}

		#registrazioneContent {
			height: 900px;
		}

		#registrazioneForm {
			top: 50%;
		}

		input[type="text"], input[type="password"], input[type="email"], input[type="number"] {
			width: 100%;
		}
	}

</style>