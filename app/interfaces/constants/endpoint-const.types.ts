import { ENDPOINT } from "@/app/constants";

// Extract valid endpoint names
export type EndpointT = keyof typeof ENDPOINT;

// Extract dynamic params from endpoint paths (matches `:paramName`)
export type ExtractEndpointParams<T extends string> =
	T extends `${string}:${infer Param}/${infer Rest}`
		? Param | ExtractEndpointParams<Rest>
		: T extends `${string}:${infer Param}`
			? Param
			: never;

// Generate a map of expected params for each endpoint
export type EndpointParams = {
	[K in EndpointT]: ExtractEndpointParams<(typeof ENDPOINT)[K]> extends never
		? {} // No params -> empty object
		: Partial<Record<ExtractEndpointParams<(typeof ENDPOINT)[K]>, string>>;
};
