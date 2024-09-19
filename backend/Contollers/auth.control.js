import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async(req, res) => {
    try {
        const userDetails = req.body;

        //check if the user we want to register is oready in the database
        const existingUser = await userModel.findOne({email: userDetails.email});
        //if the user isnt in the database then we have to make a way to register him in the database
        if (!existingUser) {
            if (userDetails.password === userDetails.confirm) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(userDetails.password, salt);
                userDetails.password = hashedPassword;                
                const newUser = await userModel.create(userDetails);
                console.log(newUser);
                return res.status(201).send({message: "User created successfully"});

            } else {
                return res.status(400).send({message: "Passwords do not match"});

            }
        } else {
            return res.status(400).send({message: "Email already in use"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Server error"});
    }
}

export const logIn = async(req, res) => {
    
    try {
        const {password, email} = req.body

        if (!email & !password)
        {
            return res.send({message:"the filds are a must"})
        }


        const user = await userModel.findOne({email})

        if(user)
        {
            const compare = await bcrypt.compare(password, user.password)
            if(compare)
            {
               
                const token = await jwt.sign({email:user.email}, "SAM",{expiresIn:'1h'})
                return res.send({message:"log in sucessful" ,token:token})

            }
            else{
                return res.send({message:"wrong password"})
            }
        }else{
            return res.send({message:"wrong email"})
        }

        
        
    } catch (error) {
        console.log(error)
    }
}
