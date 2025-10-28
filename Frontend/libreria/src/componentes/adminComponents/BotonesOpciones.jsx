import React from "react"
import Swal from "sweetalert2"
import { usuarioService } from "../../service/Administrador/Usuarios"

export default function BotonesOpciones(){

    return(
        <div className="BotonesOpciones">
            <button className="ButtonUpdate">Actualizar</button>
            <button className="EliminarBoto">Eliminar</button>
        </div>
    )
}