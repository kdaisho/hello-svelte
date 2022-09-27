<script lang="ts">
	export let data: { hello: { message: string } };
	$: hello = data.hello;
</script>

<h1 class="title">{hello.message}</h1>
