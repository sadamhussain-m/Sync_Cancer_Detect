import {createUser} from "../services/userService.js";

const registerUser=async(req,res)=>{

    try {
       const user =await createUser(req.body);

       res.status(201).json({message:'user registered successfully',user})
    } catch (error) {
        console.error(error);
        res.status(500).json({error:error});
    }
}

export default registerUser;