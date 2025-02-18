import type { AxiosInstance, AxiosRequestConfig, Method } from "axios";
export interface AxiosConfigObject {
	axiosInstance: AxiosInstance;
	method: Method;
	url: string;
	requestConfig?: AxiosRequestConfig;
}
