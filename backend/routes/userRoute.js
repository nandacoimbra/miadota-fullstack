import express from "express"
import { cadastraUsuario, loginUsuario, adicionaPetDeInteresse, listaPetsDeInteresse, buscaUsuarioPorId, obterUsuariosPorPetInteresse, atualizaUsuario } from '../controllers/userController.js'
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", cadastraUsuario);
userRouter.post("/login", loginUsuario);
userRouter.post("/interest", authMiddleware, adicionaPetDeInteresse);
userRouter.get("/pets-interesse", authMiddleware, listaPetsDeInteresse);
userRouter.get("/data", authMiddleware, buscaUsuarioPorId);
userRouter.put("/data", authMiddleware, atualizaUsuario);
userRouter.get("/interessados-pet/:idPet", obterUsuariosPorPetInteresse);

export default userRouter;