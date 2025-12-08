<script>
	import * as Api from '@/utils/apis.js'

	import Card from '@/components/Card.vue';

	export default {
		components: {
			Card
		},

		data() {
			return {
				prodotti: []
			}
		},

		methods: {
			async getListaProdotti() {
				const data = await Api.getListaProdotti();
				this.prodotti = data;
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
		<Card v-for="prodotto in prodotti" :key="prodotto.id" :immagine="prodotto.immagine" :nome="prodotto.nome" :descrizione="prodotto.descrizione"/>
		

	</article>

	<aside class="col-3" id="c">
		c
	</aside>

</template>


<style scoped>

</style>