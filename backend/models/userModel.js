import mongoose from "mongoose"

const useSchema = mongoose.Schema({
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
})