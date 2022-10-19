import type { HelloPackage } from 'src/hello';
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const packageDef = protoLoader.loadSync('proto/hello.proto', {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const helloPackage = grpcObject.helloPackage as HelloPackage;

export const client = new helloPackage.HelloService(
	'localhost:3009',
	grpc.credentials.createInsecure()
);
