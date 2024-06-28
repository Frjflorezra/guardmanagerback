// Creacion de usuario ( guard )
// FRANCISCO
// update contraseña
// delete

// CRUD de guardias para usuario administrador 
import db from '../models/index.js'
const { User } = db
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users)
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

