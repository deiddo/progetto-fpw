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

				const data = await Api.addProdotto(this.nome, this.descrizione, "/img.png", "Deidda");
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
	
	<aside class="col-3" id="a">
		a
	</aside>

	<article class="col-6" id="b">
		<h1>Inserimento nuovo oggetto</h1>

		<form action="prodotti" method="POST">
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

	</article>

	<aside class="col-3" id="c">
		c
	</aside>

</template>


<style scoped>
	
</style>