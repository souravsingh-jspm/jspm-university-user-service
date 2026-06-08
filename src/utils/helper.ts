import { ApiError } from "common-microservices-utils";
import { StatusCodes } from "http-status-codes";
import { API_ERRORS } from "../constants/app.constant";
import axios from "axios";

export const queryHandler = async <T>(
  queryPromise: () => Promise<T>,
): Promise<T> => {
  try {
    return await queryPromise();
  } catch (error) {
    console.log(error);
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      API_ERRORS.DATABASE_ERROR,
    );
  }
};

export const handleAxiosError = (error: any) => {
  if (axios.isAxiosError(error)) {
    console.log(error);
    const statusCode = error.response?.status || 500;
    const message =
      error.response?.data?.message || API_ERRORS.USER_SERVICE_ERROR;

    throw new ApiError(statusCode, message);
  }

  throw new ApiError(500, API_ERRORS.USER_SERVICE_ERROR);
};
