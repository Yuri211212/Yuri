export default class RequestError extends Error{
    constructor({ status, message = "Something was wrong during request" }){
        super();
        this.status = status;
        this.message = message;
    }
}