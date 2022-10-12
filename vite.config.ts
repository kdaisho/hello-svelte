import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: { port: 5050 },
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes'),
			$types: path.resolve('./src/types'),
			$styles: path.resolve('./src/styles')
		}
	}
};

export default config;
