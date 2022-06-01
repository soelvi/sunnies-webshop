<template>
	<div>
		<Header/>
		<Products/>
		<Footer/>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import Products from '../components/Products.vue';
import Footer from '../components/Footer.vue';

	export default {
		components: {
			Header,
			Products,
			Footer
		},
	}
</script>

<style>

</style>