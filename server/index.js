const express = require("express")
const http = require("http")
const path = require("path")

const PORT = process.env["HTTP_PORT"] || 8001

const app = express()

app.use(express.static(path.join(__dirname, "../public")))

http.createServer(app)
    .listen(PORT, () => console.log(`Server is listening on ${PORT}...`))