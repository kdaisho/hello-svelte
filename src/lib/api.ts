import type { ApiParams } from 'src/types';

const host = process.env.NODE_ENV === 'development' ? '0.0.0.0' : '35.183.5.18';
const port = 3009;

const baseUrl = `http://${host}:${port}`;

console.log({ baseUrl });

export default function api({ method, resource = '', data }: ApiParams) {
	return fetch(`${baseUrl}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
