const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const fs = require("fs");

app.use(express.static(path.join(__dirname,"client","dist")));
app.get("/api",(req,res)=>{res.send("Hello World!!!")});
app.get("/dir",(req,res)=>{
    res.send(fs.readdirSync("/"));
})
app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"));
})
module.exports = app;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
