<script setup>

</script>

<template>
	<header>
		<div class="container">
			<div id="divLogo">
				<RouterLink to="/"><img src="../assets/img/logo.png" alt="Logo Spoti Pati" id="logo"></RouterLink>
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
		
		font-family: 'Skorzhen-NCV';
		background-color: var(--neroSfondo);
	}

	.title {
		margin: 0;
		
		font-weight: bolder;
		color: var(--coloreTitolo);
	}

	.subtitle {
		color: var(--bianco);
	}


	/*	Media query per desktop	*/
	@media only screen and (min-width: 768px) {
		#divLogo {
			float: left;
		}

		.title {
			font-size: 4em;
		}
	}



	/*	Media query per smartphone	*/
	@media only screen and (max-width: 768px) {
		#divLogo {
			width: 100%;
		}

		#logo {
			display: block;
			margin: auto;
		}
		
		.title {
			text-align: center;
			font-size: 3em;
		}

		.subtitle {
			display: none;
		}

		
	}


</style>