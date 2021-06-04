const fs = require('fs')
const path = require('path')

const createString = () => {
    const dir = path.join('/','usr','src','app','files')
    const fileName = path.join(dir, 'test.txt')
    const randomString = Math.random().toString(36).substr(2, 10)
    const date_time = new Date()
    const stream = fs.createWriteStream(fileName, { flags: 'a' })
    
    stream.write(`${date_time.toString()}: ${randomString}` + '\n')
    setTimeout(createString, 5000)
}

createString()