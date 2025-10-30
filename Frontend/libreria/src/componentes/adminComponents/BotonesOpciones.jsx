import React from "react"
import Swal from "sweetalert2"
import { usuarioService } from "../../service/Administrador/Usuarios"
import { useEffect } from "react"

export default function BotonesOpciones({id_usuario}){

    
    const eliminarUsuario = async ()=>{
        
        console.log(id_usuario)

        const result = await Swal.fire({
            title: 'Estas seguro',
            text: 'No se podra revertir esta accion',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        })

        if(result.isConfirmed){
            try{
                const data = await usuarioService.eliminarUsuario(id_usuario);;
                Swal.fire({
                    title: 'Usuario eliminado',
                    icon: 'success',
                    timer: 2000
                })
                console.log(data)
            }catch(error){
                console.log("Errro eliminando el usuario", error)
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error no se pueden eliminar los datos',
                    timer: 2000
                })
            }
        }
    }

    return(
        <div className="BotonesOpciones">
            <button className="ButtonUpdate">Actualizar</button>
            <button className="EliminarBoto" onClick={eliminarUsuario}>Eliminar</button>
        </div>
    )
}