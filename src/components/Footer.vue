<script>

</script>

<template>

	<footer>
		
		<div id="divNomeGruppo">
			<p>NOSFERATERS</p>
		</div>

		<div id="divComponenti">
			<ul>
				<li>CAU RICCARDO</li>
				<li>DEIDDA ALESSANDRO</li>
				<li>MAMELI FRANCESCO</li>
				<li>PODDA GABRIELE</li>
				<li>email@a.a</li>
			</ul>
		</div>

	</footer>

</template>

<style scoped>

	footer {
		background-color: var(--rossoScuro);
		clear: both;
		width: 100%;
		padding: 15px 0;

		color: var(--bianco);
	}

	#divNomeGruppo, #divComponenti {
		font-family: sans-serif;

		text-align: center;
	}

	#divComponenti ul {
		margin: 0;
		padding: 0;
	}

	#divComponenti li {
		list-style-type: none;
	}


	/*	Media query per desktop	*/
	@media only screen and (min-width: 768px) {
		#divComponenti li {
			display: inline;
			margin-right: 2%;
		}
	}


	/*	Media query per smartphone	*/
	@media only screen and (max-width: 768px) {
		#divComponenti li {
			display: block;
		}
	}
</style>