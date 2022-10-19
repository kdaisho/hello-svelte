import client from '$routes/(main)/connection';

export const load = async () => {
	try {
		return await sayHello();
	} catch (error) {
		return error;
	}
};

function sayHello() {
	return new Promise((resolve, reject) => {
		const result: PromiseLike<unknown> = client.request('sayHello', {
			greeting: 'Hello'
		});

		if (result as unknown as string) {
			return resolve({ message: result });
		} else {
			return reject({ message: 'Oops! something went wrong.' });
		}
	});
}
