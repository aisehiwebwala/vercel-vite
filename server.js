const express = require('express')
const app = express()
const port = 3000
const path = require("path");

app.use(express.static(path.join(__dirname,"client","dist")));
app.get("/api",(req,res)=>{res.send("Hello World!!!")});
app.use("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"));
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))