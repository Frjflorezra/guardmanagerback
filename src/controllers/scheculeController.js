import db from '../models/index.js';
const { Schedule } = db;


// Crear un nuevo horario (Admin)
export const createSchedule = async (req, res) => {
  const { start_date, end_date, location_id, shift_id, guard_id } = req.body;

  try {
    const newSchedule = await Schedule.create({
      start_date,
      end_date,
      location_id,
      shift_id,
      guard_id,
    });

    res.status(201).json(newSchedule);
  } catch (error) {
    console.log('Error al crear un horario:', error);
    res.status(500).json({ error: 'Error al crear un horario' });
  }
};

// Obtener todos los horarios (Admin)
export const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll({
      include: [
        { model: db.Location },
        { model: db.Shift },
        { model: db.Guard }
      ],
      attributes: { exclude: ['location_id', 'shift_id', 'guard_id'] }
    });
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error al obtener los horarios:', error);
    res.status(500).json({ error: 'Error al obtener los horarios' });
  }
};

// Obtener horario de un trabajador

export const getOneSchedule = async (req, res) => {
  const { id } = req.params; 
  try {

    const schedule = await Schedule.findByPk(id);

    if (!schedule) {
      return res.status(404).json({ error: 'Horario no encontrado' });
    }

    res.status(200).json(schedule);
  } catch (error) {
    console.log('Error al obtener el horario:', error);
    res.status(500).json({ error: 'Error al obtener el horario' });
  }
};

export const getSchedulesByGuardId = async (req, res) => {
  const { guard_id } = req.query; 
  console.log("Aqui: ",guard_id)

  try {

    const schedules = await Schedule.findAll({
      where: {
        guard_id: guard_id 
      }
    });

    if (!schedules || schedules.length === 0) {
      return res.status(404).json({ error: 'No se encontraron horarios para este guardia' });
    }

    res.status(200).json(schedules);
  } catch (error) {
    console.log('Error al obtener los horarios del guardia:', error);
    res.status(500).json({ error: 'Error al obtener los horarios del guardia =c' });
  }
};

// Actualizar un horario (Admin)
export const updateSchedule = async (req, res) => {
  const { id } = req.params;
  const { start_date, end_date, location_id, shift_id, guard_id } = req.body;

  try {
    const schedule = await Schedule.findByPk(id);

    if (!schedule) {
      return res.status(404).json({ error: 'Horario no encontrado' });
    }

    schedule.start_date = start_date !== undefined ? start_date : schedule.start_date;
    schedule.end_date = end_date !== undefined ? end_date : schedule.end_date;
    schedule.location_id = location_id !== undefined ? location_id : schedule.location_id;
    schedule.shift_id = shift_id !== undefined ? shift_id : schedule.shift_id;
    schedule.guard_id = guard_id !== undefined ? guard_id : schedule.guard_id;

    await schedule.save();

    res.status(200).json(schedule);
  } catch (error) {
    console.log('Error al actualizar un horario:', error);
    res.status(500).json({ error: 'Error al actualizar un horario' });
  }
};

// Eliminar un horario (admin)
export const deleteSchedule = async (req, res) => {
  const { id } = req.params;

  try {
    const schedule = await Schedule.findByPk(id);

    if (!schedule) {
      return res.status(404).json({ error: 'Horario no encontrado' });
    }

    await schedule.destroy();

    res.status(200).json({ message: 'Horario eliminado correctamente' });
  } catch (error) {
    console.log('Error al eliminar un horario:', error);
    res.status(500).json({ error: 'Error al eliminar un horario' });
  }
};