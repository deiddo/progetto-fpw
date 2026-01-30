<template>
	<header>
		<div id="divLogo">
			<RouterLink to="/"><img src="../assets/img/logo.png" alt="Logo Spoti Pati" id="logo"></RouterLink>
		</div>

		<div id="divNome">
			<p class="nomeSito">SPOTI PATI</p>
			<p class="subtitle">Museo virtuale di oggetti strani</p>
		</div>
		
		<div class="clear"></div>
	</header>
</template>

<style scoped>

	header {
		margin: 0;
		padding-top: 15px;
		
		font-family: 'Skorzhen-NCV';
		background: radial-gradient(circle, var(--neroSfondoSec) 25%, var(--neroSfondo));
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
		#divLogo, #divNome {
			display: inline;
			float: left;
		}

		.nomeSito {
			font-size: 4em;
		}
		
		.clear {
			clear: both;
		}
	}



	/*	Media query per smartphone	*/
	@media only screen and (max-width: 768px) {

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