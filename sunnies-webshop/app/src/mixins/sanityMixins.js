import sanity from '../sanity.js';

export default {
	data() {
		return {
			loading: true,
			result: null
		}
	},

	methods: {
		//fetches all data fra api query
		async sanityFetch(query) {
			this.result = await sanity.fetch(query);
			this.loading = false;
		},
	}
}