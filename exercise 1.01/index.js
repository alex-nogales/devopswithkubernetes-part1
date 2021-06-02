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

setInterval(() => {
    console.log(createDate(), createString())
}, 5000)
