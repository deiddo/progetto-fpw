<script setup>

</script>

<template>
	<header>
		<div class="container">
			<div id="divLogo">
				<img src="../assets/img/logo.png" alt="Logo Spoti Pati" id="logo">
			</div>

			<div id="divTitle">
				<p class="title">SPOTI PATI</p>
				<p class="subtitle">Museo virtuale di oggetti strani</p>
			</div>
		</div>
	</header>
</template>

<style scoped>

	.container {
		margin: 0;
		padding-top: 15px;
		display: block;
		width: 100%;
		height: auto;
		background-color: var(--neroSfondo);
	}

	#divLogo {
		float: left;
	}

	.title {
		margin: 0;
		
		font-size: 9vh;
		font-weight: bolder;
		color: var(--coloreTitolo);
	}

	.subtitle {
		color: var(--bianco);
	}


	@media only screen and (max-width: 768px) {
		.title {
			font-size: 4em;
		}
	}


</style>