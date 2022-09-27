<script>
	import '../../styles/reset.scss';
	import '../../styles/global.scss';
</script>

<header>
	<h1>Sample App</h1>
	<nav>
		<ul>
			<li>
				<a href="/products" data-sveltekit-prefetch>Products</a>
			</li>
			<li>
				<a href="/about">About Us</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<style lang="scss">
	header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;

		ul {
			display: flex;
		}
	}
</style>
