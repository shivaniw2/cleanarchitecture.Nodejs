
const express = require('express');
const app = express();

//bootstrap
require('./src/API/bootstrap/routes')(app);
require('./src/API/bootstrap/logger');
require('./src/infrastucture/persistence/mongo/config/configuration')();
require('./../cleanarchitecture.Nodejs/src/API/bootstrap/service-locator')();
require('./src/infrastucture/persistence/bootstrap/service-locator')();

const server = app.listen(3000, () => console.log('Listening…'));

module.exports = server;
