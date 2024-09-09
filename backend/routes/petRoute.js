import express from 'express'
import { addPet, listaPets, removePet } from '../controllers/petController.js'
//para o sistema de armazenamento de imagem
import multer from "multer"

const petRouter = express.Router();

// armazenamento de imagens dos pets na pasta uploads
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{
        //ao add uma nova imagem de pet, a data e hora atual 
        //serão add no nome original do arquivo, criando um nome único
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

petRouter.post("/add", upload.single("image"),addPet);
petRouter.get("/list",listaPets);
petRouter.delete("/remove",removePet);


export default petRouter;