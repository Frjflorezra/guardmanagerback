
import express from "express";
import { UserRepository } from "../utils/user-repository.js";
import jwt from "jsonwebtoken";
import jwtConfig from './../config/jwtConfig.js';

const router = express.Router();

router.post('/login', async (req, res) => {
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
})

router.post('/logout', async (req, res) => {
    res.clearCookie('access_token').json({ message: 'Cerraste sesión' })
})

export default router;


