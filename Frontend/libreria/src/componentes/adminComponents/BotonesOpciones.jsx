import React, { useState } from "react";
import Swal from "sweetalert2";
import { usuarioService } from "../../service/Administrador/Usuarios";

export default function BotonesOpciones({ id_usuario, onDelete }) {
  // Estados para actualización
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    contrasena: "",
    rol: "",
  });

  // ---- FUNCIONES ----

  const eliminarUsuario = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const data = await usuarioService.eliminarUsuario(id_usuario);

        Swal.fire({
          title: "Eliminado",
          text: "El usuario fue eliminado correctamente",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        if (onDelete) onDelete(id_usuario);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo eliminar el usuario",
          timer: 2500,
          showConfirmButton: false,
        });
      }
    }
  };

  const actualizarUsuario = () => {
    // Mostrar formulario con SweetAlert2
    Swal.fire({
      title: "Actualizar Usuario",
      html: `
        <input id="nombre" class="swal2-input" placeholder="Nombre">
        <input id="contrasena" type="password" class="swal2-input" placeholder="Contraseña">
        <input id="rol" class="swal2-input" placeholder="Rol">
      `,
      showCancelButton: true,
      confirmButtonText: "Confirmar cambios",
      cancelButtonText: "Cancelar",
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById("nombre").value;
        const contrasena = document.getElementById("contrasena").value;
        const rol = document.getElementById("rol").value;

        if (!nombre || !contrasena || !rol) {
          Swal.showValidationMessage("Todos los campos son obligatorios");
          return false;
        }

        return { nombre, contrasena, rol };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await usuarioService.actualizarUsuario(id_usuario, result.value);
          Swal.fire({
            icon: "success",
            title: "Usuario actualizado",
            text: "Los cambios se han guardado correctamente.",
            timer: 2000,
            showConfirmButton: false,
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo actualizar el usuario.",
            timer: 2500,
            showConfirmButton: false,
          });
        }
      }
    });
  };

  // ---- RENDER ----
  return (
    <div className="BotonesOpciones">
      <button className="ButtonUpdate" onClick={actualizarUsuario}>
        Actualizar
      </button>
      <button className="EliminarBoton" onClick={eliminarUsuario}>
        Eliminar
      </button>
    </div>
  );
}
