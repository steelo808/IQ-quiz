import express from "express";
import postgres from "postgres";
import cors from "cors";
const app = express();
const port = 3004;

const sql = postgres({ database: 'quiz' });





app.use(express.json());
app.use(cors());
app.use(express.static("public"));


// app.get("/", (req,res)=>{
//     res.send("working");
// });

app.get("/questions", (req,res)=>{
sql`SELECT * FROM questions`.then((result)=>{
    res.json(result);
    console.log("server",result);
}).catch((error)=>{
    console.log(error);
})
//console.log data to see what it looks like
//organize data into an object
//send object to client
})


app.listen(port, () =>{
    console.log(`Working on port ${port}`);
})