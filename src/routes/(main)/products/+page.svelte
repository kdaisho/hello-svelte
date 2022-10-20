<script lang="ts">
	import type { Product } from './types';
	import { getDocumentTitle } from '$lib/utils';

	export let data: { products: Product[] };
	const { products } = data;
</script>

<svelte:head>
	<title>{getDocumentTitle('Products')}</title>
</svelte:head>

<h1 class="title">Products</h1>

<main>
	{#if products}
		<div class="cards">
			{#each products as { name, description, id }}
				<div class="card">
					<h3 class="name">{name}</h3>
					<p>{description}</p>
					<button class="btn-primary">
						<a href="/products/{id}" data-sveltekit-prefetch>Details</a>
					</button>
				</div>
			{/each}
		</div>
	{/if}
</main>

<style src="./styles.scss"></style>
