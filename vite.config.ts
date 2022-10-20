import type { UserConfig } from 'vite';
import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: { port: 5050 },
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes'),
			$styles: path.resolve('./src/styles')
		}
	}
};

export default config;
