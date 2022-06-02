<template>
	<section class="header">
		<h2 class="header__title">
		{{ title }}
		</h2>
		<span class="header__cart">
			<Cart/>
		</span>
	</section>
</template>

<script>
	import Cart from './Cart.vue'

	export default {
		components: {
			Cart,
		},

		data() {
			return {
				title: 'SUNNIES'
			}
		}
	}
</script>

<style>
	.header {
		position: relative;
		width: 100vw;
		padding: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.header__title {
		font-family: var(--font-style-titles);
		font-size: 80px;
		padding-left: 15px;
	}

	.header__cart {
		display: flex;
		justify-content: flex-end;
		z-index: 1;
	}

	/* 800px tablet and smaller -- mobile */
	@media screen and (max-width: 800px) { 
		.header__title {
			font-size: 60px;
			padding-left: 15px;
		}
	}
</style>