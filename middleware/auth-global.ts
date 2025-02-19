import { generateRoute } from "@/app/constants";

export default defineNuxtRouteMiddleware((to, from) => {
	const authRoute = generateRoute("onboarding"); // Base auth route
	const dashboardRoute = generateRoute("dashboard"); // Base dashboard route
	const user = useAuthStore();

	/**
	 * If the user is not authenticated and trying to access dashboard routes, navigate to the login page
	 */
	if (!user.isAuthenticated && to.path.includes(dashboardRoute)) {
		return navigateTo(generateRoute("signIn"));
	}

	/**
	 * If the user is authenticated and trying to access auth routes, navigate to the dashboard page
	 */
	if (user.isAuthenticated && to.path.includes(authRoute)) {
		return navigateTo(generateRoute("dashboard"));
	}
});
