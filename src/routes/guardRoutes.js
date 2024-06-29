import { Router } from 'express'
import { getGuards, getGuard, createGuard, updateGuard, deleteGuard } from '../controllers/guardController.js'

const router = Router()

router.get('/', getGuards)
router.get('/:id', getGuard)
router.post('/', createGuard)
router.put('/:id', updateGuard)
router.delete('/:id', deleteGuard)

export default router