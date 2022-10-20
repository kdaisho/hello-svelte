<script lang="ts">
	import type { Product } from '../types';

	export let data: Product;
</script>

{#if 'name' in data}
	<div class="card">
		<h1 class="title">{data.name}</h1>
		<p>{data.description}</p>
	</div>
{/if}

<div class="footer">
	<a href="/products" data-sveltekit-prefetch>← All products</a>
</div>

<style lang="scss">
	.footer {
		margin-top: 3rem;
	}
</style>
