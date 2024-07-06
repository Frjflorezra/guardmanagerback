// Creacion de usuario ( guard )
// FRANCISCO
// update contraseña
// delete

// CRUD de guardias para usuario administrador 
import db from '../models/index.js'
import bcrypt from 'bcrypt';
import { Validations } from '../utils/user-repository.js';
const { User } = db
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    console.log(users)
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Create a new admin
export const createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    Validations.username(username)
    Validations.password(password)

    const usernameUsed = await User.findOne({where:{username}})
    if (usernameUsed) {
      return res.status(400).json({ error:'Username ya existe'})
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, password: hashedPassword, role: 'admin' });
    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.status(200).json(userWithoutPassword);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read user by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({ error: 'usuario no encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'usuario no encontrado' });
    }

    const updates = {};
    if (username) updates.username = username;
    if (password) updates.password = await bcrypt.hash(password, 10);

    await user.update(updates);
    const { password: _, ...userWithoutPassword } = user.toJSON();
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Delete user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'usuario no encontrado' });
    }

    await user.destroy();
    res.status(200).json({ message: 'usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};