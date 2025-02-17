import { errorCodes } from "../constants/error-codes.constant";
import type { ErrorCodesT } from "../interfaces/constants/error-codes.types";

export const handleThrowError = (errorCode: ErrorCodesT) => {
	const error = errorCodes[errorCode];

	throw  createError({
		statusCode: error.statusCode,
		statusMessage: error.message,
		fatal: true,
	});
};
