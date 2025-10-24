🧩 README — Sistema Interno de Librería 📘 Descripción General

Este proyecto es un sistema interno para la gestión de una librería, diseñado para centralizar y optimizar los procesos del área de trabajo. A diferencia de los sistemas destinados al público general, esta plataforma está enfocada en la gestión interna del personal: control de préstamos, registro de libros, manejo de usuarios internos y administración de estados (por ejemplo, habilitar o deshabilitar préstamos).

El sistema está construido con Node.js, Express, Sequelize y MySQL, lo que permite una arquitectura sólida y escalable. Además, su diseño modular permite futuras ampliaciones sin afectar las funcionalidades existentes.

⚙️ Características Principales

📚 Gestión de Libros: Registro, actualización y control del inventario.

👤 Gestión de Usuarios Internos: Solo el personal autorizado puede acceder al sistema.

🔁 Gestión de Préstamos: Permite registrar préstamos y devoluciones, con un sistema de “deshabilitado” para evitar eliminaciones permanentes.

🗂️ Estructura Organizada: Separación clara entre controladores, rutas y modelos.

🔒 Validaciones y Seguridad: Validación de datos y manejo de errores en cada proceso.

🧠 Arquitectura del Proyecto 📁 system-library ├── 📂 src │ ├── 📂 controllers # Controladores de cada módulo (libros, préstamos, usuarios) │ ├── 📂 models # Modelos de Sequelize para las tablas de la BD │ ├── 📂 routes # Rutas Express para las API │ ├── 📂 database # Configuración de Sequelize y conexión MySQL │ └── 📂 middlewares # Validaciones y seguridad │ ├── 📄 app.js # Archivo principal del servidor ├── 📄 package.json # Dependencias y scripts └── 📄 README.md # Documentación del proyecto

🧩 Tecnologías Utilizadas Categoría Tecnología Backend Node.js + Express ORM Sequelize Base de datos MySQL Pruebas de API Postman Control de versiones Git y GitHub

Clona el repositorio

git clone https://github.com/Csanmart/Sistema-para-una-libreria

Instala las dependencias

npm install

Configura la base de datos

Crea un archivo .env con tus credenciales:

DB_NAME=libreria_db DB_USER=root DB_PASSWORD=tu_contraseña DB_HOST=localhost DB_DIALECT=mysql PORT=3000

Ejecuta el servidor

npm start

Prueba los endpoints

Usa Postman o Insomnia para realizar pruebas a los endpoints disponibles.

📖 Estado del Proyecto

🔧 En desarrollo 🚀 Próximamente: integración de roles, panel administrativo y reportes de actividad.

✍️ Autor

Desarrollado por: csanmartDev 📧 Contacto: csanmart2024@hotmail.com 💼 GitHub:
