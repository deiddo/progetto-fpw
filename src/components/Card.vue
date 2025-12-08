<script>

	export default {
		props: {
			immagine: {
				type: String,
				required: true
			},

			nome: {
				type: String,
				required: true
			},

			descrizione: {
				type: String,
				required: true
			}
		}
	}

</script>

<template>

	<div class="card">

		<div class="immagine">
			<img :src="immagine" alt="">
		</div>

		<div class="informazioni">
			<div class="nome">
				<p>{{ nome }}</p>
			</div>

			<div class="descrizione">
				<p>{{ descrizione }}</p> 
			</div>
		</div>

	</div>

</template>

<style scoped>

	.card {
		margin: 10px 0;
		padding: 30px 0;
		overflow: hidden;
		height: auto;

		background-color: var(--rossoScuro);
		color: var(--bianco);
		font-family: sans-serif;
	}

	.immagine {
		float: left;
		width: 25%;
		height: 100%;

		outline: solid 1px black;
	}

	.immagine img {
		margin-top: 20%;
		margin-left: 20%;
	}

	.informazioni {
		margin-left: 25%;
		height: 100%;

		outline: solid 1px black;
	}

	.nome, .descrizione {
		display: block;
	}

	.nome p {
		font-size: 3.5vh;
		font-weight: bolder;
	}


	@media only screen and (max-width: 768px) {
		.immagine {
			width: 100%;
			position: relative;
			margin: 10% 0;
		}

		.immagine img {
			margin: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.informazioni {
			margin: 0;
			text-align: center;
		}
	}



</style>