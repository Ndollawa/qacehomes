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

export const appRoutes: Record<string, AppRoute> = {
	"#": {
		path: "/#",
		name: "none",
	},
	home: {
		path: "/",
		name: "Home",
	},
	dashboard: {
		path: "/dashboard",
		name: "Dashboard",
	},
	contracts: {
		path: "/dashboard/contracts",
		name: "Contracts",
	},
	document: {
		path: "/dashboard/document/:action/:id/",
		name: "Document",
	},
	"recent-activities": {
		path: "/dashboard/document/:action/:id/recent-activities",
		name: "Recent Activities",
	},
	modify: {
		path: "/dashboard/document/:action/:id/modify",
		name: "Dashboard",
	},
	review: {
		path: "/dashboard/document/:action/:id/review",
		name: "Dashboard",
	},
	"without-playbook": {
		path: "/dashboard/document/:action/:id/review/without-playbook",
		name: "Review Without Playbook",
	},
	"with-playbook": {
		path: "/dashboard/document/:action/:id/review/with-playbook",
		name: "Review With Playbook",
	},
	"add-playbook": {
		path: "/dashboard/document/:action/:id/review/with-playbook/add",
		name: "Add Playbook",
	},
	summary: {
		path: "/dashboard/document/:action/:id/summary",
		name: "Summary",
	},
	"summary-options": {
		path: "/dashboard/document/:action/:id/summary/options",
		name: "Summary",
	},
	"risks-summary": {
		path: "/dashboard/document/:action/:id/summary/risks",
		name: "Dashboard",
	},
	"terms-summary": {
		path: "/dashboard/document/:action/:id/summary/terms",
		name: "Dashboard",
	},
	proofread: {
		path: "/dashboard/document/:action/:id/proofread",
		name: "Proofread",
	},
	"defined-terms": {
		path: "/dashboard/document/:action/:id/proofread/defined-terms",
		name: "Defined Terms",
	},
	"add-terms": {
		path: "/dashboard/document/:action/:id/proofread/defined-terms/add",
		name: "Add Terms",
	},
	scan: {
		path: "/dashboard/document/:action/:id/proofread/defined-terms/scan",
		name: "Proof Read",
	},
	"grammar-check": {
		path: "/dashboard/document/:action/:id/proofread/grammar-check",
		name: "Grammar Check",
	},
	"cross-reference": {
		path: "/dashboard/document/:action/:id/proofread/cross-reference",
		name: "Cross Reference",
	},
	auth: {
		path: "/auth",
		name: "Dashboard",
	},
	"sign-in": {
		path: "/auth/sign-in",
		name: "Sign In",
	},
	"sign-up": {
		path: "/auth/sign-up/:profileType",
		name: "Sign Up",
	},
	"forgot-password": {
		path: "/auth/forgot-password",
		name: "Forgot Password",
	},
	"reset-password": {
		path: "/auth/forgort-password/:id/reset",
		name: "Reset Password",
	},

	error: {
		path: "/error/:errorCode",
		name: "Error",
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
	"profile-edit": {
		path: "/dashboard/profile/edit",
		name: "Support",
	},
};
