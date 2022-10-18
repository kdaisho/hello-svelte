import type { GrpcObject, ServiceClientConstructor } from '@grpc/grpc-js';

export interface HelloService {
	SayHello(request: _): Message;
	GetProducts(request: _): Products;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface _ {}

export interface Message {
	message?: string;
}

export interface Product {
	id?: number;
	name?: string;
	description?: string;
}

export interface Products {
	products?: Product[];
}

export interface HelloPackage extends GrpcObject {
	HelloService: ServiceClientConstructor;
}
