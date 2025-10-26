class Usuario{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async mostrarTodosLosUsuarios(){
        const response = await fetch(`${this.baseUrl}/usuarios/todos-los-usuarios`);
        if(!response.ok)throw new Error('Error mostrando los datos');
        return await response.json();
        
    };

    async mostrarUsuarioPorId(id_usuario){
        if(!id_usuario)throw new Error('Error no se encuentra el Id')
        
            const response = await fetch(`${this.baseUrl}/usuarios/especifico/${id_usuario}`);
        if(!response.ok)throw new Error('Error mostrando el usuario por ID');
        return await response.json();
    };


    async actualizarUsuario(id_usuario){
        if(!id_usuario)throw new Error('Error no se encuentra el id');

        const response = await fetch(`${this.baseUrl}/actualizar/${id_usuario}`);
        if(!response.ok)throw new Error('Error no se puede actualizar el usuario');
        return await response.json();
    };

    async eliminarUsuario(id_usuario){
        if(!id_usuario)throw new Error('Error no se encuentra el usuario');
        const response = await fetch(`${this.baseUrl}/usuarios/eliminar/${id_usuario}`);
        if(!response.ok)throw new Error('Error eliminando el usuario');
        return response.json();
    }
}


export const Usuario = new Usuario('http://localhost:3100');