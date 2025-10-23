import pkg from "pg";
const { Pool } = pkg;

// Configuración de la base de datos
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "crud_camilo",
  password: "0000",
  port: 5432,
});

// test de conexion al iniciar el modelo
pool.connect()
  .then(() => console.log("Conectado a PostgreSQL correctamente!"))
  .catch((err) => console.error("Error de conexión a PostgreSQL:", err));

export const Usuario = {
  async findAll() {
    try {
      const result = await pool.query("SELECT * FROM usuarios");
      return result.rows;
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
      throw err;
    }
  },

  async findById(id) {
    try {
      const result = await pool.query("SELECT * FROM usuarios WHERE id=$1", [parseInt(id)]);
      return result.rows[0];
    } catch (err) {
      console.error("Error al obtener usuario por ID:", err);
      throw err;
    }
  },

  async create({ nombre, correo, edad }) {
    try {
      const result = await pool.query(
        "INSERT INTO usuarios (nombre, correo, edad) VALUES ($1, $2, $3) RETURNING *",
        [nombre, correo, parseInt(edad)]
      );
      return result.rows[0];
    } catch (err) {
      console.error("Error al crear usuario:", err);
      throw err;
    }
  },

  async update(id, { nombre, correo, edad }) {
    try {
      const result = await pool.query(
        "UPDATE usuarios SET nombre=$1, correo=$2, edad=$3 WHERE id=$4 RETURNING *",
        [nombre, correo, parseInt(edad), parseInt(id)]
      );
      return result.rows[0];
    } catch (err) {
      console.error("Error al actualizar usuario:", err);
      throw err;
    }
  },

  async delete(id) {
    try {
      await pool.query("DELETE FROM usuarios WHERE id=$1", [parseInt(id)]);
    } catch (err) {
      console.error("Error al eliminar usuario:", err);
      throw err;
    }
  }
};
