<script lang="ts">
	export let data: { hello: { message: string } };
	$: hello = data.hello;
</script>

<h2>{hello.message}</h2>
