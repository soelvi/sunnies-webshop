<template>
	<main v-if="!error" class="product" >
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
	<div v-if="error" class="errors"> {{ error }} </div>
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

	data() {
			return {
				error: '',
			}
		},	

	async created() {
		await this.sanityFetch(query, {
			slug: this.$route.params.slug
		});
	},

	async handleResponse(response) {
		if (response.status >= 200 && response.status < 300) {
			const results = await response.json();
			this.product = results;
			return true; 
		}	else	{
			if(response.status === 404) {
				throw new Error('Url ikke funnet..');
			}
			if(response.status === 401) {
				throw new Error('Ikke autorisert ');
			}
			if(response.status > 500) {
				throw new Error('Server error!');
			}
			throw new Error (' Woops, noe gikk galt!');
		}
	},

	props: {
		slug: {
			type: String
		}
	},
}
</script>

<style>
.errors {
	font-size: 36px;
	color: red;
	padding: 100px;	
}
</style>
   