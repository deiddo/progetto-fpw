<script>
	import * as Api from '@/utils/apis.js'
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

	<article class="col-6">

		<Card v-if="numProdotti == 0" :nome="messaggioDefault"/>

		<Card v-for="prodotto in prodotti" :key="prodotto.id" :immagine="prodotto.immagine" :nome="prodotto.nome" :descrizione="prodotto.descrizione" :utente="prodotto.utente"/>
		

	</article>

	<aside class="col-3" id="c">
		c
	</aside>

</template>


<style scoped>

</style>