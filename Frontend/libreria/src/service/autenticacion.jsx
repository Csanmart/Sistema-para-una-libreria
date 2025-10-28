const API_URL = 'http://localhost:3100/libreria/usuarios/';
import { usuarioService } from "./Administrador/Usuarios";

const login = async(nombre, contrasena) =>{
    try{
        const response  = await fetch(`${API_URL}inicio`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombre, contrasena})
        });
        if(!response) return false;

        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));


        usuarioService.setToken(data.token)
        return {
            token: data.token,
            usuario: data.usuario,
            rol: data.usuario.rol
        }
    }catch(error){
        console.error('Error en login', error);
        return false;
    }
}

const registro = async(nombre, contrasena, rol) =>{
    try{
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombre,  contrasena, rol})
        })
        return response.ok
    }catch(error){
        console.error('Error en el registro', error)
        return false;
    }
};




export default {login, registro};