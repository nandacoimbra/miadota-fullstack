import express from "express"
import { cadastraUsuario, loginUsuario, adicionaPetDeInteresse, listaPetsDeInteresse, buscaUsuarioPorId, obterUsuariosPorPetInteresse } from '../controllers/userController.js'
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", cadastraUsuario);
userRouter.post("/login", loginUsuario);
userRouter.post("/interest", authMiddleware, adicionaPetDeInteresse);
userRouter.get("/pets-interesse", authMiddleware, listaPetsDeInteresse);
userRouter.get("/:id", authMiddleware, buscaUsuarioPorId);
userRouter.get("/interessados-pet/:idPet", obterUsuariosPorPetInteresse);

export default userRouter;