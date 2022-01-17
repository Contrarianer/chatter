const express = require('express');
const {logger, db} = require("./conf/config");

// serve config
const app = express(),
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    logger.info(req.hostname + ' - - "GET ' + req.url + ' HTTP/1.1" 200 -')
    res.send("<h2 align='center'>Welcome Chatter System</h2>")
});

app.get('/example', (req, res) => {
    logger.info(req.hostname + ' - - "GET ' + req.url + ' HTTP/1.1" 200 -')
    res.setHeader('Content-Type', 'application/json');
    let a = [1, 3, 2]
    let res_data = {"a": a};
    res.json(res_data);
})


app.get('/get', (req, res) => {
    logger.info(req.hostname + ' - - "GET ' + req.url + ' HTTP/1.1" 200 -')
    const result = req.query.result;
    res.json({"result": result});
})


app.use(express.json()).listen(port, function () {
    logger.debug('Listening on %d ...:', port);
    logger.debug('Please Visit Index:   http://%s:%d ...:', host, port);
})
