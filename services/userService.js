import User from "../models/userSchema.js";

const createUser=async(userData)=>{

    const {email,password}=userData;

    const existingUser=await User.findOne({email});

    if(existingUser){
        throw new Error("User already exists");
    }

    const newUser=new User({email,password});

    await newUser.save();

    return newUser;
}

export {

    createUser
}

