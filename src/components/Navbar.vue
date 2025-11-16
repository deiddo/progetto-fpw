<script setup>
</script>

<template>
	<nav>
		<ul>
			<li><RouterLink to="/">HOME</RouterLink></li>
			<li><RouterLink to="/elenco">ELENCO</RouterLink></li>
			<li><RouterLink to="/inserimento">INSERIMENTO</RouterLink></li>
			<li><RouterLink to="/about">ABOUT</RouterLink></li>
			<li><RouterLink to="/login">LOGIN</RouterLink></li>
		</ul>
	</nav>
</template>

<style scoped>

	nav {
		background-color: var(--rossoScuro);
		text-align: center;

		padding: 15px 0;
		clear: both;
	}

	nav ul {
		margin: 0;
		padding: 0;
	}

	nav li{		
		font-family: 'ChuckNoon';

		list-style-type: none;
	}

	nav li:hover {
		text-decoration: underline;
	}


	/*	Media query per desktop	*/
	@media only screen and (min-width: 768px) {
		nav {
			position: sticky;
			top: 0;
		}

		nav li {
			display: inline;
			margin-right: 5%;
			font-size: 1.7em;
		}
	}

	/*	Media query per smartphone	*/
	@media only screen and (max-width: 768px) {
		nav li {
			display: block;

			margin-top: 5px;
			font-size: 1.5em;
		}
	}

</style>