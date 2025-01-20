import axios from "axios"
import { NextFunction , Response, Request} from 'express';
class Fielder{
    apiKey:string
    constructor(apiKey:string){
        console.log("fielder started")
        this.apiKey=apiKey
    }

    async field(err:any,req:Request,res:Response,next:NextFunction){
        if (err) {
            console.log("fielder working")
            console.log(err.name); 
            console.log(err.cause); 
            console.log(err.stack); 
            res.status(500).send("Something went wrong!");
        } else {
            next(); 
        }
    }
    
}

export default Fielder