import type {
	RouteName,
	RouteParams,
} from "../interfaces/constants/route-const.types";

export const routeConstants = {
	onboarding: {
		path: "/auth",
		name: "onboarding",
	},
	login: {
		path: "/auth/login",
		name: "login",
	},
	register: {
		path: "/auth/register/:accountType",
		name: "register",
	},
	forgotPassword: {
		path: "/auth/forgot-password",
		name: "forgotPassword",
	},
} as const;

/**
 * Generate page routes dynamically with full autocomplete for routeName and routeParams.
 * @param routeName {RouteName} - The name of the route.
 * @param routeParams {RouteParams[RouteName]} - The route parameters.
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
