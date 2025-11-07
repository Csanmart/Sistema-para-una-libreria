import { BaseService } from "./BaseSevice";

class CategoriasService extends BaseService{

    async mostrarTodos(){
        return this.get('libros/categorias');
    }

    async mostrarCategoriaPorLibros(id_categoria){
        return this.get(`libros/categorias/${id_categoria}/libros`);
    }
    
    async crearCategoria(data){
        return this.post('libros/categorias', data);
    }
    
    async actualizarCategoria(id_categoria, data){
        return this.put(`libros/categorias/${id_categoria}`, data);
    }

    async eliminarCategoria(id_categoria){
        return this.delete(`libros/categorias/${id_categoria}`);
    }
}

export const categoriaService = new CategoriasService('http://localhost:3100/libreria/');



