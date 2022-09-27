const baseUrl = 'http://localhost:3000';

export default function api(method: string, _?: string, data?: Record<string, unknown>) {
	return fetch(baseUrl, {
		method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});
}
