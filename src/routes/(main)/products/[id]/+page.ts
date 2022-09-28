import { error, redirect, type LoadEvent } from '@sveltejs/kit';
import api from '$lib/api';
import { Method, HttpStatus } from '../../../../enums';

export const load = async ({ fetch, params }: LoadEvent) => {
	const res = await api(fetch, Method.Get, `products/${params.id}`);

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
