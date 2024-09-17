import express from "express"
import { logIn, register } from "../Contollers/auth.control.js"

 export const router = express.Router()

router.post("/login",logIn)
router.post("/register",register)

