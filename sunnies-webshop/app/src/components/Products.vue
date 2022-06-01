<template>
	<div v-if="loading">Loading fresh sunnies...</div>
		<div v-else class="allProducts">
			<ul v-for="product, index in result" class="product" :key="product._id">
				<router-link :to="{ name: 'productFullPage', params: { slug: product.slug.current }}">	
					<img :src="result[index].productImage.asset.url" alt="sunglasses" class="product__images">
				</router-link>

				<li>{{ result[index].productTitle }}</li>
				<li>{{ result[index].price }} NOK </li>
				<button @click="addProductToCart(product)" class="button__addToCart">Add to cart</button>
				<div class="overlay">
					<div class="overlay__text">
						<p> {{ result[index].description }} </p> <br>
						<p> {{ result[index].price }} NOK </p>
					</div>
				</div>
			</ul>
		</div>
</template>


<script>
import query from '../groq/home.groq?raw';
import sanityMixins from '../mixins/sanityMixins';

export default {
	
	mixins: [sanityMixins],

	async created() {
		await this.sanityFetch(query, {
			type: 'product'
		});
	},

	computed: {
		// henter ett product fra modules
		product() {
			return this.$store.getters.getProduct; 
		},

		getCart() {
			return this.$store.getters.getCart;
		},
	},
	
	methods: {
		addProductToCart(product) {
			this.$store.commit('addToCart', product)
			// this.$store.dispatch('setToLocalStorage', product)
			console.log('klikket product til cart')
		}
	}
}

</script>

<style>
.allProducts {
	padding: 2%;
	width: 100%;
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 10px;
	grid-auto-rows: minmax(100px, auto);
}

.product {
	position: relative;
}

.product__images {
	display: block;
  	width: 100%;
  	height: auto;
}

li {
	list-style: none;
	line-height: 2;
}

router-link {
	text-decoration: none;
}

.button__addToCart{
	background-color: orange;
	padding: 5px; 
	border-radius: 10px;
}

.overlay {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 79%;
	width: 100%;
	opacity: 0;
	transition: .5 ease;
	background-color: orange;
}

.product:hover .overlay {
	opacity: 0.8;
}

.overlay__text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

/* 800px tablet and smaller -- mobile */
@media screen and (max-width: 800px) { 
	.allProducts {
		grid-template-columns: repeat(2, 1fr);
	}

	.overlay {
	height: 72%;
	}

	.overlay__text {
	font-size: var(--font-size-small);
	}
}
</style>