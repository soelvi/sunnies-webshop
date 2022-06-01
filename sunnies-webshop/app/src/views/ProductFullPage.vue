<template>
	<div>
		HALLO HER SKAL DET BARE VÆRE ETTTTT ENESTE PRODUKT!!! KOMMER SNART
	</div>
</template>

<script>

    export default {
		 
		props: {
			product: {
					type: Object
			}
		},

		methods: {
			addToCart(product) {
					this.$store.dispatch('addToCart', product);
			}
		}
    }
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

	// export default {
	// 	data() {
	// 		return {
	// 			loading: true,
	// 			result: null
	// 		}
	// 	},
		
	// 	async created() {
	// 		/* QUERY + PARAMS = sanityQueryURL */
	// 		const sanityQueryURL = 'https://32td7jzv.api.sanity.io/v2021-10-21/data/query/production?query=*%5Bslug.current%20%3D%3D%20%24slugParameter%5D%5B0%5D%20%7B%0A%09%09_id%2C%20%0A%0A%09%09title%2C%0A%09%09slug%2C%0A%09%09%0A%09%09client-%3E%20%7B%0A%09%09%09name%0A%09%09%7D%0A%09%7D&%24slugParameter=%22alfa%22';

	// 		const sanityResponse = await fetch(sanityQueryURL);
	// 		const { result } = await sanityResponse.json();
			
	// 		this.result = result;
	// 		this.loading = false;
	// 	}
	// }
</script>