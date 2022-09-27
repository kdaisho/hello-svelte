import { error, redirect } from '@sveltejs/kit';
import api from '$lib/api';
import { Method, HttpStatus } from '../../../../enums';
import type { Params } from 'src/types';

export const load = async ({ params }: Params) => {
	const res = await api(Method.Get, `products/${params.id}`);

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
