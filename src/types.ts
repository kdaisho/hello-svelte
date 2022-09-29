export type Product = {
	id: number;
	name: string;
	description: string;
};

export type ApiParams = {
	method: string;
	resource?: string;
	data?: Record<string, unknown>;
};
