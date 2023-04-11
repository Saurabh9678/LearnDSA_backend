class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message); //super is the construtor from Error class
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = ErrorHandler