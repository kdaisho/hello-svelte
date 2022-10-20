import type { ProductRequest } from '../types';
import client from '$routes/(main)/connection';

export const load = (request: ProductRequest) => {
	return new Promise((resolve) => {
		const productPromise: PromiseLike<unknown> = client.request('GetProductById', {
			id: request.params.id
		});
		resolve(productPromise);
	});
};
