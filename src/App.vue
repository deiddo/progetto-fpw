<script>
	import { RouterLink, RouterView } from 'vue-router'
	import Header from './components/Header.vue';
	import Navbar from './components/Navbar.vue';
	import Footer from './components/Footer.vue';

	export default {
		components: {
			Header,
			Navbar,
			Footer
		}
	}
</script>

<template>
	<Header />
	<Navbar />
	<RouterView />
	<Footer />
</template>

<style scoped>
	
</style>
