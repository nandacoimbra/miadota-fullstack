import express from "express"
import cors from "cors"

//configuracao da app
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Api funcionando");
})

app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})