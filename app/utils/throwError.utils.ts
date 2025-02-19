import { errorCodes } from "../constants/error-codes.constant";
import type { ErrorCodesT } from "../interfaces/constants/error-codes.types";

/**
 * Handles and throws a standardized error based on predefined error codes.
 *
 * This function looks up an error code from the `errorCodes` constant and throws
 * a formatted error using `createError`. It ensures consistency in error handling
 * across the application.
 *
 * @param {ErrorCodesT} errorCode - The error code to retrieve details from `errorCodes`.
 * @throws {Error} Throws an error with the corresponding status code and message.
 *
 * @example
 * // Throws a 404 error
 * handleThrowError("ERR_404");
 *
 * @example
 * // Throws a 500 error
 * handleThrowError("ERR_500");
 */

export const handleThrowError = (errorCode: ErrorCodesT) => {
	const error = errorCodes[errorCode];

	if (!error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Unknown Error",
			fatal: true,
		});
	}

	const formattedError = createError({
		statusCode: error.statusCode,
		statusMessage: error.message,
		fatal: true,
	});

	// Attach the description directly to the error object
	(formattedError as any).description = error.description;

	throw formattedError;
};
