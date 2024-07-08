import { Router } from 'express'
import { getGuards, getGuard, createGuard, updateGuard, deleteGuard } from '../controllers/guardController.js'
import { authorizeRole } from '../middlewares/roleMiddleware.js'
import { userRole } from '../models/ERole.js'

const router = Router()

router.get('/', authorizeRole(userRole.ADMINISTRATOR), getGuards)
router.get('/:id', getGuard)
router.post('/', authorizeRole(userRole.ADMINISTRATOR), createGuard)
router.put('/:id', authorizeRole(userRole.ADMINISTRATOR), updateGuard)
router.delete('/:id', authorizeRole(userRole.ADMINISTRATOR), deleteGuard)

export default router