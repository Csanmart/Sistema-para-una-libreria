import React, { useState, useEffect } from "react";
import { usuarioService } from "../../../service/Administrador/Usuarios";
import BotonesOpciones from "../BotonesOpciones";

export default function TablaDeUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState(""); // ✅ corrige el nombre

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data = await usuarioService.mostrarTodos();
        setUsuarios(data.data);
        console.log("Usuarios cargados:", data.data);
      } catch (error) {
        setError("Error cargando los usuarios...");
        console.error(error);
      }
    };
    getAllUsers();
  }, []);

  // ✅ "includes" (no "include") y usa la variable correcta
  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    usuario.rol.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <div className="buscador">
        <input
          type="text"
          placeholder="🔍 Buscar usuario o rol..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.length > 0 ? (
            usuariosFiltrados.map((u) => (
              <tr key={u.id_usuario}>
                <td>{u.id_usuario}</td>
                <td>{u.nombre}</td>
                <td>{u.rol}</td>
                <td>
                    <BotonesOpciones id_usuario={u.id_usuario} onDelete={(id) => setUsuarios(usuarios.filter((user) => user.id_usuario !== id))}/>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No se encontraron resultados 😕</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
