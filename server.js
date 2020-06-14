import express from 'express';
import bodyParser from 'body-parser'
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname,'/build')));
app.use(bodyParser.json());

app.get('/hello',(req,res)=> res.send("hello"));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(5000, ()=> console.log('Listening to port 8000'));
