require('dotenv').config()
console.log('Hello, World!');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/instagram", (req, res) => {
    res.send("This is instagram page")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})