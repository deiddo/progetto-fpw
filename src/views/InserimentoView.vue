<script>
	import { useSessionStore } from '@/stores/session';
	import * as Api from '@/utils/apis.js';

	export default {
		data() {
			return {
				nome: '',
				descrizione: '',
				immagine: '',
				utente: '',
				sessionStore: useSessionStore(),
				prodotti: [],

				numCharNome: 0,
				maxCharNome: 64,
				numCharDesc: 0,
				maxCharDesc: 256,
			}
		},

		methods: {
			async getListaProdotti() {
				const data = await Api.getListaProdotti();
				this.prodotti = data;
			},

			async addProdotto() {
				
				if(this.prodottoGiaPresente(this.nome)) {
					alert('Prodotto già presente nel DB.');
					return;
				}

				const data = await Api.addProdotto(this.nome, this.descrizione, "/img.png", this.sessionStore.getUser());
				if(data) {
					alert('Prodotto aggiunto correttamente.');
					this.$router.push('/');
				} else {
					console.log(data);
					alert('Errore');
				}
			},

			prodottoGiaPresente(nomeForm) {
				for(let prodotto of this.prodotti) {
					if(nomeForm == prodotto.nome) {
						return true;
					}
				}

				return false;
			},

			checkNumCharNome() {
				if(this.nome.length > this.maxCharNome) {
					this.nome = this.nome.substring(0, this.maxCharNome);
				}
			},

			checkNumCharDesc() {
				if(this.descrizione.length > this.maxCharDesc) {
					this.descrizione = this.descrizione.substring(0, this.maxCharDesc);
				}
			}
		},

		mounted() {
			this.getListaProdotti();
		}
	}

</script>


<template>
	
	<article class="col-12">

		<div id="inserimentoContent">
			<h1>Aggiungi un nuovo oggetto al catalogo</h1>

			<form action="prodotti" method="POST" id="inserimentoForm">
				<label for="nome">Nome</label>
				<input type="text" name="nome" id="nome" v-model="nome" @input="checkNumCharNome">
				<p id="caratteri-nome">Caratteri: {{ nome.length }}/{{ maxCharNome }}</p>
				<br><br>

				<label for="descrizione">Descrizione</label>
				<textarea name="descrizione" id="descrizione" v-model="descrizione" @input="checkNumCharDesc"></textarea>
				<p id="caratteri-descrizione">Caratteri: {{ descrizione.length }}/{{ maxCharDesc }}</p>
				<br><br>

				<input type="submit" value="Conferma" @click.stop.prevent="addProdotto()" />
			</form>
		</div>
		
	</article>

</template>


<style scoped>

	h1, #inserimentoForm {
		font-family: sans-serif;
	}

	#inserimentoContent {
		text-align: center;
	}

	#inserimentoForm {
		text-align: center;
		background: rgba(83, 83, 83, 0.3);
		transform: translate(-50%, -50%);
		border-radius: 25px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

		position: relative;
		left: 50%;

		padding: 20px 70px;
		margin: 0;
	}

	/* Media query per desktop*/
	@media only screen and (min-width: 768px) {

		#inserimentoContent {
			height: 600px;
		}

		#inserimentoForm {
			top: 50%;

			width: 30%;
		}
	}


	/* Media query per smartphone*/
	@media only screen and (max-width: 768px) {

		#inserimentoContent {
			height: 500px;
		}

		#inserimentoForm {
			top: 40%;
		}
	}


</style>