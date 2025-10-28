import React, { useState } from "react";
import autenticacion from "../../service/autenticacion";
import "../../css/InicioDeSesion.css";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import 'sweetalert2/themes/bootstrap-4.css'

export default function InicioDeSesion() {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navegacion = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !contrasena) {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Recuerda no dejar los campos vacíos.",
      });
      return; // detener ejecución
    }

    try {
      setLoading(true);

      const usuario = await autenticacion.login(nombre, contrasena);

      if (usuario) {
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("token", usuario.token)
        const rolNormalizado = usuario.rol;

        if (rolNormalizado === "Administrador") {
          localStorage.setItem("rol", "Administrador");
          setTimeout(()=>{navegacion("/admin"), 2000});
          Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: `Bienvenido ${nombre}`,
          timer: 1500,
          showConfirmButton: false,
        });
        } else if (rolNormalizado === "Operario") {
          localStorage.setItem("rol", "Operario");
          navegacion("/operario");
        } else {
          Swal.fire({
            icon: "error",
            title: "Rol no reconocido",
            text: `Rol desconocido: ${usuario.rol}`,
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Credenciales incorrectas",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error en el servidor",
        text: error.message || "No se puede realizar la operación.",
      });
    } finally {
      setTimeout(()=>{
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="container">
      {/* Si loading está activo, muestra el overlay */}
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
          <p>Iniciando sesión...</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={`formulario ${loading ? "deshabilitado" : ""}`}>
        <img src= "./public/image.png"alt="Icono de la libreria" className="logo"/>
        <h2 className="titulo">Inicio de sesión</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="boton" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar sesión"}
        </button>
      </form>
    </div>
  );
}

