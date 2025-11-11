import React, { useState, useEffect } from "react";
import { libroService } from "../../../service/Administrador/Libros";
import Swal from 'sweetalert2';

export default function LibrosPorCategorias() {
    const [buscarId, setBuscarId] = useState('');
    const [libros, setLibros] = useState([]);
    const [error, setError] = useState(false);

    // 🟣 Función para filtrar libros por ID
    const FiltrarId = async () => {
        if (!buscarId) {
            Swal.fire('Atención', 'Debes ingresar un ID', 'warning');
            return;
        }

        try {
            const data = await libroService.mostrarLibrosPorId(buscarId);
            setLibros(data);
            setError(false);
        } catch (err) {
            setError(true);
            Swal.fire('Error', 'No se encontraron libros con ese ID', 'error');
        }
    };

    // 🟣 Opcional: ejecutar al cargar (si quieres traer todos)
    useEffect(() => {
        const cargarTodos = async () => {
            try {
                const data = await libroService.mostrarLibros();
                setLibros(data);
            } catch (err) {
                console.error(err);
            }
        };
        cargarTodos();
    }, []);

    return (
        <div className="contenedor-libros">
            <h2>Buscar libros por categoría o ID</h2>

            <div className="busqueda">
                <input
                    type="text"
                    placeholder="Ingresa el ID del libro"
                    value={buscarId}
                    onChange={(e) => setBuscarId(e.target.value)}
                />
                <button onClick={FiltrarId}>Buscar</button>
            </div>

            {error ? (
                <p>No se encontraron resultados.</p>
            ) : (
                <ul>
                    {libros.map((libro) => (
                        <li key={libro.id}>{libro.titulo}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
