<script lang="ts">
	import { getDocumentTitle } from '$lib/utils';
	export let data: { message: string };
</script>

<svelte:head>
	<title>{getDocumentTitle('Home')}</title>
</svelte:head>

<h1 class="title">{data.message}</h1>
