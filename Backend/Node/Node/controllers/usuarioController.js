import { Usuario } from "../models/usuario.js";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.update(req.params.id, req.body);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    await Usuario.delete(req.params.id);
    res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
