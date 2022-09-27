<script lang="ts">
	import '../reset.scss';
	import '../global.scss';

	export let data: { hello: { message: string } };
	$: hello = data.hello;
</script>

<main>
	<h1>{hello.message}</h1>
</main>
