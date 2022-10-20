export type Product = {
	id: number;
	name: string;
	description: string;
};

export type ProductRequest = {
	params: {
		id: number;
	};
};
