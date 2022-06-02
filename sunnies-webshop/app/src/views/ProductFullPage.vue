<template>
	<main class="product">
		<section class="header">
			<Header />
		</section>

		<router-link to="/">back to /home</router-link>

		<div v-if="loading">Loading product...</div>
		<div v-else class="product__info">
				<h2> {{ result.productTitle }} </h2>

				<img :src="result.productImage.asset.url" alt="product image" class="invitation__image">
 
				<div> {{ result.price}} </div>
		</div>

		<section class="footer">
			<Footer />
		</section>
	</main>
</template>

<script>
import query from '../groq/product.groq?raw';
import sanityMixins from '../mixins/sanityMixins';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


export default {
	
	mixins: [sanityMixins],

	components: {
		Header,
		Footer
	},

	async created() {
		await this.sanityFetch(query, {
			slug: this.$route.params.slug
		});
	},

	props: {
		slug: {
			type: String
		}
	},
}
</script>
   