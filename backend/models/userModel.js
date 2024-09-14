import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    nome:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    senha:{type:String,required:true},
    telefone:{type:String,default:""},
    cidade:{type:String,default:""},
    estado:{type:String,default:""},
    petsCadastrados: { type: [mongoose.Schema.Types.ObjectId], ref: 'Pet', default: [] },
    petsTenhoInteresse: { type: [mongoose.Schema.Types.ObjectId], ref: 'Pet', default: [] }
  
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;