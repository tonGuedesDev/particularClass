const express = require('express')

const server = express()
const routes = require("./routes/routes")
const nunjucks = require('nunjucks')

nunjucks.configure("view ")

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))
server.use(routes)

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server
})

server.listen(9999, () => {
    console.log('server running')
})