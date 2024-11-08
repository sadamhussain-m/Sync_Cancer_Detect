import mongoose from "mongoose";

const connectDb=async()=>{

    try{
        await mongoose.connect('mongodb+srv://msadamdev:2pbEvdPtgHV0QaUq@sync.xxplv.mongodb.net/')
    }
    catch(err){
        console.error('monogodb connection error',err)
    }
}

export default connectDb;
