import type { AxiosRequestConfig, CancelTokenSource } from "axios";
import axios from "axios";

/**
 * A composable function for handling mutation function requests (POST, PUT, PATCH, DELETE).
 * It returns a function to trigger the request and request states for handling loading, erros, and cancellation.
 *
 * @param {"post" | "put" | "patch" | "delete"} method - The HTTP method to be used for the request.
 * @returns {[Function, {data: any, headers: any, isLoading: boolean, isError: boolean, error: any, cancel: Function}]}
 *
 * @example
 * ```ts
 * const [createUser, {data, headers, isLoading, isError, error, cancel}] = useMutation("post");
 *
 * const formValues = {name: "Damife Zion"}
 * const onSubmit = async(values) => {
 *    try {
 *       const res = await createUser("/api/user", formValues);
 *       console.log("Success: ", res.data);
 *    }
 *    catch (err: any) {
 *       console.error("Error making request: ", err);
 *    }
 * };
 *
 * console.log("Response Headers:", headers);
 * ```
 */
export const useMutation = (method: "post" | "put" | "patch" | "delete") => {
	const data = ref<any>(null);
	const headers = ref<any>(null);
	const isLoading = ref(false);
	const isError = ref(false);
	const error = ref<any>(null);
	let cancelToken: CancelTokenSource | null = null;

	/**
	 * Triggers the mutation request.
	 *
	 * @param {string} url - The API endpoint for the request.
	 * @param {any} [payload] - The request payload (optional).
	 * @param {AxiosRequestConfig} [config] - Additional Axios request config (optional).
	 * @returns {Promise<any>} The response data from the request.
	 */
	const mutate = async (
		url: string,
		payload?: any,
		config?: AxiosRequestConfig,
	) => {
		isLoading.value = false;
		isError.value = false;
		error.value = null;

		try {
			cancelToken?.cancel("Request canceled by new mutation");
			cancelToken = axios.CancelToken.source();

			const res = await axios({
				method,
				url,
				data: payload,
				cancelToken: cancelToken.token,
				...config,
			});

			data.value = res.data;
			headers.value = res.headers;
			return res;
		} catch (err: any) {
			if (axios.isCancel(err)) return;
			isError.value = true;
			error.value = err;
			throw err;
		} finally {
			isLoading.value = false;
		}
	};

	/**
	 * Cancels the ongoing request if it exists.
	 */
	const cancel = () => cancelToken?.cancel("Request canceled");

	return [
		mutate,
		{ data, headers, isLoading, isError, error, cancel },
	] as const;
};
