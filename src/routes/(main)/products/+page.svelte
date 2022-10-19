<script lang="ts">
	import type { Product } from '$types';
	import { getDocumentTitle } from '$lib/utils';

	export let data: {
		products: Product[];
		error: Error;
	};
	const { products, error } = data;
</script>

<svelte:head>
	<title>{getDocumentTitle('Products')}</title>
</svelte:head>

<h1 class="title">Products</h1>

<main>
	{#if error}
		<div>{error}</div>
	{/if}

	{#if products}
		<div class="cards">
			{#each products as product}
				<div class="card">
					<h3 class="name">{product.name}</h3>
					<p>{product.description}</p>
					<button class="btn-primary">
						<a href="/products/{product.id}" data-sveltekit-prefetch>Details</a>
					</button>
				</div>
			{/each}
		</div>
	{/if}
</main>

<style src="./styles.scss"></style>
