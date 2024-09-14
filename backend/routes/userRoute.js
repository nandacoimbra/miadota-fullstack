import express from "express"
import { cadastraUsuario, loginUsuario } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post("/register", cadastraUsuario);
userRouter.post("/login", loginUsuario);

export default userRouter;