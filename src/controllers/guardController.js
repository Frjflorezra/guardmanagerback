// para usuarios guard consultar guard, update (password, correo, telefono y direccion) (involucra la tabla user y la guard)
// JEAN
import { CreateGuardDTO, ShowGuardDTO, UpdateGuardDTO } from '../models/dto/GuardDTO.js'
import db from '../models/index.js'
import bcrypt from 'bcrypt'
import { validateEmail } from '../utils/validation.js'
import { Op } from 'sequelize'

const { Guard, User } = db

export const getGuards = async (req, res) => {
    try {
        const allGuards = await Guard.findAll()
        const guardsDto = allGuards.map(guard => new ShowGuardDTO({
            id: guard.guard_id,
            first_name: guard.first_name,
            last_name: guard.last_name,
            cellphone: guard.cellphone,
            email: guard.email,
            address: guard.address
        }))

        return res.status(200).json(guardsDto)
    } catch (error) {
        return res.status(500).json({
            error: `Error interno: ${error.message}`
        })
    }
}

export const getGuard = async (req, res) => {
    try {
        const guard = await Guard.findOne({ where: { guard_id: req.params.id } })
        if (!guard) {
            return res.status(400).json({
                error: `Guardia no encontrado`
            })
        }
        const guardDto = new ShowGuardDTO({
            id: guard.guard_id,
            first_name: guard.first_name,
            last_name: guard.last_name,
            cellphone: guard.cellphone,
            email: guard.email,
            address: guard.address
        })

        return res.status(200).json(guardDto)
    } catch (error) {
        return res.status(500).json({
            error: `Error interno: ${error.message}`
        })
    }
}

export const createGuard = async (req, res) => {
    try {
        const guardData = new CreateGuardDTO(req.body)
        if(!guardData.validateAttributes()){
            return res.status(400).json({
                error: `Faltan datos`
            })
        }
        
        const foundUser = await User.findOne({ where: { username: guardData.username } })
        if(foundUser){
            return res.status(400).json({
                error: `El usuario ya existe`
            })
        }

        if(!validateEmail(guardData.email)){
            return res.status(400).json({
                error: `Email inválido`
            })
        }
        const foundGuard = await Guard.findOne({ where: { email: guardData.email } })
        if(foundGuard){
            return res.status(400).json({
                error: `No se puede usar el correo indicado`
            })
        }

        const password = await bcrypt.hash(guardData.password, 10)
        const userData = {
            username: guardData.username,
            password: password,
            role: 'guard'
        }
        const user = await User.create(userData)

        await Guard.create({
            first_name: guardData.first_name,
            last_name: guardData.last_name,
            cellphone: guardData.cellphone,
            email: guardData.email,
            address: guardData.address,
            user_id: user.user_id
        })

        return res.status(200).json({
            message: "Guardia creado"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: `Error interno: ${error.message}`
        })
    }
}

export const updateGuard = async(req, res) => {
    try {
        const guardData = new UpdateGuardDTO(req.body)

        if(!validateEmail(guardData.email)){
            return res.status(400).json({
                error: `Email inválido`
            })
        }
        const guard_id = req.params.id
        const foundGuard = await Guard.findOne({ where: { guard_id } })
        if(!foundGuard){
            return res.status(400).json({
                error: `No se encontró el guarda`
            })
        }
        const foundEmailRepeated = await Guard.findOne({ where: { email: guardData.email, guard_id: { [Op.ne]: guard_id } } })
        if(foundEmailRepeated){
            return res.status(400).json({
                error: `No se puede usar el correo indicado`
            })
        }

        const password = await bcrypt.hash(guardData.password, 10)
        await User.update({
            username: guardData.username,
            password: password
        },{
            where: { user_id: foundGuard.user_id }
        })

        await Guard.update({
            first_name: guardData.first_name,
            last_name: guardData.last_name,
            cellphone: guardData.cellphone,
            email: guardData.email,
            address: guardData.address,
        }, {
            where: { guard_id: req.params.id }
        })

        return res.status(200).json({
            message: "Guardia actualizado"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: `Error interno: ${error.message}`
        })
    }
}

export const deleteGuard = async(req, res) => {
    try {
        const guard = await Guard.findOne({ where: { guard_id: req.params.id } })
        if(!guard){
            return res.status(400).json({
                error: `No se encontró el guarda`
            })
        }
        
        const user_id = guard.user_id
        await guard.destroy()
        await User.destroy({
            where: { user_id }
        })

        return res.status(200).json({
            message: "Guardia eliminado"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: `Error interno: ${error.message}`
        })
    }
}