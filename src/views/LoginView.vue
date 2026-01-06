<script>

	import { useSessionStore } from '@/stores/session';
	import * as Auth from '@/utils/auth.js';

	export default {
		data() {
			return {
				username: '',
				password: '',
			}
		},

		methods: {
			async login() {
				console.log('Sono dentro login()');
				const data = await Auth.login(this.username, this.password);

				console.log(data);

				if(data.userID) {
					useSessionStore().setUser(data.userID);
					this.$router.push('/');
				} else {
					alert('Login fallito.');
				}
			},
		}
	}

</script>


<template>
	
	<aside class="col-3" id="a">
		a
	</aside>

	<article class="col-6" id="b">
		
		<div id="login">
			
			<h1 id="login-title">Login</h1>

			<form action="login" method="POST">

				<label for="username">Username</label>
				<input type="text" name="username" id="username" v-model="username">

	
				<label for="password">Password</label>
				<input type="password" name="password" id="password" v-model="password">


				<input type="submit" value="Accedi" @click.stop.prevent="login()">
			</form>

		</div>

	</article>

	<aside class="col-3" id="c">
		c
	</aside>

</template>


<style scoped>

</style>