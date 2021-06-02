const createString = () => {
    const randomString = Math.random().toString(36).substr(2, 10)
    const date_time = new Date()
    
    console.log(`${date_time.toString()}: ${randomString}`)

    setTimeout(createString, 5000)
}

createString()