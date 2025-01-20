Sistema de Autenticación Full-Stack

📄 Descripción
Este proyecto es un sistema de autenticación completo desarrollado utilizando Node.js, Express, Next.js y Supabase. Permite a los usuarios registrarse, iniciar sesión y acceder a una página de perfil protegida. La información de los usuarios se almacena de manera segura en una base de datos gestionada por Supabase.

🚀 Características
Registro de Usuarios: Permite a nuevos usuarios crear una cuenta proporcionando su nombre, correo electrónico y contraseña.
Inicio de Sesión: Autentica a los usuarios existentes utilizando sus credenciales.
Protección de Rutas: Acceso restringido a ciertas páginas solo para usuarios autenticados.
Almacenamiento Seguro: Contraseñas encriptadas y gestión segura de tokens JWT.
Interfaz Amigable: Frontend desarrollado con Next.js para una experiencia de usuario fluida.
🛠️ Tecnologías Utilizadas
Backend
Node.js: Entorno de ejecución para JavaScript.
Express: Framework minimalista para crear aplicaciones web.
Supabase: Base de datos PostgreSQL gestionada con autenticación y autorización.
bcrypt: Biblioteca para encriptar contraseñas.
jsonwebtoken: Generación y verificación de tokens JWT.
Cors: Manejo de solicitudes cross-origin.
dotenv: Gestión de variables de entorno.
Frontend
Next.js: Framework de React para aplicaciones de servidor y cliente.
Axios: Cliente HTTP para realizar solicitudes a la API.
jwt-decode: Decodificación de tokens JWT.
React Hooks: Manejo de estado y efectos en componentes funcionales.
📥 Instalación
1. Clonar el Repositorio
bash
Copiar
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
2. Configurar el Backend
a. Navegar al Directorio del Servidor
bash
Copiar
cd servidor-auth
b. Instalar Dependencias
bash
Copiar
npm install
c. Configurar Variables de Entorno
Crea un archivo .env en la raíz del directorio servidor-auth y agrega las siguientes variables:

env
Copiar
SUPABASE_URL=tu_supabase_url
SUPABASE_KEY=tu_supabase_key
JWT_SECRET=tu_clave_secreta_jwt
PORT=4000
d. Iniciar el Servidor
bash
Copiar
node index.js
El servidor estará corriendo en http://localhost:4000.

3. Configurar el Frontend
a. Navegar al Directorio del Frontend
Abre una nueva terminal y navega a frontend-auth:

bash
Copiar
cd frontend-auth
b. Instalar Dependencias
bash
Copiar
npm install
c. Configurar Variables de Entorno
Crea un archivo .env.local en la raíz del directorio frontend-auth y agrega la siguiente variable:

env
Copiar
NEXT_PUBLIC_API_URL=http://localhost:4000
d. Iniciar el Frontend
bash
Copiar
npm run dev
El frontend estará disponible en http://localhost:3000.

🧪 Uso
Registro de Usuario:

Navega a http://localhost:3000/register.
Completa el formulario con tu nombre, correo electrónico y contraseña.
Envía el formulario para crear una nueva cuenta.
Inicio de Sesión:

Navega a http://localhost:3000/login.
Ingresa tu correo electrónico y contraseña.
Envía el formulario para iniciar sesión.
Perfil de Usuario:

Después de iniciar sesión, serás redirigido a la página de perfil.
Aquí puedes ver tu información personal y cerrar sesión.
🤝 Contribuciones
¡Contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

Fork el repositorio.
Crea una nueva rama para tu feature (git checkout -b feature/nueva-feature).
Realiza tus cambios y commitea (git commit -m 'Añadir nueva feature').
Push a la rama (git push origin feature/nueva-feature).
Abre un Pull Request.
📝 Licencia
Este proyecto está licenciado bajo la Licencia MIT.

📧 Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Correo Electrónico: tu-email@ejemplo.com
LinkedIn: tu-linkedin
