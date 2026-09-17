import express from 'express'
import path from 'path'
import { fileURLToPath } from "node:url";

const port=3000;
const app = express();

const filename = fileURLToPath(import.meta.url);    //reference of root folder
const dirname = path.dirname(filename)  // store the address of project folder

app.get("/",(req,res)=>{
    res.sendFile(path.join(dirname,"public","index.html"));
    //projectfolder/public/index.html
});

app.get("/about",(req,res)=>{
    res.sendFile(path.join(dirname,"public","about.html"))
});

app.get("/enquiry",(req,res)=>{
    res.sendFile(path.join(dirname,"public","enquiry.html"))
});

app.listen(port , () => console.log("prg1 is running at",port))