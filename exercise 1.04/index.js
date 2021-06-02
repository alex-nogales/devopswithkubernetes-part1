const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

const createString = () => {
    return Math.random().toString(36).substr(2, 10)
}

const createDate = () => {
    var date_time = new Date()
    return date_time.toString()
}

app.get("/", (require, response) => {
    const randomString = createString()
    response.json(randomString)
})


app.listen(PORT, () => {
    console.log(`The server is running at port ${PORT}`)
})