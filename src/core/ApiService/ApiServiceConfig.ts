import axios, { AxiosInstance } from 'axios';
import { BaseURL } from "./ApiServiceConfigUrl";
import { handleError, handleResponse } from "./ApiServiceValidations";

/**
 * Creates an Axios instance with the specified base URL and default timeout.
 *
 * @param {string} baseURL - The base URL for the Axios instance.
 * @returns {AxiosInstance} - An Axios instance configured with the provided base URL and timeout.
 */
const createAxiosInstance = (baseURL: string): AxiosInstance => {
    const instance = axios.create({ baseURL, timeout: 20000 });
    instance.interceptors.response.use(handleResponse, handleError);

    instance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('guildUserToken')}`
        return config
    }, Promise.reject);

    return instance;
};

/**
 * Represents an interface for client instances.
 */
const GuildTrackingUrl = createAxiosInstance(BaseURL() as string);

/**
 * An object containing different Axios client instances.
 */
export interface ClientsInterface {
    GuildTrackingUrl: AxiosInstance;
}

export const clients: ClientsInterface = {
    GuildTrackingUrl: GuildTrackingUrl,
};
