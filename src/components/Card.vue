<script>

	export default {
		props: {
			immagine: {
				type: String,
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
		},
	}

</script>

<template>

	<div class="card">

		<img v-show="immagine != null" :src="immagine"  class="immagine">

		<div class="informazioni">
			<div class="nome">
				<p>{{ nome }}</p>
			</div>

			<div v-show="descrizione != null" class="descrizione">
				<p>{{ descrizione }}</p>

				<p v-show="ritrovamento != null"><b>Ritrovamento:</b> {{ ritrovamento }}</p>

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
		margin: 10px 0;
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
		font-weight: bolder;
	}


	/* Media query per desktop */
	@media only screen and (min-width: 768px) {

		.immagine {
			float: left;
			margin-right: 5%;
		}

		.informazioni {
			height: 100%;
		}

		.clear {
			clear: both;
		}
	}


	/* Media query per smartphone */
	@media only screen and (max-width: 768px) {
		.immagine {
			width: 100%;
			margin: 10% 0;
			
			text-align: center;
		}

		.informazioni {
			text-align: center;
		}
	}

</style>