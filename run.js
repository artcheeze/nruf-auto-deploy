const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const shell = exec('ls');
var cors = require('cors');
port = 6000;

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));


app.post('/hooking', (req, res) => {
    shell.stdout.on('data', function(data){
        console.log(data);
    });
   res.sendStatus(200)
})



app.listen(port, () => console.log(` on port ${port}!`))