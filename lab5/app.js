import express from "express";

const app = express();

app.get("/",(req,res) => {
    res.send("<h1>Hello Express</h1>");
});

app.listen(3000,() => console.log("Server is running")); 

app.get('/about',(req,res)=>{
    res.send("<i><h1>WE are FSD Developer</h1></i>")
});

app.post('/login',(req,res)=>{
    res.send({msg:'user login'})
});

app.put('/user/update/1',(req,res)=>{
    res.send({msg:'user update'})
});

app.delete('/users/1',(req,res)=>{
    res.send({msg:'remove user 1'})
});

app.use((req,res)=>{
    res.status(404).send("Not Found")
});


//server.on("error",(err)=>{
//    con.error("server listen error: ",err);
//});