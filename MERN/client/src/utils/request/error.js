export default class RequestError extends Error{
    constructor({ status, message = "Что-то пошло не так во время запроса" }){
        super();
        this.status = status;
        this.message = message;
    }
}