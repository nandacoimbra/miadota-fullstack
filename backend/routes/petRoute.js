import express from 'express'
import { addPet, alteraStatusPet, filtraPets, listaPets, removePet } from '../controllers/petController.js'
//para o sistema de armazenamento de imagem
import multer from "multer"
import authMiddleware from '../middleware/auth.js';

const petRouter = express.Router();

// armazenamento de imagens dos pets na pasta uploads
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        //ao add uma nova imagem de pet, a data e hora atual 
        //serão add no nome original do arquivo, criando um nome único
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

petRouter.post("/add",authMiddleware, upload.single("imagem"), addPet);
petRouter.get("/list", listaPets);
petRouter.delete("/remove", removePet);
petRouter.patch("/status/:id", alteraStatusPet);
petRouter.get("/filter", filtraPets);


export default petRouter;