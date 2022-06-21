// Import dependencies
const express = require("express");
const morgan = require("morgan");
const exchangeRouter = require("./routes/gift-exchange");

// Instantiate server application
const app = express();

// Essential middleware
app.use(express.json());  
app.use(morgan("tiny"));
app.use("/gift-exchange",exchangeRouter);

// Health endpoint
app.get("/", async (req, res, next) => {
    res.status(200).json({ping: "pong"})
})





module.exports = app;