import type { Recipe, SumArgs } from '$routes/(main)/about/types';
import client from '$routes/(main)/connection';

const error = new Error('Oops! something went wrong.');

export async function POST({ request }: { request: Request }) {
	const args = (await request.json()) as SumArgs;
	const result = (await client.request('Sum', args)) as number;

	if (Number.isInteger(result)) {
		return new Response(JSON.stringify({ total: result }), { status: 200 });
	} else {
		return new Response(JSON.stringify({ errorSum: error.message }), { status: 404 });
	}
}

export async function GET() {
	const result = (await client.request('GetRecipe')) as Recipe;

	if (result as unknown) {
		return new Response(JSON.stringify({ recipe: result }), { status: 200 });
	} else {
		return new Response(JSON.stringify({ errorRecipe: error.message }), { status: 404 });
	}
}
