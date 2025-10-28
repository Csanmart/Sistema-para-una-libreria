import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
export default function CerrarSesion(){
    const navegacion = useNavigate();
    
    const cerrar = ()=>{
        if(cerrar){
            Swal.fire({
                icon: 'question',
                title: '¿Enserio quieres salir de la sesion?',
                confirmButtonText: 'Si',
                confirmButtonColor: "green",
                cancelButtonColor: "red",
                showConfirmButton: true,
                showCancelButton: true
            }).then((result)=>{
                if(result.isConfirmed){
                    navegacion('/')
                }
            })
        }
    }

    return(
        <button onClick={cerrar}>Cerrar sesion</button>
    )
}