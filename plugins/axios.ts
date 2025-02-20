import { generateEndpoint } from "@/app/constants";
import { getENV } from "@/app/utils";
import axios from "axios";

// Create axios Instance
const axiosInstance = axios.create({
	baseURL: getENV("NUXT_PUBLIC_API_URL"),
	headers: {
		"Content-Type": "application/json",
	},
});

// Get access/ refresh tokens
const { setTokens, tokens } = useAuthStore();

// Request axios interceptor to attach token
axiosInstance.interceptors.request.use((config) => {
	if (tokens?.access) {
		config.headers.Authorization = `Bearer ${tokens?.access}`;
	}
	return config;
});

// Response interceptor for handling token refresh
axiosInstance.interceptors.response.use(
	(res) => res,
	async (error) => {
		const originalRequest = error.config;

		// Get the efresh token if res === unAuthorized
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const { data } = await axios.post(
					generateEndpoint("GET_REFRESH_TOKEN", {
						token: tokens?.refresh,
					}),
				);

				// Set the token
				// TODO: Set the correct token once api is provided
				setTokens({
					access: data?.accessToken,
				});

				// Retry the request
				axiosInstance.defaults.headers.Authorization = `Bearer ${tokens?.access}`;
				return axiosInstance(originalRequest);
			} catch (refreshErr) {
				console.error("Token refresh failed: ", refreshErr);
				return Promise.reject(refreshErr);
			}
		}

		return Promise.reject(error);
	},
);

export default defineNuxtPlugin(() => {
	return {
		provide: {
			axios: axiosInstance,
		},
	};
});
