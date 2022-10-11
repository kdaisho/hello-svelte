import Host from '../../api/host';
import { json } from '@sveltejs/kit';

const host = Host[process.env.NODE_ENV as keyof typeof Host];
const port = 3009;
const baseUrl = `http://${host}:${port}`;

console.log({ baseUrl });

export async function POST({ request }: { request: Request }) {
	const { a, b } = await request.json();
	return json(a + b);
}

export async function GET() {
	const response = await fetch(`${baseUrl}/about/recipe`);
	const data = await response.json();
	return json(data);
}
