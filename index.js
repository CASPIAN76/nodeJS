const express = require('express')
const app =express()
const path=require('path');
const dirPath = path.join(__dirname,'public')

app.set('view engine', 'ejs')

app.get("/profile", (req, res)=>{
    const data ={
        name:"Nilesh",
        age:30,
        email:"thakren76@gmail.com"
    }
    res.render('profile',{data} )
})

app.get("", (req, res)=>{
    res.sendFile(`${dirPath}/index.html`)
})
app.get("/co", (req,res)=>{
    res.sendFile(`${dirPath}/contact.html`)
})
app.get("/ab", (req,res)=>{
    res.sendFile(`${dirPath}/about.html`)
})
app.get("*", (req,res)=>{
    res.sendFile(`${dirPath}/page.html`)
})

app.listen(4000)

