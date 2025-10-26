export class BaseService{
    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    async get(endpoint){
        const response = await fetch(`${this.baseUrl}${endpoint}`);
        if(!response) throw new Error(`Error realizando el GET en ${endpoint}`);
        return await response.json();
    }

    async post(endpoint, data){
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if(!response.ok)throw new Error(`Error realizando el POST en ${endpoint}`);
        return await response.json()
    }

}