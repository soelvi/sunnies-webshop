<template>
	<div class="footer">
		<section>
			<ul>
				<li> SUNNIES </li>
				<li> About </li>
				<li> Social media </li>
			</ul>
		</section>
		<section>
			<ul>
				<li> Newsletter </li>
				<li> Subscribe </li>
			</ul>
		</section>
		<section>
			<ul>
				<li> Customer service </li>
				<li> FAQ </li>
				<li> Contact </li>
				<li> Shipping </li>
			</ul>
		</section>
		<section>
			<ul>
				<li> Visit </li>
				<li> Stores </li>
			</ul>
		</section>
	</div>
</template>

<script>
</script>

<style>
	.footer {
		background-color: black; 
		color: white;
		padding: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
	}

	/* 800px tablet and smaller -- mobile */
	@media screen and (max-width: 800px) { 
		.footer {
			font-size: var(--font-size-small);
		}
	}
</style>