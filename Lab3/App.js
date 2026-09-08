import http from "http";
//import * as teams from 'teams.js'
import { getAllTeams } from  "./teams.js";

const PORT = 5000

const sendJson = (res , statusCode, data) => {
    res.writeHead(statusCode,{"content-type":"application/json"});
    res.end(data === undefined ? "" : JSON.stringify(data));
};

const parseJSONBody = (req) => {
     return new Promise((resolve,reject) => {
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk.toString();
        });
        req.on("end" , () =>{
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch(error) {
                reject(error);
            }
        });
    });
};

const server = http.createServer((req,res) => {

});

server.listen(5000, () => {
    console.log("SIH Server is running at ",PORT);
});