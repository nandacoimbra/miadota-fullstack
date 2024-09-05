import express from "express"
import cors from "cors"
import { dbConnect } from "./config/db.js";

//configuracao da app
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

//conexao com banco de dados
dbConnect();

app.get("/",(req,res)=>{
    res.send("Api funcionando");
})

app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})