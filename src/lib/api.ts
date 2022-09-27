const baseUrl = 'http://localhost:3000';

export default function api(method: string, resource: string = '', data?: Record<string, unknown>) {
	return fetch(`${baseUrl}/${resource}`, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
