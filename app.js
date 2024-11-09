import express from "express";
import authRoutes from "./routes/auth_routes.js"
import connectDb from "./config/database.js";
import dotenv from "dotenv";

const app=express();

app.use(express.json());

dotenv.config()
connectDb();

app.use('/auth',authRoutes);

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

