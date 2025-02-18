import type { AuthState, UserT } from "../interfaces/store/auth-store.types";

import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
	state: (): AuthState => ({
		user: null,
		token: null,
	}),
	actions: {
		setCredentials(user: UserT, accessToken: string) {
			this.user = user;
			this.token = accessToken;
		},
		logout() {
			this.user = null;
			this.token = "";
		},
	},
	persist: true, //not recommended
});
