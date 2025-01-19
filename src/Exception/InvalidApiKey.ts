export class InvalidApiKeyException extends Error {
     constructor(message:string){
        super(message)
        this.name = "InvalidApiKeyException"
     }
}