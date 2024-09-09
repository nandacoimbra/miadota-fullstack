import express from "express"
import cors from "cors"
import { dbConnect } from "./config/db.js";
import petRouter from "./routes/petRoute.js";


//configuracao da app
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

//conexao com banco de dados
dbConnect();

//api endpoint
app.use("/pet", petRouter);
app.use("/images",express.static('uploads'));
app.get("/",(req,res)=>{
    res.send("Api funcionando");
})

app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})