import client from '$routes/(main)/connection';

export const load = async () => {
	try {
		return await getProducts();
	} catch (error) {
		return error;
	}
};

function getProducts() {
	return new Promise((resolve, reject) => {
		const result: PromiseLike<unknown> = client.request('getProducts');

		// TODO: handle errors
		if (result as unknown) {
			return resolve({ products: result });
		} else {
			return reject({ error: 'Oops! something went wrong.' });
		}
	});
}
