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

	nav li {
		list-style-type: none;
		display: inline;

		font-size: 2em;
		margin-right: 5%;

		color: var(--bianco);

		transition: 0.3s ease;
	}

	nav li:hover {
		text-decoration: underline;
		transition: 0.3s ease;
	}

	@media only screen and (min-width: 768px) {
		nav {
			position: sticky;
			top: 0;
		}
	}

	@media only screen and (max-width: 768px) {
		nav li {
			display: block;
		}
	}

</style>