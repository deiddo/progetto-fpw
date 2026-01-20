<script>

</script>

<template>
	<header>
		<div id="divLogo">
			<RouterLink to="/"><img src="../assets/img/logo.png" alt="Logo Spoti Pati" id="logo"></RouterLink>
		</div>

		<p class="nomeSito">SPOTI PATI</p>
		<p class="subtitle">Museo virtuale di oggetti strani</p>
		
	</header>
</template>

<style scoped>

	header {
		margin: 0;
		padding-top: 15px;

		display: block;
		
		width: 100%;
		height: auto;
		
		font-family: 'Skorzhen-NCV';
		background-color: var(--neroSfondo);
	}

	.nomeSito {
		margin: 0;
		
		font-weight: bolder;
		color: var(--oro);
	}

	.subtitle {
		color: var(--bianco);
	}


	/*	Media query per desktop	*/
	@media only screen and (min-width: 768px) {
		#divLogo {
			float: left;
		}

		.nomeSito {
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
		
		.nomeSito {
			text-align: center;
			font-size: 3em;
		}

		.subtitle {
			display: none;
		}
	}


</style>