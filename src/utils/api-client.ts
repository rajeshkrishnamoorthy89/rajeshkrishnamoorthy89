import { APIRequestContext } from '@playwright/test';

export class APIClient {
    private request: APIRequestContext;
    private baseURL: string;

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    async get(endpoint: string, headers = {}) {
        return this.request.get(`${this.baseURL}${endpoint}`, {
            headers: {
                'Accept': 'application/json',
                ...headers
            }
        });
    }

    async post(endpoint: string, data: any, headers = {}) {
        return this.request.post(`${this.baseURL}${endpoint}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers
            },
            data
        });
    }
}
