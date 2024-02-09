require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send('This is home page.');
});

app.get('/login', (req, res) => {
  res.send('<h1>Hii Ajay this is your first program</h1>');
});

app.get('/sendJson', (req, res) => {
  res.json({ Id: 1, name: "Ajay Kumar" });
});

app.get("/error",(req,res)=>{
    res.status(500).json({ error: 'message' })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("start from now");
