export default {
	state() {
		return { 
			product: null,
			cart: [],
		};
	},

	getters: {
		getProduct(state) {
			return state.product;
		},

		getCartItems(state) {
			return state.cart;
		},

		getInCart(state){
			return state.cart.length;
		},
	},

	mutations: {
      setProduct(state, product) {
         state.product = product;
      },

		addToCart(state, product) {
			state.cart.push(product);
		},

		removeItem(state, itemIndex) {
			state.cart.splice(itemIndex, 1);
		}
    },
}
