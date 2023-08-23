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

export const handleResponse = (response: AxiosResponse) => {
    return Promise.resolve(response)
}

export const handleError = (error: ErrorResponse | AxiosError) => {
    return Promise.reject({ message: error })
};
