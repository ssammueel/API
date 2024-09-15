export const logIn = (req,res) =>{
    // remember here we are getting data from the body ie the user will provide his name and his email adress 

    const {name, email} = req.body

    if (!name & !email){
        return res.send({message :"this are a must felds"})
    }

    console.log("this is the log in portal")
    res.send("log in response")

}

export const register = (req, res) =>{

    // since the user is to give much date there is no need to destructure 
    const {name, email, phoneNummer} = req.body

    try {

        if(!name & !email){
            res.send({message:"the name and the email area a must field"})
        }
        

        
    } catch (error) {
        
    }
}
