<template>
	<div>
		<!-- <div>Currently at: /{{ $route.params.pageID }}</div> -->
		<div v-if="loading">...</div>
		<div v-else>
			<ul v-for="product in products">
				<li>Title: {{ result.products }}</li>
				<!-- <li v-if="products">Product: {{ products }}</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
/* 
	********* QUERY *********

	*[slug.current == $slugParameter][0] {
		_id, 

		title,
		slug,
		
		client-> {
			name
		}
	}

	********* PARAMS *********

	{
		"slugParameter": "alfa" //men egentlig $route.params.pageID?
	}
*/

	export default {
		data() {
			return {
				loading: true,
				result: null,
			}
		},
		
		async created() {
			/* QUERY + PARAMS = sanityQueryURL */
			const sanityQueryURL = 'https://3iqet2ct.api.sanity.io/v2021-10-21/data/query/webshop?query=%7B%0A%20%20%22products%22%3A%20%20*%5B_type%20%3D%3D%20%27product%27%5D%20%7B%0A%20%20%20...%2C%0A%20%20%0A%20%20productImage%20%7B%0A%20%20asset-%3E%20%7B%0A%20%20url%20%0A%20%7D%0A%7D%2C%0A%0AproductColor%5B%5D-%3E%20%7B%0A%20%20%20%20productColor%0A%20%20%7D%2C%0A%0AproductStyle%5B%5D-%3E%20%7B%0A%20%20productStyle%0A%7D%2C%0A%0Awarranty%5B%5D-%3E%20%7B%0A%20%20productWarranty%0A%7D%0A%20%20%20%7D%0A%0A%7D';

			const sanityResponse = await fetch(sanityQueryURL);
			const { result } = await sanityResponse.json();
			
			this.result = result;
			this.loading = false;
		},
		
		// methods: {
		// 	fetchProducts() {
		// 		const product = this.result.products
		// 		this.fetchProducts = product
		// 	}
		// }


	}
</script>