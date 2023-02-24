const errorHandler = ('err, req, res,next') => {

    const errStatus = err.statusCose || 500;
    const message = err.message || "something went wrong";

    res.status(errStatus).send({
        succes:false,
        status: errStatus,
        message: message,
        stack: process.env.NODE_ENV
    })

}

module.exports = errorHandler;