import { errorCodes } from "../constants/error-codes.constant";

export const handleThrowError = (errorCode: string | number) => {
  const error = errorCodes[errorCode];
  throw createError({
    statusCode: error.statusCode,
    statusMessage: error.message,
    fatal: true,
  });
};
