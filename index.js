const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.listen(3200, ()=>{
    console.log("app running on port 3200");
})

app.get("/test", (req,res)=>{
    res.send({status:"It's Working Great!"})
})