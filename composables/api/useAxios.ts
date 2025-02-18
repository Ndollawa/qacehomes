import { ref, onMounted, watch } from "vue";
import type { AxiosConfigObject } from "@/app/interfaces/api/axios-config.interface";

const useAxios = (configObj: AxiosConfigObject) => {
	const { axiosInstance, method, url, requestConfig = {} } = configObj;

	const response = ref([]);
	const error = ref("");
	const loading = ref(true);
	const refresh = ref(false);

	const refetch = () => {
		refresh.value = !refresh.value;
	};

	const fetchData = async () => {
		const controller = new AbortController();
		try {
			const res = await (axiosInstance as any)[method.toLowerCase()](url, {
				...requestConfig,
				signal: controller.signal,
			});
			response.value = res.data;
		} catch (err: any) {
			console.error(err.message);
			error.value = err.message;
		} finally {
			loading.value = false;
		}

		// Cleanup on component unmount
		return () => {
			controller.abort();
		};
	};

	onMounted(fetchData);

	watch(refresh, () => {
		fetchData();
	});

	return { response, error, loading, refetch };
};

export default useAxios;
