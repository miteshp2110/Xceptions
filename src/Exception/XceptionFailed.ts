export class XceptionFailed extends Error {
    constructor(message:string){
       super(message)
       this.name = "XceptionFailed"
    }
}