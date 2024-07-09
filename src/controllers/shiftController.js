import db from "../models/index.js"
import { showShiftDTO } from "../models/dto/ShiftDTO.js"

const { Shift } = db

export const getShifts = async(req, res) => {
    try {
        const shifts = await Shift.findAll()
        const shiftsDTO = shifts.map(shift => new showShiftDTO({
            id: shift.shift_id,
            shift_name: shift.shift_name,
            start_time: shift.start_time,
            end_time: shift.end_time
        }))
        res.status(200).json(shiftsDTO)
    } catch (error) {
        res.status(500).json({
            message: `Error interno ${error.message}`
        })
    }
}