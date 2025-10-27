import { BaseService } from "./BaseSevice";

class CategoriasService extends BaseService{

    async MostrarTodos(){
        return this.get('/libros/categorias');
    }

    async MostrarPoRId(id_categoria){
        return this.get(`/libros/categorias/${id_categoria}`);
    }

    async MostrarCategoriaPorLibros(id_categoria){
        return this.get(`/libros/categorias/${id_categoria}/libros`);
    }
    
    async crearCategoria(data){
        return this.post('/libros/categorias', data);
    }
    
    async actualizarCategoria(id_categoria, data){
        return this.put(`/libros/categorias/${id_categoria}`, data);
    }

    async eliminarCategoria(id_categoria){
        return this.put(`libros/categorias/${id_categoria}`);
    }
}

export const CategoriasService = new CategoriasService('http://localhost:3100/libreria ')