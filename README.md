Proyecto CRUD de Usuarios con Node.js, Java y Angular
Descripción del Proyecto

Este proyecto implementa un CRUD completo de usuarios integrando dos backends y un frontend interactivo, con conexión a PostgreSQL.
El sistema permite gestionar usuarios de manera eficiente, con filtros, paginación y un diseño responsivo, ideal para aplicaciones empresariales o académicas.

Tecnologías utilizadas:

Backend 1: Node.js + Express (API REST con PostgreSQL)

Backend 2: Java + Spring Boot (API REST con PostgreSQL)

Frontend: Angular (consumiendo ambos backends)

Base de datos: PostgreSQL

Funcionalidades principales:

Listar todos los usuarios con paginación

Agregar, editar y eliminar usuarios

Filtrado por nombre y edad

Modales para formularios de usuario

Diseño responsivo con Bootstrap 5

Animaciones ligeras para mejor experiencia de usuario

Arquitectura del Proyecto
+-------------------+
|   PostgreSQL       |
| (Base de datos)    |
+--------+----------+
         ^
         | (pg / JDBC)
+--------------+--------------+
| Backend Node.js + Express   |
| - Express para rutas        |
| - pg para conexión a DB     |
| - API REST: /api/usuarios  |
+--------------+--------------+
         ^
         | (HTTP)
+--------------+--------------+
|     Frontend Angular        |
| - HttpClient consume API    |
| - Modales y paginación      |
| - Filtros por nombre/edad   |
+--------------+--------------+
         ^
         | (HTTP)
+-----------------------------+
| Backend Java + Spring Boot  |
| - Spring MVC                |
| - Spring Data JPA / JDBC    |
| - API REST: /api/usuarios   |
+-----------------------------+

Requisitos Previos

Node.js: versión reciente

Angular CLI: versión compatible con Angular 16+

Java JDK: 17 o superior

PostgreSQL: 14+

Herramientas opcionales: Postman, Docker

⚠️ Nota importante: En package.json del backend Node.js, no actualizar automáticamente las versiones de las dependencias, ya que puede romper la compatibilidad del proyecto.

Base de Datos

Creación de base de datos y tabla:

-- Crear base de datos
CREATE DATABASE crud_usuarios;

-- Conectarse a la base
\c crud_usuarios

-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    edad INT
);


Para el backend Java, el campo de correo se llama email en la entidad Usuario.

Parte 1: Backend Node.js + Express
Instalación y ejecución

Abrir el proyecto backend-node.

Instalar dependencias:

npm install


Configurar conexión a PostgreSQL en db.js:

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

Tecnologías utilizadas

Express: manejo de rutas y controladores HTTP

pg: conexión y consultas a PostgreSQL

cors: permitir peticiones desde Angular

body-parser: parsear JSON en requests

Endpoints principales
Método	Ruta	Descripción	Body Ejemplo
GET	/api/usuarios	Obtener todos los usuarios	-
POST	/api/usuarios	Crear un usuario	{ "nombre": "David Avila", "correo": "david.avila@gmail.com", "edad": 32 }
PUT	/api/usuarios/:id	Actualizar usuario	{ "nombre": "David Ávila", "correo": "david.editado@gmail.com", "edad": 37 }
DELETE	/api/usuarios/:id	Eliminar usuario	-
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

Tecnologías utilizadas

Spring MVC: organización de controladores y rutas

Spring Data JPA: operaciones sobre la base de datos

PostgreSQL: motor de base de datos

Lombok (opcional): generar getters/setters automáticamente

Endpoints principales
Método	Ruta	Descripción	Body Ejemplo
GET	/api/usuarios	Obtener todos los usuarios	-
POST	/api/usuarios	Crear usuario	{ "nombre": "Natalia Gomez", "email": "nati2343@outlook.com", "edad": 19 }
PUT	/api/usuarios/:id	Actualizar usuario	{ "nombre": "Natalia Gomez", "email": "natilla25@outlook.com", "edad": 19 }
DELETE	/api/usuarios/:id	Eliminar usuario	-
Parte 3: Frontend Angular
Instalación y ejecución

Abrir el proyecto frontend.

Instalar dependencias:

npm install


Iniciar servidor Angular:

ng serve


Disponible en: http://localhost:4200

Conexión con Backends

Node.js: http://localhost:3000/api/usuarios

Java: http://localhost:8080/api/usuarios

Configurar en usuarios.service.ts la URL del backend deseado.

Funcionalidades destacadas

Listado de usuarios con paginación automática

Filtros por nombre y edad

Modales para agregar y editar usuarios

Botones de acción para eliminar usuarios

Diseño responsivo con Bootstrap 5

Animaciones ligeras para mejorar la experiencia de usuario

Reactive forms y binding con NgModel

Detalles técnicos

HttpClient: consumo de API REST

NgModel: enlace de datos en formularios

Bootstrap 5: diseño, modales y responsividad

Animaciones con animate.css para transiciones suaves

Pruebas y Postman
Ejemplo de uso de Postman

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


También se puede probar directamente desde el frontend, utilizando los modales para crear, editar y eliminar usuarios, asegurando una experiencia completa de CRUD.
