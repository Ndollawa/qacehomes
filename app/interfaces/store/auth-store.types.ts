export type UserT = {};

export type AuthState = {
	user: UserT | null;
	token: string;
};
