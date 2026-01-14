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

			utente: {
				type: String,
				required: false
			}
		},
	}

</script>

<template>

	<div class="card">

		<div v-show="immagine != null" class="immagine">
			<img :src="immagine" alt="">
		</div>

		<div class="informazioni">
			<div class="nome">
				<p>{{ nome }}</p>
			</div>

			<div class="descrizione">
				<p>{{ descrizione }}</p>
				<p v-show="utente != null"><i>Aggiunto da {{ utente }}</i></p>
			</div>
		</div>

		<div class="clear" />

	</div>

</template>

<style scoped>

	.card {
		margin: 10px 0;
		padding: 2% 10%;

		background-color: var(--rossoScuro);
		color: var(--bianco);
		font-family: sans-serif;
	}

	.immagine {
		height: 100%;
		text-align: center;
	}

	.nome, .descrizione {
		display: block;
		overflow-wrap: anywhere;
	}

	.nome p {
		font-size: 3.5vh;
		font-weight: bolder;
	}


	/* Media query per desktop */
	@media only screen and (min-width: 768px) {

		.immagine {
			float: left;
			width: 35%;

			overflow: hidden;
		}

		.immagine img {
			width: 300px;
		}

		.informazioni {
			height: 100%;
			margin-left: 5%;
		}

		.clear {
			clear: both;
		}
	}


	/* Media query per smartphone */
	@media only screen and (max-width: 768px) {

		.immagine {
			width: 100%;
			position: relative;
			margin: 10% 0;
			overflow: hidden;
		}

		.immagine img {
			width: 300px;
		}

		.informazioni {
			margin: 0;
			text-align: center;
		}
	}

</style>