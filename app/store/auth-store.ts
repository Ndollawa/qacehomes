import type { AuthStateT, UserT } from "../interfaces/store/auth-store.types";

export const useAuthStore = defineStore("auth", {
	state: (): AuthStateT => ({
		user: null,
		token: {
			access: "",
			refresh: "",
		},
		isAuthenticated: false,
	}),

	actions: {
		setUser(userData: UserT, tokens: AuthStateT["token"]) {
			this.user = userData;
			this.token = tokens;
			this.isAuthenticated = true;
		},
		logout() {
			this.user = null;
			this.token = null;
			this.isAuthenticated = false;
		},
	},

	persist: true,
});
