<script>

	import { RouterLink } from 'vue-router';
	import { useSessionStore } from '@/stores/session';

	export default {
		components: {
			RouterLink
		},

		data() {
			return {
				sessionStore: useSessionStore(),
			}
		},

		methods: {
			checkUser() {
				if(this.sessionStore.getUser() == null) {
					return false;
				} else {
					return true;
				}
			}
		},

		mounted() {
			this.checkUser();
		}
	}

</script>

<template>
	<nav>
		<ul>
			<li><RouterLink to="/">HOME</RouterLink></li>
			<li v-show="checkUser()"><RouterLink to="/elenco">ELENCO</RouterLink></li>
			<li v-show="checkUser()"><RouterLink to="/inserimento">AGGIUNGI</RouterLink></li>
			<li><RouterLink to="/about">CHI SIAMO</RouterLink></li>
			<li v-show="!checkUser()"><RouterLink to="/login">LOGIN</RouterLink></li>
			<li v-show="checkUser()"><RouterLink to="/profilo">PROFILO</RouterLink></li>
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

	.router-link-active {
		color: var(--oro);
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

		nav li:last-child {
			margin-right: 0;
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