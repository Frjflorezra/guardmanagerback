// login
import { UserRepository } from "../utils/user-repository.js";
import jwt from "jsonwebtoken";
import jwtConfig from './../config/jwtConfig.js';
// DIEGO
export const authController = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await UserRepository.login({ username, password });

        console.log(user);
        const token = jwt.sign({ user: user.user, role: user.role, id: user.user_id }, jwtConfig.secret)

        res
            .cookie('access_token', token, {
                maxAge: 1000 * 60 * 60
            })
            .send({
                username, token
            })
    } catch (error) {
        res.status(401).send(error.message)
    }
}