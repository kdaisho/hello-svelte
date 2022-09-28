import { error } from '@sveltejs/kit';
import api from '$lib/api';
import type { LoadParams } from 'src/types';
import { Method, HttpStatus } from '../../../enums';

export const load = async ({ fetch }: Omit<LoadParams, 'params'>) => {
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
