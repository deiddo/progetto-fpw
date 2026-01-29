<script>
	import { useSessionStore } from '@/stores/session';
	import * as Api from '@/utils/apis.js';

	export default {
		data() {
			return {
				nome: '',							maxCharNome: 64,
				descrizione: '',					maxCharDesc: 256,
				ritrovamento: '',					maxCharRitr: 128,
				grado_stranezza: 0,					minGradoStran: 1,		maxGradoStran: 5,
				immagine: '',
				utente: '',

				sessionStore: useSessionStore(),
			}
		},

		methods: {

			async addProdotto() {

				const data = await Api.addProdotto(this.nome, this.descrizione, "placeholder.jpeg", this.sessionStore.getUser());
				
				if(data) {
					alert('Prodotto aggiunto correttamente.');
					this.$router.push('/');
				} else {
					console.log(data);
					alert('Errore');
				}
			},

			checkInput(input) {
				switch(input) {
					case 'nome':
						if(this.nome.length > this.maxCharNome) 
							this.nome = this.nome.substring(0, this.maxCharNome);
					break;

					case 'descrizione':
						if(this.descrizione.length > this.maxCharDesc) 
							this.descrizione = this.descrizione.substring(0, this.maxCharDesc);	
					break;

					case 'ritrovamento':
						if(this.ritrovamento.length > this.maxCharRitr) 
							this.ritrovamento = this.ritrovamento.substring(0, this.maxCharRitr);

					break;

					case 'grado_stranezza':
						if(this.grado_stranezza < this.minGradoStran && this.grado_stranezza > this.maxGradoStran)
							return false;
						
						return true;

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

		<div id="inserimentoContent">
			<h1>Aggiungi un nuovo oggetto al catalogo</h1>

			<form action="prodotti" method="POST" id="inserimentoForm">

				<b><label for="nome">Nome</label></b><br>
				<input type="text" name="nome" id="nome" v-model="nome" @input="checkInput('nome')">
				<p id="caratteri-nome">Caratteri: {{ nome.length }}/{{ maxCharNome }}</p>
				<br><br>

				<b><label for="descrizione">Descrizione</label></b><br>
				<textarea name="descrizione" id="descrizione" v-model="descrizione" @input="checkNumCharDesc()"></textarea>
				<p id="caratteri-descrizione">Caratteri: {{ descrizione.length }}/{{ maxCharDesc }}</p>
				<br><br>

				<b><label for="ritrovamento">Ritrovamento</label></b><br>
				<input type="text" name="ritrovamento" id="ritrovamento" v-model="ritrovamento" @input="checkInput('ritrovamento')">
				<p id="caratteri-ritrovamento">Caratteri: {{ ritrovamento.length }}/{{ maxCharRitr }}</p>
				<br><br>

				<b><label for="grado_stranezza">Grado di stranezza</label></b><br>
				<select v-model="grado_stranezza">
					<option v-for="value in maxGradoStran" :key="value">{{ value }}</option>
				</select>
				<br><br>

				<input type="submit" value="Conferma" class="button" @click.stop.prevent="addProdotto()" />
			</form>
		</div>
		
	</article>

</template>


<style scoped>

	h1, #inserimentoForm, input[type="text"], textarea {
		font-family: sans-serif;
	}

	#inserimentoContent {
		text-align: center;
	}

	#inserimentoForm {
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

		input[type="text"], textarea {
			width: 80%;
			padding: 5px;
		}
	}


</style>