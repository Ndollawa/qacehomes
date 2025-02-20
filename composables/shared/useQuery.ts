import type {
	UseQueryConfigT,
	UseQueryOptionsT,
} from "@/app/interfaces/composables/use-query.types";
import type { CancelTokenSource } from "axios";
import axios from "axios";

export const useQuery = (
	queryOptions: UseQueryOptionsT,
	config: UseQueryConfigT = {},
) => {
	const data = ref<any>(null);
	const isLoading = ref(false);
	const isError = ref(false);
	const error = ref<any>(null);
	let cancelToken: CancelTokenSource | null = null;

	const fetchData = async () => {
		if (config.skip) return;

		isLoading.value = true;
		isError.value = false;
		error.value = null;

		try {
			cancelToken?.cancel("Request canceled by new fetch");
			cancelToken = axios.CancelToken.source();

			const res = await axios.get(queryOptions.url, {
				params: queryOptions.params,
				cancelToken: cancelToken.token,
			});

			data.value = res.data;
		} catch (err: any) {
			// If self canceled return early;
			if (axios.isCancel(err)) return;

			isError.value = true;
			error.value = err;
		} finally {
			isLoading.value = false;
		}
	};

	const cancel = () => cancelToken?.cancel("Request canceled");

	watchEffect(fetchData);

	return {
		data,
		isLoading,
		isError,
		error,
		refetch: fetchData,
		cancel,
	};
};
