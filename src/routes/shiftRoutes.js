import { Router } from "express";
import { getShifts } from "../controllers/shiftController.js";

const router = Router()

router.get('', getShifts)

export default router