const API_URL = 'http://localhost:3100/libreria/usuarios/';


const login = async(nombre, contrasena) =>{
    try{
        const response  = await fetch(`${API_URL}inicio`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({nombre, contrasena})
        });
        if(!response) return false;
        const data = await response.json();
        localStorage.setItem("token", data.createToken);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        return data.usuario;
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