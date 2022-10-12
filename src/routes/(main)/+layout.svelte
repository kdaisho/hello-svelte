<script lang="ts">
	import '$styles/reset.scss';
	import '$styles/global.scss';
</script>

<header>
	<div class="container">
		<h2>
			<a href="/">Sample App</a>
		</h2>
		<nav>
			<ul>
				<li>
					<a href="/" data-sveltekit-prefetch>Home</a>
				</li>
				<li>
					<a href="/products" data-sveltekit-prefetch>Products</a>
				</li>
				<li>
					<a href="/about" data-sveltekit-prefetch>About Us</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<main class="container is-body">
	<slot />
</main>

<style src="./styles.scss"></style>
