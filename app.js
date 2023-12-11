const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res)=>{
    res.send("Jai Shree Ram")
})
app.listen(3000, ()=>{
    console.log("Server is Up and Running")
})
