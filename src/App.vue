<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
	<Header />
	<Navbar />
	<RouterView />
	<Footer />
</template>

<style scoped>
	
</style>
