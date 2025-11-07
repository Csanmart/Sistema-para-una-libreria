import React, { useState, useEffect } from "react";
import { categoriaService } from "../../../service/Administrador/Categorias";

export default function TablaCategorias() {
  const [categorias, setCategorias] = useState([]);
  // const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
  const getAllCategorias = async () => {
    try {
      const data = await categoriaService.mostrarTodos();

      // 🔒 Verifica estructura antes de asignar
      if (data && Array.isArray(data.date)) {
        setCategorias(data.date);
        console.log("Categorías cargadas:", data.date);
      } else {
        console.warn("Respuesta inesperada del servidor:", data);
        setCategorias([]); // evitar crash
      }

    } catch (error) {
      console.error("Error cargando las categorías:", error);
      setCategorias([]); // evita el fallo en el .filter()
    }
  };

  getAllCategorias();
}, []);

  // Filtro corregido y protegido


  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Categoría</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((u)=>(
            <tr key={u.id_categorias}>
              <td>{u.id_categorias}</td>
              <td>{u.nombre}</td>
              <td>{u.activado}</td>
              <td>
                <button id_categorias= {u.id_categorias}>Actualizar</button>
                <button id_categorias= {u.id_categorias}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
