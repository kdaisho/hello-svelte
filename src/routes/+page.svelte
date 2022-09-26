<script>
	import '../global.css';

	export let data;
	$: hello = data.hello;
</script>

<h1>{hello.message}</h1>
