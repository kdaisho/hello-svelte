import client from '$routes/(main)/connection';

export const load = async () => {
	return new Promise((resolve) => {
		const promise: PromiseLike<unknown> = client.request('SayHello', {
			greeting: 'Hello'
		});
		resolve({ message: promise });
	});
};
