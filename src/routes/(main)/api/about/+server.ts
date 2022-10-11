import { json } from '@sveltejs/kit';
import { Method } from '../../../../enums';
import api from '..';

const root = 'about';

export async function POST({ request }: { request: Request }) {
	return await api({
		method: Method.Post,
		resource: `${root}/add`,
		data: await request.json()
	});
}

export async function GET() {
	const response = await api({
		method: Method.Get,
		resource: `${root}/recipe`
	});
	return json(await response.json());
}
