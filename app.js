// Import dependencies
const express = require("express");
const morgan = require("morgan");
const exchangeRouter = require("./routes/gift-exchange");
const {NotFoundError} = require("./utils/errors");

// Instantiate server application
const app = express();

// Essential middleware
app.use(express.json());  
app.use(morgan("tiny"));
app.use("/gift-exchange",exchangeRouter);

// Health endpoint
app.get("/",  (req, res, next) => {
    res.status(200).json({ping: "pong"})
})

// Will handle all 404 errors that weren't matched by a route
app.use((req, res, next) => {
    return next(new NotFoundError());
})

// Generic error handler - anything unhandled will be handled here
app.use((err, req, res, next) => {
    const status = err.status || 400;
    const message = err.message || "Something wen't wrong in the application";
    return res.status(status).json({
        error: {message, status}
    })
})


module.exports = app;