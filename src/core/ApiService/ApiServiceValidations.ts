import { AxiosError, AxiosResponse } from 'axios';

interface ErrorResponse {
    data?: any;
    request?: any;
    status: number;
    message?: string;
    response?: IResponse
}

interface IResponse {
    status: number;
}

/**
 * Handles a successful response from an Axios request.
 *
 * @param {AxiosResponse} response - The successful Axios response.
 * @returns {Promise<AxiosResponse>} - A promise that resolves with the original response.
 */
export const handleResponse = (response: AxiosResponse) => {
    return Promise.resolve(response);
};

/**
 * Handles an error in an Axios request.
 *
 * @param {ErrorResponse | AxiosError} error - The Axios request error.
 * @returns {Promise<{ message: ErrorResponse | AxiosError }>} - A promise that rejects with an object containing the error message.
 */
export const handleError = (error: ErrorResponse | AxiosError) => {
    return Promise.reject({ message: error });
};
