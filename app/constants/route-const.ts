export const routeConstants = {
	onboarding: {
		path: "/onboarding",
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
