import { BaseService } from "./BaseSevice";


class LibrosService extends BaseService{

    //Mostrar todos los libros
    async MostrarLibros(){
        return this.get('libros/mostrarLibros');
    };

    //Mostrar Libro por identificador
    async mostrarLibrosPorId(id_libro){
        return this.get(`libros/mostrarlibros/${id_libro}`);
    };

    //Crear libros
    async CrearLibros(data){
        return this.post('libros/crearLibros', data);
    };

    //Modificar libro

    async ActualizarLibro(id_libro, data){
        return this.put(`libros/actulizarLibro/${id_libro}`, data);
    };

    //Eliminar libro

    async EliminarLibro(id_libro){
        return this.delete(`libros/eliminarLibros/${id_libro}`);
    };

}

export const libroService = new LibrosService('http://localhost:3100/libreria');
