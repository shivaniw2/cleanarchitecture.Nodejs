
require('express-async-errors');
const winston = require('winston');

const logger = winston.createLogger({
        transports: [
            new winston.transports.File({ filename: 'log.log' }),
        ]
});

module.exports = {logger};  