const axios = require('axios')
const {InvalidApiKeyException} = require("./Exception/InvalidApiKey")

export class Client{

    apiKey:String

    constructor(apiKey:String){

        axios.get("http://localhost:5000/api/testConnection",{headers:{
            'Content-Type':"application/json",
            'ApiKey':apiKey
        }}).then(()=>{
            console.log("Fine")
        })
        .catch((err:Error)=>{
            if(err.name === "AggregateError"){
                throw Error("No Internet Connection availaible.")
            }
            throw new InvalidApiKeyException("Provided api key is invalid.")
        })

        this.apiKey=apiKey  
    }
}