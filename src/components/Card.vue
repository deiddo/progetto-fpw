<script>

	export default {

		// Props per i campi del componente

		props: {
			immagine: {
				type: URL,
				required: false
			},

			nome: {
				type: String,
				required: true
			},

			descrizione: {
				type: String,
				required: false
			},

			prezzo: {
				type: Number,
				required: false
			},

			ritrovamento: {
				type: String,
				required: false
			},

			grado_stranezza: {
				type: Number,
				required: false
			},

			utente: {
				type: String,
				required: false
			}
		}
	}

</script>

<template>

	<div class="card">

		<div class="div-immagine">
			<img v-show="immagine != null" :src="immagine">
		</div>

		<div class="informazioni">
			<div class="nome">
				<p>{{ nome }}</p>
			</div>

			<div v-show="descrizione != null" class="descrizione">
				<p>{{ descrizione }}</p>

				<p v-show="ritrovamento != null"><b>Ritrovamento:</b> {{ ritrovamento }}</p>

				<p v-show="prezzo != null"><b>Prezzo:</b> {{ prezzo }} EUR</p>

				<p v-show="grado_stranezza != null"><b>Grado di stranezza:</b></p>
				<img src="/src/assets/img/star.png" alt="" v-for="value in grado_stranezza">
				

				<p v-show="utente != null"><i>Aggiunto da {{ utente }}</i></p>
			</div>
		</div>

		<div class="clear" />

	</div>

</template>

<style scoped>

	.card {
		padding: 2% 5%;
		border-radius: 15px;

		background-color: var(--rossoScuro);
		color: var(--bianco);
		font-family: sans-serif;
	}

	.nome, .descrizione {
		display: block;
	}

	.nome p {
		font-size: 3.5vh;
		font-family: 'ChuckNoon';
	}


	/* Media query per desktop */
	@media only screen and (min-width: 768px) {

		.card {
			margin: 10px 0;
		}

		.div-immagine, .informazioni {
			display: inline;
			float: left;
		}

		.div-immagine {
			width: 30%;
			margin-right: 5%;
		}

		.div-immagine > img {
			width: 100%;
		}

		.informazioni {
			width: 65%;
		}

		.clear {
			clear: both;
		}
	}


	/* Media query per smartphone */
	@media only screen and (max-width: 768px) {

		.card {
			margin: 5%;
		}

		.div-immagine {
			text-align: center;
		}

		.div-immagine > img {
			width: 90%;
		}

		.informazioni {
			text-align: center;
		}
	}

</style>