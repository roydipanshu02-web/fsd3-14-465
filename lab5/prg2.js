import express from 'express'
import path from 'path'
import { fileURLToPath } from "node:url";

const app = express();
const port = 3000;

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "frontend"), { extensions: ['html'] }));

app.use((req,res)=>{
    res.status(404).send("Resource not Found");
});

app.listen(port,()=> console.log("prg2 is running at",port));