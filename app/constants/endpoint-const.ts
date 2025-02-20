import type {
	EndpointParams,
	EndpointT,
} from "../interfaces/constants/endpoint-const.types";

export const ENDPOINT = {
   GET_REFRESH_TOKEN: "/get/refresh",
	GET_PROPERTY: "/property/all",
	GET_PROPERTY_DETAILS: "/property/:id",
} as const;

/**
 * Generate an API endpoint dynamically with full autocomplete.
 * @param endpoint {EndpointT} - The API endpoint (autocomplete available).
 * @param params {EndpointParams[EndpointT]} - Route parameters (autocomplete available).
 *
 * @returns string - The constructed API endpoint.
 */
export const generateEndpoint = <T extends EndpointT>(
	endpoint: T,
	params?: EndpointParams[T],
): string => {
	let path: string = ENDPOINT[endpoint];

	if (params) {
		Object.entries(params).forEach(([param, value]) => {
			path = path.replace(`:${param}`, String(value));
		});
	}

	return path;
};
