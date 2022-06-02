<template>
	<section class="cart">
		<button @click="toggle = !toggle" class="showCart"> CART ({{ inCart }}) open/close </button>
		<div v-show="toggle" class="cart__items">
			<div class="cart__item" v-for="(product, index) in cartItems" :key="product._id">
				<img :src="product.productImage.asset.url" alt="sunglasses" class="product__image">
				<span> {{ product.productTitle }} </span>
				<span> {{ product.price }} NOK </span>

				<button class="cart__button-remove" @click="removeItem(index)">remove</button>
			</div>
			<!-- <section>
				<div> SUMMATION </div>
				<div> Total articles: </div>
				<div> Total shipping: </div>
				<div> Total: </div>
				<button class="cart__button-payment"> Continue to payment </button>
			</section> -->
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				toggle: false
			}
		},	

		computed: {
			cartItems() {
				return this.$store.getters.getCartItems;
			},
			
			inCart() {
				return this.$store.getters.getInCart;
			}
		},

		methods: {
			// delete product from cart
			removeItem(itemIndex) {
				this.$store.commit('removeItem', itemIndex)
			},
		}
	}
</script>

<style>
	.cart {
		padding: 2%;
		background: white;
		width: 40%;
		position: absolute;
		text-align: left;
		z-index: 1;
	}

	.cart__button-remove {
		margin-left: 0.25em;
	}

	.product__image {
		width: 120px;
		height: 150px;
	}

	.showCart {
		display: flex;
	}

	.cart__button-payment {
		background-color: black;
		color: white;
		border-radius: 10px;
		padding: 10px;
	}

	.product__quantity{
		display: flex;
	}
</style>
