import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"

export const register = async(req, res) => {
    try {
        const userDetails = req.body;

        const existingUser = await userModel.findOne({email: userDetails.email});
    
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
        if(!user)
        {
            return res.send({message:"there is no user with that email"})
        }
        const match = await bcrypt.compare(password,user.password)

        if(match)
        {
            res.send({message:"log in was sucessfull"})
        }
            
    } catch (error) {
        console.log(error)
    }
}
