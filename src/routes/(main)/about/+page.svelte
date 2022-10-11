<script lang="ts">
	let a = 0;
	let b = 0;
	let total = 0;
	let recipe: { title: string; ingredients: string; description: string };

	async function add() {
		const response = await fetch('/api/about', {
			method: 'POST',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json'
			}
		});

		total = await response.json();
	}

	async function getRecipe() {
		const response = await fetch('/api/about');
		recipe = await response.json();
	}
</script>

<h1 class="title">About Us</h1>

<div class="inputs">
	<p>Add two numbers</p>
	<input type="number" bind:value={a} />
	<input type="number" bind:value={b} />
</div>

<button class="btn-primary is-api" on:click={add}>Calculate</button>
<button class="btn-primary is-api" on:click={getRecipe}>Get Recipe</button>

<div class="result">
	Result: {total}
</div>

<div class="result">
	Recipe
	{#if recipe}
		<p>
			name: {recipe.title}
		</p>
		<p>
			ingredients: {recipe.ingredients}
		</p>
		<p>
			description: {recipe.description}
		</p>
	{/if}
</div>

<style lang="scss">
	.inputs {
		display: flex;
		flex-flow: column nowrap;
		gap: 0.5rem;
		padding: 1rem 0;

		input {
			font-size: 16px;
			padding: 0.25rem;
			width: 100px;
		}
	}
	button {
		&.is-api {
			color: #fff;
			padding: 0.5rem 1rem;
			width: auto;
		}
	}
	.result {
		padding: 1rem 0;
	}
</style>
