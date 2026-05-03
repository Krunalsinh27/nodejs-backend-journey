//using promise to handle the error in asyncHandler
const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
}


// using try-catch block in asyncHandler to catch the error and send the response to the client
/* const asyncyHandler = (func) => (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message 
        })
    }
} */



export {asyncyHandler};