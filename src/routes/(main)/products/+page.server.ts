import type { Message } from 'src/hello';
import { client } from '$routes/(main)/connection';

export const load = async () => {
	return await getProducts();
};

async function getProducts() {
	return new Promise((resolve, reject) => {
		client.GetProducts({}, (err: Error, response: Message) => {
			if (err) {
				reject(err);
			}
			resolve(response);
		});
	});
}
