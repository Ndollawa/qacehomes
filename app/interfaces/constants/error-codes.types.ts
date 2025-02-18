import { errorCodes } from "@/app/constants";

export type ErrorCodeT = {
	message: string;
	statusCode: number;
	description?: string;
};

export type ErrorCodesT = keyof typeof errorCodes;
