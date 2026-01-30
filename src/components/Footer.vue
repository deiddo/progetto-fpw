<template>

	<footer>
		
		<div id="divNomeGruppo">
			<img src="/src/assets/img/logoFooter.png">
		</div>

		<div id="divComponenti">
			<ul>
				<li>Cau Riccardo</li>
				<li>Deidda Alessandro</li>
				<li>Mameli Francesco</li>
				<li>Podda Gabriele</li>
				<li>f.mameli62@studenti.unica.it</li>
			</ul>
		</div>

	</footer>

</template>

<style scoped>

	footer {
		background: radial-gradient(circle, var(--rossoScuro) 35%, var(--rossoScuroSec));
		clear: both;
		padding: 5px 0;

		color: var(--bianco);
		text-align: center;
		font-family: 'ChuckNoon';
	}

	#divComponenti ul {
		margin-top: 20px;
		padding: 0;
	}

	#divComponenti li {
		list-style-type: none;
	}


	/*	Media query per desktop	*/
	@media only screen and (min-width: 768px) {
		
		#divNomeGruppo img {
			width: 10%;
		}

		#divComponenti li {
			display: inline;
			margin-right: 2%;
		}
	}


	/*	Media query per smartphone	*/
	@media only screen and (max-width: 768px) {

		#divNomeGruppo img {
			width: 45%;
		}

		#divComponenti li {
			display: block;
		}
	}
</style>