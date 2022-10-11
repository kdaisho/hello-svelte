import { error } from '@sveltejs/kit';
import init from './api/init';
import { Method } from '../../enums';

export const load = async () => {
	const res = await init({ method: Method.Get });

	if (res.status === 200) {
		return {
			hello: await res.json()
		};
	}

	// handles unknown errors by rendering the nearest +error.svelte
	throw error(res.status);
};
