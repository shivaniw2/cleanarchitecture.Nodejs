const express = require('express');

const workspace = require('../controller/workspaceController');
const user = require('../controller/userController');
const token = require('../controller/tokenController');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/workspace/', workspace);
    app.use('/api/user/', user);
    app.use('/api/auth/', token);
}