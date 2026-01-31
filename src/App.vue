<script>
	import { RouterLink, RouterView } from 'vue-router'
	import Header from './components/Header.vue';
	import Navbar from './components/Navbar.vue';
	import Footer from './components/Footer.vue';

	import * as Api from '@/utils/apis.js';

	export default {
		components: {
			Header,
			Navbar,
			Footer
		},

		data() {
			return {
				numProdotti: 0,
				numUtenti: 0,
				gradoMedioStranezza: 0
			}
		},

		methods: {
			async getInfoProdotti() {

				const data = await Api.getListaProdotti();
				this.numProdotti = data.length;

				let sommaGradiStranezza = 0;

				for(let prodotto of data) {
					sommaGradiStranezza += prodotto.grado_stranezza;
				}

				this.gradoMedioStranezza = Math.round(sommaGradiStranezza / this.numProdotti);
			},

			async getInfoUtenti() {

				const data = await Api.getListaUtenti();
				this.numUtenti = data.length;
			} 
		},

		mounted() {
			this.getInfoProdotti();
			this.getInfoUtenti();
		}
	}

</script>

<template>
	<Header />
	<Navbar />

	<aside class="col-3" id="infoSecondarie">
		<p class="titleInfoSec"><b>STATISTICHE DEL MUSEO</b></p>
		<p>Numero di utenti registrati: {{ numUtenti }}</p>
		<p>Numero di oggetti in catalogo: {{ numProdotti }}</p>
		<p>Grado medio di stranezza:</p>
		<img src="/src/assets/img/star.png" v-for="value in gradoMedioStranezza">
	</aside>

	<RouterView />

	<aside class="col-3" id="pubblicita">
		<p>PUBBLICITÀ</p>
		<img src="/src/assets/img/pubb2.jpeg" alt="">
	</aside>

	<Footer />
</template>

<style scoped>
	
	#infoSecondarie {
		font-family: 'ChuckNoon';

		background-color: rgba(83, 83, 83, 0.3);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		border-bottom-right-radius: 25px;
	}

	.titleInfoSec {
		font-size: 2em;
		
	}

	#pubblicita p {
		font-family: sans-serif;
	}


	@media only screen and (min-width: 768px) {

		#pubblicita img {
			width: 100%;
			display: block;
		}
	}


	/*	Media query per smartphone	*/
	@media only screen and (max-width: 768px) {

		#infoSecondarie {
			border-bottom-left-radius: 25px;
		}

		#pubblicita img {
			width: 100%;
		}

	}

</style>
