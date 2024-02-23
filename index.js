// what is middeleware = this are function   is used to handle req, and responce of routing 

const express = require('express')
const app = express()
 const filter= require('./middlewere')
const rout = express.Router()

//app.use(filter)

rout.use(filter)
app.get("/profile", (req,res)=>{
    res.send(" welcome profile")
})

app.get("/login",(req,res)=>{
    res.send("welcome login")
})

rout.get("/co", (req,res)=>{
    res.send(`<h1>contact us page</h1>`)
})

rout.get("/ab", (req,res)=>{
    res.send(`<h1>about us page</h1>`)
})
rout.get("/o", (req,res)=>{
    res.send(`<h1>o us page</h1>`)
})
app.use("/", rout)
app.listen(2000)