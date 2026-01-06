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
						descrizione: "provablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablablaprovablabla",
						immagine: "cacca.png"
					},
					{
						nome: "Riccardo Cau",
						descrizione: "provabbb",
						immagine: "cacca.png"
					},{
						nome: "Francesco Mameli",
						descrizione: "provablabla",
						immagine: "cacca.png"
					},
					{
						nome: "Gabriele Podda",
						descrizione: "provabbb",
						immagine: "cacca.png"
					},
				]
			}
		}
	}
</script>


<template>

	<aside class="col-3 pubb">
		<img src="../assets/img/pubb.png" alt="">
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