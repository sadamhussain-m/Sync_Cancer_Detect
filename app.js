import express from "express";
import authRoutes from "./routes/auth_routes.js"
import connectDb from "./config/database.js";

const app=express();

app.use(express.json());

connectDb();

app.use('/auth',authRoutes);

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

