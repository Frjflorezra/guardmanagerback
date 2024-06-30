
import db from '../models/index.js'

const { Location } = db

// Obtener locations
export const getLocations = async (req, res) => {
  try {
    const Locations = await Location.findAll();
    console.log(Locations)
    res.status(200).json(Locations);
  } catch (error) {
    console.log("Error al obtener las ubicaciones: ", error)
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva ubicación
export const createLocation = async (req, res) => {
    const { location_name, address, city, cellphone } = req.body;
  
    try {
      const newLocation = await Location.create({
        location_name,
        address,
        city,
        cellphone,
      });
  
      res.status(201).json(newLocation);
    } catch (error) {
      console.log('Error al crear una ubicación:', error);
      res.status(500).json({ error: 'Error al crear una ubicación' });
    }
  };

  // Actualizar una ubicación
export const updateLocation = async (req, res) => {
    const { id } = req.params;
    const { location_name, address, city, cellphone } = req.body;
  
    try {
      const location = await Location.findByPk(id);
  
      if (!location) {
        return res.status(404).json({ error: 'Ubicación no encontrada' });
      }
  
      location.location_name = location_name ? location_name : location.location_name;
      location.address = address ? address : location.address;
      location.city = city ? city : location.city;
      location.cellphone = cellphone ? cellphone : location.cellphone;
      
      await location.save();
  
      res.status(200).json(location);
    } catch (error) {
      console.log('Error al actualizar una ubicación:', error);
      res.status(500).json({ error: 'Error al actualizar una ubicación' });
    }
  };

  // Eliminar una ubicación
export const deleteLocation = async (req, res) => {
    const { id } = req.params;
  
    try {
      const location = await Location.findByPk(id);
  
      if (!location) {
        return res.status(404).json({ error: 'Ubicación no encontrada' });
      }
  
      await location.destroy();
  
      res.status(200).json({ message: 'Ubicación eliminada correctamente' });
    } catch (error) {
      console.log('Error al eliminar una ubicación:', error);
      res.status(500).json({ error: 'Error al eliminar una ubicación' });
    }
  };
