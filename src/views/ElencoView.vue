<script>
	import * as Api from '@/utils/apis.js';
	import { useSessionStore } from '@/stores/session';

	import Card from '@/components/Card.vue';

	export default {
		components: {
			Card
		},

		data() {
			return {
				prodotti: [],
				numProdotti: 0,
				messaggioDefault: "Nessun prodotto disponibile",
				sessionStore: useSessionStore()
			}
		},

		methods: {
			async getListaProdotti() {
				const data = await Api.getListaProdotti();
				this.prodotti = data;
				this.numProdotti = data.length;
			},

			getUrlImage(immagine) {
				return new URL(`../assets/img/oggetti/${immagine}`, import.meta.url);
			}
		},

		mounted() {
			this.getListaProdotti();
		}
	}
</script>


<template>

	<article class="col-6">

		<Card v-if="numProdotti == 0" :nome="messaggioDefault"/>

		<Card v-for="prodotto in prodotti" :key="prodotto.id" :immagine="getUrlImage(prodotto.immagine)" :nome="prodotto.nome" :descrizione="prodotto.descrizione" :ritrovamento="prodotto.ritrovamento" :grado_stranezza="prodotto.grado_stranezza" :utente="prodotto.utente"/>
		

	</article>

</template>


<style scoped>

</style>