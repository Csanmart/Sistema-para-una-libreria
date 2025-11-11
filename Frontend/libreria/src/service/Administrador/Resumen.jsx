import { BaseService } from "./BaseSevice";

class ResumenService extends BaseService{

    async resumen(){
        return this.get('/libros/resumen');
    };
}

export const resumenService = new ResumenService('http://localhost:3100/libreria');


