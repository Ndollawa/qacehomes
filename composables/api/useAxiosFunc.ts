import { ref, onUnmounted, watchEffect } from "vue";
import type { AxiosConfigObject } from "@/app/interfaces/api/axios-config.interface";

const useAxiosFunc = () => {
	const response = ref([]);
	const error = ref("");
	const loading = ref(false);
	const controller = ref<AbortController | null>(null);

	const axiosFetch = async (configObj:AxiosConfigObject ) => {
		const { axiosInstance, method, url, requestConfig = {} } = configObj;

		try {
			loading.value = true;
			const ctrl = new AbortController();
			controller.value = ctrl;
			const res = await (axiosInstance as any)[method.toLowerCase()](url, {
				...requestConfig,
				signal: ctrl.signal,
			});
			response.value = res.data;
		} catch (err: any) {
			console.error(err.message);
			error.value = err.message;
		} finally {
			loading.value = false;
		}
	};

	watchEffect(() => {
		return () => {
			if (controller.value) {
				controller.value.abort(); // Abort on cleanup
			}
		};
	});

	return { response, error, loading, axiosFetch };
};

export default useAxiosFunc;
