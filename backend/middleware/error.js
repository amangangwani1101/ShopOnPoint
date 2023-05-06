const ErrorHandler = require('../utils/errorhander');



module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // MongoDB Cast Error ---- Invalid Product ID
    if(err.name==="CastError"){
        const message = `Invalid Id: ${err.path}`;
        err = new ErrorHandler(message,400);
    }

    // Mongoose Duplicate Key Error
    if(err.code===11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message,400);
    }

    // Wrong JSON Web Token
    if(err.name==="JsonWebTokenError"){
        const message = `Json Web Token Is Invalid ,Try Again`;
        err = new ErrorHandler(message,400);
    }

    // JWT Expire Error 
    if(err.name==="TokenExpiredError"){
        const message = `Json Web Token Is Expired ,Try Again`;
        err = new ErrorHandler(message,400);
    }

    res.status(401).json({
        success:false,
        message:err.message,
    });
};