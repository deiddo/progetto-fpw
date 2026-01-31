<script>
	import Card from '@/components/Card.vue';

	export default {
		components: {
			Card
		},

		data() {
			return {

				// Array con le informazioni dei componenti del gruppo
				gruppoFPW: [
					{
						nome: "Alessandro Deidda",
						descrizione: "provabb",
						immagine: "user.png"
					},
					{
						nome: "Riccardo Cau",
						descrizione: "Gabbiano umano che fa le pizze col microfono in mano che canta stonando i clienti cacciando.",
						immagine: "cau.png"
					},
					{
						nome: "Francesco Mameli",
						descrizione: "Giovane ragazzo del Tennessee con una forte passione per le scale a chiocciola e il cioccolato fondente, porta le porte a Porta a Porta.",
						immagine: "kekko.png"
					},
					{
						nome: "Gabriele Podda",
						descrizione: "Ragazzo affamato di musica con una forte dedizione allo scacco, affinché esso non sia matto.",
						immagine: "podda.png"
					},
				]
			}
		},

		methods: {

			// Metodo per la restituzione del path intero a partire dal nome del file immagine
			getUrlImage(immagine) {
				return new URL(`../assets/img/about/${immagine}`, import.meta.url);
			}
		}
	}
</script>


<template>


	<article class="col-6">
		<Card v-for="studente in gruppoFPW" :immagine="getUrlImage(studente.immagine)" :nome="studente.nome" :descrizione="studente.descrizione"/>
	
	</article>

</template>