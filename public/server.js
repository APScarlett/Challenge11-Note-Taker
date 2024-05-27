const express= require("express")
const path=require("path")
// process.env.PORT is used for live deployment to heroku so heroku can assign a port number to identify a server.
const PORT = process.env.PORT || 3001
const app=express()
const fs =require("fs")

// added middleware browser (input firstname => "alex") -> server.js
//extended exact data from original after parsing.
app.use(express.json())
app.use(express.urlencoded({extended:true}))




//api routes
app.get("/api/notes",(req,res)=> {
    fs.readFile("./db/db.json")
})

app.post("/api/notes",(req,res)=>{
    
})

//html routes
//http://localhost:3001/*
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index/html'))
})

app.get("/notes", ()=>{
   fs.readFile("./assets/db/db.json",${color})
})


app.listen(PORT, ()=>{
    console.log("App is listening at PORT: HTTP://localhost:3001/" +PORT)
})