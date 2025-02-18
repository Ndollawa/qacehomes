export type UserT = {};

export type AuthStateT = {
	user: UserT | null;
	token: {
		access?: string;
		refresh?: string;
	} | null;
	isAuthenticated: boolean;
};
