const express = require("express")
const routes = express.Router()
const teacher = require("./teachers")

routes.get("/", (req, res) => {
    return res.render("teachers/teachers")
})

routes.get("/teachers/create", (req, res) => {
    return res.render("teachers/create-teacher")
})

routes.post("/teachers/create", teacher.post )

module.exports = routes