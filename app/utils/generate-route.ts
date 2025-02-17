import { routeConstants } from "@/app/constants/route-const";
import type { RouteName, RouteParams } from "@/app/interfaces/route-const";

/**
 * Generate page routes dynamically with full autocomplete for routeName and routeParams.
 * @param routeName {RouteName} - The name of the route (autocomplete available).
 * @param routeParams {RouteParams[RouteName]} - Route parameters (autocomplete available).
 *
 * @returns string - The constructed route.
 */
export const generateRoute = <T extends RouteName>(
	routeName: T,
	routeParams?: RouteParams[T],
): string => {
	const route = routeConstants[routeName];

	let path: string = route.path;
	if (routeParams) {
		Object.entries(routeParams).forEach(([param, value]) => {
			path = path.replace(`:${param}`, String(value));
		});
	}

	return path;
};
