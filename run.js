const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
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
    var sh = exec('sh r.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
    
   res.sendStatus(200)
})



app.listen(port, () => console.log(` on port ${port}!`))