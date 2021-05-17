const express = require('express');

const workspace = require('../routers/workspace');
const user = require('./../routers/user');
const token = require('./../routers/token');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/workspace/', workspace);
    app.use('/api/user/', user);
    app.use('/api/auth/', token);
}