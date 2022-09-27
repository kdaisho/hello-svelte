<script>
	import '../../styles/reset.scss';
	import '../../styles/global.scss';
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

<style lang="scss">
	header {
		align-items: center;
		background: var(--primary-color);
		display: flex;
		height: 50px;

		.container {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
		}

		a {
			color: #fff;
		}

		ul {
			display: flex;
			gap: 1rem;

			li:hover {
				text-decoration: underline;
			}
		}
	}

	.container {
		margin: 0 auto;
		max-width: 960px;
		width: 100%;

		&.is-body {
			padding-top: 3rem;
		}
	}
</style>
