const express = require('express');

const workspace = require('../routers/workspace');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/workspace/', workspace);
}