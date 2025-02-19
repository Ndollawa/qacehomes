export type UserT = {};

export type AuthStateT = {
	user: UserT | null;
	token: string | null | undefined;

	// token: {
	// 	access?: string;
	// 	refresh?: string;
	// } | null;
	isAuthenticated: boolean;
};
