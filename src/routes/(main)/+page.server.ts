import type { Message } from 'src/hello';
import { client } from '$routes/(main)/connection';

export const load = async () => {
	return await sayHello();
};

async function sayHello() {
	return new Promise((resolve, reject) => {
		client.SayHello({}, (err: Error, response: Message) => {
			if (err) {
				reject(err);
			}
			resolve({ hello: response });
		});
	});
}
