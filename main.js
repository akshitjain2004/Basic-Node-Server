const express= require("express");

const app = express();
const PORT  = process.env.port ||8000
app.get("/", (req,res) =>{
    return res.json({message:"Hey I am node js container"})
})

app.listen(PORT, ()=>console.log(`server is started on Port number ${PORT}`))