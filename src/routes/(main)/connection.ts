import { JSONRPCClient, type JSONRPCResponse } from 'json-rpc-2.0';

const client = new JSONRPCClient(async (request) => {
	try {
		const response = await fetch('http://0.0.0.0:3009', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(request)
		});
		const data = (await response.json()) as JSONRPCResponse | JSONRPCResponse[];
		client.receive(data);
	} catch (err: Error | unknown) {
		return Promise.reject(new Error(err as string));
	}
});

export default client;
