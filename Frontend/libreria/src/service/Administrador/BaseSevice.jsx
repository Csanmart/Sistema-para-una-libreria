export class BaseService{
    constructor(baseUrl){
        this.baseUrl = baseUrl
        this.token = null
    }


    //setToken
    setToken(token){
        this.token = token;
    }

    async beforeRequest(options = {}) {
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        return {
            ...options,
            headers,
        };
    }

    async request(endpoint, options = {}) {
        const requestOptions = await this.beforeRequest(options);
        const response = await fetch(`${this.baseUrl}${endpoint}`, requestOptions);
        const finalResponse = await this.afterResponse(response);
        return await finalResponse.json();
    }

    async afterResponse(response) {
        if (!response.ok) {
            if (response.status === 400) {
                throw new Error('No autorizado. Token inválido o expirado');
            } else if (response.status === 500) {
                throw new Error('Error interno del servidor');
            } else {
                const msg = await response.text();
                throw new Error(msg || `Error HTTP ${response.status}`);
            }
        }
        return response;
    }
    

    async get(endpoint){
        return this.request(endpoint);
    }

    async post(endpoint, data){
        return this.request(endpoint,{
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE',
        });
    }
}

