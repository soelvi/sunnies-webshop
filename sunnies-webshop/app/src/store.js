import product from './modules/product';

export default {
	state() {
		return { 
			allProducts: [],  // all data i array tilgjengelig for alle componenter
			cart: []
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
		product,
	}

	// getters: { // computed properties
	// 	availableProducts(state, getters) {
	// 		return state.products.filter(product => product.inventory > 0)
	// 	}
	// },

	// actions: { // eqvivalent to methods --> making the call 
	// 	fetchProducts ({commit}) {
	// 		return new Promise((resolve, reject) => {
	// 			//make the ajax call
	// 			store.getProducts(products => {
	// 				commit('setProducts, products')
	// 				resolve()
	// 			})
	// 		})
	// 	},

	// 	addToCart(context, product) {
	// 		if (product.inventory > 0) {
	// 			context.commit('pushProductToCart', product)
	// 		} else {
	// 			// show out of stock message
	// 		}
	// 	}
	// },

	// mutations is for updating products
	// mutations: {
	// 	setProducts(state, products) {
	// 		//update the state and setting the products array = products 
	// 		state.products = products
	// 	}
	// }

};
