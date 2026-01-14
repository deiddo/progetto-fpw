<script>
	import Card from '@/components/Card.vue';

	export default {
		components: {
			Card
		},

		data() {
			return {
				gruppoFPW: [
					{
						nome: "Alessandro Deidda",
						descrizione: "provabb",
						immagine: "il.png"
					},
					{
						nome: "Riccardo Cau",
						descrizione: "provabbb",
						immagine: "li.png"
					},{
						nome: "Francesco Mameli",
						descrizione: "provablabla",
						immagine: "il.png"
					},
					{
						nome: "Gabriele Podda",
						descrizione: "provabbb",
						immagine: "li.png"
					},
				]
			}
		}
	}
</script>


<template>

	<aside class="col-3" id="a">
		<p>a</p>
	</aside>


	<article class="col-6">
		<Card v-for="studente in gruppoFPW" :immagine="studente.immagine" :nome="studente.nome" :descrizione="studente.descrizione"/>
	
	</article>


	<aside class="col-3" id="c">
		<p>c</p>
	</aside>

</template>


<style scoped>

</style>