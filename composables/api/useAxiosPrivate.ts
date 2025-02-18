import { onMounted, onUnmounted } from "vue";
import { axiosPrivate } from "@/app/api";
// import useRefreshToken from "./useRefreshToken";
// import { useAuthStore } from "";

const useAxiosPrivate = () => {
	const refresh = ()=>'' //useRefreshToken();
	const store = useAuthStore();
	const token = store// token logic;

	let requestInterceptor: any;
	let responseInterceptor: any;

	onMounted(() => {
		requestInterceptor = axiosPrivate.interceptors.request.use(
			(config:any) => {
				if (!config?.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${token}`;
				}
				return config;
			},
			(error:any) => Promise.reject(error),
		);

		responseInterceptor = axiosPrivate.interceptors.response.use(
			(response:any) => response,
			async (error:any) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const newAccessToken = await refresh();
					prevRequest.headers["Authorization"] =
						`Bearer ${newAccessToken}`;
					return axiosPrivate(prevRequest);
				}
				return Promise.reject(error);
			},
		);
	});

	onUnmounted(() => {
		axiosPrivate.interceptors.request.eject(requestInterceptor);
		axiosPrivate.interceptors.response.eject(responseInterceptor);
	});

	return axiosPrivate;
};

export default useAxiosPrivate;
