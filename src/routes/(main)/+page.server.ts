import { error } from '@sveltejs/kit';
import api from '$lib/api';
import { Method } from '../../enums';

export const load = async () => {
	const res = await api({ method: Method.Get });

	if (res.status === 200) {
		return {
			hello: await res.json()
		};
	}

	// handles unknown errors by rendering the nearest +error.svelte
	throw error(res.status);
};
