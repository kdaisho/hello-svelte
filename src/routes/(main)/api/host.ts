enum Host {
	development = '0.0.0.0',
	production = 'hello-project-service-deno.local'
}

const host = Host[process.env.NODE_ENV as keyof typeof Host];
const port = 3009;
export const baseUrl = `http://${host}:${port}`;
