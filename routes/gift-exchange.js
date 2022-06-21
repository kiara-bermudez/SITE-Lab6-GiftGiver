const express = require("express");
const router = express.Router();

router.post("/pairs", async (req, res, next) => {
    console.log(req.body);

    res.status(200).json({names:"pairs"});
})

router.post("/traditional", async (req, res, next) => {
    console.log(req.body);

    res.status(200).json({names:"traditional"});
})

module.exports = router;