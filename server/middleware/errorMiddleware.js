const errorMiddleware = (err, req, res, next) => {

    let statusCode = res.statusCode === 200
        ? 500
        : res.statusCode;

    let message = err.message;

    /*
    Mongo duplicate key error
    */
    if (err.code === 11000) {
        statusCode = 400;
        message = "Slot already booked";
    }

    /*
    Mongoose bad ObjectId
    */
    if (err.name === "CastError") {
        statusCode = 404;
        message = "Resource not found";
    }

    res.status(statusCode).json({
        success: false,
        message
    });
};

module.exports = errorMiddleware;