import { json } from '@sveltejs/kit';
import { baseUrl } from '../../api/host';

export async function POST({ request }: { request: Request }) {
	const { a, b } = await request.json();
	return json(a + b);
}

export async function GET() {
	const response = await fetch(`${baseUrl}/about/recipe`);
	const data = await response.json();
	return json(data);
}
