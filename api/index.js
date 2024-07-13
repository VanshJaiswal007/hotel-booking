import express from "express"
import env from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser"
import cors from "cors"
env.config();
const app=express()
app.use(cors());

const connect = async() => {
    try{
        await(mongoose.connect(process.env.MONGO))  
        console.log("connected to Mongodb")     
    }catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{
    const errorstatus= err.status || 500
    const errormessage=err.message || "something went wrong"
    return res.status(errorstatus).json({
        success:false,
        status:errorstatus,
        message:errormessage,
        stack: err.stack
    })
})

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(8000,()=>{
    connect();
    console.log("backend is connected")
})