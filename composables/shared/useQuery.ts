import type { UseQueryConfigT, UseQueryOptionsT } from "@/app/interfaces";
import type { CancelTokenSource, AxiosResponse } from "axios";
import axios from "axios";

/**
 * A composable function for fetching data from an API endpoint.
 * It provides reactive state for handling loading, errors, refetching, headers, and cancellation.
 *
 * @param {UseQueryOptionsT} queryOptions - Options for the API request, including `url` and `params`.
 * @param {UseQueryConfigT} [config] - Configuration options like `skip` to prevent automatic execution.
 * @returns {{ data: any, headers: any, isLoading: boolean, isError: boolean, error: any, refetch: Function, cancel: Function }}
 *
 * @example
 * ```ts
 * const { data, headers, isLoading, isError, error, refetch, cancel } = useQuery({
 *   url: "/api/users",
 *   params: { limit: 10 }
 * });
 *
 * console.log("Response Headers:", headers);
 * ```
 */
export const useQuery = (
	queryOptions: UseQueryOptionsT,
	config: UseQueryConfigT = {},
) => {
	const data = ref<any>(null);
	const headers = ref<any>(null);
	const isLoading = ref(false);
	const isError = ref(false);
	const error = ref<any>(null);
	let cancelToken: CancelTokenSource | null = null;

	/**
	 * Fetches data from the API.
	 */
	const fetchData = async () => {
		if (config.skip) return;

		isLoading.value = true;
		isError.value = false;
		error.value = null;

		try {
			cancelToken?.cancel("Request canceled by new fetch");
			cancelToken = axios.CancelToken.source();

			const res: AxiosResponse = await axios.get(queryOptions.url, {
				params: queryOptions.params,
				cancelToken: cancelToken.token,
			});

			data.value = res.data;
			headers.value = res.headers;
		} catch (err: any) {
			// If self canceled return early;
			if (axios.isCancel(err)) return;

			isError.value = true;
			error.value = err;
		} finally {
			isLoading.value = false;
		}
	};

	/**
	 * Cancels the ongoing request if it exists.
	 */
	const cancel = () => cancelToken?.cancel("Request canceled");

	// Automatically fetch data on component mount
	watchEffect(fetchData);

	return {
		data,
		headers,
		isLoading,
		isError,
		error,
		refetch: fetchData,
		cancel,
	};
};
