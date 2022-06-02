import product from './modules/product';

export default {
	state() {
		return { 
			allProducts: [],  // all data in array available for all components
			cart: [] //empty array for products added to cart
		};
	},

	getters: {
		getProducts(state) {
			return state.products;
		},
	},

	mutations: {
      setProducts(state, products) {
         state.products = products;
      },
    },

	modules: {
		product
	}
};
