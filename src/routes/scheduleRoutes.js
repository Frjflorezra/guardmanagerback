import express from 'express';
import { createSchedule, getSchedules, updateSchedule, deleteSchedule, getOneSchedule, getSchedulesByGuardId } from '../controllers/scheculeController.js';

const router = express.Router();

router.get('/schedules', getSchedules);     
router.get('/schedule', getOneSchedule)         
router.get('/allschedule', getSchedulesByGuardId)
router.post('/schedules', createSchedule);             
router.put('/schedules/:id', updateSchedule);          
router.delete('/schedules/:id', deleteSchedule);       

export default router;
