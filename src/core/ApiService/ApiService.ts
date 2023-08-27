import { AxiosInstance } from 'axios'
import { ClientsInterface, clients } from './ApiServiceConfig';

export class ApiService<T> {
    public service: string;
    public client: AxiosInstance;
    constructor(service: string, client: keyof ClientsInterface) {
        this.service = service;
        this.client = clients?.[client];
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
        this.patch = this.patch.bind(this);
        this.delete = this.delete.bind(this);
        this.getById = this.getById.bind(this);
        this.getByParams = this.getByParams.bind(this);
    }

    async getById(id: number | string): Promise<T> {
        try {
            const response = await this.client.get<T>(`${this.service}/${id}`)
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async get(endpoint: string): Promise<T> {
        try {
            const response = await this.client.get<T>(`${this.service}/${endpoint}`)
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async getByParams(endpoint: string, params?: any): Promise<T> {
        try {
            const response = await this.client.get<T>(`${this.service}/${endpoint}`, { params })
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async post(endpoint: string, data: any): Promise<T> {
        try {
            const response = await this.client.post<T>(`${this.service}/${endpoint}`, data)
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async put(endpoint: string, data: any): Promise<T> {
        try {
            const response = await this.client.put<T>(`${this.service}/${endpoint}`, data)
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async patch(endpoint: string, data: any): Promise<T> {
        try {
            const response = await this.client.patch<T>(`${this.service}/${endpoint}`, data)
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(endpoint: string): Promise<T> {
        try {
            const response = await this.client.delete<T>(`${this.service}/${endpoint}`)
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
