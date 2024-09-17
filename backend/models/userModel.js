import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        requires:true,
    },
    confirm:{
        type:String,
        requires:true,
    }
},{timestamps:true})

const userModel = mongoose.model("Names", userSchema)

export default userModel;
