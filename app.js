import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'/build')));


// for server
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})
app.listen(8000, () => console.log('Listening on port 8000'));
// to star
