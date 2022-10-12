import { HttpStatus, Method } from '$types/enums';
import { error, redirect } from '@sveltejs/kit';
import init from '$routes/(main)/api';

export const load = async ({ params }: { params: { id: string } }) => {
	const res = await init({ method: Method.Get, resource: `products/${params.id}` });

	switch (res.status) {
		case HttpStatus.NOT_FOUND:
		case HttpStatus.NO_CONTENT:
			throw redirect(307, '/products');
		case HttpStatus.OK:
			return {
				product: (await res.json()) as Record<string, unknown>
			};
		default:
			throw error(res.status);
	}
};
