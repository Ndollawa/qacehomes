import type { AuthState } from "../interfaces/store/auth-store.types";

export const useAuthStore = defineStore("auth", {
	state: (): AuthState => ({
		user: null,
		token: "",
	}),

	actions: {
		setUser(userData: any) {
			this.user = userData;
		},
		setToken(token: string) {
			this.token = token;
		},
		logout() {
			this.user = null;
			this.token = "";
		},
	},

	persist: true,
});
