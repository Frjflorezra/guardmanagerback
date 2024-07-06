import express from "express";
import { getUsers, createAdmin, getUserById, updateUser,deleteUser } from "../controllers/adminController.js"; 
import { authorizeRole } from "../middlewares/roleMiddleware.js";
import { userAuthorized } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Admin routes
router.get('/admins', userAuthorized, authorizeRole('admin'), getUsers);
router.get('/admins/:id', userAuthorized, authorizeRole('admin'), getUserById);
router.post('/admins',  userAuthorized, authorizeRole('admin'), createAdmin);
router.put('/admins/:id', userAuthorized, authorizeRole('admin'), updateUser);
router.delete('/admins/:id', userAuthorized, authorizeRole('admin'), deleteUser);

export default router;
