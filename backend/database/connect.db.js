import mongoose from "mongoose";

export const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.DBURL);
        console.log("the connection is sucessfull")
    } catch (error) {
        console.log("there was an error please try later", error)
    }
}