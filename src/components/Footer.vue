<script setup>

</script>

<template>

	<footer>
		
		<div id="divNomeGruppo">
			<p>NOSFERATERS</p>
		</div>

		<div id="divComponenti">
			<ul>
				<li>ALESSANDRO DEIDDA</li>
				<li>FRANCESCO MAMELI</li>
				<li>GABRIELE PODDA</li>
				<li>RICCARDO CAU</li>
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
		text-align: center;
	}

	#divComponenti ul {
		margin: 0;
		padding: 0;
	}

	#divComponenti li {
		list-style-type: none;
		display: inline;

		margin-right: 5%;
	}

	@media only screen and (max-width: 768px) {
		#divComponenti li {
			display: block;
		}
	}
</style>