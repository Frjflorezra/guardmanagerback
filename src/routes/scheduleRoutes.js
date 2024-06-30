import express from 'express';
import { createSchedule, getSchedules, updateSchedule, deleteSchedule } from '../controllers/scheduleController.js';

const router = express.Router();

router.get('/schedules', getSchedules);              
router.post('/schedules', createSchedule);             
router.put('/schedules/:id', updateSchedule);          
router.delete('/schedules/:id', deleteSchedule);       

export default router;
