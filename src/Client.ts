import axios from "axios"
import { InvalidApiKeyException } from "./Exception/InvalidApiKey"
import Fielder from "./Fielder"

export class Client{

    apiKey:string

    constructor(apiKey:string){
        this.apiKey=apiKey  
    }

    async connect(): Promise<Fielder> {
        try {
          await axios.get("https://xceptions.tech/service/api/testConnection", {
            headers: {
              'Content-Type': "application/json",
              'ApiKey': this.apiKey,
            },
          });
          return new Fielder(this.apiKey);
        } catch (err: any) {
          if (err.isAxiosError && err.response) {
            throw new InvalidApiKeyException("Provided API key is invalid.");
          } else if (err.name === "AggregateError") {
            throw new Error("No Internet Connection available.");
          }
          throw err;
        }
      }
}
