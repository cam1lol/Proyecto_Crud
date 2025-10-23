Proyecto CRUD de Usuarios con Node.js, Java y Angular
Descripción

Este proyecto implementa un CRUD de usuarios utilizando:

Backend 1: Node.js + Express (conexión a PostgreSQL)

Backend 2: Java + Spring Boot (conexión a PostgreSQL)

Frontend: Angular (consume los datos de ambos backends)

Base de datos: PostgreSQL

Incluye funcionalidades:

Listar usuarios

Agregar, editar y eliminar usuarios

Filtros por nombre y edad

Paginación

Modales para formularios

Diseño responsivo con Bootstrap

Arquitectura del Proyecto
        +-------------------+
        |    PostgreSQL      |
        |  (Base de datos)   |
        +--------+----------+
                 ^
                 | (pg / JDBC)
  +--------------+--------------+
  |                             |
  |    Backend Node.js + Express|
  |  - Express para rutas       |
  |  - pg para conexión a DB    |
  |  - API REST: /api/usuarios |
  +--------------+--------------+
                 ^
                 | (HTTP)
  +--------------+--------------+
  |                             |
  |   Frontend Angular          |
  |  - HttpClient consume API   |
  |  - Modales y paginación     |
  |  - Filtros por nombre/edad  |
  +--------------+--------------+
                 ^
                 | (HTTP)
  +--------------+--------------+
  |                             |
  |  Backend Java + Spring Boot |
  |  - Spring MVC               |
  |  - Spring Data JPA / JDBC   |
  |  - API REST: /api/usuarios  |
  +-----------------------------+

Requisitos

Node.js (versión reciente)

Java JDK (17 o superior)

PostgreSQL

Angular CLI

Herramientas opcionales: Postman, Docker

Nota importante: En package.json de Node.js, no actualizar las versiones de dependencias automáticamente, ya que puede romper el proyecto.

Base de datos
Creación de la base de datos y tabla
-- Crear base de datos
CREATE DATABASE crud_usuarios;

-- Conectarse a la base de datos
\c crud_usuarios

-- Crear tabla de usuarios
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  edad INT
);


Para Java, el campo de correo se llama email en la entidad.

Parte 1: Backend Node.js + Express
Instalación y ejecución

Abrir el proyecto backend-node.

Instalar dependencias:

npm install


Configurar la conexión a PostgreSQL en db.js o archivo de configuración:

const pool = new Pool({
  user: 'TU_USUARIO',
  host: 'localhost',
  database: 'crud_usuarios',
  password: 'TU_PASSWORD',
  port: 5432
});


Iniciar el servidor:

npm start


Servidor disponible en: http://localhost:3000

Tecnologías usadas

Express: para manejar rutas y controladores HTTP

pg: para conectarse y ejecutar queries en PostgreSQL

cors: habilitar peticiones desde Angular

body-parser: parsear JSON en requests

Endpoints
Método	Ruta	Descripción	Body Ejemplo
GET	/api/data	Obtener todos los usuarios	-
POST	/api/usuarios	Crear un usuario	{ "nombre": "David Avila", "correo": "david.avila@gmail.com", "edad": 32 }
PUT	/api/usuarios/:id	Actualizar un usuario	{ "nombre": "David Ávila Editado", "correo": "david.editado@gmail.com", "edad": 37 }
DELETE	/api/usuarios/:id	Eliminar un usuario	-
Parte 2: Backend Java + Spring Boot
Instalación y ejecución

Abrir el proyecto en IntelliJ IDEA o Eclipse.

Configurar conexión a PostgreSQL en application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/crud_usuarios
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


Se recomienda definir DB_USER y DB_PASSWORD como variables de entorno.

Ejecutar la aplicación:

mvn spring-boot:run


Servidor disponible en: http://localhost:8080

Tecnologías usadas

Spring MVC: para organizar controladores y rutas

Spring Data JPA: para conexión y operaciones con la base de datos

H2 / PostgreSQL: motor de base de datos

Lombok (opcional): para generar getters/setters automáticamente

Endpoints
Método	Ruta	Descripción	Body Ejemplo
GET	/api/usuarios	Obtener todos los usuarios	-
POST	/api/usuarios	Crear un usuario	{ "nombre": "Natalia Gomez", "email": "nati2343@outlook.com", "edad": 19 }
PUT	/api/usuarios/:id	Actualizar un usuario	{ "nombre": "Natalia Gomez", "email": "natilla25@outlook.com", "edad": 19 }
DELETE	/api/usuarios/:id	Eliminar un usuario	-
Parte 3: Frontend Angular
Instalación y ejecución

Abrir proyecto frontend.

Instalar dependencias:

npm install


Iniciar el servidor Angular:

ng serve


Disponible en http://localhost:4200

Conexión con los backends

Node.js: http://localhost:3000/api/usuarios

Java: http://localhost:8080/api/usuarios

Configurar en usuarios.service.ts la URL del backend que se desea consumir.

Funcionalidades

Listar usuarios con filtros por nombre y edad

Paginación automática

Modales para agregar y editar usuarios

Botones para eliminar usuarios

Detalles de implementación

HttpClient: para consumir la API REST

NgModel: para enlazar datos en formularios

Bootstrap 5: para diseño, modales y responsividad

Animaciones: ligeras para mejor UX

Pruebas y Postman

Probar todos los endpoints con GET, POST, PUT, DELETE

Ejemplo con Postman:

Crear usuario Node.js:

POST http://localhost:3000/api/usuarios
{
  "nombre": "David Avila",
  "correo": "david.avila@gmail.com",
  "edad": 32
}


Crear usuario Java:

POST http://localhost:8080/api/usuarios
{
  "nombre": "Natalia Gomez",
  "email": "nati2343@outlook.com",
  "edad": 19
}


También se puede probar desde el frontend, agregando, editando o eliminando usuarios desde los modales.
