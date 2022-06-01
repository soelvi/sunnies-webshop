<template>
	<div class="header">
		<div class="header__title">
		{{ title }}
		</div>
		<div class="header__cart">
			<Cart/>
		</div>
	</div>
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
</style>