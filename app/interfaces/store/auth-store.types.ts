export type UserT = {};

export type AuthStateT = {
	user: UserT | null;
	tokens: {
		access?: string;
		refresh?: string;
	} | null;
	isAuthenticated: boolean;
};
