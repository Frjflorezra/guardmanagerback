import db from '../models/index.js'
import bcrypt from 'bcrypt'

const { User } = db

export class UserRepository {

    static async login({ username, password }) {
        Validations.username(username)
        Validations.password(password)

        const foundUser = await User.findOne({ where: { username } })
        if (!foundUser) {
            throw new Error('Usuario no encontrado')
        }

        const isValid = bcrypt.compareSync(password, foundUser.password);

        if (!isValid) {
            throw new Error('Contrasenia incorrecta')
        }

        const { password: _, ...publicUser } = foundUser?.dataValues

        return {
            user: publicUser.username,
            role: publicUser.role,
            id: publicUser.user_id,
        };
    }
}


export class Validations {
    static validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    static username(username) {
        if (typeof username !== 'string') throw new Error('Username tiene que ser un string')

        if (username.length < 3) throw new Error('Username debe ser mayor a 3 caracteres')
    }

    static password(password) {
        if (typeof password !== 'string') throw new Error('Password tiene que ser un string')

        if (password.length < 8) throw new Error('Password debe ser mayor a 8 caracteres')
    }
}