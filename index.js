const express = require("express");
const app = express()
const path =require('path')
app.use(express.static(path.join(__dirname + '/public/html')))

app.listen(3000, () =>{
    console.log("servidor en :3000")
})

