const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var shell = require('shelljs');
port = 6000;

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.post('/hooking', (req, res) => {
    shell.exec('cd .. && cd nruf-backend && screen -d -m node facade.js')
   res.sendStatus(200)
})



app.listen(port, () => console.log(` on port ${port}!`))