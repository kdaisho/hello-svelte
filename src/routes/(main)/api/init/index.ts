import Host from '../host';
import type { ApiParams } from 'src/types';

const host = Host[process.env.NODE_ENV as keyof typeof Host];
const port = 3009;
const baseUrl = `http://${host}:${port}`;

console.log({ baseUrl });

export default function init({ method, resource = '', data }: ApiParams) {
	return fetch(`${baseUrl}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
