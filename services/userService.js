import User from "../models/userSchema.js";

import bcrypt from "bcrypt";


const createUser=async(userData)=>{

    const {email,password}=userData;

    const existingUser=await User.findOne({email});

    if(existingUser){
        throw new Error("User already exists");
    }

    let hashedPassword=await bcrypt.hash(password,10);
    console.log(hashedPassword);

    const newUser=new User({email,hashedPassword});


    await newUser.save();

    return newUser;
}

export {

    createUser
}

