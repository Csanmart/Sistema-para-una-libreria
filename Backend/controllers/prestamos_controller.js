const { DATE } = require("sequelize");
const {
  RelationPrestamo,
  RelationLibro,
  RelationUsuario,
} = require("../models/relationChips/relations");

exports.CrearPrestamo = async (req, res) => {
  try {
    const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado } =
      req.body;

    if (
      !usuario_id ||
      !libro_id ||
      !fecha_prestamo ||
      !fecha_devolucion ||
      !estado
    ) {
      res.status(400).json({ message: "Los campos no pueden estar vacios" });
    }

    const libro = await RelationLibro.findByPk(libro_id);

    if (!libro) {
      res.status(400).json({ message: "Error no se encuentra este libro" });
    }

    if (libro.cantidad <= 0)
      return res.status(400).json({
        message: "Error no quedan copias de este libro",
      });

    const prestamo = await RelationPrestamo.create(req.body);

    await libro.update({ cantidad: libro.cantidad - 1 });

    const prestamosConLosDatos = await RelationPrestamo.create(prestamo.id, {
      include: [
        {
          model: RelationUsuario,
          attributes: ["id_usuario", "nombre"],
        },
        {
          model: RelationLibro,
          attributes: ["id_libro", "titulo", "cantidad"],
        },
      ],
    });

    res
      .status(201)
      .json({ message: "Prestado correctamente", Date: prestamosConLosDatos });
  } catch (error) {
    res.status(400).json({ message: "Error creando el prestamo" });
  }
};

exports.mostrarTodosPrestamos = async (req, res) => {
  try {
    const prestamos = await RelationPrestamo.findAll({
      include: [
        {
          model: RelationUsuario,
          attributes: ["id_usuario", "nombre"],
        },
        {
          model: RelationLibro,
          attributes: ["id_libro", "titulo", "cantidad"],
        },
      ],
    });

    if (!prestamos || !prestamos.length === 0) {
      return res.status(400).json({
        message: "No se tienen registros de prestamos",
      });
    }
    res.status(200).json({
      message: "Mostrando la informacio",
      Date: prestamos,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Mostrando los usuarios" });
  }
};

exports.prestamosPorId = async (req, res) => {
  try {
    const { id_prestamo } = req.params;
    const prestamo = await RelationPrestamo.findByPk(id_prestamo, {
      include: [
        {
          model: RelationUsuario,
          attributes: ["id_usuario", "nombre"],
        },
        {
          model: RelationLibro,
          attributes: ["id_libro", "titulo", "cantidad"],
        },
      ],
    });

    if (!prestamo || prestamo.length === 0) {
      return res.status(404).json({
        message: "No se encuentra el di",
      });
    }

    res.status(200).json({ message: "Mostrando por id", Date: prestamo });
  } catch (error) {
    res.status(500).json({
      message: "Error Tomando la informacio",
      Date: error,
    });
  }
};

exports.actualizarPrestamo = async (req, res) => {
  try {
    const { id_prestamo } = req.params;

    const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion, estado } =
      req.body;

    const prestamos = await RelationPrestamo.findByPk(id_prestamo, {
      include: [
        {
          model: RelationUsuario,
          attributes: ["id_usuario", "nombre"],
        },
        {
          model: RelationLibro,
          attributes: ["id_libro", "titulo", "cantidad"],
        },
      ],
    });

    if (!prestamos) {
      return res.status(400).json({ message: "El prestamo no existe" });
    }

    if (usuario_id) prestamos.usuario_id = usuario_id;
    if (libro_id && libro_id !== prestamos.libro_id) {
      const libroAnterior = await RelationLibro.findByPk(prestamos.libro_id);
      const libroNuevo = await RelationLibro.findByPk(libro_id);

      if (libroAnterior) {
        libroAnterior.cantidad += 1;
        await libroAnterior.save();
      }
      if (libroNuevo && libroNuevo.cantidad > 0) {
        libroNuevo.cantidad -= 1;
        await libroNuevo.save();
      } else {
        res.status(400).json({ message: "No hay ejemplares disponibles" });
      }
      prestamos.libro_id = libro_id;
    }
    if (fecha_prestamo) prestamos.fecha_prestamo = fecha_prestamo;
    if (fecha_devolucion) prestamos.fecha_devolucion = fecha_devolucion;
    if (estado) {
      prestamos.estado = estado;
      if (estado === "DEVUELTO") {
        const libro = await RelationLibro.findByPk(prestamos.libro_id);
        if (libro) {
          libro.cantidad += 1;
          await libro.save();
        }
      }
    }
    await prestamos.save();

    res.status(200).json({ message: "Actualizamos prestamo", Date: prestamos });
  } catch (error) {
    res
      .status(500)
      .json({ message: "No se puede realizar la actualizacion", Date: error });
  }
};

exports.deshabilitarPrestamo = async (req, res) => {
  try {
    const { id_prestamo } = req.params;

    const prestamo = await RelationPrestamo.findByPk(id_prestamo, {
      include: [
        { model: RelationUsuario, attributes: ["id_usuario", "nombre"] },
        {
          model: RelationLibro,
          attributes: ["id_libro", "titulo", "cantidad"],
        },
      ],
    });

    if (!prestamo) {
      return res.status(404).json({ message: "El préstamo no existe" });
    }

    // Si ya está devuelto, no se puede deshabilitar
    if (prestamo.estado === "DEVUELTO") {
      return res
        .status(400)
        .json({ message: "El préstamo ya fue devuelto o deshabilitado" });
    }

    // Cambiar el estado a DEVUELTO (simulando que está deshabilitado)
    prestamo.estado = "DEVUELTO";

    // Devolver el libro al inventario
    const libro = await RelationLibro.findByPk(prestamo.libro_id);
    if (libro) {
      libro.cantidad += 1;
      await libro.save();
    }

    await prestamo.save();

    res.status(200).json({
      message: "Préstamo deshabilitado (marcado como devuelto)",
      data: prestamo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al deshabilitar el préstamo",
      error: error.message,
    });
  }
};
