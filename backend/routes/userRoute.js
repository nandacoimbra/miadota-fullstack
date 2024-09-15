import express from "express"
import { cadastraUsuario, loginUsuario, adicionaPetDeInteresse, listaPetsDeInteresse } from '../controllers/userController.js'
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", cadastraUsuario);
userRouter.post("/login", loginUsuario);
userRouter.post("/interest", authMiddleware, adicionaPetDeInteresse);
userRouter.get("/list", authMiddleware, listaPetsDeInteresse);

export default userRouter;