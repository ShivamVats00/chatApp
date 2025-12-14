import express from "express";

const app = express();
const port = 3001;

app.use("/signup", (req,res)=>{
    res.send("Hi there")
});
app.use("/signin", (req,res)=>{
    res.send("Hi there")
});
app.use("/chat", (req,res)=>{
    res.send("Hi there")
});

app.listen(port, ()=>{console.log(`Server is running on the port ${port}`)})