import { routeConstants as appRoutes } from "./../constants/route-const";
interface AppRoute {
	name: string;
	path: string;
}
export const generatePath = (
	route: AppRoute,
	params?: Record<string, string | number | undefined>,
) => {
	if (!route.path) return;
	return route.path.replace(/:(\w+)\/?/g, (_: any, key: any) => {
		if (!params || !params[key]) {
			// return `:${key}`;
			return ``;
		}
		return `${params[key]}/`;
	});
};

export default appRoutes;
