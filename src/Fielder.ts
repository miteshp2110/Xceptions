import axios from "axios"
import { NextFunction , Response, Request} from 'express';
import { XceptionFailed } from "./Exception/XceptionFailed";
class Fielder{
    apiKey:string
    constructor(apiKey:string){
        this.apiKey=apiKey
    }

    async field(err:any,req:Request,res:Response,next:NextFunction){
        if (err) {
            
            var data = {
                "data": {
                  "exception": {
                    "stack":err.stack,
                    "name":err.name || "Undefined",
                    "cause":err.cause || "Undefined"
                  },
                  "apiKey": this.apiKey
                }
              }


            axios.post("http://localhost:5000/api/addException",data)
            .catch(()=>{
                throw new XceptionFailed("Xception failed to report the error.")
            })
            
            res.status(500).send("Something went wrong!");
        } else {
            next(); 
        }
    }
    
}

export default Fielder