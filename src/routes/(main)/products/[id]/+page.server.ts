import { error, redirect, type LoadEvent } from '@sveltejs/kit';
import init from '../../api/init';
import { Method, HttpStatus } from '../../../../enums';

export const load = async ({ params }: LoadEvent) => {
	const res = await init({ method: Method.Get, resource: `products/${params.id}` });

	switch (res.status) {
		case HttpStatus.NOT_FOUND:
		case HttpStatus.NO_CONTENT:
			throw redirect(307, '/products');
		case HttpStatus.OK:
			return {
				product: await res.json()
			};
		default:
			throw error(res.status);
	}
};
