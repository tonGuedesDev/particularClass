const express = require("express")
const routes = express.Router()

routes.get("/", (req, res) => {
    res.render("teachers")
})

module.exports = routes