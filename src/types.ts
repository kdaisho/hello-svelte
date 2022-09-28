export type Product = {
	id: number;
	name: string;
	description: string;
};

export type LoadParams = {
	fetch: typeof window.fetch;
	params: {
		id: string;
	};
};
