const express= require("express")
const path=require("path")
// process.env.PORT is used for live deployment to heroku so heroku can assign a port number to identify a server.
const PORT = process.env.PORT || 3001

const app=express()

// added middleware browser (input firstname => "alex") -> server.js
//extended exact data from original after parsing.
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const fs =require("fs")


//api routes
app.get("/api/notes",(req,res)=> {

})

app.post("/api/notes",(req,res)=>{
    
})

//html routes
//http://localhost:3001/*
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index/html'))
})

app.use("/notes", ()=>{
    res.sendFile(err=>{
       path.join( _dirname , "./note.html")
    })
})


app.listen(PORT, ()=>{
    console.log("App is listening at PORT: HTTP://localhost:3001/" +PORT)
})