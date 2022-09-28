import { error } from '@sveltejs/kit';
import api from '$lib/api';
import { Method } from '../../enums';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await api(fetch, Method.Get);

	if (res.status === 200) {
		return {
			hello: await res.json()
		};
	}

	// handles unknown errors by rendering the nearest +error.svelte
	throw error(res.status);
};
