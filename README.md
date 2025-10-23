📌 Proyecto CRUD de Usuarios con Node.js, Java y Angular
📝 Descripción General

Este proyecto es una aplicación CRUD completa de gestión de usuarios, diseñada para práctica y desarrollo profesional, integrando:

Backend Node.js + Express con PostgreSQL

Backend Java + Spring Boot con PostgreSQL

Frontend Angular 16+ consumiendo ambos backends

Base de datos: PostgreSQL

El sistema permite listar, agregar, editar y eliminar usuarios, con filtros, paginación y modales. Su diseño responsivo garantiza compatibilidad total con dispositivos móviles y escritorio.

Funcionalidades destacadas:

Listado completo de usuarios con paginación dinámica

Filtros por nombre y edad

Modales para formularios de creación y edición

Eliminación de usuarios con confirmación

Animaciones ligeras para mejorar la experiencia de usuario

Diseño profesional con Bootstrap 5

🏗 Arquitectura del Proyecto
flowchart TD
    A[PostgreSQL] -->|pg / JDBC| B[Backend Node.js + Express]
    A -->|JDBC| C[Backend Java + Spring Boot]
    B -->|HTTP| D[Frontend Angular]
    C -->|HTTP| D
    D -->|HTTP Requests| B
    D -->|HTTP Requests| C


Descripción del flujo de datos:

El Frontend Angular envía solicitudes HTTP al backend seleccionado (Node.js o Java).

El Backend procesa la solicitud usando consultas a PostgreSQL.

Los datos se devuelven al frontend, donde se renderizan dinámicamente con filtros y paginación.

🛠 Requisitos del Sistema

Node.js: 18+

Angular CLI: 16+

Java JDK: 17+

PostgreSQL: 14+

Herramientas opcionales: Postman, Docker

⚠️ Importante: No actualizar automáticamente las versiones de dependencias en package.json de Node.js, ya que puede romper la compatibilidad del proyecto.

🗄 Base de Datos

Creación de la base y tabla:

-- Crear base de datos
CREATE DATABASE crud_usuarios;

-- Conectarse a la base
\c crud_usuarios

-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    edad INT NOT NULL
);


Para Spring Boot, el campo correo se llama email en la entidad Usuario.

💻 Backend Node.js + Express
Instalación y ejecución

Abrir el proyecto backend-node.

Instalar dependencias:

npm install


Configurar PostgreSQL en db.js:

const pool = new Pool({
  user: 'TU_USUARIO',
  host: 'localhost',
  database: 'crud_usuarios',
  password: 'TU_PASSWORD',
  port: 5432
});


Iniciar servidor:

npm start


Acceso al servidor: http://localhost:3000

Tecnologías clave

Express: gestión de rutas y controladores HTTP

pg: conexión y ejecución de consultas SQL

cors: habilita solicitudes desde Angular

body-parser: parseo de JSON en requests

Endpoints REST
Método	Ruta	Descripción	Body de ejemplo
GET	/api/usuarios	Listar todos los usuarios	-
POST	/api/usuarios	Crear un usuario	{ "nombre": "David Avila", "correo": "david.avila@gmail.com", "edad": 32 }
PUT	/api/usuarios/:id	Actualizar usuario	{ "nombre": "David Ávila Editado", "correo": "david.editado@gmail.com", "edad": 37 }
DELETE	/api/usuarios/:id	Eliminar usuario	-
💻 Backend Java + Spring Boot
Instalación y ejecución

Abrir proyecto en IntelliJ IDEA o Eclipse.

Configurar conexión a PostgreSQL en application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/crud_usuarios
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


Se recomienda definir DB_USER y DB_PASSWORD como variables de entorno.

Ejecutar:

mvn spring-boot:run


Acceso al servidor: http://localhost:8080

Tecnologías clave

Spring MVC: estructura de controladores y rutas

Spring Data JPA: operaciones sobre base de datos

PostgreSQL: motor de base de datos principal

Lombok (opcional): reduce boilerplate con getters/setters

Endpoints REST
Método	Ruta	Descripción	Body de ejemplo
GET	/api/usuarios	Listar todos los usuarios	-
POST	/api/usuarios	Crear un usuario	{ "nombre": "Natalia Gomez", "email": "nati2343@outlook.com", "edad": 19 }
PUT	/api/usuarios/:id	Actualizar usuario	{ "nombre": "Natalia Gomez", "email": "natilla25@outlook.com", "edad": 19 }
DELETE	/api/usuarios/:id	Eliminar usuario	-
🌐 Frontend Angular
Instalación y ejecución

Abrir proyecto frontend.

Instalar dependencias:

npm install


Iniciar servidor:

ng serve


Acceso: http://localhost:4200

Conexión con Backends

Node.js: http://localhost:3000/api/usuarios

Java Spring Boot: http://localhost:8080/api/usuarios

Configurar en usuarios.service.ts la URL del backend que se desea consumir.

Funcionalidades destacadas

Listado de usuarios con paginación automática

Filtrado dinámico por nombre y edad

Modales para agregar y editar usuarios

Eliminación con confirmación

Diseño responsivo con Bootstrap 5

Animaciones ligeras para mejorar UX

Detalles de implementación

HttpClient para consumo de API REST

NgModel para binding en formularios

Bootstrap 5 para diseño, modales y responsividad

Uso de animate.css para animaciones suaves

Validación de formularios con Angular Reactive Forms

🧪 Pruebas y Postman
Crear usuario Node.js
POST http://localhost:3000/api/usuarios
Body:
{
  "nombre": "David Avila",
  "correo": "david.avila@gmail.com",
  "edad": 32
}

Crear usuario Java
POST http://localhost:8080/api/usuarios
Body:
{
  "nombre": "Natalia Gomez",
  "email": "nati2343@outlook.com",
  "edad": 19
}


Se pueden realizar pruebas directamente desde el frontend utilizando los modales.
