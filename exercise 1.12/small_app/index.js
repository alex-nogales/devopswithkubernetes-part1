const express = require("express")
const app = express()
const path = require('path')
const fs = require('fs')
const axios = require('axios')

const PORT = process.env.PORT || 3000
const dir = path.join('/', 'usr', 'src', 'app', 'files')
// const dir = path.join('/', 'User', 'alex.nogales', 'Documents', 'DevOpsWithKubernetes','small_app','images')
const imgPath = path.join(dir, 'image.jpg')

const fileAlreadyExists = async (file) =>
  new Promise((res) => {
    fs.stat(file, (err, stats) => {
      if (err || !stats) return res(false)
      return res(true)
    })
  })

const cachedImage = async () => {
    const randomNumber = Math.floor(Math.random() * 1000)
    console.log(imgPath)
    if (!(await fileAlreadyExists(imgPath))) {
        await new Promise((res) => fs.mkdir(dir, (err) => res()))
        const response = await axios.get(`https://picsum.photos/${randomNumber}`, { responseType: "stream" })
        console.log('Im response and i exist', response)
        response.data.pipe(fs.createWriteStream(imgPath))
    }
}
cachedImage()

app.get("/", (req, res) => {
    const randomString = Math.random().toString(36).substr(2, 10)
    const date_time = new Date()
    const dtime = date_time.toString()
    res.json(`${dtime}: ${randomString} This is also a cool test`)
})

app.get("/api/dailyimage", (req, res) => {
    res.sendFile(imgPath)
})


app.listen(PORT, () => {
    console.log(`The server is running at port: ${PORT}`)
})