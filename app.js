const express = require('express');
const log4js = require('log4js');

// load config
log4js.configure("./conf/log4js.json")
const logger = log4js.getLogger("test");

// serve config
const app = express(),
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("<h2 align='center'>Welcome Chatter System</h2>")
});

app.get('/json_example', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    a = [1, 3, 2]
    let res_data = { "a": a };
    // res.send(JSON.stringify(res_data));
    res.json(res_data);
})


app.listen(port, () => {
    logger.info('Listening on %d ...:', port);
    logger.debug('Please Visit Index:   http://%s:%d ...:', host, port);
})