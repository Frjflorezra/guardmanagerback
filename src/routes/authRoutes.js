
import express from "express";
import { authController } from "../controllers/authController.js";

const router = express.Router();

router.post('/login', authController);

router.post('/logout', async (req, res) => {
    res.clearCookie('access_token').json({ message: 'Cerraste sesión' })
})

export default router;


