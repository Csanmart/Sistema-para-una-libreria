import React, {useState, useEffect} from "react";
import { usuarioService } from "../../service/Administrador/Usuarios";
import Swal from "sweetalert2";


export default function RegistroUsuarios(){
    const [usuario, setUsuario] = useState({
        nombre: '',
        contrasena: '',
        rol: ''
    });

    const handleChange = async(e)=>{
        setUsuario({
            ...usuario, [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuario.nombre || !usuario.contrasena || !usuario.rol) {
        Swal.fire({
            icon: 'error',
            title: 'Campos están vacíos',
            timer: 2300,
            timerProgressBar: true
        });
        return;
    }

    try {
        const data = await usuarioService.crearUsuarios(usuario);
        Swal.fire({
            icon: 'success',
            text: 'Usuario creado con éxito',
            timer: 2400,
            timerProgressBar: true
        });
        console.log('Aquí está el registro realizado:', data);
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: `Error con el servicio: ${error.message || error}`,
            icon: 'error',
            timer: 2400
        });
        console.log(error);
    }
};

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Ingrese el nombre"
                value={usuario.nombre}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="contrasena"
                placeholder="Cree la contrasena"
                value={usuario.contrasena}
                onChange={handleChange}
            />
            <select name="rol" value={usuario.rol} onChange={handleChange}>
                <option value=''>Seleccionar</option>
                <option value="Administrador">Administrador</option>
                <option value="Operario">Operario</option>
            </select>

            <button type="submit">Registrar</button>
        </form>
    )
}