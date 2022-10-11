import { baseUrl } from './host';
import type { ApiParams } from 'src/types';

export default function api({ method, resource = '', data }: ApiParams) {
	return fetch(`${baseUrl}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
