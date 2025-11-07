import React, { useState } from "react";
import Swal from "sweetalert2";
import { categoriaService } from "../../../service/Administrador/Categorias";

export default function RegistrarCategorias() {
    // ✅ CORREGIDO: Usar array destructuring en lugar de object destructuring
    const [categorias, setCategorias] = useState({
        nombre: '',
        fecha_creacion: '',
        activado: ''
    });

    const handleChange = (e) => {
        setCategorias({
            ...categorias, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!categorias.nombre || !categorias.fecha_creacion || !categorias.activado) {
            await Swal.fire({
                icon: 'warning',
                title: 'Campos vacios',
                text: 'Recuerde que todos los campos deben estar llenos',
                timer: 2300,
                timerProgressBar: true,
                showConfirmButton: false
            });
            return;
        }

        try {
            const data = await categoriaService.crearCategoria(categorias);
            
            await Swal.fire({
                icon: 'success',
                text: 'Categoría creada con éxito',
                timer: 2400,
                showConfirmButton: false
            });
            
            console.log(data);
            
            // Limpiar formulario después de éxito
            setCategorias({
                nombre: '',
                fecha_creacion: '',
                activado: ''
            });
            
        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Error creando la categoría',
                text: error.message || 'Error desconocido',
                timer: 2400,
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="nombre"
                placeholder="Ingrese el nombre de la categoria: dramas"
                value={categorias.nombre}
                onChange={handleChange}
            />
            
            <input 
                type="date" 
                name="fecha_creacion"
                value={categorias.fecha_creacion}
                onChange={handleChange}
            />
            
            <select 
                name="activado" 
                value={categorias.activado}
                onChange={handleChange}
            >
                <option value="">Seleccione estado</option>
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
            </select>
            
            <button type="submit">
                Registrar Categoría
            </button>
        </form>
    );
}