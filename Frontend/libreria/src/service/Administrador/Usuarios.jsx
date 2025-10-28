import { BaseService } from "./BaseSevice";

class UsuarioService extends BaseService{
    
    //Mostrar todos los usuarios
    async mostrarTodos(){
        return this.get('/usuarios/usuarios');
    }

    //Crear los usuarios

    async crearUsuarios(data){
        return this.post('/usuarios/registro', data);
    }

    //actualizar usuario
    async actualizarUsuario(id_usuario, data){
        return this.put(`/usuarios/actualizar/${id_usuario}`, data);
    }

    //Eliminar usuarios
    async eliminarUsuario(id_usuario){
        return this.delete(`/usuarios/eliminar/${id_usuario}`)
    }
}

export const  usuarioService = new UsuarioService('http://localhost:3100/libreria');

