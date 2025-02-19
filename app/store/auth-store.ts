import { defineStore } from "pinia";
import type { AuthStateT, UserT } from "../interfaces/store/auth-store.types";

export const useAuthStore = defineStore("auth", {
	state: (): AuthStateT => ({
		user: null,
		token: null,

		isAuthenticated: false,
	}),
	actions: {
		setCredentials(user: UserT, accessToken: string) {
			this.user = user;
			this.token = accessToken;

			// setUser(userData: UserT, tokens: AuthStateT["token"]) {
			// 	this.user = userData;
			// 	this.token = tokens;
			// 	this.isAuthenticated = true;
		},
		logout() {
			this.user = null;
			this.token = null;
			this.isAuthenticated = false;
		},
	},
	persist: true, //not recommended
});
