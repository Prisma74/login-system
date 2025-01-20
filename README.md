## 🔄 Descripción

Este proyecto es un **sistema de autenticación completo** desarrollado utilizando **Node.js**, **Express**, **Next.js** y **Supabase**. Su objetivo principal es proporcionar una plataforma segura y eficiente para que los usuarios puedan:

1. **Registrarse:** Crear una nueva cuenta proporcionando su nombre, correo electrónico y una contraseña segura. La información se valida y se almacena en una base de datos PostgreSQL gestionada por Supabase.

2. **Iniciar sesión:** Autenticar a los usuarios existentes mediante sus credenciales (correo electrónico y contraseña). El sistema utiliza contraseñas encriptadas con bcrypt y genera tokens JWT para la sesión del usuario.

3. **Acceso a páginas protegidas:** Implementa protección de rutas en el frontend utilizando Next.js. Solo los usuarios autenticados pueden acceder a ciertas funcionalidades, como el perfil del usuario.

### 🚀 Características principales

- **Almacenamiento seguro:** Contraseñas encriptadas y gestión segura de tokens JWT para autenticar usuarios y proteger la información.
- **Interfaz intuitiva:** Frontend desarrollado con Next.js para una experiencia de usuario fluida y moderna.
- **Protección de rutas:** Permite restringir el acceso a ciertas páginas solo a usuarios autenticados.
- **Eficiencia y escalabilidad:** Utiliza Supabase como base de datos y API backend para manejar registros de usuarios y autenticación de manera eficiente.
- **Extensibilidad:** Diseñado con una arquitectura modular para facilitar futuras ampliaciones y mejoras.

### 🔧 Tecnologías utilizadas

#### **Backend**
- **Node.js:** Entorno de ejecución para JavaScript.
- **Express:** Framework minimalista para crear aplicaciones web y APIs.
- **Supabase:** Base de datos PostgreSQL con autenticación y autorización integrada.
- **bcrypt:** Biblioteca para encriptar contraseñas.
- **jsonwebtoken:** Gestión de tokens JWT para autenticar y mantener sesiones seguras.
- **dotenv:** Manejo de variables de entorno para configuraciones sensibles.

#### **Frontend**
- **Next.js:** Framework de React para renderizado en servidor y cliente.
- **Axios:** Cliente HTTP para realizar solicitudes al backend.
- **jwt-decode:** Biblioteca para decodificar y manejar tokens JWT en el frontend.
- **React Hooks:** Manejo de estado y efectos en componentes funcionales.

Este proyecto es ideal para comprender los conceptos fundamentales de autenticación, seguridad en aplicaciones web y la integración de un frontend moderno con un backend robusto. Además, está pensado para ser fácilmente ampliado y personalizado según las necesidades del desarrollador.

