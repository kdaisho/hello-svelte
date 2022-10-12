<script lang="ts">
	import { getTitle } from '$lib/utils';
	export let data: { hello: { message: string } };
	$: hello = data.hello;
</script>

<svelte:head>
	<title>{getTitle('Home')}</title>
</svelte:head>

<h1 class="title">{hello.message}</h1>
