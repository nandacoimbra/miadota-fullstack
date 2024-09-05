import mongoose from "mongoose"
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config({ path: '../.env' });


dotenv.config();

export const dbConnect = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}`).then(() => console.log("DB Connected!"));
}