import { HttpStatus, Method } from '$types/enums';
import { error } from '@sveltejs/kit';
import init from '$routes/(main)/api';

export const load = async () => {
	const res = await init({ method: Method.Get, resource: 'products' });

	switch (res.status) {
		case HttpStatus.NOT_FOUND:
			return {
				error: {
					status: res.status,
					message: 'Products could not be found.'
				}
			};
		case HttpStatus.OK:
			return {
				products: (await res.json()) as Record<string, unknown>
			};
		default:
			throw error(res.status);
	}
};
