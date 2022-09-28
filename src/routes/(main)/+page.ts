import { error } from '@sveltejs/kit';
import api from '$lib/api';
import { Method } from '../../enums';
import type { LoadParams } from 'src/types';

export const load = async ({ fetch }: Omit<LoadParams, 'params'>) => {
	const res = await api(fetch, Method.Get);

	if (res.status === 200) {
		return {
			hello: await res.json()
		};
	}

	// handles unknown errors by rendering the nearest +error.svelte
	throw error(res.status);
};
