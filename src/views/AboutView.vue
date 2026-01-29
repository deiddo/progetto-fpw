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
						immagine: "/src/assets/img/oggetti/pirots.jpeg"
					},
					{
						nome: "Riccardo Cau",
						descrizione: "Gabbiano umano che fa le pizze col microfono in mano che canta stonando i clienti cacciando.",
						immagine: "li.png"
					},
					{
						nome: "Francesco Mameli",
						descrizione: "Giovane ragazzo del Tennessee con una forte passione per le scale a chiocciola e il cioccolato fondente, porta le porte a Porta a Porta.",
						immagine: "il.png"
					},
					{
						nome: "Gabriele Podda",
						descrizione: "Ragazzo affamato di musica con una forte dedizione allo scacco, affinché esso non sia matto.",
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