import type { ApiParams } from 'src/types';

const host = process.env.NODE_ENV === 'development' ? '0.0.0.0' : 'deno-net';
const port = 3009;

const baseUrl = `http://${host}:${port}`;

export default function api({ method, resource = '', data }: ApiParams) {
	return fetch(`${baseUrl}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
