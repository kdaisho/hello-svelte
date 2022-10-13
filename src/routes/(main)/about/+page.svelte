<script lang="ts">
	import type { Recipe } from './types';
	import { getDocumentTitle } from '$lib/utils';

	let a = 0;
	let b = 0;
	let total = 0;
	let recipe: Recipe;

	async function add() {
		const response = await fetch('/api/about', {
			method: 'POST',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json'
			}
		});
		total = (await response.json()) as number;
	}

	async function getRecipe() {
		const response = await fetch('/api/about');
		recipe = (await response.json()) as Recipe;
	}
</script>

<svelte:head>
	<title>{getDocumentTitle('About')}</title>
</svelte:head>

<h1 class="title">About Us</h1>

<main>
	<div class="card">
		<div class="inputs">
			<p>Add two numbers</p>
			<input type="number" bind:value={a} />
			<input type="number" bind:value={b} />
		</div>
		<button class="btn-primary is-api" on:click={add}>Calculate</button>
		<div class="result">
			Result: {total}
		</div>
	</div>

	<div class="card">
		<button class="btn-primary is-api" on:click={getRecipe}>Get Recipe</button>
		<div class="result">
			Recipe
			{#if recipe}
				<ul>
					<li>
						name: {recipe.title}
					</li>
					<li>
						ingredients: {recipe.ingredients}
					</li>
					<li>
						description: {recipe.description}
					</li>
				</ul>
			{/if}
		</div>
	</div>
</main>

<style src="./styles.scss"></style>
