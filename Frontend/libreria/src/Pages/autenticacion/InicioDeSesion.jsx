import React, {useState} from "react";
import autenticacion from '../../service/autenticacion'
import '../../css/InicioDeSesion.css'
import { useNavigate } from "react-router-dom";
export default function InicioDeSesion(){
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navegacion = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const usuario = await autenticacion.login(nombre, contrasena);
        if(usuario){
            localStorage.setItem("nombre", nombre)
            const rolNormalizado = usuario.rol
            //redirigir
            if(rolNormalizado === "Administrador"){
                localStorage.setItem("rol", "Administrador");
                navegacion("/admin")
            }else if(rolNormalizado === "Operario"){
                localStorage.setItem("rol", "Operario");
                navegacion("")
            }else{
                alert(`Rol de usuario no reconocido: ${usuario.rol}`)
            }
        }else if(!nombre || !contrasena){
            alert("Los campos estan vacios")
            return;
        }
        else{
            alert("Credenciales incorrectas");
        }
    };

    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="formulario">
            <h2 className="titulo">Inicio de sesion</h2>
                <input type="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contrasena"
                    value={contrasena}
                    onChange={(e)=>setContrasena(e.target.value)}
                />
                <button type="submit" className="boton">Iniciar sesion</button>
            </form>
        </div>
    )
}

