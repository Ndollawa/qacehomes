import type {
	RouteName,
	RouteParams,
} from "../interfaces/constants/route-constant.types";

export const routeConstants = {
	"#": {
		path: "/#",
		name: "none",
	},
	// Auth
	onboarding: {
		path: "/auth",
		name: "Onboading",
	},
	signIn: {
		path: "/auth/sign-in",
		name: "Sign In",
	},
	signUp: {
		path: "/auth/sign-up/:accountType",
		name: "Sign Up",
	},
	forgotPassword: {
		path: "/auth/forgot-password",
		name: "Forgot Password",
	},
	resetPassword: {
		path: "/auth/forgort-password/:id/reset",
		name: "Reset Password",
	},
	// Others
	home: {
		path: "/",
		name: "Home",
	},
	error: {
		path: "/error/:errorCode",
		name: "Error",
	},

	// Dashboard
	dashboard: {
		path: "/dashboard",
		name: "Dashboard",
	},
	settings: {
		path: "/dashboard/settings",
		name: "Settings",
	},

	support: {
		path: "/dashboard/support",
		name: "Support",
	},
	profile: {
		path: "/dashboard/profile",
		name: "Support",
	},
	profileEdit: {
		path: "/dashboard/profile/edit",
		name: "Support",
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
