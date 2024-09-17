import userModel from "../models/userModel.js"
import bcrypt from "bcryptjs"

export const register = async(req, res) =>{
    try {
        const userDetails = req.body

        const users = await userModel.findOne({email:userDetails.email}) //find will return a promise 
    
        if(!users)
            {

                if(userDetails.password == userDetails.confirm){
                    
                    const salt = await bcrypt.genSalt(10)
                    const hpass = await bcrypt.hash(userDetails.password, salt)
                    userDetails.password = hpass;
                    const user = await userModel.create(userDetails)
                    console.log(user)
                    res.send({message:"the user is created sucessfully"})


                }
                return res.send({message:"the passwords dont match"})
            }
    
    } catch (error) {
        
        console.log(error)
    }
}


export const logIn = (req,res) =>{
    const {name, email} = req.body

    if (!name & !email){
        return res.send({message :"this are a must felds"})
    }

    console.log("this is the log in portal")
    res.send({message:"log in response"})

}

