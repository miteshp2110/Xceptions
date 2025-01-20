import express from "express"
import { NextFunction , Response, Request} from 'express';
const app = express()


const {Client} = require("./Client")

const client = new Client("RFCL1sy36SQE")

app.get("/",(req,res,next)=>{
    const arr = [1,2,3]

    try{
        console.log("Start")
        throw new Error("some error")
        console.log("end")

    }
    catch(err){
        console.log("catch")
        next(err)
    }
})

client.connect().then((fielder:any)=>{
    app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
        fielder.field(err,req,res,next)
    })
}).catch((err:any)=>{
    console.log("errrr")
})

app.listen(6789,()=>{
    console.log("6789")
})
