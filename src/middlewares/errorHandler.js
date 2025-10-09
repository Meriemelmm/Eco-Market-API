const errorHandler=(err,req,res,next)=>{
   


    const statusCode = err.status || 500; 
    const message = err.message || 'Erreur serveur';

    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message
    });

}
module.exports=errorHandler;
