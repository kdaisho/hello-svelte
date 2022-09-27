<script lang="ts">
	import type { Product } from 'src/types';

	export let data: {
		products: Product[];
		error: Error;
	};

	$: products = data.products;
	$: error = data.error;
</script>

<header>
	<h1>Products</h1>
</header>

<main>
	{#if error}
		<div>{error.message}</div>
	{/if}

	{#if products}
		{#each products as product}
			<h3>{product.name}</h3>
			<p>{product.description}</p>
		{/each}
	{/if}
</main>
