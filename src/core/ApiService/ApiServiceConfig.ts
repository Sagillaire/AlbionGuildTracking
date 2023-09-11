import axios, { AxiosInstance } from 'axios';
import { BaseURL } from "./ApiServiceConfigUrl";
import { handleError, handleResponse } from "./ApiServiceValidations";

const createAxiosInstance = (baseURL: string): AxiosInstance => {
    const instance = axios.create({ baseURL, timeout: 20000 });
    instance.interceptors.response.use(handleResponse, handleError);

    instance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('guildUserToken')}`
        return config
    }, Promise.reject);

    return instance;
};

// AXIOS INSTANCES
const GuildTrackingUrl = createAxiosInstance(BaseURL() as string);

export interface ClientsInterface {
    GuildTrackingUrl: AxiosInstance;
}

export const clients: ClientsInterface = {
    GuildTrackingUrl: GuildTrackingUrl,
};
