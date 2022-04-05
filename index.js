import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile("public/index.html",{root:__dirname}) 
});

app.get('*',(req,res)=>{
    res.sendFile("public/404.html",{root:__dirname}) 
});
app.listen(port,()=>{
    console.log(`Server is running at ${hostname}:${port}`);
})

