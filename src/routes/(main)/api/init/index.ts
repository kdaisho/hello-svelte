import { baseUrl } from '../../api/host';
import type { ApiParams } from 'src/types';

export default function init({ method, resource = '', data }: ApiParams) {
	return fetch(`${baseUrl}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
