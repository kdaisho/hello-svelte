<script lang="ts">
	import type { Product } from 'src/types';

	export let data: { product: Product };
	$: product = data.product;
</script>

<header>
	<h1>Product {product?.id}</h1>
</header>

<main />
