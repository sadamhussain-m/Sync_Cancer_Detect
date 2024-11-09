import mongoose from "mongoose";

const connectDb=async()=>{

    const dbConnectionString=process.env.DB_CONNECTION_STRING;
    console.log(dbConnectionString);
    try{
        await mongoose.connect(dbConnectionString)
    }
    catch(err){
        console.error('monogodb connection error',err)
    }
}

export default connectDb;
