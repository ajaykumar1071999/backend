require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/home",(req,res)=>{
    res.send("This is home page.")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Hii Ajay this is your first program</h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
console.log("start from now")