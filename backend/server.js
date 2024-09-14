 import express from "express"
 import { config } from "dotenv";
import { connectDb } from "./database/connect.db.js";
import { router } from "./Routes/auth.routes.js";

 config()

 const PORT = process.env.PORT || 5000

 const app = express();
 app.use(express.json())

 app.use("/auth", router)

 app.listen(PORT,()=>{
    console.log(`the server is up and running ${PORT}`)
    connectDb()
 })