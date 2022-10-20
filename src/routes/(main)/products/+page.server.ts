import client from '$routes/(main)/connection';

export const load = () => {
	return new Promise((resolve) => {
		const promise: PromiseLike<unknown> = client.request('GetProducts');
		return resolve({ products: promise });
	});
};
