const ErrorHandler = require("../utils/errorHandler")

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message ||"Internal Server Error";


    //Wrong MongoDb id error (cast error)
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message,400);
    }

    //Mongoose Duplicate key Error
    if(err.code === 11000){
        err = new ErrorHandler(`Duplicate ${Object.keys(err.keyValue)} entered`, 400);
    }

    //Json Web Token error

    if(err.name === "JsonWebTokenError"){
        const message = `Json Web Token is invalid, Try again`;
        err = new ErrorHandler(message,400);
    }

    // JWT expired
    if(err.name === "TokenExpiredError"){
        const message = `Json Web Token is expired, Try again`;
        err = new ErrorHandler(message,400);
    }


    res.status(err.statusCode).json({
        success:false,
        message: err.message,
        error: err.stack
        
    })
}