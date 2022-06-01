<template>
	<div>
		<Header/>
		<Product/>
		<Footer/>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import Product from '../components/Product.vue';
import Footer from '../components/Footer.vue';

	export default {
		components: {
			Header,
			Product,
			Footer
		},
	}
</script>

<style>

</style>