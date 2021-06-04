const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

const PORT = process.env.PORT || 3000

const dir = path.join('/','usr','src','app','files')
const fileName = path.join(dir, 'test.txt')

app.get("/", (req, res) => {
    const readStream = fs.createReadStream(fileName)
    readStream.on('open', () =>{
        readStream.pipe(res)
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})