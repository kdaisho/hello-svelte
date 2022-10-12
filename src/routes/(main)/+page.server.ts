import { error } from '@sveltejs/kit';
import { Method } from '$types/enums';
import init from '$routes/(main)/api';

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
