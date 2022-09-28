import { error, type LoadEvent } from '@sveltejs/kit';
import api from '$lib/api';
import { Method, HttpStatus } from '../../../enums';

export const load = async ({ fetch }: LoadEvent) => {
	const res = await api(fetch, Method.Get, 'products');

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
				products: await res.json()
			};
		default:
			throw error(res.status);
	}
};
