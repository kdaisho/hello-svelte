<script lang="ts">
	import type { Product } from 'src/types';

	export let data: {
		products: Product[];
		error: Error;
	};

	$: products = data.products;
	$: error = data.error;
</script>

<h1 class="title">Products</h1>

<main>
	{#if error}
		<div>{error.message}</div>
	{/if}

	{#if products}
		<div class="cards">
			{#each products as product}
				<div class="card">
					<h3 class="name">{product.name}</h3>
					<p>{product.description}</p>
					<button class="btn-primary">
						<a href="/products/{product.id}">Details</a>
					</button>
				</div>
			{/each}
		</div>
	{/if}
</main>

<style lang="scss">
	.name {
		font-size: var(--font-size-large);
	}

	.cards {
		display: flex;
		flex-flow: row wrap;
		gap: 0.75rem;
		padding: 1.5rem 0;
	}
</style>
