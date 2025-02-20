import type { AuthStateT, UserT } from "../interfaces/store/auth-store.types";

export const useAuthStore = defineStore("auth", {
	state: (): AuthStateT => ({
		user: null,
		tokens: {
			access: "",
			refresh: "",
		},
		isAuthenticated: false,
	}),

	actions: {
		setUser(userData: UserT, tokens: AuthStateT["tokens"]) {
			this.user = userData;
			this.tokens = tokens;
			this.isAuthenticated = true;
		},
		setTokens(tokens: AuthStateT["tokens"]) {
			this.tokens = {
				...this.tokens,
				...tokens,
			};
		},
		logout() {
			this.user = null;
			this.tokens = null;
			this.isAuthenticated = false;
		},
	},

	persist: true,
});
