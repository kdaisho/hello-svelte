import { error, type LoadEvent } from '@sveltejs/kit';
import api from '$lib/api';
import { Method } from '../../enums';

export const load = async ({ fetch }: LoadEvent) => {
	const res = await api(fetch, Method.Get);

	if (res.status === 200) {
		return {
			hello: await res.json()
		};
	}

	// handles unknown errors by rendering the nearest +error.svelte
	throw error(res.status);
};
