<script lang="ts">
	import type { Product } from '$types';

	export let data: { product: Product };
	$: product = data.product;
</script>

<div class="card">
	<h1 class="title">{product.name}</h1>
	<p>{product.description}</p>
</div>

<div class="footer">
	<a href="/products" data-sveltekit-prefetch>← All products</a>
</div>

<style lang="scss">
	.footer {
		margin-top: 3rem;
	}
</style>
