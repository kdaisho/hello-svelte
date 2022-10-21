import { JSONRPCClient, type JSONRPCResponse } from 'json-rpc-2.0';

console.log({ environment: process.env.NODE_ENV });

const host =
	process.env.NODE_ENV === 'development' ? '0.0.0.0' : 'hello-project-service-deno.local';

const client = new JSONRPCClient(async (request) => {
	try {
		const response = await fetch(`http://${host}:3009`, {
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
