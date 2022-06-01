import Home from './views/Home.vue';
import ProductFullPage from './views/ProductFullPage.vue';

export default [
	{ 
		name: 'productFullPage', 
		path: '/products/:slug',
		component: ProductFullPage
	},
	{ 
		name: 'home', 
		path: '/', 
		component: Home 
	},
];
