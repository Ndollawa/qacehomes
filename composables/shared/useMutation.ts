import type {
	AxiosRequestConfig,
	CancelTokenSource,
	AxiosProgressEvent,
} from "axios";
import axios from "axios";

/**
 * A composable function for handling mutation requests (POST, PUT, PATCH, DELETE).
 * Supports both normal JSON requests and FormData (file uploads).
 * Provides reactive states for tracking loading, errors, cancellation, and upload progress.
 *
 * @param {"post" | "put" | "patch" | "delete"} method - The HTTP method to be used for the request.
 * @param {boolean} [isFormData=false] - Whether the request data is FormData (for file uploads).
 * @returns {[Function, { data: any, headers: any, isLoading: boolean, isError: boolean, error: any, progress: number, cancel: Function }]}
 *
 * @example **Normal JSON request**
 * ```ts
 * const [createUser, { data, headers, isLoading, isError, error, cancel }] = useMutation("post");
 *
 * const onSubmit = async () => {
 *   try {
 *     const res = await createUser("/api/user", { name: "John Doe" });
 *     console.log("Success:", res.data);
 *   } catch (err) {
 *     console.error("Error making request:", err);
 *   }
 * };
 * ```
 *
 * @example **File Upload**
 * ```ts
 * const [uploadFile, { data, headers, isLoading, isError, error, progress, cancel }] = useMutation("post", true);
 *
 * const onUpload = async (file) => {
 *   const formData = new FormData();
 *   formData.append("file", file);
 *
 *   try {
 *     const res = await uploadFile("/api/upload", formData);
 *     console.log("Upload Success:", res.data);
 *   } catch (err) {
 *     console.error("Error uploading file:", err);
 *   }
 * };
 * ```
 */
export const useMutation = (
	method: "post" | "put" | "patch" | "delete",
	isFormData: boolean = false,
) => {
	const data = ref<any>(null);
	const headers = ref<any>(null);
	const isLoading = ref(false);
	const isError = ref(false);
	const error = ref<any>(null);
	const progress = ref(0); // Track upload progress
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
		isLoading.value = true;
		isError.value = false;
		error.value = null;
		progress.value = 0;

		try {
			cancelToken?.cancel("Request canceled by new mutation");
			cancelToken = axios.CancelToken.source();

			// Determine headers: JSON default, FormData if specified
			const headersConfig = isFormData
				? { "Content-Type": "multipart/form-data" }
				: { "Content-Type": "application/json" };

			const res = await axios({
				method,
				url,
				data: payload,
				cancelToken: cancelToken.token,
				onUploadProgress: isFormData
					? (event: AxiosProgressEvent) => {
							if (event.total) {
								progress.value = Math.round(
									(event.loaded / event.total) * 100,
								);
							}
						}
					: undefined,
				headers: { ...headersConfig, ...config?.headers },
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
		{ data, headers, isLoading, isError, error, progress, cancel },
	] as const;
};
