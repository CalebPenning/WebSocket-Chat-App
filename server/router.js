const express = require("express")
const router = new express.Router()

router.get("/", (req, res, next) => {
    return res.send("hello")
})

module.exports = router